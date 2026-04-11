---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:52.985Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Tag short name length limit"
feature_slug: "tag-short-name-length-limit"
latest_feature_date: "2023-09-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/latest/Google.Cloud.ResourceManager.V3"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview"
  - "https://docs.cloud.google.com/resource-manager/docs/assign-iam-roles"
keywords:
  - "tag"
  - "short"
  - "name"
  - "length"
  - "limit"
  - "key"
  - "and"
  - "value"
---

# Tag short name length limit

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Tag key and value short names can be up to 256 characters long.

## Extended Definition

Tag key and value short names can be up to 256 characters long.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/latest/Google.Cloud.ResourceManager.V3](https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/latest/Google.Cloud.ResourceManager.V3)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- [https://docs.cloud.google.com/resource-manager/docs/assign-iam-roles](https://docs.cloud.google.com/resource-manager/docs/assign-iam-roles)

## Supporting Pages

### Cloud Resource Manager v3 API - Namespace Google.Cloud.ResourceManager.V3 (2.5.0) | .NET client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/latest/Google.Cloud.ResourceManager.V3](https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/latest/Google.Cloud.ResourceManager.V3)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Resource Manager v3 API - Namespace Google.Cloud.ResourceManager.V3 (2.5.0) .NET client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/latest/Google.Cloud.ResourceManager.V3 EffectiveTag contains the name and namespaced name of the tag value and tag key, with additional fields of inherited to indicate the inheritance status of the effective tag.

### Tags overview | Resource Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tags overview Resource Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview Resource Manager · Start free · Home · Documentation · Security · Resource Manager · Guides · Send feedback · The Google Cloud resource hierarchy is a way to organize your resources into a tree structure.
- This hierarchy helps you manage resources at scale, but it models only a few business dimensions, including organization structure, regions, workload types, and cost centers.

### Assign Identity and Access Management roles and permissions | Resource Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/assign-iam-roles](https://docs.cloud.google.com/resource-manager/docs/assign-iam-roles)
- Source ID: `site-iam-reference`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- Assign Identity and Access Management roles and permissions Resource Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/resource-manager/docs/assign-iam-roles To gain these permissions, ask your administrator to grant the suggested role at the appropriate level of the resource hierarchy.
- To migrate a project between organization resources, you need the following roles on the project, its parent resource, and the destination resource: Project IAM Admin (roles/resourcemanager.projectIamAdmin) on the project that you want to migrate between organization resources.

