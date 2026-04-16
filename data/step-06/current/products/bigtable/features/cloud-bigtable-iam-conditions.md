---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.028Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable IAM conditions"
feature_slug: "cloud-bigtable-iam-conditions"
latest_feature_date: "2021-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/access-control"
  - "https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles"
  - "https://docs.cloud.google.com/iam/docs/overview"
keywords:
  - "conditional"
  - "conditions"
  - "enforce"
  - "used"
  - "access"
---

# Cloud Bigtable IAM conditions

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

IAM conditions can be used to enforce conditional access controls on Cloud Bigtable instances, clusters, and tables.

## Extended Definition

IAM conditions can be used to enforce conditional access controls on Cloud Bigtable instances, clusters, and tables.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- [https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles](https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles)
- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)

## Supporting Pages

### Bigtable access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- IAM conditions IAM Conditions let you define and enforce conditional, attribute-based access control for some Google Cloud resources, including Bigtable resources.
- In Bigtable, you can enforce conditional access based on the following attributes: Date/time attributes : Use to set temporary (expiring), scheduled, or limited-duration access to Bigtable resources.
- Returned as IAM policies. bigtable.authorizedViews.list List authorized views in a table. bigtable.authorizedViews.mutateRows Modify rows within an authorized view. bigtable.authorizedViews.readRows Read rows from an authorized view. bigtable.authorizedViews.sampleRowKeys Get a sample of the row keys that are used in an authorized view. bigtable.authorizedViews.setIamPolicy Update access control policies for an authorized view. bigtable.authorizedViews.update Update the settings for an authorized view.
- Returned as IAM policies. bigtable.materializedViews.list List continuous materialized views in an instance. bigtable.materializedViews.readRows Read rows from a continuous materialized view. bigtable.materializedViews.sampleRowKeys Get a sample of the row keys that are used in a continuous materialized view. bigtable.materializedViews.setIamPolicy Update access control policies for a continuous materialized view. bigtable.materializedViews.update Update the settings for a continuous materialized view.

### "Services that allow conditional role bindings \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles](https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles)
- Source ID: `site-iam-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- If you need to grant conditional access to a resource that doesn't allow conditions or a resource that doesn't have an allow policy, see Support for inherited conditions .
- Services that allow conditions You can add conditions to allow policies for resources from the following services: Cloud Bigtable Admin API Binary Authorization BigQuery Certificate Authority Service Chrome Enterprise Premium Cloud Deploy Cloud Key Management Service (Cloud KMS) Cloud Logging Cloud Run Cloud Storage Cloud Workstations Compute Engine Managed Service for Apache Spark Identity-Aware Proxy (IAP) Identity and Access Management (IAM) Resource Manager Secret Manager Service Management Spanner Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Identity and Access Management (IAM) lets you grant roles conditionally .
- Home Documentation Security IAM Reference Send feedback Services that allow conditional role bindings Stay organized with collections Save and categorize content based on your preferences.

### "IAM overview \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- Source ID: `site-iam-reference`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- IAM Conditions : IAM Conditions lets you define and enforce conditional, attribute-based access control.
- Principal access boundary (PAB) policies : Principal access boundary policies define and enforce the resources a principal is eligible to access.
- Advanced access control In addition to allow policies, IAM provides the following access control mechanisms to help you refine who has access to what resources: Additional policy types : IAM offers the following policy types in addition to allow policies: Deny policies : Deny policies prevent principals from using certain permissions, even if they're granted a role with the permission.
- When an authenticated principal attempts to access a resource, IAM checks the resource's allow policy to determine whether the principal has the required permissions.

