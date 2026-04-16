---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.080Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Disable creation of Cloud Armor security policies"
feature_slug: "disable-creation-of-cloud-armor-security-policies"
latest_feature_date: "2022-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse"
keywords:
  - "disable"
  - "creation"
  - "armor"
  - "security"
  - "policies"
  - "organization"
  - "policy"
  - "constraint"
---

# Disable creation of Cloud Armor security policies

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

This organization policy constraint blocks the creation of Cloud Armor security policies.

## Extended Definition

This organization policy constraint blocks the creation of Cloud Armor security policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)

## Supporting Pages

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disable organization policies To disable or delete an organization policy, run the following command: gcloud org-policies delete CONSTRAINT NAME --organization = ORGANIZATION ID Replace the following: CONSTRAINT NAME : the name of the organization policy constraint that you want to delete—for example, iam.allowedPolicyMemberDomains ORGANIZATION ID : the unique identifier of your organization What's next For more information about creating and managing organization policies, see Using constraints .
- Organization policy name Organization policy constraint Description Impact of enforcement Disable service account key creation constraints/iam.managed.disableServiceAccountKeyCreation Prevent users from creating persistent keys for service accounts.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .
- Manage enforcement of organization policies You can manage the enforcement of organization policies in the following ways: List organization policies To check whether the Google Cloud security baseline constraints are enforced on your organization, use the following command: gcloud resource-manager org-policies list --organization = ORGANIZATION ID Replace ORGANIZATION ID with the unique identifier of your organization.

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Disable creation of a folder within another folder to control the depth of the resource hierarchy tree. name : organizations/ ORGANIZATION ID /customConstraints/custom.disableFolderCreation resourceTypes : - cloudresourcemanager.googleapis.com/Folder methodTypes : - CREATE condition : "resource.parent.startsWith(" folders")" actionType : DENY displayName : Disable creation of a folder inside another folder description : Do not allow creation of a folder within another folder when the resource hierarchy is set to a maximum value of 1.
- Description Constraint syntax Deny creation of new projects in folder 1234 (secure admin folder). name : organizations/ ORGANIZATION ID /customConstraints/custom.disableNewProjectInSecureAdminFolder resourceTypes : - cloudresourcemanager.googleapis.com/Project methodTypes : - CREATE condition : "resource.parent == " organizations/1234"" actionType : DENY displayName : Disable new project creation in the secure admin folder description : Do not allow creation of new projects in the secure folders.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- Apply the policy: gcloud org-policies set-policy /policy-enable-dev-projects.yaml Verify that the policy exists: gcloud org-policies list --organization = ORGANIZATION ID The output is similar to the following: CONSTRAINT LIST POLICY BOOLEAN POLICY ETAG custom.allowProjectForDevIdOnly - SET COCsm5QGENiXi2E= After you apply the policy, Google Cloud takes about two minutes to start enforcing the policy.

### "ListAvailableOrgPolicyConstraintsResponse \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)
- Source ID: `site-api-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Constraints can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for Constraints at different locations in the organization's resource hierarchy.
- ListConstraint A Constraint that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a Policy .
- The Google Cloud Console will try to default to a configuration that matches the value specified in this Constraint . supportsUnder boolean Indicates whether subtrees of Cloud Resource Manager resource hierarchy can be used in Policy.allowed values and Policy.denied values .
- Immutable after creation. constraint type can be only one of the following: listConstraint object ( ListConstraint ) Defines this constraint as being a ListConstraint. booleanConstraint object ( BooleanConstraint ) Defines this constraint as being a BooleanConstraint.

