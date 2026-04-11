---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.284Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "SQLInstance deletion protection and instance type status"
feature_slug: "sqlinstance-deletion-protection-and-instance-type-status"
latest_feature_date: "2023-01-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy"
keywords:
  - "sqlinstance"
  - "deletion"
  - "protection"
  - "and"
  - "instance"
  - "type"
  - "status"
  - "supports"
---

# SQLInstance deletion protection and instance type status

Product: Config Connector
Coverage: LOW

## Step 02 Summary

SQLInstance supports deletion protection configuration and exposes instance type in status.

## Extended Definition

SQLInstance supports deletion protection configuration and exposes instance type in status.

## Evidence Summary

Fast-mode lexical matching selected 1 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)

## Supporting Pages

### IAMPartialPolicy | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- Source ID: `site-iam-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- IAMPartialPolicy Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy You cannot reference BigQueryDataset resources using IAMPolicy, IAMPartialPolicy, and IAMPolicyMember since BigQueryDataset does not support IAM. bindings: - condition: description: string expression: string title: string members: - member: string memberFrom: bigQueryConnectionConnectionRef: name: string namespace: string type: string logSinkRef: name: string namespace: string serviceAccountRef: name: string namespace: string serviceIdentityRef: name: string namespace: string sqlInstanceRef: name: string namespace: string role: string resourceRef: apiVersion: string external: string kind: string name: string namespace: string

