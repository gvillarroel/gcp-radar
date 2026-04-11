---
title: "Module helpers (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.helpers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.helpers
  title: "Module helpers (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module helpers (2.24.0)
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
Helper functions for dealing with Cloud Datastore's Protobuf API.
The non-private functions are part of the API.
Classes
GeoPoint
GeoPoint ( latitude , longitude )
Simple container for a geo point value.
Parameters
Name
Description
latitude
float
Latitude of a point.
longitude
float
Longitude of a point.
Modules
Functions
entity_from_protobuf
entity_from_protobuf ( pb )
Factory method for creating an entity based on a protobuf.
The protobuf should be one returned from the Cloud Datastore
Protobuf API.
Parameter
Name
Description
pb
.entity_pb2.Entity
The Protobuf representing the entity.
Returns
Type
Description
Entity
The entity derived from the protobuf.
entity_to_protobuf
entity_to_protobuf ( entity )
Converts an entity into a protobuf.
Parameter
Name
Description
entity
Entity
The entity to be turned into a protobuf.
Returns
Type
Description
.entity_pb2.Entity
The protobuf representing the entity.
get_read_options
get_read_options (
eventual , transaction_id , read_time = None , new_transaction_options = None
)
Validate rules for read options, and assign to the request.
Helper method for lookup() and run_query .
Parameters
Name
Description
eventual
bool
Flag indicating if EVENTUAL or STRONG consistency should be used.
transaction_id
bytes
A transaction identifier (may be null).
read_time
datetime
Read data from the specified time (may be null). This feature is in private preview.
new_transaction_options
TransactionOptions
Options for a new transaction.
Exceptions
Type
Description
`ValueError
if more than one of eventual==True , transaction_id , read_time , and new_transaction_options is specified.
Returns
Type
Description
.datastore_pb2.ReadOptions
The read options corresponding to the inputs.
get_transaction_options
get_transaction_options ( transaction )
Get the transaction_id or new_transaction_options field from an active transaction object,
for use in get_read_options
These are mutually-exclusive fields, so one or both will be None.
Returns
Type
Description
Tuple[Optional[bytes], Optional[google.cloud.datastore_v1.types.TransactionOptions]]
The transaction_id and new_transaction_options fields from the transaction object.
key_from_protobuf
key_from_protobuf ( pb )
Factory method for creating a key based on a protobuf.
The protobuf should be one returned from the Cloud Datastore
Protobuf API.
Parameter
Name
Description
pb
.entity_pb2.Key
The Protobuf representing the key.
Returns
Type
Description
Key
a new Key instance
set_database_id_to_request
set_database_id_to_request ( request , database_id = None )
Set the "database_id" field to the request only if it was provided.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
