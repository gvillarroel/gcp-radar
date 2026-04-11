---
title: "Class ContainerEngineHandler (3.15.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.container_engine.ContainerEngineHandler
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/logging/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.container_engine.ContainerEngineHandler
  title: "Class ContainerEngineHandler (3.15.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class ContainerEngineHandler (3.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.15.0 (latest)
3.13.0
3.12.1
3.11.3
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.1
3.2.5
3.1.2
3.0.0
2.7.2
2.6.0
2.5.0
2.4.0
2.3.1
2.2.0
2.1.1
2.0.2
1.15.3
1.14.0
1.13.0
1.12.1
ContainerEngineHandler ( * , name = None , stream = None )
Handler to format log messages the format expected by GKE fluent.
This handler is written to format messages for the Google Container Engine
(GKE) fluentd plugin, so that metadata such as log level are properly set.
DEPRECATED: use StructuredLogHandler to write formatted logs to standard out instead.
Methods
ContainerEngineHandler
ContainerEngineHandler ( * , name = None , stream = None )
Parameters
Name
Description
name
Optional[str]
The name of the custom log in Cloud Logging.
stream
Optional[IO]
Stream to be used by the handler.
format
format ( record )
Format the message into JSON expected by fluentd.
Parameter
Name
Description
record
logging.LogRecord
The log record.
Returns
Type
Description
str
A JSON string formatted for GKE fluentd.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
