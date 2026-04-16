---
title: "Data Studio \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/studio/nativedimension
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/studio/nativedimension
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/studio/nativedimension
  title: "Data Studio \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Looker Studio is now called Data Studio. For more, see our blog .
Home
Documentation
Data analytics
Data Studio
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
NATIVE_DIMENSION
Returns the result of a BigQuery SQL expression as evaluated by the underlying dataset.
The NATIVE_DIMENSION function lets you write SQL directly into a Data Studio field. This is useful for functions that are not included in the function list , but that your database supports.
Note: Native functions are disabled by default. See the Enabling native functions section in this article for instructions on how to enable native functions.
Enabling native functions
Native functions are disabled by default and are managed at the data source level.
If you are an owner of a BigQuery data source, you can enable native functions for the data source by following these steps:
In Data Studio, edit the data source .
In the top right of the data source editor, click Native functions .
In the Native functions dialog, select On .
Click Save .
If you disable native functions, no users can create fields using native functions. Additionally, any existing charts that reference fields with native functions will display an error.
Sample usage
NATIVE_DIMENSION("JSON_VALUE('{"name": "Dana"}','$.name')","STRING")
Syntax
NATIVE_DIMENSION( expression , type )
Parameters
expression - An expression to be evaluated by the underlying dataset. This can be any valid BigQuery SQL that would go into a single column of a SELECT statement. The expression cannot include any aggregations.
type - A data type literal. See the following section for the types that this function supports.
NATIVE_DIMENSION types
You can select from the following types:
Type
Expected data
Report examples
STRING
Zero or more letters, numbers, characters, or symbols.
A1B2C3
BOOL
A logical value.
true
false
DOUBLE
A floating point number.
1,234.56
INT64
An integer.
1,234
DATE
A calendar date.
2020-09-21
DATETIME
A calendar date with time.
2020-09-21 12:35 PM
GEOGRAPHY
A collection of points and polygons that correspond to the BigQuery geography data type .
Only the BigQuery functions POINT and POLYGON are supported.
POINT(32 210)
POLYGON((0 0, 2 2, 2 0, 0 0), (2 2, 3 4, 2 4, 2 2))
If your expression returns a timestamp data type, such as BigQuery's TIMESTAMP type, use the CAST function to cast it to a DATETIME type. For example:
NATIVE_DIMENSION("CAST({ expression } AS DATETIME)", "DATETIME")
Important: Data Studio will return an error if your expression returns an unsupported data type, such as ARRAY , STRUCT , or JSON .
NATIVE_DIMENSION examples
JSON functions in SQL
Assume that your data includes a users_ages_json field whose values are formatted as JSON payloads. An example row value of this field might look like the following example:
{"name": "Jakob", "age": "26"}
Use the NATIVE_DIMENSION function to retrieve the age from users_ages_json , using BigQuery's JSON_VALUE function:
NATIVE_DIMENSION("JSON_VALUE(user_ages_json, '$.age')","INT64")
For this example row value, the NATIVE_DIMENSION function would return the age 26 as an integer.
Limits of NATIVE_DIMENSION
Who can use native functions
If native functions are enabled, owners and editors of the data source can create fields with native functions on the data source.
Viewers of the data source can use fields with native functions in charts. However, viewers cannot create new fields using native functions, nor can they edit any fields using native functions.
Aggregate fields
You cannot include any aggregated fields in the expression parameter.
Window functions
You cannot include any window functions in the expression parameter.
Blends
You cannot create a field with the NATIVE_DIMENSION function on a blended data source .
However, you can create a field with this function prior to blending and then use that field in a blend.
TIMESTAMP data types
If your expression returns a timestamp data type, such as BigQuery's TIMESTAMP type, use the CAST function to cast it to a DATETIME type. For example:
NATIVE_DIMENSION("CAST({expression} AS DATETIME)", "DATETIME")
Related resources
Dates and times
Calculated fields
Data Studio function list
CAST function
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
