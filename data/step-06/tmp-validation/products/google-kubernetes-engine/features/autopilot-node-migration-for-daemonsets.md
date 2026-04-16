---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.237Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Autopilot node migration for DaemonSets"
feature_slug: "autopilot-node-migration-for-daemonsets"
latest_feature_date: "2023-11-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets"
keywords:
  - "daemonsets"
  - "detect"
  - "migration"
  - "autopilot"
  - "nodes"
  - "node"
---

# Autopilot node migration for DaemonSets

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Autopilot can detect nodes that cannot fit all DaemonSets and gradually migrate workloads to larger nodes.

## Extended Definition

GKE Autopilot can detect nodes that cannot fit all DaemonSets and gradually migrate workloads to larger nodes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)

## Supporting Pages

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Pricing The following pricing applies, depending on how you configure Confidential GKE Nodes: Confidential GKE Nodes pricing Workload-level In Autopilot workloads, both of the following costs apply: Autopilot node-based billing for the Compute Engine machine series that the Pods run on.
- The supported technologies at the cluster level depend on the cluster mode of operation, as follows: Autopilot clusters : AMD SEV Standard clusters : AMD SEV AMD SEV-SNP Intel TDX Node pool level Enable Confidential GKE Nodes when you create a new node pool in a Standard cluster.
- Run the following command: gcloud container clusters create-auto CLUSTER NAME \ --location = CONTROL PLANE LOCATION \ --enable-confidential-nodes Replace the following: CLUSTER NAME : the name of the Autopilot cluster.
- Autopilot Standard This page shows you how to enforce encryption of data in-use in your nodes and workloads by using Confidential Google Kubernetes Engine Nodes.

### "Migrate nodes to containerd 2 \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following command: kubectl get pods --all-namespaces -o json \ jq -r ' [ "/", "/var", "/var/","/var/run", "/var/run/", "/var/run/containerd", "/var/run/containerd/", "/var/run/containerd/containerd.sock", "/run", "/run/", "/run/containerd", "/run/containerd/", "/run/containerd/containerd.sock" ] as $socket paths [ "kube-system", "kube-node-lease", "istio-system", "asm-system", "gatekeeper-system", "config-management-system", "config-management-monitoring", "cnrm-system", "hnc-system", "gke-managed-system", "gke-gmp-system", "gmp-system", "gke-managed-cim" ] as $excluded namespaces .items[] select( (.spec.volumes[]?.hostPath.path as $p $socket paths index($p)) and ([.metadata.namespace] inside($excluded namespaces) not) ) .metadata.namespace + "/" + .metadata.name ' Use eBPF tracing to identify API callers For a more definitive way to identify which workloads running on Linux nodes call the CRI v1alpha2 API, you can deploy two specialized DaemonSets: The containerd-socket-tracer logs any process opening a connection to the containerd socket, along with the Pod and container details.
- Paused automatic upgrades for Linux nodes GKE pauses automatic upgrades to 1.33 for clusters with Linux nodes when it detects that the cluster uses the deprecated features.
- Autopilot Standard Google Kubernetes Engine (GKE) clusters use containerd node images with all worker nodes that run version 1.24 and later.
- GKE can't detect whether Windows Server nodes are using the deprecated features.

### "Automatically bootstrap GKE nodes with DaemonSets \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
- Source ID: `site-docs-reference-required-5`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Automatically bootstrap GKE nodes with DaemonSets Stay organized with collections Save and categorize content based on your preferences.
- Standard This tutorial shows how to customize the nodes of a Google Kubernetes Engine (GKE) cluster by using DaemonSets .
- Only use this on clusters where you have strict controls over what is deployed. --- apiVersion : v1 kind : ServiceAccount metadata : name : node-config-sa namespace : default --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : node-patcher-role rules : - apiGroups : [ "" ] resources : [ "nodes" ] Permissions needed to read and remove a taint from the node. verbs : [ "get" , "patch" , "update" ] --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : node-config-binding subjects : - kind : ServiceAccount name : node-config-sa namespace : default roleRef : kind : ClusterRole name : node-patcher-role apiGroup : rbac.authorization.k8s.io --- apiVersion : apps/v1 kind : DaemonSet metadata : name : auto-untaint-daemonset labels : app : auto-untaint-configurator spec : selector : matchLabels : app : auto-untaint-configurator updateStrategy : type : RollingUpdate template : metadata : labels : app : auto-untaint-configurator spec : serviceAccountName : node-config-sa hostPID : true Toleration now matches the taint on your node. tolerations : - key : "node.config.status/stage" operator : "Equal" value : "configuring" effect : "NoSchedule" volumes : - name : host-root-fs hostPath : path : / initContainers : - name : configure-and-untaint image : ubuntu:22.04 # Using a standard container image. securityContext : privileged : true # Required for chroot and sysctl. env : - name : NODE NAME valueFrom : fieldRef : fieldPath : spec.nodeName volumeMounts : - name : host-root-fs mountPath : /host command : [ "/bin/bash" , "-c" ] args : - Using explicit error checking for each critical command.
- UNTAINT THE NODE This command removes the taint from the node this Pod is running on. echo "--> Untainting node ${NODE NAME} by removing taint ${TAINT KEY}..." if ! /host/home/kubernetes/bin/kubectl taint node "${NODE NAME}" "${TAINT KEY}:NoSchedule-"; then echo "ERROR: Failed to untaint the node." >&2 exit 1 fi echo "--> Node has been untainted and is now schedulable." The main container is minimal; it just keeps the Pod running. containers : - name : pause-container image : registry.k8s.io/pause:3.9 This manifest creates a ServiceAccount, ClusterRole, and ClusterRoleBinding to grant the DaemonSet permission to remove taints from nodes.

