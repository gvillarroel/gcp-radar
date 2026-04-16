---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.086Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Cloud Asset Inventory Analyze Move API"
feature_slug: "cloud-asset-inventory-analyze-move-api"
latest_feature_date: "2021-05-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/analyze-move"
  - "https://docs.cloud.google.com/resource-manager/docs/create-migration-plan"
  - "https://docs.cloud.google.com/resource-manager/docs/moving-projects-folders"
keywords:
  - "asset"
  - "inventory"
  - "analyze"
  - "move"
  - "reports"
  - "impact"
  - "moving"
  - "project"
---

# Cloud Asset Inventory Analyze Move API

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

The API reports the impact of moving a project before the migration.

## Extended Definition

The API reports the impact of moving a project before the migration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move)
- [https://docs.cloud.google.com/resource-manager/docs/create-migration-plan](https://docs.cloud.google.com/resource-manager/docs/create-migration-plan)
- [https://docs.cloud.google.com/resource-manager/docs/moving-projects-folders](https://docs.cloud.google.com/resource-manager/docs/moving-projects-folders)

## Supporting Pages

### Analyze project move \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move)
- Source ID: `site-docs-reference-2`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Even if the destination organization resource specified in the API call does not exist, the analysis of the project to be moved is still performed. gcloud To analyze the impacts of migrating a project from its current position in the resource hierarchy, use the gcloud asset analyze-move command: gcloud asset analyze-move --project= PROJECT ID \ (--destination-folder= FOLDER ID \ --destination-organization= ORGANIZATION ID ) To analyze the impacts of moving a project to a different folder , run the command with --destination-folder : gcloud asset analyze-move --project= PROJECT ID \ --destination-folder= FOLDER ID To analyze the impacts of moving a project to a different organization , run the command with --destination-organization : gcloud asset analyze-move --project= PROJECT ID \ --destination-organization= ORGANIZATION ID Where: PROJECT ID is the unique project ID of the project you are migrating.
- This guide describes how to use the Cloud Asset Inventory Analyze Move API to get a detailed report on warnings and blockers from a list of critical policies systems prior to actually moving your project.
- API To analyze the impacts of migrating a project from its current position in the resource hierarchy without performing the move, use the cloudasset.analyzeMove method: GET https://cloudasset.googleapis.com/v1/{ resource = / }: \ analyzeMove?destinationParent= DESTINATION NAME Where: resource is the name of the resource on which to perform the analysis.
- Example error message The following example demonstrates the error code returned for a user that does not have the cloudasset.assets.analyzeMove permission on the project to be migrated: { "error" : { "code" : 403 , "message" : "Failed to fetch Project: projects/test-project-service-3 to perform move analysis." , "status" : "PERMISSION DENIED" } } Some of the policy systems may fail to analyze the resource move.

### Create a migration plan \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/create-migration-plan](https://docs.cloud.google.com/resource-manager/docs/create-migration-plan)
- Source ID: `site-iam-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this migration plan, take inventory of each of the services that your project is running, and any other services that may be impacted by the migration, or by the resource hierarchy in the destination for your project.
- On each of the import and export folders, assign the person who will be moving the projects the roles/resourcemanager.projectMover role.
- While the migration won't make direct configuration changes to the project, the change in the resource hierarchy is likely to have an impact on the function of the project and its running services.
- This role will be inherited by any projects that are contained within these folders, giving the user the ability to perform the move operations on any project that is moved into those folders.

### Move a project \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/moving-projects-folders](https://docs.cloud.google.com/resource-manager/docs/moving-projects-folders)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- These roles give you the following required permissions: resourcemanager.projects.update on the project If the resource is in a folder: resourcemanager.projects.move on the source folder and the destination If the resource is not in a folder: resourcemanager.projects.move on the organization resource You can also gain these permissions with custom roles , or other predefined roles.
- Click Move . gcloud To move a project, run the gcloud beta projects move command: gcloud beta projects move PROJECT ID \ -- DESTINATION TYPE DESTINATION ID Replace the following: PROJECT ID : The ID or number of the project you want to move.
- Request: POST https://cloudresourcemanager.googleapis.com/v3/{name= PROJECT NAME }:move { "destinationParent": DESTINATION PARENT } Replace the following: PROJECT NAME : the name of the project you want to update.
- If you moved one of these projects to Folder B, which does not have the same inherited permissions, the service account for that project loses the ability to upload data, resulting in a service outage.

