---
title: "Syntax overview \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/syntax
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/syntax
  title: "Syntax overview \_|\_ Workflows \_|\_ Google Cloud Documentation"
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
Syntax overview
Stay organized with collections
Save and categorize content based on your preferences.
To create a workflow, you use the Workflows syntax to define the
steps you want and their order of execution. For more information about creating
workflows, see Create and manage workflows .
For other functions available in addition to the core syntax, refer to the
Standard library and
Connectors references.
File structure
Workflow source files have the following characteristics:
They contain only one main workflow .
They might contain subworkflows .
They are either a valid YAML or
JSON file.
Code samples are provided in both YAML and the equivalent JSON.
Note:
YAML indentation is meaningful and should be at least two spaces per indentation level.
Insufficient indentation can cause errors, and a new level should be at least two spaces in from
the start of the text in the previous line. For more details, see
Troubleshoot issues .
Search the syntax
You can search the Workflows syntax for its reserved words and other
details. To see examples of the syntax in action, see the
cheat sheet .
custom element and add a 'highlight'
attribute with comma-separated CSS selectors that target the elements you wish
to highlight. Invisible information in a comment will be picked up by the filter. -->
element. Commented out since anchor links
don't work in filtered content. -->
Reserved word
Description
Use with
See also
Examples
args
Pass arguments and their values when calling a function that accepts
parameters.
call steps
call result
Calls
assign
Set the value of a variable.
—
—
Assign variables
branches
Execute parallel branches concurrently and the steps in each branch sequentially.
steps
parallel
Execute parallel steps
Parallel steps
Replace experimental function with parallel step
break
Terminate iteration of a for loop.
next in for loops
continue
Use break/continue in a loop
call
Run a function and return a result.
—
args result
Calls
condition
Provide an expression to control if a step is executed (the first
condition to evaluate as true).
switch
—
Conditions
continue
Terminate the current iteration of a for loop and
continue with the next iteration.
next in for loops
break
Use break/continue in a loop
end
Stop a workflow's execution without returning a value.
next
—
Complete the execution of a workflow
except
Catch and handle errors thrown during a workflow execution.
try
retry
Catch errors
for
Iterate over a sequence of numbers or through a collection of data,
such as a list or map.
steps
—
Iteration
main
Define your main workflow. If a workflow
has a subworkflow, or to receive runtime arguments, there must be a
main block.
Subworkflows
—
Main workflow
next
Define what step Workflows should execute next.
—
break continue
Jumps
parallel
Execute two or more steps concurrently.
branches
for loops
steps
—
Execute parallel steps
Parallel steps
Replace experimental function with parallel step
params
Accept workflow execution arguments, or arguments passed to a
subworkflow.
Subworkflows
main
Pass runtime arguments in an execution request
Runtime arguments
Subworkflows
raise
Raise custom errors.
—
except retry try
Raise errors
result
Assign the result from a call to this variable.
call steps
args
Assign responses from a call
Store result from a call in a variable
retry
Define the retry behavior and the number of retry attempts.
try
—
Retry steps
return
Stop a workflow's execution and return a value or expression.
—
—
Complete the execution of a workflow
steps
Nest a series of steps.
branches
for loops
Subworkflows
try
main
Iteration
Nested steps
Subworkflows
switch
Allow the value of an expression to
control the flow of a workflow's execution.
—
condition
Conditions
try
Define a list of steps to retry if an error is raised, or catch and
handle the error.
—
except retry
Catch errors
Retry steps
Example: args
YAML
- STEP_NAME :
call : ...
args :
...
result : VARIABLE
JSON
[
{
" STEP_NAME " : {
"call" : ... ,
" args " : {
...
},
"result" : " VARIABLE "
}
}
]
OK
Example: assign
YAML
- STEP_NAME :
assign :
- VARIABLE_NAME : VALUE
JSON
[
{
" STEP_NAME " : {
" assign " : [
{
" VARIABLE_NAME " : " VALUE "
}
]
}
}
]
OK
Example: branches
YAML
- PARALLEL_STEP_NAME :
parallel :
...
branches :
- BRANCH_NAME_A :
steps :
...
- BRANCH_NAME_B :
steps :
...
JSON
[
{
" PARALLEL_STEP_NAME " : {
"parallel" : {
...
" branches " : [
{
" BRANCH_NAME_A " : {
"steps" :
...
}
},
{
" BRANCH_NAME_B " : {
"steps" :
...
}
}
]
}
}
}
]
OK
Example: break
YAML
- FOR_LOOP_STEP_NAME_A :
for :
value : LOOP_VARIABLE_NAME_A
in : ${ LIST_EXPRESSION_A } # or simply in: LIST_DEFINITION
steps :
- STEP_NAME_A :
next : continue
- FOR_LOOP_STEP_NAME_B :
for :
value : LOOP_VARIABLE_NAME_B
range : [ $ { BEGIN_EXPRESSION }, $ { END_EXPRESSION }]
steps :
- STEP_NAME_B :
next : break
JSON
[
{
" FOR_LOOP_STEP_NAME_A " : {
"for" : {
"value" : " LOOP_VARIABLE_NAME_A " ,
"in" : "${ LIST_EXPRESSION_A }" ,
"steps" : [
{
" STEP_NAME_A " : {
"next" : "continue"
}
}
]
}
}
},
{
" FOR_LOOP_STEP_NAME_B " : {
"for" : {
"value" : " LOOP_VARIABLE_NAME_B " ,
"range" : [
"${ BEGIN_EXPRESSION }" ,
"${ END_EXPRESSION }"
],
"steps" : [
{
" STEP_NAME_B " : {
"next" : " break "
}
}
]
}
}
}
]
OK
Example: call
YAML
- STEP_NAME :
call : ...
args :
...
result : VARIABLE
JSON
[
{
" STEP_NAME " : {
" call " : ... ,
"args" : {
...
},
"result" : " VARIABLE "
}
}
]
OK
Example: condition
YAML
- STEP_NAME_A :
switch :
- condition : ${ EXPRESSION_A }
next : STEP_NAME_B
- condition : ${ EXPRESSION_B }
next : STEP_NAME_C
- condition : true
next : STEP_NAME_C
next : STEP_NAME_D
JSON
[
{
" STEP_NAME_A " : {
"switch" : [
{
" condition " : "${ EXPRESSION_A }" ,
"next" : " STEP_NAME_B "
},
{
" condition " : "${ EXPRESSION_B }" ,
"next" : " STEP_NAME_C "
}
{
" condition " : true ,
"next" : " STEP_NAME_C "
}
],
"next" : " STEP_NAME_D "
}
}
]
OK
Example: continue
YAML
- FOR_LOOP_STEP_NAME_A :
for :
value : LOOP_VARIABLE_NAME_A
in : ${ LIST_EXPRESSION_A } # or simply in: LIST_DEFINITION
steps :
- STEP_NAME_A :
next : continue
- FOR_LOOP_STEP_NAME_B :
for :
value : LOOP_VARIABLE_NAME_B
range : [ $ { BEGIN_EXPRESSION }, $ { END_EXPRESSION }]
steps :
- STEP_NAME_B :
next : break
JSON
[
{
" FOR_LOOP_STEP_NAME_A " : {
"for" : {
"value" : " LOOP_VARIABLE_NAME_A " ,
"in" : "${ LIST_EXPRESSION_A }" ,
"steps" : [
{
" STEP_NAME_A " : {
"next" : " continue "
}
}
]
}
}
},
{
" FOR_LOOP_STEP_NAME_B " : {
"for" : {
"value" : " LOOP_VARIABLE_NAME_B " ,
"range" : [
"${ BEGIN_EXPRESSION }" ,
"${ END_EXPRESSION }"
],
"steps" : [
{
" STEP_NAME_B " : {
"next" : "break"
}
}
]
}
}
}
]
OK
Example: end
YAML
- STEP_NAME :
...
next : end
JSON
[
{
" STEP_NAME " : {
...
"next" : " end "
}
}
]
OK
Example: except
YAML
- STEP_NAME :
try :
call : http.get
...
except :
as : ERROR_MAP
steps :
...
JSON
[
{
" STEP_NAME " : {
"try" : {
"call" : "http.get"
...
},
" except " : {
"as" : " ERROR_MAP " ,
"steps" :
...
}
}
}
]
OK
Example: for
YAML
- FOR_LOOP_STEP_NAME :
for :
value : LOOP_VARIABLE_NAME
index : INDEX_VARIABLE_NAME
in : ${ LIST_EXPRESSION }
steps :
- STEP_NAME_A :
...
JSON
[
{
" FOR_LOOP_STEP_NAME " : {
" for " : {
"value" : " LOOP_VARIABLE_NAME " ,
"index" : " INDEX_VARIABLE_NAME " ,
"in" : "${ LIST_EXPRESSION }" ,
"steps" : [
{
" STEP_NAME_A " :
...
}
]
}
}
}
]
OK
Example: main
YAML
main :
params : [ MAP_NAME ]
steps :
- STEP_NAME :
...
...
JSON
{
" main " : {
"params" : [
" MAP_NAME "
],
"steps" : [
{
" STEP_NAME " : {
...
}
},
...
]
}
}
OK
Example: next
YAML
- STEP_NAME :
...
next : STEP_NAME_TO_JUMP_TO
JSON
[
{
" STEP_NAME " : {
...
" next " : " STEP_NAME_TO_JUMP_TO "
}
}
]
OK
Example: params
YAML
main :
steps :
- STEP_NAME :
call : SUBWORKFLOW_NAME
args :
ARG_1 : VALUE_1
ARG_2 : VALUE_2
...
result : OUTPUT_VARIABLE
SUBWORKFLOW_NAME :
params : [ PARAMETER_1 , PARAMETER_2 ... ]
steps :
- step_1 :
...
JSON
{
"main" : {
"steps" : [
{
" STEP_NAME " : {
"call" : " SUBWORKFLOW_NAME " ,
"args" : {
" ARG_1 " : " VALUE_1 " ,
" ARG_2 " : " VALUE_2 "
},
"result" : " OUTPUT_VARIABLE "
}
}
]
},
" SUBWORKFLOW_NAME " : {
" params " : [ " PARAMETER_1 , PARAMETER_2 " ... ],
"steps" : [
{
"step_1" :
...
}
]
}
}
OK
Example: parallel
YAML
- PARALLEL_STEP_NAME :
parallel :
exception_policy : POLICY
shared : [ VARIABLE_A , VARIABLE_B , ... ]
BRANCHES_OR_FOR :
...
JSON
[
{
" PARALLEL_STEP_NAME " : {
" parallel " : {
"exception_policy" : " POLICY " ,
"shared" : [
" VARIABLE_A " ,
" VARIABLE_B " ,
...
],
" BRANCHES_OR_FOR " :
...
}
}
}
]
OK
Example: raise
YAML
- step_a :
raise : "Something went wrong."
JSON
[
{
"step_a" : {
" raise " : "Something went wrong."
}
}
]
OK
Example: result
YAML
- STEP_NAME :
call : ...
args :
...
result : VARIABLE
JSON
[
{
" STEP_NAME " : {
"call" : ... ,
"args" :
... ,
" result " : " VARIABLE "
}
}
]
OK
Example: retry
YAML
- step_name :
try :
steps :
...
retry : RETRY_POLICY
predicate : RETRY_PREDICATE
max_retries : NUMBER_OF_RETRIES
backoff :
initial_delay : DELAY_SECONDS
max_delay : MAX_DELAY_SECONDS
multiplier : DELAY_MULTIPLIER
JSON
[
{
"step_name" : {
"try" : {
"steps" : [
...
]
},
" retry " : " RETRY_POLICY "
"predicate" : " RETRY_PREDICATE " ,
"max_retries" : NUMBER_OF_RETRIES ,
"backoff" : {
"initial_delay" : DELAY_SECONDS ,
"max_delay" : MAX_DELAY_SECONDS ,
"multiplier" : DELAY_MULTIPLIER
}
}
}
]
OK
Example: return
YAML
- STEP_NAME :
...
return : ${ VARIABLE }
JSON
[
{
" STEP_NAME " : {
...
" return " : "${ VARIABLE }"
}
}
]
OK
Example: steps
YAML
- STEP_NAME :
steps :
- STEP_NAME_1 :
steps :
- STEP_NAME_A :
...
- STEP_NAME_B :
...
- STEP_NAME_2 :
steps :
- STEP_NAME_C :
...
JSON
{
STEP_NAME : {
" steps " : [
{
STEP_NAME_ 1 : {
" steps " : [
{
STEP_NAME_A :
...
},
{
STEP_NAME_B :
...
}
]
}
},
{
STEP_NAME_ 2 : {
" steps " : [
{
STEP_NAME_C :
...
}
]
}
}
]
}
}
OK
Example: switch
YAML
- STEP_NAME_A :
switch :
- condition : ${ EXPRESSION_A }
next : STEP_NAME_B
- condition : ${ EXPRESSION_B }
next : STEP_NAME_C
- condition : true
next : STEP_NAME_C
next : STEP_NAME_D
JSON
[
{
" STEP_NAME_A " : {
" switch " : [
{
"condition" : "${ EXPRESSION_A }" ,
"next" : " STEP_NAME_B "
},
{
"condition" : "${ EXPRESSION_B }" ,
"next" : " STEP_NAME_C "
}
{
"condition" : true ,
"next" : " STEP_NAME_C "
}
],
"next" : " STEP_NAME_D "
}
}
]
OK
Example: try
YAML
- STEP_NAME :
try :
call : http.get
...
except :
as : ERROR_MAP
steps :
...
JSON
[
{
" STEP_NAME " : {
" try " : {
"call" : "http.get"
...
},
"except" : {
"as" : " ERROR_MAP " ,
"steps" :
...
}
}
}
]
OK
Example: stub
OK
Using code samples
For all samples that communicate with other Google Cloud resources, your
workflow must be associated with a service account that has sufficient
privileges to access those resources. To learn more about granting roles to
service accounts, see
Manage access to projects, folders, and organizations .
To learn how to change the service account associated with a workflow, see
update a workflow .
For more information about authentication, see
Grant a workflow permission to access Google Cloud resources .
Some samples might require that you first enable a Google Cloud API.
Learn more about listing services and
enabling services .
Caution: Some samples use placeholder URLs for Google Cloud resources and
external APIs. Because of this, samples in this reference might not
execute without modifications . When a sample includes the URL for a
Cloud Run functions function, a Cloud Run app, or an API, you
must replace that URL with the URL of your own function, app, or API.
See all Workflows code samples .
Notation key
Notation
Description
[] Square brackets
Optional; if the brackets themselves must be typed, this is indicated
{} Braces
Required
| Vertical bar
Separator for mutually exclusive items; choose one
... Ellipsis
Items that can be repeated; or indicates an omission to improve clarity
and shorten the length of the example
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
