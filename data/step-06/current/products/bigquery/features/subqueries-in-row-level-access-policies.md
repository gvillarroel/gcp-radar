---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.561Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Subqueries in row-level access policies"
feature_slug: "subqueries-in-row-level-access-policies"
latest_feature_date: "2024-04-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "RLS subquery"
  - "row access policy subquery"
  - "policy filter subquery"
  - "subquery in access policy"
  - "subquery expression"
  - "row-level security condition"
  - "CREATE ROW ACCESS POLICY"
  - "row-level access policies"
---

# Subqueries in row-level access policies

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports using subqueries within row-level access policies.

## Extended Definition

BigQuery row-level access policies are managed through DDL, including the `CREATE ROW ACCESS POLICY` statement to create or replace a policy for a table. The same DDL documentation also defines operations and required IAM permissions for listing, deleting, and modifying row-level access policies. Based on the provided excerpts, subquery support inside row-level access policy predicates is not explicitly shown, so that specific capability is not directly evidenced here.

## Evidence Summary

The cited BigQuery DDL reference confirms row-level access policy lifecycle commands and permission requirements, but does not explicitly document subquery usage in row-level access policy expressions.

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

