---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:52.993Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Project-level tags"
feature_slug: "project-level-tags"
latest_feature_date: "2023-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/assign-iam-roles"
  - "https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview"
keywords:
  - "project"
  - "level"
  - "tags"
  - "can"
  - "be"
  - "created"
  - "as"
  - "children"
---

# Project-level tags

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Tags can be created as children of projects as well as organization resources.

## Extended Definition

Tags can be created as children of projects as well as organization resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/assign-iam-roles](https://docs.cloud.google.com/resource-manager/docs/assign-iam-roles)
- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects](https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)

## Supporting Pages

### Assign Identity and Access Management roles and permissions | Resource Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/assign-iam-roles](https://docs.cloud.google.com/resource-manager/docs/assign-iam-roles)
- Source ID: `site-iam-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Assign Identity and Access Management roles and permissions Resource Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/resource-manager/docs/assign-iam-roles To gain these permissions, ask your administrator to grant the suggested role at the appropriate level of the resource hierarchy.
- To migrate a project between organization resources, you need the following roles on the project, its parent resource, and the destination resource: Project IAM Admin (roles/resourcemanager.projectIamAdmin) on the project that you want to migrate between organization resources.

### Create projects | Resource Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects](https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Define project IDs, apply tags, and adjust quotas via console, gcloud, or Cloud Resource Manager API.
- Create projects Resource Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects Create and manage Google Cloud projects.

### Tags overview | Resource Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- Source ID: `site-docs-root`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Tags overview Resource Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview Resource Manager · Start free · Home · Documentation · Security · Resource Manager · Guides · Send feedback · The Google Cloud resource hierarchy is a way to organize your resources into a tree structure.

