---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.079Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "CMEK organization policy constraints"
feature_slug: "cmek-organization-policy-constraints"
latest_feature_date: "2022-08-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies"
keywords:
  - "cmek"
  - "organization"
  - "policy"
  - "constraints"
  - "help"
  - "ensure"
  - "customer"
  - "managed"
---

# CMEK organization policy constraints

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

CMEK organization policy constraints help ensure customer-managed encryption key usage across an organization.

## Extended Definition

CMEK organization policy constraints help ensure customer-managed encryption key usage across an organization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)

## Supporting Pages

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Organization policy name Organization policy constraint Description Impact of enforcement Disable service account key creation constraints/iam.managed.disableServiceAccountKeyCreation Prevent users from creating persistent keys for service accounts.
- Restrict identities by domain constraints/iam.allowedPolicyMemberDomains Limit resource sharing to identities that belong to a particular organization resource or Google Workspace customer ID.
- Disable organization policies To disable or delete an organization policy, run the following command: gcloud org-policies delete CONSTRAINT NAME --organization = ORGANIZATION ID Replace the following: CONSTRAINT NAME : the name of the organization policy constraint that you want to delete—for example, iam.allowedPolicyMemberDomains ORGANIZATION ID : the unique identifier of your organization What's next For more information about creating and managing organization policies, see Using constraints .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Organization Policy provides built-in managed constraints for various Google Cloud services.
- See the full list of managed organization policy constraints .
- Test the policy Create a project with project ID sampleDemoProject in the organization: gcloud projects create sampleDemoProject \ --organization = ORGANIZATION ID The output is the following: PERMISSION DENIED: The caller does not have permission Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: cloudresourcemanager.googleapis.com/Project cloudresourcemanager.googleapis.com/Folder To learn more about Organization Policy, see Custom organization policies .

### "Create custom constraints for Essential Contacts \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Organization Policy provides built-in managed constraints for various Google Cloud services.
- See the full list of managed organization policy constraints .
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: essentialcontacts.googleapis.com/Contact To learn more about Organization Policy, see Custom organization policies .
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .

