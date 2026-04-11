---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.567Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery differential privacy"
feature_slug: "bigquery-differential-privacy"
latest_feature_date: "2024-04-05"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "differentially private query results"
  - "differential privacy in BigQuery"
  - "DP in BigQuery"
  - "BigQuery differential privacy"
  - "BQ differential privacy"
  - "epsilon"
  - "privacy budget"
---

# BigQuery differential privacy

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery differential privacy is now generally available for privacy-preserving data analysis.

## Extended Definition

BigQuery differential privacy enables differentially private query behavior for analysis by configuring a view-level differential privacy policy (via analysis rules on CREATE/ALTER VIEW) or applying per-query options with `WITH DIFFERENTIAL PRIVACY OPTIONS`. The feature uses the privacy parameters epsilon and delta, along with controls like `privacy unit column`, `max epsilon per query`, `epsilon budget`, `max groups contributed`, and related settings to bound query impact. Query outputs are noise-added based on those settings, and BigQuery tracks privacy budget usage so that once budget is exhausted the protected view can no longer be queried until updated or recreated.

## Evidence Summary

These pages collectively document how to define and modify differential privacy policies on BigQuery views, the supported epsilon/delta policy parameters and limits, and how query-level differential privacy options affect noisy aggregate results.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-root-2`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: It defines differential privacy analysis rules, including privacy-budget enforcement behavior, but does not discuss availability or broader differential privacy feature scope.

Evidence snippets:
- A privacy budget prevents any subscriber from querying shared data when the sum of all queries' epsilon or delta reaches the total epsilon or total delta value.
- You can define a differential privacy analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED }, "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: differential privacy policy : The differential privacy policy for the differential privacy analysis rule.
- You can change the differential privacy analysis rule for a view in a data clean room or with the ALTER VIEW statement: ALTER VIEW VIEW NAME SET OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED } } '' ' ) For more information about the values you can set for the privacy policies in the preceding syntax, see Define a differential privacy analysis rule for a view .
- ExamView GROUP BY test id ; -- Results will vary. / ---------+-------------------- test id average test score +---------+--------------------+ P91 512.627693163311 C83 506.01565971561649 U25 524.81202728847893 ---------+-------------------- / Warning: When a privacy budget is exhausted over one or multiple queries, the view can no longer be queried and must be updated or re-created.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Syntax: '{ "differential privacy policy": { "privacy unit column": value, "max epsilon per query": value, "epsilon budget": value, "delta per query": value, "delta budget": value, "max groups contributed": value } }' Parameters: differential privacy policy : The differential privacy policy for the view. privacy unit column : The column that represents the privacy unit column for differentially private queries on the view. value is a JSON string. max epsilon per query : The maximum amount of epsilon that can be specified for a differentially private query on the view. value is a JSON number from 0.001 to 1e+15. epsilon budget : The amount of epsilon that can be used in totality for all differentially private queries on the view. value is JSON number from 0.001 to 1e+15. delta per query : The maximum amount of delta that can be specified for a differentially private query on the view. value is a JSON number from 1e-15 to 1. delta budget : The amount of delta that can be used in totality for all differentially private queries on the view.
- Example: privacy policy='{"differential privacy policy": { "privacy unit column": "contributor id", "max epsilon per query": 0.01, "epsilon budget": 25.6, "delta per query": 0.005, "delta budget": 9.6, "max groups contributed": 2}}' join restriction policy A join restriction policy for the view.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Smaller epsilons and more noise will provide greater privacy protection. -- This gets the average number of items requested per professor and adds -- noise to the results SELECT WITH DIFFERENTIAL PRIVACY OPTIONS ( epsilon = 10 , delta = .01 , max groups contributed = 2 , privacy unit column = id ) item , AVG ( quantity , contribution bounds per group = > ( 0 , 100 )) AS average quantity FROM professors GROUP BY item ; -- These results will change each time you run the query. -- The scissors group was removed this time, but might not be -- removed the next time. / ----------+------------------+ item average quantity +----------+------------------+ pencil 38.5038356810269 pen 13.4725028762032 +----------+------------------ / Remove noise Removing noise removes privacy protection.
- Additionally, if implicit clamping is used for an aggregate differentially private function, then half of the function's epsilon is applied towards computing implicit bounds, and half of the function's epsilon is applied towards the differentially private aggregation itself. delta The delta differential privacy parameter represents the probability that any row fails to be epsilon -differentially private in the result of a differentially private query. max groups contributed The max groups contributed differential privacy parameter is a positive integer that, if specified, scales the noise and limits the number of groups that each entity can contribute to. max groups contributed is set by default, even if you don't specify it.
- When epsilon is high, noise is removed from the results. -- This gets the average number of items requested per professor and removes -- noise from the results SELECT WITH DIFFERENTIAL PRIVACY OPTIONS ( epsilon = 1e20 , delta = .01 , max groups contributed = 2 , privacy unit column = id ) item , AVG ( quantity , contribution bounds per group = > ( 0 , 100 )) AS average quantity FROM professors GROUP BY item ; / ----------+------------------+ item average quantity +----------+------------------+ pencil 40 pen 18.5 scissors 8 +----------+------------------ / In this example, max groups contributed is set to 2 because each professor contributes to at most two groups (that is, each has at most two distinct item values).
- SELECT WITH DIFFERENTIAL PRIVACY OPTIONS ( epsilon = 1e20 , delta = .01 , privacy unit column = id ) item , AVG ( quantity , contribution bounds per group = > ( 0 , 100 )) AS average quantity FROM professors GROUP BY item ; -- The privacy unit column 123 was only included in the pen group in this example. -- Noise was removed from this query for demonstration purposes only. / ----------+------------------+ item average quantity +----------+------------------+ pencil 40 pen 18.5 scissors 8 +----------+------------------ / Using aliases An alias is a temporary name given to a table, column, or expression present in a query.

