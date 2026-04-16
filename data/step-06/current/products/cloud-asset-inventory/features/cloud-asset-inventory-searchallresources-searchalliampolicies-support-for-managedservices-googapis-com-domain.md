---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.540Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory SearchAllResources/SearchAllIamPolicies support for managedservices.googapis.com/Domain"
feature_slug: "cloud-asset-inventory-searchallresources-searchalliampolicies-support-for-managedservices-googapis-com-domain"
latest_feature_date: "2021-06-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient"
keywords:
  - "managedservices"
  - "googapis"
  - "searchalliampolicies"
  - "domain"
  - "searchallresources"
---

# Cloud Asset Inventory SearchAllResources/SearchAllIamPolicies support for managedservices.googapis.com/Domain

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now exposes managedservices.googapis.com/Domain in SearchAllResources and SearchAllIamPolicies.

## Extended Definition

Cloud Asset Inventory now exposes managedservices.googapis.com/Domain in SearchAllResources and SearchAllIamPolicies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient)

## Supporting Pages

### Asset types | Cloud Asset Inventory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `feature-recovery-direct-http`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Asset types | Cloud Asset Inventory | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Cloud Asset Inventory Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Cloud Asset Inventory Asset types Asset names Relationship types Search query syntax Legacy fields APIs and gcloud Client libraries REST reference Overview v1 TopLevel analyzeIamPolicy analyzeIamPolicyLongrunning analyzeMove analyzeOrgPolicies analyzeOrgPolicyGovernedAssets analyzeOrgPolicyGovernedContainers batchGetAssetsHistory exportAssets queryAssets searchAllIamPolicies searchAllResources REST Resources assets Overview list effectiveIamPolicies Overview batchGet feeds Overview create delete get list patch operations Overview get savedQueries Overview create delete get list patch Types AnalyzerOrgPolicy AnalyzerOrgPolicyConstraint Asset AssetException ConditionEvaluation EffectiveTagDetails Tag TimeWindow v1p1beta1 REST Resources iamPolicies Overview searchAll resources Overview searchAll v1p2beta1 REST Resources feeds Overview create delete get list patch operations Overview get v1p7beta1 TopLevel exportAssets REST Resources operations Overview get Common types Types AuditConfig Binding GetOperationRequest LogType Operation Policy RPC reference Overview google.cloud.asset.v1 google.cloud.asset.v1p1beta1 google.cloud.asset.v1p2beta1 google.cloud.asset.v1p7beta1 google.cloud.orgpolicy.v1 google.cloud.osconfig.v1 google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.longrunning google.rpc google.type gcloud reference AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Cloud Asset Inventory Reference Send feedback Asset types Stay organized with collections Save and categorize content based on your preferences.
- You can use these asset types with the following Cloud Asset Inventory operations: Export to BigQuery Export to Cloud Storage List assets Monitor asset changes with Pub/Sub Query assets with SQL Search for resources Search resources for IAM allow policies You might also need to make use of asset names associated with these asset types when working with Cloud Asset Inventory.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS_INVENTORY content type .
- API reference workflows. googleapis. com/ Workflow Policy types Cloud Asset Inventory uses the following asset types for the ACCESS_POLICY , IAM_POLICY , and ORG_POLICY content types .

### "Class AssetServiceAsyncClient (4.2.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- SearchAllResourcesRequest ( scope="scope value", ) Make the request page result = client. search all resources (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.asset v1.types.SearchAllResourcesRequest , dict]] The request object.
- The caller must be granted the cloudasset.assets.searchAllResources https://cloud.google.com/asset-inventory/docs/access-control#required permissions permission on the desired scope.
- The caller must be granted the cloudasset.assets.searchAllResources permission on the desired scope, otherwise the request will be rejected.
- SearchAllResourcesAsyncPager Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization.

### "Class AssetServiceClient (4.2.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient)
- Source ID: `site-python-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- SearchAllResourcesRequest ( scope="scope value", ) Make the request page result = client. search all resources (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.asset v1.types.SearchAllResourcesRequest , dict] The request object.
- The caller must be granted the cloudasset.assets.searchAllResources https://cloud.google.com/asset-inventory/docs/access-control#required permissions permission on the desired scope.
- The caller must be granted the cloudasset.assets.searchAllResources permission on the desired scope, otherwise the request will be rejected.
- SearchAllResourcesPager Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization.

