---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.459Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Pub/Sub ordering key publishing"
feature_slug: "pub-sub-ordering-key-publishing"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email"
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop"
keywords:
  - "ordering"
  - "key"
  - "publishing"
  - "pub"
  - "sub"
  - "application"
  - "integration"
  - "can"
---

# Pub/Sub ordering key publishing

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Application Integration can publish to Google Cloud Pub/Sub topics using ordering keys to preserve FIFO message order for message processing.

## Extended Definition

Application Integration can publish to Google Cloud Pub/Sub topics using ordering keys to preserve FIFO message order for message processing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email](https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email)
- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)

## Supporting Pages

### "Listen to Cloud Pub/Sub topic and send an email \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email](https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Application Integration automatically creates a subscription for a topic when you publish your integration, and you can view all your subscriptions in the Pub/Sub subscription page .
- Before you begin Assign the following Identity and Access Management (IAM) roles to the Application Integration Service Agent ( service- PROJECT NUMBER @gcp-sa-integrations.iam.gserviceaccount.com ) in your Google Cloud project: Pub/Sub Editor Application Integration Invoker For more information about assigning IAM roles, see IAM roles and permissions .
- Listen to Cloud Pub/Sub topic and send an email Learn how to create a sample integration using Application Integration and the Cloud Pub/Sub trigger .
- Starting with the Application Integration December 01 2023 release , you will be billed for your subscriptions as per the Pub/Sub billing rates .

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- February 02, 2026 Feature FIFO message processing with Pub/Sub ordering keys Application Integration now supports publishing messages to Google Cloud Pub/Sub topics using ordering keys, enabling First-In, First-Out (FIFO) message processing.
- By setting an ordering key in the Pub/Sub trigger's Publish Message action, you can ensure messages are received in the correct order, enhancing reliability for integrations requiring ordered message processing.
- Issue Known issues Integration fails to publish when duplicate Connector Event triggers are configured Event subscription error when an integration containing Connector Event triggers is uploaded For more information, see Application Integration known issues .
- December 01, 2023 Feature Cloud Pub/Sub trigger supports cross-project topics You can now configure your Cloud Pub/Sub trigger for a Pub/Sub topic that isn't in the same Google Cloud project as your integration.

### "Invoke a sub-integration using a For Each Loop task \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Test and publish the sub-integration To test this sub-integration, click Test in the integration editor toolbar and then click Test integration in the Test Integration dialog.
- Create the sub-integration In the Google Cloud console, go to the Application Integration page.
- To publish this sub-integration, click Publish in the integration editor toolbar.
- Invoke a sub-integration using a For Each Loop task To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me --> This quickstart shows you how to create an integration that uses a For Each Loop task to invoke a sub-integration.

