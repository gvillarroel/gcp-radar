---
title: "Class AsyncClient (2.23.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_client.AsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/firestore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_client.AsyncClient
  title: "Class AsyncClient (2.23.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class AsyncClient (2.23.0)
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
Methods
batch
batch () - > google . cloud . firestore_v1 . async_batch . AsyncWriteBatch
Get a batch instance from this client.
Returns
Type
Description
AsyncWriteBatch
A "write" batch to be used for accumulating document changes and sending the changes all at once.
collection
collection (
* collection_path : str ,
) - > google . cloud . firestore_v1 . async_collection . AsyncCollectionReference
Get a reference to a collection.
For a top-level collection:
>>> client.collection('top')
For a sub-collection:
>>> client.collection('mydocs/doc/subcol')
>>> # is the same as
>>> client.collection('mydocs', 'doc', 'subcol')
Sub-collections can be nested deeper in a similar fashion.
Returns
Type
Description
AsyncCollectionReference
A reference to a collection in the Firestore database.
collection_group
collection_group (
collection_id : str ,
) - > google . cloud . firestore_v1 . async_query . AsyncCollectionGroup
Creates and returns a new AsyncQuery that includes all documents in the
database that are contained in a collection or subcollection with the
given collection_id.
>>> query = client.collection_group('mygroup')
Parameter
Name
Description
collection_id
str
Every collection or subcollection with this ID as the last segment of its path will be included. Cannot contain a slash.
Returns
Type
Description
AsyncCollectionGroup
The created AsyncQuery.
collections
collections (
retry : retries . AsyncRetry | object | None = _MethodDefault . _DEFAULT_VALUE ,
timeout : float | None = None ,
* ,
read_time : datetime . datetime | None = None
) - > AsyncGenerator [ AsyncCollectionReference , Any ]
List top-level collections of the client's database.
Parameters
Name
Description
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried. Defaults to a system-specified policy.
timeout
float
The timeout for this request. Defaults to a system-specified value.
read_time
Optional[datetime.datetime]
If set, reads documents as they were at the given time. This must be a timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. If no timezone is specified in the datetime.datetime object, it is assumed to be UTC.
Returns
Type
Description
Sequence[ AsyncCollectionReference ]
iterator of subcollections of the current document.
document
document (
* document_path : str ,
) - > google . cloud . firestore_v1 . async_document . AsyncDocumentReference
Get a reference to a document in a collection.
For a top-level document:
>>> client.document('collek/shun')
>>> # is the same as
>>> client.document('collek', 'shun')
For a document in a sub-collection:
>>> client.document('mydocs/doc/subcol/child')
>>> # is the same as
>>> client.document('mydocs', 'doc', 'subcol', 'child')
Documents in sub-collections can be nested deeper in a similar fashion.
Returns
Type
Description
AsyncDocumentReference
A reference to a document in a collection.
get_all
get_all (
references : List [ AsyncDocumentReference ],
field_paths : Iterable [ str ] | None = None ,
transaction : AsyncTransaction | None = None ,
retry : retries . AsyncRetry | object | None = _MethodDefault . _DEFAULT_VALUE ,
timeout : float | None = None ,
* ,
read_time : datetime . datetime | None = None
) - > AsyncGenerator [ DocumentSnapshot , Any ]
Retrieve a batch of documents.
Note:
Documents returned by this method are not guaranteed to be
returned in the same order that they are given in references .
If multiple references refer to the same document, the server
will only return one result.
See xref_field_path for
more information on field paths .
If a transaction is used and it already has write operations
added, this method cannot be used (i.e. read-after-write is not
allowed).
Parameters
Name
Description
references
List[.AsyncDocumentReference, ...]
Iterable of document references to be retrieved.
field_paths
Optional[Iterable[str, ...]]
An iterable of field paths ( . -delimited list of field names) to use as a projection of document fields in the returned results. If no value is provided, all fields will be returned.
transaction
Optional[ AsyncTransaction ]
An existing transaction that these references will be retrieved in.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried. Defaults to a system-specified policy.
timeout
float
The timeout for this request. Defaults to a system-specified value.
read_time
Optional[datetime.datetime] :Yields: *.DocumentSnapshot* -- The next document snapshot that fulfills the query, or :data: None if the document does not exist.
If set, reads documents as they were at the given time. This must be a timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. If no timezone is specified in the datetime.datetime object, it is assumed to be UTC.
pipeline
pipeline () - > google . cloud . firestore_v1 . pipeline_source . PipelineSource
Start a pipeline with this client.
Returns
Type
Description
PipelineSource
A pipeline that uses this client`
recursive_delete
recursive_delete (
reference : Union [ AsyncCollectionReference , AsyncDocumentReference ],
* ,
bulk_writer : Optional [ "BulkWriter" ] = None ,
chunk_size : int = 5000
) - > int
Deletes documents and their subcollections, regardless of collection
name.
Passing an AsyncCollectionReference leads to each document in the
collection getting deleted, as well as all of their descendents.
Passing an AsyncDocumentReference deletes that one document and all of
its descendents.
Parameter
Name
Description
bulk_writer
Optional[:class: @ google.cloud.firestore_v1.bulk_writer.BulkWriter ]
The BulkWriter used to delete all matching documents. Supply this if you want to override the default throttling behavior.
transaction
transaction (
max_attempts : int = 5 , read_only : bool = False
) - > google . cloud . firestore_v1 . async_transaction . AsyncTransaction
Get a transaction that uses this client.
See xref_AsyncTransaction for
more information on transactions and the constructor arguments.
Parameter
Name
Description
kwargs
Dict[str, Any]
The keyword arguments (other than client ) to pass along to the AsyncTransaction constructor.
Returns
Type
Description
AsyncTransaction
A transaction attached to this client.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
