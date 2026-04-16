---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.420Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Display & Video 360 connector for BigQuery Data Transfer Service"
feature_slug: "display-video-360-connector-for-bigquery-data-transfer-service"
latest_feature_date: "2024-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/display-video-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/display-video-transformation"
keywords:
  - "display"
  - "video"
  - "360"
  - "connector"
  - "bigquery"
  - "transfer"
  - "can"
  - "campaign"
---

# Display & Video 360 connector for BigQuery Data Transfer Service

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can transfer campaign reporting and configuration data from Display & Video 360 into BigQuery.

## Extended Definition

BigQuery Data Transfer Service can transfer campaign reporting and configuration data from Display & Video 360 into BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/display-video-transfer](https://docs.cloud.google.com/bigquery/docs/display-video-transfer)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)

## Supporting Pages

### Load Display & Video 360 data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/display-video-transfer](https://docs.cloud.google.com/bigquery/docs/display-video-transfer)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Partner Advertiser LineItem LineItemTargeting Campaign CampaignTargeting InsertionOrder InsertionOrderTargeting AdGroup AdGroupTargeting AdGroupAd Creative For more information about each type of configuration data, see the following links: About Partners Create an advertiser Create a line item Create a campaign Create an insertion order About YouTube & partners line items Manage creatives Data ingestion from Display & Video 360 transfers When you transfer data from Display & Video 360 into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- Load Display & Video 360 data into BigQuery You can load data from Display & Video 360 to BigQuery using the BigQuery Data Transfer Service for Display & Video 360 connector.
- Connector overview The BigQuery Data Transfer Service for the Display & Video 360 connector supports the following options for your data transfer.
- Data transfer options Support Supported reports The Display & Video 360 connector supports the transfer of data from the reports in Data Transfer v2 (Display & Video DTv2) files .

### Load Campaign Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data transfer options Support Supported reports The Campaign Manager connector supports the transfer of data from the following reports: Data Transfer v2 (Campaign Manager DTv2) files Data Transfer v2 (Campaign Manager DTv2) match tables For information on how Campaign Manager reports are transformed into BigQuery tables and views, see Campaign Manager report transformations .
- Load Campaign Manager data into BigQuery You can load data from Campaign Manager to BigQuery using the BigQuery Data Transfer Service for Campaign Manager connector.
- Connector overview The BigQuery Data Transfer Service for the Campaign Manager connector supports the following options for your data transfer.
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to create campaign manager transfer config public class CreateCampaignmanagerTransfer { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String bucket = "gs://cloud-sample-data" ; // the network id only allows digits String networkId = "7878" ; String fileNamePrefix = "test " ; Map<String , Value > params = new HashMap <> (); params . put ( "bucket" , Value . newBuilder (). setStringValue ( bucket ). build ()); params . put ( "network id" , Value . newBuilder (). setStringValue ( networkId ). build ()); params . put ( "file name prefix" , Value . newBuilder (). setStringValue ( fileNamePrefix ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( datasetId ) . setDisplayName ( "Your Campaignmanager Config Name" ) . setDataSourceId ( "dcm dt" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . build (); createCampaignmanagerTransfer ( projectId , transferConfig ); } public static void createCampaignmanagerTransfer ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Campaignmanager transfer created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Campaignmanager transfer was not created." + ex . toString ()); } } } Warning: If you change the schema of a report, all files on that day must have the same schema, or the data transfer for the entire day will fail.

### "Display & Video 360 data transformation \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Display & Video 360 resource BigQuery table BigQuery view Data Transfer files Impression p Impression displayvideo id Impression displayvideo id Click p Click displayvideo id Click displayvideo id Activity p Activity displayvideo id Activity displayvideo id DV360 API Resource (v3) Partner p Partner displayvideo id Partner displayvideo id Advertiser p Advertiser displayvideo id Advertiser displayvideo id LineItem p LineItem displayvideo id LineItem displayvideo id LineItemTargeting p LineItemTargeting displayvideo id LineItemTargeting displayvideo id Campaign p Campaign displayvideo id Campaign displayvideo id CampaignTargeting p CampaignTargeting displayvideo id CampaignTargeting displayvideo id InsertionOrder p InsertionOrder displayvideo id InsertionOrder displayvideo id InsertionOrderTargeting p InsertionOrderTargeting displayvideo id InsertionOrderTargeting displayvideo id AdGroup p AdGroup displayvideo id AdGroup displayvideo id AdGroupTargeting p AdGroupTargeting displayvideo id AdGroupTargeting displayvideo id AdGroupAd p AdGroupAd displayvideo id AdGroupAd displayvideo id Creative p Creative displayvideo id Creative displayvideo id Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Display & Video 360 data transformation When your Display & Video 360 data are transferred to BigQuery, they are transformed into the following BigQuery tables and views.
- When you view the tables and views in BigQuery, the value for displayvideo id is your Display & Video 360 partner or advertiser ID.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

