---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.722Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine fine-grained billing labels with BigQuery export"
feature_slug: "app-engine-fine-grained-billing-labels-with-bigquery-export"
latest_feature_date: "2020-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/labeling-resources"
  - "https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses"
keywords:
  - "app"
  - "engine"
  - "fine"
  - "grained"
  - "billing"
  - "labels"
  - "bigquery"
  - "export"
---

# App Engine fine-grained billing labels with BigQuery export

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine services can be labeled and their billing data exported to BigQuery for detailed per-resource cost queries.

## Extended Definition

App Engine services can be labeled and their billing data exported to BigQuery for detailed per-resource cost queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/labeling-resources](https://docs.cloud.google.com/appengine/docs/standard/go/labeling-resources)
- [https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler](https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler)
- [https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses](https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses)

## Supporting Pages

### "Labeling App Engine resources \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/labeling-resources](https://docs.cloud.google.com/appengine/docs/standard/go/labeling-resources)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TABLEID ], labels )) WHERE cost > 0.0 and labels . key is not null and resource type = ' Out Bandwidth ' LIMIT 100 BigQuery returns your data with a flattened output: product resource type start time end time labels key labels value cost App Engine Out Bandwidth 2017-10-07 22:00:00 2017-10-07 23:00:00 service default 0.020033 App Engine Out Bandwidth 2017-10-07 13:00:00 2017-10-07 14:00:00 service frontend 0.016042 App Engine Out Bandwidth 2017-10-07 06:00:00 2017-10-07 07:00:00 service backend task 0.013125 App Engine Out Bandwidth 2017-10-07 21:00:00 2017-10-07 22:00:00 service default 0.020722 App Engine Out Bandwidth 2017-10-07 19:00:00 2017-10-07 20:00:00 service frontend 0.020725 App Engine Out Bandwidth 2017-10-08 04:00:00 2017-10-08 05:00:00 service backend task 0.02072 App Engine Out Bandwidth 2017-10-08 02:00:00 2017-10-08 03:00:00 service default 0.020723 App Engine Out Bandwidth 2017-10-07 14:00:00 2017-10-07 15:00:00 service frontend 0.020724 App Engine Out Bandwidth 2017-10-07 23:00:00 2017-10-08 00:00:00 service backend task 0.021417 Time periods in billing reports To ensure that each day in the report covers a full 24 hour period, the billing data that you export only contains data up to the most recent midnight, Pacific Time.
- To view labels for billing, export your data to BigQuery and then query the data: Export your billing data to BigQuery .
- You can use labels to get a more fine-grained view of how resources are billed for your App Engine services.
- The App Engine flexible environment does not support billing labels for Firestore in Datastore mode (Datastore) usage.

### "Understand performance with Cloud Profiler \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler](https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Understand performance with Cloud Profiler Stay organized with collections Save and categorize content based on your preferences.

### "Outbound IP addresses for App Engine services \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses](https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you need to know the IP addresses associated with outbound traffic from your service, you can either find the current IP address ranges that include the App Engine IP addresses, or set up a static IP address for your service.
- IP addresses for App Engine services You can find the current IP address ranges for App Engine services by using two json files that are published by Google: Google publishes a list of Google-owned IP addresses in goog.json .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Outbound IP addresses for App Engine services Stay organized with collections Save and categorize content based on your preferences.
- Set up a static outbound IP address To set up a static IP address for your App Engine standard environment service, use Serverless VPC Access with Cloud Router and Cloud NAT .

