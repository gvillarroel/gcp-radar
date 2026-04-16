---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.368Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Repeat frequency configuration for Google Ad Manager transfers"
feature_slug: "repeat-frequency-configuration-for-google-ad-manager-transfers"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transfer"
keywords:
  - "repeat"
  - "frequency"
  - "configuration"
  - "ad"
  - "manager"
  - "transfers"
  - "bigquery"
  - "transfer"
---

# Repeat frequency configuration for Google Ad Manager transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service for Google Ad Manager now lets you configure transfer repeat frequency.

## Extended Definition

BigQuery Data Transfer Service for Google Ad Manager now lets you configure transfer repeat frequency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)

## Supporting Pages

### Load Campaign Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data ingestion from Campaign Manager transfers When you transfer data from Campaign Manager into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- Repeat frequency The Campaign Manager connector supports data transfer every 8 hours.
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to create campaign manager transfer config public class CreateCampaignmanagerTransfer { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String bucket = "gs://cloud-sample-data" ; // the network id only allows digits String networkId = "7878" ; String fileNamePrefix = "test " ; Map<String , Value > params = new HashMap <> (); params . put ( "bucket" , Value . newBuilder (). setStringValue ( bucket ). build ()); params . put ( "network id" , Value . newBuilder (). setStringValue ( networkId ). build ()); params . put ( "file name prefix" , Value . newBuilder (). setStringValue ( fileNamePrefix ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( datasetId ) . setDisplayName ( "Your Campaignmanager Config Name" ) . setDataSourceId ( "dcm dt" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . build (); createCampaignmanagerTransfer ( projectId , transferConfig ); } public static void createCampaignmanagerTransfer ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Campaignmanager transfer created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Campaignmanager transfer was not created." + ex . toString ()); } } } Warning: If you change the schema of a report, all files on that day must have the same schema, or the data transfer for the entire day will fail.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .

### Load Google Ad Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Repeat frequency The Google Ad Manager connector supports data transfers every 4 hours.
- Data ingestion from Google Ad Manager transfers When you transfer data from Google Ad Manager into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- To create a BigQuery Data Transfer Service data transfer for Google Ad Manager: Console Go to the Data transfers page in the Google Cloud console.
- By default, Google Ad Manager data transfers repeat every 8 hours.

### Load Google Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transfer configuration for Customer ID 1234567890 A transfer configuration for the root manager account (Customer ID 1234567890) would generate data transfer runs that include the following Customer IDs: 1111 (via sub-manager account 1234) 2222 (via sub-manager account 1234) 3333 (via sub-manager account 1234) 4444 (via sub-manager account 1234) 5555 (via sub-manager account 567 and sub-manager account 1234) 6666 (via sub-manager account 567 and sub-manager account 1234) 7777 (via sub-manager account 567 and sub-manager account 1234) 8888 (via sub-manager account 89) 9999 (via sub-manager account 89) 0000 (individual Customer ID) Transfer configuration for Customer ID 1234 A transfer configuration for sub-manager account 123 (Customer ID 1234) would generate data transfer runs that include the following Customer IDs: 1111 2222 3333 4444 5555 (via sub-manager account 567) 6666 (via sub-manager account 567) 7777 (via sub-manager account 567) Transfer configuration for Customer ID 567 A transfer configuration for sub-manager account 567 (Customer ID 567) would generate data transfer runs that include the following Customer IDs: 5555 6666 7777 Transfer configuration for Customer ID 89 A transfer configuration for sub-manager account 89 (Customer ID 89) would generate data transfer runs that include the following Customer IDs: 8888 9999 Transfer configuration for Customer ID 0000 A transfer configuration for Customer ID 0000 would generate data transfer runs that include only the individual Customer ID: 0000 Migrate Google Ads data to MCCs To migrate your existing Google Ads data in BigQuery Data Transfer Service to the MCC structure, you can set up a backfill to add your existing data to the tables created by the transfer configuration linked to the manager account.
- Repeat frequency The Google Ads connector supports daily data transfers.
- The following tables exclude ad group related columns when the Include PMax Campaign Tables checkbox is selected: GeoStats GeoConversionStats ShoppingProductConversionStats ShoppingProductStats LocationsUserLocationsStats The following tables are added when the Include PMax Campaign Tables checkbox is selected: Asset AssetGroup AssetGroupAsset AssetGroupListingGroupFilter AssetGroupSignal Audience AssetGroupProductGroupStats CampaignAssetStats Support for Google Ads manager accounts Existing customers who have multiple Customer ID-specific Google Ads Transfers are encouraged to set up a single Google Ads Transfer at the Manager Account (MCC) level, schedule a backfill, and disable individual Customer ID-specific Google Ads Transfers.
- When you trigger a manual transfer, Match Table snapshots for the following tables are not updated: Ad AdGroup AdGroupAudience AdGroupBidModifier AdGroupAdLabel AdGroupCriterion AdGroupCriterionLabel AdGroupLabel AgeRange Asset AssetGroup AssetGroupAsset AssetGroupListingGroupFilter AssetGroupSignal Audience BidGoal Budget Campaign CampaignAudience CampaignCriterion CampaignLabel Customer Gender Keyword LocationBasedCampaignCriterion ParentalStatus Placement Video Custom reports The BigQuery Data Transfer Service for Google Ads connector also supports the use of custom reports using Google Ads Query Language (GAQL) queries in the Google Ads transfer configuration.

