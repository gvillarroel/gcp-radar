---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.067Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Tags on folder and project creation"
feature_slug: "tags-on-folder-and-project-creation"
latest_feature_date: "2024-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder"
  - "https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders"
  - "https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects"
keywords:
  - "tags"
  - "folder"
  - "project"
  - "creation"
  - "folders"
  - "projects"
  - "can"
  - "created"
---

# Tags on folder and project creation

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Folders and projects can be created with key-value tags.

## Extended Definition

Folders and projects can be created with key-value tags.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)
- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders)
- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects](https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects)

## Supporting Pages

### "Manage projects within folders \_|\_ Resource Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)
- Source ID: `site-iam-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DISPLAY NAME : the display name of the folder being moved, for example "My Awesome Folder." The Move Folder response: { "name": "operations/fm.1234567890", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation", "displayName": " DISPLAY NAME ", "operationType": "MOVE" } } The Get Operation curl request: curl -H "Authorization: Bearer ${bearer token}" \ https://cloudresourcemanager.googleapis.com/v3/operations/fm.1234567890 The Get Operation response: { "name": "operations/fm.1234567890", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation", "displayName": " DISPLAY NAME ", "operationType": "MOVE" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.Folder", "name": "folders/12345", "parent": "folders/98765", "displayName": " DISPLAY NAME ", "lifecycleState": "ACTIVE", "createTime": "2017-07-19T23:29:26.018Z", "updateTime": "2017-07-20T00:54:44.295Z" } } View or list projects within a folder To view or list projects that are direct children of a folder, you must have the Folder Viewer role ( roles/resourcemanager.folderViewer ) or the Browser role ( roles/browser ) on the folder.
- HTTP request: GET https://cloudresourcemanager.googleapis.com/v3/projects?parent=folders/ FOLDER ID Example curl command: Bash curl -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://cloudresourcemanager.googleapis.com/v3/projects?parent=folders/ FOLDER ID " Replace FOLDER ID with the unique ID of the folder.
- Note that the console provides limited support for visual filtering by Tags; use the Google Cloud CLI for advanced Tag queries. gcloud To list projects within a folder that have a specific Tag value, use the --filter flag with the tags attribute: gcloud projects list \ --filter = "parent.id: FOLDER ID AND tags.
- While folders are an optional grouping mechanism, organizing your projects within folders provides several key advantages: Scalable governance: Automatically apply Identity and Access Management (IAM) policies and security constraints to multiple projects through hierarchy-based inheritance.

### Create folders \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders)
- Source ID: `site-docs-reference-2`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST https://cloudresourcemanager.googleapis.com/v3/projects/ Authorization: Content-Type: application/json { "display name": "our-folder-456", "parent": "organizations/123", "tags": { "key": "123/environment" "value": "production" }, "tags": { "key": "123/costCenter" "value": "marketing" } } Configure access to folders To configure access to folders, you must have the Folder IAM Administrator or Folder Admin role at the parent level.
- To create a folder, follow these steps: Console Folders can be created in the UI using the "Manage Projects and Folders" section.
- The Create Folder response: { "name" : "operations/fc.123456789" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation" , "displayName" : " DISPLAY NAME " , "operationType" : "CREATE" } } The Get Operation curl request: curl -H "Authorization: Bearer ${bearer token}" \ https://cloudresourcemanager.googleapis.com/v3/operations/fc.123456789 The Get Operation response: { "name" : "operations/fc.123456789" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation" , "displayName" : " DISPLAY NAME " , "operationType" : "CREATE" }, "done" : true , "response" : { "@type" : "type.googleapis.com/google.cloud.resourcemanager.v3.Folder" , "name" : "folders/12345" , "parent" : "organizations/123" , "displayName" : " DISPLAY NAME " , "lifecycleState" : "ACTIVE" , "createTime" : "2017-07-19T23:29:26.018Z" , "updateTime" : "2017-07-19T23:29:26.046Z" } } Add tags during folder creation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- You can only add the namespace for the tag key-value pairs in one of the following ways: gcloud To add tags during folder creation, run the following command: gcloud resource-manager folders create \ --display-name= DISPLAY NAME \ --organization= ORGANIZATION ID \ --tags= KEY VALUE PAIRS Replace the following: DISPLAY NAME : the folder's display name.

### Create projects \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects](https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects)
- Source ID: `site-docs-reference-2`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create Project Request: POST https://cloudresourcemanager.googleapis.com/v3/projects/ Authorization: Content-Type: application/json { "projectId": "our-project-123", "name": "my project", "labels": { "mylabel": "prod" } } Create Project Response: { "name": "operations/pc.123456789", } Get Operation Request: GET https://cloudresourcemanager.googleapis.com/v3/operations/pc.123456789 Authorization: Content-Type: application/json Get Operation Response: { "name": "operations/pc.123456789", "done": true, "response": { "@type": "type.googleapis.com/google.cloudresourcemanager.v3.Project", "projectNumber": "464036093014", "projectId": "our-project-123", "lifecycleState": "ACTIVE", "name": "my project", "labels": { "mylabel": "prod" }, "createTime": "2016-01-07T21:59:43.314Z" } } Add tags during project creation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- You can only add the namespace for the tag key-value pairs in one of the following ways: gcloud To add tags during project creation, run the following command: gcloud projects create PROJECT ID --organization= ORGANIZATION ID --tags= KEY VALUE PAIRS Replace the following: PROJECT ID is the unique identifier of the project.
- Projects exist between folders (or the organization) and resources such as virtual machines and storage.
- POST https://cloudresourcemanager.googleapis.com/v3/projects/ Authorization: Content-Type: application/json { "projectId": "our-project-456", "name": "my project", "parent": "organizations/123", "tags": { "key": "123/environment" "value": "production" }, "tags": { "key": "123/costCenter" "value": "marketing" } } Designate project environments with tags You can use tags to visually distinguish projects based on their environment, such as production, staging, or development.

