---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.087Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Resource Manager v3 API"
feature_slug: "resource-manager-v3-api"
latest_feature_date: "2021-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/manage-applications"
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-org"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
keywords:
  - "resource"
  - "manager"
  - "v3"
  - "provides"
  - "version"
  - "interface"
  - "managing"
  - "resources"
---

# Resource Manager v3 API

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

The API provides a version 3 interface for managing Google Cloud resources; The API provides a version 3 interface for managing Google Cloud resources.

## Extended Definition

The API provides a version 3 interface for managing Google Cloud resources; The API provides a version 3 interface for managing Google Cloud resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/manage-applications](https://docs.cloud.google.com/resource-manager/docs/manage-applications)
- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)

## Supporting Pages

### "Managing applications in a folder \_|\_ Resource Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-applications](https://docs.cloud.google.com/resource-manager/docs/manage-applications)
- Source ID: `site-iam-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overview Google Cloud provides an application-centric approach for deploying and managing your resources.
- Make sure that the most recent version of Google Cloud CLI is installed: gcloud components update To enable application management on a specific folder, use the gcloud resource-manager capabilities update command with the --enable flag. gcloud resource-manager capabilities update folders/ FOLDER ID /capabilities/app-management \ --enable Replace FOLDER ID with the ID of the folder.
- Home Documentation Security Resource Manager Guides Send feedback Managing applications in a folder Stay organized with collections Save and categorize content based on your preferences.
- These resources include the following: Services : A network or API interface that exposes functionality to clients, like a load balancer's forwarding rule.

### "Access control for organization resources with IAM \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- Source ID: `site-iam-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Project essentialcontacts. essentialcontacts. contacts. create essentialcontacts. contacts. delete essentialcontacts.contacts.get essentialcontacts. contacts. list essentialcontacts. contacts. send essentialcontacts. contacts. update iam.policybindings. iam.policybindings.get iam.policybindings.list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager.capabilities. resourcemanager. capabilities. get resourcemanager. capabilities. update resourcemanager. folders. createPolicyBinding resourcemanager. folders. deletePolicyBinding resourcemanager.folders.get resourcemanager. folders. getIamPolicy resourcemanager.folders.list resourcemanager. folders. searchPolicyBindings resourcemanager. folders. setIamPolicy resourcemanager. folders. updatePolicyBinding resourcemanager. organizations. resourcemanager. organizations. createPolicyBinding resourcemanager. organizations. deletePolicyBinding resourcemanager. organizations. get resourcemanager. organizations. getIamPolicy resourcemanager. organizations. searchPolicyBindings resourcemanager. organizations. setIamPolicy resourcemanager. organizations. updatePolicyBinding resourcemanager. projects. createPolicyBinding resourcemanager. projects. deletePolicyBinding resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager.projects.list resourcemanager. projects. searchPolicyBindings resourcemanager. projects. setIamPolicy resourcemanager. projects. updatePolicyBinding Organization Viewer ( roles/ resourcemanager.organizationViewer ) Provides access to view an organization.
- Lowest-level resources where you can grant this role: Organization resourcemanager. organizations. get Organization Policy Administrator ( roles/ orgpolicy.policyAdmin ) Provides access to define what restrictions an organization wants to place on the configuration of cloud resources by setting Organization Policies.
- For example, to make anotheradmin@gcp-test.com an Organization Administrator, change the previous example as follows: { "bindings" : [ { "members" : [ "user:testuser1@gcp-test.com" ], "role" : "roles/editor" }, { "members" : [ "user:admin@gcp-test.com" , "user:anotheradmin@gcp-test.com" ], "role" : "roles/resourcemanager.organizationAdmin" }, { "members" : [ "user:testuser20@gcp-test.com" ], "role" : "roles/resourcemanager.projectCreator" }, ], "etag" : "BwU1aRxWk30=" } Update the organization resource's allow policy by running the following command: gcloud alpha organizations set-iam-policy <var>ORGANIZATION ID</var> policy.json API Request: POST h tt ps : //cloudresourcemanager.googleapis.com/v3/organizations/12345:setIamPolicy { "policy" : { "version" : "0" , "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKHHiQ=" } } Response: { "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKJUiQ=" } The setIamPolicy() method lets you grant roles to users by attaching an allow policy to the organization resource.
- For example, the following allow policy grants the Organization Policy Administrator role only on resources that have the environment: dev tag, and doesn't grant it on any other resource: { "bindings" : [ { "members" : [ "{dynamic print variables.examples.principal group api}" ], "role" : "roles/orgpolicy.policyAdmin" , "condition" : { "title" : "Dev environment only" , "description" : "Only granted in the development environment" , "expression" : "resource.matchTag('123456789012/env', 'dev')" } } ], "etag" : "BwWKmjvelug=" , "version" : 3 } Test permissions You can test IAM permissions on a user for an organization resource with the testIamPermissions() method.

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- You should get a response similar to the following: For predefined tags: tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2FPROJECT NUMBER%2Flocations%2FLOCATION%2Fresources%2FRESOURCE ID/tagValues/TAG VALUE ID parent: //cloudresourcemanager.googleapis.com/projects/123456789012/locations/us-central1/example-resource/res-01 tagValue: tagValues/987654321098 tagValueNamespacedName: 961309089256/environment/production For tags with dynamic values: tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2FPROJECT NUMBER%2Flocations%2FLOCATION%2Fresources%2FRESOURCE ID/tagKeys/TAG KEY ID parent: //cloudresourcemanager.googleapis.com/projects/123456789012/locations/us-central1/example-resource/res-01 tagValueNamespacedName: your-org-id/environment/staging For tags with dynamic values, the tagValue field is not present in the response; only the tagValueNamespacedName is populated.
- Required roles To get the permissions that you need to manage tags, ask your administrator to grant you the following IAM roles: Tag Viewer ( roles/resourcemanager.tagViewer ) on the resources the tags are attached to View and manage tags at the organization level: Organization Viewer ( roles/resourcemanager.organizationViewer ) on the organization Attach and remove tags from resources: Tag User ( roles/resourcemanager.tagUser ) on the tag value and the resources that you are attaching or removing the tag value to Create, update, and delete tag definitions: Tag Administrator ( roles/resourcemanager.tagAdmin ) on the resource you're creating, updating, or deleting tags for For more information about granting roles, see Manage access to projects, folders, and organizations .
- The new tags appear under the Tags column on the Manage resources page. gcloud To attach a tag to a resource, you must create a tag binding resource by using the gcloud resource-manager tags bindings create command: gcloud resource-manager tags bindings create \ --tag-value= TAGVALUE NAME \ --parent= RESOURCE ID \ --location= LOCATION Where: TAGVALUE NAME is the permanent ID or namespaced name of the tag value to be attached; for example: tagValues/4567890123 or 12345678/environment/production .
- The updated list of tags appears under the Tags column on the Manage resources page. gcloud To delete a tag binding, use the gcloud resource-manager tags bindings delete command: gcloud resource-manager tags bindings delete \ --tag-value= TAGVALUE NAME \ --parent= RESOURCE ID \ --location= LOCATION Where: TAGVALUE NAME is the permanent ID or namespaced name of the tag value that is attached; for example: tagValues/567890123456 .

