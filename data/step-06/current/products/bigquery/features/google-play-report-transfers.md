---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.800Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Google Play report transfers"
feature_slug: "google-play-report-transfers"
latest_feature_date: "2019-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/display-video-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer"
keywords:
  - "play"
  - "report"
  - "transfers"
  - "bigquery"
  - "transfer"
  - "can"
  - "reports"
  - "into"
---

# Google Play report transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can transfer Google Play reports into BigQuery.

## Extended Definition

BigQuery Data Transfer Service can transfer Google Play reports into BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/display-video-transfer](https://docs.cloud.google.com/bigquery/docs/display-video-transfer)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)

## Supporting Pages

### Load Display & Video 360 data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/display-video-transfer](https://docs.cloud.google.com/bigquery/docs/display-video-transfer)
- Source ID: `site-api-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Partner Advertiser LineItem LineItemTargeting Campaign CampaignTargeting InsertionOrder InsertionOrderTargeting AdGroup AdGroupTargeting AdGroupAd Creative For more information about each type of configuration data, see the following links: About Partners Create an advertiser Create a line item Create a campaign Create an insertion order About YouTube & partners line items Manage creatives Data ingestion from Display & Video 360 transfers When you transfer data from Display & Video 360 into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- Supported configuration data In addition to the reporting data, BigQuery Data Transfer Service also transfers the following configuration data from Display & Video 360.
- For information about how Display & Video 360 reports are transformed into BigQuery tables and views, see Display & Video 360 report transformation .
- Data transfer options Support Supported reports The Display & Video 360 connector supports the transfer of data from the reports in Data Transfer v2 (Display & Video DTv2) files .

### Load Facebook Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data transfer options Support Supported reports The BigQuery Data Transfer Service for Facebook Ads supports the transfer of the following Facebook Ads reports: AdAccounts AdInsights AdInsightsActions For information about how Facebook Ads reports are transformed into BigQuery tables and views, see Facebook Ads report transformation .
- Data ingestion from Facebook Ads transfers When you transfer data from Facebook Ads into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- With every transfer run, the Facebook Ads connector transfers all available data from Facebook Ads into BigQuery.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .

### Load Google Ad Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- Source ID: `site-api-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to create a ad manager(formerly DFP) transfer config public class CreateAdManagerTransfer { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String bucket = "gs://cloud-sample-data" ; // the network code can only be digits with length 1 to 15 String networkCode = "12345678" ; Map<String , Value > params = new HashMap <> (); params . put ( "bucket" , Value . newBuilder (). setStringValue ( bucket ). build ()); params . put ( "network code" , Value . newBuilder (). setStringValue ( networkCode ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( datasetId ) . setDisplayName ( "Your Ad Manager Config Name" ) . setDataSourceId ( "dfp dt" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . build (); createAdManagerTransfer ( projectId , transferConfig ); } public static void createAdManagerTransfer ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Ad manager transfer created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Ad manager transfer was not created." + ex . toString ()); } } } Warning: If you change the schema of a report, all files on that day must have the same schema, or the data transfer for the entire day will fail.
- Match tables fetched with PQL Match tables from CompanyService (v201908) Match tables from OrderService (v201908) Match tables from PlacementService (v201908) For information about how Google Ad Manager reports are transformed into BigQuery tables and views, see Google Ad Manager report transformation .
- Data transfer options Support Supported reports The Google Ad Manager connector supports the transfer of data from the following reports: Data Transfer (Google Ad Manager DT) files Data Transfer fields Match tables provided by the BigQuery Data Transfer Service .
- Data ingestion from Google Ad Manager transfers When you transfer data from Google Ad Manager into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.

