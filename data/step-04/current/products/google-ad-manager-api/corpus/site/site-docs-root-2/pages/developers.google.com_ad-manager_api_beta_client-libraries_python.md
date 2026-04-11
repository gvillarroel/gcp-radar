---
title: "Python \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/client-libraries/python
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/client-libraries/python
  title: "Python \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Send feedback
Python
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google provides a Python client library for interacting with the Ad Manager API, which is recommended for use with PyPI.
The Python client library uses OAuth2 and Application Default Credentials (ADC) for authentication.
You can make requests to the API using ServiceClient objects and their synchronous or asynchronous methods.
The Python client library supports logging HTTP requests and responses using the standard Python logging library.
API errors extend the GoogleAPIError base class and include a requestId for troubleshooting.
Google provides a Python client library for interacting with the Ad Manager API.
We recommend using the client library with PyPI.
To get started, create a new project in the IDE of your choice or add the
dependency to an existing project. Google publishes client library artifacts to
PyPI as google-ads-admanager .
pip install google-ads-admanager
Configure credentials
The Python client library uses OAuth2 and Application Default Credentials
(ADC) to authenticate.
ADC searches for credentials in order in the following locations:
GOOGLE_APPLICATION_CREDENTIALS environment variable.
User credentials set up through the Google Cloud CLI (gcloud CLI).
When running on Google Cloud, the service account attached to the Google Cloud resource.
For creating and configuring your ADC credentials, see
Authentication .
Make your first request
Each service has a ServiceClient object with both synchronous and asynchronous
methods for each REST method. The following example reads a Network
synchronously.
from google.ads import admanager_v1
def sample_get_network ():
# Create a client
client = admanager_v1 . NetworkServiceClient ()
# Initialize request argument(s)
request = admanager_v1 . GetNetworkRequest (
name = "networks/[NETWORK_CODE]" ,
)
# Make the request
response = client . get_network ( request = request )
# Handle the response
print ( response )
admanager_v1_generated_network_service_get_network_sync . py
For examples of other methods and resources, see the GitHub repository
googleapis/google-cloud-python .
Log HTTP requests and responses
The Python client library library uses the standard Python logging
library to log HTTP requests and responses. By default, logging is disabled.
To enable logging, set the environment variable
GOOGLE_SDK_PYTHON_LOGGING_SCOPE . This environment variable configures
handling of logging events at level logging.DEBUG or higher.
# Log only Ad Manager API events
export GOOGLE_SDK_PYTHON_LOGGING_SCOPE = google.ads.admanager_v1
# Log all Google library events
export GOOGLE_SDK_PYTHON_LOGGING_SCOPE = google
Alternatively, you can use the Python logging module:
import logging
from google.ads import admanager_v1
logger = logging . getLogger ( "google.ads.admanager_v1" )
logger . addHandler ( logging . StreamHandler ())
logger . setLevel ( logging . DEBUG )
Handle errors
All API errors extend the base class GoogleAPIError .
The error reason field uniquely identifies error types. Use
this field to determine how to handle the error.
try :
network = client . get_network ( request = request )
print ( network )
except GoogleAPIError as e :
# Handle error
print ( e . reason )
Ad Manager API errors also include a unique requestId you can
provide to support for assistance with
troubleshooting. The following example extracts the
requestId from a GoogleAPIError ;
except GoogleAPIError as e :
requestInfoType = "type.googleapis.com/google.rpc.RequestInfo"
requestInfo = [ detail for detail in e . details if detail [ '@type' ] == requestInfoType ][ 0 ]
print ( requestInfo [ 'requestId' ])
Configure proxy settings
The Python client library respects environment variable settings http_proxy
and https_proxy .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["The content outlines using Google's Python client library for the Ad Manager API. Key actions include installing the `google-ads-admanager` library via PyPI and configuring credentials using OAuth2 and Application Default Credentials (ADC), with environment variables, the Google Cloud CLI, or service accounts. A request is made to read a network, demonstrating synchronous method usage. Error handling is shown using `GoogleAPIError` to get `requestId` and using `e.reason`. It details configuring the proxy settings for the library via `http_proxy` and `https_proxy`.\n"]]
