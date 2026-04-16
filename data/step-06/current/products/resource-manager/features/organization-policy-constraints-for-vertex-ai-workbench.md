---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.074Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Organization Policy constraints for Vertex AI Workbench"
feature_slug: "organization-policy-constraints-for-vertex-ai-workbench"
latest_feature_date: "2023-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-org"
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-folders"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
keywords:
  - "organization"
  - "policy"
  - "constraints"
  - "vertex"
  - "ai"
  - "workbench"
  - "define"
  - "access"
---

# Organization Policy constraints for Vertex AI Workbench

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

New organization policy constraints define access and creation controls for Vertex AI Workbench notebooks and instances.

## Extended Definition

New organization policy constraints define access and creation controls for Vertex AI Workbench notebooks and instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/access-control-folders](https://docs.cloud.google.com/resource-manager/docs/access-control-folders)
- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)

## Supporting Pages

### "Access control for organization resources with IAM \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Project essentialcontacts. essentialcontacts. contacts. create essentialcontacts. contacts. delete essentialcontacts.contacts.get essentialcontacts. contacts. list essentialcontacts. contacts. send essentialcontacts. contacts. update iam.policybindings. iam.policybindings.get iam.policybindings.list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager.capabilities. resourcemanager. capabilities. get resourcemanager. capabilities. update resourcemanager. folders. createPolicyBinding resourcemanager. folders. deletePolicyBinding resourcemanager.folders.get resourcemanager. folders. getIamPolicy resourcemanager.folders.list resourcemanager. folders. searchPolicyBindings resourcemanager. folders. setIamPolicy resourcemanager. folders. updatePolicyBinding resourcemanager. organizations. resourcemanager. organizations. createPolicyBinding resourcemanager. organizations. deletePolicyBinding resourcemanager. organizations. get resourcemanager. organizations. getIamPolicy resourcemanager. organizations. searchPolicyBindings resourcemanager. organizations. setIamPolicy resourcemanager. organizations. updatePolicyBinding resourcemanager. projects. createPolicyBinding resourcemanager. projects. deletePolicyBinding resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager.projects.list resourcemanager. projects. searchPolicyBindings resourcemanager. projects. setIamPolicy resourcemanager. projects. updatePolicyBinding Organization Viewer ( roles/ resourcemanager.organizationViewer ) Provides access to view an organization.
- Lowest-level resources where you can grant this role: Organization cloudasset. assets. analyzeOrgPolicy cloudasset. assets. exportResource cloudasset.assets.listResource cloudasset. assets. searchAllResources orgpolicy. orgpolicy.constraints.list orgpolicy. customConstraints. create orgpolicy. customConstraints. delete orgpolicy. customConstraints. get orgpolicy. customConstraints. list orgpolicy. customConstraints. update orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set policysimulator. orgPolicyViolations. list policysimulator. orgPolicyViolationsPreviews. policysimulator. orgPolicyViolationsPreviews. create policysimulator. orgPolicyViolationsPreviews. get policysimulator. orgPolicyViolationsPreviews. list recommender. orgPolicyInsights. recommender. orgPolicyInsights. get recommender. orgPolicyInsights. list recommender. orgPolicyInsights. update recommender. orgPolicyRecommendations. recommender. orgPolicyRecommendations. get recommender. orgPolicyRecommendations. list recommender. orgPolicyRecommendations. update Browser ( roles/ browser ) Read access to browse the hierarchy for a project, including the folder, organization, and allow policy.
- Lowest-level resources where you can grant this role: Organization resourcemanager. organizations. get Organization Policy Administrator ( roles/ orgpolicy.policyAdmin ) Provides access to define what restrictions an organization wants to place on the configuration of cloud resources by setting Organization Policies.
- The Organization Policy constraint constraints/resourcemanager.accessBoundaries is a list constraint that is enforced on your organization resource.

