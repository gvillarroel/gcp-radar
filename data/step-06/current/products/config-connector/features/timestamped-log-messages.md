---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.225Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Timestamped log messages"
feature_slug: "timestamped-log-messages"
latest_feature_date: "2021-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/resources"
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget"
keywords:
  - "timestamped"
  - "timestamps"
  - "messages"
  - "includes"
---

# Timestamped log messages

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector includes timestamps in log messages.

## Extended Definition

Config Connector includes timestamps in log messages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/resources](https://docs.cloud.google.com/config-connector/docs/concepts/resources)
- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget)

## Supporting Pages

### About Config Connector CRDs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/resources](https://docs.cloud.google.com/config-connector/docs/concepts/resources)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- About Config Connector CRDs Config Connector includes a collection of Custom Resource Definitions (CRDs).
- You can check a resource's error messages or readiness by looking at the Status.Condition .
- Object metadata Each Config Connector resource includes a metadata field.

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you are using Config Connector, you may notice delete requests from Config Connector controller manager against certain resources from either container log messages or Kubernetes cluster audit logs.
- You can query for logs for specific resources by filtering for the following fields in the log messages: logger : contains the resource's kind in lower-case .

### BillingBudgetsBudget \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- The name of the Pub/Sub topic where budget related messages will be published, in the form projects/{project id}/topics/{topic id}.

