---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.505Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "roles/compute.networkAdmin"
feature_slug: "roles-compute-networkadmin"
latest_feature_date: "2016-05-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
keywords:
  - "roles"
  - "compute"
  - "networkadmin"
  - "the"
  - "network"
  - "admin"
  - "iam"
  - "role"
---

# roles/compute.networkAdmin

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

The Compute Network Admin IAM role is now generally available for VPC.

## Extended Definition

The Compute Network Admin IAM role is now generally available for VPC.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)

## Supporting Pages

### "Access the service from another VPC network \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the API Make sure that you have the following role or roles on the project: Compute Engine > Compute Network Admin, Compute Engine > Compute Instance Admin Check for the roles In the Google Cloud console, go to the IAM page.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Grant the roles In the Google Cloud console, go to the IAM page.
- Create a forwarding rule to connect the endpoint to the service producer's service attachment. gcloud compute forwarding-rules create ep-1 \ --region= REGION \ --network=consumer-network \ --address=ep-ip-1 \ --target-service-attachment=projects/ PRODUCER PROJECT /regions/ REGION /serviceAttachments/published-service Replace the following: PRODUCER PROJECT : the project ID of the service producer project.

### "Roles and permissions \_|\_ Network Intelligence Center - Connectivity Tests\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control)
- Source ID: `site-iam-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about project roles and Google Cloud resources, see the following documentation: Resource Manager documentation Identity and Access Management documentation Compute Engine documentation describing access control Predefined roles Connectivity Tests has the following predefined roles: networkmanagement.admin has permission to perform all operations on a test resource. networkmanagement.viewer has permission to list or get a specific test resource.
- Lowest-level resources where you can grant this role: Project networkmanagement. connectivitytests. get networkmanagement. connectivitytests. getIamPolicy networkmanagement. connectivitytests. list networkmanagement.locations. networkmanagement. locations. get networkmanagement. locations. list networkmanagement. monitoringpoints. get networkmanagement. monitoringpoints. list networkmanagement. networkpaths. networkmanagement. networkpaths. get networkmanagement. networkpaths. list networkmanagement. operations. get networkmanagement. operations. list networkmanagement. providers. get networkmanagement. providers. list networkmanagement. topologygraphs. read networkmanagement. vpcflowlogsconfigs. get networkmanagement. vpcflowlogsconfigs. list networkmanagement.webpaths. networkmanagement.webpaths.get networkmanagement. webpaths. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Cloud Network Insights Admin Beta ( roles/ networkmanagement.CloudNetworkInsightsAdmin ) Full access to Cloud Network Insights resources. networkmanagement.locations. networkmanagement. locations. get networkmanagement. locations. list networkmanagement. monitoringpoints. networkmanagement. monitoringpoints. downloadConfig networkmanagement. monitoringpoints. get networkmanagement. monitoringpoints. list networkmanagement. networkpaths. networkmanagement. networkpaths. get networkmanagement. networkpaths. list networkmanagement. operations. get networkmanagement. operations. list networkmanagement.providers. networkmanagement. providers. create networkmanagement. providers. delete networkmanagement. providers. generateProviderAccessToken networkmanagement. providers. get networkmanagement. providers. list networkmanagement.webpaths. networkmanagement.webpaths.get networkmanagement. webpaths. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Cloud Network Insights Editor Beta ( roles/ networkmanagement.CloudNetworkInsightsEditor ) Editor access to Cloud Network Insights resources. networkmanagement.locations. networkmanagement. locations. get networkmanagement. locations. list networkmanagement. monitoringpoints. networkmanagement. monitoringpoints. downloadConfig networkmanagement. monitoringpoints. get networkmanagement. monitoringpoints. list networkmanagement. networkpaths. networkmanagement. networkpaths. get networkmanagement. networkpaths. list networkmanagement. operations. get networkmanagement. operations. list networkmanagement.providers. networkmanagement. providers. create networkmanagement. providers. delete networkmanagement. providers. generateProviderAccessToken networkmanagement. providers. get networkmanagement. providers. list networkmanagement.webpaths. networkmanagement.webpaths.get networkmanagement. webpaths. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Cloud Network Insights Viewer Beta ( roles/ networkmanagement.CloudNetworkInsightsViewer ) Read-only access to Cloud Network Insights resources. networkmanagement. monitoringpoints. get networkmanagement. monitoringpoints. list networkmanagement. networkpaths. networkmanagement. networkpaths. get networkmanagement. networkpaths. list networkmanagement. providers. generateProviderAccessToken networkmanagement. providers. get networkmanagement. providers. list networkmanagement.webpaths. networkmanagement.webpaths.get networkmanagement. webpaths. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Service agent roles Service agent roles should only be granted to service agents .
- Warning: Do not grant service agent roles to any principals except service agents . cloudsql.instances.get cloudsql.instances.list compute.addresses.get compute.addresses.list compute.backendServices.get compute.backendServices.list compute. externalVpnGateways. get compute. externalVpnGateways. list compute.firewalls.get compute.firewalls.list compute.forwardingRules.get compute.forwardingRules.list compute.globalAddresses.get compute.globalAddresses.list compute. globalForwardingRules. get compute. globalForwardingRules. list compute. globalNetworkEndpointGroups. get compute. globalNetworkEndpointGroups. list compute.healthChecks.get compute.healthChecks.list compute.httpHealthChecks.get compute.httpHealthChecks.list compute.httpsHealthChecks.get compute.httpsHealthChecks.list compute.instanceGroups.get compute.instanceGroups.list compute.instances.get compute.instances.list compute. networkEndpointGroups. get compute. networkEndpointGroups. list compute.networks.get compute. networks. getEffectiveFirewalls compute.networks.list compute. networks. listPeeringRoutes compute.packetMirrorings.get compute.packetMirrorings.list compute. regionBackendServices. get compute. regionBackendServices. list compute.regionHealthChecks.get compute. regionHealthChecks. list compute. regionNetworkEndpointGroups. get compute. regionNetworkEndpointGroups. list compute. regionTargetHttpProxies. get compute. regionTargetHttpProxies. list compute. regionTargetHttpsProxies. get compute. regionTargetHttpsProxies. list compute. regionTargetTcpProxies. get compute. regionTargetTcpProxies. list compute.regionUrlMaps.get compute.regionUrlMaps.list compute.routers.get compute.routers.list compute.routes.get compute.routes.list compute.subnetworks.get compute.subnetworks.list compute.targetGrpcProxies.get compute.targetGrpcProxies.list compute.targetHttpProxies.get compute.targetHttpProxies.list compute.targetHttpsProxies.get compute. targetHttpsProxies. list compute.targetInstances.get compute.targetInstances.list compute.targetPools.get compute.targetPools.list compute.targetSslProxies.get compute.targetSslProxies.list compute.targetTcpProxies.get compute.targetTcpProxies.list compute.targetVpnGateways.get compute.targetVpnGateways.list compute.urlMaps.get compute.urlMaps.list compute.vpnGateways.get compute.vpnGateways.list compute.vpnTunnels.get compute.vpnTunnels.list container.clusters.get container.clusters.list container.nodes.get container.nodes.list Custom roles You can create custom roles by selecting a list of permissions from the permissions table for Connectivity Tests.
- Because Connectivity Tests must have read access to the Google Cloud resource configurations in your Virtual Private Cloud (VPC) network to run a test, you must grant at least the Compute Network Viewer role ( roles/compute.networkViewer ) to users or service accounts running a test against those resources.

### "Access Google APIs through endpoints \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis)
- Source ID: `site-docs-root-2`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- Task Roles Create an endpoint All of the following roles: Compute Network Admin ( roles/compute.networkAdmin ), Service Directory Editor ( roles/servicedirectory.editor ), and DNS Administrator ( roles/dns.admin ) Configure Private Google Access (optional) Compute Network Admin ( roles/compute.networkAdmin ) Before you begin Read About connecting to Google APIs by using endpoints for more information, including DNS configuration and limitations.
- Permissions for the gcloud CLI and the API compute.globalForwardingRules.pscCreate compute.globalForwardingRules.create compute.networks.use compute.globalAddresses.use servicedirectory.namespaces.create servicedirectory.namespaces.associatePrivateZone dns.managedZones.create Permissions for the Google Cloud console compute.forwardingRules.list compute.globalForwardingRules.list compute.networks.list compute.backendBuckets.list compute.backendServices.list compute.instanceGroupManagers.list compute.targetPools.list compute.targetSslProxies.list compute.targetTcpProxies.list compute.urlMaps.list Roles See Roles for role information.
- Permissions for the gcloud CLI and the API compute.globalForwardingRules.pscDelete compute.globalForwardingRules.delete servicedirectory.namespaces.delete dns.managedZones.delete Permissions for the Google Cloud console compute.forwardingRules.list compute.globalForwardingRules.list compute.networks.list compute.backendBuckets.list compute.backendServices.list compute.instanceGroupManagers.list compute.targetPools.list compute.targetSslProxies.list compute.targetTcpProxies.list compute.urlMaps.list Roles See Roles for role information.
- Permissions for the gcloud CLI and the API compute.globalForwardingRules.list Permissions for the Google Cloud console compute.forwardingRules.list compute.globalForwardingRules.list compute.networks.list compute.backendBuckets.list compute.backendServices.list compute.instanceGroupManagers.list compute.targetPools.list compute.targetSslProxies.list compute.targetTcpProxies.list compute.urlMaps.list Roles See Roles for role information.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- Compute Network Admin ( roles/compute.networkAdmin ) Before you begin Read About published services for information about publishing services, including limitations.
- Permissions required for this task To perform this task, you must have been granted the following permissions or one of the following IAM roles.
- Permissions required for this task To perform this task, you must have been granted the following permissions or one of the following IAM roles.
- Permissions required for this task To perform this task, you must have been granted the following permissions or one of the following IAM roles.

