"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Ejercicios_Index_svelte"],{

/***/ "./node_modules/@material/base/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/base/foundation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCFoundation": () => (/* binding */ MDCFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/dom/events.js":
/*!**********************************************!*\
  !*** ./node_modules/@material/dom/events.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyPassive": () => (/* binding */ applyPassive)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    return supportsPassiveOption(globalObj) ?
        { passive: true } :
        false;
}
function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    // See
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    var passiveSupported = false;
    try {
        var options = {
            // This function will be called when the browser
            // attempts to access the passive property.
            get passive() {
                passiveSupported = true;
                return false;
            }
        };
        var handler = function () { };
        globalObj.document.addEventListener('test', handler, options);
        globalObj.document.removeEventListener('test', handler, options);
    }
    catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/@material/dom/ponyfill.js":
/*!************************************************!*\
  !*** ./node_modules/@material/dom/ponyfill.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closest": () => (/* binding */ closest),
/* harmony export */   "matches": () => (/* binding */ matches),
/* harmony export */   "estimateScrollWidth": () => (/* binding */ estimateScrollWidth)
/* harmony export */ });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */
function estimateScrollWidth(element) {
    // Check the offsetParent. If the element inherits display: none from any
    // parent, the offsetParent property will be null (see
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
    // This check ensures we only clone the node when necessary.
    var htmlEl = element;
    if (htmlEl.offsetParent !== null) {
        return htmlEl.scrollWidth;
    }
    var clone = htmlEl.cloneNode(true);
    clone.style.setProperty('position', 'absolute');
    clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
    document.documentElement.appendChild(clone);
    var scrollWidth = clone.scrollWidth;
    document.documentElement.removeChild(clone);
    return scrollWidth;
}
//# sourceMappingURL=ponyfill.js.map

/***/ }),

/***/ "./node_modules/@material/floating-label/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/floating-label/constants.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses)
/* harmony export */ });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_REQUIRED: 'mdc-floating-label--required',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/floating-label/foundation.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/floating-label/foundation.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCFloatingLabelFoundation": () => (/* binding */ MDCFloatingLabelFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/floating-label/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCFloatingLabelFoundation, _super);
    function MDCFloatingLabelFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCFloatingLabelFoundation.defaultAdapter), adapter)) || this;
        _this.shakeAnimationEndHandler_ = function () { return _this.handleShakeAnimationEnd_(); };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getWidth: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCFloatingLabelFoundation.prototype.init = function () {
        this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    MDCFloatingLabelFoundation.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    /**
     * Returns the width of the label element.
     */
    MDCFloatingLabelFoundation.prototype.getWidth = function () {
        return this.adapter.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */
    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
            this.adapter.addClass(LABEL_SHAKE);
        }
        else {
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */
    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
        var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) {
            this.adapter.addClass(LABEL_FLOAT_ABOVE);
        }
        else {
            this.adapter.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */
    MDCFloatingLabelFoundation.prototype.setRequired = function (isRequired) {
        var LABEL_REQUIRED = MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;
        if (isRequired) {
            this.adapter.addClass(LABEL_REQUIRED);
        }
        else {
            this.adapter.removeClass(LABEL_REQUIRED);
        }
    };
    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCFloatingLabelFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/line-ripple/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/line-ripple/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses)
/* harmony export */ });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/line-ripple/foundation.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/line-ripple/foundation.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCLineRippleFoundation": () => (/* binding */ MDCLineRippleFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/line-ripple/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCLineRippleFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCLineRippleFoundation, _super);
    function MDCLineRippleFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;
        _this.transitionEndHandler_ = function (evt) { return _this.handleTransitionEnd(evt); };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCLineRippleFoundation.prototype.init = function () {
        this.adapter.registerEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.destroy = function () {
        this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.activate = function () {
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_DEACTIVATING);
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
        this.adapter.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation.prototype.deactivate = function () {
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_ACTIVE);
                this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCLineRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/notched-outline/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/notched-outline/constants.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
/* harmony export */   "numbers": () => (/* binding */ numbers),
/* harmony export */   "strings": () => (/* binding */ strings)
/* harmony export */ });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
};
var numbers = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8,
};
var cssClasses = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/notched-outline/foundation.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/notched-outline/foundation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCNotchedOutlineFoundation": () => (/* binding */ MDCNotchedOutlineFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/notched-outline/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCNotchedOutlineFoundation, _super);
    function MDCNotchedOutlineFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCNotchedOutlineFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNotchWidthProperty: function () { return undefined; },
                removeNotchWidthProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */
    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
            notchWidth += _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }
        this.adapter.setNotchWidthProperty(notchWidth);
        this.adapter.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter.removeClass(OUTLINE_NOTCHED);
        this.adapter.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCNotchedOutlineFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/constants.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
/* harmony export */   "strings": () => (/* binding */ strings),
/* harmony export */   "numbers": () => (/* binding */ numbers)
/* harmony export */ });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/ripple/foundation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCRippleFoundation": () => (/* binding */ MDCRippleFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = { width: 0, height: 0 };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = { left: 0, top: 0 };
        _this.activationState_ = _this.defaultActivationState_();
        _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
        };
        _this.activateHandler_ = function (e) { return _this.activate_(e); };
        _this.deactivateHandler_ = function () { return _this.deactivate_(); };
        _this.focusHandler_ = function () { return _this.handleFocus(); };
        _this.blurHandler_ = function () { return _this.handleBlur(); };
        _this.resizeHandler_ = function () { return _this.layout(); };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.addClass(ROOT_1);
                if (_this.adapter.isUnbounded()) {
                    _this.adapter.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal_();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.removeClass(ROOT_2);
                _this.adapter.removeClass(UNBOUNDED_2);
                _this.removeCssVars_();
            });
        }
        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter.addClass(UNBOUNDED);
        }
        else {
            this.adapter.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;
        if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter.registerInteractionHandler(evtType, _this.activateHandler_);
            });
            if (this.adapter.isUnbounded()) {
                this.adapter.registerResizeHandler(this.resizeHandler_);
            }
        }
        this.adapter.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter.registerInteractionHandler('blur', this.blurHandler_);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;
        if (evt.type === 'keydown') {
            this.adapter.registerInteractionHandler('keyup', this.deactivateHandler_);
        }
        else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter.deregisterInteractionHandler('blur', this.blurHandler_);
        if (this.adapter.isUnbounded()) {
            this.adapter.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;
        this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
    };
    MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;
        if (this.adapter.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState_;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined &&
            activatedTargets.length > 0 &&
            activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation_();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState_ = _this.defaultActivationState_();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ?
            this.adapter.isSurfaceActive() :
            true;
    };
    MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter.computeBoundingRect();
        this.adapter.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getNormalizedEventCoords)(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize_ / 2),
            y: startPoint.y - (this.initialSize_ / 2),
        };
        var endPoint = {
            x: (this.frame_.width / 2) - (this.initialSize_ / 2),
            y: (this.frame_.height / 2) - (this.initialSize_ / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this.adapter.removeClass(FG_DEACTIVATION);
            }, _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;
        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
            this.resetActivationState_();
        }
        else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
                _this.activationState_.hasDeactivationUXRun = true;
                _this.animateDeactivation_(state);
                _this.resetActivationState_();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;
        this.frame_ = this.adapter.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius_ = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
            this.initialSize_ = initialSize - 1;
        }
        else {
            this.initialSize_ = initialSize;
        }
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
        if (this.adapter.isUnbounded()) {
            this.unboundedCoords_ = {
                left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
            };
            this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
    };
    return MDCRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_3__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/ripple/util.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportsCssVariables": () => (/* binding */ supportsCssVariables),
/* harmony export */   "getNormalizedEventCoords": () => (/* binding */ getNormalizedEventCoords)
/* harmony export */ });
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
        CSS.supports('color', '#00000000'));
    supportsCssVars =
        explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/textfield/constants.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
/* harmony export */   "strings": () => (/* binding */ strings),
/* harmony export */   "numbers": () => (/* binding */ numbers),
/* harmony export */   "VALIDATION_ATTR_WHITELIST": () => (/* binding */ VALIDATION_ATTR_WHITELIST),
/* harmony export */   "ALWAYS_FLOAT_TYPES": () => (/* binding */ ALWAYS_FLOAT_TYPES)
/* harmony export */ });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_DESCRIBEDBY: 'aria-describedby',
    INPUT_SELECTOR: '.mdc-text-field__input',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    PREFIX_SELECTOR: '.mdc-text-field__affix--prefix',
    SUFFIX_SELECTOR: '.mdc-text-field__affix--suffix',
    TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing'
};
var cssClasses = {
    DISABLED: 'mdc-text-field--disabled',
    FOCUSED: 'mdc-text-field--focused',
    HELPER_LINE: 'mdc-text-field-helper-line',
    INVALID: 'mdc-text-field--invalid',
    LABEL_FLOATING: 'mdc-text-field--label-floating',
    NO_LABEL: 'mdc-text-field--no-label',
    OUTLINED: 'mdc-text-field--outlined',
    ROOT: 'mdc-text-field',
    TEXTAREA: 'mdc-text-field--textarea',
    WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
    WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon',
};
var numbers = {
    LABEL_SCALE: 0.75,
};
/**
 * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */
var VALIDATION_ATTR_WHITELIST = [
    'pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength',
];
/**
 * Label should always float for these types as they show some UI even if value is empty.
 */
var ALWAYS_FLOAT_TYPES = [
    'color', 'date', 'datetime-local', 'month', 'range', 'time', 'week',
];

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/foundation.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/textfield/foundation.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTextFieldFoundation": () => (/* binding */ MDCTextFieldFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldFoundation, _super);
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCTextFieldFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCTextFieldFoundation.defaultAdapter), adapter)) || this;
        _this.isFocused_ = false;
        _this.receivedUserInput_ = false;
        _this.isValid_ = true;
        _this.useNativeValidation_ = true;
        _this.validateOnValueChange_ = true;
        _this.helperText_ = foundationMap.helperText;
        _this.characterCounter_ = foundationMap.characterCounter;
        _this.leadingIcon_ = foundationMap.leadingIcon;
        _this.trailingIcon_ = foundationMap.trailingIcon;
        _this.inputFocusHandler_ = function () { return _this.activateFocus(); };
        _this.inputBlurHandler_ = function () { return _this.deactivateFocus(); };
        _this.inputInputHandler_ = function () { return _this.handleInput(); };
        _this.setPointerXOffset_ = function (evt) { return _this.setTransformOrigin(evt); };
        _this.textFieldInteractionHandler_ = function () { return _this.handleTextFieldInteraction(); };
        _this.validationAttributeChangeHandler_ = function (attributesList) {
            return _this.handleValidationAttributeChange(attributesList);
        };
        return _this;
    }
    Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat_", {
        get: function () {
            var type = this.getNativeInput_().type;
            return _constants__WEBPACK_IMPORTED_MODULE_1__.ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
        get: function () {
            return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() ||
                this.isBadInput_();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
        get: function () {
            return !this.isFocused_ && !this.isValid() && !!this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldAdapter} for typing information on parameters and
         * return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return true; },
                setInputAttr: function () { return undefined; },
                removeInputAttr: function () { return undefined; },
                registerTextFieldInteractionHandler: function () { return undefined; },
                deregisterTextFieldInteractionHandler: function () { return undefined; },
                registerInputInteractionHandler: function () { return undefined; },
                deregisterInputInteractionHandler: function () { return undefined; },
                registerValidationAttributeChangeHandler: function () {
                    return new MutationObserver(function () { return undefined; });
                },
                deregisterValidationAttributeChangeHandler: function () { return undefined; },
                getNativeInput: function () { return null; },
                isFocused: function () { return false; },
                activateLineRipple: function () { return undefined; },
                deactivateLineRipple: function () { return undefined; },
                setLineRippleTransformOrigin: function () { return undefined; },
                shakeLabel: function () { return undefined; },
                floatLabel: function () { return undefined; },
                setLabelRequired: function () { return undefined; },
                hasLabel: function () { return false; },
                getLabelWidth: function () { return 0; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldFoundation.prototype.init = function () {
        var _this = this;
        if (this.adapter.hasLabel() && this.getNativeInput_().required) {
            this.adapter.setLabelRequired(true);
        }
        if (this.adapter.isFocused()) {
            this.inputFocusHandler_();
        }
        else if (this.adapter.hasLabel() && this.shouldFloat) {
            this.notchOutline(true);
            this.adapter.floatLabel(true);
            this.styleFloating_(true);
        }
        this.adapter.registerInputInteractionHandler('focus', this.inputFocusHandler_);
        this.adapter.registerInputInteractionHandler('blur', this.inputBlurHandler_);
        this.adapter.registerInputInteractionHandler('input', this.inputInputHandler_);
        POINTERDOWN_EVENTS.forEach(function (evtType) {
            _this.adapter.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
        });
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
        });
        this.validationObserver_ =
            this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
        this.setCharacterCounter_(this.getValue().length);
    };
    MDCTextFieldFoundation.prototype.destroy = function () {
        var _this = this;
        this.adapter.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
        this.adapter.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
        this.adapter.deregisterInputInteractionHandler('input', this.inputInputHandler_);
        POINTERDOWN_EVENTS.forEach(function (evtType) {
            _this.adapter.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
        });
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
        });
        this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver_);
    };
    /**
     * Handles user interactions with the Text Field.
     */
    MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
        var nativeInput = this.adapter.getNativeInput();
        if (nativeInput && nativeInput.disabled) {
            return;
        }
        this.receivedUserInput_ = true;
    };
    /**
     * Handles validation attribute changes
     */
    MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
        var _this = this;
        attributesList.some(function (attributeName) {
            if (_constants__WEBPACK_IMPORTED_MODULE_1__.VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
                _this.styleValidity_(true);
                _this.adapter.setLabelRequired(_this.getNativeInput_().required);
                return true;
            }
            return false;
        });
        if (attributesList.indexOf('maxlength') > -1) {
            this.setCharacterCounter_(this.getValue().length);
        }
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) {
            return;
        }
        if (openNotch) {
            var labelWidth = this.adapter.getLabelWidth() * _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.LABEL_SCALE;
            this.adapter.notchOutline(labelWidth);
        }
        else {
            this.adapter.closeOutline();
        }
    };
    /**
     * Activates the text field focus state.
     */
    MDCTextFieldFoundation.prototype.activateFocus = function () {
        this.isFocused_ = true;
        this.styleFocused_(this.isFocused_);
        this.adapter.activateLineRipple();
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating_(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (this.helperText_ &&
            (this.helperText_.isPersistent() || !this.helperText_.isValidation() ||
                !this.isValid_)) {
            this.helperText_.showToScreenReader();
        }
    };
    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     */
    MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
        if (this.isDisabled() || this.adapter.hasOutline()) {
            return;
        }
        var touches = evt.touches;
        var targetEvent = touches ? touches[0] : evt;
        var targetClientRect = targetEvent.target.getBoundingClientRect();
        var normalizedX = targetEvent.clientX - targetClientRect.left;
        this.adapter.setLineRippleTransformOrigin(normalizedX);
    };
    /**
     * Handles input change of text input and text area.
     */
    MDCTextFieldFoundation.prototype.handleInput = function () {
        this.autoCompleteFocus();
        this.setCharacterCounter_(this.getValue().length);
    };
    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programmatically).
     */
    MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
        if (!this.receivedUserInput_) {
            this.activateFocus();
        }
    };
    /**
     * Deactivates the Text Field's focus state.
     */
    MDCTextFieldFoundation.prototype.deactivateFocus = function () {
        this.isFocused_ = false;
        this.adapter.deactivateLineRipple();
        var isValid = this.isValid();
        this.styleValidity_(isValid);
        this.styleFocused_(this.isFocused_);
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating_(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (!this.shouldFloat) {
            this.receivedUserInput_ = false;
        }
    };
    MDCTextFieldFoundation.prototype.getValue = function () {
        return this.getNativeInput_().value;
    };
    /**
     * @param value The value to set on the input Element.
     */
    MDCTextFieldFoundation.prototype.setValue = function (value) {
        // Prevent Safari from moving the caret to the end of the input when the
        // value has not changed.
        if (this.getValue() !== value) {
            this.getNativeInput_().value = value;
        }
        this.setCharacterCounter_(value.length);
        if (this.validateOnValueChange_) {
            var isValid = this.isValid();
            this.styleValidity_(isValid);
        }
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating_(this.shouldFloat);
            if (this.validateOnValueChange_) {
                this.adapter.shakeLabel(this.shouldShake);
            }
        }
    };
    /**
     * @return The custom validity state, if set; otherwise, the result of a
     *     native validity check.
     */
    MDCTextFieldFoundation.prototype.isValid = function () {
        return this.useNativeValidation_ ? this.isNativeInputValid_() :
            this.isValid_;
    };
    /**
     * @param isValid Sets the custom validity state of the Text Field.
     */
    MDCTextFieldFoundation.prototype.setValid = function (isValid) {
        this.isValid_ = isValid;
        this.styleValidity_(isValid);
        var shouldShake = !isValid && !this.isFocused_ && !!this.getValue();
        if (this.adapter.hasLabel()) {
            this.adapter.shakeLabel(shouldShake);
        }
    };
    /**
     * @param shouldValidate Whether or not validity should be updated on
     *     value change.
     */
    MDCTextFieldFoundation.prototype.setValidateOnValueChange = function (shouldValidate) {
        this.validateOnValueChange_ = shouldValidate;
    };
    /**
     * @return Whether or not validity should be updated on value change. `true`
     *     by default.
     */
    MDCTextFieldFoundation.prototype.getValidateOnValueChange = function () {
        return this.validateOnValueChange_;
    };
    /**
     * Enables or disables the use of native validation. Use this for custom
     * validation.
     * @param useNativeValidation Set this to false to ignore native input
     *     validation.
     */
    MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
        this.useNativeValidation_ = useNativeValidation;
    };
    MDCTextFieldFoundation.prototype.isDisabled = function () {
        return this.getNativeInput_().disabled;
    };
    /**
     * @param disabled Sets the text-field disabled or enabled.
     */
    MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
        this.getNativeInput_().disabled = disabled;
        this.styleDisabled_(disabled);
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText_) {
            this.helperText_.setContent(content);
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon_) {
            this.leadingIcon_.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon_) {
            this.leadingIcon_.setContent(content);
        }
    };
    /**
     * Sets the aria label of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
        if (this.trailingIcon_) {
            this.trailingIcon_.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
        if (this.trailingIcon_) {
            this.trailingIcon_.setContent(content);
        }
    };
    /**
     * Sets character counter values that shows characters used and the total
     * character limit.
     */
    MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {
        if (!this.characterCounter_) {
            return;
        }
        var maxLength = this.getNativeInput_().maxLength;
        if (maxLength === -1) {
            throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
        }
        this.characterCounter_.setCounterValue(currentLength, maxLength);
    };
    /**
     * @return True if the Text Field input fails in converting the user-supplied
     *     value.
     */
    MDCTextFieldFoundation.prototype.isBadInput_ = function () {
        // The badInput property is not supported in IE 11 💩.
        return this.getNativeInput_().validity.badInput || false;
    };
    /**
     * @return The result of native validity checking (ValidityState.valid).
     */
    MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {
        return this.getNativeInput_().validity.valid;
    };
    /**
     * Styles the component based on the validity state.
     */
    MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {
        var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
        if (isValid) {
            this.adapter.removeClass(INVALID);
        }
        else {
            this.adapter.addClass(INVALID);
        }
        if (this.helperText_) {
            this.helperText_.setValidity(isValid);
            // We dynamically set or unset aria-describedby for validation helper text
            // only, based on whether the field is valid
            var helperTextValidation = this.helperText_.isValidation();
            if (!helperTextValidation) {
                return;
            }
            var helperTextVisible = this.helperText_.isVisible();
            var helperTextId = this.helperText_.getId();
            if (helperTextVisible && helperTextId) {
                this.adapter.setInputAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_DESCRIBEDBY, helperTextId);
            }
            else {
                this.adapter.removeInputAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_DESCRIBEDBY);
            }
        }
    };
    /**
     * Styles the component based on the focused state.
     */
    MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {
        var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
        if (isFocused) {
            this.adapter.addClass(FOCUSED);
        }
        else {
            this.adapter.removeClass(FOCUSED);
        }
    };
    /**
     * Styles the component based on the disabled state.
     */
    MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {
        var _a = MDCTextFieldFoundation.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
        if (isDisabled) {
            this.adapter.addClass(DISABLED);
            this.adapter.removeClass(INVALID);
        }
        else {
            this.adapter.removeClass(DISABLED);
        }
        if (this.leadingIcon_) {
            this.leadingIcon_.setDisabled(isDisabled);
        }
        if (this.trailingIcon_) {
            this.trailingIcon_.setDisabled(isDisabled);
        }
    };
    /**
     * Styles the component based on the label floating state.
     */
    MDCTextFieldFoundation.prototype.styleFloating_ = function (isFloating) {
        var LABEL_FLOATING = MDCTextFieldFoundation.cssClasses.LABEL_FLOATING;
        if (isFloating) {
            this.adapter.addClass(LABEL_FLOATING);
        }
        else {
            this.adapter.removeClass(LABEL_FLOATING);
        }
    };
    /**
     * @return The native text input element from the host environment, or an
     *     object with the same shape for unit tests.
     */
    MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
        // this.adapter may be undefined in foundation unit tests. This happens when
        // testdouble is creating a mock object and invokes the
        // shouldShake/shouldFloat getters (which in turn call getValue(), which
        // calls this method) before init() has been called from the MDCTextField
        // constructor. To work around that issue, we return a dummy object.
        var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
        return nativeInput || {
            disabled: false,
            maxLength: -1,
            required: false,
            type: 'input',
            validity: {
                badInput: false,
                valid: true,
            },
            value: '',
        };
    };
    return MDCTextFieldFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTextFieldFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popperGenerator": () => (/* binding */ popperGenerator),
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__["default"])
/* harmony export */ });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(reference) ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reference) : reference.contextElement ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reference.contextElement) : [],
          popper: (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0,_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = (0,_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          (0,_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__["default"])(modifiers);

          if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_7__.auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"])(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0,_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__["default"])(reference, (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__["default"])(popper), state.options.strategy === 'fixed'),
          popper: (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contains)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBoundingClientRect)
/* harmony export */ });
// import { isHTMLElement } from './instanceOf';
function getBoundingClientRect(element, // eslint-disable-next-line unused-imports/no-unused-vars
includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1; // FIXME:
  // `offsetWidth` returns an integer while `getBoundingClientRect`
  // returns a float. This results in `scaleX` or `scaleY` being
  // non-1 when it should be for elements that aren't a full pixel in
  // width or height.
  // if (isHTMLElement(element) && includeScale) {
  //   const offsetHeight = element.offsetHeight;
  //   const offsetWidth = element.offsetWidth;
  //   // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
  //   // Fallback to 1 in case both values are `0`
  //   if (offsetWidth > 0) {
  //     scaleX = rect.width / offsetWidth || 1;
  //   }
  //   if (offsetHeight > 0) {
  //     scaleY = rect.height / offsetHeight || 1;
  //   }
  // }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getClippingRect)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");















function getInnerBoundingClientRect(element) {
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_1__.viewport ? (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element)) : (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0,_listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(element) ? (0,_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__["default"])(element) : element;

  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) && (0,_contains_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent, clipperElement) && (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_12__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.top, accRect.top);
    accRect.right = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.right, accRect.right);
    accRect.bottom = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.bottom, accRect.bottom);
    accRect.left = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCompositeRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");








function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(offsetParent);
  var offsetParentIsScaled = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
  var documentElement = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent);
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(documentElement)) {
      scroll = (0,_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent);
    }

    if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(offsetParent)) {
      offsets = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_6__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentElement)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentRect)
/* harmony export */ });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var y = -winScroll.scrollTop;

  if ((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(body || html).direction === 'rtl') {
    x += (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHTMLElementScroll)
/* harmony export */ });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLayoutRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeName)
/* harmony export */ });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeScroll)
/* harmony export */ });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node) || !(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node)) {
    return (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node);
  } else {
    return (0,_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOffsetParent)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");







function getTrueOffsetParent(element) {
  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = (0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);

  while ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__["default"])(currentNode)) < 0) {
    var css = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0,_isTableElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent) && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent) === 'html' || (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent) === 'body' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getParentNode)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function getParentNode(element) {
  if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getScrollParent)
/* harmony export */ });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node) && (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) {
    return node;
  }

  return getScrollParent((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getViewportRect)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");



function getViewportRect(element) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element),
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindow)
/* harmony export */ });
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScroll)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScrollBarX)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isHTMLElement": () => (/* binding */ isHTMLElement),
/* harmony export */   "isShadowRoot": () => (/* binding */ isShadowRoot)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");


function isElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isScrollParent)
/* harmony export */ });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTableElement)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listScrollParents)
/* harmony export */ });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0,_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target)));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "top": () => (/* binding */ top),
/* harmony export */   "bottom": () => (/* binding */ bottom),
/* harmony export */   "right": () => (/* binding */ right),
/* harmony export */   "left": () => (/* binding */ left),
/* harmony export */   "auto": () => (/* binding */ auto),
/* harmony export */   "basePlacements": () => (/* binding */ basePlacements),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "end": () => (/* binding */ end),
/* harmony export */   "clippingParents": () => (/* binding */ clippingParents),
/* harmony export */   "viewport": () => (/* binding */ viewport),
/* harmony export */   "popper": () => (/* binding */ popper),
/* harmony export */   "reference": () => (/* binding */ reference),
/* harmony export */   "variationPlacements": () => (/* binding */ variationPlacements),
/* harmony export */   "placements": () => (/* binding */ placements),
/* harmony export */   "beforeRead": () => (/* binding */ beforeRead),
/* harmony export */   "read": () => (/* binding */ read),
/* harmony export */   "afterRead": () => (/* binding */ afterRead),
/* harmony export */   "beforeMain": () => (/* binding */ beforeMain),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "afterMain": () => (/* binding */ afterMain),
/* harmony export */   "beforeWrite": () => (/* binding */ beforeWrite),
/* harmony export */   "write": () => (/* binding */ write),
/* harmony export */   "afterWrite": () => (/* binding */ afterWrite),
/* harmony export */   "modifierPhases": () => (/* binding */ modifierPhases)
/* harmony export */ });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return (0,_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typeof padding !== 'number' ? padding : (0,_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_2__.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state.placement);
  var axis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_2__.left, _enums_js__WEBPACK_IMPORTED_MODULE_2__.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.top : _enums_js__WEBPACK_IMPORTED_MODULE_2__.left;
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_2__.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_7__["default"])(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__.isHTMLElement)(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!(0,_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapToStyles": () => (/* binding */ mapToStyles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)((0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(x * dpr) / dpr) || 0,
    y: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)((0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.left;
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper)) {
      offsetParent = (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper);

      if ((0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.right) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.placement),
    variation: (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto) {
    return [];
  }

  var oppositePlacement = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement);
  return [(0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement), oppositePlacement, (0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto ? (0,_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);

    var isStartVariation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.start;
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.top, _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.right : _enums_js__WEBPACK_IMPORTED_MODULE_1__.left : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mainVariationSide);
    }

    var altVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyStyles": () => (/* reexport safe */ _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "arrow": () => (/* reexport safe */ _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "computeStyles": () => (/* reexport safe */ _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "eventListeners": () => (/* reexport safe */ _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "flip": () => (/* reexport safe */ _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "hide": () => (/* reexport safe */ _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "offset": () => (/* reexport safe */ _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "popperOffsets": () => (/* reexport safe */ _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "preventOverflow": () => (/* reexport safe */ _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"])
