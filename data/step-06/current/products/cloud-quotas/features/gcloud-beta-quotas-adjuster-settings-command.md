---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:26:31.354Z"
product_name: "Cloud Quotas"
product_slug: "cloud-quotas"
feature_name: "gcloud beta quotas adjuster settings command"
feature_slug: "gcloud-beta-quotas-adjuster-settings-command"
latest_feature_date: "2025-01-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples"
  - "https://docs.cloud.google.com/docs/quotas/quota-adjuster"
  - "https://docs.cloud.google.com/docs/quotas/custom-constraints"
keywords:
  - "gcloud"
  - "beta"
  - "quotas"
  - "adjuster"
  - "settings"
  - "command"
  - "provides"
  - "to"
---

# gcloud beta quotas adjuster settings command

Product: Cloud Quotas
Coverage: LOW

## Step 02 Summary

Cloud Quotas provides a beta gcloud command to view or manage quota adjuster settings.

## Extended Definition

Cloud Quotas provides a beta gcloud command to view or manage quota adjuster settings.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples)
- [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster)
- [https://docs.cloud.google.com/docs/quotas/custom-constraints](https://docs.cloud.google.com/docs/quotas/custom-constraints)

## Supporting Pages

### "Manage quotas using the gcloud beta CLI \_|\_ Cloud Quotas \_|\_ Google\

- URL: [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optional: To view the current quota adjuster settings, run the following command: gcloud beta quotas adjuster settings describe --project= RESOURCE PROJECT ID The output is similar to the following example: enablement: ENABLED etag: 8izmJp6EI mOfLyhkQU9 name: projects/ RESOURCE PROJECT ID /locations/global/quotaAdjusterSettings updateTime: '2025-01-10T17:22:37.883221181Z' To enable quota adjuster for multiple client projects, follow the previous steps 5 to 8.
- Activate the service account using the service account key that you created earlier: gcloud auth activate-service-account --key-file= KEY FILE Enable quota adjuster on your resource project by specifying the project and the enablement setting: gcloud beta quotas adjuster settings update --project= RESOURCE PROJECT ID \ --enablement= enabled The enablement setting is required when using the gcloud CLI and must be set to enabled or disabled .
- Example gcloud quota information commands This section provides examples that show how to use gcloud beta quotas info commands to view quota information for a particular service or for an organization.
- Example gcloud quota preferences commands This section provides examples that show how to use gcloud beta quotas preferences commands to check existing quota preferences and adjust the quota value.

### Use the quota adjuster \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This updates the enablement status to enabled . gcloud Authenticate using the gcloud CLI: gcloud auth login To enable quota adjuster settings, use the gcloud beta quotas adjuster settings update command .
- This updates the enablement status to disabled . gcloud Authenticate to the gcloud CLI: gcloud auth login To disable quota adjuster settings, use the gcloud beta quotas adjuster settings update command .
- Disable quota adjuster on an organization To specify an organization , use the --organization flag: gcloud beta quotas adjuster settings update --organization= ORGANIZATION ID --enablement=disabled Replace ORGANIZATION ID with the organization ID of the organization for which you want to disable the quota adjuster.
- Enable quota adjuster on an organization To specify an organization , use the --organization flag: gcloud beta quotas adjuster settings update --organization= ORGANIZATION ID --enablement=enabled Replace ORGANIZATION ID with the organization ID of the organization for which you want to enable the quota adjuster.

### Use custom organization policies \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/custom-constraints](https://docs.cloud.google.com/docs/quotas/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Test the policy To test the policy, create a quota preference request: For example, run the following gcloud CLI command to create a quota preference for Compute Engine: gcloud beta quotas preferences create \ --service = compute.googleapis.com \ --quota-id = CPUS-per-project-region \ --preferred-value = 30 \ --project = PROJECT ID The output is similar to the following: Operation denied by org policy on resource 'projects/ PROJECT ID /locations/global': ["customConstraints/custom.restrictCPUsPerProjectRegion": "Deny quota change for the 'CPUS-per-project-region' quota ID of 'compute.googleapis.com' service."] Delete the example policy and constraint After you have tested the policy, you can delete it: Delete the policy: gcloud org-policies delete custom.restrictCPUsPerProjectRegion --project = PROJECT ID Delete the constraint: gcloud org-policies delete-custom-constraint custom.restrictCPUsPerProjectRegion \ --organization = ORGANIZATION ID Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Apply the constraint: gcloud org-policies set-custom-constraint quota-constraint.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.restrictCPUsPerProjectRegion DENY CREATE,UPDATE cloudquotas.googleapis.com/QuotaPreference Restrict quota update for compute CPUS-per-project-region Create the policy Save the following file as quota-policy.yaml : name : projects/ PROJECT ID /policies/custom.restrictCPUsPerProjectRegion spec : rules : - enforce : true Replace PROJECT ID with your project ID.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy with the org-policies set-policy command and the spec flag: gcloud org-policies set-policy POLICY PATH --update-mask = spec Replace POLICY PATH with the full path to your organization policy YAML file.
- To enforce the organization policy in dry-run mode , run the following command with the dryRunSpec flag: gcloud org-policies set-policy POLICY PATH --update-mask = dryRunSpec Replace POLICY PATH with the full path to your organization policy YAML file.

