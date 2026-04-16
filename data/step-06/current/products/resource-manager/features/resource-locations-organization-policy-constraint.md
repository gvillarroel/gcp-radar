---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.091Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Resource locations organization policy constraint"
feature_slug: "resource-locations-organization-policy-constraint"
latest_feature_date: "2020-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-org"
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
keywords:
  - "resource"
  - "locations"
  - "organization"
  - "policy"
  - "constraint"
  - "lets"
  - "organizations"
  - "define"
---

# Resource locations organization policy constraint

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Lets organizations define where resources can be created by using an organization policy constraint; Lets you define the location where resources can be created.

## Extended Definition

Lets organizations define where resources can be created by using an organization policy constraint; Lets you define the location where resources can be created.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)

## Supporting Pages

### "Access control for organization resources with IAM \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Project essentialcontacts. essentialcontacts. contacts. create essentialcontacts. contacts. delete essentialcontacts.contacts.get essentialcontacts. contacts. list essentialcontacts. contacts. send essentialcontacts. contacts. update iam.policybindings. iam.policybindings.get iam.policybindings.list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager.capabilities. resourcemanager. capabilities. get resourcemanager. capabilities. update resourcemanager. folders. createPolicyBinding resourcemanager. folders. deletePolicyBinding resourcemanager.folders.get resourcemanager. folders. getIamPolicy resourcemanager.folders.list resourcemanager. folders. searchPolicyBindings resourcemanager. folders. setIamPolicy resourcemanager. folders. updatePolicyBinding resourcemanager. organizations. resourcemanager. organizations. createPolicyBinding resourcemanager. organizations. deletePolicyBinding resourcemanager. organizations. get resourcemanager. organizations. getIamPolicy resourcemanager. organizations. searchPolicyBindings resourcemanager. organizations. setIamPolicy resourcemanager. organizations. updatePolicyBinding resourcemanager. projects. createPolicyBinding resourcemanager. projects. deletePolicyBinding resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager.projects.list resourcemanager. projects. searchPolicyBindings resourcemanager. projects. setIamPolicy resourcemanager. projects. updatePolicyBinding Organization Viewer ( roles/ resourcemanager.organizationViewer ) Provides access to view an organization.
- For example, to make anotheradmin@gcp-test.com an Organization Administrator, change the previous example as follows: { "bindings" : [ { "members" : [ "user:testuser1@gcp-test.com" ], "role" : "roles/editor" }, { "members" : [ "user:admin@gcp-test.com" , "user:anotheradmin@gcp-test.com" ], "role" : "roles/resourcemanager.organizationAdmin" }, { "members" : [ "user:testuser20@gcp-test.com" ], "role" : "roles/resourcemanager.projectCreator" }, ], "etag" : "BwU1aRxWk30=" } Update the organization resource's allow policy by running the following command: gcloud alpha organizations set-iam-policy <var>ORGANIZATION ID</var> policy.json API Request: POST h tt ps : //cloudresourcemanager.googleapis.com/v3/organizations/12345:setIamPolicy { "policy" : { "version" : "0" , "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKHHiQ=" } } Response: { "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKJUiQ=" } The setIamPolicy() method lets you grant roles to users by attaching an allow policy to the organization resource.
- Request: POST https://cloudresourcemanager.googleapis.com/v3/organizations/12345:getIamPolicy Response: { "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKHHiQ=" } Python The method getIamPolicy() lets you get an allow policy that was previously set. crm = discovery . build ( 'cloudresourcemanager' , 'v3' , http = creds . authorize ( httplib2 .
- Lowest-level resources where you can grant this role: Project resourcemanager.folders.get resourcemanager.folders.list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager.projects.list Creating custom roles In addition to the predefined roles described in this topic, you can also create custom roles that are collections of permissions that you tailor to your needs.

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Create the constraint To define a constraint that denies all project create and updates if the project ID does not start with dev , create the constraint-allow-dev-projects.yaml with the following contents: name : organizations/ ORGANIZATION ID /customConstraints/custom.allowProjectForDevIdOnly resourceTypes : - cloudresourcemanager.googleapis.com/Project methodTypes : - CREATE - UPDATE condition : "resource.projectId.startsWith(\"dev \")" actionType : ALLOW displayName : Allow dev projects description : All projects in the org should start with dev .
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- Set up a custom constraint A custom constraint is defined in a YAML file by the resources, methods, conditions, and actions that are supported by the service on which you are enforcing the organization policy.
- Disable creation of a folder within another folder to control the depth of the resource hierarchy tree. name : organizations/ ORGANIZATION ID /customConstraints/custom.disableFolderCreation resourceTypes : - cloudresourcemanager.googleapis.com/Folder methodTypes : - CREATE condition : "resource.parent.startsWith(" folders")" actionType : DENY displayName : Disable creation of a folder inside another folder description : Do not allow creation of a folder within another folder when the resource hierarchy is set to a maximum value of 1.

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- You should get a response similar to the following: For predefined tags: inherited: true namespacedTagKey: 433637338589/environment namespacedTagValue: 433637338589/environment/production tagKey: tagKeys/162008917964 tagKeyParentName: organizations/433637338589 tagValue: tagValues/281482214193975 For tags with dynamic values: inherited: true namespacedTagKey: my-sample-org/dynamic-key namespacedTagValue: my-sample-org/dynamic-key/staging tagKey: tagKeys/281476834141096 tagKeyParentName: projects/357710452272 If all tags evaluated on a resource are directly attached, the inherited field is false and is omitted.
- Click Create constraint . gcloud Create a YAML file for the custom constraint: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : - RESOURCE NAME methodTypes : - GOVERN TAGS condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 1234567890 .
- To enforce mandatory tags on resources, create a custom organization policy and set the policy on an organization, folder, or project resource to enforce the custom constraint.
- After you've defined the custom constraint, you can test and analyze the organization policy changes and enforce the constraint .

