---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/common_data_row
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/common_data_row
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
Rows and Cells
class google.cloud.bigtable.data.row.Cell(value: bytes , row_key: bytes , family: str , qualifier: bytes | str , timestamp_micros: int , labels: Optional [ list [ str ]] = None)
Bases: object
Model class for cell data
Does not represent all data contained in the cell, only data returned by a
query.
Expected to be read-only to users, and written by backend
Parameters
value – the byte string value of the cell
row_key – the row key of the cell
family – the family associated with the cell
qualifier – the column qualifier associated with the cell
timestamp_micros – the timestamp of the cell in microseconds
labels – the list of labels associated with the cell
_ eq_ (other)
Implements == operator
Parameters
other – Cell to compare with
Returns
True if cells are equal, False otherwise
Return type
bool
_ hash_ ()
Implements hash() function to fingerprint cell
Returns
hash value of the cell
Return type
int
_ int_ ()
Allows casting cell to int
Interprets value as a 64-bit big-endian signed integer, as expected by
ReadModifyWrite increment rule
Returns
Value of the cell as a 64-bit big-endian signed integer
Return type
int
_ lt_ (other)
Implements < operator
Parameters
other – Cell to compare with
Returns
True if this cell is less than the other cell, False otherwise
Return type
bool
Raises
NotImplementedError – If other is not a Cell
_ ne_ (other)
Implements != operator
Parameters
other – Cell to compare with
Returns
True if cells are not equal, False otherwise
Return type
bool
_ repr_ ()
Returns a string representation of the cell
Returns
String representation of the cell
Return type
str
_ str_ ()
Allows casting cell to str
Prints encoded byte string, same as printing value directly.
Returns
Encoded byte string of the value
Return type
str
class google.cloud.bigtable.data.row.Row(key: bytes , cells: list [google.cloud.bigtable.data.row.Cell])
Bases: object
Model class for row data returned from server
Does not represent all data contained in the row, only data returned by a
query.
Expected to be read-only to users, and written by backend
Can be indexed by family and qualifier to get cells in the row:
cells = row["family", "qualifier"]
Parameters
key – Row key
cells – List of cells in the row
Row objects are not intended to be created by users.
They are returned by the Bigtable backend.
_ contains_ (item)
Implements in operator
Works for both cells in the internal list, and family or
(family, qualifier) pairs associated with the cells
Parameters
item – item to check for in the row
Returns
True if item is in the row, False otherwise
Return type
bool
_ eq_ (other)
Implements == operator
Returns
True if rows are equal, False otherwise
Return type
bool
_ getitem_ (index: str | tuple [ str , bytes | str ])
_ getitem_ (index: int )
_ getitem_ (index: slice )
Implements [] indexing
Supports indexing by family, (family, qualifier) pair,
numerical index, and index slicing
_ iter_ ()
Allow iterating over all cells in the row
Returns
Iterator over the cells in the row
Return type
Iterator
_ len_ ()
Returns the number of cells in the row
Returns
Number of cells in the row
Return type
int
_ ne_ (other)
Implements != operator
Returns
True if rows are not equal, False otherwise
Return type
bool
_ str_ ()
Human-readable string representation:
{
(family='fam', qualifier=b'col'): [b'value', (+1 more),],
(family='fam', qualifier=b'col2'): [b'other'],
}
Returns
Human-readable string representation of the row
Return type
str
get_cells(family: Optional [ str ] = None, qualifier: Optional [ Union [ str , bytes ]] = None)
Returns cells sorted in Bigtable native order:
* Family lexicographically ascending
* Qualifier ascending
* Timestamp in reverse chronological order
If family or qualifier not passed, will include all
Can also be accessed through indexing::
cells = row[“family”, “qualifier”]
cells = row[“family”]
Parameters
family – family to filter cells by
qualifier – qualifier to filter cells by
Returns
List of cells in the row matching the filter
Return type
list [Cell]
Raises
ValueError – If family or qualifier is not found in the row
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