/* harmony export */ });
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");










/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distanceAndSkiddingToXY": () => (/* binding */ distanceAndSkiddingToXY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = (0,_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement);
  var altAxis = (0,_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0,_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__["default"])(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__["default"])(tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(min, tetherMin) : min, offset, tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;

      var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__["default"])(tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(_min, tetherMin) : _min, _offset, tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-lite.js":
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-lite.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "popperGenerator": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator),
/* harmony export */   "defaultModifiers": () => (/* binding */ defaultModifiers),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "popperGenerator": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator),
/* harmony export */   "defaultModifiers": () => (/* binding */ defaultModifiers),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "createPopperLite": () => (/* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__.createPopper),
/* harmony export */   "applyStyles": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.applyStyles),
/* harmony export */   "arrow": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.arrow),
/* harmony export */   "computeStyles": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.computeStyles),
/* harmony export */   "eventListeners": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.eventListeners),
/* harmony export */   "flip": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.flip),
/* harmony export */   "hide": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.hide),
/* harmony export */   "offset": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.offset),
/* harmony export */   "popperOffsets": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.popperOffsets),
/* harmony export */   "preventOverflow": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.preventOverflow)
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");










var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeAutoPlacement)
/* harmony export */ });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements : _options$allowedAutoP;
  var variation = (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements : _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements.filter(function (placement) {
    return (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0,_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeOffsets)
/* harmony export */ });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0,_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ detectOverflow)
/* harmony export */ });
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0,_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(typeof padding !== 'number' ? padding : (0,_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference : _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0,_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(element) ? element : element.contextElement || (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = (0,_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.reference);
  var popperOffsets = (0,_computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0,_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ expandToHashMap)
/* harmony export */ });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/format.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/format.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAltAxis)
/* harmony export */ });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBasePlacement)
/* harmony export */ });

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFreshSideObject)
/* harmony export */ });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMainAxisFromPlacement)
/* harmony export */ });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositePlacement)
/* harmony export */ });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositeVariationPlacement)
/* harmony export */ });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getVariation)
/* harmony export */ });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/math.js":
/*!*******************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/math.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "round": () => (/* binding */ round)
/* harmony export */ });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeByName)
/* harmony export */ });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergePaddingObject)
/* harmony export */ });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0,_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orderModifiers)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rectToClientRect)
/* harmony export */ });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uniqueBy)
/* harmony export */ });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateModifiers)
/* harmony export */ });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "./node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.indexOf(modifier.phase) < 0) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ within)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");

function within(min, value, max) {
  return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.max)(min, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.min)(value, max));
}

/***/ }),

/***/ "./resources/js/Utils/index.js":
/*!*************************************!*\
  !*** ./resources/js/Utils/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "route": () => (/* binding */ route)
/* harmony export */ });
var route = window.route;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/svelte-loader/index.js?cssPath=C:/laragon/www/gym/resources/js/Pages/Ejercicios/Index.svelte.1.css!./resources/js/Pages/Ejercicios/Index.svelte":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/svelte-loader/index.js?cssPath=C:/laragon/www/gym/resources/js/Pages/Ejercicios/Index.svelte.1.css!./resources/js/Pages/Ejercicios/Index.svelte ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".titulo-ejercicio.svelte-16lfe07{flex-basis:100%}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./resources/js/Pages/Ejercicios/Index.svelte.1.css!=!./node_modules/svelte-loader/index.js?cssPath=C:/laragon/www/gym/resources/js/Pages/Ejercicios/Index.svelte.1.css!./resources/js/Pages/Ejercicios/Index.svelte":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Ejercicios/Index.svelte.1.css!=!./node_modules/svelte-loader/index.js?cssPath=C:/laragon/www/gym/resources/js/Pages/Ejercicios/Index.svelte.1.css!./resources/js/Pages/Ejercicios/Index.svelte ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_svelte_loader_index_js_cssPath_C_laragon_www_gym_resources_js_Pages_Ejercicios_Index_svelte_1_css_Index_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../node_modules/svelte-loader/index.js?cssPath=C:/laragon/www/gym/resources/js/Pages/Ejercicios/Index.svelte.1.css!./Index.svelte */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/svelte-loader/index.js?cssPath=C:/laragon/www/gym/resources/js/Pages/Ejercicios/Index.svelte.1.css!./resources/js/Pages/Ejercicios/Index.svelte");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_svelte_loader_index_js_cssPath_C_laragon_www_gym_resources_js_Pages_Ejercicios_Index_svelte_1_css_Index_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_svelte_loader_index_js_cssPath_C_laragon_www_gym_resources_js_Pages_Ejercicios_Index_svelte_1_css_Index_svelte__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/@smui/common/ClassAdder.svelte":
/*!*****************************************************!*\
  !*** ./node_modules/@smui/common/ClassAdder.svelte ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "internals": () => (/* binding */ internals)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _forwardEventsBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forwardEventsBuilder.js */ "./node_modules/@smui/common/forwardEventsBuilder.js");
/* harmony import */ var _classMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classMap.js */ "./node_modules/@smui/common/classMap.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\common\ClassAdder.svelte generated by Svelte v3.43.1 */







function create_default_slot(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[10].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[12], null);

	return {
		c() {
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4096)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[12],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[12])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[12], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;

	const switch_instance_spread_levels = [
		{
			use: [/*forwardEvents*/ ctx[7], .../*use*/ ctx[0]]
		},
		{
			class: (0,_classMap_js__WEBPACK_IMPORTED_MODULE_3__.classMap)({
				[/*className*/ ctx[1]]: true,
				[/*smuiClass*/ ctx[5]]: true,
				.../*smuiClassMap*/ ctx[4]
			})
		},
		/*props*/ ctx[6],
		/*$$restProps*/ ctx[8]
	];

	var switch_value = /*component*/ ctx[2];

	function switch_props(ctx) {
		let switch_instance_props = {
			$$slots: { default: [create_default_slot] },
			$$scope: { ctx }
		};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
		/*switch_instance_binding*/ ctx[11](switch_instance);
	}

	return {
		c() {
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(switch_instance.$$.fragment);
			switch_instance_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (switch_instance) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(switch_instance, target, anchor);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, smuiClass, smuiClassMap, props, $$restProps*/ 499)
			? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(switch_instance_spread_levels, [
					dirty & /*forwardEvents, use*/ 129 && {
						use: [/*forwardEvents*/ ctx[7], .../*use*/ ctx[0]]
					},
					dirty & /*classMap, className, smuiClass, smuiClassMap*/ 50 && {
						class: (0,_classMap_js__WEBPACK_IMPORTED_MODULE_3__.classMap)({
							[/*className*/ ctx[1]]: true,
							[/*smuiClass*/ ctx[5]]: true,
							.../*smuiClassMap*/ ctx[4]
						})
					},
					dirty & /*props*/ 64 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(/*props*/ ctx[6]),
					dirty & /*$$restProps*/ 256 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(/*$$restProps*/ ctx[8])
				])
			: {};

			if (dirty & /*$$scope*/ 4096) {
				switch_instance_changes.$$scope = { dirty, ctx };
			}

			if (switch_value !== (switch_value = /*component*/ ctx[2])) {
				if (switch_instance) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
					const old_component = switch_instance;

					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(old_component.$$.fragment, 1, 0, () => {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(old_component, 1);
					});

					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					/*switch_instance_binding*/ ctx[11](switch_instance);
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(switch_instance.$$.fragment);
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(switch_instance.$$.fragment, 1);
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			/*switch_instance_binding*/ ctx[11](null);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(switch_instance_anchor);
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(switch_instance, detaching);
		}
	};
}

const internals = {
	component: null,
	class: '',
	// The class map maps classes to contexts. The context
	// should resolve to a Svelte store, and the class
	// will be added if the Svelte store's value is true.
	classMap: {},
	contexts: {},
	props: {}
};

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","component","getElement"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let element;
	const smuiClass = internals.class;
	const smuiClassMap = {};
	const smuiClassUnsubscribes = [];
	const contexts = internals.contexts;
	const props = internals.props;
	let { component = internals.component } = $$props;

	Object.entries(internals.classMap).forEach(([name, context]) => {
		const store = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.getContext)(context);

		if (store && 'subscribe' in store) {
			smuiClassUnsubscribes.push(store.subscribe(value => {
				$$invalidate(4, smuiClassMap[name] = value, smuiClassMap);
			}));
		}
	});

	const forwardEvents = (0,_forwardEventsBuilder_js__WEBPACK_IMPORTED_MODULE_2__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());

	for (let context in contexts) {
		if (contexts.hasOwnProperty(context)) {
			(0,svelte__WEBPACK_IMPORTED_MODULE_1__.setContext)(context, contexts[context]);
		}
	}

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.onDestroy)(() => {
		for (const unsubscribe of smuiClassUnsubscribes) {
			unsubscribe();
		}
	});

	function getElement() {
		return element.getElement();
	}

	function switch_instance_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(3, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(8, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ('component' in $$new_props) $$invalidate(2, component = $$new_props.component);
		if ('$$scope' in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
	};

	return [
		use,
		className,
		component,
		element,
		smuiClassMap,
		smuiClass,
		props,
		forwardEvents,
		$$restProps,
		getElement,
		slots,
		switch_instance_binding,
		$$scope
	];
}

class ClassAdder extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			use: 0,
			class: 1,
			component: 2,
			getElement: 9
		});
	}

	get getElement() {
		return this.$$.ctx[9];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassAdder);




/***/ }),

/***/ "./node_modules/@smui/common/ContextFragment.svelte":
/*!**********************************************************!*\
  !*** ./node_modules/@smui/common/ContextFragment.svelte ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\common\ContextFragment.svelte generated by Svelte v3.43.1 */





function create_fragment(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[3],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[3])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[3], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $storeValue;
	let { $$slots: slots = {}, $$scope } = $$props;
	let { key } = $$props;
	let { value } = $$props;
	const storeValue = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)(value);
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, storeValue, value => $$invalidate(5, $storeValue = value));
	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.setContext)(key, storeValue);

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.onDestroy)(() => {
		storeValue.set(undefined);
	});

	$$self.$$set = $$props => {
		if ('key' in $$props) $$invalidate(1, key = $$props.key);
		if ('value' in $$props) $$invalidate(2, value = $$props.value);
		if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value*/ 4) {
			$: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(storeValue, $storeValue = value, $storeValue);
		}
	};

	return [storeValue, key, value, $$scope, slots];
}

class ContextFragment extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { key: 1, value: 2 });
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextFragment);



/***/ }),

/***/ "./node_modules/@smui/common/Div.svelte":
/*!**********************************************!*\
  !*** ./node_modules/@smui/common/Div.svelte ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\common\Div.svelte generated by Svelte v3.43.1 */





function create_fragment(ctx) {
	let div;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let div_levels = [/*$$restProps*/ ctx[3]];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(div_data, div_levels[i]);
	}

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div, div_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[7](div);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _internal_js__WEBPACK_IMPORTED_MODULE_1__.useActions.call(null, div, /*use*/ ctx[0])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, div))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[5],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[5])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
						null
					);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div, div_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(div_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
			if (useActions_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[7](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","getElement"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { use = [] } = $$props;
	const forwardEvents = (0,_internal_js__WEBPACK_IMPORTED_MODULE_1__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());
	let element = null;

	function getElement() {
		return element;
	}

	function div_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(1, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(3, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ('$$scope' in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
	};

	return [
		use,
		element,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		div_binding
	];
}

class Div extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { use: 0, getElement: 4 });
	}

	get getElement() {
		return this.$$.ctx[4];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Div);



/***/ }),

/***/ "./node_modules/@smui/common/Span.svelte":
/*!***********************************************!*\
  !*** ./node_modules/@smui/common/Span.svelte ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\common\Span.svelte generated by Svelte v3.43.1 */





function create_fragment(ctx) {
	let span;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let span_levels = [/*$$restProps*/ ctx[3]];
	let span_data = {};

	for (let i = 0; i < span_levels.length; i += 1) {
		span_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(span_data, span_levels[i]);
	}

	return {
		c() {
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(span, span_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);

			if (default_slot) {
				default_slot.m(span, null);
			}

			/*span_binding*/ ctx[7](span);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _internal_js__WEBPACK_IMPORTED_MODULE_1__.useActions.call(null, span, /*use*/ ctx[0])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, span))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[5],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[5])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
						null
					);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(span, span_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(span_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
			if (useActions_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
			if (default_slot) default_slot.d(detaching);
			/*span_binding*/ ctx[7](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","getElement"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { use = [] } = $$props;
	const forwardEvents = (0,_internal_js__WEBPACK_IMPORTED_MODULE_1__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());
	let element = null;

	function getElement() {
		return element;
	}

	function span_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(1, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(3, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ('$$scope' in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
	};

	return [
		use,
		element,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		span_binding
	];
}

class Span extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { use: 0, getElement: 4 });
	}

	get getElement() {
		return this.$$.ctx[4];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Span);



/***/ }),

/***/ "./node_modules/@smui/floating-label/FloatingLabel.svelte":
/*!****************************************************************!*\
  !*** ./node_modules/@smui/floating-label/FloatingLabel.svelte ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _material_floating_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/floating-label */ "./node_modules/@material/floating-label/foundation.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smui/common/internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\floating-label\FloatingLabel.svelte generated by Svelte v3.43.1 */








function create_else_block(ctx) {
	let label;
	let label_class_value;
	let label_style_value;
	let label_for_value;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[22].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[21], null);

	let label_levels = [
		{
			class: label_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				[/*className*/ ctx[3]]: true,
				'mdc-floating-label': true,
				'mdc-floating-label--float-above': /*floatAbove*/ ctx[0],
				'mdc-floating-label--required': /*required*/ ctx[1],
				.../*internalClasses*/ ctx[8]
			})
		},
		{
			style: label_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func_1).concat([/*style*/ ctx[4]]).join(' ')
		},
		{
			for: label_for_value = /*forId*/ ctx[5] || (/*inputProps*/ ctx[11]
			? /*inputProps*/ ctx[11].id
			: null)
		},
		/*$$restProps*/ ctx[12]
	];

	let label_data = {};

	for (let i = 0; i < label_levels.length; i += 1) {
		label_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(label_data, label_levels[i]);
	}

	return {
		c() {
			label = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(label, label_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, label, anchor);

			if (default_slot) {
				default_slot.m(label, null);
			}

			/*label_binding*/ ctx[24](label);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.useActions.call(null, label, /*use*/ ctx[2])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[10].call(null, label))
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 2097152)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[21],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[21])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[21], dirty, null),
						null
					);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(label, label_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(label_levels, [
				(!current || dirty & /*className, floatAbove, required, internalClasses*/ 267 && label_class_value !== (label_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
					[/*className*/ ctx[3]]: true,
					'mdc-floating-label': true,
					'mdc-floating-label--float-above': /*floatAbove*/ ctx[0],
					'mdc-floating-label--required': /*required*/ ctx[1],
					.../*internalClasses*/ ctx[8]
				}))) && { class: label_class_value },
				(!current || dirty & /*internalStyles, style*/ 528 && label_style_value !== (label_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func_1).concat([/*style*/ ctx[4]]).join(' '))) && { style: label_style_value },
				(!current || dirty & /*forId*/ 32 && label_for_value !== (label_for_value = /*forId*/ ctx[5] || (/*inputProps*/ ctx[11]
				? /*inputProps*/ ctx[11].id
				: null))) && { for: label_for_value },
				dirty & /*$$restProps*/ 4096 && /*$$restProps*/ ctx[12]
			]));

			if (useActions_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action.update) && dirty & /*use*/ 4) useActions_action.update.call(null, /*use*/ ctx[2]);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(label);
			if (default_slot) default_slot.d(detaching);
			/*label_binding*/ ctx[24](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

// (1:0) {#if wrapped}
function create_if_block(ctx) {
	let span;
	let span_class_value;
	let span_style_value;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[22].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[21], null);

	let span_levels = [
		{
			class: span_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				[/*className*/ ctx[3]]: true,
				'mdc-floating-label': true,
				'mdc-floating-label--float-above': /*floatAbove*/ ctx[0],
				'mdc-floating-label--required': /*required*/ ctx[1],
				.../*internalClasses*/ ctx[8]
			})
		},
		{
			style: span_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func).concat([/*style*/ ctx[4]]).join(' ')
		},
		/*$$restProps*/ ctx[12]
	];

	let span_data = {};

	for (let i = 0; i < span_levels.length; i += 1) {
		span_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(span_data, span_levels[i]);
	}

	return {
		c() {
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(span, span_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);

			if (default_slot) {
				default_slot.m(span, null);
			}

			/*span_binding*/ ctx[23](span);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.useActions.call(null, span, /*use*/ ctx[2])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[10].call(null, span))
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 2097152)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[21],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[21])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[21], dirty, null),
						null
					);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(span, span_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(span_levels, [
				(!current || dirty & /*className, floatAbove, required, internalClasses*/ 267 && span_class_value !== (span_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
					[/*className*/ ctx[3]]: true,
					'mdc-floating-label': true,
					'mdc-floating-label--float-above': /*floatAbove*/ ctx[0],
					'mdc-floating-label--required': /*required*/ ctx[1],
					.../*internalClasses*/ ctx[8]
				}))) && { class: span_class_value },
				(!current || dirty & /*internalStyles, style*/ 528 && span_style_value !== (span_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func).concat([/*style*/ ctx[4]]).join(' '))) && { style: span_style_value },
				dirty & /*$$restProps*/ 4096 && /*$$restProps*/ ctx[12]
			]));

			if (useActions_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action.update) && dirty & /*use*/ 4) useActions_action.update.call(null, /*use*/ ctx[2]);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
			if (default_slot) default_slot.d(detaching);
			/*span_binding*/ ctx[23](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*wrapped*/ ctx[6]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
		}
	};
}

const func = ([name, value]) => `${name}: ${value};`;
const func_1 = ([name, value]) => `${name}: ${value};`;

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"
	];

	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const forwardEvents = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let { style = '' } = $$props;
	let { for: forId = null } = $$props;
	let { floatAbove = false } = $$props;
	let { required = false } = $$props;
	let { wrapped = false } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let internalStyles = {};
	let inputProps = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.getContext)('SMUI:generic:input:props') || {};
	let previousFloatAbove = floatAbove;
	let previousRequired = required;

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.onMount)(() => {
		$$invalidate(18, instance = new _material_floating_label__WEBPACK_IMPORTED_MODULE_3__.MDCFloatingLabelFoundation({
				addClass,
				removeClass,
				getWidth: () => {
					const el = getElement();
					const clone = el.cloneNode(true);
					el.parentNode.appendChild(clone);
					clone.classList.add('smui-floating-label--remove-transition');
					clone.classList.add('smui-floating-label--force-size');
					clone.classList.remove('mdc-floating-label--float-above');
					const scrollWidth = clone.scrollWidth;
					el.parentNode.removeChild(clone);
					return scrollWidth;
				},
				registerInteractionHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
				deregisterInteractionHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler)
			}));

		const accessor = {
			get element() {
				return getElement();
			},
			addStyle,
			removeStyle
		};

		(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.dispatch)(element, 'SMUI:floating-label:mount', accessor);
		instance.init();

		return () => {
			(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.dispatch)(element, 'SMUI:floating-label:unmount', accessor);
			instance.destroy();
		};
	});

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(8, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(8, internalClasses[className] = false, internalClasses);
		}
	}

	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === '' || value == null) {
				delete internalStyles[name];
				$$invalidate(9, internalStyles);
			} else {
				$$invalidate(9, internalStyles[name] = value, internalStyles);
			}
		}
	}

	function removeStyle(name) {
		if (name in internalStyles) {
			delete internalStyles[name];
			$$invalidate(9, internalStyles);
		}
	}

	function shake(shouldShake) {
		instance.shake(shouldShake);
	}

	function float(shouldFloat) {
		$$invalidate(0, floatAbove = shouldFloat);
	}

	function setRequired(isRequired) {
		$$invalidate(1, required = isRequired);
	}

	function getWidth() {
		return instance.getWidth();
	}

	function getElement() {
		return element;
	}

	function span_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(7, element);
		});
	}

	function label_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(7, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(12, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(2, use = $$new_props.use);
		if ('class' in $$new_props) $$invalidate(3, className = $$new_props.class);
		if ('style' in $$new_props) $$invalidate(4, style = $$new_props.style);
		if ('for' in $$new_props) $$invalidate(5, forId = $$new_props.for);
		if ('floatAbove' in $$new_props) $$invalidate(0, floatAbove = $$new_props.floatAbove);
		if ('required' in $$new_props) $$invalidate(1, required = $$new_props.required);
		if ('wrapped' in $$new_props) $$invalidate(6, wrapped = $$new_props.wrapped);
		if ('$$scope' in $$new_props) $$invalidate(21, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*previousFloatAbove, floatAbove, instance*/ 786433) {
			$: if (previousFloatAbove !== floatAbove) {
				$$invalidate(19, previousFloatAbove = floatAbove);
				instance.float(floatAbove);
			}
		}

		if ($$self.$$.dirty & /*previousRequired, required, instance*/ 1310722) {
			$: if (previousRequired !== required) {
				$$invalidate(20, previousRequired = required);
				instance.setRequired(required);
			}
		}
	};

	return [
		floatAbove,
		required,
		use,
		className,
		style,
		forId,
		wrapped,
		element,
		internalClasses,
		internalStyles,
		forwardEvents,
		inputProps,
		$$restProps,
		shake,
		float,
		setRequired,
		getWidth,
		getElement,
		instance,
		previousFloatAbove,
		previousRequired,
		$$scope,
		slots,
		span_binding,
		label_binding
	];
}

class FloatingLabel extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance_1, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			use: 2,
			class: 3,
			style: 4,
			for: 5,
			floatAbove: 0,
			required: 1,
			wrapped: 6,
			shake: 13,
			float: 14,
			setRequired: 15,
			getWidth: 16,
			getElement: 17
		});
	}

	get shake() {
		return this.$$.ctx[13];
	}

	get float() {
		return this.$$.ctx[14];
	}

	get setRequired() {
		return this.$$.ctx[15];
	}

	get getWidth() {
		return this.$$.ctx[16];
	}

	get getElement() {
		return this.$$.ctx[17];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloatingLabel);



/***/ }),

/***/ "./node_modules/@smui/line-ripple/LineRipple.svelte":
/*!**********************************************************!*\
  !*** ./node_modules/@smui/line-ripple/LineRipple.svelte ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _material_line_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/line-ripple */ "./node_modules/@material/line-ripple/foundation.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smui/common/internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\line-ripple\LineRipple.svelte generated by Svelte v3.43.1 */








function create_fragment(ctx) {
	let div;
	let div_class_value;
	let div_style_value;
	let useActions_action;
	let forwardEvents_action;
	let mounted;
	let dispose;

	let div_levels = [
		{
			class: div_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				[/*className*/ ctx[1]]: true,
				'mdc-line-ripple': true,
				'mdc-line-ripple--active': /*active*/ ctx[3],
				.../*internalClasses*/ ctx[5]
			})
		},
		{
			style: div_style_value = Object.entries(/*internalStyles*/ ctx[6]).map(func).concat([/*style*/ ctx[2]]).join(' ')
		},
		/*$$restProps*/ ctx[8]
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(div_data, div_levels[i]);
	}

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div, div_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			/*div_binding*/ ctx[13](div);

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.useActions.call(null, div, /*use*/ ctx[0])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[7].call(null, div))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div, div_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(div_levels, [
				dirty & /*className, active, internalClasses*/ 42 && div_class_value !== (div_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
					[/*className*/ ctx[1]]: true,
					'mdc-line-ripple': true,
					'mdc-line-ripple--active': /*active*/ ctx[3],
					.../*internalClasses*/ ctx[5]
				})) && { class: div_class_value },
				dirty & /*internalStyles, style*/ 68 && div_style_value !== (div_style_value = Object.entries(/*internalStyles*/ ctx[6]).map(func).concat([/*style*/ ctx[2]]).join(' ')) && { style: div_style_value },
				dirty & /*$$restProps*/ 256 && /*$$restProps*/ ctx[8]
			]));

			if (useActions_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			/*div_binding*/ ctx[13](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

const func = ([name, value]) => `${name}: ${value};`;

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","style","active","activate","deactivate","setRippleCenter","getElement"
	];

	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	const forwardEvents = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let { style = '' } = $$props;
	let { active = false } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let internalStyles = {};

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.onMount)(() => {
		instance = new _material_line_ripple__WEBPACK_IMPORTED_MODULE_3__.MDCLineRippleFoundation({
				addClass,
				removeClass,
				hasClass,
				setStyle: addStyle,
				registerEventHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
				deregisterEventHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler)
			});

		instance.init();

		return () => {
			instance.destroy();
		};
	});

	function hasClass(className) {
		return className in internalClasses
		? internalClasses[className]
		: getElement().classList.contains(className);
	}

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(5, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(5, internalClasses[className] = false, internalClasses);
		}
	}

	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === '' || value == null) {
				delete internalStyles[name];
				$$invalidate(6, internalStyles);
			} else {
				$$invalidate(6, internalStyles[name] = value, internalStyles);
			}
		}
	}

	function activate() {
		instance.activate();
	}

	function deactivate() {
		instance.deactivate();
	}

	function setRippleCenter(xCoordinate) {
		instance.setRippleCenter(xCoordinate);
	}

	function getElement() {
		return element;
	}

	function div_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(4, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(8, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ('style' in $$new_props) $$invalidate(2, style = $$new_props.style);
		if ('active' in $$new_props) $$invalidate(3, active = $$new_props.active);
	};

	return [
		use,
		className,
		style,
		active,
		element,
		internalClasses,
		internalStyles,
		forwardEvents,
		$$restProps,
		activate,
		deactivate,
		setRippleCenter,
		getElement,
		div_binding
	];
}

class LineRipple extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance_1, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			use: 0,
			class: 1,
			style: 2,
			active: 3,
			activate: 9,
			deactivate: 10,
			setRippleCenter: 11,
			getElement: 12
		});
	}

	get activate() {
		return this.$$.ctx[9];
	}

	get deactivate() {
		return this.$$.ctx[10];
	}

	get setRippleCenter() {
		return this.$$.ctx[11];
	}

	get getElement() {
		return this.$$.ctx[12];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineRipple);



/***/ }),

/***/ "./node_modules/@smui/notched-outline/NotchedOutline.svelte":
/*!******************************************************************!*\
  !*** ./node_modules/@smui/notched-outline/NotchedOutline.svelte ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _material_notched_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/notched-outline */ "./node_modules/@material/notched-outline/foundation.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smui/common/internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\notched-outline\NotchedOutline.svelte generated by Svelte v3.43.1 */








