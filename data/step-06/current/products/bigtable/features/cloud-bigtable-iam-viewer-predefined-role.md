---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.407Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable IAM viewer predefined role"
feature_slug: "cloud-bigtable-iam-viewer-predefined-role"
latest_feature_date: "2017-09-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable"
  - "https://docs.cloud.google.com/iam/docs/roles-overview"
  - "https://docs.cloud.google.com/bigtable/docs/access-control"
keywords:
  - "include"
  - "viewer"
  - "role"
  - "predefined"
  - "roles"
  - "iam"
  - "bigtable"
  - "now"
---

# Cloud Bigtable IAM viewer predefined role

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud Bigtable IAM predefined roles now include a viewer role for basic console access.

## Extended Definition

Cloud Bigtable IAM predefined roles now include a viewer role for basic console access.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable)
- [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)

## Supporting Pages

### "Bigtable roles and permissions \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable)
- Source ID: `site-iam-reference`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Lowest-level resources where you can grant this role: Table bigtable.appProfiles.get bigtable.appProfiles.list bigtable.authorizedViews.get bigtable.authorizedViews.list bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable.backups.get bigtable.backups.list bigtable.clusters.get bigtable.clusters.list bigtable.hotTablets.list bigtable. instances. executeQuery bigtable.instances.get bigtable.instances.list bigtable.instances.ping bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.get bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.materializedViews.get bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable.schemaBundles.get bigtable.schemaBundles.list bigtable. tables. checkConsistency bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.list bigtable.tables.readRows bigtable.tables.sampleRowKeys monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Bigtable permissions Permission Included in roles bigtable.appProfiles.create Owner ( roles/ owner ) Editor ( roles/ editor ) Bigtable Administrator ( roles/ bigtable.admin ) Bigtable Editor ( roles/ bigtable.editor ) Databases Admin ( roles/ iam.databasesAdmin ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Datapipelines Service Agent ( roles/ datapipelines.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) bigtable.tables.getIamPolicy Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Bigtable Administrator ( roles/ bigtable.admin ) Bigtable Editor ( roles/ bigtable.editor ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Databases Admin ( roles/ iam.databasesAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) bigtable. instances. listEffectiveTags Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Bigtable Administrator ( roles/ bigtable.admin ) Bigtable Editor ( roles/ bigtable.editor ) Bigtable Viewer ( roles/ bigtable.viewer ) Tag User ( roles/ resourcemanager.tagUser ) Tag Viewer ( roles/ resourcemanager.tagViewer ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Databases Admin ( roles/ iam.databasesAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) bigtable. instances. listTagBindings Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Bigtable Administrator ( roles/ bigtable.admin ) Bigtable Editor ( roles/ bigtable.editor ) Bigtable Viewer ( roles/ bigtable.viewer ) Tag User ( roles/ resourcemanager.tagUser ) Tag Viewer ( roles/ resourcemanager.tagViewer ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Databases Admin ( roles/ iam.databasesAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .

### "Roles and permissions \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- Source ID: `site-iam-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- IAM also has three legacy basic roles that existed prior to the introduction of IAM: Owner ( roles/owner ), Editor ( roles/editor ), and Viewer ( roles/viewer ).
- For example, you could include the role's intended purpose, the date a role was created or modified, and any predefined roles that the custom role is based on.
- Predefined roles In addition to the basic roles, IAM provides additional predefined roles that give granular access to specific Google Cloud resources.
- For predefined roles only: Search the predefined role descriptions to see which permissions the role includes.

### Bigtable access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles Before you set instance-level , table-level , backup-level , authorized view-level, or continuous materialized view-level IAM roles for a user, ensure that the user has at least one of the following project-level IAM roles: Bigtable Viewer (recommended) Bigtable Reader Bigtable User Bigtable Administrator Note: You don't need to grant these project-level roles to service accounts because service accounts are associated with a Google Cloud project as opposed to a specific user.
- The user or service account is granted the roles that you specified at the instance level. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list Use the bigtable instances set-iam-policy command: gcloud bigtable instances set-iam-policy \ INSTANCE ID \ POLICY FILE Provide the following: INSTANCE ID : The permanent identifier for the instance.
- Granting authorized view-level IAM roles At the authorized view level, you can grant any of Bigtable's predefined roles to a user or service account.
- Granting instance-level IAM roles At the instance level, you can grant any of Bigtable's predefined roles to a user or service account.

