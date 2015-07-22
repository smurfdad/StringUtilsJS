QUnit.test( "abbreviate(str, maxWidth)", function( assert ) {	
	assert.equal( StringUtils.abbreviate(null, 3) , null, "StringUtils.abbreviate(null, 3) = null" );
	assert.equal( StringUtils.abbreviate(undefined, 3) , null, "StringUtils.abbreviate(undefined, 3) = null" );
	assert.equal( StringUtils.abbreviate("", 4) , "", "StringUtils.abbreviate(\"\", 4) = \"\"" );
	assert.equal( StringUtils.abbreviate("abcdefg", 6) , "abc...", "StringUtils.abbreviate(\"abcdefg\", 6) = \"abc...\"" );
	assert.equal( StringUtils.abbreviate("abcdefg", 7) , "abcdefg", "StringUtils.abbreviate(\"abcdefg\", 7) = \"abcdefg\"" );
	assert.equal( StringUtils.abbreviate("abcdefg", 8) , "abcdefg", "StringUtils.abbreviate(\"abcdefg\", 8) = \"abcdefg\"" );
	assert.equal( StringUtils.abbreviate("abcdefg", 4) , "a...", "StringUtils.abbreviate(\"abcdefg\", 4) = \"a...\"" );
	assert.throws( function(){
		StringUtils.abbreviate("abcdefg", 3)
	} ,	
	new Error("IllegalArgumentException"),
	"StringUtils.abbreviate(\"abcdefg\", 3) = IllegalArgumentException" );
	
	assert.throws( function(){
		StringUtils.abbreviate("abcdefg", "X")
	} ,	
	new Error("IllegalArgumentException"),
	"StringUtils.abbreviate(\"abcdefg\", \"X\") = IllegalArgumentException");
	
	assert.throws( function(){
		StringUtils.abbreviate("abcdefg", 1.5)
	} ,	
	new Error("IllegalArgumentException"),
	"StringUtils.abbreviate(\"abcdefg\", 1.5) = IllegalArgumentException");
	
	assert.throws( function(){
		StringUtils.abbreviate(14, 4)
	} ,	
	new Error("IllegalArgumentException"),
	"StringUtils.abbreviate(14, 4) = IllegalArgumentException");
	
	assert.throws( function(){
		StringUtils.abbreviate({}, 4)
	} ,	
	new Error("IllegalArgumentException"),
	"StringUtils.abbreviate({}, 4) = IllegalArgumentException");
});
QUnit.test( "abbreviate(String str, offset, maxWidth)", function( assert ) {
	assert.equal( StringUtils.abbreviate(null, 0, 4),null,"StringUtils.abbreviate(null, 0, 4) = null");
	assert.equal( StringUtils.abbreviate("", 0, 4), "", "StringUtils.abbreviate(\"\", 0, 4) = \"\"");
	assert.equal( StringUtils.abbreviate("abcdefghijklmno", -1, 10),"abcdefg...", "StringUtils.abbreviate(\"abcdefghijklmno\", -1, 10) = \"abcdefg...\" ");
	assert.equal( StringUtils.abbreviate("abcdefghijklmno", 0, 10),"abcdefg...", "StringUtils.abbreviate(\"abcdefghijklmno\" , 0, 10) = \"abcdefg...\"");
	assert.equal( StringUtils.abbreviate("abcdefghijklmno", 1, 10),"abcdefg...", "StringUtils.abbreviate(\"abcdefghijklmno\", 1, 10) = \"abcdefg...\"");
	assert.equal( StringUtils.abbreviate("abcdefghijklmno", 4, 10),"abcdefg...", "StringUtils.abbreviate(\"abcdefghijklmno\", 4, 10) = \"abcdefg...\"");
	assert.equal( StringUtils.abbreviate("abcdefghijklmno", 5, 10),"...fghi...", "StringUtils.abbreviate(\"abcdefghijklmno\", 5, 10) = \"...fghi...\"");
	assert.equal( StringUtils.abbreviate("abcdefghijklmno", 6, 10),"...ghij...", "StringUtils.abbreviate(\"abcdefghijklmno\", 6, 10) = \"...ghij...\"");
	assert.equal( StringUtils.abbreviate("abcdefghijklmno", 8, 10),"...ijklmno", "StringUtils.abbreviate(\"abcdefghijklmno\", 8, 10) = \"...ijklmno\"");
	assert.equal( StringUtils.abbreviate("abcdefghijklmno", 10, 10),"...ijklmno", "StringUtils.abbreviate(\"abcdefghijklmno\", 10, 10)  = \"...ijklmno\"");
	assert.equal( StringUtils.abbreviate("abcdefghijklmno", 12, 10),"...ijklmno", "StringUtils.abbreviate(\"abcdefghijklmno\", 12, 10) = \"...ijklmno\"");
	assert.throws( function(){
	StringUtils.abbreviate("abcdefghij", 0, 3)
	} ,	
	new Error("IllegalArgumentException"),
	"StringUtils.abbreviate(\"abcdefghij\", 0, 3) = IllegalArgumentException");
	assert.throws( function(){
	StringUtils.abbreviate("abcdefghij", 5, 6)
	} ,	
	new Error("IllegalArgumentException"),
	"StringUtils.abbreviate(\"abcdefghij\", 5, 6) = IllegalArgumentException");
});
QUnit.test( "isEmpty(String str)", function( assert ) {
	assert.ok(StringUtils.isEmpty(null) == true,"StringUtils.isEmpty(null) = true");
	assert.ok(StringUtils.isEmpty("") == true,"StringUtils.isEmpty(\"\") = true");
	assert.ok(StringUtils.isEmpty(" ") == false,"StringUtils.isEmpty(\" \") = false");
	assert.ok(StringUtils.isEmpty("bob") == false,"StringUtils.isEmpty(\"bob\") = false");
	assert.ok(StringUtils.isEmpty("  bob  ") == false,"StringUtils.isEmpty(\"  bob  \") = false")

});
QUnit.test( "abbreviateMiddle(String str, String middle, int length)", function( assert ) {
	assert.equal( StringUtils.abbreviateMiddle(null, null, 0), null, "StringUtils.abbreviateMiddle(null, null, 0) = null");
	assert.equal( StringUtils.abbreviateMiddle(undefined, undefined, 0), null, "StringUtils.abbreviateMiddle(undefined, undefined, 0) = undefined");
	assert.equal( StringUtils.abbreviateMiddle("abc", null, 0), "abc", "StringUtils.abbreviateMiddle(\"abc\", null, 0) = \"abc\"");
	assert.equal( StringUtils.abbreviateMiddle("abc", ".", 0), "abc", "StringUtils.abbreviateMiddle(\"abc\", \".\", 0) = \"abc\"");
	assert.equal( StringUtils.abbreviateMiddle("abc", ".", 3), "abc", "StringUtils.abbreviateMiddle(\"abc\", \".\", 3) = \"abc\"");
	assert.equal( StringUtils.abbreviateMiddle("abcdef", ".", 4), "ab.f","StringUtils.abbreviateMiddle(\"abcdef\", \".\", 4) = \"ab.f\"");
});
QUnit.test( "capitalize(String str)", function( assert ) {
	assert.equal( StringUtils.capitalize(null), null, "StringUtils.capitalize(null) = null");
	assert.equal( StringUtils.capitalize(undefined), null, "StringUtils.capitalize(null) = null");
	assert.equal( StringUtils.capitalize(""), "", "StringUtils.capitalize(\"\") = \"\"");
	assert.equal( StringUtils.capitalize("cat"), "Cat", "StringUtils.capitalize(\"cat\") = \"Cat\"");
	assert.equal( StringUtils.capitalize("cAt"), "CAt", "StringUtils.capitalize(\"cAt\") = \"CAt\"");
	assert.equal( StringUtils.capitalize("c"), "C", "StringUtils.capitalize(\"c\") = \"C\"");
});
QUnit.test( "center(String str, int size)", function( assert ) {
	// assert.equal( StringUtils.center(null, 2, "*"), null, "StringUtils.center(null, *, *) = null");
	// assert.equal( StringUtils.center(undefined, 2, "*"), null, "StringUtils.center(null, *, *) = null");
	// assert.equal( StringUtils.center("", 4, " "),"    ", "StringUtils.center(\"\", 4, \" \") = \"    \"");
	// assert.equal( StringUtils.center("ab", -1, " "), "ab","StringUtils.center(\"ab\", -1, \" \") = \"ab\"");
	// assert.equal( StringUtils.center("ab", 4, " "), " ab","StringUtils.center(\"ab\", 4, \" \") = \" ab\"");
	// assert.equal( StringUtils.center("abcd", 2, " ") = "abcd", "StringUtils.center(\"abcd\", 2, \" \") = \"abcd\"");
	// assert.equal( StringUtils.center("a", 4, " "), " a  ","StringUtils.center(\"a\", 4, \" \") = \" a  \"");
	// assert.equal( StringUtils.center("a", 4, "y"), "yayy", "StringUtils.center(\"a\", 4, \"y\") = \"yayy\"");
});

