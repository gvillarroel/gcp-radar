---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.569Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Clean Rooms join restriction enforcement"
feature_slug: "bigquery-data-clean-rooms-join-restriction-enforcement"
latest_feature_date: "2024-04-04"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "join restriction enforcement"
  - "clean room join controls"
  - "join restrictions"
  - "join restriction"
  - "join guardrails"
  - "analysis rule join control"
  - "join controls"
---

# BigQuery Data Clean Rooms join restriction enforcement

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery Data Clean Rooms now allow join restrictions to be enforced via analysis rules.

## Extended Definition

BigQuery allows join-restriction enforcement on views through analysis rules by embedding a `join restriction policy` inside the view’s `privacy policy` when using `CREATE VIEW`/`CREATE OR REPLACE VIEW` in Data Clean Rooms. The policy defines a `join condition` (for example `JOIN ANY`, `JOIN ALL`, or `JOIN NOT REQUIRED`) and an optional `join allowed columns` list, and BigQuery enforces these constraints by blocking queries that do not satisfy the required join behavior (such as missing joins or missing required joined columns).

## Evidence Summary

The analysis-rules page shows join restriction policies used with Data Clean Room analysis rules, while the DDL reference page defines the policy syntax and supported join-condition values.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- You can define a differential privacy analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED }, "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: differential privacy policy : The differential privacy policy for the differential privacy analysis rule.
- Define an aggregation threshold analysis rule for a view You can define an aggregation threshold analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "aggregation threshold policy": { "threshold" : THRESHOLD , "privacy unit column": " PRIVACY UNIT COLUMN " }, "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: aggregation threshold policy : The aggregation threshold policy for the aggregation threshold analysis rule.
- ExamView ; Block a query with no join operation and no required column If the query must have a join operation and the join operation must have at least one required column, include the following parts in your list overlap analysis rule: "join restriction policy" : { "join condition" : "JOIN NOT REQUIRED" , "join allowed columns" : [ "column name" , ... ] } Example: In the following query, the query is blocked because the join operation does not include a column in the ExamView join allowed columns array: -- Create a view that includes a table called ExamTable.
- Block a query with no join operation If the query must have a join operation, you can block the query if no join operation is present by using one of the following list overlap analysis rules: "join restriction policy" : { "join condition" : "JOIN NOT REQUIRED" } "join restriction policy" : { "join condition" : "JOIN NOT REQUIRED" , "join allowed columns" : [] } Example: In the following query, the query is blocked because there is no join operation with ExamView in the query: -- Create a view that includes a table called ExamTable.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Syntax: '{ "join restriction policy": { "join condition": value, "join allowed columns": value } }' Parameters: join restriction policy : The join restriction policy for the view. join condition : The type of join condition to enforce on the view. value can be one of the following JSON strings: JOIN ALL : All columns in join allowed columns must be inner joined upon for this view to be queried.
- Example: privacy policy='{"differential privacy policy": { "privacy unit column": "contributor id", "max epsilon per query": 0.01, "epsilon budget": 25.6, "delta per query": 0.005, "delta budget": 9.6, "max groups contributed": 2}}' join restriction policy A join restriction policy for the view.
- Example: privacy policy='{"join restriction policy": { "join condition": 'JOIN ANY', "join allowed columns": ['col1', 'col2']}}' Note: Time travel is disabled on any view that has a policy.

