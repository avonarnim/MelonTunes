(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){(function(global){;(function(){var undefined;var VERSION='4.17.15';var LARGE_ARRAY_SIZE=200;var CORE_ERROR_TEXT='Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',FUNC_ERROR_TEXT='Expected a function';var HASH_UNDEFINED='__lodash_hash_undefined__';var MAX_MEMOIZE_SIZE=500;var PLACEHOLDER='__lodash_placeholder__';var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;var WRAP_BIND_FLAG=1,WRAP_BIND_KEY_FLAG=2,WRAP_CURRY_BOUND_FLAG=4,WRAP_CURRY_FLAG=8,WRAP_CURRY_RIGHT_FLAG=16,WRAP_PARTIAL_FLAG=32,WRAP_PARTIAL_RIGHT_FLAG=64,WRAP_ARY_FLAG=128,WRAP_REARG_FLAG=256,WRAP_FLIP_FLAG=512;var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION='...';var HOT_COUNT=800,HOT_SPAN=16;var LAZY_FILTER_FLAG=1,LAZY_MAP_FLAG=2,LAZY_WHILE_FLAG=3;var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e+308,NAN=0/0;var MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;var wrapFlags=[['ary',WRAP_ARY_FLAG],['bind',WRAP_BIND_FLAG],['bindKey',WRAP_BIND_KEY_FLAG],['curry',WRAP_CURRY_FLAG],['curryRight',WRAP_CURRY_RIGHT_FLAG],['flip',WRAP_FLIP_FLAG],['partial',WRAP_PARTIAL_FLAG],['partialRight',WRAP_PARTIAL_RIGHT_FLAG],['rearg',WRAP_REARG_FLAG]];var argsTag='[object Arguments]',arrayTag='[object Array]',asyncTag='[object AsyncFunction]',boolTag='[object Boolean]',dateTag='[object Date]',domExcTag='[object DOMException]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',nullTag='[object Null]',objectTag='[object Object]',promiseTag='[object Promise]',proxyTag='[object Proxy]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',undefinedTag='[object Undefined]',weakMapTag='[object WeakMap]',weakSetTag='[object WeakSet]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;var reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g,reUnescapedHtml=/[&<>"']/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source);var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g,reInterpolate=/<%=([\s\S]+?)%>/g;var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);var reTrim=/^\s+|\s+$/g,reTrimStart=/^\s+/,reTrimEnd=/\s+$/;var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails=/,? & /;var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var reEscapeChar=/\\(\\)?/g;var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;var reFlags=/\w*$/;var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;var reIsBinary=/^0b[01]+$/i;var reIsHostCtor=/^\[object .+?Constructor\]$/;var reIsOctal=/^0o[0-7]+$/i;var reIsUint=/^(?:0|[1-9]\d*)$/;var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;var reNoMatch=/($^)/;var reUnescapedString=/['\n\r\u2028\u2029\\]/g;var rsAstralRange='\\ud800-\\udfff',rsComboMarksRange='\\u0300-\\u036f',reComboHalfMarksRange='\\ufe20-\\ufe2f',rsComboSymbolsRange='\\u20d0-\\u20ff',rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange='\\u2700-\\u27bf',rsLowerRange='a-z\\xdf-\\xf6\\xf8-\\xff',rsMathOpRange='\\xac\\xb1\\xd7\\xf7',rsNonCharRange='\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',rsPunctuationRange='\\u2000-\\u206f',rsSpaceRange=' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',rsUpperRange='A-Z\\xc0-\\xd6\\xd8-\\xde',rsVarRange='\\ufe0e\\ufe0f',rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;var rsApos="['\u2019]",rsAstral='['+rsAstralRange+']',rsBreak='['+rsBreakRange+']',rsCombo='['+rsComboRange+']',rsDigits='\\d+',rsDingbat='['+rsDingbatRange+']',rsLower='['+rsLowerRange+']',rsMisc='[^'+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+']',rsFitz='\\ud83c[\\udffb-\\udfff]',rsModifier='(?:'+rsCombo+'|'+rsFitz+')',rsNonAstral='[^'+rsAstralRange+']',rsRegional='(?:\\ud83c[\\udde6-\\uddff]){2}',rsSurrPair='[\\ud800-\\udbff][\\udc00-\\udfff]',rsUpper='['+rsUpperRange+']',rsZWJ='\\u200d';var rsMiscLower='(?:'+rsLower+'|'+rsMisc+')',rsMiscUpper='(?:'+rsUpper+'|'+rsMisc+')',rsOptContrLower='(?:'+rsApos+'(?:d|ll|m|re|s|t|ve))?',rsOptContrUpper='(?:'+rsApos+'(?:D|LL|M|RE|S|T|VE))?',reOptMod=rsModifier+'?',rsOptVar='['+rsVarRange+']?',rsOptJoin='(?:'+rsZWJ+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*',rsOrdLower='\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',rsOrdUpper='\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji='(?:'+[rsDingbat,rsRegional,rsSurrPair].join('|')+')'+rsSeq,rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';var reApos=RegExp(rsApos,'g');var reComboMark=RegExp(rsCombo,'g');var reUnicode=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');var reUnicodeWord=RegExp([rsUpper+'?'+rsLower+'+'+rsOptContrLower+'(?='+[rsBreak,rsUpper,'$'].join('|')+')',rsMiscUpper+'+'+rsOptContrUpper+'(?='+[rsBreak,rsUpper+rsMiscLower,'$'].join('|')+')',rsUpper+'?'+rsMiscLower+'+'+rsOptContrLower,rsUpper+'+'+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join('|'),'g');var reHasUnicode=RegExp('['+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+']');var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var contextProps=['Array','Buffer','DataView','Date','Error','Float32Array','Float64Array','Function','Int8Array','Int16Array','Int32Array','Map','Math','Object','Promise','RegExp','Set','String','Symbol','TypeError','Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array','WeakMap','_','clearTimeout','isFinite','parseInt','setTimeout'];var templateCounter=-1;var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;var deburredLetters={'\xc0':'A','\xc1':'A','\xc2':'A','\xc3':'A','\xc4':'A','\xc5':'A','\xe0':'a','\xe1':'a','\xe2':'a','\xe3':'a','\xe4':'a','\xe5':'a','\xc7':'C','\xe7':'c','\xd0':'D','\xf0':'d','\xc8':'E','\xc9':'E','\xca':'E','\xcb':'E','\xe8':'e','\xe9':'e','\xea':'e','\xeb':'e','\xcc':'I','\xcd':'I','\xce':'I','\xcf':'I','\xec':'i','\xed':'i','\xee':'i','\xef':'i','\xd1':'N','\xf1':'n','\xd2':'O','\xd3':'O','\xd4':'O','\xd5':'O','\xd6':'O','\xd8':'O','\xf2':'o','\xf3':'o','\xf4':'o','\xf5':'o','\xf6':'o','\xf8':'o','\xd9':'U','\xda':'U','\xdb':'U','\xdc':'U','\xf9':'u','\xfa':'u','\xfb':'u','\xfc':'u','\xdd':'Y','\xfd':'y','\xff':'y','\xc6':'Ae','\xe6':'ae','\xde':'Th','\xfe':'th','\xdf':'ss','\u0100':'A','\u0102':'A','\u0104':'A','\u0101':'a','\u0103':'a','\u0105':'a','\u0106':'C','\u0108':'C','\u010a':'C','\u010c':'C','\u0107':'c','\u0109':'c','\u010b':'c','\u010d':'c','\u010e':'D','\u0110':'D','\u010f':'d','\u0111':'d','\u0112':'E','\u0114':'E','\u0116':'E','\u0118':'E','\u011a':'E','\u0113':'e','\u0115':'e','\u0117':'e','\u0119':'e','\u011b':'e','\u011c':'G','\u011e':'G','\u0120':'G','\u0122':'G','\u011d':'g','\u011f':'g','\u0121':'g','\u0123':'g','\u0124':'H','\u0126':'H','\u0125':'h','\u0127':'h','\u0128':'I','\u012a':'I','\u012c':'I','\u012e':'I','\u0130':'I','\u0129':'i','\u012b':'i','\u012d':'i','\u012f':'i','\u0131':'i','\u0134':'J','\u0135':'j','\u0136':'K','\u0137':'k','\u0138':'k','\u0139':'L','\u013b':'L','\u013d':'L','\u013f':'L','\u0141':'L','\u013a':'l','\u013c':'l','\u013e':'l','\u0140':'l','\u0142':'l','\u0143':'N','\u0145':'N','\u0147':'N','\u014a':'N','\u0144':'n','\u0146':'n','\u0148':'n','\u014b':'n','\u014c':'O','\u014e':'O','\u0150':'O','\u014d':'o','\u014f':'o','\u0151':'o','\u0154':'R','\u0156':'R','\u0158':'R','\u0155':'r','\u0157':'r','\u0159':'r','\u015a':'S','\u015c':'S','\u015e':'S','\u0160':'S','\u015b':'s','\u015d':'s','\u015f':'s','\u0161':'s','\u0162':'T','\u0164':'T','\u0166':'T','\u0163':'t','\u0165':'t','\u0167':'t','\u0168':'U','\u016a':'U','\u016c':'U','\u016e':'U','\u0170':'U','\u0172':'U','\u0169':'u','\u016b':'u','\u016d':'u','\u016f':'u','\u0171':'u','\u0173':'u','\u0174':'W','\u0175':'w','\u0176':'Y','\u0177':'y','\u0178':'Y','\u0179':'Z','\u017b':'Z','\u017d':'Z','\u017a':'z','\u017c':'z','\u017e':'z','\u0132':'IJ','\u0133':'ij','\u0152':'Oe','\u0153':'oe','\u0149':"'n",'\u017f':'s'};var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};var htmlUnescapes={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"};var stringEscapes={'\\':'\\',"'":"'",'\n':'n','\r':'r','\u2028':'u2028','\u2029':'u2029'};var freeParseFloat=parseFloat,freeParseInt=parseInt;var freeGlobal=typeof global=='object'&&global&&global.Object===Object&&global;var freeSelf=typeof self=='object'&&self&&self.Object===Object&&self;var root=freeGlobal||freeSelf||Function('return this')();var freeExports=typeof exports=='object'&&exports&&!exports.nodeType&&exports;var freeModule=freeExports&&typeof module=='object'&&module&&!module.nodeType&&module;var moduleExports=freeModule&&freeModule.exports===freeExports;var freeProcess=moduleExports&&freeGlobal.process;var nodeUtil=(function(){try{var types=freeModule&&freeModule.require&&freeModule.require('util').types;if(types){return types;}
return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}());var nodeIsArrayBuffer=nodeUtil&&nodeUtil.isArrayBuffer,nodeIsDate=nodeUtil&&nodeUtil.isDate,nodeIsMap=nodeUtil&&nodeUtil.isMap,nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,nodeIsSet=nodeUtil&&nodeUtil.isSet,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}
return func.apply(thisArg,args);}
function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array==null?0:array.length;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array);}
return accumulator;}
function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}
return array;}
function arrayEachRight(array,iteratee){var length=array==null?0:array.length;while(length--){if(iteratee(array[length],length,array)===false){break;}}
return array;}
function arrayEvery(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(!predicate(array[index],index,array)){return false;}}
return true;}
function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}
return result;}
function arrayIncludes(array,value){var length=array==null?0:array.length;return!!length&&baseIndexOf(array,value,0)>-1;}
function arrayIncludesWith(array,value,comparator){var index=-1,length=array==null?0:array.length;while(++index<length){if(comparator(value,array[index])){return true;}}
return false;}
function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}
return result;}
function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}
return array;}
function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array==null?0:array.length;if(initAccum&&length){accumulator=array[++index];}
while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}
return accumulator;}
function arrayReduceRight(array,iteratee,accumulator,initAccum){var length=array==null?0:array.length;if(initAccum&&length){accumulator=array[--length];}
while(length--){accumulator=iteratee(accumulator,array[length],length,array);}
return accumulator;}
function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}
return false;}
var asciiSize=baseProperty('length');function asciiToArray(string){return string.split('');}
function asciiWords(string){return string.match(reAsciiWord)||[];}
function baseFindKey(collection,predicate,eachFunc){var result;eachFunc(collection,function(value,key,collection){if(predicate(value,key,collection)){result=key;return false;}});return result;}
function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while((fromRight?index--:++index<length)){if(predicate(array[index],index,array)){return index;}}
return-1;}
function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}
function baseIndexOfWith(array,value,fromIndex,comparator){var index=fromIndex-1,length=array.length;while(++index<length){if(comparator(array[index],value)){return index;}}
return-1;}
function baseIsNaN(value){return value!==value;}
function baseMean(array,iteratee){var length=array==null?0:array.length;return length?(baseSum(array,iteratee)/length):NAN;}
function baseProperty(key){return function(object){return object==null?undefined:object[key];};}
function basePropertyOf(object){return function(key){return object==null?undefined:object[key];};}
function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator;}
function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value;}
return array;}
function baseSum(array,iteratee){var result,index=-1,length=array.length;while(++index<length){var current=iteratee(array[index]);if(current!==undefined){result=result===undefined?current:(result+current);}}
return result;}
function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}
return result;}
function baseToPairs(object,props){return arrayMap(props,function(key){return[key,object[key]];});}
function baseUnary(func){return function(value){return func(value);};}
function baseValues(object,props){return arrayMap(props,function(key){return object[key];});}
function cacheHas(cache,key){return cache.has(key);}
function charsStartIndex(strSymbols,chrSymbols){var index=-1,length=strSymbols.length;while(++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}
return index;}
function charsEndIndex(strSymbols,chrSymbols){var index=strSymbols.length;while(index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}
return index;}
function countHolders(array,placeholder){var length=array.length,result=0;while(length--){if(array[length]===placeholder){++result;}}
return result;}
var deburrLetter=basePropertyOf(deburredLetters);var escapeHtmlChar=basePropertyOf(htmlEscapes);function escapeStringChar(chr){return '\\'+stringEscapes[chr];}
function getValue(object,key){return object==null?undefined:object[key];}
function hasUnicode(string){return reHasUnicode.test(string);}
function hasUnicodeWord(string){return reHasUnicodeWord.test(string);}
function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value);}
return result;}
function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}
function overArg(func,transform){return function(arg){return func(transform(arg));};}
function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value===placeholder||value===PLACEHOLDER){array[index]=PLACEHOLDER;result[resIndex++]=index;}}
return result;}
function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}
function setToPairs(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=[value,value];});return result;}
function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}
return-1;}
function strictLastIndexOf(array,value,fromIndex){var index=fromIndex+1;while(index--){if(array[index]===value){return index;}}
return index;}
function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string);}
function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string);}
var unescapeHtmlChar=basePropertyOf(htmlUnescapes);function unicodeSize(string){var result=reUnicode.lastIndex=0;while(reUnicode.test(string)){++result;}
return result;}
function unicodeToArray(string){return string.match(reUnicode)||[];}
function unicodeWords(string){return string.match(reUnicodeWord)||[];}
var runInContext=(function runInContext(context){context=context==null?root:_.defaults(root.Object(),context,_.pick(root,contextProps));var Array=context.Array,Date=context.Date,Error=context.Error,Function=context.Function,Math=context.Math,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;var coreJsData=context['__core-js_shared__'];var funcToString=funcProto.toString;var hasOwnProperty=objectProto.hasOwnProperty;var idCounter=0;var maskSrcKey=(function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?('Symbol(src)_1.'+uid):'';}());var nativeObjectToString=objectProto.toString;var objectCtorString=funcToString.call(Object);var oldDash=root._;var reIsNative=RegExp('^'+
funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');var Buffer=moduleExports?context.Buffer:undefined,Symbol=context.Symbol,Uint8Array=context.Uint8Array,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=Symbol?Symbol.isConcatSpreadable:undefined,symIterator=Symbol?Symbol.iterator:undefined,symToStringTag=Symbol?Symbol.toStringTag:undefined;var defineProperty=(function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}());var ctxClearTimeout=context.clearTimeout!==root.clearTimeout&&context.clearTimeout,ctxNow=Date&&Date.now!==root.Date.now&&Date.now,ctxSetTimeout=context.setTimeout!==root.setTimeout&&context.setTimeout;var nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeIsFinite=context.isFinite,nativeJoin=arrayProto.join,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeMin=Math.min,nativeNow=Date.now,nativeParseInt=context.parseInt,nativeRandom=Math.random,nativeReverse=arrayProto.reverse;var DataView=getNative(context,'DataView'),Map=getNative(context,'Map'),Promise=getNative(context,'Promise'),Set=getNative(context,'Set'),WeakMap=getNative(context,'WeakMap'),nativeCreate=getNative(Object,'create');var metaMap=WeakMap&&new WeakMap;var realNames={};var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);var symbolProto=Symbol?Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){if(value instanceof LodashWrapper){return value;}
if(hasOwnProperty.call(value,'__wrapped__')){return wrapperClone(value);}}
return new LodashWrapper(value);}
var baseCreate=(function(){function object(){}
return function(proto){if(!isObject(proto)){return{};}
if(objectCreate){return objectCreate(proto);}
object.prototype=proto;var result=new object;object.prototype=undefined;return result;};}());function baseLodash(){}
function LodashWrapper(value,chainAll){this.__wrapped__=value;this.__actions__=[];this.__chain__=!!chainAll;this.__index__=0;this.__values__=undefined;}
lodash.templateSettings={'escape':reEscape,'evaluate':reEvaluate,'interpolate':reInterpolate,'variable':'','imports':{'_':lodash}};lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;function LazyWrapper(value){this.__wrapped__=value;this.__actions__=[];this.__dir__=1;this.__filtered__=false;this.__iteratees__=[];this.__takeCount__=MAX_ARRAY_LENGTH;this.__views__=[];}
function lazyClone(){var result=new LazyWrapper(this.__wrapped__);result.__actions__=copyArray(this.__actions__);result.__dir__=this.__dir__;result.__filtered__=this.__filtered__;result.__iteratees__=copyArray(this.__iteratees__);result.__takeCount__=this.__takeCount__;result.__views__=copyArray(this.__views__);return result;}
function lazyReverse(){if(this.__filtered__){var result=new LazyWrapper(this);result.__dir__=-1;result.__filtered__=true;}else{result=this.clone();result.__dir__*=-1;}
return result;}
function lazyValue(){var array=this.__wrapped__.value(),dir=this.__dir__,isArr=isArray(array),isRight=dir<0,arrLength=isArr?array.length:0,view=getView(0,arrLength,this.__views__),start=view.start,end=view.end,length=end-start,index=isRight?end:(start-1),iteratees=this.__iteratees__,iterLength=iteratees.length,resIndex=0,takeCount=nativeMin(length,this.__takeCount__);if(!isArr||(!isRight&&arrLength==length&&takeCount==length)){return baseWrapperValue(array,this.__actions__);}
var result=[];outer:while(length--&&resIndex<takeCount){index+=dir;var iterIndex=-1,value=array[index];while(++iterIndex<iterLength){var data=iteratees[iterIndex],iteratee=data.iteratee,type=data.type,computed=iteratee(value);if(type==LAZY_MAP_FLAG){value=computed;}else if(!computed){if(type==LAZY_FILTER_FLAG){continue outer;}else{break outer;}}}
result[resIndex++]=value;}
return result;}
LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}
function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}
function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}
function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}
return hasOwnProperty.call(data,key)?data[key]:undefined;}
function hashHas(key){var data=this.__data__;return nativeCreate?(data[key]!==undefined):hasOwnProperty.call(data,key);}
function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=(nativeCreate&&value===undefined)?HASH_UNDEFINED:value;return this;}
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}
function listCacheClear(){this.__data__=[];this.size=0;}
function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}
var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}
--this.size;return true;}
function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}
function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}
function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}
return this;}
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}
function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash,'map':new(Map||ListCache),'string':new Hash};}
function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}
function mapCacheGet(key){return getMapData(this,key).get(key);}
function mapCacheHas(key){return getMapData(this,key).has(key);}
function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache;while(++index<length){this.add(values[index]);}}
function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}
function setCacheHas(value){return this.__data__.has(value);}
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}
function stackClear(){this.__data__=new ListCache;this.size=0;}
function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}
function stackGet(key){return this.__data__.get(key);}
function stackHas(key){return this.__data__.has(key);}
function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||(pairs.length<LARGE_ARRAY_SIZE-1)){pairs.push([key,value]);this.size=++data.size;return this;}
data=this.__data__=new MapCache(pairs);}
data.set(key,value);this.size=data.size;return this;}
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(key=='length'||(isBuff&&(key=='offset'||key=='parent'))||(isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset'))||isIndex(key,length)))){result.push(key);}}
return result;}
function arraySample(array){var length=array.length;return length?array[baseRandom(0,length-1)]:undefined;}
function arraySampleSize(array,n){return shuffleSelf(copyArray(array),baseClamp(n,0,array.length));}
function arrayShuffle(array){return shuffleSelf(copyArray(array));}
function assignMergeValue(object,key,value){if((value!==undefined&&!eq(object[key],value))||(value===undefined&&!(key in object))){baseAssignValue(object,key,value);}}
function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||(value===undefined&&!(key in object))){baseAssignValue(object,key,value);}}
function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}
return-1;}
function baseAggregator(collection,setter,iteratee,accumulator){baseEach(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection);});return accumulator;}
function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}
function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object);}
function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}
function baseAt(object,paths){var index=-1,length=paths.length,result=Array(length),skip=object==null;while(++index<length){result[index]=skip?undefined:get(object,paths[index]);}
return result;}
function baseClamp(number,lower,upper){if(number===number){if(upper!==undefined){number=number<=upper?number:upper;}
if(lower!==undefined){number=number>=lower?number:lower;}}
return number;}
function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}
if(result!==undefined){return result;}
if(!isObject(value)){return value;}
var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}
if(tag==objectTag||tag==argsTag||(isFunc&&!object)){result=(isFlat||isFunc)?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}
result=initCloneByTag(value,tag,isDeep);}}
stack||(stack=new Stack);var stacked=stack.get(value);if(stacked){return stacked;}
stack.set(value,result);if(isSet(value)){value.forEach(function(subValue){result.add(baseClone(subValue,bitmask,customizer,subValue,value,stack));});}else if(isMap(value)){value.forEach(function(subValue,key){result.set(key,baseClone(subValue,bitmask,customizer,key,value,stack));});}
var keysFunc=isFull?(isFlat?getAllKeysIn:getAllKeys):(isFlat?keysIn:keys);var props=isArr?undefined:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}
assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}
function baseConforms(source){var props=keys(source);return function(object){return baseConformsTo(object,source,props);};}
function baseConformsTo(object,source,props){var length=props.length;if(object==null){return!length;}
object=Object(object);while(length--){var key=props[length],predicate=source[key],value=object[key];if((value===undefined&&!(key in object))||!predicate(value)){return false;}}
return true;}
function baseDelay(func,wait,args){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
return setTimeout(function(){func.apply(undefined,args);},wait);}
function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}
if(iteratee){values=arrayMap(values,baseUnary(iteratee));}
if(comparator){includes=arrayIncludesWith;isCommon=false;}
else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}
outer:while(++index<length){var value=array[index],computed=iteratee==null?value:iteratee(value);value=(comparator||value!==0)?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}
result.push(value);}
else if(!includes(values,computed,comparator)){result.push(value);}}
return result;}
var baseEach=createBaseEach(baseForOwn);var baseEachRight=createBaseEach(baseForOwnRight,true);function baseEvery(collection,predicate){var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result;});return result;}
function baseExtremum(array,iteratee,comparator){var index=-1,length=array.length;while(++index<length){var value=array[index],current=iteratee(value);if(current!=null&&(computed===undefined?(current===current&&!isSymbol(current)):comparator(current,computed))){var computed=current,result=value;}}
return result;}
function baseFill(array,value,start,end){var length=array.length;start=toInteger(start);if(start<0){start=-start>length?0:(length+start);}
end=(end===undefined||end>length)?length:toInteger(end);if(end<0){end+=length;}
end=start>end?0:toLength(end);while(start<end){array[start++]=value;}
return array;}
function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value);}});return result;}
function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}
return result;}
var baseFor=createBaseFor();var baseForRight=createBaseFor(true);function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}
function baseForOwnRight(object,iteratee){return object&&baseForRight(object,iteratee,keys);}
function baseFunctions(object,props){return arrayFilter(props,function(key){return isFunction(object[key]);});}
function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}
return(index&&index==length)?object:undefined;}
function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}
function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}
return(symToStringTag&&symToStringTag in Object(value))?getRawTag(value):objectToString(value);}
function baseGt(value,other){return value>other;}
function baseHas(object,key){return object!=null&&hasOwnProperty.call(object,key);}
function baseHasIn(object,key){return object!=null&&key in Object(object);}
function baseInRange(number,start,end){return number>=nativeMin(start,end)&&number<nativeMax(start,end);}
function baseIntersection(arrays,iteratee,comparator){var includes=comparator?arrayIncludesWith:arrayIncludes,length=arrays[0].length,othLength=arrays.length,othIndex=othLength,caches=Array(othLength),maxLength=Infinity,result=[];while(othIndex--){var array=arrays[othIndex];if(othIndex&&iteratee){array=arrayMap(array,baseUnary(iteratee));}
maxLength=nativeMin(array.length,maxLength);caches[othIndex]=!comparator&&(iteratee||(length>=120&&array.length>=120))?new SetCache(othIndex&&array):undefined;}
array=arrays[0];var index=-1,seen=caches[0];outer:while(++index<length&&result.length<maxLength){var value=array[index],computed=iteratee?iteratee(value):value;value=(comparator||value!==0)?value:0;if(!(seen?cacheHas(seen,computed):includes(result,computed,comparator))){othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if(!(cache?cacheHas(cache,computed):includes(arrays[othIndex],computed,comparator))){continue outer;}}
if(seen){seen.push(computed);}
result.push(value);}}
return result;}
function baseInverter(object,setter,iteratee,accumulator){baseForOwn(object,function(value,key,object){setter(accumulator,iteratee(value),key,object);});return accumulator;}
function baseInvoke(object,path,args){path=castPath(path,object);object=parent(object,path);var func=object==null?object:object[toKey(last(path))];return func==null?undefined:apply(func,object,args);}
function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}
function baseIsArrayBuffer(value){return isObjectLike(value)&&baseGetTag(value)==arrayBufferTag;}
function baseIsDate(value){return isObjectLike(value)&&baseGetTag(value)==dateTag;}
function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}
if(value==null||other==null||(!isObjectLike(value)&&!isObjectLike(other))){return value!==value&&other!==other;}
return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}
function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}
objIsArr=true;objIsObj=false;}
if(isSameTag&&!objIsObj){stack||(stack=new Stack);return(objIsArr||isTypedArray(object))?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}
if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack);return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}
if(!isSameTag){return false;}
stack||(stack=new Stack);return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}
function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag;}
function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}
object=Object(object);while(index--){var data=matchData[index];if((noCustomizer&&data[2])?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}
while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack;if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}
if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false;}}}
return true;}
function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}
var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}
function baseIsRegExp(value){return isObjectLike(value)&&baseGetTag(value)==regexpTag;}
function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag;}
function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}
function baseIteratee(value){if(typeof value=='function'){return value;}
if(value==null){return identity;}
if(typeof value=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}
return property(value);}
function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}
var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}
return result;}
function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}
var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}
return result;}
function baseLt(value,other){return value<other;}
function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result;}
function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}
return function(object){return object===source||baseIsMatch(object,source,matchData);};}
function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}
return function(object){var objValue=get(object,path);return(objValue===undefined&&objValue===srcValue)?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}
function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}
baseFor(source,function(srcValue,key){stack||(stack=new Stack);if(isObject(srcValue)){baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}
else{var newValue=customizer?customizer(safeGet(object,key),srcValue,(key+''),object,source,stack):undefined;if(newValue===undefined){newValue=srcValue;}
assignMergeValue(object,key,newValue);}},keysIn);}
function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=safeGet(object,key),srcValue=safeGet(source,key),stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}
var newValue=customizer?customizer(objValue,srcValue,(key+''),object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue;if(isArr||isBuff||isTyped){if(isArray(objValue)){newValue=objValue;}
else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}
else if(isBuff){isCommon=false;newValue=cloneBuffer(srcValue,true);}
else if(isTyped){isCommon=false;newValue=cloneTypedArray(srcValue,true);}
else{newValue=[];}}
else if(isPlainObject(srcValue)||isArguments(srcValue)){newValue=objValue;if(isArguments(objValue)){newValue=toPlainObject(objValue);}
else if(!isObject(objValue)||isFunction(objValue)){newValue=initCloneObject(srcValue);}}
else{isCommon=false;}}
if(isCommon){stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack['delete'](srcValue);}
assignMergeValue(object,key,newValue);}
function baseNth(array,n){var length=array.length;if(!length){return;}
n+=n<0?length:0;return isIndex(n,length)?array[n]:undefined;}
function baseOrderBy(collection,iteratees,orders){var index=-1;iteratees=arrayMap(iteratees.length?iteratees:[identity],baseUnary(getIteratee()));var result=baseMap(collection,function(value,key,collection){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value);});return{'criteria':criteria,'index':++index,'value':value};});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders);});}
function basePick(object,paths){return basePickBy(object,paths,function(value,path){return hasIn(object,path);});}
function basePickBy(object,paths,predicate){var index=-1,length=paths.length,result={};while(++index<length){var path=paths[index],value=baseGet(object,path);if(predicate(value,path)){baseSet(result,castPath(path,object),value);}}
return result;}
function basePropertyDeep(path){return function(object){return baseGet(object,path);};}
function basePullAll(array,values,iteratee,comparator){var indexOf=comparator?baseIndexOfWith:baseIndexOf,index=-1,length=values.length,seen=array;if(array===values){values=copyArray(values);}
if(iteratee){seen=arrayMap(array,baseUnary(iteratee));}
while(++index<length){var fromIndex=0,value=values[index],computed=iteratee?iteratee(value):value;while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){if(seen!==array){splice.call(seen,fromIndex,1);}
splice.call(array,fromIndex,1);}}
return array;}
function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice.call(array,index,1);}else{baseUnset(array,index);}}}
return array;}
function baseRandom(lower,upper){return lower+nativeFloor(nativeRandom()*(upper-lower+1));}
function baseRange(start,end,step,fromRight){var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);while(length--){result[fromRight?length:++index]=start;start+=step;}
return result;}
function baseRepeat(string,n){var result='';if(!string||n<1||n>MAX_SAFE_INTEGER){return result;}
do{if(n%2){result+=string;}
n=nativeFloor(n/2);if(n){string+=string;}}while(n);return result;}
function baseRest(func,start){return setToString(overRest(func,start,identity),func+'');}
function baseSample(collection){return arraySample(values(collection));}
function baseSampleSize(collection,n){var array=values(collection);return shuffleSelf(array,baseClamp(n,0,array.length));}
function baseSet(object,path,value,customizer){if(!isObject(object)){return object;}
path=castPath(path,object);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=isObject(objValue)?objValue:(isIndex(path[index+1])?[]:{});}}
assignValue(nested,key,newValue);nested=nested[key];}
return object;}
var baseSetData=!metaMap?identity:function(func,data){metaMap.set(func,data);return func;};var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};function baseShuffle(collection){return shuffleSelf(values(collection));}
function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:(length+start);}
end=end>length?length:end;if(end<0){end+=length;}
length=start>end?0:((end-start)>>>0);start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}
return result;}
function baseSome(collection,predicate){var result;baseEach(collection,function(value,index,collection){result=predicate(value,index,collection);return!result;});return!!result;}
function baseSortedIndex(array,value,retHighest){var low=0,high=array==null?low:array.length;if(typeof value=='number'&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){while(low<high){var mid=(low+high)>>>1,computed=array[mid];if(computed!==null&&!isSymbol(computed)&&(retHighest?(computed<=value):(computed<value))){low=mid+1;}else{high=mid;}}
return high;}
return baseSortedIndexBy(array,value,identity,retHighest);}
function baseSortedIndexBy(array,value,iteratee,retHighest){value=iteratee(value);var low=0,high=array==null?0:array.length,valIsNaN=value!==value,valIsNull=value===null,valIsSymbol=isSymbol(value),valIsUndefined=value===undefined;while(low<high){var mid=nativeFloor((low+high)/2),computed=iteratee(array[mid]),othIsDefined=computed!==undefined,othIsNull=computed===null,othIsReflexive=computed===computed,othIsSymbol=isSymbol(computed);if(valIsNaN){var setLow=retHighest||othIsReflexive;}else if(valIsUndefined){setLow=othIsReflexive&&(retHighest||othIsDefined);}else if(valIsNull){setLow=othIsReflexive&&othIsDefined&&(retHighest||!othIsNull);}else if(valIsSymbol){setLow=othIsReflexive&&othIsDefined&&!othIsNull&&(retHighest||!othIsSymbol);}else if(othIsNull||othIsSymbol){setLow=false;}else{setLow=retHighest?(computed<=value):(computed<value);}
if(setLow){low=mid+1;}else{high=mid;}}
return nativeMin(high,MAX_ARRAY_INDEX);}
function baseSortedUniq(array,iteratee){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;if(!index||!eq(computed,seen)){var seen=computed;result[resIndex++]=value===0?0:value;}}
return result;}
function baseToNumber(value){if(typeof value=='number'){return value;}
if(isSymbol(value)){return NAN;}
return+value;}
function baseToString(value){if(typeof value=='string'){return value;}
if(isArray(value)){return arrayMap(value,baseToString)+'';}
if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}
var result=(value+'');return(result=='0'&&(1/value)==-INFINITY)?'-0':result;}
function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}
else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set);}
isCommon=false;includes=cacheHas;seen=new SetCache;}
else{seen=iteratee?[]:result;}
outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=(comparator||value!==0)?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}
if(iteratee){seen.push(computed);}
result.push(value);}
else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}
result.push(value);}}
return result;}
function baseUnset(object,path){path=castPath(path,object);object=parent(object,path);return object==null||delete object[toKey(last(path))];}
function baseUpdate(object,path,updater,customizer){return baseSet(object,path,updater(baseGet(object,path)),customizer);}
function baseWhile(array,predicate,isDrop,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)&&predicate(array[index],index,array)){}
return isDrop?baseSlice(array,(fromRight?0:index),(fromRight?index+1:length)):baseSlice(array,(fromRight?index+1:0),(fromRight?length:index));}
function baseWrapperValue(value,actions){var result=value;if(result instanceof LazyWrapper){result=result.value();}
return arrayReduce(actions,function(result,action){return action.func.apply(action.thisArg,arrayPush([result],action.args));},result);}
function baseXor(arrays,iteratee,comparator){var length=arrays.length;if(length<2){return length?baseUniq(arrays[0]):[];}
var index=-1,result=Array(length);while(++index<length){var array=arrays[index],othIndex=-1;while(++othIndex<length){if(othIndex!=index){result[index]=baseDifference(result[index]||array,arrays[othIndex],iteratee,comparator);}}}
return baseUniq(baseFlatten(result,1),iteratee,comparator);}
function baseZipObject(props,values,assignFunc){var index=-1,length=props.length,valsLength=values.length,result={};while(++index<length){var value=index<valsLength?values[index]:undefined;assignFunc(result,props[index],value);}
return result;}
function castArrayLikeObject(value){return isArrayLikeObject(value)?value:[];}
function castFunction(value){return typeof value=='function'?value:identity;}
function castPath(value,object){if(isArray(value)){return value;}
return isKey(value,object)?[value]:stringToPath(toString(value));}
var castRest=baseRest;function castSlice(array,start,end){var length=array.length;end=end===undefined?length:end;return(!start&&end>=length)?array:baseSlice(array,start,end);}
var clearTimeout=ctxClearTimeout||function(id){return root.clearTimeout(id);};function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}
var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}
function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}
function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}
function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}
function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}
function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}
function compareAscending(value,other){if(value!==other){var valIsDefined=value!==undefined,valIsNull=value===null,valIsReflexive=value===value,valIsSymbol=isSymbol(value);var othIsDefined=other!==undefined,othIsNull=other===null,othIsReflexive=other===other,othIsSymbol=isSymbol(other);if((!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other)||(valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol)||(valIsNull&&othIsDefined&&othIsReflexive)||(!valIsDefined&&othIsReflexive)||!valIsReflexive){return 1;}
if((!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other)||(othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol)||(othIsNull&&valIsDefined&&valIsReflexive)||(!othIsDefined&&valIsReflexive)||!othIsReflexive){return-1;}}
return 0;}
function compareMultiple(object,other,orders){var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){var result=compareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result;}
var order=orders[index];return result*(order=='desc'?-1:1);}}
return object.index-other.index;}
function composeArgs(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersLength=holders.length,leftIndex=-1,leftLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(leftLength+rangeLength),isUncurried=!isCurried;while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex];}
while(++argsIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[holders[argsIndex]]=args[argsIndex];}}
while(rangeLength--){result[leftIndex++]=args[argsIndex++];}
return result;}
function composeArgsRight(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersIndex=-1,holdersLength=holders.length,rightIndex=-1,rightLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(rangeLength+rightLength),isUncurried=!isCurried;while(++argsIndex<rangeLength){result[argsIndex]=args[argsIndex];}
var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex];}
while(++holdersIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[offset+holders[holdersIndex]]=args[argsIndex++];}}
return result;}
function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}
return array;}
function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}
if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}
return object;}
function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}
function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object);}
function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,getIteratee(iteratee,2),accumulator);};}
function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=(assigner.length>3&&typeof customizer=='function')?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}
object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}
return object;});}
function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}
if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}
var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while((fromRight?index--:++index<length)){if(iteratee(iterable[index],index,iterable)===false){break;}}
return collection;};}
function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}
return object;};}
function createBind(func,bitmask,thisArg){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var fn=(this&&this!==root&&this instanceof wrapper)?Ctor:func;return fn.apply(isBind?thisArg:this,arguments);}
return wrapper;}
function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=hasUnicode(string)?stringToArray(string):undefined;var chr=strSymbols?strSymbols[0]:string.charAt(0);var trailing=strSymbols?castSlice(strSymbols,1).join(''):string.slice(1);return chr[methodName]()+trailing;};}
function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,'')),callback,'');};}
function createCtor(Ctor){return function(){var args=arguments;switch(args.length){case 0:return new Ctor;case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);}
var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);return isObject(result)?result:thisBinding;};}
function createCurry(func,bitmask,arity){var Ctor=createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length,placeholder=getHolder(wrapper);while(index--){args[index]=arguments[index];}
var holders=(length<3&&args[0]!==placeholder&&args[length-1]!==placeholder)?[]:replaceHolders(args,placeholder);length-=holders.length;if(length<arity){return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,undefined,args,holders,undefined,undefined,arity-length);}
var fn=(this&&this!==root&&this instanceof wrapper)?Ctor:func;return apply(fn,this,args);}
return wrapper;}
function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=getIteratee(predicate,3);collection=keys(collection);predicate=function(key){return iteratee(iterable[key],key,iterable);};}
var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined;};}
function createFlow(fromRight){return flatRest(function(funcs){var length=funcs.length,index=length,prereq=LodashWrapper.prototype.thru;if(fromRight){funcs.reverse();}
while(index--){var func=funcs[index];if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
if(prereq&&!wrapper&&getFuncName(func)=='wrapper'){var wrapper=new LodashWrapper([],true);}}
index=wrapper?index:length;while(++index<length){func=funcs[index];var funcName=getFuncName(func),data=funcName=='wrapper'?getData(func):undefined;if(data&&isLaziable(data[0])&&data[1]==(WRAP_ARY_FLAG|WRAP_CURRY_FLAG|WRAP_PARTIAL_FLAG|WRAP_REARG_FLAG)&&!data[4].length&&data[9]==1){wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3]);}else{wrapper=(func.length==1&&isLaziable(func))?wrapper[funcName]():wrapper.thru(func);}}
return function(){var args=arguments,value=args[0];if(wrapper&&args.length==1&&isArray(value)){return wrapper.plant(value).value();}
var index=0,result=length?funcs[index].apply(this,args):value;while(++index<length){result=funcs[index].call(this,result);}
return result;};});}
function createHybrid(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&WRAP_ARY_FLAG,isBind=bitmask&WRAP_BIND_FLAG,isBindKey=bitmask&WRAP_BIND_KEY_FLAG,isCurried=bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG),isFlip=bitmask&WRAP_FLIP_FLAG,Ctor=isBindKey?undefined:createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length;while(index--){args[index]=arguments[index];}
if(isCurried){var placeholder=getHolder(wrapper),holdersCount=countHolders(args,placeholder);}
if(partials){args=composeArgs(args,partials,holders,isCurried);}
if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight,isCurried);}
length-=holdersCount;if(isCurried&&length<arity){var newHolders=replaceHolders(args,placeholder);return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,thisArg,args,newHolders,argPos,ary,arity-length);}
var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;length=args.length;if(argPos){args=reorder(args,argPos);}else if(isFlip&&length>1){args.reverse();}
if(isAry&&ary<length){args.length=ary;}
if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtor(fn);}
return fn.apply(thisBinding,args);}
return wrapper;}
function createInverter(setter,toIteratee){return function(object,iteratee){return baseInverter(object,setter,toIteratee(iteratee),{});};}
function createMathOperation(operator,defaultValue){return function(value,other){var result;if(value===undefined&&other===undefined){return defaultValue;}
if(value!==undefined){result=value;}
if(other!==undefined){if(result===undefined){return other;}
if(typeof value=='string'||typeof other=='string'){value=baseToString(value);other=baseToString(other);}else{value=baseToNumber(value);other=baseToNumber(other);}
result=operator(value,other);}
return result;};}
function createOver(arrayFunc){return flatRest(function(iteratees){iteratees=arrayMap(iteratees,baseUnary(getIteratee()));return baseRest(function(args){var thisArg=this;return arrayFunc(iteratees,function(iteratee){return apply(iteratee,thisArg,args);});});});}
function createPadding(length,chars){chars=chars===undefined?' ':baseToString(chars);var charsLength=chars.length;if(charsLength<2){return charsLength?baseRepeat(chars,length):chars;}
var result=baseRepeat(chars,nativeCeil(length/stringSize(chars)));return hasUnicode(chars)?castSlice(stringToArray(result),0,length).join(''):result.slice(0,length);}
function createPartial(func,bitmask,thisArg,partials){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength),fn=(this&&this!==root&&this instanceof wrapper)?Ctor:func;while(++leftIndex<leftLength){args[leftIndex]=partials[leftIndex];}
while(argsLength--){args[leftIndex++]=arguments[++argsIndex];}
return apply(fn,isBind?thisArg:this,args);}
return wrapper;}
function createRange(fromRight){return function(start,end,step){if(step&&typeof step!='number'&&isIterateeCall(start,end,step)){end=step=undefined;}
start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}
step=step===undefined?(start<end?1:-1):toFinite(step);return baseRange(start,end,step,fromRight);};}
function createRelationalOperation(operator){return function(value,other){if(!(typeof value=='string'&&typeof other=='string')){value=toNumber(value);other=toNumber(other);}
return operator(value,other);};}
function createRecurry(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){var isCurry=bitmask&WRAP_CURRY_FLAG,newHolders=isCurry?holders:undefined,newHoldersRight=isCurry?undefined:holders,newPartials=isCurry?partials:undefined,newPartialsRight=isCurry?undefined:partials;bitmask|=(isCurry?WRAP_PARTIAL_FLAG:WRAP_PARTIAL_RIGHT_FLAG);bitmask&=~(isCurry?WRAP_PARTIAL_RIGHT_FLAG:WRAP_PARTIAL_FLAG);if(!(bitmask&WRAP_CURRY_BOUND_FLAG)){bitmask&=~(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG);}
var newData=[func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,newHoldersRight,argPos,ary,arity];var result=wrapFunc.apply(undefined,newData);if(isLaziable(func)){setData(result,newData);}
result.placeholder=placeholder;return setWrapToString(result,func,bitmask);}
function createRound(methodName){var func=Math[methodName];return function(number,precision){number=toNumber(number);precision=precision==null?0:nativeMin(toInteger(precision),292);if(precision&&nativeIsFinite(number)){var pair=(toString(number)+'e').split('e'),value=func(pair[0]+'e'+(+pair[1]+precision));pair=(toString(value)+'e').split('e');return+(pair[0]+'e'+(+pair[1]-precision));}
return func(number);};}
var createSet=!(Set&&(1/setToArray(new Set([,-0]))[1])==INFINITY)?noop:function(values){return new Set(values);};function createToPairs(keysFunc){return function(object){var tag=getTag(object);if(tag==mapTag){return mapToArray(object);}
if(tag==setTag){return setToPairs(object);}
return baseToPairs(object,keysFunc(object));};}
function createWrap(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&WRAP_BIND_KEY_FLAG;if(!isBindKey&&typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
var length=partials?partials.length:0;if(!length){bitmask&=~(WRAP_PARTIAL_FLAG|WRAP_PARTIAL_RIGHT_FLAG);partials=holders=undefined;}
ary=ary===undefined?ary:nativeMax(toInteger(ary),0);arity=arity===undefined?arity:toInteger(arity);length-=holders?holders.length:0;if(bitmask&WRAP_PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;partials=holders=undefined;}
var data=isBindKey?undefined:getData(func);var newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];if(data){mergeData(newData,data);}
func=newData[0];bitmask=newData[1];thisArg=newData[2];partials=newData[3];holders=newData[4];arity=newData[9]=newData[9]===undefined?(isBindKey?0:func.length):nativeMax(newData[9]-length,0);if(!arity&&bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG)){bitmask&=~(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG);}
if(!bitmask||bitmask==WRAP_BIND_FLAG){var result=createBind(func,bitmask,thisArg);}else if(bitmask==WRAP_CURRY_FLAG||bitmask==WRAP_CURRY_RIGHT_FLAG){result=createCurry(func,bitmask,arity);}else if((bitmask==WRAP_PARTIAL_FLAG||bitmask==(WRAP_BIND_FLAG|WRAP_PARTIAL_FLAG))&&!holders.length){result=createPartial(func,bitmask,thisArg,partials);}else{result=createHybrid.apply(undefined,newData);}
var setter=data?baseSetData:setData;return setWrapToString(setter(result,newData),func,bitmask);}
function customDefaultsAssignIn(objValue,srcValue,key,object){if(objValue===undefined||(eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key))){return srcValue;}
return objValue;}
function customDefaultsMerge(objValue,srcValue,key,object,source,stack){if(isObject(objValue)&&isObject(srcValue)){stack.set(srcValue,objValue);baseMerge(objValue,srcValue,undefined,customDefaultsMerge,stack);stack['delete'](srcValue);}
return objValue;}
function customOmitClone(value){return isPlainObject(value)?undefined:value;}
function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}
var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other;}
var index=-1,result=true,seen=(bitmask&COMPARE_UNORDERED_FLAG)?new SetCache:undefined;stack.set(array,other);stack.set(other,array);while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}
if(compared!==undefined){if(compared){continue;}
result=false;break;}
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}
stack['delete'](array);stack['delete'](other);return result;}
function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if((object.byteLength!=other.byteLength)||(object.byteOffset!=other.byteOffset)){return false;}
object=object.buffer;other=other.buffer;case arrayBufferTag:if((object.byteLength!=other.byteLength)||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}
return true;case boolTag:case dateTag:case numberTag:return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:return object==(other+'');case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}
var stacked=stack.get(object);if(stacked){return stacked==other;}
bitmask|=COMPARE_UNORDERED_FLAG;stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}
return false;}
function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}
var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}
var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other;}
var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}
if(!(compared===undefined?(objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack)):compared)){result=false;break;}
skipCtor||(skipCtor=key=='constructor');}
if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;if(objCtor!=othCtor&&('constructor'in object&&'constructor'in other)&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}
stack['delete'](object);stack['delete'](other);return result;}
function flatRest(func){return setToString(overRest(func,undefined,flatten),func+'');}
function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}
function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}
var getData=!metaMap?noop:function(func){return metaMap.get(func);};function getFuncName(func){var result=(func.name+''),array=realNames[result],length=hasOwnProperty.call(realNames,result)?array.length:0;while(length--){var data=array[length],otherFunc=data.func;if(otherFunc==null||otherFunc==func){return data.name;}}
return result;}
function getHolder(func){var object=hasOwnProperty.call(lodash,'placeholder')?lodash:func;return object.placeholder;}
function getIteratee(){var result=lodash.iteratee||iteratee;result=result===iteratee?baseIteratee:result;return arguments.length?result(arguments[0],arguments[1]):result;}
function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}
function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}
return result;}
function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}
function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}
var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}
return result;}
var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}
object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}
return result;};var getTag=baseGetTag;if((DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag)||(Map&&getTag(new Map)!=mapTag)||(Promise&&getTag(Promise.resolve())!=promiseTag)||(Set&&getTag(new Set)!=setTag)||(WeakMap&&getTag(new WeakMap)!=weakMapTag)){getTag=function(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}
return result;};}
function getView(start,end,transforms){var index=-1,length=transforms.length;while(++index<length){var data=transforms[index],size=data.size;switch(data.type){case 'drop':start+=size;break;case 'dropRight':end-=size;break;case 'take':end=nativeMin(end,start+size);break;case 'takeRight':start=nativeMax(start,end-size);break;}}
return{'start':start,'end':end};}
function getWrapDetails(source){var match=source.match(reWrapDetails);return match?match[1].split(reSplitDetails):[];}
function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}
object=object[key];}
if(result||++index!=length){return result;}
length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}
function initCloneArray(array){var length=array.length,result=new array.constructor(length);if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}
return result;}
function initCloneObject(object){return(typeof object.constructor=='function'&&!isPrototype(object))?baseCreate(getPrototype(object)):{};}
function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return new Ctor;case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return new Ctor;case symbolTag:return cloneSymbol(object);}}
function insertWrapDetails(source,details){var length=details.length;if(!length){return source;}
var lastIndex=length-1;details[lastIndex]=(length>1?'& ':'')+details[lastIndex];details=details.join(length>2?', ':' ');return source.replace(reWrapComment,'{\n/* [wrapped with '+details+'] */\n');}
function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}
function isIndex(value,length){var type=typeof value;length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(type=='number'||(type!='symbol'&&reIsUint.test(value)))&&(value>-1&&value%1==0&&value<length);}
function isIterateeCall(value,index,object){if(!isObject(object)){return false;}
var type=typeof index;if(type=='number'?(isArrayLike(object)&&isIndex(index,object.length)):(type=='string'&&index in object)){return eq(object[index],value);}
return false;}
function isKey(value,object){if(isArray(value)){return false;}
var type=typeof value;if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}
return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||(object!=null&&value in Object(object));}
function isKeyable(value){var type=typeof value;return(type=='string'||type=='number'||type=='symbol'||type=='boolean')?(value!=='__proto__'):(value===null);}
function isLaziable(func){var funcName=getFuncName(func),other=lodash[funcName];if(typeof other!='function'||!(funcName in LazyWrapper.prototype)){return false;}
if(func===other){return true;}
var data=getData(other);return!!data&&func===data[0];}
function isMasked(func){return!!maskSrcKey&&(maskSrcKey in func);}
var isMaskable=coreJsData?isFunction:stubFalse;function isPrototype(value){var Ctor=value&&value.constructor,proto=(typeof Ctor=='function'&&Ctor.prototype)||objectProto;return value===proto;}
function isStrictComparable(value){return value===value&&!isObject(value);}
function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}
return object[key]===srcValue&&(srcValue!==undefined||(key in Object(object)));};}
function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}
return key;});var cache=result.cache;return result;}
function mergeData(data,source){var bitmask=data[1],srcBitmask=source[1],newBitmask=bitmask|srcBitmask,isCommon=newBitmask<(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG|WRAP_ARY_FLAG);var isCombo=((srcBitmask==WRAP_ARY_FLAG)&&(bitmask==WRAP_CURRY_FLAG))||((srcBitmask==WRAP_ARY_FLAG)&&(bitmask==WRAP_REARG_FLAG)&&(data[7].length<=source[8]))||((srcBitmask==(WRAP_ARY_FLAG|WRAP_REARG_FLAG))&&(source[7].length<=source[8])&&(bitmask==WRAP_CURRY_FLAG));if(!(isCommon||isCombo)){return data;}
if(srcBitmask&WRAP_BIND_FLAG){data[2]=source[2];newBitmask|=bitmask&WRAP_BIND_FLAG?0:WRAP_CURRY_BOUND_FLAG;}
var value=source[3];if(value){var partials=data[3];data[3]=partials?composeArgs(partials,value,source[4]):value;data[4]=partials?replaceHolders(data[3],PLACEHOLDER):source[4];}
value=source[5];if(value){partials=data[5];data[5]=partials?composeArgsRight(partials,value,source[6]):value;data[6]=partials?replaceHolders(data[5],PLACEHOLDER):source[6];}
value=source[7];if(value){data[7]=value;}
if(srcBitmask&WRAP_ARY_FLAG){data[8]=data[8]==null?source[8]:nativeMin(data[8],source[8]);}
if(data[9]==null){data[9]=source[9];}
data[0]=source[0];data[1]=newBitmask;return data;}
function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}
return result;}
function objectToString(value){return nativeObjectToString.call(value);}
function overRest(func,start,transform){start=nativeMax(start===undefined?(func.length-1):start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}
index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}
otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}
function parent(object,path){return path.length<2?object:baseGet(object,baseSlice(path,0,-1));}
function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=copyArray(array);while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined;}
return array;}
function safeGet(object,key){if(key==='constructor'&&typeof object[key]==='function'){return;}
if(key=='__proto__'){return;}
return object[key];}
var setData=shortOut(baseSetData);var setTimeout=ctxSetTimeout||function(func,wait){return root.setTimeout(func,wait);};var setToString=shortOut(baseSetToString);function setWrapToString(wrapper,reference,bitmask){var source=(reference+'');return setToString(wrapper,insertWrapDetails(source,updateWrapDetails(getWrapDetails(source),bitmask)));}
function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}
return func.apply(undefined,arguments);};}
function shuffleSelf(array,size){var index=-1,length=array.length,lastIndex=length-1;size=size===undefined?length:size;while(++index<size){var rand=baseRandom(index,lastIndex),value=array[rand];array[rand]=array[index];array[index]=value;}
array.length=size;return array;}
var stringToPath=memoizeCapped(function(string){var result=[];if(string.charCodeAt(0)===46){result.push('');}
string.replace(rePropName,function(match,number,quote,subString){result.push(quote?subString.replace(reEscapeChar,'$1'):(number||match));});return result;});function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}
var result=(value+'');return(result=='0'&&(1/value)==-INFINITY)?'-0':result;}
function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}
try{return(func+'');}catch(e){}}
return '';}
function updateWrapDetails(details,bitmask){arrayEach(wrapFlags,function(pair){var value='_.'+pair[0];if((bitmask&pair[1])&&!arrayIncludes(details,value)){details.push(value);}});return details.sort();}
function wrapperClone(wrapper){if(wrapper instanceof LazyWrapper){return wrapper.clone();}
var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);result.__actions__=copyArray(wrapper.__actions__);result.__index__=wrapper.__index__;result.__values__=wrapper.__values__;return result;}
function chunk(array,size,guard){if((guard?isIterateeCall(array,size,guard):size===undefined)){size=1;}else{size=nativeMax(toInteger(size),0);}
var length=array==null?0:array.length;if(!length||size<1){return[];}
var index=0,resIndex=0,result=Array(nativeCeil(length/size));while(index<length){result[resIndex++]=baseSlice(array,index,(index+=size));}
return result;}
function compact(array){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value){result[resIndex++]=value;}}
return result;}
function concat(){var length=arguments.length;if(!length){return[];}
var args=Array(length-1),array=arguments[0],index=length;while(index--){args[index-1]=arguments[index];}
return arrayPush(isArray(array)?copyArray(array):[array],baseFlatten(args,1));}
var difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[];});var differenceBy=baseRest(function(array,values){var iteratee=last(values);if(isArrayLikeObject(iteratee)){iteratee=undefined;}
return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),getIteratee(iteratee,2)):[];});var differenceWith=baseRest(function(array,values){var comparator=last(values);if(isArrayLikeObject(comparator)){comparator=undefined;}
return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),undefined,comparator):[];});function drop(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}
n=(guard||n===undefined)?1:toInteger(n);return baseSlice(array,n<0?0:n,length);}
function dropRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}
n=(guard||n===undefined)?1:toInteger(n);n=length-n;return baseSlice(array,0,n<0?0:n);}
function dropRightWhile(array,predicate){return(array&&array.length)?baseWhile(array,getIteratee(predicate,3),true,true):[];}
function dropWhile(array,predicate){return(array&&array.length)?baseWhile(array,getIteratee(predicate,3),true):[];}
function fill(array,value,start,end){var length=array==null?0:array.length;if(!length){return[];}
if(start&&typeof start!='number'&&isIterateeCall(array,value,start)){start=0;end=length;}
return baseFill(array,value,start,end);}
function findIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}
var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}
return baseFindIndex(array,getIteratee(predicate,3),index);}
function findLastIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}
var index=length-1;if(fromIndex!==undefined){index=toInteger(fromIndex);index=fromIndex<0?nativeMax(length+index,0):nativeMin(index,length-1);}
return baseFindIndex(array,getIteratee(predicate,3),index,true);}
function flatten(array){var length=array==null?0:array.length;return length?baseFlatten(array,1):[];}
function flattenDeep(array){var length=array==null?0:array.length;return length?baseFlatten(array,INFINITY):[];}
function flattenDepth(array,depth){var length=array==null?0:array.length;if(!length){return[];}
depth=depth===undefined?1:toInteger(depth);return baseFlatten(array,depth);}
function fromPairs(pairs){var index=-1,length=pairs==null?0:pairs.length,result={};while(++index<length){var pair=pairs[index];result[pair[0]]=pair[1];}
return result;}
function head(array){return(array&&array.length)?array[0]:undefined;}
function indexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}
var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}
return baseIndexOf(array,value,index);}
function initial(array){var length=array==null?0:array.length;return length?baseSlice(array,0,-1):[];}
var intersection=baseRest(function(arrays){var mapped=arrayMap(arrays,castArrayLikeObject);return(mapped.length&&mapped[0]===arrays[0])?baseIntersection(mapped):[];});var intersectionBy=baseRest(function(arrays){var iteratee=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(iteratee===last(mapped)){iteratee=undefined;}else{mapped.pop();}
return(mapped.length&&mapped[0]===arrays[0])?baseIntersection(mapped,getIteratee(iteratee,2)):[];});var intersectionWith=baseRest(function(arrays){var comparator=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);comparator=typeof comparator=='function'?comparator:undefined;if(comparator){mapped.pop();}
return(mapped.length&&mapped[0]===arrays[0])?baseIntersection(mapped,undefined,comparator):[];});function join(array,separator){return array==null?'':nativeJoin.call(array,separator);}
function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined;}
function lastIndexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}
var index=length;if(fromIndex!==undefined){index=toInteger(fromIndex);index=index<0?nativeMax(length+index,0):nativeMin(index,length-1);}
return value===value?strictLastIndexOf(array,value,index):baseFindIndex(array,baseIsNaN,index,true);}
function nth(array,n){return(array&&array.length)?baseNth(array,toInteger(n)):undefined;}
var pull=baseRest(pullAll);function pullAll(array,values){return(array&&array.length&&values&&values.length)?basePullAll(array,values):array;}
function pullAllBy(array,values,iteratee){return(array&&array.length&&values&&values.length)?basePullAll(array,values,getIteratee(iteratee,2)):array;}
function pullAllWith(array,values,comparator){return(array&&array.length&&values&&values.length)?basePullAll(array,values,undefined,comparator):array;}
var pullAt=flatRest(function(array,indexes){var length=array==null?0:array.length,result=baseAt(array,indexes);basePullAt(array,arrayMap(indexes,function(index){return isIndex(index,length)?+index:index;}).sort(compareAscending));return result;});function remove(array,predicate){var result=[];if(!(array&&array.length)){return result;}
var index=-1,indexes=[],length=array.length;predicate=getIteratee(predicate,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index);}}
basePullAt(array,indexes);return result;}
function reverse(array){return array==null?array:nativeReverse.call(array);}
function slice(array,start,end){var length=array==null?0:array.length;if(!length){return[];}
if(end&&typeof end!='number'&&isIterateeCall(array,start,end)){start=0;end=length;}
else{start=start==null?0:toInteger(start);end=end===undefined?length:toInteger(end);}
return baseSlice(array,start,end);}
function sortedIndex(array,value){return baseSortedIndex(array,value);}
function sortedIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2));}
function sortedIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value);if(index<length&&eq(array[index],value)){return index;}}
return-1;}
function sortedLastIndex(array,value){return baseSortedIndex(array,value,true);}
function sortedLastIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2),true);}
function sortedLastIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value,true)-1;if(eq(array[index],value)){return index;}}
return-1;}
function sortedUniq(array){return(array&&array.length)?baseSortedUniq(array):[];}
function sortedUniqBy(array,iteratee){return(array&&array.length)?baseSortedUniq(array,getIteratee(iteratee,2)):[];}
function tail(array){var length=array==null?0:array.length;return length?baseSlice(array,1,length):[];}
function take(array,n,guard){if(!(array&&array.length)){return[];}
n=(guard||n===undefined)?1:toInteger(n);return baseSlice(array,0,n<0?0:n);}
function takeRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}
n=(guard||n===undefined)?1:toInteger(n);n=length-n;return baseSlice(array,n<0?0:n,length);}
function takeRightWhile(array,predicate){return(array&&array.length)?baseWhile(array,getIteratee(predicate,3),false,true):[];}
function takeWhile(array,predicate){return(array&&array.length)?baseWhile(array,getIteratee(predicate,3)):[];}
var union=baseRest(function(arrays){return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true));});var unionBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}
return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),getIteratee(iteratee,2));});var unionWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined;return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),undefined,comparator);});function uniq(array){return(array&&array.length)?baseUniq(array):[];}
function uniqBy(array,iteratee){return(array&&array.length)?baseUniq(array,getIteratee(iteratee,2)):[];}
function uniqWith(array,comparator){comparator=typeof comparator=='function'?comparator:undefined;return(array&&array.length)?baseUniq(array,undefined,comparator):[];}
function unzip(array){if(!(array&&array.length)){return[];}
var length=0;array=arrayFilter(array,function(group){if(isArrayLikeObject(group)){length=nativeMax(group.length,length);return true;}});return baseTimes(length,function(index){return arrayMap(array,baseProperty(index));});}
function unzipWith(array,iteratee){if(!(array&&array.length)){return[];}
var result=unzip(array);if(iteratee==null){return result;}
return arrayMap(result,function(group){return apply(iteratee,undefined,group);});}
var without=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[];});var xor=baseRest(function(arrays){return baseXor(arrayFilter(arrays,isArrayLikeObject));});var xorBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}
return baseXor(arrayFilter(arrays,isArrayLikeObject),getIteratee(iteratee,2));});var xorWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined;return baseXor(arrayFilter(arrays,isArrayLikeObject),undefined,comparator);});var zip=baseRest(unzip);function zipObject(props,values){return baseZipObject(props||[],values||[],assignValue);}
function zipObjectDeep(props,values){return baseZipObject(props||[],values||[],baseSet);}
var zipWith=baseRest(function(arrays){var length=arrays.length,iteratee=length>1?arrays[length-1]:undefined;iteratee=typeof iteratee=='function'?(arrays.pop(),iteratee):undefined;return unzipWith(arrays,iteratee);});function chain(value){var result=lodash(value);result.__chain__=true;return result;}
function tap(value,interceptor){interceptor(value);return value;}
function thru(value,interceptor){return interceptor(value);}
var wrapperAt=flatRest(function(paths){var length=paths.length,start=length?paths[0]:0,value=this.__wrapped__,interceptor=function(object){return baseAt(object,paths);};if(length>1||this.__actions__.length||!(value instanceof LazyWrapper)||!isIndex(start)){return this.thru(interceptor);}
value=value.slice(start,+start+(length?1:0));value.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(value,this.__chain__).thru(function(array){if(length&&!array.length){array.push(undefined);}
return array;});});function wrapperChain(){return chain(this);}
function wrapperCommit(){return new LodashWrapper(this.value(),this.__chain__);}
function wrapperNext(){if(this.__values__===undefined){this.__values__=toArray(this.value());}
var done=this.__index__>=this.__values__.length,value=done?undefined:this.__values__[this.__index__++];return{'done':done,'value':value};}
function wrapperToIterator(){return this;}
function wrapperPlant(value){var result,parent=this;while(parent instanceof baseLodash){var clone=wrapperClone(parent);clone.__index__=0;clone.__values__=undefined;if(result){previous.__wrapped__=clone;}else{result=clone;}
var previous=clone;parent=parent.__wrapped__;}
previous.__wrapped__=value;return result;}
function wrapperReverse(){var value=this.__wrapped__;if(value instanceof LazyWrapper){var wrapped=value;if(this.__actions__.length){wrapped=new LazyWrapper(this);}
wrapped=wrapped.reverse();wrapped.__actions__.push({'func':thru,'args':[reverse],'thisArg':undefined});return new LodashWrapper(wrapped,this.__chain__);}
return this.thru(reverse);}
function wrapperValue(){return baseWrapperValue(this.__wrapped__,this.__actions__);}
var countBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){++result[key];}else{baseAssignValue(result,key,1);}});function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}
return func(collection,getIteratee(predicate,3));}
function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,getIteratee(predicate,3));}
var find=createFind(findIndex);var findLast=createFind(findLastIndex);function flatMap(collection,iteratee){return baseFlatten(map(collection,iteratee),1);}
function flatMapDeep(collection,iteratee){return baseFlatten(map(collection,iteratee),INFINITY);}
function flatMapDepth(collection,iteratee,depth){depth=depth===undefined?1:toInteger(depth);return baseFlatten(map(collection,iteratee),depth);}
function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,getIteratee(iteratee,3));}
function forEachRight(collection,iteratee){var func=isArray(collection)?arrayEachRight:baseEachRight;return func(collection,getIteratee(iteratee,3));}
var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){result[key].push(value);}else{baseAssignValue(result,key,[value]);}});function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=(fromIndex&&!guard)?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0);}
return isString(collection)?(fromIndex<=length&&collection.indexOf(value,fromIndex)>-1):(!!length&&baseIndexOf(collection,value,fromIndex)>-1);}
var invokeMap=baseRest(function(collection,path,args){var index=-1,isFunc=typeof path=='function',result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value){result[++index]=isFunc?apply(path,value,args):baseInvoke(value,path,args);});return result;});var keyBy=createAggregator(function(result,value,key){baseAssignValue(result,key,value);});function map(collection,iteratee){var func=isArray(collection)?arrayMap:baseMap;return func(collection,getIteratee(iteratee,3));}
function orderBy(collection,iteratees,orders,guard){if(collection==null){return[];}
if(!isArray(iteratees)){iteratees=iteratees==null?[]:[iteratees];}
orders=guard?undefined:orders;if(!isArray(orders)){orders=orders==null?[]:[orders];}
return baseOrderBy(collection,iteratees,orders);}
var partition=createAggregator(function(result,value,key){result[key?0:1].push(value);},function(){return[[],[]];});function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEach);}
function reduceRight(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduceRight:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEachRight);}
function reject(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,negate(getIteratee(predicate,3)));}
function sample(collection){var func=isArray(collection)?arraySample:baseSample;return func(collection);}
function sampleSize(collection,n,guard){if((guard?isIterateeCall(collection,n,guard):n===undefined)){n=1;}else{n=toInteger(n);}
var func=isArray(collection)?arraySampleSize:baseSampleSize;return func(collection,n);}
function shuffle(collection){var func=isArray(collection)?arrayShuffle:baseShuffle;return func(collection);}
function size(collection){if(collection==null){return 0;}
if(isArrayLike(collection)){return isString(collection)?stringSize(collection):collection.length;}
var tag=getTag(collection);if(tag==mapTag||tag==setTag){return collection.size;}
return baseKeys(collection).length;}
function some(collection,predicate,guard){var func=isArray(collection)?arraySome:baseSome;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}
return func(collection,getIteratee(predicate,3));}
var sortBy=baseRest(function(collection,iteratees){if(collection==null){return[];}
var length=iteratees.length;if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){iteratees=[];}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){iteratees=[iteratees[0]];}
return baseOrderBy(collection,baseFlatten(iteratees,1),[]);});var now=ctxNow||function(){return root.Date.now();};function after(n,func){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
n=toInteger(n);return function(){if(--n<1){return func.apply(this,arguments);}};}
function ary(func,n,guard){n=guard?undefined:n;n=(func&&n==null)?func.length:n;return createWrap(func,WRAP_ARY_FLAG,undefined,undefined,undefined,undefined,n);}
function before(n,func){var result;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
n=toInteger(n);return function(){if(--n>0){result=func.apply(this,arguments);}
if(n<=1){func=undefined;}
return result;};}
var bind=baseRest(function(func,thisArg,partials){var bitmask=WRAP_BIND_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bind));bitmask|=WRAP_PARTIAL_FLAG;}
return createWrap(func,bitmask,thisArg,partials,holders);});var bindKey=baseRest(function(object,key,partials){var bitmask=WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bindKey));bitmask|=WRAP_PARTIAL_FLAG;}
return createWrap(key,bitmask,object,partials,holders);});function curry(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curry.placeholder;return result;}
function curryRight(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_RIGHT_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curryRight.placeholder;return result;}
function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}
function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}
function leadingEdge(time){lastInvokeTime=time;timerId=setTimeout(timerExpired,wait);return leading?invokeFunc(time):result;}
function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,timeWaiting=wait-timeSinceLastCall;return maxing?nativeMin(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting;}
function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;return(lastCallTime===undefined||(timeSinceLastCall>=wait)||(timeSinceLastCall<0)||(maxing&&timeSinceLastInvoke>=maxWait));}
function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time);}
timerId=setTimeout(timerExpired,remainingWait(time));}
function trailingEdge(time){timerId=undefined;if(trailing&&lastArgs){return invokeFunc(time);}
lastArgs=lastThis=undefined;return result;}
function cancel(){if(timerId!==undefined){clearTimeout(timerId);}
lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined;}
function flush(){return timerId===undefined?result:trailingEdge(now());}
function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime);}
if(maxing){clearTimeout(timerId);timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}
if(timerId===undefined){timerId=setTimeout(timerExpired,wait);}
return result;}
debounced.cancel=cancel;debounced.flush=flush;return debounced;}
var defer=baseRest(function(func,args){return baseDelay(func,1,args);});var delay=baseRest(function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args);});function flip(func){return createWrap(func,WRAP_FLIP_FLAG);}
function memoize(func,resolver){if(typeof func!='function'||(resolver!=null&&typeof resolver!='function')){throw new TypeError(FUNC_ERROR_TEXT);}
var memoized=function(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}
var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache);return memoized;}
memoize.Cache=MapCache;function negate(predicate){if(typeof predicate!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
return function(){var args=arguments;switch(args.length){case 0:return!predicate.call(this);case 1:return!predicate.call(this,args[0]);case 2:return!predicate.call(this,args[0],args[1]);case 3:return!predicate.call(this,args[0],args[1],args[2]);}
return!predicate.apply(this,args);};}
function once(func){return before(2,func);}
var overArgs=castRest(function(func,transforms){transforms=(transforms.length==1&&isArray(transforms[0]))?arrayMap(transforms[0],baseUnary(getIteratee())):arrayMap(baseFlatten(transforms,1),baseUnary(getIteratee()));var funcsLength=transforms.length;return baseRest(function(args){var index=-1,length=nativeMin(args.length,funcsLength);while(++index<length){args[index]=transforms[index].call(this,args[index]);}
return apply(func,this,args);});});var partial=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partial));return createWrap(func,WRAP_PARTIAL_FLAG,undefined,partials,holders);});var partialRight=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partialRight));return createWrap(func,WRAP_PARTIAL_RIGHT_FLAG,undefined,partials,holders);});var rearg=flatRest(function(func,indexes){return createWrap(func,WRAP_REARG_FLAG,undefined,undefined,undefined,indexes);});function rest(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
start=start===undefined?start:toInteger(start);return baseRest(func,start);}
function spread(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
start=start==null?0:nativeMax(toInteger(start),0);return baseRest(function(args){var array=args[start],otherArgs=castSlice(args,0,start);if(array){arrayPush(otherArgs,array);}
return apply(func,this,otherArgs);});}
function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
if(isObject(options)){leading='leading'in options?!!options.leading:leading;trailing='trailing'in options?!!options.trailing:trailing;}
return debounce(func,wait,{'leading':leading,'maxWait':wait,'trailing':trailing});}
function unary(func){return ary(func,1);}
function wrap(value,wrapper){return partial(castFunction(wrapper),value);}
function castArray(){if(!arguments.length){return[];}
var value=arguments[0];return isArray(value)?value:[value];}
function clone(value){return baseClone(value,CLONE_SYMBOLS_FLAG);}
function cloneWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseClone(value,CLONE_SYMBOLS_FLAG,customizer);}
function cloneDeep(value){return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG);}
function cloneDeepWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG,customizer);}
function conformsTo(object,source){return source==null||baseConformsTo(object,source,keys(source));}
function eq(value,other){return value===other||(value!==value&&other!==other);}
var gt=createRelationalOperation(baseGt);var gte=createRelationalOperation(function(value,other){return value>=other;});var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};var isArray=Array.isArray;var isArrayBuffer=nodeIsArrayBuffer?baseUnary(nodeIsArrayBuffer):baseIsArrayBuffer;function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}
function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}
function isBoolean(value){return value===true||value===false||(isObjectLike(value)&&baseGetTag(value)==boolTag);}
var isBuffer=nativeIsBuffer||stubFalse;var isDate=nodeIsDate?baseUnary(nodeIsDate):baseIsDate;function isElement(value){return isObjectLike(value)&&value.nodeType===1&&!isPlainObject(value);}
function isEmpty(value){if(value==null){return true;}
if(isArrayLike(value)&&(isArray(value)||typeof value=='string'||typeof value.splice=='function'||isBuffer(value)||isTypedArray(value)||isArguments(value))){return!value.length;}
var tag=getTag(value);if(tag==mapTag||tag==setTag){return!value.size;}
if(isPrototype(value)){return!baseKeys(value).length;}
for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}
return true;}
function isEqual(value,other){return baseIsEqual(value,other);}
function isEqualWith(value,other,customizer){customizer=typeof customizer=='function'?customizer:undefined;var result=customizer?customizer(value,other):undefined;return result===undefined?baseIsEqual(value,other,undefined,customizer):!!result;}
function isError(value){if(!isObjectLike(value)){return false;}
var tag=baseGetTag(value);return tag==errorTag||tag==domExcTag||(typeof value.message=='string'&&typeof value.name=='string'&&!isPlainObject(value));}
function isFinite(value){return typeof value=='number'&&nativeIsFinite(value);}
function isFunction(value){if(!isObject(value)){return false;}
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}
function isInteger(value){return typeof value=='number'&&value==toInteger(value);}
function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}
function isObject(value){var type=typeof value;return value!=null&&(type=='object'||type=='function');}
function isObjectLike(value){return value!=null&&typeof value=='object';}
var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;function isMatch(object,source){return object===source||baseIsMatch(object,source,getMatchData(source));}
function isMatchWith(object,source,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseIsMatch(object,source,getMatchData(source),customizer);}
function isNaN(value){return isNumber(value)&&value!=+value;}
function isNative(value){if(isMaskable(value)){throw new Error(CORE_ERROR_TEXT);}
return baseIsNative(value);}
function isNull(value){return value===null;}
function isNil(value){return value==null;}
function isNumber(value){return typeof value=='number'||(isObjectLike(value)&&baseGetTag(value)==numberTag);}
function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag){return false;}
var proto=getPrototype(value);if(proto===null){return true;}
var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}
var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;function isSafeInteger(value){return isInteger(value)&&value>=-MAX_SAFE_INTEGER&&value<=MAX_SAFE_INTEGER;}
var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;function isString(value){return typeof value=='string'||(!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag);}
function isSymbol(value){return typeof value=='symbol'||(isObjectLike(value)&&baseGetTag(value)==symbolTag);}
var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;function isUndefined(value){return value===undefined;}
function isWeakMap(value){return isObjectLike(value)&&getTag(value)==weakMapTag;}
function isWeakSet(value){return isObjectLike(value)&&baseGetTag(value)==weakSetTag;}
var lt=createRelationalOperation(baseLt);var lte=createRelationalOperation(function(value,other){return value<=other;});function toArray(value){if(!value){return[];}
if(isArrayLike(value)){return isString(value)?stringToArray(value):copyArray(value);}
if(symIterator&&value[symIterator]){return iteratorToArray(value[symIterator]());}
var tag=getTag(value),func=tag==mapTag?mapToArray:(tag==setTag?setToArray:values);return func(value);}
function toFinite(value){if(!value){return value===0?value:0;}
value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=(value<0?-1:1);return sign*MAX_INTEGER;}
return value===value?value:0;}
function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?(remainder?result-remainder:result):0;}
function toLength(value){return value?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH):0;}
function toNumber(value){if(typeof value=='number'){return value;}
if(isSymbol(value)){return NAN;}
if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?(other+''):other;}
if(typeof value!='string'){return value===0?value:+value;}
value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return(isBinary||reIsOctal.test(value))?freeParseInt(value.slice(2),isBinary?2:8):(reIsBadHex.test(value)?NAN:+value);}
function toPlainObject(value){return copyObject(value,keysIn(value));}
function toSafeInteger(value){return value?baseClamp(toInteger(value),-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER):(value===0?value:0);}
function toString(value){return value==null?'':baseToString(value);}
var assign=createAssigner(function(object,source){if(isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return;}
for(var key in source){if(hasOwnProperty.call(source,key)){assignValue(object,key,source[key]);}}});var assignIn=createAssigner(function(object,source){copyObject(source,keysIn(source),object);});var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});var assignWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keys(source),object,customizer);});var at=flatRest(baseAt);function create(prototype,properties){var result=baseCreate(prototype);return properties==null?result:baseAssign(result,properties);}
var defaults=baseRest(function(object,sources){object=Object(object);var index=-1;var length=sources.length;var guard=length>2?sources[2]:undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){length=1;}
while(++index<length){var source=sources[index];var props=keysIn(source);var propsIndex=-1;var propsLength=props.length;while(++propsIndex<propsLength){var key=props[propsIndex];var value=object[key];if(value===undefined||(eq(value,objectProto[key])&&!hasOwnProperty.call(object,key))){object[key]=source[key];}}}
return object;});var defaultsDeep=baseRest(function(args){args.push(undefined,customDefaultsMerge);return apply(mergeWith,undefined,args);});function findKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwn);}
function findLastKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwnRight);}
function forIn(object,iteratee){return object==null?object:baseFor(object,getIteratee(iteratee,3),keysIn);}
function forInRight(object,iteratee){return object==null?object:baseForRight(object,getIteratee(iteratee,3),keysIn);}
function forOwn(object,iteratee){return object&&baseForOwn(object,getIteratee(iteratee,3));}
function forOwnRight(object,iteratee){return object&&baseForOwnRight(object,getIteratee(iteratee,3));}
function functions(object){return object==null?[]:baseFunctions(object,keys(object));}
function functionsIn(object){return object==null?[]:baseFunctions(object,keysIn(object));}
function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}
function has(object,path){return object!=null&&hasPath(object,path,baseHas);}
function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}
var invert=createInverter(function(result,value,key){if(value!=null&&typeof value.toString!='function'){value=nativeObjectToString.call(value);}
result[value]=key;},constant(identity));var invertBy=createInverter(function(result,value,key){if(value!=null&&typeof value.toString!='function'){value=nativeObjectToString.call(value);}
if(hasOwnProperty.call(result,value)){result[value].push(key);}else{result[value]=[key];}},getIteratee);var invoke=baseRest(baseInvoke);function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}
function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}
function mapKeys(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,iteratee(value,key,object),value);});return result;}
function mapValues(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,key,iteratee(value,key,object));});return result;}
var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});var mergeWith=createAssigner(function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer);});var omit=flatRest(function(object,paths){var result={};if(object==null){return result;}
var isDeep=false;paths=arrayMap(paths,function(path){path=castPath(path,object);isDeep||(isDeep=path.length>1);return path;});copyObject(object,getAllKeysIn(object),result);if(isDeep){result=baseClone(result,CLONE_DEEP_FLAG|CLONE_FLAT_FLAG|CLONE_SYMBOLS_FLAG,customOmitClone);}
var length=paths.length;while(length--){baseUnset(result,paths[length]);}
return result;});function omitBy(object,predicate){return pickBy(object,negate(getIteratee(predicate)));}
var pick=flatRest(function(object,paths){return object==null?{}:basePick(object,paths);});function pickBy(object,predicate){if(object==null){return{};}
var props=arrayMap(getAllKeysIn(object),function(prop){return[prop];});predicate=getIteratee(predicate);return basePickBy(object,props,function(value,path){return predicate(value,path[0]);});}
function result(object,path,defaultValue){path=castPath(path,object);var index=-1,length=path.length;if(!length){length=1;object=undefined;}
while(++index<length){var value=object==null?undefined:object[toKey(path[index])];if(value===undefined){index=length;value=defaultValue;}
object=isFunction(value)?value.call(object):value;}
return object;}
function set(object,path,value){return object==null?object:baseSet(object,path,value);}
function setWith(object,path,value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseSet(object,path,value,customizer);}
var toPairs=createToPairs(keys);var toPairsIn=createToPairs(keysIn);function transform(object,iteratee,accumulator){var isArr=isArray(object),isArrLike=isArr||isBuffer(object)||isTypedArray(object);iteratee=getIteratee(iteratee,4);if(accumulator==null){var Ctor=object&&object.constructor;if(isArrLike){accumulator=isArr?new Ctor:[];}
else if(isObject(object)){accumulator=isFunction(Ctor)?baseCreate(getPrototype(object)):{};}
else{accumulator={};}}
(isArrLike?arrayEach:baseForOwn)(object,function(value,index,object){return iteratee(accumulator,value,index,object);});return accumulator;}
function unset(object,path){return object==null?true:baseUnset(object,path);}
function update(object,path,updater){return object==null?object:baseUpdate(object,path,castFunction(updater));}
function updateWith(object,path,updater,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseUpdate(object,path,castFunction(updater),customizer);}
function values(object){return object==null?[]:baseValues(object,keys(object));}
function valuesIn(object){return object==null?[]:baseValues(object,keysIn(object));}
function clamp(number,lower,upper){if(upper===undefined){upper=lower;lower=undefined;}
if(upper!==undefined){upper=toNumber(upper);upper=upper===upper?upper:0;}
if(lower!==undefined){lower=toNumber(lower);lower=lower===lower?lower:0;}
return baseClamp(toNumber(number),lower,upper);}
function inRange(number,start,end){start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}
number=toNumber(number);return baseInRange(number,start,end);}
function random(lower,upper,floating){if(floating&&typeof floating!='boolean'&&isIterateeCall(lower,upper,floating)){upper=floating=undefined;}
if(floating===undefined){if(typeof upper=='boolean'){floating=upper;upper=undefined;}
else if(typeof lower=='boolean'){floating=lower;lower=undefined;}}
if(lower===undefined&&upper===undefined){lower=0;upper=1;}
else{lower=toFinite(lower);if(upper===undefined){upper=lower;lower=0;}else{upper=toFinite(upper);}}
if(lower>upper){var temp=lower;lower=upper;upper=temp;}
if(floating||lower%1||upper%1){var rand=nativeRandom();return nativeMin(lower+(rand*(upper-lower+freeParseFloat('1e-'+((rand+'').length-1)))),upper);}
return baseRandom(lower,upper);}
var camelCase=createCompounder(function(result,word,index){word=word.toLowerCase();return result+(index?capitalize(word):word);});function capitalize(string){return upperFirst(toString(string).toLowerCase());}
function deburr(string){string=toString(string);return string&&string.replace(reLatin,deburrLetter).replace(reComboMark,'');}
function endsWith(string,target,position){string=toString(string);target=baseToString(target);var length=string.length;position=position===undefined?length:baseClamp(toInteger(position),0,length);var end=position;position-=target.length;return position>=0&&string.slice(position,end)==target;}
function escape(string){string=toString(string);return(string&&reHasUnescapedHtml.test(string))?string.replace(reUnescapedHtml,escapeHtmlChar):string;}
function escapeRegExp(string){string=toString(string);return(string&&reHasRegExpChar.test(string))?string.replace(reRegExpChar,'\\$&'):string;}
var kebabCase=createCompounder(function(result,word,index){return result+(index?'-':'')+word.toLowerCase();});var lowerCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toLowerCase();});var lowerFirst=createCaseFirst('toLowerCase');function pad(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;if(!length||strLength>=length){return string;}
var mid=(length-strLength)/2;return(createPadding(nativeFloor(mid),chars)+
string+
createPadding(nativeCeil(mid),chars));}
function padEnd(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return(length&&strLength<length)?(string+createPadding(length-strLength,chars)):string;}
function padStart(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return(length&&strLength<length)?(createPadding(length-strLength,chars)+string):string;}
function parseInt(string,radix,guard){if(guard||radix==null){radix=0;}else if(radix){radix=+radix;}
return nativeParseInt(toString(string).replace(reTrimStart,''),radix||0);}
function repeat(string,n,guard){if((guard?isIterateeCall(string,n,guard):n===undefined)){n=1;}else{n=toInteger(n);}
return baseRepeat(toString(string),n);}
function replace(){var args=arguments,string=toString(args[0]);return args.length<3?string:string.replace(args[1],args[2]);}
var snakeCase=createCompounder(function(result,word,index){return result+(index?'_':'')+word.toLowerCase();});function split(string,separator,limit){if(limit&&typeof limit!='number'&&isIterateeCall(string,separator,limit)){separator=limit=undefined;}
limit=limit===undefined?MAX_ARRAY_LENGTH:limit>>>0;if(!limit){return[];}
string=toString(string);if(string&&(typeof separator=='string'||(separator!=null&&!isRegExp(separator)))){separator=baseToString(separator);if(!separator&&hasUnicode(string)){return castSlice(stringToArray(string),0,limit);}}
return string.split(separator,limit);}
var startCase=createCompounder(function(result,word,index){return result+(index?' ':'')+upperFirst(word);});function startsWith(string,target,position){string=toString(string);position=position==null?0:baseClamp(toInteger(position),0,string.length);target=baseToString(target);return string.slice(position,position+target.length)==target;}
function template(string,options,guard){var settings=lodash.templateSettings;if(guard&&isIterateeCall(string,options,guard)){options=undefined;}
string=toString(string);options=assignInWith({},options,settings,customDefaultsAssignIn);var imports=assignInWith({},options.imports,settings.imports,customDefaultsAssignIn),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";var reDelimiters=RegExp((options.escape||reNoMatch).source+'|'+
interpolate.source+'|'+
(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+'|'+
(options.evaluate||reNoMatch).source+'|$','g');var sourceURL='//# sourceURL='+
(hasOwnProperty.call(options,'sourceURL')?(options.sourceURL+'').replace(/[\r\n]/g,' '):('lodash.templateSources['+(++templateCounter)+']'))+'\n';string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'";}
if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";}
if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";}
index=offset+match.length;return match;});source+="';\n";var variable=hasOwnProperty.call(options,'variable')&&options.variable;if(!variable){source='with (obj) {\n'+source+'\n}\n';}
source=(isEvaluating?source.replace(reEmptyStringLeading,''):source).replace(reEmptyStringMiddle,'$1').replace(reEmptyStringTrailing,'$1;');source='function('+(variable||'obj')+') {\n'+
(variable?'':'obj || (obj = {});\n')+
"var __t, __p = ''"+
(isEscaping?', __e = _.escape':'')+
(isEvaluating?', __j = Array.prototype.join;\n'+
"function print() { __p += __j.call(arguments, '') }\n":';\n')+
source+
'return __p\n}';var result=attempt(function(){return Function(importsKeys,sourceURL+'return '+source).apply(undefined,importsValues);});result.source=source;if(isError(result)){throw result;}
return result;}
function toLower(value){return toString(value).toLowerCase();}
function toUpper(value){return toString(value).toUpperCase();}
function trim(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrim,'');}
if(!string||!(chars=baseToString(chars))){return string;}
var strSymbols=stringToArray(string),chrSymbols=stringToArray(chars),start=charsStartIndex(strSymbols,chrSymbols),end=charsEndIndex(strSymbols,chrSymbols)+1;return castSlice(strSymbols,start,end).join('');}
function trimEnd(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimEnd,'');}
if(!string||!(chars=baseToString(chars))){return string;}
var strSymbols=stringToArray(string),end=charsEndIndex(strSymbols,stringToArray(chars))+1;return castSlice(strSymbols,0,end).join('');}
function trimStart(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimStart,'');}
if(!string||!(chars=baseToString(chars))){return string;}
var strSymbols=stringToArray(string),start=charsStartIndex(strSymbols,stringToArray(chars));return castSlice(strSymbols,start).join('');}
function truncate(string,options){var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(isObject(options)){var separator='separator'in options?options.separator:separator;length='length'in options?toInteger(options.length):length;omission='omission'in options?baseToString(options.omission):omission;}
string=toString(string);var strLength=string.length;if(hasUnicode(string)){var strSymbols=stringToArray(string);strLength=strSymbols.length;}
if(length>=strLength){return string;}
var end=length-stringSize(omission);if(end<1){return omission;}
var result=strSymbols?castSlice(strSymbols,0,end).join(''):string.slice(0,end);if(separator===undefined){return result+omission;}
if(strSymbols){end+=(result.length-end);}
if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,substring=result;if(!separator.global){separator=RegExp(separator.source,toString(reFlags.exec(separator))+'g');}
separator.lastIndex=0;while((match=separator.exec(substring))){var newEnd=match.index;}
result=result.slice(0,newEnd===undefined?end:newEnd);}}else if(string.indexOf(baseToString(separator),end)!=end){var index=result.lastIndexOf(separator);if(index>-1){result=result.slice(0,index);}}
return result+omission;}
function unescape(string){string=toString(string);return(string&&reHasEscapedHtml.test(string))?string.replace(reEscapedHtml,unescapeHtmlChar):string;}
var upperCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toUpperCase();});var upperFirst=createCaseFirst('toUpperCase');function words(string,pattern,guard){string=toString(string);pattern=guard?undefined:pattern;if(pattern===undefined){return hasUnicodeWord(string)?unicodeWords(string):asciiWords(string);}
return string.match(pattern)||[];}
var attempt=baseRest(function(func,args){try{return apply(func,undefined,args);}catch(e){return isError(e)?e:new Error(e);}});var bindAll=flatRest(function(object,methodNames){arrayEach(methodNames,function(key){key=toKey(key);baseAssignValue(object,key,bind(object[key],object));});return object;});function cond(pairs){var length=pairs==null?0:pairs.length,toIteratee=getIteratee();pairs=!length?[]:arrayMap(pairs,function(pair){if(typeof pair[1]!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
return[toIteratee(pair[0]),pair[1]];});return baseRest(function(args){var index=-1;while(++index<length){var pair=pairs[index];if(apply(pair[0],this,args)){return apply(pair[1],this,args);}}});}
function conforms(source){return baseConforms(baseClone(source,CLONE_DEEP_FLAG));}
function constant(value){return function(){return value;};}
function defaultTo(value,defaultValue){return(value==null||value!==value)?defaultValue:value;}
var flow=createFlow();var flowRight=createFlow(true);function identity(value){return value;}
function iteratee(func){return baseIteratee(typeof func=='function'?func:baseClone(func,CLONE_DEEP_FLAG));}
function matches(source){return baseMatches(baseClone(source,CLONE_DEEP_FLAG));}
function matchesProperty(path,srcValue){return baseMatchesProperty(path,baseClone(srcValue,CLONE_DEEP_FLAG));}
var method=baseRest(function(path,args){return function(object){return baseInvoke(object,path,args);};});var methodOf=baseRest(function(object,args){return function(path){return baseInvoke(object,path,args);};});function mixin(object,source,options){var props=keys(source),methodNames=baseFunctions(source,props);if(options==null&&!(isObject(source)&&(methodNames.length||!props.length))){options=source;source=object;object=this;methodNames=baseFunctions(source,keys(source));}
var chain=!(isObject(options)&&'chain'in options)||!!options.chain,isFunc=isFunction(object);arrayEach(methodNames,function(methodName){var func=source[methodName];object[methodName]=func;if(isFunc){object.prototype[methodName]=function(){var chainAll=this.__chain__;if(chain||chainAll){var result=object(this.__wrapped__),actions=result.__actions__=copyArray(this.__actions__);actions.push({'func':func,'args':arguments,'thisArg':object});result.__chain__=chainAll;return result;}
return func.apply(object,arrayPush([this.value()],arguments));};}});return object;}
function noConflict(){if(root._===this){root._=oldDash;}
return this;}
function noop(){}
function nthArg(n){n=toInteger(n);return baseRest(function(args){return baseNth(args,n);});}
var over=createOver(arrayMap);var overEvery=createOver(arrayEvery);var overSome=createOver(arraySome);function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}
function propertyOf(object){return function(path){return object==null?undefined:baseGet(object,path);};}
var range=createRange();var rangeRight=createRange(true);function stubArray(){return[];}
function stubFalse(){return false;}
function stubObject(){return{};}
function stubString(){return '';}
function stubTrue(){return true;}
function times(n,iteratee){n=toInteger(n);if(n<1||n>MAX_SAFE_INTEGER){return[];}
var index=MAX_ARRAY_LENGTH,length=nativeMin(n,MAX_ARRAY_LENGTH);iteratee=getIteratee(iteratee);n-=MAX_ARRAY_LENGTH;var result=baseTimes(length,iteratee);while(++index<n){iteratee(index);}
return result;}
function toPath(value){if(isArray(value)){return arrayMap(value,toKey);}
return isSymbol(value)?[value]:copyArray(stringToPath(toString(value)));}
function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id;}
var add=createMathOperation(function(augend,addend){return augend+addend;},0);var ceil=createRound('ceil');var divide=createMathOperation(function(dividend,divisor){return dividend/divisor;},1);var floor=createRound('floor');function max(array){return(array&&array.length)?baseExtremum(array,identity,baseGt):undefined;}
function maxBy(array,iteratee){return(array&&array.length)?baseExtremum(array,getIteratee(iteratee,2),baseGt):undefined;}
function mean(array){return baseMean(array,identity);}
function meanBy(array,iteratee){return baseMean(array,getIteratee(iteratee,2));}
function min(array){return(array&&array.length)?baseExtremum(array,identity,baseLt):undefined;}
function minBy(array,iteratee){return(array&&array.length)?baseExtremum(array,getIteratee(iteratee,2),baseLt):undefined;}
var multiply=createMathOperation(function(multiplier,multiplicand){return multiplier*multiplicand;},1);var round=createRound('round');var subtract=createMathOperation(function(minuend,subtrahend){return minuend-subtrahend;},0);function sum(array){return(array&&array.length)?baseSum(array,identity):0;}
function sumBy(array,iteratee){return(array&&array.length)?baseSum(array,getIteratee(iteratee,2)):0;}
lodash.after=after;lodash.ary=ary;lodash.assign=assign;lodash.assignIn=assignIn;lodash.assignInWith=assignInWith;lodash.assignWith=assignWith;lodash.at=at;lodash.before=before;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.castArray=castArray;lodash.chain=chain;lodash.chunk=chunk;lodash.compact=compact;lodash.concat=concat;lodash.cond=cond;lodash.conforms=conforms;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.curry=curry;lodash.curryRight=curryRight;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defaultsDeep=defaultsDeep;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.differenceBy=differenceBy;lodash.differenceWith=differenceWith;lodash.drop=drop;lodash.dropRight=dropRight;lodash.dropRightWhile=dropRightWhile;lodash.dropWhile=dropWhile;lodash.fill=fill;lodash.filter=filter;lodash.flatMap=flatMap;lodash.flatMapDeep=flatMapDeep;lodash.flatMapDepth=flatMapDepth;lodash.flatten=flatten;lodash.flattenDeep=flattenDeep;lodash.flattenDepth=flattenDepth;lodash.flip=flip;lodash.flow=flow;lodash.flowRight=flowRight;lodash.fromPairs=fromPairs;lodash.functions=functions;lodash.functionsIn=functionsIn;lodash.groupBy=groupBy;lodash.initial=initial;lodash.intersection=intersection;lodash.intersectionBy=intersectionBy;lodash.intersectionWith=intersectionWith;lodash.invert=invert;lodash.invertBy=invertBy;lodash.invokeMap=invokeMap;lodash.iteratee=iteratee;lodash.keyBy=keyBy;lodash.keys=keys;lodash.keysIn=keysIn;lodash.map=map;lodash.mapKeys=mapKeys;lodash.mapValues=mapValues;lodash.matches=matches;lodash.matchesProperty=matchesProperty;lodash.memoize=memoize;lodash.merge=merge;lodash.mergeWith=mergeWith;lodash.method=method;lodash.methodOf=methodOf;lodash.mixin=mixin;lodash.negate=negate;lodash.nthArg=nthArg;lodash.omit=omit;lodash.omitBy=omitBy;lodash.once=once;lodash.orderBy=orderBy;lodash.over=over;lodash.overArgs=overArgs;lodash.overEvery=overEvery;lodash.overSome=overSome;lodash.partial=partial;lodash.partialRight=partialRight;lodash.partition=partition;lodash.pick=pick;lodash.pickBy=pickBy;lodash.property=property;lodash.propertyOf=propertyOf;lodash.pull=pull;lodash.pullAll=pullAll;lodash.pullAllBy=pullAllBy;lodash.pullAllWith=pullAllWith;lodash.pullAt=pullAt;lodash.range=range;lodash.rangeRight=rangeRight;lodash.rearg=rearg;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.reverse=reverse;lodash.sampleSize=sampleSize;lodash.set=set;lodash.setWith=setWith;lodash.shuffle=shuffle;lodash.slice=slice;lodash.sortBy=sortBy;lodash.sortedUniq=sortedUniq;lodash.sortedUniqBy=sortedUniqBy;lodash.split=split;lodash.spread=spread;lodash.tail=tail;lodash.take=take;lodash.takeRight=takeRight;lodash.takeRightWhile=takeRightWhile;lodash.takeWhile=takeWhile;lodash.tap=tap;lodash.throttle=throttle;lodash.thru=thru;lodash.toArray=toArray;lodash.toPairs=toPairs;lodash.toPairsIn=toPairsIn;lodash.toPath=toPath;lodash.toPlainObject=toPlainObject;lodash.transform=transform;lodash.unary=unary;lodash.union=union;lodash.unionBy=unionBy;lodash.unionWith=unionWith;lodash.uniq=uniq;lodash.uniqBy=uniqBy;lodash.uniqWith=uniqWith;lodash.unset=unset;lodash.unzip=unzip;lodash.unzipWith=unzipWith;lodash.update=update;lodash.updateWith=updateWith;lodash.values=values;lodash.valuesIn=valuesIn;lodash.without=without;lodash.words=words;lodash.wrap=wrap;lodash.xor=xor;lodash.xorBy=xorBy;lodash.xorWith=xorWith;lodash.zip=zip;lodash.zipObject=zipObject;lodash.zipObjectDeep=zipObjectDeep;lodash.zipWith=zipWith;lodash.entries=toPairs;lodash.entriesIn=toPairsIn;lodash.extend=assignIn;lodash.extendWith=assignInWith;mixin(lodash,lodash);lodash.add=add;lodash.attempt=attempt;lodash.camelCase=camelCase;lodash.capitalize=capitalize;lodash.ceil=ceil;lodash.clamp=clamp;lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.cloneDeepWith=cloneDeepWith;lodash.cloneWith=cloneWith;lodash.conformsTo=conformsTo;lodash.deburr=deburr;lodash.defaultTo=defaultTo;lodash.divide=divide;lodash.endsWith=endsWith;lodash.eq=eq;lodash.escape=escape;lodash.escapeRegExp=escapeRegExp;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.floor=floor;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.get=get;lodash.gt=gt;lodash.gte=gte;lodash.has=has;lodash.hasIn=hasIn;lodash.head=head;lodash.identity=identity;lodash.includes=includes;lodash.indexOf=indexOf;lodash.inRange=inRange;lodash.invoke=invoke;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isArrayBuffer=isArrayBuffer;lodash.isArrayLike=isArrayLike;lodash.isArrayLikeObject=isArrayLikeObject;lodash.isBoolean=isBoolean;lodash.isBuffer=isBuffer;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isEqualWith=isEqualWith;lodash.isError=isError;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isInteger=isInteger;lodash.isLength=isLength;lodash.isMap=isMap;lodash.isMatch=isMatch;lodash.isMatchWith=isMatchWith;lodash.isNaN=isNaN;lodash.isNative=isNative;lodash.isNil=isNil;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isObjectLike=isObjectLike;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isSafeInteger=isSafeInteger;lodash.isSet=isSet;lodash.isString=isString;lodash.isSymbol=isSymbol;lodash.isTypedArray=isTypedArray;lodash.isUndefined=isUndefined;lodash.isWeakMap=isWeakMap;lodash.isWeakSet=isWeakSet;lodash.join=join;lodash.kebabCase=kebabCase;lodash.last=last;lodash.lastIndexOf=lastIndexOf;lodash.lowerCase=lowerCase;lodash.lowerFirst=lowerFirst;lodash.lt=lt;lodash.lte=lte;lodash.max=max;lodash.maxBy=maxBy;lodash.mean=mean;lodash.meanBy=meanBy;lodash.min=min;lodash.minBy=minBy;lodash.stubArray=stubArray;lodash.stubFalse=stubFalse;lodash.stubObject=stubObject;lodash.stubString=stubString;lodash.stubTrue=stubTrue;lodash.multiply=multiply;lodash.nth=nth;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.pad=pad;lodash.padEnd=padEnd;lodash.padStart=padStart;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.repeat=repeat;lodash.replace=replace;lodash.result=result;lodash.round=round;lodash.runInContext=runInContext;lodash.sample=sample;lodash.size=size;lodash.snakeCase=snakeCase;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.sortedIndexBy=sortedIndexBy;lodash.sortedIndexOf=sortedIndexOf;lodash.sortedLastIndex=sortedLastIndex;lodash.sortedLastIndexBy=sortedLastIndexBy;lodash.sortedLastIndexOf=sortedLastIndexOf;lodash.startCase=startCase;lodash.startsWith=startsWith;lodash.subtract=subtract;lodash.sum=sum;lodash.sumBy=sumBy;lodash.template=template;lodash.times=times;lodash.toFinite=toFinite;lodash.toInteger=toInteger;lodash.toLength=toLength;lodash.toLower=toLower;lodash.toNumber=toNumber;lodash.toSafeInteger=toSafeInteger;lodash.toString=toString;lodash.toUpper=toUpper;lodash.trim=trim;lodash.trimEnd=trimEnd;lodash.trimStart=trimStart;lodash.truncate=truncate;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.upperCase=upperCase;lodash.upperFirst=upperFirst;lodash.each=forEach;lodash.eachRight=forEachRight;lodash.first=head;mixin(lodash,(function(){var source={};baseForOwn(lodash,function(func,methodName){if(!hasOwnProperty.call(lodash.prototype,methodName)){source[methodName]=func;}});return source;}()),{'chain':false});lodash.VERSION=VERSION;arrayEach(['bind','bindKey','curry','curryRight','partial','partialRight'],function(methodName){lodash[methodName].placeholder=lodash;});arrayEach(['drop','take'],function(methodName,index){LazyWrapper.prototype[methodName]=function(n){n=n===undefined?1:nativeMax(toInteger(n),0);var result=(this.__filtered__&&!index)?new LazyWrapper(this):this.clone();if(result.__filtered__){result.__takeCount__=nativeMin(n,result.__takeCount__);}else{result.__views__.push({'size':nativeMin(n,MAX_ARRAY_LENGTH),'type':methodName+(result.__dir__<0?'Right':'')});}
return result;};LazyWrapper.prototype[methodName+'Right']=function(n){return this.reverse()[methodName](n).reverse();};});arrayEach(['filter','map','takeWhile'],function(methodName,index){var type=index+1,isFilter=type==LAZY_FILTER_FLAG||type==LAZY_WHILE_FLAG;LazyWrapper.prototype[methodName]=function(iteratee){var result=this.clone();result.__iteratees__.push({'iteratee':getIteratee(iteratee,3),'type':type});result.__filtered__=result.__filtered__||isFilter;return result;};});arrayEach(['head','last'],function(methodName,index){var takeName='take'+(index?'Right':'');LazyWrapper.prototype[methodName]=function(){return this[takeName](1).value()[0];};});arrayEach(['initial','tail'],function(methodName,index){var dropName='drop'+(index?'':'Right');LazyWrapper.prototype[methodName]=function(){return this.__filtered__?new LazyWrapper(this):this[dropName](1);};});LazyWrapper.prototype.compact=function(){return this.filter(identity);};LazyWrapper.prototype.find=function(predicate){return this.filter(predicate).head();};LazyWrapper.prototype.findLast=function(predicate){return this.reverse().find(predicate);};LazyWrapper.prototype.invokeMap=baseRest(function(path,args){if(typeof path=='function'){return new LazyWrapper(this);}
return this.map(function(value){return baseInvoke(value,path,args);});});LazyWrapper.prototype.reject=function(predicate){return this.filter(negate(getIteratee(predicate)));};LazyWrapper.prototype.slice=function(start,end){start=toInteger(start);var result=this;if(result.__filtered__&&(start>0||end<0)){return new LazyWrapper(result);}
if(start<0){result=result.takeRight(-start);}else if(start){result=result.drop(start);}
if(end!==undefined){end=toInteger(end);result=end<0?result.dropRight(-end):result.take(end-start);}
return result;};LazyWrapper.prototype.takeRightWhile=function(predicate){return this.reverse().takeWhile(predicate).reverse();};LazyWrapper.prototype.toArray=function(){return this.take(MAX_ARRAY_LENGTH);};baseForOwn(LazyWrapper.prototype,function(func,methodName){var checkIteratee=/^(?:filter|find|map|reject)|While$/.test(methodName),isTaker=/^(?:head|last)$/.test(methodName),lodashFunc=lodash[isTaker?('take'+(methodName=='last'?'Right':'')):methodName],retUnwrapped=isTaker||/^find/.test(methodName);if(!lodashFunc){return;}
lodash.prototype[methodName]=function(){var value=this.__wrapped__,args=isTaker?[1]:arguments,isLazy=value instanceof LazyWrapper,iteratee=args[0],useLazy=isLazy||isArray(value);var interceptor=function(value){var result=lodashFunc.apply(lodash,arrayPush([value],args));return(isTaker&&chainAll)?result[0]:result;};if(useLazy&&checkIteratee&&typeof iteratee=='function'&&iteratee.length!=1){isLazy=useLazy=false;}
var chainAll=this.__chain__,isHybrid=!!this.__actions__.length,isUnwrapped=retUnwrapped&&!chainAll,onlyLazy=isLazy&&!isHybrid;if(!retUnwrapped&&useLazy){value=onlyLazy?value:new LazyWrapper(this);var result=func.apply(value,args);result.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(result,chainAll);}
if(isUnwrapped&&onlyLazy){return func.apply(this,args);}
result=this.thru(interceptor);return isUnwrapped?(isTaker?result.value()[0]:result.value()):result;};});arrayEach(['pop','push','shift','sort','splice','unshift'],function(methodName){var func=arrayProto[methodName],chainName=/^(?:push|sort|unshift)$/.test(methodName)?'tap':'thru',retUnwrapped=/^(?:pop|shift)$/.test(methodName);lodash.prototype[methodName]=function(){var args=arguments;if(retUnwrapped&&!this.__chain__){var value=this.value();return func.apply(isArray(value)?value:[],args);}
return this[chainName](function(value){return func.apply(isArray(value)?value:[],args);});};});baseForOwn(LazyWrapper.prototype,function(func,methodName){var lodashFunc=lodash[methodName];if(lodashFunc){var key=lodashFunc.name+'';if(!hasOwnProperty.call(realNames,key)){realNames[key]=[];}
realNames[key].push({'name':methodName,'func':lodashFunc});}});realNames[createHybrid(undefined,WRAP_BIND_KEY_FLAG).name]=[{'name':'wrapper','func':undefined}];LazyWrapper.prototype.clone=lazyClone;LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;lodash.prototype.at=wrapperAt;lodash.prototype.chain=wrapperChain;lodash.prototype.commit=wrapperCommit;lodash.prototype.next=wrapperNext;lodash.prototype.plant=wrapperPlant;lodash.prototype.reverse=wrapperReverse;lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;lodash.prototype.first=lodash.prototype.head;if(symIterator){lodash.prototype[symIterator]=wrapperToIterator;}
return lodash;});var _=runInContext();if(typeof define=='function'&&typeof define.amd=='object'&&define.amd){root._=_;define(function(){return _;});}
else if(freeModule){(freeModule.exports=_)._=_;freeExports._=_;}
else{root._=_;}}.call(this));}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],2:[function(require,module,exports){;(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):global.moment=factory()}(this,(function(){'use strict';var hookCallback;function hooks(){return hookCallback.apply(null,arguments);}
function setHookCallback(callback){hookCallback=callback;}
function isArray(input){return input instanceof Array||Object.prototype.toString.call(input)==='[object Array]';}
function isObject(input){return input!=null&&Object.prototype.toString.call(input)==='[object Object]';}
function isObjectEmpty(obj){if(Object.getOwnPropertyNames){return(Object.getOwnPropertyNames(obj).length===0);}else{var k;for(k in obj){if(obj.hasOwnProperty(k)){return false;}}
return true;}}
function isUndefined(input){return input===void 0;}
function isNumber(input){return typeof input==='number'||Object.prototype.toString.call(input)==='[object Number]';}
function isDate(input){return input instanceof Date||Object.prototype.toString.call(input)==='[object Date]';}
function map(arr,fn){var res=[],i;for(i=0;i<arr.length;++i){res.push(fn(arr[i],i));}
return res;}
function hasOwnProp(a,b){return Object.prototype.hasOwnProperty.call(a,b);}
function extend(a,b){for(var i in b){if(hasOwnProp(b,i)){a[i]=b[i];}}
if(hasOwnProp(b,'toString')){a.toString=b.toString;}
if(hasOwnProp(b,'valueOf')){a.valueOf=b.valueOf;}
return a;}
function createUTC(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,true).utc();}
function defaultParsingFlags(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false,parsedDateParts:[],meridiem:null,rfc2822:false,weekdayMismatch:false};}
function getParsingFlags(m){if(m._pf==null){m._pf=defaultParsingFlags();}
return m._pf;}
var some;if(Array.prototype.some){some=Array.prototype.some;}else{some=function(fun){var t=Object(this);var len=t.length>>>0;for(var i=0;i<len;i++){if(i in t&&fun.call(this,t[i],i,t)){return true;}}
return false;};}
function isValid(m){if(m._isValid==null){var flags=getParsingFlags(m);var parsedParts=some.call(flags.parsedDateParts,function(i){return i!=null;});var isNowValid=!isNaN(m._d.getTime())&&flags.overflow<0&&!flags.empty&&!flags.invalidMonth&&!flags.invalidWeekday&&!flags.weekdayMismatch&&!flags.nullInput&&!flags.invalidFormat&&!flags.userInvalidated&&(!flags.meridiem||(flags.meridiem&&parsedParts));if(m._strict){isNowValid=isNowValid&&flags.charsLeftOver===0&&flags.unusedTokens.length===0&&flags.bigHour===undefined;}
if(Object.isFrozen==null||!Object.isFrozen(m)){m._isValid=isNowValid;}
else{return isNowValid;}}
return m._isValid;}
function createInvalid(flags){var m=createUTC(NaN);if(flags!=null){extend(getParsingFlags(m),flags);}
else{getParsingFlags(m).userInvalidated=true;}
return m;}
var momentProperties=hooks.momentProperties=[];function copyConfig(to,from){var i,prop,val;if(!isUndefined(from._isAMomentObject)){to._isAMomentObject=from._isAMomentObject;}
if(!isUndefined(from._i)){to._i=from._i;}
if(!isUndefined(from._f)){to._f=from._f;}
if(!isUndefined(from._l)){to._l=from._l;}
if(!isUndefined(from._strict)){to._strict=from._strict;}
if(!isUndefined(from._tzm)){to._tzm=from._tzm;}
if(!isUndefined(from._isUTC)){to._isUTC=from._isUTC;}
if(!isUndefined(from._offset)){to._offset=from._offset;}
if(!isUndefined(from._pf)){to._pf=getParsingFlags(from);}
if(!isUndefined(from._locale)){to._locale=from._locale;}
if(momentProperties.length>0){for(i=0;i<momentProperties.length;i++){prop=momentProperties[i];val=from[prop];if(!isUndefined(val)){to[prop]=val;}}}
return to;}
var updateInProgress=false;function Moment(config){copyConfig(this,config);this._d=new Date(config._d!=null?config._d.getTime():NaN);if(!this.isValid()){this._d=new Date(NaN);}
if(updateInProgress===false){updateInProgress=true;hooks.updateOffset(this);updateInProgress=false;}}
function isMoment(obj){return obj instanceof Moment||(obj!=null&&obj._isAMomentObject!=null);}
function absFloor(number){if(number<0){return Math.ceil(number)||0;}else{return Math.floor(number);}}
function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;if(coercedNumber!==0&&isFinite(coercedNumber)){value=absFloor(coercedNumber);}
return value;}
function compareArrays(array1,array2,dontConvert){var len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length-array2.length),diffs=0,i;for(i=0;i<len;i++){if((dontConvert&&array1[i]!==array2[i])||(!dontConvert&&toInt(array1[i])!==toInt(array2[i]))){diffs++;}}
return diffs+lengthDiff;}
function warn(msg){if(hooks.suppressDeprecationWarnings===false&&(typeof console!=='undefined')&&console.warn){console.warn('Deprecation warning: '+msg);}}
function deprecate(msg,fn){var firstTime=true;return extend(function(){if(hooks.deprecationHandler!=null){hooks.deprecationHandler(null,msg);}
if(firstTime){var args=[];var arg;for(var i=0;i<arguments.length;i++){arg='';if(typeof arguments[i]==='object'){arg+='\n['+i+'] ';for(var key in arguments[0]){arg+=key+': '+arguments[0][key]+', ';}
arg=arg.slice(0,-2);}else{arg=arguments[i];}
args.push(arg);}
warn(msg+'\nArguments: '+Array.prototype.slice.call(args).join('')+'\n'+(new Error()).stack);firstTime=false;}
return fn.apply(this,arguments);},fn);}
var deprecations={};function deprecateSimple(name,msg){if(hooks.deprecationHandler!=null){hooks.deprecationHandler(name,msg);}
if(!deprecations[name]){warn(msg);deprecations[name]=true;}}
hooks.suppressDeprecationWarnings=false;hooks.deprecationHandler=null;function isFunction(input){return input instanceof Function||Object.prototype.toString.call(input)==='[object Function]';}
function set(config){var prop,i;for(i in config){prop=config[i];if(isFunction(prop)){this[i]=prop;}else{this['_'+i]=prop;}}
this._config=config;this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+
'|'+(/\d{1,2}/).source);}
function mergeConfigs(parentConfig,childConfig){var res=extend({},parentConfig),prop;for(prop in childConfig){if(hasOwnProp(childConfig,prop)){if(isObject(parentConfig[prop])&&isObject(childConfig[prop])){res[prop]={};extend(res[prop],parentConfig[prop]);extend(res[prop],childConfig[prop]);}else if(childConfig[prop]!=null){res[prop]=childConfig[prop];}else{delete res[prop];}}}
for(prop in parentConfig){if(hasOwnProp(parentConfig,prop)&&!hasOwnProp(childConfig,prop)&&isObject(parentConfig[prop])){res[prop]=extend({},res[prop]);}}
return res;}
function Locale(config){if(config!=null){this.set(config);}}
var keys;if(Object.keys){keys=Object.keys;}else{keys=function(obj){var i,res=[];for(i in obj){if(hasOwnProp(obj,i)){res.push(i);}}
return res;};}
var defaultCalendar={sameDay:'[Today at] LT',nextDay:'[Tomorrow at] LT',nextWeek:'dddd [at] LT',lastDay:'[Yesterday at] LT',lastWeek:'[Last] dddd [at] LT',sameElse:'L'};function calendar(key,mom,now){var output=this._calendar[key]||this._calendar['sameElse'];return isFunction(output)?output.call(mom,now):output;}
var defaultLongDateFormat={LTS:'h:mm:ss A',LT:'h:mm A',L:'MM/DD/YYYY',LL:'MMMM D, YYYY',LLL:'MMMM D, YYYY h:mm A',LLLL:'dddd, MMMM D, YYYY h:mm A'};function longDateFormat(key){var format=this._longDateFormat[key],formatUpper=this._longDateFormat[key.toUpperCase()];if(format||!formatUpper){return format;}
this._longDateFormat[key]=formatUpper.replace(/MMMM|MM|DD|dddd/g,function(val){return val.slice(1);});return this._longDateFormat[key];}
var defaultInvalidDate='Invalid date';function invalidDate(){return this._invalidDate;}
var defaultOrdinal='%d';var defaultDayOfMonthOrdinalParse=/\d{1,2}/;function ordinal(number){return this._ordinal.replace('%d',number);}
var defaultRelativeTime={future:'in %s',past:'%s ago',s:'a few seconds',ss:'%d seconds',m:'a minute',mm:'%d minutes',h:'an hour',hh:'%d hours',d:'a day',dd:'%d days',M:'a month',MM:'%d months',y:'a year',yy:'%d years'};function relativeTime(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return(isFunction(output))?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number);}
function pastFuture(diff,output){var format=this._relativeTime[diff>0?'future':'past'];return isFunction(format)?format(output):format.replace(/%s/i,output);}
var aliases={};function addUnitAlias(unit,shorthand){var lowerCase=unit.toLowerCase();aliases[lowerCase]=aliases[lowerCase+'s']=aliases[shorthand]=unit;}
function normalizeUnits(units){return typeof units==='string'?aliases[units]||aliases[units.toLowerCase()]:undefined;}
function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject){if(hasOwnProp(inputObject,prop)){normalizedProp=normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp]=inputObject[prop];}}}
return normalizedInput;}
var priorities={};function addUnitPriority(unit,priority){priorities[unit]=priority;}
function getPrioritizedUnits(unitsObj){var units=[];for(var u in unitsObj){units.push({unit:u,priority:priorities[u]});}
units.sort(function(a,b){return a.priority-b.priority;});return units;}
function zeroFill(number,targetLength,forceSign){var absNumber=''+Math.abs(number),zerosToFill=targetLength-absNumber.length,sign=number>=0;return(sign?(forceSign?'+':''):'-')+
Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1)+absNumber;}
var formattingTokens=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;var localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;var formatFunctions={};var formatTokenFunctions={};function addFormatToken(token,padded,ordinal,callback){var func=callback;if(typeof callback==='string'){func=function(){return this[callback]();};}
if(token){formatTokenFunctions[token]=func;}
if(padded){formatTokenFunctions[padded[0]]=function(){return zeroFill(func.apply(this,arguments),padded[1],padded[2]);};}
if(ordinal){formatTokenFunctions[ordinal]=function(){return this.localeData().ordinal(func.apply(this,arguments),token);};}}
function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,'');}
return input.replace(/\\/g,'');}
function makeFormatFunction(format){var array=format.match(formattingTokens),i,length;for(i=0,length=array.length;i<length;i++){if(formatTokenFunctions[array[i]]){array[i]=formatTokenFunctions[array[i]];}else{array[i]=removeFormattingTokens(array[i]);}}
return function(mom){var output='',i;for(i=0;i<length;i++){output+=isFunction(array[i])?array[i].call(mom,format):array[i];}
return output;};}
function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate();}
format=expandFormat(format,m.localeData());formatFunctions[format]=formatFunctions[format]||makeFormatFunction(format);return formatFunctions[format](m);}
function expandFormat(format,locale){var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input)||input;}
localFormattingTokens.lastIndex=0;while(i>=0&&localFormattingTokens.test(format)){format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex=0;i-=1;}
return format;}
var match1=/\d/;var match2=/\d\d/;var match3=/\d{3}/;var match4=/\d{4}/;var match6=/[+-]?\d{6}/;var match1to2=/\d\d?/;var match3to4=/\d\d\d\d?/;var match5to6=/\d\d\d\d\d\d?/;var match1to3=/\d{1,3}/;var match1to4=/\d{1,4}/;var match1to6=/[+-]?\d{1,6}/;var matchUnsigned=/\d+/;var matchSigned=/[+-]?\d+/;var matchOffset=/Z|[+-]\d\d:?\d\d/gi;var matchShortOffset=/Z|[+-]\d\d(?::?\d\d)?/gi;var matchTimestamp=/[+-]?\d+(\.\d{1,3})?/;var matchWord=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;var regexes={};function addRegexToken(token,regex,strictRegex){regexes[token]=isFunction(regex)?regex:function(isStrict,localeData){return(isStrict&&strictRegex)?strictRegex:regex;};}
function getParseRegexForToken(token,config){if(!hasOwnProp(regexes,token)){return new RegExp(unescapeFormat(token));}
return regexes[token](config._strict,config._locale);}
function unescapeFormat(s){return regexEscape(s.replace('\\','').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1||p2||p3||p4;}));}
function regexEscape(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');}
var tokens={};function addParseToken(token,callback){var i,func=callback;if(typeof token==='string'){token=[token];}
if(isNumber(callback)){func=function(input,array){array[callback]=toInt(input);};}
for(i=0;i<token.length;i++){tokens[token[i]]=func;}}
function addWeekParseToken(token,callback){addParseToken(token,function(input,array,config,token){config._w=config._w||{};callback(input,config._w,config,token);});}
function addTimeToArrayFromToken(token,input,config){if(input!=null&&hasOwnProp(tokens,token)){tokens[token](input,config._a,config,token);}}
var YEAR=0;var MONTH=1;var DATE=2;var HOUR=3;var MINUTE=4;var SECOND=5;var MILLISECOND=6;var WEEK=7;var WEEKDAY=8;addFormatToken('Y',0,0,function(){var y=this.year();return y<=9999?''+y:'+'+y;});addFormatToken(0,['YY',2],0,function(){return this.year()%100;});addFormatToken(0,['YYYY',4],0,'year');addFormatToken(0,['YYYYY',5],0,'year');addFormatToken(0,['YYYYYY',6,true],0,'year');addUnitAlias('year','y');addUnitPriority('year',1);addRegexToken('Y',matchSigned);addRegexToken('YY',match1to2,match2);addRegexToken('YYYY',match1to4,match4);addRegexToken('YYYYY',match1to6,match6);addRegexToken('YYYYYY',match1to6,match6);addParseToken(['YYYYY','YYYYYY'],YEAR);addParseToken('YYYY',function(input,array){array[YEAR]=input.length===2?hooks.parseTwoDigitYear(input):toInt(input);});addParseToken('YY',function(input,array){array[YEAR]=hooks.parseTwoDigitYear(input);});addParseToken('Y',function(input,array){array[YEAR]=parseInt(input,10);});function daysInYear(year){return isLeapYear(year)?366:365;}
function isLeapYear(year){return(year%4===0&&year%100!==0)||year%400===0;}
hooks.parseTwoDigitYear=function(input){return toInt(input)+(toInt(input)>68?1900:2000);};var getSetYear=makeGetSet('FullYear',true);function getIsLeapYear(){return isLeapYear(this.year());}
function makeGetSet(unit,keepTime){return function(value){if(value!=null){set$1(this,unit,value);hooks.updateOffset(this,keepTime);return this;}else{return get(this,unit);}};}
function get(mom,unit){return mom.isValid()?mom._d['get'+(mom._isUTC?'UTC':'')+unit]():NaN;}
function set$1(mom,unit,value){if(mom.isValid()&&!isNaN(value)){if(unit==='FullYear'&&isLeapYear(mom.year())&&mom.month()===1&&mom.date()===29){mom._d['set'+(mom._isUTC?'UTC':'')+unit](value,mom.month(),daysInMonth(value,mom.month()));}
else{mom._d['set'+(mom._isUTC?'UTC':'')+unit](value);}}}
function stringGet(units){units=normalizeUnits(units);if(isFunction(this[units])){return this[units]();}
return this;}
function stringSet(units,value){if(typeof units==='object'){units=normalizeObjectUnits(units);var prioritized=getPrioritizedUnits(units);for(var i=0;i<prioritized.length;i++){this[prioritized[i].unit](units[prioritized[i].unit]);}}else{units=normalizeUnits(units);if(isFunction(this[units])){return this[units](value);}}
return this;}
function mod(n,x){return((n%x)+x)%x;}
var indexOf;if(Array.prototype.indexOf){indexOf=Array.prototype.indexOf;}else{indexOf=function(o){var i;for(i=0;i<this.length;++i){if(this[i]===o){return i;}}
return-1;};}
function daysInMonth(year,month){if(isNaN(year)||isNaN(month)){return NaN;}
var modMonth=mod(month,12);year+=(month-modMonth)/12;return modMonth===1?(isLeapYear(year)?29:28):(31-modMonth%7%2);}
addFormatToken('M',['MM',2],'Mo',function(){return this.month()+1;});addFormatToken('MMM',0,0,function(format){return this.localeData().monthsShort(this,format);});addFormatToken('MMMM',0,0,function(format){return this.localeData().months(this,format);});addUnitAlias('month','M');addUnitPriority('month',8);addRegexToken('M',match1to2);addRegexToken('MM',match1to2,match2);addRegexToken('MMM',function(isStrict,locale){return locale.monthsShortRegex(isStrict);});addRegexToken('MMMM',function(isStrict,locale){return locale.monthsRegex(isStrict);});addParseToken(['M','MM'],function(input,array){array[MONTH]=toInt(input)-1;});addParseToken(['MMM','MMMM'],function(input,array,config,token){var month=config._locale.monthsParse(input,token,config._strict);if(month!=null){array[MONTH]=month;}else{getParsingFlags(config).invalidMonth=input;}});var MONTHS_IN_FORMAT=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;var defaultLocaleMonths='January_February_March_April_May_June_July_August_September_October_November_December'.split('_');function localeMonths(m,format){if(!m){return isArray(this._months)?this._months:this._months['standalone'];}
return isArray(this._months)?this._months[m.month()]:this._months[(this._months.isFormat||MONTHS_IN_FORMAT).test(format)?'format':'standalone'][m.month()];}
var defaultLocaleMonthsShort='Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');function localeMonthsShort(m,format){if(!m){return isArray(this._monthsShort)?this._monthsShort:this._monthsShort['standalone'];}
return isArray(this._monthsShort)?this._monthsShort[m.month()]:this._monthsShort[MONTHS_IN_FORMAT.test(format)?'format':'standalone'][m.month()];}
function handleStrictParse(monthName,format,strict){var i,ii,mom,llc=monthName.toLocaleLowerCase();if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];for(i=0;i<12;++i){mom=createUTC([2000,i]);this._shortMonthsParse[i]=this.monthsShort(mom,'').toLocaleLowerCase();this._longMonthsParse[i]=this.months(mom,'').toLocaleLowerCase();}}
if(strict){if(format==='MMM'){ii=indexOf.call(this._shortMonthsParse,llc);return ii!==-1?ii:null;}else{ii=indexOf.call(this._longMonthsParse,llc);return ii!==-1?ii:null;}}else{if(format==='MMM'){ii=indexOf.call(this._shortMonthsParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._longMonthsParse,llc);return ii!==-1?ii:null;}else{ii=indexOf.call(this._longMonthsParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._shortMonthsParse,llc);return ii!==-1?ii:null;}}}
function localeMonthsParse(monthName,format,strict){var i,mom,regex;if(this._monthsParseExact){return handleStrictParse.call(this,monthName,format,strict);}
if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];}
for(i=0;i<12;i++){mom=createUTC([2000,i]);if(strict&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp('^'+this.months(mom,'').replace('.','')+'$','i');this._shortMonthsParse[i]=new RegExp('^'+this.monthsShort(mom,'').replace('.','')+'$','i');}
if(!strict&&!this._monthsParse[i]){regex='^'+this.months(mom,'')+'|^'+this.monthsShort(mom,'');this._monthsParse[i]=new RegExp(regex.replace('.',''),'i');}
if(strict&&format==='MMMM'&&this._longMonthsParse[i].test(monthName)){return i;}else if(strict&&format==='MMM'&&this._shortMonthsParse[i].test(monthName)){return i;}else if(!strict&&this._monthsParse[i].test(monthName)){return i;}}}
function setMonth(mom,value){var dayOfMonth;if(!mom.isValid()){return mom;}
if(typeof value==='string'){if(/^\d+$/.test(value)){value=toInt(value);}else{value=mom.localeData().monthsParse(value);if(!isNumber(value)){return mom;}}}
dayOfMonth=Math.min(mom.date(),daysInMonth(mom.year(),value));mom._d['set'+(mom._isUTC?'UTC':'')+'Month'](value,dayOfMonth);return mom;}
function getSetMonth(value){if(value!=null){setMonth(this,value);hooks.updateOffset(this,true);return this;}else{return get(this,'Month');}}
function getDaysInMonth(){return daysInMonth(this.year(),this.month());}
var defaultMonthsShortRegex=matchWord;function monthsShortRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,'_monthsRegex')){computeMonthsParse.call(this);}
if(isStrict){return this._monthsShortStrictRegex;}else{return this._monthsShortRegex;}}else{if(!hasOwnProp(this,'_monthsShortRegex')){this._monthsShortRegex=defaultMonthsShortRegex;}
return this._monthsShortStrictRegex&&isStrict?this._monthsShortStrictRegex:this._monthsShortRegex;}}
var defaultMonthsRegex=matchWord;function monthsRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,'_monthsRegex')){computeMonthsParse.call(this);}
if(isStrict){return this._monthsStrictRegex;}else{return this._monthsRegex;}}else{if(!hasOwnProp(this,'_monthsRegex')){this._monthsRegex=defaultMonthsRegex;}
return this._monthsStrictRegex&&isStrict?this._monthsStrictRegex:this._monthsRegex;}}
function computeMonthsParse(){function cmpLenRev(a,b){return b.length-a.length;}
var shortPieces=[],longPieces=[],mixedPieces=[],i,mom;for(i=0;i<12;i++){mom=createUTC([2000,i]);shortPieces.push(this.monthsShort(mom,''));longPieces.push(this.months(mom,''));mixedPieces.push(this.months(mom,''));mixedPieces.push(this.monthsShort(mom,''));}
shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for(i=0;i<12;i++){shortPieces[i]=regexEscape(shortPieces[i]);longPieces[i]=regexEscape(longPieces[i]);}
for(i=0;i<24;i++){mixedPieces[i]=regexEscape(mixedPieces[i]);}
this._monthsRegex=new RegExp('^('+mixedPieces.join('|')+')','i');this._monthsShortRegex=this._monthsRegex;this._monthsStrictRegex=new RegExp('^('+longPieces.join('|')+')','i');this._monthsShortStrictRegex=new RegExp('^('+shortPieces.join('|')+')','i');}
function createDate(y,m,d,h,M,s,ms){var date;if(y<100&&y>=0){date=new Date(y+400,m,d,h,M,s,ms);if(isFinite(date.getFullYear())){date.setFullYear(y);}}else{date=new Date(y,m,d,h,M,s,ms);}
return date;}
function createUTCDate(y){var date;if(y<100&&y>=0){var args=Array.prototype.slice.call(arguments);args[0]=y+400;date=new Date(Date.UTC.apply(null,args));if(isFinite(date.getUTCFullYear())){date.setUTCFullYear(y);}}else{date=new Date(Date.UTC.apply(null,arguments));}
return date;}
function firstWeekOffset(year,dow,doy){var
fwd=7+dow-doy,fwdlw=(7+createUTCDate(year,0,fwd).getUTCDay()-dow)%7;return-fwdlw+fwd-1;}
function dayOfYearFromWeeks(year,week,weekday,dow,doy){var localWeekday=(7+weekday-dow)%7,weekOffset=firstWeekOffset(year,dow,doy),dayOfYear=1+7*(week-1)+localWeekday+weekOffset,resYear,resDayOfYear;if(dayOfYear<=0){resYear=year-1;resDayOfYear=daysInYear(resYear)+dayOfYear;}else if(dayOfYear>daysInYear(year)){resYear=year+1;resDayOfYear=dayOfYear-daysInYear(year);}else{resYear=year;resDayOfYear=dayOfYear;}
return{year:resYear,dayOfYear:resDayOfYear};}
function weekOfYear(mom,dow,doy){var weekOffset=firstWeekOffset(mom.year(),dow,doy),week=Math.floor((mom.dayOfYear()-weekOffset-1)/7)+1,resWeek,resYear;if(week<1){resYear=mom.year()-1;resWeek=week+weeksInYear(resYear,dow,doy);}else if(week>weeksInYear(mom.year(),dow,doy)){resWeek=week-weeksInYear(mom.year(),dow,doy);resYear=mom.year()+1;}else{resYear=mom.year();resWeek=week;}
return{week:resWeek,year:resYear};}
function weeksInYear(year,dow,doy){var weekOffset=firstWeekOffset(year,dow,doy),weekOffsetNext=firstWeekOffset(year+1,dow,doy);return(daysInYear(year)-weekOffset+weekOffsetNext)/7;}
addFormatToken('w',['ww',2],'wo','week');addFormatToken('W',['WW',2],'Wo','isoWeek');addUnitAlias('week','w');addUnitAlias('isoWeek','W');addUnitPriority('week',5);addUnitPriority('isoWeek',5);addRegexToken('w',match1to2);addRegexToken('ww',match1to2,match2);addRegexToken('W',match1to2);addRegexToken('WW',match1to2,match2);addWeekParseToken(['w','ww','W','WW'],function(input,week,config,token){week[token.substr(0,1)]=toInt(input);});function localeWeek(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week;}
var defaultLocaleWeek={dow:0,doy:6};function localeFirstDayOfWeek(){return this._week.dow;}
function localeFirstDayOfYear(){return this._week.doy;}
function getSetWeek(input){var week=this.localeData().week(this);return input==null?week:this.add((input-week)*7,'d');}
function getSetISOWeek(input){var week=weekOfYear(this,1,4).week;return input==null?week:this.add((input-week)*7,'d');}
addFormatToken('d',0,'do','day');addFormatToken('dd',0,0,function(format){return this.localeData().weekdaysMin(this,format);});addFormatToken('ddd',0,0,function(format){return this.localeData().weekdaysShort(this,format);});addFormatToken('dddd',0,0,function(format){return this.localeData().weekdays(this,format);});addFormatToken('e',0,0,'weekday');addFormatToken('E',0,0,'isoWeekday');addUnitAlias('day','d');addUnitAlias('weekday','e');addUnitAlias('isoWeekday','E');addUnitPriority('day',11);addUnitPriority('weekday',11);addUnitPriority('isoWeekday',11);addRegexToken('d',match1to2);addRegexToken('e',match1to2);addRegexToken('E',match1to2);addRegexToken('dd',function(isStrict,locale){return locale.weekdaysMinRegex(isStrict);});addRegexToken('ddd',function(isStrict,locale){return locale.weekdaysShortRegex(isStrict);});addRegexToken('dddd',function(isStrict,locale){return locale.weekdaysRegex(isStrict);});addWeekParseToken(['dd','ddd','dddd'],function(input,week,config,token){var weekday=config._locale.weekdaysParse(input,token,config._strict);if(weekday!=null){week.d=weekday;}else{getParsingFlags(config).invalidWeekday=input;}});addWeekParseToken(['d','e','E'],function(input,week,config,token){week[token]=toInt(input);});function parseWeekday(input,locale){if(typeof input!=='string'){return input;}
if(!isNaN(input)){return parseInt(input,10);}
input=locale.weekdaysParse(input);if(typeof input==='number'){return input;}
return null;}
function parseIsoWeekday(input,locale){if(typeof input==='string'){return locale.weekdaysParse(input)%7||7;}
return isNaN(input)?null:input;}
function shiftWeekdays(ws,n){return ws.slice(n,7).concat(ws.slice(0,n));}
var defaultLocaleWeekdays='Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');function localeWeekdays(m,format){var weekdays=isArray(this._weekdays)?this._weekdays:this._weekdays[(m&&m!==true&&this._weekdays.isFormat.test(format))?'format':'standalone'];return(m===true)?shiftWeekdays(weekdays,this._week.dow):(m)?weekdays[m.day()]:weekdays;}
var defaultLocaleWeekdaysShort='Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');function localeWeekdaysShort(m){return(m===true)?shiftWeekdays(this._weekdaysShort,this._week.dow):(m)?this._weekdaysShort[m.day()]:this._weekdaysShort;}
var defaultLocaleWeekdaysMin='Su_Mo_Tu_We_Th_Fr_Sa'.split('_');function localeWeekdaysMin(m){return(m===true)?shiftWeekdays(this._weekdaysMin,this._week.dow):(m)?this._weekdaysMin[m.day()]:this._weekdaysMin;}
function handleStrictParse$1(weekdayName,format,strict){var i,ii,mom,llc=weekdayName.toLocaleLowerCase();if(!this._weekdaysParse){this._weekdaysParse=[];this._shortWeekdaysParse=[];this._minWeekdaysParse=[];for(i=0;i<7;++i){mom=createUTC([2000,1]).day(i);this._minWeekdaysParse[i]=this.weekdaysMin(mom,'').toLocaleLowerCase();this._shortWeekdaysParse[i]=this.weekdaysShort(mom,'').toLocaleLowerCase();this._weekdaysParse[i]=this.weekdays(mom,'').toLocaleLowerCase();}}
if(strict){if(format==='dddd'){ii=indexOf.call(this._weekdaysParse,llc);return ii!==-1?ii:null;}else if(format==='ddd'){ii=indexOf.call(this._shortWeekdaysParse,llc);return ii!==-1?ii:null;}else{ii=indexOf.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}}else{if(format==='dddd'){ii=indexOf.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._shortWeekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}else if(format==='ddd'){ii=indexOf.call(this._shortWeekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}else{ii=indexOf.call(this._minWeekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._shortWeekdaysParse,llc);return ii!==-1?ii:null;}}}
function localeWeekdaysParse(weekdayName,format,strict){var i,mom,regex;if(this._weekdaysParseExact){return handleStrictParse$1.call(this,weekdayName,format,strict);}
if(!this._weekdaysParse){this._weekdaysParse=[];this._minWeekdaysParse=[];this._shortWeekdaysParse=[];this._fullWeekdaysParse=[];}
for(i=0;i<7;i++){mom=createUTC([2000,1]).day(i);if(strict&&!this._fullWeekdaysParse[i]){this._fullWeekdaysParse[i]=new RegExp('^'+this.weekdays(mom,'').replace('.','\\.?')+'$','i');this._shortWeekdaysParse[i]=new RegExp('^'+this.weekdaysShort(mom,'').replace('.','\\.?')+'$','i');this._minWeekdaysParse[i]=new RegExp('^'+this.weekdaysMin(mom,'').replace('.','\\.?')+'$','i');}
if(!this._weekdaysParse[i]){regex='^'+this.weekdays(mom,'')+'|^'+this.weekdaysShort(mom,'')+'|^'+this.weekdaysMin(mom,'');this._weekdaysParse[i]=new RegExp(regex.replace('.',''),'i');}
if(strict&&format==='dddd'&&this._fullWeekdaysParse[i].test(weekdayName)){return i;}else if(strict&&format==='ddd'&&this._shortWeekdaysParse[i].test(weekdayName)){return i;}else if(strict&&format==='dd'&&this._minWeekdaysParse[i].test(weekdayName)){return i;}else if(!strict&&this._weekdaysParse[i].test(weekdayName)){return i;}}}
function getSetDayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}
var day=this._isUTC?this._d.getUTCDay():this._d.getDay();if(input!=null){input=parseWeekday(input,this.localeData());return this.add(input-day,'d');}else{return day;}}
function getSetLocaleDayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}
var weekday=(this.day()+7-this.localeData()._week.dow)%7;return input==null?weekday:this.add(input-weekday,'d');}
function getSetISODayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}
if(input!=null){var weekday=parseIsoWeekday(input,this.localeData());return this.day(this.day()%7?weekday:weekday-7);}else{return this.day()||7;}}
var defaultWeekdaysRegex=matchWord;function weekdaysRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,'_weekdaysRegex')){computeWeekdaysParse.call(this);}
if(isStrict){return this._weekdaysStrictRegex;}else{return this._weekdaysRegex;}}else{if(!hasOwnProp(this,'_weekdaysRegex')){this._weekdaysRegex=defaultWeekdaysRegex;}
return this._weekdaysStrictRegex&&isStrict?this._weekdaysStrictRegex:this._weekdaysRegex;}}
var defaultWeekdaysShortRegex=matchWord;function weekdaysShortRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,'_weekdaysRegex')){computeWeekdaysParse.call(this);}
if(isStrict){return this._weekdaysShortStrictRegex;}else{return this._weekdaysShortRegex;}}else{if(!hasOwnProp(this,'_weekdaysShortRegex')){this._weekdaysShortRegex=defaultWeekdaysShortRegex;}
return this._weekdaysShortStrictRegex&&isStrict?this._weekdaysShortStrictRegex:this._weekdaysShortRegex;}}
var defaultWeekdaysMinRegex=matchWord;function weekdaysMinRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,'_weekdaysRegex')){computeWeekdaysParse.call(this);}
if(isStrict){return this._weekdaysMinStrictRegex;}else{return this._weekdaysMinRegex;}}else{if(!hasOwnProp(this,'_weekdaysMinRegex')){this._weekdaysMinRegex=defaultWeekdaysMinRegex;}
return this._weekdaysMinStrictRegex&&isStrict?this._weekdaysMinStrictRegex:this._weekdaysMinRegex;}}
function computeWeekdaysParse(){function cmpLenRev(a,b){return b.length-a.length;}
var minPieces=[],shortPieces=[],longPieces=[],mixedPieces=[],i,mom,minp,shortp,longp;for(i=0;i<7;i++){mom=createUTC([2000,1]).day(i);minp=this.weekdaysMin(mom,'');shortp=this.weekdaysShort(mom,'');longp=this.weekdays(mom,'');minPieces.push(minp);shortPieces.push(shortp);longPieces.push(longp);mixedPieces.push(minp);mixedPieces.push(shortp);mixedPieces.push(longp);}
minPieces.sort(cmpLenRev);shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for(i=0;i<7;i++){shortPieces[i]=regexEscape(shortPieces[i]);longPieces[i]=regexEscape(longPieces[i]);mixedPieces[i]=regexEscape(mixedPieces[i]);}
this._weekdaysRegex=new RegExp('^('+mixedPieces.join('|')+')','i');this._weekdaysShortRegex=this._weekdaysRegex;this._weekdaysMinRegex=this._weekdaysRegex;this._weekdaysStrictRegex=new RegExp('^('+longPieces.join('|')+')','i');this._weekdaysShortStrictRegex=new RegExp('^('+shortPieces.join('|')+')','i');this._weekdaysMinStrictRegex=new RegExp('^('+minPieces.join('|')+')','i');}
function hFormat(){return this.hours()%12||12;}
function kFormat(){return this.hours()||24;}
addFormatToken('H',['HH',2],0,'hour');addFormatToken('h',['hh',2],0,hFormat);addFormatToken('k',['kk',2],0,kFormat);addFormatToken('hmm',0,0,function(){return ''+hFormat.apply(this)+zeroFill(this.minutes(),2);});addFormatToken('hmmss',0,0,function(){return ''+hFormat.apply(this)+zeroFill(this.minutes(),2)+
zeroFill(this.seconds(),2);});addFormatToken('Hmm',0,0,function(){return ''+this.hours()+zeroFill(this.minutes(),2);});addFormatToken('Hmmss',0,0,function(){return ''+this.hours()+zeroFill(this.minutes(),2)+
zeroFill(this.seconds(),2);});function meridiem(token,lowercase){addFormatToken(token,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),lowercase);});}
meridiem('a',true);meridiem('A',false);addUnitAlias('hour','h');addUnitPriority('hour',13);function matchMeridiem(isStrict,locale){return locale._meridiemParse;}
addRegexToken('a',matchMeridiem);addRegexToken('A',matchMeridiem);addRegexToken('H',match1to2);addRegexToken('h',match1to2);addRegexToken('k',match1to2);addRegexToken('HH',match1to2,match2);addRegexToken('hh',match1to2,match2);addRegexToken('kk',match1to2,match2);addRegexToken('hmm',match3to4);addRegexToken('hmmss',match5to6);addRegexToken('Hmm',match3to4);addRegexToken('Hmmss',match5to6);addParseToken(['H','HH'],HOUR);addParseToken(['k','kk'],function(input,array,config){var kInput=toInt(input);array[HOUR]=kInput===24?0:kInput;});addParseToken(['a','A'],function(input,array,config){config._isPm=config._locale.isPM(input);config._meridiem=input;});addParseToken(['h','hh'],function(input,array,config){array[HOUR]=toInt(input);getParsingFlags(config).bigHour=true;});addParseToken('hmm',function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos));getParsingFlags(config).bigHour=true;});addParseToken('hmmss',function(input,array,config){var pos1=input.length-4;var pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2));getParsingFlags(config).bigHour=true;});addParseToken('Hmm',function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos));});addParseToken('Hmmss',function(input,array,config){var pos1=input.length-4;var pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2));});function localeIsPM(input){return((input+'').toLowerCase().charAt(0)==='p');}
var defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i;function localeMeridiem(hours,minutes,isLower){if(hours>11){return isLower?'pm':'PM';}else{return isLower?'am':'AM';}}
var getSetHour=makeGetSet('Hours',true);var baseConfig={calendar:defaultCalendar,longDateFormat:defaultLongDateFormat,invalidDate:defaultInvalidDate,ordinal:defaultOrdinal,dayOfMonthOrdinalParse:defaultDayOfMonthOrdinalParse,relativeTime:defaultRelativeTime,months:defaultLocaleMonths,monthsShort:defaultLocaleMonthsShort,week:defaultLocaleWeek,weekdays:defaultLocaleWeekdays,weekdaysMin:defaultLocaleWeekdaysMin,weekdaysShort:defaultLocaleWeekdaysShort,meridiemParse:defaultLocaleMeridiemParse};var locales={};var localeFamilies={};var globalLocale;function normalizeLocale(key){return key?key.toLowerCase().replace('_','-'):key;}
function chooseLocale(names){var i=0,j,next,locale,split;while(i<names.length){split=normalizeLocale(names[i]).split('-');j=split.length;next=normalizeLocale(names[i+1]);next=next?next.split('-'):null;while(j>0){locale=loadLocale(split.slice(0,j).join('-'));if(locale){return locale;}
if(next&&next.length>=j&&compareArrays(split,next,true)>=j-1){break;}
j--;}
i++;}
return globalLocale;}
function loadLocale(name){var oldLocale=null;if(!locales[name]&&(typeof module!=='undefined')&&module&&module.exports){try{oldLocale=globalLocale._abbr;var aliasedRequire=require;aliasedRequire('./locale/'+name);getSetGlobalLocale(oldLocale);}catch(e){}}
return locales[name];}
function getSetGlobalLocale(key,values){var data;if(key){if(isUndefined(values)){data=getLocale(key);}
else{data=defineLocale(key,values);}
if(data){globalLocale=data;}
else{if((typeof console!=='undefined')&&console.warn){console.warn('Locale '+key+' not found. Did you forget to load it?');}}}
return globalLocale._abbr;}
function defineLocale(name,config){if(config!==null){var locale,parentConfig=baseConfig;config.abbr=name;if(locales[name]!=null){deprecateSimple('defineLocaleOverride','use moment.updateLocale(localeName, config) to change '+
'an existing locale. moment.defineLocale(localeName, '+
'config) should only be used for creating a new locale '+
'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');parentConfig=locales[name]._config;}else if(config.parentLocale!=null){if(locales[config.parentLocale]!=null){parentConfig=locales[config.parentLocale]._config;}else{locale=loadLocale(config.parentLocale);if(locale!=null){parentConfig=locale._config;}else{if(!localeFamilies[config.parentLocale]){localeFamilies[config.parentLocale]=[];}
localeFamilies[config.parentLocale].push({name:name,config:config});return null;}}}
locales[name]=new Locale(mergeConfigs(parentConfig,config));if(localeFamilies[name]){localeFamilies[name].forEach(function(x){defineLocale(x.name,x.config);});}
getSetGlobalLocale(name);return locales[name];}else{delete locales[name];return null;}}
function updateLocale(name,config){if(config!=null){var locale,tmpLocale,parentConfig=baseConfig;tmpLocale=loadLocale(name);if(tmpLocale!=null){parentConfig=tmpLocale._config;}
config=mergeConfigs(parentConfig,config);locale=new Locale(config);locale.parentLocale=locales[name];locales[name]=locale;getSetGlobalLocale(name);}else{if(locales[name]!=null){if(locales[name].parentLocale!=null){locales[name]=locales[name].parentLocale;}else if(locales[name]!=null){delete locales[name];}}}
return locales[name];}
function getLocale(key){var locale;if(key&&key._locale&&key._locale._abbr){key=key._locale._abbr;}
if(!key){return globalLocale;}
if(!isArray(key)){locale=loadLocale(key);if(locale){return locale;}
key=[key];}
return chooseLocale(key);}
function listLocales(){return keys(locales);}
function checkOverflow(m){var overflow;var a=m._a;if(a&&getParsingFlags(m).overflow===-2){overflow=a[MONTH]<0||a[MONTH]>11?MONTH:a[DATE]<1||a[DATE]>daysInMonth(a[YEAR],a[MONTH])?DATE:a[HOUR]<0||a[HOUR]>24||(a[HOUR]===24&&(a[MINUTE]!==0||a[SECOND]!==0||a[MILLISECOND]!==0))?HOUR:a[MINUTE]<0||a[MINUTE]>59?MINUTE:a[SECOND]<0||a[SECOND]>59?SECOND:a[MILLISECOND]<0||a[MILLISECOND]>999?MILLISECOND:-1;if(getParsingFlags(m)._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)){overflow=DATE;}
if(getParsingFlags(m)._overflowWeeks&&overflow===-1){overflow=WEEK;}
if(getParsingFlags(m)._overflowWeekday&&overflow===-1){overflow=WEEKDAY;}
getParsingFlags(m).overflow=overflow;}
return m;}
function defaults(a,b,c){if(a!=null){return a;}
if(b!=null){return b;}
return c;}
function currentDateArray(config){var nowValue=new Date(hooks.now());if(config._useUTC){return[nowValue.getUTCFullYear(),nowValue.getUTCMonth(),nowValue.getUTCDate()];}
return[nowValue.getFullYear(),nowValue.getMonth(),nowValue.getDate()];}
function configFromArray(config){var i,date,input=[],currentDate,expectedWeekday,yearToUse;if(config._d){return;}
currentDate=currentDateArray(config);if(config._w&&config._a[DATE]==null&&config._a[MONTH]==null){dayOfYearFromWeekInfo(config);}
if(config._dayOfYear!=null){yearToUse=defaults(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear>daysInYear(yearToUse)||config._dayOfYear===0){getParsingFlags(config)._overflowDayOfYear=true;}
date=createUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH]=date.getUTCMonth();config._a[DATE]=date.getUTCDate();}
for(i=0;i<3&&config._a[i]==null;++i){config._a[i]=input[i]=currentDate[i];}
for(;i<7;i++){config._a[i]=input[i]=(config._a[i]==null)?(i===2?1:0):config._a[i];}
if(config._a[HOUR]===24&&config._a[MINUTE]===0&&config._a[SECOND]===0&&config._a[MILLISECOND]===0){config._nextDay=true;config._a[HOUR]=0;}
config._d=(config._useUTC?createUTCDate:createDate).apply(null,input);expectedWeekday=config._useUTC?config._d.getUTCDay():config._d.getDay();if(config._tzm!=null){config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm);}
if(config._nextDay){config._a[HOUR]=24;}
if(config._w&&typeof config._w.d!=='undefined'&&config._w.d!==expectedWeekday){getParsingFlags(config).weekdayMismatch=true;}}
function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp,weekdayOverflow;w=config._w;if(w.GG!=null||w.W!=null||w.E!=null){dow=1;doy=4;weekYear=defaults(w.GG,config._a[YEAR],weekOfYear(createLocal(),1,4).year);week=defaults(w.W,1);weekday=defaults(w.E,1);if(weekday<1||weekday>7){weekdayOverflow=true;}}else{dow=config._locale._week.dow;doy=config._locale._week.doy;var curWeek=weekOfYear(createLocal(),dow,doy);weekYear=defaults(w.gg,config._a[YEAR],curWeek.year);week=defaults(w.w,curWeek.week);if(w.d!=null){weekday=w.d;if(weekday<0||weekday>6){weekdayOverflow=true;}}else if(w.e!=null){weekday=w.e+dow;if(w.e<0||w.e>6){weekdayOverflow=true;}}else{weekday=dow;}}
if(week<1||week>weeksInYear(weekYear,dow,doy)){getParsingFlags(config)._overflowWeeks=true;}else if(weekdayOverflow!=null){getParsingFlags(config)._overflowWeekday=true;}else{temp=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy);config._a[YEAR]=temp.year;config._dayOfYear=temp.dayOfYear;}}
var extendedIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;var basicIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;var tzRegex=/Z|[+-]\d\d(?::?\d\d)?/;var isoDates=[['YYYYYY-MM-DD',/[+-]\d{6}-\d\d-\d\d/],['YYYY-MM-DD',/\d{4}-\d\d-\d\d/],['GGGG-[W]WW-E',/\d{4}-W\d\d-\d/],['GGGG-[W]WW',/\d{4}-W\d\d/,false],['YYYY-DDD',/\d{4}-\d{3}/],['YYYY-MM',/\d{4}-\d\d/,false],['YYYYYYMMDD',/[+-]\d{10}/],['YYYYMMDD',/\d{8}/],['GGGG[W]WWE',/\d{4}W\d{3}/],['GGGG[W]WW',/\d{4}W\d{2}/,false],['YYYYDDD',/\d{7}/]];var isoTimes=[['HH:mm:ss.SSSS',/\d\d:\d\d:\d\d\.\d+/],['HH:mm:ss,SSSS',/\d\d:\d\d:\d\d,\d+/],['HH:mm:ss',/\d\d:\d\d:\d\d/],['HH:mm',/\d\d:\d\d/],['HHmmss.SSSS',/\d\d\d\d\d\d\.\d+/],['HHmmss,SSSS',/\d\d\d\d\d\d,\d+/],['HHmmss',/\d\d\d\d\d\d/],['HHmm',/\d\d\d\d/],['HH',/\d\d/]];var aspNetJsonRegex=/^\/?Date\((\-?\d+)/i;function configFromISO(config){var i,l,string=config._i,match=extendedIsoRegex.exec(string)||basicIsoRegex.exec(string),allowTime,dateFormat,timeFormat,tzFormat;if(match){getParsingFlags(config).iso=true;for(i=0,l=isoDates.length;i<l;i++){if(isoDates[i][1].exec(match[1])){dateFormat=isoDates[i][0];allowTime=isoDates[i][2]!==false;break;}}
if(dateFormat==null){config._isValid=false;return;}
if(match[3]){for(i=0,l=isoTimes.length;i<l;i++){if(isoTimes[i][1].exec(match[3])){timeFormat=(match[2]||' ')+isoTimes[i][0];break;}}
if(timeFormat==null){config._isValid=false;return;}}
if(!allowTime&&timeFormat!=null){config._isValid=false;return;}
if(match[4]){if(tzRegex.exec(match[4])){tzFormat='Z';}else{config._isValid=false;return;}}
config._f=dateFormat+(timeFormat||'')+(tzFormat||'');configFromStringAndFormat(config);}else{config._isValid=false;}}
var rfc2822=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function extractFromRFC2822Strings(yearStr,monthStr,dayStr,hourStr,minuteStr,secondStr){var result=[untruncateYear(yearStr),defaultLocaleMonthsShort.indexOf(monthStr),parseInt(dayStr,10),parseInt(hourStr,10),parseInt(minuteStr,10)];if(secondStr){result.push(parseInt(secondStr,10));}
return result;}
function untruncateYear(yearStr){var year=parseInt(yearStr,10);if(year<=49){return 2000+year;}else if(year<=999){return 1900+year;}
return year;}
function preprocessRFC2822(s){return s.replace(/\([^)]*\)|[\n\t]/g,' ').replace(/(\s\s+)/g,' ').replace(/^\s\s*/,'').replace(/\s\s*$/,'');}
function checkWeekday(weekdayStr,parsedInput,config){if(weekdayStr){var weekdayProvided=defaultLocaleWeekdaysShort.indexOf(weekdayStr),weekdayActual=new Date(parsedInput[0],parsedInput[1],parsedInput[2]).getDay();if(weekdayProvided!==weekdayActual){getParsingFlags(config).weekdayMismatch=true;config._isValid=false;return false;}}
return true;}
var obsOffsets={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function calculateOffset(obsOffset,militaryOffset,numOffset){if(obsOffset){return obsOffsets[obsOffset];}else if(militaryOffset){return 0;}else{var hm=parseInt(numOffset,10);var m=hm%100,h=(hm-m)/100;return h*60+m;}}
function configFromRFC2822(config){var match=rfc2822.exec(preprocessRFC2822(config._i));if(match){var parsedArray=extractFromRFC2822Strings(match[4],match[3],match[2],match[5],match[6],match[7]);if(!checkWeekday(match[1],parsedArray,config)){return;}
config._a=parsedArray;config._tzm=calculateOffset(match[8],match[9],match[10]);config._d=createUTCDate.apply(null,config._a);config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm);getParsingFlags(config).rfc2822=true;}else{config._isValid=false;}}
function configFromString(config){var matched=aspNetJsonRegex.exec(config._i);if(matched!==null){config._d=new Date(+matched[1]);return;}
configFromISO(config);if(config._isValid===false){delete config._isValid;}else{return;}
configFromRFC2822(config);if(config._isValid===false){delete config._isValid;}else{return;}
hooks.createFromInputFallback(config);}
hooks.createFromInputFallback=deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), '+
'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are '+
'discouraged and will be removed in an upcoming major release. Please refer to '+
'http://momentjs.com/guides/#/warnings/js-date/ for more info.',function(config){config._d=new Date(config._i+(config._useUTC?' UTC':''));});hooks.ISO_8601=function(){};hooks.RFC_2822=function(){};function configFromStringAndFormat(config){if(config._f===hooks.ISO_8601){configFromISO(config);return;}
if(config._f===hooks.RFC_2822){configFromRFC2822(config);return;}
config._a=[];getParsingFlags(config).empty=true;var string=''+config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0;tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[];for(i=0;i<tokens.length;i++){token=tokens[i];parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0];if(parsedInput){skipped=string.substr(0,string.indexOf(parsedInput));if(skipped.length>0){getParsingFlags(config).unusedInput.push(skipped);}
string=string.slice(string.indexOf(parsedInput)+parsedInput.length);totalParsedInputLength+=parsedInput.length;}
if(formatTokenFunctions[token]){if(parsedInput){getParsingFlags(config).empty=false;}
else{getParsingFlags(config).unusedTokens.push(token);}
addTimeToArrayFromToken(token,parsedInput,config);}
else if(config._strict&&!parsedInput){getParsingFlags(config).unusedTokens.push(token);}}
getParsingFlags(config).charsLeftOver=stringLength-totalParsedInputLength;if(string.length>0){getParsingFlags(config).unusedInput.push(string);}
if(config._a[HOUR]<=12&&getParsingFlags(config).bigHour===true&&config._a[HOUR]>0){getParsingFlags(config).bigHour=undefined;}
getParsingFlags(config).parsedDateParts=config._a.slice(0);getParsingFlags(config).meridiem=config._meridiem;config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);configFromArray(config);checkOverflow(config);}
function meridiemFixWrap(locale,hour,meridiem){var isPm;if(meridiem==null){return hour;}
if(locale.meridiemHour!=null){return locale.meridiemHour(hour,meridiem);}else if(locale.isPM!=null){isPm=locale.isPM(meridiem);if(isPm&&hour<12){hour+=12;}
if(!isPm&&hour===12){hour=0;}
return hour;}else{return hour;}}
function configFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;if(config._f.length===0){getParsingFlags(config).invalidFormat=true;config._d=new Date(NaN);return;}
for(i=0;i<config._f.length;i++){currentScore=0;tempConfig=copyConfig({},config);if(config._useUTC!=null){tempConfig._useUTC=config._useUTC;}
tempConfig._f=config._f[i];configFromStringAndFormat(tempConfig);if(!isValid(tempConfig)){continue;}
currentScore+=getParsingFlags(tempConfig).charsLeftOver;currentScore+=getParsingFlags(tempConfig).unusedTokens.length*10;getParsingFlags(tempConfig).score=currentScore;if(scoreToBeat==null||currentScore<scoreToBeat){scoreToBeat=currentScore;bestMoment=tempConfig;}}
extend(config,bestMoment||tempConfig);}
function configFromObject(config){if(config._d){return;}
var i=normalizeObjectUnits(config._i);config._a=map([i.year,i.month,i.day||i.date,i.hour,i.minute,i.second,i.millisecond],function(obj){return obj&&parseInt(obj,10);});configFromArray(config);}
function createFromConfig(config){var res=new Moment(checkOverflow(prepareConfig(config)));if(res._nextDay){res.add(1,'d');res._nextDay=undefined;}
return res;}
function prepareConfig(config){var input=config._i,format=config._f;config._locale=config._locale||getLocale(config._l);if(input===null||(format===undefined&&input==='')){return createInvalid({nullInput:true});}
if(typeof input==='string'){config._i=input=config._locale.preparse(input);}
if(isMoment(input)){return new Moment(checkOverflow(input));}else if(isDate(input)){config._d=input;}else if(isArray(format)){configFromStringAndArray(config);}else if(format){configFromStringAndFormat(config);}else{configFromInput(config);}
if(!isValid(config)){config._d=null;}
return config;}
function configFromInput(config){var input=config._i;if(isUndefined(input)){config._d=new Date(hooks.now());}else if(isDate(input)){config._d=new Date(input.valueOf());}else if(typeof input==='string'){configFromString(config);}else if(isArray(input)){config._a=map(input.slice(0),function(obj){return parseInt(obj,10);});configFromArray(config);}else if(isObject(input)){configFromObject(config);}else if(isNumber(input)){config._d=new Date(input);}else{hooks.createFromInputFallback(config);}}
function createLocalOrUTC(input,format,locale,strict,isUTC){var c={};if(locale===true||locale===false){strict=locale;locale=undefined;}
if((isObject(input)&&isObjectEmpty(input))||(isArray(input)&&input.length===0)){input=undefined;}
c._isAMomentObject=true;c._useUTC=c._isUTC=isUTC;c._l=locale;c._i=input;c._f=format;c._strict=strict;return createFromConfig(c);}
function createLocal(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,false);}
var prototypeMin=deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',function(){var other=createLocal.apply(null,arguments);if(this.isValid()&&other.isValid()){return other<this?this:other;}else{return createInvalid();}});var prototypeMax=deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',function(){var other=createLocal.apply(null,arguments);if(this.isValid()&&other.isValid()){return other>this?this:other;}else{return createInvalid();}});function pickBy(fn,moments){var res,i;if(moments.length===1&&isArray(moments[0])){moments=moments[0];}
if(!moments.length){return createLocal();}
res=moments[0];for(i=1;i<moments.length;++i){if(!moments[i].isValid()||moments[i][fn](res)){res=moments[i];}}
return res;}
function min(){var args=[].slice.call(arguments,0);return pickBy('isBefore',args);}
function max(){var args=[].slice.call(arguments,0);return pickBy('isAfter',args);}
var now=function(){return Date.now?Date.now():+(new Date());};var ordering=['year','quarter','month','week','day','hour','minute','second','millisecond'];function isDurationValid(m){for(var key in m){if(!(indexOf.call(ordering,key)!==-1&&(m[key]==null||!isNaN(m[key])))){return false;}}
var unitHasDecimal=false;for(var i=0;i<ordering.length;++i){if(m[ordering[i]]){if(unitHasDecimal){return false;}
if(parseFloat(m[ordering[i]])!==toInt(m[ordering[i]])){unitHasDecimal=true;}}}
return true;}
function isValid$1(){return this._isValid;}
function createInvalid$1(){return createDuration(NaN);}
function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year||0,quarters=normalizedInput.quarter||0,months=normalizedInput.month||0,weeks=normalizedInput.week||normalizedInput.isoWeek||0,days=normalizedInput.day||0,hours=normalizedInput.hour||0,minutes=normalizedInput.minute||0,seconds=normalizedInput.second||0,milliseconds=normalizedInput.millisecond||0;this._isValid=isDurationValid(normalizedInput);this._milliseconds=+milliseconds+
seconds*1e3+
minutes*6e4+
hours*1000*60*60;this._days=+days+
weeks*7;this._months=+months+
quarters*3+
years*12;this._data={};this._locale=getLocale();this._bubble();}
function isDuration(obj){return obj instanceof Duration;}
function absRound(number){if(number<0){return Math.round(-1*number)*-1;}else{return Math.round(number);}}
function offset(token,separator){addFormatToken(token,0,0,function(){var offset=this.utcOffset();var sign='+';if(offset<0){offset=-offset;sign='-';}
return sign+zeroFill(~~(offset/60),2)+separator+zeroFill(~~(offset)%60,2);});}
offset('Z',':');offset('ZZ','');addRegexToken('Z',matchShortOffset);addRegexToken('ZZ',matchShortOffset);addParseToken(['Z','ZZ'],function(input,array,config){config._useUTC=true;config._tzm=offsetFromString(matchShortOffset,input);});var chunkOffset=/([\+\-]|\d\d)/gi;function offsetFromString(matcher,string){var matches=(string||'').match(matcher);if(matches===null){return null;}
var chunk=matches[matches.length-1]||[];var parts=(chunk+'').match(chunkOffset)||['-',0,0];var minutes=+(parts[1]*60)+toInt(parts[2]);return minutes===0?0:parts[0]==='+'?minutes:-minutes;}
function cloneWithOffset(input,model){var res,diff;if(model._isUTC){res=model.clone();diff=(isMoment(input)||isDate(input)?input.valueOf():createLocal(input).valueOf())-res.valueOf();res._d.setTime(res._d.valueOf()+diff);hooks.updateOffset(res,false);return res;}else{return createLocal(input).local();}}
function getDateOffset(m){return-Math.round(m._d.getTimezoneOffset()/15)*15;}
hooks.updateOffset=function(){};function getSetOffset(input,keepLocalTime,keepMinutes){var offset=this._offset||0,localAdjust;if(!this.isValid()){return input!=null?this:NaN;}
if(input!=null){if(typeof input==='string'){input=offsetFromString(matchShortOffset,input);if(input===null){return this;}}else if(Math.abs(input)<16&&!keepMinutes){input=input*60;}
if(!this._isUTC&&keepLocalTime){localAdjust=getDateOffset(this);}
this._offset=input;this._isUTC=true;if(localAdjust!=null){this.add(localAdjust,'m');}
if(offset!==input){if(!keepLocalTime||this._changeInProgress){addSubtract(this,createDuration(input-offset,'m'),1,false);}else if(!this._changeInProgress){this._changeInProgress=true;hooks.updateOffset(this,true);this._changeInProgress=null;}}
return this;}else{return this._isUTC?offset:getDateOffset(this);}}
function getSetZone(input,keepLocalTime){if(input!=null){if(typeof input!=='string'){input=-input;}
this.utcOffset(input,keepLocalTime);return this;}else{return-this.utcOffset();}}
function setOffsetToUTC(keepLocalTime){return this.utcOffset(0,keepLocalTime);}
function setOffsetToLocal(keepLocalTime){if(this._isUTC){this.utcOffset(0,keepLocalTime);this._isUTC=false;if(keepLocalTime){this.subtract(getDateOffset(this),'m');}}
return this;}
function setOffsetToParsedOffset(){if(this._tzm!=null){this.utcOffset(this._tzm,false,true);}else if(typeof this._i==='string'){var tZone=offsetFromString(matchOffset,this._i);if(tZone!=null){this.utcOffset(tZone);}
else{this.utcOffset(0,true);}}
return this;}
function hasAlignedHourOffset(input){if(!this.isValid()){return false;}
input=input?createLocal(input).utcOffset():0;return(this.utcOffset()-input)%60===0;}
function isDaylightSavingTime(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset());}
function isDaylightSavingTimeShifted(){if(!isUndefined(this._isDSTShifted)){return this._isDSTShifted;}
var c={};copyConfig(c,this);c=prepareConfig(c);if(c._a){var other=c._isUTC?createUTC(c._a):createLocal(c._a);this._isDSTShifted=this.isValid()&&compareArrays(c._a,other.toArray())>0;}else{this._isDSTShifted=false;}
return this._isDSTShifted;}
function isLocal(){return this.isValid()?!this._isUTC:false;}
function isUtcOffset(){return this.isValid()?this._isUTC:false;}
function isUtc(){return this.isValid()?this._isUTC&&this._offset===0:false;}
var aspNetRegex=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;var isoRegex=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function createDuration(input,key){var duration=input,match=null,sign,ret,diffRes;if(isDuration(input)){duration={ms:input._milliseconds,d:input._days,M:input._months};}else if(isNumber(input)){duration={};if(key){duration[key]=input;}else{duration.milliseconds=input;}}else if(!!(match=aspNetRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(absRound(match[MILLISECOND]*1000))*sign};}else if(!!(match=isoRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:parseIso(match[2],sign),M:parseIso(match[3],sign),w:parseIso(match[4],sign),d:parseIso(match[5],sign),h:parseIso(match[6],sign),m:parseIso(match[7],sign),s:parseIso(match[8],sign)};}else if(duration==null){duration={};}else if(typeof duration==='object'&&('from'in duration||'to'in duration)){diffRes=momentsDifference(createLocal(duration.from),createLocal(duration.to));duration={};duration.ms=diffRes.milliseconds;duration.M=diffRes.months;}
ret=new Duration(duration);if(isDuration(input)&&hasOwnProp(input,'_locale')){ret._locale=input._locale;}
return ret;}
createDuration.fn=Duration.prototype;createDuration.invalid=createInvalid$1;function parseIso(inp,sign){var res=inp&&parseFloat(inp.replace(',','.'));return(isNaN(res)?0:res)*sign;}
function positiveMomentsDifference(base,other){var res={};res.months=other.month()-base.month()+
(other.year()-base.year())*12;if(base.clone().add(res.months,'M').isAfter(other)){--res.months;}
res.milliseconds=+other-+(base.clone().add(res.months,'M'));return res;}
function momentsDifference(base,other){var res;if(!(base.isValid()&&other.isValid())){return{milliseconds:0,months:0};}
other=cloneWithOffset(other,base);if(base.isBefore(other)){res=positiveMomentsDifference(base,other);}else{res=positiveMomentsDifference(other,base);res.milliseconds=-res.milliseconds;res.months=-res.months;}
return res;}
function createAdder(direction,name){return function(val,period){var dur,tmp;if(period!==null&&!isNaN(+period)){deprecateSimple(name,'moment().'+name+'(period, number) is deprecated. Please use moment().'+name+'(number, period). '+
'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');tmp=val;val=period;period=tmp;}
val=typeof val==='string'?+val:val;dur=createDuration(val,period);addSubtract(this,dur,direction);return this;};}
function addSubtract(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=absRound(duration._days),months=absRound(duration._months);if(!mom.isValid()){return;}
updateOffset=updateOffset==null?true:updateOffset;if(months){setMonth(mom,get(mom,'Month')+months*isAdding);}
if(days){set$1(mom,'Date',get(mom,'Date')+days*isAdding);}
if(milliseconds){mom._d.setTime(mom._d.valueOf()+milliseconds*isAdding);}
if(updateOffset){hooks.updateOffset(mom,days||months);}}
var add=createAdder(1,'add');var subtract=createAdder(-1,'subtract');function getCalendarFormat(myMoment,now){var diff=myMoment.diff(now,'days',true);return diff<-6?'sameElse':diff<-1?'lastWeek':diff<0?'lastDay':diff<1?'sameDay':diff<2?'nextDay':diff<7?'nextWeek':'sameElse';}
function calendar$1(time,formats){var now=time||createLocal(),sod=cloneWithOffset(now,this).startOf('day'),format=hooks.calendarFormat(this,sod)||'sameElse';var output=formats&&(isFunction(formats[format])?formats[format].call(this,now):formats[format]);return this.format(output||this.localeData().calendar(format,this,createLocal(now)));}
function clone(){return new Moment(this);}
function isAfter(input,units){var localInput=isMoment(input)?input:createLocal(input);if(!(this.isValid()&&localInput.isValid())){return false;}
units=normalizeUnits(units)||'millisecond';if(units==='millisecond'){return this.valueOf()>localInput.valueOf();}else{return localInput.valueOf()<this.clone().startOf(units).valueOf();}}
function isBefore(input,units){var localInput=isMoment(input)?input:createLocal(input);if(!(this.isValid()&&localInput.isValid())){return false;}
units=normalizeUnits(units)||'millisecond';if(units==='millisecond'){return this.valueOf()<localInput.valueOf();}else{return this.clone().endOf(units).valueOf()<localInput.valueOf();}}
function isBetween(from,to,units,inclusivity){var localFrom=isMoment(from)?from:createLocal(from),localTo=isMoment(to)?to:createLocal(to);if(!(this.isValid()&&localFrom.isValid()&&localTo.isValid())){return false;}
inclusivity=inclusivity||'()';return(inclusivity[0]==='('?this.isAfter(localFrom,units):!this.isBefore(localFrom,units))&&(inclusivity[1]===')'?this.isBefore(localTo,units):!this.isAfter(localTo,units));}
function isSame(input,units){var localInput=isMoment(input)?input:createLocal(input),inputMs;if(!(this.isValid()&&localInput.isValid())){return false;}
units=normalizeUnits(units)||'millisecond';if(units==='millisecond'){return this.valueOf()===localInput.valueOf();}else{inputMs=localInput.valueOf();return this.clone().startOf(units).valueOf()<=inputMs&&inputMs<=this.clone().endOf(units).valueOf();}}
function isSameOrAfter(input,units){return this.isSame(input,units)||this.isAfter(input,units);}
function isSameOrBefore(input,units){return this.isSame(input,units)||this.isBefore(input,units);}
function diff(input,units,asFloat){var that,zoneDelta,output;if(!this.isValid()){return NaN;}
that=cloneWithOffset(input,this);if(!that.isValid()){return NaN;}
zoneDelta=(that.utcOffset()-this.utcOffset())*6e4;units=normalizeUnits(units);switch(units){case 'year':output=monthDiff(this,that)/12;break;case 'month':output=monthDiff(this,that);break;case 'quarter':output=monthDiff(this,that)/3;break;case 'second':output=(this-that)/1e3;break;case 'minute':output=(this-that)/6e4;break;case 'hour':output=(this-that)/36e5;break;case 'day':output=(this-that-zoneDelta)/864e5;break;case 'week':output=(this-that-zoneDelta)/6048e5;break;default:output=this-that;}
return asFloat?output:absFloor(output);}
function monthDiff(a,b){var wholeMonthDiff=((b.year()-a.year())*12)+(b.month()-a.month()),anchor=a.clone().add(wholeMonthDiff,'months'),anchor2,adjust;if(b-anchor<0){anchor2=a.clone().add(wholeMonthDiff-1,'months');adjust=(b-anchor)/(anchor-anchor2);}else{anchor2=a.clone().add(wholeMonthDiff+1,'months');adjust=(b-anchor)/(anchor2-anchor);}
return-(wholeMonthDiff+adjust)||0;}
hooks.defaultFormat='YYYY-MM-DDTHH:mm:ssZ';hooks.defaultFormatUtc='YYYY-MM-DDTHH:mm:ss[Z]';function toString(){return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');}
function toISOString(keepOffset){if(!this.isValid()){return null;}
var utc=keepOffset!==true;var m=utc?this.clone().utc():this;if(m.year()<0||m.year()>9999){return formatMoment(m,utc?'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]':'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');}
if(isFunction(Date.prototype.toISOString)){if(utc){return this.toDate().toISOString();}else{return new Date(this.valueOf()+this.utcOffset()*60*1000).toISOString().replace('Z',formatMoment(m,'Z'));}}
return formatMoment(m,utc?'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]':'YYYY-MM-DD[T]HH:mm:ss.SSSZ');}
function inspect(){if(!this.isValid()){return 'moment.invalid(/* '+this._i+' */)';}
var func='moment';var zone='';if(!this.isLocal()){func=this.utcOffset()===0?'moment.utc':'moment.parseZone';zone='Z';}
var prefix='['+func+'("]';var year=(0<=this.year()&&this.year()<=9999)?'YYYY':'YYYYYY';var datetime='-MM-DD[T]HH:mm:ss.SSS';var suffix=zone+'[")]';return this.format(prefix+year+datetime+suffix);}
function format(inputString){if(!inputString){inputString=this.isUtc()?hooks.defaultFormatUtc:hooks.defaultFormat;}
var output=formatMoment(this,inputString);return this.localeData().postformat(output);}
function from(time,withoutSuffix){if(this.isValid()&&((isMoment(time)&&time.isValid())||createLocal(time).isValid())){return createDuration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix);}else{return this.localeData().invalidDate();}}
function fromNow(withoutSuffix){return this.from(createLocal(),withoutSuffix);}
function to(time,withoutSuffix){if(this.isValid()&&((isMoment(time)&&time.isValid())||createLocal(time).isValid())){return createDuration({from:this,to:time}).locale(this.locale()).humanize(!withoutSuffix);}else{return this.localeData().invalidDate();}}
function toNow(withoutSuffix){return this.to(createLocal(),withoutSuffix);}
function locale(key){var newLocaleData;if(key===undefined){return this._locale._abbr;}else{newLocaleData=getLocale(key);if(newLocaleData!=null){this._locale=newLocaleData;}
return this;}}
var lang=deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',function(key){if(key===undefined){return this.localeData();}else{return this.locale(key);}});function localeData(){return this._locale;}
var MS_PER_SECOND=1000;var MS_PER_MINUTE=60*MS_PER_SECOND;var MS_PER_HOUR=60*MS_PER_MINUTE;var MS_PER_400_YEARS=(365*400+97)*24*MS_PER_HOUR;function mod$1(dividend,divisor){return(dividend%divisor+divisor)%divisor;}
function localStartOfDate(y,m,d){if(y<100&&y>=0){return new Date(y+400,m,d)-MS_PER_400_YEARS;}else{return new Date(y,m,d).valueOf();}}
function utcStartOfDate(y,m,d){if(y<100&&y>=0){return Date.UTC(y+400,m,d)-MS_PER_400_YEARS;}else{return Date.UTC(y,m,d);}}
function startOf(units){var time;units=normalizeUnits(units);if(units===undefined||units==='millisecond'||!this.isValid()){return this;}
var startOfDate=this._isUTC?utcStartOfDate:localStartOfDate;switch(units){case 'year':time=startOfDate(this.year(),0,1);break;case 'quarter':time=startOfDate(this.year(),this.month()-this.month()%3,1);break;case 'month':time=startOfDate(this.year(),this.month(),1);break;case 'week':time=startOfDate(this.year(),this.month(),this.date()-this.weekday());break;case 'isoWeek':time=startOfDate(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case 'day':case 'date':time=startOfDate(this.year(),this.month(),this.date());break;case 'hour':time=this._d.valueOf();time-=mod$1(time+(this._isUTC?0:this.utcOffset()*MS_PER_MINUTE),MS_PER_HOUR);break;case 'minute':time=this._d.valueOf();time-=mod$1(time,MS_PER_MINUTE);break;case 'second':time=this._d.valueOf();time-=mod$1(time,MS_PER_SECOND);break;}
this._d.setTime(time);hooks.updateOffset(this,true);return this;}
function endOf(units){var time;units=normalizeUnits(units);if(units===undefined||units==='millisecond'||!this.isValid()){return this;}
var startOfDate=this._isUTC?utcStartOfDate:localStartOfDate;switch(units){case 'year':time=startOfDate(this.year()+1,0,1)-1;break;case 'quarter':time=startOfDate(this.year(),this.month()-this.month()%3+3,1)-1;break;case 'month':time=startOfDate(this.year(),this.month()+1,1)-1;break;case 'week':time=startOfDate(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case 'isoWeek':time=startOfDate(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case 'day':case 'date':time=startOfDate(this.year(),this.month(),this.date()+1)-1;break;case 'hour':time=this._d.valueOf();time+=MS_PER_HOUR-mod$1(time+(this._isUTC?0:this.utcOffset()*MS_PER_MINUTE),MS_PER_HOUR)-1;break;case 'minute':time=this._d.valueOf();time+=MS_PER_MINUTE-mod$1(time,MS_PER_MINUTE)-1;break;case 'second':time=this._d.valueOf();time+=MS_PER_SECOND-mod$1(time,MS_PER_SECOND)-1;break;}
this._d.setTime(time);hooks.updateOffset(this,true);return this;}
function valueOf(){return this._d.valueOf()-((this._offset||0)*60000);}
function unix(){return Math.floor(this.valueOf()/1000);}
function toDate(){return new Date(this.valueOf());}
function toArray(){var m=this;return[m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()];}
function toObject(){var m=this;return{years:m.year(),months:m.month(),date:m.date(),hours:m.hours(),minutes:m.minutes(),seconds:m.seconds(),milliseconds:m.milliseconds()};}
function toJSON(){return this.isValid()?this.toISOString():null;}
function isValid$2(){return isValid(this);}
function parsingFlags(){return extend({},getParsingFlags(this));}
function invalidAt(){return getParsingFlags(this).overflow;}
function creationData(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict};}
addFormatToken(0,['gg',2],0,function(){return this.weekYear()%100;});addFormatToken(0,['GG',2],0,function(){return this.isoWeekYear()%100;});function addWeekYearFormatToken(token,getter){addFormatToken(0,[token,token.length],0,getter);}
addWeekYearFormatToken('gggg','weekYear');addWeekYearFormatToken('ggggg','weekYear');addWeekYearFormatToken('GGGG','isoWeekYear');addWeekYearFormatToken('GGGGG','isoWeekYear');addUnitAlias('weekYear','gg');addUnitAlias('isoWeekYear','GG');addUnitPriority('weekYear',1);addUnitPriority('isoWeekYear',1);addRegexToken('G',matchSigned);addRegexToken('g',matchSigned);addRegexToken('GG',match1to2,match2);addRegexToken('gg',match1to2,match2);addRegexToken('GGGG',match1to4,match4);addRegexToken('gggg',match1to4,match4);addRegexToken('GGGGG',match1to6,match6);addRegexToken('ggggg',match1to6,match6);addWeekParseToken(['gggg','ggggg','GGGG','GGGGG'],function(input,week,config,token){week[token.substr(0,2)]=toInt(input);});addWeekParseToken(['gg','GG'],function(input,week,config,token){week[token]=hooks.parseTwoDigitYear(input);});function getSetWeekYear(input){return getSetWeekYearHelper.call(this,input,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy);}
function getSetISOWeekYear(input){return getSetWeekYearHelper.call(this,input,this.isoWeek(),this.isoWeekday(),1,4);}
function getISOWeeksInYear(){return weeksInYear(this.year(),1,4);}
function getWeeksInYear(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy);}
function getSetWeekYearHelper(input,week,weekday,dow,doy){var weeksTarget;if(input==null){return weekOfYear(this,dow,doy).year;}else{weeksTarget=weeksInYear(input,dow,doy);if(week>weeksTarget){week=weeksTarget;}
return setWeekAll.call(this,input,week,weekday,dow,doy);}}
function setWeekAll(weekYear,week,weekday,dow,doy){var dayOfYearData=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy),date=createUTCDate(dayOfYearData.year,0,dayOfYearData.dayOfYear);this.year(date.getUTCFullYear());this.month(date.getUTCMonth());this.date(date.getUTCDate());return this;}
addFormatToken('Q',0,'Qo','quarter');addUnitAlias('quarter','Q');addUnitPriority('quarter',7);addRegexToken('Q',match1);addParseToken('Q',function(input,array){array[MONTH]=(toInt(input)-1)*3;});function getSetQuarter(input){return input==null?Math.ceil((this.month()+1)/3):this.month((input-1)*3+this.month()%3);}
addFormatToken('D',['DD',2],'Do','date');addUnitAlias('date','D');addUnitPriority('date',9);addRegexToken('D',match1to2);addRegexToken('DD',match1to2,match2);addRegexToken('Do',function(isStrict,locale){return isStrict?(locale._dayOfMonthOrdinalParse||locale._ordinalParse):locale._dayOfMonthOrdinalParseLenient;});addParseToken(['D','DD'],DATE);addParseToken('Do',function(input,array){array[DATE]=toInt(input.match(match1to2)[0]);});var getSetDayOfMonth=makeGetSet('Date',true);addFormatToken('DDD',['DDDD',3],'DDDo','dayOfYear');addUnitAlias('dayOfYear','DDD');addUnitPriority('dayOfYear',4);addRegexToken('DDD',match1to3);addRegexToken('DDDD',match3);addParseToken(['DDD','DDDD'],function(input,array,config){config._dayOfYear=toInt(input);});function getSetDayOfYear(input){var dayOfYear=Math.round((this.clone().startOf('day')-this.clone().startOf('year'))/864e5)+1;return input==null?dayOfYear:this.add((input-dayOfYear),'d');}
addFormatToken('m',['mm',2],0,'minute');addUnitAlias('minute','m');addUnitPriority('minute',14);addRegexToken('m',match1to2);addRegexToken('mm',match1to2,match2);addParseToken(['m','mm'],MINUTE);var getSetMinute=makeGetSet('Minutes',false);addFormatToken('s',['ss',2],0,'second');addUnitAlias('second','s');addUnitPriority('second',15);addRegexToken('s',match1to2);addRegexToken('ss',match1to2,match2);addParseToken(['s','ss'],SECOND);var getSetSecond=makeGetSet('Seconds',false);addFormatToken('S',0,0,function(){return~~(this.millisecond()/100);});addFormatToken(0,['SS',2],0,function(){return~~(this.millisecond()/10);});addFormatToken(0,['SSS',3],0,'millisecond');addFormatToken(0,['SSSS',4],0,function(){return this.millisecond()*10;});addFormatToken(0,['SSSSS',5],0,function(){return this.millisecond()*100;});addFormatToken(0,['SSSSSS',6],0,function(){return this.millisecond()*1000;});addFormatToken(0,['SSSSSSS',7],0,function(){return this.millisecond()*10000;});addFormatToken(0,['SSSSSSSS',8],0,function(){return this.millisecond()*100000;});addFormatToken(0,['SSSSSSSSS',9],0,function(){return this.millisecond()*1000000;});addUnitAlias('millisecond','ms');addUnitPriority('millisecond',16);addRegexToken('S',match1to3,match1);addRegexToken('SS',match1to3,match2);addRegexToken('SSS',match1to3,match3);var token;for(token='SSSS';token.length<=9;token+='S'){addRegexToken(token,matchUnsigned);}
function parseMs(input,array){array[MILLISECOND]=toInt(('0.'+input)*1000);}
for(token='S';token.length<=9;token+='S'){addParseToken(token,parseMs);}
var getSetMillisecond=makeGetSet('Milliseconds',false);addFormatToken('z',0,0,'zoneAbbr');addFormatToken('zz',0,0,'zoneName');function getZoneAbbr(){return this._isUTC?'UTC':'';}
function getZoneName(){return this._isUTC?'Coordinated Universal Time':'';}
var proto=Moment.prototype;proto.add=add;proto.calendar=calendar$1;proto.clone=clone;proto.diff=diff;proto.endOf=endOf;proto.format=format;proto.from=from;proto.fromNow=fromNow;proto.to=to;proto.toNow=toNow;proto.get=stringGet;proto.invalidAt=invalidAt;proto.isAfter=isAfter;proto.isBefore=isBefore;proto.isBetween=isBetween;proto.isSame=isSame;proto.isSameOrAfter=isSameOrAfter;proto.isSameOrBefore=isSameOrBefore;proto.isValid=isValid$2;proto.lang=lang;proto.locale=locale;proto.localeData=localeData;proto.max=prototypeMax;proto.min=prototypeMin;proto.parsingFlags=parsingFlags;proto.set=stringSet;proto.startOf=startOf;proto.subtract=subtract;proto.toArray=toArray;proto.toObject=toObject;proto.toDate=toDate;proto.toISOString=toISOString;proto.inspect=inspect;proto.toJSON=toJSON;proto.toString=toString;proto.unix=unix;proto.valueOf=valueOf;proto.creationData=creationData;proto.year=getSetYear;proto.isLeapYear=getIsLeapYear;proto.weekYear=getSetWeekYear;proto.isoWeekYear=getSetISOWeekYear;proto.quarter=proto.quarters=getSetQuarter;proto.month=getSetMonth;proto.daysInMonth=getDaysInMonth;proto.week=proto.weeks=getSetWeek;proto.isoWeek=proto.isoWeeks=getSetISOWeek;proto.weeksInYear=getWeeksInYear;proto.isoWeeksInYear=getISOWeeksInYear;proto.date=getSetDayOfMonth;proto.day=proto.days=getSetDayOfWeek;proto.weekday=getSetLocaleDayOfWeek;proto.isoWeekday=getSetISODayOfWeek;proto.dayOfYear=getSetDayOfYear;proto.hour=proto.hours=getSetHour;proto.minute=proto.minutes=getSetMinute;proto.second=proto.seconds=getSetSecond;proto.millisecond=proto.milliseconds=getSetMillisecond;proto.utcOffset=getSetOffset;proto.utc=setOffsetToUTC;proto.local=setOffsetToLocal;proto.parseZone=setOffsetToParsedOffset;proto.hasAlignedHourOffset=hasAlignedHourOffset;proto.isDST=isDaylightSavingTime;proto.isLocal=isLocal;proto.isUtcOffset=isUtcOffset;proto.isUtc=isUtc;proto.isUTC=isUtc;proto.zoneAbbr=getZoneAbbr;proto.zoneName=getZoneName;proto.dates=deprecate('dates accessor is deprecated. Use date instead.',getSetDayOfMonth);proto.months=deprecate('months accessor is deprecated. Use month instead',getSetMonth);proto.years=deprecate('years accessor is deprecated. Use year instead',getSetYear);proto.zone=deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',getSetZone);proto.isDSTShifted=deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',isDaylightSavingTimeShifted);function createUnix(input){return createLocal(input*1000);}
function createInZone(){return createLocal.apply(null,arguments).parseZone();}
function preParsePostFormat(string){return string;}
var proto$1=Locale.prototype;proto$1.calendar=calendar;proto$1.longDateFormat=longDateFormat;proto$1.invalidDate=invalidDate;proto$1.ordinal=ordinal;proto$1.preparse=preParsePostFormat;proto$1.postformat=preParsePostFormat;proto$1.relativeTime=relativeTime;proto$1.pastFuture=pastFuture;proto$1.set=set;proto$1.months=localeMonths;proto$1.monthsShort=localeMonthsShort;proto$1.monthsParse=localeMonthsParse;proto$1.monthsRegex=monthsRegex;proto$1.monthsShortRegex=monthsShortRegex;proto$1.week=localeWeek;proto$1.firstDayOfYear=localeFirstDayOfYear;proto$1.firstDayOfWeek=localeFirstDayOfWeek;proto$1.weekdays=localeWeekdays;proto$1.weekdaysMin=localeWeekdaysMin;proto$1.weekdaysShort=localeWeekdaysShort;proto$1.weekdaysParse=localeWeekdaysParse;proto$1.weekdaysRegex=weekdaysRegex;proto$1.weekdaysShortRegex=weekdaysShortRegex;proto$1.weekdaysMinRegex=weekdaysMinRegex;proto$1.isPM=localeIsPM;proto$1.meridiem=localeMeridiem;function get$1(format,index,field,setter){var locale=getLocale();var utc=createUTC().set(setter,index);return locale[field](utc,format);}
function listMonthsImpl(format,index,field){if(isNumber(format)){index=format;format=undefined;}
format=format||'';if(index!=null){return get$1(format,index,field,'month');}
var i;var out=[];for(i=0;i<12;i++){out[i]=get$1(format,i,field,'month');}
return out;}
function listWeekdaysImpl(localeSorted,format,index,field){if(typeof localeSorted==='boolean'){if(isNumber(format)){index=format;format=undefined;}
format=format||'';}else{format=localeSorted;index=format;localeSorted=false;if(isNumber(format)){index=format;format=undefined;}
format=format||'';}
var locale=getLocale(),shift=localeSorted?locale._week.dow:0;if(index!=null){return get$1(format,(index+shift)%7,field,'day');}
var i;var out=[];for(i=0;i<7;i++){out[i]=get$1(format,(i+shift)%7,field,'day');}
return out;}
function listMonths(format,index){return listMonthsImpl(format,index,'months');}
function listMonthsShort(format,index){return listMonthsImpl(format,index,'monthsShort');}
function listWeekdays(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,'weekdays');}
function listWeekdaysShort(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,'weekdaysShort');}
function listWeekdaysMin(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,'weekdaysMin');}
getSetGlobalLocale('en',{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(number){var b=number%10,output=(toInt(number%100/10)===1)?'th':(b===1)?'st':(b===2)?'nd':(b===3)?'rd':'th';return number+output;}});hooks.lang=deprecate('moment.lang is deprecated. Use moment.locale instead.',getSetGlobalLocale);hooks.langData=deprecate('moment.langData is deprecated. Use moment.localeData instead.',getLocale);var mathAbs=Math.abs;function abs(){var data=this._data;this._milliseconds=mathAbs(this._milliseconds);this._days=mathAbs(this._days);this._months=mathAbs(this._months);data.milliseconds=mathAbs(data.milliseconds);data.seconds=mathAbs(data.seconds);data.minutes=mathAbs(data.minutes);data.hours=mathAbs(data.hours);data.months=mathAbs(data.months);data.years=mathAbs(data.years);return this;}
function addSubtract$1(duration,input,value,direction){var other=createDuration(input,value);duration._milliseconds+=direction*other._milliseconds;duration._days+=direction*other._days;duration._months+=direction*other._months;return duration._bubble();}
function add$1(input,value){return addSubtract$1(this,input,value,1);}
function subtract$1(input,value){return addSubtract$1(this,input,value,-1);}
function absCeil(number){if(number<0){return Math.floor(number);}else{return Math.ceil(number);}}
function bubble(){var milliseconds=this._milliseconds;var days=this._days;var months=this._months;var data=this._data;var seconds,minutes,hours,years,monthsFromDays;if(!((milliseconds>=0&&days>=0&&months>=0)||(milliseconds<=0&&days<=0&&months<=0))){milliseconds+=absCeil(monthsToDays(months)+days)*864e5;days=0;months=0;}
data.milliseconds=milliseconds%1000;seconds=absFloor(milliseconds/1000);data.seconds=seconds%60;minutes=absFloor(seconds/60);data.minutes=minutes%60;hours=absFloor(minutes/60);data.hours=hours%24;days+=absFloor(hours/24);monthsFromDays=absFloor(daysToMonths(days));months+=monthsFromDays;days-=absCeil(monthsToDays(monthsFromDays));years=absFloor(months/12);months%=12;data.days=days;data.months=months;data.years=years;return this;}
function daysToMonths(days){return days*4800/146097;}
function monthsToDays(months){return months*146097/4800;}
function as(units){if(!this.isValid()){return NaN;}
var days;var months;var milliseconds=this._milliseconds;units=normalizeUnits(units);if(units==='month'||units==='quarter'||units==='year'){days=this._days+milliseconds/864e5;months=this._months+daysToMonths(days);switch(units){case 'month':return months;case 'quarter':return months/3;case 'year':return months/12;}}else{days=this._days+Math.round(monthsToDays(this._months));switch(units){case 'week':return days/7+milliseconds/6048e5;case 'day':return days+milliseconds/864e5;case 'hour':return days*24+milliseconds/36e5;case 'minute':return days*1440+milliseconds/6e4;case 'second':return days*86400+milliseconds/1000;case 'millisecond':return Math.floor(days*864e5)+milliseconds;default:throw new Error('Unknown unit '+units);}}}
function valueOf$1(){if(!this.isValid()){return NaN;}
return(this._milliseconds+
this._days*864e5+
(this._months%12)*2592e6+
toInt(this._months/12)*31536e6);}
function makeAs(alias){return function(){return this.as(alias);};}
var asMilliseconds=makeAs('ms');var asSeconds=makeAs('s');var asMinutes=makeAs('m');var asHours=makeAs('h');var asDays=makeAs('d');var asWeeks=makeAs('w');var asMonths=makeAs('M');var asQuarters=makeAs('Q');var asYears=makeAs('y');function clone$1(){return createDuration(this);}
function get$2(units){units=normalizeUnits(units);return this.isValid()?this[units+'s']():NaN;}
function makeGetter(name){return function(){return this.isValid()?this._data[name]:NaN;};}
var milliseconds=makeGetter('milliseconds');var seconds=makeGetter('seconds');var minutes=makeGetter('minutes');var hours=makeGetter('hours');var days=makeGetter('days');var months=makeGetter('months');var years=makeGetter('years');function weeks(){return absFloor(this.days()/7);}
var round=Math.round;var thresholds={ss:44,s:45,m:45,h:22,d:26,M:11};function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture);}
function relativeTime$1(posNegDuration,withoutSuffix,locale){var duration=createDuration(posNegDuration).abs();var seconds=round(duration.as('s'));var minutes=round(duration.as('m'));var hours=round(duration.as('h'));var days=round(duration.as('d'));var months=round(duration.as('M'));var years=round(duration.as('y'));var a=seconds<=thresholds.ss&&['s',seconds]||seconds<thresholds.s&&['ss',seconds]||minutes<=1&&['m']||minutes<thresholds.m&&['mm',minutes]||hours<=1&&['h']||hours<thresholds.h&&['hh',hours]||days<=1&&['d']||days<thresholds.d&&['dd',days]||months<=1&&['M']||months<thresholds.M&&['MM',months]||years<=1&&['y']||['yy',years];a[2]=withoutSuffix;a[3]=+posNegDuration>0;a[4]=locale;return substituteTimeAgo.apply(null,a);}
function getSetRelativeTimeRounding(roundingFunction){if(roundingFunction===undefined){return round;}
if(typeof(roundingFunction)==='function'){round=roundingFunction;return true;}
return false;}
function getSetRelativeTimeThreshold(threshold,limit){if(thresholds[threshold]===undefined){return false;}
if(limit===undefined){return thresholds[threshold];}
thresholds[threshold]=limit;if(threshold==='s'){thresholds.ss=limit-1;}
return true;}
function humanize(withSuffix){if(!this.isValid()){return this.localeData().invalidDate();}
var locale=this.localeData();var output=relativeTime$1(this,!withSuffix,locale);if(withSuffix){output=locale.pastFuture(+this,output);}
return locale.postformat(output);}
var abs$1=Math.abs;function sign(x){return((x>0)-(x<0))||+x;}
function toISOString$1(){if(!this.isValid()){return this.localeData().invalidDate();}
var seconds=abs$1(this._milliseconds)/1000;var days=abs$1(this._days);var months=abs$1(this._months);var minutes,hours,years;minutes=absFloor(seconds/60);hours=absFloor(minutes/60);seconds%=60;minutes%=60;years=absFloor(months/12);months%=12;var Y=years;var M=months;var D=days;var h=hours;var m=minutes;var s=seconds?seconds.toFixed(3).replace(/\.?0+$/,''):'';var total=this.asSeconds();if(!total){return 'P0D';}
var totalSign=total<0?'-':'';var ymSign=sign(this._months)!==sign(total)?'-':'';var daysSign=sign(this._days)!==sign(total)?'-':'';var hmsSign=sign(this._milliseconds)!==sign(total)?'-':'';return totalSign+'P'+
(Y?ymSign+Y+'Y':'')+
(M?ymSign+M+'M':'')+
(D?daysSign+D+'D':'')+
((h||m||s)?'T':'')+
(h?hmsSign+h+'H':'')+
(m?hmsSign+m+'M':'')+
(s?hmsSign+s+'S':'');}
var proto$2=Duration.prototype;proto$2.isValid=isValid$1;proto$2.abs=abs;proto$2.add=add$1;proto$2.subtract=subtract$1;proto$2.as=as;proto$2.asMilliseconds=asMilliseconds;proto$2.asSeconds=asSeconds;proto$2.asMinutes=asMinutes;proto$2.asHours=asHours;proto$2.asDays=asDays;proto$2.asWeeks=asWeeks;proto$2.asMonths=asMonths;proto$2.asQuarters=asQuarters;proto$2.asYears=asYears;proto$2.valueOf=valueOf$1;proto$2._bubble=bubble;proto$2.clone=clone$1;proto$2.get=get$2;proto$2.milliseconds=milliseconds;proto$2.seconds=seconds;proto$2.minutes=minutes;proto$2.hours=hours;proto$2.days=days;proto$2.weeks=weeks;proto$2.months=months;proto$2.years=years;proto$2.humanize=humanize;proto$2.toISOString=toISOString$1;proto$2.toString=toISOString$1;proto$2.toJSON=toISOString$1;proto$2.locale=locale;proto$2.localeData=localeData;proto$2.toIsoString=deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',toISOString$1);proto$2.lang=lang;addFormatToken('X',0,0,'unix');addFormatToken('x',0,0,'valueOf');addRegexToken('x',matchSigned);addRegexToken('X',matchTimestamp);addParseToken('X',function(input,array,config){config._d=new Date(parseFloat(input,10)*1000);});addParseToken('x',function(input,array,config){config._d=new Date(toInt(input));});hooks.version='2.24.0';setHookCallback(createLocal);hooks.fn=proto;hooks.min=min;hooks.max=max;hooks.now=now;hooks.utc=createUTC;hooks.unix=createUnix;hooks.months=listMonths;hooks.isDate=isDate;hooks.locale=getSetGlobalLocale;hooks.invalid=createInvalid;hooks.duration=createDuration;hooks.isMoment=isMoment;hooks.weekdays=listWeekdays;hooks.parseZone=createInZone;hooks.localeData=getLocale;hooks.isDuration=isDuration;hooks.monthsShort=listMonthsShort;hooks.weekdaysMin=listWeekdaysMin;hooks.defineLocale=defineLocale;hooks.updateLocale=updateLocale;hooks.locales=listLocales;hooks.weekdaysShort=listWeekdaysShort;hooks.normalizeUnits=normalizeUnits;hooks.relativeTimeRounding=getSetRelativeTimeRounding;hooks.relativeTimeThreshold=getSetRelativeTimeThreshold;hooks.calendarFormat=getCalendarFormat;hooks.prototype=proto;hooks.HTML5_FMT={DATETIME_LOCAL:'YYYY-MM-DDTHH:mm',DATETIME_LOCAL_SECONDS:'YYYY-MM-DDTHH:mm:ss',DATETIME_LOCAL_MS:'YYYY-MM-DDTHH:mm:ss.SSS',DATE:'YYYY-MM-DD',TIME:'HH:mm',TIME_SECONDS:'HH:mm:ss',TIME_MS:'HH:mm:ss.SSS',WEEK:'GGGG-[W]WW',MONTH:'YYYY-MM'};return hooks;})));},{}],3:[function(require,module,exports){/*!VelocityJS.org (1.4.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License*//*!VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License.*/(function(window){"use strict";if(window.jQuery){return;}
var $=function(selector,context){return new $.fn.init(selector,context);};$.isWindow=function(obj){return obj&&obj===obj.window;};$.type=function(obj){if(!obj){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;};$.isArray=Array.isArray||function(obj){return $.type(obj)==="array";};function isArraylike(obj){var length=obj.length,type=$.type(obj);if(type==="function"||$.isWindow(obj)){return false;}
if(obj.nodeType===1&&length){return true;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
$.isPlainObject=function(obj){var key;if(!obj||$.type(obj)!=="object"||obj.nodeType||$.isWindow(obj)){return false;}
try{if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){return false;}
for(key in obj){}
return key===undefined||hasOwn.call(obj,key);};$.each=function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false){break;}}}else{for(i in obj){if(!obj.hasOwnProperty(i)){continue;}
value=callback.apply(obj[i],args);if(value===false){break;}}}}else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}else{for(i in obj){if(!obj.hasOwnProperty(i)){continue;}
value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}}
return obj;};$.data=function(node,key,value){if(value===undefined){var getId=node[$.expando],store=getId&&cache[getId];if(key===undefined){return store;}else if(store){if(key in store){return store[key];}}}else if(key!==undefined){var setId=node[$.expando]||(node[$.expando]=++$.uuid);cache[setId]=cache[setId]||{};cache[setId][key]=value;return value;}};$.removeData=function(node,keys){var id=node[$.expando],store=id&&cache[id];if(store){if(!keys){delete cache[id];}else{$.each(keys,function(_,key){delete store[key];});}}};$.extend=function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++;}
if(typeof target!=="object"&&$.type(target)!=="function"){target={};}
if(i===length){target=this;i--;}
for(;i<length;i++){if((options=arguments[i])){for(name in options){if(!options.hasOwnProperty(name)){continue;}
src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&($.isPlainObject(copy)||(copyIsArray=$.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&$.isArray(src)?src:[];}else{clone=src&&$.isPlainObject(src)?src:{};}
target[name]=$.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};$.queue=function(elem,type,data){function $makeArray(arr,results){var ret=results||[];if(arr){if(isArraylike(Object(arr))){(function(first,second){var len=+second.length,j=0,i=first.length;while(j<len){first[i++]=second[j++];}
if(len!==len){while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;})(ret,typeof arr==="string"?[arr]:arr);}else{[].push.call(ret,arr);}}
return ret;}
if(!elem){return;}
type=(type||"fx")+"queue";var q=$.data(elem,type);if(!data){return q||[];}
if(!q||$.isArray(data)){q=$.data(elem,type,$makeArray(data));}else{q.push(data);}
return q;};$.dequeue=function(elems,type){$.each(elems.nodeType?[elems]:elems,function(i,elem){type=type||"fx";var queue=$.queue(elem,type),fn=queue.shift();if(fn==="inprogress"){fn=queue.shift();}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
fn.call(elem,function(){$.dequeue(elem,type);});}});};$.fn=$.prototype={init:function(selector){if(selector.nodeType){this[0]=selector;return this;}else{throw new Error("Not a DOM node.");}},offset:function(){var box=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:box.top+(window.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:box.left+(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)};},position:function(){function offsetParentFn(elem){var offsetParent=elem.offsetParent;while(offsetParent&&offsetParent.nodeName.toLowerCase()!=="html"&&offsetParent.style&&offsetParent.style.position==="static"){offsetParent=offsetParent.offsetParent;}
return offsetParent||document;}
var elem=this[0],offsetParent=offsetParentFn(elem),offset=this.offset(),parentOffset=/^(?:body|html)$/i.test(offsetParent.nodeName)?{top:0,left:0}:$(offsetParent).offset();offset.top-=parseFloat(elem.style.marginTop)||0;offset.left-=parseFloat(elem.style.marginLeft)||0;if(offsetParent.style){parentOffset.top+=parseFloat(offsetParent.style.borderTopWidth)||0;parentOffset.left+=parseFloat(offsetParent.style.borderLeftWidth)||0;}
return{top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};}};var cache={};$.expando="velocity"+(new Date().getTime());$.uuid=0;var class2type={},hasOwn=class2type.hasOwnProperty,toString=class2type.toString;var types="Boolean Number String Function Array Date RegExp Object Error".split(" ");for(var i=0;i<types.length;i++){class2type["[object "+types[i]+"]"]=types[i].toLowerCase();}
$.fn.init.prototype=$.fn;window.Velocity={Utilities:$};})(window);(function(factory){"use strict";if(typeof module==="object"&&typeof module.exports==="object"){module.exports=factory();}else if(typeof define==="function"&&define.amd){define(factory);}else{factory();}}(function(){"use strict";return function(global,window,document,undefined){var IE=(function(){if(document.documentMode){return document.documentMode;}else{for(var i=7;i>4;i--){var div=document.createElement("div");div.innerHTML="<!--[if IE "+i+"]><span></span><![endif]-->";if(div.getElementsByTagName("span").length){div=null;return i;}}}
return undefined;})();var rAFShim=(function(){var timeLast=0;return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){var timeCurrent=(new Date()).getTime(),timeDelta;timeDelta=Math.max(0,16-(timeCurrent-timeLast));timeLast=timeCurrent+timeDelta;return setTimeout(function(){callback(timeCurrent+timeDelta);},timeDelta);};})();var performance=(function(){var perf=window.performance||{};if(!perf.hasOwnProperty("now")){var nowOffset=perf.timing&&perf.timing.domComplete?perf.timing.domComplete:(new Date()).getTime();perf.now=function(){return(new Date()).getTime()-nowOffset;};}
return perf;})();function compactSparseArray(array){var index=-1,length=array?array.length:0,result=[];while(++index<length){var value=array[index];if(value){result.push(value);}}
return result;}
function sanitizeElements(elements){if(Type.isWrapped(elements)){elements=[].slice.call(elements);}else if(Type.isNode(elements)){elements=[elements];}
return elements;}
var Type={isNumber:function(variable){return(typeof variable==="number");},isString:function(variable){return(typeof variable==="string");},isArray:Array.isArray||function(variable){return Object.prototype.toString.call(variable)==="[object Array]";},isFunction:function(variable){return Object.prototype.toString.call(variable)==="[object Function]";},isNode:function(variable){return variable&&variable.nodeType;},isNodeList:function(variable){return typeof variable==="object"&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable))&&variable.length!==undefined&&(variable.length===0||(typeof variable[0]==="object"&&variable[0].nodeType>0));},isWrapped:function(variable){return variable&&(Type.isArray(variable)||(Type.isNumber(variable.length)&&!Type.isString(variable)&&!Type.isFunction(variable)));},isSVG:function(variable){return window.SVGElement&&(variable instanceof window.SVGElement);},isEmptyObject:function(variable){for(var name in variable){if(variable.hasOwnProperty(name)){return false;}}
return true;}};var $,isJQuery=false;if(global.fn&&global.fn.jquery){$=global;isJQuery=true;}else{$=window.Velocity.Utilities;}
if(IE<=8&&!isJQuery){throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");}else if(IE<=7){jQuery.fn.velocity=jQuery.fn.animate;return;}
var DURATION_DEFAULT=400,EASING_DEFAULT="swing";var Velocity={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:window.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:document.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:false,calls:[],delayedElements:{count:0}},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:window.Promise,defaults:{queue:"",duration:DURATION_DEFAULT,easing:EASING_DEFAULT,begin:undefined,complete:undefined,progress:undefined,display:undefined,visibility:undefined,loop:false,delay:false,mobileHA:true,_cacheValues:true,promiseRejectEmpty:true},init:function(element){$.data(element,"velocity",{isSVG:Type.isSVG(element),isAnimating:false,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}});},hook:null,mock:false,version:{major:1,minor:4,patch:0},debug:false,timestamp:true,pauseAll:function(queueName){var currentTime=(new Date()).getTime();$.each(Velocity.State.calls,function(i,activeCall){if(activeCall){if(queueName!==undefined&&((activeCall[2].queue!==queueName)||(activeCall[2].queue===false))){return true;}
activeCall[5]={resume:false};}});$.each(Velocity.State.delayedElements,function(k,element){if(!element){return;}
pauseDelayOnElement(element,currentTime);});},resumeAll:function(queueName){var currentTime=(new Date()).getTime();$.each(Velocity.State.calls,function(i,activeCall){if(activeCall){if(queueName!==undefined&&((activeCall[2].queue!==queueName)||(activeCall[2].queue===false))){return true;}
if(activeCall[5]){activeCall[5].resume=true;}}});$.each(Velocity.State.delayedElements,function(k,element){if(!element){return;}
resumeDelayOnElement(element,currentTime);});}};if(window.pageYOffset!==undefined){Velocity.State.scrollAnchor=window;Velocity.State.scrollPropertyLeft="pageXOffset";Velocity.State.scrollPropertyTop="pageYOffset";}else{Velocity.State.scrollAnchor=document.documentElement||document.body.parentNode||document.body;Velocity.State.scrollPropertyLeft="scrollLeft";Velocity.State.scrollPropertyTop="scrollTop";}
function Data(element){var response=$.data(element,"velocity");return response===null?undefined:response;}
function pauseDelayOnElement(element,currentTime){var data=Data(element);if(data&&data.delayTimer&&!data.delayPaused){data.delayRemaining=data.delay-currentTime+data.delayBegin;data.delayPaused=true;clearTimeout(data.delayTimer.setTimeout);}}
function resumeDelayOnElement(element,currentTime){var data=Data(element);if(data&&data.delayTimer&&data.delayPaused){data.delayPaused=false;data.delayTimer.setTimeout=setTimeout(data.delayTimer.next,data.delayRemaining);}}
function generateStep(steps){return function(p){return Math.round(p*steps)*(1/steps);};}
function generateBezier(mX1,mY1,mX2,mY2){var NEWTON_ITERATIONS=4,NEWTON_MIN_SLOPE=0.001,SUBDIVISION_PRECISION=0.0000001,SUBDIVISION_MAX_ITERATIONS=10,kSplineTableSize=11,kSampleStepSize=1.0/(kSplineTableSize-1.0),float32ArraySupported="Float32Array"in window;if(arguments.length!==4){return false;}
for(var i=0;i<4;++i){if(typeof arguments[i]!=="number"||isNaN(arguments[i])||!isFinite(arguments[i])){return false;}}
mX1=Math.min(mX1,1);mX2=Math.min(mX2,1);mX1=Math.max(mX1,0);mX2=Math.max(mX2,0);var mSampleValues=float32ArraySupported?new Float32Array(kSplineTableSize):new Array(kSplineTableSize);function A(aA1,aA2){return 1.0-3.0*aA2+3.0*aA1;}
function B(aA1,aA2){return 3.0*aA2-6.0*aA1;}
function C(aA1){return 3.0*aA1;}
function calcBezier(aT,aA1,aA2){return((A(aA1,aA2)*aT+B(aA1,aA2))*aT+C(aA1))*aT;}
function getSlope(aT,aA1,aA2){return 3.0*A(aA1,aA2)*aT*aT+2.0*B(aA1,aA2)*aT+C(aA1);}
function newtonRaphsonIterate(aX,aGuessT){for(var i=0;i<NEWTON_ITERATIONS;++i){var currentSlope=getSlope(aGuessT,mX1,mX2);if(currentSlope===0.0){return aGuessT;}
var currentX=calcBezier(aGuessT,mX1,mX2)-aX;aGuessT-=currentX/currentSlope;}
return aGuessT;}
function calcSampleValues(){for(var i=0;i<kSplineTableSize;++i){mSampleValues[i]=calcBezier(i*kSampleStepSize,mX1,mX2);}}
function binarySubdivide(aX,aA,aB){var currentX,currentT,i=0;do{currentT=aA+(aB-aA)/2.0;currentX=calcBezier(currentT,mX1,mX2)-aX;if(currentX>0.0){aB=currentT;}else{aA=currentT;}}while(Math.abs(currentX)>SUBDIVISION_PRECISION&&++i<SUBDIVISION_MAX_ITERATIONS);return currentT;}
function getTForX(aX){var intervalStart=0.0,currentSample=1,lastSample=kSplineTableSize-1;for(;currentSample!==lastSample&&mSampleValues[currentSample]<=aX;++currentSample){intervalStart+=kSampleStepSize;}
--currentSample;var dist=(aX-mSampleValues[currentSample])/(mSampleValues[currentSample+1]-mSampleValues[currentSample]),guessForT=intervalStart+dist*kSampleStepSize,initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope>=NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT);}else if(initialSlope===0.0){return guessForT;}else{return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize);}}
var _precomputed=false;function precompute(){_precomputed=true;if(mX1!==mY1||mX2!==mY2){calcSampleValues();}}
var f=function(aX){if(!_precomputed){precompute();}
if(mX1===mY1&&mX2===mY2){return aX;}
if(aX===0){return 0;}
if(aX===1){return 1;}
return calcBezier(getTForX(aX),mY1,mY2);};f.getControlPoints=function(){return[{x:mX1,y:mY1},{x:mX2,y:mY2}];};var str="generateBezier("+[mX1,mY1,mX2,mY2]+")";f.toString=function(){return str;};return f;}
var generateSpringRK4=(function(){function springAccelerationForState(state){return(-state.tension*state.x)-(state.friction*state.v);}
function springEvaluateStateWithDerivative(initialState,dt,derivative){var state={x:initialState.x+derivative.dx*dt,v:initialState.v+derivative.dv*dt,tension:initialState.tension,friction:initialState.friction};return{dx:state.v,dv:springAccelerationForState(state)};}
function springIntegrateState(state,dt){var a={dx:state.v,dv:springAccelerationForState(state)},b=springEvaluateStateWithDerivative(state,dt*0.5,a),c=springEvaluateStateWithDerivative(state,dt*0.5,b),d=springEvaluateStateWithDerivative(state,dt,c),dxdt=1.0/6.0*(a.dx+2.0*(b.dx+c.dx)+d.dx),dvdt=1.0/6.0*(a.dv+2.0*(b.dv+c.dv)+d.dv);state.x=state.x+dxdt*dt;state.v=state.v+dvdt*dt;return state;}
return function springRK4Factory(tension,friction,duration){var initState={x:-1,v:0,tension:null,friction:null},path=[0],time_lapsed=0,tolerance=1/10000,DT=16/1000,have_duration,dt,last_state;tension=parseFloat(tension)||500;friction=parseFloat(friction)||20;duration=duration||null;initState.tension=tension;initState.friction=friction;have_duration=duration!==null;if(have_duration){time_lapsed=springRK4Factory(tension,friction);dt=time_lapsed/duration*DT;}else{dt=DT;}
while(true){last_state=springIntegrateState(last_state||initState,dt);path.push(1+last_state.x);time_lapsed+=16;if(!(Math.abs(last_state.x)>tolerance&&Math.abs(last_state.v)>tolerance)){break;}}
return!have_duration?time_lapsed:function(percentComplete){return path[(percentComplete*(path.length-1))|0];};};}());Velocity.Easings={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;},spring:function(p){return 1-(Math.cos(p*4.5*Math.PI)*Math.exp(-p*6));}};$.each([["ease",[0.25,0.1,0.25,1.0]],["ease-in",[0.42,0.0,1.00,1.0]],["ease-out",[0.00,0.0,0.58,1.0]],["ease-in-out",[0.42,0.0,0.58,1.0]],["easeInSine",[0.47,0,0.745,0.715]],["easeOutSine",[0.39,0.575,0.565,1]],["easeInOutSine",[0.445,0.05,0.55,0.95]],["easeInQuad",[0.55,0.085,0.68,0.53]],["easeOutQuad",[0.25,0.46,0.45,0.94]],["easeInOutQuad",[0.455,0.03,0.515,0.955]],["easeInCubic",[0.55,0.055,0.675,0.19]],["easeOutCubic",[0.215,0.61,0.355,1]],["easeInOutCubic",[0.645,0.045,0.355,1]],["easeInQuart",[0.895,0.03,0.685,0.22]],["easeOutQuart",[0.165,0.84,0.44,1]],["easeInOutQuart",[0.77,0,0.175,1]],["easeInQuint",[0.755,0.05,0.855,0.06]],["easeOutQuint",[0.23,1,0.32,1]],["easeInOutQuint",[0.86,0,0.07,1]],["easeInExpo",[0.95,0.05,0.795,0.035]],["easeOutExpo",[0.19,1,0.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[0.6,0.04,0.98,0.335]],["easeOutCirc",[0.075,0.82,0.165,1]],["easeInOutCirc",[0.785,0.135,0.15,0.86]]],function(i,easingArray){Velocity.Easings[easingArray[0]]=generateBezier.apply(null,easingArray[1]);});function getEasing(value,duration){var easing=value;if(Type.isString(value)){if(!Velocity.Easings[value]){easing=false;}}else if(Type.isArray(value)&&value.length===1){easing=generateStep.apply(null,value);}else if(Type.isArray(value)&&value.length===2){easing=generateSpringRK4.apply(null,value.concat([duration]));}else if(Type.isArray(value)&&value.length===4){easing=generateBezier.apply(null,value);}else{easing=false;}
if(easing===false){if(Velocity.Easings[Velocity.defaults.easing]){easing=Velocity.defaults.easing;}else{easing=EASING_DEFAULT;}}
return easing;}
var CSS=Velocity.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{"aliceblue":"240,248,255","antiquewhite":"250,235,215","aquamarine":"127,255,212","aqua":"0,255,255","azure":"240,255,255","beige":"245,245,220","bisque":"255,228,196","black":"0,0,0","blanchedalmond":"255,235,205","blueviolet":"138,43,226","blue":"0,0,255","brown":"165,42,42","burlywood":"222,184,135","cadetblue":"95,158,160","chartreuse":"127,255,0","chocolate":"210,105,30","coral":"255,127,80","cornflowerblue":"100,149,237","cornsilk":"255,248,220","crimson":"220,20,60","cyan":"0,255,255","darkblue":"0,0,139","darkcyan":"0,139,139","darkgoldenrod":"184,134,11","darkgray":"169,169,169","darkgrey":"169,169,169","darkgreen":"0,100,0","darkkhaki":"189,183,107","darkmagenta":"139,0,139","darkolivegreen":"85,107,47","darkorange":"255,140,0","darkorchid":"153,50,204","darkred":"139,0,0","darksalmon":"233,150,122","darkseagreen":"143,188,143","darkslateblue":"72,61,139","darkslategray":"47,79,79","darkturquoise":"0,206,209","darkviolet":"148,0,211","deeppink":"255,20,147","deepskyblue":"0,191,255","dimgray":"105,105,105","dimgrey":"105,105,105","dodgerblue":"30,144,255","firebrick":"178,34,34","floralwhite":"255,250,240","forestgreen":"34,139,34","fuchsia":"255,0,255","gainsboro":"220,220,220","ghostwhite":"248,248,255","gold":"255,215,0","goldenrod":"218,165,32","gray":"128,128,128","grey":"128,128,128","greenyellow":"173,255,47","green":"0,128,0","honeydew":"240,255,240","hotpink":"255,105,180","indianred":"205,92,92","indigo":"75,0,130","ivory":"255,255,240","khaki":"240,230,140","lavenderblush":"255,240,245","lavender":"230,230,250","lawngreen":"124,252,0","lemonchiffon":"255,250,205","lightblue":"173,216,230","lightcoral":"240,128,128","lightcyan":"224,255,255","lightgoldenrodyellow":"250,250,210","lightgray":"211,211,211","lightgrey":"211,211,211","lightgreen":"144,238,144","lightpink":"255,182,193","lightsalmon":"255,160,122","lightseagreen":"32,178,170","lightskyblue":"135,206,250","lightslategray":"119,136,153","lightsteelblue":"176,196,222","lightyellow":"255,255,224","limegreen":"50,205,50","lime":"0,255,0","linen":"250,240,230","magenta":"255,0,255","maroon":"128,0,0","mediumaquamarine":"102,205,170","mediumblue":"0,0,205","mediumorchid":"186,85,211","mediumpurple":"147,112,219","mediumseagreen":"60,179,113","mediumslateblue":"123,104,238","mediumspringgreen":"0,250,154","mediumturquoise":"72,209,204","mediumvioletred":"199,21,133","midnightblue":"25,25,112","mintcream":"245,255,250","mistyrose":"255,228,225","moccasin":"255,228,181","navajowhite":"255,222,173","navy":"0,0,128","oldlace":"253,245,230","olivedrab":"107,142,35","olive":"128,128,0","orangered":"255,69,0","orange":"255,165,0","orchid":"218,112,214","palegoldenrod":"238,232,170","palegreen":"152,251,152","paleturquoise":"175,238,238","palevioletred":"219,112,147","papayawhip":"255,239,213","peachpuff":"255,218,185","peru":"205,133,63","pink":"255,192,203","plum":"221,160,221","powderblue":"176,224,230","purple":"128,0,128","red":"255,0,0","rosybrown":"188,143,143","royalblue":"65,105,225","saddlebrown":"139,69,19","salmon":"250,128,114","sandybrown":"244,164,96","seagreen":"46,139,87","seashell":"255,245,238","sienna":"160,82,45","silver":"192,192,192","skyblue":"135,206,235","slateblue":"106,90,205","slategray":"112,128,144","snow":"255,250,250","springgreen":"0,255,127","steelblue":"70,130,180","tan":"210,180,140","teal":"0,128,128","thistle":"216,191,216","tomato":"255,99,71","turquoise":"64,224,208","violet":"238,130,238","wheat":"245,222,179","whitesmoke":"245,245,245","white":"255,255,255","yellowgreen":"154,205,50","yellow":"255,255,0"}},Hooks:{templates:{"textShadow":["Color X Y Blur","black 0px 0px 0px"],"boxShadow":["Color X Y Blur Spread","black 0px 0px 0px 0px"],"clip":["Top Right Bottom Left","0px 0px 0px 0px"],"backgroundPosition":["X Y","0% 0%"],"transformOrigin":["X Y Z","50% 50% 0px"],"perspectiveOrigin":["X Y","50% 50%"]},registered:{},register:function(){for(var i=0;i<CSS.Lists.colors.length;i++){var rgbComponents=(CSS.Lists.colors[i]==="color")?"0 0 0 1":"255 255 255 1";CSS.Hooks.templates[CSS.Lists.colors[i]]=["Red Green Blue Alpha",rgbComponents];}
var rootProperty,hookTemplate,hookNames;if(IE){for(rootProperty in CSS.Hooks.templates){if(!CSS.Hooks.templates.hasOwnProperty(rootProperty)){continue;}
hookTemplate=CSS.Hooks.templates[rootProperty];hookNames=hookTemplate[0].split(" ");var defaultValues=hookTemplate[1].match(CSS.RegEx.valueSplit);if(hookNames[0]==="Color"){hookNames.push(hookNames.shift());defaultValues.push(defaultValues.shift());CSS.Hooks.templates[rootProperty]=[hookNames.join(" "),defaultValues.join(" ")];}}}
for(rootProperty in CSS.Hooks.templates){if(!CSS.Hooks.templates.hasOwnProperty(rootProperty)){continue;}
hookTemplate=CSS.Hooks.templates[rootProperty];hookNames=hookTemplate[0].split(" ");for(var j in hookNames){if(!hookNames.hasOwnProperty(j)){continue;}
var fullHookName=rootProperty+hookNames[j],hookPosition=j;CSS.Hooks.registered[fullHookName]=[rootProperty,hookPosition];}}},getRoot:function(property){var hookData=CSS.Hooks.registered[property];if(hookData){return hookData[0];}else{return property;}},getUnit:function(str,start){var unit=(str.substr(start||0,5).match(/^[a-z%]+/)||[])[0]||"";if(unit&&CSS.Lists.units.indexOf(unit)>=0){return unit;}
return "";},fixColors:function(str){return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function($0,$1,$2){if(CSS.Lists.colorNames.hasOwnProperty($2)){return($1?$1:"rgba(")+CSS.Lists.colorNames[$2]+($1?"":",1)");}
return $1+$2;});},cleanRootPropertyValue:function(rootProperty,rootPropertyValue){if(CSS.RegEx.valueUnwrap.test(rootPropertyValue)){rootPropertyValue=rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];}
if(CSS.Values.isCSSNullValue(rootPropertyValue)){rootPropertyValue=CSS.Hooks.templates[rootProperty][1];}
return rootPropertyValue;},extractValue:function(fullHookName,rootPropertyValue){var hookData=CSS.Hooks.registered[fullHookName];if(hookData){var hookRoot=hookData[0],hookPosition=hookData[1];rootPropertyValue=CSS.Hooks.cleanRootPropertyValue(hookRoot,rootPropertyValue);return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];}else{return rootPropertyValue;}},injectValue:function(fullHookName,hookValue,rootPropertyValue){var hookData=CSS.Hooks.registered[fullHookName];if(hookData){var hookRoot=hookData[0],hookPosition=hookData[1],rootPropertyValueParts,rootPropertyValueUpdated;rootPropertyValue=CSS.Hooks.cleanRootPropertyValue(hookRoot,rootPropertyValue);rootPropertyValueParts=rootPropertyValue.toString().match(CSS.RegEx.valueSplit);rootPropertyValueParts[hookPosition]=hookValue;rootPropertyValueUpdated=rootPropertyValueParts.join(" ");return rootPropertyValueUpdated;}else{return rootPropertyValue;}}},Normalizations:{registered:{clip:function(type,element,propertyValue){switch(type){case "name":return "clip";case "extract":var extracted;if(CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)){extracted=propertyValue;}else{extracted=propertyValue.toString().match(CSS.RegEx.valueUnwrap);extracted=extracted?extracted[1].replace(/,(\s+)?/g," "):propertyValue;}
return extracted;case "inject":return "rect("+propertyValue+")";}},blur:function(type,element,propertyValue){switch(type){case "name":return Velocity.State.isFirefox?"filter":"-webkit-filter";case "extract":var extracted=parseFloat(propertyValue);if(!(extracted||extracted===0)){var blurComponent=propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);if(blurComponent){extracted=blurComponent[1];}else{extracted=0;}}
return extracted;case "inject":if(!parseFloat(propertyValue)){return "none";}else{return "blur("+propertyValue+")";}}},opacity:function(type,element,propertyValue){if(IE<=8){switch(type){case "name":return "filter";case "extract":var extracted=propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);if(extracted){propertyValue=extracted[1]/100;}else{propertyValue=1;}
return propertyValue;case "inject":element.style.zoom=1;if(parseFloat(propertyValue)>=1){return "";}else{return "alpha(opacity="+parseInt(parseFloat(propertyValue)*100,10)+")";}}}else{switch(type){case "name":return "opacity";case "extract":return propertyValue;case "inject":return propertyValue;}}}},register:function(){if((!IE||IE>9)&&!Velocity.State.isGingerbread){CSS.Lists.transformsBase=CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);}
for(var i=0;i<CSS.Lists.transformsBase.length;i++){(function(){var transformName=CSS.Lists.transformsBase[i];CSS.Normalizations.registered[transformName]=function(type,element,propertyValue){switch(type){case "name":return "transform";case "extract":if(Data(element)===undefined||Data(element).transformCache[transformName]===undefined){return /^scale/i.test(transformName)?1:0;}
return Data(element).transformCache[transformName].replace(/[()]/g,"");case "inject":var invalid=false;switch(transformName.substr(0,transformName.length-1)){case "translate":invalid=!/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);break;case "scal":case "scale":if(Velocity.State.isAndroid&&Data(element).transformCache[transformName]===undefined&&propertyValue<1){propertyValue=1;}
invalid=!/(\d)$/i.test(propertyValue);break;case "skew":invalid=!/(deg|\d)$/i.test(propertyValue);break;case "rotate":invalid=!/(deg|\d)$/i.test(propertyValue);break;}
if(!invalid){Data(element).transformCache[transformName]="("+propertyValue+")";}
return Data(element).transformCache[transformName];}};})();}
for(var j=0;j<CSS.Lists.colors.length;j++){(function(){var colorName=CSS.Lists.colors[j];CSS.Normalizations.registered[colorName]=function(type,element,propertyValue){switch(type){case "name":return colorName;case "extract":var extracted;if(CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)){extracted=propertyValue;}else{var converted,colorNames={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};if(/^[A-z]+$/i.test(propertyValue)){if(colorNames[propertyValue]!==undefined){converted=colorNames[propertyValue];}else{converted=colorNames.black;}}else if(CSS.RegEx.isHex.test(propertyValue)){converted="rgb("+CSS.Values.hexToRgb(propertyValue).join(" ")+")";}else if(!(/^rgba?\(/i.test(propertyValue))){converted=colorNames.black;}
extracted=(converted||propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ");}
if((!IE||IE>8)&&extracted.split(" ").length===3){extracted+=" 1";}
return extracted;case "inject":if(/^rgb/.test(propertyValue)){return propertyValue;}
if(IE<=8){if(propertyValue.split(" ").length===4){propertyValue=propertyValue.split(/\s+/).slice(0,3).join(" ");}}else if(propertyValue.split(" ").length===3){propertyValue+=" 1";}
return(IE<=8?"rgb":"rgba")+"("+propertyValue.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")";}};})();}
function augmentDimension(name,element,wantInner){var isBorderBox=CSS.getPropertyValue(element,"boxSizing").toString().toLowerCase()==="border-box";if(isBorderBox===(wantInner||false)){var i,value,augment=0,sides=name==="width"?["Left","Right"]:["Top","Bottom"],fields=["padding"+sides[0],"padding"+sides[1],"border"+sides[0]+"Width","border"+sides[1]+"Width"];for(i=0;i<fields.length;i++){value=parseFloat(CSS.getPropertyValue(element,fields[i]));if(!isNaN(value)){augment+=value;}}
return wantInner?-augment:augment;}
return 0;}
function getDimension(name,wantInner){return function(type,element,propertyValue){switch(type){case "name":return name;case "extract":return parseFloat(propertyValue)+augmentDimension(name,element,wantInner);case "inject":return(parseFloat(propertyValue)-augmentDimension(name,element,wantInner))+"px";}};}
CSS.Normalizations.registered.innerWidth=getDimension("width",true);CSS.Normalizations.registered.innerHeight=getDimension("height",true);CSS.Normalizations.registered.outerWidth=getDimension("width");CSS.Normalizations.registered.outerHeight=getDimension("height");}},Names:{camelCase:function(property){return property.replace(/-(\w)/g,function(match,subMatch){return subMatch.toUpperCase();});},SVGAttribute:function(property){var SVGAttributes="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";if(IE||(Velocity.State.isAndroid&&!Velocity.State.isChrome)){SVGAttributes+="|transform";}
return new RegExp("^("+SVGAttributes+")$","i").test(property);},prefixCheck:function(property){if(Velocity.State.prefixMatches[property]){return[Velocity.State.prefixMatches[property],true];}else{var vendors=["","Webkit","Moz","ms","O"];for(var i=0,vendorsLength=vendors.length;i<vendorsLength;i++){var propertyPrefixed;if(i===0){propertyPrefixed=property;}else{propertyPrefixed=vendors[i]+property.replace(/^\w/,function(match){return match.toUpperCase();});}
if(Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])){Velocity.State.prefixMatches[property]=propertyPrefixed;return[propertyPrefixed,true];}}
return[property,false];}}},Values:{hexToRgb:function(hex){var shortformRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,longformRegex=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgbParts;hex=hex.replace(shortformRegex,function(m,r,g,b){return r+r+g+g+b+b;});rgbParts=longformRegex.exec(hex);return rgbParts?[parseInt(rgbParts[1],16),parseInt(rgbParts[2],16),parseInt(rgbParts[3],16)]:[0,0,0];},isCSSNullValue:function(value){return(!value||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));},getUnitType:function(property){if(/^(rotate|skew)/i.test(property)){return "deg";}else if(/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)){return "";}else{return "px";}},getDisplayType:function(element){var tagName=element&&element.tagName.toString().toLowerCase();if(/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)){return "inline";}else if(/^(li)$/i.test(tagName)){return "list-item";}else if(/^(tr)$/i.test(tagName)){return "table-row";}else if(/^(table)$/i.test(tagName)){return "table";}else if(/^(tbody)$/i.test(tagName)){return "table-row-group";}else{return "block";}},addClass:function(element,className){if(element){if(element.classList){element.classList.add(className);}else if(Type.isString(element.className)){element.className+=(element.className.length?" ":"")+className;}else{var currentClass=element.getAttribute(IE<=7?"className":"class")||"";element.setAttribute("class",currentClass+(currentClass?" ":"")+className);}}},removeClass:function(element,className){if(element){if(element.classList){element.classList.remove(className);}else if(Type.isString(element.className)){element.className=element.className.toString().replace(new RegExp("(^|\\s)"+className.split(" ").join("|")+"(\\s|$)","gi")," ");}else{var currentClass=element.getAttribute(IE<=7?"className":"class")||"";element.setAttribute("class",currentClass.replace(new RegExp("(^|\s)"+className.split(" ").join("|")+"(\s|$)","gi")," "));}}}},getPropertyValue:function(element,property,rootPropertyValue,forceStyleLookup){function computePropertyValue(element,property){var computedValue=0;if(IE<=8){computedValue=$.css(element,property);}else{var toggleDisplay=false;if(/^(width|height)$/.test(property)&&CSS.getPropertyValue(element,"display")===0){toggleDisplay=true;CSS.setPropertyValue(element,"display",CSS.Values.getDisplayType(element));}
var revertDisplay=function(){if(toggleDisplay){CSS.setPropertyValue(element,"display","none");}};if(!forceStyleLookup){if(property==="height"&&CSS.getPropertyValue(element,"boxSizing").toString().toLowerCase()!=="border-box"){var contentBoxHeight=element.offsetHeight-(parseFloat(CSS.getPropertyValue(element,"borderTopWidth"))||0)-(parseFloat(CSS.getPropertyValue(element,"borderBottomWidth"))||0)-(parseFloat(CSS.getPropertyValue(element,"paddingTop"))||0)-(parseFloat(CSS.getPropertyValue(element,"paddingBottom"))||0);revertDisplay();return contentBoxHeight;}else if(property==="width"&&CSS.getPropertyValue(element,"boxSizing").toString().toLowerCase()!=="border-box"){var contentBoxWidth=element.offsetWidth-(parseFloat(CSS.getPropertyValue(element,"borderLeftWidth"))||0)-(parseFloat(CSS.getPropertyValue(element,"borderRightWidth"))||0)-(parseFloat(CSS.getPropertyValue(element,"paddingLeft"))||0)-(parseFloat(CSS.getPropertyValue(element,"paddingRight"))||0);revertDisplay();return contentBoxWidth;}}
var computedStyle;if(Data(element)===undefined){computedStyle=window.getComputedStyle(element,null);}else if(!Data(element).computedStyle){computedStyle=Data(element).computedStyle=window.getComputedStyle(element,null);}else{computedStyle=Data(element).computedStyle;}
if(property==="borderColor"){property="borderTopColor";}
if(IE===9&&property==="filter"){computedValue=computedStyle.getPropertyValue(property);}else{computedValue=computedStyle[property];}
if(computedValue===""||computedValue===null){computedValue=element.style[property];}
revertDisplay();}
if(computedValue==="auto"&&/^(top|right|bottom|left)$/i.test(property)){var position=computePropertyValue(element,"position");if(position==="fixed"||(position==="absolute"&&/top|left/i.test(property))){computedValue=$(element).position()[property]+"px";}}
return computedValue;}
var propertyValue;if(CSS.Hooks.registered[property]){var hook=property,hookRoot=CSS.Hooks.getRoot(hook);if(rootPropertyValue===undefined){rootPropertyValue=CSS.getPropertyValue(element,CSS.Names.prefixCheck(hookRoot)[0]);}
if(CSS.Normalizations.registered[hookRoot]){rootPropertyValue=CSS.Normalizations.registered[hookRoot]("extract",element,rootPropertyValue);}
propertyValue=CSS.Hooks.extractValue(hook,rootPropertyValue);}else if(CSS.Normalizations.registered[property]){var normalizedPropertyName,normalizedPropertyValue;normalizedPropertyName=CSS.Normalizations.registered[property]("name",element);if(normalizedPropertyName!=="transform"){normalizedPropertyValue=computePropertyValue(element,CSS.Names.prefixCheck(normalizedPropertyName)[0]);if(CSS.Values.isCSSNullValue(normalizedPropertyValue)&&CSS.Hooks.templates[property]){normalizedPropertyValue=CSS.Hooks.templates[property][1];}}
propertyValue=CSS.Normalizations.registered[property]("extract",element,normalizedPropertyValue);}
if(!/^[\d-]/.test(propertyValue)){var data=Data(element);if(data&&data.isSVG&&CSS.Names.SVGAttribute(property)){if(/^(height|width)$/i.test(property)){try{propertyValue=element.getBBox()[property];}catch(error){propertyValue=0;}}else{propertyValue=element.getAttribute(property);}}else{propertyValue=computePropertyValue(element,CSS.Names.prefixCheck(property)[0]);}}
if(CSS.Values.isCSSNullValue(propertyValue)){propertyValue=0;}
if(Velocity.debug>=2){console.log("Get "+property+": "+propertyValue);}
return propertyValue;},setPropertyValue:function(element,property,propertyValue,rootPropertyValue,scrollData){var propertyName=property;if(property==="scroll"){if(scrollData.container){scrollData.container["scroll"+scrollData.direction]=propertyValue;}else{if(scrollData.direction==="Left"){window.scrollTo(propertyValue,scrollData.alternateValue);}else{window.scrollTo(scrollData.alternateValue,propertyValue);}}}else{if(CSS.Normalizations.registered[property]&&CSS.Normalizations.registered[property]("name",element)==="transform"){CSS.Normalizations.registered[property]("inject",element,propertyValue);propertyName="transform";propertyValue=Data(element).transformCache[property];}else{if(CSS.Hooks.registered[property]){var hookName=property,hookRoot=CSS.Hooks.getRoot(property);rootPropertyValue=rootPropertyValue||CSS.getPropertyValue(element,hookRoot);propertyValue=CSS.Hooks.injectValue(hookName,propertyValue,rootPropertyValue);property=hookRoot;}
if(CSS.Normalizations.registered[property]){propertyValue=CSS.Normalizations.registered[property]("inject",element,propertyValue);property=CSS.Normalizations.registered[property]("name",element);}
propertyName=CSS.Names.prefixCheck(property)[0];if(IE<=8){try{element.style[propertyName]=propertyValue;}catch(error){if(Velocity.debug){console.log("Browser does not support ["+propertyValue+"] for ["+propertyName+"]");}}}else{var data=Data(element);if(data&&data.isSVG&&CSS.Names.SVGAttribute(property)){element.setAttribute(property,propertyValue);}else{element.style[propertyName]=propertyValue;}}
if(Velocity.debug>=2){console.log("Set "+property+" ("+propertyName+"): "+propertyValue);}}}
return[propertyName,propertyValue];},flushTransformCache:function(element){var transformString="",data=Data(element);if((IE||(Velocity.State.isAndroid&&!Velocity.State.isChrome))&&data&&data.isSVG){var getTransformFloat=function(transformProperty){return parseFloat(CSS.getPropertyValue(element,transformProperty));};var SVGTransforms={translate:[getTransformFloat("translateX"),getTransformFloat("translateY")],skewX:[getTransformFloat("skewX")],skewY:[getTransformFloat("skewY")],scale:getTransformFloat("scale")!==1?[getTransformFloat("scale"),getTransformFloat("scale")]:[getTransformFloat("scaleX"),getTransformFloat("scaleY")],rotate:[getTransformFloat("rotateZ"),0,0]};$.each(Data(element).transformCache,function(transformName){if(/^translate/i.test(transformName)){transformName="translate";}else if(/^scale/i.test(transformName)){transformName="scale";}else if(/^rotate/i.test(transformName)){transformName="rotate";}
if(SVGTransforms[transformName]){transformString+=transformName+"("+SVGTransforms[transformName].join(" ")+")"+" ";delete SVGTransforms[transformName];}});}else{var transformValue,perspective;$.each(Data(element).transformCache,function(transformName){transformValue=Data(element).transformCache[transformName];if(transformName==="transformPerspective"){perspective=transformValue;return true;}
if(IE===9&&transformName==="rotateZ"){transformName="rotate";}
transformString+=transformName+transformValue+" ";});if(perspective){transformString="perspective"+perspective+" "+transformString;}}
CSS.setPropertyValue(element,"transform",transformString);}};CSS.Hooks.register();CSS.Normalizations.register();Velocity.hook=function(elements,arg2,arg3){var value;elements=sanitizeElements(elements);$.each(elements,function(i,element){if(Data(element)===undefined){Velocity.init(element);}
if(arg3===undefined){if(value===undefined){value=CSS.getPropertyValue(element,arg2);}}else{var adjustedSet=CSS.setPropertyValue(element,arg2,arg3);if(adjustedSet[0]==="transform"){Velocity.CSS.flushTransformCache(element);}
value=adjustedSet;}});return value;};var animate=function(){var opts;function getChain(){if(isUtility){return promiseData.promise||null;}else{return elementsWrapped;}}
var syntacticSugar=(arguments[0]&&(arguments[0].p||(($.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names)||Type.isString(arguments[0].properties)))),isUtility,elementsWrapped,argumentIndex;var elements,propertiesMap,options;if(Type.isWrapped(this)){isUtility=false;argumentIndex=0;elements=this;elementsWrapped=this;}else{isUtility=true;argumentIndex=1;elements=syntacticSugar?(arguments[0].elements||arguments[0].e):arguments[0];}
var promiseData={promise:null,resolver:null,rejecter:null};if(isUtility&&Velocity.Promise){promiseData.promise=new Velocity.Promise(function(resolve,reject){promiseData.resolver=resolve;promiseData.rejecter=reject;});}
if(syntacticSugar){propertiesMap=arguments[0].properties||arguments[0].p;options=arguments[0].options||arguments[0].o;}else{propertiesMap=arguments[argumentIndex];options=arguments[argumentIndex+1];}
elements=sanitizeElements(elements);if(!elements){if(promiseData.promise){if(!propertiesMap||!options||options.promiseRejectEmpty!==false){promiseData.rejecter();}else{promiseData.resolver();}}
return;}
var elementsLength=elements.length,elementsIndex=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap)&&!$.isPlainObject(options)){var startingArgumentPosition=argumentIndex+1;options={};for(var i=startingArgumentPosition;i<arguments.length;i++){if(!Type.isArray(arguments[i])&&(/^(fast|normal|slow)$/i.test(arguments[i])||/^\d/.test(arguments[i]))){options.duration=arguments[i];}else if(Type.isString(arguments[i])||Type.isArray(arguments[i])){options.easing=arguments[i];}else if(Type.isFunction(arguments[i])){options.complete=arguments[i];}}}
var action;switch(propertiesMap){case "scroll":action="scroll";break;case "reverse":action="reverse";break;case "pause":var currentTime=(new Date()).getTime();$.each(elements,function(i,element){pauseDelayOnElement(element,currentTime);});$.each(Velocity.State.calls,function(i,activeCall){var found=false;if(activeCall){$.each(activeCall[1],function(k,activeElement){var queueName=(options===undefined)?"":options;if(queueName!==true&&(activeCall[2].queue!==queueName)&&!(options===undefined&&activeCall[2].queue===false)){return true;}
$.each(elements,function(l,element){if(element===activeElement){activeCall[5]={resume:false};found=true;return false;}});if(found){return false;}});}});return getChain();case "resume":$.each(elements,function(i,element){resumeDelayOnElement(element,currentTime);});$.each(Velocity.State.calls,function(i,activeCall){var found=false;if(activeCall){$.each(activeCall[1],function(k,activeElement){var queueName=(options===undefined)?"":options;if(queueName!==true&&(activeCall[2].queue!==queueName)&&!(options===undefined&&activeCall[2].queue===false)){return true;}
if(!activeCall[5]){return true;}
$.each(elements,function(l,element){if(element===activeElement){activeCall[5].resume=true;found=true;return false;}});if(found){return false;}});}});return getChain();case "finish":case "finishAll":case "stop":$.each(elements,function(i,element){if(Data(element)&&Data(element).delayTimer){clearTimeout(Data(element).delayTimer.setTimeout);if(Data(element).delayTimer.next){Data(element).delayTimer.next();}
delete Data(element).delayTimer;}
if(propertiesMap==="finishAll"&&(options===true||Type.isString(options))){$.each($.queue(element,Type.isString(options)?options:""),function(_,item){if(Type.isFunction(item)){item();}});$.queue(element,Type.isString(options)?options:"",[]);}});var callsToStop=[];$.each(Velocity.State.calls,function(i,activeCall){if(activeCall){$.each(activeCall[1],function(k,activeElement){var queueName=(options===undefined)?"":options;if(queueName!==true&&(activeCall[2].queue!==queueName)&&!(options===undefined&&activeCall[2].queue===false)){return true;}
$.each(elements,function(l,element){if(element===activeElement){if(options===true||Type.isString(options)){$.each($.queue(element,Type.isString(options)?options:""),function(_,item){if(Type.isFunction(item)){item(null,true);}});$.queue(element,Type.isString(options)?options:"",[]);}
if(propertiesMap==="stop"){var data=Data(element);if(data&&data.tweensContainer&&queueName!==false){$.each(data.tweensContainer,function(m,activeTween){activeTween.endValue=activeTween.currentValue;});}
callsToStop.push(i);}else if(propertiesMap==="finish"||propertiesMap==="finishAll"){activeCall[2].duration=1;}}});});}});if(propertiesMap==="stop"){$.each(callsToStop,function(i,j){completeCall(j,true);});if(promiseData.promise){promiseData.resolver(elements);}}
return getChain();default:if($.isPlainObject(propertiesMap)&&!Type.isEmptyObject(propertiesMap)){action="start";}else if(Type.isString(propertiesMap)&&Velocity.Redirects[propertiesMap]){opts=$.extend({},options);var durationOriginal=opts.duration,delayOriginal=opts.delay||0;if(opts.backwards===true){elements=$.extend(true,[],elements).reverse();}
$.each(elements,function(elementIndex,element){if(parseFloat(opts.stagger)){opts.delay=delayOriginal+(parseFloat(opts.stagger)*elementIndex);}else if(Type.isFunction(opts.stagger)){opts.delay=delayOriginal+opts.stagger.call(element,elementIndex,elementsLength);}
if(opts.drag){opts.duration=parseFloat(durationOriginal)||(/^(callout|transition)/.test(propertiesMap)?1000:DURATION_DEFAULT);opts.duration=Math.max(opts.duration*(opts.backwards?1-elementIndex/elementsLength:(elementIndex+1)/elementsLength),opts.duration*0.75,200);}
Velocity.Redirects[propertiesMap].call(element,element,opts||{},elementIndex,elementsLength,elements,promiseData.promise?promiseData:undefined);});return getChain();}else{var abortError="Velocity: First argument ("+propertiesMap+") was not a property map, a known action, or a registered redirect. Aborting.";if(promiseData.promise){promiseData.rejecter(new Error(abortError));}else{console.log(abortError);}
return getChain();}}
var callUnitConversionData={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null};var call=[];function processElement(element,elementArrayIndex){var
opts=$.extend({},Velocity.defaults,options),tweensContainer={},elementUnitConversionData;if(Data(element)===undefined){Velocity.init(element);}
if(parseFloat(opts.delay)&&opts.queue!==false){$.queue(element,opts.queue,function(next){Velocity.velocityQueueEntryFlag=true;var callIndex=Velocity.State.delayedElements.count++;Velocity.State.delayedElements[callIndex]=element;var delayComplete=(function(index){return function(){Velocity.State.delayedElements[index]=false;next();};})(callIndex);Data(element).delayBegin=(new Date()).getTime();Data(element).delay=parseFloat(opts.delay);Data(element).delayTimer={setTimeout:setTimeout(next,parseFloat(opts.delay)),next:delayComplete};});}
switch(opts.duration.toString().toLowerCase()){case "fast":opts.duration=200;break;case "normal":opts.duration=DURATION_DEFAULT;break;case "slow":opts.duration=600;break;default:opts.duration=parseFloat(opts.duration)||1;}
if(Velocity.mock!==false){if(Velocity.mock===true){opts.duration=opts.delay=1;}else{opts.duration*=parseFloat(Velocity.mock)||1;opts.delay*=parseFloat(Velocity.mock)||1;}}
opts.easing=getEasing(opts.easing,opts.duration);if(opts.begin&&!Type.isFunction(opts.begin)){opts.begin=null;}
if(opts.progress&&!Type.isFunction(opts.progress)){opts.progress=null;}
if(opts.complete&&!Type.isFunction(opts.complete)){opts.complete=null;}
if(opts.display!==undefined&&opts.display!==null){opts.display=opts.display.toString().toLowerCase();if(opts.display==="auto"){opts.display=Velocity.CSS.Values.getDisplayType(element);}}
if(opts.visibility!==undefined&&opts.visibility!==null){opts.visibility=opts.visibility.toString().toLowerCase();}
opts.mobileHA=(opts.mobileHA&&Velocity.State.isMobile&&!Velocity.State.isGingerbread);function buildQueue(next){var data,lastTweensContainer;if(opts.begin&&elementsIndex===0){try{opts.begin.call(elements,elements);}catch(error){setTimeout(function(){throw error;},1);}}
if(action==="scroll"){var scrollDirection=(/^x$/i.test(opts.axis)?"Left":"Top"),scrollOffset=parseFloat(opts.offset)||0,scrollPositionCurrent,scrollPositionCurrentAlternate,scrollPositionEnd;if(opts.container){if(Type.isWrapped(opts.container)||Type.isNode(opts.container)){opts.container=opts.container[0]||opts.container;scrollPositionCurrent=opts.container["scroll"+scrollDirection];scrollPositionEnd=(scrollPositionCurrent+$(element).position()[scrollDirection.toLowerCase()])+scrollOffset;}else{opts.container=null;}}else{scrollPositionCurrent=Velocity.State.scrollAnchor[Velocity.State["scrollProperty"+scrollDirection]];scrollPositionCurrentAlternate=Velocity.State.scrollAnchor[Velocity.State["scrollProperty"+(scrollDirection==="Left"?"Top":"Left")]];scrollPositionEnd=$(element).offset()[scrollDirection.toLowerCase()]+scrollOffset;}
tweensContainer={scroll:{rootPropertyValue:false,startValue:scrollPositionCurrent,currentValue:scrollPositionCurrent,endValue:scrollPositionEnd,unitType:"",easing:opts.easing,scrollData:{container:opts.container,direction:scrollDirection,alternateValue:scrollPositionCurrentAlternate}},element:element};if(Velocity.debug){console.log("tweensContainer (scroll): ",tweensContainer.scroll,element);}}else if(action==="reverse"){data=Data(element);if(!data){return;}
if(!data.tweensContainer){$.dequeue(element,opts.queue);return;}else{if(data.opts.display==="none"){data.opts.display="auto";}
if(data.opts.visibility==="hidden"){data.opts.visibility="visible";}
data.opts.loop=false;data.opts.begin=null;data.opts.complete=null;if(!options.easing){delete opts.easing;}
if(!options.duration){delete opts.duration;}
opts=$.extend({},data.opts,opts);lastTweensContainer=$.extend(true,{},data?data.tweensContainer:null);for(var lastTween in lastTweensContainer){if(lastTweensContainer.hasOwnProperty(lastTween)&&lastTween!=="element"){var lastStartValue=lastTweensContainer[lastTween].startValue;lastTweensContainer[lastTween].startValue=lastTweensContainer[lastTween].currentValue=lastTweensContainer[lastTween].endValue;lastTweensContainer[lastTween].endValue=lastStartValue;if(!Type.isEmptyObject(options)){lastTweensContainer[lastTween].easing=opts.easing;}
if(Velocity.debug){console.log("reverse tweensContainer ("+lastTween+"): "+JSON.stringify(lastTweensContainer[lastTween]),element);}}}
tweensContainer=lastTweensContainer;}}else if(action==="start"){data=Data(element);if(data&&data.tweensContainer&&data.isAnimating===true){lastTweensContainer=data.tweensContainer;}
var parsePropertyValue=function(valueData,skipResolvingEasing){var endValue,easing,startValue;if(Type.isFunction(valueData)){valueData=valueData.call(element,elementArrayIndex,elementsLength);}
if(Type.isArray(valueData)){endValue=valueData[0];if((!Type.isArray(valueData[1])&&/^[\d-]/.test(valueData[1]))||Type.isFunction(valueData[1])||CSS.RegEx.isHex.test(valueData[1])){startValue=valueData[1];}else if((Type.isString(valueData[1])&&!CSS.RegEx.isHex.test(valueData[1])&&Velocity.Easings[valueData[1]])||Type.isArray(valueData[1])){easing=skipResolvingEasing?valueData[1]:getEasing(valueData[1],opts.duration);startValue=valueData[2];}else{startValue=valueData[1]||valueData[2];}}else{endValue=valueData;}
if(!skipResolvingEasing){easing=easing||opts.easing;}
if(Type.isFunction(endValue)){endValue=endValue.call(element,elementArrayIndex,elementsLength);}
if(Type.isFunction(startValue)){startValue=startValue.call(element,elementArrayIndex,elementsLength);}
return[endValue||0,easing,startValue];};var fixPropertyValue=function(property,valueData){var rootProperty=CSS.Hooks.getRoot(property),rootPropertyValue=false,endValue=valueData[0],easing=valueData[1],startValue=valueData[2],pattern;if((!data||!data.isSVG)&&rootProperty!=="tween"&&CSS.Names.prefixCheck(rootProperty)[1]===false&&CSS.Normalizations.registered[rootProperty]===undefined){if(Velocity.debug){console.log("Skipping ["+rootProperty+"] due to a lack of browser support.");}
return;}
if(((opts.display!==undefined&&opts.display!==null&&opts.display!=="none")||(opts.visibility!==undefined&&opts.visibility!=="hidden"))&&/opacity|filter/.test(property)&&!startValue&&endValue!==0){startValue=0;}
if(opts._cacheValues&&lastTweensContainer&&lastTweensContainer[property]){if(startValue===undefined){startValue=lastTweensContainer[property].endValue+lastTweensContainer[property].unitType;}
rootPropertyValue=data.rootPropertyValueCache[rootProperty];}else{if(CSS.Hooks.registered[property]){if(startValue===undefined){rootPropertyValue=CSS.getPropertyValue(element,rootProperty);startValue=CSS.getPropertyValue(element,property,rootPropertyValue);}else{rootPropertyValue=CSS.Hooks.templates[rootProperty][1];}}else if(startValue===undefined){startValue=CSS.getPropertyValue(element,property);}}
var separatedValue,endValueUnitType,startValueUnitType,operator=false;var separateValue=function(property,value){var unitType,numericValue;numericValue=(value||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(match){unitType=match;return "";});if(!unitType){unitType=CSS.Values.getUnitType(property);}
return[numericValue,unitType];};if(startValue!==endValue&&Type.isString(startValue)&&Type.isString(endValue)){pattern="";var iStart=0,iEnd=0,aStart=[],aEnd=[],inCalc=0,inRGB=0,inRGBA=0;startValue=CSS.Hooks.fixColors(startValue);endValue=CSS.Hooks.fixColors(endValue);while(iStart<startValue.length&&iEnd<endValue.length){var cStart=startValue[iStart],cEnd=endValue[iEnd];if(/[\d\.]/.test(cStart)&&/[\d\.]/.test(cEnd)){var tStart=cStart,tEnd=cEnd,dotStart=".",dotEnd=".";while(++iStart<startValue.length){cStart=startValue[iStart];if(cStart===dotStart){dotStart="..";}else if(!/\d/.test(cStart)){break;}
tStart+=cStart;}
while(++iEnd<endValue.length){cEnd=endValue[iEnd];if(cEnd===dotEnd){dotEnd="..";}else if(!/\d/.test(cEnd)){break;}
tEnd+=cEnd;}
var uStart=CSS.Hooks.getUnit(startValue,iStart),uEnd=CSS.Hooks.getUnit(endValue,iEnd);iStart+=uStart.length;iEnd+=uEnd.length;if(uStart===uEnd){if(tStart===tEnd){pattern+=tStart+uStart;}else{pattern+="{"+aStart.length+(inRGB?"!":"")+"}"+uStart;aStart.push(parseFloat(tStart));aEnd.push(parseFloat(tEnd));}}else{var nStart=parseFloat(tStart),nEnd=parseFloat(tEnd);pattern+=(inCalc<5?"calc":"")+"("
+(nStart?"{"+aStart.length+(inRGB?"!":"")+"}":"0")+uStart
+" + "
+(nEnd?"{"+(aStart.length+1)+(inRGB?"!":"")+"}":"0")+uEnd
+")";if(nStart){aStart.push(parseFloat(tStart));aStart.push(parseFloat(0));}
if(nEnd){aEnd.push(parseFloat(0));aEnd.push(parseFloat(tEnd));}}}else if(cStart===cEnd){pattern+=cStart;iStart++;iEnd++;if(inCalc===0&&cStart==="c"||inCalc===1&&cStart==="a"||inCalc===2&&cStart==="l"||inCalc===3&&cStart==="c"||inCalc>=4&&cStart==="("){inCalc++;}else if((inCalc&&inCalc<5)||inCalc>=4&&cStart===")"&&--inCalc<5){inCalc=0;}
if(inRGB===0&&cStart==="r"||inRGB===1&&cStart==="g"||inRGB===2&&cStart==="b"||inRGB===3&&cStart==="a"||inRGB>=3&&cStart==="("){if(inRGB===3&&cStart==="a"){inRGBA=1;}
inRGB++;}else if(inRGBA&&cStart===","){if(++inRGBA>3){inRGB=inRGBA=0;}}else if((inRGBA&&inRGB<(inRGBA?5:4))||inRGB>=(inRGBA?4:3)&&cStart===")"&&--inRGB<(inRGBA?5:4)){inRGB=inRGBA=0;}}else{inCalc=0;break;}}
if(iStart!==startValue.length||iEnd!==endValue.length){if(Velocity.debug){console.error("Trying to pattern match mis-matched strings [\""+endValue+"\", \""+startValue+"\"]");}
pattern=undefined;}
if(pattern){if(aStart.length){if(Velocity.debug){console.log("Pattern found \""+pattern+"\" -> ",aStart,aEnd,"["+startValue+","+endValue+"]");}
startValue=aStart;endValue=aEnd;endValueUnitType=startValueUnitType="";}else{pattern=undefined;}}}
if(!pattern){separatedValue=separateValue(property,startValue);startValue=separatedValue[0];startValueUnitType=separatedValue[1];separatedValue=separateValue(property,endValue);endValue=separatedValue[0].replace(/^([+-\/*])=/,function(match,subMatch){operator=subMatch;return "";});endValueUnitType=separatedValue[1];startValue=parseFloat(startValue)||0;endValue=parseFloat(endValue)||0;if(endValueUnitType==="%"){if(/^(fontSize|lineHeight)$/.test(property)){endValue=endValue/100;endValueUnitType="em";}else if(/^scale/.test(property)){endValue=endValue/100;endValueUnitType="";}else if(/(Red|Green|Blue)$/i.test(property)){endValue=(endValue/100)*255;endValueUnitType="";}}}
var calculateUnitRatios=function(){var sameRatioIndicators={myParent:element.parentNode||document.body,position:CSS.getPropertyValue(element,"position"),fontSize:CSS.getPropertyValue(element,"fontSize")},samePercentRatio=((sameRatioIndicators.position===callUnitConversionData.lastPosition)&&(sameRatioIndicators.myParent===callUnitConversionData.lastParent)),sameEmRatio=(sameRatioIndicators.fontSize===callUnitConversionData.lastFontSize);callUnitConversionData.lastParent=sameRatioIndicators.myParent;callUnitConversionData.lastPosition=sameRatioIndicators.position;callUnitConversionData.lastFontSize=sameRatioIndicators.fontSize;var measurement=100,unitRatios={};if(!sameEmRatio||!samePercentRatio){var dummy=data&&data.isSVG?document.createElementNS("http://www.w3.org/2000/svg","rect"):document.createElement("div");Velocity.init(dummy);sameRatioIndicators.myParent.appendChild(dummy);$.each(["overflow","overflowX","overflowY"],function(i,property){Velocity.CSS.setPropertyValue(dummy,property,"hidden");});Velocity.CSS.setPropertyValue(dummy,"position",sameRatioIndicators.position);Velocity.CSS.setPropertyValue(dummy,"fontSize",sameRatioIndicators.fontSize);Velocity.CSS.setPropertyValue(dummy,"boxSizing","content-box");$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(i,property){Velocity.CSS.setPropertyValue(dummy,property,measurement+"%");});Velocity.CSS.setPropertyValue(dummy,"paddingLeft",measurement+"em");unitRatios.percentToPxWidth=callUnitConversionData.lastPercentToPxWidth=(parseFloat(CSS.getPropertyValue(dummy,"width",null,true))||1)/measurement;unitRatios.percentToPxHeight=callUnitConversionData.lastPercentToPxHeight=(parseFloat(CSS.getPropertyValue(dummy,"height",null,true))||1)/measurement;unitRatios.emToPx=callUnitConversionData.lastEmToPx=(parseFloat(CSS.getPropertyValue(dummy,"paddingLeft"))||1)/measurement;sameRatioIndicators.myParent.removeChild(dummy);}else{unitRatios.emToPx=callUnitConversionData.lastEmToPx;unitRatios.percentToPxWidth=callUnitConversionData.lastPercentToPxWidth;unitRatios.percentToPxHeight=callUnitConversionData.lastPercentToPxHeight;}
if(callUnitConversionData.remToPx===null){callUnitConversionData.remToPx=parseFloat(CSS.getPropertyValue(document.body,"fontSize"))||16;}
if(callUnitConversionData.vwToPx===null){callUnitConversionData.vwToPx=parseFloat(window.innerWidth)/100;callUnitConversionData.vhToPx=parseFloat(window.innerHeight)/100;}
unitRatios.remToPx=callUnitConversionData.remToPx;unitRatios.vwToPx=callUnitConversionData.vwToPx;unitRatios.vhToPx=callUnitConversionData.vhToPx;if(Velocity.debug>=1){console.log("Unit ratios: "+JSON.stringify(unitRatios),element);}
return unitRatios;};if(/[\/*]/.test(operator)){endValueUnitType=startValueUnitType;}else if((startValueUnitType!==endValueUnitType)&&startValue!==0){if(endValue===0){endValueUnitType=startValueUnitType;}else{elementUnitConversionData=elementUnitConversionData||calculateUnitRatios();var axis=(/margin|padding|left|right|width|text|word|letter/i.test(property)||/X$/.test(property)||property==="x")?"x":"y";switch(startValueUnitType){case "%":startValue*=(axis==="x"?elementUnitConversionData.percentToPxWidth:elementUnitConversionData.percentToPxHeight);break;case "px":break;default:startValue*=elementUnitConversionData[startValueUnitType+"ToPx"];}
switch(endValueUnitType){case "%":startValue*=1/(axis==="x"?elementUnitConversionData.percentToPxWidth:elementUnitConversionData.percentToPxHeight);break;case "px":break;default:startValue*=1/elementUnitConversionData[endValueUnitType+"ToPx"];}}}
switch(operator){case "+":endValue=startValue+endValue;break;case "-":endValue=startValue-endValue;break;case "*":endValue=startValue*endValue;break;case "/":endValue=startValue/endValue;break;}
tweensContainer[property]={rootPropertyValue:rootPropertyValue,startValue:startValue,currentValue:startValue,endValue:endValue,unitType:endValueUnitType,easing:easing};if(pattern){tweensContainer[property].pattern=pattern;}
if(Velocity.debug){console.log("tweensContainer ("+property+"): "+JSON.stringify(tweensContainer[property]),element);}};for(var property in propertiesMap){if(!propertiesMap.hasOwnProperty(property)){continue;}
var propertyName=CSS.Names.camelCase(property),valueData=parsePropertyValue(propertiesMap[property]);if(CSS.Lists.colors.indexOf(propertyName)>=0){var endValue=valueData[0],easing=valueData[1],startValue=valueData[2];if(CSS.RegEx.isHex.test(endValue)){var colorComponents=["Red","Green","Blue"],endValueRGB=CSS.Values.hexToRgb(endValue),startValueRGB=startValue?CSS.Values.hexToRgb(startValue):undefined;for(var i=0;i<colorComponents.length;i++){var dataArray=[endValueRGB[i]];if(easing){dataArray.push(easing);}
if(startValueRGB!==undefined){dataArray.push(startValueRGB[i]);}
fixPropertyValue(propertyName+colorComponents[i],dataArray);}
continue;}}
fixPropertyValue(propertyName,valueData);}
tweensContainer.element=element;}
if(tweensContainer.element){CSS.Values.addClass(element,"velocity-animating");call.push(tweensContainer);data=Data(element);if(data){if(opts.queue===""){data.tweensContainer=tweensContainer;data.opts=opts;}
data.isAnimating=true;}
if(elementsIndex===elementsLength-1){Velocity.State.calls.push([call,elements,opts,null,promiseData.resolver,null,0]);if(Velocity.State.isTicking===false){Velocity.State.isTicking=true;tick();}}else{elementsIndex++;}}}
if(opts.queue===false){if(opts.delay){var callIndex=Velocity.State.delayedElements.count++;Velocity.State.delayedElements[callIndex]=element;var delayComplete=(function(index){return function(){Velocity.State.delayedElements[index]=false;buildQueue();};})(callIndex);Data(element).delayBegin=(new Date()).getTime();Data(element).delay=parseFloat(opts.delay);Data(element).delayTimer={setTimeout:setTimeout(buildQueue,parseFloat(opts.delay)),next:delayComplete};}else{buildQueue();}}else{$.queue(element,opts.queue,function(next,clearQueue){if(clearQueue===true){if(promiseData.promise){promiseData.resolver(elements);}
return true;}
Velocity.velocityQueueEntryFlag=true;buildQueue(next);});}
if((opts.queue===""||opts.queue==="fx")&&$.queue(element)[0]!=="inprogress"){$.dequeue(element);}}
$.each(elements,function(i,element){if(Type.isNode(element)){processElement(element,i);}});opts=$.extend({},Velocity.defaults,options);opts.loop=parseInt(opts.loop,10);var reverseCallsCount=(opts.loop*2)-1;if(opts.loop){for(var x=0;x<reverseCallsCount;x++){var reverseOptions={delay:opts.delay,progress:opts.progress};if(x===reverseCallsCount-1){reverseOptions.display=opts.display;reverseOptions.visibility=opts.visibility;reverseOptions.complete=opts.complete;}
animate(elements,"reverse",reverseOptions);}}
return getChain();};Velocity=$.extend(animate,Velocity);Velocity.animate=animate;var ticker=window.requestAnimationFrame||rAFShim;if(!Velocity.State.isMobile&&document.hidden!==undefined){var updateTicker=function(){if(document.hidden){ticker=function(callback){return setTimeout(function(){callback(true);},16);};tick();}else{ticker=window.requestAnimationFrame||rAFShim;}};updateTicker();document.addEventListener("visibilitychange",updateTicker);}
function tick(timestamp){if(timestamp){var timeCurrent=Velocity.timestamp&&timestamp!==true?timestamp:performance.now();var callsLength=Velocity.State.calls.length;if(callsLength>10000){Velocity.State.calls=compactSparseArray(Velocity.State.calls);callsLength=Velocity.State.calls.length;}
for(var i=0;i<callsLength;i++){if(!Velocity.State.calls[i]){continue;}
var callContainer=Velocity.State.calls[i],call=callContainer[0],opts=callContainer[2],timeStart=callContainer[3],firstTick=!!timeStart,tweenDummyValue=null,pauseObject=callContainer[5],millisecondsEllapsed=callContainer[6];if(!timeStart){timeStart=Velocity.State.calls[i][3]=timeCurrent-16;}
if(pauseObject){if(pauseObject.resume===true){timeStart=callContainer[3]=Math.round(timeCurrent-millisecondsEllapsed-16);callContainer[5]=null;}else{continue;}}
millisecondsEllapsed=callContainer[6]=timeCurrent-timeStart;var percentComplete=Math.min((millisecondsEllapsed)/opts.duration,1);for(var j=0,callLength=call.length;j<callLength;j++){var tweensContainer=call[j],element=tweensContainer.element;if(!Data(element)){continue;}
var transformPropertyExists=false;if(opts.display!==undefined&&opts.display!==null&&opts.display!=="none"){if(opts.display==="flex"){var flexValues=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(flexValues,function(i,flexValue){CSS.setPropertyValue(element,"display",flexValue);});}
CSS.setPropertyValue(element,"display",opts.display);}
if(opts.visibility!==undefined&&opts.visibility!=="hidden"){CSS.setPropertyValue(element,"visibility",opts.visibility);}
for(var property in tweensContainer){if(tweensContainer.hasOwnProperty(property)&&property!=="element"){var tween=tweensContainer[property],currentValue,easing=Type.isString(tween.easing)?Velocity.Easings[tween.easing]:tween.easing;if(Type.isString(tween.pattern)){var patternReplace=percentComplete===1?function($0,index,round){var result=tween.endValue[index];return round?Math.round(result):result;}:function($0,index,round){var startValue=tween.startValue[index],tweenDelta=tween.endValue[index]-startValue,result=startValue+(tweenDelta*easing(percentComplete,opts,tweenDelta));return round?Math.round(result):result;};currentValue=tween.pattern.replace(/{(\d+)(!)?}/g,patternReplace);}else if(percentComplete===1){currentValue=tween.endValue;}else{var tweenDelta=tween.endValue-tween.startValue;currentValue=tween.startValue+(tweenDelta*easing(percentComplete,opts,tweenDelta));}
if(!firstTick&&(currentValue===tween.currentValue)){continue;}
tween.currentValue=currentValue;if(property==="tween"){tweenDummyValue=currentValue;}else{var hookRoot;if(CSS.Hooks.registered[property]){hookRoot=CSS.Hooks.getRoot(property);var rootPropertyValueCache=Data(element).rootPropertyValueCache[hookRoot];if(rootPropertyValueCache){tween.rootPropertyValue=rootPropertyValueCache;}}
var adjustedSetData=CSS.setPropertyValue(element,property,tween.currentValue+(IE<9&&parseFloat(currentValue)===0?"":tween.unitType),tween.rootPropertyValue,tween.scrollData);if(CSS.Hooks.registered[property]){if(CSS.Normalizations.registered[hookRoot]){Data(element).rootPropertyValueCache[hookRoot]=CSS.Normalizations.registered[hookRoot]("extract",null,adjustedSetData[1]);}else{Data(element).rootPropertyValueCache[hookRoot]=adjustedSetData[1];}}
if(adjustedSetData[0]==="transform"){transformPropertyExists=true;}}}}
if(opts.mobileHA){if(Data(element).transformCache.translate3d===undefined){Data(element).transformCache.translate3d="(0px, 0px, 0px)";transformPropertyExists=true;}}
if(transformPropertyExists){CSS.flushTransformCache(element);}}
if(opts.display!==undefined&&opts.display!=="none"){Velocity.State.calls[i][2].display=false;}
if(opts.visibility!==undefined&&opts.visibility!=="hidden"){Velocity.State.calls[i][2].visibility=false;}
if(opts.progress){opts.progress.call(callContainer[1],callContainer[1],percentComplete,Math.max(0,(timeStart+opts.duration)-timeCurrent),timeStart,tweenDummyValue);}
if(percentComplete===1){completeCall(i);}}}
if(Velocity.State.isTicking){ticker(tick);}}
function completeCall(callIndex,isStopped){if(!Velocity.State.calls[callIndex]){return false;}
var call=Velocity.State.calls[callIndex][0],elements=Velocity.State.calls[callIndex][1],opts=Velocity.State.calls[callIndex][2],resolver=Velocity.State.calls[callIndex][4];var remainingCallsExist=false;for(var i=0,callLength=call.length;i<callLength;i++){var element=call[i].element;if(!isStopped&&!opts.loop){if(opts.display==="none"){CSS.setPropertyValue(element,"display",opts.display);}
if(opts.visibility==="hidden"){CSS.setPropertyValue(element,"visibility",opts.visibility);}}
var data=Data(element);if(opts.loop!==true&&($.queue(element)[1]===undefined||!/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))){if(data){data.isAnimating=false;data.rootPropertyValueCache={};var transformHAPropertyExists=false;$.each(CSS.Lists.transforms3D,function(i,transformName){var defaultValue=/^scale/.test(transformName)?1:0,currentValue=data.transformCache[transformName];if(data.transformCache[transformName]!==undefined&&new RegExp("^\\("+defaultValue+"[^.]").test(currentValue)){transformHAPropertyExists=true;delete data.transformCache[transformName];}});if(opts.mobileHA){transformHAPropertyExists=true;delete data.transformCache.translate3d;}
if(transformHAPropertyExists){CSS.flushTransformCache(element);}
CSS.Values.removeClass(element,"velocity-animating");}}
if(!isStopped&&opts.complete&&!opts.loop&&(i===callLength-1)){try{opts.complete.call(elements,elements);}catch(error){setTimeout(function(){throw error;},1);}}
if(resolver&&opts.loop!==true){resolver(elements);}
if(data&&opts.loop===true&&!isStopped){$.each(data.tweensContainer,function(propertyName,tweenContainer){if(/^rotate/.test(propertyName)&&((parseFloat(tweenContainer.startValue)-parseFloat(tweenContainer.endValue))%360===0)){var oldStartValue=tweenContainer.startValue;tweenContainer.startValue=tweenContainer.endValue;tweenContainer.endValue=oldStartValue;}
if(/^backgroundPosition/.test(propertyName)&&parseFloat(tweenContainer.endValue)===100&&tweenContainer.unitType==="%"){tweenContainer.endValue=0;tweenContainer.startValue=100;}});Velocity(element,"reverse",{loop:true,delay:opts.delay});}
if(opts.queue!==false){$.dequeue(element,opts.queue);}}
Velocity.State.calls[callIndex]=false;for(var j=0,callsLength=Velocity.State.calls.length;j<callsLength;j++){if(Velocity.State.calls[j]!==false){remainingCallsExist=true;break;}}
if(remainingCallsExist===false){Velocity.State.isTicking=false;delete Velocity.State.calls;Velocity.State.calls=[];}}
global.Velocity=Velocity;if(global!==window){global.fn.velocity=animate;global.fn.velocity.defaults=Velocity.defaults;}
$.each(["Down","Up"],function(i,direction){Velocity.Redirects["slide"+direction]=function(element,options,elementsIndex,elementsSize,elements,promiseData){var opts=$.extend({},options),begin=opts.begin,complete=opts.complete,inlineValues={},computedValues={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};if(opts.display===undefined){opts.display=(direction==="Down"?(Velocity.CSS.Values.getDisplayType(element)==="inline"?"inline-block":"block"):"none");}
opts.begin=function(){if(elementsIndex===0&&begin){begin.call(elements,elements);}
for(var property in computedValues){if(!computedValues.hasOwnProperty(property)){continue;}
inlineValues[property]=element.style[property];var propertyValue=CSS.getPropertyValue(element,property);computedValues[property]=(direction==="Down")?[propertyValue,0]:[0,propertyValue];}
inlineValues.overflow=element.style.overflow;element.style.overflow="hidden";};opts.complete=function(){for(var property in inlineValues){if(inlineValues.hasOwnProperty(property)){element.style[property]=inlineValues[property];}}
if(elementsIndex===elementsSize-1){if(complete){complete.call(elements,elements);}
if(promiseData){promiseData.resolver(elements);}}};Velocity(element,computedValues,opts);};});$.each(["In","Out"],function(i,direction){Velocity.Redirects["fade"+direction]=function(element,options,elementsIndex,elementsSize,elements,promiseData){var opts=$.extend({},options),complete=opts.complete,propertiesMap={opacity:(direction==="In")?1:0};if(elementsIndex!==0){opts.begin=null;}
if(elementsIndex!==elementsSize-1){opts.complete=null;}else{opts.complete=function(){if(complete){complete.call(elements,elements);}
if(promiseData){promiseData.resolver(elements);}};}
if(opts.display===undefined){opts.display=(direction==="In"?"auto":"none");}
Velocity(this,propertiesMap,opts);};});return Velocity;}((window.jQuery||window.Zepto||window),window,(window?window.document:undefined));}));},{}],4:[function(require,module,exports){/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/(function(){'use strict'
var keyCounter=0
var allWaypoints={}
function Waypoint(options){if(!options){throw new Error('No options passed to Waypoint constructor')}
if(!options.element){throw new Error('No element option passed to Waypoint constructor')}
if(!options.handler){throw new Error('No handler option passed to Waypoint constructor')}
this.key='waypoint-'+keyCounter
this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options)
this.element=this.options.element
this.adapter=new Waypoint.Adapter(this.element)
this.callback=options.handler
this.axis=this.options.horizontal?'horizontal':'vertical'
this.enabled=this.options.enabled
this.triggerPoint=null
this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis})
this.context=Waypoint.Context.findOrCreateByElement(this.options.context)
if(Waypoint.offsetAliases[this.options.offset]){this.options.offset=Waypoint.offsetAliases[this.options.offset]}
this.group.add(this)
this.context.add(this)
allWaypoints[this.key]=this
keyCounter+=1}
Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)}
Waypoint.prototype.trigger=function(args){if(!this.enabled){return}
if(this.callback){this.callback.apply(this,args)}}
Waypoint.prototype.destroy=function(){this.context.remove(this)
this.group.remove(this)
delete allWaypoints[this.key]}
Waypoint.prototype.disable=function(){this.enabled=false
return this}
Waypoint.prototype.enable=function(){this.context.refresh()
this.enabled=true
return this}
Waypoint.prototype.next=function(){return this.group.next(this)}
Waypoint.prototype.previous=function(){return this.group.previous(this)}
Waypoint.invokeAll=function(method){var allWaypointsArray=[]
for(var waypointKey in allWaypoints){allWaypointsArray.push(allWaypoints[waypointKey])}
for(var i=0,end=allWaypointsArray.length;i<end;i++){allWaypointsArray[i][method]()}}
Waypoint.destroyAll=function(){Waypoint.invokeAll('destroy')}
Waypoint.disableAll=function(){Waypoint.invokeAll('disable')}
Waypoint.enableAll=function(){Waypoint.Context.refreshAll()
for(var waypointKey in allWaypoints){allWaypoints[waypointKey].enabled=true}
return this}
Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()}
Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight}
Waypoint.viewportWidth=function(){return document.documentElement.clientWidth}
Waypoint.adapters=[]
Waypoint.defaults={context:window,continuous:true,enabled:true,group:'default',horizontal:false,offset:0}
Waypoint.offsetAliases={'bottom-in-view':function(){return this.context.innerHeight()-this.adapter.outerHeight()},'right-in-view':function(){return this.context.innerWidth()-this.adapter.outerWidth()}}
window.Waypoint=Waypoint}());(function(){'use strict'
function requestAnimationFrameShim(callback){window.setTimeout(callback,1000/60)}
var keyCounter=0
var contexts={}
var Waypoint=window.Waypoint
var oldWindowLoad=window.onload
function Context(element){this.element=element
this.Adapter=Waypoint.Adapter
this.adapter=new this.Adapter(element)
this.key='waypoint-context-'+keyCounter
this.didScroll=false
this.didResize=false
this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()}
this.waypoints={vertical:{},horizontal:{}}
element.waypointContextKey=this.key
contexts[element.waypointContextKey]=this
keyCounter+=1
if(!Waypoint.windowContext){Waypoint.windowContext=true
Waypoint.windowContext=new Context(window)}
this.createThrottledScrollHandler()
this.createThrottledResizeHandler()}
Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?'horizontal':'vertical'
this.waypoints[axis][waypoint.key]=waypoint
this.refresh()}
Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal)
var verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical)
var isWindow=this.element==this.element.window
if(horizontalEmpty&&verticalEmpty&&!isWindow){this.adapter.off('.waypoints')
delete contexts[this.key]}}
Context.prototype.createThrottledResizeHandler=function(){var self=this
function resizeHandler(){self.handleResize()
self.didResize=false}
this.adapter.on('resize.waypoints',function(){if(!self.didResize){self.didResize=true
Waypoint.requestAnimationFrame(resizeHandler)}})}
Context.prototype.createThrottledScrollHandler=function(){var self=this
function scrollHandler(){self.handleScroll()
self.didScroll=false}
this.adapter.on('scroll.waypoints',function(){if(!self.didScroll||Waypoint.isTouch){self.didScroll=true
Waypoint.requestAnimationFrame(scrollHandler)}})}
Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()}
Context.prototype.handleScroll=function(){var triggeredGroups={}
var axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:'right',backward:'left'},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:'down',backward:'up'}}
for(var axisKey in axes){var axis=axes[axisKey]
var isForward=axis.newScroll>axis.oldScroll
var direction=isForward?axis.forward:axis.backward
for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey]
if(waypoint.triggerPoint===null){continue}
var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint
var nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint
var crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint
var crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint
if(crossedForward||crossedBackward){waypoint.queueTrigger(direction)
triggeredGroups[waypoint.group.id]=waypoint.group}}}
for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}
this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}}
Context.prototype.innerHeight=function(){if(this.element==this.element.window){return Waypoint.viewportHeight()}
return this.adapter.innerHeight()}
Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key]
this.checkEmpty()}
Context.prototype.innerWidth=function(){if(this.element==this.element.window){return Waypoint.viewportWidth()}
return this.adapter.innerWidth()}
Context.prototype.destroy=function(){var allWaypoints=[]
for(var axis in this.waypoints){for(var waypointKey in this.waypoints[axis]){allWaypoints.push(this.waypoints[axis][waypointKey])}}
for(var i=0,end=allWaypoints.length;i<end;i++){allWaypoints[i].destroy()}}
Context.prototype.refresh=function(){var isWindow=this.element==this.element.window
var contextOffset=isWindow?undefined:this.adapter.offset()
var triggeredGroups={}
var axes
this.handleScroll()
axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:'right',backward:'left',offsetProp:'left'},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:'down',backward:'up',offsetProp:'top'}}
for(var axisKey in axes){var axis=axes[axisKey]
for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey]
var adjustment=waypoint.options.offset
var oldTriggerPoint=waypoint.triggerPoint
var elementOffset=0
var freshWaypoint=oldTriggerPoint==null
var contextModifier,wasBeforeScroll,nowAfterScroll
var triggeredBackward,triggeredForward
if(waypoint.element!==waypoint.element.window){elementOffset=waypoint.adapter.offset()[axis.offsetProp]}
if(typeof adjustment==='function'){adjustment=adjustment.apply(waypoint)}
else if(typeof adjustment==='string'){adjustment=parseFloat(adjustment)
if(waypoint.options.offset.indexOf('%')>-1){adjustment=Math.ceil(axis.contextDimension*adjustment/100)}}
contextModifier=axis.contextScroll-axis.contextOffset
waypoint.triggerPoint=Math.floor(elementOffset+contextModifier-adjustment)
wasBeforeScroll=oldTriggerPoint<axis.oldScroll
nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll
triggeredBackward=wasBeforeScroll&&nowAfterScroll
triggeredForward=!wasBeforeScroll&&!nowAfterScroll
if(!freshWaypoint&&triggeredBackward){waypoint.queueTrigger(axis.backward)
triggeredGroups[waypoint.group.id]=waypoint.group}
else if(!freshWaypoint&&triggeredForward){waypoint.queueTrigger(axis.forward)
triggeredGroups[waypoint.group.id]=waypoint.group}
else if(freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint){waypoint.queueTrigger(axis.forward)
triggeredGroups[waypoint.group.id]=waypoint.group}}}
Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}})
return this}
Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)}
Context.refreshAll=function(){for(var contextId in contexts){contexts[contextId].refresh()}}
Context.findByElement=function(element){return contexts[element.waypointContextKey]}
window.onload=function(){if(oldWindowLoad){oldWindowLoad()}
Context.refreshAll()}
Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim
requestFn.call(window,callback)}
Waypoint.Context=Context}());(function(){'use strict'
function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}
function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}
var groups={vertical:{},horizontal:{}}
var Waypoint=window.Waypoint
function Group(options){this.name=options.name
this.axis=options.axis
this.id=this.name+'-'+this.axis
this.waypoints=[]
this.clearTriggerQueues()
groups[this.axis][this.name]=this}
Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)}
Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}}
Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction]
var reverse=direction==='up'||direction==='left'
waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint)
for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i]
if(waypoint.options.continuous||i===waypoints.length-1){waypoint.trigger([direction])}}}
this.clearTriggerQueues()}
Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint)
var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
var isLast=index===this.waypoints.length-1
return isLast?null:this.waypoints[index+1]}
Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint)
var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
return index?this.waypoints[index-1]:null}
Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)}
Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
if(index>-1){this.waypoints.splice(index,1)}}
Group.prototype.first=function(){return this.waypoints[0]}
Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]}
Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)}
Waypoint.Group=Group}());(function(){'use strict'
var $=window.jQuery
var Waypoint=window.Waypoint
function JQueryAdapter(element){this.$element=$(element)}
$.each(['innerHeight','innerWidth','off','offset','on','outerHeight','outerWidth','scrollLeft','scrollTop'],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments)
return this.$element[method].apply(this.$element,args)}})
$.each(['extend','inArray','isEmptyObject'],function(i,method){JQueryAdapter[method]=$[method]})
Waypoint.adapters.push({name:'jquery',Adapter:JQueryAdapter})
Waypoint.Adapter=JQueryAdapter}());(function(){'use strict'
var Waypoint=window.Waypoint
function createExtension(framework){return function(){var waypoints=[]
var overrides=arguments[0]
if(framework.isFunction(arguments[0])){overrides=framework.extend({},arguments[1])
overrides.handler=arguments[0]}
this.each(function(){var options=framework.extend({},overrides,{element:this})
if(typeof options.context==='string'){options.context=framework(this).closest(options.context)[0]}
waypoints.push(new Waypoint(options))})
return waypoints}}
if(window.jQuery){window.jQuery.fn.waypoint=createExtension(window.jQuery)}
if(window.Zepto){window.Zepto.fn.waypoint=createExtension(window.Zepto)}}());},{}],5:[function(require,module,exports){(function(global){'use strict';var moment=require('moment');var _=require('lodash');var current_page=null;$('.load-posts').on('click',function(e){e.preventDefault();var domain=window.location.protocol+'//'+window.location.host,$btn=$(this),load={slug:$btn.data('url'),text:$btn.text(),width:$btn.width(),current:parseInt($btn.data('current-page')),total:parseInt($btn.data('total-pages'))};if(!current_page){current_page=load.current;}
if(current_page>=load.total){return;}
$btn.addClass('loading').width(load.width).text('Loading Posts');$.ajax({url:domain+load.slug+'/page/'+(parseInt(current_page)+1),method:'GET',success:function success(response){current_page++;var grid=$('#posts-list');grid.append($(response).find('#posts-list article'));if(current_page>=load.total){$('.pagination').velocity('slideUp',800,'easeInOutExpo',function(){$btn.addClass('is-hidden');});}else{$btn.removeClass('loading').text(load.text).css('width','');}}});});$('.posts-list').each(function(){var $blogList=$(this);var feedType=$blogList.data('type');var feedURL=$blogList.data('feed');var showImage=$blogList.data('show-image');var postCount=$blogList.data('count');if(!global.suppress||!$blogList.parents('.editable').length){$.ajax({url:global.appUrl+'/feed_api?url='+encodeURIComponent(feedType=='internal'?global.siteUrl+feedURL:feedURL),method:'GET',timeout:10000,success:function success(response){if(response.length){var $injectArea=$blogList.find('.posts-wrapper');$injectArea.find('.loading').hide();if(postCount)response=response.slice(0,postCount);response.forEach(function(item){var categories='';item.categories.forEach(function(category){categories+='<span class="category">'+category+'</span> ';});if(categories.length){categories='<span class="post-categories">'+categories+'</span>';}
var image=item.image.url&&showImage?'<figure class="post-thumbnail"><img src="'+item.image.url+'" alt="'+item.title+' thumbnail"></figure>':'';var excerpt=item.description?'<div class="post-excerpt">'+item.description+'</div>':'';var date=item.date?'<time datetime="'+moment(item.date).format('YYYY-MM-DD')+'">'+moment(item.date).format('MMMM D, YYYY')+'</time>':'';var article='<article class="post-link">\n                              <a href="'+item.link+'">\n                                '+image+'\n                                <header class="post-header">\n                                  <div class="post-meta">\n                                    '+date+'\n                                  </div>\n                                  <h3>'+item.title+'</h3>\n                                </header>\n                              </a>\n                              '+excerpt+'\n                              '+categories+'\n                           </article>\n                        ';$injectArea.append(article);});}else{var $injectArea=$blogList.find('.posts-wrapper');$injectArea.find('.loading').text('No Posts Found');}},error:function error(_error){console.log(_error);var $injectArea=$blogList.find('.posts-wrapper');$injectArea.find('.loading').text(_error);}});}});}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"lodash":1,"moment":2}],6:[function(require,module,exports){'use strict';require('./navigation');require('./blogs');require('velocity-animate');function checkHeader(){window.requestAnimationFrame(function(){if($(window).scrollTop()>0){$('body').removeClass('transparent-header');}else{$('body').addClass('transparent-header');}}.bind(this));}
function headerPush(){var height=document.getElementById('header').offsetHeight;document.getElementsByClassName('header-push')[0].style.height=height+'px';}
if($('.has-fixed-header.transparent-header').length){$(window).on('scroll',checkHeader);}
$(function(){if($('.header-push').length){headerPush();$(window).on('resize',headerPush);}});$('.menu-toggle').on('click',function(e){e.preventDefault();if($(this).hasClass('open')){$('#main-navigation').velocity('slideUp',500,'easeOutExpo');}else{$('#main-navigation').velocity('slideDown',500,'easeOutExpo');}
$(this).toggleClass('open');});$('.tabs-nav a[data-tab]').on('click',function(e){e.preventDefault();var $tab=$(this),tabHref=$tab.data('tab'),$tabsNav=$tab.closest('.section-tabs').find('.tabs-nav li'),$tabsWrapper=$tab.closest('.section-tabs').find('.tabs-content'),newTabHeight=$tabsWrapper.find('.tab-pane[data-tab="'+tabHref+'"]').outerHeight();$tabsNav.removeClass('active');$tab.parent().addClass('active');history.pushState({slug:tabHref},null,'/'+tabHref);$tabsWrapper.css('height',$tabsWrapper.find('.tab-pane.active').outerHeight());$tabsWrapper.find('.tab-pane').removeClass('active');$tabsWrapper.velocity({height:newTabHeight},400,'easeInOutExpo',function(){$tabsWrapper.find('.tab-pane[data-tab="'+tabHref+'"]').addClass('active');$tabsWrapper.removeAttr('style');});});$('.open-overlay').on('click',function(e){e.preventDefault();var modal=$(this).data('target');$('html').addClass('overlay-open');if(modal){$('#'+modal).addClass('is-showing');}else{$(this).parent().find('.overlay-content').addClass('is-showing');}});$('.close-overlay').on('click',function(e){e.preventDefault();$('html').removeClass('overlay-open');$('.overlay-content').removeClass('is-showing');});$('.toggle-accordion').on('click',function(e){e.preventDefault();var $accordion=$(this).parent().find('.accordion-content');if($(this).hasClass('open')){$accordion.velocity('slideUp',500,'easeInOutExpo',function(){});}else{$accordion.velocity('slideDown',500,'easeInOutExpo',function(){});}
$(this).toggleClass('open');});},{"./blogs":5,"./navigation":7,"velocity-animate":3}],7:[function(require,module,exports){'use strict';require('velocity-animate');var Waypoint=require('waypoints');function scrollToSection(slug){var headerHeight=$('#header').hasClass('overlay')?'':$('#header').outerHeight(),scrollSettings={duration:900,easing:'easeInOutQuint',offset:-headerHeight};if($('#section-'+slug+' .main-content-wrapper').length&&slug!=='home'){$('#section-'+slug+' .main-content-wrapper').velocity('scroll',scrollSettings);}else if($('#section-'+slug).length){$('#section-'+slug).velocity('scroll',scrollSettings);}else{if($('.tabs-nav a[data-tab="'+slug+'"]').closest('.main-content-wrapper').length){$('.tabs-nav a[data-tab="'+slug+'"]').closest('.main-content-wrapper').velocity('scroll',scrollSettings);}else{$('.tabs-nav a[data-tab="'+slug+'"]').closest('.section').velocity('scroll',scrollSettings);}}}
function navigation(){var currentSlug=window.location.pathname.substring(1).split('/')[0];$(document).ready(function(){scrollToSection(currentSlug);});$(window).on('load',function(){scrollToSection(currentSlug);});$('a[data-section]').on('click',function(e){e.preventDefault();var slug=$(this).data('section');if($('#section-'+slug).length){$('#main-navigation li').removeClass('active');$(this).parent('li').addClass('active');history.pushState({slug:slug},null,'/'+(slug==='home'?'':slug));scrollToSection(slug);}else{window.location='/'+slug;}
if($('.menu-toggle').is(':visible')){$('.menu-toggle.open').trigger('click');}});window.addEventListener('popstate',function(e){if(!e.state)return;var slug=e.state.slug;$('#main-navigation li').removeClass('active');$('#main-navigation a[data-section="'+slug.split('/')[0]+'"]').parent('li').addClass('active');scrollToSection(slug.split('/')[0]);if(slug.split('/')[1]){var $tab=$('.tabs-nav a[data-tab="'+slug+'"]'),tabHref=$tab.data('tab'),$tabsWrapper=$tab.closest('.section-tabs').find('.tabs-content'),newTabHeight=$tabsWrapper.find('.tab-pane[data-tab="'+tabHref+'"]').outerHeight();$('.tabs-nav li').removeClass('active');$tab.parent().addClass('active');$tabsWrapper.css('height',$tabsWrapper.find('.tab-pane.active').outerHeight());$tabsWrapper.find('.tab-pane').removeClass('active');$tabsWrapper.velocity({height:newTabHeight},400,'easeInOutExpo',function(){$tabsWrapper.find('.tab-pane[data-tab="'+tabHref+'"]').addClass('active');$tabsWrapper.removeAttr('style');});}});var waypointsDown=$('.section').waypoint({offset:function offset(){return $('#header').height();},handler:function handler(direction){if(direction==='down'){var slug=this.element.id.replace('section-','');$('#main-navigation li').removeClass('active');$('#main-navigation a[data-section="'+slug+'"]').parent('li').addClass('active');}}});var waypointsUp=$('.section').waypoint({offset:function offset(){return-this.element.clientHeight+$('#header').height();},handler:function handler(direction){if(direction==='up'){var slug=this.element.id.replace('section-','');$('#main-navigation li').removeClass('active');$('#main-navigation a[data-section="'+slug+'"]').parent('li').addClass('active');}}});}
module.exports=new navigation();},{"velocity-animate":3,"waypoints":4}]},{},[6]);