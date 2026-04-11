---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.569Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Clean Rooms list overlap control"
feature_slug: "bigquery-data-clean-rooms-list-overlap-control"
latest_feature_date: "2024-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
keywords:
  - "clean room overlap control"
  - "overlap threshold"
  - "overlap analysis rule"
  - "list overlap constraints"
  - "list overlap control"
  - "overlap limit"
  - "overlap control"
---

# BigQuery Data Clean Rooms list overlap control

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Clean Rooms now enforce list overlap constraints through analysis rules.

## Extended Definition

BigQuery Data Clean Rooms support a **list overlap analysis rule**, implemented as a join restriction policy on a view’s `privacy policy`, that defines constraints for how joins are performed. The rule can require a join operation and/or specify allowed join columns, and queries that do not meet these constraints are blocked. The rule can be created or changed on a view in a data clean room using `CREATE OR REPLACE VIEW ... OPTIONS (privacy policy = ...)` or `ALTER VIEW ... SET OPTIONS (privacy policy = ...)`.

## Evidence Summary

The page defines and demonstrates list overlap analysis rules (join restriction policies) and shows how to enforce and update them via view DDL in BigQuery Data Clean Rooms.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)

## Supporting Pages

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- ExamView ; Block a query with no join operation and no required column If the query must have a join operation and the join operation must have at least one required column, include the following parts in your list overlap analysis rule: "join restriction policy" : { "join condition" : "JOIN NOT REQUIRED" , "join allowed columns" : [ "column name" , ... ] } Example: In the following query, the query is blocked because the join operation does not include a column in the ExamView join allowed columns array: -- Create a view that includes a table called ExamTable.
- Block a query with no join operation If the query must have a join operation, you can block the query if no join operation is present by using one of the following list overlap analysis rules: "join restriction policy" : { "join condition" : "JOIN NOT REQUIRED" } "join restriction policy" : { "join condition" : "JOIN NOT REQUIRED" , "join allowed columns" : [] } Example: In the following query, the query is blocked because there is no join operation with ExamView in the query: -- Create a view that includes a table called ExamTable.
- ExamTable ); Update a list overlap analysis rule for a view You can change the list overlap analysis rule for a view with a data clean room or with the ALTER VIEW statement: ALTER VIEW VIEW NAME SET OPTIONS ( privacy policy = ' '' { "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) For more information about the values you can set for the privacy policy in the preceding syntax, see Define a list overlap analysis rule for a view .
- Define a list overlap analysis rule for a view You can define a list overlap analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: join restriction policy : The join restriction policy for the list overlap analysis rule.

