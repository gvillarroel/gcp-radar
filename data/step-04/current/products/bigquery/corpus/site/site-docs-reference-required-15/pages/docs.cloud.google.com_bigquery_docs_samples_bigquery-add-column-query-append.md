---
title: "Add a column using a query job \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append
  title: "Add a column using a query job \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Add a column using a query job
Stay organized with collections
Save and categorize content based on your preferences.
Add a new column to a BigQuery table while appending rows using a query job with an explicit destination table.
Explore further
For detailed documentation that includes this code sample, see the following:
Modifying table schemas
Code sample
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
"cloud.google.com/go/bigquery"
)
// createTableAndWidenQuery demonstrates how the schema of a table can be modified to add columns by appending
// query results that include the new columns.
func createTableAndWidenQuery ( projectID , datasetID , tableID string ) error {
// projectID := "my-project-id"
// datasetID := "mydataset"
// tableID := "mytable"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
// First, we create a sample table.
sampleSchema := bigquery . Schema {
{ Name : "full_name" , Type : bigquery . StringFieldType , Required : true },
{ Name : "age" , Type : bigquery . IntegerFieldType , Required : true },
}
original := & bigquery . TableMetadata {
Schema : sampleSchema ,
}
tableRef := client . Dataset ( datasetID ). Table ( tableID )
if err := tableRef . Create ( ctx , original ); err != nil {
return err
}
// Our table has two columns. We'll introduce a new favorite_color column via
// a subsequent query that appends to the table.
q := client . Query ( "SELECT \"Timmy\" as full_name, 85 as age, \"Blue\" as favorite_color" )
q . SchemaUpdateOptions = [] string { "ALLOW_FIELD_ADDITION" }
q . QueryConfig . Dst = client . Dataset ( datasetID ). Table ( tableID )
q . WriteDisposition = bigquery . WriteAppend
q . Location = "US"
job , err := q . Run ( ctx )
if err != nil {
return err
}
_ , err = job . Wait ( ctx )
if err != nil {
return err
}
return nil
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
// Import the Google Cloud client libraries
const { BigQuery } = require ( ' @google-cloud/bigquery ' );
// Instantiate client
const bigquery = new BigQuery ();
async function addColumnQueryAppend () {
// Adds a new column to a BigQuery table while appending rows via a query job.
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const datasetId = 'my_dataset';
// const tableId = 'my_table';
// Retrieve destination table reference
const [ table ] = await bigquery . dataset ( datasetId ). table ( tableId ). get ();
const destinationTableRef = table . metadata . tableReference ;
// In this example, the existing table contains only the 'name' column.
// 'REQUIRED' fields cannot be added to an existing schema,
// so the additional column must be 'NULLABLE'.
const query = `SELECT name, year
FROM \`bigquery-public-data.usa_names.usa_1910_2013\`
WHERE state = 'TX'
LIMIT 10` ;
// Set load job options
const options = {
query : query ,
schemaUpdateOptions : [ 'ALLOW_FIELD_ADDITION' ],
writeDisposition : 'WRITE_APPEND' ,
destinationTable : destinationTableRef ,
// Location must match that of the dataset(s) referenced in the query.
location : 'US' ,
};
const [ job ] = await bigquery . createQueryJob ( options );
console . log ( `Job ${ job . id } started.` );
// Wait for the query to finish
const [ rows ] = await job . getQueryResults ();
console . log ( `Job ${ job . id } completed.` );
// Print the results
console . log ( 'Rows:' );
rows . forEach ( row = > console . log ( row ));
}
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
* Append a column using a query job.
*
* @param string $projectId The project Id of your Google Cloud Project.
* @param string $datasetId The BigQuery dataset ID.
* @param string $tableId The BigQuery table ID.
*/
function add_column_query_append(
string $projectId,
string $datasetId,
string $tableId
): void {
$bigQuery = new BigQueryClient([
'projectId' => $projectId,
]);
$dataset = $bigQuery->dataset($datasetId);
$table = $dataset->table($tableId);
// In this example, the existing table contains only the 'Name' and 'Title'.
// A new column 'Description' gets added after the query job.
// Define query
$query = sprintf('SELECT "John" as name, "Unknown" as title, "Dummy person" as description;');
// Set job configs
$queryJobConfig = $bigQuery->query($query);
$queryJobConfig->destinationTable($table);
$queryJobConfig->schemaUpdateOptions(['ALLOW_FIELD_ADDITION']);
$queryJobConfig->writeDisposition('WRITE_APPEND');
// Run query with query job configuration
$bigQuery->runQuery($queryJobConfig);
// Print all the columns
$columns = $table->info()['schema']['fields'];
printf('The columns in the table are ');
foreach ($columns as $column) {
printf('%s ', $column['name']);
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
# TODO(developer): Set table_id to the ID of the destination table.
# table_id = "your-project.your_dataset.your_table_name"
# Retrieves the destination table and checks the length of the schema.
table = client . get_table ( table_id ) # Make an API request.
print ( "Table {} contains {} columns" . format ( table_id , len ( table . schema )))
# Configures the query to append the results to a destination table,
# allowing field addition.
job_config = bigquery . QueryJobConfig (
destination = table_id ,
schema_update_options = [ bigquery . SchemaUpdateOption . ALLOW_FIELD_ADDITION ],
write_disposition = bigquery . WriteDisposition . WRITE_APPEND ,
)
# Start the query, passing in the extra configuration.
client . query_and_wait (
# In this example, the existing table contains only the 'full_name' and
# 'age' columns, while the results of this query will contain an
# additional 'favorite_color' column.
'SELECT "Timmy" as full_name, 85 as age, "Blue" as favorite_color;' ,
job_config = job_config ,
) # Make an API request and wait for job to complete.
# Checks the updated length of the schema.
table = client . get_table ( table_id ) # Make an API request.
print ( "Table {} now contains {} columns" . format ( table_id , len ( table . schema )))
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
