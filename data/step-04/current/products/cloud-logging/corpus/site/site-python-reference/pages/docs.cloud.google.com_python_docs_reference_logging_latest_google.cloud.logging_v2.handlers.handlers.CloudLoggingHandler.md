---
title: "Class CloudLoggingHandler (3.15.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/logging/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler
  title: "Class CloudLoggingHandler (3.15.0) \_|\_ Python client libraries \_|\_ Google\
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
Class CloudLoggingHandler (3.15.0)
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
CloudLoggingHandler (
client ,
* ,
name : str = "python" ,
transport : typing . Type [
google . cloud . logging_v2 . handlers . transports . base . Transport
] = google . cloud . logging_v2 . handlers . transports . background_thread . BackgroundThreadTransport ,
resource : typing . Optional [ google . cloud . logging_v2 . resource . Resource ] = None ,
labels : typing . Optional [ dict ] = None ,
stream : typing . Optional [ typing . IO ] = None ,
** kwargs
)
Handler that directly makes Cloud Logging API calls.
This is a Python standard logging handler using that can be used to
route Python standard logging messages directly to the Stackdriver
Logging API.
This handler is used when not in GAE or GKE environment.
This handler supports both an asynchronous and synchronous transport.
Example:
import logging
import google.cloud.logging
from google.cloud.logging_v2.handlers import CloudLoggingHandler
client = google.cloud.logging. Client ()
handler = CloudLoggingHandler(client)
cloud_logger = logging.getLogger('cloudLogger')
cloud_logger.setLevel(logging.INFO)
cloud_logger.addHandler(handler)
cloud_logger.error('bad news') # API call
Methods
CloudLoggingHandler
CloudLoggingHandler (
client ,
* ,
name : str = "python" ,
transport : typing . Type [
google . cloud . logging_v2 . handlers . transports . base . Transport
] = google . cloud . logging_v2 . handlers . transports . background_thread . BackgroundThreadTransport ,
resource : typing . Optional [ google . cloud . logging_v2 . resource . Resource ] = None ,
labels : typing . Optional [ dict ] = None ,
stream : typing . Optional [ typing . IO ] = None ,
** kwargs
)
Parameters
Name
Description
client
logging_v2.client.Client
The authenticated Google Cloud Logging client for this handler to use.
name
str
the name of the custom log in Cloud Logging. Defaults to 'python'. The name of the Python logger will be represented in the python_logger field.
transport
logging_v2.transports.Transport
Class for creating new transport objects. It should extend from the base .Transport type and implement :meth .Transport.send . Defaults to .BackgroundThreadTransport . The other option is .SyncTransport .
resource
logging_v2.resource.Resource
Resource for this Handler. If not given, will be inferred from the environment.
labels
Optional[dict]
Additional labels to attach to logs.
stream
Optional[IO]
Stream to be used by the handler.
close
close ()
Closes the log handler and cleans up all Transport objects used.
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
flush
flush ()
Forces the Transport object to submit any pending log records.
For SyncTransport, this is a no-op.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
