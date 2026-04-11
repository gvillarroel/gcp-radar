---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/data-api
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/data-api
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
Data API
NOTE : This page describes how to use the Data API with the synchronous Bigtable client.
Examples for using the Data API with the async client can be found in the
Getting Started Guide .
After creating a Table and some
column families, you are ready to store and retrieve data.
Cells vs. Columns vs. Column Families
As explained in the table overview , tables can
have many column families.
As described below, a table can also have many rows which are
specified by row keys.
Within a row, data is stored in a cell. A cell simply has a value (as
bytes) and a timestamp. The number of cells in each row can be
different, depending on what was stored in each row.
Each cell lies in a column ( not a column family). A column is really
just a more specific modifier within a column family. A column
can be present in every column family, in only one or anywhere in between.
Within a column family there can be many columns. For example, within
the column family foo we could have columns bar and baz .
These would typically be represented as foo:bar and foo:baz .
Modifying Data
Since data is stored in cells, which are stored in rows, we
use the metaphor of a row in classes that are used to modify
(write, update, delete) data in a
Table .
Direct vs. Conditional vs. Append
There are three ways to modify data in a table, described by the
MutateRow , CheckAndMutateRow and ReadModifyWriteRow API
methods.
The direct way is via MutateRow which involves simply
adding, overwriting or deleting cells. The
DirectRow class
handles direct mutations.
The conditional way is via CheckAndMutateRow . This method
first checks if some filter is matched in a given row, then
applies one of two sets of mutations, depending on if a match
occurred or not. (These mutation sets are called the “true
mutations” and “false mutations”.) The
ConditionalRow class
handles conditional mutations.
The append way is via ReadModifyWriteRow . This simply
appends (as bytes) or increments (as an integer) data in a presumed
existing cell in a row. The
AppendRow class
handles append mutations.
Row Factory
A single factory can be used to create any of the three row types.
To create a DirectRow :
row = table.row(row_key)
Unlike the previous string values we’ve used before, the row key must
be bytes .
To create a ConditionalRow ,
first create a RowFilter and
then
cond_row = table.row(row_key, filter_=filter_)
To create an AppendRow
append_row = table.row(row_key, append=True)
Building Up Mutations
In all three cases, a set of mutations (or two sets) are built up
on a row before they are sent off in a batch via
row.commit()
Direct Mutations
Direct mutations can be added via one of four methods
set_cell() allows a
single value to be written to a column
row.set_cell(column_family_id, column, value,
timestamp=timestamp)
If the timestamp is omitted, the current time on the Google Cloud
Bigtable server will be used when the cell is stored.
The value can either be bytes or an integer, which will be converted to
bytes as a signed 64-bit integer.
delete_cell() deletes
all cells (i.e. for all timestamps) in a given column
row.delete_cell(column_family_id, column)
Remember, this only happens in the row we are using.
If we only want to delete cells from a limited range of time, a
TimestampRange can
be used
row.delete_cell(column_family_id, column,
time_range=time_range)
delete_cells() does
the same thing as
delete_cell() ,
but accepts a list of columns in a column family rather than a single one.
row.delete_cells(column_family_id, [column1, column2],
time_range=time_range)
In addition, if we want to delete cells from every column in a column family,
the special ALL_COLUMNS
value can be used
row.delete_cells(column_family_id, row.ALL_COLUMNS,
time_range=time_range)
delete() will delete the
entire row
row.delete()
Conditional Mutations
Making conditional modifications is essentially identical
to direct modifications: it uses the exact same methods
to accumulate mutations.
However, each mutation added must specify a state : will the mutation be
applied if the filter matches or if it fails to match.
For example:
cond_row.set_cell(column_family_id, column, value,
timestamp=timestamp, state=True)
will add to the set of true mutations.
Append Mutations
Append mutations can be added via one of two methods
append_cell_value()
appends a bytes value to an existing cell:
append_row.append_cell_value(column_family_id, column, bytes_value)
increment_cell_value()
increments an integer value in an existing cell:
append_row.increment_cell_value(column_family_id, column, int_value)
Since only bytes are stored in a cell, the cell value is decoded as
a signed 64-bit integer before being incremented. (This happens on
the Google Cloud Bigtable server, not in the library.)
Notice that no timestamp was specified. This is because append mutations
operate on the latest value of the specified column.
If there are no cells in the specified column, then the empty string (bytes
case) or zero (integer case) are the assumed values.
Starting Fresh
If accumulated mutations need to be dropped, use
row.clear()
Reading Data
Read Single Row from a Table
To make a ReadRows API request for a single row key, use
Table.read_row() :
>>> row_data = table.read_row(row_key)
>>> row_data.cells
{
u'fam1': {
b'col1': [
<google.cloud.bigtable.row_data.Cell at 0x7f80d150ef10>,
<google.cloud.bigtable.row_data.Cell at 0x7f80d150ef10>,
],
b'col2': [
<google.cloud.bigtable.row_data.Cell at 0x7f80d150ef10>,
],
},
u'fam2': {
b'col3': [
<google.cloud.bigtable.row_data.Cell at 0x7f80d150ef10>,
<google.cloud.bigtable.row_data.Cell at 0x7f80d150ef10>,
<google.cloud.bigtable.row_data.Cell at 0x7f80d150ef10>,
],
},
}
>>> cell = row_data.cells[u'fam1'][b'col1'][0]
>>> cell
<google.cloud.bigtable.row_data.Cell at 0x7f80d150ef10>
>>> cell.value
b'val1'
>>> cell.timestamp
datetime.datetime(2016, 2, 27, 3, 41, 18, 122823, tzinfo=<UTC>)
Rather than returning a DirectRow
or similar class, this method returns a
PartialRowData
instance. This class is used for reading and parsing data rather than for
modifying data (as DirectRow is).
A filter can also be applied to the results:
row_data = table.read_row(row_key, filter_=filter_val)
The allowable filter_ values are the same as those used for a
ConditionalRow . For
more information, see the
Table.read_row() documentation.
Stream Many Rows from a Table
To make a ReadRows API request for a stream of rows, use
Table.read_rows() :
row_data = table.read_rows()
Using gRPC over HTTP/2, a continual stream of responses will be delivered.
In particular
consume_next()
pulls the next result from the stream, parses it and stores it on the
PartialRowsData instance
consume_all()
pulls results from the stream until there are no more
cancel() closes
the stream
See the PartialRowsData
documentation for more information.
As with
Table.read_row() , an optional
filter_ can be applied. In addition a start_key and / or end_key
can be supplied for the stream, a limit can be set and a boolean
allow_row_interleaving can be specified to allow faster streamed results
at the potential cost of non-sequential reads.
See the Table.read_rows()
documentation for more information on the optional arguments.
Sample Keys in a Table
Make a SampleRowKeys API request with
Table.sample_row_keys() :
keys_iterator = table.sample_row_keys()
The returned row keys will delimit contiguous sections of the table of
approximately equal size, which can be used to break up the data for
distributed tasks like mapreduces.
As with
Table.read_rows() , the
returned keys_iterator is connected to a cancellable HTTP/2 stream.
The next key in the result can be accessed via
next_key = keys_iterator.next()
or all keys can be iterated over via
for curr_key in keys_iterator:
do_something(curr_key)
Just as with reading, the stream can be canceled:
keys_iterator.cancel()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