function create_if_block(ctx) {
	let div;
	let div_style_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[14].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[13], null);

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "mdc-notched-outline__notch");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "style", div_style_value = Object.entries(/*notchStyles*/ ctx[7]).map(func).join(' '));
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[13],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[13])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[13], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*notchStyles*/ 128 && div_style_value !== (div_style_value = Object.entries(/*notchStyles*/ ctx[7]).map(func).join(' '))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "style", div_style_value);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let div2;
	let div0;
	let t0;
	let t1;
	let div1;
	let div2_class_value;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let mounted;
	let dispose;
	let if_block = !/*noLabel*/ ctx[3] && create_if_block(ctx);

	let div2_levels = [
		{
			class: div2_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				[/*className*/ ctx[1]]: true,
				'mdc-notched-outline': true,
				'mdc-notched-outline--notched': /*notched*/ ctx[2],
				'mdc-notched-outline--no-label': /*noLabel*/ ctx[3],
				.../*internalClasses*/ ctx[6]
			})
		},
		/*$$restProps*/ ctx[9]
	];

	let div2_data = {};

	for (let i = 0; i < div2_levels.length; i += 1) {
		div2_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(div2_data, div2_levels[i]);
	}

	return {
		c() {
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block) if_block.c();
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "mdc-notched-outline__leading");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "mdc-notched-outline__trailing");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div2, div2_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t0);
			if (if_block) if_block.m(div2, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			/*div2_binding*/ ctx[15](div2);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.useActions.call(null, div2, /*use*/ ctx[0])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[8].call(null, div2)),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div2, "SMUI:floating-label:mount", /*SMUI_floating_label_mount_handler*/ ctx[16]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div2, "SMUI:floating-label:unmount", /*SMUI_floating_label_unmount_handler*/ ctx[17])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (!/*noLabel*/ ctx[3]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*noLabel*/ 8) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					if_block.m(div2, t1);
				}
			} else if (if_block) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, () => {
					if_block = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div2, div2_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(div2_levels, [
				(!current || dirty & /*className, notched, noLabel, internalClasses*/ 78 && div2_class_value !== (div2_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
					[/*className*/ ctx[1]]: true,
					'mdc-notched-outline': true,
					'mdc-notched-outline--notched': /*notched*/ ctx[2],
					'mdc-notched-outline--no-label': /*noLabel*/ ctx[3],
					.../*internalClasses*/ ctx[6]
				}))) && { class: div2_class_value },
				dirty & /*$$restProps*/ 512 && /*$$restProps*/ ctx[9]
			]));

			if (useActions_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
			if (if_block) if_block.d();
			/*div2_binding*/ ctx[15](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

const func = ([name, value]) => `${name}: ${value};`;

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","notched","noLabel","notch","closeNotch","getElement"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const forwardEvents = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let { notched = false } = $$props;
	let { noLabel = false } = $$props;
	let element;
	let instance;
	let floatingLabel;
	let internalClasses = {};
	let notchStyles = {};

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.onMount)(() => {
		instance = new _material_notched_outline__WEBPACK_IMPORTED_MODULE_3__.MDCNotchedOutlineFoundation({
				addClass,
				removeClass,
				setNotchWidthProperty: width => addNotchStyle('width', width + 'px'),
				removeNotchWidthProperty: () => removeNotchStyle('width')
			});

		instance.init();

		return () => {
			instance.destroy();
		};
	});

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(6, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(6, internalClasses[className] = false, internalClasses);
		}
	}

	function addNotchStyle(name, value) {
		if (notchStyles[name] != value) {
			if (value === '' || value == null) {
				delete notchStyles[name];
				$$invalidate(7, notchStyles);
			} else {
				$$invalidate(7, notchStyles[name] = value, notchStyles);
			}
		}
	}

	function removeNotchStyle(name) {
		if (name in notchStyles) {
			delete notchStyles[name];
			$$invalidate(7, notchStyles);
		}
	}

	function notch(notchWidth) {
		instance.notch(notchWidth);
	}

	function closeNotch() {
		instance.closeNotch();
	}

	function getElement() {
		return element;
	}

	function div2_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(5, element);
		});
	}

	const SMUI_floating_label_mount_handler = event => $$invalidate(4, floatingLabel = event.detail);
	const SMUI_floating_label_unmount_handler = () => $$invalidate(4, floatingLabel = undefined);

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(9, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ('notched' in $$new_props) $$invalidate(2, notched = $$new_props.notched);
		if ('noLabel' in $$new_props) $$invalidate(3, noLabel = $$new_props.noLabel);
		if ('$$scope' in $$new_props) $$invalidate(13, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*floatingLabel*/ 16) {
			$: if (floatingLabel) {
				floatingLabel.addStyle('transition-duration', '0s');
				addClass('mdc-notched-outline--upgraded');

				requestAnimationFrame(() => {
					floatingLabel.removeStyle('transition-duration');
				});
			} else {
				removeClass('mdc-notched-outline--upgraded');
			}
		}
	};

	return [
		use,
		className,
		notched,
		noLabel,
		floatingLabel,
		element,
		internalClasses,
		notchStyles,
		forwardEvents,
		$$restProps,
		notch,
		closeNotch,
		getElement,
		$$scope,
		slots,
		div2_binding,
		SMUI_floating_label_mount_handler,
		SMUI_floating_label_unmount_handler
	];
}

class NotchedOutline extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance_1, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			use: 0,
			class: 1,
			notched: 2,
			noLabel: 3,
			notch: 10,
			closeNotch: 11,
			getElement: 12
		});
	}

	get notch() {
		return this.$$.ctx[10];
	}

	get closeNotch() {
		return this.$$.ctx[11];
	}

	get getElement() {
		return this.$$.ctx[12];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotchedOutline);



/***/ }),

/***/ "./node_modules/@smui/textfield/Input.svelte":
/*!***************************************************!*\
  !*** ./node_modules/@smui/textfield/Input.svelte ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smui/common/internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\textfield\Input.svelte generated by Svelte v3.43.1 */







function create_fragment(ctx) {
	let input;
	let input_class_value;
	let useActions_action;
	let forwardEvents_action;
	let mounted;
	let dispose;

	let input_levels = [
		{
			class: input_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				[/*className*/ ctx[1]]: true,
				'mdc-text-field__input': true
			})
		},
		{ type: /*type*/ ctx[2] },
		{ placeholder: /*placeholder*/ ctx[3] },
		/*valueProp*/ ctx[4],
		/*internalAttrs*/ ctx[6],
		/*$$restProps*/ ctx[10]
	];

	let input_data = {};

	for (let i = 0; i < input_levels.length; i += 1) {
		input_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(input_data, input_levels[i]);
	}

	return {
		c() {
			input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(input, input_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, input, anchor);
			if (input.autofocus) input.focus();
			/*input_binding*/ ctx[21](input);

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.useActions.call(null, input, /*use*/ ctx[0])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[7].call(null, input)),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "change", /*change_handler*/ ctx[22]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "input", /*input_handler*/ ctx[23]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "change", /*changeHandler*/ ctx[9])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(input, input_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(input_levels, [
				dirty & /*className*/ 2 && input_class_value !== (input_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
					[/*className*/ ctx[1]]: true,
					'mdc-text-field__input': true
				})) && { class: input_class_value },
				dirty & /*type*/ 4 && { type: /*type*/ ctx[2] },
				dirty & /*placeholder*/ 8 && { placeholder: /*placeholder*/ ctx[3] },
				dirty & /*valueProp*/ 16 && /*valueProp*/ ctx[4],
				dirty & /*internalAttrs*/ 64 && /*internalAttrs*/ ctx[6],
				dirty & /*$$restProps*/ 1024 && /*$$restProps*/ ctx[10]
			]));

			if (useActions_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(input);
			/*input_binding*/ ctx[21](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function toNumber(value) {
	if (value === '') {
		const nan = new Number(Number.NaN);
		nan.length = 0;
		return nan;
	}

	return +value;
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","getAttr","addAttr","removeAttr","focus","getElement"
	];

	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	const forwardEvents = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let { type = 'text' } = $$props;
	let { placeholder = ' ' } = $$props;
	let { value = '' } = $$props;
	let { files = undefined } = $$props;
	let { dirty = false } = $$props;
	let { invalid = false } = $$props;
	let { updateInvalid = true } = $$props;
	let element;
	let internalAttrs = {};
	let valueProp = {};

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.onMount)(() => {
		if (updateInvalid) {
			$$invalidate(14, invalid = element.matches(':invalid'));
		}
	});

	function valueUpdater(e) {
		switch (type) {
			case 'number':
			case 'range':
				$$invalidate(11, value = toNumber(e.target.value));
				break;
			case 'file':
				$$invalidate(12, files = e.target.files);
			default:
				$$invalidate(11, value = e.target.value);
				break;
		}
	}

	function changeHandler(e) {
		$$invalidate(13, dirty = true);

		if (updateInvalid) {
			$$invalidate(14, invalid = element.matches(':invalid'));
		}
	}

	function getAttr(name) {
		return name in internalAttrs
		? internalAttrs[name]
		: getElement().getAttribute(name);
	}

	function addAttr(name, value) {
		if (internalAttrs[name] !== value) {
			$$invalidate(6, internalAttrs[name] = value, internalAttrs);
		}
	}

	function removeAttr(name) {
		if (!(name in internalAttrs) || internalAttrs[name] != null) {
			$$invalidate(6, internalAttrs[name] = undefined, internalAttrs);
		}
	}

	function focus() {
		getElement().focus();
	}

	function getElement() {
		return element;
	}

	function input_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(5, element);
		});
	}

	const change_handler = e => (type === 'file' || type === 'range') && valueUpdater(e);
	const input_handler = e => type !== 'file' && valueUpdater(e);

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(10, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ('type' in $$new_props) $$invalidate(2, type = $$new_props.type);
		if ('placeholder' in $$new_props) $$invalidate(3, placeholder = $$new_props.placeholder);
		if ('value' in $$new_props) $$invalidate(11, value = $$new_props.value);
		if ('files' in $$new_props) $$invalidate(12, files = $$new_props.files);
		if ('dirty' in $$new_props) $$invalidate(13, dirty = $$new_props.dirty);
		if ('invalid' in $$new_props) $$invalidate(14, invalid = $$new_props.invalid);
		if ('updateInvalid' in $$new_props) $$invalidate(15, updateInvalid = $$new_props.updateInvalid);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*type, valueProp, value*/ 2068) {
			$: if (type === 'file') {
				delete valueProp.value;
				(($$invalidate(4, valueProp), $$invalidate(2, type)), $$invalidate(11, value));
			} else {
				$$invalidate(4, valueProp.value = value == null ? '' : value, valueProp);
			}
		}
	};

	return [
		use,
		className,
		type,
		placeholder,
		valueProp,
		element,
		internalAttrs,
		forwardEvents,
		valueUpdater,
		changeHandler,
		$$restProps,
		value,
		files,
		dirty,
		invalid,
		updateInvalid,
		getAttr,
		addAttr,
		removeAttr,
		focus,
		getElement,
		input_binding,
		change_handler,
		input_handler
	];
}

class Input extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			use: 0,
			class: 1,
			type: 2,
			placeholder: 3,
			value: 11,
			files: 12,
			dirty: 13,
			invalid: 14,
			updateInvalid: 15,
			getAttr: 16,
			addAttr: 17,
			removeAttr: 18,
			focus: 19,
			getElement: 20
		});
	}

	get getAttr() {
		return this.$$.ctx[16];
	}

	get addAttr() {
		return this.$$.ctx[17];
	}

	get removeAttr() {
		return this.$$.ctx[18];
	}

	get focus() {
		return this.$$.ctx[19];
	}

	get getElement() {
		return this.$$.ctx[20];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);



/***/ }),

/***/ "./node_modules/@smui/textfield/Textarea.svelte":
/*!******************************************************!*\
  !*** ./node_modules/@smui/textfield/Textarea.svelte ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smui/common/internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\textfield\Textarea.svelte generated by Svelte v3.43.1 */







function create_fragment(ctx) {
	let textarea;
	let textarea_class_value;
	let textarea_style_value;
	let useActions_action;
	let forwardEvents_action;
	let mounted;
	let dispose;

	let textarea_levels = [
		{
			class: textarea_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				[/*className*/ ctx[2]]: true,
				'mdc-text-field__input': true
			})
		},
		{
			style: textarea_style_value = `${/*resizable*/ ctx[4] ? '' : 'resize: none; '}${/*style*/ ctx[3]}`
		},
		/*internalAttrs*/ ctx[6],
		/*$$restProps*/ ctx[9]
	];

	let textarea_data = {};

	for (let i = 0; i < textarea_levels.length; i += 1) {
		textarea_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(textarea_data, textarea_levels[i]);
	}

	return {
		c() {
			textarea = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("textarea");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(textarea, textarea_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, textarea, anchor);
			if (textarea.autofocus) textarea.focus();
			/*textarea_binding*/ ctx[18](textarea);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(textarea, /*value*/ ctx[0]);

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.useActions.call(null, textarea, /*use*/ ctx[1])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[7].call(null, textarea)),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(textarea, "change", /*changeHandler*/ ctx[8]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(textarea, "input", /*textarea_input_handler*/ ctx[19])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(textarea, textarea_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(textarea_levels, [
				dirty & /*className*/ 4 && textarea_class_value !== (textarea_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
					[/*className*/ ctx[2]]: true,
					'mdc-text-field__input': true
				})) && { class: textarea_class_value },
				dirty & /*resizable, style*/ 24 && textarea_style_value !== (textarea_style_value = `${/*resizable*/ ctx[4] ? '' : 'resize: none; '}${/*style*/ ctx[3]}`) && { style: textarea_style_value },
				dirty & /*internalAttrs*/ 64 && /*internalAttrs*/ ctx[6],
				dirty & /*$$restProps*/ 512 && /*$$restProps*/ ctx[9]
			]));

			if (useActions_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action.update) && dirty & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);

			if (dirty & /*value*/ 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(textarea, /*value*/ ctx[0]);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(textarea);
			/*textarea_binding*/ ctx[18](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","getElement"
	];

	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	const forwardEvents = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let { style = '' } = $$props;
	let { value = '' } = $$props;
	let { dirty = false } = $$props;
	let { invalid = false } = $$props;
	let { updateInvalid = true } = $$props;
	let { resizable = true } = $$props;
	let element;
	let internalAttrs = {};

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.onMount)(() => {
		if (updateInvalid) {
			$$invalidate(11, invalid = element.matches(':invalid'));
		}
	});

	function changeHandler() {
		$$invalidate(10, dirty = true);

		if (updateInvalid) {
			$$invalidate(11, invalid = element.matches(':invalid'));
		}
	}

	function getAttr(name) {
		return name in internalAttrs
		? internalAttrs[name]
		: getElement().getAttribute(name);
	}

	function addAttr(name, value) {
		if (internalAttrs[name] !== value) {
			$$invalidate(6, internalAttrs[name] = value, internalAttrs);
		}
	}

	function removeAttr(name) {
		if (!(name in internalAttrs) || internalAttrs[name] != null) {
			$$invalidate(6, internalAttrs[name] = undefined, internalAttrs);
		}
	}

	function focus() {
		getElement().focus();
	}

	function getElement() {
		return element;
	}

	function textarea_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(5, element);
		});
	}

	function textarea_input_handler() {
		value = this.value;
		$$invalidate(0, value);
	}

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(9, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(1, use = $$new_props.use);
		if ('class' in $$new_props) $$invalidate(2, className = $$new_props.class);
		if ('style' in $$new_props) $$invalidate(3, style = $$new_props.style);
		if ('value' in $$new_props) $$invalidate(0, value = $$new_props.value);
		if ('dirty' in $$new_props) $$invalidate(10, dirty = $$new_props.dirty);
		if ('invalid' in $$new_props) $$invalidate(11, invalid = $$new_props.invalid);
		if ('updateInvalid' in $$new_props) $$invalidate(12, updateInvalid = $$new_props.updateInvalid);
		if ('resizable' in $$new_props) $$invalidate(4, resizable = $$new_props.resizable);
	};

	return [
		value,
		use,
		className,
		style,
		resizable,
		element,
		internalAttrs,
		forwardEvents,
		changeHandler,
		$$restProps,
		dirty,
		invalid,
		updateInvalid,
		getAttr,
		addAttr,
		removeAttr,
		focus,
		getElement,
		textarea_binding,
		textarea_input_handler
	];
}

class Textarea extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			use: 1,
			class: 2,
			style: 3,
			value: 0,
			dirty: 10,
			invalid: 11,
			updateInvalid: 12,
			resizable: 4,
			getAttr: 13,
			addAttr: 14,
			removeAttr: 15,
			focus: 16,
			getElement: 17
		});
	}

	get getAttr() {
		return this.$$.ctx[13];
	}

	get addAttr() {
		return this.$$.ctx[14];
	}

	get removeAttr() {
		return this.$$.ctx[15];
	}

	get focus() {
		return this.$$.ctx[16];
	}

	get getElement() {
		return this.$$.ctx[17];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);



/***/ }),

/***/ "./node_modules/@smui/textfield/Textfield.svelte":
/*!*******************************************************!*\
  !*** ./node_modules/@smui/textfield/Textfield.svelte ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material/textfield */ "./node_modules/@material/textfield/foundation.js");
/* harmony import */ var _material_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material/dom */ "./node_modules/@material/dom/events.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smui/common/internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var _smui_common_ContextFragment_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smui/common/ContextFragment.svelte */ "./node_modules/@smui/common/ContextFragment.svelte");
/* harmony import */ var _smui_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smui/ripple */ "./node_modules/@smui/ripple/index.js");
/* harmony import */ var _smui_floating_label_FloatingLabel_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smui/floating-label/FloatingLabel.svelte */ "./node_modules/@smui/floating-label/FloatingLabel.svelte");
/* harmony import */ var _smui_line_ripple_LineRipple_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @smui/line-ripple/LineRipple.svelte */ "./node_modules/@smui/line-ripple/LineRipple.svelte");
/* harmony import */ var _smui_notched_outline_NotchedOutline_svelte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @smui/notched-outline/NotchedOutline.svelte */ "./node_modules/@smui/notched-outline/NotchedOutline.svelte");
/* harmony import */ var _HelperLine_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HelperLine.js */ "./node_modules/@smui/textfield/HelperLine.js");
/* harmony import */ var _Prefix_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Prefix.js */ "./node_modules/@smui/textfield/Prefix.js");
/* harmony import */ var _Suffix_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Suffix.js */ "./node_modules/@smui/textfield/Suffix.js");
/* harmony import */ var _Input_svelte__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Input.svelte */ "./node_modules/@smui/textfield/Input.svelte");
/* harmony import */ var _Textarea_svelte__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Textarea.svelte */ "./node_modules/@smui/textfield/Textarea.svelte");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\textfield\Textfield.svelte generated by Svelte v3.43.1 */



















const get_helper_slot_changes = dirty => ({});
const get_helper_slot_context = ctx => ({});
const get_ripple_slot_changes = dirty => ({});
const get_ripple_slot_context = ctx => ({});
const get_trailingIcon_slot_changes_1 = dirty => ({});
const get_trailingIcon_slot_context_1 = ctx => ({});
const get_leadingIcon_slot_changes_1 = dirty => ({});
const get_leadingIcon_slot_context_1 = ctx => ({});
const get_label_slot_changes_2 = dirty => ({});
const get_label_slot_context_2 = ctx => ({});
const get_trailingIcon_slot_changes = dirty => ({});
const get_trailingIcon_slot_context = ctx => ({});
const get_suffix_slot_changes = dirty => ({});
const get_suffix_slot_context = ctx => ({});
const get_prefix_slot_changes = dirty => ({});
const get_prefix_slot_context = ctx => ({});
const get_internalCounter_slot_changes = dirty => ({});
const get_internalCounter_slot_context = ctx => ({});
const get_leadingIcon_slot_changes = dirty => ({});
const get_leadingIcon_slot_context = ctx => ({});
const get_label_slot_changes_1 = dirty => ({});
const get_label_slot_context_1 = ctx => ({});
const get_label_slot_changes = dirty => ({});
const get_label_slot_context = ctx => ({});

