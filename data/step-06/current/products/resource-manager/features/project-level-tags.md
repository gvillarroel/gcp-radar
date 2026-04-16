---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.076Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Project-level tags"
feature_slug: "project-level-tags"
latest_feature_date: "2023-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder"
  - "https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
keywords:
  - "project"
  - "level"
  - "tags"
  - "can"
  - "created"
  - "children"
  - "projects"
  - "well"
---

# Project-level tags

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Tags can be created as children of projects as well as organization resources.

## Extended Definition

Tags can be created as children of projects as well as organization resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)
- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects](https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)

## Supporting Pages

### "Manage projects within folders \_|\_ Resource Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DISPLAY NAME : the display name of the folder being moved, for example "My Awesome Folder." The Move Folder response: { "name": "operations/fm.1234567890", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation", "displayName": " DISPLAY NAME ", "operationType": "MOVE" } } The Get Operation curl request: curl -H "Authorization: Bearer ${bearer token}" \ https://cloudresourcemanager.googleapis.com/v3/operations/fm.1234567890 The Get Operation response: { "name": "operations/fm.1234567890", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation", "displayName": " DISPLAY NAME ", "operationType": "MOVE" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.Folder", "name": "folders/12345", "parent": "folders/98765", "displayName": " DISPLAY NAME ", "lifecycleState": "ACTIVE", "createTime": "2017-07-19T23:29:26.018Z", "updateTime": "2017-07-20T00:54:44.295Z" } } View or list projects within a folder To view or list projects that are direct children of a folder, you must have the Folder Viewer role ( roles/resourcemanager.folderViewer ) or the Browser role ( roles/browser ) on the folder.
- REST The request JSON: request json= '{ name: DISPLAY NAME , projectId: PROJECT ID , parent: {id: PARENT ID , type: PARENT TYPE } }' The curl request: curl -X POST -H "Content-Type: application/json" \ -H "Authorization: Bearer ${bearer token}" \ -d "$request json" \ https://cloudresourcemanager.googleapis.com/v3/projects Replace the following: PROJECT ID : the unique identifier of the project being created.
- Optional: Use the Filter bar at the top of the list to search for a specific project by name or ID. gcloud To list all projects that are direct children of a specific folder, use the gcloud projects list command with a filter: gcloud projects list --filter = "parent.id: FOLDER ID AND parent.type:folder" Replace FOLDER ID with the unique ID of the folder.
- Note that the console provides limited support for visual filtering by Tags; use the Google Cloud CLI for advanced Tag queries. gcloud To list projects within a folder that have a specific Tag value, use the --filter flag with the tags attribute: gcloud projects list \ --filter = "parent.id: FOLDER ID AND tags.

### Create projects \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects](https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects)
- Source ID: `site-docs-reference-2`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key characteristics of projects include the following: The primary service container: A project is the base level where all Google Cloud services (APIs) are enabled and where resources like Compute Engine instances or BigQuery datasets are created.
- Create Project Request: POST https://cloudresourcemanager.googleapis.com/v3/projects/ Authorization: Content-Type: application/json { "projectId": "our-project-123", "name": "my project", "labels": { "mylabel": "prod" } } Create Project Response: { "name": "operations/pc.123456789", } Get Operation Request: GET https://cloudresourcemanager.googleapis.com/v3/operations/pc.123456789 Authorization: Content-Type: application/json Get Operation Response: { "name": "operations/pc.123456789", "done": true, "response": { "@type": "type.googleapis.com/google.cloudresourcemanager.v3.Project", "projectNumber": "464036093014", "projectId": "our-project-123", "lifecycleState": "ACTIVE", "name": "my project", "labels": { "mylabel": "prod" }, "createTime": "2016-01-07T21:59:43.314Z" } } Add tags during project creation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- POST https://cloudresourcemanager.googleapis.com/v3/projects/ Authorization: Content-Type: application/json { "projectId": "our-project-456", "name": "my project", "parent": "organizations/123", "tags": { "key": "123/environment" "value": "production" }, "tags": { "key": "123/costCenter" "value": "marketing" } } Designate project environments with tags You can use tags to visually distinguish projects based on their environment, such as production, staging, or development.
- You can only add the namespace for the tag key-value pairs in one of the following ways: gcloud To add tags during project creation, run the following command: gcloud projects create PROJECT ID --organization= ORGANIZATION ID --tags= KEY VALUE PAIRS Replace the following: PROJECT ID is the unique identifier of the project.

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to manage tags, ask your administrator to grant you the following IAM roles: Tag Viewer ( roles/resourcemanager.tagViewer ) on the resources the tags are attached to View and manage tags at the organization level: Organization Viewer ( roles/resourcemanager.organizationViewer ) on the organization Attach and remove tags from resources: Tag User ( roles/resourcemanager.tagUser ) on the tag value and the resources that you are attaching or removing the tag value to Create, update, and delete tag definitions: Tag Administrator ( roles/resourcemanager.tagAdmin ) on the resource you're creating, updating, or deleting tags for For more information about granting roles, see Manage access to projects, folders, and organizations .
- You should get a response similar to the following: For predefined tags: tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2FPROJECT NUMBER%2Flocations%2FLOCATION%2Fresources%2FRESOURCE ID/tagValues/TAG VALUE ID parent: //cloudresourcemanager.googleapis.com/projects/123456789012/locations/us-central1/example-resource/res-01 tagValue: tagValues/987654321098 tagValueNamespacedName: 961309089256/environment/production For tags with dynamic values: tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2FPROJECT NUMBER%2Flocations%2FLOCATION%2Fresources%2FRESOURCE ID/tagKeys/TAG KEY ID parent: //cloudresourcemanager.googleapis.com/projects/123456789012/locations/us-central1/example-resource/res-01 tagValueNamespacedName: your-org-id/environment/staging For tags with dynamic values, the tagValue field is not present in the response; only the tagValueNamespacedName is populated.
- The following example creates tag values named prod and sales : data "google project" "default" {} resource "google tags tag key" "env tag key" { parent = "projects/${data.google project.default.project id}" short name = "env1" } resource "google tags tag key" "department tag key" { parent = "projects/${data.google project.default.project id}" short name = "department1" } resource "google tags tag value" "env tag value" { parent = "tagKeys/${google tags tag key.env tag key.name}" short name = "prod" } resource "google tags tag value" "department tag value" { parent = "tagKeys/${google tags tag key.department tag key.name}" short name = "sales" } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- You should get a response similar to the following: For predefined tags: inherited: true namespacedTagKey: 433637338589/environment namespacedTagValue: 433637338589/environment/production tagKey: tagKeys/162008917964 tagKeyParentName: organizations/433637338589 tagValue: tagValues/281482214193975 For tags with dynamic values: inherited: true namespacedTagKey: my-sample-org/dynamic-key namespacedTagValue: my-sample-org/dynamic-key/staging tagKey: tagKeys/281476834141096 tagKeyParentName: projects/357710452272 If all tags evaluated on a resource are directly attached, the inherited field is false and is omitted.

