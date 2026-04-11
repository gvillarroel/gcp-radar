---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/batcher
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/batcher
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
Mutations Batching
User friendly container for Google Cloud Bigtable MutationBatcher.
exception google.cloud.bigtable.batcher.MutationsBatchError(message, exc)
Bases: Exception
Error in the batch request
class google.cloud.bigtable.batcher.MutationsBatcher(table, flush_count=100, max_row_bytes=20971520, flush_interval=1, batch_completed_callback=None)
Bases: object
A MutationsBatcher is used in batch cases where the number of mutations
is large or unknown. It will store DirectRow in memory until one of the
size limits is reached, or an explicit call to flush() is performed. When
a flush event occurs, the DirectRow in memory will be sent to Cloud
Bigtable. Batching mutations is more efficient than sending individual
request.
This class is not suited for usage in systems where each mutation
must be guaranteed to be sent, since calling mutate may only result in an
in-memory change. In a case of a system crash, any DirectRow remaining in
memory will not necessarily be sent to the service, even after the
completion of the mutate() method.
Note on thread safety: The same MutationBatcher cannot be shared by multiple end-user threads.
Parameters
table ( class ) – class:~google.cloud.bigtable.table.Table.
flush_count ( int ) – (Optional) Max number of rows to flush. If it
reaches the max number of rows it calls finish_batch() to mutate the
current row batch. Default is FLUSH_COUNT (1000 rows).
max_row_bytes ( int ) – (Optional) Max number of row mutations size to
flush. If it reaches the max number of row mutations size it calls
finish_batch() to mutate the current row batch. Default is MAX_ROW_BYTES
(5 MB).
flush_interval ( float ) – (Optional) The interval (in seconds) between asynchronous flush.
Default is 1 second.
batch_completed_callback (Callable[list:[~google.rpc.status_pb2.Status]] = None) – (Optional) A callable for handling responses
after the current batch is sent. The callable function expect a list of grpc
Status.
_ enter_ ()
Starting the MutationsBatcher as a context manager
_ exit_ (exc_type, exc_value, exc_traceback)
Clean up resources. Flush and shutdown the ThreadPoolExecutor.
close()
Clean up resources. Flush and shutdown the ThreadPoolExecutor.
Any errors will be raised.
Raises
batcherMutationsBatchError if there’s any error in the mutations.
flush()
Sends the current batch to Cloud Bigtable synchronously.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
table = instance.table(TABLE_ID)
# Batcher for max row bytes, max_row_bytes=1024 is optional.
batcher = table.mutations_batcher(max_row_bytes=1024)
# Add a single row
row_key = b"row_key"
row = table.row(row_key)
row.set_cell(COLUMN_FAMILY_ID, COL_NAME1, "value-0")
# In batcher, mutate will flush current batch if it
# reaches the max_row_bytes
batcher . mutate (row)
batcher . flush ()
Raises
batcherMutationsBatchError if there’s any error in the mutations.
mutate(row)
Add a row to the batch. If the current batch meets one of the size
limits, the batch is sent asynchronously.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
table = instance.table(TABLE_ID)
# Batcher for max row bytes, max_row_bytes=1024 is optional.
batcher = table.mutations_batcher(max_row_bytes=1024)
# Add a single row
row_key = b"row_key_1"
row = table.row(row_key)
row.set_cell(
COLUMN_FAMILY_ID, COL_NAME1, "value-0", timestamp=datetime.datetime.utcnow()
)
# In batcher, mutate will flush current batch if it
# reaches the max_row_bytes
batcher . mutate (row)
batcher . flush ()
Parameters
row ( class ) – DirectRow .
Raises
One of the following:
* _BigtableRetryableError if any row returned a transient error.
* RuntimeError if the number of responses doesn’t match the number of rows that were retried
mutate_rows(rows)
Add multiple rows to the batch. If the current batch meets one of the size
limits, the batch is sent asynchronously.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
table = instance.table(TABLE_ID)
batcher = table.mutations_batcher()
row1 = table.row(b"row_key_1")
row2 = table.row(b"row_key_2")
row3 = table.row(b"row_key_3")
row4 = table.row(b"row_key_4")
row1.set_cell(COLUMN_FAMILY_ID, COL_NAME1, b"cell-val1")
row2.set_cell(COLUMN_FAMILY_ID, COL_NAME1, b"cell-val2")
row3.set_cell(COLUMN_FAMILY_ID, COL_NAME1, b"cell-val3")
row4.set_cell(COLUMN_FAMILY_ID, COL_NAME1, b"cell-val4")
batcher .mutate_rows([row1, row2, row3, row4])
# batcher will flush current batch if it
# reaches the max flush_count
# Manually send the current batch to Cloud Bigtable
batcher . flush ()
Parameters
rows (list:[~google.cloud.bigtable.row.DirectRow]) – list:[~google.cloud.bigtable.row.DirectRow].
Raises
One of the following:
* _BigtableRetryableError if any row returned a transient error.
* RuntimeError if the number of responses doesn’t match the number of rows that were retried
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
