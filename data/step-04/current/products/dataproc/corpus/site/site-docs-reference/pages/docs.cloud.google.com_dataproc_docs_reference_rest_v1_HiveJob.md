---
title: "HiveJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/HiveJob
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/HiveJob
  title: "HiveJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
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
HiveJob
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A Dataproc job for running Apache Hive queries on YARN.
JSON representation
{
"continueOnFailure" : boolean ,
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
scriptVariables
map (key: string, value: string)
Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name="value"; ).
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
properties
map (key: string, value: string)
Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml , /etc/hive/conf/hive-site.xml, and classes in user code.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
jarFileUris[]
string
Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
Union field queries . Required. The sequence of Hive queries to execute, specified as either an HCFS file URI or a list of queries. queries can be only one of the following:
queryFileUri
string
The HCFS URI of the script that contains Hive queries.
queryList
object ( QueryList )
A list of queries.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-20 UTC."],[],[]]
