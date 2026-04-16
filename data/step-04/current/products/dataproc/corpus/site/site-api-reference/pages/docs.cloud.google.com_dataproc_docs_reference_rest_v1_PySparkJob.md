---
title: "PySparkJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob
  title: "PySparkJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
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
PySparkJob
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A Dataproc job for running Apache PySpark applications on YARN.
JSON representation
{
"mainPythonFileUri" : string ,
"args" : [
string
] ,
"pythonFileUris" : [
string
] ,
"jarFileUris" : [
string
] ,
"fileUris" : [
string
] ,
"archiveUris" : [
string
] ,
"properties" : {
string : string ,
...
} ,
"loggingConfig" : {
object ( LoggingConfig )
}
}
Fields
mainPythonFileUri
string
Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.
args[]
string
Optional. The arguments to pass to the driver. Do not include arguments, such as --conf , that can be set as job properties, since a collision may occur that causes an incorrect job submission.
pythonFileUris[]
string
Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.
jarFileUris[]
string
Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.
fileUris[]
string
Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
archiveUris[]
string
Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
Note: Spark applications must be deployed in cluster mode for correct environment propagation.
properties
map (key: string, value: string)
Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
loggingConfig
object ( LoggingConfig )
Optional. The runtime log config for job execution.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-15 UTC."],[],[]]
