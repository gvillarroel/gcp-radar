---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.356Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Reservation-level IAM policies"
feature_slug: "reservation-level-iam-policies"
latest_feature_date: "2025-04-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
keywords:
  - "reservation"
  - "level"
  - "iam"
  - "policies"
  - "bigquery"
  - "now"
  - "lets"
  - "you"
---

# Reservation-level IAM policies

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now lets you set IAM policies directly on reservations for finer-grained resource control.

## Extended Definition

BigQuery now lets you set IAM policies directly on reservations for finer-grained resource control.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.rowAccessPolicies.delete The row-level access policy to delete. bigquery.rowAccessPolicies.setIamPolicy The row-level access policy to delete. bigquery.rowAccessPolicies.list The table to delete all row-level access policies on.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = "America/New York" , region-us.default job query timeout ms = 1800000 ); The following example sets the default time zone, the default query job timeout, the default Cloud KMS key to NULL , and the default interactive and batch queue timeouts and default sql dialect, clearing the project level default settings: ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL , region-us.default sql dialect option = NULL ); ALTER BI CAPACITY SET OPTIONS statement Sets the options on BigQuery BI Engine capacity.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery Storage API enforces row- and column-level governance policies on all data access to BigLake tables, including through connectors.
- Consider the following query as an example: SELECT FROM bigquery dataset . bigquery table AS clients WHERE clients . sales rep IN ( SELECT id FROM aws dataset . aws table1 AS employees INNER JOIN aws dataset . aws table2 AS active employees ON employees . id = active employees . id WHERE employees . level > 3 ); This example has two transfers: one from an employees table (with a level filter) and one from an active employees table.
- While using a shared slot pool incurs no extra cost, using BACKGROUND reservations instead provides more consistent performance by allocating a dedicated resource pool, and improves the reliability of refresh jobs and overall query efficiency in BigQuery.
- For example, the following diagram demonstrates how the BigQuery Storage API lets users access authorized data using open source query engines such as Apache Spark: For more information about connectors supported by BigQuery, see BigQuery connectors .

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- When you use decentralized authority, you maintain central control of security and BigQuery capacity by using Cloud Key Management Service (Cloud KMS) , column policies, VPC Service Controls, and reservations.
- This reservation is assigned to the top-level organization, and it gives slots to any BigQuery user who isn't using a project that has a dedicated reservation Data processing : 1000 slots, ignore idle.
- To ensure that tenant service level objectives (SLOs) are met, you can monitor reservations through Cloud Logging and the BigQuery information schema .
- If you are an SaaS vendor who has shared tenant infrastructure, we recommend that you dedicate each reservation to a single project and group tenants to share that project for BigQuery compute.

