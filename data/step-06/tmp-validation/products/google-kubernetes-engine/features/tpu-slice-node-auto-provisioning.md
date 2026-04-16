---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.244Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "TPU slice node auto-provisioning"
feature_slug: "tpu-slice-node-auto-provisioning"
latest_feature_date: "2023-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets"
keywords:
  - "slice"
  - "automatically"
  - "provisioning"
  - "auto"
  - "node"
---

# TPU slice node auto-provisioning

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can automatically provision TPU node pools and multi-host TPU accelerators for Standard clusters running version 1.28 and later.

## Extended Definition

GKE can automatically provision TPU node pools and multi-host TPU accelerators for Standard clusters running version 1.28 and later.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)

## Supporting Pages

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Cloud TPU node pool autoscaling GKE scales automatically created or manually created Cloud TPU node pools that use the cluster autoscaler in one of the following ways: Single-host TPU slice node pool : GKE adds or removes TPU nodes in the existing node pool.
- Enable node auto-provisioning in situations like the following: You want GKE to automatically create node pools in a cluster that runs a GKE version earlier than 1.33.3-gke.1136000.
- The following example configuration file enables node auto-repair and auto-upgrade for any new auto-created node pools: management : autoRepair : true autoUpgrade : true The following example configuration file sets the cluster-wide resource limits for node auto-provisioning and configures multiple default settings: resourceLimits : - resourceType : 'cpu' minimum : 4 maximum : 10 - resourceType : 'memory' maximum : 64 - resourceType : 'nvidia-tesla-t4' maximum : 4 management : autoRepair : true autoUpgrade : true shieldedInstanceConfig : enableSecureBoot : true enableIntegrityMonitoring : true diskSizeGb : 100 This configuration file sets the following default values: Enables node auto-repair and auto-upgrade for any new auto-created node pools.
- The following example ComputeClass manifest enables node pool auto-creation for any Pod that uses the ComputeClass: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : example-computeclass spec : priorities : - machineFamily : n4 - machineFamily : c4 whenUnsatisfiable : ScaleUpAnyway nodePoolAutoCreation : enabled : true Cluster-level enablement with node auto-provisioning To enable node pool auto-creation for the entire cluster, you enable the node auto-provisioning feature for the cluster by using the Kubernetes Engine API.

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- With Autopilot clusters, you don't need to worry about provisioning nodes or managing node pools because node pools are automatically provisioned through node auto-provisioning , and are automatically scaled to meet the requirements of your workloads.
- With the --enable-autoprovisioning flag on a GKE cluster, GKE creates or deletes single-host or multi-host TPU slice node pools with a TPU version and topology that meets the requirements of pending workloads.
- Both single-host TPU slice node pool and multi-host TPU slice node pool support autoscaling and auto-provisioning.
- For example, the following node affinity rule declares a preference for scheduling Pods on nodes that are backed by Spot VMs (GKE automatically adds the cloud.google.com/gke-spot=true label to these types of nodes): affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 preference : matchExpressions : set to "true".

### "Automatically bootstrap GKE nodes with DaemonSets \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
- Source ID: `site-docs-reference-required-5`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Automatically bootstrap GKE nodes with DaemonSets Stay organized with collections Save and categorize content based on your preferences.
- Only use this on clusters where you have strict controls over what is deployed. --- apiVersion : v1 kind : ServiceAccount metadata : name : node-config-sa namespace : default --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : node-patcher-role rules : - apiGroups : [ "" ] resources : [ "nodes" ] Permissions needed to read and remove a taint from the node. verbs : [ "get" , "patch" , "update" ] --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : node-config-binding subjects : - kind : ServiceAccount name : node-config-sa namespace : default roleRef : kind : ClusterRole name : node-patcher-role apiGroup : rbac.authorization.k8s.io --- apiVersion : apps/v1 kind : DaemonSet metadata : name : auto-untaint-daemonset labels : app : auto-untaint-configurator spec : selector : matchLabels : app : auto-untaint-configurator updateStrategy : type : RollingUpdate template : metadata : labels : app : auto-untaint-configurator spec : serviceAccountName : node-config-sa hostPID : true Toleration now matches the taint on your node. tolerations : - key : "node.config.status/stage" operator : "Equal" value : "configuring" effect : "NoSchedule" volumes : - name : host-root-fs hostPath : path : / initContainers : - name : configure-and-untaint image : ubuntu:22.04 # Using a standard container image. securityContext : privileged : true # Required for chroot and sysctl. env : - name : NODE NAME valueFrom : fieldRef : fieldPath : spec.nodeName volumeMounts : - name : host-root-fs mountPath : /host command : [ "/bin/bash" , "-c" ] args : - Using explicit error checking for each critical command.
- UNTAINT THE NODE This command removes the taint from the node this Pod is running on. echo "--> Untainting node ${NODE NAME} by removing taint ${TAINT KEY}..." if ! /host/home/kubernetes/bin/kubectl taint node "${NODE NAME}" "${TAINT KEY}:NoSchedule-"; then echo "ERROR: Failed to untaint the node." >&2 exit 1 fi echo "--> Node has been untainted and is now schedulable." The main container is minimal; it just keeps the Pod running. containers : - name : pause-container image : registry.k8s.io/pause:3.9 This manifest creates a ServiceAccount, ClusterRole, and ClusterRoleBinding to grant the DaemonSet permission to remove taints from nodes.
- In Cloud Shell, create and launch a regional GKE cluster: gcloud container clusters create ds-init-tutorial \ --enable-ip-alias \ --machine-type = n1-standard-2 \ --metadata disable-legacy-endpoints = true \ --node-labels = app = default-init \ --node-locations us-central1-a,us-central1-b,us-central1-c \ --no-enable-basic-auth \ --no-issue-client-certificate \ --num-nodes = 1 \ --location us-central1 \ --service-account = " $GKE SERVICE ACCOUNT EMAIL " Apply node configurations using a DaemonSet In this section, you prevent workloads from running on nodes before configuration is complete by applying a taint to the node pool.