### "Access control for folders with IAM \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-folders](https://docs.cloud.google.com/resource-manager/docs/access-control-folders)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Folder essentialcontacts.contacts.get essentialcontacts. contacts. list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager.capabilities. resourcemanager. capabilities. get resourcemanager. capabilities. update resourcemanager.folders.delete resourcemanager.folders.get resourcemanager. folders. getIamPolicy resourcemanager.folders.list resourcemanager. folders. searchPolicyBindings resourcemanager. folders. undelete resourcemanager.folders.update resourcemanager.projects.get resourcemanager.projects.list Folder Mover ( roles/ resourcemanager.folderMover ) Provides permission to move projects and folders into and out of a parent organization or folder.
- Lowest-level resources where you can grant this role: Folder essentialcontacts.contacts.get essentialcontacts. contacts. list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager. capabilities. get resourcemanager.folders.get resourcemanager.folders.list resourcemanager.projects.get resourcemanager.projects.list Creating custom roles In addition to the predefined roles described in this topic, you can also create custom roles that are collections of permissions that you tailor to your needs.
- Lowest-level resources where you can grant this role: Folder essentialcontacts. essentialcontacts. contacts. create essentialcontacts. contacts. delete essentialcontacts.contacts.get essentialcontacts. contacts. list essentialcontacts. contacts. send essentialcontacts. contacts. update iam.policybindings. iam.policybindings.get iam.policybindings.list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager.capabilities. resourcemanager. capabilities. get resourcemanager. capabilities. update resourcemanager.folders. resourcemanager.folders.create resourcemanager. folders. createPolicyBinding resourcemanager.folders.delete resourcemanager. folders. deletePolicyBinding resourcemanager.folders.get resourcemanager. folders. getIamPolicy resourcemanager.folders.list resourcemanager.folders.move resourcemanager. folders. searchPolicyBindings resourcemanager. folders. setIamPolicy resourcemanager. folders. undelete resourcemanager.folders.update resourcemanager. folders. updatePolicyBinding resourcemanager. hierarchyNodes. resourcemanager. hierarchyNodes. createTagBinding resourcemanager. hierarchyNodes. deleteTagBinding resourcemanager. hierarchyNodes. listEffectiveTags resourcemanager. hierarchyNodes. listTagBindings resourcemanager. projects. createPolicyBinding resourcemanager. projects. deletePolicyBinding resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager.projects.list resourcemanager.projects.move resourcemanager. projects. searchPolicyBindings resourcemanager. projects. setIamPolicy resourcemanager. projects. updatePolicyBinding Folder IAM Admin ( roles/ resourcemanager.folderIamAdmin ) Provides permissions to administer allow policies on folders.
- Type of actions Roles required Resource level Administer folders across the organization resource Folder Admin Organization resource Administer a folder and all projects and folders it contains Folder Admin Specific folder Access and administer a folder's allow policies Folder IAM Admin Specific folder Create new folders Folder Creator Parent resource for the location of the new folders Move folders and projects Folder Mover Parent resource for both the original folder location and the new folder location Move a project to a new folder Project Editor or Project Owner Parent resource for both the original project location and new project location Delete a folder Folder Editor or Folder Admin Specific folder Best practices for using IAM roles and permissions with Folders When assigning IAM roles and permissions for use with Folders, keep the following in mind: Use groups whenever possible to manage principals.

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .
- Disable organization policies To disable or delete an organization policy, run the following command: gcloud org-policies delete CONSTRAINT NAME --organization = ORGANIZATION ID Replace the following: CONSTRAINT NAME : the name of the organization policy constraint that you want to delete—for example, iam.allowedPolicyMemberDomains ORGANIZATION ID : the unique identifier of your organization What's next For more information about creating and managing organization policies, see Using constraints .
- Organization policy name Organization policy constraint Description Impact of enforcement Disable service account key creation constraints/iam.managed.disableServiceAccountKeyCreation Prevent users from creating persistent keys for service accounts.
- Organization policies enforced on organization resources The following table lists the organization policy constraints that are automatically enforced when you create an organization resource.

