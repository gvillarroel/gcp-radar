---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.525Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory SearchAllResources/SearchAllIamPolicies support for compute.googleapis.com/Instance (OS inventory)"
feature_slug: "cloud-asset-inventory-searchallresources-searchalliampolicies-support-for-compute-googleapis-com-instance-os-inventory"
latest_feature_date: "2021-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
keywords:
  - "searchalliampolicies"
  - "searchallresources"
  - "googleapis"
  - "instance"
  - "compute"
---

# Cloud Asset Inventory SearchAllResources/SearchAllIamPolicies support for compute.googleapis.com/Instance (OS inventory)

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now exposes Compute Engine Instance resources with OS Inventory context in SearchAllResources and SearchAllIamPolicies.

## Extended Definition

Cloud Asset Inventory now exposes Compute Engine Instance resources with OS Inventory context in SearchAllResources and SearchAllIamPolicies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)

## Supporting Pages

### Asset types | Cloud Asset Inventory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `feature-recovery-direct-http`
- Final score: 393
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Asset types | Cloud Asset Inventory | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Cloud Asset Inventory Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Cloud Asset Inventory Asset types Asset names Relationship types Search query syntax Legacy fields APIs and gcloud Client libraries REST reference Overview v1 TopLevel analyzeIamPolicy analyzeIamPolicyLongrunning analyzeMove analyzeOrgPolicies analyzeOrgPolicyGovernedAssets analyzeOrgPolicyGovernedContainers batchGetAssetsHistory exportAssets queryAssets searchAllIamPolicies searchAllResources REST Resources assets Overview list effectiveIamPolicies Overview batchGet feeds Overview create delete get list patch operations Overview get savedQueries Overview create delete get list patch Types AnalyzerOrgPolicy AnalyzerOrgPolicyConstraint Asset AssetException ConditionEvaluation EffectiveTagDetails Tag TimeWindow v1p1beta1 REST Resources iamPolicies Overview searchAll resources Overview searchAll v1p2beta1 REST Resources feeds Overview create delete get list patch operations Overview get v1p7beta1 TopLevel exportAssets REST Resources operations Overview get Common types Types AuditConfig Binding GetOperationRequest LogType Operation Policy RPC reference Overview google.cloud.asset.v1 google.cloud.asset.v1p1beta1 google.cloud.asset.v1p2beta1 google.cloud.asset.v1p7beta1 google.cloud.orgpolicy.v1 google.cloud.osconfig.v1 google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.longrunning google.rpc google.type gcloud reference AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Cloud Asset Inventory Reference Send feedback Asset types Stay organized with collections Save and categorize content based on your preferences.
- Learn more about OS inventory management . osLongName osShortName Supported metadata fields: block-project-ssh-keys enable-oslogin enable-osconfig serial-port-enable compute. googleapis. com/ InstanceGroup compute. googleapis. com/ InstanceGroupManager compute. googleapis. com/ InstanceSettings Not available in the analysis APIs. compute. googleapis. com/ InstanceTemplate compute. googleapis. com/ InstantSnapshot compute. googleapis. com/ Interconnect compute. googleapis. com/ InterconnectAttachment compute.googleapis.com/License compute. googleapis. com/ MachineImage compute.googleapis.com/Network Searchable attributes: gatewayIPv4 compute. googleapis. com/ NetworkAttachment Searchable attributes: connectionEndpointsIpAddresses connectionEndpointsIpv6Addresses compute. googleapis. com/ NetworkEdgeSecurityService compute. googleapis. com/ NetworkEndpointGroup compute. googleapis. com/ NodeGroup compute. googleapis. com/ NodeTemplate compute. googleapis. com/ PacketMirroring compute.googleapis.com/Project Supported metadata fields: block-project-ssh-keys enable-osconfig enable-oslogin serial-port-enable compute. googleapis. com/ PublicAdvertisedPrefix Not available in the analysis APIs. compute. googleapis. com/ PublicDelegatedPrefix compute. googleapis. com/ RegionBackendService Not available in the analysis and search APIs.
- Use compute.googleapis.com/Disk instead in the search and analysis APIs. compute. googleapis. com/ Reservation compute. googleapis. com/ ResourcePolicy compute.googleapis.com/Route compute.googleapis.com/Router compute. googleapis. com/ SecurityPolicy compute. googleapis. com/ ServiceAttachment compute. googleapis. com/ Snapshot compute. googleapis. com/ SslCertificate compute. googleapis. com/ SslPolicy compute. googleapis. com/ StoragePool compute. googleapis. com/ Subnetwork Searchable attributes: gatewayAddress compute. googleapis. com/ TargetGrpcProxy compute. googleapis. com/ TargetHttpProxy compute. googleapis. com/ TargetHttpsProxy compute. googleapis. com/ TargetInstance compute. googleapis. com/ TargetPool compute. googleapis. com/ TargetSslProxy compute. googleapis. com/ TargetTcpProxy compute. googleapis. com/ TargetVpnGateway compute.googleapis.com/UrlMap compute. googleapis. com/ VpnGateway compute. googleapis. com/ VpnTunnel Container Registry Container Registry implements Docker HTTP API V2 and does not provide a public API. containerregistry. googleapis. com/ Image Effective tags aren't supported.
- Use compute.googleapis.com/ForwardingRule instead in the search and analysis APIs. compute. googleapis. com/ HealthCheck compute. googleapis. com/ HttpHealthCheck compute. googleapis. com/ HttpsHealthCheck compute.googleapis.com/Image compute. googleapis. com/ Instance Searchable attributes: deletionProtection externalIPs internalIPs machineType networkInterfaceNetworks networkInterfaceNames The following attributes are from the OS Inventory , which is attached on this Compute Engine Instance to provide information on operating system and packages.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 388
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "location:us- ", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances that are running The following sample shows how to search for Compute Engine instances that are running in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "state=RUNNING" \ --asset-types = compute.googleapis.com/Instance \ --read-mask = "name,assetType,location,versionedResources" \ --format = "table(name, assetType, location, versionedResources)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "createTime>2023-31-12", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances located in the US The following sample shows how to search for Compute Engine instances in the my-project project that are located in the US. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "location:us- " \ --asset-types = compute.googleapis.com/Instance \ --format = "table(name, assetType, location)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "name:instance 1", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "name DESC", "readMask": "name,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Example response { "results" : [ { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-2-1" , "location" : "us-central1-a" }, { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-1" , "location" : "us-central1-a" } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### Method: searchAllResources | Cloud Asset Inventory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `feature-recovery-direct-http`
- Final score: 349
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Method: searchAllResources | Cloud Asset Inventory | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Cloud Asset Inventory Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Cloud Asset Inventory Asset types Asset names Relationship types Search query syntax Legacy fields APIs and gcloud Client libraries REST reference Overview v1 TopLevel analyzeIamPolicy analyzeIamPolicyLongrunning analyzeMove analyzeOrgPolicies analyzeOrgPolicyGovernedAssets analyzeOrgPolicyGovernedContainers batchGetAssetsHistory exportAssets queryAssets searchAllIamPolicies searchAllResources REST Resources assets Overview list effectiveIamPolicies Overview batchGet feeds Overview create delete get list patch operations Overview get savedQueries Overview create delete get list patch Types AnalyzerOrgPolicy AnalyzerOrgPolicyConstraint Asset AssetException ConditionEvaluation EffectiveTagDetails Tag TimeWindow v1p1beta1 REST Resources iamPolicies Overview searchAll resources Overview searchAll v1p2beta1 REST Resources feeds Overview create delete get list patch operations Overview get v1p7beta1 TopLevel exportAssets REST Resources operations Overview get Common types Types AuditConfig Binding GetOperationRequest LogType Operation Policy RPC reference Overview google.cloud.asset.v1 google.cloud.asset.v1p1beta1 google.cloud.asset.v1p2beta1 google.cloud.asset.v1p7beta1 google.cloud.orgpolicy.v1 google.cloud.osconfig.v1 google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.longrunning google.rpc google.type gcloud reference AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Cloud Asset Inventory Reference Send feedback Method: searchAllResources Stay organized with collections Save and categorize content based on your preferences.
- For example: "compute.googleapis.com.*" snapshots resources whose asset type starts with "compute.googleapis.com". ".*Instance" snapshots resources whose asset type ends with "Instance". ".*Instance.*" snapshots resources whose asset type contains "Instance".
- Example: //compute.googleapis.com/projects/my_proj_123/zones/instance/instance123 AssetEnrichment The enhanced metadata information for a resource.
- Example: compute.googleapis.com/Instance fullResourceName string The full resource name of the related resource.

