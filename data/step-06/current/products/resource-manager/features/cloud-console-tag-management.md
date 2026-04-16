---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.079Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Cloud Console tag management"
feature_slug: "cloud-console-tag-management"
latest_feature_date: "2022-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
  - "https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder"
keywords:
  - "console"
  - "tag"
  - "management"
  - "lets"
  - "you"
  - "create"
  - "manage"
  - "tags"
---

# Cloud Console tag management

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Cloud Console tag management lets you create and manage tags in the Google Cloud Console.

## Extended Definition

Cloud Console tag management lets you create and manage tags in the Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview)
- [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)

## Supporting Pages

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to manage tags, ask your administrator to grant you the following IAM roles: Tag Viewer ( roles/resourcemanager.tagViewer ) on the resources the tags are attached to View and manage tags at the organization level: Organization Viewer ( roles/resourcemanager.organizationViewer ) on the organization Attach and remove tags from resources: Tag User ( roles/resourcemanager.tagUser ) on the tag value and the resources that you are attaching or removing the tag value to Create, update, and delete tag definitions: Tag Administrator ( roles/resourcemanager.tagAdmin ) on the resource you're creating, updating, or deleting tags for For more information about granting roles, see Manage access to projects, folders, and organizations .
- The new tags appear under the Tags column on the Manage resources page. gcloud To attach a tag to a resource, you must create a tag binding resource by using the gcloud resource-manager tags bindings create command: gcloud resource-manager tags bindings create \ --tag-value= TAGVALUE NAME \ --parent= RESOURCE ID \ --location= LOCATION Where: TAGVALUE NAME is the permanent ID or namespaced name of the tag value to be attached; for example: tagValues/4567890123 or 12345678/environment/production .
- Create tag holds You can manually create a tag hold using the gcloud CLI or the API. gcloud To create a tag hold, use the gcloud resource-manager tags holds create gcloud CLI command: gcloud resource-manager tags holds create TAGVALUE NAME \ --holder= HOLDER NAME \ --location= LOCATION Where: TAGVALUE NAME is the permanent ID or namespaced name of the tag value for which this tag hold should be created; for example: tagValues/567890123456 .
- All tags you have created under this organization or project appear in the list. gcloud To return a list of all tag keys created under a organization or a project resource, use the gcloud resource-manager tags keys list command: gcloud resource-manager tags keys list --parent= RESOURCE ID RESOURCE ID is the ID of the organization or project resource for which you want to find attached tag keys.

### Resource Manager overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview)
- Source ID: `site-docs-reference-2`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Integration with other Google Cloud services for resource management Resource Manager is central to managing your Google Cloud resources, and provides the structure and foundational capabilities that let you effectively use and govern other critical services, such as Organization Policy, Tags, and Essential Contacts: Tags : Resource Manager works with Tags, which lets you attach arbitrary key-value pairs to resources.
- Resource Manager lets you create, update, and delete projects programmatically or through the console.
- Tags management is an integral part of how resources can be organized and managed within the Resource Manager hierarchy.
- Essential Contacts : The integration of Essential Contacts with Resource Manager lets you manage who receives notifications based on where they sit within your organization's structure.

### "Manage projects within folders \_|\_ Resource Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DISPLAY NAME : the display name of the folder being moved, for example "My Awesome Folder." The Move Folder response: { "name": "operations/fm.1234567890", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation", "displayName": " DISPLAY NAME ", "operationType": "MOVE" } } The Get Operation curl request: curl -H "Authorization: Bearer ${bearer token}" \ https://cloudresourcemanager.googleapis.com/v3/operations/fm.1234567890 The Get Operation response: { "name": "operations/fm.1234567890", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation", "displayName": " DISPLAY NAME ", "operationType": "MOVE" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.Folder", "name": "folders/12345", "parent": "folders/98765", "displayName": " DISPLAY NAME ", "lifecycleState": "ACTIVE", "createTime": "2017-07-19T23:29:26.018Z", "updateTime": "2017-07-20T00:54:44.295Z" } } View or list projects within a folder To view or list projects that are direct children of a folder, you must have the Folder Viewer role ( roles/resourcemanager.folderViewer ) or the Browser role ( roles/browser ) on the folder.
- REST The request JSON: request json= '{ name: DISPLAY NAME , projectId: PROJECT ID , parent: {id: PARENT ID , type: PARENT TYPE } }' The curl request: curl -X POST -H "Content-Type: application/json" \ -H "Authorization: Bearer ${bearer token}" \ -d "$request json" \ https://cloudresourcemanager.googleapis.com/v3/projects Replace the following: PROJECT ID : the unique identifier of the project being created.
- Note that the console provides limited support for visual filtering by Tags; use the Google Cloud CLI for advanced Tag queries. gcloud To list projects within a folder that have a specific Tag value, use the --filter flag with the tags attribute: gcloud projects list \ --filter = "parent.id: FOLDER ID AND tags.
- While folders are an optional grouping mechanism, organizing your projects within folders provides several key advantages: Scalable governance: Automatically apply Identity and Access Management (IAM) policies and security constraints to multiple projects through hierarchy-based inheritance.

