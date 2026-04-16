---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:30.392Z"
product_name: "Infrastructure Manager"
product_slug: "infrastructure-manager"
feature_name: "Deployment previews"
feature_slug: "deployment-previews"
latest_feature_date: "2025-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deployments-revisions"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/export-view-preview-results"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment-deletion"
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

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/infrastructure-manager/docs/deployments-revisions](https://docs.cloud.google.com/infrastructure-manager/docs/deployments-revisions)
- [https://docs.cloud.google.com/infrastructure-manager/docs/export-view-preview-results](https://docs.cloud.google.com/infrastructure-manager/docs/export-view-preview-results)
- [https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment](https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment)
- [https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment-deletion](https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment-deletion)

## Supporting Pages

### "Deployments, revisions, and previews overview \_|\_ Infrastructure Manager\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deployments-revisions](https://docs.cloud.google.com/infrastructure-manager/docs/deployments-revisions)
- Source ID: `site-iam-reference`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, a revision name could be: projects/my-project/locations/us-central1/deployments/my-deployment/revisions/r-1 Previews A preview describes the actions to actuate a specific Terraform configuration.
- For a preview of a new deployment, the metadata is organized with a new-previews prefix, for example: gs:// PROJECT NUMBER - LOCATION -blueprint-config/new-previews/preview-name You can also preview an update to an existing deployment.
- Home Documentation Infrastructure as code Infrastructure Manager Guides Send feedback Deployments, revisions, and previews overview Stay organized with collections Save and categorize content based on your preferences.
- End with a number or lowercase letter Cannot be the string archived-deployments or archived-previews Must be unique within the project and location where Infra Manager is run.

### "Export and view preview results \_|\_ Infrastructure Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/export-view-preview-results](https://docs.cloud.google.com/infrastructure-manager/docs/export-view-preview-results)
- Source ID: `site-iam-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View details of a drift To view details of a resource drift from a preview deployment: gcloud infra-manager resource-drifts describe projects/ PROJECT ID /locations/ LOCATION /previews/ PREVIEW ID /resourceDrifts/ RESOURCE DRIFT ID Replace: PROJECT ID : The identifier of the Google Cloud project where your preview deployment is located.
- View resource drift To view a list of resource drifts of a preview deployment: gcloud infra-manager resource-drifts list --preview=projects/ PROJECT ID /locations/ LOCATION /previews/ PREVIEW ID Replace: PROJECT ID : The identifier of the Google Cloud project where your preview deployment is located.
- Viewing resource drift for your deployments is useful to verify that changes to your configurations are intended, and to summarize how your deployment will change when your deployment is updated with a particular preview.
- View resource change and drift details You can use previews to view resource drift for your deployment.

### Preview a deployment \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment](https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment)
- Source ID: `site-iam-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To preview the deployment: gcloud infra - manager previews create projects / PROJECT ID / locations / LOCATION / previews / PREVIEW ID \ -- service - account projects / SERVICE ACCOUNT PROJECT ID / serviceAccounts / SERVICE ACCOUNT \ -- git - source - repo = " GIT REPO " \ -- git - source - directory = " DIRECTORY " \ -- git - source - ref = " REF " \ -- input - values = INPUT 1 NAME = VALUE , INPUT 2 NAME = VALUE \ -- tf - version - constraint = TERRAFORM VERSION \ -- annotations = " ANNOTATION KEY = ANNOTATION VALUE " -- provider - source = SERVICE MAINTAINED Replace: PROJECT ID is the project ID where Infrastructure Manager runs.
- Before you create a new deployment or update a deployment, you can preview the deployment to verify the resources that are planned to be provisioned.
- Preview using a Terraform configuration stored in a Git repository When you update a deployment, some of the existing resources might not change.
- This page describes how to use Infrastructure Manager to preview the deployment of resources defined in a Terraform configuration.

### "Preview a deletion of a deployment \_|\_ Infrastructure Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment-deletion](https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment-deletion)
- Source ID: `site-iam-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To preview the deletion of a deployment: gcloud infra-manager previews create --preview-mode DELETE --deployment=projects/ PROJECT ID /locations/ LOCATION /previews/ DEPLOYMENT ID \ --service-account projects/ SERVICE ACCOUNT PROJECT ID /serviceAccounts/ SERVICE ACCOUNT \ Replace: PROJECT ID is the project ID where Infrastructure Manager runs.
- Before you delete a deployment, you can use a preview to verify the resources that are planned to be deleted.
- Now that you have created a preview, you can export and view the results to review the plan for the deployment.
- This page describes how to use Infrastructure Manager to preview the deletion of an existing deployment.

