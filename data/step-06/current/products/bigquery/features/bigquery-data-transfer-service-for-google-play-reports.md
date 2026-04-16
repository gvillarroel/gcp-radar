---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.849Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service for Google Play reports"
feature_slug: "bigquery-data-transfer-service-for-google-play-reports"
latest_feature_date: "2018-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/display-video-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer"
keywords:
  - "bigquery"
  - "transfer"
  - "play"
  - "reports"
  - "can"
  - "ingest"
---

# BigQuery Data Transfer Service for Google Play reports

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can ingest Google Play reports.

## Extended Definition

BigQuery Data Transfer Service can ingest Google Play reports.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/display-video-transfer](https://docs.cloud.google.com/bigquery/docs/display-video-transfer)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer)

## Supporting Pages

### Load Display & Video 360 data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/display-video-transfer](https://docs.cloud.google.com/bigquery/docs/display-video-transfer)
- Source ID: `site-api-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Partner Advertiser LineItem LineItemTargeting Campaign CampaignTargeting InsertionOrder InsertionOrderTargeting AdGroup AdGroupTargeting AdGroupAd Creative For more information about each type of configuration data, see the following links: About Partners Create an advertiser Create a line item Create a campaign Create an insertion order About YouTube & partners line items Manage creatives Data ingestion from Display & Video 360 transfers When you transfer data from Display & Video 360 into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- Data transfer options Support Supported reports The Display & Video 360 connector supports the transfer of data from the reports in Data Transfer v2 (Display & Video DTv2) files .
- Load Display & Video 360 data into BigQuery You can load data from Display & Video 360 to BigQuery using the BigQuery Data Transfer Service for Display & Video 360 connector.
- Supported configuration data In addition to the reporting data, BigQuery Data Transfer Service also transfers the following configuration data from Display & Video 360.

### Load Google Analytics 4 data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These custom reports ingest data from the Google Analytics Data API version supported by the BigQuery Data Transfer Service .
- When you specify a CMEK with a transfer, the BigQuery Data Transfer Service applies the CMEK to any intermediate on-disk cache of ingested data so that the entire data transfer workflow is CMEK compliant.
- Custom reports The BigQuery Data Transfer Service for Google Analytics connector supports the use of custom reports by specifying dimensions and metrics in the Google Analytics transfer configuration.
- Data ingestion from Google Analytics 4 transfers When you transfer data from Google Analytics 4 into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.

### Load Google Ad Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Data transfer options Support Supported reports The Google Ad Manager connector supports the transfer of data from the following reports: Data Transfer (Google Ad Manager DT) files Data Transfer fields Match tables provided by the BigQuery Data Transfer Service .
- Data ingestion from Google Ad Manager transfers When you transfer data from Google Ad Manager into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- Query your data When your data is transferred to BigQuery, the data is written to ingestion-time partitioned tables.
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to create a ad manager(formerly DFP) transfer config public class CreateAdManagerTransfer { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String bucket = "gs://cloud-sample-data" ; // the network code can only be digits with length 1 to 15 String networkCode = "12345678" ; Map<String , Value > params = new HashMap <> (); params . put ( "bucket" , Value . newBuilder (). setStringValue ( bucket ). build ()); params . put ( "network code" , Value . newBuilder (). setStringValue ( networkCode ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( datasetId ) . setDisplayName ( "Your Ad Manager Config Name" ) . setDataSourceId ( "dfp dt" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . build (); createAdManagerTransfer ( projectId , transferConfig ); } public static void createAdManagerTransfer ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Ad manager transfer created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Ad manager transfer was not created." + ex . toString ()); } } } Warning: If you change the schema of a report, all files on that day must have the same schema, or the data transfer for the entire day will fail.

