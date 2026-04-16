---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.813Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Dual-stack clusters"
feature_slug: "dual-stack-clusters"
latest_feature_date: "2022-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack"
keywords:
  - "dual"
  - "stack"
  - "clusters"
  - "gke"
  - "can"
  - "use"
  - "networking"
  - "both"
---

# Dual-stack clusters

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE clusters can use dual-stack networking with both IPv4 and IPv6.

## Extended Definition

GKE clusters can use dual-stack networking with both IPv4 and IPv6.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- IPAllocationPolicy JSON representation { "useIpAliases" : boolean , "createSubnetwork" : boolean , "subnetworkName" : string , "clusterIpv4Cidr" : string , "nodeIpv4Cidr" : string , "servicesIpv4Cidr" : string , "clusterSecondaryRangeName" : string , "servicesSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string , "nodeIpv4CidrBlock" : string , "servicesIpv4CidrBlock" : string , "tpuIpv4CidrBlock" : string , "useRoutes" : boolean , "stackType" : enum ( StackType ) , "ipv6AccessType" : enum ( IPv6AccessType ) , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "subnetIpv6CidrBlock" : string , "servicesIpv6CidrBlock" : string , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "defaultPodIpv4RangeUtilization" : number , "additionalIpRangesConfigs" : [ { object ( AdditionalIPRangesConfig ) } ] , "autoIpamConfig" : { object ( AutoIpamConfig ) } , "networkTierConfig" : { object ( NetworkTierConfig ) } } Fields useIpAliases boolean Whether alias IPs will be used for pod IPs in the cluster.
- If both use ip aliases and use routes are false, then the server picks the default IP allocation mode stackType enum ( StackType ) The IP stack type of the cluster ipv6AccessType enum ( IPv6AccessType ) The ipv6 access type (internal or external) when create subnetwork is true podCidrOverprovisionConfig object ( PodCIDROverprovisionConfig ) [PRIVATE FIELD] Pod CIDR size overprovisioning config for the cluster.
- NetworkConfig JSON representation { "network" : string , "subnetwork" : string , "enableIntraNodeVisibility" : boolean , "defaultSnatStatus" : { object ( DefaultSnatStatus ) } , "enableL4ilbSubsetting" : boolean , "datapathProvider" : enum ( DatapathProvider ) , "privateIpv6GoogleAccess" : enum ( PrivateIPv6GoogleAccess ) , "dnsConfig" : { object ( DNSConfig ) } , "serviceExternalIpsConfig" : { object ( ServiceExternalIPsConfig ) } , "gatewayApiConfig" : { object ( GatewayAPIConfig ) } , "enableMultiNetworking" : boolean , "networkPerformanceConfig" : { object ( ClusterNetworkPerformanceConfig ) } , // Union field enable fqdn network policy can be only one of the following: "enableFqdnNetworkPolicy" : boolean // End of list of possible types for union field enable fqdn network policy . // Union field in transit encryption config can be only one of the following: "inTransitEncryptionConfig" : enum ( InTransitEncryptionConfig ) // End of list of possible types for union field in transit encryption config . // Union field enable cilium clusterwide network policy can be only one of the // following: "enableCiliumClusterwideNetworkPolicy" : boolean // End of list of possible types for union field // enable cilium clusterwide network policy . // Union field default enable private nodes can be only one of the following: "defaultEnablePrivateNodes" : boolean // End of list of possible types for union field default enable private nodes . // Union field disable l4 lb firewall reconciliation can be only one of the // following: "disableL4LbFirewallReconciliation" : boolean // End of list of possible types for union field // disable l4 lb firewall reconciliation . } Fields network string Output only.
- Unique id for the cluster. loggingConfig object ( LoggingConfig ) Logging configuration for the cluster. monitoringConfig object ( MonitoringConfig ) Monitoring configuration for the cluster. nodePoolAutoConfig object ( NodePoolAutoConfig ) Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. podAutoscaling object ( PodAutoscaling ) The config for pod autoscaling. etag string This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. fleet object ( Fleet ) Fleet information for the cluster. securityPostureConfig object ( SecurityPostureConfig ) Optional.

### Set up Elastic Stack on GKE \_|\_ Kubernetes Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Delete the Elastic Stack components, ECK operator, and kube-state-metrics: kubectl --namespace elastic-system delete ingresses.networking.k8s.io elastic-stack kubectl --namespace elastic-system delete managedcertificates.networking.gke.io elastic-stack kubectl --namespace elastic-system delete frontendconfigs.networking.gke.io elastic-stack kubectl --namespace elastic-system delete agents.agent.k8s.elastic.co elastic-agent kubectl --namespace elastic-system delete agents.agent.k8s.elastic.co fleet-server kubectl --namespace elastic-system delete kibanas.kibana.k8s.elastic.co kibana kubectl --namespace elastic-system delete elasticsearches.elasticsearch.k8s.elastic.co elasticsearch kubectl --namespace elastic-system delete daemonsets.apps max-map-count-setter kubectl --namespace elastic-system delete pvc --selector = 'elasticsearch.k8s.elastic.co/cluster-name=elasticsearch' helm --namespace elastic-system uninstall kube-state-metrics helm --namespace elastic-system uninstall elastic-operator Delete the DNS record set, IP address, DNS managed zone, and GKE cluster: gcloud dns record-sets delete "elk.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : networking.gke.io/v1beta1 kind : FrontendConfig metadata : name : elastic-stack namespace : elastic-system spec : redirectToHttps : enabled : true responseCodeName : MOVED PERMANENTLY DEFAULT --- apiVersion : networking.gke.io/v1 kind : ManagedCertificate metadata : name : elastic-stack namespace : elastic-system spec : domains : - elk.BASE DOMAIN --- apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : kibana namespace : elastic-system annotations : networking.gke.io/managed-certificates : elastic-stack networking.gke.io/v1beta1.FrontendConfig : elastic-stack kubernetes.io/ingress.global-static-ip-name : elastic-stack kubernetes.io/ingress.class : gce spec : defaultBackend : service : name : kibana-kb-http port : number : 5601 This manifest describes a ManagedCertificate that provisions an SSL certificate to establish the TLS connection.
- Add a Helm chart repository and update it: helm repo add elastic https://helm.elastic.co helm repo update Clone the GitHub repository: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git Change to the working directory: cd kubernetes-engine-samples/observability/elastic-stack-tutorial Create a GKE cluster Create a GKE cluster with control plane metrics collection enabled: gcloud container clusters create-auto elk-stack \ --location = "us-central1" \ --monitoring = "SYSTEM,WORKLOAD,API SERVER,SCHEDULER,CONTROLLER MANAGER" Deploy the ECK operator Elastic Cloud on Kubernetes (ECK) is a platform for deploying and managing the Elastic Stack on Kubernetes clusters.
- BASE DOMAIN " \ --type = "A" \ --zone = "elk" \ --quiet gcloud compute addresses delete "elastic-stack" \ --global \ --quiet gcloud dns managed-zones delete "elk" --quiet gcloud container clusters delete "elk-stack" \ --location = "us-central1" \ --quiet What's next Explore reference architectures, diagrams, and best practices about Google Cloud.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- IPAllocationPolicy JSON representation { "useIpAliases" : boolean , "createSubnetwork" : boolean , "subnetworkName" : string , "clusterIpv4Cidr" : string , "nodeIpv4Cidr" : string , "servicesIpv4Cidr" : string , "clusterSecondaryRangeName" : string , "servicesSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string , "nodeIpv4CidrBlock" : string , "servicesIpv4CidrBlock" : string , "tpuIpv4CidrBlock" : string , "useRoutes" : boolean , "stackType" : enum ( StackType ) , "ipv6AccessType" : enum ( IPv6AccessType ) , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "subnetIpv6CidrBlock" : string , "servicesIpv6CidrBlock" : string , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "defaultPodIpv4RangeUtilization" : number , "additionalIpRangesConfigs" : [ { object ( AdditionalIPRangesConfig ) } ] , "autoIpamConfig" : { object ( AutoIpamConfig ) } , "networkTierConfig" : { object ( NetworkTierConfig ) } } Fields useIpAliases boolean Whether alias IPs will be used for pod IPs in the cluster.
- If both use ip aliases and use routes are false, then the server picks the default IP allocation mode stackType enum ( StackType ) The IP stack type of the cluster ipv6AccessType enum ( IPv6AccessType ) The ipv6 access type (internal or external) when create subnetwork is true podCidrOverprovisionConfig object ( PodCIDROverprovisionConfig ) [PRIVATE FIELD] Pod CIDR size overprovisioning config for the cluster.
- NetworkConfig JSON representation { "network" : string , "subnetwork" : string , "enableIntraNodeVisibility" : boolean , "defaultSnatStatus" : { object ( DefaultSnatStatus ) } , "enableL4ilbSubsetting" : boolean , "datapathProvider" : enum ( DatapathProvider ) , "privateIpv6GoogleAccess" : enum ( PrivateIPv6GoogleAccess ) , "dnsConfig" : { object ( DNSConfig ) } , "serviceExternalIpsConfig" : { object ( ServiceExternalIPsConfig ) } , "gatewayApiConfig" : { object ( GatewayAPIConfig ) } , "enableMultiNetworking" : boolean , "networkPerformanceConfig" : { object ( ClusterNetworkPerformanceConfig ) } , // Union field enable fqdn network policy can be only one of the following: "enableFqdnNetworkPolicy" : boolean // End of list of possible types for union field enable fqdn network policy . // Union field in transit encryption config can be only one of the following: "inTransitEncryptionConfig" : enum ( InTransitEncryptionConfig ) // End of list of possible types for union field in transit encryption config . // Union field enable cilium clusterwide network policy can be only one of the // following: "enableCiliumClusterwideNetworkPolicy" : boolean // End of list of possible types for union field // enable cilium clusterwide network policy . // Union field default enable private nodes can be only one of the following: "defaultEnablePrivateNodes" : boolean // End of list of possible types for union field default enable private nodes . // Union field disable l4 lb firewall reconciliation can be only one of the // following: "disableL4LbFirewallReconciliation" : boolean // End of list of possible types for union field // disable l4 lb firewall reconciliation . } Fields network string Output only.
- Unique id for the cluster. loggingConfig object ( LoggingConfig ) Logging configuration for the cluster. monitoringConfig object ( MonitoringConfig ) Monitoring configuration for the cluster. nodePoolAutoConfig object ( NodePoolAutoConfig ) Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. podAutoscaling object ( PodAutoscaling ) The config for pod autoscaling. etag string This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. fleet object ( Fleet ) Fleet information for the cluster. securityPostureConfig object ( SecurityPostureConfig ) Optional.

