"use strict";
// Code generated for API Clients. DO NOT EDIT.
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeArgument = exports.deserializeResult = exports.onRejected = exports.onFulfilled = void 0;
function onFulfilled(f) {
    return f;
}
exports.onFulfilled = onFulfilled;
function onRejected(e) {
    const errMsg = deserializeResult(JSON.parse(e.message));
    errMsg.details = new Map(Object.entries(errMsg.details));
    throw errMsg;
}
exports.onRejected = onRejected;
function deserializeResult(obj) {
    return objectKeysTo(obj, snakeToLowerCamel);
}
exports.deserializeResult = deserializeResult;
function serializeArgument(obj) {
    return JSON.stringify(objectKeysTo(obj, lowerCamelToSnake), replacer);
}
exports.serializeArgument = serializeArgument;
function replacer(key, value) {
    if (value instanceof Map) {
        return Object.fromEntries(value);
    }
    else {
        return value;
    }
}
function snakeToLowerCamel(s) {
    return s.replace(/([-_]\w)/g, g => g[1].toUpperCase());
}
function lowerCamelToSnake(s) {
    return s.replace(/[A-Z]/g, g => `_${g.toLowerCase()}`);
}
function objectKeysTo(obj, keyFunc) {
    if (obj === null) {
        return obj;
    }
    else if (Array.isArray(obj)) {
        return obj.map(item => objectKeysTo(item, keyFunc));
    }
    else if (typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, k) => {
            acc[keyFunc(k)] = objectKeysTo(obj[k], keyFunc);
            return acc;
        }, {});
    }
    else {
        return obj;
    }
}
//# sourceMappingURL=util.js.map