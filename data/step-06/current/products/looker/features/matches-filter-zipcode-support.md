---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.543Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "matches_filter zipcode support"
feature_slug: "matches-filter-zipcode-support"
latest_feature_date: "2023-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
  - "https://docs.cloud.google.com/looker/docs/additional-lookml-basics"
keywords:
  - "matches"
  - "filter"
  - "zipcode"
  - "custom"
  - "filters"
  - "now"
  - "type"
---

# matches_filter zipcode support

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Custom filters now support the zipcode data type in the matches_filter function.

## Extended Definition

Custom filters now support the zipcode data type in the matches_filter function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores](https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)

## Supporting Pages

### AND/OR Filters in Explores \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores](https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can customize filters with AND/OR logic when you add or edit a filter on an Explore.
- Important: Depending on the filter conditions, the AND or OR buttons may be unactionable, indicating that the logic cannot be switched. + Filter button — Select this option to add another filter in the same group. + New Group button — Select this option to create a new filter group . + Custom expression button — Select this option to create a custom expression manually using Lexp .
- For example, the following Explore filters contain two groups separated with OR logic: Orders Status is pending AND Users State is California OR Products Category is active AND Inventory Items Cost is <= 100 The resulting explore will show order data of pending orders in California OR orders that contain Active category goods costing less than or equal to 100 .
- AND/OR filters and required filters Required filters (for example, a filter that is required with the always filter parameter or conditionally filter parameter) always appear in the first filter group, or group A .

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The service account should belong to the same Google Cloud project where the transfer configuration and destination dataset is created. bq To schedule Hive Metastore transfer, enter the bq mk command and supply the transfer creation flag --transfer config : bq mk --transfer config --data source = hadoop display name = ' TRANSFER NAME ' --service account name = ' SERVICE ACCOUNT ' --project id = ' PROJECT ID ' location = ' REGION ' --params = '{ "transfer strategy":" TRANSFER STRATEGY ", "table name patterns":" LIST OF TABLES ", "table metadata path":"gs:// DUMPER BUCKET /hive-dumper-output.zip", "target gcs file path":"gs:// MIGRATION BUCKET ", "metastore":" METASTORE ", "destination dataproc metastore":" DATAPROC METASTORE URL ", "destination bigquery dataset":" BIGLAKE METASTORE DATASET ", "translation output gcs path":"gs:// TRANSLATION OUTPUT BUCKET /metadata/config/default database/", "storage type":" STORAGE TYPE ", "agent pool name":" AGENT POOL NAME ", "aws access key id":" AWS ACCESS KEY ID ", "aws secret access key":" AWS SECRET ACCESS KEY ", "azure sas token":" AZURE SAS TOKEN ", "partition filter gcs path":" FILTER GCS PATH " }' Replace the following: TRANSFER NAME : the display name for the transfer configuration.
- The following is an example of the filter JSON file structure: { "filters" : [ { "table" : "db1.table1" , "condition" : "IN" , "partition" : [ "partition1=value1/partition2=value2" ] }, { "table" : "db1.table2" , "condition" : "LESS THAN" , "partition" : [ "partition1;value1" ] }, { "table" : "db1.table3" , "condition" : "GREATER THAN" , "partition" : [ "partition1;value1" ] }, { "table" : "db1.table4" , "condition" : "RANGE" , "partition" : [ "partition1;value1;value2" ] } ] } Filter conditions The condition field in the JSON file supports the following values, each with a specific format for the partition array: IN : Specifies the exact partition paths to include.
- Optional: For Partition Filter gcs path , enter a full Cloud Storage path to a custom filter JSON file to filter partitions from source tables.
- You can transfer a subset of partitions from your Hive tables by providing a custom filter JSON file stored in Cloud Storage.

### Common LookML patterns \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- Source ID: `site-docs-reference-required-4`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code creates a set customers.detail and points both counts to the same set of fields. view: customers { set: detail { fields: [id, name, city] # creates named set customers.detail } measure: count { type: count drill fields: [detail ] # show fields in the set "customers.detail" } measure: in california count { type: count filters: [state: "California"] drill fields: [detail ] # show fields in the set "customers.detail" } } LookML sets are powerful in the following ways: Redeclaration of sets is additive.
- Initially, declaring these fields literally might seem sufficient: view: customers { measure: count { type: count drill fields: [id, name, city] } measure: in california count { type: count filters: [state: "California"] drill fields: [id, name, city] } } However, if you wanted to add a new field (such as customers.state ), you would have to edit both lists, unless you used the set parameter to create named sets that you can maintain in one place and use in multiple places.
- If you wanted a field that counted users from the EU, you could use something like this: measure: eu count { type: count # COUNT(CASE WHEN users.countrycode IN 'UK','FR','ES' THEN 1 ELSE NULL END) drill fields: [detail] filters: [users.countrycode: "UK,FR,ES"] } If you want to filter with a mathematical expression , be sure to enclose it in double quotes: measure: total orders above 100 dollars { type: sum # SUM(CASE WHEN order.value > 100 THEN order.value ELSE NULL END) sql: ${order.value} ;; drill fields: [detail] filters: [order.value: ">100"] } Percentages Many key performance indicators are expressed in the form of percentages, such as "the percent of items returned," "the percent of emails that resulted in a sale," or other instances of "the percent of X that Y." In LookML, the design pattern is to create counts for the two conditions and create a third field that computes the percentage between the two. dimension: returned { type: yesno } measure: count { # total count of items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] } measure: returned count { # count of returned items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] filters: [returned: "Yes"] } measure: percent returned { type: number sql: 100.0 ${returned count} / NULLIF(${count}, 0) ;; value format: "0.00" } Use the following format to compute percentages.
- If the user didn't filter on any of those fields, Looker will automatically add a filter of 1 day on orders.created time . filters: [orders.created time: "1 day"] unless: [created date, shipped time, shipped date, orders.id, customer.name] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

