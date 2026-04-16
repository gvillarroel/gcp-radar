---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.031Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Project environment tags"
feature_slug: "project-environment-tags"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
keywords:
  - "project"
  - "environment"
  - "tags"
  - "can"
  - "visually"
  - "distinguish"
  - "projects"
  - "console"
---

# Project environment tags

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Tags can visually distinguish projects by environment in the Google Cloud console.

## Extended Definition

Tags can visually distinguish projects by environment in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects](https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects)
- [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)

## Supporting Pages

### Create projects \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects](https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects)
- Source ID: `site-docs-reference-2`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST https://cloudresourcemanager.googleapis.com/v3/projects/ Authorization: Content-Type: application/json { "projectId": "our-project-456", "name": "my project", "parent": "organizations/123", "tags": { "key": "123/environment" "value": "production" }, "tags": { "key": "123/costCenter" "value": "marketing" } } Designate project environments with tags You can use tags to visually distinguish projects based on their environment, such as production, staging, or development.
- Create Project Request: POST https://cloudresourcemanager.googleapis.com/v3/projects/ Authorization: Content-Type: application/json { "projectId": "our-project-123", "name": "my project", "labels": { "mylabel": "prod" } } Create Project Response: { "name": "operations/pc.123456789", } Get Operation Request: GET https://cloudresourcemanager.googleapis.com/v3/operations/pc.123456789 Authorization: Content-Type: application/json Get Operation Response: { "name": "operations/pc.123456789", "done": true, "response": { "@type": "type.googleapis.com/google.cloudresourcemanager.v3.Project", "projectNumber": "464036093014", "projectId": "our-project-123", "lifecycleState": "ACTIVE", "name": "my project", "labels": { "mylabel": "prod" }, "createTime": "2016-01-07T21:59:43.314Z" } } Add tags during project creation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- You can only add the namespace for the tag key-value pairs in one of the following ways: gcloud To add tags during project creation, run the following command: gcloud projects create PROJECT ID --organization= ORGANIZATION ID --tags= KEY VALUE PAIRS Replace the following: PROJECT ID is the unique identifier of the project.
- If a project has multiple environment tags (for example, one inherited from a folder and one directly on the project), the most specific tag is used to determine the badge.

### "Manage projects within folders \_|\_ Resource Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)
- Source ID: `site-iam-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that the console provides limited support for visual filtering by Tags; use the Google Cloud CLI for advanced Tag queries. gcloud To list projects within a folder that have a specific Tag value, use the --filter flag with the tags attribute: gcloud projects list \ --filter = "parent.id: FOLDER ID AND tags.
- Filter projects by Tags or Labels (Optional) If you have a large number of projects within a folder, you can use filters to find specific resources based on metadata.
- Console In the Filter bar on the Manage resources page, type Labels:key=value to narrow the list to projects with specific labels.
- Console The process of moving folders into other folders in the console is similar to moving projects.

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- You should get a response similar to the following: For predefined tags: tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2FPROJECT NUMBER%2Flocations%2FLOCATION%2Fresources%2FRESOURCE ID/tagValues/TAG VALUE ID parent: //cloudresourcemanager.googleapis.com/projects/123456789012/locations/us-central1/example-resource/res-01 tagValue: tagValues/987654321098 tagValueNamespacedName: 961309089256/environment/production For tags with dynamic values: tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2FPROJECT NUMBER%2Flocations%2FLOCATION%2Fresources%2FRESOURCE ID/tagKeys/TAG KEY ID parent: //cloudresourcemanager.googleapis.com/projects/123456789012/locations/us-central1/example-resource/res-01 tagValueNamespacedName: your-org-id/environment/staging For tags with dynamic values, the tagValue field is not present in the response; only the tagValueNamespacedName is populated.
- You should get a response similar to the following: For predefined tags: inherited: true namespacedTagKey: 433637338589/environment namespacedTagValue: 433637338589/environment/production tagKey: tagKeys/162008917964 tagKeyParentName: organizations/433637338589 tagValue: tagValues/281482214193975 For tags with dynamic values: inherited: true namespacedTagKey: my-sample-org/dynamic-key namespacedTagValue: my-sample-org/dynamic-key/staging tagKey: tagKeys/281476834141096 tagKeyParentName: projects/357710452272 If all tags evaluated on a resource are directly attached, the inherited field is false and is omitted.
- Required roles To get the permissions that you need to manage tags, ask your administrator to grant you the following IAM roles: Tag Viewer ( roles/resourcemanager.tagViewer ) on the resources the tags are attached to View and manage tags at the organization level: Organization Viewer ( roles/resourcemanager.organizationViewer ) on the organization Attach and remove tags from resources: Tag User ( roles/resourcemanager.tagUser ) on the tag value and the resources that you are attaching or removing the tag value to Create, update, and delete tag definitions: Tag Administrator ( roles/resourcemanager.tagAdmin ) on the resource you're creating, updating, or deleting tags for For more information about granting roles, see Manage access to projects, folders, and organizations .
- The following example creates tag values named prod and sales : data "google project" "default" {} resource "google tags tag key" "env tag key" { parent = "projects/${data.google project.default.project id}" short name = "env1" } resource "google tags tag key" "department tag key" { parent = "projects/${data.google project.default.project id}" short name = "department1" } resource "google tags tag value" "env tag value" { parent = "tagKeys/${google tags tag key.env tag key.name}" short name = "prod" } resource "google tags tag value" "department tag value" { parent = "tagKeys/${google tags tag key.department tag key.name}" short name = "sales" } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

