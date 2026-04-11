---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/async_data_execute_query_iterator
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/async_data_execute_query_iterator
  title: "Python client libraries \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.35.0 (latest)
2.34.0
2.33.0
2.32.0
2.31.0
2.30.1
2.29.0
2.28.1
2.26.0
2.25.0
2.24.0
2.23.1
2.22.0
2.21.0
2.20.0
2.19.0
2.18.1
2.17.0
2.16.0
2.15.0
2.14.1
2.13.2
2.12.0
2.11.3
2.10.1
2.9.0
2.8.1
2.7.1
2.6.0
2.5.2
2.4.0
2.3.3
2.2.0
2.1.0
2.0.0
1.7.3
1.6.1
1.5.1
1.4.0
1.3.0
1.2.1
1.1.0
1.0.0
0.34.0
Execute Query Iterator Async
class google.cloud.bigtable.data.execute_query.ExecuteQueryIteratorAsync(client: DataClientType, instance_id: str , app_profile_id: Optional[ str ], request_body: Dict[ str , Any], prepare_metadata: Metadata , attempt_timeout: float | None , operation_timeout: float , req_metadata: Sequence[Tuple[ str , str ]] = (), retryable_excs: Sequence[ type [ Exception ]] = (), column_info: dict [ str , Message | EnumTypeWrapper] | None = None)
Bases: object
Collects responses from ExecuteQuery requests and parses them into QueryResultRows.
Please Note this is not meant to be constructed directly by applications. It should always
be created via the client. The constructor is subject to change.
It is not thread-safe . It should not be used by multiple asyncio Tasks.
Parameters
client – bigtable client
instance_id – id of the instance on which the query is executed
request_body – dict representing the body of the ExecuteQueryRequest
attempt_timeout – the time budget for an individual network request, in seconds.
If it takes longer than this time to complete, the request will be cancelled with
a DeadlineExceeded exception, and a retry will be attempted.
operation_timeout – the time budget for the entire operation, in seconds.
Failed requests will be retried within the budget
req_metadata – metadata used while sending the gRPC request
retryable_excs – a list of errors that will be retried if encountered.
column_info – dict with mappings between column names and additional column information
for protobuf deserialization.
Raises
RuntimeError – if the instance is not created within an async event loop context.
ValueError <exceptions.ValueError>` as a safeguard if data is processed in an unexpected stat –
async _ anext_ ()
Yields QueryResultRows representing the results of the query.
Raises
ValueError as a safeguard if data is processed in an unexpected state
property app_profile_id( : Optional[ str )
Returns the app_profile_id of the iterator.
async close()
Cancel all background tasks. Should be called after all rows were processed.
Called automatically by iterator
Raises
ValueError if called in an invalid state
property is_closed( : [bool]( https://docs.python.org/3/library/functions.html#bool )
Returns True if the iterator is closed, False otherwise.
property metadata( : [google.cloud.bigtable.data.execute_query.metadata.Metadata](common_data_execute_query_metadata.md#google.cloud.bigtable.data.execute_query.metadata.Metadata )
Returns query metadata from the server or None if the iterator has been closed
or if metadata has not been set yet.
Metadata will not be set until the first row has been yielded or response with no rows
completes.
raises: EarlyMetadataCallError when called before the first row has been returned
or the iterator has completed with no rows in the response.
property table_name( : Optional[ str )
Returns the table_name of the iterator.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