// (164:0) {:else}
function create_else_block_1(ctx) {
	let div;
	let t0;
	let contextfragment0;
	let t1;
	let t2;
	let contextfragment1;
	let t3;
	let div_class_value;
	let div_style_value;
	let Ripple_action;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let mounted;
	let dispose;
	const label_slot_template = /*#slots*/ ctx[50].label;
	const label_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(label_slot_template, ctx, /*$$scope*/ ctx[89], get_label_slot_context_2);

	contextfragment0 = new _smui_common_ContextFragment_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				key: "SMUI:textfield:icon:leading",
				value: true,
				$$slots: { default: [create_default_slot_9] },
				$$scope: { ctx }
			}
		});

	const default_slot_template = /*#slots*/ ctx[50].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[89], null);

	contextfragment1 = new _smui_common_ContextFragment_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				key: "SMUI:textfield:icon:leading",
				value: false,
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			}
		});

	const ripple_slot_template = /*#slots*/ ctx[50].ripple;
	const ripple_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(ripple_slot_template, ctx, /*$$scope*/ ctx[89], get_ripple_slot_context);

	let div_levels = [
		{
			class: div_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				[/*className*/ ctx[9]]: true,
				'mdc-text-field': true,
				'mdc-text-field--disabled': /*disabled*/ ctx[12],
				'mdc-text-field--textarea': /*textarea*/ ctx[14],
				'mdc-text-field--filled': /*variant*/ ctx[15] === 'filled',
				'mdc-text-field--outlined': /*variant*/ ctx[15] === 'outlined',
				'smui-text-field--standard': /*variant*/ ctx[15] === 'standard' && !/*textarea*/ ctx[14],
				'mdc-text-field--no-label': /*noLabel*/ ctx[16] || !/*$$slots*/ ctx[41].label,
				'mdc-text-field--with-leading-icon': /*$$slots*/ ctx[41].leadingIcon,
				'mdc-text-field--with-trailing-icon': /*$$slots*/ ctx[41].trailingIcon,
				'mdc-text-field--invalid': /*invalid*/ ctx[2] !== /*uninitializedValue*/ ctx[36] && /*invalid*/ ctx[2],
				.../*internalClasses*/ ctx[26]
			})
		},
		{
			style: div_style_value = Object.entries(/*internalStyles*/ ctx[27]).map(func_1).concat([/*style*/ ctx[10]]).join(' ')
		},
		(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.exclude)(/*$$restProps*/ ctx[42], ['input$', 'label$', 'ripple$', 'outline$', 'helperLine$'])
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(div_data, div_levels[i]);
	}

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (label_slot) label_slot.c();
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(contextfragment0.$$.fragment);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (default_slot) default_slot.c();
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(contextfragment1.$$.fragment);
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (ripple_slot) ripple_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div, div_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);

			if (label_slot) {
				label_slot.m(div, null);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(contextfragment0, div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);

			if (default_slot) {
				default_slot.m(div, null);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(contextfragment1, div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t3);

			if (ripple_slot) {
				ripple_slot.m(div, null);
			}

			/*div_binding*/ ctx[79](div);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(Ripple_action = _smui_ripple__WEBPACK_IMPORTED_MODULE_4__["default"].call(null, div, {
						ripple: /*ripple*/ ctx[11],
						unbounded: false,
						addClass: /*addClass*/ ctx[38],
						removeClass: /*removeClass*/ ctx[39],
						addStyle: /*addStyle*/ ctx[40]
					})),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.useActions.call(null, div, /*use*/ ctx[8])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[35].call(null, div)),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "SMUI:textfield:leading-icon:mount", /*SMUI_textfield_leading_icon_mount_handler_1*/ ctx[80]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "SMUI:textfield:leading-icon:unmount", /*SMUI_textfield_leading_icon_unmount_handler_1*/ ctx[81]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "SMUI:textfield:trailing-icon:mount", /*SMUI_textfield_trailing_icon_mount_handler_1*/ ctx[82]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "SMUI:textfield:trailing-icon:unmount", /*SMUI_textfield_trailing_icon_unmount_handler_1*/ ctx[83])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (label_slot) {
				if (label_slot.p && (!current || dirty[2] & /*$$scope*/ 134217728)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						label_slot,
						label_slot_template,
						ctx,
						/*$$scope*/ ctx[89],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[89])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(label_slot_template, /*$$scope*/ ctx[89], dirty, get_label_slot_changes_2),
						get_label_slot_context_2
					);
				}
			}

			const contextfragment0_changes = {};

			if (dirty[2] & /*$$scope*/ 134217728) {
				contextfragment0_changes.$$scope = { dirty, ctx };
			}

			contextfragment0.$set(contextfragment0_changes);

			if (default_slot) {
				if (default_slot.p && (!current || dirty[2] & /*$$scope*/ 134217728)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[89],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[89])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[89], dirty, null),
						null
					);
				}
			}

			const contextfragment1_changes = {};

			if (dirty[2] & /*$$scope*/ 134217728) {
				contextfragment1_changes.$$scope = { dirty, ctx };
			}

			contextfragment1.$set(contextfragment1_changes);

			if (ripple_slot) {
				if (ripple_slot.p && (!current || dirty[2] & /*$$scope*/ 134217728)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						ripple_slot,
						ripple_slot_template,
						ctx,
						/*$$scope*/ ctx[89],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[89])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(ripple_slot_template, /*$$scope*/ ctx[89], dirty, get_ripple_slot_changes),
						get_ripple_slot_context
					);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div, div_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(div_levels, [
				(!current || dirty[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/ 67228164 | dirty[1] & /*$$slots*/ 1024 && div_class_value !== (div_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
					[/*className*/ ctx[9]]: true,
					'mdc-text-field': true,
					'mdc-text-field--disabled': /*disabled*/ ctx[12],
					'mdc-text-field--textarea': /*textarea*/ ctx[14],
					'mdc-text-field--filled': /*variant*/ ctx[15] === 'filled',
					'mdc-text-field--outlined': /*variant*/ ctx[15] === 'outlined',
					'smui-text-field--standard': /*variant*/ ctx[15] === 'standard' && !/*textarea*/ ctx[14],
					'mdc-text-field--no-label': /*noLabel*/ ctx[16] || !/*$$slots*/ ctx[41].label,
					'mdc-text-field--with-leading-icon': /*$$slots*/ ctx[41].leadingIcon,
					'mdc-text-field--with-trailing-icon': /*$$slots*/ ctx[41].trailingIcon,
					'mdc-text-field--invalid': /*invalid*/ ctx[2] !== /*uninitializedValue*/ ctx[36] && /*invalid*/ ctx[2],
					.../*internalClasses*/ ctx[26]
				}))) && { class: div_class_value },
				(!current || dirty[0] & /*internalStyles, style*/ 134218752 && div_style_value !== (div_style_value = Object.entries(/*internalStyles*/ ctx[27]).map(func_1).concat([/*style*/ ctx[10]]).join(' '))) && { style: div_style_value },
				dirty[1] & /*$$restProps*/ 2048 && (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.exclude)(/*$$restProps*/ ctx[42], ['input$', 'label$', 'ripple$', 'outline$', 'helperLine$'])
			]));

			if (Ripple_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(Ripple_action.update) && dirty[0] & /*ripple*/ 2048) Ripple_action.update.call(null, {
				ripple: /*ripple*/ ctx[11],
				unbounded: false,
				addClass: /*addClass*/ ctx[38],
				removeClass: /*removeClass*/ ctx[39],
				addStyle: /*addStyle*/ ctx[40]
			});

			if (useActions_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action.update) && dirty[0] & /*use*/ 256) useActions_action.update.call(null, /*use*/ ctx[8]);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(label_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(contextfragment0.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(contextfragment1.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(ripple_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(label_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(contextfragment0.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(contextfragment1.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(ripple_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			if (label_slot) label_slot.d(detaching);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(contextfragment0);
			if (default_slot) default_slot.d(detaching);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(contextfragment1);
			if (ripple_slot) ripple_slot.d(detaching);
			/*div_binding*/ ctx[79](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

// (1:0) {#if valued}
function create_if_block_1(ctx) {
	let label_1;
	let t0;
	let t1;
	let contextfragment0;
	let t2;
	let t3;
	let current_block_type_index;
	let if_block2;
	let t4;
	let contextfragment1;
	let t5;
	let label_1_class_value;
	let label_1_style_value;
	let label_1_for_value;
	let Ripple_action;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let mounted;
	let dispose;
	let if_block0 = !/*textarea*/ ctx[14] && /*variant*/ ctx[15] !== 'outlined' && create_if_block_8(ctx);
	let if_block1 = (/*textarea*/ ctx[14] || /*variant*/ ctx[15] === 'outlined') && create_if_block_6(ctx);

	contextfragment0 = new _smui_common_ContextFragment_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				key: "SMUI:textfield:icon:leading",
				value: true,
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			}
		});

	const default_slot_template = /*#slots*/ ctx[50].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[89], null);
	const if_block_creators = [create_if_block_3, create_else_block];
	const if_blocks = [];

	function select_block_type_1(ctx, dirty) {
		if (/*textarea*/ ctx[14]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_1(ctx, [-1, -1, -1, -1]);
	if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	contextfragment1 = new _smui_common_ContextFragment_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				key: "SMUI:textfield:icon:leading",
				value: false,
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	let if_block3 = !/*textarea*/ ctx[14] && /*variant*/ ctx[15] !== 'outlined' && /*ripple*/ ctx[11] && create_if_block_2(ctx);

	let label_1_levels = [
		{
			class: label_1_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				[/*className*/ ctx[9]]: true,
				'mdc-text-field': true,
				'mdc-text-field--disabled': /*disabled*/ ctx[12],
				'mdc-text-field--textarea': /*textarea*/ ctx[14],
				'mdc-text-field--filled': /*variant*/ ctx[15] === 'filled',
				'mdc-text-field--outlined': /*variant*/ ctx[15] === 'outlined',
				'smui-text-field--standard': /*variant*/ ctx[15] === 'standard' && !/*textarea*/ ctx[14],
				'mdc-text-field--no-label': /*noLabel*/ ctx[16] || /*label*/ ctx[17] == null && !/*$$slots*/ ctx[41].label,
				'mdc-text-field--label-floating': /*focused*/ ctx[29] || /*value*/ ctx[0] != null && /*value*/ ctx[0] !== '',
				'mdc-text-field--with-leading-icon': /*withLeadingIcon*/ ctx[22] === /*uninitializedValue*/ ctx[36]
				? /*$$slots*/ ctx[41].leadingIcon
				: /*withLeadingIcon*/ ctx[22],
				'mdc-text-field--with-trailing-icon': /*withTrailingIcon*/ ctx[23] === /*uninitializedValue*/ ctx[36]
				? /*$$slots*/ ctx[41].trailingIcon
				: /*withTrailingIcon*/ ctx[23],
				'mdc-text-field--with-internal-counter': /*textarea*/ ctx[14] && /*$$slots*/ ctx[41].internalCounter,
				'mdc-text-field--invalid': /*invalid*/ ctx[2] !== /*uninitializedValue*/ ctx[36] && /*invalid*/ ctx[2],
				.../*internalClasses*/ ctx[26]
			})
		},
		{
			style: label_1_style_value = Object.entries(/*internalStyles*/ ctx[27]).map(func).concat([/*style*/ ctx[10]]).join(' ')
		},
		{
			for: label_1_for_value = /* suppress a11y warning, since this is wrapped */ null
		},
		(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.exclude)(/*$$restProps*/ ctx[42], ['input$', 'label$', 'ripple$', 'outline$', 'helperLine$'])
	];

	let label_1_data = {};

	for (let i = 0; i < label_1_levels.length; i += 1) {
		label_1_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(label_1_data, label_1_levels[i]);
	}

	return {
		c() {
			label_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			if (if_block0) if_block0.c();
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block1) if_block1.c();
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(contextfragment0.$$.fragment);
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (default_slot) default_slot.c();
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if_block2.c();
			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(contextfragment1.$$.fragment);
			t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block3) if_block3.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(label_1, label_1_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, label_1, anchor);
			if (if_block0) if_block0.m(label_1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label_1, t0);
			if (if_block1) if_block1.m(label_1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label_1, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(contextfragment0, label_1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label_1, t2);

			if (default_slot) {
				default_slot.m(label_1, null);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label_1, t3);
			if_blocks[current_block_type_index].m(label_1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label_1, t4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(contextfragment1, label_1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label_1, t5);
			if (if_block3) if_block3.m(label_1, null);
			/*label_1_binding*/ ctx[72](label_1);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(Ripple_action = _smui_ripple__WEBPACK_IMPORTED_MODULE_4__["default"].call(null, label_1, {
						ripple: !/*textarea*/ ctx[14] && /*variant*/ ctx[15] === 'filled',
						unbounded: false,
						addClass: /*addClass*/ ctx[38],
						removeClass: /*removeClass*/ ctx[39],
						addStyle: /*addStyle*/ ctx[40],
						eventTarget: /*inputElement*/ ctx[34],
						activeTarget: /*inputElement*/ ctx[34],
						initPromise: /*initPromise*/ ctx[37]
					})),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.useActions.call(null, label_1, /*use*/ ctx[8])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[35].call(null, label_1)),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(label_1, "SMUI:textfield:leading-icon:mount", /*SMUI_textfield_leading_icon_mount_handler*/ ctx[73]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(label_1, "SMUI:textfield:leading-icon:unmount", /*SMUI_textfield_leading_icon_unmount_handler*/ ctx[74]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(label_1, "SMUI:textfield:trailing-icon:mount", /*SMUI_textfield_trailing_icon_mount_handler*/ ctx[75]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(label_1, "SMUI:textfield:trailing-icon:unmount", /*SMUI_textfield_trailing_icon_unmount_handler*/ ctx[76]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(label_1, "SMUI:textfield:character-counter:mount", /*SMUI_textfield_character_counter_mount_handler*/ ctx[77]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(label_1, "SMUI:textfield:character-counter:unmount", /*SMUI_textfield_character_counter_unmount_handler*/ ctx[78])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (!/*textarea*/ ctx[14] && /*variant*/ ctx[15] !== 'outlined') {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*textarea, variant*/ 49152) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_8(ctx);
					if_block0.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0, 1);
					if_block0.m(label_1, t0);
				}
			} else if (if_block0) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			if (/*textarea*/ ctx[14] || /*variant*/ ctx[15] === 'outlined') {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*textarea, variant*/ 49152) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_6(ctx);
					if_block1.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					if_block1.m(label_1, t1);
				}
			} else if (if_block1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			const contextfragment0_changes = {};

			if (dirty[2] & /*$$scope*/ 134217728) {
				contextfragment0_changes.$$scope = { dirty, ctx };
			}

			contextfragment0.$set(contextfragment0_changes);

			if (default_slot) {
				if (default_slot.p && (!current || dirty[2] & /*$$scope*/ 134217728)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[89],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[89])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[89], dirty, null),
						null
					);
				}
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_1(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
				if_block2 = if_blocks[current_block_type_index];

				if (!if_block2) {
					if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block2.c();
				} else {
					if_block2.p(ctx, dirty);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block2, 1);
				if_block2.m(label_1, t4);
			}

			const contextfragment1_changes = {};

			if (dirty[2] & /*$$scope*/ 134217728) {
				contextfragment1_changes.$$scope = { dirty, ctx };
			}

			contextfragment1.$set(contextfragment1_changes);

			if (!/*textarea*/ ctx[14] && /*variant*/ ctx[15] !== 'outlined' && /*ripple*/ ctx[11]) {
				if (if_block3) {
					if_block3.p(ctx, dirty);

					if (dirty[0] & /*textarea, variant, ripple*/ 51200) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block3, 1);
					}
				} else {
					if_block3 = create_if_block_2(ctx);
					if_block3.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block3, 1);
					if_block3.m(label_1, null);
				}
			} else if (if_block3) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block3, 1, 1, () => {
					if_block3 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(label_1, label_1_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(label_1_levels, [
				(!current || dirty[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/ 616813061 | dirty[1] & /*$$slots*/ 1024 && label_1_class_value !== (label_1_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
					[/*className*/ ctx[9]]: true,
					'mdc-text-field': true,
					'mdc-text-field--disabled': /*disabled*/ ctx[12],
					'mdc-text-field--textarea': /*textarea*/ ctx[14],
					'mdc-text-field--filled': /*variant*/ ctx[15] === 'filled',
					'mdc-text-field--outlined': /*variant*/ ctx[15] === 'outlined',
					'smui-text-field--standard': /*variant*/ ctx[15] === 'standard' && !/*textarea*/ ctx[14],
					'mdc-text-field--no-label': /*noLabel*/ ctx[16] || /*label*/ ctx[17] == null && !/*$$slots*/ ctx[41].label,
					'mdc-text-field--label-floating': /*focused*/ ctx[29] || /*value*/ ctx[0] != null && /*value*/ ctx[0] !== '',
					'mdc-text-field--with-leading-icon': /*withLeadingIcon*/ ctx[22] === /*uninitializedValue*/ ctx[36]
					? /*$$slots*/ ctx[41].leadingIcon
					: /*withLeadingIcon*/ ctx[22],
					'mdc-text-field--with-trailing-icon': /*withTrailingIcon*/ ctx[23] === /*uninitializedValue*/ ctx[36]
					? /*$$slots*/ ctx[41].trailingIcon
					: /*withTrailingIcon*/ ctx[23],
					'mdc-text-field--with-internal-counter': /*textarea*/ ctx[14] && /*$$slots*/ ctx[41].internalCounter,
					'mdc-text-field--invalid': /*invalid*/ ctx[2] !== /*uninitializedValue*/ ctx[36] && /*invalid*/ ctx[2],
					.../*internalClasses*/ ctx[26]
				}))) && { class: label_1_class_value },
				(!current || dirty[0] & /*internalStyles, style*/ 134218752 && label_1_style_value !== (label_1_style_value = Object.entries(/*internalStyles*/ ctx[27]).map(func).concat([/*style*/ ctx[10]]).join(' '))) && { style: label_1_style_value },
				{ for: label_1_for_value },
				dirty[1] & /*$$restProps*/ 2048 && (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.exclude)(/*$$restProps*/ ctx[42], ['input$', 'label$', 'ripple$', 'outline$', 'helperLine$'])
			]));

			if (Ripple_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(Ripple_action.update) && dirty[0] & /*textarea, variant*/ 49152 | dirty[1] & /*inputElement*/ 8) Ripple_action.update.call(null, {
				ripple: !/*textarea*/ ctx[14] && /*variant*/ ctx[15] === 'filled',
				unbounded: false,
				addClass: /*addClass*/ ctx[38],
				removeClass: /*removeClass*/ ctx[39],
				addStyle: /*addStyle*/ ctx[40],
				eventTarget: /*inputElement*/ ctx[34],
				activeTarget: /*inputElement*/ ctx[34],
				initPromise: /*initPromise*/ ctx[37]
			});

			if (useActions_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action.update) && dirty[0] & /*use*/ 256) useActions_action.update.call(null, /*use*/ ctx[8]);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(contextfragment0.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(contextfragment1.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block3);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(contextfragment0.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(contextfragment1.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block3);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(label_1);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(contextfragment0);
			if (default_slot) default_slot.d(detaching);
			if_blocks[current_block_type_index].d();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(contextfragment1);
			if (if_block3) if_block3.d();
			/*label_1_binding*/ ctx[72](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

// (209:4) <ContextFragment key="SMUI:textfield:icon:leading" value={true}>
function create_default_slot_9(ctx) {
	let current;
	const leadingIcon_slot_template = /*#slots*/ ctx[50].leadingIcon;
	const leadingIcon_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(leadingIcon_slot_template, ctx, /*$$scope*/ ctx[89], get_leadingIcon_slot_context_1);

	return {
		c() {
			if (leadingIcon_slot) leadingIcon_slot.c();
		},
		m(target, anchor) {
			if (leadingIcon_slot) {
				leadingIcon_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (leadingIcon_slot) {
				if (leadingIcon_slot.p && (!current || dirty[2] & /*$$scope*/ 134217728)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						leadingIcon_slot,
						leadingIcon_slot_template,
						ctx,
						/*$$scope*/ ctx[89],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[89])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(leadingIcon_slot_template, /*$$scope*/ ctx[89], dirty, get_leadingIcon_slot_changes_1),
						get_leadingIcon_slot_context_1
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(leadingIcon_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(leadingIcon_slot, local);
			current = false;
		},
		d(detaching) {
			if (leadingIcon_slot) leadingIcon_slot.d(detaching);
		}
	};
}

// (213:4) <ContextFragment key="SMUI:textfield:icon:leading" value={false}>
function create_default_slot_8(ctx) {
	let current;
	const trailingIcon_slot_template = /*#slots*/ ctx[50].trailingIcon;
	const trailingIcon_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(trailingIcon_slot_template, ctx, /*$$scope*/ ctx[89], get_trailingIcon_slot_context_1);

	return {
		c() {
			if (trailingIcon_slot) trailingIcon_slot.c();
		},
		m(target, anchor) {
			if (trailingIcon_slot) {
				trailingIcon_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (trailingIcon_slot) {
				if (trailingIcon_slot.p && (!current || dirty[2] & /*$$scope*/ 134217728)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						trailingIcon_slot,
						trailingIcon_slot_template,
						ctx,
						/*$$scope*/ ctx[89],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[89])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(trailingIcon_slot_template, /*$$scope*/ ctx[89], dirty, get_trailingIcon_slot_changes_1),
						get_trailingIcon_slot_context_1
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(trailingIcon_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(trailingIcon_slot, local);
			current = false;
		},
		d(detaching) {
			if (trailingIcon_slot) trailingIcon_slot.d(detaching);
		}
	};
}

// (63:4) {#if !textarea && variant !== 'outlined'}
function create_if_block_8(ctx) {
	let t;
	let if_block1_anchor;
	let current;
	let if_block0 = /*variant*/ ctx[15] === 'filled' && create_if_block_10(ctx);
	let if_block1 = !/*noLabel*/ ctx[16] && (/*label*/ ctx[17] != null || /*$$slots*/ ctx[41].label) && create_if_block_9(ctx);

	return {
		c() {
			if (if_block0) if_block0.c();
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block1) if_block1.c();
			if_block1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
			if (if_block1) if_block1.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (/*variant*/ ctx[15] === 'filled') {
				if (if_block0) {
					
				} else {
					if_block0 = create_if_block_10(ctx);
					if_block0.c();
					if_block0.m(t.parentNode, t);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (!/*noLabel*/ ctx[16] && (/*label*/ ctx[17] != null || /*$$slots*/ ctx[41].label)) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*noLabel, label*/ 196608 | dirty[1] & /*$$slots*/ 1024) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_9(ctx);
					if_block1.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1);
			current = false;
		},
		d(detaching) {
			if (if_block0) if_block0.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
			if (if_block1) if_block1.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block1_anchor);
		}
	};
}

// (64:6) {#if variant === 'filled'}
function create_if_block_10(ctx) {
	let span;

	return {
		c() {
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "class", "mdc-text-field__ripple");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
		}
	};
}

// (67:6) {#if !noLabel && (label != null || $$slots.label)}
function create_if_block_9(ctx) {
	let floatinglabel;
	let current;

	const floatinglabel_spread_levels = [
		{
			floatAbove: /*focused*/ ctx[29] || /*value*/ ctx[0] != null && /*value*/ ctx[0] !== ''
		},
		{ required: /*required*/ ctx[13] },
		{ wrapped: true },
		(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[42], 'label$')
	];

	let floatinglabel_props = {
		$$slots: { default: [create_default_slot_7] },
		$$scope: { ctx }
	};

	for (let i = 0; i < floatinglabel_spread_levels.length; i += 1) {
		floatinglabel_props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(floatinglabel_props, floatinglabel_spread_levels[i]);
	}

	floatinglabel = new _smui_floating_label_FloatingLabel_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({ props: floatinglabel_props });
	/*floatinglabel_binding*/ ctx[51](floatinglabel);

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(floatinglabel.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(floatinglabel, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const floatinglabel_changes = (dirty[0] & /*focused, value, required*/ 536879105 | dirty[1] & /*$$restProps*/ 2048)
			? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(floatinglabel_spread_levels, [
					dirty[0] & /*focused, value*/ 536870913 && {
						floatAbove: /*focused*/ ctx[29] || /*value*/ ctx[0] != null && /*value*/ ctx[0] !== ''
					},
					dirty[0] & /*required*/ 8192 && { required: /*required*/ ctx[13] },
					floatinglabel_spread_levels[2],
					dirty[1] & /*$$restProps*/ 2048 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)((0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[42], 'label$'))
				])
			: {};

			if (dirty[0] & /*label*/ 131072 | dirty[2] & /*$$scope*/ 134217728) {
				floatinglabel_changes.$$scope = { dirty, ctx };
			}

			floatinglabel.$set(floatinglabel_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(floatinglabel.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(floatinglabel.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			/*floatinglabel_binding*/ ctx[51](null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(floatinglabel, detaching);
		}
	};
}

// (68:8) <FloatingLabel           bind:this={floatingLabel}           floatAbove={focused || (value != null && value !== '')}           {required}           wrapped           {...prefixFilter($$restProps, 'label$')}           >
function create_default_slot_7(ctx) {
	let t_value = (/*label*/ ctx[17] == null ? '' : /*label*/ ctx[17]) + "";
	let t;
	let current;
	const label_slot_template = /*#slots*/ ctx[50].label;
	const label_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(label_slot_template, ctx, /*$$scope*/ ctx[89], get_label_slot_context);

	return {
		c() {
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			if (label_slot) label_slot.c();
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);

			if (label_slot) {
				label_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*label*/ 131072) && t_value !== (t_value = (/*label*/ ctx[17] == null ? '' : /*label*/ ctx[17]) + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

			if (label_slot) {
				if (label_slot.p && (!current || dirty[2] & /*$$scope*/ 134217728)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						label_slot,
						label_slot_template,
						ctx,
						/*$$scope*/ ctx[89],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[89])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(label_slot_template, /*$$scope*/ ctx[89], dirty, get_label_slot_changes),
						get_label_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(label_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(label_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
			if (label_slot) label_slot.d(detaching);
		}
	};
}

// (78:4) {#if textarea || variant === 'outlined'}
function create_if_block_6(ctx) {
	let notchedoutline;
	let current;

	const notchedoutline_spread_levels = [
		{
			noLabel: /*noLabel*/ ctx[16] || /*label*/ ctx[17] == null && !/*$$slots*/ ctx[41].label
		},
		(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[42], 'outline$')
	];

	let notchedoutline_props = {
		$$slots: { default: [create_default_slot_5] },
		$$scope: { ctx }
	};

	for (let i = 0; i < notchedoutline_spread_levels.length; i += 1) {
		notchedoutline_props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(notchedoutline_props, notchedoutline_spread_levels[i]);
	}

	notchedoutline = new _smui_notched_outline_NotchedOutline_svelte__WEBPACK_IMPORTED_MODULE_7__["default"]({ props: notchedoutline_props });
	/*notchedoutline_binding*/ ctx[53](notchedoutline);

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(notchedoutline.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(notchedoutline, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const notchedoutline_changes = (dirty[0] & /*noLabel, label*/ 196608 | dirty[1] & /*$$slots, $$restProps*/ 3072)
			? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(notchedoutline_spread_levels, [
					dirty[0] & /*noLabel, label*/ 196608 | dirty[1] & /*$$slots*/ 1024 && {
						noLabel: /*noLabel*/ ctx[16] || /*label*/ ctx[17] == null && !/*$$slots*/ ctx[41].label
					},
					dirty[1] & /*$$restProps*/ 2048 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)((0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[42], 'outline$'))
				])
			: {};

			if (dirty[0] & /*focused, value, required, floatingLabel, label, noLabel*/ 537075745 | dirty[1] & /*$$restProps, $$slots*/ 3072 | dirty[2] & /*$$scope*/ 134217728) {
				notchedoutline_changes.$$scope = { dirty, ctx };
			}

			notchedoutline.$set(notchedoutline_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(notchedoutline.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(notchedoutline.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			/*notchedoutline_binding*/ ctx[53](null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(notchedoutline, detaching);
		}
	};
}

// (84:8) {#if !noLabel && (label != null || $$slots.label)}
function create_if_block_7(ctx) {
	let floatinglabel;
	let current;

	const floatinglabel_spread_levels = [
		{
			floatAbove: /*focused*/ ctx[29] || /*value*/ ctx[0] != null && /*value*/ ctx[0] !== ''
		},
		{ required: /*required*/ ctx[13] },
		{ wrapped: true },
		(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[42], 'label$')
	];

	let floatinglabel_props = {
		$$slots: { default: [create_default_slot_6] },
		$$scope: { ctx }
	};

	for (let i = 0; i < floatinglabel_spread_levels.length; i += 1) {
		floatinglabel_props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(floatinglabel_props, floatinglabel_spread_levels[i]);
	}

	floatinglabel = new _smui_floating_label_FloatingLabel_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({ props: floatinglabel_props });
	/*floatinglabel_binding_1*/ ctx[52](floatinglabel);

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(floatinglabel.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(floatinglabel, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const floatinglabel_changes = (dirty[0] & /*focused, value, required*/ 536879105 | dirty[1] & /*$$restProps*/ 2048)
			? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(floatinglabel_spread_levels, [
					dirty[0] & /*focused, value*/ 536870913 && {
						floatAbove: /*focused*/ ctx[29] || /*value*/ ctx[0] != null && /*value*/ ctx[0] !== ''
					},
					dirty[0] & /*required*/ 8192 && { required: /*required*/ ctx[13] },
					floatinglabel_spread_levels[2],
					dirty[1] & /*$$restProps*/ 2048 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)((0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[42], 'label$'))
				])
			: {};

			if (dirty[0] & /*label*/ 131072 | dirty[2] & /*$$scope*/ 134217728) {
				floatinglabel_changes.$$scope = { dirty, ctx };
			}

			floatinglabel.$set(floatinglabel_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(floatinglabel.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(floatinglabel.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			/*floatinglabel_binding_1*/ ctx[52](null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(floatinglabel, detaching);
		}
	};
}

// (85:10) <FloatingLabel             bind:this={floatingLabel}             floatAbove={focused || (value != null && value !== '')}             {required}             wrapped             {...prefixFilter($$restProps, 'label$')}             >
function create_default_slot_6(ctx) {
	let t_value = (/*label*/ ctx[17] == null ? '' : /*label*/ ctx[17]) + "";
	let t;
	let current;
	const label_slot_template = /*#slots*/ ctx[50].label;
	const label_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(label_slot_template, ctx, /*$$scope*/ ctx[89], get_label_slot_context_1);

	return {
		c() {
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			if (label_slot) label_slot.c();
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);

			if (label_slot) {
				label_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*label*/ 131072) && t_value !== (t_value = (/*label*/ ctx[17] == null ? '' : /*label*/ ctx[17]) + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

			if (label_slot) {
				if (label_slot.p && (!current || dirty[2] & /*$$scope*/ 134217728)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						label_slot,
						label_slot_template,
						ctx,
						/*$$scope*/ ctx[89],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[89])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(label_slot_template, /*$$scope*/ ctx[89], dirty, get_label_slot_changes_1),
						get_label_slot_context_1
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(label_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(label_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
			if (label_slot) label_slot.d(detaching);
		}
	};
}

// (79:6) <NotchedOutline         bind:this={notchedOutline}         noLabel={noLabel || (label == null && !$$slots.label)}         {...prefixFilter($$restProps, 'outline$')}       >
function create_default_slot_5(ctx) {
	let if_block_anchor;
	let current;
	let if_block = !/*noLabel*/ ctx[16] && (/*label*/ ctx[17] != null || /*$$slots*/ ctx[41].label) && create_if_block_7(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (!/*noLabel*/ ctx[16] && (/*label*/ ctx[17] != null || /*$$slots*/ ctx[41].label)) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty[0] & /*noLabel, label*/ 196608 | dirty[1] & /*$$slots*/ 1024) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block_7(ctx);
					if_block.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, () => {
					if_block = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
		}
	};
}

// (96:4) <ContextFragment key="SMUI:textfield:icon:leading" value={true}>
function create_default_slot_4(ctx) {
	let current;
	const leadingIcon_slot_template = /*#slots*/ ctx[50].leadingIcon;
	const leadingIcon_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(leadingIcon_slot_template, ctx, /*$$scope*/ ctx[89], get_leadingIcon_slot_context);

	return {
		c() {
			if (leadingIcon_slot) leadingIcon_slot.c();
		},
		m(target, anchor) {
			if (leadingIcon_slot) {
				leadingIcon_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (leadingIcon_slot) {
				if (leadingIcon_slot.p && (!current || dirty[2] & /*$$scope*/ 134217728)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						leadingIcon_slot,
						leadingIcon_slot_template,
						ctx,
						/*$$scope*/ ctx[89],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[89])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(leadingIcon_slot_template, /*$$scope*/ ctx[89], dirty, get_leadingIcon_slot_changes),
						get_leadingIcon_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(leadingIcon_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(leadingIcon_slot, local);
			current = false;
		},
		d(detaching) {
			if (leadingIcon_slot) leadingIcon_slot.d(detaching);
		}
	};
}

// (125:4) {:else}
function create_else_block(ctx) {
	let t0;
	let t1;
	let input_1;
	let updating_value;
	let updating_files;
	let updating_dirty;
	let updating_invalid;
	let t2;
	let t3;
	let current;
	const prefix_slot_template = /*#slots*/ ctx[50].prefix;
	const prefix_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(prefix_slot_template, ctx, /*$$scope*/ ctx[89], get_prefix_slot_context);
	let if_block0 = /*prefix*/ ctx[19] != null && create_if_block_5(ctx);

	const input_1_spread_levels = [
		{ type: /*type*/ ctx[18] },
		{ disabled: /*disabled*/ ctx[12] },
		{ required: /*required*/ ctx[13] },
		{ updateInvalid: /*updateInvalid*/ ctx[21] },
		{ "aria-controls": /*helperId*/ ctx[28] },
		{ "aria-describedby": /*helperId*/ ctx[28] },
		/*noLabel*/ ctx[16] && /*label*/ ctx[17] != null
		? { placeholder: /*label*/ ctx[17] }
		: {},
		(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[42], 'input$')
	];

	function input_1_value_binding(value) {
		/*input_1_value_binding*/ ctx[63](value);
	}

	function input_1_files_binding(value) {
		/*input_1_files_binding*/ ctx[64](value);
	}

	function input_1_dirty_binding(value) {
		/*input_1_dirty_binding*/ ctx[65](value);
	}

	function input_1_invalid_binding(value) {
		/*input_1_invalid_binding*/ ctx[66](value);
	}

	let input_1_props = {};

	for (let i = 0; i < input_1_spread_levels.length; i += 1) {
		input_1_props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(input_1_props, input_1_spread_levels[i]);
	}

	if (/*value*/ ctx[0] !== void 0) {
		input_1_props.value = /*value*/ ctx[0];
	}

	if (/*files*/ ctx[1] !== void 0) {
		input_1_props.files = /*files*/ ctx[1];
	}

	if (/*dirty*/ ctx[4] !== void 0) {
		input_1_props.dirty = /*dirty*/ ctx[4];
	}

	if (/*invalid*/ ctx[2] !== void 0) {
		input_1_props.invalid = /*invalid*/ ctx[2];
	}

	input_1 = new _Input_svelte__WEBPACK_IMPORTED_MODULE_11__["default"]({ props: input_1_props });
	/*input_1_binding*/ ctx[62](input_1);
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(input_1, 'value', input_1_value_binding));
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(input_1, 'files', input_1_files_binding));
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(input_1, 'dirty', input_1_dirty_binding));
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(input_1, 'invalid', input_1_invalid_binding));
	input_1.$on("blur", /*blur_handler_3*/ ctx[67]);
	input_1.$on("focus", /*focus_handler_3*/ ctx[68]);
	input_1.$on("blur", /*blur_handler_1*/ ctx[69]);
	input_1.$on("focus", /*focus_handler_1*/ ctx[70]);
	let if_block1 = /*suffix*/ ctx[20] != null && create_if_block_4(ctx);
	const suffix_slot_template = /*#slots*/ ctx[50].suffix;
	const suffix_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(suffix_slot_template, ctx, /*$$scope*/ ctx[89], get_suffix_slot_context);

	return {
		c() {
			if (prefix_slot) prefix_slot.c();
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block0) if_block0.c();
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(input_1.$$.fragment);
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block1) if_block1.c();
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (suffix_slot) suffix_slot.c();
		},
		m(target, anchor) {
			if (prefix_slot) {
				prefix_slot.m(target, anchor);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
			if (if_block0) if_block0.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(input_1, target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t2, anchor);
			if (if_block1) if_block1.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t3, anchor);

			if (suffix_slot) {
				suffix_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (prefix_slot) {
				if (prefix_slot.p && (!current || dirty[2] & /*$$scope*/ 134217728)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						prefix_slot,
						prefix_slot_template,
						ctx,
						/*$$scope*/ ctx[89],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[89])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(prefix_slot_template, /*$$scope*/ ctx[89], dirty, get_prefix_slot_changes),
						get_prefix_slot_context
					);
				}
			}

			if (/*prefix*/ ctx[19] != null) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*prefix*/ 524288) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_5(ctx);
					if_block0.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0, 1);
					if_block0.m(t1.parentNode, t1);
				}
			} else if (if_block0) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			const input_1_changes = (dirty[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/ 271003648 | dirty[1] & /*$$restProps*/ 2048)
			? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(input_1_spread_levels, [
					dirty[0] & /*type*/ 262144 && { type: /*type*/ ctx[18] },
					dirty[0] & /*disabled*/ 4096 && { disabled: /*disabled*/ ctx[12] },
					dirty[0] & /*required*/ 8192 && { required: /*required*/ ctx[13] },
					dirty[0] & /*updateInvalid*/ 2097152 && { updateInvalid: /*updateInvalid*/ ctx[21] },
					dirty[0] & /*helperId*/ 268435456 && { "aria-controls": /*helperId*/ ctx[28] },
					dirty[0] & /*helperId*/ 268435456 && { "aria-describedby": /*helperId*/ ctx[28] },
					dirty[0] & /*noLabel, label*/ 196608 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(/*noLabel*/ ctx[16] && /*label*/ ctx[17] != null
					? { placeholder: /*label*/ ctx[17] }
					: {}),
					dirty[1] & /*$$restProps*/ 2048 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)((0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[42], 'input$'))
				])
			: {};

			if (!updating_value && dirty[0] & /*value*/ 1) {
				updating_value = true;
				input_1_changes.value = /*value*/ ctx[0];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_value = false);
			}

			if (!updating_files && dirty[0] & /*files*/ 2) {
				updating_files = true;
				input_1_changes.files = /*files*/ ctx[1];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_files = false);
			}

			if (!updating_dirty && dirty[0] & /*dirty*/ 16) {
				updating_dirty = true;
				input_1_changes.dirty = /*dirty*/ ctx[4];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_dirty = false);
			}

			if (!updating_invalid && dirty[0] & /*invalid*/ 4) {
				updating_invalid = true;
				input_1_changes.invalid = /*invalid*/ ctx[2];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_invalid = false);
			}

			input_1.$set(input_1_changes);

			if (/*suffix*/ ctx[20] != null) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*suffix*/ 1048576) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_4(ctx);
					if_block1.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					if_block1.m(t3.parentNode, t3);
				}
			} else if (if_block1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			if (suffix_slot) {
				if (suffix_slot.p && (!current || dirty[2] & /*$$scope*/ 134217728)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						suffix_slot,
						suffix_slot_template,
						ctx,
						/*$$scope*/ ctx[89],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[89])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(suffix_slot_template, /*$$scope*/ ctx[89], dirty, get_suffix_slot_changes),
						get_suffix_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(prefix_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(input_1.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(suffix_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(prefix_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(input_1.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(suffix_slot, local);
			current = false;
		},
		d(detaching) {
			if (prefix_slot) prefix_slot.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
			if (if_block0) if_block0.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
			/*input_1_binding*/ ctx[62](null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(input_1, detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t2);
			if (if_block1) if_block1.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t3);
			if (suffix_slot) suffix_slot.d(detaching);
		}
	};
}

// (100:4) {#if textarea}
function create_if_block_3(ctx) {
	let span;
	let textarea_1;
	let updating_value;
	let updating_dirty;
	let updating_invalid;
	let t;
	let span_class_value;
	let current;

	const textarea_1_spread_levels = [
		{ disabled: /*disabled*/ ctx[12] },
		{ required: /*required*/ ctx[13] },
		{ updateInvalid: /*updateInvalid*/ ctx[21] },
		{ "aria-controls": /*helperId*/ ctx[28] },
		{ "aria-describedby": /*helperId*/ ctx[28] },
		(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[42], 'input$')
	];

	function textarea_1_value_binding(value) {
		/*textarea_1_value_binding*/ ctx[55](value);
	}

	function textarea_1_dirty_binding(value) {
		/*textarea_1_dirty_binding*/ ctx[56](value);
	}

	function textarea_1_invalid_binding(value) {
		/*textarea_1_invalid_binding*/ ctx[57](value);
	}

	let textarea_1_props = {};

	for (let i = 0; i < textarea_1_spread_levels.length; i += 1) {
		textarea_1_props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(textarea_1_props, textarea_1_spread_levels[i]);
	}

	if (/*value*/ ctx[0] !== void 0) {
		textarea_1_props.value = /*value*/ ctx[0];
	}

	if (/*dirty*/ ctx[4] !== void 0) {
		textarea_1_props.dirty = /*dirty*/ ctx[4];
	}

	if (/*invalid*/ ctx[2] !== void 0) {
		textarea_1_props.invalid = /*invalid*/ ctx[2];
	}

	textarea_1 = new _Textarea_svelte__WEBPACK_IMPORTED_MODULE_12__["default"]({ props: textarea_1_props });
	/*textarea_1_binding*/ ctx[54](textarea_1);
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(textarea_1, 'value', textarea_1_value_binding));
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(textarea_1, 'dirty', textarea_1_dirty_binding));
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(textarea_1, 'invalid', textarea_1_invalid_binding));
	textarea_1.$on("blur", /*blur_handler_2*/ ctx[58]);
	textarea_1.$on("focus", /*focus_handler_2*/ ctx[59]);
	textarea_1.$on("blur", /*blur_handler*/ ctx[60]);
	textarea_1.$on("focus", /*focus_handler*/ ctx[61]);
	const internalCounter_slot_template = /*#slots*/ ctx[50].internalCounter;
	const internalCounter_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(internalCounter_slot_template, ctx, /*$$scope*/ ctx[89], get_internalCounter_slot_context);

	return {
		c() {
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(textarea_1.$$.fragment);
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (internalCounter_slot) internalCounter_slot.c();

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "class", span_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				'mdc-text-field__resizer': !('input$resizable' in /*$$restProps*/ ctx[42]) || /*$$restProps*/ ctx[42].input$resizable
			}));
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(textarea_1, span, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t);

			if (internalCounter_slot) {
				internalCounter_slot.m(span, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			const textarea_1_changes = (dirty[0] & /*disabled, required, updateInvalid, helperId*/ 270544896 | dirty[1] & /*$$restProps*/ 2048)
			? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(textarea_1_spread_levels, [
					dirty[0] & /*disabled*/ 4096 && { disabled: /*disabled*/ ctx[12] },
					dirty[0] & /*required*/ 8192 && { required: /*required*/ ctx[13] },
					dirty[0] & /*updateInvalid*/ 2097152 && { updateInvalid: /*updateInvalid*/ ctx[21] },
					dirty[0] & /*helperId*/ 268435456 && { "aria-controls": /*helperId*/ ctx[28] },
					dirty[0] & /*helperId*/ 268435456 && { "aria-describedby": /*helperId*/ ctx[28] },
					dirty[1] & /*$$restProps*/ 2048 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)((0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[42], 'input$'))
				])
			: {};

			if (!updating_value && dirty[0] & /*value*/ 1) {
				updating_value = true;
				textarea_1_changes.value = /*value*/ ctx[0];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_value = false);
			}

			if (!updating_dirty && dirty[0] & /*dirty*/ 16) {
				updating_dirty = true;
				textarea_1_changes.dirty = /*dirty*/ ctx[4];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_dirty = false);
			}

			if (!updating_invalid && dirty[0] & /*invalid*/ 4) {
				updating_invalid = true;
				textarea_1_changes.invalid = /*invalid*/ ctx[2];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_invalid = false);
			}

			textarea_1.$set(textarea_1_changes);

			if (internalCounter_slot) {
				if (internalCounter_slot.p && (!current || dirty[2] & /*$$scope*/ 134217728)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						internalCounter_slot,
						internalCounter_slot_template,
						ctx,
						/*$$scope*/ ctx[89],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[89])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(internalCounter_slot_template, /*$$scope*/ ctx[89], dirty, get_internalCounter_slot_changes),
						get_internalCounter_slot_context
					);
				}
			}

			if (!current || dirty[1] & /*$$restProps*/ 2048 && span_class_value !== (span_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				'mdc-text-field__resizer': !('input$resizable' in /*$$restProps*/ ctx[42]) || /*$$restProps*/ ctx[42].input$resizable
			}))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "class", span_class_value);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(textarea_1.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(internalCounter_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(textarea_1.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(internalCounter_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
			/*textarea_1_binding*/ ctx[54](null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(textarea_1);
			if (internalCounter_slot) internalCounter_slot.d(detaching);
		}
	};
}

// (127:6) {#if prefix != null}
function create_if_block_5(ctx) {
	let prefix_1;
	let current;

	prefix_1 = new _Prefix_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(prefix_1.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(prefix_1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const prefix_1_changes = {};

			if (dirty[0] & /*prefix*/ 524288 | dirty[2] & /*$$scope*/ 134217728) {
				prefix_1_changes.$$scope = { dirty, ctx };
			}

			prefix_1.$set(prefix_1_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(prefix_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(prefix_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(prefix_1, detaching);
		}
	};
}

// (128:8) <Prefix>
function create_default_slot_3(ctx) {
	let t;

	return {
		c() {
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*prefix*/ ctx[19]);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*prefix*/ 524288) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, /*prefix*/ ctx[19]);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
		}
	};
}

// (149:6) {#if suffix != null}
function create_if_block_4(ctx) {
	let suffix_1;
	let current;

	suffix_1 = new _Suffix_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(suffix_1.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(suffix_1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const suffix_1_changes = {};

			if (dirty[0] & /*suffix*/ 1048576 | dirty[2] & /*$$scope*/ 134217728) {
				suffix_1_changes.$$scope = { dirty, ctx };
			}

			suffix_1.$set(suffix_1_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(suffix_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(suffix_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(suffix_1, detaching);
		}
	};
}

// (150:8) <Suffix>
function create_default_slot_2(ctx) {
	let t;

	return {
		c() {
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*suffix*/ ctx[20]);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*suffix*/ 1048576) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, /*suffix*/ ctx[20]);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
		}
	};
}

// (154:4) <ContextFragment key="SMUI:textfield:icon:leading" value={false}>
function create_default_slot_1(ctx) {
	let current;
	const trailingIcon_slot_template = /*#slots*/ ctx[50].trailingIcon;
	const trailingIcon_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(trailingIcon_slot_template, ctx, /*$$scope*/ ctx[89], get_trailingIcon_slot_context);

	return {
		c() {
			if (trailingIcon_slot) trailingIcon_slot.c();
		},
		m(target, anchor) {
			if (trailingIcon_slot) {
				trailingIcon_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (trailingIcon_slot) {
				if (trailingIcon_slot.p && (!current || dirty[2] & /*$$scope*/ 134217728)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						trailingIcon_slot,
						trailingIcon_slot_template,
						ctx,
						/*$$scope*/ ctx[89],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[89])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(trailingIcon_slot_template, /*$$scope*/ ctx[89], dirty, get_trailingIcon_slot_changes),
						get_trailingIcon_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(trailingIcon_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(trailingIcon_slot, local);
			current = false;
		},
		d(detaching) {
			if (trailingIcon_slot) trailingIcon_slot.d(detaching);
		}
	};
}

// (157:4) {#if !textarea && variant !== 'outlined' && ripple}
function create_if_block_2(ctx) {
	let lineripple;
	let current;
	const lineripple_spread_levels = [(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[42], 'ripple$')];
	let lineripple_props = {};

	for (let i = 0; i < lineripple_spread_levels.length; i += 1) {
		lineripple_props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(lineripple_props, lineripple_spread_levels[i]);
	}

	lineripple = new _smui_line_ripple_LineRipple_svelte__WEBPACK_IMPORTED_MODULE_6__["default"]({ props: lineripple_props });
	/*lineripple_binding*/ ctx[71](lineripple);

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(lineripple.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(lineripple, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const lineripple_changes = (dirty[1] & /*$$restProps*/ 2048)
			? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(lineripple_spread_levels, [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)((0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[42], 'ripple$'))])
			: {};

			lineripple.$set(lineripple_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(lineripple.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(lineripple.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			/*lineripple_binding*/ ctx[71](null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(lineripple, detaching);
		}
	};
}

// (219:0) {#if $$slots.helper}
function create_if_block(ctx) {
	let helperline;
	let current;
	const helperline_spread_levels = [(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[42], 'helperLine$')];

	let helperline_props = {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};

	for (let i = 0; i < helperline_spread_levels.length; i += 1) {
		helperline_props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(helperline_props, helperline_spread_levels[i]);
	}

	helperline = new _HelperLine_js__WEBPACK_IMPORTED_MODULE_8__["default"]({ props: helperline_props });
	helperline.$on("SMUI:textfield:helper-text:id", /*SMUI_textfield_helper_text_id_handler*/ ctx[84]);
	helperline.$on("SMUI:textfield:helper-text:mount", /*SMUI_textfield_helper_text_mount_handler*/ ctx[85]);
	helperline.$on("SMUI:textfield:helper-text:unmount", /*SMUI_textfield_helper_text_unmount_handler*/ ctx[86]);
	helperline.$on("SMUI:textfield:character-counter:mount", /*SMUI_textfield_character_counter_mount_handler_1*/ ctx[87]);
	helperline.$on("SMUI:textfield:character-counter:unmount", /*SMUI_textfield_character_counter_unmount_handler_1*/ ctx[88]);

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(helperline.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(helperline, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const helperline_changes = (dirty[1] & /*$$restProps*/ 2048)
			? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(helperline_spread_levels, [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)((0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[42], 'helperLine$'))])
			: {};

			if (dirty[2] & /*$$scope*/ 134217728) {
				helperline_changes.$$scope = { dirty, ctx };
			}

			helperline.$set(helperline_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(helperline.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(helperline.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(helperline, detaching);
		}
	};
}

// (220:2) <HelperLine     on:SMUI:textfield:helper-text:id={(event) => (helperId = event.detail)}     on:SMUI:textfield:helper-text:mount={(event) => (helperText = event.detail)}     on:SMUI:textfield:helper-text:unmount={() => {       helperId = undefined;       helperText = undefined;     }}     on:SMUI:textfield:character-counter:mount={(event) =>       (characterCounter = event.detail)}     on:SMUI:textfield:character-counter:unmount={() =>       (characterCounter = undefined)}     {...prefixFilter($$restProps, 'helperLine$')}     >
function create_default_slot(ctx) {
	let current;
	const helper_slot_template = /*#slots*/ ctx[50].helper;
	const helper_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(helper_slot_template, ctx, /*$$scope*/ ctx[89], get_helper_slot_context);

	return {
		c() {
			if (helper_slot) helper_slot.c();
		},
		m(target, anchor) {
			if (helper_slot) {
				helper_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (helper_slot) {
				if (helper_slot.p && (!current || dirty[2] & /*$$scope*/ 134217728)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						helper_slot,
						helper_slot_template,
						ctx,
						/*$$scope*/ ctx[89],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[89])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(helper_slot_template, /*$$scope*/ ctx[89], dirty, get_helper_slot_changes),
						get_helper_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(helper_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(helper_slot, local);
			current = false;
		},
		d(detaching) {
			if (helper_slot) helper_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block0;
	let t;
	let if_block1_anchor;
	let current;
	const if_block_creators = [create_if_block_1, create_else_block_1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*valued*/ ctx[24]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, [-1, -1, -1, -1]);
	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	let if_block1 = /*$$slots*/ ctx[41].helper && create_if_block(ctx);

	return {
		c() {
			if_block0.c();
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block1) if_block1.c();
			if_block1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
			if (if_block1) if_block1.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
				if_block0 = if_blocks[current_block_type_index];

				if (!if_block0) {
					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block0.c();
				} else {
					if_block0.p(ctx, dirty);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0, 1);
				if_block0.m(t.parentNode, t);
			}

			if (/*$$slots*/ ctx[41].helper) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[1] & /*$$slots*/ 1024) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
			if (if_block1) if_block1.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block1_anchor);
		}
	};
}

const func = ([name, value]) => `${name}: ${value};`;
const func_1 = ([name, value]) => `${name}: ${value};`;

function instance_1($$self, $$props, $$invalidate) {
	let valued;
	let inputElement;

	const omit_props_names = [
		"use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","dirty","invalid","prefix","suffix","updateInvalid","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","layout","getElement"
	];

	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const $$slots = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_slots)(slots);
	const { applyPassive } = _material_dom__WEBPACK_IMPORTED_MODULE_13__;
	const forwardEvents = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());

	let uninitializedValue = () => {
		
	};

	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let { style = '' } = $$props;
	let { ripple = true } = $$props;
	let { disabled = false } = $$props;
	let { required = false } = $$props;
	let { textarea = false } = $$props;
	let { variant = textarea ? 'outlined' : 'standard' } = $$props;
	let { noLabel = false } = $$props;
	let { label = null } = $$props;
	let { type = 'text' } = $$props;
	let { value = uninitializedValue } = $$props;
	let { files = uninitializedValue } = $$props;
	let { dirty = false } = $$props;
	let { invalid = uninitializedValue } = $$props;
	let { prefix = null } = $$props;
	let { suffix = null } = $$props;
	let { updateInvalid = invalid === uninitializedValue } = $$props;
	let { validateOnValueChange = updateInvalid } = $$props;
	let { useNativeValidation = updateInvalid } = $$props;
	let { withLeadingIcon = uninitializedValue } = $$props;
	let { withTrailingIcon = uninitializedValue } = $$props;
	let { input = undefined } = $$props;
	let { floatingLabel = undefined } = $$props;
	let { lineRipple = undefined } = $$props;
	let { notchedOutline = undefined } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let internalStyles = {};
	let helperId;
	let focused = false;
	let addLayoutListener = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.getContext)('SMUI:addLayoutListener');
	let removeLayoutListener;
	let initPromiseResolve;
	let initPromise = new Promise(resolve => initPromiseResolve = resolve);

	// These are instances, not accessors.
	let leadingIcon;

	let trailingIcon;
	let helperText;
	let characterCounter;

	// React to changes of value from outside component.
	let previousValue = value;

	if (addLayoutListener) {
		removeLayoutListener = addLayoutListener(layout);
	}

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.onMount)(() => {
		$$invalidate(48, instance = new _material_textfield__WEBPACK_IMPORTED_MODULE_14__.MDCTextFieldFoundation({
				// getRootAdapterMethods_
				addClass,
				removeClass,
				hasClass,
				registerTextFieldInteractionHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
				deregisterTextFieldInteractionHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler),
				registerValidationAttributeChangeHandler: handler => {
					const getAttributesList = mutationsList => {
						return mutationsList.map(mutation => mutation.attributeName).filter(attributeName => attributeName);
					};

					const observer = new MutationObserver(mutationsList => {
							if (useNativeValidation) {
								handler(getAttributesList(mutationsList));
							}
						});

					const config = { attributes: true };
					observer.observe(input.getElement(), config);
					return observer;
				},
				deregisterValidationAttributeChangeHandler: observer => {
					observer.disconnect();
				},
				// getInputAdapterMethods_
				getNativeInput: () => input.getElement(),
				setInputAttr: (name, value) => {
					input.addAttr(name, value);
				},
				removeInputAttr: name => {
					input.removeAttr(name);
				},
				isFocused: () => document.activeElement === input.getElement(),
				registerInputInteractionHandler: (evtType, handler) => {
					input.getElement().addEventListener(evtType, handler, applyPassive());
				},
				deregisterInputInteractionHandler: (evtType, handler) => {
					input.getElement().removeEventListener(evtType, handler, applyPassive());
				},
				// getLabelAdapterMethods_
				floatLabel: shouldFloat => floatingLabel && floatingLabel.float(shouldFloat),
				getLabelWidth: () => floatingLabel ? floatingLabel.getWidth() : 0,
				hasLabel: () => !!floatingLabel,
				shakeLabel: shouldShake => floatingLabel && floatingLabel.shake(shouldShake),
				setLabelRequired: isRequired => floatingLabel && floatingLabel.setRequired(isRequired),
				// getLineRippleAdapterMethods_
				activateLineRipple: () => lineRipple && lineRipple.activate(),
				deactivateLineRipple: () => lineRipple && lineRipple.deactivate(),
				setLineRippleTransformOrigin: normalizedX => lineRipple && lineRipple.setRippleCenter(normalizedX),
				// getOutlineAdapterMethods_
				closeOutline: () => notchedOutline && notchedOutline.closeNotch(),
				hasOutline: () => !!notchedOutline,
				notchOutline: labelWidth => notchedOutline && notchedOutline.notch(labelWidth)
			},
		{
				get helperText() {
					return helperText;
				},
				get characterCounter() {
					return characterCounter;
				},
				get leadingIcon() {
					return leadingIcon;
				},
				get trailingIcon() {
					return trailingIcon;
				}
			}));

		if (valued) {
			instance.init();
		} else {
			(0,svelte__WEBPACK_IMPORTED_MODULE_1__.tick)().then(() => {
				instance.init();
			});
		}

		initPromiseResolve();

		return () => {
			instance.destroy();
		};
	});

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.onDestroy)(() => {
		if (removeLayoutListener) {
			removeLayoutListener();
		}
	});

	function hasClass(className) {
		return className in internalClasses
		? internalClasses[className]
		: getElement().classList.contains(className);
	}

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(26, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(26, internalClasses[className] = false, internalClasses);
		}
	}

	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === '' || value == null) {
				delete internalStyles[name];
				$$invalidate(27, internalStyles);
			} else {
				$$invalidate(27, internalStyles[name] = value, internalStyles);
			}
		}
	}

	function focus() {
		input.focus();
	}

	function layout() {
		if (instance) {
			const openNotch = instance.shouldFloat;
			instance.notchOutline(openNotch);
		}
	}

	function getElement() {
		return element;
	}

	function floatinglabel_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			floatingLabel = $$value;
			$$invalidate(5, floatingLabel);
		});
	}

	function floatinglabel_binding_1($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			floatingLabel = $$value;
			$$invalidate(5, floatingLabel);
		});
	}

	function notchedoutline_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			notchedOutline = $$value;
			$$invalidate(7, notchedOutline);
		});
	}

	function textarea_1_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			input = $$value;
			$$invalidate(3, input);
		});
	}

	function textarea_1_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	function textarea_1_dirty_binding(value) {
		dirty = value;
		$$invalidate(4, dirty);
	}

	function textarea_1_invalid_binding(value) {
		invalid = value;
		(($$invalidate(2, invalid), $$invalidate(48, instance)), $$invalidate(21, updateInvalid));
	}

	const blur_handler_2 = () => $$invalidate(29, focused = false);
	const focus_handler_2 = () => $$invalidate(29, focused = true);

	function blur_handler(event) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bubble.call(this, $$self, event);
	}

	function focus_handler(event) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bubble.call(this, $$self, event);
	}

	function input_1_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			input = $$value;
			$$invalidate(3, input);
		});
	}

	function input_1_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	function input_1_files_binding(value) {
		files = value;
		$$invalidate(1, files);
	}

	function input_1_dirty_binding(value) {
		dirty = value;
		$$invalidate(4, dirty);
	}

	function input_1_invalid_binding(value) {
		invalid = value;
		(($$invalidate(2, invalid), $$invalidate(48, instance)), $$invalidate(21, updateInvalid));
	}

	const blur_handler_3 = () => $$invalidate(29, focused = false);
	const focus_handler_3 = () => $$invalidate(29, focused = true);

	function blur_handler_1(event) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bubble.call(this, $$self, event);
	}

	function focus_handler_1(event) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bubble.call(this, $$self, event);
	}

	function lineripple_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			lineRipple = $$value;
			$$invalidate(6, lineRipple);
		});
	}

	function label_1_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(25, element);
		});
	}

	const SMUI_textfield_leading_icon_mount_handler = event => $$invalidate(30, leadingIcon = event.detail);
	const SMUI_textfield_leading_icon_unmount_handler = () => $$invalidate(30, leadingIcon = undefined);
	const SMUI_textfield_trailing_icon_mount_handler = event => $$invalidate(31, trailingIcon = event.detail);
	const SMUI_textfield_trailing_icon_unmount_handler = () => $$invalidate(31, trailingIcon = undefined);
	const SMUI_textfield_character_counter_mount_handler = event => $$invalidate(33, characterCounter = event.detail);
	const SMUI_textfield_character_counter_unmount_handler = () => $$invalidate(33, characterCounter = undefined);

	function div_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(25, element);
		});
	}

	const SMUI_textfield_leading_icon_mount_handler_1 = event => $$invalidate(30, leadingIcon = event.detail);
	const SMUI_textfield_leading_icon_unmount_handler_1 = () => $$invalidate(30, leadingIcon = undefined);
	const SMUI_textfield_trailing_icon_mount_handler_1 = event => $$invalidate(31, trailingIcon = event.detail);
	const SMUI_textfield_trailing_icon_unmount_handler_1 = () => $$invalidate(31, trailingIcon = undefined);
	const SMUI_textfield_helper_text_id_handler = event => $$invalidate(28, helperId = event.detail);
	const SMUI_textfield_helper_text_mount_handler = event => $$invalidate(32, helperText = event.detail);

	const SMUI_textfield_helper_text_unmount_handler = () => {
		$$invalidate(28, helperId = undefined);
		$$invalidate(32, helperText = undefined);
	};

	const SMUI_textfield_character_counter_mount_handler_1 = event => $$invalidate(33, characterCounter = event.detail);
	const SMUI_textfield_character_counter_unmount_handler_1 = () => $$invalidate(33, characterCounter = undefined);

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(42, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(8, use = $$new_props.use);
		if ('class' in $$new_props) $$invalidate(9, className = $$new_props.class);
		if ('style' in $$new_props) $$invalidate(10, style = $$new_props.style);
		if ('ripple' in $$new_props) $$invalidate(11, ripple = $$new_props.ripple);
		if ('disabled' in $$new_props) $$invalidate(12, disabled = $$new_props.disabled);
		if ('required' in $$new_props) $$invalidate(13, required = $$new_props.required);
		if ('textarea' in $$new_props) $$invalidate(14, textarea = $$new_props.textarea);
		if ('variant' in $$new_props) $$invalidate(15, variant = $$new_props.variant);
		if ('noLabel' in $$new_props) $$invalidate(16, noLabel = $$new_props.noLabel);
		if ('label' in $$new_props) $$invalidate(17, label = $$new_props.label);
		if ('type' in $$new_props) $$invalidate(18, type = $$new_props.type);
		if ('value' in $$new_props) $$invalidate(0, value = $$new_props.value);
		if ('files' in $$new_props) $$invalidate(1, files = $$new_props.files);
		if ('dirty' in $$new_props) $$invalidate(4, dirty = $$new_props.dirty);
		if ('invalid' in $$new_props) $$invalidate(2, invalid = $$new_props.invalid);
		if ('prefix' in $$new_props) $$invalidate(19, prefix = $$new_props.prefix);
		if ('suffix' in $$new_props) $$invalidate(20, suffix = $$new_props.suffix);
		if ('updateInvalid' in $$new_props) $$invalidate(21, updateInvalid = $$new_props.updateInvalid);
		if ('validateOnValueChange' in $$new_props) $$invalidate(43, validateOnValueChange = $$new_props.validateOnValueChange);
		if ('useNativeValidation' in $$new_props) $$invalidate(44, useNativeValidation = $$new_props.useNativeValidation);
		if ('withLeadingIcon' in $$new_props) $$invalidate(22, withLeadingIcon = $$new_props.withLeadingIcon);
		if ('withTrailingIcon' in $$new_props) $$invalidate(23, withTrailingIcon = $$new_props.withTrailingIcon);
		if ('input' in $$new_props) $$invalidate(3, input = $$new_props.input);
		if ('floatingLabel' in $$new_props) $$invalidate(5, floatingLabel = $$new_props.floatingLabel);
		if ('lineRipple' in $$new_props) $$invalidate(6, lineRipple = $$new_props.lineRipple);
		if ('notchedOutline' in $$new_props) $$invalidate(7, notchedOutline = $$new_props.notchedOutline);
		if ('$$scope' in $$new_props) $$invalidate(89, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*value, files*/ 3) {
			$: $$invalidate(24, valued = value !== uninitializedValue || files !== uninitializedValue);
		}

		if ($$self.$$.dirty[0] & /*input*/ 8) {
			$: $$invalidate(34, inputElement = input && input.getElement());
		}

		if ($$self.$$.dirty[0] & /*invalid, updateInvalid*/ 2097156 | $$self.$$.dirty[1] & /*instance*/ 131072) {
			$: if (instance && instance.isValid() !== !invalid) {
				if (updateInvalid) {
					$$invalidate(2, invalid = !instance.isValid());
				} else {
					instance.setValid(!invalid);
				}
			}
		}

		if ($$self.$$.dirty[1] & /*instance, validateOnValueChange*/ 135168) {
			$: if (instance && instance.getValidateOnValueChange() !== validateOnValueChange) {
				instance.setValidateOnValueChange(validateOnValueChange === uninitializedValue
				? false
				: validateOnValueChange);
			}
		}

		if ($$self.$$.dirty[1] & /*instance, useNativeValidation*/ 139264) {
			$: if (instance) {
				instance.setUseNativeValidation(useNativeValidation);
			}
		}

		if ($$self.$$.dirty[0] & /*disabled*/ 4096 | $$self.$$.dirty[1] & /*instance*/ 131072) {
			$: if (instance) {
				instance.setDisabled(disabled);
			}
		}

		if ($$self.$$.dirty[0] & /*valued, value*/ 16777217 | $$self.$$.dirty[1] & /*instance, previousValue*/ 393216) {
			$: if (instance && valued && previousValue !== value) {
				$$invalidate(49, previousValue = value);

				// Check the data is flowing down.
				if (instance.getValue() !== value) {
					instance.setValue(value);
				}
			}
		}
	};

	return [
		value,
		files,
		invalid,
		input,
		dirty,
		floatingLabel,
		lineRipple,
		notchedOutline,
		use,
		className,
		style,
		ripple,
		disabled,
		required,
		textarea,
		variant,
		noLabel,
		label,
		type,
		prefix,
		suffix,
		updateInvalid,
		withLeadingIcon,
		withTrailingIcon,
		valued,
		element,
		internalClasses,
		internalStyles,
		helperId,
		focused,
		leadingIcon,
		trailingIcon,
		helperText,
		characterCounter,
		inputElement,
		forwardEvents,
		uninitializedValue,
		initPromise,
		addClass,
		removeClass,
		addStyle,
		$$slots,
		$$restProps,
		validateOnValueChange,
		useNativeValidation,
		focus,
		layout,
		getElement,
		instance,
		previousValue,
		slots,
		floatinglabel_binding,
		floatinglabel_binding_1,
		notchedoutline_binding,
		textarea_1_binding,
		textarea_1_value_binding,
		textarea_1_dirty_binding,
		textarea_1_invalid_binding,
		blur_handler_2,
		focus_handler_2,
		blur_handler,
		focus_handler,
		input_1_binding,
		input_1_value_binding,
		input_1_files_binding,
		input_1_dirty_binding,
		input_1_invalid_binding,
		blur_handler_3,
		focus_handler_3,
		blur_handler_1,
		focus_handler_1,
		lineripple_binding,
		label_1_binding,
		SMUI_textfield_leading_icon_mount_handler,
		SMUI_textfield_leading_icon_unmount_handler,
		SMUI_textfield_trailing_icon_mount_handler,
		SMUI_textfield_trailing_icon_unmount_handler,
		SMUI_textfield_character_counter_mount_handler,
		SMUI_textfield_character_counter_unmount_handler,
		div_binding,
		SMUI_textfield_leading_icon_mount_handler_1,
		SMUI_textfield_leading_icon_unmount_handler_1,
		SMUI_textfield_trailing_icon_mount_handler_1,
		SMUI_textfield_trailing_icon_unmount_handler_1,
		SMUI_textfield_helper_text_id_handler,
		SMUI_textfield_helper_text_mount_handler,
		SMUI_textfield_helper_text_unmount_handler,
		SMUI_textfield_character_counter_mount_handler_1,
		SMUI_textfield_character_counter_unmount_handler_1,
		$$scope
	];
}

