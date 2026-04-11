---
title: "Class AppEngineHandler (3.15.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.app_engine.AppEngineHandler
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/logging/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.app_engine.AppEngineHandler
  title: "Class AppEngineHandler (3.15.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class AppEngineHandler (3.15.0)
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
AppEngineHandler (
client ,
* ,
name = "app" ,
transport = google . cloud . logging_v2 . handlers . transports . background_thread . BackgroundThreadTransport ,
stream = None
)
A logging handler that sends App Engine-formatted logs to Stackdriver.
DEPRECATED: use CloudLoggingHandler instead.
Methods
AppEngineHandler
AppEngineHandler (
client ,
* ,
name = "app" ,
transport = google . cloud . logging_v2 . handlers . transports . background_thread . BackgroundThreadTransport ,
stream = None
)
Parameters
Name
Description
client
logging_v2.client.Client
The authenticated Google Cloud Logging client for this handler to use.
name
Optional[str]
Name for the logger.
transport
Optional[ logging_v2.transports.Transport ]
The transport class. It should be a subclass of .Transport . If unspecified, .BackgroundThreadTransport will be used.
stream
Optional[IO]
Stream to be used by the handler.
emit
emit ( record )
Actually log the specified logging record.
Overrides the default emit behavior of StreamHandler .
See https://docs.python.org/2/library/logging.html#handler-objects
Parameter
Name
Description
record
logging.LogRecord
The record to be logged.
get_gae_labels
get_gae_labels ()
Return the labels for GAE app.
If the trace ID can be detected, it will be included as a label.
Currently, no other labels are included.
Returns
Type
Description
dict
Labels for GAE app.
get_gae_resource
get_gae_resource ()
Return the GAE resource using the environment variables.
Returns
Type
Description
google.cloud.logging_v2.resource.Resource
Monitored resource for GAE.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
