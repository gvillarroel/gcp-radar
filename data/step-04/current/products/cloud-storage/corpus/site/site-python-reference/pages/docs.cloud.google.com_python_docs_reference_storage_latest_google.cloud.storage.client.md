---
title: "Module client (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/storage/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client
  title: "Module client (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module client (3.10.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.10.0 (latest)
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.1
3.3.1
3.2.0
3.1.1
3.0.0
2.19.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.0
2.2.1
2.1.0
2.0.0
1.44.0
1.43.0
1.42.3
1.41.1
1.40.0
1.39.0
1.38.0
1.37.1
1.36.2
1.35.1
1.34.0
1.33.0
1.32.0
1.31.2
1.30.0
1.29.0
1.28.1
1.27.0
1.26.0
1.25.0
1.24.1
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
Client for interacting with the Google Cloud Storage API.
Classes
Client
Client (
project = object ,
credentials = None ,
_http = None ,
client_info = None ,
client_options = None ,
use_auth_w_custom_endpoint = True ,
extra_headers = {},
* ,
api_key = None
)
Client to bundle configuration needed for API requests.
Parameters
Name
Description
project
str or None
the project which the client acts on behalf of. Will be passed when creating a topic. If not passed, falls back to the default inferred from the environment.
credentials
google.auth.credentials.Credentials
(Optional) The OAuth2 Credentials to use for this client. If not passed (and if no _http object is passed), falls back to the default inferred from the environment.
_http
requests.Session
(Optional) HTTP object to make requests. Can be any object that defines request() with the same interface as requests.Session.request . If not passed, an _http object is created that is bound to the credentials for the current object. This parameter should be considered private, and could change in the future.
client_info
google.api_core.client_info.ClientInfo
The client info used to send a user-agent string along with API requests. If None , then default info will be used. Generally, you only need to set this if you're developing your own library or partner tool.
client_options
google.api_core.client_options.ClientOptions or dict
(Optional) Client options used to set user options on the client. A non-default universe domain or api endpoint should be set through client_options.
use_auth_w_custom_endpoint
bool
(Optional) Whether authentication is required under custom endpoints. If false, uses AnonymousCredentials and bypasses authentication. Defaults to True. Note this is only used when a custom endpoint is set in conjunction.
extra_headers
dict
(Optional) Custom headers to be sent with the requests attached to the client. For example, you can add custom audit logging headers.
api_key
string
(Optional) An API key. Mutually exclusive with any other credentials. This parameter is an alias for setting client_options.api_key and will supercede any api key set in the client_options parameter.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-19 UTC."],[],[]]
