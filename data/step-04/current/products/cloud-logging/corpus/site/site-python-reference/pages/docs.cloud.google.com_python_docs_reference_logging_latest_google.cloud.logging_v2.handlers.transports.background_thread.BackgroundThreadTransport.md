---
title: "Class BackgroundThreadTransport (3.15.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.transports.background_thread.BackgroundThreadTransport
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/logging/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.transports.background_thread.BackgroundThreadTransport
  title: "Class BackgroundThreadTransport (3.15.0) \_|\_ Python client libraries \_\
    |\_ Google Cloud Documentation"
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
Class BackgroundThreadTransport (3.15.0)
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
BackgroundThreadTransport (
client ,
name ,
* ,
grace_period = 5.0 ,
batch_size = 10 ,
max_latency = 0 ,
resource = Resource ( type = "global" , labels = {}),
** kwargs
)
Asynchronous transport that uses a background thread.
Methods
BackgroundThreadTransport
BackgroundThreadTransport (
client ,
name ,
* ,
grace_period = 5.0 ,
batch_size = 10 ,
max_latency = 0 ,
resource = Resource ( type = "global" , labels = {}),
** kwargs
)
Parameters
Name
Description
client
logging_v2.client.Client
The Logging client.
name
str
The name of the lgoger.
grace_period
Optional[float]
The amount of time to wait for pending logs to be submitted when the process is shutting down.
batch_size
Optional[int]
The maximum number of items to send at a time in the background thread.
max_latency
Optional[float]
The amount of time to wait for new logs before sending a new batch. It is strongly recommended to keep this smaller than the grace_period. This means this is effectively the longest amount of time the background thread will hold onto log entries before sending them to the server.
resource
Optional[Resource|dict]
The default monitored resource to associate with logs when not specified
close
close ()
Closes the worker thread.
flush
flush ()
Submit any pending log records.
send
send ( record , message , ** kwargs )
Overrides Transport.send().
Parameters
Name
Description
record
logging.LogRecord
Python log record that the handler was called with.
message
str or dict
The message from the LogRecord after being formatted by the associated log formatters.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
