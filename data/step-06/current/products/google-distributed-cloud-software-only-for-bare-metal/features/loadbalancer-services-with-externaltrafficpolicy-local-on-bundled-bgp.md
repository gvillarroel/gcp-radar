---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.351Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "LoadBalancer Services with externalTrafficPolicy=Local on bundled BGP"
feature_slug: "loadbalancer-services-with-externaltrafficpolicy-local-on-bundled-bgp"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/manual-lb"
keywords:
  - "loadbalancer"
  - "externaltrafficpolicy"
  - "local"
  - "bundled"
  - "bgp"
  - "lets"
  - "use"
  - "load"
---

# LoadBalancer Services with externalTrafficPolicy=Local on bundled BGP

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Lets LoadBalancer Services use externalTrafficPolicy=Local with bundled BGP load balancing.

## Extended Definition

Lets LoadBalancer Services use externalTrafficPolicy=Local with bundled BGP load balancing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/manual-lb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/manual-lb)

## Supporting Pages

### "Configure bundled load balancing with MetalLB \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/bundled-lb)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LoadBalancer Services When using externalTrafficPolicy: Local in your LoadBalancer Services, set your application pods to run exactly on the load balancer nodes.
- The cluster configuration for separated load balancers should look similar to the following example: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : hybrid-ha-lb namespace : cluster-hybrid-ha-lb spec : type : hybrid profile : default anthosBareMetalVersion : 1.34 gkeConnect : projectID : project-fleet controlPlane : loadBalancer : mode : bundled nodePoolSpec : nodes : - address : 10.200.0.2 - address : 10.200.0.3 - address : 10.200.0.4 clusterNetwork : pods : cidrBlocks : - 192.168.0.0/16 services : cidrBlocks : - 10.96.0.0/20 ... loadBalancer : mode : bundled ... nodePoolSpec : nodes : - address : 10.200.0.5 - address : 10.200.0.6 - address : 10.200.0.7 clusterOperations : ...
- For information about cluster configuration files and examples of valid configurations, see one of the following pages: Create admin clusters Create user clusters Create hybrid clusters Create standalone clusters loadBalancer.mode This value must be bundled to enable bundled load balancing. loadBalancer.ports.controlPlaneLBPort This value specifies the destination port to be used for traffic sent to the Kubernetes control plane (the Kubernetes API servers). loadBalancer.vips.controlPlaneVIP This value specifies the destination IP address to be used for traffic sent to the Kubernetes control plane (the Kubernetes API servers).
- Preserving client source IP address The LoadBalancer Service created with the bundled Layer 2 load balancing solution uses the default Cluster setting for the external traffic policy.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- For example: loadBalancer : mode : bundled type : bgp localASN : 65001 bgpPeers : - ip : 10.0.1.254 asn : 65002 controlPlaneNodes : - 10.0.1.10 - 10.0.1.11 - ip : 10.0.2.254 asn : 65002 controlPlaneNodes : - 10.0.2.10 For more information, see Configure bundled load balancers with BGP .
- For example: loadBalancer : mode : bundled ... addressPools : - name : pool1 addresses : - 10.200.0.92-10.200.0.100 nodePoolSpec : nodes : - address : 10.200.1.25 k8sIP : 10.200.0.25 - address : 10.200.0.26 - address : 10.200.0.27 This field can't be modified after cluster creation.
- For example: loadBalancer : mode : bundled ... nodePoolSpec : nodes : - address : 10.200.0.25 - address : 10.200.0.26 - address : 10.200.0.27 Cluster resource Optional Mutable loadBalancer.nodePoolSpec.nodes.k8sIP Optional.
- Allowed values: bundled manual Cluster resource Required Immutable loadBalancer.type Optional.

### "Configure manual load balancing \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/manual-lb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/manual-lb)
- Source ID: `site-iam-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following sample output shows the structure of the ports section: spec : clusterIP : 172.26.232.107 externalTrafficPolicy : Cluster loadBalancerIP : 21.0.101.77 ports : - name : status-port nodePort : 30281 port : 15021 protocol : TCP targetPort : 15021 - name : http nodePort : 30124 port : 80 protocol : TCP targetPort : 80 - name : https nodePort : 31858 port : 443 protocol : TCP targetPort : 443 There are ports for HTTP and HTTPS traffic.
- Support LoadBalancer Services in user clusters You must configure load balancing to support Kubernetes LoadBalancer services In manual load-balancing mode, Google Distributed Cloud does not automatically provision load balancers so LoadBalancer services don't work unless you provision and configure load balancers to point the services.
- Find its ports with this command: kubectl --kubeconfig KUBECONFIG -n gke-system get service istio-ingress -oyaml The ingress service is configured with a loadBalancerIP which is the IP supplied in the loadBalancer.vips.ingressVIP field in the initial cluster configuration.
- Unlike bundled load balancing where Google Distributed Cloud deploys load balancers to cluster nodes for control plane and data plane traffic, with manual load balancing you configure your own load-balancing solutions for control plane and data plane traffic.

