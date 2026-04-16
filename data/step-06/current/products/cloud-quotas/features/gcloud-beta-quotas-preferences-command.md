---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:54.006Z"
product_name: "Cloud Quotas"
product_slug: "cloud-quotas"
feature_name: "gcloud beta quotas preferences command"
feature_slug: "gcloud-beta-quotas-preferences-command"
latest_feature_date: "2025-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples"
  - "https://docs.cloud.google.com/docs/quotas/view-manage"
  - "https://docs.cloud.google.com/docs/quotas/custom-constraints"
  - "https://docs.cloud.google.com/docs/quotas/quota-adjuster"
keywords:
  - "gcloud"
  - "beta"
  - "quotas"
  - "preferences"
  - "command"
  - "provides"
  - "to"
  - "manage"
---

# gcloud beta quotas preferences command

Product: Cloud Quotas
Coverage: MEDIUM

## Step 02 Summary

Cloud Quotas provides a beta gcloud command to manage quota preferences.

## Extended Definition

Cloud Quotas provides a beta gcloud command to manage quota preferences.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples)
- [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage)
- [https://docs.cloud.google.com/docs/quotas/custom-constraints](https://docs.cloud.google.com/docs/quotas/custom-constraints)
- [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster)

## Supporting Pages

### "Manage quotas using the gcloud beta CLI \_|\_ Cloud Quotas \_|\_ Google\

- URL: [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples)
- Source ID: `site-docs-reference`
- Final score: 351
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example gcloud quota preferences commands This section provides examples that show how to use gcloud beta quotas preferences commands to check existing quota preferences and adjust the quota value.
- The output looks similar to the following: { "createTime" : " CREATE TIME " , "dimensions" :{ " DIMENSION KEY 1 " : " DIMENSION VALUE 1 " , " DIMENSION KEY 2 " : " DIMENSION VALUE 2 " }, "etag" : " ETAG VALUE " , "name" : "projects/ PROJECT ID OR NUMBER /locations/global/quotaPreferences/ PREFERENCE ID " , "quotaConfig" :{ "grantedValue" : " GRANTED VALUE " , "preferredValue" : " PREFERRED VALUE " , "traceId" : " TRACE ID " }, "quotaId" : " QUOTA ID " , "reconciling" : true , "service" : " SERVICE NAME " , "updateTime" : " UPDATE TIME " , } Request a quota increase adjustment when a quota preference has been set To request a quota increase adjustment for a specific region and there is already a preference, run the following command: gcloud beta quotas preferences update PREFERENCE ID --preferred-value = PREFERRED VALUE \ --quota-id = QUOTA ID --service = SERVICE NAME --project = PROJECT ID OR NUMBER \ --billing-project = BILLING PROJECT ID OR NUMBER --email = EMAIL \ --justification = JUSTIFICATION Replace the following: PREFERENCE ID : the preference ID, which is required as the first argument when using the gcloud beta quotas preferences update command.
- Request a quota increase adjustment when a quota preference hasn't been set yet To request a quota adjustment using the gcloud CLI, run the following command: gcloud beta quotas preferences create --project = PROJECT ID OR NUMBER \ --service = SERVICE NAME \ --quota-id = QUOTA ID \ --dimensions = DIMENSIONS \ --preferred-value = PREFERRED VALUE \ --billing-project = BILLING PROJECT ID OR NUMBER \ --email = EMAIL \ --justification = JUSTIFICATION \ --preference-id = PREFERENCE ID Replace the following: PROJECT ID OR NUMBER : the project ID or project number.
- View an existing quota preference To view the details of the quota preference that you just created, run the following command: gcloud beta quotas preferences describe PREFERENCE ID \ --project = PROJECT ID OR NUMBER \ --billing-project = BILLING PROJECT ID OR NUMBER Replace the following: PREFERENCE ID : the preference ID, which is required as the first argument when using the gcloud beta quotas preferences describe command.

### View and manage quotas \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage)
- Source ID: `site-docs-root`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the following sections for more information: For example gcloud beta quotas info and gcloud beta quotas preferences commands, see Use the gcloud CLI to view and manage quotas .
- For a complete list of gcloud beta quotas commands and flags, see the gcloud beta quotas section of the Google Cloud CLI reference. gcloud beta quotas info gcloud beta quotas preferences Request project quota For more information about requesting additional project quotas , refer to the Project quota requests support article.
- Manage quotas using the gcloud CLI To use the gcloud CLI, make sure you have installed and initialized the latest version of the gcloud CLI, including the beta commands component.
- Manage quotas using the Cloud Quotas API You can use the Cloud Quotas API to get current quota information and set quota preferences for Google Cloud APIs and services.

### Use custom organization policies \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/custom-constraints](https://docs.cloud.google.com/docs/quotas/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test the policy To test the policy, create a quota preference request: For example, run the following gcloud CLI command to create a quota preference for Compute Engine: gcloud beta quotas preferences create \ --service = compute.googleapis.com \ --quota-id = CPUS-per-project-region \ --preferred-value = 30 \ --project = PROJECT ID The output is similar to the following: Operation denied by org policy on resource 'projects/ PROJECT ID /locations/global': ["customConstraints/custom.restrictCPUsPerProjectRegion": "Deny quota change for the 'CPUS-per-project-region' quota ID of 'compute.googleapis.com' service."] Delete the example policy and constraint After you have tested the policy, you can delete it: Delete the policy: gcloud org-policies delete custom.restrictCPUsPerProjectRegion --project = PROJECT ID Delete the constraint: gcloud org-policies delete-custom-constraint custom.restrictCPUsPerProjectRegion \ --organization = ORGANIZATION ID Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Apply the constraint: gcloud org-policies set-custom-constraint quota-constraint.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.restrictCPUsPerProjectRegion DENY CREATE,UPDATE cloudquotas.googleapis.com/QuotaPreference Restrict quota update for compute CPUS-per-project-region Create the policy Save the following file as quota-policy.yaml : name : projects/ PROJECT ID /policies/custom.restrictCPUsPerProjectRegion spec : rules : - enforce : true Replace PROJECT ID with your project ID.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy with the org-policies set-policy command and the spec flag: gcloud org-policies set-policy POLICY PATH --update-mask = spec Replace POLICY PATH with the full path to your organization policy YAML file.
- To enforce the organization policy in dry-run mode , run the following command with the dryRunSpec flag: gcloud org-policies set-policy POLICY PATH --update-mask = dryRunSpec Replace POLICY PATH with the full path to your organization policy YAML file.

### Use the quota adjuster \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This updates the enablement status to enabled . gcloud Authenticate using the gcloud CLI: gcloud auth login To enable quota adjuster settings, use the gcloud beta quotas adjuster settings update command .
- This updates the enablement status to disabled . gcloud Authenticate to the gcloud CLI: gcloud auth login To disable quota adjuster settings, use the gcloud beta quotas adjuster settings update command .
- Disable quota adjuster on an organization To specify an organization , use the --organization flag: gcloud beta quotas adjuster settings update --organization= ORGANIZATION ID --enablement=disabled Replace ORGANIZATION ID with the organization ID of the organization for which you want to disable the quota adjuster.
- Enable quota adjuster on an organization To specify an organization , use the --organization flag: gcloud beta quotas adjuster settings update --organization= ORGANIZATION ID --enablement=enabled Replace ORGANIZATION ID with the organization ID of the organization for which you want to enable the quota adjuster.

