"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_Login_svelte"],{

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

/***/ "./node_modules/@material/checkbox/constants.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/checkbox/constants.js ***!
  \******************************************************/
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
    ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
    ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
    ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
    ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
    ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
    ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
    BACKGROUND: 'mdc-checkbox__background',
    CHECKED: 'mdc-checkbox--checked',
    CHECKMARK: 'mdc-checkbox__checkmark',
    CHECKMARK_PATH: 'mdc-checkbox__checkmark-path',
    DISABLED: 'mdc-checkbox--disabled',
    INDETERMINATE: 'mdc-checkbox--indeterminate',
    MIXEDMARK: 'mdc-checkbox__mixedmark',
    NATIVE_CONTROL: 'mdc-checkbox__native-control',
    ROOT: 'mdc-checkbox',
    SELECTED: 'mdc-checkbox--selected',
    UPGRADED: 'mdc-checkbox--upgraded',
};
var strings = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed',
    DATA_INDETERMINATE_ATTR: 'data-indeterminate',
    NATIVE_CONTROL_SELECTOR: '.mdc-checkbox__native-control',
    TRANSITION_STATE_CHECKED: 'checked',
    TRANSITION_STATE_INDETERMINATE: 'indeterminate',
    TRANSITION_STATE_INIT: 'init',
    TRANSITION_STATE_UNCHECKED: 'unchecked',
};
var numbers = {
    ANIM_END_LATCH_MS: 250,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/checkbox/foundation.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/checkbox/foundation.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCCheckboxFoundation": () => (/* binding */ MDCCheckboxFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/checkbox/constants.js");
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



var MDCCheckboxFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCCheckboxFoundation, _super);
    function MDCCheckboxFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCCheckboxFoundation.defaultAdapter), adapter)) || this;
        _this.currentCheckState_ = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_INIT;
        _this.currentAnimationClass_ = '';
        _this.animEndLatchTimer_ = 0;
        _this.enableAnimationEndHandler_ = false;
        return _this;
    }
    Object.defineProperty(MDCCheckboxFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                forceLayout: function () { return undefined; },
                hasNativeControl: function () { return false; },
                isAttachedToDOM: function () { return false; },
                isChecked: function () { return false; },
                isIndeterminate: function () { return false; },
                removeClass: function () { return undefined; },
                removeNativeControlAttr: function () { return undefined; },
                setNativeControlAttr: function () { return undefined; },
                setNativeControlDisabled: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCCheckboxFoundation.prototype.init = function () {
        this.currentCheckState_ = this.determineCheckState_();
        this.updateAriaChecked_();
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.UPGRADED);
    };
    MDCCheckboxFoundation.prototype.destroy = function () {
        clearTimeout(this.animEndLatchTimer_);
    };
    MDCCheckboxFoundation.prototype.setDisabled = function (disabled) {
        this.adapter.setNativeControlDisabled(disabled);
        if (disabled) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.DISABLED);
        }
        else {
            this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.DISABLED);
        }
    };
    /**
     * Handles the animationend event for the checkbox
     */
    MDCCheckboxFoundation.prototype.handleAnimationEnd = function () {
        var _this = this;
        if (!this.enableAnimationEndHandler_) {
            return;
        }
        clearTimeout(this.animEndLatchTimer_);
        this.animEndLatchTimer_ = setTimeout(function () {
            _this.adapter.removeClass(_this.currentAnimationClass_);
            _this.enableAnimationEndHandler_ = false;
        }, _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.ANIM_END_LATCH_MS);
    };
    /**
     * Handles the change event for the checkbox
     */
    MDCCheckboxFoundation.prototype.handleChange = function () {
        this.transitionCheckState_();
    };
    MDCCheckboxFoundation.prototype.transitionCheckState_ = function () {
        if (!this.adapter.hasNativeControl()) {
            return;
        }
        var oldState = this.currentCheckState_;
        var newState = this.determineCheckState_();
        if (oldState === newState) {
            return;
        }
        this.updateAriaChecked_();
        var TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_UNCHECKED;
        var SELECTED = _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SELECTED;
        if (newState === TRANSITION_STATE_UNCHECKED) {
            this.adapter.removeClass(SELECTED);
        }
        else {
            this.adapter.addClass(SELECTED);
        }
        // Check to ensure that there isn't a previously existing animation class, in case for example
        // the user interacted with the checkbox before the animation was finished.
        if (this.currentAnimationClass_.length > 0) {
            clearTimeout(this.animEndLatchTimer_);
            this.adapter.forceLayout();
            this.adapter.removeClass(this.currentAnimationClass_);
        }
        this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
        this.currentCheckState_ = newState;
        // Check for parentNode so that animations are only run when the element is attached
        // to the DOM.
        if (this.adapter.isAttachedToDOM() &&
            this.currentAnimationClass_.length > 0) {
            this.adapter.addClass(this.currentAnimationClass_);
            this.enableAnimationEndHandler_ = true;
        }
    };
    MDCCheckboxFoundation.prototype.determineCheckState_ = function () {
        var TRANSITION_STATE_INDETERMINATE = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_INDETERMINATE, TRANSITION_STATE_CHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_UNCHECKED;
        if (this.adapter.isIndeterminate()) {
            return TRANSITION_STATE_INDETERMINATE;
        }
        return this.adapter.isChecked() ? TRANSITION_STATE_CHECKED :
            TRANSITION_STATE_UNCHECKED;
    };
    MDCCheckboxFoundation.prototype.getTransitionAnimationClass_ = function (oldState, newState) {
        var TRANSITION_STATE_INIT = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_INIT, TRANSITION_STATE_CHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_UNCHECKED;
        var _a = MDCCheckboxFoundation.cssClasses, ANIM_UNCHECKED_CHECKED = _a.ANIM_UNCHECKED_CHECKED, ANIM_UNCHECKED_INDETERMINATE = _a.ANIM_UNCHECKED_INDETERMINATE, ANIM_CHECKED_UNCHECKED = _a.ANIM_CHECKED_UNCHECKED, ANIM_CHECKED_INDETERMINATE = _a.ANIM_CHECKED_INDETERMINATE, ANIM_INDETERMINATE_CHECKED = _a.ANIM_INDETERMINATE_CHECKED, ANIM_INDETERMINATE_UNCHECKED = _a.ANIM_INDETERMINATE_UNCHECKED;
        switch (oldState) {
            case TRANSITION_STATE_INIT:
                if (newState === TRANSITION_STATE_UNCHECKED) {
                    return '';
                }
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
            case TRANSITION_STATE_UNCHECKED:
                return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
            case TRANSITION_STATE_CHECKED:
                return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
            default: // TRANSITION_STATE_INDETERMINATE
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
        }
    };
    MDCCheckboxFoundation.prototype.updateAriaChecked_ = function () {
        // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
        if (this.adapter.isIndeterminate()) {
            this.adapter.setNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_CHECKED_ATTR, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_CHECKED_INDETERMINATE_VALUE);
        }
        else {
            // The on/off state does not need to keep track of aria-checked, since
            // the screenreader uses the checked property on the checkbox element.
            this.adapter.removeNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_CHECKED_ATTR);
        }
    };
    return MDCCheckboxFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCCheckboxFoundation);
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

/***/ "./node_modules/@material/form-field/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/form-field/constants.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses),
/* harmony export */   "strings": () => (/* binding */ strings)
/* harmony export */ });
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
var cssClasses = {
    ROOT: 'mdc-form-field',
};
var strings = {
    LABEL_SELECTOR: '.mdc-form-field > label',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/form-field/foundation.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/form-field/foundation.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCFormFieldFoundation": () => (/* binding */ MDCFormFieldFoundation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/form-field/constants.js");
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



var MDCFormFieldFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCFormFieldFoundation, _super);
    function MDCFormFieldFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCFormFieldFoundation.defaultAdapter), adapter)) || this;
        _this.click = function () {
            _this.handleClick();
        };
        return _this;
    }
    Object.defineProperty(MDCFormFieldFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFormFieldFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFormFieldFoundation, "defaultAdapter", {
        get: function () {
            return {
                activateInputRipple: function () { return undefined; },
                deactivateInputRipple: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCFormFieldFoundation.prototype.init = function () {
        this.adapter.registerInteractionHandler('click', this.click);
    };
    MDCFormFieldFoundation.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler('click', this.click);
    };
    MDCFormFieldFoundation.prototype.handleClick = function () {
        var _this = this;
        this.adapter.activateInputRipple();
        requestAnimationFrame(function () {
            _this.adapter.deactivateInputRipple();
        });
    };
    return MDCFormFieldFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCFormFieldFoundation);
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

/***/ "./node_modules/@smui/button/Button.svelte":
/*!*************************************************!*\
  !*** ./node_modules/@smui/button/Button.svelte ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smui/common/internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var _smui_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smui/ripple */ "./node_modules/@smui/ripple/index.js");
/* harmony import */ var _smui_common_A_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smui/common/A.svelte */ "./node_modules/@smui/common/A.svelte");
/* harmony import */ var _smui_common_Button_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smui/common/Button.svelte */ "./node_modules/@smui/common/Button.svelte");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\button\Button.svelte generated by Svelte v3.43.1 */











function create_if_block(ctx) {
	let div;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "mdc-button__touch");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
		}
	};
}

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-button': true,     'mdc-button--raised': variant === 'raised',     'mdc-button--unelevated': variant === 'unelevated',     'mdc-button--outlined': variant === 'outlined',     'smui-button--color-secondary': color === 'secondary',     'mdc-button--touch': touch,     'mdc-card__action': context === 'card:action',     'mdc-card__action--button': context === 'card:action',     'mdc-dialog__button': context === 'dialog:action',     'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',     'mdc-top-app-bar__action-item': context === 'top-app-bar:action',     'mdc-snackbar__action': context === 'snackbar:actions',     'mdc-banner__secondary-action': context === 'banner' && secondary,     'mdc-banner__primary-action': context === 'banner' && !secondary,     'mdc-tooltip__action': context === 'tooltip:rich-actions',     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {...actionProp}   {...defaultProp}   {...secondaryProp}   {href}   on:click={handleClick}   {...$$restProps}   >
function create_default_slot(ctx) {
	let div;
	let t;
	let if_block_anchor;
	let current;
	const default_slot_template = /*#slots*/ ctx[26].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[28], null);
	let if_block = /*touch*/ ctx[6] && create_if_block(ctx);

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (default_slot) default_slot.c();
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "mdc-button__ripple");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);

			if (default_slot) {
				default_slot.m(target, anchor);
			}

			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 268435456)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[28],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[28])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[28], dirty, null),
						null
					);
				}
			}

			if (/*touch*/ ctx[6]) {
				if (if_block) {
					
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
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
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
			if (default_slot) default_slot.d(detaching);
			if (if_block) if_block.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
		}
	};
}

