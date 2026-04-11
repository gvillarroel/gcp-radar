---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.663Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Differential privacy aggregate functions"
feature_slug: "differential-privacy-aggregate-functions"
latest_feature_date: "2023-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "differentially private PERCENTILE_CONT"
  - "differentially private AVG"
  - "differentially private SUM"
  - "differentially private COUNT"
  - "differential privacy aggregate functions"
  - "DP aggregate functions"
  - "differential privacy options"
  - "differential privacy"
---

# Differential privacy aggregate functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery added preview differential privacy support through aggregate functions including AVG, COUNT, SUM, and PERCENTILE_CONT.

## Extended Definition

In BigQuery, differential privacy aggregate queries are written with a `WITH DIFFERENTIAL PRIVACY OPTIONS (...)` clause on a query, which applies differential privacy transformations (including added noise) to aggregate output and can make results vary across runs. The referenced BigQuery function documentation defines differentially private aggregate functions under this clause, including `AVG`, `COUNT`, `SUM`, and percentile-style aggregation behavior, with tunable parameters such as `epsilon`, `delta`, `max groups contributed`, and `privacy unit column`.

## Evidence Summary

The pages collectively describe the differential privacy clause syntax, governing privacy parameters/policies, and the BigQuery standard SQL references for differentially private aggregate function behavior.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Smaller epsilons and more noise will provide greater privacy protection. -- This gets the average number of items requested per professor and adds -- noise to the results SELECT WITH DIFFERENTIAL PRIVACY OPTIONS ( epsilon = 10 , delta = .01 , max groups contributed = 2 , privacy unit column = id ) item , AVG ( quantity , contribution bounds per group = > ( 0 , 100 )) AS average quantity FROM professors GROUP BY item ; -- These results will change each time you run the query. -- The scissors group was removed this time, but might not be -- removed the next time. / ----------+------------------+ item average quantity +----------+------------------+ pencil 38.5038356810269 pen 13.4725028762032 +----------+------------------ / Remove noise Removing noise removes privacy protection.
- When epsilon is high, noise is removed from the results. -- This gets the average number of items requested per professor and removes -- noise from the results SELECT WITH DIFFERENTIAL PRIVACY OPTIONS ( epsilon = 1e20 , delta = .01 , max groups contributed = 2 , privacy unit column = id ) item , AVG ( quantity , contribution bounds per group = > ( 0 , 100 )) AS average quantity FROM professors GROUP BY item ; / ----------+------------------+ item average quantity +----------+------------------+ pencil 40 pen 18.5 scissors 8 +----------+------------------ / In this example, max groups contributed is set to 2 because each professor contributes to at most two groups (that is, each has at most two distinct item values).
- SELECT WITH DIFFERENTIAL PRIVACY OPTIONS ( epsilon = 1e20 , delta = .01 , privacy unit column = id ) item , AVG ( quantity , contribution bounds per group = > ( 0 , 100 )) AS average quantity FROM professors GROUP BY item ; -- The privacy unit column 123 was only included in the pen group in this example. -- Noise was removed from this query for demonstration purposes only. / ----------+------------------+ item average quantity +----------+------------------+ pencil 40 pen 18.5 scissors 8 +----------+------------------ / Using aliases An alias is a temporary name given to a table, column, or expression present in a query.
- ExamView GROUP BY test id ; Differential privacy clause WITH DIFFERENTIAL PRIVACY OPTIONS( privacy parameters ) privacy parameters : epsilon = expression , delta = expression , [ max groups contributed = expression ], privacy unit column = column name Description This clause lets you transform the results of a query with differentially private aggregations .

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: WEAK
- Re-rank rationale: Although differential privacy is covered, the page does not mention specific differential privacy aggregate functions or their preview status.

Evidence snippets:
- After you've created your view, briefly wait, and then run the following query: -- Error: Epsilon is too high: 1e+20, policy for table mydataset. -- ExamView allows max 10.01 SELECT WITH DIFFERENTIAL PRIVACY OPTIONS ( epsilon = 1e20 ) test id , AVG ( test score ) AS average test score FROM mydataset .
- SELECT WITH DIFFERENTIAL PRIVACY OPTIONS ( epsilon = 10 ) test id , AVG ( test score ) AS average test score FROM mydataset .
- You can define a differential privacy analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED }, "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: differential privacy policy : The differential privacy policy for the differential privacy analysis rule.
- You can change the differential privacy analysis rule for a view in a data clean room or with the ALTER VIEW statement: ALTER VIEW VIEW NAME SET OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED } } '' ' ) For more information about the values you can set for the privacy policies in the preceding syntax, see Define a differential privacy analysis rule for a view .

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Signature 2: Gets the differentially-private count of rows with a non- NULL expression in a query with a DIFFERENTIAL PRIVACY clause.
- Computes a differentially-private percentile across privacy unit columns in a query with a DIFFERENTIAL PRIVACY clause.
- Gets the differentially-private average of non- NULL , non- NaN values in a query with a DIFFERENTIAL PRIVACY clause.
- Gets the differentially-private sum of non- NULL , non- NaN values in a query with a DIFFERENTIAL PRIVACY clause.

