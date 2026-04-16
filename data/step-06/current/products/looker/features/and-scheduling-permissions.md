---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.484Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "and scheduling permissions"
feature_slug: "and-scheduling-permissions"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transfer"
keywords:
  - "scheduling"
  - "permissions"
  - "looker"
  - "connector"
  - "supports"
  - "export"
  - "download"
---

# and scheduling permissions

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker connector supports export, download, and scheduling permissions.

## Extended Definition

The Looker connector supports export, download, and scheduling permissions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)

## Supporting Pages

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-reference-required-6`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Each of the following predefined IAM roles includes the bigquery.tables.export permission: roles/bigquery.dataViewer roles/bigquery.dataOwner roles/bigquery.dataEditor roles/bigquery.admin Permissions to run an extract job To run an extract job , you need the bigquery.jobs.create IAM permission.
- Permissions to export data from a BigQuery table To export data from a BigQuery table, you need the bigquery.tables.export IAM permission.
- Export formats and compression types BigQuery supports the following data formats and compression types for exported data.
- When set to true , header rows are printed to the exported data if the data format supports headers.

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- The Hive Metastore migration connector supports files stored in the following data sources: Apache Hadoop Distributed File System (HDFS) Amazon Simple Storage Service (Amazon S3) Azure Blob Storage or Azure Data Lake Storage Gen2 With the Hive Metastore migration connector, you can use Cloud Storage as the file storage and register your Hive Metastore tables with one of the following metastores: BigLake metastore Iceberg REST Catalog We recommend using the BigLake metastore Iceberg REST Catalog for all your Iceberg data.
- This connector supports both Hive and Iceberg tables from on-premises installations and cloud environments, including Cloudera setups.
- This connector supports both full and metadata-only transfers.
- The 'Dumper execution: SUCCEEDED' message was not found." return 1 # Failure fi } --- Main Script Logic --- log " Script Start " log "Dumper Executable: ${ DUMPER EXECUTABLE } " log "Cloud Storage Base Path: ${ GCS BASE PATH } " log "Local Base Directory: ${ LOCAL BASE DIR } " Use an array to build the command safely dumper command args =( "--connector" "hiveql" "--output" " ${ LOCAL ZIP PATH } " ) Add optional arguments if they are provided if [[ -n " ${ DUMPER HOST } " ]] ; then dumper command args +=( "--host" " ${ DUMPER HOST } " ) log "Using Host: ${ DUMPER HOST } " fi if [[ -n " ${ DUMPER PORT } " ]] ; then dumper command args +=( "--port" " ${ DUMPER PORT } " ) log "Using Port: ${ DUMPER PORT } " fi if [[ -n " ${ HIVE KERBEROS URL } " ]] ; then dumper command args +=( "--hive-kerberos-url" " ${ HIVE KERBEROS URL } " ) log "Using Hive Kerberos URL: ${ HIVE KERBEROS URL } " fi if [[ -n " ${ HIVEQL RPC PROTECTION } " ]] ; then dumper command args +=( "-Dhiveql.rpc.protection= ${ HIVEQL RPC PROTECTION } " ) log "Using HiveQL RPC Protection: ${ HIVEQL RPC PROTECTION } " fi log "Starting dumper tool execution..." log "COMMAND: JAVA OPTS=\"-Djavax.security.auth.useSubjectCredsOnly=false\" ${ DUMPER EXECUTABLE } ${ dumper command args [ ] } " JAVA OPTS = "-Djavax.security.auth.useSubjectCredsOnly=false" " ${ DUMPER EXECUTABLE } " " ${ dumper command args [@] } " >> " ${ LOG FILE } " 2 > & 1 log "Dumper process finished." Validate the output from the dumper execution for success or failure. validate dumper output " ${ LOG FILE } " Upload the ZIP file to Cloud Storage gcs zip path = " ${ GCS BASE PATH } / ${ ZIP FILE NAME } " log "Uploading ${ LOCAL ZIP PATH } to ${ gcs zip path } ..." if [ ! -f " ${ LOCAL ZIP PATH } " ] ; then log "ERROR: Expected ZIP file ${ LOCAL ZIP PATH } not found after dumper execution." The script will exit here with an error code, and the trap will run. exit 1 fi gsutil cp " ${ LOCAL ZIP PATH } " " ${ gcs zip path } " >> " ${ LOG FILE } " 2 > & 1 log "Upload to Cloud Storage successful." The script will now exit with code 0.

### Load Google Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you trigger a manual transfer, Match Table snapshots for the following tables are not updated: Ad AdGroup AdGroupAudience AdGroupBidModifier AdGroupAdLabel AdGroupCriterion AdGroupCriterionLabel AdGroupLabel AgeRange Asset AssetGroup AssetGroupAsset AssetGroupListingGroupFilter AssetGroupSignal Audience BidGoal Budget Campaign CampaignAudience CampaignCriterion CampaignLabel Customer Gender Keyword LocationBasedCampaignCriterion ParentalStatus Placement Video Custom reports The BigQuery Data Transfer Service for Google Ads connector also supports the use of custom reports using Google Ads Query Language (GAQL) queries in the Google Ads transfer configuration.
- Data transfer options Support Supported reports The Google Ads connector supports the transfer of data from the reports in Google Ads API v22 .
- Connector overview The BigQuery Data Transfer Service for the Google Ads connector supports the following options for your data transfer.
- Performance Max (PMax) campaigns The Google Ads connector lets you export PMax campaigns data.

