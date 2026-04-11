---
title: "Filters \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/filters
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/filters
  title: "Filters \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Send feedback
Filters
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Ad Manager API supports filtering and ordering on List methods.
Filtering uses a specific syntax including literals, logical operators ( AND , OR ), negation operators ( NOT , - ), comparison operators ( = , != , < , > , <= , >= ), wildcards ( * ), traversal ( . ), and the "has" operator ( : ).
Ordering is specified using orderBy with field names, optionally including desc for descending order.
Filters must be URL-encoded for GET requests, which client libraries handle automatically.
The Ad Manager API supports filtering on List methods. The filter string
syntax is formally defined in the EBNF
grammar .
To get started, here are some examples of common use cases.
Example
Meaning
orders.updateTime > "2024-01-01T00:00:00-5:00"
Lists orders with an updateTime after January 1, 2024 in the Eastern Standard Timezone
lineItems.targeting.geoTargeting.targetedGeoIds:2840
Lists line items with a geographic targeting that contains the United States (geo target ID 2480 )
lineItems.displayName = "*_interstitial"
Lists line items that have a display name that ends with the string _interstitial
orders.displayName = "*video*"
Lists orders that have a display name that contains the string video
displayName:"video"
Lists orders that have a display name that contains the string video (alternate syntax)
Tip: Filter must be URL-encoded for GET requests. For example: Filter string:
orders.updateTime > "2024-01-01T00:00:00-5:00" URL encoded:
orders.updateTime%20%3E%20%222024-01-01T00:00:00-5:00%22 . This is handled
automatically by client libraries.
Literals
A bare literal value (examples: 42 , Hugo ) is a value to be matched against.
Literals appearing alone are fuzzy matched against all of the supported fields
on a resource. Resources document which fields are considered for matching on
the list method. This feature is comparable to universal
search in the Ad Manager UI but
scoped to a single resource type.
String literals containing spaces should be wrapped in double quotes (example:
"Foo bar" ). Single quotes cannot be used to wrap string literals.
Logical operators
The Ad Manager API supports the binary operators AND and OR .
Caution: These operators are case-sensitive . The literals and and or are
treated as Literals .
Operator
Example
Meaning
AND
a AND b
True if a and b are true.
OR
a OR b OR c
True if any of a , b , c are true.
Note: To match common patterns of speech, the OR operator has higher
precedence than AND , unlike what is found in most programming languages. The
expression a AND b OR c evaluates as a AND (b OR c) . When possible, use
explicit parentheses to avoid confusion.
Negation operators
The Ad Manager API provides the unary operators NOT and - . These can be used
interchangeably.
Operator
Example
Meaning
NOT
NOT a
True if a is not true.
-
-a
True if a is not true.
Comparison operators
The Ad Manager API supports the binary comparison operators = , != , < , > ,
<= , and >= for string, numeric, timestamp, and duration fields.
Operator
Example
Meaning
=
a = true
True if a is true.
!=
a != 42
True unless a equals 42.
<
a < 42
True if a is a numeric value less than 42.
>
a > "foo"
True if a is lexically ordered after "foo".
<=
a <= "foo"
True if a is "foo" or lexically before it.
>=
a >= 42
True if a is a numeric value of 42 or higher.
Note: Unlike in most programming languages, field names must appear on the
left-hand side of a comparison operator; the right-hand side only accepts
literals and logical operators.
Because filters are accepted as query strings, type conversion takes place to
translate the string to the appropriate strongly-typed value:
Strings expect double quotes. Example: "Foo bar" .
Enums expect the enum's string representation (case-sensitive).
Booleans expect true and false literal values.
Numbers expect the standard integer or float representations. For floats,
exponents are supported. Example: 2.997e9 .
Durations expect a numeric representation followed by an s suffix (for
seconds). Examples: "20s" , "1.2s" .
Timestamps expect an
RFC-3339 formatted string. Example:
"2012-04-21T11:30:00-04:00" . UTC offsets are supported.
Caution: The identifiers true , false , and null only carry intrinsic
meaning when used in the context of a typed field reference.
Wildcards
When comparing strings for equality, the Ad Manager API supports wildcards using
the * character.
Example
Meaning
a = "*.foo"
True if a ends with ".foo".
Traversal operator
The Ad Manager API supports the . operator, which indicates traversal through
a message, map, or struct.
Example
Meaning
a.b = true
True if a has a boolean b field that is true.
a.b > 42
True if a has a numeric b field that is greater than 42.
a.b.c = "foo"
True if a.b has a string c field that is "foo".
Traversal is written using the field names from the resource. Individual
services could specify a subset of fields that are supported for traversal.
Important: The . operator cannot be used to traverse through a repeated
field or list, except for specific use with the : operator.
Has operator
The Ad Manager API supports the : operator, which means "has". It is usable
with collections (repeated fields or maps), messages, and Strings and behaves
slightly differently in each case.
String fields query to see if the string contains a matching substring:
Example
Meaning
r.displayName:"_250x250"
True if the String field r.displayName contains the substring _250x250 .
Repeated fields query to see if the repeated structure contains a matching
element:
Example
Meaning
r:42
True if r contains 42.
r.foo:42
True if r contains an element e such that e.foo = 42 .
Important: Filters cannot query a specific element on a repeated field for a
value. For example, e.0.foo = 42 and e[0].foo = 42 are not valid
filters.
Maps, structs, and messages can query either for the presence of a field in the
map or a specific value:
Example
Meaning
m:foo
True if m contains the key "foo".
m.foo:*
True if m contains the key "foo".
m.foo:42
True if m.foo is 42.
When traversing messages, a field is only considered to be present if it has a
non-default value.
Limitations
Individual services can specify further structure or limitations for filter
queries in addition to what is defined here.
Order
Most resources support ordering on List methods. Refer to the List method
documentation for the resource's precise behavior and which fields are supported
for ordering.
The syntax for orderBy fields is a comma separated list of field names. For
example: "foo,bar" .
The default sorting order is ascending. To specify descending order for a field,
append a " desc" suffix. For example: "foo desc, bar" .
Redundant space characters in the syntax are ignored. The values "foo, bar
desc" , " foo , bar desc " , and "foo,bar desc" are all equivalent.
Subfields are specified with the traversal operator . For
example: foo.bar or address.street .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-28 UTC."],[],["The Ad Manager API utilizes filter strings for `List` methods, supporting fuzzy matching against resource fields. Filters use comparison operators (`=`, `!=`, `\u003c`, `\u003e`, `\u003c=`, `\u003e=`), logical operators (`AND`, `OR`), and negation operators (`NOT`, `-`). String literals require double quotes, and wildcards (`*`) are supported for string matching. Traversal (`.`) and \"has\" (`:`) operators allow deeper querying, but specific element indexing in repeated fields is invalid. `orderBy` sorts results, with \"desc\" indicating descending order. URL encoding is needed for GET requests.\n"]]
