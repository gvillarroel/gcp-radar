---
title: "FILTER function \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/reference/data-mapping-reference/filter-function-reference
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/reference/data-mapping-reference/filter-function-reference
  title: "FILTER function \_|\_ Application Integration \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
FILTER function
FILTER function
Function Name
Description
Usage
Input parameter
Return value
FILTER
Filters the array elements that satisfy a given filter condition.
Note that a filter condition must evaluate to TRUE or FALSE.
A filter condition includes one or more transformation functions applied on the current array iteration element.
FILTER(~obj n -> Variable or Value)
Where ~obj n indicates the current array element for which you want to apply the transformation functions. By default, the value for n starts from 1.
For JSON arrays with schema, you can use a dot (.) notation following the current array element to directly access the nested property of the that array element. For example, ~obj n . PROPERTY .
A filter condition that evaluates to TRUE or FALSE.
An array of elements that match the filter condition.
Supported data type
The FILTER function supports the following data types:
Boolean array
Double array
Integer array
JSON
String array
Example 1: Filter a string array.
Sample data :
$var1$ = {
"sara@example.com",
"bola@example.com",
"222larabrown@gmail.com",
"dana@examplepetstore.com",
"cloudysanfrancisco@gmail.com"}
Usage : $var1$.FILTER(~obj1-> ~obj1.CONTAINS("@gmail.com"))
Filter the string elements which contain @gmail.com in var1 .
Output :
{"222larabrown@gmail.com","cloudysanfrancisco@gmail.com"}
Example 2: Filter a JSON array.
Sample data :
$var1$ = {
"citynames": [
{
"city": "Abbeville",
"state": "Louisiana"
},
{
"city": "Aberdeen",
"state": "Maryland"
},
{
"city": "Benicia",
"state": "California"
},
{
"city": "Chehalis",
"state": "Washington"
},
{
"city": "Aberdeen",
"state": "Washington"
},
{
"city": "Aberdeen",
"state": "Mississippi"
},
{
"city": "Cheektowaga",
"state": "New York"
}
]
}
Usage :
var1 .citynames
.FILTER(~obj1->
~obj1
.GET_PROPERTY("city")
.EQUALS("Aberdeen")
)
Filter the elements which have the city as Aberdeen in var1 .
Output :
[{
"city": "Aberdeen",
"state": "Maryland"
},
{
"city": "Aberdeen",
"state": "Washington"
},
{
"city": "Aberdeen",
"state": "Mississippi"
}]
Example 3: Filter a nested JSON array.
Sample data :
$var1$ =
{
"products": [
{
"PA": "Integrations",
"users": [
{
"name": "Ariel",
"role": [
"editor",
"approver"
]
},
{
"name": "Dana",
"role": [
"admin",
"deployer"
]
},
{
"name": "Lee",
"role": [
"viewer"
]
}
]
},
{
"PA": "Apigee",
"users": [
{
"name": "Mahan",
"role": [
"editor",
"admin",
"deployer"
]
},
{
"name": "Quinn",
"role": [
"invoker"
]
}
]
},
{
"PA": "Connectors",
"users": [
{
"name": "Kiran",
"role": [
"invoker",
"admin",
"deployer"
]
},
{
"name": "Sasha",
"role": [
"admin"
]
}
]
}
]
}
Usage :
var1 .products
.FOR_EACH(~obj1 ->
~obj1
.SET_PROPERTY(
~obj1
.GET_PROPERTY("users")
.FILTER(~obj2 ->
~obj2
.GET_PROPERTY("role")
.TO_STRING()
.CONTAINS("admin")
)
,
"users"
)
)
Filter the elements which contain admin in users of var1 .
Output :
[{
"PA": "Integrations",
"users": [{
"name": "Dana",
"role": ["admin", "deployer"]
}]
}, {
"PA": "Apigee",
"users": [{
"name": "Mahan",
"role": ["editor", "admin", "deployer"]
}]
}, {
"PA": "Connectors",
"users": [{
"name": "Kiran",
"role": ["invoker", "admin", "deployer"]
}, {
"name": "Sasha",
"role": ["admin"]
}]
}]
Recommendation
Learn how to add and configure a Data Mapping task
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