class Textfield extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance_1,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				use: 8,
				class: 9,
				style: 10,
				ripple: 11,
				disabled: 12,
				required: 13,
				textarea: 14,
				variant: 15,
				noLabel: 16,
				label: 17,
				type: 18,
				value: 0,
				files: 1,
				dirty: 4,
				invalid: 2,
				prefix: 19,
				suffix: 20,
				updateInvalid: 21,
				validateOnValueChange: 43,
				useNativeValidation: 44,
				withLeadingIcon: 22,
				withTrailingIcon: 23,
				input: 3,
				floatingLabel: 5,
				lineRipple: 6,
				notchedOutline: 7,
				focus: 45,
				layout: 46,
				getElement: 47
			},
			null,
			[-1, -1, -1, -1]
		);
	}

	get focus() {
		return this.$$.ctx[45];
	}

	get layout() {
		return this.$$.ctx[46];
	}

	get getElement() {
		return this.$$.ctx[47];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textfield);



/***/ }),

/***/ "./resources/js/Components/ApplicationLogo.svelte":
/*!********************************************************!*\
  !*** ./resources/js/Components/ApplicationLogo.svelte ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Components\ApplicationLogo.svelte generated by Svelte v3.43.1 */


function create_fragment(ctx) {
	let svg;
	let g1;
	let g0;
	let path0;
	let path1;
	let path2;
	let path3;
	let path4;
	let path5;
	let path6;
	let path7;
	let path8;
	let path9;
	let path10;
	let path11;
	let path12;
	let path13;
	let path14;
	let path15;
	let path16;
	let path17;
	let path18;
	let path19;
	let path20;
	let path21;
	let path22;

	let svg_levels = [
		/*props*/ ctx[0],
		{ xmlns: "http://www.w3.org/2000/svg" },
		{ viewBox: "0 0 78.65 71.86" }
	];

	let svg_data = {};

	for (let i = 0; i < svg_levels.length; i += 1) {
		svg_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(svg_data, svg_levels[i]);
	}

	return {
		c() {
			svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
			g1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("g");
			g0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("g");
			path0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path14 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path15 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path16 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path17 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path18 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path19 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path20 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path21 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path22 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path0, "d", "M22.14,53.13c-.18-.26-.33-.48-.44-.62l-.13-.17-.05-.06s-.05.09-.12.25a5.21,5.21,0,0,0-.28.66,8,8,0,0,0-.49,2.21,4.82,4.82,0,0,0,.09,1.31A4.74,4.74,0,0,0,21.18,58l.18.31.23.28a4.38,4.38,0,0,0,.54.51,4.65,4.65,0,0,0,1.45.77,2.31,2.31,0,0,0,.76-2.23A4.76,4.76,0,0,0,24,56.4c0-.11-.09-.21-.14-.31s-.09-.21-.14-.31-.19-.41-.3-.61a11.67,11.67,0,0,0-.68-1.11C22.51,53.71,22.32,53.39,22.14,53.13Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path1, "d", "M19,51.44l-.07-.31A10.94,10.94,0,0,0,18.53,50c-.06-.18-.13-.34-.19-.5s-.1-.32-.15-.45a7.86,7.86,0,0,0-.36-.9,9.41,9.41,0,0,0-.61.81,8.54,8.54,0,0,0-.54.9A5.69,5.69,0,0,0,16.22,51,5.2,5.2,0,0,0,16,52.23a4.85,4.85,0,0,0,0,.66c0,.1,0,.22,0,.32l.09.31a3.71,3.71,0,0,0,.65,1.18,2.8,2.8,0,0,0,.53.5,4.4,4.4,0,0,0,.71.41,2.39,2.39,0,0,0,1.18-2,4.71,4.71,0,0,0-.05-1.24c0-.21-.07-.41-.12-.62Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path2, "d", "M13,50.44a4.69,4.69,0,0,0,.57.49,2.67,2.67,0,0,0,1.62-1.74c0-.18.11-.38.16-.57s.07-.4.1-.61a8,8,0,0,0,0-1.2,8.6,8.6,0,0,0,0-1.15c0-.35-.09-.67-.1-.95a7.5,7.5,0,0,0-.13-.92,9.06,9.06,0,0,0-.77.68,8.3,8.3,0,0,0-.73.79c-.13.15-.26.31-.38.48s-.22.34-.33.52a5.78,5.78,0,0,0-.52,1.16,4.85,4.85,0,0,0-.16.63,4.24,4.24,0,0,0,0,.62,3.3,3.3,0,0,0,.32,1.21A2.27,2.27,0,0,0,13,50.44Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path3, "d", "M9.61,45.25a3.41,3.41,0,0,0,.41.55,2.93,2.93,0,0,0,2-1.41l.15-.25.14-.27a5.72,5.72,0,0,0,.24-.57,8.12,8.12,0,0,0,.3-1.15A10.5,10.5,0,0,0,13,41c0-.18,0-.34.06-.5s0-.31,0-.45c.07-.56.08-.92.08-.92s-.37.2-.89.56c-.26.19-.56.41-.87.67A8.24,8.24,0,0,0,9.81,42.3a4.41,4.41,0,0,0-.28.58,3.86,3.86,0,0,0-.17.58,3.08,3.08,0,0,0,0,1.21A1.93,1.93,0,0,0,9.61,45.25Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path4, "d", "M10.38,38.89a7.29,7.29,0,0,0,.72-1,9.08,9.08,0,0,0,.53-1.09,14,14,0,0,0,.68-2c.15-.54.23-.9.23-.9s-.39.16-.95.46c-.28.15-.61.34-.94.56a10.34,10.34,0,0,0-1,.74,5.35,5.35,0,0,0-1.58,2,2.9,2.9,0,0,0-.25,1.15A2.43,2.43,0,0,0,8.2,40,3.15,3.15,0,0,0,10.38,38.89Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path5, "d", "M9.14,33.87a4.26,4.26,0,0,0,.43-.42A6.14,6.14,0,0,0,10,33a9.15,9.15,0,0,0,.69-1l.28-.52.26-.52c.15-.34.29-.65.39-.92.2-.55.32-.9.32-.9a9.06,9.06,0,0,0-1,.4,13.44,13.44,0,0,0-2,1.15,8.93,8.93,0,0,0-1,.82,4.8,4.8,0,0,0-.79,1,2.93,2.93,0,0,0-.42,1.08,2.42,2.42,0,0,0,.17,1.17A3.25,3.25,0,0,0,9.14,33.87Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path6, "d", "M6.45,29.05a3.19,3.19,0,0,0,2.3-.64,5.73,5.73,0,0,0,.9-.81,8.54,8.54,0,0,0,.78-1c.23-.32.42-.65.61-.95a8.75,8.75,0,0,0,.49-.81l.29-.58.11-.21-.27.07a6.12,6.12,0,0,0-.7.21,13,13,0,0,0-2.09.92c-.19.1-.37.21-.56.33L7.8,26a5.94,5.94,0,0,0-.86.88A2.46,2.46,0,0,0,6.45,29.05Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path7, "d", "M9.38,22.45A8.69,8.69,0,0,0,11.21,21l.37-.41q.2-.2.36-.39c.22-.25.42-.48.57-.69s.29-.36.39-.48l.14-.18s-.39,0-1,.14a11.87,11.87,0,0,0-2.13.61,8.59,8.59,0,0,0-1.14.56,5.34,5.34,0,0,0-.94.75,3.91,3.91,0,0,0-.37.44,1.83,1.83,0,0,0-.25.48,2.18,2.18,0,0,0-.12,1.08A3.27,3.27,0,0,0,9.38,22.45Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path8, "d", "M14.76,14.35a9.82,9.82,0,0,0-1,.06,8.24,8.24,0,0,0-1.16.19,7.45,7.45,0,0,0-1.2.35,5.89,5.89,0,0,0-.58.24,3.52,3.52,0,0,0-.5.31,2.35,2.35,0,0,0-1.16,1.77,3.23,3.23,0,0,0,2.23-.09,7.71,7.71,0,0,0,2.07-1.09,15.56,15.56,0,0,0,1.6-1.18c.42-.33.67-.56.67-.56S15.35,14.33,14.76,14.35Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path9, "d", "M18.49,10a11.59,11.59,0,0,0-2.14,0,7.65,7.65,0,0,0-2.38.55,2.83,2.83,0,0,0-1.53,1.51,2.47,2.47,0,0,0,1,.31,3.93,3.93,0,0,0,1.13-.05A5.75,5.75,0,0,0,15.72,12c.38-.13.73-.29,1.1-.45a16.18,16.18,0,0,0,1.82-1c.48-.27.78-.47.78-.47S19.06,10.08,18.49,10Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path10, "d", "M17.94,6a2.81,2.81,0,0,0-1.51,1.44c1.19.72,2.89.19,4.25-.49a17.22,17.22,0,0,0,1.8-1c.45-.29.73-.5.73-.5a13.66,13.66,0,0,0-3,0A7.06,7.06,0,0,0,17.94,6Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path11, "d", "M55.07,59.87a4.82,4.82,0,0,0,1.46-.77,6.51,6.51,0,0,0,.54-.51c.07-.1.15-.19.22-.28l.18-.31a4.74,4.74,0,0,0,.46-1.29A4.14,4.14,0,0,0,58,55.4a7.63,7.63,0,0,0-.49-2.21c-.1-.28-.2-.51-.27-.66l-.13-.25-.05.06a2,2,0,0,1-.12.17c-.11.14-.27.36-.45.62s-.37.58-.57.93-.46.71-.68,1.11c-.1.2-.21.4-.3.61s-.09.21-.14.31-.09.2-.14.31a4.76,4.76,0,0,0-.37,1.24A2.31,2.31,0,0,0,55.07,59.87Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path12, "d", "M61.43,49a9.41,9.41,0,0,0-.61-.81s-.16.34-.36.9c-.05.13-.1.29-.15.45s-.13.32-.19.5a10.94,10.94,0,0,0-.35,1.14l-.07.31-.09.3c0,.21-.09.41-.12.62a4.71,4.71,0,0,0-.05,1.24,2.42,2.42,0,0,0,1.18,2,4.4,4.4,0,0,0,.71-.41,2.53,2.53,0,0,0,.53-.5,3.53,3.53,0,0,0,.65-1.18,2.8,2.8,0,0,0,.09-.31c0-.1,0-.22,0-.32a4.85,4.85,0,0,0,0-.66A5.2,5.2,0,0,0,62.43,51,5.69,5.69,0,0,0,62,49.85,8.54,8.54,0,0,0,61.43,49Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path13, "d", "M65.71,46.26c-.11-.18-.22-.36-.33-.52s-.25-.33-.38-.48a8.3,8.3,0,0,0-.73-.79,9.06,9.06,0,0,0-.77-.68s-.07.35-.13.92c0,.28-.07.6-.1.95a10.67,10.67,0,0,0,0,1.15,8,8,0,0,0,0,1.2c0,.21.06.41.1.61s.11.39.16.57a2.67,2.67,0,0,0,1.62,1.74,4,4,0,0,0,.57-.49,2.27,2.27,0,0,0,.39-.56,3.11,3.11,0,0,0,.32-1.21,4.24,4.24,0,0,0,0-.62,4.85,4.85,0,0,0-.16-.63A5.78,5.78,0,0,0,65.71,46.26Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path14, "d", "M66.66,44.39a2.9,2.9,0,0,0,2,1.41,3.41,3.41,0,0,0,.41-.55,1.93,1.93,0,0,0,.24-.58,2.9,2.9,0,0,0,0-1.21,3.86,3.86,0,0,0-.17-.58,4.41,4.41,0,0,0-.28-.58,6.51,6.51,0,0,0-.77-1,7.21,7.21,0,0,0-.88-.87c-.31-.26-.61-.48-.87-.67-.52-.36-.89-.56-.89-.56s0,.36.08.92c0,.14,0,.29,0,.45s0,.32.06.5a10.5,10.5,0,0,0,.22,1.12,8.62,8.62,0,0,0,.3,1.16,5.55,5.55,0,0,0,.24.56c0,.09.1.18.14.27Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path15, "d", "M70.84,38.81a2.9,2.9,0,0,0-.25-1.15,5.35,5.35,0,0,0-1.58-2,9.26,9.26,0,0,0-1-.74,10,10,0,0,0-.94-.56c-.56-.3-1-.46-1-.46s.08.36.23.9a14,14,0,0,0,.68,2,9.08,9.08,0,0,0,.53,1.09,8.1,8.1,0,0,0,.72,1A3.18,3.18,0,0,0,70.46,40,2.52,2.52,0,0,0,70.84,38.81Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path16, "d", "M72,33.52a3,3,0,0,0-.42-1.08,4.8,4.8,0,0,0-.79-1,8.13,8.13,0,0,0-1-.82,13.44,13.44,0,0,0-2-1.15,9.06,9.06,0,0,0-1-.4s.12.35.32.9c.11.27.24.58.4.92.07.17.16.34.25.52L68,32a8.06,8.06,0,0,0,.7,1,4.45,4.45,0,0,0,.41.47,4.26,4.26,0,0,0,.43.42,3.25,3.25,0,0,0,2.29.82A2.54,2.54,0,0,0,72,33.52Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path17, "d", "M71.71,26.89a5.94,5.94,0,0,0-.86-.88l-.51-.38c-.19-.12-.37-.23-.56-.33a13,13,0,0,0-2.09-.92,6.12,6.12,0,0,0-.7-.21l-.27-.07.11.21.29.58c.14.24.3.52.49.81s.38.63.61.95a9.82,9.82,0,0,0,.78,1,5.73,5.73,0,0,0,.9.81,3.19,3.19,0,0,0,2.3.64A2.46,2.46,0,0,0,71.71,26.89Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path18, "d", "M71.18,21.33a3.08,3.08,0,0,0-.37-.44,5.34,5.34,0,0,0-.94-.75,8.59,8.59,0,0,0-1.14-.56A11.87,11.87,0,0,0,66.6,19c-.6-.11-1-.14-1-.14l.14.18c.1.12.24.28.39.49s.35.43.57.69l.36.38.37.41a8.69,8.69,0,0,0,1.83,1.47,3.27,3.27,0,0,0,2.28.44,2.18,2.18,0,0,0-.12-1.08A1.57,1.57,0,0,0,71.18,21.33Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path19, "d", "M68.35,15.5a3.64,3.64,0,0,0-.51-.31,5.89,5.89,0,0,0-.58-.24,7.45,7.45,0,0,0-1.2-.35,8.24,8.24,0,0,0-1.16-.19,9.82,9.82,0,0,0-1-.06c-.58,0-1,0-1,0s.25.23.67.56a17.07,17.07,0,0,0,1.6,1.19,8,8,0,0,0,2.07,1.08,3.23,3.23,0,0,0,2.23.09A2.37,2.37,0,0,0,68.35,15.5Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path20, "d", "M64.69,10.57A7.78,7.78,0,0,0,62.3,10a11.59,11.59,0,0,0-2.14,0c-.57.05-.93.11-.93.11s.3.2.78.47a17.12,17.12,0,0,0,1.82,1c.37.16.73.32,1.1.45a5.66,5.66,0,0,0,1.14.31,3.86,3.86,0,0,0,1.12.05,2.47,2.47,0,0,0,1-.31A2.84,2.84,0,0,0,64.69,10.57Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path21, "d", "M58,7c1.36.68,3.06,1.21,4.25.49A2.77,2.77,0,0,0,60.71,6a7.06,7.06,0,0,0-2.31-.57,13.66,13.66,0,0,0-3,0s.28.21.73.5A17.22,17.22,0,0,0,58,7Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path22, "d", "M72.86,40.69a3.29,3.29,0,0,0,2.42-.57,4.94,4.94,0,0,0,1.06-.94A8.42,8.42,0,0,0,77.22,38a13.63,13.63,0,0,0,1.11-2.32c.22-.64.32-1.08.32-1.08s-.4.18-1,.5l-1,.57c-.37.22-.76.46-1.15.74a9.93,9.93,0,0,0-2,1.87.36.36,0,0,1-.07.1c.27-1.25.49-2.52.66-3.79A3.09,3.09,0,0,0,76,33.82a4.09,4.09,0,0,0,.47-.46,4.91,4.91,0,0,0,.4-.53,8.49,8.49,0,0,0,.66-1.18c.09-.21.18-.41.26-.61s.14-.39.2-.58c.12-.38.22-.73.29-1a9.1,9.1,0,0,0,.2-1s-.37.2-.9.53a15.84,15.84,0,0,0-1.9,1.38,9.06,9.06,0,0,0-.94.92,4.87,4.87,0,0,0-.35.42c.07-1.08.08-2.15,0-3.22a3,3,0,0,0,1.33-.81,5.22,5.22,0,0,0,.74-1,6.85,6.85,0,0,0,.5-1.18,6.84,6.84,0,0,0,.33-1.19c.07-.38.12-.75.15-1.06s0-.57.06-.75,0-.29,0-.29l-.21.16-.58.44A16,16,0,0,0,75,24.26c-.14.15-.28.31-.41.47s-.27.32-.4.49l-.1.14a26.61,26.61,0,0,0-.58-3.06,2.52,2.52,0,0,0,1.17-.92,4.77,4.77,0,0,0,.82-2.27,6.18,6.18,0,0,0,.07-.62q0-.3,0-.6c0-.39,0-.76-.07-1.07a5.94,5.94,0,0,0-.13-.75c0-.18-.07-.29-.07-.29s-.25.26-.61.69a16.25,16.25,0,0,0-1.26,1.68,9.34,9.34,0,0,0-.57,1,3.39,3.39,0,0,0-.18.39,30.53,30.53,0,0,0-1.39-3.25,2.15,2.15,0,0,0,1.11-1.15,4.94,4.94,0,0,0,.21-2.3,10.73,10.73,0,0,0-.59-2.17c-.25-.57-.44-.94-.44-.94a7.11,7.11,0,0,0-.42.74,7.45,7.45,0,0,0-.37.79c-.13.3-.28.63-.4,1a7.53,7.53,0,0,0-.29,1.06,5,5,0,0,0-.07.54c0,.07,0,.13,0,.2a26.82,26.82,0,0,0-2.44-3.28,1.72,1.72,0,0,0,.6-.49,1.86,1.86,0,0,0,.35-.87,3.45,3.45,0,0,0,0-1.06,4.46,4.46,0,0,0-.3-1.11,11.54,11.54,0,0,0-1-1.93c-.33-.49-.58-.81-.58-.81s-.12.29-.26.74A11.66,11.66,0,0,0,66,7a5.1,5.1,0,0,0,.1,2.06.57.57,0,0,0,0,.14C65.13,8.13,64,7,62.74,5.91c1.24-.7.9-2.16.21-3.49A12.79,12.79,0,0,0,61.79.72C61.44.28,61.17,0,61.17,0a8.69,8.69,0,0,0-.33,2.41,4.94,4.94,0,0,0,.38,2,3.24,3.24,0,0,0,.19.37h0a19.4,19.4,0,0,0-3.12-2c7.9,6.62,13.94,14.63,14.84,23.81a39.76,39.76,0,0,1-.6,10,31.94,31.94,0,0,1-3.46,10.91,34.55,34.55,0,0,1-12.4,13s-8.14,4.09-16.87,4.18h-.93C30.24,64.38,22,60.33,22,60.33a34.63,34.63,0,0,1-12.4-13A31.94,31.94,0,0,1,6.13,36.45a39.76,39.76,0,0,1-.6-10c.9-9.18,6.94-17.19,14.85-23.81a19.3,19.3,0,0,0-3.13,2.05h0a2.53,2.53,0,0,0,.2-.36,5.11,5.11,0,0,0,.37-1.95A8.69,8.69,0,0,0,17.48,0s-.27.28-.62.72a12.79,12.79,0,0,0-1.16,1.7c-.69,1.33-1,2.79.22,3.49-1.26,1.13-2.4,2.22-3.45,3.3a.57.57,0,0,0,0-.14A5.1,5.1,0,0,0,12.61,7a11.66,11.66,0,0,0-.39-1.75c-.14-.45-.26-.74-.26-.74s-.25.32-.58.81a11.54,11.54,0,0,0-1,1.93,4.94,4.94,0,0,0-.3,1.11,3.45,3.45,0,0,0,0,1.06,1.86,1.86,0,0,0,.35.87,1.72,1.72,0,0,0,.6.49A27.89,27.89,0,0,0,8.6,14.07c0-.07,0-.13,0-.2a3.33,3.33,0,0,0-.07-.54,7.53,7.53,0,0,0-.29-1.06c-.12-.35-.27-.68-.4-1a7.45,7.45,0,0,0-.37-.79C7.22,10,7,9.76,7,9.76s-.2.37-.45.94A10.76,10.76,0,0,0,6,12.87a4.82,4.82,0,0,0,.2,2.3,2.19,2.19,0,0,0,1.11,1.15,28.6,28.6,0,0,0-1.38,3.25l-.19-.4a7.34,7.34,0,0,0-.57-1,16.25,16.25,0,0,0-1.26-1.68c-.36-.43-.61-.69-.61-.69s0,.11-.07.29a5.94,5.94,0,0,0-.13.75c0,.31-.06.68-.07,1.07q0,.3,0,.6a6.18,6.18,0,0,0,.07.62,4.77,4.77,0,0,0,.82,2.27,2.52,2.52,0,0,0,1.17.92,26.61,26.61,0,0,0-.58,3.06l-.1-.14c-.13-.17-.26-.33-.4-.49s-.27-.32-.41-.47A16,16,0,0,0,2,22.76l-.58-.44-.21-.16s0,.11,0,.29,0,.44.06.75.08.68.15,1.06a7.86,7.86,0,0,0,.33,1.19,6.85,6.85,0,0,0,.5,1.18,5.22,5.22,0,0,0,.74,1,3.11,3.11,0,0,0,1.33.81c0,1.07,0,2.14,0,3.22A4.87,4.87,0,0,0,4,31.23,8.17,8.17,0,0,0,3,30.31a15.84,15.84,0,0,0-1.9-1.38C.59,28.6.23,28.4.23,28.4a7.66,7.66,0,0,0,.19,1c.07.31.17.66.29,1,.06.19.13.38.2.58s.17.4.26.61a8.49,8.49,0,0,0,.66,1.18,4.91,4.91,0,0,0,.4.53,5.1,5.1,0,0,0,.47.46,3.09,3.09,0,0,0,1.89.79c.17,1.27.39,2.54.66,3.79a.61.61,0,0,1-.07-.1,9.93,9.93,0,0,0-2-1.87c-.38-.28-.78-.52-1.15-.74l-1-.57c-.59-.32-1-.5-1-.5s.1.44.32,1.08A13.63,13.63,0,0,0,1.43,38a8.42,8.42,0,0,0,.88,1.16,4.94,4.94,0,0,0,1.06.94,3.29,3.29,0,0,0,2.42.57l.12.48A30.66,30.66,0,0,0,7,44.49l-.25-.25a6.72,6.72,0,0,0-.57-.46c-.2-.15-.39-.3-.6-.44a12.16,12.16,0,0,0-1.31-.77c-.44-.23-.91-.44-1.31-.63s-.8-.35-1.13-.48c-.66-.27-1.11-.41-1.11-.41s.19.45.54,1.1a11.47,11.47,0,0,0,.68,1.09c.28.39.58.8.92,1.19A11,11,0,0,0,4,45.53c.21.17.42.32.63.46l.32.2.34.17a3.49,3.49,0,0,0,2.62.23,26,26,0,0,0,2.12,3.57c-.13-.09-.26-.19-.4-.27A7.87,7.87,0,0,0,9,49.5c-.22-.13-.46-.24-.71-.36-.49-.22-1-.41-1.52-.59L6,48.31l-.72-.22c-.46-.14-.89-.25-1.26-.34-.74-.18-1.23-.27-1.23-.27s.31.44.82,1.06a8.77,8.77,0,0,0,1,1c.37.37.79.74,1.23,1.1a12.16,12.16,0,0,0,1.47.94A6.63,6.63,0,0,0,8,52a4.14,4.14,0,0,0,.77.27,3.54,3.54,0,0,0,2.75-.2c.79,1,1.63,2,2.52,3L13.92,55l-.4-.14-.39-.14-.82-.25c-.55-.14-1.13-.26-1.7-.35s-1.1-.18-1.61-.24L7.63,53.7c-.8-.07-1.32-.09-1.32-.09s.42.4,1.11,1L8,55c.2.15.44.3.68.45.47.31,1,.62,1.54.91l.41.21.44.18.87.33a8.68,8.68,0,0,0,1.7.4A3.85,3.85,0,0,0,16,57.09q1.09,1,2.28,2L17.58,59c-.6-.06-1.23-.07-1.8-.09a29.79,29.79,0,0,0-3.11.07l-1,.08-.36,0,.09.06.27.16c.24.14.58.34,1,.56s.91.47,1.45.72,1.16.46,1.78.66c.31.1.62.2.93.28l.47.12.48.08a9.67,9.67,0,0,0,1.82.14,4.1,4.1,0,0,0,2-.5c.29.18.59.34.89.5a.24.24,0,0,0,.17,0A38.52,38.52,0,0,0,36,66.08c-3.35.62-7.28,1.31-11.45,1.94l-4.51,3.84s10.14-3.38,19.6-5.53c9.46,2.15,19.6,5.53,19.6,5.53L54.74,68c-4.28-.65-8.31-1.35-11.71-2a33.75,33.75,0,0,0,13-4.1.24.24,0,0,0,.13,0c.3-.16.6-.32.9-.5a3.92,3.92,0,0,0,2,.5,9.67,9.67,0,0,0,1.82-.14l.48-.08.47-.12c.31-.08.62-.18.93-.28.62-.2,1.23-.42,1.78-.65s1-.51,1.45-.73.76-.42,1-.56a2.4,2.4,0,0,0,.27-.16l.09-.06-.36,0L66,59a29.79,29.79,0,0,0-3.11-.07c-.57,0-1.2,0-1.8.09l-.72.09c.78-.64,1.54-1.31,2.27-2A3.85,3.85,0,0,0,65,57.5a8.68,8.68,0,0,0,1.7-.4l.88-.33.43-.18.41-.21c.54-.29,1.07-.6,1.55-.91.23-.15.47-.3.67-.45l.56-.45c.69-.56,1.11-1,1.11-1s-.52,0-1.32.09l-1.37.15c-.51.06-1,.15-1.61.24s-1.14.21-1.7.35l-.82.25-.39.14-.4.14-.11.05c.89-1,1.73-2,2.52-3a3.54,3.54,0,0,0,2.75.2,5,5,0,0,0,.77-.26c.25-.11.51-.24.76-.38a12.16,12.16,0,0,0,1.47-.94c.44-.36.86-.73,1.23-1.1a8.77,8.77,0,0,0,1-1c.51-.62.82-1.06.82-1.06s-.49.09-1.23.27c-.37.09-.8.2-1.26.34l-.72.22-.77.24c-.51.18-1,.37-1.52.59l-.71.36a7.87,7.87,0,0,0-.7.39l-.4.27a26,26,0,0,0,2.12-3.57,3.49,3.49,0,0,0,2.62-.23l.34-.17L74,46a5.64,5.64,0,0,0,.63-.46,11,11,0,0,0,1.17-1.1c.34-.39.64-.8.92-1.19a11.47,11.47,0,0,0,.68-1.09c.35-.65.54-1.1.54-1.1s-.45.14-1.11.41c-.33.13-.72.29-1.12.48s-.88.4-1.32.63a14.07,14.07,0,0,0-1.31.77c-.21.14-.4.29-.6.44a6.72,6.72,0,0,0-.57.46l-.25.25a30.66,30.66,0,0,0,1.09-3.32Z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g0, "id", "laurel_wreath");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g0, "data-name", "laurel wreath");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g1, "id", "Capa_2");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g1, "data-name", "Capa 2");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_svg_attributes)(svg, svg_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, svg, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, g1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g1, g0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path9);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path10);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path11);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path12);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path13);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path14);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path15);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path16);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path17);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path18);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path19);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path20);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path21);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, path22);
		},
		p(ctx, [dirty]) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_svg_attributes)(svg, svg_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(svg_levels, [
				dirty & /*props*/ 1 && /*props*/ ctx[0],
				{ xmlns: "http://www.w3.org/2000/svg" },
				{ viewBox: "0 0 78.65 71.86" }
			]));
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(svg);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let props;
	const omit_props_names = [];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(1, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
	};

	$$self.$$.update = () => {
		$: $$invalidate(0, props = {
			...$$restProps,
			class: `${$$restProps.class || ''}`
		});
	};

	return [props];
}

