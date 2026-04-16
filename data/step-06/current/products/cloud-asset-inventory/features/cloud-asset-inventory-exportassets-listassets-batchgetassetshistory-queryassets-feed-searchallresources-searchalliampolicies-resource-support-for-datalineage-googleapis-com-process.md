---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:34.948Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory ExportAssets/ListAssets/BatchGetAssetsHistory/QueryAssets/Feed/SearchAllResources/SearchAllIamPolicies resource support for datalineage.googleapis.com/Process"
feature_slug: "cloud-asset-inventory-exportassets-listassets-batchgetassetshistory-queryassets-feed-searchallresources-searchalliampolicies-resource-support-for-datalineage-googleapis-com-process"
latest_feature_date: "2024-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/audit-logging"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rpc"
keywords:
  - "batchgetassetshistory"
  - "searchallresources"
  - "exportassets"
  - "queryassets"
  - "listassets"
  - "feed"
---

# Cloud Asset Inventory ExportAssets/ListAssets/BatchGetAssetsHistory/QueryAssets/Feed/SearchAllResources/SearchAllIamPolicies resource support for datalineage.googleapis.com/Process

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now exposes the datalineage.googleapis.com/Process resource type in ExportAssets/ListAssets/BatchGetAssetsHistory/QueryAssets/Feed/SearchAllResources/SearchAllIamPolicies APIs.

## Extended Definition

