---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.679Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "vCenter credential management"
feature_slug: "vcenter-credential-management"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management"
  - "https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
keywords:
  - "vcenter"
  - "credential"
  - "management"
  - "credentials"
  - "can"
  - "managed"
  - "terraform"
  - "resources"
---

# vCenter credential management

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

VCenter credentials can be managed with Terraform resources.

## Extended Definition

VCenter credentials can be managed with Terraform resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management](https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management)
- [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)

## Supporting Pages

### "Accessing management appliances \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management](https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management)
- Source ID: `site-docs-reference-required-3`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the prompt that appears and contains your access credentials, click Reset Password . gcloud To reset the password to a management appliance using the Google Cloud CLI, do the following: Reset vCenter user credentials by running the gcloud vmware private-clouds vcenter credentials reset command : gcloud vmware private-clouds vcenter credentials reset \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION Reset NSX user credentials by running the gcloud vmware private-clouds nsx credentials reset command : gcloud vmware private-clouds nsx credentials reset \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION Replace the following: PRIVATE CLOUD ID : the private cloud private cloud ID for this request.
- Copy the credentials for vCenter Server or NSX Manager from the prompt that appears. gcloud To get the password to a management appliance using the Google Cloud CLI, do the following: To show vCenter user credentials, run the gcloud vmware private-clouds vcenter credentials describe command : gcloud vmware private-clouds vcenter credentials describe \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION To show NSX user credentials, run the gcloud vmware private-clouds nsx credentials describe command : gcloud vmware private-clouds nsx credentials describe \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION Replace the following: PRIVATE CLOUD ID : the private cloud private cloud ID for this request.
- Reset access credentials If you misplace the credentials to vCenter Server or NSX Manager, you can reset the password to your management appliances for your private cloud using the Google Cloud CLI or Google Cloud VMware Engine by doing the following: Important: If you change the password that VMware Engine generates for either vCenter Server or NSX Manager, those changes won't be reflected in the Google Cloud console.
- Get credentials for management appliances After you create a private cloud, you can generate credentials for management appliances of that private cloud, like vCenter Server and NSX Manager.

