---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.086Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Resource Settings API"
feature_slug: "resource-settings-api"
latest_feature_date: "2021-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/listing-all-resources"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-folders"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder"
keywords:
  - "resource"
  - "settings"
  - "centrally"
  - "configures"
  - "projects"
  - "folders"
  - "organizations"
---

# Resource Settings API

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

The API centrally configures settings for Google Cloud projects, folders, and organizations.

## Extended Definition

The API centrally configures settings for Google Cloud projects, folders, and organizations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/listing-all-resources](https://docs.cloud.google.com/resource-manager/docs/listing-all-resources)
- [https://docs.cloud.google.com/resource-manager/docs/manage-folders](https://docs.cloud.google.com/resource-manager/docs/manage-folders)
- [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)

## Supporting Pages

### "List all projects and folders in your hierarchy \_|\_ Resource Manager \_\

- URL: [https://docs.cloud.google.com/resource-manager/docs/listing-all-resources](https://docs.cloud.google.com/resource-manager/docs/listing-all-resources)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example to list all resource nodes The following pseudocode demonstrates how to list every resource node in your Organizations: organizations = organizations.search() projects = emptyList() parentsToList = queueOf(organizations) while (parent = parentsToList.pop()) { // TODO: Iterate over paginated results as needed. // TODO: Handle PERMISSION DENIED appropriately. projects.addAll(projects.list(parent.type, parent.id)) parentsToList.addAll(folders.list(parent)) } When building a custom user experience, you may also want to mix in search results and load the parent resources as needed (while also catching the PERMISSION DENIED exception).
- To make sure that you always get the most accurate and complete results, use a service account and perform a scan in the following way: Grant a service account the list and get permissions for Organizations, Folders, and Projects on the Organization resource.
- Resources in Google Cloud are organized into a hierarchy , with each node (Organizations, Folders, Projects, and so forth) having a reference to its parent.
- Home Documentation Security Resource Manager Guides Send feedback List all projects and folders in your hierarchy Stay organized with collections Save and categorize content based on your preferences.

### "View, update, and delete folders \_|\_ Resource Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-folders](https://docs.cloud.google.com/resource-manager/docs/manage-folders)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The curl request to list folders: curl -X GET -H "Content-Type: application/json" \ -H "Authorization: Bearer ${bearer token}" \ https://cloudresourcemanager.googleapis.com/v3/folders?parent= PARENT NAME Replace PARENT NAME with the name of the parent resource under which you're creating the folder, such as organizations/123 or folders/123 .
- DISPLAY NAME : the display name of the folder being moved, for example "My Awesome Folder." The Move Folder response: { "name": "operations/fm.1234567890", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation", "displayName": " DISPLAY NAME ", "operationType": "MOVE" } } The Get Operation curl request: curl -H "Authorization: Bearer ${bearer token}" \ https://cloudresourcemanager.googleapis.com/v3/operations/fm.1234567890 The Get Operation response: { "name": "operations/fm.1234567890", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation", "displayName": " DISPLAY NAME ", "operationType": "MOVE" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.Folder", "name": "folders/12345", "parent": "folders/98765", "displayName": " DISPLAY NAME ", "lifecycleState": "ACTIVE", "createTime": "2017-07-19T23:29:26.018Z", "updateTime": "2017-07-20T00:54:44.295Z" } } Delete folders To delete a folder, you must have the Folder Editor role ( roles/resourcemanager.folderEditor ) or the Folder Admin role ( roles/resourcemanager.folderAdmin ) on the folder.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://cloudresourcemanager.googleapis.com/v3/folders/ FOLDER ID ?updateMask=displayName" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "operations/fc.1234567890abcdef", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperationMetadata", "displayName": " NEW DISPLAY NAME ", "operationType": "UPDATE", "resourceName": "folders/ FOLDER ID " }, "done": false } Move a folder into another folder To move a folder into another folder, you must have the resourcemanager.folders.move permission for both the source and destination folders.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://cloudresourcemanager.googleapis.com/v3/folders/ FOLDER ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "operations/fc.1234567890abcdef", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperationMetadata", "operationType": "DELETE", "resourceName": "folders/ FOLDER ID " }, "done": false } Additional information When you delete a folder, it enters a soft-deleted state for a 30-day retention period before being permanently deleted, or hard-deleted.

### "Manage projects within folders \_|\_ Resource Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)
- Source ID: `site-iam-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DISPLAY NAME : the display name of the folder being moved, for example "My Awesome Folder." The Move Folder response: { "name": "operations/fm.1234567890", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation", "displayName": " DISPLAY NAME ", "operationType": "MOVE" } } The Get Operation curl request: curl -H "Authorization: Bearer ${bearer token}" \ https://cloudresourcemanager.googleapis.com/v3/operations/fm.1234567890 The Get Operation response: { "name": "operations/fm.1234567890", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation", "displayName": " DISPLAY NAME ", "operationType": "MOVE" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.Folder", "name": "folders/12345", "parent": "folders/98765", "displayName": " DISPLAY NAME ", "lifecycleState": "ACTIVE", "createTime": "2017-07-19T23:29:26.018Z", "updateTime": "2017-07-20T00:54:44.295Z" } } View or list projects within a folder To view or list projects that are direct children of a folder, you must have the Folder Viewer role ( roles/resourcemanager.folderViewer ) or the Browser role ( roles/browser ) on the folder.
- HTTP request: GET https://cloudresourcemanager.googleapis.com/v3/projects?parent=folders/ FOLDER ID Example curl command: Bash curl -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://cloudresourcemanager.googleapis.com/v3/projects?parent=folders/ FOLDER ID " Replace FOLDER ID with the unique ID of the folder.
- Home Documentation Security Resource Manager Guides Send feedback Manage projects within folders Stay organized with collections Save and categorize content based on your preferences.
- Click Move . gcloud To move a folder under the organization resource, run the following command: gcloud resource-manager folders move FOLDER ID \ --organization= PARENT ID Replace the following: FOLDER ID : the ID of the folder to move PARENT ID : the ID of the parent organization resource To move a folder under another folder, run the following command: gcloud resource-manager folders move FOLDER ID \ --folder= PARENT ID Replace the following: FOLDER ID : the ID of the folder to move PARENT ID : the ID of the parent folder REST The request JSON: request json= '{ destinationParent: "folders/ DESTINATION FOLDER ID " }' The Move Folder curl request: curl -X POST -H "Content-Type: application/json" \ -H "Authorization: Bearer ${bearer token} \ -d "$request json" \ https://cloudresourcemanager.googleapis.com/v3/folders/ DISPLAY NAME :move Replace the following: DESTINATION FOLDER ID : the ID of the folder under which you're moving another folder, for example 98765 .

