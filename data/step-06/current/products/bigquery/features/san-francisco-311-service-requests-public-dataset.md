---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.894Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "San Francisco 311 Service Requests public dataset"
feature_slug: "san-francisco-311-service-requests-public-dataset"
latest_feature_date: "2017-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
  - "https://docs.cloud.google.com/bigquery/docs/conditions"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset"
keywords:
  - "san"
  - "francisco"
  - "311"
  - "requests"
  - "public"
  - "dataset"
  - "bigquery"
  - "datasets"
---

# San Francisco 311 Service Requests public dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery public datasets program includes the San Francisco 311 Service Requests dataset.

## Extended Definition

The BigQuery public datasets program includes the San Francisco 311 Service Requests dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- [https://docs.cloud.google.com/bigquery/docs/conditions](https://docs.cloud.google.com/bigquery/docs/conditions)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset)

## Supporting Pages

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to copy dataset from another gcp project public class CopyDataset { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String destinationProjectId = "MY DESTINATION PROJECT ID" ; final String destinationDatasetId = "MY DESTINATION DATASET ID" ; final String sourceProjectId = "MY SOURCE PROJECT ID" ; final String sourceDatasetId = "MY SOURCE DATASET ID" ; Map<String , Value > params = new HashMap <> (); params . put ( "source project id" , Value . newBuilder (). setStringValue ( sourceProjectId ). build ()); params . put ( "source dataset id" , Value . newBuilder (). setStringValue ( sourceDatasetId ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( destinationDatasetId ) . setDisplayName ( "Your Dataset Copy Name" ) . setDataSourceId ( "cross region copy" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); copyDataset ( destinationProjectId , transferConfig ); } public static void copyDataset ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient dataTransferServiceClient = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = dataTransferServiceClient . createTransferConfig ( request ); System . out . println ( "Copy dataset created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Copy dataset was not created." + ex . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to copy datasets: bigquery.transfers.update on the destination project bigquery.jobs.create on the destination project bigquery.datasets.get on the source and destination dataset bigquery.tables.list on the source and destination dataset bigquery.datasets.update on the destination dataset bigquery.tables.create on the destination dataset You might also be able to get these permissions with custom roles or other predefined roles .
- See the License for the specific language governing permissions and limitations under the License. require "google/cloud/bigquery" def delete dataset and contents dataset id = "my dataset with tables" bigquery = Google :: Cloud :: Bigquery . new Use the force parameter to delete a dataset and its contents dataset = bigquery . dataset dataset id dataset . delete force : true puts "Dataset #{ dataset id } and contents deleted." end Restore tables from deleted datasets You can restore tables from a deleted dataset that are within the dataset's time travel window .
- To copy a dataset to a project in another VPC Service Controls service perimeter , you need to set the following egress rules: In the destination project's VPC Service Controls service perimeter configuration, the IAM principal must have the following methods: bigquery.datasets.get bigquery.tables.list bigquery.tables.get , bigquery.tables.getData In the source project's VPC Service Controls service perimeter configuration, the IAM principal being used must have the method set to All Methods .

### Control access with IAM Conditions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/conditions](https://docs.cloud.google.com/bigquery/docs/conditions)
- Source ID: `site-docs-reference-5`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With this role, the user can list all the resources in the dataset, but they can't perform any queries on those resources. { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . metadataViewer , "condition" : { "title" : "Dataset dataset 2" , "description" : "Allowed to list resources in dataset 2 dataset" , "expression" : resource . name == projects / project 2 / datasets / dataset 2 && resource . type == bigquery . googleapis . com / Dataset } } Grant owner access to all tables in all datasets with a specific prefix This example grants cloudysanfrancisco@gmail.com the BigQuery Data Owner role on all tables in all datasets that start with the public prefix: { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataOwner , "condition" : { "title" : "Tables public " , "description" : "Allowed owner access to tables in datasets with public prefix" , "expression" : resource . name . startsWith ( "projects/project 3/datasets/public " ) && resource . type == bigquery . googleapis . com / Table } } Grant owner access to all tables, models, and routines in all datasets that have a specific prefix This example grants cloudysanfrancisco@gmail.com the BigQuery Data Owner role on all tables, models, and routines in all datasets that start with the general prefix: { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataOwner , "condition" : { "title" : "Tables general " , "description" : "Allowed owner access to tables in datasets with general prefix" , "expression" : resource . name . startsWith ( "projects/project 4/datasets/general " ) && resource . type == bigquery . googleapis . com / Table } }, { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataOwner , "condition" : { "title" : "Models general " , "description" : "Allowed owner access to models in datasets with general prefix" , "expression" : resource . name . startsWith ( "projects/project 4/datasets/general " ) && resource . type == bigquery . googleapis . com / Model } }, { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataOwner , "condition" : { "title" : "Routines general " , "description" : "Allowed owner access to routines in datasets with general prefix" , "expression" : resource . name . startsWith ( "projects/project 4/datasets/general " ) && resource . type == bigquery . googleapis . com / Routine } } What's next Learn more about configuring temporary access by using IAM Conditions.
- The user can't view the table in the Google Cloud console because they don't have the bigquery.tables.list permission on the dataset. { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataViewer , "condition" : { "title" : "Table dataset 1.table 1" , "description" : "Allowed to read table with name table 1 in dataset 1 dataset" , "expression" : resource . name == projects / project 1 / datasets / dataset 1 / tables / table 1 && resource . type == bigquery . googleapis . com / Table } } Grant list access to a specific dataset This example grants cloudysanfrancisco@gmail.com the BigQuery Metadata Viewer role on the dataset 2 dataset.
- When you create conditions for BigQuery routines, use the following formats: Attribute Value resource.type bigquery.googleapis.com/Routine resource.name projects/ PROJECT ID /datasets/ DATASET ID /routines/ ROUTINE ID resource.service bigquery.googleapis.com When you create conditions for BigQuery models, use the following formats: Attribute Value resource.type bigquery.googleapis.com/Model resource.name projects/ PROJECT ID /datasets/ DATASET ID /models/ MODEL ID resource.service bigquery.googleapis.com Replace the following: PROJECT ID : the ID of the project that contains the resources that you are granting access to DATASET ID : the ID of the dataset that you are granting access to TABLE ID : the ID of the table or view that you are granting access to ROUTINE ID : the ID of the routine that you are granting access to MODEL ID : the ID of the model that you are granting access to Conditions best practices When you build conditions in BigQuery, use the following best practices: We recommend using positive conditions for resource.type , resource.name , and resource.service for greater accuracy.
- For example, the following addition to the access section of a dataset's JSON file would grant the roles/bigquery.dataViewer role to cloudysanfrancisco@gmail.com until December 31, 2032: "access" : [ { "role" : "roles/bigquery.dataViewer" , "userByEmail" : "cloudysanfrancisco@gmail.com" , "condition" : { "title" : "Grant roles/bigquery.dataViewer until 2033" , "description" : "Role expires on December 31, 2032." , "expression" : "request.time } } ] API To grant conditional access to a dataset using the BigQuery API, follow the directions for granting access to a dataset with accessPolicyVersion=3 in the request parameter.

### Create a dataset in BigQuery. \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset)
- Source ID: `site-docs-reference-required-15`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . using Google.Apis.Bigquery.v2.Data ; using Google.Cloud.BigQuery.V2 ; public class BigQueryCreateDataset { public BigQueryDataset CreateDataset ( string projectId = "your-project-id" , string location = "US" ) { BigQueryClient client = BigQueryClient .
- Explore further For detailed documentation that includes this code sample, see the following: Create datasets Get started with authentication Code sample C# Before trying this sample, follow the C# setup instructions in the BigQuery quickstart using client libraries .
- String datasetName = "MY DATASET NAME" ; createDataset ( datasetName ); } public static void createDataset ( String datasetName ) { try { // Initialize client that will be used to send requests.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createDataset () { // Creates a new dataset named "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my new dataset"; // Specify the geographic location where the dataset should reside const options = { location : 'US' , }; // Create a new dataset const [ dataset ] = await bigquery . createDataset ( datasetId , options ); console . log ( Dataset ${ dataset . id } created. ); } createDataset (); PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .

