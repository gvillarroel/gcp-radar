---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.395Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cross-region dataset replication"
feature_slug: "cross-region-dataset-replication"
latest_feature_date: "2024-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
keywords:
  - "cross"
  - "region"
  - "dataset"
  - "replication"
  - "bigquery"
  - "can"
  - "replicate"
  - "source"
---

# Cross-region dataset replication

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can replicate a dataset from its source region to one or more other regions; Cross-region dataset replication lets you replicate a dataset from a source region to one or more other regions.

## Extended Definition

BigQuery can replicate a dataset from its source region to one or more other regions; Cross-region dataset replication lets you replicate a dataset from a source region to one or more other regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)

## Supporting Pages

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following BigQuery predefined roles contain the bigquery.datasets.update permission: BigQuery Data Owner ( roles/bigquery.dataOwner ) BigQuery Admin ( roles/bigquery.admin ) To view all data exchanges across projects in an organization that you have access to, you must have the resourcemanager.organizations.get permission.
- Before configuring the listing for multiple regions, verify you've enabled cross-region dataset replication on the shared dataset, as you can select only regions where cross-region dataset replication is enabled.
- Before configuring the listing for multiple regions, verify you've enabled cross-region dataset replication on the shared dataset, as you can select only regions where cross-region dataset replication is enabled.
- Before configuring the listing for multiple regions, verify you've enabled cross-region dataset replication on the shared dataset.

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- When you run a query, BigQuery automatically uses the local version of the UDF from the local dataset replica without your specifying the region where the function is defined, making your queries portable across different locations.
- To make your UDFs region-independent, you can use cross-region dataset replication : Create a new dedicated dataset , for example my utils , to store all your necessary UDFs.
- Community-contributed functions Community contributed UDFs are available in the bigquery-public-data.persistent udfs public dataset and the open source bigquery-utils GitHub repository .
- Configure this dataset to be replicated to all of the regions where you need to execute queries that call these UDFs.

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to copy dataset from another gcp project public class CopyDataset { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String destinationProjectId = "MY DESTINATION PROJECT ID" ; final String destinationDatasetId = "MY DESTINATION DATASET ID" ; final String sourceProjectId = "MY SOURCE PROJECT ID" ; final String sourceDatasetId = "MY SOURCE DATASET ID" ; Map<String , Value > params = new HashMap <> (); params . put ( "source project id" , Value . newBuilder (). setStringValue ( sourceProjectId ). build ()); params . put ( "source dataset id" , Value . newBuilder (). setStringValue ( sourceDatasetId ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( destinationDatasetId ) . setDisplayName ( "Your Dataset Copy Name" ) . setDataSourceId ( "cross region copy" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); copyDataset ( destinationProjectId , transferConfig ); } public static void copyDataset ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient dataTransferServiceClient = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = dataTransferServiceClient . createTransferConfig ( request ); System . out . println ( "Copy dataset created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Copy dataset was not created." + ex . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- The following examples show the formatting of the parameters, based on your system's environment: Linux: use single quotes to enclose the JSON string–for example: '{"source dataset id":"mydataset","source project id":"mysourceproject","overwrite destination table":"true"}' Windows command line: use double quotes to enclose the JSON string, and escape double quotes in the string with a backslash–for example: "{\"source dataset id\":\"mydataset\",\"source project id\":\"mysourceproject\",\"overwrite destination table\":\"true\"}" PowerShell: use single quotes to enclose the JSON string, and escape double quotes in the string with a backslash–for example: '{\"source dataset id\":\"mydataset\",\"source project id\":\"mysourceproject\",\"overwrite destination table\":\"true\"}' For example, the following command creates a dataset copy configuration that's named My Transfer with a target dataset that's named mydataset and a project with the ID of myproject . bq mk \ --transfer config \ --project id = myproject \ --data source = cross region copy \ --target dataset = mydataset \ --display name = 'My Transfer' \ --params = '{ "source dataset id":"123 demo eu", "source project id":"mysourceproject", "overwrite destination table":"true" }' API Enable the BigQuery Data Transfer Service for your destination dataset.
- TransferConfig ( destination dataset id = destination dataset id , display name = "Your Dataset Copy Name" , data source id = "cross region copy" , params = { "source project id" : source project id , "source dataset id" : source dataset id , }, schedule = "every 24 hours" , ) transfer config = transfer client . create transfer config ( parent = transfer client . common project path ( destination project id ), transfer config = transfer config , ) print ( f "Created transfer config: { transfer config . name } " ) To avoid additional storage costs, consider deleting the prior dataset .
- For a complete list of valid values for the --data source flag, see the transfer-config flags in the bq command-line tool reference. bq mk \ --transfer config \ --project id = PROJECT \ --data source = cross region copy \ --target dataset = DATASET \ --display name = NAME \ --service account name = SERCICE ACCOUNT \ --params = ' PARAMETERS ' Replace the following: NAME : the display name for the copy job or the transfer configuration SERVICE ACCOUNT : the service account name used to authenticate your transfer.

