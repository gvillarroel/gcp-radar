---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.669Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BI Engine preferred table update propagation optimization"
feature_slug: "bi-engine-preferred-table-update-propagation-optimization"
latest_feature_date: "2023-04-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "update propagation latency"
  - "update propagation"
  - "BI Engine cache refresh"
  - "preferred table updates"
  - "preferred table update"
  - "BI Engine reservations"
  - "preferred tables"
  - "BI Engine"
---

# BI Engine preferred table update propagation optimization

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery BI Engine now propagates updates to preferred tables for existing reservations in about ten seconds instead of five minutes.

## Extended Definition

BigQuery BI Engine supports modifying an existing BI Engine reservation through SQL DDL using `ALTER BI CAPACITY ... SET OPTIONS`, where one configurable option is `preferred tables` (an array of table names). This allows preferred tables acceleration scope to be updated on a reservation, but the provided excerpts do not explicitly document a specific update-propagation latency or timing optimization (such as 10 seconds vs. 5 minutes).

## Evidence Summary

The DDL reference shows how to alter BI Engine reservations and set `preferred tables` options, but does not include any explicit evidence of the cited propagation-latency optimization.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = "America/New York" , region-us.default job query timeout ms = 1800000 ); The following example sets the default time zone, the default query job timeout, the default Cloud KMS key to NULL , and the default interactive and batch queue timeouts and default sql dialect, clearing the project level default settings: ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL , region-us.default sql dialect option = NULL ); ALTER BI CAPACITY SET OPTIONS statement Sets the options on BigQuery BI Engine capacity.
- The following options are supported: NAME VALUE Details size gb INT64 Specifies the size of the reservation in gigabytes. preferred tables <ARRAY<STRING>> List of tables that acceleration should be applied to.
- Syntax ALTER BI CAPACITY project id.location id.default SET OPTIONS ( bi capacity options list ) Arguments project id : Optional project ID of the project that will benefit from BI Engine acceleration.

### "Package com.google.cloud.bigquery (2.62.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery)
- Source ID: `site-java-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Bi Engine Stats BIEngineStatistics contains query statistics specific to the use of BI Engine. com. google. cloud. bigquery.
- Bi Engine Reason com. google. cloud. bigquery.

### BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/introduction](https://docs.cloud.google.com/bigquery/docs/introduction)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Business intelligence tool support including BI Engine with Looker Studio , Looker , Google Sheets , and 3rd party tools like Tableau and Power BI.
- See also: BigQuery ML , BI Engine , and Data Transfer Service pricing.
- BI Engine : BigQuery's fast, in-memory analysis service.

