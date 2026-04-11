---
title: "Datastore Client \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/client
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/client
  title: "Datastore Client \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Datastore Client
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
Convenience wrapper for invoking APIs/factories w/ a project.
class google.cloud.datastore.client.Client(project=None, namespace=None, credentials=None, client_info=<google.api_core.gapic_v1.client_info.ClientInfo object>, client_options=None, database=None, _http=None, _use_grpc=None)
Bases: google.cloud.client.ClientWithProject
Convenience wrapper for invoking APIs/factories w/ a project.
>>> from google.cloud import datastore
>>> client = datastore . Client ()
Parameters
project ( str ) – (Optional) The project to pass to proxied API methods.
namespace ( str ) – (Optional) namespace to pass to proxied API methods.
credentials ( Credentials ) – (Optional) The OAuth2 Credentials to use for this
client. If not passed (and if no _http object is
passed), falls back to the default inferred from the
environment.
client_info ( google.api_core.gapic_v1.client_info.ClientInfo
or google.api_core.client_info.ClientInfo ) – (Optional) The client info used to send a user-agent
string along with API requests. If None , then
default info will be used. Generally,
you only need to set this if you’re developing your
own library or partner tool.
client_options ( ClientOptions
or dict ) – (Optional) Client options used to set user options on the
client. API Endpoint should be set through client_options.
_http ( Session ) – (Optional) HTTP object to make requests. Can be any object
that defines request() with the same interface as
requests.Session.request() . If not passed, an
_http object is created that is bound to the
credentials for the current object.
This parameter should be considered private, and could
change in the future.
_use_grpc ( bool ) – (Optional) Explicitly specifies whether
to use the gRPC transport (via GAX) or HTTP. If unset,
falls back to the GOOGLE_CLOUD_DISABLE_GRPC
environment variable.
This parameter should be considered private, and could
change in the future.
database ( str ) – (Optional) database to pass to proxied API methods.
SCOPE( : Union[Tuple[ str , ...], None = (' https://www.googleapis.com/auth/datastore ', )
The scopes required for authenticating as a Cloud Datastore consumer.
aggregation_query(query, **kwargs)
Proxy to google.cloud.datastore.aggregation.AggregationQuery .
Using aggregation_query to count over a query:
>>> query = client.query(kind='MyKind')
>>> aggregation_query = client.aggregation_query(query)
>>> aggregation_query.count(alias='total')
<google.cloud.datastore.aggregation.AggregationQuery object at ...>
>>> aggregation_query.fetch()
<google.cloud.datastore.aggregation.AggregationResultIterator object at ...>
Adding an aggregation to the aggregation_query
>>> query = client.query(kind='MyKind')
>>> aggregation_query.add_aggregation(CountAggregation(alias='total'))
>>> aggregation_query.fetch()
<google.cloud.datastore.aggregation.AggregationResultIterator object at ...>
Adding multiple aggregations to the aggregation_query
>>> query = client.query(kind='MyKind')
>>> total_count = CountAggregation(alias='total')
>>> all_count = CountAggregation(alias='all')
>>> aggregation_query.add_aggregations([total_count, all_count])
>>> aggregation_query.fetch()
<google.cloud.datastore.aggregation.AggregationResultIterator object at ...>
Using the aggregation_query iterator
>>> query = client.query(kind='MyKind')
>>> aggregation_query = client.aggregation_query(query)
>>> aggregation_query.count(alias='total')
<google.cloud.datastore.aggregation.AggregationQuery object at ...>
>>> aggregation_query_iter = aggregation_query.fetch()
>>> for aggregation_result in aggregation_query_iter:
... do_something_with(aggregation_result)
or manually page through results
>>> aggregation_query_iter = aggregation_query.fetch()
>>> pages = aggregation_query_iter.pages
>>>
>>> first_page = next(pages)
>>> first_page_entities = list(first_page)
>>> aggregation_query_iter.next_page_token is None
True
Parameters
kwargs – Parameters for initializing and instance of
AggregationQuery .
Return type
AggregationQuery
Returns
An AggregationQuery object.
allocate_ids(incomplete_key, num_ids, retry=None, timeout=None)
Allocate a list of IDs from a partial key.
Parameters
incomplete_key ( google.cloud.datastore.key.Key ) – Partial key to use as base for allocated IDs.
num_ids ( int ) – The number of IDs to allocate.
retry ( google.api_core.retry.Retry ) – A retry object used to retry requests. If None is specified,
requests will be retried using a default configuration.
timeout ( float ) – Time, in seconds, to wait for the request to complete.
Note that if retry is specified, the timeout applies
to each individual attempt.
Return type
list of google.cloud.datastore.key.Key
Returns
The (complete) keys allocated with incomplete_key as
root.
Raises
ValueError if incomplete_key is not a
partial key.
property base_url()
Getter for API base URL.
batch()
Proxy to google.cloud.datastore.batch.Batch .
property current_batch()
Currently-active batch, if within the scope of a Batch context manager.
Return type
google.cloud.datastore.batch.Batch , or an object
implementing its API, or NoneType (if no batch is active).
Returns
The batch/transaction at the top of the batch stack.
property current_transaction()
Currently-active transaction, if within the scope of a Transaction
context manager.
Return type
google.cloud.datastore.transaction.Transaction , or an
object implementing its API, or NoneType (if no transaction
is active).
Returns
The transaction at the top of the batch stack.
property database()
Getter for database
delete(key, retry=None, timeout=None)
Delete the key in the Cloud Datastore.
NOTE : This is just a thin wrapper over delete_multi() .
The backend API does not make a distinction between a single key or
multiple keys in a commit request.
Parameters
key ( google.cloud.datastore.key.Key , google.cloud.datastore.entity.Entity ) – The key to be deleted from the datastore.
retry ( google.api_core.retry.Retry ) – A retry object used to retry requests. If None is specified,
requests will be retried using a default configuration.
Only meaningful outside of another batch / transaction.
timeout ( float ) – Time, in seconds, to wait for the request to complete.
Note that if retry is specified, the timeout applies
to each individual attempt. Only meaningful outside of another
batch / transaction.
delete_multi(keys, retry=None, timeout=None)
Delete keys from the Cloud Datastore.
Parameters
keys (list of google.cloud.datastore.key.Key , google.cloud.datastore.entity.Entity ) – The keys to be deleted from the Datastore.
retry ( google.api_core.retry.Retry ) – A retry object used to retry requests. If None is specified,
requests will be retried using a default configuration.
Only meaningful outside of another batch / transaction.
timeout ( float ) – Time, in seconds, to wait for the request to complete.
Note that if retry is specified, the timeout applies
to each individual attempt. Only meaningful outside of another
batch / transaction.
entity(key=None, exclude_from_indexes=())
Proxy to google.cloud.datastore.entity.Entity .
get(key, missing=None, deferred=None, transaction=None, eventual=False, retry=None, timeout=None, read_time=None)
Retrieve an entity from a single key (if it exists).
NOTE : This is just a thin wrapper over get_multi() .
The backend API does not make a distinction between a single key or
multiple keys in a lookup request.
Parameters
key ( google.cloud.datastore.key.Key ) – The key to be retrieved from the datastore.
missing ( list ) – (Optional) If a list is passed, the key-only entities
returned by the backend as “missing” will be copied
into it.
deferred ( list ) – (Optional) If a list is passed, the keys returned
by the backend as “deferred” will be copied into it.
transaction ( Transaction ) – (Optional) Transaction to use for read consistency.
If not passed, uses current transaction, if set.
eventual ( bool ) – (Optional) Defaults to strongly consistent (False).
Setting True will use eventual consistency, but cannot
be used inside a transaction or with read_time, or will
raise ValueError.
retry ( google.api_core.retry.Retry ) – A retry object used to retry requests. If None is specified,
requests will be retried using a default configuration.
timeout ( float ) – Time, in seconds, to wait for the request to complete.
Note that if retry is specified, the timeout applies
to each individual attempt.
read_time ( datetime ) – Read the entity from the specified time (may be null).
Cannot be used with eventual consistency or inside a
transaction, or will raise ValueError. This feature is in private preview.
Return type
google.cloud.datastore.entity.Entity or NoneType
Returns
The requested entity if it exists.
Raises
ValueError if more than one of eventual==True ,
transaction , and read_time is specified.
get_multi(keys, missing=None, deferred=None, transaction=None, eventual=False, retry=None, timeout=None, read_time=None)
Retrieve entities, along with their attributes.
Parameters
keys (list of google.cloud.datastore.key.Key ) – The keys to be retrieved from the datastore.
missing ( list ) – (Optional) If a list is passed, the key-only entities
returned by the backend as “missing” will be copied
into it. If the list is not empty, an error will occur.
deferred ( list ) – (Optional) If a list is passed, the keys returned
by the backend as “deferred” will be copied into it.
If the list is not empty, an error will occur.
transaction ( Transaction ) – (Optional) Transaction to use for read consistency.
If not passed, uses current transaction, if set.
eventual ( bool ) – (Optional) Defaults to strongly consistent (False).
Setting True will use eventual consistency, but cannot
be used inside a transaction or will raise ValueError.
retry ( google.api_core.retry.Retry ) – A retry object used to retry requests. If None is specified,
requests will be retried using a default configuration.
timeout ( float ) – Time, in seconds, to wait for the request to complete.
Note that if retry is specified, the timeout applies
to each individual attempt.
read_time ( datetime ) – (Optional) Read time to use for read consistency. This feature is in private preview.
Return type
list of google.cloud.datastore.entity.Entity
Returns
The requested entities.
Raises
ValueError if one or more of keys has a project
which does not match our project; or if more than one of
eventual==True , transaction , and read_time is
specified.
key(*path_args, **kwargs)
Proxy to google.cloud.datastore.key.Key .
Passes our project and our database .
put(entity, retry=None, timeout=None)
Save an entity in the Cloud Datastore.
NOTE : This is just a thin wrapper over put_multi() .
The backend API does not make a distinction between a single
entity or multiple entities in a commit request.
Parameters
entity ( google.cloud.datastore.entity.Entity ) – The entity to be saved to the datastore.
retry ( google.api_core.retry.Retry ) – A retry object used to retry requests. If None is specified,
requests will be retried using a default configuration.
Only meaningful outside of another batch / transaction.
timeout ( float ) – Time, in seconds, to wait for the request to complete.
Note that if retry is specified, the timeout applies
to each individual attempt. Only meaningful outside of another
batch / transaction.
put_multi(entities, retry=None, timeout=None)
Save entities in the Cloud Datastore.
Parameters
entities (list of google.cloud.datastore.entity.Entity ) – The entities to be saved to the datastore.
retry ( google.api_core.retry.Retry ) – A retry object used to retry requests. If None is specified,
requests will be retried using a default configuration.
Only meaningful outside of another batch / transaction.
timeout ( float ) – Time, in seconds, to wait for the request to complete.
Note that if retry is specified, the timeout applies
to each individual attempt. Only meaningful outside of another
batch / transaction.
Raises
ValueError if entities is a single entity.
query(**kwargs)
Proxy to google.cloud.datastore.query.Query .
Passes our project .
Using query to search a datastore:
>>> query = client.query(kind='MyKind')
>>> query.add_filter('property', '=', 'val')
<google.cloud.datastore.query.Query object at ...>
Using the query iterator
>>> filters = [('property', '=', 'val')]
>>> query = client.query(kind='MyKind', filters=filters)
>>> query_iter = query.fetch()
>>> for entity in query_iter:
... do_something_with(entity)
or manually page through results
>>> query_iter = query.fetch()
>>> pages = query_iter.pages
>>>
>>> first_page = next(pages)
>>> first_page_entities = list(first_page)
>>> query_iter.next_page_token is None
True
Parameters
kwargs – Parameters for initializing and instance of
Query .
Return type
Query
Returns
A query object.
reserve_ids(complete_key, num_ids, retry=None, timeout=None)
Reserve a list of IDs sequentially from a complete key.
DEPRECATED. Alias for reserve_ids_sequential() .
Please use either reserve_ids_multi() (recommended) or
reserve_ids_sequential() .
reserve_ids_multi(complete_keys, retry=None, timeout=None)
Reserve IDs from a list of complete keys.
Parameters
complete_keys (list of google.cloud.datastore.key.Key ) – Complete keys for which to reserve IDs.
retry ( google.api_core.retry.Retry ) – A retry object used to retry requests. If None is specified,
requests will be retried using a default configuration.
timeout ( float ) – Time, in seconds, to wait for the request to complete.
Note that if retry is specified, the timeout applies
to each individual attempt.
Return type
class:NoneType
Returns
None
Raises
ValueError if any of complete_keys` is not a
Complete key.
reserve_ids_sequential(complete_key, num_ids, retry=None, timeout=None)
Reserve a list of IDs sequentially from a complete key.
This will reserve the key passed as complete_key as well as
additional keys derived by incrementing the last ID in the path of
complete_key sequentially to obtain the number of keys specified in
num_ids.
Parameters
complete_key ( google.cloud.datastore.key.Key ) – Complete key to use as base for reserved IDs. Key must use a
numeric ID and not a string name.
num_ids ( int ) – The number of IDs to reserve.
retry ( google.api_core.retry.Retry ) – A retry object used to retry requests. If None is specified,
requests will be retried using a default configuration.
timeout ( float ) – Time, in seconds, to wait for the request to complete.
Note that if retry is specified, the timeout applies
to each individual attempt.
Return type
class:NoneType
Returns
None
Raises
ValueError if complete_key` is not a
Complete key.
transaction(**kwargs)
Proxy to google.cloud.datastore.transaction.Transaction .
Parameters
kwargs – Keyword arguments to be passed in.
google.cloud.datastore.client.DATASTORE_DATASET( = 'DATASTORE_DATASET )
Environment variable defining default dataset ID under GCD.
google.cloud.datastore.client.DATASTORE_EMULATOR_HOST( = 'DATASTORE_EMULATOR_HOST )
Environment variable defining host for datastore emulator server.
google.cloud.datastore.client.DISABLE_GRPC( = 'GOOGLE_CLOUD_DISABLE_GRPC )
Environment variable acting as flag to disable gRPC.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
