---
title: "Create materialized view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view
  title: "Create materialized view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Create materialized view
Stay organized with collections
Save and categorize content based on your preferences.
Create a materialized view.
Explore further
For detailed documentation that includes this code sample, see the following:
Create materialized views
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
// createMaterializedView demonstrates generated a materialized view based on an existing
// base table.
func createMaterializedView ( projectID , datasetID , baseTableID , viewID string ) error {
// projectID := "my-project-id"
// datasetID := "mydatasetid"
// baseTableID := "mytableid"
// viewID := "myviewid"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
// Get an appropriately escaped table identifier suitable for use in a standard SQL query.
tableStr , err := client . Dataset ( datasetID ). Table ( baseTableID ). Identifier ( bigquery . StandardSQLID )
if err != nil {
return fmt . Errorf ( "couldn't construct identifier: %w" , err )
}
metaData := & bigquery . TableMetadata {
MaterializedView : & bigquery . MaterializedViewDefinition {
Query : fmt . Sprintf ( `SELECT MAX(TimestampField) AS TimestampField, StringField,
MAX(BooleanField) AS BooleanField FROM %s GROUP BY StringField` , tableStr ),
}}
viewRef := client . Dataset ( datasetID ). Table ( viewID )
if err := viewRef . Create ( ctx , metaData ); err != nil {
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
import com.google.cloud.bigquery. MaterializedViewDefinition ;
import com.google.cloud.bigquery. TableId ;
import com.google.cloud.bigquery. TableInfo ;
// Sample to create materialized view
public class CreateMaterializedView {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
String tableName = "MY_TABLE_NAME" ;
String materializedViewName = "MY_MATERIALIZED_VIEW_NAME" ;
String query =
String . format (
"SELECT MAX(TimestampField) AS TimestampField, StringField, "
+ "MAX(BooleanField) AS BooleanField "
+ "FROM %s.%s GROUP BY StringField" ,
datasetName , tableName );
createMaterializedView ( datasetName , materializedViewName , query );
}
public static void createMaterializedView (
String datasetName , String materializedViewName , String query ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
TableId tableId = TableId . of ( datasetName , materializedViewName );
MaterializedViewDefinition materializedViewDefinition =
MaterializedViewDefinition . newBuilder ( query ). build ();
bigquery . create ( TableInfo . of ( tableId , materializedViewDefinition ));
System . out . println ( "Materialized view created successfully" );
} catch ( BigQueryException e ) {
System . out . println ( "Materialized view was not created. \n" + e . toString ());
}
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
bigquery_client = bigquery . Client ()
view_id = "my-project.my_dataset.my_materialized_view"
base_table_id = "my-project.my_dataset.my_base_table"
view = bigquery . Table ( view_id )
view . mview_query = f """
SELECT product_id, SUM(clicks) AS sum_clicks
FROM ` { base_table_id } `
GROUP BY 1
"""
# Make an API request to create the materialized view.
view = bigquery_client . create_table ( view )
print ( f "Created { view . table_type } : { str ( view . reference ) } " )
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
For more information, see the
Terraform provider reference documentation .
resource "google_bigquery_dataset" "default" {
dataset_id = "mydataset"
default_partition_expiration_ms = 2592000000 # 30 days
default_table_expiration_ms = 31536000000 # 365 days
description = "dataset description"
location = "US"
max_time_travel_hours = 96 # 4 days
labels = {
billing_group = "accounting" ,
pii = "sensitive"
}
}
resource "google_bigquery_table" "default" {
dataset_id = google_bigquery_dataset.default.dataset_id
table_id = "my_materialized_view"
materialized_view {
query = "SELECT ID, description, date_created FROM `myproject.orders.items`"
enable_refresh = "true"
refresh_interval_ms = 172800000 # 2 days
allow_non_incremental_definition = "false"
}
}
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
