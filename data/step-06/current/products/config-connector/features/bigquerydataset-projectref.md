---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.466Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "BigQueryDataset projectRef"
feature_slug: "bigquerydataset-projectref"
latest_feature_date: "2021-04-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/resources"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool"
keywords:
  - "bigquerydataset"
  - "projectref"
  - "config"
  - "connector"
  - "supports"
  - "the"
  - "field"
  - "on"
---

# BigQueryDataset projectRef

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector supports the projectRef field on BigQueryDataset.

## Extended Definition

Config Connector supports the projectRef field on BigQueryDataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- [https://docs.cloud.google.com/config-connector/docs/concepts/resources](https://docs.cloud.google.com/config-connector/docs/concepts/resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool)

## Supporting Pages

### Access control with IAM | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access control with IAM Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions To install Config Connector, you authenticate by creating an IAM service account and then using Workload Identity Federation for GKE for GKE to bind the IAM service accounts with the Kubernetes service accounts.
- By limiting the permissions assigned to your service accounts, you have greater control over what kinds of resources Config Connector can create.
- IAM lets Config Connector take action on specific resources.

### About Config Connector CRDs | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/resources](https://docs.cloud.google.com/config-connector/docs/concepts/resources)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Config Connector periodically reads information on your Google Cloud resource and updates the status.
- About Config Connector CRDs Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/concepts/resources ...
- The status field is read-only and contains the current state of your object.

### EdgeContainerNodePool | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool)
- Source ID: `site-docs-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- EdgeContainerNodePool Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool Documentation · Access and resource management · Config Connector · API and reference · Send feedback · Stay organized with collections Save and categorize content based on your preferences.

