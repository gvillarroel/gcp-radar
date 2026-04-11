---
title: "Data Access audit log fields \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/audit-log-fields
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/audit-log-fields
  title: "Data Access audit log fields \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Data Access audit log fields
The following table lists Bigtable Data API message fields and
indicates whether or not they are logged as part of Data Access audit logging.
AUDITED means the field is included in the audit log entry, AUDIT_SIZE
means that the size of the repeated field is used to set the number of response
items during audit logging, and Not Audited means the field is not audited.
Displayed in Base 64 .
Custom audit field added dynamically during audit logging.
Message
Field
Logging Status
Cell
timestamp_micros
Not audited
value
Not audited
labels[ ]
Not audited
CheckAndMutateRowRequest
table_name
AUDITED
app_profile_id
AUDITED
row_key 1
AUDITED
predicate_filter
AUDITED
true_mutations[ ]
AUDITED
false_mutations[ ]
AUDITED
CheckAndMutateRowResponse
predicate_matched
AUDITED
Column
qualifier
Not audited
cells[ ]
Not audited
ColumnRange
family_name
AUDITED
start_qualifier_closed
AUDITED
start_qualifier_open
AUDITED
end_qualifier_closed
AUDITED
end_qualifier_open
AUDITED
Family
name
Not audited
columns[ ]
Not audited
MutateRowRequest
table_name
AUDITED
app_profile_id
AUDITED
row_key 1
AUDITED
mutations[ ]
AUDITED
MutateRowResponse
Not audited
MutateRowsRequest
table_name
AUDITED
app_profile_id
AUDITED
entries[ ]
AUDITED
Entry
(A mutation for a given row.)
row_key 1
AUDITED
mutations[ ]
AUDITED
MutateRowsResponse
entries[ ]
AUDITED
Entry
(The result of applying a passed mutation in the original
request.)
index
AUDITED
status
AUDITED
Mutation
set_cell
AUDITED
delete_from_column
AUDITED
delete_from_family
AUDITED
delete_from_row
AUDITED
DeleteFromColumn
family_name
AUDITED
column_qualifier
Not audited
time_range
Not audited
DeleteFromFamily
family_name
AUDITED
DeleteFromRow
Not audited
SetCell
family_name
AUDITED
column_qualifier
Not audited
timestamp_micros
Not audited
value
Not audited
ReadModifyWriteRowRequest
table_name
AUDITED
app_profile_id
AUDITED
row_key 1
AUDITED
rules[ ]
AUDITED
ReadModifyWriteRowResponse
row
Not audited
ReadModifyWriteRule
family_name
AUDITED
column_qualifier
Not audited
append_value
Not audited
increment_amount
Not audited
ReadRowsRequest
table_name
AUDITED
app_profile_id
AUDITED
rows
AUDITED
filter
AUDITED
rows_limit
AUDITED
ReadRowsResponse
chunks[ ]
AUDIT_SIZE
last_scanned_row_key 1
Not audited
response_stream_bytes 2
AUDITED
CellChunk
row_key 1
Not audited
family_name
Not audited
qualifier
Not audited
timestamp_micros
Not audited
labels[ ]
Not audited
value
Not audited
value_size
Not audited
reset_row
Not audited
commit_row
Not audited
Row
key
Not audited
families[ ]
Not audited
RowFilter
chain
AUDITED
interleave
AUDITED
condition
AUDITED
sink
AUDITED
pass_all_filter
AUDITED
block_all_filter
AUDITED
row_key_regex_filter
AUDITED
row_sample_filter
AUDITED
family_name_regex_filter
AUDITED
column_qualifier_regex_filter
AUDITED
column_range_filter
AUDITED
timestamp_range_filter
AUDITED
value_regex_filter
AUDITED
value_range_filter
AUDITED
cells_per_row_offset_filter
AUDITED
cells_per_row_limit_filter
AUDITED
cells_per_column_limit_filter
AUDITED
strip_value_transformer
AUDITED
apply_label_transformer
AUDITED
Chain
filters[ ]
AUDITED
Condition
predicate_filter
AUDITED
true_filter
AUDITED
false_filter
AUDITED
Interleave
filters[ ]
AUDITED
RowRange
start_key_closed
AUDITED
start_key_open
AUDITED
end_key_open
AUDITED
end_key_closed
AUDITED
RowSet
row_keys[ ]
AUDITED
row_ranges[ ]
AUDITED
SampleRowKeysRequest
table_name
AUDITED
app_profile_id
AUDITED
SampleRowKeysResponse
row_key 1
Not audited
offset_bytes
Not audited
response_stream_bytes 2
AUDITED
TimestampRange
start_timestamp_micros
AUDITED
end_timestamp_micros
AUDITED
ValueRange
start_value_closed
Not audited
start_value_open
Not audited
end_value_closed
Not audited
end_value_open
Not audited
What's next
Learn more about Bigtable audit logging.
View an example of Bigtable Data Access audit log.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
