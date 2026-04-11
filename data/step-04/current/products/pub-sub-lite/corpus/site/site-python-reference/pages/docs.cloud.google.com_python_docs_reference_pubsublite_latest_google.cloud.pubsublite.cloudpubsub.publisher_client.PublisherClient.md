---
title: "Class PublisherClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/pubsublite/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.cloudpubsub.publisher_client.PublisherClient
  title: "Class PublisherClient (1.13.0) \_|\_ Python client libraries \_|\_ Google\
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
Class PublisherClient (1.13.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.13.0 (latest)
1.12.0
1.11.1
1.10.0
1.9.0
1.8.3
1.7.0
1.6.0
1.5.0
1.4.3
1.3.0
1.2.0
1.1.4
1.0.2
0.6.1
0.5.0
0.4.1
0.3.0
0.2.0
0.1.0
PublisherClient (
* ,
per_partition_batching_settings : typing . Optional [
google . cloud . pubsub_v1 . types . BatchSettings
] = None ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : str = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
enable_idempotence : bool = False
)
A PublisherClient publishes messages similar to Google Pub/Sub.
Any publish failures are unlikely to succeed if retried.
Must be used in a with block or have enter () called before use.
Methods
PublisherClient
PublisherClient (
* ,
per_partition_batching_settings : typing . Optional [
google . cloud . pubsub_v1 . types . BatchSettings
] = None ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : str = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
enable_idempotence : bool = False
)
Create a new PublisherClient.
__enter__
__enter__ ()
Return self upon entering the runtime context.
__exit__
__exit__ ( exc_type , exc_value , traceback )
Raise any exception triggered within the runtime context.
publish
publish (
topic : typing . Union [ google . cloud . pubsublite . types . paths . TopicPath , str ],
data : bytes ,
ordering_key : str = "" ,
** attrs : typing . Mapping [ str , str ]
) - > concurrent . futures . _base . Future [ str ]
Publish a message.
Exceptions
Type
Description
GoogleApiCallError
On a permanent failure.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