Cloud Asset Inventory now exposes the datalineage.googleapis.com/Process resource type in ExportAssets/ListAssets/BatchGetAssetsHistory/QueryAssets/Feed/SearchAllResources/SearchAllIamPolicies APIs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/audit-logging](https://docs.cloud.google.com/asset-inventory/docs/audit-logging)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rpc](https://docs.cloud.google.com/asset-inventory/docs/reference/rpc)

## Supporting Pages

### Asset types | Cloud Asset Inventory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `feature-recovery-direct-http`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- Asset types | Cloud Asset Inventory | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Cloud Asset Inventory Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Cloud Asset Inventory Asset types Asset names Relationship types Search query syntax Legacy fields APIs and gcloud Client libraries REST reference Overview v1 TopLevel analyzeIamPolicy analyzeIamPolicyLongrunning analyzeMove analyzeOrgPolicies analyzeOrgPolicyGovernedAssets analyzeOrgPolicyGovernedContainers batchGetAssetsHistory exportAssets queryAssets searchAllIamPolicies searchAllResources REST Resources assets Overview list effectiveIamPolicies Overview batchGet feeds Overview create delete get list patch operations Overview get savedQueries Overview create delete get list patch Types AnalyzerOrgPolicy AnalyzerOrgPolicyConstraint Asset AssetException ConditionEvaluation EffectiveTagDetails Tag TimeWindow v1p1beta1 REST Resources iamPolicies Overview searchAll resources Overview searchAll v1p2beta1 REST Resources feeds Overview create delete get list patch operations Overview get v1p7beta1 TopLevel exportAssets REST Resources operations Overview get Common types Types AuditConfig Binding GetOperationRequest LogType Operation Policy RPC reference Overview google.cloud.asset.v1 google.cloud.asset.v1p1beta1 google.cloud.asset.v1p2beta1 google.cloud.asset.v1p7beta1 google.cloud.orgpolicy.v1 google.cloud.osconfig.v1 google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.longrunning google.rpc google.type gcloud reference AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Cloud Asset Inventory Reference Send feedback Asset types Stay organized with collections Save and categorize content based on your preferences.
- Customer Experience Insights API reference contactcenterinsights. googleapis. com/ EncryptionSpec contactcenterinsights. googleapis. com/ IssueModel contactcenterinsights. googleapis. com/ PhraseMatcher contactcenterinsights. googleapis. com/ View Data Lineage API reference datalineage. googleapis. com/ Process Database Migration Service API reference datamigration. googleapis. com/ ConnectionProfile datamigration. googleapis. com/ ConversionWorkspace datamigration. googleapis. com/ MigrationJob datamigration. googleapis. com/ PrivateConnection Dataflow Dataflow asset change history might be incomplete.
- You can use these asset types with the following Cloud Asset Inventory operations: Export to BigQuery Export to Cloud Storage List assets Monitor asset changes with Pub/Sub Query assets with SQL Search for resources Search resources for IAM allow policies You might also need to make use of asset names associated with these asset types when working with Cloud Asset Inventory.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS_INVENTORY content type .

### Cloud Asset API \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rpc](https://docs.cloud.google.com/asset-inventory/docs/reference/rpc)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- UpdateFeed Updates an asset feed configuration. google.cloud.asset.v1p7beta1.AssetService Methods ExportAssets Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. google.longrunning.Operations Methods GetOperation Gets the latest state of a long-running operation.
- SearchAllResources Searches all the resources within a given accessible Resource Manager scope (project/folder/organization). google.cloud.asset.v1p2beta1.AssetService Methods CreateFeed Creates a feed in a parent project/folder/organization to listen to its asset updates.
- SearchAllResources Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization.
- ExportAssets Exports assets with time and resource types to a given Cloud Storage location/BigQuery table.

### Cloud Asset Inventory audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/audit-logging](https://docs.cloud.google.com/asset-inventory/docs/audit-logging)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.asset.v1.AssetService.AnalyzeIamPolicy google.cloud.asset.v1.AssetService.AnalyzeIamPolicyLongrunning AnalyzeMove google.cloud.asset.v1.AssetService.AnalyzeOrgPolicies google.cloud.asset.v1.AssetService.AnalyzeOrgPolicyGovernedAssets google.cloud.asset.v1.AssetService.AnalyzeOrgPolicyGovernedContainers google.cloud.asset.v1.AssetService.BatchGetAssetsHistory google.cloud.asset.v1.AssetService.BatchGetEffectiveIamPolicies google.cloud.asset.v1.AssetService.ExportAssets google.cloud.asset.v1.AssetService.GetFeed google.cloud.asset.v1.AssetService.GetSavedQuery google.cloud.asset.v1.AssetService.ListAssets google.cloud.asset.v1.AssetService.ListFeeds google.cloud.asset.v1.AssetService.ListSavedQueries google.cloud.asset.v1.AssetService.QueryAssets google.cloud.asset.v1.AssetService.SearchAllIamPolicies google.cloud.asset.v1.AssetService.SearchAllResources google.cloud.asset.v1beta1.AssetService.BatchGetAssetsHistory google.cloud.asset.v1beta1.AssetService.ExportAssets google.cloud.asset.v1p2beta1.AssetService.GetFeed google.cloud.asset.v1p2beta1.AssetService.ListFeeds google.cloud.asset.v1p5beta1.AssetService.ListAssets google.cloud.asset.v1p7beta1.AssetService.ExportAssets ADMIN WRITE google.cloud.asset.v1.AssetService.CreateFeed google.cloud.asset.v1.AssetService.CreateSavedQuery google.cloud.asset.v1.AssetService.DeleteFeed google.cloud.asset.v1.AssetService.DeleteSavedQuery google.cloud.asset.v1.AssetService.UpdateFeed google.cloud.asset.v1.AssetService.UpdateSavedQuery google.cloud.asset.v1p2beta1.AssetService.CreateFeed google.cloud.asset.v1p2beta1.AssetService.DeleteFeed google.cloud.asset.v1p2beta1.AssetService.UpdateFeed API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Asset Inventory. google.cloud.asset.v1.AssetService The following audit logs are associated with methods belonging to google.cloud.asset.v1.AssetService .
- Filter for this method : protoPayload.methodName="google.cloud.asset.v1beta1.AssetService.BatchGetAssetsHistory" ExportAssets Method : google.cloud.asset.v1beta1.AssetService.ExportAssets Audit log type : Data access Permissions : cloudasset.assets.exportResource - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.asset.v1.AssetService.SearchAllResources" UpdateFeed Method : google.cloud.asset.v1.AssetService.UpdateFeed Audit log type : Admin activity Permissions : cloudasset.feeds.update - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.asset.v1.AssetService.ExportAssets" GetFeed Method : google.cloud.asset.v1.AssetService.GetFeed Audit log type : Data access Permissions : cloudasset.feeds.get - ADMIN READ Method is a long-running or streaming operation : No.

