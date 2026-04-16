---
title: "Data types and semantic types \_|\_ Community Connectors \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/looker-studio/connector/semantics
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector/reference
source_metadata:
  url: https://developers.google.com/looker-studio/connector/semantics
  title: "Data types and semantic types \_|\_ Community Connectors \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Data types and semantic types
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
When building a community connector, define each field's data type (e.g., BOOLEAN , STRING , NUMBER ) and consider its semantic type (e.g., currency, city) to enhance data understanding in Looker Studio.
Connector schema properties like conceptType , semantic type , and aggregation type influence field representation and usage in Looker Studio, serving as default settings users can adjust.
You can manually define semantic types for accuracy and performance, or rely on Looker Studio's automatic detection for date/time and geo types based on data format, though manual specification is recommended.
Automatic semantic type detection involves data fetch calls, which can be optimized by returning predefined values, limiting records, caching responses, or accepting the default behavior.
Ensure data formats align with Looker Studio's recognized patterns for date/time and geo types for accurate automatic detection, and consider manual inspection for troubleshooting.
When you build a community connector, each field that you define in the
schema
requires a data type. The data type defines the field's primitive type such as
BOOLEAN , STRING , NUMBER , etc.
In addition to data types, Looker Studio also makes use of semantic types.
Semantic types help to describe the kind of information the data represents. For
example, a field with a NUMBER data type may semantically represent a currency
amount or percentage and a field with a STRING data type may semantically
represent a city. To see which semantic types are available, please consult the
semantic types documentation
Community Connector schema and Looker Studio fields
When you define the schema for your community connector, there are various
properties for each field that will determine how the field is represented and
used in Looker Studio. For example:
The conceptType is
defined in your connector schema using the conceptType property. This
property determines whether the field is treated as a dimension or metric.
An explanation on the difference between metrics and dimensions can be found
at
Dimensions and metrics.
The semantic type can
either be defined in the connector schema, or can be automatically detected
by Looker Studio based on the
data type property defined in
your connector and the data values returned by your connector. See
Automatic semantic type detection for details on
how this works.
The aggregation type determines whether the metric values (dimensions
are ignored) can be reaggregated. Setting the semantics.isReaggregatable
property to true will default to the SUM aggregation, otherwise it is
set to Auto . You can also manually set default aggregation type for
reaggregatable fields using the
defaultAggregationType
property.
When you configure and connect using a connector in Looker Studio, the fields
editor shows the complete schema for the connector based on how you've defined
the properties above. If you have included the semantic types, then they will
show as you have defined them. If you are using
automatic semantic type detection , then the fields
will show as they were detected.
Note: Schema properties defined in your community connector are effectively used
as default settings when users create a data source. The user can override any
of the properties, with the exception of the aggregation type when it's set to
Auto .
Setting semantic information
There are two ways to set semantic information. You can either set field
semantics manually or rely on Looker Studio to automatically detect.
For example, if you have a Number that semantically represents US Dollars,
Looker Studio will not be able to automatically detect this semantic type.
Additionally, automatic semantic detection requires Looker Studio to make data
fetch calls for each field of your schema. If you manually specify the schema
instead, then no data fetch calls will be made. In the case that you know the
semantic type (E.g. currency, percent, date, etc.) for your data, then we
recommend explicitly setting this in the schema for accuracy and performance
reasons.
Manually setting semantic types (Recommended)
If you know your semantic types, you can manually define semantics for each
schema field. The full details on what properties available to you can be found
in the field reference page . If you
choose to define manual semantic types, it is recommend that you define
semanticType and semanticGroup for every field. By manually providing these
properties, the automatic semantic type detection process will not run. If you
manually set some of your fields, but not all, then the ones that you do not
specify default to Text , Number , or Boolean depending on the dataType
specified for the field.
The following is an example of a simple schema that manually sets semantic
types. Income is set as a Currency, and Filing Year is set as a date.
data-studio/semantics.gs
View on GitHub
const schema = [
{
name : "Income" ,
label : "Income (in USD)" ,
dataType : "NUMBER" ,
semantics : {
conceptType : "METRIC" ,
semanticGroup : "CURRENCY" ,
semanticType : "CURRENCY_USD" ,
},
},
{
name : "Filing Year" ,
label : "Year in which you filed the taxes." ,
dataType : "STRING" ,
semantics : {
conceptType : "METRIC" ,
semanticGroup : "DATE_OR_TIME" ,
semanticType : "YEAR" ,
},
},
];
Troubleshooting Manual Semantic Types
If you set your semantic types incorrectly for the underlying data, they will
not work properly. This can be difficult to test, but there are a few things you
can do to help find issues.
Return 2 or 3 rows from your data instead of all of it, then manually
inspect it.
Make a table in Looker Studio that only uses the field you are trying to
check.
Pay close attention to Geo and Date fields since they have the most
stringent format.
Automatic semantic type detection
If you have not defined any semantic types in your schema, then Looker Studio
will attempt to automatically detect them based on the
data type property and the format
of the data values returned by your connector.
Note: Automatic semantic type detection is only carried out when no fields with
semanticType are found and only when a new Data Source is created or the
schema of an existing Data Source is changed.
The steps of the automatic detection process are as follows:
Request the schema by executing the
getSchema function of your
community connector.
Iterate through batches of fields defined in the connector schema and issue
getData requests the fields.
The getData requests are executed with the sampleExtraction parameter
set to true to indicate the data requests are for the purposes of semantic
detection.
Based on the field data type and the format of the value returned from the
getData request, identify the semantic type of the field.
Caution: Automatic semantic type detection cannot properly identify all semantic
types for your schema. It can only detect time/date and geo semantic types.
Options for handling automatic semantic type detection
When Looker Studio executes the getData function of a community connector for
the purpose of semantic detection, the incoming request will contain a
sampleExtraction property which will be set to true . The data returned by
your connector is only used by Looker Studio to identify the semantic type of
the field. Since the value will not be used for any other purpose, it does not
require actual data from your external source.
There are several ways to improve semantic type detection in your code:
Recommended: Pass predefined values
Return a predefined value for each field that best represents the semantic
type for the field and is known to be properly be detected by Looker Studio.
For example, if the semantic type for a field is Country then return a
value such as IT for Italy. The other benefit of this approach is that it
is much quicker since it does not require you to make HTTP requests to the
third-party service for data.
Return only n number of records
If the third-party service from which you're fetching data supports row limits
when requesting data then return a small subset of rows to Looker Studio instead
of the full data set. This will limit the amount of data you need to pass to
Looker Studio for each semantic detection request.
Request all columns and cache the response
If it's possible to request all columns for the third-party service from
which you're fetching data then on the first semantic detection request
received from Looker Studio fetch all columns and cache the results. For
subsequent semantic detection requests fetch column values from the cache
instead of making additional HTTP requests to the third-party service.
Do nothing different
You can choose to not implement any specific accommodation for requests where
sampleExtraction is set to true . This will cause the Semantic Detection
process to be slower since Looker Studio will have to fetch all data for the
Semantic Detection process. In addition, this will affect the request rate to
your external data source since many semantic detection requests will be
executed in parallel.
Recognized formats for automatic semantic type detection
Date & Time
YYYY/MM/DD-HH:MM:SS
YYYY-MM-DD [HH:MM:SS[.uuuuuu]]
YYYY/MM/DD [HH:MM:SS[.uuuuuu]]
YYYYMMDD [HH:MM:SS[.uuuuuu]]
Sat, 24 May 2008 20:09:47 GMT
2008-05-24T20:09:47Z
Time: epoch for second, micro, milli, and nano.
Geo
Continent name or code
Sub continent name or code
Region name or code
Country name or code . Also
see ISO_3166-1 .
City Name
Comma separated latitude and longitude value
Designated Marketing Area (DMA) Name and code
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
