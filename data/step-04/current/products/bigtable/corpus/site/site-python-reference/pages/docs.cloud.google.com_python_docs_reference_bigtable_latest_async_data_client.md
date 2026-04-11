---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/async_data_client
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/async_data_client
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
Bigtable Data Client Async
NOTE : It is generally not recommended to use the async client in an otherwise synchronous codebase. To make use of asyncio’s
performance benefits, the codebase should be designed to be async from the ground up.
class google.cloud.bigtable.data.BigtableDataClientAsync(*, project: str | None = None, credentials: google.auth.credentials.Credentials | None = None, client_options: dict [ str , Any] | 'google.api_core.client_options.ClientOptions' | None = None, **kwargs)
Bases: google.cloud.client.ClientWithProject
Create a client instance for the Bigtable Data API
Client should be created within an async context (running event loop)
Parameters
project – the project which the client acts on behalf of.
If not passed, falls back to the default inferred
from the environment.
credentials – Thehe OAuth2 Credentials to use for this
client. If not passed (and if no _http object is
passed), falls back to the default inferred from the
environment.
client_options – Client options used to set user options
on the client. API Endpoint should be set through client_options.
Raises
RuntimeError – if called outside of an async context (no running event loop)
property api_endpoint( : [str]( https://docs.python.org/3/library/stdtypes.html#str )
Return the API endpoint used by the client instance.
Returns
The API endpoint used by the client instance.
Return type
str
async close(timeout: float | None = 2.0)
Cancel all background tasks
async execute_query(query: str, instance_id: str, *, parameters: dict[str, ExecuteQueryValueType] | None = None, parameter_types: dict[str, SqlType.Type] | None = None, app_profile_id: str | None = None, operation_timeout: float = 600, attempt_timeout: float | None = 20, retryable_errors: Sequence[type[Exception]] = (<class 'google.api_core.exceptions.DeadlineExceeded'>, <class 'google.api_core.exceptions.ServiceUnavailable'>, <class 'google.api_core.exceptions.Aborted'>), prepare_operation_timeout: float = 60, prepare_attempt_timeout: float | None = 20, prepare_retryable_errors: Sequence[type[Exception]] = (<class 'google.api_core.exceptions.DeadlineExceeded'>, <class 'google.api_core.exceptions.ServiceUnavailable'>), column_info: dict[str, Message | EnumTypeWrapper] | None = None)
Executes an SQL query on an instance.
Returns an iterator to asynchronously stream back columns from selected rows.
Failed requests within operation_timeout will be retried based on the
retryable_errors list until operation_timeout is reached.
Note that this makes two requests, one to PrepareQuery and one to ExecuteQuery .
These have separate retry configurations. ExecuteQuery is where the bulk of the
work happens.
Parameters
query – Query to be run on Bigtable instance. The query can use @param
placeholders to use parameter interpolation on the server. Values for all
parameters should be provided in parameters . Types of parameters are
inferred but should be provided in parameter_types if the inference is
not possible (i.e. when value can be None, an empty list or an empty dict).
instance_id – The Bigtable instance ID to perform the query on.
instance_id is combined with the client’s project to fully
specify the instance.
parameters – Dictionary with values for all parameters used in the query .
parameter_types – Dictionary with types of parameters used in the query .
Required to contain entries only for parameters whose type cannot be
detected automatically (i.e. the value can be None, an empty list or
an empty dict).
app_profile_id – The app profile to associate with requests.
https://cloud.google.com/bigtable/docs/app-profiles
operation_timeout – the time budget for the entire executeQuery operation, in seconds.
Failed requests will be retried within the budget.
Defaults to 600 seconds.
attempt_timeout – the time budget for an individual executeQuery network request, in seconds.
If it takes longer than this time to complete, the request will be cancelled with
a DeadlineExceeded exception, and a retry will be attempted.
Defaults to the 20 seconds.
If None, defaults to operation_timeout.
retryable_errors – a list of errors that will be retried if encountered during executeQuery.
Defaults to 4 (DeadlineExceeded), 14 (ServiceUnavailable), and 10 (Aborted)
prepare_operation_timeout – the time budget for the entire prepareQuery operation, in seconds.
Failed requests will be retried within the budget.
Defaults to 60 seconds.
prepare_attempt_timeout – the time budget for an individual prepareQuery network request, in seconds.
If it takes longer than this time to complete, the request will be cancelled with
a DeadlineExceeded exception, and a retry will be attempted.
Defaults to the 20 seconds.
If None, defaults to prepare_operation_timeout.
prepare_retryable_errors – a list of errors that will be retried if encountered during prepareQuery.
Defaults to 4 (DeadlineExceeded) and 14 (ServiceUnavailable)
column_info – (Optional) A dictionary mapping column names to Protobuf message classes or EnumTypeWrapper objects.
This dictionary provides the necessary type information for deserializing PROTO and
ENUM column values from the query results. When an entry is provided
for a PROTO or ENUM column, the client library will attempt to deserialize the raw data.
* For PROTO columns: The value in the dictionary should be the
Protobuf Message class (e.g., my_pb2.MyMessage ).
> * For ENUM columns: The value should be the Protobuf EnumTypeWrapper
> object (e.g., `my_pb2.MyEnum`).
Example:
```default
import my_pb2
column_info = {
"my_proto_column": my_pb2.MyMessage,
"my_enum_column": my_pb2.MyEnum
}
```
If `column_info` is not provided, or if a specific column name is not found
in the dictionary:
>
> * PROTO columns will be returned as raw bytes.
> * ENUM columns will be returned as integers.
Note for Nested PROTO or ENUM Fields:
> To specify types for PROTO or ENUM fields within STRUCTs or MAPs, use a dot-separated
> path from the top-level column name.
> >
> > * For STRUCTs: `struct_column_name.field_name`
> > * For MAPs: `map_column_name.key` or `map_column_name.value` to specify types
> > for the map keys or values, respectively.
> Example:
> ```default
> import my_pb2
> column_info = {
> # Top-level column
> "my_proto_column": my_pb2.MyMessage,
> "my_enum_column": my_pb2.MyEnum,
> # Nested field in a STRUCT column named 'my_struct'
> "my_struct.nested_proto_field": my_pb2.OtherMessage,
> "my_struct.nested_enum_field": my_pb2.AnotherEnum,
> # Nested field in a MAP column named 'my_map'
> "my_map.key": my_pb2.MapKeyEnum, # If map keys were enums
> "my_map.value": my_pb2.MapValueMessage,
> # PROTO field inside a STRUCT, where the STRUCT is the value in a MAP column
> "struct_map.value.nested_proto_field": my_pb2.DeeplyNestedProto,
> "struct_map.value.nested_enum_field": my_pb2.DeeplyNestedEnum
> }
> ```
Returns
an asynchronous iterator that yields rows returned by the query
Return type
ExecuteQueryIteratorAsync
Raises
google.api_core.exceptions.DeadlineExceeded – raised after operation timeout
will be chained with a RetryExceptionGroup containing GoogleAPIError exceptions
from any retries that failed
google.api_core.exceptions.GoogleAPIError – raised if the request encounters an unrecoverable error
google.cloud.bigtable.data.exceptions.ParameterTypeInferenceFailed – Raised if
a parameter is passed without an explicit type, and the type cannot be infered
google.protobuf.message.DecodeError – raised if the deserialization of a PROTO/ENUM value fails.
get_authorized_view(instance_id: str , table_id: str , authorized_view_id: str , *args, **kwargs)
Returns an authorized view instance for making data API requests. All arguments are passed
directly to the AuthorizedViewAsync constructor.
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
operations, in seconds. If not set, defaults to Table’s value
default_read_rows_attempt_timeout – The default timeout for individual
read rows rpc requests, in seconds. If not set, defaults Table’s value
default_mutate_rows_operation_timeout – The default timeout for mutate rows
operations, in seconds. If not set, defaults to Table’s value
default_mutate_rows_attempt_timeout – The default timeout for individual
mutate rows rpc requests, in seconds. If not set, defaults Table’s value
default_operation_timeout – The default timeout for all other operations, in
seconds. If not set, defaults to Table’s value
default_attempt_timeout – The default timeout for all other individual rpc
requests, in seconds. If not set, defaults to Table’s value
default_read_rows_retryable_errors – a list of errors that will be retried
if encountered during read_rows and related operations. If not set,
defaults to Table’s value
default_mutate_rows_retryable_errors – a list of errors that will be retried
if encountered during mutate_rows and related operations. If not set,
defaults to Table’s value
default_retryable_errors – a list of errors that will be retried if
encountered during all other operations. If not set, defaults to
Table’s value
Returns
a table instance for making data API requests
Return type
AuthorizedViewAsync
Raises
RuntimeError – if called outside of an async context (no running event loop)
get_table(instance_id: str , table_id: str , *args, **kwargs)
Returns a table instance for making data API requests. All arguments are passed
directly to the TableAsync constructor.
Must be created within an async context (running event loop)
Parameters
instance_id – The Bigtable instance ID to associate with this client.
instance_id is combined with the client’s project to fully
specify the instance
table_id – The ID of the table. table_id is combined with the
instance_id and the client’s project to fully specify the table
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
Returns
a table instance for making data API requests
Return type
TableAsync
Raises
RuntimeError – if called outside of an async context (no running event loop)
property universe_domain( : [str]( https://docs.python.org/3/library/stdtypes.html#str )
Return the universe domain used by the client instance.
Returns
The universe domain used by the client instance.
Return type
str
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
