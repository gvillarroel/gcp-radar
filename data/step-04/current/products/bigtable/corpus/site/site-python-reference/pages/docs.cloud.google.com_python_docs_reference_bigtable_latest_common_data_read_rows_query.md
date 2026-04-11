---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/common_data_read_rows_query
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/common_data_read_rows_query
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
Read Rows Query
class google.cloud.bigtable.data.read_rows_query.ReadRowsQuery(row_keys: Optional [ Union [ list [ str | bytes ], str , bytes ]] = None, row_ranges: Optional [ Union [ list [google.cloud.bigtable.data.read_rows_query.RowRange], google.cloud.bigtable.data.read_rows_query.RowRange]] = None, limit: Optional [ int ] = None, row_filter: Optional [ google.cloud.bigtable.data.row_filters.RowFilter ] = None)
Bases: object
Class to encapsulate details of a read row request
Parameters
row_keys – row keys to include in the query
a query can contain multiple keys, but ranges should be preferred
row_ranges – ranges of rows to include in the query
limit – the maximum number of rows to return. None or 0 means no limit
default: None (no limit)
row_filter – a RowFilter to apply to the query
_ eq_ (other)
RowRanges are equal if they have the same row keys, row ranges,
filter and limit, or if they both represent a full scan with the
same filter and limit
Parameters
other – the object to compare to
Returns
True if the objects are equal, False otherwise
Return type
bool
add_key(row_key: str | bytes )
Add a row key to this query
A query can contain multiple keys, but ranges should be preferred
Parameters
row_key – a key to add to this query
Raises
ValueError – if an input is not a string or bytes
add_range(row_range: google.cloud.bigtable.data.read_rows_query.RowRange)
Add a range of row keys to this query.
Parameters
row_range – a range of row keys to add to this query
property filter( : google.cloud.bigtable.data.row_filters.RowFilter | [None]( https://docs.python.org/3/library/constants.html#None )
Return the RowFilter applied to this query
Returns
the RowFilter applied to this query
Return type
RowFilter | None
property limit( : int | [None]( https://docs.python.org/3/library/constants.html#None )
Return the maximum number of rows to return by this query
None or 0 means no limit
Returns
the maximum number of rows to return by this query
Return type
int | None
property row_keys( : list [ bytes )
Return the row keys in this query
Returns
the row keys in this query
Return type
list [ bytes ]
property row_ranges( : list [google.cloud.bigtable.data.read_rows_query.RowRange )
Return the row ranges in this query
Returns
the row ranges in this query
Return type
list [RowRange]
shard(shard_keys: RowKeySamples)
Split this query into multiple queries that can be evenly distributed
across nodes and run in parallel
Parameters
shard_keys – a list of row keys that define the boundaries of segments.
Returns
a ShardedQuery that can be used in sharded_read_rows calls
Return type
ShardedQuery
Raises
AttributeError – if the query contains a limit
class google.cloud.bigtable.data.read_rows_query.RowRange(start_key: Optional [ Union [ str , bytes ]] = None, end_key: Optional [ Union [ str , bytes ]] = None, start_is_inclusive: Optional [ bool ] = None, end_is_inclusive: Optional [ bool ] = None)
Bases: object
Represents a range of keys in a ReadRowsQuery
Parameters
start_key – The start key of the range. If empty, the range is unbounded on the left.
end_key – The end key of the range. If empty, the range is unbounded on the right.
start_is_inclusive – Whether the start key is inclusive. If None, the start key is
inclusive.
end_is_inclusive – Whether the end key is inclusive. If None, the end key is not inclusive.
Raises
ValueError – if start_key is greater than end_key, or start_is_inclusive
ValueError – if end_is_inclusive is set when the corresponding key is None
ValueError – if start_key or end_key is not a string or bytes.
_ bool_ ()
Empty RowRanges (representing a full table scan) are falsy, because
they can be substituted with None. Non-empty RowRanges are truthy.
Returns
True if the RowRange is not empty, False otherwise
Return type
bool
_ str_ ()
Represent range as a string, e.g. “[b’a’, b’z)”
Unbounded start or end keys are represented as “-inf” or “+inf”
Returns
The string representation of the range
Return type
str
property end_is_inclusive( : [bool]( https://docs.python.org/3/library/functions.html#bool )
Indicates if the range is inclusive of the end key.
If the range is unbounded on the right, this will return True.
Returns
Whether the range is inclusive of the end key.
Return type
bool
property end_key( : bytes | [None]( https://docs.python.org/3/library/constants.html#None )
Returns the end key of the range. If None, the range is unbounded on the right.
Returns
The end key of the range, or None if the range is unbounded on the right.
Return type
bytes | None
property start_is_inclusive( : [bool]( https://docs.python.org/3/library/functions.html#bool )
Indicates if the range is inclusive of the start key.
If the range is unbounded on the left, this will return True.
Returns
Whether the range is inclusive of the start key.
Return type
bool
property start_key( : bytes | [None]( https://docs.python.org/3/library/constants.html#None )
Returns the start key of the range. If None, the range is unbounded on the left.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