function create_fragment(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;

	const switch_instance_spread_levels = [
		{
			use: [
				[
					_smui_ripple__WEBPACK_IMPORTED_MODULE_3__["default"],
					{
						ripple: /*ripple*/ ctx[3],
						unbounded: false,
						color: /*color*/ ctx[4],
						disabled: !!/*$$restProps*/ ctx[22].disabled,
						addClass: /*addClass*/ ctx[18],
						removeClass: /*removeClass*/ ctx[19],
						addStyle: /*addStyle*/ ctx[20]
					}
				],
				/*forwardEvents*/ ctx[16],
				.../*use*/ ctx[0]
			]
		},
		{
			class: (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				[/*className*/ ctx[1]]: true,
				'mdc-button': true,
				'mdc-button--raised': /*variant*/ ctx[5] === 'raised',
				'mdc-button--unelevated': /*variant*/ ctx[5] === 'unelevated',
				'mdc-button--outlined': /*variant*/ ctx[5] === 'outlined',
				'smui-button--color-secondary': /*color*/ ctx[4] === 'secondary',
				'mdc-button--touch': /*touch*/ ctx[6],
				'mdc-card__action': /*context*/ ctx[17] === 'card:action',
				'mdc-card__action--button': /*context*/ ctx[17] === 'card:action',
				'mdc-dialog__button': /*context*/ ctx[17] === 'dialog:action',
				'mdc-top-app-bar__navigation-icon': /*context*/ ctx[17] === 'top-app-bar:navigation',
				'mdc-top-app-bar__action-item': /*context*/ ctx[17] === 'top-app-bar:action',
				'mdc-snackbar__action': /*context*/ ctx[17] === 'snackbar:actions',
				'mdc-banner__secondary-action': /*context*/ ctx[17] === 'banner' && /*secondary*/ ctx[8],
				'mdc-banner__primary-action': /*context*/ ctx[17] === 'banner' && !/*secondary*/ ctx[8],
				'mdc-tooltip__action': /*context*/ ctx[17] === 'tooltip:rich-actions',
				.../*internalClasses*/ ctx[11]
			})
		},
		{
			style: Object.entries(/*internalStyles*/ ctx[12]).map(func).concat([/*style*/ ctx[2]]).join(' ')
		},
		/*actionProp*/ ctx[15],
		/*defaultProp*/ ctx[14],
		/*secondaryProp*/ ctx[13],
		{ href: /*href*/ ctx[7] },
		/*$$restProps*/ ctx[22]
	];

	var switch_value = /*component*/ ctx[9];

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
		/*switch_instance_binding*/ ctx[27](switch_instance);
		switch_instance.$on("click", /*handleClick*/ ctx[21]);
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
			const switch_instance_changes = (dirty & /*Ripple, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, classMap, className, variant, touch, context, secondary, internalClasses, Object, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/ 6289919)
			? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(switch_instance_spread_levels, [
					dirty & /*Ripple, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/ 6094873 && {
						use: [
							[
								_smui_ripple__WEBPACK_IMPORTED_MODULE_3__["default"],
								{
									ripple: /*ripple*/ ctx[3],
									unbounded: false,
									color: /*color*/ ctx[4],
									disabled: !!/*$$restProps*/ ctx[22].disabled,
									addClass: /*addClass*/ ctx[18],
									removeClass: /*removeClass*/ ctx[19],
									addStyle: /*addStyle*/ ctx[20]
								}
							],
							/*forwardEvents*/ ctx[16],
							.../*use*/ ctx[0]
						]
					},
					dirty & /*classMap, className, variant, color, touch, context, secondary, internalClasses*/ 133490 && {
						class: (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
							[/*className*/ ctx[1]]: true,
							'mdc-button': true,
							'mdc-button--raised': /*variant*/ ctx[5] === 'raised',
							'mdc-button--unelevated': /*variant*/ ctx[5] === 'unelevated',
							'mdc-button--outlined': /*variant*/ ctx[5] === 'outlined',
							'smui-button--color-secondary': /*color*/ ctx[4] === 'secondary',
							'mdc-button--touch': /*touch*/ ctx[6],
							'mdc-card__action': /*context*/ ctx[17] === 'card:action',
							'mdc-card__action--button': /*context*/ ctx[17] === 'card:action',
							'mdc-dialog__button': /*context*/ ctx[17] === 'dialog:action',
							'mdc-top-app-bar__navigation-icon': /*context*/ ctx[17] === 'top-app-bar:navigation',
							'mdc-top-app-bar__action-item': /*context*/ ctx[17] === 'top-app-bar:action',
							'mdc-snackbar__action': /*context*/ ctx[17] === 'snackbar:actions',
							'mdc-banner__secondary-action': /*context*/ ctx[17] === 'banner' && /*secondary*/ ctx[8],
							'mdc-banner__primary-action': /*context*/ ctx[17] === 'banner' && !/*secondary*/ ctx[8],
							'mdc-tooltip__action': /*context*/ ctx[17] === 'tooltip:rich-actions',
							.../*internalClasses*/ ctx[11]
						})
					},
					dirty & /*Object, internalStyles, style*/ 4100 && {
						style: Object.entries(/*internalStyles*/ ctx[12]).map(func).concat([/*style*/ ctx[2]]).join(' ')
					},
					dirty & /*actionProp*/ 32768 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(/*actionProp*/ ctx[15]),
					dirty & /*defaultProp*/ 16384 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(/*defaultProp*/ ctx[14]),
					dirty & /*secondaryProp*/ 8192 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(/*secondaryProp*/ ctx[13]),
					dirty & /*href*/ 128 && { href: /*href*/ ctx[7] },
					dirty & /*$$restProps*/ 4194304 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(/*$$restProps*/ ctx[22])
				])
			: {};

			if (dirty & /*$$scope, touch*/ 268435520) {
				switch_instance_changes.$$scope = { dirty, ctx };
			}

			if (switch_value !== (switch_value = /*component*/ ctx[9])) {
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
					/*switch_instance_binding*/ ctx[27](switch_instance);
					switch_instance.$on("click", /*handleClick*/ ctx[21]);
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
			/*switch_instance_binding*/ ctx[27](null);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(switch_instance_anchor);
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(switch_instance, detaching);
		}
	};
}

const func = ([name, value]) => `${name}: ${value};`;

function instance($$self, $$props, $$invalidate) {
	let actionProp;
	let defaultProp;
	let secondaryProp;

	const omit_props_names = [
		"use","class","style","ripple","color","variant","touch","href","action","default","secondary","component","getElement"
	];

	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const forwardEvents = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let { style = '' } = $$props;
	let { ripple = true } = $$props;
	let { color = 'primary' } = $$props;
	let { variant = 'text' } = $$props;
	let { touch = false } = $$props;
	let { href = null } = $$props;
	let { action = 'close' } = $$props;
	let { default: defaultAction = false } = $$props;
	let { secondary = false } = $$props;
	let element;
	let internalClasses = {};
	let internalStyles = {};
	let context = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.getContext)('SMUI:button:context');
	let { component = href == null ? _smui_common_Button_svelte__WEBPACK_IMPORTED_MODULE_5__["default"] : _smui_common_A_svelte__WEBPACK_IMPORTED_MODULE_4__["default"] } = $$props;
	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.setContext)('SMUI:label:context', 'button');
	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.setContext)('SMUI:icon:context', 'button');

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(11, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(11, internalClasses[className] = false, internalClasses);
		}
	}

	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === '' || value == null) {
				delete internalStyles[name];
				$$invalidate(12, internalStyles);
			} else {
				$$invalidate(12, internalStyles[name] = value, internalStyles);
			}
		}
	}

	function handleClick() {
		if (context === 'banner') {
			(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.dispatch)(getElement(), secondary
			? 'SMUI:banner:button:secondaryActionClick'
			: 'SMUI:banner:button:primaryActionClick');
		}
	}

	function getElement() {
		return element.getElement();
	}

	function switch_instance_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(10, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(29, $$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props)));
		$$invalidate(22, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ('style' in $$new_props) $$invalidate(2, style = $$new_props.style);
		if ('ripple' in $$new_props) $$invalidate(3, ripple = $$new_props.ripple);
		if ('color' in $$new_props) $$invalidate(4, color = $$new_props.color);
		if ('variant' in $$new_props) $$invalidate(5, variant = $$new_props.variant);
		if ('touch' in $$new_props) $$invalidate(6, touch = $$new_props.touch);
		if ('href' in $$new_props) $$invalidate(7, href = $$new_props.href);
		if ('action' in $$new_props) $$invalidate(23, action = $$new_props.action);
		if ('default' in $$new_props) $$invalidate(24, defaultAction = $$new_props.default);
		if ('secondary' in $$new_props) $$invalidate(8, secondary = $$new_props.secondary);
		if ('component' in $$new_props) $$invalidate(9, component = $$new_props.component);
		if ('$$scope' in $$new_props) $$invalidate(28, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(15, actionProp = context === 'dialog:action' && action != null
		? { 'data-mdc-dialog-action': action }
		: { action: $$props.action });

		$: $$invalidate(14, defaultProp = context === 'dialog:action' && defaultAction
		? { 'data-mdc-dialog-button-default': '' }
		: { default: $$props.default });

		$: $$invalidate(13, secondaryProp = context === 'banner'
		? {}
		: { secondary: $$props.secondary });
	};

	$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$props);

	return [
		use,
		className,
		style,
		ripple,
		color,
		variant,
		touch,
		href,
		secondary,
		component,
		element,
		internalClasses,
		internalStyles,
		secondaryProp,
		defaultProp,
		actionProp,
		forwardEvents,
		context,
		addClass,
		removeClass,
		addStyle,
		handleClick,
		$$restProps,
		action,
		defaultAction,
		getElement,
		slots,
		switch_instance_binding,
		$$scope
	];
}

class Button_1 extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			use: 0,
			class: 1,
			style: 2,
			ripple: 3,
			color: 4,
			variant: 5,
			touch: 6,
			href: 7,
			action: 23,
			default: 24,
			secondary: 8,
			component: 9,
			getElement: 25
		});
	}

	get getElement() {
		return this.$$.ctx[25];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button_1);



/***/ }),

/***/ "./node_modules/@smui/button/Group.svelte":
/*!************************************************!*\
  !*** ./node_modules/@smui/button/Group.svelte ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smui/common/internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\button\Group.svelte generated by Svelte v3.43.1 */






function create_fragment(ctx) {
	let div;
	let div_class_value;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	let div_levels = [
		{
			class: div_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({
				[/*className*/ ctx[1]]: true,
				'smui-button__group': true,
				'smui-button__group--raised': /*variant*/ ctx[2] === 'raised'
			})
		},
		/*$$restProps*/ ctx[5]
	];

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

			/*div_binding*/ ctx[9](div);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_1__.useActions.call(null, div, /*use*/ ctx[0])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[4].call(null, div))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[7],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[7])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[7], dirty, null),
						null
					);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div, div_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(div_levels, [
				(!current || dirty & /*className, variant*/ 6 && div_class_value !== (div_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({
					[/*className*/ ctx[1]]: true,
					'smui-button__group': true,
					'smui-button__group--raised': /*variant*/ ctx[2] === 'raised'
				}))) && { class: div_class_value },
				dirty & /*$$restProps*/ 32 && /*$$restProps*/ ctx[5]
			]));

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
			/*div_binding*/ ctx[9](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","variant","getElement"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const forwardEvents = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_1__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let { variant = 'text' } = $$props;
	let element;

	function getElement() {
		return element;
	}

	function div_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(3, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(5, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ('variant' in $$new_props) $$invalidate(2, variant = $$new_props.variant);
		if ('$$scope' in $$new_props) $$invalidate(7, $$scope = $$new_props.$$scope);
	};

	return [
		use,
		className,
		variant,
		element,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		div_binding
	];
}

class Group extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			use: 0,
			class: 1,
			variant: 2,
			getElement: 6
		});
	}

	get getElement() {
		return this.$$.ctx[6];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Group);



