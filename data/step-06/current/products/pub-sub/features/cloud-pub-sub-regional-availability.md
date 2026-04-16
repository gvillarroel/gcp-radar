---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.323Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Cloud Pub/Sub regional availability"
feature_slug: "cloud-pub-sub-regional-availability"
latest_feature_date: "2019-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/reliability-intro"
  - "https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud"
  - "https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.PublisherInterface"
keywords:
  - "pub"
  - "sub"
  - "regional"
  - "availability"
  - "is"
  - "available"
  - "in"
  - "the"
---

# Cloud Pub/Sub regional availability

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Cloud Pub/Sub is available in the europe-west6 region (Zurich, Switzerland); Cloud Pub/Sub is available in the asia-east2 region (Hong Kong).

## Extended Definition

Cloud Pub/Sub is available in the europe-west6 region (Zurich, Switzerland); Cloud Pub/Sub is available in the asia-east2 region (Hong Kong).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/reliability-intro](https://docs.cloud.google.com/pubsub/docs/reliability-intro)
- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud)
- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.PublisherInterface](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.PublisherInterface)

## Supporting Pages

### Pub/Sub: Introduction to reliability \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/reliability-intro](https://docs.cloud.google.com/pubsub/docs/reliability-intro)
- Source ID: `site-docs-root`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Regional Isolation To minimize the infrastructure that publish and subscribe operations depend on outside a single region and to ensure that all data stays isolated to that region, follow these steps: Create a topic per region.
- When using the regional endpoints , such as us-central1-pubsub.googleapis.com , or locational endpoints , such as pubsub.us-central1.rep.googleapis.com , publishers and subscribers connect to Pub/Sub in the specified region.
- Publishers in Australia are unavailable If the publishers in one region become unavailable, the messages that are already published are still delivered to the nearest subscribers: Figure 5.
- When running publishers or subscribers outside of Google Cloud, it is best to use regional or locational endpoints in order to ensure messages flow among the expected regions consistently.

### "Quickstart: Publish and receive messages in Pub/Sub by using the gcloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud)
- Source ID: `site-docs-root`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next See all the available gcloud CLI commands for Pub/Sub Learn more about the Pub/Sub concepts discussed in this page.
- Create a topic Create a topic with the ID my-topic : gcloud pubsub topics create my-topic Create a subscription Create a subscription with the ID my-sub and attach it to my-topic : gcloud pubsub subscriptions create my-sub --topic = my-topic Publish messages Publish a message to my-topic : gcloud pubsub topics publish my-topic --message = "hello" Receive messages Receive the message from my-sub : gcloud pubsub subscriptions pull my-sub --auto-ack The gcloud CLI prints the message to the command line.
- Publish and receive messages in Pub/Sub by using the gcloud CLI This page shows you how to do the following operations in Pub/Sub using the Google Cloud CLI: Create a topic and subscription.
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the Pub/Sub Editor ( roles/pubsub.editor ) IAM role on your project.

### "Quickstart: Publish and receive messages in Pub/Sub using the Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console)
- Source ID: `site-docs-root`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Publish and receive messages in Pub/Sub using the Google Cloud console This page shows you how to perform basic tasks in Pub/Sub using the Google Cloud console.
- Publish a message to the topic In the Google Cloud console, go to the Pub/Sub topics page.
- What's next Learn more about the Pub/Sub concepts discussed in this page.
- Add a second subscription To add a second subscription to the topic you just created, complete these steps: In the Google Cloud console, go to the Pub/Sub subscriptions page.

### "Interface PublisherInterface (1.149.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.PublisherInterface](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.PublisherInterface)
- Source ID: `site-java-reference`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String message = "my message" ; ByteString data = ByteString . copyFromUtf8 ( message ); PubsubMessage pubsubMessage = PubsubMessage . newBuilder (). setData ( data ). build (); ApiFuture<String> messageIdFuture = publisher . publish ( pubsubMessage ); ApiFutures . addCallback ( messageIdFuture , new ApiFutureCallback<String> () { public void onSuccess ( String messageId ) { System . out . println ( "published with message id: " + messageId ); } public void onFailure ( Throwable t ) { System . out . println ( "failed to publish: " + t ); } }, MoreExecutors . directExecutor ()); Parameter Name Description message PubsubMessage the message to publish.
- Methods publish(PubsubMessage message) public abstract ApiFuture<String> publish ( PubsubMessage message ) Schedules the publishing of a message.
- 1.149.0 (latest) 1.148.0 1.147.0 1.145.0 1.143.1 1.142.0 1.141.5 1.140.2 1.139.4 1.138.0 1.137.1 1.136.1 1.135.0 1.134.2 1.133.1 1.132.2 1.131.0 1.130.0 1.129.6 1.127.3 1.126.6 1.125.13 1.123.18 1.122.2 1.121.1 1.120.24 1.119.1 1.118.0 1.117.0 1.116.4 1.115.5 public interface PublisherInterface An interface for a Cloud Pub/Sub publisher .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]

