---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:39.113Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory: run.googleapis.com/Service searchable via SearchAllResources and SearchAllIamPolicies"
feature_slug: "cloud-asset-inventory-run-googleapis-com-service-searchable-via-searchallresources-and-searchalliampolicies"
latest_feature_date: "2021-03-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient"
keywords:
  - "asset"
  - "inventory"
  - "run"
  - "googleapis"
  - "com"
  - "searchable"
  - "via"
  - "searchallresources"
---

# Cloud Asset Inventory: run.googleapis.com/Service searchable via SearchAllResources and SearchAllIamPolicies

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Run Service resources are now available through SearchAllResources and SearchAllIamPolicies APIs.

## Extended Definition

Cloud Run Service resources are now available through SearchAllResources and SearchAllIamPolicies APIs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient)

## Supporting Pages

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource owners" } parentAssetType string The type of this resource's immediate parent, if there is one.
- Example: osconfig.googleapis.com/Inventory You can find the supported attached asset types of each resource in this table: https://cloud.google.com/asset-inventory/docs/supported-asset-types versionedResources[] object ( VersionedResource ) Versioned resource representations of this attached resource.
- HTTP request GET https://cloudasset.googleapis.com/v1/{scope= / }:searchAllResources The URL uses gRPC Transcoding syntax.
- You can find the resource definition for each supported resource type in this table: https://cloud.google.com/asset-inventory/docs/supported-asset-types assetExceptions[] object ( AssetException ) The exceptions of a resource.

### "Class AssetServiceAsyncClient (4.2.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- The caller must be granted the cloudasset.assets.searchAllResources https://cloud.google.com/asset-inventory/docs/access-control#required permissions permission on the desired scope.
- This RPC supports custom constraints and the following canned constraints: constraints/ainotebooks.accessMode constraints/ainotebooks.disableFileDownloads constraints/ainotebooks.disableRootAccess constraints/ainotebooks.disableTerminal constraints/ainotebooks.environmentOptions constraints/ainotebooks.requireAutoUpgradeSchedule constraints/ainotebooks.restrictVpcNetworks constraints/compute.disableGuestAttributesAccess constraints/compute.disableInstanceDataAccessApis constraints/compute.disableNestedVirtualization constraints/compute.disableSerialPortAccess constraints/compute.disableSerialPortLogging constraints/compute.disableVpcExternalIpv6 constraints/compute.requireOsLogin constraints/compute.requireShieldedVm constraints/compute.restrictLoadBalancerCreationForTypes constraints/compute.restrictProtocolForwardingCreationForTypes constraints/compute.restrictXpnProjectLienRemoval constraints/compute.setNewProjectDefaultToZonalDNSOnly constraints/compute.skipDefaultNetworkCreation constraints/compute.trustedImageProjects constraints/compute.vmCanIpForward constraints/compute.vmExternalIpAccess constraints/gcp.detailedAuditLoggingMode constraints/gcp.resourceLocations constraints/iam.allowedPolicyMemberDomains constraints/iam.automaticIamGrantsForDefaultServiceAccounts constraints/iam.disableServiceAccountCreation constraints/iam.disableServiceAccountKeyCreation constraints/iam.disableServiceAccountKeyUpload constraints/iam.restrictCrossProjectServiceAccountLienRemoval constraints/iam.serviceAccountKeyExpiryHours constraints/resourcemanager.accessBoundaries constraints/resourcemanager.allowedExportDestinations constraints/sql.restrictAuthorizedNetworks constraints/sql.restrictNoncompliantDiagnosticDataAccess constraints/sql.restrictNoncompliantResourceCreation constraints/sql.restrictPublicIp constraints/storage.publicAccessPrevention constraints/storage.restrictAuthTypes constraints/storage.uniformBucketLevelAccess This RPC only returns either resources of types supported by search APIs <https://cloud.google.com/asset-inventory/docs/supported-asset-types> or IAM policies.
- Note that if callers don't have iam.roles.get access to a role's included permissions, policy bindings that specify this role will be dropped from the search results. - resource:organizations/123456 to find IAM policy bindings that are set on "organizations/123456". - resource=//cloudresourcemanager.googleapis.com/projects/myproject to find IAM policy bindings that are set on the project named "myproject". - Important to find IAM policy bindings that contain "Important" as a word in any of the searchable fields (except for the included permissions). - resource:(instance1 OR instance2) policy:amy to find IAM policy bindings that are set on resources "instance1" or "instance2" and also specify user "amy". - roles:roles/compute.admin to find IAM policy bindings that specify the Compute Admin role. - memberTypes:user to find IAM policy bindings that contain the principal type "user".
- AnalyzeIamPolicyLongrunningRequest ( analysis query=analysis query, output config=output config, ) Make the request operation = client. analyze iam policy longrunning (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.asset v1.types.AnalyzeIamPolicyLongrunningRequest , dict]] The request object.

