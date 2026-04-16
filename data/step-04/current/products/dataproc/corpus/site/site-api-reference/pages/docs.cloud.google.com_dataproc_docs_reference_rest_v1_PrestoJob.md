---
title: "PrestoJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob
  title: "PrestoJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
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
PrestoJob
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A Dataproc job for running Presto queries. IMPORTANT : The Dataproc Presto Optional Component must be enabled when the cluster is created to submit a Presto job to the cluster.
JSON representation
{
"continueOnFailure" : boolean ,
"outputFormat" : string ,
"clientTags" : [
string
] ,
"properties" : {
string : string ,
...
} ,
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
continueOnFailure
boolean
Optional. Whether to continue executing queries if a query fails. The default value is false . Setting to true can be useful when executing independent parallel queries.
outputFormat
string
Optional. The format in which query output will be displayed. See the Presto documentation for supported output formats
clientTags[]
string
Optional. Presto client tags to attach to this query
properties
map (key: string, value: string)
Optional. A mapping of property names to values. Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
loggingConfig
object ( LoggingConfig )
Optional. The runtime log config for job execution.
Union field queries . Required. The sequence of Presto queries to execute, specified as either an HCFS file URI or as a list of queries. queries can be only one of the following:
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
