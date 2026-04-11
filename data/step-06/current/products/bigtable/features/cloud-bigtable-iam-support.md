---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.412Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable IAM support"
feature_slug: "cloud-bigtable-iam-support"
latest_feature_date: "2017-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/iam/docs"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable"
keywords:
  - "identity"
  - "management"
  - "added"
  - "access"
  - "iam"
  - "bigtable"
  - "and"
  - "for"
---

# Cloud Bigtable IAM support

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud Bigtable added support for Identity and Access Management.

## Extended Definition

Cloud Bigtable added support for Identity and Access Management.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/iam/docs](https://docs.cloud.google.com/iam/docs)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable)

## Supporting Pages

### "Identity and Access Management documentation \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs](https://docs.cloud.google.com/iam/docs)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security IAM Identity and Access Management documentation Read product documentation Identity and Access Management (IAM) lets you create and manage permissions for Google Cloud resources.
- Go to the Identity and Access Management product page for more.
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Quickstarts: Quickstart: Grant an IAM role by using the Google Cloud console or Quickstart: Write an IAM policy by using client libraries Manage access to projects, folders, and organizations Manage access to other resources Roles overview Service account overview Create service accounts Attach service accounts to resources Creating and managing custom roles Configure temporary access find in page Reference Roles and permissions Client libraries IAM REST API Full resource names Attribute reference for IAM Conditions Resource attributes for IAM Conditions Support levels for permissions in custom roles Resource types that accept IAM policies Service agents info Resources Release notes Permissions change log Getting support Quotas and limits Billing questions Troubleshooting "withcond" in policies and role bindings Pricing Related resources Training and tutorials Use cases Code samples Explore self-paced training, use cases, reference architectures, and code samples with examples of how to use and connect Google Cloud services.
- IAM unifies access control for Google Cloud services into a single system and presents a consistent set of operations.

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Other: No known limitations Google Security Operations GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Hybrid Connectivity GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Identity and Access Management GA Console (federated): The Name column within the IAM table doesn't show display names for Google identities.
- Google Cloud API: No known limitations Other: The following features don't support Workforce Identity Federation with BigQuery: Connected Sheets Google Drive Recommendations Slot estimator The following operations don't support Workforce Identity Federation: Loading data from Amazon S3 , Apache Spark , or Azure Blob Storage through the Connection API Loading data from Google Drive Bigtable GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Binary Authorization GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Analytics GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Node Engine GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Carbon Footprint GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Authority Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Channel Services GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Asset Inventory GA Console (federated): In the IAM policy tab, the Analyze Full Access button is unavailable for Workforce Identity Federation users.
- Home Documentation Security IAM Identity and Access Management (IAM) Reference Send feedback Identity federation: products and limitations Stay organized with collections Save and categorize content based on your preferences.
- Live Stream API GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Looker (Google Cloud core) Unsupported Alternatives: No alternatives available Looker Studio Unsupported Alternatives: No alternatives available Managed Service for Microsoft Active Directory GA Console (federated): No known limitations Google Cloud API: No known limitations Other: Workforce Identity Federation users can't use IAP TCP forwarding to access the Active Directory management VM .

### "Bigtable roles and permissions \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Lowest-level resources where you can grant this role: Table bigtable. bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.get bigtable.appProfiles.list bigtable.appProfiles.update bigtable. authorizedViews. create bigtable. authorizedViews. createTagBinding bigtable. authorizedViews. delete bigtable. authorizedViews. deleteTagBinding bigtable.authorizedViews.get bigtable. authorizedViews. getIamPolicy bigtable.authorizedViews.list bigtable. authorizedViews. listEffectiveTags bigtable. authorizedViews. listTagBindings bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable. authorizedViews. setIamPolicy bigtable. authorizedViews. update bigtable.backups.create bigtable.backups.delete bigtable.backups.get bigtable.backups.getIamPolicy bigtable.backups.list bigtable.backups.read bigtable.backups.restore bigtable.backups.setIamPolicy bigtable.backups.update bigtable.clusters.create bigtable.clusters.delete bigtable.clusters.get bigtable.clusters.list bigtable.clusters.update bigtable.hotTablets.list bigtable.instances.create bigtable. instances. createTagBinding bigtable.instances.delete bigtable. instances. deleteTagBinding bigtable. instances. executeQuery bigtable.instances.get bigtable. instances. getIamPolicy bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.instances.ping bigtable. instances. setIamPolicy bigtable.instances.update bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.create bigtable.logicalViews.delete bigtable.logicalViews.get bigtable. logicalViews. getIamPolicy bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable. logicalViews. setIamPolicy bigtable.logicalViews.update bigtable. materializedViews. create bigtable. materializedViews. delete bigtable.materializedViews.get bigtable. materializedViews. getIamPolicy bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable. materializedViews. setIamPolicy bigtable. materializedViews. update bigtable.schemaBundles.create bigtable.schemaBundles.delete bigtable.schemaBundles.get bigtable. schemaBundles. getIamPolicy bigtable.schemaBundles.list bigtable. schemaBundles. setIamPolicy bigtable.schemaBundles.update bigtable. tables. checkConsistency bigtable.tables.create bigtable.tables.delete bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.getIamPolicy bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys bigtable.tables.setIamPolicy bigtable.tables.undelete bigtable.tables.update cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Bigtable Editor ( roles/ bigtable.editor ) Editor role for bigtable bigtable.appProfiles. bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.get bigtable.appProfiles.list bigtable.appProfiles.update bigtable. authorizedViews. create bigtable. authorizedViews. delete bigtable.authorizedViews.get bigtable. authorizedViews. getIamPolicy bigtable.authorizedViews.list bigtable. authorizedViews. listEffectiveTags bigtable. authorizedViews. listTagBindings bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable. authorizedViews. update bigtable.backups.create bigtable.backups.delete bigtable.backups.get bigtable.backups.getIamPolicy bigtable.backups.list bigtable.backups.read bigtable.backups.restore bigtable.backups.update bigtable.clusters. bigtable.clusters.create bigtable.clusters.delete bigtable.clusters.get bigtable.clusters.list bigtable.clusters.update bigtable.hotTablets.list bigtable.instances.create bigtable.instances.delete bigtable. instances. executeQuery bigtable.instances.get bigtable. instances. getIamPolicy bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.instances.ping bigtable.instances.update bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.create bigtable.logicalViews.delete bigtable.logicalViews.get bigtable. logicalViews. getIamPolicy bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.logicalViews.update bigtable. materializedViews. create bigtable. materializedViews. delete bigtable.materializedViews.get bigtable. materializedViews. getIamPolicy bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable. materializedViews. update bigtable.schemaBundles.create bigtable.schemaBundles.delete bigtable.schemaBundles.get bigtable. schemaBundles. getIamPolicy bigtable.schemaBundles.list bigtable.schemaBundles.update bigtable. tables. checkConsistency bigtable.tables.create bigtable.tables.delete bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.getIamPolicy bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys bigtable.tables.undelete bigtable.tables.update monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries.list resourcemanager.projects.get resourcemanager.projects.list Bigtable User ( roles/ bigtable.user ) Provides read-write access to the data stored within Bigtable tables.
- This page lists the IAM roles and permissions for Bigtable.
- Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Datapipelines Service Agent ( roles/ datapipelines.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) bigtable.tables.getIamPolicy Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Bigtable Administrator ( roles/ bigtable.admin ) Bigtable Editor ( roles/ bigtable.editor ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Databases Admin ( roles/ iam.databasesAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) bigtable.tables.sampleRowKeys Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Bigtable Administrator ( roles/ bigtable.admin ) Bigtable Editor ( roles/ bigtable.editor ) Bigtable User ( roles/ bigtable.user ) Bigtable Reader ( roles/ bigtable.reader ) Data Scientist ( roles/ iam.dataScientist ) Databases Admin ( roles/ iam.databasesAdmin ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .

