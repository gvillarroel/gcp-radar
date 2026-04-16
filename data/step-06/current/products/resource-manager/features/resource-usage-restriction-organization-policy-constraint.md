---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.084Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Resource usage restriction organization policy constraint"
feature_slug: "resource-usage-restriction-organization-policy-constraint"
latest_feature_date: "2022-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse"
  - "https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview"
keywords:
  - "resource"
  - "usage"
  - "restriction"
  - "organization"
  - "policy"
  - "constraint"
  - "restricts"
---

# Resource usage restriction organization policy constraint

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

This organization policy constraint restricts resource usage.

## Extended Definition

This organization policy constraint restricts resource usage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)
- [https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview](https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview)

## Supporting Pages

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: cloudresourcemanager.googleapis.com/Project cloudresourcemanager.googleapis.com/Folder To learn more about Organization Policy, see Custom organization policies .
- Set up a custom constraint A custom constraint is defined in a YAML file by the resources, methods, conditions, and actions that are supported by the service on which you are enforcing the organization policy.
- If you enforce the constraint with the UPDATE method on a resource that violates the constraint, changes to that resource are blocked by the organization policy unless the change resolves the violation.

### "ListAvailableOrgPolicyConstraintsResponse \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Constraints can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for Constraints at different locations in the organization's resource hierarchy.
- The Google Cloud Console will try to default to a configuration that matches the value specified in this Constraint . supportsUnder boolean Indicates whether subtrees of Cloud Resource Manager resource hierarchy can be used in Policy.allowed values and Policy.denied values .
- Constraints have a default behavior determined by the constraintDefault field, which is the enforcement behavior that is used in the absence of a Policy being defined or inherited for the resource in question.
- Home Technology areas Resource Manager Reference Send feedback ListAvailableOrgPolicyConstraintsResponse Stay organized with collections Save and categorize content based on your preferences.

### "Introduction to organization restrictions \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview](https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For managed devices in an organization, the organization restrictions feature restricts access only to resources in authorized Google Cloud organizations.
- Common use cases Here are some common organization restrictions use cases: Restrict access to employees in your organization so that employees can access resources only in your Google Cloud organization and not other organizations.
- Home Documentation Security Resource Manager Guides Send feedback Introduction to organization restrictions Stay organized with collections Save and categorize content based on your preferences.
- How organization restrictions works In Google Cloud, Identity and Access Management (IAM) governs access to resources.

