---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.207Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Multiple network interfaces for Pods"
feature_slug: "multiple-network-interfaces-for-pods"
latest_feature_date: "2024-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
keywords:
  - "interfaces"
  - "multiple"
  - "autopilot"
  - "network"
  - "clusters"
  - "pods"
---

# Multiple network interfaces for Pods

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Autopilot clusters can run workloads with multiple network interfaces.

## Extended Definition

GKE Autopilot clusters can run workloads with multiple network interfaces.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)

## Supporting Pages

### "Allocate network resources by using GKE managed DRANET \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- Source ID: `site-docs-reference-2`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DRANET lets you request and allocate high-performance networking resources for your Pods, including network interfaces that support Remote Direct Memory Access (RDMA).
- It functions as a node-level agent to make network interfaces discoverable and allocatable to Pods through the Kubernetes Dynamic Resource Allocation (DRA) APIs .
- Save the manifest as agnhost-rdma-pod.yaml : apiVersion : v1 kind : Pod metadata : name : agnhost-rdma namespace : default labels : app : agnhost spec : containers : - name : agnhost image : registry.k8s.io/e2e-test-images/agnhost:2.39 args : [ "netexec" , "--http-port" , "80" ] ports : - name : agnhost-port containerPort : 80 resources : claims : - name : rdma limits : nvidia.com/gpu : 1 resourceClaims : - name : rdma resourceClaimTemplateName : all-mrdma Apply the manifest: kubectl apply -f agnhost-rdma-pod.yaml Verify that the additional allocated network interfaces are visible inside the Pod. kubectl exec agnhost-rdma -- ls /sys/class/net The following example output shows the default eth0 and lo interfaces, as well as the allocated RDMA interfaces, such as gpu0rdma0 .
- Apply the manifest: kubectl apply -f netdev-pod.yaml Verify that the additional allocated network interfaces are visible inside the Pod. kubectl exec agnhost-netdev -- ls /sys/class/net The following example output shows the default eth0 and lo interfaces, along with the allocated network devices, which have names like eth1 and eth2 .

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Pricing Autopilot pricing uses different models depending on the type of hardware that your Pods use, as follows: General-purpose Autopilot Pods : the following types of Pods use a Pod-based billing model and are categorized as general-purpose Pods : Pods that run on the container-optimized compute platform in Autopilot clusters or Standard clusters.
- Networking : Autopilot enables some networking security features by default, such as passing all Pod network traffic through your Virtual Private Cloud firewall rules, even if the traffic is going to other Pods in the cluster.
- You can use the Autopilot container-optimized compute platform in the following ways: Autopilot clusters : Pods that don't select specific hardware use this compute platform by default.
- This page describes the benefits of Autopilot mode and provides information about planning clusters, deploying workloads, and configuring networking and security.

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- This node pool is required to run GKE Standard system Pods that can't run on Autopilot nodes in Standard clusters because of the taints that GKE adds to those nodes.
- The following steps show you how to create an example Deployment that selects a ComputeClass and verify that the Pods run in Autopilot mode: Save the following example Deployment as autopilot-cc-deployment.yaml : apiVersion : apps/v1 kind : Deployment metadata : name : helloweb labels : app : hello spec : selector : matchLabels : app : hello template : metadata : labels : app : hello spec : nodeSelector : Replace with the name of a compute class cloud.google.com/compute-class : COMPUTE CLASS containers : - name : hello-app image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 ports : - containerPort : 8080 resources : requests : cpu : "250m" memory : "1Gi" Replace COMPUTE CLASS with the name of the compute class to use.
- If the workload uses Autopilot mode, this value is Autopilot-managed . kubectl CLI Check the names of the nodes that run your Pods: kubectl get pods -l = app = hello -o wide The output is similar to the following: NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES helloweb-79b9f6f75-5wwc9 1/1 Running 0 152m 10.102.1.135 gk3-cluster-1-nap-10abc8ya1-f66c6cef-wg5g <none> <none> helloweb-79b9f6f75-9skb9 1/1 Running 0 4d3h 10.102.0.140 gk3-cluster-1-nap-10abc8ya1-632bac02-hjl6 <none> <none> helloweb-79b9f6f75-h7bdv 1/1 Running 0 152m 10.102.1.137 gk3-cluster-1-nap-10abc8ya1-f66c6cef-wg5g <none> <none> In this output, the gk3- prefix in the Node column indicates that the node is managed by Autopilot.
- If you specify this field in a ComputeClass that you deploy to an Autopilot cluster, GKE ignores the field. priorities.podFamily : uses the podFamily priority rule to run Pods on the Autopilot container-optimized compute platform. priorityDefaults.location : defines the zones in which GKE should create nodes for Pods that use the ComputeClass.

