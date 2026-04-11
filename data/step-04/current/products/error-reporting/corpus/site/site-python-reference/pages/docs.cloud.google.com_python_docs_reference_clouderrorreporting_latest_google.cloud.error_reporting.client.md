---
title: "Module client (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.error_reporting.client
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.error_reporting.client
  title: "Module client (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module client (1.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.15.0 (latest)
1.14.0
1.13.0
1.12.0
1.11.1
1.10.0
1.9.2
1.8.2
1.7.0
1.6.3
1.5.3
1.4.1
1.3.0
1.2.3
1.1.2
1.0.0
0.34.0
0.33.0
0.32.1
Client for interacting with the Error Reporting API
Classes
Client
Client (
project = None ,
credentials = None ,
_http = None ,
service = None ,
version = None ,
client_info = google . api_core . gapic_v1 . client_info . ClientInfo ,
client_options = None ,
_use_grpc = None ,
)
Error Reporting client. Currently Error Reporting is done by creating
a Logging client.
Parameters
Name
Description
project
str
the project which the client acts on behalf of. If not passed falls back to the default inferred from the environment.
credentials
google.auth.credentials.Credentials or NoneType
The authorization credentials to attach to requests. These credentials identify this application to the service. If none are specified, the client will attempt to ascertain the credentials from the environment.
_http
requests.Session
(Optional) HTTP object to make requests. Can be any object that defines request() with the same interface as requests.Session.request . If not passed, an _http object is created that is bound to the credentials for the current object. This parameter should be considered private, and could change in the future.
service
str
An identifier of the service, such as the name of the executable, job, or Google App Engine service name. This field is expected to have a low number of values that are relatively stable over time, as opposed to version, which can be changed whenever new code is deployed.
version
str
Represents the source code version that the developer provided, which could represent a version label or a Git SHA-1 hash, for example. If the developer did not provide a version, the value is set to default.
_use_grpc
bool
(Optional) Explicitly specifies whether to use the gRPC transport or HTTP. If unset, falls back to the GOOGLE_CLOUD_DISABLE_GRPC environment variable. This parameter should be considered private, and could change in the future.
client_info
google.api_core.client_info.ClientInfo or google.api_core.gapic_v1.client_info.ClientInfo
The client info used to send a user-agent string along with API requests. If None , then default info will be used. Generally, you only need to set this if you're developing your own library or partner tool.
client_options
google.api_core.client_options.ClientOptions or dict
(Optional) Client options used to set user options on the client. API Endpoint should be set through client_options.
Exceptions
Type
Description
`ValueError
if the project is neither passed in nor set in the environment.
HTTPContext
HTTPContext (
method = None ,
url = None ,
user_agent = None ,
referrer = None ,
response_status_code = None ,
remote_ip = None ,
)
HTTPContext defines an object that captures the parameter for the
httpRequest part of Error Reporting API
Parameters
Name
Description
method
str
The type of HTTP request, such as GET, POST, etc.
url
str
The URL of the request
user_agent
str
The user agent information that is provided with the request.
referrer
str
The referrer information that is provided with the request.
response_status_code
int
The HTTP response status code for the request.
remote_ip
str
The IP address from which the request originated. This can be IPv4, IPv6, or a token which is derived from the IP address, depending on the data that has been provided in the error report.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
