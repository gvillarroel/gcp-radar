---
title: "Class Batch (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.batch.Batch
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.batch.Batch
  title: "Class Batch (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class Batch (2.24.0)
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
Properties
database
Getter for database in which the batch will run.
Returns
Type
Description
str
The database in which the batch will run.
mutations
Getter for the changes accumulated by this batch.
Every batch is committed with a single commit request containing all
the work to be done as mutations. Inside a batch, calling put
with an entity, or delete with a key, builds up the request by
adding a new mutation. This getter returns the protobuf that has been
built-up so far.
Returns
Type
Description
iterable
The list of .datastore_pb2.Mutation protobufs to be sent in the commit request.
namespace
Getter for namespace in which the batch will run.
Returns
Type
Description
str
The namespace in which the batch will run.
project
Getter for project in which the batch will run.
Returns
Type
Description
str
The project in which the batch will run.
Methods
begin
begin ()
Begins a batch.
This method is called automatically when entering a with
statement, however it can be called explicitly if you don't want
to use a context manager. If used outside a context manager,
client.get calls targeting the batch and commit/rollback calls
will need to be managed explicitly as well
Overridden by xref_Transaction.
Exceptions
Type
Description
`ValueError
if the batch has already begun.
commit
commit ( retry = None , timeout = None )
Commits the batch.
This is called automatically upon exiting a with statement,
however it can be called explicitly if you don't want to use a
context manager.
Parameters
Name
Description
retry
google.api_core.retry.Retry
A retry object used to retry requests. If None is specified, requests will be retried using a default configuration.
timeout
float
Time, in seconds, to wait for the request to complete. Note that if retry is specified, the timeout applies to each individual attempt.
Exceptions
Type
Description
`exceptions.ValueError
if the batch is not in progress.
current
current ()
Return the topmost batch / transaction, or None.
delete
delete ( key )
Remember a key to be deleted during commit .
Parameter
Name
Description
key
Key
the key to be deleted.
Exceptions
Type
Description
`exceptions.ValueError
if the batch is not in progress, if key is not complete, or if the key's project does not match ours.
put
put ( entity )
Remember an entity's state to be saved during commit .
Note:
Any existing properties for the entity will be replaced by those
currently set on this instance. Already-stored properties which do
not correspond to keys set on this instance will be removed from
the datastore.
Note:
Property values which are "text" ('unicode' in Python2, 'str' in
Python3) map to 'string_value' in the datastore; values which are
"bytes" ('str' in Python2, 'bytes' in Python3) map to 'blob_value'.
When an entity has a partial key, calling commit sends it as
an insert mutation and the key is completed. On return,
the key for the entity passed in is updated to match the key ID
assigned by the server.
Parameter
Name
Description
entity
Entity
the entity to be saved.
Exceptions
Type
Description
`exceptions.ValueError
if the batch is not in progress, if entity has no key assigned, or if the key's project does not match ours.
rollback
rollback ()
Rolls back the current batch.
Marks the batch as aborted (can't be used again).
This is called automatically upon exiting a with statement,
however it can be called explicitly if you don't want to use a
context manager.
Overridden by xref_Transaction.
Exceptions
Type
Description
`exceptions.ValueError
if the batch is not in progress.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
