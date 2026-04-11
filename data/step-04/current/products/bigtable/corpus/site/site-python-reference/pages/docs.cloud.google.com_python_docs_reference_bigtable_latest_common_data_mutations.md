---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/common_data_mutations
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/common_data_mutations
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
Mutations
class google.cloud.bigtable.data.mutations.AddToCell(family: str , qualifier: bytes | str , value: int , timestamp_micros: int )
Bases: google.cloud.bigtable.data.mutations.Mutation
Adds an int64 value to an aggregate cell. The column family must be an
aggregate family and have an “int64” input type or this mutation will be
rejected.
Note: The timestamp values are in microseconds but must match the
granularity of the table (defaults to MILLIS). Therefore, the given value
must be a multiple of 1000 (millisecond granularity). For example:
1571902339435000.
Parameters
family – The name of the column family to which the cell belongs.
qualifier – The column qualifier of the cell.
value – The value to be accumulated into the cell.
timestamp_micros – The timestamp of the cell. Must be provided for
cell aggregation to work correctly.
Raises
TypeError – If qualifier is not bytes or str.
TypeError – If value is not int.
TypeError – If timestamp_micros is not int.
ValueError – If value is out of bounds for a 64-bit signed int.
ValueError – If timestamp_micros is less than 0.
is_idempotent()
Check if the mutation is idempotent
Idempotent mutations can be safely retried on failure.
Returns
True if the mutation is idempotent, False otherwise.
Return type
bool
class google.cloud.bigtable.data.mutations.DeleteAllFromFamily(family_to_delete: str )
Bases: google.cloud.bigtable.data.mutations.Mutation
Mutation to delete all cells from a column family.
Parameters
family_to_delete – The name of the column family to delete.
class google.cloud.bigtable.data.mutations.DeleteAllFromRow()
Bases: google.cloud.bigtable.data.mutations.Mutation
Mutation to delete all cells from a row.
class google.cloud.bigtable.data.mutations.DeleteRangeFromColumn(family: str , qualifier: bytes , start_timestamp_micros: Optional [ int ] = None, end_timestamp_micros: Optional [ int ] = None)
Bases: google.cloud.bigtable.data.mutations.Mutation
Mutation to delete a range of cells from a column.
Parameters
family – The name of the column family.
qualifier: The column qualifier.
start_timestamp_micros – The start timestamp of the range to
delete. None represents 0. Defaults to None.
end_timestamp_micros – The end timestamp of the range to
delete. None represents infinity. Defaults to None.
Raises
ValueError – If start_timestamp_micros is greater than end_timestamp_micros.
class google.cloud.bigtable.data.mutations.Mutation()
Bases: abc.ABC
Abstract base class for mutations.
This class defines the interface for different types of mutations that can be
applied to Bigtable rows.
_ str_ ()
Return a string representation of the mutation.
Returns
A string representation of the mutation.
Return type
str
is_idempotent()
Check if the mutation is idempotent
Idempotent mutations can be safely retried on failure.
Returns
True if the mutation is idempotent, False otherwise.
Return type
bool
size()
Get the size of the mutation in bytes
Returns
The size of the mutation in bytes.
Return type
int
class google.cloud.bigtable.data.mutations.RowMutationEntry(row_key: bytes | str , mutations: google.cloud.bigtable.data.mutations.Mutation | list [google.cloud.bigtable.data.mutations.Mutation])
Bases: object
A single entry in a MutateRows request.
This class represents a set of mutations to apply to a specific row in a
Bigtable table.
Parameters
row_key – The key of the row to mutate.
mutations – The mutation or list of mutations to apply
to the row.
Raises
ValueError – If mutations is empty or contains more than
_MUTATE_ROWS_REQUEST_MUTATION_LIMIT mutations.
is_idempotent()
Check if all mutations in the entry are idempotent.
Returns
True if all mutations in the entry are idempotent, False otherwise.
Return type
bool
size()
Get the size of the mutation entry in bytes.
Returns
The size of the mutation entry in bytes.
Return type
int
class google.cloud.bigtable.data.mutations.SetCell(family: str , qualifier: bytes | str , new_value: bytes | str | int , timestamp_micros: Optional [ int ] = None)
Bases: google.cloud.bigtable.data.mutations.Mutation
Mutation to set the value of a cell.
Parameters
family – The name of the column family to which the new cell belongs.
qualifier – The column qualifier of the new cell.
new_value – The value of the new cell.
timestamp_micros – The timestamp of the new cell. If None,
the current timestamp will be used. Timestamps will be sent with
millisecond precision. Extra precision will be truncated. If -1, the
server will assign a timestamp. Note that SetCell mutations with
server-side timestamps are non-idempotent operations and will not be retried.
Raises
TypeError – If qualifier is not bytes or str.
TypeError – If new_value is not bytes, str, or int.
ValueError – If timestamp_micros is less than _SERVER_SIDE_TIMESTAMP.
is_idempotent()
Check if the mutation is idempotent
Idempotent mutations can be safely retried on failure.
Returns
True if the mutation is idempotent, False otherwise.
Return type
bool
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