/***/ }),

/***/ "./node_modules/@smui/checkbox/Checkbox.svelte":
/*!*****************************************************!*\
  !*** ./node_modules/@smui/checkbox/Checkbox.svelte ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/checkbox */ "./node_modules/@material/checkbox/foundation.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smui/common/internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var _smui_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smui/ripple */ "./node_modules/@smui/ripple/index.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\checkbox\Checkbox.svelte generated by Svelte v3.43.1 */










function create_fragment(ctx) {
	let div3;
	let input;
	let input_class_value;
	let input_value_value;
	let input_data_indeterminate_value;
	let useActions_action;
	let t0;
	let div1;
	let t2;
	let div2;
	let div3_class_value;
	let div3_style_value;
	let useActions_action_1;
	let forwardEvents_action;
	let Ripple_action;
	let mounted;
	let dispose;

	let input_levels = [
		{
			class: input_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				[/*input$class*/ ctx[9]]: true,
				'mdc-checkbox__native-control': true
			})
		},
		{ type: "checkbox" },
		/*inputProps*/ ctx[20],
		{ disabled: /*disabled*/ ctx[1] },
		{
			__value: input_value_value = /*valueKey*/ ctx[7] === /*uninitializedValue*/ ctx[19]
			? /*value*/ ctx[6]
			: /*valueKey*/ ctx[7]
		},
		{
			"data-indeterminate": input_data_indeterminate_value = /*indeterminate*/ ctx[0] !== /*uninitializedValue*/ ctx[19] && /*indeterminate*/ ctx[0]
			? 'true'
			: null
		},
		/*nativeControlAttrs*/ ctx[16],
		(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[26], 'input$')
	];

	let input_data = {};

	for (let i = 0; i < input_levels.length; i += 1) {
		input_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(input_data, input_levels[i]);
	}

	let div3_levels = [
		{
			class: div3_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				[/*className*/ ctx[3]]: true,
				'mdc-checkbox': true,
				'mdc-checkbox--disabled': /*disabled*/ ctx[1],
				'mdc-checkbox--touch': /*touch*/ ctx[5],
				'mdc-data-table__header-row-checkbox': /*context*/ ctx[21] === 'data-table' && /*dataTableHeader*/ ctx[22],
				'mdc-data-table__row-checkbox': /*context*/ ctx[21] === 'data-table' && !/*dataTableHeader*/ ctx[22],
				.../*internalClasses*/ ctx[14]
			})
		},
		{
			style: div3_style_value = Object.entries(/*internalStyles*/ ctx[15]).map(func).concat([/*style*/ ctx[4]]).join(' ')
		},
		(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.exclude)(/*$$restProps*/ ctx[26], ['input$'])
	];

	let div3_data = {};

	for (let i = 0; i < div3_levels.length; i += 1) {
		div3_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(div3_data, div3_levels[i]);
	}

	return {
		c() {
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			div1.innerHTML = `<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> 
    <div class="mdc-checkbox__mixedmark"></div>`;

			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(input, input_data);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "mdc-checkbox__background");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "mdc-checkbox__ripple");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div3, div3_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div3, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, input);
			if (input.autofocus) input.focus();
			/*input_binding*/ ctx[36](input);
			input.checked = /*nativeChecked*/ ctx[12];
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
			/*div3_binding*/ ctx[38](div3);

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.useActions.call(null, input, /*input$use*/ ctx[8])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "change", /*input_change_handler*/ ctx[37]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "blur", /*blur_handler*/ ctx[34]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "focus", /*focus_handler*/ ctx[35]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action_1 = _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.useActions.call(null, div3, /*use*/ ctx[2])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[18].call(null, div3)),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(Ripple_action = _smui_ripple__WEBPACK_IMPORTED_MODULE_3__["default"].call(null, div3, {
						unbounded: true,
						addClass: /*addClass*/ ctx[23],
						removeClass: /*removeClass*/ ctx[24],
						addStyle: /*addStyle*/ ctx[25],
						active: /*rippleActive*/ ctx[17],
						eventTarget: /*checkbox*/ ctx[11]
					})),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div3, "animationend", /*animationend_handler*/ ctx[39])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(input, input_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(input_levels, [
				dirty[0] & /*input$class*/ 512 && input_class_value !== (input_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
					[/*input$class*/ ctx[9]]: true,
					'mdc-checkbox__native-control': true
				})) && { class: input_class_value },
				{ type: "checkbox" },
				/*inputProps*/ ctx[20],
				dirty[0] & /*disabled*/ 2 && { disabled: /*disabled*/ ctx[1] },
				dirty[0] & /*valueKey, value*/ 192 && input_value_value !== (input_value_value = /*valueKey*/ ctx[7] === /*uninitializedValue*/ ctx[19]
				? /*value*/ ctx[6]
				: /*valueKey*/ ctx[7]) && { __value: input_value_value },
				dirty[0] & /*indeterminate*/ 1 && input_data_indeterminate_value !== (input_data_indeterminate_value = /*indeterminate*/ ctx[0] !== /*uninitializedValue*/ ctx[19] && /*indeterminate*/ ctx[0]
				? 'true'
				: null) && {
					"data-indeterminate": input_data_indeterminate_value
				},
				dirty[0] & /*nativeControlAttrs*/ 65536 && /*nativeControlAttrs*/ ctx[16],
				dirty[0] & /*$$restProps*/ 67108864 && (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[26], 'input$')
			]));

			if (useActions_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action.update) && dirty[0] & /*input$use*/ 256) useActions_action.update.call(null, /*input$use*/ ctx[8]);

			if (dirty[0] & /*nativeChecked*/ 4096) {
				input.checked = /*nativeChecked*/ ctx[12];
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div3, div3_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(div3_levels, [
				dirty[0] & /*className, disabled, touch, internalClasses*/ 16426 && div3_class_value !== (div3_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
					[/*className*/ ctx[3]]: true,
					'mdc-checkbox': true,
					'mdc-checkbox--disabled': /*disabled*/ ctx[1],
					'mdc-checkbox--touch': /*touch*/ ctx[5],
					'mdc-data-table__header-row-checkbox': /*context*/ ctx[21] === 'data-table' && /*dataTableHeader*/ ctx[22],
					'mdc-data-table__row-checkbox': /*context*/ ctx[21] === 'data-table' && !/*dataTableHeader*/ ctx[22],
					.../*internalClasses*/ ctx[14]
				})) && { class: div3_class_value },
				dirty[0] & /*internalStyles, style*/ 32784 && div3_style_value !== (div3_style_value = Object.entries(/*internalStyles*/ ctx[15]).map(func).concat([/*style*/ ctx[4]]).join(' ')) && { style: div3_style_value },
				dirty[0] & /*$$restProps*/ 67108864 && (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.exclude)(/*$$restProps*/ ctx[26], ['input$'])
			]));

			if (useActions_action_1 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action_1.update) && dirty[0] & /*use*/ 4) useActions_action_1.update.call(null, /*use*/ ctx[2]);

			if (Ripple_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(Ripple_action.update) && dirty[0] & /*rippleActive, checkbox*/ 133120) Ripple_action.update.call(null, {
				unbounded: true,
				addClass: /*addClass*/ ctx[23],
				removeClass: /*removeClass*/ ctx[24],
				addStyle: /*addStyle*/ ctx[25],
				active: /*rippleActive*/ ctx[17],
				eventTarget: /*checkbox*/ ctx[11]
			});
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div3);
			/*input_binding*/ ctx[36](null);
			/*div3_binding*/ ctx[38](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

const func = ([name, value]) => `${name}: ${value};`;

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","style","disabled","touch","indeterminate","group","checked","value","valueKey","input$use","input$class","getId","getElement"
	];

	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	const forwardEvents = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());

	let uninitializedValue = () => {
		
	};

	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let { style = '' } = $$props;
	let { disabled = false } = $$props;
	let { touch = false } = $$props;
	let { indeterminate = uninitializedValue } = $$props;
	let { group = uninitializedValue } = $$props;
	let { checked = uninitializedValue } = $$props;
	let { value = null } = $$props;
	let { valueKey = uninitializedValue } = $$props;
	let { input$use = [] } = $$props;
	let { input$class = '' } = $$props;
	let element;
	let instance;
	let checkbox;
	let internalClasses = {};
	let internalStyles = {};
	let nativeControlAttrs = {};
	let rippleActive = false;
	let inputProps = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.getContext)('SMUI:generic:input:props') || {};

	let nativeChecked = group === uninitializedValue
	? checked === uninitializedValue ? false : checked
	: group.indexOf(value) !== -1;

	let context = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.getContext)('SMUI:checkbox:context');
	let dataTableHeader = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.getContext)('SMUI:data-table:row:header');
	let previousChecked = checked;
	let previousGroup = group === uninitializedValue ? [] : [...group];
	let previousNativeChecked = nativeChecked;

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.onMount)(() => {
		$$invalidate(10, instance = new _material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MDCCheckboxFoundation({
				addClass,
				forceLayout: () => element.offsetWidth,
				hasNativeControl: () => true,
				isAttachedToDOM: () => Boolean(element.parentNode),
				isChecked: () => nativeChecked,
				isIndeterminate: () => indeterminate === uninitializedValue
				? false
				: indeterminate,
				removeClass,
				removeNativeControlAttr,
				setNativeControlAttr: addNativeControlAttr,
				setNativeControlDisabled: value => $$invalidate(1, disabled = value)
			}));

		const accessor = {
			_smui_checkbox_accessor: true,
			get element() {
				return getElement();
			},
			get checked() {
				return nativeChecked;
			},
			set checked(value) {
				if (nativeChecked !== value) {
					$$invalidate(12, nativeChecked = value);
				}
			},
			get indeterminate() {
				return indeterminate === uninitializedValue
				? false
				: indeterminate;
			},
			set indeterminate(value) {
				$$invalidate(0, indeterminate = value);
			},
			activateRipple() {
				if (!disabled) {
					$$invalidate(17, rippleActive = true);
				}
			},
			deactivateRipple() {
				$$invalidate(17, rippleActive = false);
			}
		};

		(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.dispatch)(element, 'SMUI:generic:input:mount', accessor);
		(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.dispatch)(element, 'SMUI:checkbox:mount', accessor);
		instance.init();

		return () => {
			(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.dispatch)(element, 'SMUI:generic:input:unmount', accessor);
			(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.dispatch)(element, 'SMUI:checkbox:unmount', accessor);
			instance.destroy();
		};
	});

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(14, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(14, internalClasses[className] = false, internalClasses);
		}
	}

	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === '' || value == null) {
				delete internalStyles[name];
				$$invalidate(15, internalStyles);
			} else {
				$$invalidate(15, internalStyles[name] = value, internalStyles);
			}
		}
	}

	function addNativeControlAttr(name, value) {
		if (nativeControlAttrs[name] !== value) {
			$$invalidate(16, nativeControlAttrs[name] = value, nativeControlAttrs);
		}
	}

	function removeNativeControlAttr(name) {
		if (!(name in nativeControlAttrs) || nativeControlAttrs[name] != null) {
			$$invalidate(16, nativeControlAttrs[name] = undefined, nativeControlAttrs);
		}
	}

	function getId() {
		return inputProps && inputProps.id;
	}

	function getElement() {
		return element;
	}

	function blur_handler(event) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bubble.call(this, $$self, event);
	}

	function focus_handler(event) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bubble.call(this, $$self, event);
	}

	function input_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			checkbox = $$value;
			(((((((((($$invalidate(11, checkbox), $$invalidate(27, group)), $$invalidate(19, uninitializedValue)), $$invalidate(33, previousNativeChecked)), $$invalidate(12, nativeChecked)), $$invalidate(6, value)), $$invalidate(32, previousGroup)), $$invalidate(28, checked)), $$invalidate(31, previousChecked)), $$invalidate(0, indeterminate)), $$invalidate(10, instance));
		});
	}

	function input_change_handler() {
		nativeChecked = this.checked;
		(((((((((($$invalidate(12, nativeChecked), $$invalidate(27, group)), $$invalidate(19, uninitializedValue)), $$invalidate(33, previousNativeChecked)), $$invalidate(6, value)), $$invalidate(32, previousGroup)), $$invalidate(28, checked)), $$invalidate(31, previousChecked)), $$invalidate(11, checkbox)), $$invalidate(0, indeterminate)), $$invalidate(10, instance));
	}

	function div3_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(13, element);
		});
	}

	const animationend_handler = () => instance && instance.handleAnimationEnd();

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(26, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(2, use = $$new_props.use);
		if ('class' in $$new_props) $$invalidate(3, className = $$new_props.class);
		if ('style' in $$new_props) $$invalidate(4, style = $$new_props.style);
		if ('disabled' in $$new_props) $$invalidate(1, disabled = $$new_props.disabled);
		if ('touch' in $$new_props) $$invalidate(5, touch = $$new_props.touch);
		if ('indeterminate' in $$new_props) $$invalidate(0, indeterminate = $$new_props.indeterminate);
		if ('group' in $$new_props) $$invalidate(27, group = $$new_props.group);
		if ('checked' in $$new_props) $$invalidate(28, checked = $$new_props.checked);
		if ('value' in $$new_props) $$invalidate(6, value = $$new_props.value);
		if ('valueKey' in $$new_props) $$invalidate(7, valueKey = $$new_props.valueKey);
		if ('input$use' in $$new_props) $$invalidate(8, input$use = $$new_props.input$use);
		if ('input$class' in $$new_props) $$invalidate(9, input$class = $$new_props.input$class);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*group, nativeChecked, value, checked, checkbox, indeterminate, instance*/ 402660417 | $$self.$$.dirty[1] & /*previousNativeChecked, previousGroup, previousChecked*/ 7) {
			$: {
				// This is a substitute for an on:change listener that is
				// smarter about when it calls the instance's handler. I do
				// this so that a group of changes will only trigger one
				// handler call, since the handler will reset currently
				// running animations.
				let callHandleChange = false;

				// First check for group state.
				if (group !== uninitializedValue) {
					if (previousNativeChecked !== nativeChecked) {
						// The change needs to flow up.
						const idx = group.indexOf(value);

						if (nativeChecked && idx === -1) {
							group.push(value);
							(((((((((($$invalidate(27, group), $$invalidate(19, uninitializedValue)), $$invalidate(33, previousNativeChecked)), $$invalidate(12, nativeChecked)), $$invalidate(6, value)), $$invalidate(32, previousGroup)), $$invalidate(28, checked)), $$invalidate(31, previousChecked)), $$invalidate(11, checkbox)), $$invalidate(0, indeterminate)), $$invalidate(10, instance));
						} else if (!nativeChecked && idx !== -1) {
							group.splice(idx, 1);
							(((((((((($$invalidate(27, group), $$invalidate(19, uninitializedValue)), $$invalidate(33, previousNativeChecked)), $$invalidate(12, nativeChecked)), $$invalidate(6, value)), $$invalidate(32, previousGroup)), $$invalidate(28, checked)), $$invalidate(31, previousChecked)), $$invalidate(11, checkbox)), $$invalidate(0, indeterminate)), $$invalidate(10, instance));
						}

						callHandleChange = true;
					} else {
						// Potential changes need to flow down.
						const idxPrev = previousGroup.indexOf(value);

						const idx = group.indexOf(value);

						if (idxPrev > -1 && idx === -1) {
							// The checkbox was removed from the group.
							$$invalidate(12, nativeChecked = false);

							callHandleChange = true;
						} else if (idx > -1 && idxPrev === -1) {
							// The checkbox was added to the group.
							$$invalidate(12, nativeChecked = true);

							callHandleChange = true;
						}
					}
				}

				// Now check individual state.
				if (checked === uninitializedValue) {
					if (previousNativeChecked !== nativeChecked) {
						// The checkbox was clicked by the user.
						callHandleChange = true;
					}
				} else if (checked !== nativeChecked) {
					if (checked === previousChecked) {
						// The checkbox was clicked by the user
						// and the change needs to flow up.
						$$invalidate(28, checked = nativeChecked);
					} else {
						// The checkbox was changed programmatically
						// and the change needs to flow down.
						$$invalidate(12, nativeChecked = checked);
					}

					callHandleChange = true;
				}

				if (checkbox) {
					// Sync indeterminate state with the native input.
					if (indeterminate === uninitializedValue) {
						if (checkbox.indeterminate) {
							// I don't think this can happen, but just in case.
							$$invalidate(11, checkbox.indeterminate = false, checkbox);

							callHandleChange = true;
						}
					} else {
						if (!indeterminate && checkbox.indeterminate) {
							$$invalidate(11, checkbox.indeterminate = false, checkbox);
							callHandleChange = true;
						} else if (indeterminate && !checkbox.indeterminate) {
							$$invalidate(11, checkbox.indeterminate = true, checkbox);
							callHandleChange = true;
						}
					}
				}

				$$invalidate(31, previousChecked = checked);
				$$invalidate(32, previousGroup = group === uninitializedValue ? [] : [...group]);
				$$invalidate(33, previousNativeChecked = nativeChecked);

				if (callHandleChange && instance) {
					instance.handleChange();
				}
			}
		}
	};

	return [
		indeterminate,
		disabled,
		use,
		className,
		style,
		touch,
		value,
		valueKey,
		input$use,
		input$class,
		instance,
		checkbox,
		nativeChecked,
		element,
		internalClasses,
		internalStyles,
		nativeControlAttrs,
		rippleActive,
		forwardEvents,
		uninitializedValue,
		inputProps,
		context,
		dataTableHeader,
		addClass,
		removeClass,
		addStyle,
		$$restProps,
		group,
		checked,
		getId,
		getElement,
		previousChecked,
		previousGroup,
		previousNativeChecked,
		blur_handler,
		focus_handler,
		input_binding,
		input_change_handler,
		div3_binding,
		animationend_handler
	];
}