class ApplicationLogo extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplicationLogo);



/***/ }),

/***/ "./resources/js/Components/Dropdown.svelte":
/*!*************************************************!*\
  !*** ./resources/js/Components/Dropdown.svelte ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/popper.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Components\Dropdown.svelte generated by Svelte v3.43.1 */





const get_dropdown_slot_changes = dirty => ({});
const get_dropdown_slot_context = ctx => ({});

// (59:0) {#if show}
function create_if_block(ctx) {
	let div2;
	let div0;
	let t;
	let div1;
	let current;
	let mounted;
	let dispose;
	const dropdown_slot_template = /*#slots*/ ctx[11].dropdown;
	const dropdown_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(dropdown_slot_template, ctx, /*$$scope*/ ctx[10], get_dropdown_slot_context);

	return {
		c() {
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (dropdown_slot) dropdown_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div0, "position", "fixed");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div0, "top", "0");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div0, "right", "0");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div0, "left", "0");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div0, "bottom", "0");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div0, "z-index", "99998");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div0, "background", "black");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div0, "opacity", ".2");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", /*classes*/ ctx[1]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div1, "position", "absolute");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div1, "z-index", "99999");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);

			if (dropdown_slot) {
				dropdown_slot.m(div1, null);
			}

			/*div1_binding*/ ctx[15](div1);
			/*div2_binding*/ ctx[17](div2);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div0, "click", /*click_handler_1*/ ctx[14]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div1, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.stop_propagation)(/*click_handler_2*/ ctx[16]))
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dropdown_slot) {
				if (dropdown_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						dropdown_slot,
						dropdown_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[10])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(dropdown_slot_template, /*$$scope*/ ctx[10], dirty, get_dropdown_slot_changes),
						get_dropdown_slot_context
					);
				}
			}

			if (!current || dirty & /*classes*/ 2) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", /*classes*/ ctx[1]);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(dropdown_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(dropdown_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
			if (dropdown_slot) dropdown_slot.d(detaching);
			/*div1_binding*/ ctx[15](null);
			/*div2_binding*/ ctx[17](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function create_fragment(ctx) {
	let button_1;
	let t;
	let if_block_anchor;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[10], null);
	let button_1_levels = [/*$$restProps*/ ctx[7], { type: "button" }];
	let button_1_data = {};

	for (let i = 0; i < button_1_levels.length; i += 1) {
		button_1_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(button_1_data, button_1_levels[i]);
	}

	let if_block = /*show*/ ctx[2] && create_if_block(ctx);

	return {
		c() {
			button_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			if (default_slot) default_slot.c();
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(button_1, button_1_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button_1, anchor);

			if (default_slot) {
				default_slot.m(button_1, null);
			}

			if (button_1.autofocus) button_1.focus();
			/*button_1_binding*/ ctx[12](button_1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(window, "keydown", /*keydown*/ ctx[6]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button_1, "click", /*click_handler*/ ctx[13])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[10])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[10], dirty, null),
						null
					);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(button_1, button_1_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(button_1_levels, [dirty & /*$$restProps*/ 128 && /*$$restProps*/ ctx[7], { type: "button" }]));

			if (/*show*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*show*/ 4) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, () => {
					if_block = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button_1);
			if (default_slot) default_slot.d(detaching);
			/*button_1_binding*/ ctx[12](null);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
			if (if_block) if_block.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = ["placement","boundary","autoclose","classes"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { placement = 'bottom-end' } = $$props;
	let { boundary = 'scrollParent' } = $$props;
	let { autoclose = true } = $$props;
	let { classes } = $$props;
	let button;
	let dropdown;
	let portal;
	let popper;
	let show = false;

	async function showDropdown(show) {
		if (show) {
			await (0,svelte__WEBPACK_IMPORTED_MODULE_1__.tick)();

			popper = (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_2__.createPopper)(button, dropdown, {
				placement,
				modifiers: [
					{
						name: 'preventOverflow',
						options: { boundary }
					}
				]
			});

			document.body.appendChild(portal);
		} else if (popper) {
			await (0,svelte__WEBPACK_IMPORTED_MODULE_1__.tick)();
			popper.destroy();
		}
	}

	function keydown(e) {
		if (e.keyCode && e.keyCode === 27) {
			$$invalidate(2, show = false);
		}
	}

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.onDestroy)(() => {
		popper && popper.destroy();
		portal && document.body.removeChild(portal);
	});

	function button_1_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			button = $$value;
			$$invalidate(3, button);
		});
	}

	const click_handler = () => $$invalidate(2, show = true);
	const click_handler_1 = () => $$invalidate(2, show = false);

	function div1_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			dropdown = $$value;
			$$invalidate(4, dropdown);
		});
	}

	const click_handler_2 = () => $$invalidate(2, show = autoclose ? false : true);

	function div2_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			portal = $$value;
			$$invalidate(5, portal);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(7, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('placement' in $$new_props) $$invalidate(8, placement = $$new_props.placement);
		if ('boundary' in $$new_props) $$invalidate(9, boundary = $$new_props.boundary);
		if ('autoclose' in $$new_props) $$invalidate(0, autoclose = $$new_props.autoclose);
		if ('classes' in $$new_props) $$invalidate(1, classes = $$new_props.classes);
		if ('$$scope' in $$new_props) $$invalidate(10, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*show*/ 4) {
			$: showDropdown(show);
		}
	};

	return [
		autoclose,
		classes,
		show,
		button,
		dropdown,
		portal,
		keydown,
		$$restProps,
		placement,
		boundary,
		$$scope,
		slots,
		button_1_binding,
		click_handler,
		click_handler_1,
		div1_binding,
		click_handler_2,
		div2_binding
	];
}

