---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.404Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Fine-grained DML"
feature_slug: "fine-grained-dml"
latest_feature_date: "2024-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro"
keywords:
  - "fine"
  - "grained"
  - "dml"
  - "optimizes"
  - "execution"
  - "update"
  - "delete"
  - "merge"
---

# Fine-grained DML

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Fine-grained DML optimizes execution of UPDATE, DELETE, and MERGE statements on BigQuery tables.

## Extended Definition

Fine-grained DML optimizes execution of UPDATE, DELETE, and MERGE statements on BigQuery tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)

## Supporting Pages

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Fine-grained DML is a performance enhancement designed to optimize the execution of UPDATE , DELETE , and MERGE statements (also known as mutating DML statements).
- You can't create a table snapshot or table clone of a table with fine-grained DML enabled after executing an UPDATE , DELETE , or MERGE statement.
- You can't copy a table with fine-grained DML enabled after executing an UPDATE , DELETE , or MERGE statement.
- This approach is particularly useful, and often recommended, for very large tables with frequent fine-grained mutating DML operations, which otherwise would have high on-demand costs due to the large number of bytes processed when performing each offloaded deleted data processing job.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE VIEW statement is ignored. privacy policy The following policies are available in the privacy policy view option to create analysis rules .
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE TABLE statement is ignored. column option list Specify a column option list in the following format: NAME=VALUE, ...
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , and UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE SNAPSHOT TABLE statement is ignored.

### Introduction to data masking \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- Source ID: `site-docs-reference-5`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Roles for creating and managing data policies You need one of the following BigQuery roles to create and manage data policies: Role/ID Permissions Description BigQuery Data Policy Admin ( bigquerydatapolicy.admin ) BigQuery Admin ( bigquery.admin ) BigQuery Data Owner ( bigquery.dataOwner ) bigquery.dataPolicies.create bigquery.dataPolicies.delete bigquery.dataPolicies.get bigquery.dataPolicies.getIamPolicy bigquery.dataPolicies.list bigquery.dataPolicies.setIamPolicy bigquery.dataPolicies.update The bigquery.dataPolicies.create and bigquery.dataPolicies.list permissions apply at the project level.
- Role/ID Permissions Description Data Catalog Policy Tag Admin ( datacatalog.categoryAdmin ) datacatalog.categories.getIamPolicy datacatalog.categories.setIamPolicy datacatalog.taxonomies.create datacatalog.taxonomies.delete datacatalog.taxonomies.get datacatalog.taxonomies.getIamPolicy datacatalog.taxonomies.list datacatalog.taxonomies.setIamPolicy datacatalog.taxonomies.update resourcemanager.projects.get resourcemanager.projects.list Applies at the project level.
- The following results are returned: SSN Priority Lifetime value Creation date Email NULL "" Zmy9vydG5q= March 8, 1983 NULL NULL "" GhwTwq6Ynm= December 29, 2009 NULL NULL "" B6y7dsgaT9= July 14, 2021 NULL NULL "" Uh02hnR1sg= May 5, 1997 NULL All other users : Any user who does not belong to one of the listed groups gets an access denied error, because they haven't been granted the Data Catalog Fine-Grained Reader or BigQuery Masked Reader roles.
- The following results are returned: SSN Priority Lifetime value Creation date NULL 123-45-6789 "" 0 March 8, 1983 NULL 234-56-7891 "" 0 December 29, 2009 NULL 345-67-8912 "" 0 July 14, 2021 NULL 456-78-9123 "" 0 May 5, 1997 NULL sales-exec@example.com : This group has been granted the Data Catalog Fine-Grained Reader role on the Confidential policy tag.