class Checkbox extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance_1,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				use: 2,
				class: 3,
				style: 4,
				disabled: 1,
				touch: 5,
				indeterminate: 0,
				group: 27,
				checked: 28,
				value: 6,
				valueKey: 7,
				input$use: 8,
				input$class: 9,
				getId: 29,
				getElement: 30
			},
			null,
			[-1, -1]
		);
	}

	get getId() {
		return this.$$.ctx[29];
	}

	get getElement() {
		return this.$$.ctx[30];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);



/***/ }),

/***/ "./node_modules/@smui/common/A.svelte":
/*!********************************************!*\
  !*** ./node_modules/@smui/common/A.svelte ***!
  \********************************************/
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
/* node_modules\@smui\common\A.svelte generated by Svelte v3.43.1 */





function create_fragment(ctx) {
	let a;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
	let a_levels = [{ href: /*href*/ ctx[0] }, /*$$restProps*/ ctx[4]];
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

			/*a_binding*/ ctx[8](a);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _internal_js__WEBPACK_IMPORTED_MODULE_1__.useActions.call(null, a, /*use*/ ctx[1])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[3].call(null, a))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[6],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[6])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[6], dirty, null),
						null
					);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(a, a_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(a_levels, [
				(!current || dirty & /*href*/ 1) && { href: /*href*/ ctx[0] },
				dirty & /*$$restProps*/ 16 && /*$$restProps*/ ctx[4]
			]));

			if (useActions_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action.update) && dirty & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);
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
			/*a_binding*/ ctx[8](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = ["href","use","getElement"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { href = 'javascript:void(0);' } = $$props;
	let { use = [] } = $$props;
	const forwardEvents = (0,_internal_js__WEBPACK_IMPORTED_MODULE_1__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());
	let element = null;

	function getElement() {
		return element;
	}

	function a_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(2, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(4, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('href' in $$new_props) $$invalidate(0, href = $$new_props.href);
		if ('use' in $$new_props) $$invalidate(1, use = $$new_props.use);
		if ('$$scope' in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
	};

	return [
		href,
		use,
		element,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		a_binding
	];
}

class A extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { href: 0, use: 1, getElement: 5 });
	}

	get getElement() {
		return this.$$.ctx[5];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (A);



/***/ }),

/***/ "./node_modules/@smui/common/Button.svelte":
/*!*************************************************!*\
  !*** ./node_modules/@smui/common/Button.svelte ***!
  \*************************************************/
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
/* node_modules\@smui\common\Button.svelte generated by Svelte v3.43.1 */





function create_fragment(ctx) {
	let button;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let button_levels = [/*$$restProps*/ ctx[3]];
	let button_data = {};

	for (let i = 0; i < button_levels.length; i += 1) {
		button_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(button_data, button_levels[i]);
	}

	return {
		c() {
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(button, button_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			if (button.autofocus) button.focus();
			/*button_binding*/ ctx[7](button);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _internal_js__WEBPACK_IMPORTED_MODULE_1__.useActions.call(null, button, /*use*/ ctx[0])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, button))
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

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(button, button_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(button_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
			if (default_slot) default_slot.d(detaching);
			/*button_binding*/ ctx[7](null);
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

	function button_binding($$value) {
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
		button_binding
	];
}

class Button extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { use: 0, getElement: 4 });
	}

	get getElement() {
		return this.$$.ctx[4];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);



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

/***/ "./node_modules/@smui/common/CommonIcon.svelte":
/*!*****************************************************!*\
  !*** ./node_modules/@smui/common/CommonIcon.svelte ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var _I_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./I.svelte */ "./node_modules/@smui/common/I.svelte");
