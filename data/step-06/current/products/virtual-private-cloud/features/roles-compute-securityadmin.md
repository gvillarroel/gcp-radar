---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.506Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "roles/compute.securityAdmin"
feature_slug: "roles-compute-securityadmin"
latest_feature_date: "2016-05-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control"
  - "https://docs.cloud.google.com/vpc/docs/about-peering-connections"
keywords:
  - "roles"
  - "compute"
  - "securityadmin"
  - "the"
  - "security"
  - "admin"
  - "iam"
  - "role"
---

# roles/compute.securityAdmin

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

The Compute Security Admin IAM role is now generally available for VPC.

## Extended Definition

The Compute Security Admin IAM role is now generally available for VPC.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control)
- [https://docs.cloud.google.com/vpc/docs/about-peering-connections](https://docs.cloud.google.com/vpc/docs/about-peering-connections)

## Supporting Pages

### "Access the service from another VPC network \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Enable the API Make sure that you have the following role or roles on the project: Compute Engine > Compute Network Admin, Compute Engine > Compute Instance Admin Check for the roles In the Google Cloud console, go to the IAM page.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Grant the roles In the Google Cloud console, go to the IAM page.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Security Admin • IAM principal in the host project, or • IAM principal in the organization A Shared VPC Admin can define a Security Admin by granting an IAM principal the Security Admin ( compute.securityAdmin ) role to the host project.
- Shared VPC Admin ( compute.xpnAdmin and resourcemanager.projectIamAdmin ) • IAM principal in the organization, or • IAM principal in a folder Shared VPC Admins have the Compute Shared VPC Admin ( compute.xpnAdmin ) and Project IAM Admin ( resourcemanager.projectIamAdmin ) roles for the organization or one or more folders.
- Service Project Admin ( compute.networkUser ) • IAM principal in the organization, or • IAM principal in a host project, or • IAM principal in some subnets in the host project A Shared VPC Admin defines a Service Project Admin by granting an IAM principal the Network User ( compute.networkUser ) role to either the whole host project or select subnets of its Shared VPC networks .
- They can optionally delegate certain network administrative tasks to other IAM principals: Administrator Purpose Network Admin • IAM principal in the host project, or • IAM principal in the organization Shared VPC Admin defines a Network Admin by granting an IAM principal the Network Admin ( compute.networkAdmin ) role to the host project.

### "Roles and permissions \_|\_ Network Intelligence Center - Connectivity Tests\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- For more information about project roles and Google Cloud resources, see the following documentation: Resource Manager documentation Identity and Access Management documentation Compute Engine documentation describing access control Predefined roles Connectivity Tests has the following predefined roles: networkmanagement.admin has permission to perform all operations on a test resource. networkmanagement.viewer has permission to list or get a specific test resource.
- Lowest-level resources where you can grant this role: Project networkmanagement. connectivitytests. get networkmanagement. connectivitytests. getIamPolicy networkmanagement. connectivitytests. list networkmanagement.locations. networkmanagement. locations. get networkmanagement. locations. list networkmanagement. monitoringpoints. get networkmanagement. monitoringpoints. list networkmanagement. networkpaths. networkmanagement. networkpaths. get networkmanagement. networkpaths. list networkmanagement. operations. get networkmanagement. operations. list networkmanagement. providers. get networkmanagement. providers. list networkmanagement. topologygraphs. read networkmanagement. vpcflowlogsconfigs. get networkmanagement. vpcflowlogsconfigs. list networkmanagement.webpaths. networkmanagement.webpaths.get networkmanagement. webpaths. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Cloud Network Insights Admin Beta ( roles/ networkmanagement.CloudNetworkInsightsAdmin ) Full access to Cloud Network Insights resources. networkmanagement.locations. networkmanagement. locations. get networkmanagement. locations. list networkmanagement. monitoringpoints. networkmanagement. monitoringpoints. downloadConfig networkmanagement. monitoringpoints. get networkmanagement. monitoringpoints. list networkmanagement. networkpaths. networkmanagement. networkpaths. get networkmanagement. networkpaths. list networkmanagement. operations. get networkmanagement. operations. list networkmanagement.providers. networkmanagement. providers. create networkmanagement. providers. delete networkmanagement. providers. generateProviderAccessToken networkmanagement. providers. get networkmanagement. providers. list networkmanagement.webpaths. networkmanagement.webpaths.get networkmanagement. webpaths. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Cloud Network Insights Editor Beta ( roles/ networkmanagement.CloudNetworkInsightsEditor ) Editor access to Cloud Network Insights resources. networkmanagement.locations. networkmanagement. locations. get networkmanagement. locations. list networkmanagement. monitoringpoints. networkmanagement. monitoringpoints. downloadConfig networkmanagement. monitoringpoints. get networkmanagement. monitoringpoints. list networkmanagement. networkpaths. networkmanagement. networkpaths. get networkmanagement. networkpaths. list networkmanagement. operations. get networkmanagement. operations. list networkmanagement.providers. networkmanagement. providers. create networkmanagement. providers. delete networkmanagement. providers. generateProviderAccessToken networkmanagement. providers. get networkmanagement. providers. list networkmanagement.webpaths. networkmanagement.webpaths.get networkmanagement. webpaths. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Cloud Network Insights Viewer Beta ( roles/ networkmanagement.CloudNetworkInsightsViewer ) Read-only access to Cloud Network Insights resources. networkmanagement. monitoringpoints. get networkmanagement. monitoringpoints. list networkmanagement. networkpaths. networkmanagement. networkpaths. get networkmanagement. networkpaths. list networkmanagement. providers. generateProviderAccessToken networkmanagement. providers. get networkmanagement. providers. list networkmanagement.webpaths. networkmanagement.webpaths.get networkmanagement. webpaths. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Service agent roles Service agent roles should only be granted to service agents .
- Warning: Do not grant service agent roles to any principals except service agents . cloudsql.instances.get cloudsql.instances.list compute.addresses.get compute.addresses.list compute.backendServices.get compute.backendServices.list compute. externalVpnGateways. get compute. externalVpnGateways. list compute.firewalls.get compute.firewalls.list compute.forwardingRules.get compute.forwardingRules.list compute.globalAddresses.get compute.globalAddresses.list compute. globalForwardingRules. get compute. globalForwardingRules. list compute. globalNetworkEndpointGroups. get compute. globalNetworkEndpointGroups. list compute.healthChecks.get compute.healthChecks.list compute.httpHealthChecks.get compute.httpHealthChecks.list compute.httpsHealthChecks.get compute.httpsHealthChecks.list compute.instanceGroups.get compute.instanceGroups.list compute.instances.get compute.instances.list compute. networkEndpointGroups. get compute. networkEndpointGroups. list compute.networks.get compute. networks. getEffectiveFirewalls compute.networks.list compute. networks. listPeeringRoutes compute.packetMirrorings.get compute.packetMirrorings.list compute. regionBackendServices. get compute. regionBackendServices. list compute.regionHealthChecks.get compute. regionHealthChecks. list compute. regionNetworkEndpointGroups. get compute. regionNetworkEndpointGroups. list compute. regionTargetHttpProxies. get compute. regionTargetHttpProxies. list compute. regionTargetHttpsProxies. get compute. regionTargetHttpsProxies. list compute. regionTargetTcpProxies. get compute. regionTargetTcpProxies. list compute.regionUrlMaps.get compute.regionUrlMaps.list compute.routers.get compute.routers.list compute.routes.get compute.routes.list compute.subnetworks.get compute.subnetworks.list compute.targetGrpcProxies.get compute.targetGrpcProxies.list compute.targetHttpProxies.get compute.targetHttpProxies.list compute.targetHttpsProxies.get compute. targetHttpsProxies. list compute.targetInstances.get compute.targetInstances.list compute.targetPools.get compute.targetPools.list compute.targetSslProxies.get compute.targetSslProxies.list compute.targetTcpProxies.get compute.targetTcpProxies.list compute.targetVpnGateways.get compute.targetVpnGateways.list compute.urlMaps.get compute.urlMaps.list compute.vpnGateways.get compute.vpnGateways.list compute.vpnTunnels.get compute.vpnTunnels.list container.clusters.get container.clusters.list container.nodes.get container.nodes.list Custom roles You can create custom roles by selecting a list of permissions from the permissions table for Connectivity Tests.
- Because Connectivity Tests must have read access to the Google Cloud resource configurations in your Virtual Private Cloud (VPC) network to run a test, you must grant at least the Compute Network Viewer role ( roles/compute.networkViewer ) to users or service accounts running a test against those resources.

### "About peering connections \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-peering-connections](https://docs.cloud.google.com/vpc/docs/about-peering-connections)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you have the Compute Network Admin role ( roles/compute.networkAdmin ) or the Compute Security Admin role ( roles/compute.securityAdmin ) for one network, you don't become a network administrator or a security administrator for the other network.
- Creating a peering connection doesn't grant you any Identity and Access Management roles on the other VPC network.
- For more information about route exchange options, see the following: Options for exchanging subnet routes Options for exchanging static routes Options for exchanging dynamic routes Connection mode The connection mode determines how a peering connection is administered.
- Connection status The gcloud compute networks describe command shows both the effective status of a peering connection and your local peering configuration.

