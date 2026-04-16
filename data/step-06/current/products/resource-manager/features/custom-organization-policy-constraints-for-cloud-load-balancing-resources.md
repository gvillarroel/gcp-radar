---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.030Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Custom organization policy constraints for Cloud Load Balancing resources"
feature_slug: "custom-organization-policy-constraints-for-cloud-load-balancing-resources"
latest_feature_date: "2025-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
keywords:
  - "custom"
  - "organization"
  - "policy"
  - "constraints"
  - "load"
  - "balancing"
  - "resources"
  - "can"
---

# Custom organization policy constraints for Cloud Load Balancing resources

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Cloud Load Balancing resources can use custom constraints to define custom restrictions on Google Cloud services.

## Extended Definition

Cloud Load Balancing resources can use custom constraints to define custom restrictions on Google Cloud services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)

## Supporting Pages

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: cloudresourcemanager.googleapis.com/Project cloudresourcemanager.googleapis.com/Folder To learn more about Organization Policy, see Custom organization policies .
- Test the policy Create a project with project ID sampleDemoProject in the organization: gcloud projects create sampleDemoProject \ --organization = ORGANIZATION ID The output is the following: PERMISSION DENIED: The caller does not have permission Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.

### "Create custom constraints for Essential Contacts \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- Source ID: `site-docs-reference-2`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: essentialcontacts.googleapis.com/Contact To learn more about Organization Policy, see Custom organization policies .
- Test the policy Try creating a contact for a different category: gcloud essential-contacts create --email = randomemail@example.com --language = en --notification-categories = security The output is similar to the following: (gcloud.essential-contacts.create) FAILED PRECONDITION: Precondition check failed. - '@type': type.googleapis.com/google.rpc.ErrorInfo domain: iam.googleapis.com metadata: customConstraints: customConstraints/custom.onlyTechnicalNotificationsAllowed reason: CUSTOM ORG POLICY VIOLATION - '@type': type.googleapis.com/google.rpc.DebugInfo detail: '[ORIGINAL ERROR] generic::failed precondition: com.google.apps.framework.auth.IamFailedPreconditionException: Operation denied by custom org policy: ["customConstraints/custom.onlyTechnicalNotificationsAllowed": "The contact can only be subscribed to technical notifications."]. [google.rpc.error details ext] { details { [type.googleapis.com/google.rpc.ErrorInfo] { reason: "CUSTOM ORG POLICY VIOLATION" domain: "iam.googleapis.com" metadata { key: "customConstraints" value: "customConstraints/custom.onlyTechnicalNotificationsAllowed" } } } }' Essential Contacts supported resources The following table lists the Essential Contacts resources that you can reference in custom constraints.
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .
- Organization policies enforced on organization resources The following table lists the organization policy constraints that are automatically enforced when you create an organization resource.
- Restrict identities by domain constraints/iam.allowedPolicyMemberDomains Limit resource sharing to identities that belong to a particular organization resource or Google Workspace customer ID.
- Disable organization policies To disable or delete an organization policy, run the following command: gcloud org-policies delete CONSTRAINT NAME --organization = ORGANIZATION ID Replace the following: CONSTRAINT NAME : the name of the organization policy constraint that you want to delete—for example, iam.allowedPolicyMemberDomains ORGANIZATION ID : the unique identifier of your organization What's next For more information about creating and managing organization policies, see Using constraints .

