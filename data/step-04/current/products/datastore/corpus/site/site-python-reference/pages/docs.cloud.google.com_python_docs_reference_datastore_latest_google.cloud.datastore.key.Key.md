---
title: "Class Key (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.key.Key
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.key.Key
  title: "Class Key (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class Key (2.24.0)
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
Properties
database
Database getter.
Returns
Type
Description
str
The database of the current key.
flat_path
Getter for the key path as a tuple.
Returns
Type
Description
tuple of string and integer
The tuple of elements in the path.
id
ID getter. Based on the last element of path.
Returns
Type
Description
int
The (integer) ID of the key.
id_or_name
Getter. Based on the last element of path.
Returns
Type
Description
int (if id ) or string (if name )
The last element of the key's path if it is either an id or a name .
is_partial
Boolean indicating if the key has an ID (or name).
Returns
Type
Description
bool
True if the last element of the key's path does not have an id or a name .
kind
Kind getter. Based on the last element of path.
Returns
Type
Description
str
The kind of the current key.
name
Name getter. Based on the last element of path.
Returns
Type
Description
str
The (string) name of the key.
namespace
Namespace getter.
Returns
Type
Description
str
The namespace of the current key.
parent
The parent of the current key.
Returns
Type
Description
Key or NoneType
A new Key instance, whose path consists of all but the last element of current path. If the current key has only one path element, returns None .
path
Path getter.
Returns a copy so that the key remains immutable.
Returns
Type
Description
list of dict
The (key) path of the current key.
project
Project getter.
Returns
Type
Description
str
The key's project.
Methods
__eq__
__eq__ ( other )
Compare two keys for equality.
Incomplete keys never compare equal to any other key.
Completed keys compare equal if they have the same path, project,
database, and namespace.
(Note that database=None is considered to refer to the default database.)
Returns
Type
Description
bool
True if the keys compare equal, else False.
__hash__
__hash__ ()
Hash this key for use in a dictionary lookup.
Returns
Type
Description
int
a hash of the key's state.
__ne__
__ne__ ( other )
Compare two keys for inequality.
Incomplete keys never compare equal to any other key.
Completed keys compare equal if they have the same path, project,
database, and namespace.
(Note that database=None is considered to refer to the default database.)
Returns
Type
Description
bool
False if the keys compare equal, else True.
__repr__
__repr__ ()
String representation of this key.
Includes the project and database, but suppresses them if they are
equal to the default values.
completed_key
completed_key ( id_or_name )
Creates new key from existing partial key by adding final ID/name.
Parameter
Name
Description
id_or_name
str or integer
ID or name to be added to the key.
Exceptions
Type
Description
`ValueError
if the current key is not partial or if id_or_name is not a string or integer.
Returns
Type
Description
Key
A new Key instance with the same data as the current one and an extra ID or name added.
from_legacy_urlsafe
from_legacy_urlsafe ( urlsafe )
Convert urlsafe string to xref_Key.
This is intended to work with the "legacy" representation of a
datastore "Key" used within Google App Engine (a so-called
"Reference"). This assumes that urlsafe was created within an App
Engine app via something like ndb.Key(...).urlsafe() .
Note:
from_legacy_urlsafe only supports the default database.
Parameter
Name
Description
urlsafe
bytes or unicode
The base64 encoded (ASCII) string corresponding to a datastore "Key" / "Reference".
Returns
Type
Description
Key .
The key corresponding to urlsafe .
to_legacy_urlsafe
to_legacy_urlsafe ( location_prefix = None )
Convert to a base64 encode urlsafe string for App Engine.
This is intended to work with the "legacy" representation of a
datastore "Key" used within Google App Engine (a so-called
"Reference"). The returned string can be used as the urlsafe
argument to ndb.Key(urlsafe=...) . The base64 encoded values
will have padding removed.
Note:
The string returned by to_legacy_urlsafe is equivalent, but
not identical, to the string returned by ndb . The location
prefix may need to be specified to obtain identical urlsafe
keys.
Parameter
Name
Description
location_prefix
str
The location prefix of an App Engine project ID. Often this value is 's ', but may also be 'e ', or other location prefixes currently unknown.
Returns
Type
Description
bytes
A bytestring containing the key encoded as URL-safe base64.
to_protobuf
to_protobuf ()
Return a protobuf corresponding to the key.
Returns
Type
Description
.entity_pb2.Key
The protobuf representing the key.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
