---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.456Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery conditional IAM ACLs for datasets"
feature_slug: "bigquery-conditional-iam-acls-for-datasets"
latest_feature_date: "2025-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetOption"
keywords:
  - "dataset-level IAM condition"
  - "dataset access conditions"
  - "dataset conditional IAM"
  - "policy conditions"
  - "BigQuery dataset access control"
  - "dataset ACL"
  - "conditional access"
  - "conditional IAM"
---

# BigQuery conditional IAM ACLs for datasets

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports conditional IAM access rules on datasets using access control lists (ACLs).

## Extended Definition

BigQuery supports conditional IAM access on datasets through the dataset `accessPolicyVersion` option when configuring dataset access. In the BigQuery Java client API, this option specifies the dataset’s access policy version used for conditional access, and conditional access cannot be used if the option is unset. For conditional access policy bindings on datasets, the documented required policy version is 3.

## Evidence Summary

The cited Java reference confirms the dataset-level `accessPolicyVersion` mechanism for conditional access and the requirement to use version 3, while also noting conditional access is disabled when that option is not provided.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetOption)

## Supporting Pages

### "Class BigQuery.DatasetOption (2.62.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetOption)
- Source ID: `site-java-reference`
- Final score: 36
- Re-rank relevance: STRONG
- Re-rank rationale: It directly explains dataset conditional role bindings, required policy version behavior, and that datasets with conditional bindings must use version 3.

Evidence snippets:
- DatasetOption accessPolicyVersion ( Integer accessPolicyVersion ) Returns an option to specify the dataset's access policy version for conditional access.
- If this option is not provided the field remains unset and conditional access cannot be used.
- Requests for conditional access policy binding in datasets must specify version 3.

