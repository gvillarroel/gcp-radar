---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.638Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery IAM deny policies for row access policies"
feature_slug: "bigquery-iam-deny-policies-for-row-access-policies"
latest_feature_date: "2023-08-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "RAP deny policy"
  - "row-level access policy deny"
  - "deny policy for row access"
  - "UPDATE ROW ACCESS POLICY"
  - "DROP ROW ACCESS POLICY"
  - "ALTER ROW ACCESS POLICY"
  - "CREATE ROW ACCESS POLICY"
  - "IAM policy update"
---

# BigQuery IAM deny policies for row access policies

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added deny policies for principals on row access policy creation, deletion, update, and IAM policy updates.

## Extended Definition

BigQuery DDL includes statements to manage row-level access policies, including creating or replacing and deleting them (for example, CREATE OR REPLACE ROW ACCESS POLICY and DROP ROW ACCESS POLICY, with optional IF EXISTS and DROP ALL variants). The provided documentation excerpts do not explicitly document IAM-style deny policies applied to principals for row access policy operations or IAM policy updates, so that part of the feature is only weakly evidenced here.

## Evidence Summary

The cited BigQuery DDL reference defines row access policy DDL syntax and examples (CREATE/ALTER/DROP ROW ACCESS POLICY), but does not explicitly confirm IAM deny-policy semantics for row access policy creation, update, deletion, or IAM policy updates.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Syntax DROP ROW ACCESS POLICY [ IF EXISTS ] row access policy name ON table name ; DROP ALL ROW ACCESS POLICIES ON table name ; Arguments IF EXISTS : If no row-level access policy exists with that name, the statement has no effect. row access policy name : The name of the row-level access policy that you are deleting.
- Examples Delete a row-level access policy from a table: DROP ROW ACCESS POLICY my row filter ON project . dataset . my table ; Delete all the row-level access policies from a table: DROP ALL ROW ACCESS POLICIES ON project . dataset . my table ; DROP CAPACITY statement Deletes a capacity commitment.
- SelectFromTablesAndAppend ( CURRENT DATE (), rows added ); SELECT FORMAT ( 'Added %d rows' , rows added ); CREATE ROW ACCESS POLICY statement Creates or replaces a row-level access policy .
- DROP PROCEDURE other-project . sample dataset . myprocedure ; DROP ROW ACCESS POLICY statement Deletes a row-level access policy.

