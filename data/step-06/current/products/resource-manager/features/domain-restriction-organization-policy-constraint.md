---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.096Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Domain restriction organization policy constraint"
feature_slug: "domain-restriction-organization-policy-constraint"
latest_feature_date: "2018-07-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/handle-special-cases"
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-org"
keywords:
  - "domain"
  - "restriction"
  - "organization"
  - "policy"
  - "constraint"
  - "restricts"
  - "set"
  - "identities"
---

# Domain restriction organization policy constraint

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Restricts the set of identities that can be used in Identity and Access Management policies.

## Extended Definition

Restricts the set of identities that can be used in Identity and Access Management policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/handle-special-cases](https://docs.cloud.google.com/resource-manager/docs/handle-special-cases)
- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)

## Supporting Pages

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Restrict identities by domain constraints/iam.allowedPolicyMemberDomains Limit resource sharing to identities that belong to a particular organization resource or Google Workspace customer ID.
- Disable organization policies To disable or delete an organization policy, run the following command: gcloud org-policies delete CONSTRAINT NAME --organization = ORGANIZATION ID Replace the following: CONSTRAINT NAME : the name of the organization policy constraint that you want to delete—for example, iam.allowedPolicyMemberDomains ORGANIZATION ID : the unique identifier of your organization What's next For more information about creating and managing organization policies, see Using constraints .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .
- Organization policy name Organization policy constraint Description Impact of enforcement Disable service account key creation constraints/iam.managed.disableServiceAccountKeyCreation Prevent users from creating persistent keys for service accounts.

### Handle special cases \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/handle-special-cases](https://docs.cloud.google.com/resource-manager/docs/handle-special-cases)
- Source ID: `site-iam-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- However, you will not be able to use that service account on any resources that have a domain restriction organization policy applied to them that restricts them to the source organization resource's domain.
- You have applied an organization policy with the domain restriction constraint to project-C , which only allows it to access the domain of organizations/12345678901.
- If you migrate project-A to organizations/45678901234 , and then try to add serviceAccount-1 to the IAM binding for project-C , the binding will fail as it violates the domain restriction constraint.
- That project will continue to work with the attached service account even if there is an organization policy that restricts the domain of that project.

### "Access control for organization resources with IAM \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Project essentialcontacts. essentialcontacts. contacts. create essentialcontacts. contacts. delete essentialcontacts.contacts.get essentialcontacts. contacts. list essentialcontacts. contacts. send essentialcontacts. contacts. update iam.policybindings. iam.policybindings.get iam.policybindings.list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager.capabilities. resourcemanager. capabilities. get resourcemanager. capabilities. update resourcemanager. folders. createPolicyBinding resourcemanager. folders. deletePolicyBinding resourcemanager.folders.get resourcemanager. folders. getIamPolicy resourcemanager.folders.list resourcemanager. folders. searchPolicyBindings resourcemanager. folders. setIamPolicy resourcemanager. folders. updatePolicyBinding resourcemanager. organizations. resourcemanager. organizations. createPolicyBinding resourcemanager. organizations. deletePolicyBinding resourcemanager. organizations. get resourcemanager. organizations. getIamPolicy resourcemanager. organizations. searchPolicyBindings resourcemanager. organizations. setIamPolicy resourcemanager. organizations. updatePolicyBinding resourcemanager. projects. createPolicyBinding resourcemanager. projects. deletePolicyBinding resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager.projects.list resourcemanager. projects. searchPolicyBindings resourcemanager. projects. setIamPolicy resourcemanager. projects. updatePolicyBinding Organization Viewer ( roles/ resourcemanager.organizationViewer ) Provides access to view an organization.
- Lowest-level resources where you can grant this role: Organization cloudasset. assets. analyzeOrgPolicy cloudasset. assets. exportResource cloudasset.assets.listResource cloudasset. assets. searchAllResources orgpolicy. orgpolicy.constraints.list orgpolicy. customConstraints. create orgpolicy. customConstraints. delete orgpolicy. customConstraints. get orgpolicy. customConstraints. list orgpolicy. customConstraints. update orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set policysimulator. orgPolicyViolations. list policysimulator. orgPolicyViolationsPreviews. policysimulator. orgPolicyViolationsPreviews. create policysimulator. orgPolicyViolationsPreviews. get policysimulator. orgPolicyViolationsPreviews. list recommender. orgPolicyInsights. recommender. orgPolicyInsights. get recommender. orgPolicyInsights. list recommender. orgPolicyInsights. update recommender. orgPolicyRecommendations. recommender. orgPolicyRecommendations. get recommender. orgPolicyRecommendations. list recommender. orgPolicyRecommendations. update Browser ( roles/ browser ) Read access to browse the hierarchy for a project, including the folder, organization, and allow policy.
- Lowest-level resources where you can grant this role: Organization resourcemanager. organizations. get Organization Policy Administrator ( roles/ orgpolicy.policyAdmin ) Provides access to define what restrictions an organization wants to place on the configuration of cloud resources by setting Organization Policies.
- The Organization Policy constraint constraints/resourcemanager.accessBoundaries is a list constraint that is enforced on your organization resource.