/* harmony import */ var _Svg_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Svg.svelte */ "./node_modules/@smui/common/Svg.svelte");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\common\CommonIcon.svelte generated by Svelte v3.43.1 */








function create_default_slot(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[9].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

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
				if (default_slot.p && (!current || dirty & /*$$scope*/ 2048)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[11],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[11])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[11], dirty, null),
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
			use: [/*forwardEvents*/ ctx[5], .../*use*/ ctx[0]]
		},
		{
			class: (0,_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				[/*className*/ ctx[1]]: true,
				'mdc-button__icon': /*context*/ ctx[6] === 'button',
				'mdc-fab__icon': /*context*/ ctx[6] === 'fab',
				'mdc-icon-button__icon': /*context*/ ctx[6] === 'icon-button',
				'mdc-icon-button__icon--on': /*context*/ ctx[6] === 'icon-button' && /*on*/ ctx[2],
				'mdc-tab__icon': /*context*/ ctx[6] === 'tab',
				'mdc-banner__icon': /*context*/ ctx[6] === 'banner',
				'mdc-segmented-button__icon': /*context*/ ctx[6] === 'segmented-button'
			})
		},
		{ "aria-hidden": "true" },
		/*component*/ ctx[3] === _Svg_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]
		? { focusable: 'false', tabindex: '-1' }
		: {},
		/*$$restProps*/ ctx[7]
	];

	var switch_value = /*component*/ ctx[3];

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
		/*switch_instance_binding*/ ctx[10](switch_instance);
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
			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, context, on, component, Svg, $$restProps*/ 239)
			? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(switch_instance_spread_levels, [
					dirty & /*forwardEvents, use*/ 33 && {
						use: [/*forwardEvents*/ ctx[5], .../*use*/ ctx[0]]
					},
					dirty & /*classMap, className, context, on*/ 70 && {
						class: (0,_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
							[/*className*/ ctx[1]]: true,
							'mdc-button__icon': /*context*/ ctx[6] === 'button',
							'mdc-fab__icon': /*context*/ ctx[6] === 'fab',
							'mdc-icon-button__icon': /*context*/ ctx[6] === 'icon-button',
							'mdc-icon-button__icon--on': /*context*/ ctx[6] === 'icon-button' && /*on*/ ctx[2],
							'mdc-tab__icon': /*context*/ ctx[6] === 'tab',
							'mdc-banner__icon': /*context*/ ctx[6] === 'banner',
							'mdc-segmented-button__icon': /*context*/ ctx[6] === 'segmented-button'
						})
					},
					switch_instance_spread_levels[2],
					dirty & /*component, Svg*/ 8 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(/*component*/ ctx[3] === _Svg_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]
					? { focusable: 'false', tabindex: '-1' }
					: {}),
					dirty & /*$$restProps*/ 128 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(/*$$restProps*/ ctx[7])
				])
			: {};

			if (dirty & /*$$scope*/ 2048) {
				switch_instance_changes.$$scope = { dirty, ctx };
			}

			if (switch_value !== (switch_value = /*component*/ ctx[3])) {
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
					/*switch_instance_binding*/ ctx[10](switch_instance);
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
			/*switch_instance_binding*/ ctx[10](null);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(switch_instance_anchor);
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(switch_instance, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","on","component","getElement"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const forwardEvents = (0,_internal_js__WEBPACK_IMPORTED_MODULE_2__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let { on = false } = $$props;
	let element;
	let { component = _I_svelte__WEBPACK_IMPORTED_MODULE_3__["default"] } = $$props;
	const context = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.getContext)('SMUI:icon:context');

	function getElement() {
		return element.getElement();
	}

	function switch_instance_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(4, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(7, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ('on' in $$new_props) $$invalidate(2, on = $$new_props.on);
		if ('component' in $$new_props) $$invalidate(3, component = $$new_props.component);
		if ('$$scope' in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
	};

	return [
		use,
		className,
		on,
		component,
		element,
		forwardEvents,
		context,
		$$restProps,
		getElement,
		slots,
		switch_instance_binding,
		$$scope
	];
}

class CommonIcon extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			use: 0,
			class: 1,
			on: 2,
			component: 3,
			getElement: 8
		});
	}

	get getElement() {
		return this.$$.ctx[8];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommonIcon);



/***/ }),

/***/ "./node_modules/@smui/common/CommonLabel.svelte":
/*!******************************************************!*\
  !*** ./node_modules/@smui/common/CommonLabel.svelte ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var _Span_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Span.svelte */ "./node_modules/@smui/common/Span.svelte");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\common\CommonLabel.svelte generated by Svelte v3.43.1 */







function create_default_slot(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[9].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

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
				if (default_slot.p && (!current || dirty & /*$$scope*/ 2048)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[11],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[11])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[11], dirty, null),
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
			use: [/*forwardEvents*/ ctx[4], .../*use*/ ctx[0]]
		},
		{
			class: (0,_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				[/*className*/ ctx[1]]: true,
				'mdc-button__label': /*context*/ ctx[5] === 'button',
				'mdc-fab__label': /*context*/ ctx[5] === 'fab',
				'mdc-tab__text-label': /*context*/ ctx[5] === 'tab',
				'mdc-image-list__label': /*context*/ ctx[5] === 'image-list',
				'mdc-snackbar__label': /*context*/ ctx[5] === 'snackbar',
				'mdc-banner__text': /*context*/ ctx[5] === 'banner',
				'mdc-segmented-button__label': /*context*/ ctx[5] === 'segmented-button',
				'mdc-data-table__pagination-rows-per-page-label': /*context*/ ctx[5] === 'data-table:pagination',
				'mdc-data-table__header-cell-label': /*context*/ ctx[5] === 'data-table:sortable-header-cell'
			})
		},
		/*context*/ ctx[5] === 'snackbar'
		? { 'aria-atomic': 'false' }
		: {},
		{ tabindex: /*tabindex*/ ctx[6] },
		/*$$restProps*/ ctx[7]
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
		/*switch_instance_binding*/ ctx[10](switch_instance);
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
			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, context, tabindex, $$restProps*/ 243)
			? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(switch_instance_spread_levels, [
					dirty & /*forwardEvents, use*/ 17 && {
						use: [/*forwardEvents*/ ctx[4], .../*use*/ ctx[0]]
					},
					dirty & /*classMap, className, context*/ 34 && {
						class: (0,_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
							[/*className*/ ctx[1]]: true,
							'mdc-button__label': /*context*/ ctx[5] === 'button',
							'mdc-fab__label': /*context*/ ctx[5] === 'fab',
							'mdc-tab__text-label': /*context*/ ctx[5] === 'tab',
							'mdc-image-list__label': /*context*/ ctx[5] === 'image-list',
							'mdc-snackbar__label': /*context*/ ctx[5] === 'snackbar',
							'mdc-banner__text': /*context*/ ctx[5] === 'banner',
							'mdc-segmented-button__label': /*context*/ ctx[5] === 'segmented-button',
							'mdc-data-table__pagination-rows-per-page-label': /*context*/ ctx[5] === 'data-table:pagination',
							'mdc-data-table__header-cell-label': /*context*/ ctx[5] === 'data-table:sortable-header-cell'
						})
					},
					dirty & /*context*/ 32 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(/*context*/ ctx[5] === 'snackbar'
					? { 'aria-atomic': 'false' }
					: {}),
					dirty & /*tabindex*/ 64 && { tabindex: /*tabindex*/ ctx[6] },
					dirty & /*$$restProps*/ 128 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(/*$$restProps*/ ctx[7])
				])
			: {};

			if (dirty & /*$$scope*/ 2048) {
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
					/*switch_instance_binding*/ ctx[10](switch_instance);
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
			/*switch_instance_binding*/ ctx[10](null);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(switch_instance_anchor);
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(switch_instance, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","component","getElement"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const forwardEvents = (0,_internal_js__WEBPACK_IMPORTED_MODULE_2__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let element;
	let { component = _Span_svelte__WEBPACK_IMPORTED_MODULE_3__["default"] } = $$props;
	const context = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.getContext)('SMUI:label:context');
	const tabindex = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.getContext)('SMUI:label:tabindex');

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
		$$invalidate(7, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ('component' in $$new_props) $$invalidate(2, component = $$new_props.component);
		if ('$$scope' in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
	};

	return [
		use,
		className,
		component,
		element,
		forwardEvents,
		context,
		tabindex,
		$$restProps,
		getElement,
		slots,
		switch_instance_binding,
		$$scope
	];
}

class CommonLabel extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			use: 0,
			class: 1,
			component: 2,
			getElement: 8
		});
	}

	get getElement() {
		return this.$$.ctx[8];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommonLabel);



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

/***/ "./node_modules/@smui/common/I.svelte":
/*!********************************************!*\
  !*** ./node_modules/@smui/common/I.svelte ***!
  \********************************************/
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
/* node_modules\@smui\common\I.svelte generated by Svelte v3.43.1 */





function create_fragment(ctx) {
	let i;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let i_levels = [/*$$restProps*/ ctx[3]];
	let i_data = {};

	for (let i = 0; i < i_levels.length; i += 1) {
		i_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(i_data, i_levels[i]);
	}

	return {
		c() {
			i = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(i, i_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, i, anchor);

			if (default_slot) {
				default_slot.m(i, null);
			}

			/*i_binding*/ ctx[7](i);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _internal_js__WEBPACK_IMPORTED_MODULE_1__.useActions.call(null, i, /*use*/ ctx[0])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, i))
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

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(i, i_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(i_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(i);
			if (default_slot) default_slot.d(detaching);
			/*i_binding*/ ctx[7](null);
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

	function i_binding($$value) {
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
		i_binding
	];
}

class I extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { use: 0, getElement: 4 });
	}

	get getElement() {
		return this.$$.ctx[4];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (I);



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

/***/ "./node_modules/@smui/common/Svg.svelte":
/*!**********************************************!*\
  !*** ./node_modules/@smui/common/Svg.svelte ***!
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
/* node_modules\@smui\common\Svg.svelte generated by Svelte v3.43.1 */





function create_fragment(ctx) {
	let svg;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let svg_levels = [/*$$restProps*/ ctx[3]];
	let svg_data = {};

	for (let i = 0; i < svg_levels.length; i += 1) {
		svg_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(svg_data, svg_levels[i]);
	}

	return {
		c() {
			svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_svg_attributes)(svg, svg_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, svg, anchor);

			if (default_slot) {
				default_slot.m(svg, null);
			}

			/*svg_binding*/ ctx[7](svg);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _internal_js__WEBPACK_IMPORTED_MODULE_1__.useActions.call(null, svg, /*use*/ ctx[0])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, svg))
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

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_svg_attributes)(svg, svg_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(svg_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(svg);
			if (default_slot) default_slot.d(detaching);
			/*svg_binding*/ ctx[7](null);
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

	function svg_binding($$value) {
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
		svg_binding
	];
}

class Svg extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { use: 0, getElement: 4 });
	}

	get getElement() {
		return this.$$.ctx[4];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Svg);



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

