'use strict'

let _toString = Object.prototype.toString;

let _ = module.exports = {};

_.isPureObject = function(arg){
    return _toString.call(arg) === '[object Object]';
}

_.isPureArray = function(arg){
    return _toString.call(arg) === '[object Array]';
}

_.isPureFunction = function(arg){
    return _toString.call(arg) === '[object Function]';
}

_.isPureUndefined = function(arg){
    return _toString.call(arg) === '[object Undefined]';
}

_.isPureNull = function(arg){
    return _toString.call(arg) === '[object Null]';
}

_.isPureString = function(arg){
    return _toString.call(arg) === '[object String]';
}

_.isPureNumber = function(arg){
    return _toString.call(arg) === '[object Number]';
}