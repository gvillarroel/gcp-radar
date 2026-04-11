---
title: "LoggingConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/LoggingConfig
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/LoggingConfig
  title: "LoggingConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
    \ Documentation"
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
LoggingConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Level
The runtime logging config of the job.
JSON representation
{
"driverLogLevels" : {
string : enum ( Level ) ,
...
}
}
Fields
driverLogLevels
map (key: string, value: enum ( Level ))
The per-package log levels for the driver. This can include "root" package name to configure rootLogger. Examples: - 'com.google = FATAL' - 'root = INFO' - 'org.apache = DEBUG'
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Level
The Log4j level for job execution. When running an Apache Hive job, Cloud Dataproc configures the Hive client to an equivalent verbosity level.
Enums
LEVEL_UNSPECIFIED
Level is unspecified. Use default level for log4j.
ALL
Use ALL level for log4j.
TRACE
Use TRACE level for log4j.
DEBUG
Use DEBUG level for log4j.
INFO
Use INFO level for log4j.
WARN
Use WARN level for log4j.
ERROR
Use ERROR level for log4j.
FATAL
Use FATAL level for log4j.
OFF
Turn off log4j.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-20 UTC."],[],[]]
