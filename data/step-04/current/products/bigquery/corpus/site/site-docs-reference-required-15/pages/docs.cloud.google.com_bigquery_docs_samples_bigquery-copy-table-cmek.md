---
title: "Copy a table with customer-managed encryption keys (CMEK) \_|\_ BigQuery \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek
  title: "Copy a table with customer-managed encryption keys (CMEK) \_|\_ BigQuery\
    \ \_|\_ Google Cloud Documentation"
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
Copy a table with customer-managed encryption keys (CMEK)
Stay organized with collections
Save and categorize content based on your preferences.
Copy a table with customer-managed encryption keys (CMEK).
Explore further
For detailed documentation that includes this code sample, see the following:
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
// copyTableWithCMEK demonstrates creating a copy of a table and ensuring the copied data is
// protected with a customer managed encryption key.
func copyTableWithCMEK ( projectID , datasetID , tableID string ) error {
// projectID := "my-project-id"
// datasetID := "mydataset"
// tableID := "mytable"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
srcTable := client . DatasetInProject ( "bigquery-public-data" , "samples" ). Table ( "shakespeare" )
copier := client . Dataset ( datasetID ). Table ( tableID ). CopierFrom ( srcTable )
copier . DestinationEncryptionConfig = & bigquery . EncryptionConfig {
// TODO: Replace this key with a key you have created in Cloud KMS.
KMSKeyName : "projects/cloud-samples-tests/locations/us-central1/keyRings/test/cryptoKeys/test" ,
}
job , err := copier . Run ( ctx )
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
import com.google.cloud.bigquery. CopyJobConfiguration ;
import com.google.cloud.bigquery. EncryptionConfiguration ;
import com.google.cloud.bigquery. Job ;
import com.google.cloud.bigquery. JobInfo ;
import com.google.cloud.bigquery. TableId ;
// Sample to copy a cmek table
public class CopyTableCmek {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String destinationDatasetName = "MY_DESTINATION_DATASET_NAME" ;
String destinationTableId = "MY_DESTINATION_TABLE_NAME" ;
String sourceDatasetName = "MY_SOURCE_DATASET_NAME" ;
String sourceTableId = "MY_SOURCE_TABLE_NAME" ;
String kmsKeyName = "MY_KMS_KEY_NAME" ;
EncryptionConfiguration encryption =
EncryptionConfiguration . newBuilder (). setKmsKeyName ( kmsKeyName ). build ();
copyTableCmek (
sourceDatasetName , sourceTableId , destinationDatasetName , destinationTableId , encryption );
}
public static void copyTableCmek (
String sourceDatasetName ,
String sourceTableId ,
String destinationDatasetName ,
String destinationTableId ,
EncryptionConfiguration encryption ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
TableId sourceTable = TableId . of ( sourceDatasetName , sourceTableId );
TableId destinationTable = TableId . of ( destinationDatasetName , destinationTableId );
// For more information on CopyJobConfiguration see:
// https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/bigquery/JobConfiguration.html
CopyJobConfiguration configuration =
CopyJobConfiguration . newBuilder ( destinationTable , sourceTable )
. setDestinationEncryptionConfiguration ( encryption )
. build ();
// For more information on Job see:
// https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html
Job job = bigquery . create ( JobInfo . of ( configuration ));
// Blocks until this job completes its execution, either failing or succeeding.
Job completedJob = job . waitFor ();
if ( completedJob == null ) {
System . out . println ( "Job not executed since it no longer exists." );
return ;
} else if ( completedJob . getStatus (). getError () != null ) {
System . out . println (
"BigQuery was unable to copy table due to an error: \n" + job . getStatus (). getError ());
return ;
}
System . out . println ( "Table cmek copied successfully." );
} catch ( BigQueryException | InterruptedException e ) {
System . out . println ( "Table cmek copying job was interrupted. \n" + e . toString ());
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
# Construct a BigQuery client object.
client = bigquery . Client ()
# TODO(developer): Set dest_table_id to the ID of the destination table.
# dest_table_id = "your-project.your_dataset.your_table_name"
# TODO(developer): Set orig_table_id to the ID of the original table.
# orig_table_id = "your-project.your_dataset.your_table_name"
# Set the encryption key to use for the destination.
# TODO(developer): Replace this key with a key you have created in KMS.
# kms_key_name = "projects/{}/locations/{}/keyRings/{}/cryptoKeys/{}".format(
# your-project, location, your-ring, your-key
# )
job_config = bigquery . CopyJobConfig (
destination_encryption_configuration = bigquery . EncryptionConfiguration (
kms_key_name = kms_key_name
)
)
job = client . copy_table ( orig_table_id , dest_table_id , job_config = job_config )
job . result () # Wait for the job to complete.
dest_table = client . get_table ( dest_table_id ) # Make an API request.
if dest_table . encryption_configuration . kms_key_name == kms_key_name :
print ( "A copy of the table created" )
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
