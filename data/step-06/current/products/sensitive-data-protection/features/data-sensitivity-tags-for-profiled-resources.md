---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.319Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Data sensitivity tags for profiled resources"
feature_slug: "data-sensitivity-tags-for-profiled-resources"
latest_feature_date: "2024-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/DataProfileAction"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects"
keywords:
  - "apply"
  - "profiled"
  - "sensitivity"
  - "resources"
  - "tags"
---

# Data sensitivity tags for profiled resources

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Sensitive Data Protection can apply tags to profiled resources based on calculated data sensitivity.

## Extended Definition

Sensitive Data Protection can apply tags to profiled resources based on calculated data sensitivity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity](https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/DataProfileAction](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/DataProfileAction)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects)

## Supporting Pages

### "Control IAM access based on data sensitivity \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity](https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity)
- Source ID: `site-api-reference-required-2`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The service agent is missing permissions If the service agent doesn't have the permissions that are required to attach the sensitivity level tag to the profiled resources, you get the following error: The DLP service account SERVICE AGENT NAME is missing permissions needed for attaching tags to resources.
- Supported resources With this feature, Sensitive Data Protection automatically tags data at following levels: BigQuery tables Cloud SQL instances Cloud Storage buckets How it works The following is a high-level workflow for controlling access to resources based on data sensitivity.
- You can configure the Sensitive Data Protection discovery service to automatically attach tags to resources based on the calculated sensitivity levels of those resources.
- Deny access if moderate-sensitivity or high-sensitivity data is present The following excerpt of a deny policy denies the bigquery.googleapis.com/tables.get permission if the resource has any moderate-sensitivity or high-sensitivity data. "rules": [ { "denyRule": { "deniedPrincipals": [ "principalSet://goog/group/data-team@example.com" ], "deniedPermissions": [ "bigquery.googleapis.com/tables.get" ], "denialCondition": { "title": "Resource has moderate or high data sensitivity", "expression": "resource.matchTagId("tagKeys/ SENSITIVITY LEVEL TAG KEY ", "tagValues/ TAG VALUE FOR MODERATE SENSITIVITY ") resource.matchTagId("tagKeys/ SENSITIVITY LEVEL TAG KEY ", "tagValues/ TAG VALUE FOR HIGH SENSITIVITY ")" } } } ] Replace the following: SENSITIVITY LEVEL TAG KEY : the numeric ID of the sensitivity level tag key that you created TAG VALUE FOR MODERATE SENSITIVITY : the numeric ID of the tag value that you created for moderate-sensitivity data TAG VALUE FOR HIGH SENSITIVITY : the numeric ID of the tag value that you created for high-sensitivity data Enable the automatic tagging in the discovery configuration In this task, you enable the Tag resources action.

### DataProfileAction \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/DataProfileAction](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/DataProfileAction)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Use Sensitive Data Protection data in context-aware analytics . publishToScc object ( PublishToSecurityCommandCenter ) Publishes findings to Security Command Center for each data profile. tagResources object ( TagResources ) Tags the profiled resources with the specified tag values. publishToDataplexCatalog object ( PublishToDataplexCatalog ) Publishes a portion of each profile to Dataplex Universal Catalog with the aspect type Sensitive Data Protection Profile.
- TagResources If set, attaches the tags provided to profiled resources.
- JSON representation { "tagConditions" : [ { object ( TagCondition ) } ] , "profileGenerationsToTag" : [ enum ( ProfileGeneration ) ] , "lowerDataRiskToLow" : boolean } Fields tagConditions[] object ( TagCondition ) The tags to associate with different conditions. profileGenerationsToTag[] enum ( ProfileGeneration ) The profile generations for which the tag should be attached to resources.
- JSON representation { "tag" : { object ( TagValue ) } , // Union field type can be only one of the following: "sensitivityScore" : { object ( SensitivityScore ) } // End of list of possible types for union field type . } Fields tag object ( TagValue ) The tag value to attach to resources.

### "Add Knowledge Catalog aspects based on insights from data profiles \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects)
- Source ID: `site-api-reference-required-2`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Find all resources that have a project-level profile aspect:sensitive-data-protection-profile.projectProfile Find all resources that have an organization-level profile aspect:sensitive-data-protection-profile.organizationProfile Migrate to the Send to Dataplex Catalog as aspects action To migrate a discovery configuration that is set to use the deprecated Send to Dataplex as tags action, follow these steps: Edit the discovery configuration that is configured to send discovery results to Data Catalog as tags.
- Top-level fields The resulting aspect for a profiled table can have the following top-level fields: Display name Example value Description Sensitivity MODERATE The calculated sensitivity level of the table Risk MODERATE The calculated data risk level of the table InfoTypes infoType : CREDIT CARD NUMBER infoType : PHONE NUMBER infoType : US SOCIAL SECURITY NUMBER A list of all infoTypes found in the table, including predicted infoTypes and other infoTypes .
- Find all resources that have the Sensitive Data Protection profile aspect aspect:sensitive-data-protection-profile Find all resources with a given sensitivity score aspect:sensitive-data-protection-profile.sensitivity= SENSITIVITY SCORE Replace SENSITIVITY SCORE with HIGH , MODERATE , UNKNOWN , or LOW .
- Run the following script: #!/bin/bash RESOURCE ID = " RESOURCE ID " gcloud asset search-all-resources \ --scope = " RESOURCE TYPE / $RESOURCE ID " \ --asset-types = "cloudresourcemanager.googleapis.com/Project" \ --format = "value(name)" while read project name ; do project id = $( echo " $project name " sed 's . / ' ) gcloud services enable "dataplex.googleapis.com" --project = " $project id " done Replace the following: RESOURCE ID : the organization number or folder number of the resource that contains the projects RESOURCE TYPE : the type of the resource that contains the projects— organizations or folders Roles and permissions for viewing aspects To get the permissions that you need to search for aspects associated with your resources, ask your administrator to grant you the following IAM roles on the resources: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) BigQuery Data Viewer ( roles/bigquery.dataViewer ) Vertex AI Viewer ( roles/aiplatform.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

