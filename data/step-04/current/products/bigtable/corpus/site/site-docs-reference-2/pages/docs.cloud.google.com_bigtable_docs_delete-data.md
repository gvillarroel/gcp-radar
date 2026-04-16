---
title: "Deletes \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/delete-data
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/delete-data
  title: "Deletes \_|\_ Bigtable \_|\_ Google Cloud Documentation"
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
Deletes
This document describes how to delete data stored in Bigtable
tables, discusses when you should use each approach, and provides examples.
Before you read this page, you should be familiar with the Bigtable
overview
and understand the concepts involved in schema
design .
For consistency, descriptions on this page refer to the API methods that are
used for each type of request. However, we strongly recommend that you always
use one of the Bigtable client
libraries
to access the Bigtable APIs instead of using REST or RPC.
Examples on this page use
sample data
similar to the data that you might store in Bigtable.
To learn the number of times that you can use the operations described on this
page per day, see Quotas and
limits .
How Bigtable deletes data
When you send a delete request, cells are marked for deletion and cannot be
read. The data is removed up to a week later during
compaction , a background process that
continuously optimizes the table. Deletion metadata can cause your data to take
up slightly more space (several kb per row) for a few days after you send a
delete request, until the next compaction occurs.
You can always send a delete request, even if your cluster has exceeded the
storage limit and reads and writes are blocked.
Delete a range of rows
If you want to delete a large amount of data stored in contiguous rows, use
dropRowRange . This operation deletes all rows for a range of rows identified
by a starting and ending row or a row key prefix.
The row key values that you provide when you delete a range of rows are
treated as service data. For information about how service data is handled, see
the Google Cloud Privacy Notice .
After a successful deletion is complete and you receive a response, you can
safely write data to the same row range.
The dropRowRange operation has the following restrictions:
You can't drop a range of rows from an authorized view.
You can't call the dropRowRange method asynchronously. If you send a
dropRowRange request to a table while another request is in progress,
Bigtable returns an UNAVAILABLE error with the message A
DropRowRange operation is already ongoing . To resolve the error, send the
request again.
With instances that use replication, be aware that Bigtable
might take a long time to complete the operation due to increased
replication latency and CPU usage. To delete data from an instance that uses
replication, use the Data API to read and then delete your
data .
The following code samples show how to drop a range of rows that start with
the row key prefix phone#5c10102 :
Java
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud.bigtable.admin.v2. BigtableTableAdminClient ;
import java.io.IOException ;
public class DropRowRangeExample {
public void dropRowRange ( String projectId , String instanceId , String tableId ) throws IOException {
try ( BigtableTableAdminClient tableAdminClient =
BigtableTableAdminClient . create ( projectId , instanceId )) {
tableAdminClient . dropRowRange ( tableId , "phone#4c410523" );
}
}
}
Python
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
def drop_row_range ( project_id , instance_id , table_id ):
from google.cloud.bigtable import Client
client = Client ( project = project_id , admin = True )
instance = client . instance ( instance_id )
table = instance . table ( table_id )
row_key_prefix = "phone#4c410523"
table . drop_by_prefix ( row_key_prefix , timeout = 200 )
Node.js
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
await table . deleteRows ( 'phone#5c10102' );
await printRows ();
Note: You can delete all rows in the table without specifying the row key prefix
when you use the cbt
deleteallrows command. If the
command times out, you can rerun the command until the operation completes.
Delete data using Data API methods
If you need to delete small amounts of non-contiguous data, deleting data using
a method that calls the Cloud Bigtable API (Data API) is often the best
choice. Use these methods if you are deleting MB, not GB, of data in a request.
Using the Data API is the only way to delete data from a column (not column
family).
Data API methods call MutateRows with one of three mutation types:
DeleteFromColumn
DeleteFromFamily
DeleteFromRow
A delete request using the Data API is atomic: either the request succeeds and
all data is deleted, or the request fails and no data is removed.
In most cases, avoid using CheckAndMutate methods to delete data. In the rare
event that you require strong consistency, you might want to use this
approach, but be aware that it is resource-intensive and performance might be
affected.
To use MutateRows to delete data, you send a readRows request with a
filter to determine what you want to delete, and then you send the deletion
request. For a list of the filters that are available, see
Filters .
Samples in this section assume that you have already determined what data to
delete.
Delete from a column
The following code samples demonstrate how to delete all the cells from a column
in a row:
Java
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud.bigtable.data.v2. BigtableDataClient ;
import com.google.cloud.bigtable.data.v2.models. Mutation ;
import com.google.cloud.bigtable.data.v2.models. RowMutation ;
import com.google.cloud.bigtable.data.v2.models. TableId ;
import java.io.IOException ;
public class DeleteFromColumnExample {
public void deleteFromColumnCells ( String projectId , String instanceId , String tableId )
throws IOException {
try ( BigtableDataClient dataClient = BigtableDataClient . create ( projectId , instanceId )) {
Mutation mutation = Mutation . create (). deleteCells ( "cell_plan" , "data_plan_01gb" );
dataClient . mutateRow (
RowMutation . create ( TableId . of ( tableId ), "phone#4c410523#20190501" , mutation ));
}
}
}
Python
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
def delete_from_column ( project_id , instance_id , table_id ):
from google.cloud.bigtable import Client
client = Client ( project = project_id , admin = True )
instance = client . instance ( instance_id )
table = instance . table ( table_id )
row = table . row ( "phone#4c410523#20190501" )
row . delete_cell ( column_family_id = "cell_plan" , column = "data_plan_01gb" )
row . commit ()
Python asyncio
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
async def delete_from_column ( project_id , instance_id , table_id ):
from google.cloud.bigtable.data import BigtableDataClientAsync
from google.cloud.bigtable.data import DeleteRangeFromColumn
client = BigtableDataClientAsync ( project = project_id )
table = client . get_table ( instance_id , table_id )
await table . mutate_row (
"phone#4c410523#20190501" ,
DeleteRangeFromColumn ( family = "cell_plan" , qualifier = b "data_plan_01gb" ),
)
await table . close ()
await client . close ()
Node.js
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
await table . mutate ({
key : 'phone#4c410523#20190501' ,
method : 'delete' ,
data : {
column : 'cell_plan:data_plan_05gb' ,
},
});
await printRows ();
Delete from a column family
The following code samples demonstrate how to delete cells from a column family
in a row:
Java
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud.bigtable.data.v2. BigtableDataClient ;
import com.google.cloud.bigtable.data.v2.models. RowMutation ;
import com.google.cloud.bigtable.data.v2.models. TableId ;
import java.io.IOException ;
public class DeleteFromColumnFamilyExample {
public void deleteFromColumnFamily ( String projectId , String instanceId , String tableId )
throws IOException {
try ( BigtableDataClient dataClient = BigtableDataClient . create ( projectId , instanceId )) {
dataClient . mutateRow (
RowMutation . create ( TableId . of ( tableId ), "phone#5c10102#20190501" )
. deleteFamily ( "stats_summary" ));
}
}
}
Python
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
def delete_from_column_family ( project_id , instance_id , table_id ):
from google.cloud.bigtable import Client
client = Client ( project = project_id , admin = True )
instance = client . instance ( instance_id )
table = instance . table ( table_id )
row = table . row ( "phone#4c410523#20190501" )
row . delete_cells ( column_family_id = "cell_plan" , columns = row . ALL_COLUMNS )
row . commit ()
Python asyncio
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
async def delete_from_column_family ( project_id , instance_id , table_id ):
from google.cloud.bigtable.data import BigtableDataClientAsync
from google.cloud.bigtable.data import DeleteAllFromFamily
client = BigtableDataClientAsync ( project = project_id )
table = client . get_table ( instance_id , table_id )
await table . mutate_row ( "phone#4c410523#20190501" , DeleteAllFromFamily ( "cell_plan" ))
await table . close ()
await client . close ()
Node.js
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
await table . mutate ({
key : 'phone#4c410523#20190501' ,
method : 'delete' ,
data : {
column : 'cell_plan' ,
},
});
await printRows ();
Delete from a row
The following code snippets demonstrate how to delete all the cells from a row:
Java
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud.bigtable.data.v2. BigtableDataClient ;
import com.google.cloud.bigtable.data.v2.models. Mutation ;
import com.google.cloud.bigtable.data.v2.models. RowMutation ;
import com.google.cloud.bigtable.data.v2.models. TableId ;
import java.io.IOException ;
public class DeleteFromRowExample {
public void deleteFromRow ( String projectId , String instanceId , String tableId )
throws IOException {
try ( BigtableDataClient dataClient = BigtableDataClient . create ( projectId , instanceId )) {
Mutation mutation = Mutation . create (). deleteRow ();
dataClient . mutateRow (
RowMutation . create ( TableId . of ( tableId ), "phone#4c410523#20190501" , mutation ));
}
}
}
Python
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
def delete_from_row ( project_id , instance_id , table_id ):
from google.cloud.bigtable import Client
client = Client ( project = project_id , admin = True )
instance = client . instance ( instance_id )
table = instance . table ( table_id )
row = table . row ( "phone#4c410523#20190501" )
row . delete ()
row . commit ()
Python asyncio
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
async def delete_from_row ( project_id , instance_id , table_id ):
from google.cloud.bigtable.data import BigtableDataClientAsync
from google.cloud.bigtable.data import DeleteAllFromRow
client = BigtableDataClientAsync ( project = project_id )
table = client . get_table ( instance_id , table_id )
await table . mutate_row ( "phone#4c410523#20190501" , DeleteAllFromRow ())
await table . close ()
await client . close ()
Node.js
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
const row = table . row ( 'phone#4c410523#20190501' );
await row . delete ();
await printRows ();
Delete by streaming and batching
Streaming and batching your delete requests is often the best way to delete
large amounts of data. This strategy can be useful when you have finer-grained
data retention requirements than
garbage collection policies allow.
If your application is written in Java, you can enable batch write flow
control when you send batch deletes to Bigtable. For more
information, see Batch write flow control
and Enable batch write flow control .
The following code samples start a stream of data (reading
rows), batch them, and then go through the batch and delete all the
cells in column data_plan_01gb1 in the cell_plan column family:
Go
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
package deletes
import (
"context"
"fmt"
"io"
"cloud.google.com/go/bigtable"
)
// streamingAndBatching starts a stream of data (reading rows), batches them, and then goes through the batch and deletes all the cells in column
func streamingAndBatching ( w io . Writer , projectID , instanceID string , tableName string ) error {
// projectID := "my-project-id"
// instanceID := "my-instance-id"
// tableName := "mobile-time-series"
ctx := context . Background ()
client , err := bigtable . NewClient ( ctx , projectID , instanceID )
if err != nil {
return fmt . Errorf ( "bigtable.NewClient: %w" , err )
}
defer client . Close ()
tbl := client . Open ( tableName )
// Slices to hold the row keys and the corresponding mutations.
var rowKeys [] string
var mutations [] * bigtable . Mutation
// Read all rows from the table.
err = tbl . ReadRows ( ctx , bigtable . InfiniteRange ( "" ), func ( row bigtable . Row ) bool {
// For each row, create a mutation to delete the specified cell.
mut := bigtable . NewMutation ()
mut . DeleteCellsInColumn ( "cell_plan" , "data_plan_01gb" )
// Append the row key and mutation to the slices.
rowKeys = append ( rowKeys , row . Key ())
mutations = append ( mutations , mut )
// Continue processing rows.
return true
})
if err != nil {
return fmt . Errorf ( "tbl.ReadRows: %w" , err )
}
if len ( mutations ) == 0 {
return nil
}
// If there are mutations to apply, apply them in a single bulk request.
// ApplyBulk returns a slice of errors, one for each mutation.
var errs [] error
if errs , err = tbl . ApplyBulk ( ctx , rowKeys , mutations ); err != nil {
return fmt . Errorf ( "tbl.ApplyBulk: %w" , err )
}
if errs != nil {
// Log any individual errors that occurred during the bulk operation.
var errorCount int
for _ , individualErr := range errs {
if individualErr != nil {
fmt . Fprintf ( w , "Error applying mutation: %v\n" , individualErr )
errorCount ++
}
}
if errorCount > 0 {
return fmt . Errorf ( "encountered %d error(s) out of %d mutations" , errorCount , len ( errs ))
}
}
fmt . Fprintf ( w , "Successfully deleted cells from all rows" )
return nil
}
Java
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.api.gax. batching . Batcher ;
import com.google.api.gax.rpc. ServerStream ;
import com.google.cloud.bigtable.data.v2. BigtableDataClient ;
import com.google.cloud.bigtable.data.v2.models. Query ;
import com.google.cloud.bigtable.data.v2.models. Row ;
import com.google.cloud.bigtable.data.v2.models. RowMutationEntry ;
import com.google.cloud.bigtable.data.v2.models. TableId ;
import java.io.IOException ;
public class BatchDeleteExample {
public void batchDelete ( String projectId , String instanceId , String tableId )
throws InterruptedException , IOException {
try ( BigtableDataClient dataClient = BigtableDataClient . create ( projectId , instanceId )) {
try ( Batcher<RowMutationEntry , Void > batcher =
dataClient . newBulkMutationBatcher ( TableId . of ( tableId ))) {
ServerStream<Row> rows = dataClient . readRows ( Query . create ( TableId . of ( tableId )));
for ( Row row : rows ) {
batcher . add (
RowMutationEntry . create ( row . getKey ()). deleteCells ( "cell_plan" , "data_plan_05gb" ));
}
// Blocks until mutations are applied on all submitted row entries.
batcher . flush ();
}
}
}
}
Python
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
def streaming_and_batching ( project_id , instance_id , table_id ):
from google.cloud.bigtable import Client
client = Client ( project = project_id , admin = True )
instance = client . instance ( instance_id )
table = instance . table ( table_id )
batcher = table . mutations_batcher ( flush_count = 2 )
rows = table . read_rows ()
for row in rows :
row = table . row ( row . row_key )
row . delete_cell ( column_family_id = "cell_plan" , column = "data_plan_01gb" )
batcher . mutate_rows ( rows )
Python asyncio
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
async def streaming_and_batching ( project_id , instance_id , table_id ):
from google.cloud.bigtable.data import BigtableDataClientAsync
from google.cloud.bigtable.data import DeleteRangeFromColumn
from google.cloud.bigtable.data import RowMutationEntry
from google.cloud.bigtable.data import ReadRowsQuery
client = BigtableDataClientAsync ( project = project_id )
table = client . get_table ( instance_id , table_id )
async with table . mutations_batcher () as batcher :
async for row in await table . read_rows_stream ( ReadRowsQuery ( limit = 10 )):
await batcher . append (
RowMutationEntry (
row . row_key ,
DeleteRangeFromColumn (
family = "cell_plan" , qualifier = b "data_plan_01gb"
),
)
)
await table . close ()
await client . close ()
Node.js
To learn how to install and use the client library for Bigtable, see
Bigtable client libraries .
To authenticate to Bigtable, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
const rows = ( await table . getRows ({ limit : 2 }))[ 0 ];
const entries = rows . map ( row = > {
return {
key : row . id ,
method : 'delete' ,
data : {
column : 'cell_plan:data_plan_05gb' ,
},
};
});
await table . mutate ( entries );
await printRows ();
Delete data in an authorized view
You can delete table data by sending a delete request to an
authorized view. You must use one of the following:
gcloud CLI
Bigtable client for Java
When you delete data from an authorized view, you supply the
authorized view ID in addition to the table ID.
The data that you can delete from an authorized view is limited by the
authorized view definition. You can only delete data that is included in
the authorized view. If you attempt to delete data that is outside of
the authorized view definition or is subject to the following rules, an
error of PERMISSION_DENIED is returned:
Deleting a range of rows from an authorized view using DropRowRange
in the admin API is not supported.
Deleting from a row is not supported.
Deleting from a column is supported as long as it's for rows that are in the
authorized view.
Deleting from a column family is only permitted if the specified column family
is configured to allow all column qualifier prefixes ( qualifier_prefixes="" )
in the authorized view.
For example, if you attempt to delete from a specified row, and that row
contains columns in the underlying table that are not in your
authorized view, then the request fails.
What's next
Review the list of unsupported HBase deletes.
Monitor your Bigtable
resources.
Implement counters by using aggregate cells.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
