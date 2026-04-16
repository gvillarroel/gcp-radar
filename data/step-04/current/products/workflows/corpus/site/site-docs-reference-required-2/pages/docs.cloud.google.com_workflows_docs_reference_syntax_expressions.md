---
title: "Expressions \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions
  title: "Expressions \_|\_ Workflows \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Reference
Send feedback
Expressions
Stay organized with collections
Save and categorize content based on your preferences.
Expressions are evaluated by the workflow engine and the output is used at the
time of execution, such as assigning the result of an expression to a variable
or returning the result of an expression.
There is a limit to the expression length .
All expressions must begin with a $ and be enclosed in curly brackets:
${ EXPRESSION }
You can use expressions to:
Assign values to variables
Form call arguments , including all parameters in the body , header ,
query , and url sections
Call subworkflows
Apply conditions
Retry values , including max_retries and multiplier
Return values from a workflow step
Important: In YAML, expressions containing colons can cause unexpected
behaviour when the colon is interpreted as defining a map. You can resolve this
issue by wrapping the YAML expression in single quotes:
Recommended: '${"foo: " + myVar}'
Not recommended: ${"foo: " + myVar}
For details, see Expressions containing colons .
Supported elements
The Workflows syntax supports the following elements in the
definition of an expression:
[0...9] : numbers
"" : strings
- (minus sign): indicates negative numbers
. (dot): indicates decimal place
+ : arithmetic addition and string concatenation
- : arithmetic subtraction and negation
* : arithmetic multiplication
/ : float division
% : remainder division
// : floor division
() : parentheses
Logical operators
variableName : reference a variable
object.field : reference a value in an object
object["field"] : reference a value in an object
list[index] : reference an index in a list
Expression helpers
that can:
Convert data such as int and string
Operate on lists, maps, and strings such as in and keys
Conditionally access data inline such as default and if
Function expressions
Functions such as len() can be used in expressions, and the functions
defined in the standard library
are all supported (with the exception of blocking calls such
as HTTP calls, sys.sleep , and sys.log ). For example:
YAML
- initVariables :
assign :
- project : ${ sys.get_env("GOOGLE_CLOUD_PROJECT_ID") }
JSON
[
{
"initVariables" : {
"assign" : [
{
"project" : "${ sys.get_env(\"GOOGLE_CLOUD_PROJECT_ID\") }"
}
]
}
}
]
Multi-line expressions
You can extend an expression over multiple lines. For example, you might want to
create a dynamic string for a SQL query. For multi-line expressions, follow
these guidelines:
String literals must be enclosed in double quotes.
You can include colons within a string literal.
Any required whitespace must be added inside the string literal.
For example, to generate "SELECT * from customers\nWHERE id=7" , create a step
like this:
YAML
- assign :
assign :
- table : customers
- id : 7
- q : ${
"SELECT * from " + table +
"\nWHERE id=" + string(id)
}
JSON
[
{
"assign" : {
"assign" : [
{
"table" : "customers"
},
{
"id" : 7
},
{
"q" : "${\n\"SELECT * from \" + table +\n\"\\nWHERE id=\" + string(id)\n}"
}
]
}
}
]
Blocking calls
Calls performed during a workflow can be either blocking or non-blocking .
Blocking calls are calls that block a workflow's execution; they must be
resolved before a workflow execution can complete.
Certain functions result in blocking calls if used inside an expression. Instead,
they must be run from a call step (see Calls ).
For example, sys.sleep and http.get cannot be used inside an expression.
The following list contains all the functions that result in blocking calls in
Workflows:
events.await_callback ( events.await_callback function )
experimental.executions.map ( executions.map function )
experimental.executions.run ( executions.run function )
googleapis.* ( for connector calls )
http.* ( HTTP functions )
sys.log (see Send logs to Cloud Logging )
sys.sleep (see Wait using polling )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
