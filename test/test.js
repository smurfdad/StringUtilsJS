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
	assert.equal( StringUtils.center(null, 4), null, "StringUtils.center(null, *) = null");
	assert.equal( StringUtils.center(undefined, 4), null, "StringUtils.center(undefined, *) = null");
	assert.equal( StringUtils.center("", 4), "    ", "StringUtils.center(\"\", 4) = \"    \"");
	assert.equal( StringUtils.center("ab", -1), "ab", "StringUtils.center(\"ab\", -1)  = \"ab\"");
	assert.equal( StringUtils.center("ab", 4), " ab ", "assert.equal( StringUtils.center(\"ab\", 4)   = \" ab \"");
	assert.equal( StringUtils.center("abcd", 2), "abcd", "StringUtils.center(\"abcd\", 2) = \"abcd\"");
	assert.equal( StringUtils.center("a", 4), " a  ","StringUtils.center(\"a\", 4)    = \" a  \"");
});
QUnit.test( "center(String str, int size, String/char padChar) ", function( assert ) {
	assert.equal( StringUtils.center(null, 2, "*"), null, "StringUtils.center(null, *, *) = null");
	assert.equal( StringUtils.center(undefined, 2, "*"), null, "StringUtils.center(null, *, *) = null");
	assert.equal( StringUtils.center("", 4, " "),"    ", "StringUtils.center(\"\", 4, \" \") = \"    \"");
	assert.equal( StringUtils.center("ab", -1, " "), "ab","StringUtils.center(\"ab\", -1, \" \") = \"ab\"");
	//El siguiente test en el StringUtils orginal creo que esta mal.
	assert.equal( StringUtils.center("ab", 4, " "), " ab ","StringUtils.center(\"ab\", 4, \" \") = \" ab \""); 
	assert.equal( StringUtils.center("abcd", 2, " "), "abcd", "StringUtils.center(\"abcd\", 2, \" \") = \"abcd\"");
	assert.equal( StringUtils.center("a", 4, " "), " a  ","StringUtils.center(\"a\", 4, \" \") = \" a  \"");
	assert.equal( StringUtils.center("a", 4, "y"), "yayy", "StringUtils.center(\"a\", 4, \"y\") = \"yayy\"");

});

