---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.514Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery IAM conditions"
feature_slug: "bigquery-iam-conditions"
latest_feature_date: "2024-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetOption"
keywords:
  - "CEL expression"
  - "resource access condition"
  - "IAM policy conditions"
  - "policy.conditions"
  - "access conditions"
  - "BigQuery resource policy"
  - "IAM conditions"
  - "conditional access"
---

# BigQuery IAM conditions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

IAM conditions are available in BigQuery to control access to BigQuery resources.

## Extended Definition

In BigQuery, dataset-level IAM conditional access is configured by setting the `DatasetOption` field `accessPolicyVersion` in the Java client library, which specifies the dataset’s access policy version for IAM policy conditions. If this option is not set, conditional access cannot be used on that dataset, and conditional-access bindings for datasets must use policy version 3.

## Evidence Summary

The cited BigQuery Java reference page provides API-level evidence that conditional access is activated per dataset via `accessPolicyVersion`, defaults to disabled when unset, and requires version 3 for conditional access bindings.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetOption)

## Supporting Pages

### "Class BigQuery.DatasetOption (2.62.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetOption)
- Source ID: `site-java-reference`
- Final score: 38
- Re-rank relevance: STRONG
- Re-rank rationale: The page documents the DatasetOption.accessPolicyVersion setting, explicitly describing how conditional access policy versions are specified for datasets and how IAM policy versioning is used.

Evidence snippets:
- DatasetOption accessPolicyVersion ( Integer accessPolicyVersion ) Returns an option to specify the dataset's access policy version for conditional access.
- If this option is not provided the field remains unset and conditional access cannot be used.
- Requests for conditional access policy binding in datasets must specify version 3.

