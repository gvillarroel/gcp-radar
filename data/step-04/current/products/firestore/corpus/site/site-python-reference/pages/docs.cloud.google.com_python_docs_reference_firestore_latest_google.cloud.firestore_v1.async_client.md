---
title: "Module async_client (2.23.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_client
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/firestore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_client
  title: "Module async_client (2.23.0) \_|\_ Python client libraries \_|\_ Google\
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
Module async_client (2.23.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.23.0 (latest)
2.22.0
2.21.0
2.20.2
2.19.0
2.18.0
2.17.2
2.16.1
2.15.0
2.14.0
2.13.1
2.12.0
2.11.1
2.10.1
2.9.1
2.8.0
2.7.3
2.6.1
2.5.3
2.4.0
2.3.4
2.2.0
2.1.3
2.0.2
1.9.2
1.8.1
1.7.0
1.6.2
1.5.0
1.4.0
1.3.0
Client for interacting with the Google Cloud Firestore API.
This is the base from which all interactions with the API occur.
In the hierarchy of API concepts
a Client owns a
AsyncCollectionReference
a Client owns a
AsyncDocumentReference
Classes
AsyncClient
AsyncClient (
project = None ,
credentials = None ,
database = None ,
client_info = google . api_core . gapic_v1 . client_info . ClientInfo ,
client_options = None ,
)
Client for interacting with Google Cloud Firestore API.
Note:
Since the Cloud Firestore API requires the gRPC transport, no
_http argument is accepted by this class.
Parameters
Name
Description
project
Optional[str]
The project which the client acts on behalf of. If not passed, falls back to the default inferred from the environment.
credentials
Optional[ google.auth.credentials.Credentials ]
The OAuth2 Credentials to use for this client. If not passed, falls back to the default inferred from the environment.
database
Optional[str]
The database name that the client targets. For now, DEFAULT_DATABASE (the default value) is the only valid database.
client_info
Optional[google.api_core.gapic_v1.client_info.ClientInfo]
The client info used to send a user-agent string along with API requests. If None , then default info will be used. Generally, you only need to set this if you're developing your own library or partner tool.
client_options
Union[dict, google.api_core.client_options.ClientOptions]
Client options used to set user options on the client. API Endpoint should be set through client_options.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
