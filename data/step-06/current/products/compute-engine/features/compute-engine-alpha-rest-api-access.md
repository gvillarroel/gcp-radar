---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.136Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Compute Engine alpha REST API access"
feature_slug: "compute-engine-alpha-rest-api-access"
latest_feature_date: "2025-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members"
  - "https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources"
  - "https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest"
keywords:
  - "compute"
  - "engine"
  - "alpha"
  - "rest"
  - "access"
  - "projects"
  - "can"
  - "send"
---

# Compute Engine alpha REST API access

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Projects can send HTTP requests to Compute Engine alpha URIs to test experimental alpha-stage features through REST.

## Extended Definition

Projects can send HTTP requests to Compute Engine alpha URIs to test experimental alpha-stage features through REST.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members)
- [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources)
- [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest)

## Supporting Pages

### "Manage access to projects, folders, and organizations \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GetIamPolicyRequest () request . resource = f "projects/ { project id } " policy = client . get iam policy ( request ) print ( f "Policy retrieved: { policy } " ) return policy REST To see who has access to your project, folder, or organization, get the allow policy for the resource.
- Home Documentation Security IAM Guides Send feedback Manage access to projects, folders, and organizations Stay organized with collections Save and categorize content based on your preferences.
- You can manage access to projects, folders, and organizations with the Google Cloud console, the Google Cloud CLI, the REST API, or the Resource Manager client libraries .
- Required roles To get the permissions that you need to manage access to a project, folder, or organization, ask your administrator to grant you the following IAM roles on the resource that you want to manage access for (project, folder, or organization): To manage access to a project: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) To manage access to a folder: Folder Admin ( roles/resourcemanager.folderAdmin ) To manage access to projects, folders, and organizations: Organization Admin ( roles/resourcemanager.organizationAdmin ) To manage access to almost all Google Cloud resources: Security Admin ( roles/iam.securityAdmin ) These predefined roles contain the permissions required to manage access to a project, folder, or organization.

### Managing access to Compute Engine resources \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources)
- Source ID: `site-docs-reference-required-6`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /testIamPermissions { "permissions": [ "compute.instances.start", "compute.instances.stop", "compute.instances.delete" ] } The request returns the permissions that are enabled for the caller. { "permissions": [ "compute.instances.start", "compute.instances.stop" ] } Modifying resource access for multiple members If you want to modify access to Compute Engine resources for multiple members simultaneously, review recommendations on how to modify an IAM policy programmatically .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage access to Compute Engine resources: To grant or revoke access to resources: compute.projects.get on the project compute.
- Home Documentation Compute Compute Engine Guides Send feedback Managing access to Compute Engine resources Stay organized with collections Save and categorize content based on your preferences.
- To run code or samples from a local development environment, you can authenticate to Compute Engine by selecting one of the following options: Select the tab for how you plan to use the samples on this page: Console When you use the Google Cloud console to access Google Cloud services and APIs, you don't need to set up authentication. gcloud Install the Google Cloud CLI.

