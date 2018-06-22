/*!
* d3-node-editor v0.7.3
* (c) 2018 Vitaliy Stoliarov
* Released under the MIT License.
*/
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var ComponentWorker = function ComponentWorker(name, props) {
    classCallCheck(this, ComponentWorker);

    this.name = name;
    this.worker = props.worker;
};

var Utils = function () {
    function Utils() {
        classCallCheck(this, Utils);
    }

    createClass(Utils, null, [{
        key: 'nodesBBox',
        value: function nodesBBox(nodes) {
            var min = function min(arr) {
                return Math.min.apply(Math, toConsumableArray(arr));
            };
            var max = function max(arr) {
                return Math.max.apply(Math, toConsumableArray(arr));
            };

            var left = min(nodes.map(function (node) {
                return node.position[0];
            }));
            var top = min(nodes.map(function (node) {
                return node.position[1];
            }));
            var right = max(nodes.map(function (node) {
                return node.position[0] + node.width;
            }));
            var bottom = max(nodes.map(function (node) {
                return node.position[1] + node.height;
            }));

            return {
                left: left,
                right: right,
                top: top,
                bottom: bottom,
                width: Math.abs(left - right),
                height: Math.abs(top - bottom),
                getCenter: function getCenter() {
                    return [(left + right) / 2, (top + bottom) / 2];
                }
            };
        }
    }, {
        key: 'isValidData',
        value: function isValidData(data) {
            return typeof data.id === 'string' && this.isValidId(data.id) && data.nodes instanceof Object && !(data.nodes instanceof Array) && (!data.groups || data.groups instanceof Object);
        }
    }, {
        key: 'isValidId',
        value: function isValidId(id) {
            return (/^[\w-]{3,}@[0-9]+\.[0-9]+\.[0-9]+$/.test(id)
            );
        }
    }, {
        key: 'validate',
        value: function validate(id, data) {
            var msg = '';
            var id1 = id.split('@');
            var id2 = data.id.split('@');

            if (!this.isValidData(data)) msg += 'Data is not suitable. ';
            if (id !== data.id) msg += 'IDs not equal. ';
            if (id1[0] !== id2[0]) msg += 'Names don\'t match. ';
            if (id1[1] !== id2[1]) msg += 'Versions don\'t match';

            return { success: msg === '', msg: msg };
        }
    }]);
    return Utils;
}();

var State = { AVALIABLE: 0, PROCESSED: 1, ABORT: 2 };

