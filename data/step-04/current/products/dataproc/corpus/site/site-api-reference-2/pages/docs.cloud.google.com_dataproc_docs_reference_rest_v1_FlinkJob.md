---
title: "FlinkJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/FlinkJob
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference/libraries
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/FlinkJob
  title: "FlinkJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
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
FlinkJob
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A Dataproc job for running Apache Flink applications on YARN.
JSON representation
{
"args" : [
string
] ,
"jarFileUris" : [
string
] ,
"savepointUri" : string ,
"properties" : {
string : string ,
...
} ,
"loggingConfig" : {
object ( LoggingConfig )
} ,
// Union field driver can be only one of the following:
"mainJarFileUri" : string ,
"mainClass" : string
// End of list of possible types for union field driver .
}
Fields
args[]
string
Optional. The arguments to pass to the driver. Do not include arguments, such as --conf , that can be set as job properties, since a collision might occur that causes an incorrect job submission.
jarFileUris[]
string
Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Flink driver and tasks.
savepointUri
string
Optional. HCFS URI of the savepoint, which contains the last saved progress for starting the current job.
properties
map (key: string, value: string)
Optional. A mapping of property names to values, used to configure Flink. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/flink/conf/flink-defaults.conf and classes in user code.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
loggingConfig
object ( LoggingConfig )
Optional. The runtime log config for job execution.
Union field driver . Required. The specification of the main method to call to drive the job. Specify either the jar file that contains the main class or the main class name. To pass both a main jar and a main class in the jar, add the jar to jarFileUris , and then specify the main class name in mainClass . driver can be only one of the following:
mainJarFileUri
string
The HCFS URI of the jar file that contains the main class.
mainClass
string
The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jarFileUris .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-20 UTC."],[],[]]
