---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/common_data_row_filters
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/common_data_row_filters
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
Bigtable Row Filters
It is possible to use a
RowFilter
when constructing a ReadRowsQuery
The following basic filters
are provided:
SinkFilter
PassAllFilter
BlockAllFilter
RowKeyRegexFilter
RowSampleFilter
FamilyNameRegexFilter
ColumnQualifierRegexFilter
TimestampRangeFilter
ColumnRangeFilter
ValueRegexFilter
ValueRangeFilter
CellsRowOffsetFilter
CellsRowLimitFilter
CellsColumnLimitFilter
StripValueTransformerFilter
ApplyLabelFilter
In addition, these filters can be combined into composite filters with
RowFilterChain
RowFilterUnion
ConditionalRowFilter
These rules can be nested arbitrarily, with a basic filter at the lowest
level. For example:
# Filter in a specified column (matching any column family).
col1_filter = ColumnQualifierRegexFilter(b'columnbia')
# Create a filter to label results.
label1 = u'label-red'
label1_filter = ApplyLabelFilter(label1)
# Combine the filters to label all the cells in columnbia.
chain1 = RowFilterChain(filters=[col1_filter, label1_filter])
# Create a similar filter to label cells blue.
col2_filter = ColumnQualifierRegexFilter(b'columnseeya')
label2 = u'label-blue'
label2_filter = ApplyLabelFilter(label2)
chain2 = RowFilterChain(filters=[col2_filter, label2_filter])
# Bring our two labeled columns together.
row_filter = RowFilterUnion(filters=[chain1, chain2])
Filters for Google Cloud Bigtable Row classes.
class google.cloud.bigtable.data.row_filters.ApplyLabelFilter(label: str )
Bases: google.cloud.bigtable.data.row_filters.RowFilter
Filter to apply labels to cells.
Intended to be used as an intermediate filter on a pre-existing filtered
result set. This way if two sets are combined, the label can tell where
the cell(s) originated.This allows the client to determine which results
were produced from which part of the filter.
NOTE : Due to a technical limitation of the backend, it is not currently
possible to apply multiple labels to a cell.
Parameters
label ( str ) – Label to apply to cells in the output row. Values must be
at most 15 characters long, and match the pattern
[a-z0-9\\-]+ .
class google.cloud.bigtable.data.row_filters.BlockAllFilter(flag: bool )
Bases: google.cloud.bigtable.data.row_filters._BoolFilter
Row filter that doesn’t match any cells.
Parameters
flag ( bool ) – Does not match any cells, regardless of input. Useful for
temporarily disabling just part of a filter.
class google.cloud.bigtable.data.row_filters.CellsColumnLimitFilter(num_cells: int )
Bases: google.cloud.bigtable.data.row_filters._CellCountFilter
Row filter to limit cells in a column.
Parameters
num_cells ( int ) – Matches only the most recent N cells within each column.
This filters a (family name, column) pair, based on
timestamps of each cell.
class google.cloud.bigtable.data.row_filters.CellsRowLimitFilter(num_cells: int )
Bases: google.cloud.bigtable.data.row_filters._CellCountFilter
Row filter to limit cells in a row.
Parameters
num_cells ( int ) – Matches only the first N cells of the row.
class google.cloud.bigtable.data.row_filters.CellsRowOffsetFilter(num_cells: int )
Bases: google.cloud.bigtable.data.row_filters._CellCountFilter
Row filter to skip cells in a row.
Parameters
num_cells ( int ) – Skips the first N cells of the row.
class google.cloud.bigtable.data.row_filters.ColumnQualifierRegexFilter(regex: str | bytes )
Bases: google.cloud.bigtable.data.row_filters._RegexFilter
Row filter for a column qualifier regular expression.
The regex must be valid RE2 patterns. See Google’s
RE2 reference for the accepted syntax.
NOTE : Special care need be used with the expression used. Since
each of these properties can contain arbitrary bytes, the \\C
escape sequence must be used if a true wildcard is desired. The .
character will not match the new line character \\n , which may be
present in a binary value.
Parameters
regex ( bytes ) – A regular expression (RE2) to match cells from column that
match this regex (irrespective of column family).
class google.cloud.bigtable.data.row_filters.ColumnRangeFilter(family_id: str , start_qualifier: Optional [ bytes ] = None, end_qualifier: Optional [ bytes ] = None, inclusive_start: Optional [ bool ] = None, inclusive_end: Optional [ bool ] = None)
Bases: google.cloud.bigtable.data.row_filters.RowFilter
A row filter to restrict to a range of columns.
Both the start and end column can be included or excluded in the range.
By default, we include them both, but this can be changed with optional
flags.
Parameters
family_id ( str ) – The column family that contains the columns. Must
be of the form [_a-zA-Z0-9][-_.a-zA-Z0-9]\* .
start_qualifier ( bytes ) – The start of the range of columns. If no value is
used, the backend applies no upper bound to the
values.
end_qualifier ( bytes ) – The end of the range of columns. If no value is used,
the backend applies no upper bound to the values.
inclusive_start ( bool ) – Boolean indicating if the start column should be
included in the range (or excluded). Defaults
to True if start_qualifier is passed and
no inclusive_start was given.
inclusive_end ( bool ) – Boolean indicating if the end column should be
included in the range (or excluded). Defaults
to True if end_qualifier is passed and
no inclusive_end was given.
Raises
ValueError if inclusive_start
is set but no start_qualifier is given or if inclusive_end
is set but no end_qualifier is given
class google.cloud.bigtable.data.row_filters.ConditionalRowFilter(predicate_filter: google.cloud.bigtable.data.row_filters.RowFilter, true_filter: Optional [google.cloud.bigtable.data.row_filters.RowFilter] = None, false_filter: Optional [google.cloud.bigtable.data.row_filters.RowFilter] = None)
Bases: google.cloud.bigtable.data.row_filters.RowFilter
Conditional row filter which exhibits ternary behavior.
Executes one of two filters based on another filter. If the predicate_filter
returns any cells in the row, then true_filter is executed. If not,
then false_filter is executed.
NOTE : The predicate_filter does not execute atomically with the true and false
filters, which may lead to inconsistent or unexpected results.
Additionally, executing a ConditionalRowFilter has poor
performance on the server, especially when false_filter is set.
Parameters
predicate_filter ( RowFilter ) – The filter to condition on before executing the
true/false filters.
true_filter ( RowFilter ) – (Optional) The filter to execute if there are any cells
matching predicate_filter . If not provided, no results
will be returned in the true case.
false_filter ( RowFilter ) – (Optional) The filter to execute if there are no cells
matching predicate_filter . If not provided, no results
will be returned in the false case.
class google.cloud.bigtable.data.row_filters.FamilyNameRegexFilter(regex: str | bytes )
Bases: google.cloud.bigtable.data.row_filters._RegexFilter
Row filter for a family name regular expression.
The regex must be valid RE2 patterns. See Google’s
RE2 reference for the accepted syntax.
Parameters
regex ( str ) – A regular expression (RE2) to match cells from columns in a
given column family. For technical reasons, the regex must
not contain the ':' character, even if it is not being
used as a literal.
class google.cloud.bigtable.data.row_filters.LiteralValueFilter(value: bytes | str | int )
Bases: google.cloud.bigtable.data.row_filters.ValueRegexFilter
Row filter for an exact value.
Parameters
value ( bytes * or [ str ]( https://docs.python.org/3/library/stdtypes.html#str ) or [ int*]( https://docs.python.org/3/library/functions.html#int )) – a literal string, integer, or the equivalent bytes.
Integer values will be packed into signed 8-bytes.
class google.cloud.bigtable.data.row_filters.PassAllFilter(flag: bool )
Bases: google.cloud.bigtable.data.row_filters._BoolFilter
Row filter equivalent to not filtering at all.
Parameters
flag ( bool ) – Matches all cells, regardless of input. Functionally
equivalent to leaving filter unset, but included for
completeness.
class google.cloud.bigtable.data.row_filters.RowFilter()
Bases: abc.ABC
Basic filter to apply to cells in a row.
These values can be combined via RowFilterChain ,
RowFilterUnion and ConditionalRowFilter .
NOTE : This class is a do-nothing base class for all row filters.
class google.cloud.bigtable.data.row_filters.RowFilterChain(filters: Optional [ list [google.cloud.bigtable.data.row_filters.RowFilter]] = None)
Bases: google.cloud.bigtable.data.row_filters._FilterCombination
Chain of row filters.
Sends rows through several filters in sequence. The filters are “chained”
together to process a row. After the first filter is applied, the second
is applied to the filtered output and so on for subsequent filters.
Parameters
filters ( list ) – List of RowFilter
class google.cloud.bigtable.data.row_filters.RowFilterUnion(filters: Optional [ list [google.cloud.bigtable.data.row_filters.RowFilter]] = None)
Bases: google.cloud.bigtable.data.row_filters._FilterCombination
Union of row filters.
Sends rows through several filters simultaneously, then
merges / interleaves all the filtered results together.
If multiple cells are produced with the same column and timestamp,
they will all appear in the output row in an unspecified mutual order.
Parameters
filters ( list ) – List of RowFilter
class google.cloud.bigtable.data.row_filters.RowKeyRegexFilter(regex: str | bytes )
Bases: google.cloud.bigtable.data.row_filters._RegexFilter
Row filter for a row key regular expression.
The regex must be valid RE2 patterns. See Google’s
RE2 reference for the accepted syntax.
NOTE : Special care need be used with the expression used. Since
each of these properties can contain arbitrary bytes, the \\C
escape sequence must be used if a true wildcard is desired. The .
character will not match the new line character \\n , which may be
present in a binary value.
Parameters
regex ( bytes ) – A regular expression (RE2) to match cells from rows with row
keys that satisfy this regex. For a
CheckAndMutateRowRequest , this filter is unnecessary
since the row key is already specified.
class google.cloud.bigtable.data.row_filters.RowSampleFilter(sample: float )
Bases: google.cloud.bigtable.data.row_filters.RowFilter
Matches all cells from a row with probability p.
Parameters
sample ( float ) – The probability of matching a cell (must be in the
interval (0, 1) The end points are excluded).
class google.cloud.bigtable.data.row_filters.SinkFilter(flag: bool )
Bases: google.cloud.bigtable.data.row_filters._BoolFilter
Advanced row filter to skip parent filters.
Parameters
flag ( bool ) – ADVANCED USE ONLY. Hook for introspection into the row filter.
Outputs all cells directly to the output of the read rather
than to any parent filter. Cannot be used within the
predicate_filter , true_filter , or false_filter
of a ConditionalRowFilter .
class google.cloud.bigtable.data.row_filters.StripValueTransformerFilter(flag: bool )
Bases: google.cloud.bigtable.data.row_filters._BoolFilter
Row filter that transforms cells into empty string (0 bytes).
Parameters
flag ( bool ) – If True , replaces each cell’s value with the empty
string. As the name indicates, this is more useful as a
transformer than a generic query / filter.
class google.cloud.bigtable.data.row_filters.TimestampRange(start: 'datetime' | None = None, end: 'datetime' | None = None)
Bases: object
Range of time with inclusive lower and exclusive upper bounds.
Parameters
start ( datetime.datetime ) – (Optional) The (inclusive) lower bound of the timestamp
range. If omitted, defaults to Unix epoch.
end ( datetime.datetime ) – (Optional) The (exclusive) upper bound of the timestamp
range. If omitted, no upper bound is used.
class google.cloud.bigtable.data.row_filters.TimestampRangeFilter(start: 'datetime' | None = None, end: 'datetime' | None = None)
Bases: google.cloud.bigtable.data.row_filters.RowFilter
Row filter that limits cells to a range of time.
Parameters
range ( TimestampRange ) – Range of time that cells should match against.
class google.cloud.bigtable.data.row_filters.ValueRangeFilter(start_value: Optional [ Union [ bytes , int ]] = None, end_value: Optional [ Union [ bytes , int ]] = None, inclusive_start: Optional [ bool ] = None, inclusive_end: Optional [ bool ] = None)
Bases: google.cloud.bigtable.data.row_filters.RowFilter
A range of values to restrict to in a row filter.
Will only match cells that have values in this range.
Both the start and end value can be included or excluded in the range.
By default, we include them both, but this can be changed with optional
flags.
Parameters
start_value ( bytes ) – The start of the range of values. If no value is used,
the backend applies no lower bound to the values.
end_value ( bytes ) – The end of the range of values. If no value is used,
the backend applies no upper bound to the values.
inclusive_start ( bool ) – Boolean indicating if the start value should be
included in the range (or excluded). Defaults
to True if start_value is passed and
no inclusive_start was given.
inclusive_end ( bool ) – Boolean indicating if the end value should be
included in the range (or excluded). Defaults
to True if end_value is passed and
no inclusive_end was given.
Raises
ValueError if inclusive_start
is set but no start_value is given or if inclusive_end
is set but no end_value is given
class google.cloud.bigtable.data.row_filters.ValueRegexFilter(regex: str | bytes )
Bases: google.cloud.bigtable.data.row_filters._RegexFilter
Row filter for a value regular expression.
The regex must be valid RE2 patterns. See Google’s
RE2 reference for the accepted syntax.
NOTE : Special care need be used with the expression used. Since
each of these properties can contain arbitrary bytes, the \\C
escape sequence must be used if a true wildcard is desired. The .
character will not match the new line character \\n , which may be
present in a binary value.
Parameters
regex ( bytes * or [ str*]( https://docs.python.org/3/library/stdtypes.html#str )) – A regular expression (RE2) to match cells with values that
match this regex. String values will be encoded as ASCII.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
