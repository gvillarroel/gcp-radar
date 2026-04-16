---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.073Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Assured Workloads organization policy constraints"
feature_slug: "assured-workloads-organization-policy-constraints"
latest_feature_date: "2023-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse"
  - "https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
keywords:
  - "assured"
  - "workloads"
  - "organization"
  - "policy"
  - "constraints"
  - "two"
  - "automatically"
  - "configured"
---

# Assured Workloads organization policy constraints

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Two automatically configured organization policy constraints provide advanced regulatory control for Assured Workloads.

## Extended Definition

Two automatically configured organization policy constraints provide advanced regulatory control for Assured Workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)
- [https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs](https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs)
- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)

## Supporting Pages

### "ListAvailableOrgPolicyConstraintsResponse \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Constraints can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for Constraints at different locations in the organization's resource hierarchy.
- ListConstraint A Constraint that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a Policy .
- Constraints have a default behavior determined by the constraintDefault field, which is the enforcement behavior that is used in the absence of a Policy being defined or inherited for the resource in question.
- JSON representation Constraint JSON representation ConstraintDefault ListConstraint JSON representation BooleanConstraint The response returned from the projects.listAvailableOrgPolicyConstraints method.

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Organization policies enforced on organization resources The following table lists the organization policy constraints that are automatically enforced when you create an organization resource.
- Disable organization policies To disable or delete an organization policy, run the following command: gcloud org-policies delete CONSTRAINT NAME --organization = ORGANIZATION ID Replace the following: CONSTRAINT NAME : the name of the organization policy constraint that you want to delete—for example, iam.allowedPolicyMemberDomains ORGANIZATION ID : the unique identifier of your organization What's next For more information about creating and managing organization policies, see Using constraints .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .
- Organization policy name Organization policy constraint Description Impact of enforcement Disable service account key creation constraints/iam.managed.disableServiceAccountKeyCreation Prevent users from creating persistent keys for service accounts.

### "Manage multiple organization resources \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs](https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs)
- Source ID: `site-iam-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Compliant folder : An Assured Workloads folder , which provides additional regulatory, regional, or sovereign controls for Google Cloud resources.
- Compliant folder : An Assured Workloads folder , which provides additional regulatory, regional, or sovereign controls for Google Cloud resources.
- They can remove the domain from the Project Creator role in the organization resource's allow policy as well.
- Selecting this option will take you to Assured Workloads to create a folder .

