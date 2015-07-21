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

