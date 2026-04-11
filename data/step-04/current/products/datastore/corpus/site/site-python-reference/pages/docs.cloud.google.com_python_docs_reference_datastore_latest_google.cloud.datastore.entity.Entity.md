---
title: "Class Entity (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.entity.Entity
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.entity.Entity
  title: "Class Entity (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class Entity (2.24.0)
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
Entity ( key = None , exclude_from_indexes = ())
Entities are akin to rows in a relational database
An entity storing the actual instance of data.
Each entity is officially represented with a
xref_Key, however it is possible that
you might create an entity with only a partial key (that is, a key
with a kind, and possibly a parent, but without an ID). In such a
case, the datastore service will automatically assign an ID to the
partial key.
Entities in this API act like dictionaries with extras built in that
allow you to delete or persist the data stored on the entity.
Entities are mutable and act like a subclass of a dictionary.
This means you could take an existing entity and change the key
to duplicate the object.
Use xref_get to retrieve an
existing entity:
.. testsetup:: entity-ctor
import uuid
from google.cloud import datastore
unique = str(uuid.uuid4())[0:8]
client = datastore . Client (namespace='ns{}'.format(unique))
entity = datastore . Entity (client. key ('EntityKind', 1234))
entity['property'] = 'value'
client. put (entity)
.. doctest:: entity-ctor
>>> key = client.key('EntityKind', 1234)
>>> client.get(key)
<Entity('EntityKind', 1234) {'property': 'value'}>
You can the set values on the entity just like you would on any
other dictionary.
.. doctest:: entity-ctor
>>> entity['age'] = 20
>>> entity['name'] = 'JJ'
.. testcleanup:: entity-ctor
client.delete(entity.key)
However, not all types are allowed as a value for a Google Cloud Datastore
entity. The following basic types are supported by the API:
datetime.datetime
xref_Key
bool
float
int (as well as long in Python 2)
unicode (called str in Python 3)
bytes (called str in Python 2)
xref_GeoPoint
:data: None
In addition, three container types are supported:
list
xref_Entity
dict (will just be treated like an Entity without
a key or exclude_from_indexes )
Each entry in a list must be one of the value types (basic or
container) and each value in an
xref_Entity must as well. In
this case an xref_Entity as a
container acts as a dict , but also has the special annotations
of key and exclude_from_indexes .
And you can treat an entity like a regular Python dictionary:
.. testsetup:: entity-dict
from google.cloud import datastore
entity = datastore . Entity ()
entity['age'] = 20
entity['name'] = 'JJ'
.. doctest:: entity-dict
>>> sorted(entity.keys())
['age', 'name']
>>> sorted(entity.items())
[('age', 20), ('name', 'JJ')]
Note:
When saving an entity to the backend, values which are "text"
( unicode in Python2, str in Python3) will be saved using
the 'text_value' field, after being encoded to UTF-8. When
retrieved from the back-end, such values will be decoded to "text"
again. Values which are "bytes" ( str in Python2, bytes in
Python3), will be saved using the 'blob_value' field, without
any decoding / encoding step.
Parameters
Name
Description
key
Key
Optional key to be set on entity.
exclude_from_indexes
tuple of string
Names of fields whose values are not to be indexed for this entity.
Properties
id
Get the ID of the current entity.
Note:
This relies entirely on the Key
set on the entity. That means that we're not storing the ID
of the entity at all, just the properties and a pointer to a
Key which knows its ID.
kind
Get the kind of the current entity.
Note:
This relies entirely on the Key
set on the entity. That means that we're not storing the kind
of the entity at all, just the properties and a pointer to a
Key which knows its Kind.
Methods
__eq__
__eq__ ( other )
Compare two entities for equality.
Entities compare equal if their keys compare equal and their
properties compare equal.
Returns
Type
Description
bool
True if the entities compare equal, else False.
__ne__
__ne__ ( other )
Compare two entities for inequality.
Entities compare equal if their keys compare equal and their
properties compare equal.
Returns
Type
Description
bool
False if the entities compare equal, else True.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
