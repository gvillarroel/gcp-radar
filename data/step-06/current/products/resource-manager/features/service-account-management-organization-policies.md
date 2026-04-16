---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.093Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Service account management organization policies"
feature_slug: "service-account-management-organization-policies"
latest_feature_date: "2019-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization"
  - "https://docs.cloud.google.com/resource-manager/docs/handle-special-cases"
  - "https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs"
keywords:
  - "account"
  - "management"
  - "organization"
  - "policies"
  - "provides"
  - "managing"
  - "accounts"
---

# Service account management organization policies

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Provides organization policies for managing service accounts.

## Extended Definition

Provides organization policies for managing service accounts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization)
- [https://docs.cloud.google.com/resource-manager/docs/handle-special-cases](https://docs.cloud.google.com/resource-manager/docs/handle-special-cases)
- [https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs](https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs)

## Supporting Pages

### "Set up a Google Cloud organization resource \_|\_ Resource Manager \_|\_\

- URL: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For this reason, we recommend against using Google Workspace or Cloud Identity super administrator accounts for day-to-day management of your organization resource.
- Google Workspace or Cloud Identity super administrator responsibilities, in the context of Google Cloud organization resource setup are: Assigning the Organization Administrator role to some users Being a point of contact in case of recovery issues Controlling the lifecycle of the Google Workspace or Cloud Identity account and organization resource as explained under Delete an organization The Organization Administrator , once assigned, can assign Identity and Access Management roles to other users.
- These super administrator accounts should be used carefully because they have a lot of control over your organization resource and all the resources underneath it.
- If the organization resource is available and you don't have the IAM permissions to view it, you can still create projects and billing accounts.

### Handle special cases \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/handle-special-cases](https://docs.cloud.google.com/resource-manager/docs/handle-special-cases)
- Source ID: `site-iam-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If a customer's source organization resource has the legacy behavior (service accounts attachment is possible without the normal role grant) and the destination organization resource does not, grant the Service Account User role ( roles/iam.serviceAccountUser ) to users that attach these service accounts to resources.
- Cross-project service accounts In the context of migrating a cross-project service account , the following cases apply: If you migrate a project that has a cross-project service account attached to it, that service account will continue to function in the destination organization resource.
- In the filter box at the top of the list of organization policies, enter constraints/appengine.enforceServiceAccountActAsCheck .
- Repeat steps 3 and 4 for each of the following organization policy constraints: appengine.enforceServiceAccountActAsCheck dataflow.enforceComputeDefaultServiceAccountCheck dataproc.enforceComputeDefaultServiceAccountCheck composer.enforceServiceAccountActAsCheck If any of these organization policy constraints appear, your organization resource uses the legacy behavior.

### "Manage multiple organization resources \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs](https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs)
- Source ID: `site-iam-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The super administrators of the Google Workspace account associated with your primary organization resource have administrative control over all with your primary organization resource have administrative control over all resources, including those created by users from the other Google Workspace accounts.
- If you want to maintain sub-organizations or departments within your company as isolated entities with no central administration, you can set up multiple Google Workspace or Cloud Identity accounts.
- Manage multiple organizations under a primary organization resource If your organization has multiple Google Workspace accounts, you have multiple organization resources by default.
- Operating multiple Cloud Identity organization resources therefore requires multiple Google Workspace accounts and the ability to manage identities across them.

