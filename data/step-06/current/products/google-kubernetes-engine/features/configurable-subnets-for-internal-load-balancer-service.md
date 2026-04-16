---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.960Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Configurable subnets for internal load balancer Service"
feature_slug: "configurable-subnets-for-internal-load-balancer-service"
latest_feature_date: "2020-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "configurable"
  - "subnets"
  - "internal"
  - "load"
  - "balancer"
  - "let"
  - "you"
  - "specify"
---

# Configurable subnets for internal load balancer Service

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Configurable subnets let you specify the subnet used by an internal load balancer Service.

## Extended Definition

Configurable subnets let you specify the subnet used by an internal load balancer Service.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Inspect the Ingress resource to find an event with an error message similar to the following: Error during GC: error running load balancer garbage collection routine: googleapi: Error 400: The url map resource 'projects/ project-id /global/urlMaps/k8s2-um-tlw9rhgp-default-my-ingress-9ifnni82' is already being used by 'projects/ project-id /global/targetHttpsProxies/k8s2-um-tlw9rhgp-default-my82-target-proxy', resourceInUseByAnotherResource In the preceding error message, k8s2-um-tlw9rhgp-default-my82-target-proxy is a manually created target https proxy that is still referencing the URL map k8s2-um-tlw9rhgp-default-my-ingress-9ifnni82 which was created and managed by an Ingress controller.
- Then visit the IP address to see that both applications are reachable on the same load balancer: Visit http://<IP ADDRESS>/ and note that the response contains Version: 1.0.0 (as the request is routed to the web Service) Visit http://<IP ADDRESS>/v2/ and note that the response contains Version: 2.0.0 (as the request is routed to the web2 Service) The only supported wildcard character for the path field of an Ingress is the character.
- Visiting your application Find out the external IP address of the load balancer serving your application by running: kubectl get ingress basic-ingress Output: NAME HOSTS ADDRESS PORTS AGE basic-ingress 203.0.113.12 80 2m Note: It might take a few minutes for GKE to allocate an external IP address and set up forwarding rules before the load balancer is ready to serve your application.
- For more information about path limitations and pattern matching, see the URL Maps documentation . (Optional) Monitoring the availability and latency of your service Google Cloud Uptime checks perform blackbox monitoring of applications from the viewpoint of the user, determining latency and availability from multiple external IPs to the IP address of the load balancer.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- To update the default setting, use ClusterUpdate.desired default enable private nodes Union field disable l4 lb firewall reconciliation . disable l4 lb firewall reconciliation can be only one of the following: disableL4LbFirewallReconciliation boolean Disable L4 load balancer VPC firewalls to enable firewall policies.
- CloudRunConfig JSON representation { "disabled" : boolean , "loadBalancerType" : enum ( LoadBalancerType ) } Fields disabled boolean Whether Cloud Run addon is enabled for this cluster. loadBalancerType enum ( LoadBalancerType ) Which load balancer type is installed for Cloud Run.
- AutoIpamConfig contains all information related to Auto IPAM networkTierConfig object ( NetworkTierConfig ) Cluster-level network tier configuration is used to determine the default network tier for external IP addresses on cluster resources, such as node pools and load balancers.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- To update the default setting, use ClusterUpdate.desired default enable private nodes Union field disable l4 lb firewall reconciliation . disable l4 lb firewall reconciliation can be only one of the following: disableL4LbFirewallReconciliation boolean Disable L4 load balancer VPC firewalls to enable firewall policies.
- CloudRunConfig JSON representation { "disabled" : boolean , "loadBalancerType" : enum ( LoadBalancerType ) } Fields disabled boolean Whether Cloud Run addon is enabled for this cluster. loadBalancerType enum ( LoadBalancerType ) Which load balancer type is installed for Cloud Run.
- AutoIpamConfig contains all information related to Auto IPAM networkTierConfig object ( NetworkTierConfig ) Cluster-level network tier configuration is used to determine the default network tier for external IP addresses on cluster resources, such as node pools and load balancers.

