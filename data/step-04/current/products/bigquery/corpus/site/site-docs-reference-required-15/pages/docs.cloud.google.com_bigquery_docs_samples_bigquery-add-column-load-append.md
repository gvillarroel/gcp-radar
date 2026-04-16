---
title: "Add a column using a load job \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-load-append
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-load-append
  title: "Add a column using a load job \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Add a column using a load job
Stay organized with collections
Save and categorize content based on your preferences.
Add a new column to a BigQuery table while appending rows using a load job.
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
"os"
"cloud.google.com/go/bigquery"
)
// createTableAndWidenLoad demonstrates augmenting a table's schema to add a new column via a load job.
func createTableAndWidenLoad ( projectID , datasetID , tableID , filename string ) error {
// projectID := "my-project-id"
// datasetID := "mydataset"
// tableID := "mytable"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
sampleSchema := bigquery . Schema {
{ Name : "full_name" , Type : bigquery . StringFieldType },
}
meta := & bigquery . TableMetadata {
Schema : sampleSchema ,
}
tableRef := client . Dataset ( datasetID ). Table ( tableID )
if err := tableRef . Create ( ctx , meta ); err != nil {
return err
}
// Now, import data from a local file, but specify field additions are allowed.
// Because the data has a second column (age), the schema is amended as part of
// the load.
f , err := os . Open ( filename )
if err != nil {
return err
}
source := bigquery . NewReaderSource ( f )
source . AutoDetect = true // Allow BigQuery to determine schema.
source . SkipLeadingRows = 1 // CSV has a single header line.
loader := client . Dataset ( datasetID ). Table ( tableID ). LoaderFrom ( source )
loader . SchemaUpdateOptions = [] string { "ALLOW_FIELD_ADDITION" }
job , err := loader . Run ( ctx )
if err != nil {
return err
}
status , err := job . Wait ( ctx )
if err != nil {
return err
}
if err := status . Err (); err != nil {
return err
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
import com.google.cloud.bigquery. BigQueryException ;
import com.google.cloud.bigquery. BigQueryOptions ;
import com.google.cloud.bigquery. Field ;
import com.google.cloud.bigquery. FormatOptions ;
import com.google.cloud.bigquery. Job ;
import com.google.cloud.bigquery. JobId ;
import com.google.cloud.bigquery. JobInfo ;
import com.google.cloud.bigquery. JobInfo . SchemaUpdateOption ;
import com.google.cloud.bigquery. JobInfo . WriteDisposition ;
import com.google.cloud.bigquery. LegacySQLTypeName ;
import com.google.cloud.bigquery. LoadJobConfiguration ;
import com.google.cloud.bigquery. Schema ;
import com.google.cloud.bigquery. TableId ;
import com.google.common.collect.ImmutableList ;
import java.util.ArrayList ;
import java.util.List ;
import java.util.UUID ;
// Sample to append column in existing table.
public class AddColumnLoadAppend {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
String tableName = "MY_TABLE_NAME" ;
String sourceUri = "/path/to/file.csv" ;
// Add a new column to a BigQuery table while appending rows via a load job.
// 'REQUIRED' fields cannot be added to an existing schema, so the additional column must be
// 'NULLABLE'.
Schema schema =
Schema . of (
Field . newBuilder ( "name" , LegacySQLTypeName . STRING )
. setMode ( Field . Mode . REQUIRED )
. build ());
List<Field> fields = schema . getFields ();
// Adding below additional column during the load job
Field newField =
Field . newBuilder ( "post_abbr" , LegacySQLTypeName . STRING )
. setMode ( Field . Mode . NULLABLE )
. build ();
List<Field> newFields = new ArrayList <> ( fields );
newFields . add ( newField );
Schema newSchema = Schema . of ( newFields );
addColumnLoadAppend ( datasetName , tableName , sourceUri , newSchema );
}
public static void addColumnLoadAppend (
String datasetName , String tableName , String sourceUri , Schema newSchema ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
TableId tableId = TableId . of ( datasetName , tableName );
LoadJobConfiguration loadJobConfig =
LoadJobConfiguration . builder ( tableId , sourceUri )
. setFormatOptions ( FormatOptions . csv ())
. setWriteDisposition ( WriteDisposition . WRITE_APPEND )
. setSchema ( newSchema )
. setSchemaUpdateOptions ( ImmutableList . of ( SchemaUpdateOption . ALLOW_FIELD_ADDITION ))
. build ();
// Create a job ID so that we can safely retry.
JobId jobId = JobId . of ( UUID . randomUUID (). toString ());
Job loadJob = bigquery . create ( JobInfo . newBuilder ( loadJobConfig ). setJobId ( jobId ). build ());
// Load data from a GCS parquet file into the table
// Blocks until this load table job completes its execution, either failing or succeeding.
Job job = loadJob . waitFor ();
// Check for errors
if ( job . isDone () && job . getStatus (). getError () == null ) {
System . out . println ( "Column successfully added during load append job" );
} else {
System . out . println (
"BigQuery was unable to load into the table due to an error:"
+ job . getStatus (). getError ());
}
} catch ( BigQueryException | InterruptedException e ) {
System . out . println ( "Column not added during load append \n" + e . toString ());
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
// Import the Google Cloud client libraries
const { BigQuery } = require ( ' @google-cloud/bigquery ' );
// Instantiate client
const bigquery = new BigQuery ();
async function addColumnLoadAppend () {
// Adds a new column to a BigQuery table while appending rows via a load job.
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const fileName = '/path/to/file.csv';
// const datasetId = 'my_dataset';
// const tableId = 'my_table';
// In this example, the existing table contains only the 'Name', 'Age',
// & 'Weight' columns. 'REQUIRED' fields cannot be added to an existing
// schema, so the additional column must be 'NULLABLE'.
const schema = 'Name:STRING, Age:INTEGER, Weight:FLOAT, IsMagic:BOOLEAN' ;
// Retrieve destination table reference
const [ table ] = await bigquery . dataset ( datasetId ). table ( tableId ). get ();
const destinationTableRef = table . metadata . tableReference ;
// Set load job options
const options = {
schema : schema ,
schemaUpdateOptions : [ 'ALLOW_FIELD_ADDITION' ],
writeDisposition : 'WRITE_APPEND' ,
destinationTable : destinationTableRef ,
};
// Load data from a local file into the table
const [ job ] = await bigquery
. dataset ( datasetId )
. table ( tableId )
. load ( fileName , options );
console . log ( `Job ${ job . id } completed.` );
console . log ( 'New Schema:' );
console . log ( job . configuration . load . schema . fields );
// Check the job's status for errors
const errors = job . status . errors ;
if ( errors && errors . length > 0 ) {
throw errors ;
}
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
* Append a column using a load job.
*
* @param string $projectId The project Id of your Google Cloud Project.
* @param string $datasetId The BigQuery dataset ID.
* @param string $tableId The BigQuery table ID.
*/
function add_column_load_append(
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
// A new column 'Description' gets added after load job.
$schema = [
'fields' => [
['name' => 'name', 'type' => 'string', 'mode' => 'nullable'],
['name' => 'title', 'type' => 'string', 'mode' => 'nullable'],
['name' => 'description', 'type' => 'string', 'mode' => 'nullable']
]
];
$source = __DIR__ . '/../test/data/test_data_extra_column.csv';
// Set job configs
$loadConfig = $table->load(fopen($source, 'r'));
$loadConfig->destinationTable($table);
$loadConfig->schema($schema);
$loadConfig->schemaUpdateOptions(['ALLOW_FIELD_ADDITION']);
$loadConfig->sourceFormat('CSV');
$loadConfig->writeDisposition('WRITE_APPEND');
// Run the job with load config
$job = $bigQuery->runJob($loadConfig);
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
# from google.cloud import bigquery
# client = bigquery.Client()
# project = client.project
# dataset_ref = bigquery.DatasetReference(project, 'my_dataset')
# filepath = 'path/to/your_file.csv'
# Retrieves the destination table and checks the length of the schema
table_id = "my_table"
table_ref = dataset_ref . table ( table_id )
table = client . get_table ( table_ref )
print ( "Table {} contains {} columns." . format ( table_id , len ( table . schema )))
# Configures the load job to append the data to the destination table,
# allowing field addition
job_config = bigquery . LoadJobConfig ()
job_config . write_disposition = bigquery . WriteDisposition . WRITE_APPEND
job_config . schema_update_options = [
bigquery . SchemaUpdateOption . ALLOW_FIELD_ADDITION
]
# In this example, the existing table contains only the 'full_name' column.
# 'REQUIRED' fields cannot be added to an existing schema, so the
# additional column must be 'NULLABLE'.
job_config . schema = [
bigquery . SchemaField ( "full_name" , "STRING" , mode = "REQUIRED" ),
bigquery . SchemaField ( "age" , "INTEGER" , mode = "NULLABLE" ),
]
job_config . source_format = bigquery . SourceFormat . CSV
job_config . skip_leading_rows = 1
with open ( filepath , "rb" ) as source_file :
job = client . load_table_from_file (
source_file ,
table_ref ,
location = "US" , # Must match the destination dataset location.
job_config = job_config ,
) # API request
job . result () # Waits for table load to complete.
print (
"Loaded {} rows into {} : {} ." . format (
job . output_rows , dataset_id , table_ref . table_id
)
)
# Checks the updated length of the schema
table = client . get_table ( table )
print ( "Table {} now contains {} columns." . format ( table_id , len ( table . schema )))
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