class Dropdown extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			placement: 8,
			boundary: 9,
			autoclose: 0,
			classes: 1
		});
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);



/***/ }),

/***/ "./resources/js/Components/DropdownLink.svelte":
/*!*****************************************************!*\
  !*** ./resources/js/Components/DropdownLink.svelte ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Components\DropdownLink.svelte generated by Svelte v3.43.1 */




function create_fragment(ctx) {
	let a;
	let inertia_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[3], null);
	let a_levels = [/*props*/ ctx[1], { href: /*href*/ ctx[0] }];
	let a_data = {};

	for (let i = 0; i < a_levels.length; i += 1) {
		a_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(a_data, a_levels[i]);
	}

	return {
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(a, a_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);

			if (default_slot) {
				default_slot.m(a, null);
			}

			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__.inertia.call(null, a, { method: /*$$restProps*/ ctx[2].method }));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[3],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[3])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[3], dirty, null),
						null
					);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(a, a_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(a_levels, [
				dirty & /*props*/ 2 && /*props*/ ctx[1],
				(!current || dirty & /*href*/ 1) && { href: /*href*/ ctx[0] }
			]));

			if (inertia_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(inertia_action.update) && dirty & /*$$restProps*/ 4) inertia_action.update.call(null, { method: /*$$restProps*/ ctx[2].method });
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let props;
	const omit_props_names = ["href"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { href } = $$props;

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(2, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('href' in $$new_props) $$invalidate(0, href = $$new_props.href);
		if ('$$scope' in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(1, props = {
			...$$restProps,
			method: 'get',
			class: `block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ${$$restProps.class || ''}`
		});
	};

	return [href, props, $$restProps, $$scope, slots];
}

class DropdownLink extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { href: 0 });
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownLink);



/***/ }),

/***/ "./resources/js/Components/Link.svelte":
/*!*********************************************!*\
  !*** ./resources/js/Components/Link.svelte ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Components\Link.svelte generated by Svelte v3.43.1 */




function create_fragment(ctx) {
	let a;
	let inertia_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[2].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

	return {
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", /*href*/ ctx[0]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "class", "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);

			if (default_slot) {
				default_slot.m(a, null);
			}

			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__.inertia.call(null, a));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 2)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[1],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[1])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[1], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*href*/ 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", /*href*/ ctx[0]);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { href } = $$props;

	$$self.$$set = $$props => {
		if ('href' in $$props) $$invalidate(0, href = $$props.href);
		if ('$$scope' in $$props) $$invalidate(1, $$scope = $$props.$$scope);
	};

	return [href, $$scope, slots];
}

class Link extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { href: 0 });
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);



/***/ }),

/***/ "./resources/js/Components/NavLink.svelte":
/*!************************************************!*\
  !*** ./resources/js/Components/NavLink.svelte ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Components\NavLink.svelte generated by Svelte v3.43.1 */




function create_fragment(ctx) {
	let a;
	let a_class_value;
	let inertia_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	let a_levels = [
		/*props*/ ctx[1],
		{ href: /*href*/ ctx[0] },
		{
			class: a_class_value = /*classes*/ ctx[2]()
		}
	];

	let a_data = {};

	for (let i = 0; i < a_levels.length; i += 1) {
		a_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(a_data, a_levels[i]);
	}

	return {
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(a, a_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);

			if (default_slot) {
				default_slot.m(a, null);
			}

			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__.inertia.call(null, a, { method: /*$$restProps*/ ctx[3].method }));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[5],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[5])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
						null
					);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(a, a_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(a_levels, [
				dirty & /*props*/ 2 && /*props*/ ctx[1],
				(!current || dirty & /*href*/ 1) && { href: /*href*/ ctx[0] },
				{ class: a_class_value }
			]));

			if (inertia_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(inertia_action.update) && dirty & /*$$restProps*/ 8) inertia_action.update.call(null, { method: /*$$restProps*/ ctx[3].method });
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let props;
	const omit_props_names = ["href","active"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { href } = $$props;
	let { active } = $$props;

	function classes() {
		return active
		? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
		: 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out';
	}

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(3, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('href' in $$new_props) $$invalidate(0, href = $$new_props.href);
		if ('active' in $$new_props) $$invalidate(4, active = $$new_props.active);
		if ('$$scope' in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(1, props = {
			...$$restProps,
			method: 'get',
			class: `${$$restProps.class || ''}`
		});
	};

	return [href, props, classes, $$restProps, active, $$scope, slots];
}

class NavLink extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { href: 0, active: 4 });
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);



/***/ }),

/***/ "./resources/js/Components/ResponsiveNavLink.svelte":
/*!**********************************************************!*\
  !*** ./resources/js/Components/ResponsiveNavLink.svelte ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Components\ResponsiveNavLink.svelte generated by Svelte v3.43.1 */




function create_fragment(ctx) {
	let a;
	let a_class_value;
	let inertia_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", /*href*/ ctx[0]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "class", a_class_value = /*classes*/ ctx[1]());
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);

			if (default_slot) {
				default_slot.m(a, null);
			}

			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__.inertia.call(null, a, { method: /*$$restProps*/ ctx[2].method }));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[4],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[4])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[4], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*href*/ 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", /*href*/ ctx[0]);
			}

			if (inertia_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(inertia_action.update) && dirty & /*$$restProps*/ 4) inertia_action.update.call(null, { method: /*$$restProps*/ ctx[2].method });
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let props;
	const omit_props_names = ["active","href"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { active } = $$props;
	let { href } = $$props;

	function classes() {
		return active
		? 'block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out'
		: 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out';
	}

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(2, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('active' in $$new_props) $$invalidate(3, active = $$new_props.active);
		if ('href' in $$new_props) $$invalidate(0, href = $$new_props.href);
		if ('$$scope' in $$new_props) $$invalidate(4, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: props = {
			...$$restProps,
			method: 'get',
			class: `${$$restProps.class || ''}`
		};
	};

	return [href, classes, $$restProps, active, $$scope, slots];
}

class ResponsiveNavLink extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { active: 3, href: 0 });
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveNavLink);



/***/ }),

/***/ "./resources/js/Layouts/Authenticated.svelte":
/*!***************************************************!*\
  !*** ./resources/js/Layouts/Authenticated.svelte ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Utils */ "./resources/js/Utils/index.js");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var _Components_ApplicationLogo_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/ApplicationLogo.svelte */ "./resources/js/Components/ApplicationLogo.svelte");
/* harmony import */ var _Components_Dropdown_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Dropdown.svelte */ "./resources/js/Components/Dropdown.svelte");
/* harmony import */ var _Components_DropdownLink_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/DropdownLink.svelte */ "./resources/js/Components/DropdownLink.svelte");
/* harmony import */ var _Components_NavLink_svelte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/NavLink.svelte */ "./resources/js/Components/NavLink.svelte");
/* harmony import */ var _Components_ResponsiveNavLink_svelte__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/ResponsiveNavLink.svelte */ "./resources/js/Components/ResponsiveNavLink.svelte");
/* harmony import */ var _Components_Link_svelte__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Components/Link.svelte */ "./resources/js/Components/Link.svelte");
/* harmony import */ var _smui_textfield__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @smui/textfield */ "./node_modules/@smui/textfield/index.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Layouts\Authenticated.svelte generated by Svelte v3.43.1 */












const get_header_slot_changes = dirty => ({});
const get_header_slot_context = ctx => ({});

// (38:28) <Link href={route('dashboard')}>
function create_default_slot_5(ctx) {
	let breezeapplicationlogo;
	let current;
	breezeapplicationlogo = new _Components_ApplicationLogo_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({ props: { class: "block h-9 w-auto" } });

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(breezeapplicationlogo.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(breezeapplicationlogo, target, anchor);
			current = true;
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(breezeapplicationlogo.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(breezeapplicationlogo.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(breezeapplicationlogo, detaching);
		}
	};
}

// (45:28) <BreezeNavLink href={route('dashboard')} active={route().current('dashboard')}>
function create_default_slot_4(ctx) {
	let t;

	return {
		c() {
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Dashboard");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
		}
	};
}

// (52:28) <BreezeDropdown align="right" width="48">
function create_default_slot_3(ctx) {
	let div;
	let span;
	let button;
	let t0_value = /*$page*/ ctx[1].props.auth.user.name + "";
	let t0;
	let t1;
	let svg;
	let path;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
			path = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill-rule", "evenodd");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "d", "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "clip-rule", "evenodd");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "class", "ml-2 -mr-0.5 h-4 w-4");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "xmlns", "http://www.w3.org/2000/svg");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox", "0 0 20 20");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "fill", "currentColor");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "type", "button");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "class", "inline-flex rounded-md");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, span);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, button);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, svg);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, path);
		},
		p(ctx, dirty) {
			if (dirty & /*$page*/ 2 && t0_value !== (t0_value = /*$page*/ ctx[1].props.auth.user.name + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
		}
	};
}

// (66:36) <BreezeDropdownLink href={route('logout')} method="post" as="button" class="flex">
function create_default_slot_2(ctx) {
	let svg;
	let path;
	let t;

	return {
		c() {
			svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
			path = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("\n                                        Salir");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill-rule", "evenodd");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "d", "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "clip-rule", "evenodd");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "xmlns", "http://www.w3.org/2000/svg");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "class", "h-5 w-5 mr-4");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox", "0 0 20 20");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "fill", "currentColor");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, svg, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, path);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(svg);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
		}
	};
}

