---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.797Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset API v1 general availability"
feature_slug: "cloud-asset-api-v1-general-availability"
latest_feature_date: "2019-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
keywords:
  - "launches"
  - "version"
  - "generally"
  - "availability"
  - "available"
---

# Cloud Asset API v1 general availability

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory launches the new V1 version of the Cloud Asset API as generally available.

## Extended Definition

Cloud Asset Inventory launches the new V1 version of the Cloud Asset API as generally available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)

## Supporting Pages

### Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset)
- Source ID: `site-api-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation Resource JSON representation Policy JSON representation ListPolicy JSON representation AllValues BooleanPolicy JSON representation RestoreDefault AccessPolicy JSON representation AccessLevel JSON representation BasicLevel JSON representation Condition JSON representation DevicePolicy JSON representation DeviceEncryptionStatus OsConstraint JSON representation OsType DeviceManagementLevel VpcNetworkSource JSON representation VpcSubNetwork JSON representation ConditionCombiningFunction CustomLevel JSON representation ServicePerimeter JSON representation PerimeterType ServicePerimeterConfig JSON representation VpcAccessibleServices JSON representation IngressPolicy JSON representation IngressFrom JSON representation IngressSource JSON representation IdentityType IngressTo JSON representation ApiOperation JSON representation MethodSelector JSON representation EgressPolicy JSON representation EgressFrom JSON representation EgressSource JSON representation SourceRestriction EgressTo JSON representation Inventory JSON representation OsInfo JSON representation Item JSON representation OriginType Type SoftwarePackage JSON representation VersionedPackage JSON representation ZypperPatch JSON representation WindowsUpdatePackage JSON representation WindowsUpdateCategory JSON representation WindowsQuickFixEngineeringPackage JSON representation WindowsApplication JSON representation Date JSON representation RelatedAssets JSON representation RelationshipAttributes JSON representation RelatedAsset JSON representation An asset in Google Cloud.
- JSON representation { // Union field details can be only one of the following: "yumPackage" : { object ( VersionedPackage ) } , "aptPackage" : { object ( VersionedPackage ) } , "zypperPackage" : { object ( VersionedPackage ) } , "googetPackage" : { object ( VersionedPackage ) } , "zypperPatch" : { object ( ZypperPatch ) } , "wuaPackage" : { object ( WindowsUpdatePackage ) } , "qfePackage" : { object ( WindowsQuickFixEngineeringPackage ) } , "cosPackage" : { object ( VersionedPackage ) } , "windowsApplication" : { object ( WindowsApplication ) } // End of list of possible types for union field details . } Fields Union field details .
- JSON representation { "id" : string , "originType" : enum ( OriginType ) , "createTime" : string , "updateTime" : string , "type" : enum ( Type ) , // Union field details can be only one of the following: "installedPackage" : { object ( SoftwarePackage ) } , "availablePackage" : { object ( SoftwarePackage ) } // End of list of possible types for union field details . } Fields id string Identifier for this item, unique across items for this VM. originType enum ( OriginType ) The origin of this inventory item. createTime string ( Timestamp format) When this inventory item was first detected.
- For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key JSON representation { "displayName" : string , "displayVersion" : string , "publisher" : string , "installDate" : { object ( Date ) } , "helpLink" : string } Fields displayName string The name of the application or product. displayVersion string The version of the product or application in string format. publisher string The name of the manufacturer for the product or application. installDate object ( Date ) The last time this product received service.

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "assetType" : string , "project" : string , "folders" : [ string ] , "organization" : string , "displayName" : string , "description" : string , "location" : string , "labels" : { string : string , ... } , "networkTags" : [ string ] , "kmsKey" : string , "kmsKeys" : [ string ] , "createTime" : string , "updateTime" : string , "state" : string , "additionalAttributes" : { object } , "parentFullResourceName" : string , "versionedResources" : [ { object ( VersionedResource ) } ] , "attachedResources" : [ { object ( AttachedResource ) } ] , "relationships" : { string : { object ( RelatedResources ) } , ... } , "tagKeys" : [ string ] , "tagValues" : [ string ] , "tagValueIds" : [ string ] , "tags" : [ { object ( Tag ) } ] , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] , "enrichments" : [ { object ( AssetEnrichment ) } ] , "parentAssetType" : string , "sccSecurityMarks" : { string : string , ... } } Fields name string The full resource name of this resource.
- The following fields are returned by default if not specified: name assetType project folders organization displayName description location labels tags effectiveTags networkTags kmsKeys createTime updateTime state additionalAttributes parentFullResourceName parentAssetType Some fields of large size, such as versionedResources , attachedResources , effectiveTags etc., are not returned by default, but you can specify them in the readMask parameter if you want to include them.
- HTTP request Path parameters Query parameters Request body Response body JSON representation Authorization scopes ResourceSearchResult JSON representation VersionedResource JSON representation AttachedResource JSON representation RelatedResources JSON representation RelatedResource JSON representation AssetEnrichment JSON representation ResourceOwners JSON representation Try it!
- Example: If the resource is an instance provided by Compute Engine v1 API as defined in https://cloud.google.com/compute/docs/reference/rest/v1/instances , version will be "v1". resource object ( Struct format) JSON representation of the resource as defined by the corresponding service providing this resource.

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Network Services API API reference networkservices. googleapis. com/ AuthzExtension Not available in the analysis APIs. networkservices. googleapis. com/ EdgeCacheKeyset Not available in the analysis APIs. networkservices. googleapis. com/ EdgeCacheOrigin Not available in the analysis APIs. networkservices. googleapis. com/ EdgeCacheService Not available in the analysis APIs. networkservices. googleapis. com/ EndpointPolicy networkservices. googleapis. com/ Gateway networkservices. googleapis. com/ GrpcRoute networkservices. googleapis. com/ HttpRoute networkservices. googleapis. com/ LbRouteExtension Not available in the analysis APIs. networkservices. googleapis. com/ LbTrafficExtension Not available in the analysis APIs. networkservices. googleapis. com/ Mesh networkservices. googleapis. com/ ServiceBinding networkservices. googleapis. com/ ServiceLbPolicy Not available in the analysis APIs. networkservices. googleapis. com/ TcpRoute networkservices. googleapis. com/ TlsRoute networkservices. googleapis. com/ WasmPlugin Not available in the analysis APIs. networkservices. googleapis. com/ WasmPluginVersion Not available in the analysis APIs.
- API reference healthcare. googleapis. com/ ConsentStore healthcare. googleapis. com/ Dataset healthcare. googleapis. com/ DicomStore healthcare. googleapis. com/ FhirStore healthcare. googleapis. com/ Hl7V2Store Cloud Intrusion Detection System API reference ids.googleapis.com/Endpoint Cloud Key Management Service API reference cloudkms. googleapis. com/ AutokeyConfig cloudkms. googleapis. com/ CryptoKey cloudkms. googleapis. com/ CryptoKeyVersion cloudkms. googleapis. com/ EkmConfig cloudkms. googleapis. com/ EkmConnection cloudkms. googleapis. com/ ImportJob cloudkms. googleapis. com/ KeyHandle cloudkms. googleapis. com/ KeyRing Cloud Load Balancing API reference networksecurity. googleapis. com/ AuthzPolicy Not available in the analysis APIs.
- Application Integration API reference integrations. googleapis. com/ AuthConfig Not available in the analysis APIs. integrations. googleapis. com/ Certificate Not available in the analysis APIs. integrations. googleapis. com/ Execution Not available in the analysis APIs. integrations. googleapis. com/ Integration Not available in the analysis APIs. integrations. googleapis. com/ IntegrationVersion Not available in the analysis APIs. integrations. googleapis. com/ SfdcChannel Not available in the analysis APIs. integrations. googleapis. com/ SfdcInstance Not available in the analysis APIs. integrations. googleapis. com/ Suspension Not available in the analysis APIs.
- The following IAP resource types: iap.googleapis.com/Tunnel Not available in the analysis and search APIs. iap. googleapis. com/ TunnelInstance Not available in the analysis and search APIs. iap.googleapis.com/TunnelZone Not available in the analysis and search APIs. iap.googleapis.com/Web Not available in the analysis and search APIs. iap.googleapis.com/WebService Not available in the analysis and search APIs. iap. googleapis. com/ WebServiceVersion Not available in the analysis and search APIs. iap.googleapis.com/WebType Not available in the analysis and search APIs.

