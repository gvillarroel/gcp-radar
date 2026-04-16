---
title: "Conditions reference \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition
  title: "Conditions reference \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Reference
Send feedback
Conditions reference
Stay organized with collections
Save and categorize content based on your preferences.
This reference describes the syntax for using conditions in
routes .
When a condition evaluates to true,
the associated route is called when the route is evaluated.
This syntax allows from very simple to very complex expressions using
parameter values , sentiment values ,
comparison operators , boolean operators ,
and system functions .
The simplest condition is the boolean constant true ,
which forces a route to be called when it is evaluated.
You can build more complex conditions which evaluate to true for cases like:
A parameter equals a specific value
A parameter is less than or greater than a specific value
A parameter is in a range of values
One parameter is greater than another parameter
A form has been completed
End-user sentiment is positive or negative
A probability from a random function
To set conditions in the console, see the
handler documentation .
Comparison operators
The following comparison operators are supported:
HAS ( : )
EQUALS ( = )
NOT_EQUALS ( != )
LESS_THAN ( < )
LESS_THAN_EQUALS ( <= )
GREATER_THAN ( > )
GREATER_THAN_EQUALS ( >= )
Rules for comparison operators
Note: The references described below ( $a, $b, $c )
are short to aid description.
See the parameter and sentiment
sections below for the full reference syntax.
The left hand side must be a parameter reference.
$a = 5
The right hand side is type casted to the same type as the left hand side before comparing.
HAS ( : ) for anything other than strings is treated as EQUALS ( = ).
Support for strings
Note: The references described below ( $a, $b, $c )
are short to aid description.
See the parameter and sentiment
sections below for the full reference syntax.
HAS ( : ) performs a substring search.
If $a is set to "hello world", the following is true:
$a : "hello"
When using strings on the right hand side,
double quotes are needed if the string contains space.
If $a is set to "hello world", the following is true:
$a = "hello world"
LESS_THAN ( < ), LESS_THAN_EQUALS ( <= ), GREATER_THAN ( > ),
and GREATER_THAN_EQUALS ( >= ) compare lexicographically.
If $a is set to "abc", the following is true:
$a > "aaa"
Parameter empty string and null values
You can compare string parameter values to "" ,
which checks if the parameter is set to an empty string.
You can compare any parameter value to null ,
which checks if the parameter has not been set.
Boolean operators
Conjunction (AND)
Note: The references described below ( $a, $b, $c )
are short to aid description.
See the parameter and sentiment
sections below for the full reference syntax.
For the AND operator,
expressions are evaluated iteratively,
and the evaluation is short-circuited if any expression evaluates to false.
Example:
$a > 0 AND $a < 100
Disjunction (OR)
Note: The references described below ( $a, $b, $c )
are short to aid description.
See the parameter and sentiment
sections below for the full reference syntax.
For the OR operator,
expressions are evaluated iteratively,
and the evaluation is short-circuited if any expression evaluates to true.
Example:
$a = 0 OR $a > 5
Negation (NOT)
Note: The references described below ( $a, $b, $c )
are short to aid description.
See the parameter and sentiment
sections below for the full reference syntax.
For the NOT operator,
the expression is negated.
Example:
NOT $a <= 0
Rules for boolean operators
The boolean operators must be uppercase.
The boolean operators must not be part of a quoted string.
Boolean constants
The following boolean constants are defined:
true
false
To force a route to be called upon evaluation,
use the following condition:
true
System functions
The system functions you can use in conditions are found in the
system functions reference .
The remainder of this section
provides examples for using system functions in conditions.
Some example use cases of system functions include:
Introducing randomness in routing.
For example, there is a 10% probability that
the following condition will be true:
$sys.func.RAND() < 0.1
Checking values of parameters.
For example, for a list session parameter list with value [1, 2, 3],
the following conditions are true:
$sys.func.CONTAIN($session.params.list, 1) = true
$sys.func.COUNT($session.params.list) = 3
Compound expressions
Note: The references described below ( $a, $b, $c )
are short to aid description.
See the parameter and sentiment
sections below for the full reference syntax.
You can use boolean operators and comparison operators
to form compound expressions.
Parentheses may be used to make the logic clearer or change the precedence.
For example:
(NOT ($a > 1 AND $b < 100)) OR $c = 50
If you are not using parenthesis,
you cannot use both OR and AND operators in a compound expression:
$a=1 AND $b=2 AND $c=3 // VALID
$a=1 OR $b=2 OR $c=3 // VALID
$a=1 OR $b=2 AND $c=3 // INVALID
($a=1 OR $b=2) AND $c=3 // VALID
Parameter references
The parameter references you can use in conditions are found in the
parameters guide .
The remainder of this section
provides examples for using parameters in conditions.
To check whether the current page's form is filled,
use the following condition:
$page.params.status = "FINAL"
To check whether a particular form parameter
was filled for the end-user's previous conversational turn,
use the following condition:
$page.params.parameter-id.status = "UPDATED"
To check that a numerical session parameter is between the values 1 and 10,
use the following condition:
$session.params.parameter-id >= 1 AND $session.params.parameter-id <= 10
To check that the second value of a list session parameter is equal to "hello",
use the following condition:
$session.params.parameter-id[1] = "hello"
Request-scoped parameter references
When defining a condition, you can also use the
request-scoped parameters to form your condition. This allows your agent to tailor responses based on sentiment analysis results .
Example conditions that use sentiment:
$request.sentiment.score < 0
$request.sentiment.score > 0
$request.sentiment.magnitude > 3.6
$request.sentiment.succeeded = true
$request.sentiment.succeeded = false
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
