---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.430Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Master global access for private clusters"
feature_slug: "master-global-access-for-private-clusters"
latest_feature_date: "2020-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "master"
  - "reach"
  - "global"
  - "private"
  - "access"
  - "clusters"
  - "lets"
---

# Master global access for private clusters

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Master global access lets you reach a private cluster's master endpoint from any Google Cloud region or on-premises environment.

## Extended Definition

Master global access lets you reach a private cluster's master endpoint from any Google Cloud region or on-premises environment.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Access private registries with private CA certificates \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Verify that your cluster can access the private registry Run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --flatten = "nodePoolDefaults.nodeConfigDefaults.containerdConfig" The output is similar to the following: registryHosts containerdConfig: registryHosts: - server: example.io hosts: - host: example.mirror.io capabilities: - "HOST CAPABILITY PULL" - "HOST CAPABILITY RESOLVE" ca: - gcpSecretManagerSecretUri: projects/123456789012/secrets/example-secret-name/versions/1 privateRegistryAccessConfig containerdConfig: privateRegistryAccessConfig: certificateAuthorityDomainConfig: - fqdns: - 203.0.113.105 gcpSecretManagerCertificateConfig: secretUri: projects/123456789012/secrets/example-secret-name/versions/1 enabled: true Deploy a workload that accesses a private image In this section, you deploy a static Pod that references an image from your private registry.
- Run the following command to create Autopilot clusters: gcloud container clusters create-auto CLUSTER NAME \ --location = LOCATION \ --scopes = "cloud-platform" \ --containerd-config-from-file = " PATH TO CONFIG FILE " Note : If your configuration file does not use secrets from Secret Manager, such as for the privateRegistryAccessConfig feature or when using registryHosts with certificates stored in Secret Manager, you can remove the --scopes="cloud-platform" flag.
- Requirements To use private CA public keys to access private registries, you must meet the following requirements: Your clusters must use GKE version 1.27.3-gke.1700 or later.
- Or Internal error pulling certificate "projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION " from GSM: .... privateRegistryAccessConfig Query the logs with following filter. resource.type="gce instance" textPayload:"Installed certificate \\\"projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION \\\"" If your certificate installation succeeded, the output is similar to the following: "Installed certificate "projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION "" If your certificate installation failed, the output is similar to the following: "Failed to install certificate "projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION "" Best practices We recommend that you use the following best practices when you use this feature: Don't use aliases for Secret Manager secret versions.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Legacy public clusters with --master-authorized-networks and PSC-based clusters with --master-authorized-networks and --enable-google-cloud (default) configured are additionally accessible by the following: Public IP addresses of all Compute Engine VMs in Google Cloud Google Cloud platform IP addresses What vulnerabilities are addressed by this patch?
- The following items summarize the cluster isolation: Private clusters with --master-authorized-networks and PSC-based clusters with --master-authorized-networks and --no-enable-google-cloud configured are the most isolated.
- GKE on Azure creates private Kubernetes clusters that are not directly accessible to the Internet by default and are protected from this vulnerability.
- GKE on AWS creates private Kubernetes clusters that are not directly accessible to the Internet by default and are protected from this vulnerability.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- IPEndpointsConfig JSON representation { "authorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "publicEndpoint" : string , "privateEndpoint" : string , "privateEndpointSubnetwork" : string , // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field enable public endpoint can be only one of the following: "enablePublicEndpoint" : boolean // End of list of possible types for union field enable public endpoint . // Union field global access can be only one of the following: "globalAccess" : boolean // End of list of possible types for union field global access . } Fields authorizedNetworksConfig object ( MasterAuthorizedNetworksConfig ) Configuration of authorized networks.
- PrivateClusterConfig JSON representation { "enablePrivateNodes" : boolean , "enablePrivateEndpoint" : boolean , "masterIpv4CidrBlock" : string , "privateEndpoint" : string , "publicEndpoint" : string , "peeringName" : string , "masterGlobalAccessConfig" : { object ( PrivateClusterMasterGlobalAccessConfig ) } , "privateEndpointSubnetwork" : string } Fields enablePrivateNodes (deprecated) boolean This item is deprecated!
- The peering name in the customer VPC used by this cluster. masterGlobalAccessConfig (deprecated) object ( PrivateClusterMasterGlobalAccessConfig ) This item is deprecated!
- PrivateClusterMasterGlobalAccessConfig JSON representation { "enabled" : boolean } Fields enabled boolean Whenever master is accessible globally or not.

