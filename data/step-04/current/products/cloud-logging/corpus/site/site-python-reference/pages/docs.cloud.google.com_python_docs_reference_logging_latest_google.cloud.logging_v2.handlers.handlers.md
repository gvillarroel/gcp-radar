---
title: "Module handlers (3.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/logging/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers
  title: "Module handlers (3.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Module handlers (3.15.0)
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
Python logging handlers for Cloud Logging.
Classes
CloudLoggingFilter
CloudLoggingFilter ( project = None , default_labels = None )
Python standard logging Filter class to add Cloud Logging
information to each LogRecord.
When attached to a LogHandler, each incoming log will be modified
to include new Cloud Logging relevant data. This data can be manually
overwritten using the extras argument when writing logs.
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
Modules
Functions
setup_logging
setup_logging (
handler , * , excluded_loggers = ( "google.api_core.bidi" , "werkzeug" ), log_level = 20
)
Attach a logging handler to the Python root logger
Excludes loggers that this library itself uses to avoid
infinite recursion.
Example:
import logging
import google.cloud.logging
from google.cloud.logging_v2.handlers import CloudLoggingHandler
client = google.cloud.logging. Client ()
handler = CloudLoggingHandler(client)
google.cloud.logging. handlers .setup_logging(handler)
logging.getLogger().setLevel(logging.DEBUG)
logging.error('bad news') # API call
Parameters
Name
Description
handler
logging.handler
the handler to attach to the global handler
excluded_loggers
Optional[Tuple[str]]
The loggers to not attach the handler to. This will always include the loggers in the path of the logging client itself.
log_level
Optional[int]
The logging level threshold of the attached logger, as set by the logging.Logger.setLevel method. Defaults to :const: logging.INFO .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
