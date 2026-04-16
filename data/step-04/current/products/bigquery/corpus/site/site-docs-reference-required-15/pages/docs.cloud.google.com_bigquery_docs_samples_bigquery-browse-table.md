---
title: "Preview table data \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-browse-table
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-browse-table
  title: "Preview table data \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Samples
Preview table data
Stay organized with collections
Save and categorize content based on your preferences.
Retrieve selected row data from a table.
Explore further
For detailed documentation that includes this code sample, see the following:
Managing table data
Read data with BigQuery API using pagination
Code sample
C#
Before trying this sample, follow the C# setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery C# API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
using Google.Api.Gax ;
using Google.Apis.Bigquery.v2.Data ;
using Google.Cloud.BigQuery.V2 ;
using System ;
using System.Linq ;
public class BigQueryBrowseTable
{
public void BrowseTable (
string projectId = "your-project-id"
)
{
BigQueryClient client = BigQueryClient . Create ( projectId );
TableReference tableReference = new TableReference ()
{
TableId = "shakespeare" ,
DatasetId = "samples" ,
ProjectId = "bigquery-public-data"
};
// Load all rows from a table
PagedEnumerable<TableDataList , BigQueryRow > result = client . ListRows (
tableReference : tableReference ,
schema : null
);
// Print the first 10 rows
foreach ( BigQueryRow row in result . Take ( 10 ))
{
Console . WriteLine ( $"{row[" corpus "]}: {row[" word_count "]}" );
}
}
}
Go
Before trying this sample, follow the Go setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Go API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import (
"context"
"fmt"
"io"
"cloud.google.com/go/bigquery"
"google.golang.org/api/iterator"
)
// browseTable demonstrates reading data from a BigQuery table directly without the use of a query.
// For large tables, we also recommend the BigQuery Storage API.
func browseTable ( w io . Writer , projectID , datasetID , tableID string ) error {
// projectID := "my-project-id"
// datasetID := "mydataset"
// tableID := "mytable"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
table := client . Dataset ( datasetID ). Table ( tableID )
it := table . Read ( ctx )
for {
var row [] bigquery . Value
err := it . Next ( & row )
if err == iterator . Done {
break
}
if err != nil {
return err
}
fmt . Fprintln ( w , row )
}
return nil
}
Java
Before trying this sample, follow the Java setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Java API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud.bigquery. BigQuery ;
import com.google.cloud.bigquery. BigQuery . TableDataListOption ;
import com.google.cloud.bigquery. BigQueryException ;
import com.google.cloud.bigquery. BigQueryOptions ;
import com.google.cloud.bigquery. TableId ;
import com.google.cloud.bigquery. TableResult ;
// Sample to directly browse a table with optional paging
public class BrowseTable {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String table = "MY_TABLE_NAME" ;
String dataset = "MY_DATASET_NAME" ;
browseTable ( dataset , table );
}
public static void browseTable ( String dataset , String table ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
// Identify the table itself
TableId tableId = TableId . of ( dataset , table );
// Page over 100 records. If you don't need pagination, remove the pageSize parameter.
TableResult result = bigquery . listTableData ( tableId , TableDataListOption . pageSize ( 100 ));
// Print the records
result
. iterateAll ()
. forEach (
row - > {
row . forEach ( fieldValue - > System . out . print ( fieldValue . toString () + ", " ));
System . out . println ();
});
System . out . println ( "Query ran successfully" );
} catch ( BigQueryException e ) {
System . out . println ( "Query failed to run \n" + e . toString ());
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Node.js API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
// Import the Google Cloud client library using default credentials
const { BigQuery } = require ( ' @google-cloud/bigquery ' );
const bigquery = new BigQuery ();
async function browseTable () {
// Retrieve a table's rows using manual pagination.
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const datasetId = 'my_dataset'; // Existing dataset
// const tableId = 'my_table'; // Table to create
const query = `SELECT name, SUM(number) as total_people
FROM \`bigquery-public-data.usa_names.usa_1910_2013\`
GROUP BY name
ORDER BY total_people
DESC LIMIT 100` ;
// Create table reference.
const dataset = bigquery . dataset ( datasetId );
const destinationTable = dataset . table ( tableId );
// For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#jobconfigurationquery
const queryOptions = {
query : query ,
destination : destinationTable ,
};
// Run the query as a job
const [ job ] = await bigquery . createQueryJob ( queryOptions );
// For all options, see https://cloud.google.com/bigquery/docs/reference/v2/jobs/getQueryResults
const queryResultsOptions = {
// Retrieve zero resulting rows.
maxResults : 0 ,
};
// Wait for the job to finish.
await job . getQueryResults ( queryResultsOptions );
function manualPaginationCallback ( err , rows , nextQuery ) {
rows . forEach ( row = > {
console . log ( `name: ${ row . name } , ${ row . total_people } total people` );
});
if ( nextQuery ) {
// More results exist.
destinationTable . getRows ( nextQuery , manualPaginationCallback );
}
}
// For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tabledata/list
const getRowsOptions = {
autoPaginate : false ,
maxResults : 20 ,
};
// Retrieve all rows.
destinationTable . getRows ( getRowsOptions , manualPaginationCallback );
}
browseTable ();
PHP
Before trying this sample, follow the PHP setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery PHP API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
use Google\Cloud\BigQuery\BigQueryClient;
/**
* Browses the given table for data
*
* @param string $projectId The project Id of your Google Cloud Project.
* @param string $datasetId The BigQuery dataset ID.
* @param string $tableId The BigQuery table ID.
* @param int $startIndex Zero-based index of the starting row.
*/
function browse_table(
string $projectId,
string $datasetId,
string $tableId,
int $startIndex = 0
): void {
// Query options
$maxResults = 10;
$options = [
'maxResults' => $maxResults,
'startIndex' => $startIndex
];
$bigQuery = new BigQueryClient([
'projectId' => $projectId,
]);
$dataset = $bigQuery->dataset($datasetId);
$table = $dataset->table($tableId);
$numRows = 0;
foreach ($table->rows($options) as $row) {
print('---');
foreach ($row as $column => $value) {
printf('%s: %s' . PHP_EOL, $column, $value);
}
$numRows++;
}
}
Python
Before trying this sample, follow the Python setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Python API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
from google.cloud import bigquery
# Construct a BigQuery client object.
client = bigquery . Client ()
# TODO(developer): Set table_id to the ID of the table to browse data rows.
# table_id = "your-project.your_dataset.your_table_name"
# Download all rows from a table.
rows_iter = client . list_rows ( table_id ) # Make an API request.
# Iterate over rows to make the API requests to fetch row data.
rows = list ( rows_iter )
print ( "Downloaded {} rows from table {} " . format ( len ( rows ), table_id ))
# Download at most 10 rows.
rows_iter = client . list_rows ( table_id , max_results = 10 )
rows = list ( rows_iter )
print ( "Downloaded {} rows from table {} " . format ( len ( rows ), table_id ))
# Specify selected fields to limit the results to certain columns.
table = client . get_table ( table_id ) # Make an API request.
fields = table . schema [: 2 ] # First two columns.
rows_iter = client . list_rows ( table_id , selected_fields = fields , max_results = 10 )
print ( "Selected {} columns from table {} ." . format ( len ( rows_iter . schema ), table_id ))
rows = list ( rows_iter )
print ( "Downloaded {} rows from table {} " . format ( len ( rows ), table_id ))
# Print row data in tabular format.
rows_iter = client . list_rows ( table_id , max_results = 10 )
format_string = " {!s:<16} " * len ( rows_iter . schema )
field_names = [ field . name for field in rows_iter . schema ]
print ( format_string . format ( * field_names )) # Prints column headers.
for row in rows_iter :
print ( format_string . format ( * row )) # Prints row data.
Ruby
Before trying this sample, follow the Ruby setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Ruby API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
require "google/cloud/bigquery"
def browse_table
bigquery = Google :: Cloud :: Bigquery . new project_id : "bigquery-public-data"
dataset = bigquery . dataset "samples"
table = dataset . table "shakespeare"
# Load all rows from a table
rows = table . data
# Load the first 10 rows
rows = table . data max : 10
# Print row data
rows . each { | row | puts row }
end
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
