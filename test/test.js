QUnit.module( "StringUtils", {
	beforeEach: function() {
		
	},
	afterEach: function() {
		
	}
});
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
QUnit.test( "containsOnly(String str, char[] valid) ", function( assert ) {
	assert.equal( StringUtils.containsOnly(null, ['a','b','c']), false, "StringUtils.containsOnly(null, *) = false");
	assert.equal( StringUtils.containsOnly("ab", null), false, "StringUtils.containsOnly(*, null) = false");
	assert.equal( StringUtils.containsOnly("", ['a','b','c']), true, "StringUtils.containsOnly(\"\", *) = true");
	assert.equal( StringUtils.containsOnly("ab", []), false, "StringUtils.containsOnly(\"ab\", []) = false");
	assert.equal( StringUtils.containsOnly("abab", ['a','b','c']), true, "StringUtils.containsOnly(\"abab\", ['a','b','c']) = true");
	assert.equal( StringUtils.containsOnly("ab1", ['a','b','c']), false, "StringUtils.containsOnly(\"ab1\", ['a','b','c']) = false");
	assert.equal( StringUtils.containsOnly("abz", ['a','b','c']), false, "StringUtils.containsOnly(\"abz\", ['a','b','c']) = false");
});
QUnit.test( "containsOnly(String str, String validChars) ", function( assert ) {
	assert.equal( StringUtils.containsOnly(null, "abc"), false, "StringUtils.containsOnly(null, *) = false");
	assert.equal( StringUtils.containsOnly("abab", null), false, "StringUtils.containsOnly(*, null) = false");
	assert.equal( StringUtils.containsOnly("", "abc"), true, "StringUtils.containsOnly(\"\", *) = true");
	assert.equal( StringUtils.containsOnly("ab", ""), false, "StringUtils.containsOnly(\"ab\", \"\") = false");
	assert.equal( StringUtils.containsOnly("abab", "abc"), true, "StringUtils.containsOnly(\"abab\", \"abc\") = true");
	assert.equal( StringUtils.containsOnly("ab1", "abc"), false, "StringUtils.containsOnly(\"ab1\", \"abc\") = false");
	assert.equal( StringUtils.containsOnly("abz", "abc"), false, "StringUtils.containsOnly(\"abz\", \"abc\") = false");
});
QUnit.test( "countMatches(String str, String sub) ", function( assert ) {
	assert.equal( StringUtils.countMatches(null, "*"), 0, "StringUtils.countMatches(null, *) = 0");
	assert.equal( StringUtils.countMatches("", "*"), 0, "StringUtils.countMatches(\"\", *)  = 0");
	assert.equal( StringUtils.countMatches("abba", null), 0, "StringUtils.countMatches(\"abba\", null) = 0");
	assert.equal( StringUtils.countMatches("abba", ""), 0, "StringUtils.countMatches(\"abba\", \"\") = 0");
	assert.equal( StringUtils.countMatches("abba", "a"), 2, "StringUtils.countMatches(\"abba\", \"a\") = 2");
	assert.equal( StringUtils.countMatches("abba", "ab"), 1, "StringUtils.countMatches(\"abba\", \"ab\") = 1");
	assert.equal( StringUtils.countMatches("abba", "xxx"), 0, "StringUtils.countMatches(\"abba\", \"xxx\") = 0");
});
QUnit.test( "defaultIfBlank(String str, String defaultStr) ", function( assert ) {
	assert.equal( StringUtils.defaultIfBlank(null, "NULL"), "NULL", "StringUtils.defaultIfBlank(null, \"NULL\") = \"NULL\"");
	assert.equal( StringUtils.defaultIfBlank("", "NULL"), "NULL", "StringUtils.defaultIfBlank(\"\", \"NULL\") = \"NULL\"");
	assert.equal( StringUtils.defaultIfBlank(" ", "NULL"), "NULL", "StringUtils.defaultIfBlank(\" \", \"NULL\") = \"NULL\"");
	assert.equal( StringUtils.defaultIfBlank("bat", "NULL"), "bat", "StringUtils.defaultIfBlank(\"bat\", \"NULL\") = \"bat\"");
	assert.equal( StringUtils.defaultIfBlank("", null), null, "StringUtils.defaultIfBlank(\"\", null) = null");
});
QUnit.test( "defaultIfEmpty(String str, String defaultStr) ", function( assert ) {
	assert.equal(StringUtils.defaultIfEmpty(null, "NULL"), "NULL", "StringUtils.defaultIfEmpty(null, \"NULL\") = \"NULL\"");
	assert.equal(StringUtils.defaultIfEmpty("", "NULL"), "NULL", "StringUtils.defaultIfEmpty(\"\", \"NULL\") = \"NULL\"");
	assert.equal(StringUtils.defaultIfEmpty("bat", "NULL"),  "bat", "StringUtils.defaultIfEmpty(\"bat\", \"NULL\") = \"bat\"");
	assert.equal(StringUtils.defaultIfEmpty("", null), null, "StringUtils.defaultIfEmpty(\"\", null) = null");
});
QUnit.test( "defaultString(String str) ", function( assert ) {
	assert.equal( StringUtils.defaultString(null), "", "StringUtils.defaultString(null)  = \"\"");
	assert.equal( StringUtils.defaultString(""), "", "StringUtils.defaultString(\"\")    = \"\"");
	assert.equal( StringUtils.defaultString("bat"), "bat", "StringUtils.defaultString(\"bat\") = \"bat\"");
});
QUnit.test( "defaultString(String str, String defaultStr) ", function( assert ) {
	assert.equal( StringUtils.defaultString(null, "NULL"), "NULL", "StringUtils.defaultString(null, \"NULL\") = \"NULL\"");
	assert.equal( StringUtils.defaultString("", "NULL"), "", "StringUtils.defaultString(\"\", \"NULL\") = \"\"");
	assert.equal( StringUtils.defaultString("bat", "NULL"), "bat", "StringUtils.defaultString(\"bat\", \"NULL\") = \"bat\"");
});
QUnit.test( "deleteWhitespace(String str) ", function( assert ) {
	assert.equal( StringUtils.deleteWhitespace(null),  null, "StringUtils.deleteWhitespace(null) = null");
	assert.equal( StringUtils.deleteWhitespace(""),    "", "StringUtils.deleteWhitespace(\"\") = \"\"");
	assert.equal( StringUtils.deleteWhitespace("abc"), "abc", "StringUtils.deleteWhitespace(\"abc\") = \"abc\"");
	assert.equal( StringUtils.deleteWhitespace("   ab  c  "), "abc", "StringUtils.deleteWhitespace(\"   ab  c  \") = \"abc\"");
});
QUnit.test( "difference(String str1, String str2) ", function( assert ) {
	assert.equal( StringUtils.difference(null, null), null, "StringUtils.difference(null, null) = null");
	assert.equal( StringUtils.difference("", ""), "", "StringUtils.difference(\"\", \"\") = \"\"");
	assert.equal( StringUtils.difference("", "abc"), "abc", "StringUtils.difference(\"\", \"abc\") = \"abc\"");
	assert.equal( StringUtils.difference("abc", ""), "", "StringUtils.difference(\"abc\", \"\") = \"\"");
	assert.equal( StringUtils.difference("abc", "abc"), "", "StringUtils.difference(\"abc\", \"abc\") = \"\"");
	assert.equal( StringUtils.difference("ab", "abxyz"), "xyz", "StringUtils.difference(\"ab\", \"abxyz\")    = \"xyz\"");
	assert.equal( StringUtils.difference("abcde", "abxyz"), "xyz", "StringUtils.difference(\"abcde\", \"abxyz\") = \"xyz\"");
	assert.equal( StringUtils.difference("abcde", "xyz"), "xyz", "StringUtils.difference(\"abcde\", \"xyz\")   = \"xyz\"");
});
QUnit.skip( "endsWith(String str, String suffix) ", function( assert ) {});
QUnit.skip( "endsWithAny(String string, String[] searchStrings) ", function( assert ) {});
QUnit.skip( "endsWithIgnoreCase(String str, String suffix) ", function( assert ) {});
QUnit.test( "equals(String str1, String str2) ", function( assert ) {
	assert.equal( StringUtils.equals(null, null), true, "StringUtils.equals(null, null) = true");
	assert.equal( StringUtils.equals(null, "abc"), false, "StringUtils.equals(null, \"abc\") = false");
	assert.equal( StringUtils.equals("abc", null), false, "StringUtils.equals(\"abc\", null) = false");
	assert.equal( StringUtils.equals("abc", "abc"), true, "StringUtils.equals(\"abc\", \"abc\") = true");
	assert.equal( StringUtils.equals("abc", "ABC"), false, "StringUtils.equals(\"abc\", \"ABC\") = false");
});
QUnit.test( "equalsIgnoreCase(String str1, String str2) ", function( assert ) {
	assert.equal( StringUtils.equalsIgnoreCase(null, null), true, "StringUtils.equalsIgnoreCase(null, null) = true");
	assert.equal( StringUtils.equalsIgnoreCase(null, "abc"), false, "StringUtils.equalsIgnoreCase(null, \"abc\") = false");
	assert.equal( StringUtils.equalsIgnoreCase("abc", null), false, "StringUtils.equalsIgnoreCase(\"abc\", null) = false");
	assert.equal( StringUtils.equalsIgnoreCase("abc", "abc"), true, "StringUtils.equalsIgnoreCase(\"abc\", \"abc\") = true");
	assert.equal( StringUtils.equalsIgnoreCase("abc", "ABC"), true, "StringUtils.equalsIgnoreCase(\"abc\", \"ABC\") = false");
});
QUnit.skip( "getCommonPrefix(String[] strs) ", function( assert ) {});
QUnit.skip( "getLevenshteinDistance(String s, String t) ", function( assert ) {});
QUnit.test( "indexOf(String str, char/String search) ", function( assert ) {
	assert.equal( StringUtils.indexOf(null, "a"), -1, "StringUtils.indexOf(null, *) = -1");
	assert.equal( StringUtils.indexOf("", "a"), -1, "StringUtils.indexOf(\"\", *) = -1");
	assert.equal( StringUtils.indexOf("aabaabaa", 'a'), 0, "StringUtils.indexOf(\"aabaabaa\", \'a\') = 0");
	assert.equal( StringUtils.indexOf("aabaabaa", 'b'), 2, "StringUtils.indexOf(\"aabaabaa\", \'b\') = 2");
});
QUnit.test( "indexOf(String str, char/String searchChar, int startPos) ", function( assert ) {
	assert.equal( StringUtils.indexOf(null, "a", 0), -1, "StringUtils.indexOf(null, *, *) = -1");
	assert.equal( StringUtils.indexOf("", "a", 0), -1, "StringUtils.indexOf(\"\", *, *) = -1");
	assert.equal( StringUtils.indexOf("aabaabaa", 'b', 0), 2, "StringUtils.indexOf(\"aabaabaa\", \'b\', 0) = 2");
	assert.equal( StringUtils.indexOf("aabaabaa", 'b', 3), 5, "StringUtils.indexOf(\"aabaabaa\", \'b\', 3) = 5");
	assert.equal( StringUtils.indexOf("aabaabaa", 'b', 9), -1, "StringUtils.indexOf(\"aabaabaa\", \'b\', 9) = -1");
	assert.equal( StringUtils.indexOf("aabaabaa", 'b', -1), 2, "StringUtils.indexOf(\"aabaabaa\", \'b\', -1) = 2");
	assert.equal( StringUtils.indexOf("aabaabaa", 'b', "p"), 2, "StringUtils.indexOf(\"aabaabaa\", \'b\', \"p\") = 2");
});
QUnit.skip( "indexOfAny(String str, char[] searchChars) ", function( assert ) {});
QUnit.skip( "indexOfAny(String str, String searchChars) ", function( assert ) {});
QUnit.skip( "indexOfAny(String str, String[] searchStrs) ", function( assert ) {});
QUnit.skip( "indexOfAnyBut(String str, char[] searchChars) ", function( assert ) {
	//TODO: Dudas sobre esta definicion en tipo
	// assert.equal( StringUtils.indexOfAnyBut(null, *), -1, "StringUtils.indexOfAnyBut(null, *)           = -1");
	// assert.equal( StringUtils.indexOfAnyBut("", *), -1, "StringUtils.indexOfAnyBut("", *)             = -1");
	// assert.equal( StringUtils.indexOfAnyBut(*, null), -1, "StringUtils.indexOfAnyBut(*, null)           = -1");
	// assert.equal( StringUtils.indexOfAnyBut(*, []), -1, "StringUtils.indexOfAnyBut(*, [])             = -1");
	// assert.equal( StringUtils.indexOfAnyBut("zzabyycdxx",['za']),  3, "StringUtils.indexOfAnyBut(\"zzabyycdxx\",[\'z\a\']) =  3");
	// assert.equal( StringUtils.indexOfAnyBut("zzabyycdxx", ['']),  0, "StringUtils.indexOfAnyBut(\"zzabyycdxx\", [\'\'])  =  0");
	// assert.equal( StringUtils.indexOfAnyBut("aba", 'ab'), -1, "StringUtils.indexOfAnyBut(\"aba\", \'ab\')       = -1");
});
QUnit.test( "indexOfAnyBut(String str, String searchChars) ", function( assert ) {
	assert.equal( StringUtils.indexOfAnyBut(null, "abc"), -1, "StringUtils.indexOfAnyBut(null, *) = -1");
	assert.equal( StringUtils.indexOfAnyBut("abc", "abc"), -1, "StringUtils.indexOfAnyBut(\"\", *)= -1");
	assert.equal( StringUtils.indexOfAnyBut("abc", null), -1, "StringUtils.indexOfAnyBut(*, null) = -1");
	assert.equal( StringUtils.indexOfAnyBut("abc", ""), -1, "StringUtils.indexOfAnyBut(*, \"\") = -1");
	assert.equal( StringUtils.indexOfAnyBut("zzabyycdxx", "za"),  3, "StringUtils.indexOfAnyBut(\"zzabyycdxx\", \"za\") =  3");
	assert.equal( StringUtils.indexOfAnyBut("zzabyycdxx", ""),  -1, "StringUtils.indexOfAnyBut(\"zzabyycdxx\", \"\")   =  0");
	assert.equal( StringUtils.indexOfAnyBut("aba","ab"), -1, "StringUtils.indexOfAnyBut(\"aba\",\"ab\")         = -1");
});
QUnit.test( "indexOfDifference(String[] strs) ", function( assert ) {
	assert.equal( StringUtils.indexOfDifference(null)                              , -1, "StringUtils.indexOfDifference(null)                                  = -1");
	assert.equal( StringUtils.indexOfDifference([])                                , -1, "StringUtils.indexOfDifference([])                                    = -1");
	assert.equal( StringUtils.indexOfDifference(["abc"])                           , -1, "StringUtils.indexOfDifference([\"abc\"])                             = -1");
	assert.equal( StringUtils.indexOfDifference([null, null])                      , -1, "StringUtils.indexOfDifference([null, null])                          = -1");
	assert.equal( StringUtils.indexOfDifference(["", ""])                          , -1, "StringUtils.indexOfDifference([\"\", \"\"])                          = -1");
	assert.equal( StringUtils.indexOfDifference(["", null])                        ,  0, "StringUtils.indexOfDifference([\"\", null])                          =  0");
	assert.equal( StringUtils.indexOfDifference(["abc", null, null])               ,  0, "StringUtils.indexOfDifference([\"abc\", null, null])                 =  0");
	assert.equal( StringUtils.indexOfDifference([null, null, "abc"])               ,  0, "StringUtils.indexOfDifference([null, null, \"abc\"])                 =  0");
	assert.equal( StringUtils.indexOfDifference(["", "abc"])                       ,  0, "StringUtils.indexOfDifference([\"\", \"abc\"])                       =  0");
	assert.equal( StringUtils.indexOfDifference(["abc", ""])                       ,  0, "StringUtils.indexOfDifference([\"abc\", \"\"])                       =  0");
	assert.equal( StringUtils.indexOfDifference(["abc", "abc"])                    , -1, "StringUtils.indexOfDifference([\"abc\", \"abc\"])                    = -1");
	assert.equal( StringUtils.indexOfDifference(["abc", "a"])                      ,  1, "StringUtils.indexOfDifference([\"abc\", \"a\"])                      =  1");
	assert.equal( StringUtils.indexOfDifference(["ab", "abxyz"])                   ,  2, "StringUtils.indexOfDifference([\"ab\", \"abxyz\"])                   =  2");
	assert.equal( StringUtils.indexOfDifference(["abcde", "abxyz"])                ,  2, "StringUtils.indexOfDifference([\"abcde\", \"abxyz\"])                =  2");
	assert.equal( StringUtils.indexOfDifference(["abcde", "xyz"])                  ,  0, "StringUtils.indexOfDifference([\"abcde\", \"xyz\"])                  =  0");
	assert.equal( StringUtils.indexOfDifference(["xyz", "abcde"])                  ,  0, "StringUtils.indexOfDifference([\"xyz\", \"abcde\"])                  =  0");
	assert.equal( StringUtils.indexOfDifference(["i am a machine", "i am a robot"]),  7, "StringUtils.indexOfDifference([\"i am a machine\", \"i am a robot\"])=  7");
});
QUnit.test( "indexOfDifference(String str1, String str2) ", function( assert ) {
	assert.equal( StringUtils.indexOfDifference(null, null)      , -1, "StringUtils.indexOfDifference(null, null)          = -1");
	assert.equal( StringUtils.indexOfDifference("", "")          , -1, "StringUtils.indexOfDifference(\"\", \"\")          = -1");
	assert.equal( StringUtils.indexOfDifference("", "abc")       ,  0, "StringUtils.indexOfDifference(\"\", \"abc\")       =  0");
	assert.equal( StringUtils.indexOfDifference("abc", "")       ,  0, "StringUtils.indexOfDifference(\"abc\", \"\")       =  0");
	assert.equal( StringUtils.indexOfDifference("abc", "abc")    , -1, "StringUtils.indexOfDifference(\"abc\", \"abc\")    = -1");
	assert.equal( StringUtils.indexOfDifference("ab", "abxyz")   ,  2, "StringUtils.indexOfDifference(\"ab\", \"abxyz\")   =  2");
	assert.equal( StringUtils.indexOfDifference("abcde", "abxyz"),  2, "StringUtils.indexOfDifference(\"abcde\", \"abxyz\")=  2");
	assert.equal( StringUtils.indexOfDifference("abcde", "xyz")  ,  0, "StringUtils.indexOfDifference(\"abcde\", \"xyz\")  =  0");
});
QUnit.skip( "indexOfIgnoreCase(String str, String searchStr) ", function( assert ) {});
QUnit.skip( "indexOfIgnoreCase(String str, String searchStr, int startPos) ", function( assert ) {});
QUnit.skip( "isAllLowerCase(String str) ", function( assert ) {});
QUnit.skip( "isAllUpperCase(String str) ", function( assert ) {});
QUnit.test( "isAlpha(String str) ", function( assert ) {
	assert.equal( StringUtils.isAlpha(null), false,"StringUtils.isAlpha(null) = false");
	assert.equal( StringUtils.isAlpha(""), true,"StringUtils.isAlpha(\"\") = true");
	assert.equal( StringUtils.isAlpha("  "), false,"StringUtils.isAlpha(\"  \") = false");
	assert.equal( StringUtils.isAlpha("abc"), true, "StringUtils.isAlpha(\"abc\") = true");
	assert.equal( StringUtils.isAlpha("ab2c"), false,"StringUtils.isAlpha(\"ab2c\") = false");
	assert.equal( StringUtils.isAlpha("ab-c"), false, "StringUtils.isAlpha(\"ab-c\") = false");
});
QUnit.skip( "isAlphanumeric(String str) ", function( assert ) {});
QUnit.skip( "isAlphanumericSpace(String str) ", function( assert ) {});
QUnit.skip( "isAlphaSpace(String str) ", function( assert ) {});
QUnit.skip( "isAsciiPrintable(String str) ", function( assert ) {});
QUnit.test( "isBlank(String str) ", function( assert ) {
	assert.equal( StringUtils.isBlank(null), true, "StringUtils.isBlank(null) = true");
	assert.equal( StringUtils.isBlank(""), true, "StringUtils.isBlank(\"\") = true");
	assert.equal( StringUtils.isBlank(" "), true, "StringUtils.isBlank(\" \") = true");
	assert.equal( StringUtils.isBlank("bob"), false, "StringUtils.isBlank(\"bob\") = false");
	assert.equal( StringUtils.isBlank("  bob  "), false, "StringUtils.isBlank(\"  bob  \") = false");
});
QUnit.test( "isNotBlank(String str) ", function( assert ) {
	assert.equal( StringUtils.isNotBlank(null), false, "StringUtils.isNotBlank(null) = false");
	assert.equal( StringUtils.isNotBlank(""), false, "StringUtils.isNotBlank(\"\") = false");
	assert.equal( StringUtils.isNotBlank(" "), false, "StringUtils.isNotBlank(\" \") = false");
	assert.equal( StringUtils.isNotBlank("bob"), true, "StringUtils.isNotBlank(\"bob\") = true");
	assert.equal( StringUtils.isNotBlank("  bob  "), true, "StringUtils.isNotBlank(\"  bob  \") = true");
});
QUnit.test( "isNotEmpty(String str) ", function( assert ) {
	assert.equal( StringUtils.isNotEmpty(null), false, "StringUtils.isNotEmpty(null) = false");
	assert.equal( StringUtils.isNotEmpty(""), false, "StringUtils.isNotEmpty(\"\") = false");
	assert.equal( StringUtils.isNotEmpty(" "), true, "StringUtils.isNotEmpty(\" \") = true");
	assert.equal( StringUtils.isNotEmpty("bob"), true, "StringUtils.isNotEmpty(\"bob\") = true");
	assert.equal( StringUtils.isNotEmpty("  bob  "), true, "StringUtils.isNotEmpty(\"  bob  \") = true");
});
QUnit.test( "isNumeric(String str) ", function( assert ) {
	assert.ok(StringUtils.isNumeric(null) == false,"StringUtils.isNumeric(null)= false");
	assert.ok(StringUtils.isNumeric("")== true, "StringUtils.isNumeric(\"\") = true");
	assert.ok(StringUtils.isNumeric("  ")== false, "StringUtils.isNumeric(\"  \") = false");
	assert.ok(StringUtils.isNumeric("123")== true, "StringUtils.isNumeric(\"123\") = true");
	assert.ok(StringUtils.isNumeric("12 3")== false, "StringUtils.isNumeric(\"12 3\") = false");
	assert.ok(StringUtils.isNumeric("ab2c")== false, "StringUtils.isNumeric(\"ab2c\") = false");
	assert.ok(StringUtils.isNumeric("12-3")== false, "StringUtils.isNumeric(\"12-3\") = false");
	assert.ok(StringUtils.isNumeric("12.3")== false, "StringUtils.isNumeric(\"12.3\") = false");
});
QUnit.test( "isNumericSpace(String str) ", function( assert ) {
	assert.ok(StringUtils.isNumericSpace(null) == false,"StringUtils.isNumericSpace(null)= false");
	assert.ok(StringUtils.isNumericSpace("") == true, "StringUtils.isNumericSpace(\"\") = true");
	assert.ok(StringUtils.isNumericSpace("  ")== true, "StringUtils.isNumericSpace(\"  \") = true");
	assert.ok(StringUtils.isNumericSpace("123")== true, "StringUtils.isNumericSpace(\"123\") = true");
	assert.ok(StringUtils.isNumericSpace("12 3")== true, "StringUtils.isNumericSpace(\"12 3\") = true");
	assert.ok(StringUtils.isNumericSpace("ab2c")== false, "StringUtils.isNumericSpace(\"ab2c\") = false");
	assert.ok(StringUtils.isNumericSpace("12-3")== false, "StringUtils.isNumericSpace(\"12-3\") = false");
	assert.ok(StringUtils.isNumericSpace("12.3")== false, "StringUtils.isNumericSpace(\"12.3\") = false");	
});
QUnit.skip( "isWhitespace(String str) ", function( assert ) {});
QUnit.skip( "join(Collection collection, char separator) ", function( assert ) {});
QUnit.skip( "join(Collection collection, String separator) ", function( assert ) {});
QUnit.skip( "join(Iterator iterator, char separator) ", function( assert ) {});
QUnit.skip( "join(Iterator iterator, String separator) ", function( assert ) {});
QUnit.skip( "join(Object[] array) ", function( assert ) {});
QUnit.skip( "join(Object[] array, char separator) ", function( assert ) {});
QUnit.skip( "join(Object[] array, char separator, int startIndex, int endIndex) ", function( assert ) {});
QUnit.skip( "join(Object[] array, String separator) ", function( assert ) {});
QUnit.skip( "join(Object[] array, String separator, int startIndex, int endIndex) ", function( assert ) {});
QUnit.skip( "lastIndexOf(String str, char searchChar) ", function( assert ) {});
QUnit.skip( "lastIndexOf(String str, char searchChar, int startPos) ", function( assert ) {});
QUnit.skip( "lastIndexOf(String str, String searchStr) ", function( assert ) {});
QUnit.skip( "lastIndexOf(String str, String searchStr, int startPos) ", function( assert ) {});
QUnit.skip( "lastIndexOfAny(String str, String[] searchStrs) ", function( assert ) {});
QUnit.skip( "lastIndexOfIgnoreCase(String str, String searchStr) ", function( assert ) {});
QUnit.skip( "lastIndexOfIgnoreCase(String str, String searchStr, int startPos) ", function( assert ) {});
QUnit.skip( "lastOrdinalIndexOf(String str, String searchStr, int ordinal) ", function( assert ) {});
QUnit.skip( "left(String str, int len) ", function( assert ) {});
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
QUnit.test( "size(String str)", function( assert ) {
	assert.equal( StringUtils.size(null), 0, "StringUtils.size(null) = 0");
	assert.equal( StringUtils.size(undefined), 0, "StringUtils.size(undefined) = 0");
	assert.equal( StringUtils.size("abc"), 3, "StringUtils.size(\"abc\") = 3");	
});
QUnit.test( "lowerCase(String str) ", function( assert ) {
	assert.equal( StringUtils.lowerCase(null), null, "StringUtils.lowerCase(null)  = null");
	assert.equal( StringUtils.lowerCase(""), "", "StringUtils.lowerCase(\"\") = \"\"");
	assert.equal( StringUtils.lowerCase("aBc"), "abc", "StringUtils.lowerCase(\"aBc\") = \"abc\"");
});
QUnit.skip( "mid(String str, int pos, int len) ", function( assert ) {});
QUnit.skip( "normalizeSpace(String str) ", function( assert ) {});
QUnit.skip( "ordinalIndexOf(String str, String searchStr, int ordinal) ", function( assert ) {});
QUnit.skip( "overlay(String str, String overlay, int start, int end) ", function( assert ) {});
QUnit.skip( "remove(String str, char remove) ", function( assert ) {});
QUnit.skip( "remove(String str, String remove) ", function( assert ) {});
QUnit.skip( "removeEnd(String str, String remove) ", function( assert ) {});
QUnit.skip( "removeEndIgnoreCase(String str, String remove) ", function( assert ) {});
QUnit.skip( "removeStart(String str, String remove) ", function( assert ) {});
QUnit.skip( "removeStartIgnoreCase(String str, String remove) ", function( assert ) {});
QUnit.skip( "repeat(String str, int repeat) ", function( assert ) {});
QUnit.skip( "repeat(String str, String separator, int repeat) ", function( assert ) {});
QUnit.skip( "replace(String text, String searchString, String replacement) ", function( assert ) {});
QUnit.skip( "replace(String text, String searchString, String replacement, int max) ", function( assert ) {});
QUnit.skip( "replaceChars(String str, char searchChar, char replaceChar) ", function( assert ) {});
QUnit.skip( "replaceChars(String str, String searchChars, String replaceChars) ", function( assert ) {});
QUnit.skip( "replaceEach(String text, String[] searchList, String[] replacementList) ", function( assert ) {});
QUnit.skip( "replaceEachRepeatedly(String text, String[] searchList, String[] replacementList) ", function( assert ) {});
QUnit.skip( "replaceOnce(String text, String searchString, String replacement) ", function( assert ) {});
QUnit.skip( "reverse(String str) ", function( assert ) {});
QUnit.skip( "reverseDelimited(String str, char separatorChar) ", function( assert ) {});
QUnit.skip( "right(String str, int len) ", function( assert ) {});
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
QUnit.skip( "split(String str) ", function( assert ) {});
QUnit.skip( "split(String str, char separatorChar) ", function( assert ) {});
QUnit.skip( "split(String str, String separatorChars) ", function( assert ) {});
QUnit.skip( "split(String str, String separatorChars, int max) ", function( assert ) {});
QUnit.skip( "splitByCharacterType(String str) ", function( assert ) {});
QUnit.skip( "splitByCharacterTypeCamelCase(String str) ", function( assert ) {});
QUnit.skip( "splitByWholeSeparator(String str, String separator) ", function( assert ) {});
QUnit.skip( "splitByWholeSeparator(String str, String separator, int max) ", function( assert ) {});
QUnit.skip( "splitByWholeSeparatorPreserveAllTokens(String str, String separator) ", function( assert ) {});
QUnit.skip( "splitByWholeSeparatorPreserveAllTokens(String str, String separator, int max) ", function( assert ) {});
QUnit.skip( "splitPreserveAllTokens(String str) ", function( assert ) {});
QUnit.skip( "splitPreserveAllTokens(String str, char separatorChar) ", function( assert ) {});
QUnit.skip( "splitPreserveAllTokens(String str, String separatorChars) ", function( assert ) {});
QUnit.skip( "splitPreserveAllTokens(String str, String separatorChars, int max) ", function( assert ) {});
QUnit.skip( "startsWith(String str, String prefix) ", function( assert ) {});
QUnit.skip( "startsWithAny(String string, String[] searchStrings) ", function( assert ) {});
QUnit.skip( "startsWithIgnoreCase(String str, String prefix) ", function( assert ) {});
QUnit.skip( "strip(String str) ", function( assert ) {});
QUnit.skip( "strip(String str, String stripChars) ", function( assert ) {});
QUnit.skip( "stripAll(String[] strs) ", function( assert ) {});
QUnit.skip( "stripAll(String[] strs, String stripChars) ", function( assert ) {});
QUnit.skip( "stripEnd(String str, String stripChars) ", function( assert ) {});
QUnit.skip( "stripStart(String str, String stripChars) ", function( assert ) {});
QUnit.skip( "stripToEmpty(String str) ", function( assert ) {});
QUnit.skip( "stripToNull(String str) ", function( assert ) {});
QUnit.test( "substring(String str, int start) ", function( assert ) {
	assert.equal( StringUtils.substring(null, 5)  ,  null, "StringUtils.substring(null, *)     =    null");
	assert.equal( StringUtils.substring("", 5)    ,    "", "StringUtils.substring(\"\", *)     =    \"\"");
	assert.equal( StringUtils.substring("abc", 0) , "abc", "StringUtils.substring(\"abc\", 0)  = \"abc\"");
	assert.equal( StringUtils.substring("abc", 2) ,   "c", "StringUtils.substring(\"abc\", 2)  =   \"c\"");
	assert.equal( StringUtils.substring("abc", 4) ,    "", "StringUtils.substring(\"abc\", 4)  =    \"\"");
	assert.equal( StringUtils.substring("abc", -2),  "bc", "StringUtils.substring(\"abc\", -2) =  \"bc\"");
	assert.equal( StringUtils.substring("abc", -4), "abc", "StringUtils.substring(\"abc\", -4) = \"abc\"");
});
QUnit.test( "substring(String str, int start, int end) ", function( assert ) {
	assert.equal( StringUtils.substring(null, 5, 5)   , null, "StringUtils.substring(null, *, *)      =   null");
	assert.equal( StringUtils.substring("", 5 ,  5)   ,   "", "StringUtils.substring(\"\", * ,  *)    =   \"\"");
	assert.equal( StringUtils.substring("abc", 0, 2)  , "ab", "StringUtils.substring(\"abc\", 0, 2)   = \"ab\"");
	assert.equal( StringUtils.substring("abc", 2, 0)  ,   "", "StringUtils.substring(\"abc\", 2, 0)   =   \"\"");
	assert.equal( StringUtils.substring("abc", 2, 4)  ,  "c", "StringUtils.substring(\"abc\", 2, 4)   =  \"c\"");
	assert.equal( StringUtils.substring("abc", 4, 6)  ,   "", "StringUtils.substring(\"abc\", 4, 6)   =   \"\"");
	assert.equal( StringUtils.substring("abc", 2, 2)  ,   "", "StringUtils.substring(\"abc\", 2, 2)   =   \"\"");
	assert.equal( StringUtils.substring("abc", -2, -1),  "b", "StringUtils.substring(\"abc\", -2, -1) =  \"b\"");
	assert.equal( StringUtils.substring("abc", -4, 2) , "ab", "StringUtils.substring(\"abc\", -4, 2)  = \"ab\"");
});
QUnit.skip( "substringAfter(String str, String separator) ", function( assert ) {});
QUnit.skip( "substringAfterLast(String str, String separator) ", function( assert ) {});
QUnit.skip( "substringBefore(String str, String separator) ", function( assert ) {});
QUnit.skip( "substringBeforeLast(String str, String separator) ", function( assert ) {});
QUnit.skip( "substringBetween(String str, String tag) ", function( assert ) {});
QUnit.skip( "substringBetween(String str, String open, String close) ", function( assert ) {});
QUnit.skip( "substringsBetween(String str, String open, String close) ", function( assert ) {});
QUnit.skip( "swapCase(String str) ", function( assert ) {});
QUnit.test( "trim(String str) ", function( assert ) {
	assert.equal( StringUtils.trim(null), null, "StringUtils.trim(null) = null");
	assert.equal( StringUtils.trim(""), "", "StringUtils.trim(\"\") = \"\"");
	assert.equal( StringUtils.trim("     "), "", "StringUtils.trim(\"     \") = \"\"");
	assert.equal( StringUtils.trim("abc"), "abc", "StringUtils.trim(\"abc\") = \"abc\"");
	assert.equal( StringUtils.trim("    abc    "), "abc","StringUtils.trim(\"    abc    \") = \"abc\"");
});
QUnit.test( "trimToEmpty(String str) ", function( assert ) {
	assert.equal( StringUtils.trimToEmpty(null), "", "StringUtils.trimToEmpty(null) = \"\"");
	assert.equal( StringUtils.trimToEmpty(""), "", "StringUtils.trimToEmpty(\"\") = \"\"");
	assert.equal( StringUtils.trimToEmpty("     "), "", "StringUtils.trimToEmpty(\"     \") = \"\"");
	assert.equal( StringUtils.trimToEmpty("abc"), "abc", "StringUtils.trimToEmpty(\"abc\") = \"abc\"");
	assert.equal( StringUtils.trimToEmpty("    abc    "), "abc","StringUtils.trimToEmpty(\"    abc    \") = \"abc\"");
});
QUnit.test( "trimToNull(String str) ", function( assert ) {
	assert.equal( StringUtils.trimToNull(null), null, "StringUtils.trimToNull(null) = null");
	assert.equal( StringUtils.trimToNull(""), null, "StringUtils.trimToNull(\"\") = null");
	assert.equal( StringUtils.trimToNull("     "), null, "StringUtils.trimToNull(\"     \") = null");
	assert.equal( StringUtils.trimToNull("abc"), "abc", "StringUtils.trimToNull(\"abc\") = \"abc\"");
	assert.equal( StringUtils.trimToNull("    abc    "), "abc","StringUtils.trimToNull(\"    abc    \") = \"abc\"");
});
QUnit.skip( "uncapitalize(String str) ", function( assert ) {});
QUnit.test( "upperCase(String str) ", function( assert ) {
	assert.equal( StringUtils.upperCase(null), null, "StringUtils.upperCase(null) = null");
	assert.equal( StringUtils.upperCase(""), "", "StringUtils.upperCase(\"\") = \"\"")
	assert.equal( StringUtils.upperCase("aBc"), "ABC","StringUtils.upperCase(\"aBc\") = \"ABC\"");
});