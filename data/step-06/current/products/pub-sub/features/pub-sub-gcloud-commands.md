---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.326Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub gcloud commands"
feature_slug: "pub-sub-gcloud-commands"
latest_feature_date: "2018-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud"
  - "https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library"
  - "https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries"
  - "https://docs.cloud.google.com/pubsub/docs/resource-location-restriction"
keywords:
  - "pub"
  - "sub"
  - "gcloud"
  - "commands"
  - "reached"
  - "general"
  - "availability"
  - "and"
---

# Pub/Sub gcloud commands

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub gcloud commands reached general availability and no longer require the beta label.

## Extended Definition

Pub/Sub gcloud commands reached general availability and no longer require the beta label.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud)
- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library)
- [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries)
- [https://docs.cloud.google.com/pubsub/docs/resource-location-restriction](https://docs.cloud.google.com/pubsub/docs/resource-location-restriction)

## Supporting Pages

### "Quickstart: Publish and receive messages in Pub/Sub by using the gcloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next See all the available gcloud CLI commands for Pub/Sub Learn more about the Pub/Sub concepts discussed in this page.
- Create a topic Create a topic with the ID my-topic : gcloud pubsub topics create my-topic Create a subscription Create a subscription with the ID my-sub and attach it to my-topic : gcloud pubsub subscriptions create my-sub --topic = my-topic Publish messages Publish a message to my-topic : gcloud pubsub topics publish my-topic --message = "hello" Receive messages Receive the message from my-sub : gcloud pubsub subscriptions pull my-sub --auto-ack The gcloud CLI prints the message to the command line.
- Publish and receive messages in Pub/Sub by using the gcloud CLI This page shows you how to do the following operations in Pub/Sub using the Google Cloud CLI: Create a topic and subscription.
- Home Documentation Data analytics Pub/Sub Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Publish and receive messages in Pub/Sub by using a client library\

- URL: [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to grant roles . gcloud services enable pubsub.googleapis.com Create local authentication credentials for your user account: gcloud auth application-default login Note: If the gcloud CLI prints a warning that your account doesn't have the serviceusage.services.use permission, then some gcloud CLI commands and client libraries might not work.
- Learn how to grant roles . gcloud services enable pubsub.googleapis.com Create local authentication credentials for your user account: gcloud auth application-default login Note: If the gcloud CLI prints a warning that your account doesn't have the serviceusage.services.use permission, then some gcloud CLI commands and client libraries might not work.
- Clean up (optional) To avoid incurring charges to your Google Cloud account for the resources used in this guide, you can use the command line to delete the topic and subscription. gcloud pubsub subscriptions delete my-sub gcloud pubsub topics delete my-topic Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next Learn more about the Pub/Sub concepts discussed in this page.
- Run the following command once for each of the following IAM roles: roles/pubsub.admin gcloud projects add-iam-policy-binding PROJECT ID --member = "user: USER IDENTIFIER " --role = ROLE Replace the following: PROJECT ID : Your project ID.

### "Quickstart: Publish and receive messages in Pub/Sub by using a client library\

- URL: [https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to grant roles . gcloud services enable pubsub.googleapis.com Create local authentication credentials for your user account: gcloud auth application-default login Note: If the gcloud CLI prints a warning that your account doesn't have the serviceusage.services.use permission, then some gcloud CLI commands and client libraries might not work.
- Learn how to grant roles . gcloud services enable pubsub.googleapis.com Create local authentication credentials for your user account: gcloud auth application-default login Note: If the gcloud CLI prints a warning that your account doesn't have the serviceusage.services.use permission, then some gcloud CLI commands and client libraries might not work.
- Clean up (optional) To avoid incurring charges to your Google Cloud account for the resources used in this guide, you can use the command line to delete the topic and subscription. gcloud pubsub subscriptions delete my-sub gcloud pubsub topics delete my-topic Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next Learn more about the Pub/Sub concepts discussed in this page.
- Run the following command once for each of the following IAM roles: roles/pubsub.admin gcloud projects add-iam-policy-binding PROJECT ID --member = "user: USER IDENTIFIER " --role = ROLE Replace the following: PROJECT ID : Your project ID.

### Configure message storage policies \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/resource-location-restriction](https://docs.cloud.google.com/pubsub/docs/resource-location-restriction)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Update . gcloud CLI To push the message storage policy defined in your organization's Resource Location Restriction policy to a topic, run the following gcloud pubsub topics update command: gcloud pubsub topics update TOPIC ID \ --recompute-message-storage-policy To update the message storage policy of a topic with specific regions, run the gcloud pubsub topics update command with the --message-storage-policy-allowed-regions flag: gcloud pubsub topics update TOPIC ID \ --message-storage-policy-allowed-regions = REGION1,REGION2 Replace the following: TOPIC ID : the ID of the topic you're updating.
- However, after you create a topic, you can change its message storage policy in the console with an update operation. gcloud CLI To create a topic with a specific message storage policy, use the gcloud pubsub topics create command with the --message-storage-policy-allowed-regions flag: gcloud pubsub topics create TOPIC ID \ --message-storage-policy-allowed-regions = REGION1,REGION2 Replace the following: TOPIC ID : the ID or name for your new topic.
- For example: subscription/num retained acked messages by region Performance and availability implications The message storage policy does not affect the overall SLA, but it does introduce an availability-control trade-off when publishers or subscribers run outside Google Cloud or in regions not allowed by the policy.
- Your storage policies are shown in the panel, along with any differences between organization and topic policies. gcloud CLI To examine the current policy assigned to a topic, run the following command: gcloud pubsub topics describe TOPIC ID Replace the following: TOPIC ID : the ID of the topic you're examining.

