---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/async_data_mutations_batcher
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/async_data_mutations_batcher
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
Mutations Batcher Async
class google.cloud.bigtable.data._async.mutations_batcher.MutationsBatcherAsync(table: TargetType, *, flush_interval: float | None = 5, flush_limit_mutation_count: int | None = 1000, flush_limit_bytes: int = 20971520, flow_control_max_mutation_count: int = 100000, flow_control_max_bytes: int = 104857600, batch_operation_timeout: float | TABLE_DEFAULT = TABLE_DEFAULT.MUTATE_ROWS, batch_attempt_timeout: float | None | TABLE_DEFAULT = TABLE_DEFAULT.MUTATE_ROWS, batch_retryable_errors: Sequence[ type [ Exception ]] | TABLE_DEFAULT = TABLE_DEFAULT.MUTATE_ROWS)
Bases: object
Allows users to send batches using context manager API.
Runs mutate_row, mutate_rows, and check_and_mutate_row internally, combining
to use as few network requests as required
Will automatically flush the batcher:
every flush_interval seconds
after queue size reaches flush_limit_mutation_count
after queue reaches flush_limit_bytes
when batcher is closed or destroyed
Parameters
table – table or autrhorized_view used to preform rpc calls
flush_interval – Automatically flush every flush_interval seconds.
If None, no time-based flushing is performed.
flush_limit_mutation_count – Flush immediately after flush_limit_mutation_count
mutations are added across all entries. If None, this limit is ignored.
flush_limit_bytes – Flush immediately after flush_limit_bytes bytes are added.
flow_control_max_mutation_count – Maximum number of inflight mutations.
flow_control_max_bytes – Maximum number of inflight bytes.
batch_operation_timeout – timeout for each mutate_rows operation, in seconds.
If TABLE_DEFAULT, defaults to the Table’s default_mutate_rows_operation_timeout.
batch_attempt_timeout – timeout for each individual request, in seconds.
If TABLE_DEFAULT, defaults to the Table’s default_mutate_rows_attempt_timeout.
If None, defaults to batch_operation_timeout.
batch_retryable_errors – a list of errors that will be retried if encountered.
Defaults to the Table’s default_mutate_rows_retryable_errors.
async _ aenter_ ()
Allow use of context manager API
async _ aexit_ (exc_type, exc, tb)
Allow use of context manager API.
Flushes the batcher and cleans up resources.
async append(mutation_entry: RowMutationEntry )
Add a new set of mutations to the internal queue
Parameters
mutation_entry – new entry to add to flush queue
Raises
RuntimeError – if batcher is closed
ValueError – if an invalid mutation type is added
async close()
Flush queue and clean up resources
property closed( : [bool]( https://docs.python.org/3/library/functions.html#bool )
Returns:
True if the batcher is closed, False otherwise
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
