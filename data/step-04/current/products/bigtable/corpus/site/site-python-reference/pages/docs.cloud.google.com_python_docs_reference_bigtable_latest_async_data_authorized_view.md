---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/async_data_authorized_view
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/async_data_authorized_view
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
Authorized View Async
NOTE : It is generally not recommended to use the async client in an otherwise synchronous codebase. To make use of asyncio’s
performance benefits, the codebase should be designed to be async from the ground up.
class google.cloud.bigtable.data._async.client.AuthorizedViewAsync(client, instance_id, table_id, authorized_view_id, app_profile_id: Optional [ str ] = None, **kwargs)
Provides access to an authorized view of a table.
An authorized view is a subset of a table that you configure to include specific table data.
Then you grant access to the authorized view separately from access to the table.
AuthorizedView object maintains table_id, app_profile_id, and authorized_view_id context,
and passed them with each call
Initialize an AuthorizedView instance
Must be created within an async context (running event loop)
Parameters
instance_id – The Bigtable instance ID to associate with this client.
instance_id is combined with the client’s project to fully
specify the instance
table_id – The ID of the table. table_id is combined with the
instance_id and the client’s project to fully specify the table
authorized_view_id – The id for the authorized view to use for requests
app_profile_id – The app profile to associate with requests.
https://cloud.google.com/bigtable/docs/app-profiles
default_read_rows_operation_timeout – The default timeout for read rows
operations, in seconds. If not set, defaults to 600 seconds (10 minutes)
default_read_rows_attempt_timeout – The default timeout for individual
read rows rpc requests, in seconds. If not set, defaults to 20 seconds
default_mutate_rows_operation_timeout – The default timeout for mutate rows
operations, in seconds. If not set, defaults to 600 seconds (10 minutes)
default_mutate_rows_attempt_timeout – The default timeout for individual
mutate rows rpc requests, in seconds. If not set, defaults to 60 seconds
default_operation_timeout – The default timeout for all other operations, in
seconds. If not set, defaults to 60 seconds
default_attempt_timeout – The default timeout for all other individual rpc
requests, in seconds. If not set, defaults to 20 seconds
default_read_rows_retryable_errors – a list of errors that will be retried
if encountered during read_rows and related operations.
Defaults to 4 (DeadlineExceeded), 14 (ServiceUnavailable), and 10 (Aborted)
default_mutate_rows_retryable_errors – a list of errors that will be retried
if encountered during mutate_rows and related operations.
Defaults to 4 (DeadlineExceeded) and 14 (ServiceUnavailable)
default_retryable_errors – a list of errors that will be retried if
encountered during all other operations.
Defaults to 4 (DeadlineExceeded) and 14 (ServiceUnavailable)
Raises
RuntimeError – if called outside of an async context (no running event loop)
async _ aenter_ ()
Implement async context manager protocol
Ensure registration task has time to run, so that
grpc channels will be warmed for the specified instance
async _ aexit_ (exc_type, exc_val, exc_tb)
Implement async context manager protocol
Unregister this instance with the client, so that
grpc channels will no longer be warmed
async bulk_mutate_rows(mutation_entries: list [ google.cloud.bigtable.data.mutations.RowMutationEntry ], *, operation_timeout: float | google.cloud.bigtable.data._helpers.TABLE_DEFAULT = TABLE_DEFAULT.MUTATE_ROWS, attempt_timeout: float | None | google.cloud.bigtable.data._helpers.TABLE_DEFAULT = TABLE_DEFAULT.MUTATE_ROWS, retryable_errors: Union [ Sequence [ type [ Exception ]], google.cloud.bigtable.data._helpers.TABLE_DEFAULT] = TABLE_DEFAULT.MUTATE_ROWS)
Applies mutations for multiple rows in a single batched request.
Each individual RowMutationEntry is applied atomically, but separate entries
may be applied in arbitrary order (even for entries targetting the same row)
In total, the row_mutations can contain at most 100000 individual mutations
across all entries
Idempotent entries (i.e., entries with mutations with explicit timestamps)
will be retried on failure. Non-idempotent will not, and will reported in a
raised exception group
Parameters
mutation_entries – the batches of mutations to apply
Each entry will be applied atomically, but entries will be applied
in arbitrary order
operation_timeout – the time budget for the entire operation, in seconds.
Failed requests will be retried within the budget.
Defaults to the Table’s default_mutate_rows_operation_timeout
attempt_timeout – the time budget for an individual network request, in seconds.
If it takes longer than this time to complete, the request will be cancelled with
a DeadlineExceeded exception, and a retry will be attempted.
Defaults to the Table’s default_mutate_rows_attempt_timeout.
If None, defaults to operation_timeout.
retryable_errors – a list of errors that will be retried if encountered.
Defaults to the Table’s default_mutate_rows_retryable_errors
Raises
MutationsExceptionGroup – if one or more mutations fails
Contains details about any failed entries in .exceptions
ValueError – if invalid arguments are provided
async check_and_mutate_row(row_key: str | bytes , predicate: google.cloud.bigtable.data.row_filters.RowFilter | None , *, true_case_mutations: Optional [ Union [ google.cloud.bigtable.data.mutations.Mutation , list [ google.cloud.bigtable.data.mutations.Mutation ]]] = None, false_case_mutations: Optional [ Union [ google.cloud.bigtable.data.mutations.Mutation , list [ google.cloud.bigtable.data.mutations.Mutation ]]] = None, operation_timeout: float | google.cloud.bigtable.data._helpers.TABLE_DEFAULT = TABLE_DEFAULT.DEFAULT)
Mutates a row atomically based on the output of a predicate filter
Non-idempotent operation: will not be retried
Parameters
row_key – the key of the row to mutate
predicate – the filter to be applied to the contents of the specified row.
Depending on whether or not any results are yielded,
either true_case_mutations or false_case_mutations will be executed.
If None, checks that the row contains any values at all.
true_case_mutations – Changes to be atomically applied to the specified row if
predicate yields at least one cell when
applied to row_key. Entries are applied in order,
meaning that earlier mutations can be masked by later
ones. Must contain at least one entry if
false_case_mutations is empty, and at most 100000.
false_case_mutations – Changes to be atomically applied to the specified row if
predicate_filter does not yield any cells when
applied to row_key. Entries are applied in order,
meaning that earlier mutations can be masked by later
ones. Must contain at least one entry if
true_case_mutations is empty, and at most 100000.
operation_timeout – the time budget for the entire operation, in seconds.
Failed requests will not be retried. Defaults to the Table’s default_operation_timeout
Returns
bool indicating whether the predicate was true or false
Raises
google.api_core.exceptions.GoogleAPIError – exceptions from grpc call
async close()
Called to close the Table instance and release any resources held by it.
async mutate_row(row_key: str | bytes , mutations: list [ google.cloud.bigtable.data.mutations.Mutation ] | google.cloud.bigtable.data.mutations.Mutation , *, operation_timeout: float | google.cloud.bigtable.data._helpers.TABLE_DEFAULT = TABLE_DEFAULT.DEFAULT, attempt_timeout: float | None | google.cloud.bigtable.data._helpers.TABLE_DEFAULT = TABLE_DEFAULT.DEFAULT, retryable_errors: Union [ Sequence [ type [ Exception ]], google.cloud.bigtable.data._helpers.TABLE_DEFAULT] = TABLE_DEFAULT.DEFAULT)
Mutates a row atomically.
Cells already present in the row are left unchanged unless explicitly changed
by mutation .
Idempotent operations (i.e, all mutations have an explicit timestamp) will be
retried on server failure. Non-idempotent operations will not.
Parameters
row_key – the row to apply mutations to
mutations – the set of mutations to apply to the row
operation_timeout – the time budget for the entire operation, in seconds.
Failed requests will be retried within the budget.
Defaults to the Table’s default_operation_timeout
attempt_timeout – the time budget for an individual network request, in seconds.
If it takes longer than this time to complete, the request will be cancelled with
a DeadlineExceeded exception, and a retry will be attempted.
Defaults to the Table’s default_attempt_timeout.
If None, defaults to operation_timeout.
retryable_errors – a list of errors that will be retried if encountered.
Only idempotent mutations will be retried. Defaults to the Table’s
default_retryable_errors.
Raises
google.api_core.exceptions.DeadlineExceeded – raised after operation timeout
will be chained with a RetryExceptionGroup containing all
GoogleAPIError exceptions from any retries that failed
google.api_core.exceptions.GoogleAPIError – raised on non-idempotent operations that cannot be
safely retried.
ValueError – if invalid arguments are provided
mutations_batcher(*, flush_interval: float | None = 5, flush_limit_mutation_count: int | None = 1000, flush_limit_bytes: int = 20971520, flow_control_max_mutation_count: int = 100000, flow_control_max_bytes: int = 104857600, batch_operation_timeout: float | TABLE_DEFAULT = TABLE_DEFAULT.MUTATE_ROWS, batch_attempt_timeout: float | None | TABLE_DEFAULT = TABLE_DEFAULT.MUTATE_ROWS, batch_retryable_errors: Sequence[ type [ Exception ]] | TABLE_DEFAULT = TABLE_DEFAULT.MUTATE_ROWS)
Returns a new mutations batcher instance.
Can be used to iteratively add mutations that are flushed as a group,
to avoid excess network calls
Parameters
flush_interval – Automatically flush every flush_interval seconds. If None,
a table default will be used
flush_limit_mutation_count – Flush immediately after flush_limit_mutation_count
mutations are added across all entries. If None, this limit is ignored.
flush_limit_bytes – Flush immediately after flush_limit_bytes bytes are added.
flow_control_max_mutation_count – Maximum number of inflight mutations.
flow_control_max_bytes – Maximum number of inflight bytes.
batch_operation_timeout – timeout for each mutate_rows operation, in seconds.
Defaults to the Table’s default_mutate_rows_operation_timeout
batch_attempt_timeout – timeout for each individual request, in seconds.
Defaults to the Table’s default_mutate_rows_attempt_timeout.
If None, defaults to batch_operation_timeout.
batch_retryable_errors – a list of errors that will be retried if encountered.
Defaults to the Table’s default_mutate_rows_retryable_errors.
Returns
a MutationsBatcherAsync context manager that can batch requests
Return type
MutationsBatcherAsync
async read_modify_write_row(row_key: str | bytes , rules: google.cloud.bigtable.data.read_modify_write_rules.ReadModifyWriteRule | list [ google.cloud.bigtable.data.read_modify_write_rules.ReadModifyWriteRule ], *, operation_timeout: float | google.cloud.bigtable.data._helpers.TABLE_DEFAULT = TABLE_DEFAULT.DEFAULT)
Reads and modifies a row atomically according to input ReadModifyWriteRules,
and returns the contents of all modified cells
The new value for the timestamp is the greater of the existing timestamp or
the current server time.
Non-idempotent operation: will not be retried
Parameters
row_key – the key of the row to apply read/modify/write rules to
rules – A rule or set of rules to apply to the row.
Rules are applied in order, meaning that earlier rules will affect the
results of later ones.
operation_timeout – the time budget for the entire operation, in seconds.
Failed requests will not be retried.
Defaults to the Table’s default_operation_timeout.
Returns
a Row containing cell data that was modified as part of the operation
Return type
Row
Raises
google.api_core.exceptions.GoogleAPIError – exceptions from grpc call
ValueError – if invalid arguments are provided
async read_row(row_key: str | bytes , *, row_filter: Optional [ google.cloud.bigtable.data.row_filters.RowFilter ] = None, operation_timeout: float | google.cloud.bigtable.data._helpers.TABLE_DEFAULT = TABLE_DEFAULT.READ_ROWS, attempt_timeout: float | None | google.cloud.bigtable.data._helpers.TABLE_DEFAULT = TABLE_DEFAULT.READ_ROWS, retryable_errors: Union [ Sequence [ type [ Exception ]], google.cloud.bigtable.data._helpers.TABLE_DEFAULT] = TABLE_DEFAULT.READ_ROWS)
Read a single row from the table, based on the specified key.
Failed requests within operation_timeout will be retried based on the
retryable_errors list until operation_timeout is reached.
Parameters
query – contains details about which rows to return
operation_timeout – the time budget for the entire operation, in seconds.
Failed requests will be retried within the budget.
Defaults to the Table’s default_read_rows_operation_timeout
attempt_timeout – the time budget for an individual network request, in seconds.
If it takes longer than this time to complete, the request will be cancelled with
a DeadlineExceeded exception, and a retry will be attempted.
Defaults to the Table’s default_read_rows_attempt_timeout.
If None, defaults to operation_timeout.
retryable_errors – a list of errors that will be retried if encountered.
Defaults to the Table’s default_read_rows_retryable_errors.
Returns
a Row object if the row exists, otherwise None
Return type
Row | None
Raises
google.api_core.exceptions.DeadlineExceeded – raised after operation timeout
will be chained with a RetryExceptionGroup containing GoogleAPIError exceptions
from any retries that failed
google.api_core.exceptions.GoogleAPIError – raised if the request encounters an unrecoverable error
async read_rows(query: google.cloud.bigtable.data.read_rows_query.ReadRowsQuery , *, operation_timeout: float | google.cloud.bigtable.data._helpers.TABLE_DEFAULT = TABLE_DEFAULT.READ_ROWS, attempt_timeout: float | None | google.cloud.bigtable.data._helpers.TABLE_DEFAULT = TABLE_DEFAULT.READ_ROWS, retryable_errors: Union [ Sequence [ type [ Exception ]], google.cloud.bigtable.data._helpers.TABLE_DEFAULT] = TABLE_DEFAULT.READ_ROWS)
Read a set of rows from the table, based on the specified query.
Retruns results as a list of Row objects when the request is complete.
For streamed results, use read_rows_stream.
Failed requests within operation_timeout will be retried based on the
retryable_errors list until operation_timeout is reached.
Parameters
query – contains details about which rows to return
operation_timeout – the time budget for the entire operation, in seconds.
Failed requests will be retried within the budget.
Defaults to the Table’s default_read_rows_operation_timeout
attempt_timeout – the time budget for an individual network request, in seconds.
If it takes longer than this time to complete, the request will be cancelled with
a DeadlineExceeded exception, and a retry will be attempted.
Defaults to the Table’s default_read_rows_attempt_timeout.
If None, defaults to operation_timeout.
If None, defaults to the Table’s default_read_rows_attempt_timeout,
or the operation_timeout if that is also None.
retryable_errors – a list of errors that will be retried if encountered.
Defaults to the Table’s default_read_rows_retryable_errors.
Returns
a list of Rows returned by the query
Return type
list [ Row ]
Raises
google.api_core.exceptions.DeadlineExceeded – raised after operation timeout
will be chained with a RetryExceptionGroup containing GoogleAPIError exceptions
from any retries that failed
google.api_core.exceptions.GoogleAPIError – raised if the request encounters an unrecoverable error
async read_rows_sharded(sharded_query: ShardedQuery, *, operation_timeout: float | TABLE_DEFAULT = TABLE_DEFAULT.READ_ROWS, attempt_timeout: float | None | TABLE_DEFAULT = TABLE_DEFAULT.READ_ROWS, retryable_errors: Sequence[ type [ Exception ]] | TABLE_DEFAULT = TABLE_DEFAULT.READ_ROWS)
Runs a sharded query in parallel, then return the results in a single list.
Results will be returned in the order of the input queries.
This function is intended to be run on the results on a query.shard() call.
For example:
table_shard_keys = await table.sample_row_keys()
query = ReadRowsQuery(...)
shard_queries = query.shard(table_shard_keys)
results = await table.read_rows_sharded(shard_queries)
Parameters
sharded_query – a sharded query to execute
operation_timeout – the time budget for the entire operation, in seconds.
Failed requests will be retried within the budget.
Defaults to the Table’s default_read_rows_operation_timeout
attempt_timeout – the time budget for an individual network request, in seconds.
If it takes longer than this time to complete, the request will be cancelled with
a DeadlineExceeded exception, and a retry will be attempted.
Defaults to the Table’s default_read_rows_attempt_timeout.
If None, defaults to operation_timeout.
retryable_errors – a list of errors that will be retried if encountered.
Defaults to the Table’s default_read_rows_retryable_errors.
Returns
a list of Rows returned by the query
Return type
list [ Row ]
Raises
ShardedReadRowsExceptionGroup – if any of the queries failed
ValueError – if the query_list is empty
async read_rows_stream(query: google.cloud.bigtable.data.read_rows_query.ReadRowsQuery , *, operation_timeout: float | google.cloud.bigtable.data._helpers.TABLE_DEFAULT = TABLE_DEFAULT.READ_ROWS, attempt_timeout: float | None | google.cloud.bigtable.data._helpers.TABLE_DEFAULT = TABLE_DEFAULT.READ_ROWS, retryable_errors: Union [ Sequence [ type [ Exception ]], google.cloud.bigtable.data._helpers.TABLE_DEFAULT] = TABLE_DEFAULT.READ_ROWS)
Read a set of rows from the table, based on the specified query.
Returns an iterator to asynchronously stream back row data.
Failed requests within operation_timeout will be retried based on the
retryable_errors list until operation_timeout is reached.
Parameters
query – contains details about which rows to return
operation_timeout – the time budget for the entire operation, in seconds.
Failed requests will be retried within the budget.
Defaults to the Table’s default_read_rows_operation_timeout
attempt_timeout – the time budget for an individual network request, in seconds.
If it takes longer than this time to complete, the request will be cancelled with
a DeadlineExceeded exception, and a retry will be attempted.
Defaults to the Table’s default_read_rows_attempt_timeout.
If None, defaults to operation_timeout.
retryable_errors – a list of errors that will be retried if encountered.
Defaults to the Table’s default_read_rows_retryable_errors
Returns
an asynchronous iterator that yields rows returned by the query
Return type
AsyncIterable[ Row ]
Raises
google.api_core.exceptions.DeadlineExceeded – raised after operation timeout
will be chained with a RetryExceptionGroup containing GoogleAPIError exceptions
from any retries that failed
google.api_core.exceptions.GoogleAPIError – raised if the request encounters an unrecoverable error
async row_exists(row_key: str | bytes , *, operation_timeout: float | google.cloud.bigtable.data._helpers.TABLE_DEFAULT = TABLE_DEFAULT.READ_ROWS, attempt_timeout: float | None | google.cloud.bigtable.data._helpers.TABLE_DEFAULT = TABLE_DEFAULT.READ_ROWS, retryable_errors: Union [ Sequence [ type [ Exception ]], google.cloud.bigtable.data._helpers.TABLE_DEFAULT] = TABLE_DEFAULT.READ_ROWS)
Return a boolean indicating whether the specified row exists in the table.
uses the filters: chain(limit cells per row = 1, strip value)
Parameters
row_key – the key of the row to check
operation_timeout – the time budget for the entire operation, in seconds.
Failed requests will be retried within the budget.
Defaults to the Table’s default_read_rows_operation_timeout
attempt_timeout – the time budget for an individual network request, in seconds.
If it takes longer than this time to complete, the request will be cancelled with
a DeadlineExceeded exception, and a retry will be attempted.
Defaults to the Table’s default_read_rows_attempt_timeout.
If None, defaults to operation_timeout.
retryable_errors – a list of errors that will be retried if encountered.
Defaults to the Table’s default_read_rows_retryable_errors.
Returns
a bool indicating whether the row exists
Return type
bool
Raises
google.api_core.exceptions.DeadlineExceeded – raised after operation timeout
will be chained with a RetryExceptionGroup containing GoogleAPIError exceptions
from any retries that failed
google.api_core.exceptions.GoogleAPIError – raised if the request encounters an unrecoverable error
async sample_row_keys(*, operation_timeout: float | TABLE_DEFAULT = TABLE_DEFAULT.DEFAULT, attempt_timeout: float | None | TABLE_DEFAULT = TABLE_DEFAULT.DEFAULT, retryable_errors: Sequence[ type [ Exception ]] | TABLE_DEFAULT = TABLE_DEFAULT.DEFAULT)
Return a set of RowKeySamples that delimit contiguous sections of the table of
approximately equal size
RowKeySamples output can be used with ReadRowsQuery.shard() to create a sharded query that
can be parallelized across multiple backend nodes read_rows and read_rows_stream
requests will call sample_row_keys internally for this purpose when sharding is enabled
RowKeySamples is simply a type alias for list[tuple[bytes, int]]; a list of
row_keys, along with offset positions in the table
Parameters
operation_timeout – the time budget for the entire operation, in seconds.
Failed requests will be retried within the budget.i
Defaults to the Table’s default_operation_timeout
attempt_timeout – the time budget for an individual network request, in seconds.
If it takes longer than this time to complete, the request will be cancelled with
a DeadlineExceeded exception, and a retry will be attempted.
Defaults to the Table’s default_attempt_timeout.
If None, defaults to operation_timeout.
retryable_errors – a list of errors that will be retried if encountered.
Defaults to the Table’s default_retryable_errors.
Returns
a set of RowKeySamples the delimit contiguous sections of the table
Return type
RowKeySamples
Raises
google.api_core.exceptions.DeadlineExceeded – raised after operation timeout
will be chained with a RetryExceptionGroup containing GoogleAPIError exceptions
from any retries that failed
google.api_core.exceptions.GoogleAPIError – raised if the request encounters an unrecoverable error
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