QUnit.test( "chomp(String str)", function( assert ) {
	assert.equal( StringUtils.chomp(null), null, "StringUtils.chomp(null) = null");
	assert.equal( StringUtils.chomp(undefined), null, "StringUtils.chomp(undefined) = null");
	assert.equal( StringUtils.chomp(""), "", "StringUtils.chomp(\"\") = \"\"");
	assert.equal( StringUtils.chomp("abc \r"), "abc ", "StringUtils.chomp(\"abc \\r\") = \"abc \"");
	assert.equal( StringUtils.chomp("abc\n"), "abc", "StringUtils.chomp(\"abc\\n\") = \"abc\"");
	assert.equal( StringUtils.chomp("abc\r\n"), "abc", "StringUtils.chomp(\"abc\\r\\n\") = \"abc\"");
	assert.equal( StringUtils.chomp("abc\r\n\r\n"), "abc\r\n", "StringUtils.chomp(\"abc\\r\\n\\r\\n\") = \"abc\\r\\n\"");
	assert.equal( StringUtils.chomp("abc\n\r"), "abc\n", "StringUtils.chomp(\"abc\\n\\r\") = \"abc\\n\"");
	assert.equal( StringUtils.chomp("abc\n\rabc"), "abc\n\rabc", "StringUtils.chomp(\"abc\\n\\rabc\") = \"abc\\n\\rabc\"");
	assert.equal( StringUtils.chomp("\r"), "", "StringUtils.chomp(\"\\r\") = \"\"");
	assert.equal( StringUtils.chomp("\n"), "", "StringUtils.chomp(\"\\n\") = \"\"");
	assert.equal( StringUtils.chomp("\r\n"), "", "StringUtils.chomp(\"\\r\\n\") = \"\"");
});
QUnit.test( "chomp(String str, String separator) ", function( assert ) {
	assert.equal( StringUtils.chomp(null, "z"), null, "StringUtils.chomp(null, *) = null");
	assert.equal( StringUtils.chomp(undefined, "z"), null, "StringUtils.chomp(undefined, *) = null");
	assert.equal( StringUtils.chomp("", "z"), "", "StringUtils.chomp(\"\", *) = \"\"");
	assert.equal( StringUtils.chomp("foobar", "bar"), "foo", "StringUtils.chomp(\"foobar\", \"bar\") = \"foo\"");
	assert.equal( StringUtils.chomp("foobar", "baz"), "foobar", "StringUtils.chomp(\"foobar\", \"baz\") = \"foobar\"");
	assert.equal( StringUtils.chomp("foo", "foo"), "", "StringUtils.chomp(\"foo\", \"foo\") = \"\"");
	assert.equal( StringUtils.chomp("foo ", "foo"), "foo ", "StringUtils.chomp(\"foo \", \"foo\") = \"foo \"");
	assert.equal( StringUtils.chomp(" foo", "foo"), " ", "StringUtils.chomp(\" foo\", \"foo\") = \" \"");
	assert.equal( StringUtils.chomp("foo", "foooo"), "foo", "StringUtils.chomp(\"foo\", \"foooo\") = \"foo\"");
	assert.equal( StringUtils.chomp("foo", ""), "foo", "StringUtils.chomp(\"foo\", \"\") = \"foo\"");
	assert.equal( StringUtils.chomp("foo", null), "foo", "StringUtils.chomp(\"foo\", null) = \"foo\"");
	assert.equal( StringUtils.chomp("foo", undefined), "foo", "StringUtils.chomp(\"foo\", undefined) = \"foo\"");
});
QUnit.test( "chop(String str) ", function( assert ) {
	assert.equal( StringUtils.chop(null), null, "StringUtils.chop(null) = null");
	assert.equal( StringUtils.chop(""), "", "StringUtils.chop(\"\") = \"\"");
	assert.equal( StringUtils.chop("abc \r"), "abc ", "StringUtils.chop(\"abc \\r\") = \"abc \"");
	assert.equal( StringUtils.chop("abc\n"), "abc", "StringUtils.chop(\"abc\\n\") = \"abc\"");
	assert.equal( StringUtils.chop("abc\r\n"), "abc", "StringUtils.chop(\"abc\\r\\n\") = \"abc\"");
	assert.equal( StringUtils.chop("abc"), "ab", "StringUtils.chop(\"abc\") = \"ab\"");
	assert.equal( StringUtils.chop("abc\nabc"), "abc\nab", "StringUtils.chop(\"abc\\nabc\") = \"abc\\nab\"");
	assert.equal( StringUtils.chop("a"), "", "StringUtils.chop(\"a\") = \"\"");
	assert.equal( StringUtils.chop("\r"), "", "StringUtils.chop(\"\\r\") = \"\"");
	assert.equal( StringUtils.chop("\n"), "", "StringUtils.chop(\"\\n\") = \"\"");
	assert.equal( StringUtils.chop("\r\n"), "", "StringUtils.chop(\"\\r\\n\") = \"\"");
});
QUnit.test( "contains(String str, char/string searchChar) ", function( assert ) {
	assert.equal( StringUtils.contains(null, "a"), false, "StringUtils.contains(null, *) = false");
	assert.equal( StringUtils.contains(undefined, "a"), false, "StringUtils.contains(undefined, *) = false");
	assert.equal( StringUtils.contains("abc", null), false, "StringUtils.contains(*, null) = false");
	assert.equal( StringUtils.contains("abc", undefined), false, "StringUtils.contains(*, undefined) = false");
	assert.equal( StringUtils.contains("", ""), true, "StringUtils.contains(\"\", \"\") = true");
	assert.equal( StringUtils.contains("abc", ""), true, "StringUtils.contains(\"abc\", \"\") = true");
	assert.equal( StringUtils.contains("abc", "a"), true, "StringUtils.contains(\"abc\", \"a\") = true");
	assert.equal( StringUtils.contains("abc", "z"), false, "StringUtils.contains(\"abc\", \"z\") = false");
});
QUnit.test( "containsAny(String str, char[] searchChars)", function( assert ) {
	assert.equal( StringUtils.containsAny(null, ["z","a"]), false ,"StringUtils.containsAny(null, *) = false");
	assert.equal( StringUtils.containsAny("", ["z","a"]), false ,"StringUtils.containsAny(\"\", *) = false");
	assert.equal( StringUtils.containsAny("zzabyycdxx", null), false ,"StringUtils.containsAny(*, null) = false");
	assert.equal( StringUtils.containsAny("zzabyycdxx", []), false ,"StringUtils.containsAny(*, []) = false");
	assert.equal( StringUtils.containsAny("zzabyycdxx",['z','a']), true, "StringUtils.containsAny(\"zzabyycdxx\",[\'z\',\'a\']) = true ");
	assert.equal( StringUtils.containsAny("zzabyycdxx",['b','y']), true, "StringUtils.containsAny(\"zzabyycdxx\",[\'b\',\'y\']) = true ");
	assert.equal( StringUtils.containsAny("aba", ['z']), false, "StringUtils.containsAny(\"aba\", [\'z\']) = false");
});
QUnit.test( "containsAny(String str, String searchChars)", function( assert ) {
	assert.equal( StringUtils.containsAny(null, "za"), false, "StringUtils.containsAny(null, *) = false");
	assert.equal( StringUtils.containsAny("", "za"), false, "StringUtils.containsAny(\"\", *) = false");
	assert.equal( StringUtils.containsAny("zzabyycdxx", null), false, "StringUtils.containsAny(*, null) = false");
	assert.equal( StringUtils.containsAny("zzabyycdxx", ""), false, "StringUtils.containsAny(*, \"\") = false");
	assert.equal( StringUtils.containsAny("zzabyycdxx", "za"), true , "StringUtils.containsAny(\"zzabyycdxx\", \"za\") = true");
	assert.equal( StringUtils.containsAny("zzabyycdxx", "by"), true , "StringUtils.containsAny(\"zzabyycdxx\", \"by\") = true ");
	assert.equal( StringUtils.containsAny("aba","z"), false, "StringUtils.containsAny(\"aba\",\"z\") = false");
});
QUnit.test( "containsIgnoreCase(String str, String searchStr) ", function( assert ) {
	assert.equal( StringUtils.containsIgnoreCase(null, "a"), false, "StringUtils.containsIgnoreCase(null, *) = false");
	assert.equal( StringUtils.containsIgnoreCase("abc", null), false, "StringUtils.containsIgnoreCase(*, null) = false");
	assert.equal( StringUtils.containsIgnoreCase("", ""), true, "StringUtils.containsIgnoreCase(\"\", \"\") = true");
	assert.equal( StringUtils.containsIgnoreCase("abc", ""), true, "StringUtils.containsIgnoreCase(\"abc\", \"\") = true");
	assert.equal( StringUtils.containsIgnoreCase("abc", "a"), true, "StringUtils.containsIgnoreCase(\"abc\", \"a\") = true");
	assert.equal( StringUtils.containsIgnoreCase("abc", "z"), false, "StringUtils.containsIgnoreCase(\"abc\", \"z\") = false");
	assert.equal( StringUtils.containsIgnoreCase("abc", "A"), true, "StringUtils.containsIgnoreCase(\"abc\", \"A\") = true");
	assert.equal( StringUtils.containsIgnoreCase("abc", "Z"), false, "StringUtils.containsIgnoreCase(\"abc\", \"A\") = true");
});
QUnit.test( "containsNone(String str, char[] searchChars) ", function( assert ) {
	assert.equal( StringUtils.containsNone(null, ['x','y','z']), true, "StringUtils.containsNone(null, *) = true");
	assert.equal( StringUtils.containsNone("abab", null), true, "StringUtils.containsNone(*, null) = true");
	assert.equal( StringUtils.containsNone("", ['x','y','z']), true, "StringUtils.containsNone(\"\", *) = true");
	assert.equal( StringUtils.containsNone("ab", []), true, "StringUtils.containsNone(\"ab\", []) = true");
	assert.equal( StringUtils.containsNone("abab", ['x','y','z']), true, "StringUtils.containsNone(\"abab\", [\'x\',\'y\',\'z\']) = true");
	assert.equal( StringUtils.containsNone("ab1", ['x','y','z']), true, "StringUtils.containsNone(\"ab1\", [\'x\',\'y\',\'z\']) = true");
	assert.equal( StringUtils.containsNone("abz", ['x','y','z']), false, "StringUtils.containsNone(\"abz\", [\'x\',\'y\',\'z\']) = false");
});
QUnit.test( "containsNone(String str, String invalidChars) ", function( assert ) {
	assert.equal( StringUtils.containsNone(null, "xyz"), true, "StringUtils.containsNone(null, *) = true");
	assert.equal( StringUtils.containsNone("abab", null), true, "StringUtils.containsNone(*, null) = true");
	assert.equal( StringUtils.containsNone("", "xyz"), true, "StringUtils.containsNone(\"\", *) = true");
	assert.equal( StringUtils.containsNone("ab", ""), true, "StringUtils.containsNone(\"ab\", \"\") = true");
	assert.equal( StringUtils.containsNone("abab", "xyz"), true, "StringUtils.containsNone(\"abab\", \"xyz\") = true");
	assert.equal( StringUtils.containsNone("ab1", "xyz"), true, "StringUtils.containsNone(\"ab1\", \"xyz\") = true");
	assert.equal( StringUtils.containsNone("abz", "xyz"), false, "StringUtils.containsNone(\"abz\", \"xyz\") = false");
});
QUnit.test( "containsOnly(String str, char[] valid) ", function( assert ) {assert.expect(0);});
QUnit.test( "containsOnly(String str, String validChars) ", function( assert ) {assert.expect(0);});
QUnit.test( "countMatches(String str, String sub) ", function( assert ) {assert.expect(0);});
QUnit.test( "defaultIfBlank(String str, String defaultStr) ", function( assert ) {assert.expect(0);});
QUnit.test( "defaultIfEmpty(String str, String defaultStr) ", function( assert ) {assert.expect(0);});
QUnit.test( "defaultString(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "defaultString(String str, String defaultStr) ", function( assert ) {assert.expect(0);});
QUnit.test( "deleteWhitespace(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "difference(String str1, String str2) ", function( assert ) {assert.expect(0);});
QUnit.test( "endsWith(String str, String suffix) ", function( assert ) {assert.expect(0);});
QUnit.test( "endsWithAny(String string, String[] searchStrings) ", function( assert ) {assert.expect(0);});
QUnit.test( "endsWithIgnoreCase(String str, String suffix) ", function( assert ) {assert.expect(0);});
QUnit.test( "equals(String str1, String str2) ", function( assert ) {assert.expect(0);});
QUnit.test( "equalsIgnoreCase(String str1, String str2) ", function( assert ) {assert.expect(0);});
QUnit.test( "getCommonPrefix(String[] strs) ", function( assert ) {assert.expect(0);});
QUnit.test( "getLevenshteinDistance(String s, String t) ", function( assert ) {assert.expect(0);});
QUnit.test( "indexOf(String str, char searchChar) ", function( assert ) {assert.expect(0);});
QUnit.test( "indexOf(String str, char searchChar, int startPos) ", function( assert ) {assert.expect(0);});
QUnit.test( "indexOf(String str, String searchStr) ", function( assert ) {assert.expect(0);});
QUnit.test( "indexOf(String str, String searchStr, int startPos) ", function( assert ) {assert.expect(0);});
QUnit.test( "indexOfAny(String str, char[] searchChars) ", function( assert ) {assert.expect(0);});
QUnit.test( "indexOfAny(String str, String searchChars) ", function( assert ) {assert.expect(0);});
QUnit.test( "indexOfAny(String str, String[] searchStrs) ", function( assert ) {assert.expect(0);});
QUnit.test( "indexOfAnyBut(String str, char[] searchChars) ", function( assert ) {assert.expect(0);});
QUnit.test( "indexOfAnyBut(String str, String searchChars) ", function( assert ) {assert.expect(0);});
QUnit.test( "indexOfDifference(String[] strs) ", function( assert ) {assert.expect(0);});
QUnit.test( "indexOfDifference(String str1, String str2) ", function( assert ) {assert.expect(0);});
QUnit.test( "indexOfIgnoreCase(String str, String searchStr) ", function( assert ) {assert.expect(0);});
QUnit.test( "indexOfIgnoreCase(String str, String searchStr, int startPos) ", function( assert ) {assert.expect(0);});
QUnit.test( "isAllLowerCase(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "isAllUpperCase(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "isAlpha(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "isAlphanumeric(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "isAlphanumericSpace(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "isAlphaSpace(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "isAsciiPrintable(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "isBlank(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "isNotBlank(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "isNotEmpty(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "isNumeric(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "isNumericSpace(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "isWhitespace(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "join(Collection collection, char separator) ", function( assert ) {assert.expect(0);});
QUnit.test( "join(Collection collection, String separator) ", function( assert ) {assert.expect(0);});
QUnit.test( "join(Iterator iterator, char separator) ", function( assert ) {assert.expect(0);});
QUnit.test( "join(Iterator iterator, String separator) ", function( assert ) {assert.expect(0);});
QUnit.test( "join(Object[] array) ", function( assert ) {assert.expect(0);});
QUnit.test( "join(Object[] array, char separator) ", function( assert ) {assert.expect(0);});
QUnit.test( "join(Object[] array, char separator, int startIndex, int endIndex) ", function( assert ) {assert.expect(0);});
QUnit.test( "join(Object[] array, String separator) ", function( assert ) {assert.expect(0);});
QUnit.test( "join(Object[] array, String separator, int startIndex, int endIndex) ", function( assert ) {assert.expect(0);});
QUnit.test( "lastIndexOf(String str, char searchChar) ", function( assert ) {assert.expect(0);});
QUnit.test( "lastIndexOf(String str, char searchChar, int startPos) ", function( assert ) {assert.expect(0);});
QUnit.test( "lastIndexOf(String str, String searchStr) ", function( assert ) {assert.expect(0);});
QUnit.test( "lastIndexOf(String str, String searchStr, int startPos) ", function( assert ) {assert.expect(0);});
QUnit.test( "lastIndexOfAny(String str, String[] searchStrs) ", function( assert ) {assert.expect(0);});
QUnit.test( "lastIndexOfIgnoreCase(String str, String searchStr) ", function( assert ) {assert.expect(0);});
QUnit.test( "lastIndexOfIgnoreCase(String str, String searchStr, int startPos) ", function( assert ) {assert.expect(0);});
QUnit.test( "lastOrdinalIndexOf(String str, String searchStr, int ordinal) ", function( assert ) {assert.expect(0);});
QUnit.test( "left(String str, int len) ", function( assert ) {assert.expect(0);});
QUnit.test( "leftPad(String str, int size) ", function( assert ) {
	assert.equal( StringUtils.leftPad(null, 3), null, "StringUtils.leftPad(null, *) = null");
	assert.equal( StringUtils.leftPad("", 3), "   ", "StringUtils.leftPad(\"\", 3) = \"   \"");
	assert.equal( StringUtils.leftPad("bat", 3), "bat", "StringUtils.leftPad(\"bat\", 3) = \"bat\"");
	assert.equal( StringUtils.leftPad("bat", 5), "  bat", "StringUtils.leftPad(\"bat\", 5) = \"  bat\"");
	assert.equal( StringUtils.leftPad("bat", 1), "bat", "StringUtils.leftPad(\"bat\", 1) = \"bat\"");
	assert.equal( StringUtils.leftPad("bat", 1), "bat", "StringUtils.leftPad(\"bat\", 1) = \"bat\"");
});
QUnit.test( "leftPad(String str, int size, Char/String padStr) ", function( assert ) {
	assert.equal( StringUtils.leftPad(null, 3, "z"), null, "StringUtils.leftPad(null, *, *) = null");
	assert.equal( StringUtils.leftPad("", 3, "z"), "zzz", "StringUtils.leftPad(\"\", 3, \"z\") = \"zzz\"");
	assert.equal( StringUtils.leftPad("bat", 3, "yz"), "bat", "StringUtils.leftPad(\"bat\", 3, \"yz\") = \"bat\"");
	assert.equal( StringUtils.leftPad("bat", 5, "yz"), "yzbat", "StringUtils.leftPad(\"bat\", 5, \"yz\") = \"yzbat\"");
	assert.equal( StringUtils.leftPad("bat", 8, "yz"), "yzyzybat", "StringUtils.leftPad(\"bat\", 8, \"yz\") = \"yzyzybat\"");
	assert.equal( StringUtils.leftPad("bat", 1, "yz"), "bat", "StringUtils.leftPad(\"bat\", 1, \"yz\") = \"bat\"");
	assert.equal( StringUtils.leftPad("bat", -1, "yz"), "bat", "StringUtils.leftPad(\"bat\", -1, \"yz\") = \"bat\"");
	assert.equal( StringUtils.leftPad("bat", 5, null), "  bat", "StringUtils.leftPad(\"bat\", 5, null) = \"  bat\"");
	assert.equal( StringUtils.leftPad("bat", 5, undefined), "  bat", "StringUtils.leftPad(\"bat\", 5, null) = \"  bat\"");
	assert.equal( StringUtils.leftPad("bat", 5, ""), "  bat", "StringUtils.leftPad(\"bat\", 5, \"\") = \"  bat\"");
	assert.equal( StringUtils.leftPad("bat", 3, 'z'), "bat", "StringUtils.leftPad(\"bat\", 3, \'z\') = \"bat\"");
	assert.equal( StringUtils.leftPad("bat", 5, 'z'), "zzbat", "StringUtils.leftPad(\"bat\", 5, \'z\') = \"zzbat\"");
	assert.equal( StringUtils.leftPad("bat", 1, 'z'), "bat", "StringUtils.leftPad(\"bat\", 1, \'z\') = \"bat\"");
	assert.equal( StringUtils.leftPad("bat", -1, 'z'), "bat", "StringUtils.leftPad(\"bat\", -1, \'z\') = \"bat\"");
});
QUnit.test( "length(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "lowerCase(String str) ", function( assert ) {
	assert.equal( StringUtils.lowerCase(null), null, "StringUtils.lowerCase(null)  = null");
	assert.equal( StringUtils.lowerCase(""), "", "StringUtils.lowerCase(\"\") = \"\"");
	assert.equal( StringUtils.lowerCase("aBc"), "abc", "StringUtils.lowerCase(\"aBc\") = \"abc\"");
});
QUnit.test( "mid(String str, int pos, int len) ", function( assert ) {assert.expect(0);});
QUnit.test( "normalizeSpace(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "ordinalIndexOf(String str, String searchStr, int ordinal) ", function( assert ) {assert.expect(0);});
QUnit.test( "overlay(String str, String overlay, int start, int end) ", function( assert ) {assert.expect(0);});
QUnit.test( "remove(String str, char remove) ", function( assert ) {assert.expect(0);});
QUnit.test( "remove(String str, String remove) ", function( assert ) {assert.expect(0);});
QUnit.test( "removeEnd(String str, String remove) ", function( assert ) {assert.expect(0);});
QUnit.test( "removeEndIgnoreCase(String str, String remove) ", function( assert ) {assert.expect(0);});
QUnit.test( "removeStart(String str, String remove) ", function( assert ) {assert.expect(0);});
QUnit.test( "removeStartIgnoreCase(String str, String remove) ", function( assert ) {assert.expect(0);});
QUnit.test( "repeat(String str, int repeat) ", function( assert ) {assert.expect(0);});
QUnit.test( "repeat(String str, String separator, int repeat) ", function( assert ) {assert.expect(0);});
QUnit.test( "replace(String text, String searchString, String replacement) ", function( assert ) {assert.expect(0);});
QUnit.test( "replace(String text, String searchString, String replacement, int max) ", function( assert ) {assert.expect(0);});
QUnit.test( "replaceChars(String str, char searchChar, char replaceChar) ", function( assert ) {assert.expect(0);});
QUnit.test( "replaceChars(String str, String searchChars, String replaceChars) ", function( assert ) {assert.expect(0);});
QUnit.test( "replaceEach(String text, String[] searchList, String[] replacementList) ", function( assert ) {assert.expect(0);});
QUnit.test( "replaceEachRepeatedly(String text, String[] searchList, String[] replacementList) ", function( assert ) {assert.expect(0);});
QUnit.test( "replaceOnce(String text, String searchString, String replacement) ", function( assert ) {assert.expect(0);});
QUnit.test( "reverse(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "reverseDelimited(String str, char separatorChar) ", function( assert ) {assert.expect(0);});
QUnit.test( "right(String str, int len) ", function( assert ) {assert.expect(0);});
QUnit.test( "rightPad(String str, int size) ", function( assert ) {
	assert.equal( StringUtils.rightPad(null, 3), null, "StringUtils.rightPad(null, *) = null");
	assert.equal( StringUtils.rightPad("", 3), "   ", "StringUtils.rightPad(\"\", 3) = \"   \"");
	assert.equal( StringUtils.rightPad("bat", 3), "bat", "StringUtils.rightPad(\"bat\", 3) = \"bat\"");
	assert.equal( StringUtils.rightPad("bat", 5), "bat  ", "StringUtils.rightPad(\"bat\", 5) = \"bat  \"");
	assert.equal( StringUtils.rightPad("bat", 1), "bat", "StringUtils.rightPad(\"bat\", 1) = \"bat\"");
	assert.equal( StringUtils.rightPad("bat", -1), "bat", "StringUtils.rightPad(\"bat\", -1) = \"bat\"");
});
QUnit.test( "rightPad(String str, int size, String padStr) ", function( assert ) {
	assert.equal( StringUtils.rightPad(null, 3, ""), null, "StringUtils.rightPad(null, *, *) = null");
	assert.equal( StringUtils.rightPad("", 3, 'z'), "zzz", "StringUtils.rightPad(\"\", 3, \'z\') = \"zzz\"");
	assert.equal( StringUtils.rightPad("bat", 3, 'z'), "bat", "StringUtils.rightPad(\"bat\", 3, \'z\') = \"bat\"");
	assert.equal( StringUtils.rightPad("bat", 5, 'z'), "batzz", "StringUtils.rightPad(\"bat\", 5, \'z\') = \"batzz\"");
	assert.equal( StringUtils.rightPad("bat", 1, 'z'), "bat", "StringUtils.rightPad(\"bat\", 1, \'z\') = \"bat\"");
	assert.equal( StringUtils.rightPad("bat", -1, 'z'), "bat", "StringUtils.rightPad(\"bat\", -1, \'z\') = \"bat\"");
	assert.equal( StringUtils.rightPad("", 3, "z"), "zzz", "StringUtils.rightPad(\"\", 3, \"z\") = \"zzz\"");
	assert.equal( StringUtils.rightPad("bat", 3, "yz"), "bat", "StringUtils.rightPad(\"bat\", 3, \"yz\") = \"bat\"");
	assert.equal( StringUtils.rightPad("bat", 5, "yz"), "batyz", "StringUtils.rightPad(\"bat\", 5, \"yz\") = \"batyz\"");
	assert.equal( StringUtils.rightPad("bat", 8, "yz"), "batyzyzy", "StringUtils.rightPad(\"bat\", 8, \"yz\") = \"batyzyzy\"");
	assert.equal( StringUtils.rightPad("bat", 1, "yz"), "bat", "StringUtils.rightPad(\"bat\", 1, \"yz\") = \"bat\"");
	assert.equal( StringUtils.rightPad("bat", -1, "yz"), "bat", "StringUtils.rightPad(\"bat\", -1, \"yz\") = \"bat\"");
	assert.equal( StringUtils.rightPad("bat", 5, null), "bat  ", "StringUtils.rightPad(\"bat\", 5, null) = \"bat  \"");
	assert.equal( StringUtils.rightPad("bat", 5, ""), "bat  ", "StringUtils.rightPad(\"bat\", 5, \"\") = \"bat  \"");
});
QUnit.test( "split(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "split(String str, char separatorChar) ", function( assert ) {assert.expect(0);});
QUnit.test( "split(String str, String separatorChars) ", function( assert ) {assert.expect(0);});
QUnit.test( "split(String str, String separatorChars, int max) ", function( assert ) {assert.expect(0);});
QUnit.test( "splitByCharacterType(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "splitByCharacterTypeCamelCase(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "splitByWholeSeparator(String str, String separator) ", function( assert ) {assert.expect(0);});
QUnit.test( "splitByWholeSeparator(String str, String separator, int max) ", function( assert ) {assert.expect(0);});
QUnit.test( "splitByWholeSeparatorPreserveAllTokens(String str, String separator) ", function( assert ) {assert.expect(0);});
QUnit.test( "splitByWholeSeparatorPreserveAllTokens(String str, String separator, int max) ", function( assert ) {assert.expect(0);});
QUnit.test( "splitPreserveAllTokens(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "splitPreserveAllTokens(String str, char separatorChar) ", function( assert ) {assert.expect(0);});
QUnit.test( "splitPreserveAllTokens(String str, String separatorChars) ", function( assert ) {assert.expect(0);});
QUnit.test( "splitPreserveAllTokens(String str, String separatorChars, int max) ", function( assert ) {assert.expect(0);});
QUnit.test( "startsWith(String str, String prefix) ", function( assert ) {assert.expect(0);});
QUnit.test( "startsWithAny(String string, String[] searchStrings) ", function( assert ) {assert.expect(0);});
QUnit.test( "startsWithIgnoreCase(String str, String prefix) ", function( assert ) {assert.expect(0);});
QUnit.test( "strip(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "strip(String str, String stripChars) ", function( assert ) {assert.expect(0);});
QUnit.test( "stripAll(String[] strs) ", function( assert ) {assert.expect(0);});
QUnit.test( "stripAll(String[] strs, String stripChars) ", function( assert ) {assert.expect(0);});
QUnit.test( "stripEnd(String str, String stripChars) ", function( assert ) {assert.expect(0);});
QUnit.test( "stripStart(String str, String stripChars) ", function( assert ) {assert.expect(0);});
QUnit.test( "stripToEmpty(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "stripToNull(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "substring(String str, int start) ", function( assert ) {assert.expect(0);});
QUnit.test( "substring(String str, int start, int end) ", function( assert ) {assert.expect(0);});
QUnit.test( "substringAfter(String str, String separator) ", function( assert ) {assert.expect(0);});
QUnit.test( "substringAfterLast(String str, String separator) ", function( assert ) {assert.expect(0);});
QUnit.test( "substringBefore(String str, String separator) ", function( assert ) {assert.expect(0);});
QUnit.test( "substringBeforeLast(String str, String separator) ", function( assert ) {assert.expect(0);});
QUnit.test( "substringBetween(String str, String tag) ", function( assert ) {assert.expect(0);});
QUnit.test( "substringBetween(String str, String open, String close) ", function( assert ) {assert.expect(0);});
QUnit.test( "substringsBetween(String str, String open, String close) ", function( assert ) {assert.expect(0);});
QUnit.test( "swapCase(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "trim(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "trimToEmpty(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "trimToNull(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "uncapitalize(String str) ", function( assert ) {assert.expect(0);});
QUnit.test( "upperCase(String str) ", function( assert ) {assert.expect(0);});