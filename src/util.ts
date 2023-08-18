// Code generated for API Clients. DO NOT EDIT.

export function onFulfilled(f) {
  return f;
}

export function onRejected(e: Error) {
  const errMsg = deserializeResult(JSON.parse(e.message));
  errMsg.details = new Map(Object.entries(errMsg.details));
  throw errMsg;
}

export function deserializeResult(obj) {
  return objectKeysTo(obj, snakeToLowerCamel);
}

export function serializeArgument(obj) {
  return JSON.stringify(objectKeysTo(obj, lowerCamelToSnake), replacer);
}

function replacer(key, value) {
  if (value instanceof Map) {
    return Object.fromEntries(value);
  } else {
    return value;
  }
}

function snakeToLowerCamel(s: string): string {
  return s.replace(/([-_]\w)/g, g => g[1].toUpperCase());
}

function lowerCamelToSnake(s: string): string {
  return s.replace(/[A-Z]/g, g => `_${g.toLowerCase()}`);
}

function objectKeysTo(obj, keyFunc) {
  if (obj === null) {
    return obj;
  } else if (Array.isArray(obj)) {
    return obj.map(item => objectKeysTo(item, keyFunc));
  } else if (typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, k) => {
      acc[keyFunc(k)] = objectKeysTo(obj[k], keyFunc);
      return acc;
    }, {});
  } else {
    return obj;
  }
}