### VMware Engine API \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations.privateClouds Methods create POST /v1/{parent=projects/ /locations/ }/privateClouds Creates a new PrivateCloud resource in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /privateClouds/ } Schedules a PrivateCloud resource for deletion. get GET /v1/{name=projects/ /locations/ /privateClouds/ } Retrieves a PrivateCloud resource by its resource name. getDnsForwarding GET /v1/{name=projects/ /locations/ /privateClouds/ /dnsForwarding} Gets details of the DnsForwarding config. getIamPolicy GET /v1/{resource=projects/ /locations/ /privateClouds/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/privateClouds Lists PrivateCloud resources in a given project and location. patch PATCH /v1/{privateCloud.name=projects/ /locations/ /privateClouds/ } Modifies a PrivateCloud resource. privateCloudDeletionNow POST /v1/{name=projects/ /locations/ /privateClouds/ }:privateCloudDeletionNow Accelerates the deletion of a private cloud that is currently in soft deletion A PrivateCloud resource in soft deletion has PrivateCloud.state set to SOFT DELETED and PrivateCloud.expireTime set to the time when deletion can no longer be reversed. resetNsxCredentials POST /v1/{privateCloud=projects/ /locations/ /privateClouds/ }:resetNsxCredentials Resets credentials of the NSX appliance. resetVcenterCredentials POST /v1/{privateCloud=projects/ /locations/ /privateClouds/ }:resetVcenterCredentials Resets credentials of the Vcenter appliance. setIamPolicy POST /v1/{resource=projects/ /locations/ /privateClouds/ }:setIamPolicy Sets the access control policy on the specified resource. showNsxCredentials GET /v1/{privateCloud=projects/ /locations/ /privateClouds/ }:showNsxCredentials Gets details of credentials for NSX appliance. showVcenterCredentials GET /v1/{privateCloud=projects/ /locations/ /privateClouds/ }:showVcenterCredentials Gets details of credentials for Vcenter appliance. testIamPermissions POST /v1/{resource=projects/ /locations/ /privateClouds/ }:testIamPermissions Returns permissions that a caller has on the specified resource. undelete POST /v1/{name=projects/ /locations/ /privateClouds/ }:undelete Restores a private cloud that was previously scheduled for deletion by DeletePrivateCloud . updateDnsForwarding PATCH /v1/{dnsForwarding.name=projects/ /locations/ /privateClouds/ /dnsForwarding} Updates the parameters of the DnsForwarding config, like associated domains.
- REST Resource: v1.projects.locations.privateClouds.clusters Methods create POST /v1/{parent=projects/ /locations/ /privateClouds/ }/clusters Creates a new cluster in a given private cloud. delete DELETE /v1/{name=projects/ /locations/ /privateClouds/ /clusters/ } Deletes a Cluster resource. get GET /v1/{name=projects/ /locations/ /privateClouds/ /clusters/ } Retrieves a Cluster resource by its resource name. getIamPolicy GET /v1/{resource=projects/ /locations/ /privateClouds/ /clusters/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ /privateClouds/ }/clusters Lists Cluster resources in a given private cloud. mountDatastore POST /v1/{name=projects/ /locations/ /privateClouds/ /clusters/ }:mountDatastore Mounts a Datastore on a cluster resource patch PATCH /v1/{cluster.name=projects/ /locations/ /privateClouds/ /clusters/ } Modifies a Cluster resource. setIamPolicy POST /v1/{resource=projects/ /locations/ /privateClouds/ /clusters/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /privateClouds/ /clusters/ }:testIamPermissions Returns permissions that a caller has on the specified resource. unmountDatastore POST /v1/{name=projects/ /locations/ /privateClouds/ /clusters/ }:unmountDatastore Unmounts a Datastore on a cluster resource REST Resource: v1.projects.locations.privateClouds.clusters.nodes Methods get GET /v1/{name=projects/ /locations/ /privateClouds/ /clusters/ /nodes/ } Gets details of a single node. list GET /v1/{parent=projects/ /locations/ /privateClouds/ /clusters/ }/nodes Lists nodes in a given cluster.
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.announcements REST Resource: v1.projects.locations.datastores REST Resource: v1.projects.locations.dnsBindPermission REST Resource: v1.projects.locations.networkPeerings REST Resource: v1.projects.locations.networkPeerings.peeringRoutes REST Resource: v1.projects.locations.networkPolicies REST Resource: v1.projects.locations.networkPolicies.externalAccessRules REST Resource: v1.projects.locations.nodeTypes REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.privateClouds REST Resource: v1.projects.locations.privateClouds.clusters REST Resource: v1.projects.locations.privateClouds.clusters.nodes REST Resource: v1.projects.locations.privateClouds.externalAddresses REST Resource: v1.projects.locations.privateClouds.hcxActivationKeys REST Resource: v1.projects.locations.privateClouds.loggingServers REST Resource: v1.projects.locations.privateClouds.managementDnsZoneBindings REST Resource: v1.projects.locations.privateClouds.subnets REST Resource: v1.projects.locations.privateClouds.upgrades REST Resource: v1.projects.locations.privateConnections REST Resource: v1.projects.locations.privateConnections.peeringRoutes REST Resource: v1.projects.locations.vmwareEngineNetworks Service: vmwareengine.googleapis.com Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1.projects.locations.privateClouds.managementDnsZoneBindings Methods create POST /v1/{parent=projects/ /locations/ /privateClouds/ }/managementDnsZoneBindings Creates a new ManagementDnsZoneBinding resource in a private cloud. delete DELETE /v1/{name=projects/ /locations/ /privateClouds/ /managementDnsZoneBindings/ } Deletes a ManagementDnsZoneBinding resource. get GET /v1/{name=projects/ /locations/ /privateClouds/ /managementDnsZoneBindings/ } Retrieves a 'ManagementDnsZoneBinding' resource by its resource name. list GET /v1/{parent=projects/ /locations/ /privateClouds/ }/managementDnsZoneBindings Lists Consumer VPCs bound to Management DNS Zone of a given private cloud. patch PATCH /v1/{managementDnsZoneBinding.name=projects/ /locations/ /privateClouds/ /managementDnsZoneBindings/ } Updates a ManagementDnsZoneBinding resource. repair POST /v1/{name=projects/ /locations/ /privateClouds/ /managementDnsZoneBindings/ }:repair Retries to create a ManagementDnsZoneBinding resource that is in failed state.

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager. reset nsx credentials reset nsx credentials ( request : typing .
- Private clouds of type STANDARD and TIME LIMITED are zonal resources, STRETCHED private clouds are regional. reset vcenter credentials reset vcenter credentials ( request : typing .
- ResetVcenterCredentialsRequest ( private cloud="private cloud value", ) Make the request operation = client. reset vcenter credentials (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.vmwareengine v1.types.ResetVcenterCredentialsRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 async def sample reset vcenter credentials(): Create a client client = vmwareengine v1 .

