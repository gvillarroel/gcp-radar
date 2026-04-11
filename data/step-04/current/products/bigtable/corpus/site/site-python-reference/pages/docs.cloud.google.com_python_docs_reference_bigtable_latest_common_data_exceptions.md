---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/common_data_exceptions
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/common_data_exceptions
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
Custom Exceptions
exception google.cloud.bigtable.data.exceptions.EarlyMetadataCallError()
Bases: RuntimeError
Execption raised when metadata is request from an ExecuteQueryIterator before the first row has been read, or the query has completed
exception google.cloud.bigtable.data.exceptions.FailedMutationEntryError(failed_idx: int | None , failed_mutation_entry: RowMutationEntry , cause: Exception )
Bases: Exception
Represents a single failed RowMutationEntry in a bulk_mutate_rows request.
A collection of FailedMutationEntryErrors will be raised in a MutationsExceptionGroup
exception google.cloud.bigtable.data.exceptions.FailedQueryShardError(failed_index: int , failed_query: 'ReadRowsQuery' | dict [ str , Any], cause: Exception )
Bases: Exception
Represents an individual failed query in a sharded read rows operation
exception google.cloud.bigtable.data.exceptions.InvalidChunk(message, errors=(), details=(), response=None, error_info=None)
Bases: google.api_core.exceptions.GoogleAPICallError
Exception raised to invalid chunk data from back-end.
exception google.cloud.bigtable.data.exceptions.InvalidExecuteQueryResponse(message, errors=(), details=(), response=None, error_info=None)
Bases: google.api_core.exceptions.GoogleAPICallError
Exception raised to invalid query response data from back-end.
exception google.cloud.bigtable.data.exceptions.MutationsExceptionGroup(excs: list [ Exception ], total_entries: int , message: Optional [ str ] = None)
Bases: google.cloud.bigtable.data.exceptions._BigtableExceptionGroup
Represents one or more exceptions that occur during a bulk mutation operation
Exceptions will typically be of type FailedMutationEntryError, but other exceptions may
be included if they are raised during the mutation operation
Parameters
excs – the exceptions in the group
total_entries – the total number of entries attempted, successful or not
message – the message for the exception group. If None, a default message
will be generated
static _ new_ (cls, excs: list [ Exception ], total_entries: int , message: Optional [ str ] = None)
Parameters
excs – the exceptions in the group
total_entries – the total number of entries attempted, successful or not
message – the message for the exception group. If None, a default message
Returns
the new instance
Return type
MutationsExceptionGroup
classmethod from_truncated_lists(first_list: list [ Exception ], last_list: list [ Exception ], total_excs: int , entry_count: int )
Create a MutationsExceptionGroup from two lists of exceptions, representing
a larger set that has been truncated. The MutationsExceptionGroup will
contain the union of the two lists as sub-exceptions, and the error message
describe the number of exceptions that were truncated.
Parameters
first_list – the set of oldest exceptions to add to the ExceptionGroup
last_list – the set of newest exceptions to add to the ExceptionGroup
total_excs – the total number of exceptions associated with the request
Should be len(first_list) + len(last_list) + number of dropped exceptions
in the middle
entry_count – the total number of entries attempted, successful or not
Returns
the new instance
Return type
MutationsExceptionGroup
exception google.cloud.bigtable.data.exceptions.ParameterTypeInferenceFailed()
Bases: ValueError
Exception raised when query parameter types were not provided and cannot be inferred.
exception google.cloud.bigtable.data.exceptions.RetryExceptionGroup(excs: list [ Exception ])
Bases: google.cloud.bigtable.data.exceptions._BigtableExceptionGroup
Represents one or more exceptions that occur during a retryable operation
exception google.cloud.bigtable.data.exceptions.ShardedReadRowsExceptionGroup(excs: list [google.cloud.bigtable.data.exceptions.FailedQueryShardError], succeeded: list [ google.cloud.bigtable.data.row.Row ], total_queries: int )
Bases: google.cloud.bigtable.data.exceptions._BigtableExceptionGroup
Represents one or more exceptions that occur during a sharded read rows operation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
