---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:54.007Z"
product_name: "Cloud Quotas"
product_slug: "cloud-quotas"
feature_name: "gcloud alpha quotas info command"
feature_slug: "gcloud-alpha-quotas-info-command"
latest_feature_date: "2024-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples"
  - "https://docs.cloud.google.com/docs/quotas/view-manage"
  - "https://docs.cloud.google.com/docs/quotas/custom-constraints"
  - "https://docs.cloud.google.com/docs/quotas/set-up-quota-alerts"
keywords:
  - "gcloud"
  - "alpha"
  - "quotas"
  - "info"
  - "command"
  - "provides"
  - "an"
  - "to"
---

# gcloud alpha quotas info command

Product: Cloud Quotas
Coverage: MEDIUM

## Step 02 Summary

Cloud Quotas provides an alpha gcloud command to view quota information.

## Extended Definition

Cloud Quotas provides an alpha gcloud command to view quota information.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples)
- [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage)
- [https://docs.cloud.google.com/docs/quotas/custom-constraints](https://docs.cloud.google.com/docs/quotas/custom-constraints)
- [https://docs.cloud.google.com/docs/quotas/set-up-quota-alerts](https://docs.cloud.google.com/docs/quotas/set-up-quota-alerts)

## Supporting Pages

### "Manage quotas using the gcloud beta CLI \_|\_ Cloud Quotas \_|\_ Google\

- URL: [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples)
- Source ID: `site-docs-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example gcloud quota information commands This section provides examples that show how to use gcloud beta quotas info commands to view quota information for a particular service or for an organization.
- The output from the gcloud beta quotas info list command contains text similar to the following sample: ... "quotaInfos" : [ ... { "name" : "projects/PROJECT NUMBER/locations/global/services/compute.googleapis.com/quotaInfos/CPUS-per-project-region" , "quotaId" : "CPUS-per-project-region" , "metric" : "compute.googleapis.com/cpus" , "containerType" : "PROJECT" , "dimensions" : [ "region" ], "dimensionsInfo" : [ { "details" : { "value" : 20 }, "applicableLocations" : [ "us-central1" , "us-central2" , "us-west1" , "us-east1" ] ... } ] }, ... ] ...
- The Limit name column shows the quota ID. gcloud To find the quota ID value by using the gcloud CLI, run the following command to list your quota information for the specified service: Enter the following gcloud CLI command in a terminal window: gcloud beta quotas info list --service = SERVICE NAME --project = PROJECT ID OR NUMBER \ --billing-project = BILLING PROJECT ID OR NUMBER Replace the following: SERVICE NAME : the service name with quotas that you want to see—for example, the service name for Compute Engine is compute.googleapis.com .
- View quota information for an organization To view the same service's quota details for an organization, run the following command: gcloud beta quotas info list --service = SERVICE NAME --organization = ORGANIZATION ID \ --billing-project = BILLING PROJECT ID OR NUMBER Replace the following: SERVICE NAME : the service name with quotas that you want to see—for example, the service name for Compute Engine is compute.googleapis.com .

### View and manage quotas \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage)
- Source ID: `site-docs-root`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a complete list of gcloud beta quotas commands and flags, see the gcloud beta quotas section of the Google Cloud CLI reference. gcloud beta quotas info gcloud beta quotas preferences Request project quota For more information about requesting additional project quotas , refer to the Project quota requests support article.
- See the following sections for more information: For example gcloud beta quotas info and gcloud beta quotas preferences commands, see Use the gcloud CLI to view and manage quotas .
- Manage quotas using the gcloud CLI To use the gcloud CLI, make sure you have installed and initialized the latest version of the gcloud CLI, including the beta commands component.
- Required roles To get the permissions that you need to request quota adjustments, ask your administrator to grant you the following IAM roles on the project, folder, or organization: To view quotas: Quota Viewer ( roles/servicemanagement.quotaViewer ) To request quota adjustments: Quota Administrator ( roles/servicemanagement.quotaAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Use custom organization policies \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/custom-constraints](https://docs.cloud.google.com/docs/quotas/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test the policy To test the policy, create a quota preference request: For example, run the following gcloud CLI command to create a quota preference for Compute Engine: gcloud beta quotas preferences create \ --service = compute.googleapis.com \ --quota-id = CPUS-per-project-region \ --preferred-value = 30 \ --project = PROJECT ID The output is similar to the following: Operation denied by org policy on resource 'projects/ PROJECT ID /locations/global': ["customConstraints/custom.restrictCPUsPerProjectRegion": "Deny quota change for the 'CPUS-per-project-region' quota ID of 'compute.googleapis.com' service."] Delete the example policy and constraint After you have tested the policy, you can delete it: Delete the policy: gcloud org-policies delete custom.restrictCPUsPerProjectRegion --project = PROJECT ID Delete the constraint: gcloud org-policies delete-custom-constraint custom.restrictCPUsPerProjectRegion \ --organization = ORGANIZATION ID Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Apply the constraint: gcloud org-policies set-custom-constraint quota-constraint.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.restrictCPUsPerProjectRegion DENY CREATE,UPDATE cloudquotas.googleapis.com/QuotaPreference Restrict quota update for compute CPUS-per-project-region Create the policy Save the following file as quota-policy.yaml : name : projects/ PROJECT ID /policies/custom.restrictCPUsPerProjectRegion spec : rules : - enforce : true Replace PROJECT ID with your project ID.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy with the org-policies set-policy command and the spec flag: gcloud org-policies set-policy POLICY PATH --update-mask = spec Replace POLICY PATH with the full path to your organization policy YAML file.
- To enforce the organization policy in dry-run mode , run the following command with the dryRunSpec flag: gcloud org-policies set-policy POLICY PATH --update-mask = dryRunSpec Replace POLICY PATH with the full path to your organization policy YAML file.

### "Set up quota alerts and monitoring \_|\_ Cloud Quotas \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/docs/quotas/set-up-quota-alerts](https://docs.cloud.google.com/docs/quotas/set-up-quota-alerts)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To skip lines that don't list metric names, pass the output to a command such as grep with metric: as the search term, or use the gcloud CLI --format flag: gcloud beta quotas info list --project= PROJECT ID OR NUMBER \ --service= SERVICE NAME --format="value(metric)" Replace the following: PROJECT ID OR NUMBER : the project ID or project number.
- To filter the results, enter a property name or value in the field next to filter list Filter . gcloud To get the metric names for a Google Cloud service by using the gcloud CLI, run the quotas info list command.
- This document describes how to set up alerts, create charts, and find more information about using Cloud Monitoring for Cloud Quotas.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

