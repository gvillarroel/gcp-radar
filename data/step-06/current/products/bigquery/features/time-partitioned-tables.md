---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.914Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Time-partitioned tables"
feature_slug: "time-partitioned-tables"
latest_feature_date: "2016-06-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/hadoop-metadata"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset"
keywords:
  - "time"
  - "partitioned"
  - "tables"
  - "bigquery"
  - "supports"
  - "organizing"
  - "partitions"
---

# Time-partitioned tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports time-partitioned tables for organizing data by time partitions.

## Extended Definition

BigQuery supports time-partitioned tables for organizing data by time partitions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset)

## Supporting Pages

### "Extracting metadata from Apache Hive for migration \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- Source ID: `site-api-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Note: To get support or provide feedback for this feature, contact bigquery-permission-migration-support@google.com .

### Authorize a BigQuery Dataset \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset)
- Source ID: `site-docs-reference-required-15`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Only views target types are supported for now. @param source project id [String] The ID of the source Google Cloud project. @param source database id [String] The ID of the source database. @param user project id [String] The ID of the user Google Cloud project. @param user database id [String] The ID of the user database. @param target types [Array<String>] List of target types for authorization. def authorized dataset source project id :, source database id :, user project id :, user database id :, target types : Initialize client and get source dataset's references source bigquery = Google :: Cloud :: Bigquery . new project id : source project id source dataset = source bigquery . dataset source database id Initialize client and get user dataset's references user bigquery = Google :: Cloud :: Bigquery . new project id : user project id user dataset = user bigquery . dataset user database id Add the user dataset's DatasetAccessEntry object to the existing source dataset rules source dataset . access do access access . add reader dataset user dataset . build access entry ( target types : target types ) end puts "Dataset #{ user dataset . dataset id } added as authorized dataset in dataset #{ source dataset . dataset id } " end What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- DatasetAclEntity ( userDatasetId , targetTypes ); sourceDatasetAcl . add ( Acl . of ( userDatasetAclEntity )); // update the source dataset with user dataset's ACL Dataset updatedSourceDataset = sourceDataset . toBuilder (). setAcl ( sourceDatasetAcl ). build (). update (); System . out . printf ( "Dataset %s updated with the added authorization\n" , updatedSourceDataset . getDatasetId ()); } catch ( BigQueryException e ) { System . out . println ( "Dataset Authorization failed due to error: \n" + e ); } } } Ruby Before trying this sample, follow the Ruby setup instructions in the BigQuery quickstart using client libraries .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); // Get both source and user dataset's references Dataset sourceDataset = bigquery . getDataset ( sourceDatasetId ); Dataset userDataset = bigquery . getDataset ( userDatasetId ); // Get the source dataset's ACL List<Acl> sourceDatasetAcl = new ArrayList <> ( sourceDataset . getAcl ()); // Add the user dataset's DatasetAccessEntry object to the existing sourceDatasetAcl List<String> targetTypes = ImmutableList . of ( "VIEWS" ); Acl .
- String projectId = "PROJECT ID" ; String sourceDatasetName = "BIGQUERY SOURCE DATASET NAME" ; String userDatasetName = "BIGQUERY USER DATASET NAME" ; authorizeDataset ( DatasetId . of ( projectId , sourceDatasetName ), DatasetId . of ( projectId , userDatasetName )); } // This method will update sourceDataset's ACL with userDataset's ACL public static void authorizeDataset ( DatasetId sourceDatasetId , DatasetId userDatasetId ) { try { // Initialize client that will be used to send requests.

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Table pricing When you create and use partitioned tables in BigQuery, your charges are based on how much data is stored in the partitions and on the queries you run against the data: For information on storage pricing, see Storage pricing .
- Ingestion time partitioning When you create a table partitioned by ingestion time, BigQuery automatically assigns rows to partitions based on the time when BigQuery ingests the data.
- Quotas and limits for jobs against partitioned tables Quotas and limits also apply to the different types of jobs you can run against partitioned tables, including: Loading data (load jobs) Exporting data (extract jobs) Querying data (query jobs) Copying tables (copy jobs) Number of partition modifications for column-partitioned tables quota errors BigQuery returns this error when your column-partitioned table reaches the quota of the number of partition modifications permitted per day.
- For best practices for controlling costs in BigQuery, see Controlling costs in BigQuery Table security Access control for partitioned tables is the same as access control for standard tables.

