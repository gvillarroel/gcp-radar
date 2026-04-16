---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.906Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "IRS Form 990 public dataset"
feature_slug: "irs-form-990-public-dataset"
latest_feature_date: "2016-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries"
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console"
keywords:
  - "irs"
  - "form"
  - "990"
  - "public"
  - "dataset"
  - "bigquery"
  - "datasets"
  - "program"
---

# IRS Form 990 public dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery public datasets program includes the IRS Form 990 dataset.

## Extended Definition

The BigQuery public datasets program includes the IRS Form 990 dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries)
- [https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console)

## Supporting Pages

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to copy datasets, ask your administrator to grant you the following IAM roles: BigQuery Admin ( roles/bigquery.admin ) - the destination project BigQuery Data Viewer ( roles/bigquery.dataViewer ) - the source dataset BigQuery Data Editor ( roles/bigquery.dataEditor ) - the destination dataset For more information about granting roles, see Manage access to projects, folders, and organizations .
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to copy dataset from another gcp project public class CopyDataset { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String destinationProjectId = "MY DESTINATION PROJECT ID" ; final String destinationDatasetId = "MY DESTINATION DATASET ID" ; final String sourceProjectId = "MY SOURCE PROJECT ID" ; final String sourceDatasetId = "MY SOURCE DATASET ID" ; Map<String , Value > params = new HashMap <> (); params . put ( "source project id" , Value . newBuilder (). setStringValue ( sourceProjectId ). build ()); params . put ( "source dataset id" , Value . newBuilder (). setStringValue ( sourceDatasetId ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( destinationDatasetId ) . setDisplayName ( "Your Dataset Copy Name" ) . setDataSourceId ( "cross region copy" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); copyDataset ( destinationProjectId , transferConfig ); } public static void copyDataset ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient dataTransferServiceClient = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = dataTransferServiceClient . createTransferConfig ( request ); System . out . println ( "Copy dataset created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Copy dataset was not created." + ex . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- The following examples show the formatting of the parameters, based on your system's environment: Linux: use single quotes to enclose the JSON string–for example: '{"source dataset id":"mydataset","source project id":"mysourceproject","overwrite destination table":"true"}' Windows command line: use double quotes to enclose the JSON string, and escape double quotes in the string with a backslash–for example: "{\"source dataset id\":\"mydataset\",\"source project id\":\"mysourceproject\",\"overwrite destination table\":\"true\"}" PowerShell: use single quotes to enclose the JSON string, and escape double quotes in the string with a backslash–for example: '{\"source dataset id\":\"mydataset\",\"source project id\":\"mysourceproject\",\"overwrite destination table\":\"true\"}' For example, the following command creates a dataset copy configuration that's named My Transfer with a target dataset that's named mydataset and a project with the ID of myproject . bq mk \ --transfer config \ --project id = myproject \ --data source = cross region copy \ --target dataset = mydataset \ --display name = 'My Transfer' \ --params = '{ "source dataset id":"123 demo eu", "source project id":"mysourceproject", "overwrite destination table":"true" }' API Enable the BigQuery Data Transfer Service for your destination dataset.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to copy datasets: bigquery.transfers.update on the destination project bigquery.jobs.create on the destination project bigquery.datasets.get on the source and destination dataset bigquery.tables.list on the source and destination dataset bigquery.datasets.update on the destination dataset bigquery.tables.create on the destination dataset You might also be able to get these permissions with custom roles or other predefined roles .

### "Query a public dataset with the BigQuery client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries)
- Source ID: `site-docs-reference-2`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a query against the bigquery-public-data.stackoverflow dataset that returns the top 10 most viewed Stack Overflow pages and their view counts, replace the contents of the file with the following code: using System ; using Google.Cloud.BigQuery.V2 ; namespace GoogleCloudSamples { public class Program { public static void Main ( string [] args ) { string projectId = Environment .
- Learn more about BigQuery public datasets .
- To create a query against the bigquery-public-data.stackoverflow dataset that returns the top 10 most viewed Stack Overflow pages and their view counts, copy the following code into the app.js file: // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); async function queryStackOverflow () { // Queries a public Stack Overflow dataset. // Create a client const bigqueryClient = new BigQuery (); // The SQL query to run const sqlQuery = SELECT CONCAT( 'https://stackoverflow.com/questions/', CAST(id as STRING)) as url, view count FROM \bigquery-public-data.stackoverflow.posts questions\ WHERE tags like '%google-bigquery%' ORDER BY view count DESC LIMIT 10 ; const options = { query : sqlQuery , // Location must match that of the dataset(s) referenced in the query. location : 'US' , }; // Run the query const [ rows ] = await bigqueryClient . query ( options ); console . log ( 'Query Results:' ); rows . forEach ( row = > { const url = row [ 'url' ]; const viewCount = row [ 'view count' ]; console . log ( url: ${ url } , ${ viewCount } views ); }); } queryStackOverflow (); Click Open Terminal .
- If you are prompted to authorize Cloud Shell and agree to the terms, click Authorize . php app.php The result is similar to the following: --- Row 1 --- url: https://stackoverflow.com/questions/35159967, 170023 views --- Row 2 --- url: https://stackoverflow.com/questions/22879669, 142581 views --- Row 3 --- url: https://stackoverflow.com/questions/10604135, 132406 views --- Row 4 --- url: https://stackoverflow.com/questions/44564887, 128781 views --- Row 5 --- url: https://stackoverflow.com/questions/27060396, 127008 views --- Row 6 --- url: https://stackoverflow.com/questions/12482637, 120766 views --- Row 7 --- url: https://stackoverflow.com/questions/20673986, 115720 views --- Row 8 --- url: https://stackoverflow.com/questions/39109817, 108368 views --- Row 9 --- url: https://stackoverflow.com/questions/11057219, 105175 views --- Row 10 --- url: https://stackoverflow.com/questions/43195143, 101878 views Found 10 row(s) You have successfully queried a public dataset with the BigQuery PHP client library.

### Try BigQuery using the sandbox \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud offers public datasets that are stored in BigQuery and made available to the general public through the Google Cloud Public Dataset Program .
- For more information about working with public datasets, see BigQuery public datasets .
- The BigQuery sandbox does not support several BigQuery features, including the following: Streaming data Data manipulation language (DML) statements BigQuery Data Transfer Service View a public dataset BigQuery public datasets are available by default in BigQuery Studio in a project named bigquery-public-data .
- Delete the project If you used the BigQuery sandbox to query the public dataset, then billing is not enabled for your project, and you don't need to delete the project.

