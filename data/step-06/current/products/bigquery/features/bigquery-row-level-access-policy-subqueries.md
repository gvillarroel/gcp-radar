---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.446Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery row-level access policy subqueries"
feature_slug: "bigquery-row-level-access-policy-subqueries"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "RLP subquery"
  - "subquery in row access policy"
  - "row access subquery"
  - "row access policy condition"
  - "policy filter expression"
  - "CREATE ROW ACCESS POLICY"
  - "row-level access policies"
---

# BigQuery row-level access policy subqueries

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery row-level access policies now support the use of subqueries.

## Extended Definition

BigQuery row-level access policies are managed through GoogleSQL DDL, including creating or replacing a policy with CREATE ROW ACCESS POLICY and deleting policies with DROP ROW ACCESS POLICY or DROP ALL ROW ACCESS POLICIES. The DDL reference also documents the IAM permissions needed to run these operations (for example, bigquery.jobs.create and row-access-policy permissions such as bigquery.rowAccessPolicies.delete/list/setIamPolicy). The provided excerpts confirm DDL lifecycle and permissions support, but they do not explicitly show subquery syntax or validation for subqueries inside row-access policy conditions.

## Evidence Summary

The cited page confirms BigQuery supports DDL commands for creating and dropping row-level access policies and specifies required permissions, but does not explicitly document subquery-based policy conditions.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.rowAccessPolicies.delete The row-level access policy to delete. bigquery.rowAccessPolicies.setIamPolicy The row-level access policy to delete. bigquery.rowAccessPolicies.list The table to delete all row-level access policies on.
- Examples Delete a row-level access policy from a table: DROP ROW ACCESS POLICY my row filter ON project . dataset . my table ; Delete all the row-level access policies from a table: DROP ALL ROW ACCESS POLICIES ON project . dataset . my table ; DROP CAPACITY statement Deletes a capacity commitment.
- SelectFromTablesAndAppend ( CURRENT DATE (), rows added ); SELECT FORMAT ( 'Added %d rows' , rows added ); CREATE ROW ACCESS POLICY statement Creates or replaces a row-level access policy .