// (65:32) 
function create_dropdown_slot(ctx) {
	let div;
	let breezedropdownlink;
	let current;

	breezedropdownlink = new _Components_DropdownLink_svelte__WEBPACK_IMPORTED_MODULE_6__["default"]({
			props: {
				href: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.route)('logout'),
				method: "post",
				as: "button",
				class: "flex",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(breezedropdownlink.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "slot", "dropdown");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "mt-2 py-2 shadow-xl bg-white rounded text-sm");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(breezedropdownlink, div, null);
			current = true;
		},
		p(ctx, dirty) {
			const breezedropdownlink_changes = {};

			if (dirty & /*$$scope*/ 512) {
				breezedropdownlink_changes.$$scope = { dirty, ctx };
			}

			breezedropdownlink.$set(breezedropdownlink_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(breezedropdownlink.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(breezedropdownlink.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(breezedropdownlink);
		}
	};
}

// (92:20) <BreezeResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
function create_default_slot_1(ctx) {
	let t;

	return {
		c() {
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Dashboard");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
		}
	};
}

// (107:24) <BreezeResponsiveNavLink href={route('logout')} method="post" as="button">
function create_default_slot(ctx) {
	let t;

	return {
		c() {
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Salir");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
		}
	};
}

// (114:8) {#if $$slots.header}
function create_if_block(ctx) {
	let header;
	let div;
	let current;
	const header_slot_template = /*#slots*/ ctx[6].header;
	const header_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(header_slot_template, ctx, /*$$scope*/ ctx[9], get_header_slot_context);

	return {
		c() {
			header = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("header");
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (header_slot) header_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(header, "class", "bg-white shadow");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, header, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(header, div);

			if (header_slot) {
				header_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (header_slot) {
				if (header_slot.p && (!current || dirty & /*$$scope*/ 512)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						header_slot,
						header_slot_template,
						ctx,
						/*$$scope*/ ctx[9],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[9])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(header_slot_template, /*$$scope*/ ctx[9], dirty, get_header_slot_changes),
						get_header_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(header_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(header_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(header);
			if (header_slot) header_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let title_value;
	let t0;
	let div17;
	let div16;
	let nav;
	let div7;
	let div6;
	let div2;
	let div0;
	let link;
	let t1;
	let div1;
	let breezenavlink;
	let t2;
	let div4;
	let div3;
	let breezedropdown;
	let t3;
	let div5;
	let button;
	let svg;
	let path0;
	let path0_class_value;
	let path1;
	let path1_class_value;
	let t4;
	let div15;
	let div9;
	let breezeresponsivenavlink0;
	let t5;
	let div8;
	let small;
	let t7;
	let textfield;
	let updating_value;
	let t8;
	let div14;
	let div12;
	let div10;
	let t9_value = /*$page*/ ctx[1].props.auth.user.name + "";
	let t9;
	let t10;
	let div11;
	let t11_value = /*$page*/ ctx[1].props.auth.user.email + "";
	let t11;
	let t12;
	let div13;
	let breezeresponsivenavlink1;
	let div15_class_value;
	let t13;
	let t14;
	let main;
	let current;
	let mounted;
	let dispose;
	document.title = title_value = /*$title*/ ctx[2] ? `${/*$title*/ ctx[2]}` : '';

	link = new _Components_Link_svelte__WEBPACK_IMPORTED_MODULE_9__["default"]({
			props: {
				href: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.route)('dashboard'),
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			}
		});

	breezenavlink = new _Components_NavLink_svelte__WEBPACK_IMPORTED_MODULE_7__["default"]({
			props: {
				href: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.route)('dashboard'),
				active: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.route)().current('dashboard'),
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			}
		});

	breezedropdown = new _Components_Dropdown_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({
			props: {
				align: "right",
				width: "48",
				$$slots: {
					dropdown: [create_dropdown_slot],
					default: [create_default_slot_3]
				},
				$$scope: { ctx }
			}
		});

	breezeresponsivenavlink0 = new _Components_ResponsiveNavLink_svelte__WEBPACK_IMPORTED_MODULE_8__["default"]({
			props: {
				href: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.route)('dashboard'),
				active: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.route)().current('dashboard'),
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	function textfield_value_binding(value) {
		/*textfield_value_binding*/ ctx[8](value);
	}

	let textfield_props = {
		id: "numero_sesion",
		variant: "outlined",
		type: "number",
		class: "mt-1 w-1/4",
		input$min: "0"
	};

	if (/*$form*/ ctx[3].numero_sesion !== void 0) {
		textfield_props.value = /*$form*/ ctx[3].numero_sesion;
	}

	textfield = new _smui_textfield__WEBPACK_IMPORTED_MODULE_10__["default"]({ props: textfield_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(textfield, 'value', textfield_value_binding));

	textfield.$on("input", function () {
		if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(/*$form*/ ctx[3].numero_sesion > 0
		? /*$form*/ ctx[3].post((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.route)('sesiones.store'), { preserveScroll: true })
		: null)) (/*$form*/ ctx[3].numero_sesion > 0
		? /*$form*/ ctx[3].post((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.route)('sesiones.store'), { preserveScroll: true })
		: null).apply(this, arguments);
	});

	breezeresponsivenavlink1 = new _Components_ResponsiveNavLink_svelte__WEBPACK_IMPORTED_MODULE_8__["default"]({
			props: {
				href: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.route)('logout'),
				method: "post",
				as: "button",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	let if_block = /*$$slots*/ ctx[5].header && create_if_block(ctx);
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[9], null);

	return {
		c() {
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div17 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div16 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			nav = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("nav");
			div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link.$$.fragment);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(breezenavlink.$$.fragment);
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(breezedropdown.$$.fragment);
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
			path0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			path1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div15 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(breezeresponsivenavlink0.$$.fragment);
			t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			small = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("small");
			small.textContent = "Configure el número de la sesión de entrenamiento";
			t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(textfield.$$.fragment);
			t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div14 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t9_value);
			t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t11_value);
			t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(breezeresponsivenavlink1.$$.fragment);
			t13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block) if_block.c();
			t14 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			main = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("main");
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "flex-shrink-0 flex items-center");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "flex");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "ml-3 relative");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "hidden sm:flex sm:items-center sm:ml-6");

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path0, "class", path0_class_value = /*showingNavigationDropdown*/ ctx[0]
			? 'hidden'
			: 'inline-flex');

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path0, "stroke-linecap", "round");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path0, "stroke-linejoin", "round");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path0, "stroke-width", "2");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path0, "d", "M4 6h16M4 12h16M4 18h16");

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path1, "class", path1_class_value = !/*showingNavigationDropdown*/ ctx[0]
			? 'hidden'
			: 'inline-flex');

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path1, "stroke-linecap", "round");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path1, "stroke-linejoin", "round");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path1, "stroke-width", "2");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path1, "d", "M6 18L18 6M6 6l12 12");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "class", "h-6 w-6");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "stroke", "currentColor");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "fill", "none");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox", "0 0 24 24");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "-mr-2 flex items-center sm:hidden");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "flex justify-between h-16");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(small, "class", "text-gray-500");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "class", "px-4 flex items-center");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "class", "pt-2 pb-3 space-y-1");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div10, "class", "font-medium text-base text-gray-800");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div11, "class", "font-medium text-sm text-gray-500");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div12, "class", "px-4");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div13, "class", "mt-3 space-y-1");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div14, "class", "pt-4 pb-1 border-t border-gray-200");

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div15, "class", div15_class_value = /*showingNavigationDropdown*/ ctx[0]
			? 'block sm:hidden'
			: 'hidden sm:hidden');

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(nav, "class", "bg-white border-b border-gray-100");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div16, "class", "min-h-screen bg-gray-100");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div17, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div17, div16);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div16, nav);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(nav, div7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link, div0, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(breezenavlink, div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(breezedropdown, div3, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, button);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, svg);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, path0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, path1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(nav, t4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(nav, div15);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div15, div9);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(breezeresponsivenavlink0, div9, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, t5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, div8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, small);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, t7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(textfield, div8, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div15, t8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div15, div14);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div14, div12);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div12, div10);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, t9);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div12, t10);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div12, div11);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div11, t11);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div14, t12);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div14, div13);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(breezeresponsivenavlink1, div13, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div16, t13);
			if (if_block) if_block.m(div16, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div16, t14);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div16, main);

			if (default_slot) {
				default_slot.m(main, null);
			}

			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", /*click_handler*/ ctx[7]);
				mounted = true;
			}
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;

			if ((!current || dirty & /*$title*/ 4) && title_value !== (title_value = /*$title*/ ctx[2] ? `${/*$title*/ ctx[2]}` : '')) {
				document.title = title_value;
			}

			const link_changes = {};

			if (dirty & /*$$scope*/ 512) {
				link_changes.$$scope = { dirty, ctx };
			}

			link.$set(link_changes);
			const breezenavlink_changes = {};

			if (dirty & /*$$scope*/ 512) {
				breezenavlink_changes.$$scope = { dirty, ctx };
			}

			breezenavlink.$set(breezenavlink_changes);
			const breezedropdown_changes = {};

			if (dirty & /*$$scope, $page*/ 514) {
				breezedropdown_changes.$$scope = { dirty, ctx };
			}

			breezedropdown.$set(breezedropdown_changes);

			if (!current || dirty & /*showingNavigationDropdown*/ 1 && path0_class_value !== (path0_class_value = /*showingNavigationDropdown*/ ctx[0]
			? 'hidden'
			: 'inline-flex')) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path0, "class", path0_class_value);
			}

			if (!current || dirty & /*showingNavigationDropdown*/ 1 && path1_class_value !== (path1_class_value = !/*showingNavigationDropdown*/ ctx[0]
			? 'hidden'
			: 'inline-flex')) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path1, "class", path1_class_value);
			}

			const breezeresponsivenavlink0_changes = {};

			if (dirty & /*$$scope*/ 512) {
				breezeresponsivenavlink0_changes.$$scope = { dirty, ctx };
			}

			breezeresponsivenavlink0.$set(breezeresponsivenavlink0_changes);
			const textfield_changes = {};

			if (!updating_value && dirty & /*$form*/ 8) {
				updating_value = true;
				textfield_changes.value = /*$form*/ ctx[3].numero_sesion;
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_value = false);
			}

			textfield.$set(textfield_changes);
			if ((!current || dirty & /*$page*/ 2) && t9_value !== (t9_value = /*$page*/ ctx[1].props.auth.user.name + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t9, t9_value);
			if ((!current || dirty & /*$page*/ 2) && t11_value !== (t11_value = /*$page*/ ctx[1].props.auth.user.email + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t11, t11_value);
			const breezeresponsivenavlink1_changes = {};

			if (dirty & /*$$scope*/ 512) {
				breezeresponsivenavlink1_changes.$$scope = { dirty, ctx };
			}

			breezeresponsivenavlink1.$set(breezeresponsivenavlink1_changes);

			if (!current || dirty & /*showingNavigationDropdown*/ 1 && div15_class_value !== (div15_class_value = /*showingNavigationDropdown*/ ctx[0]
			? 'block sm:hidden'
			: 'hidden sm:hidden')) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div15, "class", div15_class_value);
			}

			if (/*$$slots*/ ctx[5].header) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*$$slots*/ 32) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					if_block.m(div16, t14);
				}
			} else if (if_block) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, () => {
					if_block = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 512)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[9],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[9])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[9], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(breezenavlink.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(breezedropdown.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(breezeresponsivenavlink0.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(textfield.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(breezeresponsivenavlink1.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(breezenavlink.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(breezedropdown.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(breezeresponsivenavlink0.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(textfield.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(breezeresponsivenavlink1.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div17);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(breezenavlink);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(breezedropdown);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(breezeresponsivenavlink0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(textfield);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(breezeresponsivenavlink1);
			if (if_block) if_block.d();
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

const title = (0,svelte_store__WEBPACK_IMPORTED_MODULE_1__.writable)(null);

function instance($$self, $$props, $$invalidate) {
	let $page;

	let $title,
		$$unsubscribe_title = svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		$$subscribe_title = () => ($$unsubscribe_title(), $$unsubscribe_title = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.subscribe)(title, $$value => $$invalidate(2, $title = $$value)), title);

	let $form;
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_3__.page, $$value => $$invalidate(1, $page = $$value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, title, $$value => $$invalidate(2, $title = $$value));
	$$self.$$.on_destroy.push(() => $$unsubscribe_title());
	let { $$slots: slots = {}, $$scope } = $$props;
	const $$slots = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_slots)(slots);
	let showingNavigationDropdown = false;

	let form = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_3__.useForm)({
		numero_sesion: $page.props.auth.user.sesion.numero_sesion
	});

	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, form, value => $$invalidate(3, $form = value));
	const click_handler = () => $$invalidate(0, showingNavigationDropdown = !showingNavigationDropdown);

	function textfield_value_binding(value) {
		if ($$self.$$.not_equal($form.numero_sesion, value)) {
			$form.numero_sesion = value;
			form.set($form);
		}
	}

	$$self.$$set = $$props => {
		if ('$$scope' in $$props) $$invalidate(9, $$scope = $$props.$$scope);
	};

	return [
		showingNavigationDropdown,
		$page,
		$title,
		$form,
		form,
		$$slots,
		slots,
		click_handler,
		textfield_value_binding,
		$$scope
	];
}

class Authenticated extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Authenticated);




/***/ }),

/***/ "./resources/js/Pages/Ejercicios/Index.svelte":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Ejercicios/Index.svelte ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Utils */ "./resources/js/Utils/index.js");
/* harmony import */ var _Layouts_Authenticated_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Layouts/Authenticated.svelte */ "./resources/js/Layouts/Authenticated.svelte");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* harmony import */ var C_laragon_www_gym_resources_js_Pages_Ejercicios_Index_svelte_1_css_svelte_loader_cssPath_C_laragon_www_gym_resources_js_Pages_Ejercicios_Index_svelte_1_css_C_laragon_www_gym_resources_js_Pages_Ejercicios_Index_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/js/Pages/Ejercicios/Index.svelte.1.css!=!svelte-loader?cssPath=C:/laragon/www/gym/resources/js/Pages/Ejercicios/Index.svelte.1.css!./resources/js/Pages/Ejercicios/Index.svelte */ "./resources/js/Pages/Ejercicios/Index.svelte.1.css!=!./node_modules/svelte-loader/index.js?cssPath=C:/laragon/www/gym/resources/js/Pages/Ejercicios/Index.svelte.1.css!./resources/js/Pages/Ejercicios/Index.svelte");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Pages\Ejercicios\Index.svelte generated by Svelte v3.43.1 */






function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

// (20:12) {#each ejercicios as ejercicio}
function create_each_block(ctx) {
	let div1;
	let div0;
	let t0_value = /*ejercicio*/ ctx[4].nombre + "";
	let t0;
	let t1;
	let img;
	let img_src_value;
	let t2;
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[2](/*ejercicio*/ ctx[4]);
	}

	return {
		c() {
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			img = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "p-6 titulo-ejercicio svelte-16lfe07");
			if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = "/storage/" + /*categoria*/ ctx[1].toLowerCase() + "/" + /*ejercicio*/ ctx[4].imagen)) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "class", "h-24");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "alt", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "bg-white overflow-hidden shadow-sm sm:rounded-lg flex items-center mb-1 shadow-md");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, img);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t2);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div1, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*ejercicios*/ 1 && t0_value !== (t0_value = /*ejercicio*/ ctx[4].nombre + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);

			if (dirty & /*categoria, ejercicios*/ 3 && !(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = "/storage/" + /*categoria*/ ctx[1].toLowerCase() + "/" + /*ejercicio*/ ctx[4].imagen)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
			}
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
			mounted = false;
			dispose();
		}
	};
}

// (13:0) <BreezeAuthenticatedLayout>
function create_default_slot(ctx) {
	let div3;
	let div2;
	let div1;
	let div0;
	let t0;
	let t1;
	let each_value = /*ejercicios*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*categoria*/ ctx[1]);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "p-6 border-b border-gray-200 text-center sm:text-left");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "bg-white overflow-hidden shadow-sm sm:rounded-lg");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "lg:px-8 max-w-7xl mx-auto sm:px-6");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "py-12");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div3, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div2, null);
			}
		},
		p(ctx, dirty) {
			if (dirty & /*categoria*/ 2) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, /*categoria*/ ctx[1]);

			if (dirty & /*Inertia, route, ejercicios, categoria*/ 3) {
				each_value = /*ejercicios*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div2, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

function create_fragment(ctx) {
	let breezeauthenticatedlayout;
	let current;

	breezeauthenticatedlayout = new _Layouts_Authenticated_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(breezeauthenticatedlayout.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(breezeauthenticatedlayout, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const breezeauthenticatedlayout_changes = {};

			if (dirty & /*$$scope, ejercicios, categoria*/ 131) {
				breezeauthenticatedlayout_changes.$$scope = { dirty, ctx };
			}

			breezeauthenticatedlayout.$set(breezeauthenticatedlayout_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(breezeauthenticatedlayout.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(breezeauthenticatedlayout.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(breezeauthenticatedlayout, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $title;
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _Layouts_Authenticated_svelte__WEBPACK_IMPORTED_MODULE_3__.title, $$value => $$invalidate(3, $title = $$value));
	let { ejercicios } = $$props;
	let { categoria } = $$props;
	const click_handler = ejercicio => _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.route)('ejercicios.show', [ejercicio.categoria, ejercicio.slug]));

	$$self.$$set = $$props => {
		if ('ejercicios' in $$props) $$invalidate(0, ejercicios = $$props.ejercicios);
		if ('categoria' in $$props) $$invalidate(1, categoria = $$props.categoria);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*categoria*/ 2) {
			$: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(_Layouts_Authenticated_svelte__WEBPACK_IMPORTED_MODULE_3__.title, $title = categoria, $title);
		}
	};

	return [ejercicios, categoria, click_handler];
}

class Index extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { ejercicios: 0, categoria: 1 });
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);




/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./node_modules/@smui/common/classAdderBuilder.js":
/*!********************************************************!*\
  !*** ./node_modules/@smui/common/classAdderBuilder.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classAdderBuilder": () => (/* binding */ classAdderBuilder)
/* harmony export */ });
/* harmony import */ var _ClassAdder_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassAdder.svelte */ "./node_modules/@smui/common/ClassAdder.svelte");


const defaults = { ..._ClassAdder_svelte__WEBPACK_IMPORTED_MODULE_0__.internals };

function classAdderBuilder(props) {
  function Component(...args) {
    Object.assign(_ClassAdder_svelte__WEBPACK_IMPORTED_MODULE_0__.internals, defaults, props);
    return new _ClassAdder_svelte__WEBPACK_IMPORTED_MODULE_0__["default"](...args);
  }

  Component.prototype = _ClassAdder_svelte__WEBPACK_IMPORTED_MODULE_0__["default"];

  // SSR support
  if (_ClassAdder_svelte__WEBPACK_IMPORTED_MODULE_0__["default"].$$render) {
    Component.$$render = (...args) =>
      Object.assign(_ClassAdder_svelte__WEBPACK_IMPORTED_MODULE_0__.internals, defaults, props) && _ClassAdder_svelte__WEBPACK_IMPORTED_MODULE_0__["default"].$$render(...args);
  }
  if (_ClassAdder_svelte__WEBPACK_IMPORTED_MODULE_0__["default"].render) {
    Component.render = (...args) =>
      Object.assign(_ClassAdder_svelte__WEBPACK_IMPORTED_MODULE_0__.internals, defaults, props) && _ClassAdder_svelte__WEBPACK_IMPORTED_MODULE_0__["default"].render(...args);
  }

  return Component;
}


/***/ }),

/***/ "./node_modules/@smui/common/classMap.js":
/*!***********************************************!*\
  !*** ./node_modules/@smui/common/classMap.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classMap": () => (/* binding */ classMap)
/* harmony export */ });
function classMap(classObj) {
  return Object.entries(classObj)
    .filter(([name, value]) => name !== '' && value)
    .map(([name]) => name)
    .join(' ');
}


/***/ }),

/***/ "./node_modules/@smui/common/dispatch.js":
/*!***********************************************!*\
  !*** ./node_modules/@smui/common/dispatch.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dispatch": () => (/* binding */ dispatch)
/* harmony export */ });
function dispatch(
  element,
  eventType,
  detail = {},
  eventInit = { bubbles: true }
) {
  if (typeof Event !== 'undefined' && element) {
    const event = new Event(eventType, eventInit);
    event.detail = detail;
    const el = 'getElement' in element ? element.getElement() : element;
    el.dispatchEvent(event);
    return event;
  }
}


/***/ }),

/***/ "./node_modules/@smui/common/exclude.js":
/*!**********************************************!*\
  !*** ./node_modules/@smui/common/exclude.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exclude": () => (/* binding */ exclude)
/* harmony export */ });
function exclude(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf('$');
    if (
      cashIndex !== -1 &&
      keys.indexOf(name.substring(0, cashIndex + 1)) !== -1
    ) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }

  return newObj;
}


/***/ }),

/***/ "./node_modules/@smui/common/forwardEventsBuilder.js":
/*!***********************************************************!*\
  !*** ./node_modules/@smui/common/forwardEventsBuilder.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forwardEventsBuilder": () => (/* binding */ forwardEventsBuilder)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");


// Match modifiers on DOM events.
const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
// Match modifiers on other events.
const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;

function forwardEventsBuilder(component) {
  // This is our pseudo $on function. It is defined on component mount.
  let $on;
  // This is a list of events bound before mount.
  let events = [];
  // This is the original component $on function.
  const componentOn = component.$on;

  // And we override the $on function to forward all bound events.
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {};
    if ($on) {
      // The event was bound programmatically.
      destructor = $on(eventType, callback);
    } else {
      // The event was bound before mount by Svelte.
      events.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex);
    const newModifierMatch = eventType.match(newModifierRegex);
    const modifierMatch = oldModifierMatch || newModifierMatch;

    if (oldModifierMatch && console) {
      console.warn(
        'Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',
        eventType
      );
    }

    if (modifierMatch) {
      // Remove modifiers from the real event.
      const parts = eventType.split(oldModifierMatch ? ':' : '$');
      eventType = parts[0];
    }

    // Call the original $on function.
    const componentDestructor = componentOn.call(
      component,
      eventType,
      callback
    );

    return (...args) => {
      destructor();
      return componentDestructor(...args);
    };
  };

  function forward(e) {
    // Internally bubble the event up from Svelte components.
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bubble)(component, e);
  }

  return (node) => {
    const destructors = [];
    const forwardDestructors = {};

    // This function is responsible for forwarding all bound events.
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      // DOM addEventListener options argument.
      let options = false;
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (modifierMatch) {
        // Parse the event modifiers.
        // Supported modifiers:
        // - preventDefault
        // - stopPropagation
        // - passive
        // - nonpassive
        // - capture
        // - once
        const parts = eventType.split(oldModifierMatch ? ':' : '$');
        eventType = parts[0];
        options = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (options.nonpassive) {
          options.passive = false;
          delete options.nonpassive;
        }
        if (options.preventDefault) {
          handler = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(handler);
          delete options.preventDefault;
        }
        if (options.stopPropagation) {
          handler = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.stop_propagation)(handler);
          delete options.stopPropagation;
        }
      }

      // Listen for the event directly, with the given options.
      const off = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };

      destructors.push(destructor);

      // Forward the event from Svelte.
      if (!eventType in forwardDestructors) {
        forwardDestructors[eventType] = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(node, eventType, forward);
      }

      return destructor;
    };

    for (let i = 0; i < events.length; i++) {
      // Listen to all the events added before mount.
      $on(events[i][0], events[i][1]);
    }

    return {
      destroy: () => {
        // Remove all event listeners.
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }

        // Remove all event forwarders.
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      },
    };
  };
}


/***/ }),

/***/ "./node_modules/@smui/common/internal.js":
/*!***********************************************!*\
  !*** ./node_modules/@smui/common/internal.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classAdderBuilder": () => (/* reexport safe */ _classAdderBuilder_js__WEBPACK_IMPORTED_MODULE_0__.classAdderBuilder),
/* harmony export */   "classMap": () => (/* reexport safe */ _classMap_js__WEBPACK_IMPORTED_MODULE_1__.classMap),
/* harmony export */   "dispatch": () => (/* reexport safe */ _dispatch_js__WEBPACK_IMPORTED_MODULE_2__.dispatch),
/* harmony export */   "exclude": () => (/* reexport safe */ _exclude_js__WEBPACK_IMPORTED_MODULE_3__.exclude),
/* harmony export */   "forwardEventsBuilder": () => (/* reexport safe */ _forwardEventsBuilder_js__WEBPACK_IMPORTED_MODULE_4__.forwardEventsBuilder),
/* harmony export */   "prefixFilter": () => (/* reexport safe */ _prefixFilter_js__WEBPACK_IMPORTED_MODULE_5__.prefixFilter),
/* harmony export */   "useActions": () => (/* reexport safe */ _useActions_js__WEBPACK_IMPORTED_MODULE_6__.useActions)
/* harmony export */ });
/* harmony import */ var _classAdderBuilder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classAdderBuilder.js */ "./node_modules/@smui/common/classAdderBuilder.js");
/* harmony import */ var _classMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classMap.js */ "./node_modules/@smui/common/classMap.js");
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dispatch.js */ "./node_modules/@smui/common/dispatch.js");
/* harmony import */ var _exclude_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exclude.js */ "./node_modules/@smui/common/exclude.js");
/* harmony import */ var _forwardEventsBuilder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forwardEventsBuilder.js */ "./node_modules/@smui/common/forwardEventsBuilder.js");
/* harmony import */ var _prefixFilter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prefixFilter.js */ "./node_modules/@smui/common/prefixFilter.js");
/* harmony import */ var _useActions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useActions.js */ "./node_modules/@smui/common/useActions.js");









/***/ }),

/***/ "./node_modules/@smui/common/prefixFilter.js":
/*!***************************************************!*\
  !*** ./node_modules/@smui/common/prefixFilter.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prefixFilter": () => (/* binding */ prefixFilter)
/* harmony export */ });
function prefixFilter(obj, prefix) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }

  return newObj;
}


/***/ }),

/***/ "./node_modules/@smui/common/useActions.js":
/*!*************************************************!*\
  !*** ./node_modules/@smui/common/useActions.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useActions": () => (/* binding */ useActions)
/* harmony export */ });
function useActions(node, actions) {
  let objects = [];

  if (actions) {
    for (let i = 0; i < actions.length; i++) {
      const isArray = Array.isArray(actions[i]);
      const action = isArray ? actions[i][0] : actions[i];
      if (isArray && actions[i].length > 1) {
        objects.push(action(node, actions[i][1]));
      } else {
        objects.push(action(node));
      }
    }
  }

  return {
    update(actions) {
      if (((actions && actions.length) || 0) != objects.length) {
        throw new Error('You must not change the length of an actions array.');
      }

      if (actions) {
        for (let i = 0; i < actions.length; i++) {
          if (objects[i] && 'update' in objects[i]) {
            const isArray = Array.isArray(actions[i]);
            if (isArray && actions[i].length > 1) {
              objects[i].update(actions[i][1]);
            } else {
              objects[i].update();
            }
          }
        }
      }
    },

    destroy() {
      for (let i = 0; i < objects.length; i++) {
        if (objects[i] && 'destroy' in objects[i]) {
          objects[i].destroy();
        }
      }
    },
  };
}


/***/ }),

/***/ "./node_modules/@smui/ripple/Ripple.js":
/*!*********************************************!*\
  !*** ./node_modules/@smui/ripple/Ripple.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ripple)
/* harmony export */ });
/* harmony import */ var _material_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/ripple */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _material_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/ripple */ "./node_modules/@material/ripple/util.js");
/* harmony import */ var _material_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/dom */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");



const { applyPassive } = _material_dom__WEBPACK_IMPORTED_MODULE_1__;
const { matches } = _material_dom__WEBPACK_IMPORTED_MODULE_2__;

function Ripple(
  node,
  {
    ripple = true,
    surface = false,
    unbounded = false,
    disabled = false,
    color = null,
    active = null,
    eventTarget = null,
    activeTarget = null,
    addClass = (className) => node.classList.add(className),
    removeClass = (className) => node.classList.remove(className),
    addStyle = (name, value) => node.style.setProperty(name, value),
    initPromise = Promise.resolve(),
  } = {}
) {
  let instance;
  let addLayoutListener = (0,svelte__WEBPACK_IMPORTED_MODULE_0__.getContext)('SMUI:addLayoutListener');
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;

  function handleProps() {
    if (surface) {
      addClass('mdc-ripple-surface');
      if (color === 'primary') {
        addClass('smui-ripple-surface--primary');
        removeClass('smui-ripple-surface--secondary');
      } else if (color === 'secondary') {
        removeClass('smui-ripple-surface--primary');
        addClass('smui-ripple-surface--secondary');
      } else {
        removeClass('smui-ripple-surface--primary');
        removeClass('smui-ripple-surface--secondary');
      }
    }

    // Handle activation first.
    if (instance && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance.activate();
      } else if (active === false) {
        instance.deactivate();
      }
    }

    // Then create/destroy an instance.
    if (ripple && !instance) {
      instance = new _material_ripple__WEBPACK_IMPORTED_MODULE_3__.MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => _material_ripple__WEBPACK_IMPORTED_MODULE_4__.supportsCssVariables(window),
        computeBoundingRect: () => node.getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) =>
          document.documentElement.removeEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        deregisterInteractionHandler: (evtType, handler) =>
          (eventTarget || node).removeEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        deregisterResizeHandler: (handler) =>
          window.removeEventListener('resize', handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset,
        }),
        isSurfaceActive: () =>
          active == null ? matches(activeTarget || node, ':active') : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) =>
          document.documentElement.addEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        registerInteractionHandler: (evtType, handler) =>
          (eventTarget || node).addEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        registerResizeHandler: (handler) =>
          window.addEventListener('resize', handler),
        removeClass,
        updateCssVariable: addStyle,
      });

      initPromise.then(() => {
        instance.init();
        instance.setUnbounded(unbounded);
      });
    } else if (instance && !ripple) {
      initPromise.then(() => {
        instance.destroy();
        instance = null;
      });
    }

    // Now handle event/active targets
    if (
      instance &&
      (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)
    ) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;

      instance.destroy();
      requestAnimationFrame(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    }

    if (!ripple && unbounded) {
      addClass('mdc-ripple-upgraded--unbounded');
    }
  }

  handleProps();

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  function layout() {
    if (instance) {
      instance.layout();
    }
  }

  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise,
      } = {
        ripple: true,
        surface: false,
        unbounded: false,
        disabled: false,
        color: null,
        active: null,
        eventTarget: null,
        activeTarget: null,
        addClass: (className) => node.classList.add(className),
        removeClass: (className) => node.classList.remove(className),
        addStyle: (name, value) => node.style.setProperty(name, value),
        initPromise: Promise.resolve(),
        ...props,
      });
      handleProps();
    },

    destroy() {
      if (instance) {
        instance.destroy();
        instance = null;
        removeClass('mdc-ripple-surface');
        removeClass('smui-ripple-surface--primary');
        removeClass('smui-ripple-surface--secondary');
      }

      if (removeLayoutListener) {
        removeLayoutListener();
      }
    },
  };
}


/***/ }),

/***/ "./node_modules/@smui/ripple/index.js":
/*!********************************************!*\
  !*** ./node_modules/@smui/ripple/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ripple_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ripple.js */ "./node_modules/@smui/ripple/Ripple.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Ripple_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@smui/textfield/HelperLine.js":
/*!****************************************************!*\
  !*** ./node_modules/@smui/textfield/HelperLine.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smui/common/internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var _smui_common_Div_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smui/common/Div.svelte */ "./node_modules/@smui/common/Div.svelte");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_0__.classAdderBuilder)({
  class: 'mdc-text-field-helper-line',
  component: _smui_common_Div_svelte__WEBPACK_IMPORTED_MODULE_1__["default"],
}));


/***/ }),

/***/ "./node_modules/@smui/textfield/Prefix.js":
/*!************************************************!*\
  !*** ./node_modules/@smui/textfield/Prefix.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smui/common/internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var _smui_common_Span_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smui/common/Span.svelte */ "./node_modules/@smui/common/Span.svelte");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_0__.classAdderBuilder)({
  class: 'mdc-text-field__affix mdc-text-field__affix--prefix',
  component: _smui_common_Span_svelte__WEBPACK_IMPORTED_MODULE_1__["default"],
}));


/***/ }),

/***/ "./node_modules/@smui/textfield/Suffix.js":
/*!************************************************!*\
  !*** ./node_modules/@smui/textfield/Suffix.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smui/common/internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var _smui_common_Span_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smui/common/Span.svelte */ "./node_modules/@smui/common/Span.svelte");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_0__.classAdderBuilder)({
  class: 'mdc-text-field__affix mdc-text-field__affix--suffix',
  component: _smui_common_Span_svelte__WEBPACK_IMPORTED_MODULE_1__["default"],
}));


/***/ }),

/***/ "./node_modules/@smui/textfield/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@smui/textfield/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Prefix": () => (/* reexport safe */ _Prefix_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Suffix": () => (/* reexport safe */ _Suffix_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "HelperLine": () => (/* reexport safe */ _HelperLine_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Input": () => (/* reexport safe */ _Input_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Textarea": () => (/* reexport safe */ _Textarea_svelte__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _Textfield_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Textfield.svelte */ "./node_modules/@smui/textfield/Textfield.svelte");
/* harmony import */ var _Prefix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prefix.js */ "./node_modules/@smui/textfield/Prefix.js");
/* harmony import */ var _Suffix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Suffix.js */ "./node_modules/@smui/textfield/Suffix.js");
/* harmony import */ var _HelperLine_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HelperLine.js */ "./node_modules/@smui/textfield/HelperLine.js");
/* harmony import */ var _Input_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input.svelte */ "./node_modules/@smui/textfield/Input.svelte");
/* harmony import */ var _Textarea_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Textarea.svelte */ "./node_modules/@smui/textfield/Textarea.svelte");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Textfield_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]);




/***/ })

}]);