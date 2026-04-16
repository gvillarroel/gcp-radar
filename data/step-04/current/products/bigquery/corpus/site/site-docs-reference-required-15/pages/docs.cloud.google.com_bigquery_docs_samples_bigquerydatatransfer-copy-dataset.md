---
title: "Copy a dataset \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
  title: "Copy a dataset \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Copy a dataset
Stay organized with collections
Save and categorize content based on your preferences.
Create a transfer configuration to copy all tables in a dataset across projects, locations, or both.
Explore further
For detailed documentation that includes this code sample, see the following:
Manage datasets
Code sample
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
import com.google.api.gax.rpc. ApiException ;
import com.google.cloud.bigquery.datatransfer.v1. CreateTransferConfigRequest ;
import com.google.cloud.bigquery.datatransfer.v1. DataTransferServiceClient ;
import com.google.cloud.bigquery.datatransfer.v1. ProjectName ;
import com.google.cloud.bigquery.datatransfer.v1. TransferConfig ;
import com.google.protobuf. Struct ;
import com.google.protobuf. Value ;
import java.io.IOException ;
import java.util.HashMap ;
import java.util.Map ;
// Sample to copy dataset from another gcp project
public class CopyDataset {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
final String destinationProjectId = "MY_DESTINATION_PROJECT_ID" ;
final String destinationDatasetId = "MY_DESTINATION_DATASET_ID" ;
final String sourceProjectId = "MY_SOURCE_PROJECT_ID" ;
final String sourceDatasetId = "MY_SOURCE_DATASET_ID" ;
Map<String , Value > params = new HashMap <> ();
params . put ( "source_project_id" , Value . newBuilder (). setStringValue ( sourceProjectId ). build ());
params . put ( "source_dataset_id" , Value . newBuilder (). setStringValue ( sourceDatasetId ). build ());
TransferConfig transferConfig =
TransferConfig . newBuilder ()
. setDestinationDatasetId ( destinationDatasetId )
. setDisplayName ( "Your Dataset Copy Name" )
. setDataSourceId ( "cross_region_copy" )
. setParams ( Struct . newBuilder (). putAllFields ( params ). build ())
. setSchedule ( "every 24 hours" )
. build ();
copyDataset ( destinationProjectId , transferConfig );
}
public static void copyDataset ( String projectId , TransferConfig transferConfig )
throws IOException {
try ( DataTransferServiceClient dataTransferServiceClient = DataTransferServiceClient . create ()) {
ProjectName parent = ProjectName . of ( projectId );
CreateTransferConfigRequest request =
CreateTransferConfigRequest . newBuilder ()
. setParent ( parent . toString ())
. setTransferConfig ( transferConfig )
. build ();
TransferConfig config = dataTransferServiceClient . createTransferConfig ( request );
System . out . println ( "Copy dataset created successfully :" + config . getName ());
} catch ( ApiException ex ) {
System . out . print ( "Copy dataset was not created." + ex . toString ());
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
from google.cloud import bigquery_datatransfer
transfer_client = bigquery_datatransfer . DataTransferServiceClient ()
destination_project_id = "my-destination-project"
destination_dataset_id = "my_destination_dataset"
source_project_id = "my-source-project"
source_dataset_id = "my_source_dataset"
transfer_config = bigquery_datatransfer . TransferConfig (
destination_dataset_id = destination_dataset_id ,
display_name = "Your Dataset Copy Name" ,
data_source_id = "cross_region_copy" ,
params = {
"source_project_id" : source_project_id ,
"source_dataset_id" : source_dataset_id ,
},
schedule = "every 24 hours" ,
)
transfer_config = transfer_client . create_transfer_config (
parent = transfer_client . common_project_path ( destination_project_id ),
transfer_config = transfer_config ,
)
print ( f "Created transfer config: { transfer_config . name } " )
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
