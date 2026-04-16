---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.087Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Project migration between organizations"
feature_slug: "project-migration-between-organizations"
latest_feature_date: "2021-05-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/project-migration"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder"
  - "https://docs.cloud.google.com/resource-manager/docs/analyze-move"
keywords:
  - "project"
  - "migration"
  - "between"
  - "organizations"
  - "projects"
  - "can"
  - "moved"
  - "one"
---

# Project migration between organizations

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Projects can be moved from one Google Cloud organization to another as a self-serve process; Projects can be moved from one Google Cloud organization to another as a self-serve process.

## Extended Definition

Projects can be moved from one Google Cloud organization to another as a self-serve process; Projects can be moved from one Google Cloud organization to another as a self-serve process.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/project-migration](https://docs.cloud.google.com/resource-manager/docs/project-migration)
- [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)
- [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move)

## Supporting Pages

### "Migrate projects between organization resources \_|\_ Resource Manager \_\

- URL: [https://docs.cloud.google.com/resource-manager/docs/project-migration](https://docs.cloud.google.com/resource-manager/docs/project-migration)
- Source ID: `site-docs-reference-2`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you don't have the resourcemanager.organizations.get permission on the parent organization resource of the project, it's likely that your projects don't reflect as expected under the actual organization in the Google Cloud console.
- Home Documentation Security Resource Manager Guides Send feedback Migrate projects between organization resources Stay organized with collections Save and categorize content based on your preferences.
- You can use the Resource Manager API to migrate these projects; the API also lets you roll back a migration, moving the project back to its original place in the hierarchy if necessary.
- Migration scenarios Your project's location determines which of two paths you take: Migrate projects from one organization to another organization resource.

### "Manage projects within folders \_|\_ Resource Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)
- Source ID: `site-iam-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DISPLAY NAME : the display name of the folder being moved, for example "My Awesome Folder." The Move Folder response: { "name": "operations/fm.1234567890", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation", "displayName": " DISPLAY NAME ", "operationType": "MOVE" } } The Get Operation curl request: curl -H "Authorization: Bearer ${bearer token}" \ https://cloudresourcemanager.googleapis.com/v3/operations/fm.1234567890 The Get Operation response: { "name": "operations/fm.1234567890", "metadata": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation", "displayName": " DISPLAY NAME ", "operationType": "MOVE" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.resourcemanager.v3.Folder", "name": "folders/12345", "parent": "folders/98765", "displayName": " DISPLAY NAME ", "lifecycleState": "ACTIVE", "createTime": "2017-07-19T23:29:26.018Z", "updateTime": "2017-07-20T00:54:44.295Z" } } View or list projects within a folder To view or list projects that are direct children of a folder, you must have the Folder Viewer role ( roles/resourcemanager.folderViewer ) or the Browser role ( roles/browser ) on the folder.
- If you moved one of these projects to Folder B, which does not have the same inherited permissions, the service account for that project loses the ability to upload data, resulting in a service outage.
- For information about migrating a project between organization resources, see Migrating projects .
- REST The request JSON: request json= '{ name: DISPLAY NAME , projectId: PROJECT ID , parent: {id: PARENT ID , type: PARENT TYPE } }' The curl request: curl -X POST -H "Content-Type: application/json" \ -H "Authorization: Bearer ${bearer token}" \ -d "$request json" \ https://cloudresourcemanager.googleapis.com/v3/projects Replace the following: PROJECT ID : the unique identifier of the project being created.

### Analyze project move \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about migrating projects between organization resources, see Migrate projects between organization resources .
- Even if the destination organization resource specified in the API call does not exist, the analysis of the project to be moved is still performed. gcloud To analyze the impacts of migrating a project from its current position in the resource hierarchy, use the gcloud asset analyze-move command: gcloud asset analyze-move --project= PROJECT ID \ (--destination-folder= FOLDER ID \ --destination-organization= ORGANIZATION ID ) To analyze the impacts of moving a project to a different folder , run the command with --destination-folder : gcloud asset analyze-move --project= PROJECT ID \ --destination-folder= FOLDER ID To analyze the impacts of moving a project to a different organization , run the command with --destination-organization : gcloud asset analyze-move --project= PROJECT ID \ --destination-organization= ORGANIZATION ID Where: PROJECT ID is the unique project ID of the project you are migrating.
- The following example demonstrates the error returned from the Hierarchical Firewall service when the user does not have compute.organizations.setSecurityPolicy permission on the project to be migrated: { "moveAnalysis" : [{ "displayName" : "name hidden" , "analysis" : { "warnings" : [{ "detail" : "details hidden" }] } }, { "displayName" : "name hidden" , "analysis" : { "warnings" : [{ "detail" : "details hidden" }] } }, { "displayName" : "Hierarchical Firewall" , "error" : { "code" : 7 , "message" : "Failed to retrieve inherited security policies to perform analysis.
- Example error message The following example demonstrates the error code returned for a user that does not have the cloudasset.assets.analyzeMove permission on the project to be migrated: { "error" : { "code" : 403 , "message" : "Failed to fetch Project: projects/test-project-service-3 to perform move analysis." , "status" : "PERMISSION DENIED" } } Some of the policy systems may fail to analyze the resource move.

