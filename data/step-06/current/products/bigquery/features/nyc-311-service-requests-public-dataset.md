---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.902Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "NYC 311 Service Requests public dataset"
feature_slug: "nyc-311-service-requests-public-dataset"
latest_feature_date: "2016-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries"
keywords:
  - "nyc"
  - "311"
  - "requests"
  - "public"
  - "dataset"
  - "bigquery"
  - "datasets"
  - "program"
---

# NYC 311 Service Requests public dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery public datasets program includes the NYC 311 Service Requests dataset.

## Extended Definition

The BigQuery public datasets program includes the NYC 311 Service Requests dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries)

## Supporting Pages

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to copy dataset from another gcp project public class CopyDataset { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String destinationProjectId = "MY DESTINATION PROJECT ID" ; final String destinationDatasetId = "MY DESTINATION DATASET ID" ; final String sourceProjectId = "MY SOURCE PROJECT ID" ; final String sourceDatasetId = "MY SOURCE DATASET ID" ; Map<String , Value > params = new HashMap <> (); params . put ( "source project id" , Value . newBuilder (). setStringValue ( sourceProjectId ). build ()); params . put ( "source dataset id" , Value . newBuilder (). setStringValue ( sourceDatasetId ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( destinationDatasetId ) . setDisplayName ( "Your Dataset Copy Name" ) . setDataSourceId ( "cross region copy" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); copyDataset ( destinationProjectId , transferConfig ); } public static void copyDataset ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient dataTransferServiceClient = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = dataTransferServiceClient . createTransferConfig ( request ); System . out . println ( "Copy dataset created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Copy dataset was not created." + ex . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to copy datasets: bigquery.transfers.update on the destination project bigquery.jobs.create on the destination project bigquery.datasets.get on the source and destination dataset bigquery.tables.list on the source and destination dataset bigquery.datasets.update on the destination dataset bigquery.tables.create on the destination dataset You might also be able to get these permissions with custom roles or other predefined roles .
- See the License for the specific language governing permissions and limitations under the License. require "google/cloud/bigquery" def delete dataset and contents dataset id = "my dataset with tables" bigquery = Google :: Cloud :: Bigquery . new Use the force parameter to delete a dataset and its contents dataset = bigquery . dataset dataset id dataset . delete force : true puts "Dataset #{ dataset id } and contents deleted." end Restore tables from deleted datasets You can restore tables from a deleted dataset that are within the dataset's time travel window .
- To copy a dataset to a project in another VPC Service Controls service perimeter , you need to set the following egress rules: In the destination project's VPC Service Controls service perimeter configuration, the IAM principal must have the following methods: bigquery.datasets.get bigquery.tables.list bigquery.tables.get , bigquery.tables.getData In the source project's VPC Service Controls service perimeter configuration, the IAM principal being used must have the method set to All Methods .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- String query = "SELECT corpus FROM bigquery-public-data.samples.shakespeare GROUP BY corpus;" ; String destinationTable = "MY TABLE" ; String destinationDataset = "MY DATASET" ; saveQueryToTable ( destinationDataset , destinationTable , query ); } public static void saveQueryToTable ( String destinationDataset , String destinationTableId , String query ) { try { // Initialize client that will be used to send requests.
- String projectId = "bigquery public data" ; String datasetName = "samples" ; String tableName = "shakespeare" ; getTable ( projectId , datasetName , tableName ); } public static void getTable ( String projectId , String datasetName , String tableName ) { try { // Initialize client that will be used to send requests.
- String projectId = "bigquery-public-data" ; String datasetName = "samples" ; listTables ( projectId , datasetName ); } public static void listTables ( String projectId , String datasetName ) { try { // Initialize client that will be used to send requests.
- This dataset is part of the BigQuery public dataset program .

### "Query a public dataset with the BigQuery client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- To create a query against the bigquery-public-data.stackoverflow dataset that returns the top 10 most viewed Stack Overflow pages and their view counts, replace the contents of the file with the following code: using System ; using Google.Cloud.BigQuery.V2 ; namespace GoogleCloudSamples { public class Program { public static void Main ( string [] args ) { string projectId = Environment .
- Learn more about BigQuery public datasets .
- To create a query against the bigquery-public-data.stackoverflow dataset that returns the top 10 most viewed Stack Overflow pages and their view counts, copy the following code into the app.js file: // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); async function queryStackOverflow () { // Queries a public Stack Overflow dataset. // Create a client const bigqueryClient = new BigQuery (); // The SQL query to run const sqlQuery = SELECT CONCAT( 'https://stackoverflow.com/questions/', CAST(id as STRING)) as url, view count FROM \bigquery-public-data.stackoverflow.posts questions\ WHERE tags like '%google-bigquery%' ORDER BY view count DESC LIMIT 10 ; const options = { query : sqlQuery , // Location must match that of the dataset(s) referenced in the query. location : 'US' , }; // Run the query const [ rows ] = await bigqueryClient . query ( options ); console . log ( 'Query Results:' ); rows . forEach ( row = > { const url = row [ 'url' ]; const viewCount = row [ 'view count' ]; console . log ( url: ${ url } , ${ viewCount } views ); }); } queryStackOverflow (); Click Open Terminal .
- If you are prompted to authorize Cloud Shell and agree to the terms, click Authorize . php app.php The result is similar to the following: --- Row 1 --- url: https://stackoverflow.com/questions/35159967, 170023 views --- Row 2 --- url: https://stackoverflow.com/questions/22879669, 142581 views --- Row 3 --- url: https://stackoverflow.com/questions/10604135, 132406 views --- Row 4 --- url: https://stackoverflow.com/questions/44564887, 128781 views --- Row 5 --- url: https://stackoverflow.com/questions/27060396, 127008 views --- Row 6 --- url: https://stackoverflow.com/questions/12482637, 120766 views --- Row 7 --- url: https://stackoverflow.com/questions/20673986, 115720 views --- Row 8 --- url: https://stackoverflow.com/questions/39109817, 108368 views --- Row 9 --- url: https://stackoverflow.com/questions/11057219, 105175 views --- Row 10 --- url: https://stackoverflow.com/questions/43195143, 101878 views Found 10 row(s) You have successfully queried a public dataset with the BigQuery PHP client library.

