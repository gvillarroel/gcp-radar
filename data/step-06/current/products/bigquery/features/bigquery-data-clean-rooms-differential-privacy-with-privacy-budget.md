---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.568Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Clean Rooms differential privacy with privacy budget"
feature_slug: "bigquery-data-clean-rooms-differential-privacy-with-privacy-budget"
latest_feature_date: "2024-04-04"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "privacy budget in DCR"
  - "analysis rule privacy budget"
  - "epsilon budget"
  - "DP budget"
  - "differential privacy in clean rooms"
  - "privacy budget enforcement"
  - "differential privacy analysis rules"
---

# BigQuery Data Clean Rooms differential privacy with privacy budget

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery Data Clean Rooms now support differential privacy with privacy budgeting in analysis rule enforcement.

## Extended Definition

BigQuery Data Clean Rooms can enforce differential privacy on views through analysis rules by setting a `privacy policy` option in `CREATE OR REPLACE VIEW` or `ALTER VIEW` statements. The differential privacy policy for a view specifies a `privacy unit column`, per-query bounds (`max epsilon per query`, `max delta per query`), total budgets (`epsilon budget`, `delta budget`), and `max groups contributed`, which apply to differentially private queries on that view. The referenced SQL DDL definitions also document accepted value formats/ranges for these parameters.

## Evidence Summary

The provided BigQuery docs confirm that differential privacy analysis rules are configured on clean-room views via SQL privacy policy JSON and define the key budget-related control parameters and constraints.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-root-2`
- Final score: 56
- Re-rank relevance: STRONG
- Re-rank rationale: The differential privacy analysis rule is explicitly described as enforceable in clean room contexts with a privacy budget limit.

Evidence snippets:
- You can define a differential privacy analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED }, "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: differential privacy policy : The differential privacy policy for the differential privacy analysis rule.
- You can change the differential privacy analysis rule for a view in a data clean room or with the ALTER VIEW statement: ALTER VIEW VIEW NAME SET OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED } } '' ' ) For more information about the values you can set for the privacy policies in the preceding syntax, see Define a differential privacy analysis rule for a view .
- StudentTable AS ( SELECT "Hansen" AS last name , 510 AS test score UNION ALL SELECT "Wang" , 500 UNION ALL SELECT "Devi" , 580 UNION ALL SELECT "Ivanov" , 490 UNION ALL SELECT "Silva" , 550 ); Limitations Analysis rules have the following limitations: If you've already added an analysis rule to a view, you can't switch between aggregation threshold analysis rules and differential privacy analysis rules.
- ExamView SET OPTIONS ( privacy policy = '{"differential privacy policy": {"privacy unit column": "last name", "max epsilon per query": 0.01, "epsilon budget": 1000.0, "delta per query": 0.05, "delta budget": 0.1, "max groups contributed": 2}}' ); -- NOTE: Delta and epsilon parameters are set very high due to the small -- dataset.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Syntax: '{ "differential privacy policy": { "privacy unit column": value, "max epsilon per query": value, "epsilon budget": value, "delta per query": value, "delta budget": value, "max groups contributed": value } }' Parameters: differential privacy policy : The differential privacy policy for the view. privacy unit column : The column that represents the privacy unit column for differentially private queries on the view. value is a JSON string. max epsilon per query : The maximum amount of epsilon that can be specified for a differentially private query on the view. value is a JSON number from 0.001 to 1e+15. epsilon budget : The amount of epsilon that can be used in totality for all differentially private queries on the view. value is JSON number from 0.001 to 1e+15. delta per query : The maximum amount of delta that can be specified for a differentially private query on the view. value is a JSON number from 1e-15 to 1. delta budget : The amount of delta that can be used in totality for all differentially private queries on the view.
- Example: privacy policy='{"differential privacy policy": { "privacy unit column": "contributor id", "max epsilon per query": 0.01, "epsilon budget": 25.6, "delta per query": 0.005, "delta budget": 9.6, "max groups contributed": 2}}' join restriction policy A join restriction policy for the view.

