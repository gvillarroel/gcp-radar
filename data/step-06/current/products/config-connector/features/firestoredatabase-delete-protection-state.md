---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.144Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "FirestoreDatabase delete protection state"
feature_slug: "firestoredatabase-delete-protection-state"
latest_feature_date: "2025-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/getting-started"
  - "https://docs.cloud.google.com/config-connector/docs/overview"
keywords:
  - "firestoredatabase"
  - "delete"
  - "protection"
  - "state"
  - "config"
  - "connector"
  - "added"
  - "field"
---

# FirestoreDatabase delete protection state

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector added a FirestoreDatabase field for delete protection state.

## Extended Definition

Config Connector added a FirestoreDatabase field for delete protection state.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started)
- [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview)

## Supporting Pages

### Access control with IAM | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Access control with IAM Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions To install Config Connector, you authenticate by creating an IAM service account and then using Workload Identity Federation for GKE for GKE to bind the IAM service accounts with the Kubernetes service accounts.
- By limiting the permissions assigned to your service accounts, you have greater control over what kinds of resources Config Connector can create.
- IAM lets Config Connector take action on specific resources.

### Getting started with Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- By default, Config Connector deletes the PubSubTopic resource.
- Getting started with Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/getting-started PROJECT ID: your Google Cloud project ID.
- For example, to delete the PubSubTopic you created earlier, run kubectl delete with your pubsub-topic.yaml file: ...
- NEW LABEL VALUE: an updated value for the label you added previously.

### Config Connector overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Config Connector overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/overview Config Connector provides a collection of Kubernetes Custom Resource Definitions (CRDs) and controllers.
- The Config Connector CRDs allow Kubernetes to create and manage Google Cloud resources when you configure and apply Objects to your cluster.

