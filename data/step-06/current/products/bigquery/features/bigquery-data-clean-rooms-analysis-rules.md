---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.568Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Clean Rooms analysis rules"
feature_slug: "bigquery-data-clean-rooms-analysis-rules"
latest_feature_date: "2024-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
keywords:
  - "clean room rule configuration"
  - "clean room rules"
  - "analysis rule enforcement"
  - "DCR rules"
  - "Data Clean Rooms analysis rules"
  - "rule-based controls"
  - "analysis rules"
---

# BigQuery Data Clean Rooms analysis rules

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Clean Rooms now include analysis rules as a core capability.

## Extended Definition

BigQuery analysis rules are configurable policies on views that enforce how queries are executed, such as blocking queries that do not include a required join operation through a join restriction policy. The documented supported rule types include aggregation threshold analysis rules (which enforce a minimum number of distinct entities) and differential privacy analysis rules, and join restriction policies can be used together with those rule types; however, once a rule is added to a view, the docs state you cannot switch between aggregation threshold and differential privacy rule modes.

## Evidence Summary

The page provides concrete rule behaviors and constraints, including join-based enforcement, supported analysis rule families, composition behavior, and a documented limitation on changing rule type after configuration.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)

## Supporting Pages

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-root-2`
- Final score: 62
- Re-rank relevance: STRONG
- Re-rank rationale: It directly states analysis rules can be enforced via Data Clean Rooms and details the supported rule types.

Evidence snippets:
- Block a query with no join operation If the query must have a join operation, you can block the query if no join operation is present by using one of the following list overlap analysis rules: "join restriction policy" : { "join condition" : "JOIN NOT REQUIRED" } "join restriction policy" : { "join condition" : "JOIN NOT REQUIRED" , "join allowed columns" : [] } Example: In the following query, the query is blocked because there is no join operation with ExamView in the query: -- Create a view that includes a table called ExamTable.
- StudentTable AS ( SELECT "Hansen" AS last name , 510 AS test score UNION ALL SELECT "Wang" , 500 UNION ALL SELECT "Devi" , 580 UNION ALL SELECT "Ivanov" , 490 UNION ALL SELECT "Silva" , 550 ); Limitations Analysis rules have the following limitations: If you've already added an analysis rule to a view, you can't switch between aggregation threshold analysis rules and differential privacy analysis rules.
- StudentTable USING ( last name ); Use a join restriction policy with another policy The join restriction policy can be used with other policies in the aggregation threshold and differential privacy analysis rules.
- Supported analysis rules The following analysis rules are supported: Aggregation threshold analysis rule : Enforces the minimum number of distinct entities that must be present in a dataset.

