---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.315Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub Lite regional availability"
feature_slug: "pub-sub-lite-regional-availability"
latest_feature_date: "2021-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/reliability-intro"
  - "https://docs.cloud.google.com/pubsub/docs/choosing-pubsub-or-cloud-tasks"
  - "https://docs.cloud.google.com/pubsub/docs/resource-location-restriction"
  - "https://docs.cloud.google.com/pubsub/docs/app-engine-writing-and-responding-to-pub-sub-messages"
keywords:
  - "pub"
  - "sub"
  - "lite"
  - "regional"
  - "availability"
  - "became"
  - "available"
  - "in"
---

# Pub/Sub Lite regional availability

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub Lite became available in the northamerica-northeast2 region; Pub/Sub Lite became available in additional regions.

## Extended Definition

Pub/Sub Lite became available in the northamerica-northeast2 region; Pub/Sub Lite became available in additional regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/reliability-intro](https://docs.cloud.google.com/pubsub/docs/reliability-intro)
- [https://docs.cloud.google.com/pubsub/docs/choosing-pubsub-or-cloud-tasks](https://docs.cloud.google.com/pubsub/docs/choosing-pubsub-or-cloud-tasks)
- [https://docs.cloud.google.com/pubsub/docs/resource-location-restriction](https://docs.cloud.google.com/pubsub/docs/resource-location-restriction)
- [https://docs.cloud.google.com/pubsub/docs/app-engine-writing-and-responding-to-pub-sub-messages](https://docs.cloud.google.com/pubsub/docs/app-engine-writing-and-responding-to-pub-sub-messages)

## Supporting Pages

### Pub/Sub: Introduction to reliability \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/reliability-intro](https://docs.cloud.google.com/pubsub/docs/reliability-intro)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Regional Isolation To minimize the infrastructure that publish and subscribe operations depend on outside a single region and to ensure that all data stays isolated to that region, follow these steps: Create a topic per region.
- When using the regional endpoints , such as us-central1-pubsub.googleapis.com , or locational endpoints , such as pubsub.us-central1.rep.googleapis.com , publishers and subscribers connect to Pub/Sub in the specified region.
- Failover If you don't need regional isolation, you may want to take advantage of Pub/Sub's ability to deliver messages efficiently across multiple regions in order to achieve multi-region failover capabilities.
- Publishers in Australia are unavailable If the publishers in one region become unavailable, the messages that are already published are still delivered to the nearest subscribers: Figure 5.

### Choosing Pub/Sub or Cloud Tasks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/choosing-pubsub-or-cloud-tasks](https://docs.cloud.google.com/pubsub/docs/choosing-pubsub-or-cloud-tasks)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Yes with ordering keys Explicit rate controls Yes Pull subscriber clients can implement flow control Pull via API No Yes Batch insert No Yes Multiple handlers/subscribers per message No Yes Task/message retention 30 days Up to 31 days Max size of task/message 1MB 10MB Max delivery rate 500 qps/queue No upper limit Geographic availability Regional Global Maximum push handler/subscriber processing duration 30 minutes (HTTP) 10 minutes (App Engine Standard automatic scaling) 24 hours (App Engine Standard manual or basic scaling) 60 minutes (App Engine Flexible) 10 minutes for push operations Number of queues/subscriptions per project 1,000/project, more available via quota increase request 10,000/project Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Pub/Sub Guides Send feedback Choosing Pub/Sub or Cloud Tasks Stay organized with collections Save and categorize content based on your preferences.
- Pub/Sub is optimal for more general event data ingestion and distribution patterns where some degree of control over execution can be sacrificed.
- In this way, Pub/Sub supports implicit invocation: a publisher implicitly causes the subscribers to execute by publishing an event.

### Configure message storage policies \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/resource-location-restriction](https://docs.cloud.google.com/pubsub/docs/resource-location-restriction)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: subscription/num retained acked messages by region Performance and availability implications The message storage policy does not affect the overall SLA, but it does introduce an availability-control trade-off when publishers or subscribers run outside Google Cloud or in regions not allowed by the policy.
- When publishing from outside of Google Cloud, an additional layer of routing is involved to get the request to a nearby Google Cloud region where the Pub/Sub service is available.
- Click Update . gcloud CLI To push the message storage policy defined in your organization's Resource Location Restriction policy to a topic, run the following gcloud pubsub topics update command: gcloud pubsub topics update TOPIC ID \ --recompute-message-storage-policy To update the message storage policy of a topic with specific regions, run the gcloud pubsub topics update command with the --message-storage-policy-allowed-regions flag: gcloud pubsub topics update TOPIC ID \ --message-storage-policy-allowed-regions = REGION1,REGION2 Replace the following: TOPIC ID : the ID of the topic you're updating.
- PATCH https://pubsub.googleapis.com/v1/projects/ PROJECT ID /topics/ TOPIC ID Authorization: Bearer $(gcloud auth application-default print-access-token) Content-Type: application/json --data @response-body.json Specify the following fields in the request body: { "name": "projects/ PROJECT ID /topics/ TOPIC ID ", "messageStoragePolicy": { "allowedPersistenceRegions": [" REGION "], // Replace with your required region "enforceInTransit": true } } Where: PROJECT ID is your project ID.

### Use Pub/Sub with App Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/app-engine-writing-and-responding-to-pub-sub-messages](https://docs.cloud.google.com/pubsub/docs/app-engine-writing-and-responding-to-pub-sub-messages)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn how to combine these services, see the following App Engine tutorials: .NET: Writing and responding to Pub/Sub messages GO: Writing and responding to Pub/Sub messages Java: Writing and responding to Pub/Sub messages Node.JS: Writing and responding to Pub/Sub messages PHP: Writing and responding to Pub/Sub messages Python: Writing and responding to Pub/Sub messages Ruby: Writing and responding to Pub/Sub messages Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Pub/Sub Guides Send feedback Use Pub/Sub with App Engine Stay organized with collections Save and categorize content based on your preferences.
- You can use Pub/Sub and App Engine to send and receive Pub/Sub messages in an App Engine app for Python.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

