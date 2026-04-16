---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.090Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Cloud Load Balancing creation restriction organization policy constraint"
feature_slug: "cloud-load-balancing-creation-restriction-organization-policy-constraint"
latest_feature_date: "2020-08-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
  - "https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse"
keywords:
  - "load"
  - "balancing"
  - "creation"
  - "restriction"
  - "organization"
  - "policy"
  - "constraint"
  - "restricts"
---

# Cloud Load Balancing creation restriction organization policy constraint

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Restricts creation of Cloud Load Balancing resources through an organization policy constraint.

## Extended Definition

Restricts creation of Cloud Load Balancing resources through an organization policy constraint.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)

## Supporting Pages

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Organization policy name Organization policy constraint Description Impact of enforcement Disable service account key creation constraints/iam.managed.disableServiceAccountKeyCreation Prevent users from creating persistent keys for service accounts.
- Note: For some organizations created after August 15, 2024, the constraints/compute.restrictProtocolForwardingCreationForTypes organization policy constraint might already be applied.
- Disable organization policies To disable or delete an organization policy, run the following command: gcloud org-policies delete CONSTRAINT NAME --organization = ORGANIZATION ID Replace the following: CONSTRAINT NAME : the name of the organization policy constraint that you want to delete—for example, iam.allowedPolicyMemberDomains ORGANIZATION ID : the unique identifier of your organization What's next For more information about creating and managing organization policies, see Using constraints .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- Disable creation of a folder within another folder to control the depth of the resource hierarchy tree. name : organizations/ ORGANIZATION ID /customConstraints/custom.disableFolderCreation resourceTypes : - cloudresourcemanager.googleapis.com/Folder methodTypes : - CREATE condition : "resource.parent.startsWith(" folders")" actionType : DENY displayName : Disable creation of a folder inside another folder description : Do not allow creation of a folder within another folder when the resource hierarchy is set to a maximum value of 1.
- Description Constraint syntax Deny creation of new projects in folder 1234 (secure admin folder). name : organizations/ ORGANIZATION ID /customConstraints/custom.disableNewProjectInSecureAdminFolder resourceTypes : - cloudresourcemanager.googleapis.com/Project methodTypes : - CREATE condition : "resource.parent == " organizations/1234"" actionType : DENY displayName : Disable new project creation in the secure admin folder description : Do not allow creation of new projects in the secure folders.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.

### "ListAvailableOrgPolicyConstraintsResponse \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Constraints can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for Constraints at different locations in the organization's resource hierarchy.
- ListConstraint A Constraint that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a Policy .
- The Google Cloud Console will try to default to a configuration that matches the value specified in this Constraint . supportsUnder boolean Indicates whether subtrees of Cloud Resource Manager resource hierarchy can be used in Policy.allowed values and Policy.denied values .
- Immutable after creation. constraint type can be only one of the following: listConstraint object ( ListConstraint ) Defines this constraint as being a ListConstraint. booleanConstraint object ( BooleanConstraint ) Defines this constraint as being a BooleanConstraint.

