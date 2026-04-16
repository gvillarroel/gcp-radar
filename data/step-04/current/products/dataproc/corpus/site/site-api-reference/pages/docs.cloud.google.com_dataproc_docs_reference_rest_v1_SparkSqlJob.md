---
title: "SparkSqlJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob
  title: "SparkSqlJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Reference
Send feedback
SparkSqlJob
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A Dataproc job for running Apache Spark SQL queries.
JSON representation
{
"scriptVariables" : {
string : string ,
...
} ,
"properties" : {
string : string ,
...
} ,
"jarFileUris" : [
string
] ,
"loggingConfig" : {
object ( LoggingConfig )
} ,
// Union field queries can be only one of the following:
"queryFileUri" : string ,
"queryList" : {
object ( QueryList )
}
// End of list of possible types for union field queries .
}
Fields
scriptVariables
map (key: string, value: string)
Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value"; ).
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
properties
map (key: string, value: string)
Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API might be overwritten.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
jarFileUris[]
string
Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.
loggingConfig
object ( LoggingConfig )
Optional. The runtime log config for job execution.
Union field queries . Required. The sequence of Spark SQL queries to execute, specified as either an HCFS file URI or as a list of queries. queries can be only one of the following:
queryFileUri
string
The HCFS URI of the script that contains SQL queries.
queryList
object ( QueryList )
A list of queries.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-20 UTC."],[],[]]
