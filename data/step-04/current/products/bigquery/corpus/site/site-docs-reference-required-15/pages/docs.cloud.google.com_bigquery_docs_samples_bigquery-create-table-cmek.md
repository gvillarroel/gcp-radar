---
title: "Create a table \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-cmek
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-cmek
  title: "Create a table \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Create a table
Stay organized with collections
Save and categorize content based on your preferences.
Create a table with customer-managed encryption keys.
Explore further
For detailed documentation that includes this code sample, see the following:
Create and use tables
Customer-managed Cloud KMS keys
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
// createTableWithCMEK demonstrates creating a table protected with a customer managed encryption key.
func createTableWithCMEK ( projectID , datasetID , tableID string ) error {
// projectID := "my-project-id"
// datasetID := "mydatasetid"
// tableID := "mytableid"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
tableRef := client . Dataset ( datasetID ). Table ( tableID )
meta := & bigquery . TableMetadata {
EncryptionConfig : & bigquery . EncryptionConfig {
// TODO: Replace this key with a key you have created in Cloud KMS.
KMSKeyName : "projects/cloud-samples-tests/locations/us/keyRings/test/cryptoKeys/test" ,
},
}
if err := tableRef . Create ( ctx , meta ); err != nil {
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
import com.google.cloud.bigquery. EncryptionConfiguration ;
import com.google.cloud.bigquery. Field ;
import com.google.cloud.bigquery. Schema ;
import com.google.cloud.bigquery. StandardSQLTypeName ;
import com.google.cloud.bigquery. StandardTableDefinition ;
import com.google.cloud.bigquery. TableDefinition ;
import com.google.cloud.bigquery. TableId ;
import com.google.cloud.bigquery. TableInfo ;
// Sample to create a cmek table
public class CreateTableCmek {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
String tableName = "MY_TABLE_NAME" ;
String kmsKeyName = "MY_KEY_NAME" ;
Schema schema =
Schema . of (
Field . of ( "stringField" , StandardSQLTypeName . STRING ),
Field . of ( "booleanField" , StandardSQLTypeName . BOOL ));
// i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}
EncryptionConfiguration encryption =
EncryptionConfiguration . newBuilder (). setKmsKeyName ( kmsKeyName ). build ();
createTableCmek ( datasetName , tableName , schema , encryption );
}
public static void createTableCmek (
String datasetName , String tableName , Schema schema , EncryptionConfiguration configuration ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
TableId tableId = TableId . of ( datasetName , tableName );
TableDefinition tableDefinition = StandardTableDefinition . of ( schema );
TableInfo tableInfo =
TableInfo . newBuilder ( tableId , tableDefinition )
. setEncryptionConfiguration ( configuration )
. build ();
bigquery . create ( tableInfo );
System . out . println ( "Table cmek created successfully" );
} catch ( BigQueryException e ) {
System . out . println ( "Table cmek was not created. \n" + e . toString ());
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
client = bigquery . Client ()
# TODO(dev): Change table_id to the full name of the table you want to create.
table_id = "your-project.your_dataset.your_table_name"
# Set the encryption key to use for the table.
# TODO: Replace this key with a key you have created in Cloud KMS.
kms_key_name = "projects/your-project/locations/us/keyRings/test/cryptoKeys/test"
table = bigquery . Table ( table_id )
table . encryption_configuration = bigquery . EncryptionConfiguration (
kms_key_name = kms_key_name
)
table = client . create_table ( table ) # API request
print ( f "Created { table_id } ." )
print ( f "Key: { table . encryption_configuration . kms_key_name } ." )
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
table_id = "mytable"
schema = << EOF
[
{
"name" : "ID" ,
"type" : "INT64" ,
"mode" : "NULLABLE" ,
"description" : "Item ID"
},
{
"name" : "Item" ,
"type" : "STRING" ,
"mode" : "NULLABLE"
}
]
EOF
encryption_configuration {
kms_key_name = google_kms_crypto_key.crypto_key.id
}
depends_on = [ google_project_iam_member.service_account_access ]
}
resource "google_kms_crypto_key" "crypto_key" {
name = "example-key"
key_ring = google_kms_key_ring.key_ring.id
}
resource "random_id" "default" {
byte_length = 8
}
resource "google_kms_key_ring" "key_ring" {
name = "${random_id.default.hex}-example-keyring"
location = "us"
}
# Enable the BigQuery service account to encrypt/decrypt Cloud KMS keys
data "google_project" "project" {
}
resource "google_project_iam_member" "service_account_access" {
project = data.google_project.project.project_id
role = "roles/cloudkms.cryptoKeyEncrypterDecrypter"
member = "serviceAccount:bq-${data.google_project.project.number}@bigquery-encryption.iam.gserviceaccount.com"
}
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
