---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.388Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Data profile infoType detection percentages"
feature_slug: "data-profile-infotype-detection-percentages"
latest_feature_date: "2022-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
keywords:
  - "percentages"
  - "approximate"
  - "show"
  - "percentage"
  - "detection"
  - "profiles"
  - "profile"
  - "infotype"
---

# Data profile infoType detection percentages

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

New data profiles show the approximate percentage of non-null rows where each non-predicted infoType is detected.

## Extended Definition

New data profiles show the approximate percentage of non-null rows where each non-predicted infoType is detected.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)

## Supporting Pages

### "Analyze data profiles stored in BigQuery \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles)
- Source ID: `site-api-reference-required-2`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This example shows you how to create a report containing a table that shows each infoType reported in your data profiles and its corresponding frequency.
- List all bucket paths, clusters, and file extensions scanned where a credit card number, person name, or US Social Security number was detected SELECT file store profile . file store path , summaries . file cluster type . cluster , STRING AGG ( scanned file extensions . file extension ) AS scanned extensions FROM TABLE OR VIEW LEFT JOIN UNNEST ( file store profile . file cluster summaries ) as summaries LEFT JOIN UNNEST ( summaries . file store info type summaries ) as info types LEFT JOIN UNNEST ( summaries . file extensions scanned ) as scanned file extensions WHERE file store profile . data source type . data source = 'google/storage/bucket' AND info types . info type . name IN ( 'CREDIT CARD NUMBER' , 'PERSON NAME' , 'US SOCIAL SECURITY NUMBER' ) GROUP BY 1 , 2 ; This query uses the following built-in infoTypes : CREDIT CARD NUMBER : represents a credit card number PERSON NAME : represents the full name of a person US SOCIAL SECURITY NUMBER represents a US Social Security number For more information, see File store data profiles .
- List table profiles that contain columns of credit card numbers, US Social Security numbers, and person names SELECT table full resource , COUNT ( ) AS count findings FROM ( SELECT DISTINCT column profile . table full resource , column profile . column info type . info type . name FROM TABLE OR VIEW WHERE column profile . column info type . info type . name IN ( 'PERSON NAME' , 'CREDIT CARD NUMBER' , 'US SOCIAL SECURITY NUMBER' ) ORDER BY column profile . table full resource ) ot1 GROUP BY table full resource increase this number to match the total distinct infoTypes that must be present HAVING count findings > = 3 This query uses the following built-in infoTypes : CREDIT CARD NUMBER : represents a credit card number PERSON NAME : represents the full name of a person US SOCIAL SECURITY NUMBER represents a US Social Security number For information about how to remediate these findings, see Recommended strategies for mitigating data risk .
- The Sensitive Data Protection Dashboard is a multi-page report that gives you a quick high-level view of your data profiles, including breakdowns by risk, by infoType, and by location.

### "Overview of sensitive data discovery \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- Source ID: `site-docs-reference-3`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have data in a region that Sensitive Data Protection doesn't support, then the discovery service skips those data resources and shows an error when you view the data profiles .
- The following image shows a list of column-level data profiles.
- It includes the following settings: Scope (organization, folder, or project) of the discovery operation Type of resource to profile Inspection templates to use Scan frequency Specific subsets of data that should be included in or excluded from discovery Actions that you want Sensitive Data Protection to take after discovery—for example, which Google Cloud services to publish the profiles to Service agent to use for discovery operations For information about how to create an organization-level or project-level discovery scan configuration, see the following pages: Discovery type Create an organization-level scan configuration Create a project-level scan configuration 1 Discovery for BigQuery data Profile BigQuery data in an organization or folder Profile BigQuery data in a single project Discovery for Cloud SQL data Profile Cloud SQL data in an organization or folder Profile Cloud SQL data in a single project Discovery for Cloud Storage data Profile Cloud Storage data in an organization or folder Profile Cloud Storage data in a single project Discovery for Vertex AI data Profile Vertex AI data in an organization or folder Profile Vertex AI data in a single project Discovery for Amazon S3 data Discovery for Amazon S3 data Not applicable Discovery for Azure Blob Storage data Discovery for Azure Blob Storage data Not applicable Secrets discovery (no profiles generated) Configure secrets discovery at the organization level Configure secrets discovery at the project level 1 Not suitable for customers who have an organization-level discovery subscription, such as one provided through Security Command Center Scan configuration scopes You can create a scan configuration at the following levels: Organization Folder Project Single data resource At the organization and folder levels, if two or more active scan configurations have the same project in their scope, Sensitive Data Protection determines which scan configuration can generate profiles for that project.
- Purpose Predefined role Relevant permissions Create a discovery scan configuration and view data profiles DLP Administrator ( roles/dlp.admin ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.inspectTemplates.create dlp.jobs.create dlp.jobs.list dlp.jobTriggers.create dlp.jobTriggers.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list Create a project to be used as the service agent container 1 Project Creator ( roles/resourcemanager.projectCreator ) resourcemanager.organizations.get resourcemanager.projects.create Grant discovery access 2 One of the following: Organization Administrator ( roles/resourcemanager.organizationAdmin ) Security Admin ( roles/iam.securityAdmin ) resourcemanager.organizations.getIamPolicy resourcemanager.organizations.setIamPolicy View data profiles (read-only) DLP Data Profiles Reader ( roles/dlp.dataProfilesReader ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list DLP Reader ( roles/dlp.reader ) dlp.jobs.list dlp.jobTriggers.list 1 If you don't have the Project Creator ( roles/resourcemanager.projectCreator ) role, you can still create a scan configuration, but the service agent container that you use must be an existing project.

### "Profile Amazon S3 data \_|\_ Sensitive Data Protection \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3)
- Source ID: `site-docs-reference-3`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT findings table . quote , findings table . infotype . name , findings table . location . container name , profiles table . file store profile . file store path as bucket name , profiles table . file store profile . sensitivity score as bucket sensitivity score FROM FINDINGS TABLE PROJECT ID .
- Using the exported data profiles and the exported sample findings, you can run queries to get more information about the specific items that were flagged, the infoTypes they matched, their exact locations, their calculated sensitivity levels, and other details.
- Example query: Show sample findings related to file store data profiles This example requires both Save data profile copies to BigQuery and Save sample discovery findings to BigQuery to be enabled.
- If you select Send a Pub/Sub notification each time a profile is updated , Sensitive Data Protection sends a notification when there's a change in the sensitivity level, data risk level, detected infoTypes, public access, and other important metrics in the profile.

