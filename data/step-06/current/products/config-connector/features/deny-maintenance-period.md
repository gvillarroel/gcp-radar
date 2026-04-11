---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.300Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "deny maintenance period"
feature_slug: "deny-maintenance-period"
latest_feature_date: "2023-01-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/overview"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions"
keywords:
  - "deny"
  - "maintenance"
  - "period"
  - "sqlinstance"
  - "supports"
  - "connector"
  - "enforcement"
  - "and"
---

# deny maintenance period

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

SQLInstance supports connector enforcement, deny maintenance period, and query plans per minute insights settings.

## Extended Definition

SQLInstance supports connector enforcement, deny maintenance period, and query plans per minute insights settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview)
- [https://docs.cloud.google.com/config-connector/docs/concepts/resources](https://docs.cloud.google.com/config-connector/docs/concepts/resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)

## Supporting Pages

### Config Connector overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Config Connector overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/overview Config Connector provides a collection of Kubernetes Custom Resource Definitions (CRDs) and controllers.
- The Config Connector CRDs allow Kubernetes to create and manage Google Cloud resources when you configure and apply Objects to your cluster.

### About Config Connector CRDs | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/resources](https://docs.cloud.google.com/config-connector/docs/concepts/resources)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Config Connector periodically reads information on your Google Cloud resource and updates the status.
- About Config Connector CRDs Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/concepts/resources ...
- The status field is read-only and contains the current state of your object.

### Access control with IAM | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Access control with IAM Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions To install Config Connector, you authenticate by creating an IAM service account and then using Workload Identity Federation for GKE for GKE to bind the IAM service accounts with the Kubernetes service accounts.
- By limiting the permissions assigned to your service accounts, you have greater control over what kinds of resources Config Connector can create.
- IAM lets Config Connector take action on specific resources.

