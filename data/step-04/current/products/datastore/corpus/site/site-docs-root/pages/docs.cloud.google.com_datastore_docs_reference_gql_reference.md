---
title: "GQL Reference \_|\_ Datastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/reference/gql_reference
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/reference/gql_reference
  title: "GQL Reference \_|\_ Datastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Reference
Send feedback
GQL Reference
Stay organized with collections
Save and categorize content based on your preferences.
With GQL, you can write SQL-like queries for Firestore in Datastore mode.
GQL maps roughly to SQL: you can think of a GQL kind as a SQL table, a GQL
entity as a SQL row, and a GQL property as a SQL column. However, a SQL
row-column lookup is limited to a single value, whereas in GQL a
property can be a multiple value property.
The following Cloud Client Libraries for Firestore in Datastore mode support GQL:
C#
Java
PHP
Ruby
GQL Versions
You need different versions of GQL depending on where you run queries. There are
two GQL references:
GQL Reference, for the GQL grammar used in the v1 and v1beta3 versions of the
Datastore API and in the Google Cloud console Datastore Viewer (use
the reference on this page).
GQL for the Python NDB and DB client libraries , for the GQL grammar used
in the NDB and DB client libraries.
Grammar
The GQL grammar is summarized as follows:
< aggregation_query > : =
(
SELECT ( < aggregation > + , )
[ FROM < kind > ]
[ WHERE < compound - condition > ]
|
AGGREGATE ( < aggregation > + , )
OVER
"("
< query >
")"
)
< aggregation > : = ( COUNT "(" "*" ")"
| COUNT_UP_TO "(" < integer - literal > ")"
| SUM "(" < property - name > ")"
| AVG "(" < property - name > ")" )
[ AS < alias > ]
< alias > : = < name >
< query > : =
SELECT ( "*"
| < property - name > + ,
| DISTINCT < property - name > + ,
| DISTINCT ON "(" < property - name > + , ")" "*"
| DISTINCT ON "(" < property - name > + , ")" < property - name > + , )
[ FROM < kind > ]
[ WHERE < compound - condition > ]
[ ORDER BY ( < property - name > [ ASC | DESC ] ) + , ]
[ LIMIT ( < result - position > |
FIRST "(" < result - position > ,
< result - position > ")" ) ]
[ OFFSET < result - position > [ "+" < result - position > ] ]
< compound - condition > :=
< condition > AND < compound - condition >
| < condition > OR < compound - condition >
| "(" < compound - condition > ")"
| < condition >
< condition > : =
< property - name > IS NULL
| < property - name > < forward - comparator > < value >
| < value > < backward - comparator > < property - name >
< forward - comparator > :=
< either - comparator >
| CONTAINS
| HAS ANCESTOR
| IN
| NOT IN
< backward - comparator > :=
< either - comparator >
| IN
| HAS DESCENDANT
< either - comparator > :=
=
| <
| < =
| >
| > =
| !=
< result - position > := < binding - site > | < integer - literal >
< value > : =
< binding - site >
| < synthetic - literal >
| < string - literal >
| < integer - literal >
| < double - literal >
| < boolean - literal >
| < null - literal >
< synthetic - literal > :=
KEY "("
[ "PROJECT" "(" < string - literal > ")" "," ]
[ "NAMESPACE" "(" < string - literal > ")" "," ]
< key - path - element > + , ")"
| ARRAY "(" < value > + , ")"
| BLOB "(" < string - literal > ")"
| DATETIME "(" < string - literal > ")"
< key - path - element > :=
< kind > "," ( < integer - literal > | < string - literal > )
< kind > : = < name >
< property - name > := < name > + .
In the above grammar list, note that:
The symbol +, after an expression indicates
that it can be repeated, with repeated expressions separated by a comma.
The boolean AND operator has higher precedence than the OR operator.
For example, a clause like a OR b AND c parses to a OR (b AND c) , and
parenthesis would need to be used to achieve (a OR b) AND c .
The following are some examples that return entire entities:
SELECT * FROM myKind WHERE myProp > = 100 AND myProp < 200
SELECT * FROM myKind LIMIT 50 OFFSET @startCursor
SELECT * FROM myKind ORDER BY myProp DESC
Every GQL query string always begins with SELECT <something> , where
<something> is one of the following:
*
<property-list> , a comma delimited list of properties to be returned from the query.
__key__ , which returns keys only.
Similar to SQL, GQL keywords are case insensitive. Kind and property names are
case sensitive.
Note: When a query string consists of SELECT <property-list> , the query
is a projection query .
A GQL query returns zero or more entity results of the requested kind, with each
result consisting of an entire entity or some subset of the properties of the
entity, or even just the entity key . For example,
SELECT * FROM myKind
SELECT __key__ FROM myKind
SELECT title, year FROM Song WHERE composer = 'Lennon, John'
A result list produced by SELECT * or SELECT __key__ never contains
duplicates. A result list produced by SELECT <property-list> may contain
multiple results from one entity, typically when any of those properties are multiple value properties.
You can also use fully-qualified property names, in the form of
<kind>.<property> . This statement:
SELECT Person.name FROM Person
is identical to:
SELECT name FROM Person
If a property name begins with the name of its kind followed by a ".", you
must fully qualify the property name in GQL. For example, given a kind named
Product that has a property named Product.Name , you can retrieve matching
results using:
SELECT Product.Product.Name FROM Product
But this would not match any results:
SELECT Product.Name FROM Product
Tip: SELECT __key__ or SELECT <property-list> queries are faster than
SELECT * queries, and are cheaper, because they are charged at the less
expensive small operations rates, rather than at the read rates. See also
projection queries .
Only SELECT is supported by GQL, you must use a client
library or the
API for mutation operations.
Clauses
The following optional SELECT clauses are recognized:
Clause
Description
DISTINCT
Specifies that only completely unique results will be returned. Normally used only with projection queries because non-projection queries return unique results. If you use DISTINCT in a projection query where more than one entity has the same values in the properties being projected, only the first result is returned. Note that a query string can use either DISTINCT or DISTINCT ON , but not both.
DISTINCT ON
Specifies that only the first result for each distinct combination of values for the specified properties will be returned. Used only with projection queries . The properties specified in the DISTINCT ON clause must be a subset of the properties specified for the projection. DISTINCT ON allows you to specify that only part of the projection is required to be distinct. SELECT DISTINCT a, b, c is identical to SELECT DISTINCT ON (a, b, c) a, b, c
Note that a query string can use either DISTINCT or DISTINCT ON , but not both.
FROM
Limits the result set to those entities of the given kind. A query string without a FROM clause is called a kindless query and the only condition allowed in the WHERE clause is one that specifies a __key__ property.
WHERE
Limits the result set to those entities that meet one or more conditions. Each condition compares a property of the entity with a value using a comparison operator. If multiple conditions are combined with the AND keyword, then an entity must meet all of the conditions to be returned by the query. GQL does not have an OR operator.
ORDER BY
Causes results to be sorted by the specified properties. The ORDER BY clause can specify multiple sort orders as a comma-delimited list, evaluated from left to right. Specify ASC for ascending or DESC for descending order. Note that the order is applied to each property. If the direction is not specified, it defaults to ASC . If no ORDER BY clause is specified, the order of the results is undefined and may change over time.
LIMIT
Limits query results to a count, to results preceding a cursor, or both. Often used to page through results of a query. If LIMIT has two <result-position> s, one must be a cursor and the other must be an integer. (Note that OFFSET and LIMIT are independent.)
OFFSET
Specifies offsets into the result set: either a cursor, or a count, or both. If OFFSET has two <result-position> s, the left one must be a cursor and the right one must be an integer. Note that an OFFSET with an integer starts at the beginning or at the cursor, then discards the specified number of entities, and so you still incur the cost of reading those entities. (Note also that OFFSET and LIMIT are independent.)
How to form entity and property names
Kind and property names are formed as follows:
With any sequence of letters, digits, underscores, dollar
signs, or unicode characters in the range from U+0080 to U+FFFF (inclusive),
so long as the name does not begin with a digit. For example, foo , bar17 ,
x_y , big$bux , __qux__ .
You can also use a non-empty backquoted string:
`fig-bash` or `x.y` .
A backquote character can be represented in a backquoted name by doubling it,
for example, `silly``putty` . A backquoted name can contain
escaped characters .
An unquoted name can match a predefined name, but must not match a keyword. A
backquoted name can contain any character except a newline. (It can contain a
newline via \n , but not as a raw newline.)
Names are case-sensitive.
How to form literals
You can use the following literals in a comparison:
Literal Type
Description
string
Formed following these rules: Can be a single-quoted or double-quoted string, such as 'foo' or "foo" .
A ' character may be represented in a single-quoted string and a " character may be represented in a double-quoted string by doubling it: 'Joe''s Diner' or "Expected ""." .
Can contain \ -escaped characters.
Can contain any character except a newline.
integer
A sequence of decimal digits with the following options or characteristics: An optional initial plus or minus character.
Must be representable as a signed 64 bit integer.
Examples: 0 , 11 , +5831 , -37 , or 3827438927 .
double
A sequence of decimal digits with the following options or characteristics: An optional initial plus or minus character.
Contains either a decimal point or an exponent consisting of the letter E (or e ) with an optional plus or minus character.
Must be representable as an IEEE 64 bit floating point number.
Examples: 0.0 , +58.31 , -37.0 , 3827438927.0 , -3. , +.1 , 314159e-5 , or 6.022E23 .
boolean
Can be the values TRUE or FALSE , case-insensitive.
null
Represents NULL . Case insensitive.
Synthetic literals
A synthetic literal is a value that is constructed by a function. The following
table lists the supported synthetic literals:
Literal Name
Description
KEY
KEY([PROJECT(<project>),] [NAMESPACE(<namespace>),] <key-path-element>*,) represents a key. If <project> and <namespace> are not supplied, defaults from the current query context are used. Entities are partitioned into various subsets, each used by different projects and different namespaces within a project and so forth, with an ID (partition ID) assigned to each entity subset. The <key-path-element> is an entity path , which is an even-length comma-separated list of kinds alternating with either integer ids or string names. The integers must be greater than 0 and the strings must not be empty.
BLOB
BLOB(<string>) represents a blob encoded as <string> via base-64 encoding with character set [A-Za-z0-9-_] and no padding.
DATETIME
DATETIME(<string>) represents a timestamp. <string> must be in the time format specified in RFC 3339 section 5.6 . (However, the second precision is limited to microseconds and leap seconds are omitted.) This standard format is: YYYY-MM-DDThh:mm:ss.SSSSSS+zz:ZZ where: Year YYYY is a four digit value between 0001 and 9999 , inclusive. For example, 2013-09-29T09:30:20.00002-08:00
Month MM must be two digits consisting of values between 01 and 12 , inclusive. For example, 09 .
Day DD must be two digits consisting of values between 01 and 31 , inclusive. For example, 29 .
Date YYYY-MM-DD must be a valid date in the Gregorian calendar. For example, February 29, 2013 would be invalid.
Delimiter T must be T or t .
Hour hh must be two digits consisting of values between 0 and 23 , inclusive. For example, 09 .
Minute mm and second ss both must be two digits consisting of values between 0 and 59 , inclusive.
SSSSSS represents a fraction of a second: It may be omitted, in which case . must also be omitted. Otherwise...
The value must consist of one to six digits.
+zz:ZZ represents an offset (or time zone). For example, the Pacific time zone has an offset of -08:00 . It may be entirely replaced by Z or z to represent offset 0 . Otherwise…
Offset sign + must be + or - .
Offset hour zz has the same limitations as hour hh .
Offset minute ZZ has the same limitations as minute mm .
Neither +00:00 nor -00:00 are valid offsets.
How to escape characters
You can escape certain characters in string literals and backquoted names. The
escaped characters are case sensitive: for example \r is valid while \R is
not.
The following is a list of all the characters that can be escaped in GQL:
Character
Escaped
backslash character
\\
null character
\0
backspace character
\b
newline character
\n
return character
\r
tab character
\t
the character with decimal code 26
\Z
single quotation mark
\'
double quotation mark
"
backquote character
\`
\% (2 characters, retaining the backslash, per MySQL)
\%
\_ (2 characters, retaining the backslash, per MySQL)
\_
Operators and comparisons
Comparators are either equivalence comparators: = , IN , CONTAINS ,
= NULL , HAS ANCESTOR , and HAS DESCENDANT , or inequality comparators:
< , <= , > , >= , != , NOT IN .
Notice that the operator = is another name for the IN and CONTAINS operators. For
example, <value> = <property-name> is the same as <value> IN <property-name> ,
and <property-name> = <value> is the same as <property-name> CONTAINS <value> .
Also <property-name> IS NULL is the same as <property-name> = NULL .
A condition can also test whether one entity has another entity as an
ancestor, using the HAS ANCESTOR or HAS DESCENDANT operators. These
operators test ancestor relationships between keys. For HAS ANCESTOR ,
the left operand must be __key__ and the right operand must be a key value.
For HAS DESCENDANT , the left operand must be a key value and the right operand
must be __key__ . For more information on ancestor relationships, see
ancestor paths .
Only one property may be compared with inequality operators. When a query with
an ORDER BY clause applies an inequality operator to a property, that
property must be the first property in the ORDER BY clause.
A typical property name consists of alphanumeric characters optionally mixed with
underscore ( _ ) and dollar sign ( $ ). In other words, they match the regular expression
[a-zA-Z0-9_$]+(.[0-9_$]+)* . Property names
containing other printable characters must be quoted with backquotes,
for example: `first-name` .
Restrictions
Comparisons must be between a property name and a literal, but these can
be on either side of the operator. For example, A < 7 or 7 > A . Note,
however, that there is no inverse operator for IS NULL, so while you can have
<property-name> IS NULL , you cannot have NULL IS <property-name> .
There is no way to determine whether an entity lacks a value for a
property (that is, whether the property has no value). If you use a condition of
the form property = NULL , what will occur is a check whether a null value is
explicitly stored for that property. Datastore queries that refer to a property
will never return entities that don't have a value for that property.
Aggregations
Firestore in Datastore mode supports the following aggregations:
COUNT(*)
COUNT_UP_TO()
SUM()
AVG()
In GQL, you can write aggregations in either a pipelined form or a simplified
form. Each aggregate can have an optional alias.
The simplified form is a shortcut and supports only FROM and WHERE clauses.
To use aggregations over a query with ORDER BY , LIMIT , or OFFSET clauses,
you must use the pipelined form.
COUNT(*) and COUNT_UP_TO()
Use the COUNT(*) aggregation to return the total number of entities that match
a given query. COUNT_UP_TO(n) is a mutation of COUNT(*) where the counting
stops after it reaches n .
Pipelined form
Use the AGGREGATE keyword over a regular entity query.
AGGREGATE COUNT(*) OVER ( SELECT * FROM tasks WHERE is_done = false AND tag = 'house' )
AGGREGATE COUNT_UP_TO(5) OVER ( SELECT * FROM tasks WHERE is_done = false AND tag = 'house' )
Or over a more complicated base query:
AGGREGATE COUNT(*) AS total
OVER (
SELECT * FROM tasks WHERE is_done = true
LIMIT 5 OFFSET 10
)
AGGREGATE COUNT_UP_TO(5) AS total
OVER (
SELECT * FROM tasks WHERE is_done = true
LIMIT 5 OFFSET 10
)
Simplified form
SELECT COUNT(*) AS total
FROM tasks
WHERE is_done = false AND tag = 'house'
SELECT COUNT_UP_TO(5) AS total
FROM tasks
WHERE is_done = false AND tag = 'house'
SUM() and AVG()
Use the SUM() aggregation to return the sum of the values of the requested property. Use the AVG() aggregation to return the average of the values of the
requested property.
Pipelined form
Use the AGGREGATE keyword over a regular entity query.
AGGREGATE SUM(hours) OVER ( SELECT * FROM tasks WHERE is_done = false AND tag = 'house' )
AGGREGATE AVG(hours) OVER ( SELECT * FROM tasks WHERE is_done = false AND tag = 'house' )
Or over a more complicated base query:
AGGREGATE SUM(hours) AS total_hours
OVER (
SELECT * FROM tasks WHERE is_done = true
LIMIT 5 OFFSET 10
)
AGGREGATE AVG(hours) AS average_hours
OVER (
SELECT * FROM tasks WHERE is_done = true
LIMIT 5 OFFSET 10
)
Simplified form
SELECT SUM ( hours ) AS total_hours
FROM tasks
WHERE is_done = false AND tag = 'house'
SELECT AVG ( hours ) AS average_hours
FROM tasks
WHERE is_done = false AND tag = 'house'
Multiple Aggregations
Multiple aggregations can be combined. For example:
AGGREGATE
SUM(hours) AS total_hours,
AVG(hours) AS average_hours,
COUNT(*) AS total_tasks
OVER (
SELECT *
FROM tasks
WHERE is_done = false AND tag = 'house'
)
Tips about GQL behavior
The following table highlights some important aspects of GQL literal values and operators:
Behavior
Example
An integer value is not equal to the equivalent double: for example 4 is not equal to 4.0
SELECT * FROM Task WHERE priority = 4.0 will never yield a Task with priority set to a value of 4 ; SELECT * WHERE percent_complete = 50 will never yield a Task with percent_complete set to a value of 50.0 .
Null is a value, not the absence of a value.
There is no way to determine whether an entity lacks a value for a property (that is, whether the property has no value). If you use a condition of the form nonexistent = NULL , what will occur is a check whether a null value is explicitly stored for that property. For example, SELECT * FROM Task WHERE nonexistent = NULL will never yield an entity with no value set for property nonexistent .
A + immediately followed by an integer literal without a sign, for example +17 , is always interpreted as an explicitly positive integer, and never as a + and an implicitly positive integer. When the latter interpretation is desired, include whitespace between the + and the integer literal.
OFFSET @cursor + 17 is valid
OFFSET @cursor + +17 is valid
OFFSET @cursor +17 is invalid
The operator = functions like the IN or CONTAINS operators, which can yield some surprising results, especially when used with multi-valued properties.
SELECT * FROM Task WHERE tags = 'fun' AND tags = 'programming' might be expected never to yield any entities, but it is interpreted as SELECT * FROM Task WHERE tags CONTAINS 'fun' AND tags CONTAINS 'programming' which may certainly yield entities.
Examples
To find all of the entities of kind Person whose ages are
between 18 and 35, use this query string:
SELECT * FROM Person WHERE age >= 18 AND age <= 35
To find the three entities of kind Person whose ages are the
greatest, use this query string:
SELECT * FROM Person ORDER BY age DESC LIMIT 3
To return only the name property for each Person , use
this query string:
SELECT name FROM Person
To return only the name property for each Person ,
ordered by age , use this query string:
SELECT name FROM Person ORDER BY age
To find the keys of the entities of kind Person that have an
age of NULL , use this query string:
SELECT __key__ FROM Person WHERE age = NULL
To find all the entities, regardless of kind, that are in Amy's
entity group (i.e. Amy and Fred), use this strongly consistent ancestor
query:
SELECT * WHERE __key__ HAS ANCESTOR KEY(Person, 5629499534213120)
In the example above, 5629499534213120 is an auto-generated numeric ID for the
Person entity that represents Amy. It would return all descendants and the
root entity. If you created an entity with a custom name such as 'Amy' for the
ID instead of using an auto-generated numeric value, use this strongly
consistent query:
SELECT * WHERE __key__ HAS ANCESTOR KEY(Person, 'Amy')
Unsupported features and behavior differences from MySQL/Python GQL
If you are familiar with MySQL or the Python GQL provided by Google App Engine,
you might want to take a look at the following lists, which highlight the main
differences between those products and the Datastore GQL behavior.
MySQL Differences
MySQL supports only LIMIT / OFFSET counts . Datastore GQL also supports LIMIT / OFFSET cursors .
Datastore GQL supports an OFFSET without a LIMIT , MySQL does not.
MySQL supports an offset count via keyword LIMIT , Datastore GQL does not.
A MySQL literal string can contain a raw newline. A Datastore GQL literal string cannot.
A MySQL literal string can \ -escape any character. A Datastore GQL literal string can only \ -escape a specified list of characters .
A MySQL name can begin with a digit. A Datastore GQL name cannot.
A Datastore GQL name can contain null characters. A MySQL name cannot.
A quoted Datastore GQL name can contain \ -escaped characters. A quoted MySQL name interprets a \ as an ordinary character.
MySQL has different operators, keywords, and predefined names than Datastore GQL.
Python GQL for App Engine Differences
The Python NDB and DB App Engine client libraries use a different GQL grammar, see
the
GQL Reference for Python NDB/DB .
Note the following differences:
Python GQL supports operators != and OR . Those operators are not supported by Datastore GQL.
Datastore GQL supports the IN operator differently .
Python GQL supports functions DATETIME , DATE , TIME , KEY , USER , and GEOPT . Datastore GQL supports function DATETIME and KEY , but with different arguments. Datastore GQL supports function BLOB . Datastore GQL does not support GEOPT .
Python GQL expression ANCESTOR IS <entity-or-key-value> is represented in Datastore GQL as the more general expression __key__ HAS ANCESTOR <key-value> .
Datastore GQL supports the expression <property-name> IS NULL . Python GQL does not.
Python GQL literal strings are quoted with ' . Datastore GQL literal strings are quoted with either ' or " .
Python GQL names are quoted with " . Datastore GQL names are quoted with ` .
Datastore GQL literal strings and quoted names can contain spaces, return characters, backslashed characters, and the enclosing quote character (doubled). Python GQL literal strings and quoted names cannot have these.
Python GQL names may contain . without quoting. Datastore GQL reserves . for future use.
Datastore GQL names may contain $ and U+0080 to U+FFFF without quoting. Python GQL names may not.
Python GQL has different keywords and operators than Datastore GQL.
Python GQL supports queries using a URL-safe (base64-encoded) key. Datastore GQL does not.
When not to use GQL
While GQL provides a convenient way of executing queries in a familiar SQL-like
dialect, it does not support lookup() of entities. For this capability, use
a client library's lookup() interface.
Keywords and predefined names
Keywords and predefined names are case-insensitive.
The following keywords are recognized, although not all of
these are currently used in GQL. The unused keywords are marked
with an asterisk. To refer to a property name that has the same name as a keyword, surround it with backticks (`).
Keyword
AGGREGATE
HAS
ALL*
HAVING*
ANCESTOR
IN
AND
IS
ANY*
JOIN*
AS*
LIKE*
ASC
LIMIT
AVG
MOD*
BETWEEN*
NOT*
BINARY*
NULL
BY
OFFSET
CHILD*
ON
CONTAINS
OR*
COUNT
ORDER
COUNT_UP_TO
PARENT*
CURSOR*
REGEXP*
DESC
RLIKE*
DESCENDANT
SELECT
DISTINCT
SUBSET*
DIV*
SUM
EXISTS*
SUPERSET
FALSE
TRUE
FROM
WHERE
GROUP
XOR*
The following predefined names are recognized:
Predefined Name
BLOB
FIRST
DATETIME
KEY
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
