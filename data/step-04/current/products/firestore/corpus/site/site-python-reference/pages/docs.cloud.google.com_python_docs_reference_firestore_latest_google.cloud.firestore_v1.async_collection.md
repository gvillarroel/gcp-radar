---
title: "Module async_collection (2.23.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_collection
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/firestore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_collection
  title: "Module async_collection (2.23.0) \_|\_ Python client libraries \_|\_ Google\
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
Module async_collection (2.23.0)
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
Classes for representing collections for the Google Cloud Firestore API.
Classes
AsyncCollectionReference
AsyncCollectionReference ( * path , ** kwargs )
A reference to a collection in a Firestore database.
The collection may already exist or this class can facilitate creation
of documents within the collection.
Parameters
Name
Description
path
Tuple[str, ...]
The components in the collection path. This is a series of strings representing each collection and sub-collection ID, as well as the document IDs for any documents that contain a sub-collection.
kwargs
dict
The keyword arguments for the constructor. The only supported keyword is client and it must be a Client if provided. It represents the client that created this collection reference.
Exceptions
Type
Description
ValueError
if * the path is empty * there are an even number of elements * a collection ID in path is not a string * a document ID in path is not a string
TypeError
If a keyword other than client is used.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
