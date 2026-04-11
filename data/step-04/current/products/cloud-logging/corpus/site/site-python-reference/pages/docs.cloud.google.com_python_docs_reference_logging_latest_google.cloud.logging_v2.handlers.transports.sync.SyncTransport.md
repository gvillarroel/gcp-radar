---
title: "Class SyncTransport (3.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.transports.sync.SyncTransport
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/logging/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.transports.sync.SyncTransport
  title: "Class SyncTransport (3.15.0) \_|\_ Python client libraries \_|\_ Google\
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
Class SyncTransport (3.15.0)
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
SyncTransport ( client , name , resource = Resource ( type = "global" , labels = {}), ** kwargs )
Basic sychronous transport.
Uses this library's Logging client to directly make the API call.
Methods
SyncTransport
SyncTransport ( client , name , resource = Resource ( type = "global" , labels = {}), ** kwargs )
Parameters
Name
Description
client
logging_v2.client.Client
The Logging client.
name
str
The name of the lgoger.
resource
Optional[Resource|dict]
The default monitored resource to associate with logs when not specified
close
close ()
Closes the transport and cleans up resources used by it.
This call is usually followed up by cleaning up the reference to the transport.
send
send ( record , message , ** kwargs )
Overrides transport.send().
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
