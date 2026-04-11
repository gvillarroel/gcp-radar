---
title: "Module client (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.client
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.client
  title: "Module client (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module client (2.24.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.24.0 (latest)
2.23.0
2.22.0
2.21.0
2.20.2
2.19.0
2.18.0
2.17.0
2.16.1
2.15.2
2.14.0
2.13.2
2.12.0
2.11.1
2.10.0
2.9.0
2.8.3
2.7.2
2.6.2
2.5.1
2.4.0
2.3.0
2.2.0
2.1.6
2.0.1
1.15.5
1.14.0
1.13.2
1.12.0
1.11.0
1.10.0
1.9.0
Convenience wrapper for invoking APIs/factories w/ a project.
Classes
Client
Client (
project = None ,
namespace = None ,
credentials = None ,
client_info = google . api_core . gapic_v1 . client_info . ClientInfo ,
client_options = None ,
database = None ,
_http = None ,
_use_grpc = None ,
)
Convenience wrapper for invoking APIs/factories w/ a project.
.. doctest::
from google.cloud import datastore
client = datastore.Client()
Parameters
Name
Description
project
str
(Optional) The project to pass to proxied API methods.
namespace
str
(Optional) namespace to pass to proxied API methods.
credentials
google.auth.credentials.Credentials
(Optional) The OAuth2 Credentials to use for this client. If not passed (and if no _http object is passed), falls back to the default inferred from the environment.
client_info
google.api_core.gapic_v1.client_info.ClientInfo or google.api_core.client_info.ClientInfo
(Optional) The client info used to send a user-agent string along with API requests. If None , then default info will be used. Generally, you only need to set this if you're developing your own library or partner tool.
client_options
google.api_core.client_options.ClientOptions or dict
(Optional) Client options used to set user options on the client. API Endpoint should be set through client_options.
_http
requests.Session
(Optional) HTTP object to make requests. Can be any object that defines request() with the same interface as requests.Session.request . If not passed, an _http object is created that is bound to the credentials for the current object. This parameter should be considered private, and could change in the future.
_use_grpc
bool
(Optional) Explicitly specifies whether to use the gRPC transport (via GAX) or HTTP. If unset, falls back to the GOOGLE_CLOUD_DISABLE_GRPC environment variable. This parameter should be considered private, and could change in the future.
database
str
(Optional) database to pass to proxied API methods.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