### "Class AssetServiceClient (4.2.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient)
- Source ID: `site-python-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- The caller must be granted the cloudasset.assets.searchAllResources https://cloud.google.com/asset-inventory/docs/access-control#required permissions permission on the desired scope.
- This RPC supports custom constraints and the following canned constraints: constraints/ainotebooks.accessMode constraints/ainotebooks.disableFileDownloads constraints/ainotebooks.disableRootAccess constraints/ainotebooks.disableTerminal constraints/ainotebooks.environmentOptions constraints/ainotebooks.requireAutoUpgradeSchedule constraints/ainotebooks.restrictVpcNetworks constraints/compute.disableGuestAttributesAccess constraints/compute.disableInstanceDataAccessApis constraints/compute.disableNestedVirtualization constraints/compute.disableSerialPortAccess constraints/compute.disableSerialPortLogging constraints/compute.disableVpcExternalIpv6 constraints/compute.requireOsLogin constraints/compute.requireShieldedVm constraints/compute.restrictLoadBalancerCreationForTypes constraints/compute.restrictProtocolForwardingCreationForTypes constraints/compute.restrictXpnProjectLienRemoval constraints/compute.setNewProjectDefaultToZonalDNSOnly constraints/compute.skipDefaultNetworkCreation constraints/compute.trustedImageProjects constraints/compute.vmCanIpForward constraints/compute.vmExternalIpAccess constraints/gcp.detailedAuditLoggingMode constraints/gcp.resourceLocations constraints/iam.allowedPolicyMemberDomains constraints/iam.automaticIamGrantsForDefaultServiceAccounts constraints/iam.disableServiceAccountCreation constraints/iam.disableServiceAccountKeyCreation constraints/iam.disableServiceAccountKeyUpload constraints/iam.restrictCrossProjectServiceAccountLienRemoval constraints/iam.serviceAccountKeyExpiryHours constraints/resourcemanager.accessBoundaries constraints/resourcemanager.allowedExportDestinations constraints/sql.restrictAuthorizedNetworks constraints/sql.restrictNoncompliantDiagnosticDataAccess constraints/sql.restrictNoncompliantResourceCreation constraints/sql.restrictPublicIp constraints/storage.publicAccessPrevention constraints/storage.restrictAuthTypes constraints/storage.uniformBucketLevelAccess This RPC only returns either resources of types supported by search APIs <https://cloud.google.com/asset-inventory/docs/supported-asset-types> or IAM policies.
- Note that if callers don't have iam.roles.get access to a role's included permissions, policy bindings that specify this role will be dropped from the search results. - resource:organizations/123456 to find IAM policy bindings that are set on "organizations/123456". - resource=//cloudresourcemanager.googleapis.com/projects/myproject to find IAM policy bindings that are set on the project named "myproject". - Important to find IAM policy bindings that contain "Important" as a word in any of the searchable fields (except for the included permissions). - resource:(instance1 OR instance2) policy:amy to find IAM policy bindings that are set on resources "instance1" or "instance2" and also specify user "amy". - roles:roles/compute.admin to find IAM policy bindings that specify the Compute Admin role. - memberTypes:user to find IAM policy bindings that contain the principal type "user".
- AnalyzeIamPolicyLongrunningRequest ( analysis query=analysis query, output config=output config, ) Make the request operation = client. analyze iam policy longrunning (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.asset v1.types.AnalyzeIamPolicyLongrunningRequest , dict] The request object.

