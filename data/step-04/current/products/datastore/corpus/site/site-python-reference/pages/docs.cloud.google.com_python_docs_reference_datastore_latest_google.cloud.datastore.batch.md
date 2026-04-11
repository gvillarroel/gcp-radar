---
title: "Module batch (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.batch
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.batch
  title: "Module batch (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Module batch (2.24.0)
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
Create / interact with a batch of updates / deletes.
Batches provide the ability to execute multiple operations
in a single request to the Cloud Datastore API.
See
https://cloud.google.com/datastore/docs/concepts/entities#batch_operations
Classes
Batch
Batch ( client )
An abstraction representing a collected group of updates / deletes.
Used to build up a bulk mutation.
For example, the following snippet of code will put the two save
operations and the delete operation into the same mutation, and send
them to the server in a single API request:
.. testsetup:: batch
import uuid
from google.cloud import datastore
unique = str(uuid.uuid4())[0:8]
client = datastore . Client (namespace='ns{}'.format(unique))
.. doctest:: batch
>>> entity1 = datastore.Entity(client.key('EntityKind', 1234))
>>> entity2 = datastore.Entity(client.key('EntityKind', 2345))
>>> key3 = client.key('EntityKind', 3456)
>>> batch = client.batch()
>>> batch.begin()
>>> batch.put(entity1)
>>> batch.put(entity2)
>>> batch.delete(key3)
>>> batch.commit()
You can also use a batch as a context manager, in which case
commit will be called automatically if its block exits without
raising an exception:
.. doctest:: batch
>>> with client.batch() as batch:
... batch.put(entity1)
... batch.put(entity2)
... batch.delete(key3)
By default, no updates will be sent if the block exits with an error:
.. doctest:: batch
>>> def do_some_work(batch):
... return
>>> with client.batch() as batch:
... do_some_work(batch)
... raise Exception() # rolls back
Traceback (most recent call last):
...
Exception
.. testcleanup:: txn
with client.batch() as batch:
batch.delete(client.key('EntityKind', 1234))
batch.delete(client.key('EntityKind', 2345))
Parameter
Name
Description
client
Client
The client used to connect to datastore.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