QUnit.test( "chomp(String str)", function( assert ) {});
QUnit.test( "chomp(String str, String separator) ", function( assert ) {});
QUnit.test( "contains(String str, char/string searchChar) ", function( assert ) {});
QUnit.test( "containsAny(String str, char[] searchChars)", function( assert ) {});
QUnit.test( "containsAny(String str, String searchChars)", function( assert ) {});
QUnit.test( "containsIgnoreCase(String str, String searchStr) ", function( assert ) {});
QUnit.test( "containsNone(String str, char[] searchChars) ", function( assert ) {});
QUnit.test( "containsNone(String str, String invalidChars) ", function( assert ) {});
QUnit.test( "containsOnly(String str, char[] valid) ", function( assert ) {});
QUnit.test( "containsOnly(String str, String validChars) ", function( assert ) {});
QUnit.test( "countMatches(String str, String sub) ", function( assert ) {});
QUnit.test( "defaultIfBlank(String str, String defaultStr) ", function( assert ) {});
QUnit.test( "defaultIfEmpty(String str, String defaultStr) ", function( assert ) {});
QUnit.test( "defaultString(String str) ", function( assert ) {});
QUnit.test( "defaultString(String str, String defaultStr) ", function( assert ) {});
QUnit.test( "deleteWhitespace(String str) ", function( assert ) {});
QUnit.test( "difference(String str1, String str2) ", function( assert ) {});
QUnit.test( "endsWith(String str, String suffix) ", function( assert ) {});
QUnit.test( "endsWithAny(String string, String[] searchStrings) ", function( assert ) {});
QUnit.test( "endsWithIgnoreCase(String str, String suffix) ", function( assert ) {});
QUnit.test( "equals(String str1, String str2) ", function( assert ) {});
QUnit.test( "equalsIgnoreCase(String str1, String str2) ", function( assert ) {});
QUnit.test( "getCommonPrefix(String[] strs) ", function( assert ) {});
QUnit.test( "getLevenshteinDistance(String s, String t) ", function( assert ) {});
QUnit.test( "indexOf(String str, char searchChar) ", function( assert ) {});
QUnit.test( "indexOf(String str, char searchChar, int startPos) ", function( assert ) {});
QUnit.test( "indexOf(String str, String searchStr) ", function( assert ) {});
QUnit.test( "indexOf(String str, String searchStr, int startPos) ", function( assert ) {});
QUnit.test( "indexOfAny(String str, char[] searchChars) ", function( assert ) {});
QUnit.test( "indexOfAny(String str, String searchChars) ", function( assert ) {});
QUnit.test( "indexOfAny(String str, String[] searchStrs) ", function( assert ) {});
QUnit.test( "indexOfAnyBut(String str, char[] searchChars) ", function( assert ) {});
QUnit.test( "indexOfAnyBut(String str, String searchChars) ", function( assert ) {});
QUnit.test( "indexOfDifference(String[] strs) ", function( assert ) {});
QUnit.test( "indexOfDifference(String str1, String str2) ", function( assert ) {});
QUnit.test( "indexOfIgnoreCase(String str, String searchStr) ", function( assert ) {});
QUnit.test( "indexOfIgnoreCase(String str, String searchStr, int startPos) ", function( assert ) {});
QUnit.test( "isAllLowerCase(String str) ", function( assert ) {});
QUnit.test( "isAllUpperCase(String str) ", function( assert ) {});
QUnit.test( "isAlpha(String str) ", function( assert ) {});
QUnit.test( "isAlphanumeric(String str) ", function( assert ) {});
QUnit.test( "isAlphanumericSpace(String str) ", function( assert ) {});
QUnit.test( "isAlphaSpace(String str) ", function( assert ) {});
QUnit.test( "isAsciiPrintable(String str) ", function( assert ) {});
QUnit.test( "isBlank(String str) ", function( assert ) {});
QUnit.test( "isNotBlank(String str) ", function( assert ) {});
QUnit.test( "isNotEmpty(String str) ", function( assert ) {});
QUnit.test( "isNumeric(String str) ", function( assert ) {});
QUnit.test( "isNumericSpace(String str) ", function( assert ) {});
QUnit.test( "isWhitespace(String str) ", function( assert ) {});
QUnit.test( "join(Collection collection, char separator) ", function( assert ) {});
QUnit.test( "join(Collection collection, String separator) ", function( assert ) {});
QUnit.test( "join(Iterator iterator, char separator) ", function( assert ) {});
QUnit.test( "join(Iterator iterator, String separator) ", function( assert ) {});
QUnit.test( "join(Object[] array) ", function( assert ) {});
QUnit.test( "join(Object[] array, char separator) ", function( assert ) {});
QUnit.test( "join(Object[] array, char separator, int startIndex, int endIndex) ", function( assert ) {});
QUnit.test( "join(Object[] array, String separator) ", function( assert ) {});
QUnit.test( "join(Object[] array, String separator, int startIndex, int endIndex) ", function( assert ) {});
QUnit.test( "lastIndexOf(String str, char searchChar) ", function( assert ) {});
QUnit.test( "lastIndexOf(String str, char searchChar, int startPos) ", function( assert ) {});
QUnit.test( "lastIndexOf(String str, String searchStr) ", function( assert ) {});
QUnit.test( "lastIndexOf(String str, String searchStr, int startPos) ", function( assert ) {});
QUnit.test( "lastIndexOfAny(String str, String[] searchStrs) ", function( assert ) {});
QUnit.test( "lastIndexOfIgnoreCase(String str, String searchStr) ", function( assert ) {});
QUnit.test( "lastIndexOfIgnoreCase(String str, String searchStr, int startPos) ", function( assert ) {});
QUnit.test( "lastOrdinalIndexOf(String str, String searchStr, int ordinal) ", function( assert ) {});
QUnit.test( "left(String str, int len) ", function( assert ) {});
QUnit.test( "leftPad(String str, int size) ", function( assert ) {});
QUnit.test( "leftPad(String str, int size, char padChar) ", function( assert ) {});
QUnit.test( "leftPad(String str, int size, String padStr) ", function( assert ) {});
QUnit.test( "length(String str) ", function( assert ) {});
QUnit.test( "lowerCase(String str) ", function( assert ) {});
QUnit.test( "mid(String str, int pos, int len) ", function( assert ) {});
QUnit.test( "normalizeSpace(String str) ", function( assert ) {});
QUnit.test( "ordinalIndexOf(String str, String searchStr, int ordinal) ", function( assert ) {});
QUnit.test( "overlay(String str, String overlay, int start, int end) ", function( assert ) {});
QUnit.test( "remove(String str, char remove) ", function( assert ) {});
QUnit.test( "remove(String str, String remove) ", function( assert ) {});
QUnit.test( "removeEnd(String str, String remove) ", function( assert ) {});
QUnit.test( "removeEndIgnoreCase(String str, String remove) ", function( assert ) {});
QUnit.test( "removeStart(String str, String remove) ", function( assert ) {});
QUnit.test( "removeStartIgnoreCase(String str, String remove) ", function( assert ) {});
QUnit.test( "repeat(String str, int repeat) ", function( assert ) {});
QUnit.test( "repeat(String str, String separator, int repeat) ", function( assert ) {});
QUnit.test( "replace(String text, String searchString, String replacement) ", function( assert ) {});
QUnit.test( "replace(String text, String searchString, String replacement, int max) ", function( assert ) {});
QUnit.test( "replaceChars(String str, char searchChar, char replaceChar) ", function( assert ) {});
QUnit.test( "replaceChars(String str, String searchChars, String replaceChars) ", function( assert ) {});
QUnit.test( "replaceEach(String text, String[] searchList, String[] replacementList) ", function( assert ) {});
QUnit.test( "replaceEachRepeatedly(String text, String[] searchList, String[] replacementList) ", function( assert ) {});
QUnit.test( "replaceOnce(String text, String searchString, String replacement) ", function( assert ) {});
QUnit.test( "reverse(String str) ", function( assert ) {});
QUnit.test( "reverseDelimited(String str, char separatorChar) ", function( assert ) {});
QUnit.test( "right(String str, int len) ", function( assert ) {});
QUnit.test( "rightPad(String str, int size) ", function( assert ) {});
QUnit.test( "rightPad(String str, int size, char padChar) ", function( assert ) {});
QUnit.test( "rightPad(String str, int size, String padStr) ", function( assert ) {});
QUnit.test( "split(String str) ", function( assert ) {});
QUnit.test( "split(String str, char separatorChar) ", function( assert ) {});
QUnit.test( "split(String str, String separatorChars) ", function( assert ) {});
QUnit.test( "split(String str, String separatorChars, int max) ", function( assert ) {});
QUnit.test( "splitByCharacterType(String str) ", function( assert ) {});
QUnit.test( "splitByCharacterTypeCamelCase(String str) ", function( assert ) {});
QUnit.test( "splitByWholeSeparator(String str, String separator) ", function( assert ) {});
QUnit.test( "splitByWholeSeparator(String str, String separator, int max) ", function( assert ) {});
QUnit.test( "splitByWholeSeparatorPreserveAllTokens(String str, String separator) ", function( assert ) {});
QUnit.test( "splitByWholeSeparatorPreserveAllTokens(String str, String separator, int max) ", function( assert ) {});
QUnit.test( "splitPreserveAllTokens(String str) ", function( assert ) {});
QUnit.test( "splitPreserveAllTokens(String str, char separatorChar) ", function( assert ) {});
QUnit.test( "splitPreserveAllTokens(String str, String separatorChars) ", function( assert ) {});
QUnit.test( "splitPreserveAllTokens(String str, String separatorChars, int max) ", function( assert ) {});
QUnit.test( "startsWith(String str, String prefix) ", function( assert ) {});
QUnit.test( "startsWithAny(String string, String[] searchStrings) ", function( assert ) {});
QUnit.test( "startsWithIgnoreCase(String str, String prefix) ", function( assert ) {});
QUnit.test( "strip(String str) ", function( assert ) {});
QUnit.test( "strip(String str, String stripChars) ", function( assert ) {});
QUnit.test( "stripAll(String[] strs) ", function( assert ) {});
QUnit.test( "stripAll(String[] strs, String stripChars) ", function( assert ) {});
QUnit.test( "stripEnd(String str, String stripChars) ", function( assert ) {});
QUnit.test( "stripStart(String str, String stripChars) ", function( assert ) {});
QUnit.test( "stripToEmpty(String str) ", function( assert ) {});
QUnit.test( "stripToNull(String str) ", function( assert ) {});
QUnit.test( "substring(String str, int start) ", function( assert ) {});
QUnit.test( "substring(String str, int start, int end) ", function( assert ) {});
QUnit.test( "substringAfter(String str, String separator) ", function( assert ) {});
QUnit.test( "substringAfterLast(String str, String separator) ", function( assert ) {});
QUnit.test( "substringBefore(String str, String separator) ", function( assert ) {});
QUnit.test( "substringBeforeLast(String str, String separator) ", function( assert ) {});
QUnit.test( "substringBetween(String str, String tag) ", function( assert ) {});
QUnit.test( "substringBetween(String str, String open, String close) ", function( assert ) {});
QUnit.test( "substringsBetween(String str, String open, String close) ", function( assert ) {});
QUnit.test( "swapCase(String str) ", function( assert ) {});
QUnit.test( "trim(String str) ", function( assert ) {});
QUnit.test( "trimToEmpty(String str) ", function( assert ) {});
QUnit.test( "trimToNull(String str) ", function( assert ) {});
QUnit.test( "uncapitalize(String str) ", function( assert ) {});
QUnit.test( "upperCase(String str) ", function( assert ) {});