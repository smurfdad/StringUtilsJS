function CharUtils(){}
CharUtils.CR = '\r';
CharUtils.LF = '\n';
CharUtils.isHighSurrogate= function(ch) {
	return ('\uD800' <= ch && '\uDBFF' >= ch);
}
function StringUtils() {}
StringUtils.EMPTY = "";
StringUtils.INDEX_NOT_FOUND = -1;
StringUtils.PAD_LIMIT = 8192;

/**
 * Abbreviates a String using ellipses.
 */
StringUtils.abbreviate = function(){
	var str, maxWidth, offset;
	
	if (arguments.length == 2){
		str = arguments[0];
		maxWidth = arguments[1];
		offset = 0;
	}else if (arguments.length == 3){
		str = arguments[0];
		offset = arguments[1];
		maxWidth = arguments[2];
	}else{
		throw new Error("IllegalArgumentException");
	}
	
	if (isNaN(parseInt(maxWidth))){
		throw new Error("IllegalArgumentException");
	}
	
	if (isNaN(parseInt(offset))){
		throw new Error("IllegalArgumentException");
	}
	
	if (str == null ) {
		return null;
	}
	
	if (typeof(str) !== "string"){
		throw new Error("IllegalArgumentException");
	}	
	
	if (maxWidth < 4) {
		throw new Error("IllegalArgumentException");
	}
	if (str.length <= maxWidth) {
		return str;
	}
	if (offset > str.length) {
		offset = str.length;
	}
	if (str.length - offset < maxWidth - 3) {
		offset = str.length - (maxWidth - 3);
	}
	var abrevMarker = "...";
	if (offset <= 4) {
		return str.substring(0, maxWidth - 3) + abrevMarker;
	}
	if (maxWidth < 7) {
		throw new Error("IllegalArgumentException");
	}
	if (offset + maxWidth - 3 < str.length) {
		return abrevMarker + StringUtils.abbreviate(str.substring(offset), maxWidth - 3);
	}
	return abrevMarker + str.substring(str.length - (maxWidth - 3));
	
}

// Checks if a String is whitespace, empty ("") or null.
// static boolean	isEmpty(String str) 
StringUtils.isEmpty = function(str){
	 return str == null || str == undefined || str.length == 0;
	
}

// Abbreviates a String to the length passed, replacing the middle characters with the supplied replacement String.
// String str, String middle, int length
StringUtils.abbreviateMiddle = function(str, middle, length){
	if (StringUtils.isEmpty(str) || StringUtils.isEmpty(middle)) {
		return str;
	}

	if (length >= str.length || length < middle.length+2) {
		return str;
	}

	var targetSting = length - middle.length;
	var startOffset = (targetSting/2)+(targetSting%2);
	//FIX: Ha habido que sumar 1, habra que comprobar que el resultado es bueno
	var endOffset = str.length -(targetSting/2) + 1;

	var builder = "";
	builder += str.substring(0, startOffset);
	builder += middle;
	builder += str.substring(endOffset);
    return builder;
}

