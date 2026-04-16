---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.752Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner Spot TPU usage data"
feature_slug: "capacity-planner-spot-tpu-usage-data"
latest_feature_date: "2025-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
keywords:
  - "Spot TPU attached to Spot VM"
  - "Spot TPU metrics"
  - "preemptible TPU usage"
  - "TPU usage metrics"
  - "TPU usage trend"
  - "Spot TPU forecast view"
  - "Spot TPU capacity usage"
  - "Spot TPU usage data"
---

# Capacity Planner Spot TPU usage data

Product: Capacity Planner
Coverage: MEDIUM

## Step 02 Summary

Capacity Planner preview supports usage data for TPUs that are attached to Spot VMs.

## Extended Definition

Capacity Planner supports viewing Spot and preemptible-spot usage data by enabling Spot mode (in the console via the Spot usage toggle or in the API by setting `isSpot=true`) on supported usage and forecast views. The product documentation indicates that Spot VM context includes attached resources, including TPUs, and that TPU usage/forecast/quota data is available on the TPU usage view (filtered by TPU type and location). Coverage is partial for the exact feature phrasing here because the cited pages do not explicitly label this as preview-only or provide a dedicated launch/feature-announcement date.

## Evidence Summary

The Capacity Planner usage-and-forecast documentation provides Spot VM limitations, the Spot usage toggle/API flag, and TPU-specific usage/forecast/quota view details needed to define Spot TPU usage handling.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

### "Export data to your local workstation \_|\_ Capacity Planner \_|\_ Google\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: WEAK
- Re-rank rationale: The document includes TPUs in scope for exported data but does not distinguish or describe Spot TPU usage specifically.

### "Support levels for permissions in custom roles \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- Source ID: `site-iam-reference`
- Final score: 50
- Re-rank relevance: N/A

