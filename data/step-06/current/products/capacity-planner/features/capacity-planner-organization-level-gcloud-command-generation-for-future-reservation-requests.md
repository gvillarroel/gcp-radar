---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.773Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner organization-level gcloud command generation for future reservation requests"
feature_slug: "capacity-planner-organization-level-gcloud-command-generation-for-future-reservation-requests"
latest_feature_date: "2024-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/choose-request-method"
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
keywords:
  - "org-level reservation command generation"
  - "reservation request commands"
  - "organization-level future reservation requests"
  - "gcloud command generation"
  - "organization reservation CLI"
  - "organization-level VM usage"
  - "organization forecasted usage"
  - "Capacity Planner preview"
---

# Capacity Planner organization-level gcloud command generation for future reservation requests

Product: Capacity Planner
Coverage: MEDIUM

## Step 02 Summary

Capacity Planner preview can generate gcloud CLI commands to create future reservation requests from organization-level VM usage data.

## Extended Definition

Capacity Planner’s future reservation request feature enables users to create future reservation requests from usage and forecast data about Compute Engine resources, with support for planning capacity for projects, folders, or organizations. The recommended method for creating these requests is to configure them in the Google Cloud console and then generate gcloud CLI commands, which can be reviewed and edited before execution; separate Capacity Planner usage/forecast documentation also exposes organization-level query capabilities for usage and forecast data, so the feature can be applied at organization scope.

## Evidence Summary

The Capacity Planner pages show that future reservation requests are forecast-based for compute/GPUs and include an editable gcloud CLI generation path, while the usage-and-forecast page documents organization-level query endpoints for Capacity Planner data.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

### "Create future reservation requests \_|\_ Capacity Planner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions planning for project, folder, or organization capacity, but provides no organization-level command-generation workflow or org-scoped data source details.

### "Resource attributes for IAM Conditions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- Source ID: `site-iam-reference`
- Final score: 50
- Re-rank relevance: N/A

