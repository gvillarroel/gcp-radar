---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:39.130Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory: organization searchable field in SearchAllResources"
feature_slug: "cloud-asset-inventory-organization-searchable-field-in-searchallresources"
latest_feature_date: "2021-02-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-insights"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
keywords:
  - "asset"
  - "inventory"
  - "organization"
  - "searchable"
  - "field"
  - "in"
  - "searchallresources"
  - "is"
---

# Cloud Asset Inventory: organization searchable field in SearchAllResources

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Organization is now a searchable field in Cloud Asset Inventory's SearchAllResources API.

## Extended Definition

Organization is now a searchable field in Cloud Asset Inventory's SearchAllResources API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-insights](https://docs.cloud.google.com/asset-inventory/docs/asset-insights)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)

## Supporting Pages

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "name" : string , "assetType" : string , "project" : string , "folders" : [ string ] , "organization" : string , "displayName" : string , "description" : string , "location" : string , "labels" : { string : string , ... } , "networkTags" : [ string ] , "kmsKey" : string , "kmsKeys" : [ string ] , "createTime" : string , "updateTime" : string , "state" : string , "additionalAttributes" : { object } , "parentFullResourceName" : string , "versionedResources" : [ { object ( VersionedResource ) } ] , "attachedResources" : [ { object ( AttachedResource ) } ] , "relationships" : { string : { object ( RelatedResources ) } , ... } , "tagKeys" : [ string ] , "tagValues" : [ string ] , "tagValueIds" : [ string ] , "tags" : [ { object ( Tag ) } ] , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] , "enrichments" : [ { object ( AssetEnrichment ) } ] , "parentAssetType" : string , "sccSecurityMarks" : { string : string , ... } } Fields name string The full resource name of this resource.
- The following fields are returned by default if not specified: name assetType project folders organization displayName description location labels tags effectiveTags networkTags kmsKeys createTime updateTime state additionalAttributes parentFullResourceName parentAssetType Some fields of large size, such as versionedResources , attachedResources , effectiveTags etc., are not returned by default, but you can specify them in the readMask parameter if you want to include them.
- The allowed values are: projects/{PROJECT ID} (e.g., "projects/foo-bar") projects/{PROJECT NUMBER} (e.g., "projects/12345678") folders/{FOLDER NUMBER} (e.g., "folders/1234567") organizations/{ORGANIZATION NUMBER} (e.g., "organizations/123456") Authorization requires the following IAM permission on the specified resource scope : cloudasset.assets.searchAllResources Query parameters Parameters query string Optional.
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource owners" } parentAssetType string The type of this resource's immediate parent, if there is one.

### "Improve your security posture with asset insights \_|\_ Cloud Asset Inventory\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-insights](https://docs.cloud.google.com/asset-inventory/docs/asset-insights)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://recommender.googleapis.com/v1/projects/ my-project /locations/global/insightTypes/google.cloudasset.asset.Insight/insights" Select-Object -Expand Content Example response { "name" : "organizations/000000000000/locations/global/insightTypes/google.cloudasset.asset.Insight/insights/00000000-0000-0000-0000-000000000000" , "description" : "Domain example.com detected in 1 IAM policies" , "content" : { "domain" : "example.com" , "policyCount" : 1 , "policySearchQuery" : "policy: example.com" , "matchedPolicies" :[ { "resource" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "project" : "projects/000000000000" , "matchedBindings" :[ { "role" : "roles/viewer" , "matchedMembers" :[ "user:example@example.com" ] } ] } ] }, "lastRefreshTime" : "2024-01-30T00:00:00Z" , "observationPeriod" : "0s" , "stateInfo" : { "state" : "ACTIVE" }, "category" : "SECURITY" , "targetResources" : [ "//cloudresourcemanager.googleapis.com/organizations/000000000000" ], "insightSubtype" : "EXTERNAL MEMBER" , "etag" : "\"00000000000\"" , "initialRefreshTime" : "2024-01-30T00:00:00Z" } Interpreting insight responses In addition to the standard insight attributes , asset insights provide several specialized subtypes and fields.
- The organization ID is shown next to the organization name. gcloud CLI You can retrieve the ID of a Google Cloud organization with the following command: gcloud organizations describe ORGANIZATION NAME --format = "value(name.segment(1))" BILLING PROJECT ID : The project ID that the default Cloud Asset Inventory service agent is in that has permissions to manage your billing and quota.
- This field is included for all asset insight subtypes. policySearchQuery : A query which can be used with the Cloud Asset Inventory IAM policy search API to retrieve the relevant policies in real time.
- Additional content fields In addition to the standard fields in the response, asset insights provide several specialized fields in the content field. user : The user email address detected in the members of the policy bindings for this insight.

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about OS inventory management . osLongName osShortName Supported metadata fields: block-project-ssh-keys enable-oslogin enable-osconfig serial-port-enable compute. googleapis. com/ InstanceGroup compute. googleapis. com/ InstanceGroupManager compute. googleapis. com/ InstanceSettings Not available in the analysis APIs. compute. googleapis. com/ InstanceTemplate compute. googleapis. com/ InstantSnapshot compute. googleapis. com/ Interconnect compute. googleapis. com/ InterconnectAttachment compute.googleapis.com/License compute. googleapis. com/ MachineImage compute.googleapis.com/Network Searchable attributes: gatewayIPv4 compute. googleapis. com/ NetworkAttachment Searchable attributes: connectionEndpointsIpAddresses connectionEndpointsIpv6Addresses compute. googleapis. com/ NetworkEdgeSecurityService compute. googleapis. com/ NetworkEndpointGroup compute. googleapis. com/ NodeGroup compute. googleapis. com/ NodeTemplate compute. googleapis. com/ PacketMirroring compute.googleapis.com/Project Supported metadata fields: block-project-ssh-keys enable-osconfig enable-oslogin serial-port-enable compute. googleapis. com/ PublicAdvertisedPrefix Not available in the analysis APIs. compute. googleapis. com/ PublicDelegatedPrefix compute. googleapis. com/ RegionBackendService Not available in the analysis and search APIs.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .
- Use compute.googleapis.com/ForwardingRule instead in the search and analysis APIs. compute. googleapis. com/ HealthCheck compute. googleapis. com/ HttpHealthCheck compute. googleapis. com/ HttpsHealthCheck compute.googleapis.com/Image compute. googleapis. com/ Instance Searchable attributes: deletionProtection externalIPs internalIPs machineType networkInterfaceNetworks networkInterfaceNames The following attributes are from the OS Inventory , which is attached on this Compute Engine Instance to provide information on operating system and packages.
- Resource Manager API reference cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Lien Not available in the analysis, export, list, and monitor APIs. cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Searchable attributes: projectId cloudresourcemanager. googleapis. com/ TagBinding Not available in the analysis and search APIs.

