---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:30.394Z"
product_name: "Infrastructure Manager"
product_slug: "infrastructure-manager"
feature_name: "Quota limit enforcement"
feature_slug: "quota-limit-enforcement"
latest_feature_date: "2024-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/infrastructure-manager/docs/quotas"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deployments-revisions"
keywords:
  - "quota"
  - "limit"
  - "enforcement"
  - "validate"
  - "limits"
  - "and"
  - "block"
  - "deployments"
---

# Quota limit enforcement

Product: Infrastructure Manager
Coverage: MEDIUM

## Step 02 Summary

Validate quota limits and block deployments that would exceed them.

## Extended Definition

Validate quota limits and block deployments that would exceed them.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/infrastructure-manager/docs/quotas](https://docs.cloud.google.com/infrastructure-manager/docs/quotas)
- [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- [https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints](https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/infrastructure-manager/docs/deployments-revisions](https://docs.cloud.google.com/infrastructure-manager/docs/deployments-revisions)

## Supporting Pages

### Quotas and limits \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/quotas](https://docs.cloud.google.com/infrastructure-manager/docs/quotas)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Allocation quotas The following quotas don't reset over time and instead are released when you release the resource: Quotas Value Deployments per project per region 1,000 Previews per project per region 1,000 Rate quotas The following quotas apply to Infra Manager requests: Quota Value Mutating requests per minute per project per region 20 Number of API requests per minute per project per region 1,200 Usage limits Infra Manager enforces the following usage limits: Usage limit Value Number of Terraform input variables 150 Number of resources returned when listing resources 500 Length of identifiers in characters 40 Size of the API payload in bytes 950,000 Number of the historical revisions 100 Caution: The API payload limit is inclusive of metadata associated with your API payload.
- Cloud Build quotas and limits implications Infra Manager uses Cloud Build to create and update deployments.
- Infra Manager uses the quota-validation flag to determine whether to validate the resources outlined in your Terraform configuration as part of the gcloud infra-manager deployments apply command.
- Home Documentation Infrastructure as code Infrastructure Manager Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.

### Deploy infrastructure using Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Quotas and limits .
- For more information, see Quotas and limits .
- For more information, see Quotas and limits .
- See quotas and limits for more information.

### "Manage Infrastructure Manager resources using custom constraints \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints](https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin, you must have the following: Your organization ID A project ID Create the constraint To create a custom constraint, follow these steps: Create the following YAML file and save it as constraint-import-resources.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.disallowImportExistingResources resourceTypes : - config.googleapis.com/Deployment methodTypes : - CREATE condition : "resource.importExistingResources == true" actionType : DENY displayName : Reject existing resources description : New deployments disallow the import of existing resources.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy. on the organization resource To create or update a deployment or preview deployment: config.deployments.create on the project resource config.deployments.update on the project resource config.previews.create on the project resource You might also be able to get these permissions with custom roles or other predefined roles .
- Test the custom organization policy The following example creates a custom constraint and policy that forbids all new deployments from importing existing resources.
- Under Enforcement method , select whether to enforce the constraint on a REST CREATE method or both CREATE and UPDATE methods.

### "Deployments, revisions, and previews overview \_|\_ Infrastructure Manager\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deployments-revisions](https://docs.cloud.google.com/infrastructure-manager/docs/deployments-revisions)
- Source ID: `site-iam-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Infrastructure as code Infrastructure Manager Guides Send feedback Deployments, revisions, and previews overview Stay organized with collections Save and categorize content based on your preferences.
- End with a number or lowercase letter Cannot be the string archived-deployments or archived-previews Must be unique within the project and location where Infra Manager is run.
- End with a number or lowercase letter Cannot be the string archived-deployments or archived-previews Must be unique within the project and location where Infra Manager is run.
- This page describes deployments and revisions, including the following: List of metadata stored for each deployment.

