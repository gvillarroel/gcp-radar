---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.743Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Secondary boot disks for node data and image preloading"
feature_slug: "secondary-boot-disks-for-node-data-and-image-preloading"
latest_feature_date: "2024-07-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images"
keywords:
  - "secondary"
  - "boot"
  - "disks"
  - "node"
  - "image"
  - "preloading"
  - "gke"
  - "nodes"
---

# Secondary boot disks for node data and image preloading

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

New GKE nodes can preload data or container images from secondary boot disks to speed workload startup and autoscaling.

## Extended Definition

New GKE nodes can preload data or container images from secondary boot disks to speed workload startup and autoscaling.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)

## Supporting Pages

### "About quicker workload startup with fast-starting nodes \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes)
- Source ID: `site-docs-reference-2`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ComputeClass Request a compatible accelerator type and count in a ComputeClass, like in the following example: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : ACCELERATOR COMPUTE CLASS NAME spec : priorities : - gpu : type : ACCELERATOR TYPE count : ACCELERATOR COUNT nodePoolAutoCreation : enabled : true When you select this ComputeClass in a Pod, like in the following example, GKE uses fast-starting nodes: apiVersion : v1 kind : Pod metadata : name : POD NAME spec : nodeSelector : Select a ComputeClass that requests compatible GPUs cloud.google.com/compute-class : ACCELERATOR COMPUTE CLASS NAME containers : - name : my-container image : registry.k8s.io/pause resources : limits : nvidia.com/gpu : ACCELERATOR COUNT Replace the following values: ACCELERATOR COMPUTE CLASS NAME : the name of the ComputeClass that requests the accelerators.
- Pod specification Select a compatible accelerator type and count in your Pod specification, like in the following example: apiVersion : v1 kind : Pod metadata : name : POD NAME spec : nodeSelector : cloud.google.com/gke-accelerator : ACCELERATOR NAME containers : - name : my-container image : registry.k8s.io/pause resources : limits : nvidia.com/gpu : ACCELERATOR COUNT Replace the following values: POD NAME : the name of your Pod.
- Secondary boot disks on versions earlier than 1.33.2-gke.1015000.
- Customer-managed encryption keys (CMEK) Spot VMs Placement policies Multi-network support Autopilot GPU workloads Requesting compatible GPUs in Autopilot mode results in up to four times faster node startup time and up to two times faster Pod scheduling time than similar requests in GKE Standard mode, because the Autopilot GPU workloads can use fast-starting nodes.

### "Automatically bootstrap GKE nodes with DaemonSets \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
- Source ID: `site-docs-reference-required-5`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Only use this on clusters where you have strict controls over what is deployed. --- apiVersion : v1 kind : ServiceAccount metadata : name : node-config-sa namespace : default --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : node-patcher-role rules : - apiGroups : [ "" ] resources : [ "nodes" ] Permissions needed to read and remove a taint from the node. verbs : [ "get" , "patch" , "update" ] --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : node-config-binding subjects : - kind : ServiceAccount name : node-config-sa namespace : default roleRef : kind : ClusterRole name : node-patcher-role apiGroup : rbac.authorization.k8s.io --- apiVersion : apps/v1 kind : DaemonSet metadata : name : auto-untaint-daemonset labels : app : auto-untaint-configurator spec : selector : matchLabels : app : auto-untaint-configurator updateStrategy : type : RollingUpdate template : metadata : labels : app : auto-untaint-configurator spec : serviceAccountName : node-config-sa hostPID : true Toleration now matches the taint on your node. tolerations : - key : "node.config.status/stage" operator : "Equal" value : "configuring" effect : "NoSchedule" volumes : - name : host-root-fs hostPath : path : / initContainers : - name : configure-and-untaint image : ubuntu:22.04 # Using a standard container image. securityContext : privileged : true # Required for chroot and sysctl. env : - name : NODE NAME valueFrom : fieldRef : fieldPath : spec.nodeName volumeMounts : - name : host-root-fs mountPath : /host command : [ "/bin/bash" , "-c" ] args : - Using explicit error checking for each critical command.
- UNTAINT THE NODE This command removes the taint from the node this Pod is running on. echo "--> Untainting node ${NODE NAME} by removing taint ${TAINT KEY}..." if ! /host/home/kubernetes/bin/kubectl taint node "${NODE NAME}" "${TAINT KEY}:NoSchedule-"; then echo "ERROR: Failed to untaint the node." >&2 exit 1 fi echo "--> Node has been untainted and is now schedulable." The main container is minimal; it just keeps the Pod running. containers : - name : pause-container image : registry.k8s.io/pause:3.9 This manifest creates a ServiceAccount, ClusterRole, and ClusterRoleBinding to grant the DaemonSet permission to remove taints from nodes.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Automatically bootstrap GKE nodes with DaemonSets Stay organized with collections Save and categorize content based on your preferences.
- In Cloud Shell, create and launch a regional GKE cluster: gcloud container clusters create ds-init-tutorial \ --enable-ip-alias \ --machine-type = n1-standard-2 \ --metadata disable-legacy-endpoints = true \ --node-labels = app = default-init \ --node-locations us-central1-a,us-central1-b,us-central1-c \ --no-enable-basic-auth \ --no-issue-client-certificate \ --num-nodes = 1 \ --location us-central1 \ --service-account = " $GKE SERVICE ACCOUNT EMAIL " Apply node configurations using a DaemonSet In this section, you prevent workloads from running on nodes before configuration is complete by applying a taint to the node pool.

### Node images \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- Source ID: `site-docs-reference-2`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Node images release notes Container-Optimized OS Google provides comprehensive documentation for Container-Optimized OS: Container-Optimized OS documentation Release Notes Ubuntu Periodically, Google updates the Ubuntu images that are available for use on your cluster's Nodes.
- Both node images use systemd service files to define services on the node, and systemd.targets to group boot targets via dependencies.
- Note: You may need to use solutions like Automatically bootstrap GKE nodes with DaemonSets to customize the Ubuntu features.
- Autopilot Standard This page describes the node images available for Google Kubernetes Engine (GKE) nodes.