var Engine = function () {
    function Engine(id, components) {
        classCallCheck(this, Engine);

        if (!(typeof id === 'string')) {
            throw new TypeError('Value of argument "id" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(id));
        }

        if (!(Array.isArray(components) && components.every(function (item) {
            return item instanceof ComponentWorker;
        }))) {
            throw new TypeError('Value of argument "components" violates contract.\n\nExpected:\nComponentWorker[]\n\nGot:\n' + _inspect(components));
        }

        if (!Utils.isValidId(id)) throw new Error('ID should be valid to name@0.1.0 format');

        this.id = id;
        this.components = components;
        this.args = [];
        this.data = null;
        this.state = State.AVALIABLE;
        this.onAbort = function () {};
        this.onError = function (message, data) {
            console.error(message, data);
        };
    }

    createClass(Engine, [{
        key: 'clone',
        value: function clone() {
            return new Engine(this.id, this.components);
        }
    }, {
        key: 'throwError',
        value: function throwError(message) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return regeneratorRuntime.async(function throwError$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return regeneratorRuntime.awrap(this.abort());

                        case 2:
                            this.onError(message, data);
                            this.processDone();

                            return _context.abrupt('return', 'error');

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'extractInputNodes',
        value: function extractInputNodes(node, nodes) {
            return node.inputs.reduce(function (a, inp) {
                return [].concat(toConsumableArray(a), toConsumableArray((inp.connections || []).reduce(function (b, c) {
                    return [].concat(toConsumableArray(b), [nodes[c.node]]);
                }, [])));
            }, []);
        }
    }, {
        key: 'detectRecursions',
        value: function detectRecursions(nodes) {
            var _this = this;

            var nodesArr = Object.keys(nodes).map(function (id) {
                return nodes[id];
            });
            var findSelf = function findSelf(node, inputNodes) {
                if (inputNodes.some(function (n) {
                    return n === node;
                })) return node;

                for (var i = 0; i < inputNodes.length; i++) {
                    if (findSelf(node, _this.extractInputNodes(inputNodes[i], nodes))) return node;
                }

                return null;
            };

            return nodesArr.map(function (node) {
                return findSelf(node, _this.extractInputNodes(node, nodes));
            }).filter(function (r) {
                return r !== null;
            });
        }
    }, {
        key: 'processStart',
        value: function processStart() {
            if (this.state === State.AVALIABLE) {
                this.state = State.PROCESSED;
                return true;
            }

            if (this.state === State.ABORT) {
                return false;
            }

            console.warn('The process is busy and has not been restarted.\n                Use abort() to force it to complete');
            return false;
        }
    }, {
        key: 'processDone',
        value: function processDone() {
            var success = this.state !== State.ABORT;

            this.state = State.AVALIABLE;

            if (!success) {
                this.onAbort();
                this.onAbort = function () {};
            }

            return success;
        }
    }, {
        key: 'abort',
        value: function abort() {
            var _this2 = this;

            return regeneratorRuntime.async(function abort$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            return _context2.abrupt('return', new Promise(function (ret) {
                                if (_this2.state === State.PROCESSED) {
                                    _this2.state = State.ABORT;
                                    _this2.onAbort = ret;
                                } else if (_this2.state === State.ABORT) {
                                    _this2.onAbort();
                                    _this2.onAbort = ret;
                                } else ret();
                            }));

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'lock',
        value: function lock(node) {
            return regeneratorRuntime.async(function lock$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            return _context3.abrupt('return', new Promise(function (res) {
                                node.unlockPool = node.unlockPool || [];
                                if (node.busy && !node.outputData) node.unlockPool.push(res);else res();

                                node.busy = true;
                            }));

                        case 1:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'unlock',
        value: function unlock(node) {
            node.unlockPool.forEach(function (a) {
                return a();
            });
            node.unlockPool = [];
            node.busy = false;
        }
    }, {
        key: 'extractInputData',
        value: function extractInputData(node) {
            var _this3 = this;

            return regeneratorRuntime.async(function extractInputData$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return regeneratorRuntime.awrap(Promise.all(node.inputs.map(function _callee2(input) {
                                var conns, connData;
                                return regeneratorRuntime.async(function _callee2$(_context5) {
                                    while (1) {
                                        switch (_context5.prev = _context5.next) {
                                            case 0:
                                                conns = input.connections;
                                                _context5.next = 3;
                                                return regeneratorRuntime.awrap(Promise.all(conns.map(function _callee(c) {
                                                    var prevNode, outputs;
                                                    return regeneratorRuntime.async(function _callee$(_context4) {
                                                        while (1) {
                                                            switch (_context4.prev = _context4.next) {
                                                                case 0:
                                                                    prevNode = _this3.data.nodes[c.node];
                                                                    _context4.next = 3;
                                                                    return regeneratorRuntime.awrap(_this3.processNode(prevNode));

                                                                case 3:
                                                                    outputs = _context4.sent;

                                                                    if (outputs) {
                                                                        _context4.next = 8;
                                                                        break;
                                                                    }

                                                                    _this3.abort();
                                                                    _context4.next = 9;
                                                                    break;

                                                                case 8:
                                                                    return _context4.abrupt('return', outputs[c.output]);

                                                                case 9:
                                                                case 'end':
                                                                    return _context4.stop();
                                                            }
                                                        }
                                                    }, null, _this3);
                                                })));

                                            case 3:
                                                connData = _context5.sent;
                                                return _context5.abrupt('return', connData);

                                            case 5:
                                            case 'end':
                                                return _context5.stop();
                                        }
                                    }
                                }, null, _this3);
                            })));

                        case 2:
                            return _context6.abrupt('return', _context6.sent);

                        case 3:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'processWorker',
        value: function processWorker(node) {
            var inputData, component, outputData;
            return regeneratorRuntime.async(function processWorker$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return regeneratorRuntime.awrap(this.extractInputData(node));

                        case 2:
                            inputData = _context7.sent;
                            component = this.components.find(function (c) {
                                return c.name === node.title;
                            });
                            outputData = node.outputs.map(function () {
                                return null;
                            });
                            _context7.prev = 5;
                            _context7.next = 8;
                            return regeneratorRuntime.awrap(component.worker.apply(component, [node, inputData, outputData].concat(toConsumableArray(this.args))));

                        case 8:
                            _context7.next = 14;
                            break;

                        case 10:
                            _context7.prev = 10;
                            _context7.t0 = _context7['catch'](5);

                            this.abort();
                            console.warn(_context7.t0);

                        case 14:
                            return _context7.abrupt('return', outputData);

                        case 15:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, null, this, [[5, 10]]);
        }
    }, {
        key: 'processNode',
        value: function processNode(node) {
            return regeneratorRuntime.async(function processNode$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            if (!(this.state === State.ABORT || !node)) {
                                _context8.next = 2;
                                break;
                            }

                            return _context8.abrupt('return', null);

                        case 2:
                            _context8.next = 4;
                            return regeneratorRuntime.awrap(this.lock(node));

                        case 4:

                            if (!node.outputData) {
                                node.outputData = this.processWorker(node);
                            }

                            this.unlock(node);
                            return _context8.abrupt('return', node.outputData);

                        case 7:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'forwardProcess',
        value: function forwardProcess(node) {
            var _this4 = this;

            return regeneratorRuntime.async(function forwardProcess$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            if (!(this.state === State.ABORT)) {
                                _context11.next = 2;
                                break;
                            }

                            return _context11.abrupt('return', null);

                        case 2:
                            _context11.next = 4;
                            return regeneratorRuntime.awrap(Promise.all(node.outputs.map(function _callee4(output) {
                                return regeneratorRuntime.async(function _callee4$(_context10) {
                                    while (1) {
                                        switch (_context10.prev = _context10.next) {
                                            case 0:
                                                _context10.next = 2;
                                                return regeneratorRuntime.awrap(Promise.all(output.connections.map(function _callee3(c) {
                                                    var nextNode;
                                                    return regeneratorRuntime.async(function _callee3$(_context9) {
                                                        while (1) {
                                                            switch (_context9.prev = _context9.next) {
                                                                case 0:
                                                                    nextNode = _this4.data.nodes[c.node];
                                                                    _context9.next = 3;
                                                                    return regeneratorRuntime.awrap(_this4.processNode(nextNode));

                                                                case 3:
                                                                    _context9.next = 5;
                                                                    return regeneratorRuntime.awrap(_this4.forwardProcess(nextNode));

                                                                case 5:
                                                                case 'end':
                                                                    return _context9.stop();
                                                            }
                                                        }
                                                    }, null, _this4);
                                                })));

                                            case 2:
                                                return _context10.abrupt('return', _context10.sent);

                                            case 3:
                                            case 'end':
                                                return _context10.stop();
                                        }
                                    }
                                }, null, _this4);
                            })));

                        case 4:
                            return _context11.abrupt('return', _context11.sent);

                        case 5:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'copy',
        value: function copy(data) {
            data = Object.assign({}, data);
            data.nodes = Object.assign({}, data.nodes);

            Object.keys(data.nodes).forEach(function (key) {
                data.nodes[key] = Object.assign({}, data.nodes[key]);
            });
            return data;
        }
    }, {
        key: 'validate',
        value: function validate(data) {
            var checking, recurentNodes;
            return regeneratorRuntime.async(function validate$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            checking = Utils.validate(this.id, data);

                            if (checking.success) {
                                _context12.next = 5;
                                break;
                            }

                            _context12.next = 4;
                            return regeneratorRuntime.awrap(this.throwError(checking.msg));

                        case 4:
                            return _context12.abrupt('return', _context12.sent);

                        case 5:
                            recurentNodes = this.detectRecursions(data.nodes);

                            if (!(recurentNodes.length > 0)) {
                                _context12.next = 10;
                                break;
                            }

                            _context12.next = 9;
                            return regeneratorRuntime.awrap(this.throwError('Recursion detected', recurentNodes));

                        case 9:
                            return _context12.abrupt('return', _context12.sent);

                        case 10:
                            return _context12.abrupt('return', true);

                        case 11:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'processStartNode',
        value: function processStartNode(id) {
            var startNode;
            return regeneratorRuntime.async(function processStartNode$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            if (!id) {
                                _context13.next = 10;
                                break;
                            }

                            startNode = this.data.nodes[id];

                            if (startNode) {
                                _context13.next = 6;
                                break;
                            }

                            _context13.next = 5;
                            return regeneratorRuntime.awrap(this.throwError('Node with such id not found'));

                        case 5:
                            return _context13.abrupt('return', _context13.sent);

                        case 6:
                            _context13.next = 8;
                            return regeneratorRuntime.awrap(this.processNode(startNode));

                        case 8:
                            _context13.next = 10;
                            return regeneratorRuntime.awrap(this.forwardProcess(startNode));

                        case 10:
                        case 'end':
                            return _context13.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'processUnreachable',
        value: function processUnreachable() {
            var i, node;
            return regeneratorRuntime.async(function processUnreachable$(_context14) {
                while (1) {
                    switch (_context14.prev = _context14.next) {
                        case 0:
                            _context14.t0 = regeneratorRuntime.keys(this.data.nodes);

                        case 1:
                            if ((_context14.t1 = _context14.t0()).done) {
                                _context14.next = 11;
                                break;
                            }

                            i = _context14.t1.value;

                            if (!(typeof this.data.nodes[i].outputData === 'undefined')) {
                                _context14.next = 9;
                                break;
                            }

                            node = this.data.nodes[i];
                            _context14.next = 7;
                            return regeneratorRuntime.awrap(this.processNode(node));

                        case 7:
                            _context14.next = 9;
                            return regeneratorRuntime.awrap(this.forwardProcess(node));

                        case 9:
                            _context14.next = 1;
                            break;

                        case 11:
                        case 'end':
                            return _context14.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'process',
        value: function process(data) {
            var startId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = arguments[_key];
            }

            return regeneratorRuntime.async(function process$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            if (data instanceof Object) {
                                _context15.next = 2;
                                break;
                            }

                            throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));

                        case 2:
                            if (startId == null || typeof startId === 'number') {
                                _context15.next = 4;
                                break;
                            }

                            throw new TypeError('Value of argument "startId" violates contract.\n\nExpected:\n?number\n\nGot:\n' + _inspect(startId));

                        case 4:
                            if (this.processStart()) {
                                _context15.next = 6;
                                break;
                            }

                            return _context15.abrupt('return');

                        case 6:
                            if (this.validate(data)) {
                                _context15.next = 8;
                                break;
                            }

                            return _context15.abrupt('return');

                        case 8:

                            this.data = this.copy(data);
                            this.args = args;

                            _context15.next = 12;
                            return regeneratorRuntime.awrap(this.processStartNode(startId));

                        case 12:
                            _context15.next = 14;
                            return regeneratorRuntime.awrap(this.processUnreachable());

                        case 14:
                            return _context15.abrupt('return', this.processDone() ? 'success' : 'aborted');

                        case 15:
                        case 'end':
                            return _context15.stop();
                    }
                }
            }, null, this);
        }
    }]);
    return Engine;
}();

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            if (depth > maxDepth) return '[...]';

            var first = _inspect(input[0], depth);

            if (input.every(function (item) {
                return _inspect(item, depth) === first;
            })) {
                return first.trim() + '[]';
            } else {
                return '[' + input.slice(0, maxKeys).map(function (item) {
                    return _inspect(item, depth);
                }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
            }
        } else {
            return 'Array';
        }
    } else {
        var keys = Object.keys(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}

exports.ComponentWorker = ComponentWorker;
exports.Engine = Engine;
