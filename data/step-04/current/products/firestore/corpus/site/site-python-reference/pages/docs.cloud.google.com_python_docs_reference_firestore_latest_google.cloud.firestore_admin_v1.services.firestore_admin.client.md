---
title: "Module client (2.23.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/firestore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client
  title: "Module client (2.23.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module client (2.23.0)
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
API documentation for firestore_admin_v1.services.firestore_admin.client module.
Classes
FirestoreAdminClient
FirestoreAdminClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . firestore_admin_v1 . services . firestore_admin . transports . base . FirestoreAdminTransport ,
typing . Callable [
[ ... ],
google . cloud . firestore_admin_v1 . services . firestore_admin . transports . base . FirestoreAdminTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
The Cloud Firestore Admin API.
This API provides several administrative services for Cloud
Firestore.
Project, Database, Namespace, Collection, Collection Group, and
Document are used as defined in the Google Cloud Firestore API.
Operation: An Operation represents work being performed in the
background.
The index service manages Cloud Firestore indexes.
Index creation is performed asynchronously. An Operation resource is
created for each such asynchronous operation. The state of the
operation (including any errors encountered) may be queried via the
Operation resource.
The Operations collection provides a record of actions performed for
the specified Project (including any Operations in progress).
Operations are not created directly but through calls on other
collections or resources.
An Operation that is done may be deleted so that it is no longer
listed as part of the Operation collection. Operations are garbage
collected after 30 days. By default, ListOperations will only return
in progress and failed operations. To list completed operation,
issue a ListOperations request with the filter done: true .
Operations are created by service FirestoreAdmin , but are
accessed via service google.longrunning.Operations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
