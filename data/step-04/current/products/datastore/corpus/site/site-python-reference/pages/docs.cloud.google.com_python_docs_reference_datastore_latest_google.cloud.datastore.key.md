---
title: "Module key (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.key
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.key
  title: "Module key (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Module key (2.24.0)
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
Create / interact with Google Cloud Datastore keys.
Classes
Key
Key ( * path_args , ** kwargs )
An immutable representation of a datastore Key.
.. testsetup:: key-ctor
from google.cloud import datastore
project = 'my-special-pony'
client = datastore.Client(project=project)
Key = datastore.Key
parent_key = client.key('Parent', 'foo')
To create a basic key directly:
.. doctest:: key-ctor
Key('EntityKind', 1234, project=project)
<Key('EntityKind', 1234), project=...>
Key('EntityKind', 'foo', project=project)
<Key('EntityKind', 'foo'), project=...>
Though typical usage comes via the
xref_key factory:
.. doctest:: key-ctor
client.key('EntityKind', 1234)
<Key('EntityKind', 1234), project=...>
client.key('EntityKind', 'foo')
<Key('EntityKind', 'foo'), project=...>
To create a key with a parent:
.. doctest:: key-ctor
client.key('Parent', 'foo', 'Child', 1234)
<Key('Parent', 'foo', 'Child', 1234), project=...>
client.key('Child', 1234, parent=parent_key)
<Key('Parent', 'foo', 'Child', 1234), project=...>
To create a partial key:
.. doctest:: key-ctor
client.key('Parent', 'foo', 'Child')
<Key('Parent', 'foo', 'Child'), project=...>
To create a key from a non-default database:
.. doctest:: key-ctor
Key('EntityKind', 1234, project=project, database='mydb')
<Key('EntityKind', 1234), project=my-special-pony, database=mydb>
Parameter
Name
Description
path_args
tuple of string and integer
May represent a partial (odd length) or full (even length) key path.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
