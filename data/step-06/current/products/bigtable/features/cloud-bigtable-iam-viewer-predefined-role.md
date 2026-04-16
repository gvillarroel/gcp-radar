---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.055Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable IAM viewer predefined role"
feature_slug: "cloud-bigtable-iam-viewer-predefined-role"
latest_feature_date: "2017-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/roles-overview"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/actions"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable"
keywords:
  - "include"
  - "viewer"
  - "role"
  - "predefined"
  - "roles"
---

# Cloud Bigtable IAM viewer predefined role

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Cloud Bigtable IAM predefined roles now include a viewer role for basic console access.

## Extended Definition

Cloud Bigtable IAM predefined roles now include a viewer role for basic console access.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable)

## Supporting Pages

### "Roles and permissions \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you could include the role's intended purpose, the date a role was created or modified, and any predefined roles that the custom role is based on.
- For predefined roles only: Search the predefined role descriptions to see which permissions the role includes.
- The following table summarizes the permissions that the legacy basic roles give principals across all Google Cloud services: Legacy basic role Permissions Viewer ( roles/viewer ) Permissions for read-only actions that don't affect state, such as viewing (but not modifying) existing resources or data.
- For a list of permissions in the Viewer role, see the role details in the Google Cloud console: Go to Viewer role Editor ( roles/editor ) All viewer permissions, plus permissions for actions that modify state, such as changing existing resources.

### "Actions roles and permissions \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions)
- Source ID: `site-iam-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Actions roles Role Permissions Actions Admin ( roles/ actions.Admin ) Access to edit and deploy an action actions. actions. agent. claimContentProvider actions.agent.get actions.agent.update actions.agentVersions.create actions.agentVersions.delete actions.agentVersions.deploy actions.agentVersions.get actions.agentVersions.list firebase.projects.get firebase.projects.update resourcemanager.projects.get resourcemanager.projects.list serviceusage.services.use Actions Viewer ( roles/ actions.Viewer ) Access to view an action actions.agent.get actions.agentVersions.get actions.agentVersions.list firebase.projects.get resourcemanager.projects.get resourcemanager.projects.list serviceusage.services.use Actions permissions Permission Included in roles actions. agent. claimContentProvider Owner ( roles/ owner ) Editor ( roles/ editor ) Actions Admin ( roles/ actions.Admin ) actions.agent.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Actions Admin ( roles/ actions.Admin ) Actions Viewer ( roles/ actions.Viewer ) Support User ( roles/ iam.supportUser ) actions.agent.update Owner ( roles/ owner ) Editor ( roles/ editor ) Actions Admin ( roles/ actions.Admin ) actions.agentVersions.create Owner ( roles/ owner ) Editor ( roles/ editor ) Actions Admin ( roles/ actions.Admin ) Dialogflow Console Agent Editor ( roles/ dialogflow.consoleAgentEditor ) actions.agentVersions.delete Owner ( roles/ owner ) Editor ( roles/ editor ) Actions Admin ( roles/ actions.Admin ) actions.agentVersions.deploy Owner ( roles/ owner ) Editor ( roles/ editor ) Actions Admin ( roles/ actions.Admin ) actions.agentVersions.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Actions Admin ( roles/ actions.Admin ) Actions Viewer ( roles/ actions.Viewer ) Support User ( roles/ iam.supportUser ) actions.agentVersions.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Actions Admin ( roles/ actions.Admin ) Actions Viewer ( roles/ actions.Viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Security IAM Reference Send feedback Actions roles and permissions Stay organized with collections Save and categorize content based on your preferences.
- To search through all roles and permissions, see the role and permission index .
- This page lists the IAM roles and permissions for Actions.

### "Bigtable roles and permissions \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable)
- Source ID: `site-iam-reference`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Lowest-level resources where you can grant this role: Table bigtable.appProfiles.get bigtable.appProfiles.list bigtable.authorizedViews.get bigtable.authorizedViews.list bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable.backups.get bigtable.backups.list bigtable.clusters.get bigtable.clusters.list bigtable.hotTablets.list bigtable. instances. executeQuery bigtable.instances.get bigtable.instances.list bigtable.instances.ping bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.get bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.materializedViews.get bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable.schemaBundles.get bigtable.schemaBundles.list bigtable. tables. checkConsistency bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.list bigtable.tables.readRows bigtable.tables.sampleRowKeys monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Bigtable permissions Permission Included in roles bigtable.appProfiles.create Owner ( roles/ owner ) Editor ( roles/ editor ) Bigtable Administrator ( roles/ bigtable.admin ) Bigtable Editor ( roles/ bigtable.editor ) Databases Admin ( roles/ iam.databasesAdmin ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Lowest-level resources where you can grant this role: Table bigtable.appProfiles.get bigtable.appProfiles.list bigtable.authorizedViews.get bigtable.authorizedViews.list bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable.backups.get bigtable.backups.list bigtable.clusters.get bigtable.clusters.list bigtable.hotTablets.list bigtable. instances. executeQuery bigtable.instances.get bigtable.instances.list bigtable.instances.ping bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.get bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.materializedViews.get bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable.schemaBundles.get bigtable.schemaBundles.list bigtable. tables. checkConsistency bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Bigtable Viewer ( roles/ bigtable.viewer ) Provides no data access.
- Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Datapipelines Service Agent ( roles/ datapipelines.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) bigtable.tables.getIamPolicy Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Bigtable Administrator ( roles/ bigtable.admin ) Bigtable Editor ( roles/ bigtable.editor ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Databases Admin ( roles/ iam.databasesAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) bigtable. instances. listEffectiveTags Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Bigtable Administrator ( roles/ bigtable.admin ) Bigtable Editor ( roles/ bigtable.editor ) Bigtable Viewer ( roles/ bigtable.viewer ) Tag User ( roles/ resourcemanager.tagUser ) Tag Viewer ( roles/ resourcemanager.tagViewer ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Databases Admin ( roles/ iam.databasesAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .

