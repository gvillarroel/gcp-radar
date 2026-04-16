---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.542Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Lexp matches_filter field type support"
feature_slug: "lexp-matches-filter-field-type-support"
latest_feature_date: "2023-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field"
  - "https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores"
keywords:
  - "lexp"
  - "matches"
  - "filter"
  - "field"
  - "type"
  - "expression"
  - "now"
  - "supports"
---

# Lexp matches_filter field type support

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Lexp matches_filter expression now supports tier, location, and zip code field types.

## Extended Definition

The Lexp matches_filter expression now supports tier, location, and zip code field types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field)
- [https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores](https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores)

## Supporting Pages

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is an example of the filter JSON file structure: { "filters" : [ { "table" : "db1.table1" , "condition" : "IN" , "partition" : [ "partition1=value1/partition2=value2" ] }, { "table" : "db1.table2" , "condition" : "LESS THAN" , "partition" : [ "partition1;value1" ] }, { "table" : "db1.table3" , "condition" : "GREATER THAN" , "partition" : [ "partition1;value1" ] }, { "table" : "db1.table4" , "condition" : "RANGE" , "partition" : [ "partition1;value1;value2" ] } ] } Filter conditions The condition field in the JSON file supports the following values, each with a specific format for the partition array: IN : Specifies the exact partition paths to include.
- The Table name filter supports wildcard matching—for example, using —but wildcard matching isn't supported for other filter fields.
- This field supports RE2 regular expression to specify tables.
- The service account should belong to the same Google Cloud project where the transfer configuration and destination dataset is created. bq To schedule Hive Metastore transfer, enter the bq mk command and supply the transfer creation flag --transfer config : bq mk --transfer config --data source = hadoop display name = ' TRANSFER NAME ' --service account name = ' SERVICE ACCOUNT ' --project id = ' PROJECT ID ' location = ' REGION ' --params = '{ "transfer strategy":" TRANSFER STRATEGY ", "table name patterns":" LIST OF TABLES ", "table metadata path":"gs:// DUMPER BUCKET /hive-dumper-output.zip", "target gcs file path":"gs:// MIGRATION BUCKET ", "metastore":" METASTORE ", "destination dataproc metastore":" DATAPROC METASTORE URL ", "destination bigquery dataset":" BIGLAKE METASTORE DATASET ", "translation output gcs path":"gs:// TRANSLATION OUTPUT BUCKET /metadata/config/default database/", "storage type":" STORAGE TYPE ", "agent pool name":" AGENT POOL NAME ", "aws access key id":" AWS ACCESS KEY ID ", "aws secret access key":" AWS SECRET ACCESS KEY ", "azure sas token":" AZURE SAS TOKEN ", "partition filter gcs path":" FILTER GCS PATH " }' Replace the following: TRANSFER NAME : the display name for the transfer configuration.

### Update select fields on an alert \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Datatype Description (object) Alert applied dashboard filters AlertAppliedDashboardFilter [] Expand AlertAppliedDashboardFilter definition... filter title string Field Title.
- 400: Bad Request Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 403: Permission Denied Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 404: Not Found Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 422: Validation Error Datatype Description (object) ValidationError message lock string Error details errors ValidationErrorDetail [] Expand ValidationErrorDetail definition... field lock string Field with error code lock string Error code message lock string Error info message documentation url lock string Documentation link documentation url lock string Documentation link 429: Too Many Requests Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Version 4.0.26.6 (latest) Update select alert fields Available fields: owner id , is disabled , disabled reason , is public , threshold , enhancements Request PATCH /alerts/{alert id} Datatype Description Request HTTP Request path HTTP Path Expand HTTP Path definition... alert id string ID of an alert body HTTP Body Expand HTTP Body definition... body AlertPatch Alert Expand AlertPatch definition... owner id string New owner ID of the alert is disabled boolean Set alert enabled or disabled disabled reason string The reason this alert is disabled is public boolean Set alert public or private threshold number New threshold value enhancements string Enum of additional alert properties.
- Integration action hub form params json string Action hub form params json for the 'action hub' type IntegrationParam field AlertField The field the alert threshold is compared against when determining when to send notifications Expand AlertField definition... title string Field's title.

### AND/OR Filters in Explores \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores](https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Important: Depending on the filter conditions, the AND or OR buttons may be unactionable, indicating that the logic cannot be switched. + Filter button — Select this option to add another filter in the same group. + New Group button — Select this option to create a new filter group . + Custom expression button — Select this option to create a custom expression manually using Lexp .
- Filter section options When you add more than one filter, the option to specify between AND and OR filter logic and switch between them appears to the left of the filter fields.
- AND/OR filters on dashboards AND/OR filters are created in the Explore Filters section and are translated into Looker expressions before the query is run.
- To add multiple filter conditions to a field that is referenced by a required filter, click the Add button add next to each condition.

