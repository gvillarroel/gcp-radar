---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.089Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Cloud NAT organization policy constraint"
feature_slug: "cloud-nat-organization-policy-constraint"
latest_feature_date: "2020-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-org"
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-folders"
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
keywords:
  - "nat"
  - "organization"
  - "policy"
  - "constraint"
  - "allows"
  - "organizations"
  - "control"
  - "usage"
---

# Cloud NAT organization policy constraint

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Allows organizations to control Cloud NAT usage through an organization policy constraint.

## Extended Definition

Allows organizations to control Cloud NAT usage through an organization policy constraint.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/access-control-folders](https://docs.cloud.google.com/resource-manager/docs/access-control-folders)
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)

## Supporting Pages

### "Access control for organization resources with IAM \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- Source ID: `site-iam-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Project essentialcontacts. essentialcontacts. contacts. create essentialcontacts. contacts. delete essentialcontacts.contacts.get essentialcontacts. contacts. list essentialcontacts. contacts. send essentialcontacts. contacts. update iam.policybindings. iam.policybindings.get iam.policybindings.list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager.capabilities. resourcemanager. capabilities. get resourcemanager. capabilities. update resourcemanager. folders. createPolicyBinding resourcemanager. folders. deletePolicyBinding resourcemanager.folders.get resourcemanager. folders. getIamPolicy resourcemanager.folders.list resourcemanager. folders. searchPolicyBindings resourcemanager. folders. setIamPolicy resourcemanager. folders. updatePolicyBinding resourcemanager. organizations. resourcemanager. organizations. createPolicyBinding resourcemanager. organizations. deletePolicyBinding resourcemanager. organizations. get resourcemanager. organizations. getIamPolicy resourcemanager. organizations. searchPolicyBindings resourcemanager. organizations. setIamPolicy resourcemanager. organizations. updatePolicyBinding resourcemanager. projects. createPolicyBinding resourcemanager. projects. deletePolicyBinding resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager.projects.list resourcemanager. projects. searchPolicyBindings resourcemanager. projects. setIamPolicy resourcemanager. projects. updatePolicyBinding Organization Viewer ( roles/ resourcemanager.organizationViewer ) Provides access to view an organization.
- For example, to make anotheradmin@gcp-test.com an Organization Administrator, change the previous example as follows: { "bindings" : [ { "members" : [ "user:testuser1@gcp-test.com" ], "role" : "roles/editor" }, { "members" : [ "user:admin@gcp-test.com" , "user:anotheradmin@gcp-test.com" ], "role" : "roles/resourcemanager.organizationAdmin" }, { "members" : [ "user:testuser20@gcp-test.com" ], "role" : "roles/resourcemanager.projectCreator" }, ], "etag" : "BwU1aRxWk30=" } Update the organization resource's allow policy by running the following command: gcloud alpha organizations set-iam-policy <var>ORGANIZATION ID</var> policy.json API Request: POST h tt ps : //cloudresourcemanager.googleapis.com/v3/organizations/12345:setIamPolicy { "policy" : { "version" : "0" , "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKHHiQ=" } } Response: { "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKJUiQ=" } The setIamPolicy() method lets you grant roles to users by attaching an allow policy to the organization resource.
- Lowest-level resources where you can grant this role: Organization cloudasset. assets. analyzeOrgPolicy cloudasset. assets. exportResource cloudasset.assets.listResource cloudasset. assets. searchAllResources orgpolicy. orgpolicy.constraints.list orgpolicy. customConstraints. create orgpolicy. customConstraints. delete orgpolicy. customConstraints. get orgpolicy. customConstraints. list orgpolicy. customConstraints. update orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set policysimulator. orgPolicyViolations. list policysimulator. orgPolicyViolationsPreviews. policysimulator. orgPolicyViolationsPreviews. create policysimulator. orgPolicyViolationsPreviews. get policysimulator. orgPolicyViolationsPreviews. list recommender. orgPolicyInsights. recommender. orgPolicyInsights. get recommender. orgPolicyInsights. list recommender. orgPolicyInsights. update recommender. orgPolicyRecommendations. recommender. orgPolicyRecommendations. get recommender. orgPolicyRecommendations. list recommender. orgPolicyRecommendations. update Browser ( roles/ browser ) Read access to browse the hierarchy for a project, including the folder, organization, and allow policy.
- Http ())) policy = crm . organizations () . getIamPolicy ( resource = flags . organizationId , body = {}) . execute () admin binding = next ( ( binding for binding in policy [ 'bindings' ] if binding [ 'role' ] == 'roles/resourcemanager.organizationAdmin' ), None ) Add an empty Organization Administrator binding if not present. if not admin binding : admin binding = { 'role' : 'roles/resourcemanager.organizationAdmin' , 'members' : [] } policy [ 'bindings' ] . append ( admin binding ) Add the new Admin (if necessary). new admin = 'user:' + flags . adminEmail if new admin not in admin binding [ 'members' ]: admin binding [ 'members' ] . append ( new admin ) policy = crm . organizations () . setIamPolicy ( resource = flags . organizationId , body = { 'resource' : flags . organizationId , 'policy' : policy }) . execute () print json . dumps ( policy , indent = 2 ) Restrict project visibility for users Users can see all projects they have access to in the Google Cloud console and in search queries, regardless of whether or not they are in the user's selected organization resource.

