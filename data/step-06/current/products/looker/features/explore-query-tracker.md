---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.504Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Explore query tracker"
feature_slug: "explore-query-tracker"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transformation"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
keywords:
  - "explore"
  - "query"
  - "tracker"
  - "shows"
  - "progress"
  - "timing"
  - "details"
  - "ui"
---

# Explore query tracker

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Explore query tracker shows query progress and timing details in the Explore UI; A progress bar appears in the Explore UI while a query is running.

## Extended Definition

The Explore query tracker shows query progress and timing details in the Explore UI; A progress bar appears in the Explore UI while a query is running.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)

## Supporting Pages

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-reference-required-6`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parquet export details BigQuery converts GoogleSQL data types to the following Parquet data types: BigQuery data type Parquet primitive type Parquet logical type Integer INT64 NONE Numeric FIXED LEN BYTE ARRAY DECIMAL (precision = 38, scale = 9) Numeric(P[, S]) FIXED LEN BYTE ARRAY DECIMAL (precision = P, scale = S) BigNumeric FIXED LEN BYTE ARRAY DECIMAL (precision = 76, scale = 38) BigNumeric(P[, S]) FIXED LEN BYTE ARRAY DECIMAL (precision = P, scale = S) Floating point FLOAT NONE Boolean BOOLEAN NONE String BYTE ARRAY STRING (UTF8) Bytes BYTE ARRAY NONE Date INT32 DATE Datetime INT64 TIMESTAMP (isAdjustedToUTC = false, unit = MICROS) Time INT64 TIME (isAdjustedToUTC = true, unit = MICROS) Timestamp INT64 TIMESTAMP (isAdjustedToUTC = false, unit = MICROS) Geography BYTE ARRAY GEOGRAPHY (edges = spherical) The Parquet schema represents nested data as a group and repeated records as repeated groups.
- The following example shows how to create a new processed table from an existing table called source table which requires n partitions to achieve the chosen file size: CREATE TABLE my dataset . processed table PARTITION BY RANGE BUCKET ( export id , GENERATE ARRAY ( 0 , n , 1 )) CLUSTER BY export id AS ( SELECT , CAST ( FLOOR ( n RAND ()) AS INT64 ) AS export id FROM my dataset . source table ); For each integer i between 0 and n-1 , run an EXPORT DATA statement on the following query: SELECT EXCEPT ( export id ) FROM my dataset . processed table WHERE export id = i ; Extract compressed table Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- The following Logs Explorer filter returns information about your extract jobs: resource.type="bigquery resource" protoPayload.methodName="jobservice.insert" (protoPayload.serviceData.jobInsertRequest.resource.jobConfiguration.query.query= "EXPORT" OR protoPayload.serviceData.jobCompletedEvent.eventName="extract job completed" OR protoPayload.serviceData.jobCompletedEvent.job.jobConfiguration.query.query= "EXPORT") Exceeded extract bytes per day quota error BigQuery returns this error when the extraction exceeds the default 50 TiB daily limit in a project.
- Go to the BigQuery page In the left pane, click explore Explorer : If you don't see the left pane, click last page Expand left pane to open the pane.

### Google Ads report transformation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)
- Source ID: `site-docs-reference-required-6`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AdWords reports (deprecated) BigQuery AdWords tables Google Ads tables Google Ads API resources (v22.0.0) BigQuery views Account Performance Report p Customer customer id p HourlyAccountConversionStats customer id p AccountConversionStats customer id p HourlyAccountStats customer id p AccountNonClickStats customer id p AccountBasicStats customer id p AccountStats customer id p ads Customer customer id p ads HourlyAccountConversionStats customer id p ads AccountConversionStats customer id p ads HourlyAccountStats customer id p ads AccountNonClickStats customer id p ads AccountBasicStats customer id p ads AccountStats customer id Customer Customer customer id HourlyAccountConversionStats customer id AccountConversionStats customer id HourlyAccountStats customer id AccountNonClickStats customer id AccountBasicStats customer id AccountStats customer id Ad Performance Report p AdBasicStats customer id p AdCrossDeviceStats customer id p AdConversionStats customer id p AdStats customer id p AdCrossDeviceConversionStats customer id p Ad customer id p ads AdBasicStats customer id p ads AdCrossDeviceStats customer id p ads AdConversionStats customer id p ads AdStats customer id p ads AdCrossDeviceConversionStats customer id p ads Ad customer id Ad Group Ad AdBasicStats customer id AdCrossDeviceStats customer id AdConversionStats customer id AdStats customer id AdCrossDeviceConversionStats customer id Ad customer id Adgroup Performance Report p AdGroupStats customer id p AdGroupBasicStats customer id p AdGroupCrossDeviceStats customer id p HourlyAdGroupConversionStats customer id p HourlyAdGroupStats customer id p AdGroupConversionStats customer id p AdGroupCrossDeviceConversionStats customer id p AdGroup customer id p ads AdGroupStats customer id p ads AdGroupBasicStats customer id p ads AdGroupCrossDeviceStats customer id p ads HourlyAdGroupConversionStats customer id p ads HourlyAdGroupStats customer id p ads AdGroupConversionStats customer id p ads AdGroupCrossDeviceConversionStats customer id p ads AdGroup customer id Ad Group AdGroupStats customer id AdGroupBasicStats customer id AdGroupCrossDeviceStats customer id HourlyAdGroupConversionStats customer id HourlyAdGroupStats customer id AdGroupConversionStats customer id AdGroupCrossDeviceConversionStats customer id AdGroup customer id Age Range Performance Report p AgeRange customer id p AgeRangeBasicStats customer id p AgeRangeStats customer id p AgeRangeConversionStats customer id p AgeRangeNonClickStats customer id p ads AgeRange customer id p ads AgeRangeBasicStats customer id p ads AgeRangeStats customer id p ads AgeRangeConversionStats customer id p ads AgeRangeNonClickStats customer id Age Range View AgeRange customer id AgeRangeBasicStats customer id AgeRangeStats customer id AgeRangeConversionStats customer id AgeRangeNonClickStats customer id Audience Performance Report p Audience customer id p AudienceConversionStats customer id p AudienceNonClickStats customer id p AudienceBasicStats customer id p AudienceStats customer id NULL NULL NULL NULL NULL Ad Group Audience View Campaign Audience View Audience customer id AudienceConversionStats customer id AudienceNonClickStats customer id AudienceBasicStats customer id AudienceStats customer id Bid Goal Performance Report p BidGoal customer id p BidGoalStats customer id p HourlyBidGoalStats customer id p BidGoalConversionStats customer id p ads BidGoal customer id p ads BidGoalStats customer id p ads HourlyBidGoalStats customer id p ads BidGoalConversionStats customer id Bidding Strategy BidGoal customer id BidGoalStats customer id HourlyBidGoalStats customer id BidGoalConversionStats customer id Budget Performance Report p Budget customer id p BudgetStats customer id p ads Budget customer id p ads BudgetStats customer id Campaign Budget Budget customer id BudgetStats customer id Campaign Location Target Report p CampaignLocationTargetStats customer id p LocationBasedCampaignCriterion customer id p ads CampaignLocationTargetStats customer id p ads LocationBasedCampaignCriterion customer id Location View CampaignLocationTargetStats customer id LocationBasedCampaignCriterion customer id Campaign Performance Report p Campaign customer id p CampaignBasicStats customer id p CampaignConversionStats customer id p CampaignCrossDeviceStats customer id p HourlyCampaignConversionStats customer id p CampaignStats customer id p HourlyCampaignStats customer id p CampaignCrossDeviceConversionStats customer id p CampaignCookieStats customer id p ads Campaign customer id p ads CampaignBasicStats customer id p ads CampaignConversionStats customer id p ads CampaignCrossDeviceStats customer id p ads HourlyCampaignConversionStats customer id p ads CampaignStats customer id p ads HourlyCampaignStats customer id p ads CampaignCrossDeviceConversionStats customer id p ads CampaignCookieStats customer id Campaign Campaign customer id CampaignBasicStats customer id CampaignConversionStats customer id CampaignCrossDeviceStats customer id HourlyCampaignConversionStats customer id CampaignStats customer id HourlyCampaignStats customer id CampaignCrossDeviceConversionStats customer id CampaignCookieStats customer id Click Performance Report p ClickStats customer id p ads ClickStats customer id Click View ClickStats customer id Criteria Performance Report p Criteria customer id p CriteriaBasicStats customer id p CriteriaStats customer id p CriteriaConversionStats customer id p CriteriaNonClickStats customer id NULL NULL NULL NULL NULL Criteria customer id CriteriaBasicStats customer id CriteriaStats customer id CriteriaConversionStats customer id CriteriaNonClickStats customer id Gender Performance Report p Gender customer id p GenderBasicStats customer id p GenderStats customer id p GenderConversionStats customer id p GenderNonClickStats customer id p ads Gender customer id p ads GenderBasicStats customer id p ads GenderStats customer id p ads GenderConversionStats customer id p ads GenderNonClickStats customer id Gender View Gender customer id GenderBasicStats customer id GenderStats customer id GenderConversionStats customer id GenderNonClickStats customer id Geo Performance Report p GeoConversionStats customer id p GeoStats customer id p ads GeoConversionStats customer id p ads GeoStats customer id Geographic View GeoConversionStats customer id GeoStats customer id Keywords Performance Report p Keyword customer id p KeywordBasicStats customer id p KeywordCrossDeviceStats customer id p KeywordStats customer id p KeywordCrossDeviceConversionStats customer id p KeywordConversionStats customer id p ads Keyword customer id p ads KeywordBasicStats customer id p ads KeywordCrossDeviceStats customer id p ads KeywordStats customer id p ads KeywordCrossDeviceConversionStats customer id p ads KeywordConversionStats customer id Keyword View Keyword customer id KeywordBasicStats customer id KeywordCrossDeviceStats customer id KeywordStats customer id KeywordCrossDeviceConversionStats customer id KeywordConversionStats customer id Paid Organic Query Report p PaidOrganicStats customer id p ads PaidOrganicStats customer id Paid Organic Search Term View PaidOrganicStats customer id Parental Status Performance Report p ParentalStatus customer id p ParentalStatusBasicStats customer id p ParentalStatusStats customer id p ParentalStatusConversionStats customer id p ParentalStatusNonClickStats customer id p ads ParentalStatus customer id p ads ParentalStatusBasicStats customer id p ads ParentalStatusStats customer id p ads ParentalStatusConversionStats customer id p ads ParentalStatusNonClickStats customer id Parental Status View ParentalStatus customer id ParentalStatusBasicStats customer id ParentalStatusStats customer id ParentalStatusConversionStats customer id ParentalStatusNonClickStats customer id Placement Performance Report p PlacementBasicStats customer id p PlacementNonClickStats customer id p PlacementStats customer id p Placement customer id p PlacementConversionStats customer id p ads PlacementBasicStats customer id p ads PlacementNonClickStats customer id p ads PlacementStats customer id p ads Placement customer id p ads PlacementConversionStats customer id Managed Placement View PlacementBasicStats customer id PlacementNonClickStats customer id PlacementStats customer id Placement customer id PlacementConversionStats customer id Search Query Performance Report p SearchQueryStats customer id p SearchQueryConversionStats customer id p ads SearchQueryStats customer id p ads SearchQueryConversionStats customer id Search Term View SearchQueryStats customer id SearchQueryConversionStats customer id Shopping Performance Report p ShoppingProductConversionStats customer id p ShoppingProductStats customer id p ads ShoppingProductConversionStats customer id p ads ShoppingProductStats customer id Shopping Performance View ShoppingProductConversionStats customer id ShoppingProductStats customer id Video Performance Report p VideoBasicStats customer id p VideoConversionStats customer id p VideoStats customer id p Video customer id p VideoNonClickStats customer id p ads VideoBasicStats customer id p ads VideoConversionStats customer id p ads VideoStats customer id p ads Video customer id p ads VideoNonClickStats customer id Video VideoBasicStats customer id VideoConversionStats customer id VideoStats customer id Video customer id VideoNonClickStats customer id AdGroupBidModifier Ad Group Bid Modifier AdGroupAdLabel Ad Group Ad Label CampaignLabel Campaign Label CampaignCriterion Campaign Criterion AdGroupLabel Ad Group Label AdGroupAudience AdGroupAudienceStats AdGroupAudienceConversionStats AdGroupAudienceNonClickStats AdGroupAudienceBasicStats Ad Group Audience View Assets (available if Pmax data is enabled) Assets AssetGroup (available if Pmax data is enabled) Asset Groups AssetGroupAsset (available if Pmax data is enabled) Asset Group Assets AssetGroupSignal (available if Pmax data is enabled) Asset Group Signal AssetGroupProductGroupStats (available if Pmax data is enabled) AssetGroupProductGroupStats CampaignAssetStats (available if Pmax data is enabled) CampaignAssetStats Column mapping for Google Ads reports The BigQuery tables created by a Google Ads transfer consist of the following columns (fields): Google Ads Table Name: AccountBasicStats Google Ads API Resource: customer Google Ads Field Name Description Adwords Mapped Field Name customer id The ID of the customer.
- OrganicImpressions metrics organic impressions per query The number of times a page from your site was listed in the unpaid search results (organic impressions) divided by the number of searches returning your site's listing in the unpaid results (organic queries).
- OrganicClicks metrics organic clicks per query The number of times someone clicked your site's listing in the unpaid results (organic clicks) divided by the total number of searches that returned pages from your site (organic queries).
- VideoId Google Ads Match Tables Google Ads Match Tables are tables that contain only Attribute fields (fields containing settings or other fixed data), and they are defined for users to query account structure information.

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can monitor resource-level transfers for individual tables to track progress, view granular error details, and query the state of specific resources being migrated.
- Migrate Apache Hive Metastore tables to Google Cloud This document shows you how to migrate your Iceberg and Hive tables managed by Apache Hive Metastore to Google Cloud using the BigQuery Data Transfer Service .
- You can see details like the following: Last transfer status : the current state of the resource based on the latest resource transfer, including completion progress.
- The service account should belong to the same Google Cloud project where the transfer configuration and destination dataset is created. bq To schedule Hive Metastore transfer, enter the bq mk command and supply the transfer creation flag --transfer config : bq mk --transfer config --data source = hadoop display name = ' TRANSFER NAME ' --service account name = ' SERVICE ACCOUNT ' --project id = ' PROJECT ID ' location = ' REGION ' --params = '{ "transfer strategy":" TRANSFER STRATEGY ", "table name patterns":" LIST OF TABLES ", "table metadata path":"gs:// DUMPER BUCKET /hive-dumper-output.zip", "target gcs file path":"gs:// MIGRATION BUCKET ", "metastore":" METASTORE ", "destination dataproc metastore":" DATAPROC METASTORE URL ", "destination bigquery dataset":" BIGLAKE METASTORE DATASET ", "translation output gcs path":"gs:// TRANSLATION OUTPUT BUCKET /metadata/config/default database/", "storage type":" STORAGE TYPE ", "agent pool name":" AGENT POOL NAME ", "aws access key id":" AWS ACCESS KEY ID ", "aws secret access key":" AWS SECRET ACCESS KEY ", "azure sas token":" AZURE SAS TOKEN ", "partition filter gcs path":" FILTER GCS PATH " }' Replace the following: TRANSFER NAME : the display name for the transfer configuration.