// Capitalizes a String changing the first letter to title case as per Character.toTitleCase(char).
// static String	capitalize(String str) 
StringUtils.capitalize = function(str){
	var strLen = 0;
	if (typeof(str) === "undefined"){
		return null;
	}
	if (str == null || (strLen = str.length) == 0) {
		return str;
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}
// static String	center(String str, int size) 
// Centers a String in a larger String of size size using the space character (' ').
// static String	center(String str, int size, char padChar) 
// Centers a String in a larger String of size size.
// static String	center(String str, int size, String padStr) 
// Centers a String in a larger String of size size.
StringUtils.center = function(str, size, pPadStr){

	var padStr = typeof(pPadStr) !== "undefined"? pPadStr: StringUtils.EMPTY;
	if (str == null || size <= 0) {
		return str;
	}
	if (StringUtils.isEmpty(padStr)) {
	   padStr = " ";
	}
	var strLen = str.length;
	var pads = size - strLen;
	if (pads <= 0) {
	   return str;
	}
	str = StringUtils.leftPad(str, strLen + Math.floor(pads / 2), padStr);
	str = StringUtils.rightPad(str, size, padStr);
	return str;
}

// static String	chomp(String str) 
// Removes one newline from end of a String if it's there, otherwise leave it alone.
// static String	chomp(String str, String separator) 
// Removes separator from the end of str if it's there, otherwise leave it alone.
StringUtils.chomp = function(str, separator){
	if (typeof(separator) !== "undefined"){
		if (StringUtils.isEmpty(str) || separator == null) {
			return str;
		}
		if (str.endsWith(separator)) {
			return str.substring(0, str.length - separator.length);
		}
		return str;
	}else{
		if (StringUtils.isEmpty(str)) {
			return str;
		}
		if (str.length == 1) {
			var ch = str.charAt(0);
			if (ch == CharUtils.CR || ch == CharUtils.LF) {
				return StringUtils.EMPTY;
			} else {
				return str;
			}
		}
		var lastIdx = str.length - 1;
		var last = str.charAt(lastIdx);
		if (last == CharUtils.LF) {
			if (str.charAt(lastIdx - 1) == CharUtils.CR) {
				lastIdx--;
			}
		} else if (last != CharUtils.CR) {
			lastIdx++;
		}
		return str.substring(0, lastIdx);	
	}
}

// static String	chop(String str) 
// Remove the last character from a String.
StringUtils.chop = function(str){
	if (str == null) {
        return null;
    }
    var strLen = str.length;
    if (strLen < 2) {
        return StringUtils.EMPTY;
    }
    var lastIdx = strLen - 1;
    var ret = str.substring(0, lastIdx);
    var last = str.charAt(lastIdx);
    if (last == CharUtils.LF) {
        if (ret.charAt(lastIdx - 1) == CharUtils.CR) {
            return ret.substring(0, lastIdx - 1);
        }
    }
    return ret;
}

// static boolean	contains(String str, char searchChar) 
// Checks if String contains a search character, handling null.
// static boolean	contains(String str, String searchStr) 
// Checks if String contains a search String, handling null.
StringUtils.contains = function(str, searchStr){
	if (str == null || searchStr == null) {
		return false;
	}
	return str.indexOf(searchStr) >= 0;
}

// static boolean	containsAny(String str, char[] searchChars) 
// Checks if the String contains any character in the given set of characters.
// static boolean	containsAny(String str, String searchChars) 
// Checks if the String contains any character in the given set of characters.
StringUtils.containsAny = function(str, pSearchChars){
	var searchChars;
	if (pSearchChars == null || typeof(pSearchChars) === "undefined"){
		return false;
	}else if (typeof(pSearchChars) === "string"){
		searchChars = pSearchChars.split(StringUtils.EMPTY);
	}else{
		searchChars = pSearchChars;
	}

	if (StringUtils.isEmpty(str) || searchChars.length == 0) {
		return false;
	}
	var csLength = str.length;
	var searchLength = searchChars.length;
	var csLast = csLength - 1;
	var searchLast = searchLength - 1;
	for (var i = 0; i < csLength; i++) {
		var ch = str.charAt(i);
		for (var j = 0; j < searchLength; j++) {
			if (searchChars[j] == ch) {
				if (CharUtils.isHighSurrogate(ch)) {
					if (j == searchLast) {
						// missing low surrogate, fine, like String.indexOf(String)
						return true;
					}
					if (i < csLast && searchChars[j + 1] == str.charAt(i + 1)) {
						return true;
					}
				} else {
					// ch is in the Basic Multilingual Plane
					return true;
				}
			}
		}
	}
	return false;
}

// static boolean	containsIgnoreCase(String str, String searchStr) 
// Checks if String contains a search String irrespective of case, handling null.
StringUtils.containsIgnoreCase = function(str, searchStr) {
	return StringUtils.contains(StringUtils.lowerCase(str), StringUtils.lowerCase(searchStr));
}

// static boolean	containsNone(String str, char[] searchChars) 
// Checks that the String does not contain certain characters.
// static boolean	containsNone(String str, String invalidChars) 
// Checks that the String does not contain certain characters.
StringUtils.containsNone = function(str, searchChars) {
	return !StringUtils.containsAny(str, searchChars);
}

// static boolean	containsOnly(String str, char[] valid) 
// Checks if the String contains only certain characters.
// static boolean	containsOnly(String str, String validChars) 
// Checks if the String contains only certain characters.
StringUtils.containsOnly = function(str, pValid) {
	var valid = pValid;
	if(typeof(pValid) === "string"){
		valid = pValid.split('');
	}
	if ((valid == null) || (str == null)) {
		return false;
	}
	if (str.length == 0) {
		return true;
	}
	if (valid.length == 0) {
		return false;
	}
	return StringUtils.indexOfAnyBut(str, valid) == -1;
}

// static int	countMatches(String str, String sub) 
// Counts how many times the substring appears in the larger String.
StringUtils.countMatches = function(str, sub) {
	if (StringUtils.isEmpty(str) || StringUtils.isEmpty(sub)) {
		return 0;
	}
	var count = 0;
	var idx = 0;
	while ((idx = StringUtils.indexOf(str, sub, idx)) != -1) {
		count++;
		idx += StringUtils.size(sub);
	}
	return count;
}

// static String	defaultIfBlank(String str, String defaultStr) 
// Returns either the passed in String, or if the String is whitespace, empty ("") or null, the value of defaultStr.
StringUtils.defaultIfBlank = function(str, defaultStr) {
	return StringUtils.isBlank(str)? defaultStr: str;
}

// static String	defaultIfEmpty(String str, String defaultStr) 
// Returns either the passed in String, or if the String is empty or null, the value of defaultStr.
StringUtils.defaultIfEmpty = function(str, defaultStr) {
	return StringUtils.isEmpty(str)? defaultStr: str;
}

// static String	defaultString(String str) 
// Returns either the passed in String, or if the String is null, an empty String ("").
// static String	defaultString(String str, String defaultStr) 
// Returns either the passed in String, or if the String is null, the value of defaultStr.
StringUtils.defaultString = function(str, pDefaultStr) {
	var defaultStr = pDefaultStr;
	if (typeof(defaultStr) === "undefined"){
		defaultStr = StringUtils.EMPTY;
	}
	return str == null ? defaultStr : str;
}

// static String	deleteWhitespace(String str) 
// Deletes all whitespaces from a String as defined by Character.isWhitespace(char).
StringUtils.deleteWhitespace = function(str) {
	if (StringUtils.isEmpty(str)) {
        return str;
    }
    var sz = StringUtils.size(str);
    var resultado = "";
        var count = 0;
        for (var i = 0; i < sz; i++) {
            if (str.charAt(i) != " ") {
                resultado += str.charAt(i);
            }
        }
	if (count == sz) {
		return str;
	}
    return resultado;
}

// static String	difference(String str1, String str2) 
// Compares two Strings, and returns the portion where they differ.
StringUtils.difference = function(str1, str2) {
	throw new Error("UnsupportedOperationException")
}

// static boolean	endsWith(String str, String suffix) 
// Check if a String ends with a specified suffix.
StringUtils.endsWith = function(str, suffix) {
	throw new Error("UnsupportedOperationException")
}

// static boolean	endsWithAny(String string, String[] searchStrings) 
// Check if a String ends with any of an array of specified strings.
StringUtils.endsWithAny = function(string, searchStrings) {
	throw new Error("UnsupportedOperationException")
}

// static boolean	endsWithIgnoreCase(String str, String suffix) 
// Case insensitive check if a String ends with a specified suffix.
StringUtils.endsWithIgnoreCase = function(str, suffix) {
	throw new Error("UnsupportedOperationException")
}

// static boolean	equals(String str1, String str2) 
// Compares two Strings, returning true if they are equal.
StringUtils.equals = function(str1, str2) {
	return str1 === str2;
	
}

// static boolean	equalsIgnoreCase(String str1, String str2) 
// Compares two Strings, returning true if they are equal ignoring the case.
StringUtils.equalsIgnoreCase = function(str1, str2) {
	return StringUtils.equals(StringUtils.lowerCase(str1), StringUtils.lowerCase(str2));
}

// static String	getCommonPrefix(String[] strs) 
// Compares all Strings in an array and returns the initial sequence of characters that is common to all of them.
StringUtils.getCommonPrefix = function(strs) {
	throw new Error("UnsupportedOperationException")
}

// static int	getLevenshteinDistance(String s, String t) 
// Find the Levenshtein distance between two Strings.
StringUtils.getLevenshteinDistance = function(s, t) {
	throw new Error("UnsupportedOperationException")
}

// static int	indexOf(String str, char searchChar) 
// Finds the first index within a String, handling null.
// static int	indexOf(String str, char searchChar, int startPos) 
// Finds the first index within a String from a start position, handling null.
// static int	indexOf(String str, String searchStr) 
// Finds the first index within a String, handling null.
// static int	indexOf(String str, String searchStr, int startPos) 
// Finds the first index within a String, handling null.
StringUtils.indexOf = function(str, searchChar, startPos) {
	var start = startPos;
	if (typeof(start) === "undefined" || !StringUtils.isNumeric(start)){
		start = 0;
	}
	if (StringUtils.isEmpty(str)) {
		return -1;
	}
	return str.indexOf(searchChar, start);
}

// static int	indexOfAny(String str, char[] searchChars) 
// Search a String to find the first index of any character in the given set of characters.
// static int	indexOfAny(String str, String searchChars) 
// Search a String to find the first index of any character in the given set of characters.
// static int	indexOfAny(String str, String[] searchStrs) 
// Find the first index of any of a set of potential substrings.
StringUtils.indexOfAny = function() {
	throw new Error("UnsupportedOperationException")
}

// static int	indexOfAnyBut(String str, char[] searchChars) 
// Search a String to find the first index of any character not in the given set of characters.
// static int	indexOfAnyBut(String str, String searchChars) 
// Search a String to find the first index of any character not in the given set of characters.
StringUtils.indexOfAnyBut = function(str, searchChars) {
	if (StringUtils.isEmpty(str) || StringUtils.isEmpty(searchChars)) {
		return -1;
	}
	for (var i = 0; i < StringUtils.size(str); i++) {
		if (searchChars.indexOf(str.charAt(i)) < 0) {
			return i;
		}
	}
	return -1;
}

// static int	indexOfDifference(String[] strs) 
// Compares all Strings in an array and returns the index at which the Strings begin to differ.
// static int	indexOfDifference(String str1, String str2) 
// Compares two Strings, and returns the index at which the Strings begin to differ.
StringUtils.indexOfDifference = function() {
	throw new Error("UnsupportedOperationException")
}

// static int	indexOfIgnoreCase(String str, String searchStr) 
// Case in-sensitive find of the first index within a String.
// static int	indexOfIgnoreCase(String str, String searchStr, int startPos) 
// Case in-sensitive find of the first index within a String from the specified position.
StringUtils.indexOfIgnoreCase = function() {
	throw new Error("UnsupportedOperationException")
}

// static boolean	isAllLowerCase(String str) 
// Checks if the String contains only lowercase characters.
StringUtils.isAllLowerCase = function(str) {
	throw new Error("UnsupportedOperationException")
}

// static boolean	isAllUpperCase(String str) 
// Checks if the String contains only uppercase characters.
StringUtils.isAllUpperCase = function(str) {
	throw new Error("UnsupportedOperationException")
}

// static boolean	isAlpha(String str) 
// Checks if the String contains only unicode letters.
StringUtils.isAlpha = function(str) {
	if (str == null) {
		return false;
	}
	if (StringUtils.isEmpty(str)){
		return true;
	}
	return str.match(/^[a-z]+$/i) != null;
}

// static boolean	isAlphanumeric(String str) 
// Checks if the String contains only unicode letters or digits.
StringUtils.isAlphanumeric = function(str) {
	throw new Error("UnsupportedOperationException")
}

// static boolean	isAlphanumericSpace(String str) 
// Checks if the String contains only unicode letters, digits or space (' ').
StringUtils.isAlphanumericSpace = function(str) {
	throw new Error("UnsupportedOperationException")
}

// static boolean	isAlphaSpace(String str) 
// Checks if the String contains only unicode letters and space (' ').
StringUtils.isAlphaSpace = function(str) {
	throw new Error("UnsupportedOperationException")
}

// static boolean	isAsciiPrintable(String str) 
// Checks if the string contains only ASCII printable characters.
StringUtils.isAsciiPrintable = function(str) {
	throw new Error("UnsupportedOperationException")
}

// static boolean	isBlank(String str) 
// Checks if a String is empty ("") or null.
StringUtils.isBlank = function(str) {
	return StringUtils.isEmpty(StringUtils.trim(str));
}

// static boolean	isNotBlank(String str) 
// Checks if a String is not empty (""), not null and not whitespace only.
StringUtils.isNotBlank = function(str) {
	return !StringUtils.isBlank(str);
}

// static boolean	isNotEmpty(String str) 
// Checks if a String is not empty ("") and not null.
StringUtils.isNotEmpty = function(str) {
	return !StringUtils.isEmpty(str);
}

// static boolean	isNumeric(String str) 
// Checks if the String contains only unicode digits.
StringUtils.isNumeric = function(pStr) {
	var str = pStr;
	if (str == null || typeof(str)==="undefined") {
		return false;
	}
	
	if (StringUtils.isEmpty(str)){
		return true;
	}
	var regexp = /^[0-9]+$/i;
	return regexp.test(str);
}

// static boolean	isNumericSpace(String str) 
// Checks if the String contains only unicode digits or space (' ').
StringUtils.isNumericSpace = function(str) {
		if (str == null) {
		return false;
	}
	if (StringUtils.isEmpty(str)){
		return true;
	}
	return str.match(/^[0-9\s]+$/i) != null
}

// static boolean	isWhitespace(String str) 
// Checks if the String contains only whitespace.
StringUtils.isWhitespace = function(str) {
	throw new Error("UnsupportedOperationException")
}

// static String	join(Collection collection, char separator) 
// Joins the elements of the provided Collection into a single String containing the provided elements.
// static String	join(Collection collection, String separator) 
// Joins the elements of the provided Collection into a single String containing the provided elements.
// static String	join(Iterator iterator, char separator) 
// Joins the elements of the provided Iterator into a single String containing the provided elements.
// static String	join(Iterator iterator, String separator) 
// Joins the elements of the provided Iterator into a single String containing the provided elements.
// static String	join(Object[] array) 
// Joins the elements of the provided array into a single String containing the provided list of elements.
// static String	join(Object[] array, char separator) 
// Joins the elements of the provided array into a single String containing the provided list of elements.
// static String	join(Object[] array, char separator, int startIndex, int endIndex) 
// Joins the elements of the provided array into a single String containing the provided list of elements.
// static String	join(Object[] array, String separator) 
// Joins the elements of the provided array into a single String containing the provided list of elements.
// static String	join(Object[] array, String separator, int startIndex, int endIndex) 
// Joins the elements of the provided array into a single String containing the provided list of elements.
StringUtils.join = function() {
	throw new Error("UnsupportedOperationException")
}

// static int	lastIndexOf(String str, char searchChar) 
// Finds the last index within a String, handling null.
// static int	lastIndexOf(String str, char searchChar, int startPos) 
// Finds the last index within a String from a start position, handling null.
// static int	lastIndexOf(String str, String searchStr) 
// Finds the last index within a String, handling null.
// static int	lastIndexOf(String str, String searchStr, int startPos) 
// Finds the first index within a String, handling null.
StringUtils.lastIndexOf = function() {
	throw new Error("UnsupportedOperationException")
}


// static int	lastIndexOfAny(String str, String[] searchStrs) 
// Find the latest index of any of a set of potential substrings.
StringUtils.lastIndexOfAny = function(str, searchStrs) {
	throw new Error("UnsupportedOperationException")
}

// static int	lastIndexOfIgnoreCase(String str, String searchStr) 
// Case in-sensitive find of the last index within a String.
// static int	lastIndexOfIgnoreCase(String str, String searchStr, int startPos) 
// Case in-sensitive find of the last index within a String from the specified position.
StringUtils.lastIndexOfIgnoreCase = function() {
	throw new Error("UnsupportedOperationException")
}

// static int	lastOrdinalIndexOf(String str, String searchStr, int ordinal) 
// Finds the n-th last index within a String, handling null.
StringUtils.lastOrdinalIndexOf = function(str, searchStr, ordinal) {
	throw new Error("UnsupportedOperationException")
}

// static String	left(String str, int len) 
// Gets the leftmost len characters of a String.
StringUtils.left = function(str, len) {
	throw new Error("UnsupportedOperationException")
}

// static String	leftPad(String str, int size) 
// Left pad a String with spaces (' ').
// static String	leftPad(String str, int size, char padChar) 
// Left pad a String with a specified character.
// static String	leftPad(String str, int size, String padStr) 
// Left pad a String with a specified String.
StringUtils.leftPad = function(pStr, pSize, pPadStr) {
	var str = typeof(pStr) !== "undefined"? pStr: null;
	var size = typeof(pSize) !== "undefined"? pSize: 0;
	var padStr = typeof(pPadStr) !== "undefined"? pPadStr: StringUtils.EMPTY;
	
    if (str == null) {
		return null;
	}
	if (StringUtils.isEmpty(padStr)) {
		padStr = " ";
	}
	var padLen = padStr.length;
	var strLen = str.length;
	var pads = size - strLen;
	if (pads <= 0) {
		return str; // returns original String when possible
	}
	if (padLen == 1 && pads <= StringUtils.PAD_LIMIT) {
		var resultado = StringUtils.EMPTY;
		for(var i = 0; i < pads; i++){
			resultado += padStr;
		}
		return resultado + str;
	}

	if (pads == padLen) {
		return padStr + str;
	} else if (pads < padLen) {
		return padStr.substring(0, pads) + str;
	 } else {
		var resultado = StringUtils.EMPTY;
		for(var i = 0; i < pads; i++){
			resultado += padStr;
		}
		resultado = resultado.substring(0, pads);
		return resultado + str;
	}	
}

// static int	length(String str) 
// Gets a String's length or 0 if the String is null.
StringUtils.size = function(str) {
	if (str == null){
		return 0;
	}else{
		return str.length
	}
}

// static String	lowerCase(String str) 
// Converts a String to lower case as per String.toLowerCase().
StringUtils.lowerCase = function(str) {
	if (str == null) {
		return null;
	}
	return str.toLowerCase();
}

// static String	mid(String str, int pos, int len) 
// Gets len characters from the middle of a String.
StringUtils.mid = function(str, pos, len) {
	throw new Error("UnsupportedOperationException")
}

// static String	normalizeSpace(String str) 
// Similar to http://www.w3.org/TR/xpath/#function-normalize -space
StringUtils.normalizeSpace = function(str) {
	throw new Error("UnsupportedOperationException")
}

// static int	ordinalIndexOf(String str, String searchStr, int ordinal) 
// Finds the n-th index within a String, handling null.
StringUtils.ordinalIndexOf = function(str, searchStr, ordinal) {
	throw new Error("UnsupportedOperationException")
}

// static String	overlay(String str, String overlay, int start, int end) 
// Overlays part of a String with another String.
StringUtils.overlay = function(str, overlay, start, end) {
	throw new Error("UnsupportedOperationException")
}

// static String	remove(String str, char remove) 
// Removes all occurrences of a character from within the source string.
// static String	remove(String str, String remove) 
// Removes all occurrences of a substring from within the source string.
StringUtils.remove = function(str, remove) {
	throw new Error("UnsupportedOperationException")
}

// static String	removeEnd(String str, String remove) 
// Removes a substring only if it is at the end of a source string, otherwise returns the source string.
StringUtils.removeEnd = function(str, remove) {
	throw new Error("UnsupportedOperationException")
}

// static String	removeEndIgnoreCase(String str, String remove) 
// Case insensitive removal of a substring if it is at the end of a source string, otherwise returns the source string.
StringUtils.removeEndIgnoreCase = function(str, remove) {
	throw new Error("UnsupportedOperationException")
}

// static String	removeStart(String str, String remove) 
// Removes a substring only if it is at the begining of a source string, otherwise returns the source string.
StringUtils.removeStart = function(str, remove) {
	throw new Error("UnsupportedOperationException")
}

// static String	removeStartIgnoreCase(String str, String remove) 
// Case insensitive removal of a substring if it is at the begining of a source string, otherwise returns the source string.
StringUtils.removeStartIgnoreCase = function(str, remove) {
	throw new Error("UnsupportedOperationException")
}

// static String	repeat(String str, int repeat) 
// Repeat a String repeat times to form a new String.
// static String	repeat(String str, String separator, int repeat) 
// Repeat a String repeat times to form a new String, with a String separator injected each time.
StringUtils.repeat = function() {
	throw new Error("UnsupportedOperationException")
}

// static String	replace(String text, String searchString, String replacement) 
// Replaces all occurrences of a String within another String.
// static String	replace(String text, String searchString, String replacement, int max) 
// Replaces a String with another String inside a larger String, for the first max values of the search String.
StringUtils.replace = function() {
	throw new Error("UnsupportedOperationException")
}

// static String	replaceChars(String str, char searchChar, char replaceChar) 
// Replaces all occurrences of a character in a String with another.
// static String	replaceChars(String str, String searchChars, String replaceChars) 
// Replaces multiple characters in a String in one go.
StringUtils.replaceChars = function(str, searchChars, replaceChars) {
	throw new Error("UnsupportedOperationException")
}

// static String	replaceEach(String text, String[] searchList, String[] replacementList) 
// Replaces all occurrences of Strings within another String.
StringUtils.replaceEach = function(text, searchList, replacementList) {
	throw new Error("UnsupportedOperationException")
}

// static String	replaceEachRepeatedly(String text, String[] searchList, String[] replacementList) 
// Replaces all occurrences of Strings within another String.
StringUtils.replaceEachRepeatedly = function(text, searchList, replacementList) {
	throw new Error("UnsupportedOperationException")
}

// static String	replaceOnce(String text, String searchString, String replacement) 
// Replaces a String with another String inside a larger String, once.
StringUtils.replaceOnce = function(text, searchString, replacement) {
	throw new Error("UnsupportedOperationException")
}

// static String	reverse(String str) 
// Reverses a String as per StrBuilder.reverse().
StringUtils.reverse = function(str) {
	throw new Error("UnsupportedOperationException")
}

// static String	reverseDelimited(String str, char separatorChar) 
// Reverses a String that is delimited by a specific character.
StringUtils.reverseDelimited = function(str, separatorChar) {
	throw new Error("UnsupportedOperationException")
}

// static String	right(String str, int len) 
// Gets the rightmost len characters of a String.
StringUtils.right = function(str, len) {
	throw new Error("UnsupportedOperationException")
}

// static String	rightPad(String str, int size) 
// Right pad a String with spaces (' ').
// static String	rightPad(String str, int size, char padChar) 
// Right pad a String with a specified character.
// static String	rightPad(String str, int size, String padStr) 
// Right pad a String with a specified String.
StringUtils.rightPad = function(pStr, pSize, pPadStr) {
	var str = typeof(pStr) !== "undefined"? pStr: null;
	var size = typeof(pSize) !== "undefined"? pSize: 0;
	var padStr = typeof(pPadStr) !== "undefined"? pPadStr: StringUtils.EMPTY;
	
    if (str == null) {
		return null;
	}
	if (StringUtils.isEmpty(padStr)) {
		padStr = " ";
	}
	var padLen = padStr.length;
	var strLen = str.length;
	var pads = size - strLen;
	if (pads <= 0) {
		return str; // returns original String when possible
	}
	if (padLen == 1 && pads <= StringUtils.PAD_LIMIT) {
		var resultado = StringUtils.EMPTY;
		for(var i = 0; i < pads; i++){
			resultado += padStr;
		}
		return str + resultado;
	}

	if (pads == padLen) {
		return str + padStr;
	} else if (pads < padLen) {
		return padStr.substring(0, pads) + str;
	 } else {
		var resultado = StringUtils.EMPTY;
		for(var i = 0; i < pads; i++){
			resultado += padStr;
		}
		resultado = resultado.substring(0, pads);
		return str + resultado;
	}	
}

// static String[]	split(String str) 
// Splits the provided text into an array, using whitespace as the separator.
// static String[]	split(String str, char separatorChar) 
// Splits the provided text into an array, separator specified.
// static String[]	split(String str, String separatorChars) 
// Splits the provided text into an array, separators specified.
// static String[]	split(String str, String separatorChars, int max) 
// Splits the provided text into an array with a maximum length, separators specified.
StringUtils.split = function() {
	throw new Error("UnsupportedOperationException")
}

// static String[]	splitByCharacterType(String str) 
// Splits a String by Character type as returned by java.lang.Character.getType(char).
StringUtils.splitByCharacterType = function(str) {
	throw new Error("UnsupportedOperationException")
}

// static String[]	splitByCharacterTypeCamelCase(String str) 
// Splits a String by Character type as returned by java.lang.Character.getType(char).
StringUtils.splitByCharacterTypeCamelCase = function(str) {
	throw new Error("UnsupportedOperationException")
}

// static String[]	splitByWholeSeparator(String str, String separator) 
// Splits the provided text into an array, separator string specified.
// static String[]	splitByWholeSeparator(String str, String separator, int max) 
// Splits the provided text into an array, separator string specified.
StringUtils.splitByWholeSeparator = function() {
	throw new Error("UnsupportedOperationException")
}

// static String[]	splitByWholeSeparatorPreserveAllTokens(String str, String separator) 
// Splits the provided text into an array, separator string specified.
// static String[]	splitByWholeSeparatorPreserveAllTokens(String str, String separator, int max) 
// Splits the provided text into an array, separator string specified.
StringUtils.splitByWholeSeparatorPreserveAllTokens = function() {
	throw new Error("UnsupportedOperationException")
}

// static String[]	splitPreserveAllTokens(String str) 
// Splits the provided text into an array, using whitespace as the separator, preserving all tokens, including empty tokens created by adjacent separators.
// static String[]	splitPreserveAllTokens(String str, char separatorChar) 
// Splits the provided text into an array, separator specified, preserving all tokens, including empty tokens created by adjacent separators.
// static String[]	splitPreserveAllTokens(String str, String separatorChars) 
// Splits the provided text into an array, separators specified, preserving all tokens, including empty tokens created by adjacent separators.
// static String[]	splitPreserveAllTokens(String str, String separatorChars, int max) 
// Splits the provided text into an array with a maximum length, separators specified, preserving all tokens, including empty tokens created by adjacent separators.
StringUtils.splitPreserveAllTokens = function() {
	throw new Error("UnsupportedOperationException")
}

// static boolean	startsWith(String str, String prefix) 
// Check if a String starts with a specified prefix.
StringUtils.startsWith = function(str, prefix) {
	throw new Error("UnsupportedOperationException")
}

// static boolean	startsWithAny(String string, String[] searchStrings) 
// Check if a String starts with any of an array of specified strings.
StringUtils.startsWithAny = function(string, searchStrings) {
	throw new Error("UnsupportedOperationException")
}

// static boolean	startsWithIgnoreCase(String str, String prefix) 
// Case insensitive check if a String starts with a specified prefix.
StringUtils.startsWithIgnoreCase = function(str, prefix) {
	throw new Error("UnsupportedOperationException")
}

// static String	strip(String str) 
// Strips whitespace from the start and end of a String.
// static String	strip(String str, String stripChars) 
// Strips any of a set of characters from the start and end of a String.
StringUtils.strip = function() {
	throw new Error("UnsupportedOperationException")
}

// static String[]	stripAll(String[] strs) 
// Strips whitespace from the start and end of every String in an array.
// static String[]	stripAll(String[] strs, String stripChars) 
// Strips any of a set of characters from the start and end of every String in an array.
StringUtils.stripAll = function() {
	throw new Error("UnsupportedOperationException")
}

// static String	stripEnd(String str, String stripChars) 
// Strips any of a set of characters from the end of a String.
StringUtils.stripEnd = function(str, stripChars) {
	throw new Error("UnsupportedOperationException")
}

// static String	stripStart(String str, String stripChars) 
// Strips any of a set of characters from the start of a String.
StringUtils.stripStart = function(str, stripChars) {
	throw new Error("UnsupportedOperationException")
}

// static String	stripToEmpty(String str) 
// Strips whitespace from the start and end of a String returning an empty String if null input.
StringUtils.stripToEmpty = function(str) {
	throw new Error("UnsupportedOperationException")
}


// static String	stripToNull(String str) 
// Strips whitespace from the start and end of a String returning null if the String is empty ("") after the strip.
StringUtils.stripToNull = function(str) {
	throw new Error("UnsupportedOperationException")
}

// static String	substring(String str, int start) 
// Gets a substring from the specified String avoiding exceptions.
// static String	substring(String str, int start, int end) 
// Gets a substring from the specified String avoiding exceptions.
StringUtils.substring = function() {
	throw new Error("UnsupportedOperationException")
}

// static String	substringAfter(String str, String separator) 
// Gets the substring after the first occurrence of a separator.
StringUtils.substringAfter = function(str, separator) {
	throw new Error("UnsupportedOperationException")
}

// static String	substringAfterLast(String str, String separator) 
// Gets the substring after the last occurrence of a separator.
StringUtils.substringAfterLast = function(str, separator) {
	throw new Error("UnsupportedOperationException")
}

// static String	substringBefore(String str, String separator) 
// Gets the substring before the first occurrence of a separator.
StringUtils.substringBefore = function(str, separator) {
	throw new Error("UnsupportedOperationException")
}

// static String	substringBeforeLast(String str, String separator) 
// Gets the substring before the last occurrence of a separator.
StringUtils.substringBeforeLast = function(str, separator) {
	throw new Error("UnsupportedOperationException")
}

// static String	substringBetween(String str, String tag) 
// Gets the String that is nested in between two instances of the same String.
// static String	substringBetween(String str, String open, String close) 
// Gets the String that is nested in between two Strings.
StringUtils.substringBetween = function() {
	throw new Error("UnsupportedOperationException")
}

// static String[]	substringsBetween(String str, String open, String close) 
// Searches a String for substrings delimited by a start and end tag, returning all matching substrings in an array.
StringUtils.substringsBetween = function(str, open, close) {
	throw new Error("UnsupportedOperationException")
}

// static String	swapCase(String str) 
// Swaps the case of a String changing upper and title case to lower case, and lower case to upper case.
StringUtils.swapCase = function(str) {
	throw new Error("UnsupportedOperationException")
}

// static String	trim(String str) 
// Removes control characters (char <= 32) from both ends of this String, handling null by returning null.
StringUtils.trim = function(str) {
	if (str == null) {
		return null;
	}
	if (str.length == 0)
		return "";
	else {
		// Loop through string starting at the end as long as there
		// are spaces.
		var inicio = 0
		var fin = str.length - 1;
		for (;inicio < str.length && (str.charAt(inicio) == " "); inicio++);
		if (inicio == str.length){
			return "";
		}else{
			for (;fin >= 0 && (str.charAt(fin) == " "); fin--);
			return str.substring(inicio, fin+1);
		}
	}
}

// static String	trimToEmpty(String str) 
// Removes control characters (char <= 32) from both ends of this String returning an empty String ("") if the String is empty ("") after the trim or if it is null.
StringUtils.trimToEmpty = function(str) {
	if (str == null) {
		return StringUtils.EMPTY;
	}else{
		return StringUtils.trim(str);
	}
}

// static String	trimToNull(String str) 
// Removes control characters (char <= 32) from both ends of this String returning null if the String is empty ("") after the trim or if it is null.
StringUtils.trimToNull = function(str) {
	var resultado = StringUtils.trim(str);
	if (StringUtils.isEmpty(resultado)){
		return null;
	}else{
		return resultado;
	}
}

// static String	uncapitalize(String str) 
// Uncapitalizes a String changing the first letter to title case as per Character.toLowerCase(char).
StringUtils.uncapitalize = function(str) {
	throw new Error("UnsupportedOperationException")
}

// static String	upperCase(String str) 
// Converts a String to upper case as per String.toUpperCase().
StringUtils.upperCase = function(str) {
	if (str == null) {
		return null;
	}
	return str.toUpperCase();
}