### Network Connectivity API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest)
- Source ID: `site-docs-reference-2`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1alpha1.projects.locations.global.hubs Methods create POST /v1alpha1/{parent=projects/ /locations/global}/hubs Creates a new Network Connectivity Center hub in the specified project. delete DELETE /v1alpha1/{name=projects/ /locations/global/hubs/ } Deletes a Network Connectivity Center hub. get GET /v1alpha1/{name=projects/ /locations/global/hubs/ } Gets details about a Network Connectivity Center hub. getIamPolicy GET /v1alpha1/{resource=projects/ /locations/global/hubs/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1alpha1/{parent=projects/ /locations/global}/hubs Lists the Network Connectivity Center hubs associated with a given project. patch PATCH /v1alpha1/{hub.name=projects/ /locations/global/hubs/ } Updates the description and/or labels of a Network Connectivity Center hub. setIamPolicy POST /v1alpha1/{resource=projects/ /locations/global/hubs/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1alpha1/{resource=projects/ /locations/global/hubs/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1alpha1.projects.locations.spokes Methods create POST /v1alpha1/{parent=projects/ /locations/ }/spokes Creates a Network Connectivity Center spoke. delete DELETE /v1alpha1/{name=projects/ /locations/ /spokes/ } Deletes a Network Connectivity Center spoke. get GET /v1alpha1/{name=projects/ /locations/ /spokes/ } Gets details about a Network Connectivity Center spoke. getIamPolicy GET /v1alpha1/{resource=projects/ /locations/ /spokes/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1alpha1/{parent=projects/ /locations/ }/spokes Lists the Network Connectivity Center spokes in a specified project and location. patch PATCH /v1alpha1/{spoke.name=projects/ /locations/ /spokes/ } Updates the parameters of a Network Connectivity Center spoke. setIamPolicy POST /v1alpha1/{resource=projects/ /locations/ /spokes/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1alpha1/{resource=projects/ /locations/ /spokes/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1beta.projects.locations REST Resource: v1beta.projects.locations.global.hubs REST Resource: v1beta.projects.locations.global.hubs.groups REST Resource: v1beta.projects.locations.global.hubs.routeTables REST Resource: v1beta.projects.locations.global.hubs.routeTables.routes REST Resource: v1beta.projects.locations.global.policyBasedRoutes REST Resource: v1beta.projects.locations.multicloudDataTransferConfigs REST Resource: v1beta.projects.locations.multicloudDataTransferConfigs.destinations REST Resource: v1beta.projects.locations.multicloudDataTransferSupportedServices REST Resource: v1beta.projects.locations.operations REST Resource: v1beta.projects.locations.regionalEndpoints REST Resource: v1beta.projects.locations.remoteTransportProfiles REST Resource: v1beta.projects.locations.spokes REST Resource: v1beta.projects.locations.spokes.gatewayAdvertisedRoutes REST Resource: v1beta.projects.locations.transports REST Resource: v1alpha1.projects.locations REST Resource: v1alpha1.projects.locations.global.hubs REST Resource: v1alpha1.projects.locations.internalRanges REST Resource: v1alpha1.projects.locations.operations REST Resource: v1alpha1.projects.locations.spokes REST Resource: v1.projects.locations REST Resource: v1.projects.locations.global.hubs REST Resource: v1.projects.locations.global.hubs.groups REST Resource: v1.projects.locations.global.hubs.routeTables REST Resource: v1.projects.locations.global.hubs.routeTables.routes REST Resource: v1.projects.locations.global.policyBasedRoutes REST Resource: v1.projects.locations.internalRanges REST Resource: v1.projects.locations.multicloudDataTransferConfigs REST Resource: v1.projects.locations.multicloudDataTransferConfigs.destinations REST Resource: v1.projects.locations.multicloudDataTransferSupportedServices REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.regionalEndpoints REST Resource: v1.projects.locations.remoteTransportProfiles REST Resource: v1.projects.locations.serviceClasses REST Resource: v1.projects.locations.serviceConnectionMaps REST Resource: v1.projects.locations.serviceConnectionPolicies REST Resource: v1.projects.locations.serviceConnectionTokens REST Resource: v1.projects.locations.spokes REST Resource: v1.projects.locations.transports Service: networkconnectivity.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1beta.projects.locations.global.hubs Methods acceptSpoke POST /v1beta/{name=projects/ /locations/global/hubs/ }:acceptSpoke Accepts a proposal to attach a Network Connectivity Center spoke to a hub. acceptSpokeUpdate POST /v1beta/{name=projects/ /locations/global/hubs/ }:acceptSpokeUpdate Accepts a proposal to update a Network Connectivity Center spoke in a hub. create POST /v1beta/{parent=projects/ /locations/global}/hubs Creates a new Network Connectivity Center hub in the specified project. delete DELETE /v1beta/{name=projects/ /locations/global/hubs/ } Deletes a Network Connectivity Center hub. get GET /v1beta/{name=projects/ /locations/global/hubs/ } Gets details about a Network Connectivity Center hub. getIamPolicy GET /v1beta/{resource=projects/ /locations/global/hubs/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1beta/{parent=projects/ /locations/global}/hubs Lists the Network Connectivity Center hubs associated with a given project. listSpokes GET /v1beta/{name=projects/ /locations/global/hubs/ }:listSpokes Lists the Network Connectivity Center spokes associated with a specified hub and location. patch PATCH /v1beta/{hub.name=projects/ /locations/global/hubs/ } Updates the description and/or labels of a Network Connectivity Center hub. queryStatus GET /v1beta/{name=projects/ /locations/global/hubs/ }:queryStatus Query the Private Service Connect propagation status of a Network Connectivity Center hub. rejectSpoke POST /v1beta/{name=projects/ /locations/global/hubs/ }:rejectSpoke Rejects a Network Connectivity Center spoke from being attached to a hub. rejectSpokeUpdate POST /v1beta/{name=projects/ /locations/global/hubs/ }:rejectSpokeUpdate Rejects a proposal to update a Network Connectivity Center spoke in a hub. setIamPolicy POST /v1beta/{resource=projects/ /locations/global/hubs/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta/{resource=projects/ /locations/global/hubs/ }:testIamPermissions Returns permissions that a caller has on the specified resource.