/***/ "./node_modules/@smui/form-field/FormField.svelte":
/*!********************************************************!*\
  !*** ./node_modules/@smui/form-field/FormField.svelte ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/form-field */ "./node_modules/@material/form-field/foundation.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smui/common/internal.js */ "./node_modules/@smui/common/internal.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* node_modules\@smui\form-field\FormField.svelte generated by Svelte v3.43.1 */








const get_label_slot_changes = dirty => ({});
const get_label_slot_context = ctx => ({});

function create_fragment(ctx) {
	let div;
	let t;
	let label_1;
	let useActions_action;
	let div_class_value;
	let useActions_action_1;
	let forwardEvents_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[13].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[12], null);
	const label_slot_template = /*#slots*/ ctx[13].label;
	const label_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(label_slot_template, ctx, /*$$scope*/ ctx[12], get_label_slot_context);
	let label_1_levels = [{ for: /*inputId*/ ctx[4] }, (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[10], 'label$')];
	let label_1_data = {};

	for (let i = 0; i < label_1_levels.length; i += 1) {
		label_1_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(label_1_data, label_1_levels[i]);
	}

	let div_levels = [
		{
			class: div_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
				[/*className*/ ctx[1]]: true,
				'mdc-form-field': true,
				'mdc-form-field--align-end': /*align*/ ctx[2] === 'end',
				'mdc-form-field--nowrap': /*noWrap*/ ctx[3]
			})
		},
		(0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.exclude)(/*$$restProps*/ ctx[10], ['label$'])
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(div_data, div_levels[i]);
	}

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (default_slot) default_slot.c();
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			if (label_slot) label_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(label_1, label_1_data);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div, div_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, label_1);

			if (label_slot) {
				label_slot.m(label_1, null);
			}

			/*label_1_binding*/ ctx[14](label_1);
			/*div_binding*/ ctx[15](div);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action = _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.useActions.call(null, label_1, /*label$use*/ ctx[5])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(useActions_action_1 = _smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.useActions.call(null, div, /*use*/ ctx[0])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(forwardEvents_action = /*forwardEvents*/ ctx[9].call(null, div)),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "SMUI:generic:input:mount", /*SMUI_generic_input_mount_handler*/ ctx[16]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "SMUI:generic:input:unmount", /*SMUI_generic_input_unmount_handler*/ ctx[17])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
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

			if (label_slot) {
				if (label_slot.p && (!current || dirty & /*$$scope*/ 4096)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						label_slot,
						label_slot_template,
						ctx,
						/*$$scope*/ ctx[12],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[12])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(label_slot_template, /*$$scope*/ ctx[12], dirty, get_label_slot_changes),
						get_label_slot_context
					);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(label_1, label_1_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(label_1_levels, [
				(!current || dirty & /*inputId*/ 16) && { for: /*inputId*/ ctx[4] },
				dirty & /*$$restProps*/ 1024 && (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.prefixFilter)(/*$$restProps*/ ctx[10], 'label$')
			]));

			if (useActions_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action.update) && dirty & /*label$use*/ 32) useActions_action.update.call(null, /*label$use*/ ctx[5]);

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div, div_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(div_levels, [
				(!current || dirty & /*className, align, noWrap*/ 14 && div_class_value !== (div_class_value = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
					[/*className*/ ctx[1]]: true,
					'mdc-form-field': true,
					'mdc-form-field--align-end': /*align*/ ctx[2] === 'end',
					'mdc-form-field--nowrap': /*noWrap*/ ctx[3]
				}))) && { class: div_class_value },
				dirty & /*$$restProps*/ 1024 && (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.exclude)(/*$$restProps*/ ctx[10], ['label$'])
			]));

			if (useActions_action_1 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(useActions_action_1.update) && dirty & /*use*/ 1) useActions_action_1.update.call(null, /*use*/ ctx[0]);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(label_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(label_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			if (default_slot) default_slot.d(detaching);
			if (label_slot) label_slot.d(detaching);
			/*label_1_binding*/ ctx[14](null);
			/*div_binding*/ ctx[15](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

let counter = 0;

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","align","noWrap","inputId","label$use","getElement"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const forwardEvents = (0,_smui_common_internal_js__WEBPACK_IMPORTED_MODULE_2__.forwardEventsBuilder)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)());
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let { align = 'start' } = $$props;
	let { noWrap = false } = $$props;
	let { inputId = 'SMUI-form-field-' + counter++ } = $$props;
	let { label$use = [] } = $$props;
	let element;
	let instance;
	let label;
	let input;
	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.setContext)('SMUI:generic:input:props', { id: inputId });

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.onMount)(() => {
		instance = new _material_form_field__WEBPACK_IMPORTED_MODULE_3__.MDCFormFieldFoundation({
				activateInputRipple: () => {
					if (input) {
						input.activateRipple();
					}
				},
				deactivateInputRipple: () => {
					if (input) {
						input.deactivateRipple();
					}
				},
				deregisterInteractionHandler: (evtType, handler) => {
					label.removeEventListener(evtType, handler);
				},
				registerInteractionHandler: (evtType, handler) => {
					label.addEventListener(evtType, handler);
				}
			});

		instance.init();

		return () => {
			instance.destroy();
		};
	});

	function getElement() {
		return element;
	}

	function label_1_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			label = $$value;
			$$invalidate(7, label);
		});
	}

	function div_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			element = $$value;
			$$invalidate(6, element);
		});
	}

	const SMUI_generic_input_mount_handler = event => $$invalidate(8, input = event.detail);
	const SMUI_generic_input_unmount_handler = () => $$invalidate(8, input = undefined);

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(10, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ('align' in $$new_props) $$invalidate(2, align = $$new_props.align);
		if ('noWrap' in $$new_props) $$invalidate(3, noWrap = $$new_props.noWrap);
		if ('inputId' in $$new_props) $$invalidate(4, inputId = $$new_props.inputId);
		if ('label$use' in $$new_props) $$invalidate(5, label$use = $$new_props.label$use);
		if ('$$scope' in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
	};

	return [
		use,
		className,
		align,
		noWrap,
		inputId,
		label$use,
		element,
		label,
		input,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		label_1_binding,
		div_binding,
		SMUI_generic_input_mount_handler,
		SMUI_generic_input_unmount_handler
	];
}

class FormField extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance_1, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			use: 0,
			class: 1,
			align: 2,
			noWrap: 3,
			inputId: 4,
			label$use: 5,
			getElement: 11
		});
	}

	get getElement() {
		return this.$$.ctx[11];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormField);



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

/***/ "./resources/js/Components/Button.svelte":
/*!***********************************************!*\
  !*** ./resources/js/Components/Button.svelte ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _smui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smui/button */ "./node_modules/@smui/button/index.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Components\Button.svelte generated by Svelte v3.43.1 */




