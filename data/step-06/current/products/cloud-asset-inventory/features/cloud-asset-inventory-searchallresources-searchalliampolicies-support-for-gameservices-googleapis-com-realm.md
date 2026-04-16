---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.430Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory SearchAllResources/SearchAllIamPolicies support for gameservices.googleapis.com/Realm"
feature_slug: "cloud-asset-inventory-searchallresources-searchalliampolicies-support-for-gameservices-googleapis-com-realm"
latest_feature_date: "2021-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets"
  - "https://docs.cloud.google.com/asset-inventory/docs/roles-permissions"
keywords:
  - "searchalliampolicies"
  - "realm"
  - "searchallresources"
  - "gameservices"
  - "googleapis"
---

# Cloud Asset Inventory SearchAllResources/SearchAllIamPolicies support for gameservices.googleapis.com/Realm

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now exposes gameservices.googleapis.com/Realm through SearchAllResources and SearchAllIamPolicies.

## Extended Definition

Cloud Asset Inventory now exposes gameservices.googleapis.com/Realm through SearchAllResources and SearchAllIamPolicies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- [https://docs.cloud.google.com/asset-inventory/docs/roles-permissions](https://docs.cloud.google.com/asset-inventory/docs/roles-permissions)

## Supporting Pages

### Method: searchAllResources | Cloud Asset Inventory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `feature-recovery-direct-http`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Method: searchAllResources | Cloud Asset Inventory | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Cloud Asset Inventory Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Cloud Asset Inventory Asset types Asset names Relationship types Search query syntax Legacy fields APIs and gcloud Client libraries REST reference Overview v1 TopLevel analyzeIamPolicy analyzeIamPolicyLongrunning analyzeMove analyzeOrgPolicies analyzeOrgPolicyGovernedAssets analyzeOrgPolicyGovernedContainers batchGetAssetsHistory exportAssets queryAssets searchAllIamPolicies searchAllResources REST Resources assets Overview list effectiveIamPolicies Overview batchGet feeds Overview create delete get list patch operations Overview get savedQueries Overview create delete get list patch Types AnalyzerOrgPolicy AnalyzerOrgPolicyConstraint Asset AssetException ConditionEvaluation EffectiveTagDetails Tag TimeWindow v1p1beta1 REST Resources iamPolicies Overview searchAll resources Overview searchAll v1p2beta1 REST Resources feeds Overview create delete get list patch operations Overview get v1p7beta1 TopLevel exportAssets REST Resources operations Overview get Common types Types AuditConfig Binding GetOperationRequest LogType Operation Policy RPC reference Overview google.cloud.asset.v1 google.cloud.asset.v1p1beta1 google.cloud.asset.v1p2beta1 google.cloud.asset.v1p7beta1 google.cloud.orgpolicy.v1 google.cloud.osconfig.v1 google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.longrunning google.rpc google.type gcloud reference AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Cloud Asset Inventory Reference Send feedback Method: searchAllResources Stay organized with collections Save and categorize content based on your preferences.
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE_OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource_owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource_owners" } parentAssetType string The type of this resource's immediate parent, if there is one.
- HTTP request GET https://cloudasset.googleapis.com/v1/{scope=*/*}:searchAllResources The URL uses gRPC Transcoding syntax.
- The allowed values are: projects/{PROJECT_ID} (e.g., "projects/foo-bar") projects/{PROJECT_NUMBER} (e.g., "projects/12345678") folders/{FOLDER_NUMBER} (e.g., "folders/1234567") organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") Authorization requires the following IAM permission on the specified resource scope : cloudasset.assets.searchAllResources Query parameters Parameters query string Optional.

### Roles and permissions \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/roles-permissions](https://docs.cloud.google.com/asset-inventory/docs/roles-permissions)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Analysis APIs analyze-iam-policy analyze-iam-policy-longrunning get-effective-iam-policy All of the following permissions: cloudasset. assets. analyzeIamPolicy cloudasset. assets. searchAllIamPolicies cloudasset. assets. searchAllResources iam.roles.get to analyze policies with custom roles Additional permissions are required for working with Google Workspace . analyze-move cloudasset.assets.analyzeMove analyze-org-policies analyze-org-policy-governed-containers All of the following permissions: cloudasset. assets. analyzeOrgPolicy cloudasset. assets. searchAllResources analyze-org-policy-governed-assets All of the following permissions: cloudasset. assets. analyzeOrgPolicy cloudasset. assets. searchAllIamPolicies cloudasset. assets. searchAllResources Feed APIs feeds create cloudasset.feeds.create You also need one of the following permissions, depending on the content type : cloudasset. assets. exportIamPolicy cloudasset. assets. exportResource feeds delete cloudasset.feeds.delete feeds describe cloudasset.feeds.get feeds list cloudasset.feeds.list feeds update cloudasset.feeds.update You also need one of the following permissions, depending on the content type : cloudasset. assets. exportIamPolicy cloudasset. assets. exportResource Inventory APIs export get-history One of the following permissions, depending on the content type : cloudasset. assets. exportAccessPolicy When using the ACCESS POLICY content type. cloudasset. assets. exportIamPolicy When using the IAM POLICY content type. cloudasset. assets. exportOrgPolicy When using the ORG POLICY content type. cloudasset. assets. exportOSInventories When using the OS INVENTORY content type. cloudasset. assets. exportResource When using the RELATIONSHIP or RESOURCE content types.
- Analysis APIs analyzeIamPolicy analyzeIamPolicyLongRunning effectiveIamPolicies.batchGet All of the following permissions: cloudasset. assets. analyzeIamPolicy cloudasset. assets. searchAllIamPolicies cloudasset. assets. searchAllResources iam.roles.get to analyze policies with custom roles Additional permissions are required for working with Google Workspace . analyzeMove cloudasset.assets.analyzeMove analyzeOrgPolicies analyzeOrgPolicyGovernedContainers All of the following permissions: cloudasset. assets. analyzeOrgPolicy cloudasset. assets. searchAllResources analyzeOrgPolicyGovernedAssets All of the following permissions: cloudasset. assets. analyzeOrgPolicy cloudasset. assets. searchAllIamPolicies cloudasset. assets. searchAllResources Feed APIs feeds.create cloudasset.feeds.create You also need one of the following permissions, depending on the content type : cloudasset. assets. exportIamPolicy cloudasset. assets. exportResource feeds.delete cloudasset.feeds.delete feeds.get cloudasset.feeds.get feeds.list cloudasset.feeds.list feeds.patch cloudasset.feeds.update You also need one of the following permissions, depending on the content type : cloudasset. assets. exportIamPolicy cloudasset. assets. exportResource Inventory APIs batchGetAssetsHistory exportAssets One of the following permissions, depending on the content type : cloudasset. assets. exportAccessPolicy When using the ACCESS POLICY content type. cloudasset. assets. exportIamPolicy When using the IAM POLICY content type. cloudasset. assets. exportOrgPolicy When using the ORG POLICY content type. cloudasset. assets. exportOSInventories When using the OS INVENTORY content type. cloudasset. assets. exportResource When using the RELATIONSHIP or RESOURCE content types.
- AnalyzeMove cloudasset.assets.analyzeMove AnalyzeOrgPolicies AnalyzeOrgPolicyGovernedContainers All of the following permissions: cloudasset. assets. analyzeOrgPolicy cloudasset. assets. searchAllResources AnalyzeOrgPolicyGovernedAssets All of the following permissions: cloudasset. assets. analyzeOrgPolicy cloudasset. assets. searchAllIamPolicies cloudasset. assets. searchAllResources Feed APIs CreateFeed cloudasset.feeds.create You also need one of the following permissions, depending on the content type : cloudasset. assets. exportIamPolicy cloudasset. assets. exportResource DeleteFeed cloudasset.feeds.delete GetFeed cloudasset.feeds.get ListFeed cloudasset.feeds.list UpdateFeed cloudasset.feeds.update You also need one of the following permissions, depending on the content type : cloudasset. assets. exportIamPolicy cloudasset. assets. exportResource Inventory APIs BatchGetAssetsHistory ExportAssets One of the following permissions, depending on the content type : cloudasset. assets. exportAccessPolicy When using the ACCESS POLICY content type. cloudasset. assets. exportIamPolicy When using the IAM POLICY content type. cloudasset. assets. exportOrgPolicy When using the ORG POLICY content type. cloudasset. assets. exportOSInventories When using the OS INVENTORY content type. cloudasset. assets. exportResource When using the RELATIONSHIP or RESOURCE content types.
- Search APIs searchAllIamPolicies cloudasset. assets. searchAllIamPolicies searchAllResources cloudasset. assets. searchAllResources You also need cloudasset. assets. searchEnrichmentResourceOwners if searching for resource owner enrichment. gcloud Positional statement Required permissions All APIs All Cloud Asset Inventory calls All Cloud Asset Inventory calls require the serviceusage.services.use permission.

### "Method: analyzeOrgPolicyGovernedAssets \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- Source ID: `site-api-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- The output assets will also be limited to the ones governed by those in-scope organization policies. organizations/{ORGANIZATION NUMBER} (e.g., "organizations/123456") Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies cloudasset.assets.analyzeOrgPolicy Query parameters Parameters constraint string Required.
- This field is available when the resource belongs (directly or cascadingly) to an organization. assetType string The asset type of the AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full resource name Example: cloudresourcemanager.googleapis.com/Project See Cloud Asset Inventory Supported Asset Types for all supported asset types. effectiveTags[] object ( EffectiveTagDetails ) The effective tags on this resource.
- Example: cloudresourcemanager.googleapis.com/Project See Cloud Asset Inventory Supported Asset Types for all supported asset types.
- Authorization scopes Requires the following OAuth scope: https://www.googleapis.com/auth/cloud-platform For more information, see the Authentication Overview .

