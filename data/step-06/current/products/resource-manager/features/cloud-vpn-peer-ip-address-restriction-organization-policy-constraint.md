---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.091Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Cloud VPN peer IP address restriction organization policy constraint"
feature_slug: "cloud-vpn-peer-ip-address-restriction-organization-policy-constraint"
latest_feature_date: "2020-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
  - "https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse"
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
keywords:
  - "vpn"
  - "peer"
  - "ip"
  - "address"
  - "restriction"
  - "organization"
  - "policy"
  - "constraint"
---

# Cloud VPN peer IP address restriction organization policy constraint

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Restricts peer IP addresses allowed through a Cloud VPN tunnel using an organization policy constraint.

## Extended Definition

Restricts peer IP addresses allowed through a Cloud VPN tunnel using an organization policy constraint.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)

## Supporting Pages

### "ListAvailableOrgPolicyConstraintsResponse \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Constraints can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for Constraints at different locations in the organization's resource hierarchy.
- ListConstraint A Constraint that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a Policy .
- The Google Cloud Console will try to default to a configuration that matches the value specified in this Constraint . supportsUnder boolean Indicates whether subtrees of Cloud Resource Manager resource hierarchy can be used in Policy.allowed values and Policy.denied values .
- Constraints have a default behavior determined by the constraintDefault field, which is the enforcement behavior that is used in the absence of a Policy being defined or inherited for the resource in question.

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Disable organization policies To disable or delete an organization policy, run the following command: gcloud org-policies delete CONSTRAINT NAME --organization = ORGANIZATION ID Replace the following: CONSTRAINT NAME : the name of the organization policy constraint that you want to delete—for example, iam.allowedPolicyMemberDomains ORGANIZATION ID : the unique identifier of your organization What's next For more information about creating and managing organization policies, see Using constraints .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .
- Organization policy name Organization policy constraint Description Impact of enforcement Disable service account key creation constraints/iam.managed.disableServiceAccountKeyCreation Prevent users from creating persistent keys for service accounts.
- Organization policies enforced on organization resources The following table lists the organization policy constraints that are automatically enforced when you create an organization resource.

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- Apply the policy: gcloud org-policies set-policy /policy-enable-dev-projects.yaml Verify that the policy exists: gcloud org-policies list --organization = ORGANIZATION ID The output is similar to the following: CONSTRAINT LIST POLICY BOOLEAN POLICY ETAG custom.allowProjectForDevIdOnly - SET COCsm5QGENiXi2E= After you apply the policy, Google Cloud takes about two minutes to start enforcing the policy.
- Test the policy Create a project with project ID sampleDemoProject in the organization: gcloud projects create sampleDemoProject \ --organization = ORGANIZATION ID The output is the following: PERMISSION DENIED: The caller does not have permission Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.

