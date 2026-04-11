---
title: "Python Client for Cloud Location Finder API \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest
  title: "Python Client for Cloud Location Finder API \_|\_ Python client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Python Client for Cloud Location Finder API
Stay organized with collections
Save and categorize content based on your preferences.
0.4.0 (latest)
0.3.0
0.2.0
0.1.0
Cloud Location Finder API : Cloud Location Finder lets you identify and filter cloud locations in regions and zones across Google Cloud, Google Distributed Cloud, Microsoft Azure, Amazon Web Services, and Oracle Cloud Infrastructure based on proximity, geographic location, and carbon footprint.
Client Library Documentation
Product Documentation
Quick Start
In order to use this library, you first need to go through the following steps:
Select or create a Cloud Platform project.
Enable billing for your project.
Enable the Cloud Location Finder API.
Set up Authentication.
Installation
Install this library in a virtual environment using venv . venv is a tool that
creates isolated Python environments. These isolated environments can have separate
versions of Python packages, which allows you to isolate one project’s dependencies
from the dependencies of other projects.
With venv , it’s possible to install this library without needing system
install permissions, and without clashing with the installed system
dependencies.
Code samples and snippets
Code samples and snippets live in the samples/ folder.
Supported Python Versions
Our client libraries are compatible with all current active and maintenance versions of
Python.
Python >= 3.9, including 3.14
Unsupported Python Versions
Python <= 3.8
If you are using an end-of-life
version of Python, we recommend that you update as soon as possible to an actively supported version.
Mac/Linux
python3 -m venv <your-env>
source <your-env>/bin/activate
pip install google-cloud-locationfinder
Windows
py -m venv <your-env>
.\<your-env>\Scripts\activate
pip install google-cloud-locationfinder
Next Steps
Read the Client Library Documentation for Cloud Location Finder API
to see other available methods on the client.
Read the Cloud Location Finder API Product documentation to learn
more about the product and see How-to Guides.
View this README to see the full list of Cloud
APIs that we cover.
Logging
This library uses the standard Python logging functionality to log some RPC events that could be of interest for debugging and monitoring purposes.
Note the following:
Logs may contain sensitive information. Take care to restrict access to the logs if they are saved, whether it be on local storage or on Google Cloud Logging.
Google may refine the occurrence, level, and content of various log messages in this library without flagging such changes as breaking. Do not depend on immutability of the logging events .
By default, the logging events from this library are not handled. You must explicitly configure log handling using one of the mechanisms below.
Simple, environment-based configuration
To enable logging for this library without any changes in your code, set the GOOGLE_SDK_PYTHON_LOGGING_SCOPE environment variable to a valid Google
logging scope. This configures handling of logging events (at level logging.DEBUG or higher) from this library in a default manner, emitting the logged
messages in a structured format. It does not currently allow customizing the logging levels captured nor the handlers, formatters, etc. used for any logging
event.
A logging scope is a period-separated namespace that begins with google , identifying the Python module or package to log.
Valid logging scopes: google , google.cloud.asset.v1 , google.api , google.auth , etc.
Invalid logging scopes: foo , 123 , etc.
NOTE : If the logging scope is invalid, the library does not set up any logging handlers.
Environment-Based Examples
Enabling the default handler for all Google-based loggers
export GOOGLE_SDK_PYTHON_LOGGING_SCOPE=google
Enabling the default handler for a specific Google module (for a client library called library_v1 ):
export GOOGLE_SDK_PYTHON_LOGGING_SCOPE=google.cloud.library_v1
Advanced, code-based configuration
You can also configure a valid logging scope using Python’s standard logging mechanism.
Code-Based Examples
Configuring a handler for all Google-based loggers
import logging
from google.cloud import library_v1
base_logger = logging.getLogger("google")
base_logger.addHandler(logging.StreamHandler())
base_logger.setLevel(logging.DEBUG)
Configuring a handler for a specific Google module (for a client library called library_v1 ):
import logging
from google.cloud import library_v1
base_logger = logging.getLogger("google.cloud.library_v1")
base_logger.addHandler(logging.StreamHandler())
base_logger.setLevel(logging.DEBUG)
Logging details
Regardless of which of the mechanisms above you use to configure logging for this library, by default logging events are not propagated up to the root
logger from the google-level logger. If you need the events to be propagated to the root logger, you must explicitly set
logging.getLogger("google").propagate = True in your code.
You can mix the different logging configurations above for different Google modules. For example, you may want use a code-based logging configuration for
one library, but decide you need to also set up environment-based logging configuration for another library.
If you attempt to use both code-based and environment-based configuration for the same module, the environment-based configuration will be ineffectual
if the code -based configuration gets applied first.
The Google-specific logging configurations (default handlers for environment-based configuration; not propagating logging events to the root logger) get
executed the first time any client library is instantiated in your application, and only if the affected loggers have not been previously configured.
(This is the reason for 2.i. above.)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