function create_default_slot_1(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[1].default;
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
		p(ctx, dirty) {
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

// (12:0) <Button {...props} action={null} on:click>
function create_default_slot(ctx) {
	let label;
	let current;

	label = new _smui_button__WEBPACK_IMPORTED_MODULE_1__.Label({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(label.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(label, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 8) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(label.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(label.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(label, detaching);
		}
	};
}

function create_fragment(ctx) {
	let button;
	let current;
	const button_spread_levels = [/*props*/ ctx[0], { action: null }];

	let button_props = {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};

	for (let i = 0; i < button_spread_levels.length; i += 1) {
		button_props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(button_props, button_spread_levels[i]);
	}

	button = new _smui_button__WEBPACK_IMPORTED_MODULE_1__["default"]({ props: button_props });
	button.$on("click", /*click_handler*/ ctx[2]);

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(button.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(button, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const button_changes = (dirty & /*props*/ 1)
			? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(button_spread_levels, [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(/*props*/ ctx[0]), button_spread_levels[1]])
			: {};

			if (dirty & /*$$scope*/ 8) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(button.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(button.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(button, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let props;
	const omit_props_names = [];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;

	function click_handler(event) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bubble.call(this, $$self, event);
	}

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(4, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('$$scope' in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: $$invalidate(0, props = {
			type: 'submit',
			variant: 'raised',
			...$$restProps,
			class: `${$$restProps.class || ''}`
		});
	};

	return [props, slots, click_handler, $$scope];
}

class Button_1 extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button_1);



/***/ }),

/***/ "./resources/js/Components/Input.svelte":
/*!**********************************************!*\
  !*** ./resources/js/Components/Input.svelte ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Components_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Label */ "./resources/js/Components/Label.svelte");
/* harmony import */ var _InputError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputError */ "./resources/js/Components/InputError.svelte");
/* harmony import */ var _smui_textfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smui/textfield */ "./node_modules/@smui/textfield/index.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Components\Input.svelte generated by Svelte v3.43.1 */






function create_if_block(ctx) {
	let inputerror;
	let current;
	inputerror = new _InputError__WEBPACK_IMPORTED_MODULE_2__["default"]({ props: { message: /*error*/ ctx[3] } });

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(inputerror.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(inputerror, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const inputerror_changes = {};
			if (dirty & /*error*/ 8) inputerror_changes.message = /*error*/ ctx[3];
			inputerror.$set(inputerror_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(inputerror.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(inputerror.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(inputerror, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let label_1;
	let t0;
	let textfield;
	let t1;
	let div_class_value;
	let current;

	label_1 = new _Components_Label__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: {
				label: /*label*/ ctx[2],
				id: /*id*/ ctx[1]
			}
		});

	const textfield_spread_levels = [
		{ disabled: /*disabled*/ ctx[5] },
		/*props*/ ctx[7],
		{ id: /*id*/ ctx[1] },
		{ type: /*type*/ ctx[4] },
		{ value: /*value*/ ctx[0] },
		{ label: /*label*/ ctx[2] }
	];

	let textfield_props = {};

	for (let i = 0; i < textfield_spread_levels.length; i += 1) {
		textfield_props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(textfield_props, textfield_spread_levels[i]);
	}

	textfield = new _smui_textfield__WEBPACK_IMPORTED_MODULE_3__["default"]({ props: textfield_props });
	/*textfield_binding*/ ctx[12](textfield);
	textfield.$on("input", /*update*/ ctx[8]);
	let if_block = /*error*/ ctx[3] && create_if_block(ctx);

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(label_1.$$.fragment);
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(textfield.$$.fragment);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block) if_block.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", div_class_value = /*$$restProps*/ ctx[9].class);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(label_1, div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(textfield, div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);
			if (if_block) if_block.m(div, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const label_1_changes = {};
			if (dirty & /*label*/ 4) label_1_changes.label = /*label*/ ctx[2];
			if (dirty & /*id*/ 2) label_1_changes.id = /*id*/ ctx[1];
			label_1.$set(label_1_changes);

			const textfield_changes = (dirty & /*disabled, props, id, type, value, label*/ 183)
			? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(textfield_spread_levels, [
					dirty & /*disabled*/ 32 && { disabled: /*disabled*/ ctx[5] },
					dirty & /*props*/ 128 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(/*props*/ ctx[7]),
					dirty & /*id*/ 2 && { id: /*id*/ ctx[1] },
					dirty & /*type*/ 16 && { type: /*type*/ ctx[4] },
					dirty & /*value*/ 1 && { value: /*value*/ ctx[0] },
					dirty & /*label*/ 4 && { label: /*label*/ ctx[2] }
				])
			: {};

			textfield.$set(textfield_changes);

			if (/*error*/ ctx[3]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*error*/ 8) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					if_block.m(div, null);
				}
			} else if (if_block) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, () => {
					if_block = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			if (!current || dirty & /*$$restProps*/ 512 && div_class_value !== (div_class_value = /*$$restProps*/ ctx[9].class)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", div_class_value);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(label_1.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(textfield.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(label_1.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(textfield.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(label_1);
			/*textfield_binding*/ ctx[12](null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(textfield);
			if (if_block) if_block.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let props;
	const omit_props_names = ["id","value","label","error","type","disabled","focus","select"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { id } = $$props;
	let { value } = $$props;
	let { label } = $$props;
	let { error } = $$props;
	let { type } = $$props;
	let { disabled } = $$props;
	let input;
	const focus = () => input.focus();
	const select = () => input.select();

	function update(event) {
		$$invalidate(0, value = event.target.value);
	}

	function textfield_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			input = $$value;
			$$invalidate(6, input);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(9, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('id' in $$new_props) $$invalidate(1, id = $$new_props.id);
		if ('value' in $$new_props) $$invalidate(0, value = $$new_props.value);
		if ('label' in $$new_props) $$invalidate(2, label = $$new_props.label);
		if ('error' in $$new_props) $$invalidate(3, error = $$new_props.error);
		if ('type' in $$new_props) $$invalidate(4, type = $$new_props.type);
		if ('disabled' in $$new_props) $$invalidate(5, disabled = $$new_props.disabled);
	};

	$$self.$$.update = () => {
		$: $$invalidate(7, props = {
			variant: 'outlined',
			...$$restProps,
			class: `w-full block bg-white ${$$restProps.class || ''}`
		});
	};

	return [
		value,
		id,
		label,
		error,
		type,
		disabled,
		input,
		props,
		update,
		$$restProps,
		focus,
		select,
		textfield_binding
	];
}

class Input extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			id: 1,
			value: 0,
			label: 2,
			error: 3,
			type: 4,
			disabled: 5,
			focus: 10,
			select: 11
		});
	}

	get focus() {
		return this.$$.ctx[10];
	}

	get select() {
		return this.$$.ctx[11];
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);



/***/ }),

/***/ "./resources/js/Components/InputError.svelte":
/*!***************************************************!*\
  !*** ./resources/js/Components/InputError.svelte ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Components\InputError.svelte generated by Svelte v3.43.1 */


function create_if_block(ctx) {
	let div;
	let p;
	let t;
	let div_levels = [/*props*/ ctx[1]];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(div_data, div_levels[i]);
	}

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*message*/ ctx[0]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div, div_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, p);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, t);
		},
		p(ctx, dirty) {
			if (dirty & /*message*/ 1) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, /*message*/ ctx[0]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(div, div_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(div_levels, [dirty & /*props*/ 2 && /*props*/ ctx[1]]));
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let if_block = /*message*/ ctx[0] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (/*message*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let props;
	const omit_props_names = ["message"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { message } = $$props;

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(2, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('message' in $$new_props) $$invalidate(0, message = $$new_props.message);
	};

	$$self.$$.update = () => {
		$: $$invalidate(1, props = {
			...$$restProps,
			class: `text-red-400 bg-red-100 py-1 px-2 ${$$restProps.class || ''}`
		});
	};

	return [message, props];
}

class InputError extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { message: 0 });
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputError);



/***/ }),

/***/ "./resources/js/Components/Label.svelte":
/*!**********************************************!*\
  !*** ./resources/js/Components/Label.svelte ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Components\Label.svelte generated by Svelte v3.43.1 */


function create_if_block(ctx) {
	let label;
	let html_tag;
	let t;
	let if_block = /*required*/ ctx[2] && create_if_block_1(ctx);
	let label_levels = [/*props*/ ctx[3], { for: /*labelFor*/ ctx[0] }];
	let label_data = {};

	for (let i = 0; i < label_levels.length; i += 1) {
		label_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(label_data, label_levels[i]);
	}

	return {
		c() {
			label = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			html_tag = new svelte_internal__WEBPACK_IMPORTED_MODULE_0__.HtmlTag();
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block) if_block.c();
			html_tag.a = t;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(label, label_data);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, label, anchor);
			html_tag.m(/*value*/ ctx[1], label);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label, t);
			if (if_block) if_block.m(label, null);
		},
		p(ctx, dirty) {
			if (dirty & /*value*/ 2) html_tag.p(/*value*/ ctx[1]);

			if (/*required*/ ctx[2]) {
				if (if_block) {
					
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(label, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(label, label_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(label_levels, [
				dirty & /*props*/ 8 && /*props*/ ctx[3],
				dirty & /*labelFor*/ 1 && { for: /*labelFor*/ ctx[0] }
			]));
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(label);
			if (if_block) if_block.d();
		}
	};
}

// (15:8) {#if required}
function create_if_block_1(ctx) {
	let small;

	return {
		c() {
			small = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("small");
			small.textContent = "* Campo obligatorio";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(small, "class", "label-required text-red-400");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, small, anchor);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(small);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let if_block = /*value*/ ctx[1] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (/*value*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let props;
	const omit_props_names = ["labelFor","value","required"];
	let $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
	let { labelFor } = $$props;
	let { value } = $$props;
	let { required } = $$props;

	$$self.$$set = $$new_props => {
		$$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
		$$invalidate(4, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
		if ('labelFor' in $$new_props) $$invalidate(0, labelFor = $$new_props.labelFor);
		if ('value' in $$new_props) $$invalidate(1, value = $$new_props.value);
		if ('required' in $$new_props) $$invalidate(2, required = $$new_props.required);
	};

	$$self.$$.update = () => {
		$: $$invalidate(3, props = {
			...$$restProps,
			class: `block font-medium text-sm text-gray-700 ${$$restProps.class || ''}`
		});
	};

	return [labelFor, value, required, props];
}

class Label extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { labelFor: 0, value: 1, required: 2 });
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);



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

/***/ "./resources/js/Components/ValidationErrors.svelte":
/*!*********************************************************!*\
  !*** ./resources/js/Components/ValidationErrors.svelte ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Components\ValidationErrors.svelte generated by Svelte v3.43.1 */




function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (7:0) {#if !_.isEmpty(errors)}
function create_if_block(ctx) {
	let div1;
	let div0;
	let t1;
	let ul;
	let each_value = /*errors*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0.textContent = "Whoops! Something went wrong.";
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			ul = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "font-medium text-red-600");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ul, "class", "mt-3 list-disc list-inside text-sm text-red-600");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p(ctx, dirty) {
			if (dirty & /*errors*/ 1) {
				each_value = /*errors*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

// (12:12) {#each errors as error}
function create_each_block(ctx) {
	let li;
	let t_value = /*error*/ ctx[1] + "";
	let t;

	return {
		c() {
			li = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, li, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li, t);
		},
		p(ctx, dirty) {
			if (dirty & /*errors*/ 1 && t_value !== (t_value = /*error*/ ctx[1] + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(li);
		}
	};
}

function create_fragment(ctx) {
	let show_if = !lodash__WEBPACK_IMPORTED_MODULE_1___default().isEmpty(/*errors*/ ctx[0]);
	let if_block_anchor;
	let if_block = show_if && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (dirty & /*errors*/ 1) show_if = !lodash__WEBPACK_IMPORTED_MODULE_1___default().isEmpty(/*errors*/ ctx[0]);

			if (show_if) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { errors } = $$props;

	$$self.$$set = $$props => {
		if ('errors' in $$props) $$invalidate(0, errors = $$props.errors);
	};

	return [errors];
}

class ValidationErrors extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { errors: 0 });
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationErrors);



/***/ }),

/***/ "./resources/js/Layouts/Guest.svelte":
/*!*******************************************!*\
  !*** ./resources/js/Layouts/Guest.svelte ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Components_ApplicationLogo_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/ApplicationLogo.svelte */ "./resources/js/Components/ApplicationLogo.svelte");
/* harmony import */ var _Components_Link_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Link.svelte */ "./resources/js/Components/Link.svelte");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Layouts\Guest.svelte generated by Svelte v3.43.1 */





function create_default_slot(ctx) {
	let breezeapplicationlogo;
	let current;

	breezeapplicationlogo = new _Components_ApplicationLogo_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: {
				class: "w-20 h-20 fill-current text-gray-500"
			}
		});

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

function create_fragment(ctx) {
	let div2;
	let div0;
	let link;
	let t;
	let div1;
	let current;

	link = new _Components_Link_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				href: "/",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	const default_slot_template = /*#slots*/ ctx[0].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

	return {
		c() {
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link.$$.fragment);
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link, div0, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			const link_changes = {};

			if (dirty & /*$$scope*/ 2) {
				link_changes.$$scope = { dirty, ctx };
			}

			link.$set(link_changes);

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
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;

	$$self.$$set = $$props => {
		if ('$$scope' in $$props) $$invalidate(1, $$scope = $$props.$$scope);
	};

	return [slots, $$scope];
}

class Guest extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Guest);



/***/ }),

/***/ "./resources/js/Pages/Auth/Login.svelte":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Auth/Login.svelte ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Layouts_Guest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Guest */ "./resources/js/Layouts/Guest.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Utils */ "./resources/js/Utils/index.js");
/* harmony import */ var _Components_Button_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Button.svelte */ "./resources/js/Components/Button.svelte");
/* harmony import */ var _Components_Input_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Input.svelte */ "./resources/js/Components/Input.svelte");
/* harmony import */ var _smui_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @smui/checkbox */ "./node_modules/@smui/checkbox/index.js");
/* harmony import */ var _Components_ValidationErrors_svelte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/ValidationErrors.svelte */ "./resources/js/Components/ValidationErrors.svelte");
/* harmony import */ var _Components_Link_svelte__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/Link.svelte */ "./resources/js/Components/Link.svelte");
/* harmony import */ var _smui_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @smui/form-field */ "./node_modules/@smui/form-field/index.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var C_laragon_www_gym_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* resources\js\Pages\Auth\Login.svelte generated by Svelte v3.43.1 */












function create_if_block_1(ctx) {
	let div;
	let t;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*status*/ ctx[1]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "mb-4 font-medium text-sm text-green-600");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t);
		},
		p(ctx, dirty) {
			if (dirty & /*status*/ 2) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, /*status*/ ctx[1]);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
		}
	};
}

