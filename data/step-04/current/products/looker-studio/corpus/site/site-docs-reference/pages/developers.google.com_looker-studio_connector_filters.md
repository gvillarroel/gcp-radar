---
title: "Filters \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/filters
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector/advanced-services
source_metadata:
  url: https://developers.google.com/looker-studio/connector/filters
  title: "Filters \_|\_ Community Connectors \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Filters
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Looker Studio can apply filters to data from community connectors, but applying filters within the connector itself can significantly enhance performance.
Community connectors should apply all filters provided in the getData() request or none at all, and structure them with AND and OR logic as specified.
If a connector cannot apply all filters, it should return all data and indicate filtersApplied: false in the response, ensuring backward compatibility.
When filters are successfully applied within the connector, the response should exclude forFilterOnly fields and include filtersApplied: true .
If a report contains filters and a community connector returns unfiltered data
for all fields requested then Looker Studio will apply filters to the connector
response. However, filters can be applied at the community connector level which
can significantly improve performance in some cases. Filter information is
passed in the getData() request object , and the connector can use this
information to filter data before sending it back to Looker Studio.
For example, if you're connecting to a SQL database, applying the filters
directly in the WHERE clause (B3 in diagram below) can drastically decrease
the number of rows returned to Looker Studio. This, in turn, limits the amount
of data that has to be processed and sent to Looker Studio (B5).
Note: It's not required to apply filters, but it is recommended if you expect
performance gains from applying them.
Rules of applying filters
Apply all filters, or none of them. See Unsupported filters
Do not include forFilterOnly fields in the response.
AND together each entry in the request.dimensionsFilters array.
For example, for the following filter, the connector should only include
values that have a country of USA AND a source of Social .
{
"dimensionsFilters" : [
[{
"fieldName" : "country" ,
"values" : [ "USA" ],
"type" : "INCLUDE" ,
"operator" : "EQUALS"
}],
[{
"fieldName" : "source" ,
"values" : [ "Social" ],
"type" : "INCLUDE" ,
"operator" : "EQUALS"
}]
]
}
OR together each sub-array in the request.dimensionsFilters array.
For example, for the following filter, the connector should only include
values that have a country of USA OR a country of Canada .
{
"dimensionsFilters" : [
[{
"fieldName" : "country" ,
"values" : [ "Canada" ],
"type" : "INCLUDE" ,
"operator" : "EQUALS"
}, {
"fieldName" : "country" ,
"values" : [ "USA" ],
"type" : "INCLUDE" ,
"operator" : "EQUALS"
}]
]
}
Caution: The difference between OR and AND is subtle. AND has the
structure [[1], [2]] , whereas OR has the structure [[1, 2]]
Example
The following example illustrates an end-to-end flow from the report user
defining filters to the community connector returning filtered data.
The report user has configured two filters:
country is IN_LIST of Canada, USA
source is IN_LIST of Social, Organic
The report user has configured a chart component with the source dimension
and sessions metric
getData() is executed by Looker Studio with the following request object:
{
"fields" : [
{ "name" : "source" },
{ "name" : "sessions" },
{ "name" : "country" , "forFilterOnly" : true }
],
"dimensionsFilters" : [
[{
"fieldName" : "country" ,
"values" : [ "Canada" , "USA" ],
"type" : "INCLUDE" ,
"operator" : "IN_LIST"
}],
[{
"fieldName" : "source" ,
"values" : [ "Social" , "Organic" ],
"type" : "INCLUDE" ,
"operator" : "IN_LIST"
}]
]
}
Connector responds with filtered data.
For the example request, return the source and sessions where country
is "Canada" or "USA" AND the source is "Social" or "Organic" .
Set filtersApplied to true since all filters were able to be
successfully applied.
Original data
source
sessions
country
Social
60
USA
Social
50
Canada
Social
40
UK
Organic
90
USA
Organic
80
Canada
Organic
70
UK
Newspaper
30
USA
Newspaper
20
Canada
Newspaper
10
UK
Filtered data
source
sessions
Social
60
Social
50
Organic
90
Organic
80
getData() response
{
"schema" : [
{ "name" : "source" , "dataType" : "STRING" },
{ "name" : "sessions" , "dataType" : "NUMBER" },
],
"rows" : [
{ "values" : [ "Social" , 60 ]},
{ "values" : [ "Social" , 50 ]},
{ "values" : [ "Organic" , 90 ]},
{ "values" : [ "Organic" , 80 ]}
],
"filtersApplied" : true
}
Key Point: response.rows[].values does not have an entry for country and
filtersApplied is set to true .
Unsupported filters
If the connector cannot apply all filters in the request, no filtering should be
performed. Return all of the requested fields (including the forFilterOnly
fields) and set the filtersApplied key in your response to false .
Key Point: This is the standard response for getData() . All existing
connectors are backwards compatible with this change.
Example:
{
"schema" : [
{ "name" : "source" , "dataType" : "STRING" },
{ "name" : "sessions" , "dataType" : "NUMBER" },
{ "name" : "country" , "dataType" : "STRING" }
],
"rows" : [
{ "values" : [ "Social" , 60 , "USA" ]},
{ "values" : [ "Social" , 50 , "Canada" ]},
{ "values" : [ "Social" , 40 , "UK" ]},
{ "values" : [ "Organic" , 90 , "USA" ]},
{ "values" : [ "Organic" , 80 , "Canada" ]},
{ "values" : [ "Organic" , 70 , "UK" ]},
{ "values" : [ "Newspaper" , 30 , "USA" ]},
{ "values" : [ "Newspaper" , 20 , "Canada" ]},
{ "values" : [ "Newspaper" , 10 , "UK" ]},
],
"filtersApplied" : false
}
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
