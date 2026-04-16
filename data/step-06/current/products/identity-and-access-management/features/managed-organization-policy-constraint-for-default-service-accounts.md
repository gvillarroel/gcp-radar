---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.393Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Managed organization policy constraint for default service accounts"
feature_slug: "managed-organization-policy-constraint-for-default-service-accounts"
latest_feature_date: "2024-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/best-practices-service-accounts"
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys"
  - "https://docs.cloud.google.com/iam/docs/attach-service-accounts"
  - "https://docs.cloud.google.com/iam/docs/service-account-overview"
keywords:
  - "managed"
  - "organization"
  - "policy"
  - "constraint"
  - "for"
  - "default"
  - "accounts"
  - "the"
---

# Managed organization policy constraint for default service accounts

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

The managed organization policy constraint prevents default service accounts from being granted the Editor or Owner roles.

## Extended Definition

The managed organization policy constraint prevents default service accounts from being granted the Editor or Owner roles.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- [https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)
- [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts)
- [https://docs.cloud.google.com/iam/docs/service-account-overview](https://docs.cloud.google.com/iam/docs/service-account-overview)

## Supporting Pages

### "Best practices for using service accounts securely \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- Source ID: `site-docs-root-2`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To prevent default service accounts from automatically being granted the Editor role, enable the Disable Automatic IAM Grants for Default Service Accounts ( constraints/iam.automaticIamGrantsForDefaultServiceAccounts ) constraint to your organization.
- Manage service accounts as resources Accounts for individual users are typically managed according to an organization's joiner-mover-leaver processes: When an employee joins, a new user account is created for them.
- Note : If your organization was created on or after May 3, 2024, these constraints are enforced by default.
- Note : If your organization was created on or after May 3, 2024, these constraints are enforced by default.

### "Best practices for managing service account keys \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)
- Source ID: `site-docs-root-2`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To prevent unnecessary usage of service account keys, use organization policy constraints : At the root of your organization's resource hierarchy , apply the Disable service account key creation and Disable service account key upload constraints to establish a default where service account keys are disallowed.
- If you need to use the Editor role, disable service account key upload and key creation by using organization policy constraints to help ensure that the Editor role can't be abused for privilege escalation.
- Use organization policy constraints to automatically disable leaked keys Even if you follow all of the best practices for service account keys, it's possible for your service account keys to be leaked.
- Use organization policy constraints to prevent creating new service account keys, and allow exceptions only for projects that have demonstrated that they cannot use a more secure alternative.

### "Attach service accounts to resources \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specifically, in the project where your service accounts are located, you shouldn't make any of these changes: Don't update the project's organization policies to enforce the iam.disableCrossProjectServiceAccountUsage boolean constraint.
- First, read the allow policy for the user-managed service account: The projects.serviceAccounts.getIamPolicy method returns the allow policy for the service account.
- You should receive a JSON response similar to the following: { "version": 1, "etag": "BwWl3KCTUMY=", "bindings": [ { "role": "roles/iam.serviceAccountUser", "members": [ "serviceAccount:my-service-account@my-project.iam.gserviceaccount.com" ] } ] } Next, modify the allow policy to grant the Service Account Token Creator role to the service agent. { "version" : 1 , "etag" : "BwWl3KCTUMY=" , "bindings" : [ { "role" : "roles/iam.serviceAccountTokenCreator" , "members" : [ "serviceAccount: SERVICE AGENT EMAIL " ] }, { "role" : "roles/iam.serviceAccountUser" , "members" : [ "serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" ] } ] } Replace the following: SERVICE AGENT EMAIL : The email address for the service agent SERVICE ACCOUNT NAME : The name of the user-managed service account.
- Optional: If you need to grant the role to another service agent, repeat the previous steps. gcloud Use the gcloud iam service-accounts add-iam-policy-binding command: gcloud iam service-accounts add-iam-policy-binding \ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --member = serviceAccount: SERVICE AGENT EMAIL \ --role = roles/iam.serviceAccountTokenCreator Replace the following values: SERVICE ACCOUNT NAME : The name of the user-managed service account that you are attaching to a resource.

### "Service accounts overview \_|\_ Identity and Access Management (IAM) \_\

- URL: [https://docs.cloud.google.com/iam/docs/service-account-overview](https://docs.cloud.google.com/iam/docs/service-account-overview)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you enforce this constraint, consider the following limitations: If you enforce this constraint in a project, or in all projects within an organization, then some Google Cloud services cannot create default service accounts .
- You can prevent the creation of service accounts by enforcing the constraints/iam.disableServiceAccountCreation organization policy constraint in an organization, project, or folder.
- This approach puts all of the service accounts for your organization in a small number of projects, which can make the service accounts easier to manage.
- For example, if you move a project out of a organization, then this principal set no longer includes that project's service accounts.