// (55:8) <FormField>
function create_default_slot_2(ctx) {
	let checkbox;
	let updating_checked;
	let current;

	function checkbox_checked_binding(value) {
		/*checkbox_checked_binding*/ ctx[7](value);
	}

	let checkbox_props = {};

	if (/*$form*/ ctx[2].remember !== void 0) {
		checkbox_props.checked = /*$form*/ ctx[2].remember;
	}

	checkbox = new _smui_checkbox__WEBPACK_IMPORTED_MODULE_6__["default"]({ props: checkbox_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(checkbox, 'checked', checkbox_checked_binding));

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(checkbox.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(checkbox, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_checked && dirty & /*$form*/ 4) {
				updating_checked = true;
				checkbox_changes.checked = /*$form*/ ctx[2].remember;
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(checkbox.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(checkbox.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(checkbox, detaching);
		}
	};
}

// (57:12) 
function create_label_slot(ctx) {
	let span;

	return {
		c() {
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			span.textContent = "Remember me.";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "label");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
		}
	};
}

// (62:8) {#if canResetPassword}
function create_if_block(ctx) {
	let link;
	let current;

	link = new _Components_Link_svelte__WEBPACK_IMPORTED_MODULE_8__["default"]({
			props: {
				href: (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.route)('password.request'),
				class: "underline text-sm text-gray-600 hover:text-gray-900",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const link_changes = {};

			if (dirty & /*$$scope*/ 512) {
				link_changes.$$scope = { dirty, ctx };
			}

			link.$set(link_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link, detaching);
		}
	};
}

// (63:12) <Link href={route('password.request')} class="underline text-sm text-gray-600 hover:text-gray-900">
function create_default_slot_1(ctx) {
	let t;

	return {
		c() {
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Forgot your password?");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
		}
	};
}

// (66:8) <BreezeButton class={$form.processing ? 'opacity-25 ml-4' : 'ml-4'} bind:disabled={$form.processing}>
function create_default_slot(ctx) {
	let t;

	return {
		c() {
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Log in");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
		}
	};
}

function create_fragment(ctx) {
	let t0;
	let breezevalidationerrors;
	let t1;
	let t2;
	let form_1;
	let div0;
	let breezeinput0;
	let updating_value;
	let t3;
	let div1;
	let breezeinput1;
	let updating_value_1;
	let t4;
	let div2;
	let formfield;
	let t5;
	let div3;
	let t6;
	let breezebutton;
	let updating_disabled;
	let current;
	let mounted;
	let dispose;
	breezevalidationerrors = new _Components_ValidationErrors_svelte__WEBPACK_IMPORTED_MODULE_7__["default"]({ props: { class: "mb-4" } });
	let if_block0 = /*status*/ ctx[1] && create_if_block_1(ctx);

	function breezeinput0_value_binding(value) {
		/*breezeinput0_value_binding*/ ctx[5](value);
	}

	let breezeinput0_props = {
		id: "email",
		type: "email",
		class: "mt-1 block w-full",
		label: "Correo electrónico",
		required: true,
		autofocus: true,
		autocomplete: "username"
	};

	if (/*$form*/ ctx[2].email !== void 0) {
		breezeinput0_props.value = /*$form*/ ctx[2].email;
	}

	breezeinput0 = new _Components_Input_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({ props: breezeinput0_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(breezeinput0, 'value', breezeinput0_value_binding));

	function breezeinput1_value_binding(value) {
		/*breezeinput1_value_binding*/ ctx[6](value);
	}

	let breezeinput1_props = {
		id: "password",
		type: "password",
		class: "mt-1 block w-full",
		label: "Contraseña",
		required: true,
		autocomplete: "current-password"
	};

	if (/*$form*/ ctx[2].password !== void 0) {
		breezeinput1_props.value = /*$form*/ ctx[2].password;
	}

	breezeinput1 = new _Components_Input_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({ props: breezeinput1_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(breezeinput1, 'value', breezeinput1_value_binding));

	formfield = new _smui_form_field__WEBPACK_IMPORTED_MODULE_9__["default"]({
			props: {
				$$slots: {
					label: [create_label_slot],
					default: [create_default_slot_2]
				},
				$$scope: { ctx }
			}
		});

	let if_block1 = /*canResetPassword*/ ctx[0] && create_if_block(ctx);

	function breezebutton_disabled_binding(value) {
		/*breezebutton_disabled_binding*/ ctx[8](value);
	}

	let breezebutton_props = {
		class: /*$form*/ ctx[2].processing ? 'opacity-25 ml-4' : 'ml-4',
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};

	if (/*$form*/ ctx[2].processing !== void 0) {
		breezebutton_props.disabled = /*$form*/ ctx[2].processing;
	}

	breezebutton = new _Components_Button_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({ props: breezebutton_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(breezebutton, 'disabled', breezebutton_disabled_binding));

	return {
		c() {
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(breezevalidationerrors.$$.fragment);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block0) if_block0.c();
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			form_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("form");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(breezeinput0.$$.fragment);
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(breezeinput1.$$.fragment);
			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(formfield.$$.fragment);
			t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (if_block1) if_block1.c();
			t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(breezebutton.$$.fragment);
			document.title = "Log in";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "mt-4");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "block mt-4");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "flex items-center justify-end mt-4");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(breezevalidationerrors, target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
			if (if_block0) if_block0.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t2, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, form_1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form_1, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(breezeinput0, div0, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form_1, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form_1, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(breezeinput1, div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form_1, t4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form_1, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(formfield, div2, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form_1, t5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form_1, div3);
			if (if_block1) if_block1.m(div3, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(breezebutton, div3, null);
			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(form_1, "submit", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(/*submit*/ ctx[4]));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (/*status*/ ctx[1]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(t2.parentNode, t2);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			const breezeinput0_changes = {};

			if (!updating_value && dirty & /*$form*/ 4) {
				updating_value = true;
				breezeinput0_changes.value = /*$form*/ ctx[2].email;
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_value = false);
			}

			breezeinput0.$set(breezeinput0_changes);
			const breezeinput1_changes = {};

			if (!updating_value_1 && dirty & /*$form*/ 4) {
				updating_value_1 = true;
				breezeinput1_changes.value = /*$form*/ ctx[2].password;
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_value_1 = false);
			}

			breezeinput1.$set(breezeinput1_changes);
			const formfield_changes = {};

			if (dirty & /*$$scope, $form*/ 516) {
				formfield_changes.$$scope = { dirty, ctx };
			}

			formfield.$set(formfield_changes);

			if (/*canResetPassword*/ ctx[0]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*canResetPassword*/ 1) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					if_block1.m(div3, t6);
				}
			} else if (if_block1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			const breezebutton_changes = {};
			if (dirty & /*$form*/ 4) breezebutton_changes.class = /*$form*/ ctx[2].processing ? 'opacity-25 ml-4' : 'ml-4';

			if (dirty & /*$$scope*/ 512) {
				breezebutton_changes.$$scope = { dirty, ctx };
			}

			if (!updating_disabled && dirty & /*$form*/ 4) {
				updating_disabled = true;
				breezebutton_changes.disabled = /*$form*/ ctx[2].processing;
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_disabled = false);
			}

			breezebutton.$set(breezebutton_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(breezevalidationerrors.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(breezeinput0.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(breezeinput1.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(formfield.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(breezebutton.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(breezevalidationerrors.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(breezeinput0.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(breezeinput1.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(formfield.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(breezebutton.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(breezevalidationerrors, detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
			if (if_block0) if_block0.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t2);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(form_1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(breezeinput0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(breezeinput1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(formfield);
			if (if_block1) if_block1.d();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(breezebutton);
			mounted = false;
			dispose();
		}
	};
}

const layout = _Layouts_Guest__WEBPACK_IMPORTED_MODULE_1__["default"];

function instance($$self, $$props, $$invalidate) {
	let $form;
	let { canResetPassword } = $$props;
	let { status } = $$props;
	let form = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.useForm)({ email: '', password: '', remember: false });
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, form, value => $$invalidate(2, $form = value));

	function submit() {
		$form.post((0,_Utils__WEBPACK_IMPORTED_MODULE_3__.route)('login'), { onFinish: () => $form.reset('password') });
	}

	function breezeinput0_value_binding(value) {
		if ($$self.$$.not_equal($form.email, value)) {
			$form.email = value;
			form.set($form);
		}
	}

	function breezeinput1_value_binding(value) {
		if ($$self.$$.not_equal($form.password, value)) {
			$form.password = value;
			form.set($form);
		}
	}

	function checkbox_checked_binding(value) {
		if ($$self.$$.not_equal($form.remember, value)) {
			$form.remember = value;
			form.set($form);
		}
	}

	function breezebutton_disabled_binding(value) {
		if ($$self.$$.not_equal($form.processing, value)) {
			$form.processing = value;
			form.set($form);
		}
	}

	$$self.$$set = $$props => {
		if ('canResetPassword' in $$props) $$invalidate(0, canResetPassword = $$props.canResetPassword);
		if ('status' in $$props) $$invalidate(1, status = $$props.status);
	};

	return [
		canResetPassword,
		status,
		$form,
		form,
		submit,
		breezeinput0_value_binding,
		breezeinput1_value_binding,
		checkbox_checked_binding,
		breezebutton_disabled_binding
	];
}

class Login extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { canResetPassword: 0, status: 1 });
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);




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

/***/ "./node_modules/@smui/button/GroupItem.js":
/*!************************************************!*\
  !*** ./node_modules/@smui/button/GroupItem.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GroupItem)
/* harmony export */ });
function GroupItem(
  node,
  {
    addClass = (className) => node.classList.add(className),
    removeClass = (className) => node.classList.remove(className),
  } = {}
) {
  addClass('smui-button__group-item');

  return {
    destroy() {
      removeClass('smui-button__group-item');
    },
  };
}


/***/ }),

/***/ "./node_modules/@smui/button/index.js":
/*!********************************************!*\
  !*** ./node_modules/@smui/button/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Group": () => (/* reexport safe */ _Group_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "GroupItem": () => (/* reexport safe */ _GroupItem_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Label": () => (/* reexport safe */ _smui_common_CommonLabel_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Icon": () => (/* reexport safe */ _smui_common_CommonIcon_svelte__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _Button_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.svelte */ "./node_modules/@smui/button/Button.svelte");
/* harmony import */ var _Group_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group.svelte */ "./node_modules/@smui/button/Group.svelte");
/* harmony import */ var _GroupItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupItem.js */ "./node_modules/@smui/button/GroupItem.js");
/* harmony import */ var _smui_common_CommonLabel_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smui/common/CommonLabel.svelte */ "./node_modules/@smui/common/CommonLabel.svelte");
/* harmony import */ var _smui_common_CommonIcon_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smui/common/CommonIcon.svelte */ "./node_modules/@smui/common/CommonIcon.svelte");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Button_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]);




/***/ }),

/***/ "./node_modules/@smui/checkbox/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@smui/checkbox/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Checkbox_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox.svelte */ "./node_modules/@smui/checkbox/Checkbox.svelte");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Checkbox_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]);


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

/***/ "./node_modules/@smui/form-field/index.js":
/*!************************************************!*\
  !*** ./node_modules/@smui/form-field/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormField_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormField.svelte */ "./node_modules/@smui/form-field/FormField.svelte");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FormField_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]);


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