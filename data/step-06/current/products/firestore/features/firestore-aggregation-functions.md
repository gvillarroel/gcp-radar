---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.878Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore aggregation functions"
feature_slug: "firestore-aggregation-functions"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_aggregation.AsyncAggregationQuery"
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.aggregation.AggregationQuery"
  - "https://docs.cloud.google.com/datastore/docs/console/datastore-statistics"
keywords:
  - "firestore"
  - "aggregation"
  - "functions"
  - "you"
  - "can"
  - "assemble"
  - "run"
  - "sum"
---

# Firestore aggregation functions

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

You can assemble and run sum() and avg() aggregation queries in the Google Cloud console; The sum() and average() aggregation functions are now available.

## Extended Definition

You can assemble and run sum() and avg() aggregation queries in the Google Cloud console; The sum() and average() aggregation functions are now available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_aggregation.AsyncAggregationQuery](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_aggregation.AsyncAggregationQuery)
- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.aggregation.AggregationQuery](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.aggregation.AggregationQuery)
- [https://docs.cloud.google.com/datastore/docs/console/datastore-statistics](https://docs.cloud.google.com/datastore/docs/console/datastore-statistics)

## Supporting Pages

### Viewing Statistics in the Console \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/console/datastore-statistics](https://docs.cloud.google.com/datastore/docs/console/datastore-statistics)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Class AggregationQuery (2.23.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.aggregation.AggregationQuery](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.aggregation.AggregationQuery)
- Source ID: `site-python-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Version latest keyboard arrow down 2.23.0 (latest) 2.22.0 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.1 2.15.0 2.14.0 2.13.1 2.12.0 2.11.1 2.10.1 2.9.1 2.8.0 2.7.3 2.6.1 2.5.3 2.4.0 2.3.4 2.2.0 2.1.3 2.0.2 1.9.2 1.8.1 1.7.0 1.6.2 1.5.0 1.4.0 1.3.0 AggregationQuery ( nested query ) Represents an aggregation query to the Firestore API.
- DEFAULT VALUE , timeout : Optional [ float ] = None , , explain options : Optional [ ExplainOptions ] = None , read time : Optional [ datetime . datetime ] = None ) - > StreamGenerator [ List [ AggregationResult ]] Runs the aggregation query.
- DEFAULT VALUE , timeout : float None = None , , explain options : Optional [ ExplainOptions ] = None , read time : Optional [ datetime . datetime ] = None ) - > QueryResultsList [ AggregationResult ] Runs the aggregation query.
- Returns Type Description QueryResultsList[AggregationResult] The aggregation query results. stream stream ( transaction : Optional [ "transaction.Transaction" ] = None , retry : Union [ retries .

### "Class AsyncAggregationQuery (2.23.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_aggregation.AsyncAggregationQuery](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_aggregation.AsyncAggregationQuery)
- Source ID: `site-python-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Version latest keyboard arrow down 2.23.0 (latest) 2.22.0 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.1 2.15.0 2.14.0 2.13.1 2.12.0 2.11.1 2.10.1 2.9.1 2.8.0 2.7.3 2.6.1 2.5.3 2.4.0 2.3.4 2.2.0 2.1.3 2.0.2 1.9.2 1.8.1 1.7.0 1.6.2 1.5.0 1.4.0 1.3.0 AsyncAggregationQuery ( nested query ) Represents an aggregation query to the Firestore API.
- DEFAULT VALUE , timeout : Optional [ float ] = None , , explain options : Optional [ ExplainOptions ] = None , read time : Optional [ datetime . datetime ] = None ) - > AsyncStreamGenerator [ List [ AggregationResult ]] Runs the aggregation query.
- DEFAULT VALUE , timeout : float None = None , , explain options : Optional [ ExplainOptions ] = None , read time : Optional [ datetime . datetime ] = None ) - > QueryResultsList [ List [ AggregationResult ]] Runs the aggregation query.
- Home Documentation Developer tools Python Client libraries Send feedback Class AsyncAggregationQuery (2.23.0) Stay organized with collections Save and categorize content based on your preferences.

