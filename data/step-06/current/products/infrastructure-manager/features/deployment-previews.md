---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:38.525Z"
product_name: "Infrastructure Manager"
product_slug: "infrastructure-manager"
feature_name: "Deployment previews"
feature_slug: "deployment-previews"
latest_feature_date: "2025-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/projects.locations.deployments"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources"
keywords:
  - "deployment"
  - "previews"
  - "preview"
  - "deployments"
  - "to"
  - "view"
  - "resource"
  - "drift"
---

# Deployment previews

Product: Infrastructure Manager
Coverage: MEDIUM

## Step 02 Summary

Preview deployments to view resource drift before applying changes; Preview Infrastructure Manager deployments before creating them.

## Extended Definition

Preview deployments to view resource drift before applying changes; Preview Infrastructure Manager deployments before creating them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment](https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment)
- [https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/projects.locations.deployments](https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/projects.locations.deployments)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources](https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources)

## Supporting Pages

### Preview a deployment | Infrastructure Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment](https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Preview a deployment Infrastructure Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment This page describes how to use Infrastructure Manager to preview the deployment of resources defined in a Terraform configuration.

### REST Resource: projects.locations.deployments | Infrastructure Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/projects.locations.deployments](https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/projects.locations.deployments)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: projects.locations.deployments Infrastructure Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/projects.locations.deployments Infrastructure Manager · Reference · Send feedback · Resource: Deployment · JSON representation · State · ErrorCode · LockState · Methods · A Deployment is a group of resources and configs managed and provisioned by Infra Manager.
- Possible states of a deployment.

### Setting access control in a configuration | Cloud Deployment Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources](https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Setting access control in a configuration Cloud Deployment Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources Add the accessControl section to the top-level configuration for each resource for which you want to apply access control policies.
- Note: If you use the accessControl section to grant roles to accounts, including service accounts, we recommend that you use Deployment Manager to manage roles for that account.
- Specify the desired gcpIamPolicy for the resource.
- Each binding binds a list of members to a role.

