---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.302Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "IAMPartialPolicy faster dependency reconciliation"
feature_slug: "iampartialpolicy-faster-dependency-reconciliation"
latest_feature_date: "2023-01-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/getting-started"
keywords:
  - "iampartialpolicy"
  - "faster"
  - "dependency"
  - "reconciliation"
  - "supports"
  - "for"
  - "resources"
  - "with"
---

# IAMPartialPolicy faster dependency reconciliation

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

IAMPartialPolicy supports faster reconciliation for resources with dependencies.

## Extended Definition

IAMPartialPolicy supports faster reconciliation for resources with dependencies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started)

## Supporting Pages

### IAMPartialPolicy | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- Source ID: `site-iam-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- IAMPartialPolicy Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy You cannot reference BigQueryDataset resources using IAMPolicy, IAMPartialPolicy, and IAMPolicyMember since BigQueryDataset does not support IAM. bindings: - condition: description: string expression: string title: string members: - member: string memberFrom: bigQueryConnectionConnectionRef: name: string namespace: string type: string logSinkRef: name: string namespace: string serviceAccountRef: name: string namespace: string serviceIdentityRef: name: string namespace: string sqlInstanceRef: name: string namespace: string role: string resourceRef: apiVersion: string external: string kind: string name: string namespace: string

### Access control with IAM | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Access control with IAM Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions To install Config Connector, you authenticate by creating an IAM service account and then using Workload Identity Federation for GKE for GKE to bind the IAM service accounts with the Kubernetes service accounts.
- By limiting the permissions assigned to your service accounts, you have greater control over what kinds of resources Config Connector can create.
- IAM lets Config Connector take action on specific resources.

### Getting started with Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started)
- Source ID: `site-docs-root`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- For example, to delete the PubSubTopic you created earlier, run kubectl delete with your pubsub-topic.yaml file: ...
- Getting started with Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/getting-started PROJECT ID: your Google Cloud project ID.
- NEW LABEL VALUE: an updated value for the label you added previously.
- Use kubectl delete to delete resources.

