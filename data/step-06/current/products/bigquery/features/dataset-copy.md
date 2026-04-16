---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.810Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Dataset copy"
feature_slug: "dataset-copy"
latest_feature_date: "2019-08-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset"
keywords:
  - "dataset"
  - "copy"
  - "bigquery"
  - "supports"
  - "copying"
  - "datasets"
  - "including"
  - "across"
---

# Dataset copy

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports copying datasets, including across regions.

## Extended Definition

BigQuery supports copying datasets, including across regions.

## Evidence Summary

Fast-mode lexical matching selected 2 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset)

## Supporting Pages

### Copy a dataset \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset)
- Source ID: `site-docs-reference-required-15`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Explore further For detailed documentation that includes this code sample, see the following: Manage datasets Code sample Java Before trying this sample, follow the Java setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Copy a dataset Stay organized with collections Save and categorize content based on your preferences.
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to copy dataset from another gcp project public class CopyDataset { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String destinationProjectId = "MY DESTINATION PROJECT ID" ; final String destinationDatasetId = "MY DESTINATION DATASET ID" ; final String sourceProjectId = "MY SOURCE PROJECT ID" ; final String sourceDatasetId = "MY SOURCE DATASET ID" ; Map<String , Value > params = new HashMap <> (); params . put ( "source project id" , Value . newBuilder (). setStringValue ( sourceProjectId ). build ()); params . put ( "source dataset id" , Value . newBuilder (). setStringValue ( sourceDatasetId ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( destinationDatasetId ) . setDisplayName ( "Your Dataset Copy Name" ) . setDataSourceId ( "cross region copy" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); copyDataset ( destinationProjectId , transferConfig ); } public static void copyDataset ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient dataTransferServiceClient = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = dataTransferServiceClient . createTransferConfig ( request ); System . out . println ( "Copy dataset created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Copy dataset was not created." + ex . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Create a transfer configuration to copy all tables in a dataset across projects, locations, or both.

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Manage datasets This document describes how to copy datasets, recreate datasets in another location, secure datasets, delete datasets, and restore tables from deleted datasets in BigQuery.
- BigQuery uses the BigQuery Data Transfer Service in the backend to copy datasets.
- Copy a dataset Select one of the following options: Console Enable the BigQuery Data Transfer Service for your destination dataset.
- You can copy a dataset, including partitioned data within a region or across regions, without extracting, moving, or reloading data into BigQuery.

