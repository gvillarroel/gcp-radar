---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.091Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Automatic IAM permission grants to new service accounts restriction organization policy constraint"
feature_slug: "automatic-iam-permission-grants-to-new-service-accounts-restriction-organization-policy-constraint"
latest_feature_date: "2020-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/handle-special-cases"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization"
keywords:
  - "automatic"
  - "iam"
  - "permission"
  - "grants"
  - "accounts"
  - "restriction"
  - "organization"
  - "policy"
---

# Automatic IAM permission grants to new service accounts restriction organization policy constraint

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Restricts automatic IAM permission grants to new service accounts through an organization policy constraint.

## Extended Definition

Restricts automatic IAM permission grants to new service accounts through an organization policy constraint.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/handle-special-cases](https://docs.cloud.google.com/resource-manager/docs/handle-special-cases)
- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization)

## Supporting Pages

### Handle special cases \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/handle-special-cases](https://docs.cloud.google.com/resource-manager/docs/handle-special-cases)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- However, you will not be able to use that service account on any resources that have a domain restriction organization policy applied to them that restricts them to the source organization resource's domain.
- You have applied an organization policy with the domain restriction constraint to project-C , which only allows it to access the domain of organizations/12345678901.
- This means the Privileged Access Manager service agent, which the grant uses, loses the permissions to modify the IAM policy of a resource in the new organization.
- Repeat steps 3 and 4 for each of the following organization policy constraints: appengine.enforceServiceAccountActAsCheck dataflow.enforceComputeDefaultServiceAccountCheck dataproc.enforceComputeDefaultServiceAccountCheck composer.enforceServiceAccountActAsCheck If any of these organization policy constraints appear, your organization resource uses the legacy behavior.

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .
- Organization policy name Organization policy constraint Description Impact of enforcement Disable service account key creation constraints/iam.managed.disableServiceAccountKeyCreation Prevent users from creating persistent keys for service accounts.
- Prevent the Editor role from being granted to default service accounts constraints/iam.automaticIamGrantsForDefaultServiceAccounts Prevent default service accounts from receiving the overly permissive IAM Editor role at creation.
- Required roles To get the permissions that you need to manage organization policies, ask your administrator to grant you the Organization policy administrator ( roles/orgpolicy.policyAdmin ) IAM role on the organization.

### "Set up a Google Cloud organization resource \_|\_ Resource Manager \_|\_\

- URL: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- If the organization resource is available and you don't have the IAM permissions to view it, you can still create projects and billing accounts.
- When the organization resource is created, all users in your domain are automatically granted Project Creator ( roles/resourcemanager.projectCreator ) and Billing Account Creator ( roles/billing.creator ) IAM roles at the organization resource level.
- As the Organization Administrator takes control, they might want to remove these organization-level permissions to start locking down access at a finer granularity (for instance, at the folder or project level).
- Get your organization resource ID The organization resource ID is a unique identifier for an organization resource and is automatically created when your organization resource is created.

