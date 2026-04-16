---
title: "Add an empty column \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-empty-column
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-empty-column
  title: "Add an empty column \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Add an empty column
Stay organized with collections
Save and categorize content based on your preferences.
Manually add an empty column.
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
// updateTableAddColumn demonstrates modifying the schema of a table to append an additional column.
func updateTableAddColumn ( projectID , datasetID , tableID string ) error {
// projectID := "my-project-id"
// datasetID := "mydataset"
// tableID := "mytable"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
tableRef := client . Dataset ( datasetID ). Table ( tableID )
meta , err := tableRef . Metadata ( ctx )
if err != nil {
return err
}
newSchema := append ( meta . Schema ,
& bigquery . FieldSchema { Name : "phone" , Type : bigquery . StringFieldType },
)
update := bigquery . TableMetadataToUpdate {
Schema : newSchema ,
}
if _ , err := tableRef . Update ( ctx , update , meta . ETag ); err != nil {
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
import com.google.cloud.bigquery. FieldList ;
import com.google.cloud.bigquery. LegacySQLTypeName ;
import com.google.cloud.bigquery. Schema ;
import com.google.cloud.bigquery. StandardTableDefinition ;
import com.google.cloud.bigquery. Table ;
import java.util.ArrayList ;
import java.util.List ;
public class AddEmptyColumn {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
String tableId = "MY_TABLE_NAME" ;
String newColumnName = "NEW_COLUMN_NAME" ;
addEmptyColumn ( newColumnName , datasetName , tableId );
}
public static void addEmptyColumn ( String newColumnName , String datasetName , String tableId ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
Table table = bigquery . getTable ( datasetName , tableId );
Schema schema = table . getDefinition (). getSchema ();
FieldList fields = schema . getFields ();
// Create the new field/column
Field newField = Field . of ( newColumnName , LegacySQLTypeName . STRING );
// Create a new schema adding the current fields, plus the new one
List<Field> fieldList = new ArrayList<Field> ();
fields . forEach ( fieldList :: add );
fieldList . add ( newField );
Schema newSchema = Schema . of ( fieldList );
// Update the table with the new schema
Table updatedTable =
table . toBuilder (). setDefinition ( StandardTableDefinition . of ( newSchema )). build ();
update dTable . update ();
System . out . println ( "Empty column successfully added to table" );
} catch ( BigQueryException e ) {
System . out . println ( "Empty column was not added. \n" + e . toString ());
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
// Import the Google Cloud client library and create a client
const { BigQuery } = require ( ' @google-cloud/bigquery ' );
const bigquery = new BigQuery ();
async function addEmptyColumn () {
// Adds an empty column to the schema.
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const datasetId = 'my_dataset';
// const tableId = 'my_table';
const column = { name : 'size' , type : 'STRING' };
// Retrieve current table metadata
const table = bigquery . dataset ( datasetId ). table ( tableId );
const [ metadata ] = await table . getMetadata ();
// Update table schema
const schema = metadata . schema ;
const new_schema = schema ;
new_schema . fields . push ( column );
metadata . schema = new_schema ;
const [ result ] = await table . setMetadata ( metadata );
console . log ( result . schema . fields );
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
# TODO(developer): Set table_id to the ID of the table
# to add an empty column.
# table_id = "your-project.your_dataset.your_table_name"
table = client . get_table ( table_id ) # Make an API request.
original_schema = table . schema
new_schema = original_schema [:] # Creates a copy of the schema.
new_schema . append ( bigquery . SchemaField ( "phone" , "STRING" ))
table . schema = new_schema
table = client . update_table ( table , [ "schema" ]) # Make an API request.
if len ( table . schema ) == len ( original_schema ) + 1 == len ( new_schema ):
print ( "A new column has been added." )
else :
print ( "The column has not been added." )
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
