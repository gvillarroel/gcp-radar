---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.071Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Tag short name length limit"
feature_slug: "tag-short-name-length-limit"
latest_feature_date: "2023-09-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
  - "https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder"
keywords:
  - "tag"
  - "short"
  - "name"
  - "length"
  - "limit"
  - "key"
  - "value"
  - "names"
---

# Tag short name length limit

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Tag key and value short names can be up to 256 characters long.

## Extended Definition

Tag key and value short names can be up to 256 characters long.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects](https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects)
- [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)

## Supporting Pages

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- You should get a response similar to the following: short name: production namespaced name: 123456789012/environment/production parent: tagKeys/123456789012 description: "new description" API To modify a tag value description, use the tagValues.patch command: PATCH https://cloudresourcemanager.googleapis.com/v3/{tagKey.name= TAGVALUE NAME } -d Request JSON body: { "description": DESCRIPTION , } Where: TAGVALUE NAME is the permanent ID name of the tag value; for example: tagValues/4567890123 .
- You should get a response similar to the following: name: tagValues/456789012345 short name: production namespaced name: 123456789012/environment/production parent: tagKeys/123456789012 API To display the information related to a given tag value, use the tagValues.get method: GET https://cloudresourcemanager.googleapis.com/v3/{name= TAGVALUE NAME } TAGVALUE NAME is the permanent ID of the tag value; for example: tagValues/4567890123 .
- Replace tags To replace all existing tag bindings on a resource with new key-value pairs, use the --replace-tags flag with the gcloud alpha resource-manager tags bindings update command. gcloud gcloud alpha resource-manager tags bindings update \ --resource-name= RESOURCE NAME \ --replace-tags= TAG KEY NAMESPACED NAME = TAG VALUE SHORT NAME Replace the following: RESOURCE NAME : the full resource name of the resource.
- You should get a response similar to the following: name: tagKeys/123456789012 short name: environment namespaced name: 123456789012/environment parent: organizations/123456789012 For tags with dynamic values, the response also contains the allowedValuesRegex field that displays the RE2 regular expression used to validate any dynamic tag values entered when the tag is applied to a resource.

### Create projects \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects](https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can only add the namespace for the tag key-value pairs in one of the following ways: gcloud To add tags during project creation, run the following command: gcloud projects create PROJECT ID --organization= ORGANIZATION ID --tags= KEY VALUE PAIRS Replace the following: PROJECT ID is the unique identifier of the project.
- POST https://cloudresourcemanager.googleapis.com/v3/projects/ Authorization: Content-Type: application/json { "projectId": "our-project-456", "name": "my project", "parent": "organizations/123", "tags": { "key": "123/environment" "value": "production" }, "tags": { "key": "123/costCenter" "value": "marketing" } } Designate project environments with tags You can use tags to visually distinguish projects based on their environment, such as production, staging, or development.
- Don't include sensitive information, for example, personally identifiable information or security data, in your project name, project ID, or other resource names.
- Project names don't need to be unique.

### "Manage projects within folders \_|\_ Resource Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder](https://docs.cloud.google.com/resource-manager/docs/manage-projects-within-folder)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TAG KEY PARENT / TAG KEY SHORT NAME : TAG VALUE SHORT NAME " Replace the following: FOLDER ID : the unique ID of the folder.
- TAG VALUE SHORT NAME : the short name of the tag value.
- Note that the console provides limited support for visual filtering by Tags; use the Google Cloud CLI for advanced Tag queries. gcloud To list projects within a folder that have a specific Tag value, use the --filter flag with the tags attribute: gcloud projects list \ --filter = "parent.id: FOLDER ID AND tags.
- Don't include sensitive information in your folder name or other resource names.