### "Access control for folders with IAM \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-folders](https://docs.cloud.google.com/resource-manager/docs/access-control-folders)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Folder essentialcontacts.contacts.get essentialcontacts. contacts. list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager.capabilities. resourcemanager. capabilities. get resourcemanager. capabilities. update resourcemanager.folders.delete resourcemanager.folders.get resourcemanager. folders. getIamPolicy resourcemanager.folders.list resourcemanager. folders. searchPolicyBindings resourcemanager. folders. undelete resourcemanager.folders.update resourcemanager.projects.get resourcemanager.projects.list Folder Mover ( roles/ resourcemanager.folderMover ) Provides permission to move projects and folders into and out of a parent organization or folder.
- Be aware that the setIamPolicy permission for organization, folder, and project resources allows the user to grant all other permissions, and so should be assigned with care.
- Lowest-level resources where you can grant this role: Folder essentialcontacts. essentialcontacts. contacts. create essentialcontacts. contacts. delete essentialcontacts.contacts.get essentialcontacts. contacts. list essentialcontacts. contacts. send essentialcontacts. contacts. update iam.policybindings. iam.policybindings.get iam.policybindings.list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager.capabilities. resourcemanager. capabilities. get resourcemanager. capabilities. update resourcemanager.folders. resourcemanager.folders.create resourcemanager. folders. createPolicyBinding resourcemanager.folders.delete resourcemanager. folders. deletePolicyBinding resourcemanager.folders.get resourcemanager. folders. getIamPolicy resourcemanager.folders.list resourcemanager.folders.move resourcemanager. folders. searchPolicyBindings resourcemanager. folders. setIamPolicy resourcemanager. folders. undelete resourcemanager.folders.update resourcemanager. folders. updatePolicyBinding resourcemanager. hierarchyNodes. resourcemanager. hierarchyNodes. createTagBinding resourcemanager. hierarchyNodes. deleteTagBinding resourcemanager. hierarchyNodes. listEffectiveTags resourcemanager. hierarchyNodes. listTagBindings resourcemanager. projects. createPolicyBinding resourcemanager. projects. deletePolicyBinding resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager.projects.list resourcemanager.projects.move resourcemanager. projects. searchPolicyBindings resourcemanager. projects. setIamPolicy resourcemanager. projects. updatePolicyBinding Folder IAM Admin ( roles/ resourcemanager.folderIamAdmin ) Provides permissions to administer allow policies on folders.
- Lowest-level resources where you can grant this role: Folder essentialcontacts.contacts.get essentialcontacts. contacts. list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager. capabilities. get resourcemanager.folders.get resourcemanager.folders.list resourcemanager.projects.get resourcemanager.projects.list Creating custom roles In addition to the predefined roles described in this topic, you can also create custom roles that are collections of permissions that you tailor to your needs.

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Disable creation of a folder within another folder to control the depth of the resource hierarchy tree. name : organizations/ ORGANIZATION ID /customConstraints/custom.disableFolderCreation resourceTypes : - cloudresourcemanager.googleapis.com/Folder methodTypes : - CREATE condition : "resource.parent.startsWith(" folders")" actionType : DENY displayName : Disable creation of a folder inside another folder description : Do not allow creation of a folder within another folder when the resource hierarchy is set to a maximum value of 1.
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.
- About organization policies and constraints The Google Cloud Organization Policy Service gives you centralized, programmatic control over your organization's resources.
- Create the constraint To define a constraint that denies all project create and updates if the project ID does not start with dev , create the constraint-allow-dev-projects.yaml with the following contents: name : organizations/ ORGANIZATION ID /customConstraints/custom.allowProjectForDevIdOnly resourceTypes : - cloudresourcemanager.googleapis.com/Project methodTypes : - CREATE - UPDATE condition : "resource.projectId.startsWith(\"dev \")" actionType : ALLOW displayName : Allow dev projects description : All projects in the org should start with dev .

