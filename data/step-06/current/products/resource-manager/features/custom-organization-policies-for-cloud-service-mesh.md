---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.043Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Custom organization policies for Cloud Service Mesh"
feature_slug: "custom-organization-policies-for-cloud-service-mesh"
latest_feature_date: "2025-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies"
  - "https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse"
keywords:
  - "custom"
  - "organization"
  - "policies"
  - "mesh"
  - "policy"
  - "constraints"
  - "generally"
  - "available"
---

# Custom organization policies for Cloud Service Mesh

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Organization Policy custom constraints are generally available for Cloud Service Mesh.

## Extended Definition

Organization Policy custom constraints are generally available for Cloud Service Mesh.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)

## Supporting Pages

### "Create custom constraints for Essential Contacts \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- Source ID: `site-docs-reference-2`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: essentialcontacts.googleapis.com/Contact To learn more about Organization Policy, see Custom organization policies .
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.
- After this operation is complete, your custom constraints are available as organization policies in your list of Google Cloud organization policies.
- Apply the constraint: gcloud org-policies set-custom-constraint constraint-technical-notification.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.onlyTechnicalNotificationsAllowed ALLOW CREATE,UPDATE essentialcontacts.googleapis.com/Contact TechnicalNotifications ...

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- Test the policy Create a project with project ID sampleDemoProject in the organization: gcloud projects create sampleDemoProject \ --organization = ORGANIZATION ID The output is the following: PERMISSION DENIED: The caller does not have permission Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: cloudresourcemanager.googleapis.com/Project cloudresourcemanager.googleapis.com/Folder To learn more about Organization Policy, see Custom organization policies .
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.
- After this operation is complete, your custom constraints are available as organization policies in your list of Google Cloud organization policies.

### "ListAvailableOrgPolicyConstraintsResponse \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Constraints can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for Constraints at different locations in the organization's resource hierarchy.
- JSON representation Constraint JSON representation ConstraintDefault ListConstraint JSON representation BooleanConstraint The response returned from the projects.listAvailableOrgPolicyConstraints method.
- Home Technology areas Resource Manager Reference Send feedback ListAvailableOrgPolicyConstraintsResponse Stay organized with collections Save and categorize content based on your preferences.
- Constraints have a default behavior determined by the constraintDefault field, which is the enforcement behavior that is used in the absence of a Policy being defined or inherited for the resource in question.

