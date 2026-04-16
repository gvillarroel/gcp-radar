---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.097Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Folders"
feature_slug: "folders"
latest_feature_date: "2017-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder"
  - "https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-folders"
keywords:
  - "folders"
  - "let"
  - "you"
  - "organize"
  - "projects"
  - "nested"
  - "within"
  - "resource"
---

# Folders

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Folders let you organize projects and nested folders within the Cloud resource hierarchy and apply shared IAM policies.

## Extended Definition

Folders let you organize projects and nested folders within the Cloud resource hierarchy and apply shared IAM policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)
- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders)
- [https://docs.cloud.google.com/resource-manager/docs/manage-folders](https://docs.cloud.google.com/resource-manager/docs/manage-folders)

## Supporting Pages

### "Manage projects within folders \_|\_ Resource Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)
- Source ID: `site-iam-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Resource Manager Guides Send feedback Manage projects within folders Stay organized with collections Save and categorize content based on your preferences.
- DISPLAY NAME : the display name of the folder being moved, for example "My Awesome Folder." The Move Folder response: { "name": "operations/fm.1234567890", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation", "displayName": " DISPLAY NAME ", "operationType": "MOVE" } } The Get Operation curl request: curl -H "Authorization: Bearer ${bearer token}" \ https://cloudresourcemanager.googleapis.com/v3/operations/fm.1234567890 The Get Operation response: { "name": "operations/fm.1234567890", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation", "displayName": " DISPLAY NAME ", "operationType": "MOVE" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.Folder", "name": "folders/12345", "parent": "folders/98765", "displayName": " DISPLAY NAME ", "lifecycleState": "ACTIVE", "createTime": "2017-07-19T23:29:26.018Z", "updateTime": "2017-07-20T00:54:44.295Z" } } View or list projects within a folder To view or list projects that are direct children of a folder, you must have the Folder Viewer role ( roles/resourcemanager.folderViewer ) or the Browser role ( roles/browser ) on the folder.
- This page describes how to organize your Google Cloud hierarchy by nesting projects within folders.
- HTTP request: GET https://cloudresourcemanager.googleapis.com/v3/projects?parent=folders/ FOLDER ID Example curl command: Bash curl -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://cloudresourcemanager.googleapis.com/v3/projects?parent=folders/ FOLDER ID " Replace FOLDER ID with the unique ID of the folder.

### Create folders \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to create Google Cloud folders to group and organize projects in a resource hierarchy.
- POST https://cloudresourcemanager.googleapis.com/v3/projects/ Authorization: Content-Type: application/json { "display name": "our-folder-456", "parent": "organizations/123", "tags": { "key": "123/environment" "value": "production" }, "tags": { "key": "123/costCenter" "value": "marketing" } } Configure access to folders To configure access to folders, you must have the Folder IAM Administrator or Folder Admin role at the parent level.
- Home Documentation Security Resource Manager Guides Send feedback Create folders Stay organized with collections Save and categorize content based on your preferences.
- A common situation is to create folders that in turn contain additional folders or projects, as shown in the resource hierarchy earlier.

### "View, update, and delete folders \_|\_ Resource Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-folders](https://docs.cloud.google.com/resource-manager/docs/manage-folders)
- Source ID: `site-iam-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Resource Manager Guides Send feedback View, update, and delete folders Stay organized with collections Save and categorize content based on your preferences.
- Undelete : If you accidentally delete a folder, you can restore it within the 30-day window using the gcloud resource-manager folders undelete command or the API.
- You can't create new projects or sub-folders within a soft-deleted folder.
- What's next Learn about managing projects within folders .

