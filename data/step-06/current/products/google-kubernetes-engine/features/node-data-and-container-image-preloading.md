---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.761Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Node data and container image preloading"
feature_slug: "node-data-and-container-image-preloading"
latest_feature_date: "2024-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets"
keywords:
  - "node"
  - "container"
  - "image"
  - "preloading"
  - "nodes"
  - "can"
  - "preload"
  - "images"
---

# Node data and container image preloading

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

New nodes can preload data or container images to speed workload deployment and autoscaling.

## Extended Definition

New nodes can preload data or container images to speed workload deployment and autoscaling.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)

## Supporting Pages

### Node images \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- Source ID: `site-docs-reference-2`
- Final score: 213
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Node images release notes Container-Optimized OS Google provides comprehensive documentation for Container-Optimized OS: Container-Optimized OS documentation Release Notes Ubuntu Periodically, Google updates the Ubuntu images that are available for use on your cluster's Nodes.
- Node image source projects The available node images for GKE clusters are contained in the following source projects: Container-Optimized OS images: gke-node-images Ubuntu images: ubuntu-os-gke-cloud Windows Server images: gke-windows-node-images In addition to the source projects listed above, GKE also uses the following source projects for exclusive usage by the GKE team : ubuntu-os-gke-cloud-private (reserved for exclusive usage of the GKE team) ubuntu-os-gke-cloud-devel (reserved for exclusive usage of the GKE team) You might need to know the source project names while setting up highly-secure clusters.
- Linux node image comparison The following sections compare the operational aspects of the Container-Optimized OS and Ubuntu node images, including: Software package management System initialization Logs collection File system layout Storage driver support Software package manager The cos and cos containerd node images use a minimal root file system with built-in support for the Docker (containerd) container runtime, which also serves as the software package manager for installing software on the host.
- Ubuntu Ubuntu with containerd ( ubuntu containerd ) Windows Server Windows Server LTSC with containerd ( windows ltsc containerd ) (Supports both LTSC2022 and LTSC2019 node images) Container-Optimized OS The Container-Optimized OS from Google node images are based on a recent version of the Linux kernel and are optimized to enhance node security.

### "Migrate nodes to containerd 2 \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- Source ID: `site-docs-reference-2`
- Final score: 197
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- How GKE is transitioning to containerd 2 Review the following timeline to understand how GKE is transitioning existing clusters to use containerd 2: For Linux nodes with 1.32 and Windows Server nodes with 1.34, GKE uses containerd 1.7. containerd 1.7 deprecated both Docker Schema 1 images and the Container Runtime Interface (CRI) v1alpha2 API.
- The worker nodes use a specific version of containerd, based on the operating system and GKE minor version: Container-Optimized OS and Ubuntu nodes (Linux) : Linux nodes that run GKE 1.32 or earlier, with containerd node images, use containerd 1.7 or earlier versions.
- For Linux nodes with 1.33 and Windows Server nodes with 1.35, GKE uses containerd 2.0, which removes support for Docker Schema 1 images and the CRI v1alpha2 API.
- Windows Server nodes : Windows Server nodes that run GKE 1.34 or earlier, with containerd node images, use containerd 1.7 or earlier versions.

### "Automatically bootstrap GKE nodes with DaemonSets \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
- Source ID: `site-docs-reference-required-5`
- Final score: 177
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Only use this on clusters where you have strict controls over what is deployed. --- apiVersion : v1 kind : ServiceAccount metadata : name : node-config-sa namespace : default --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : node-patcher-role rules : - apiGroups : [ "" ] resources : [ "nodes" ] Permissions needed to read and remove a taint from the node. verbs : [ "get" , "patch" , "update" ] --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : node-config-binding subjects : - kind : ServiceAccount name : node-config-sa namespace : default roleRef : kind : ClusterRole name : node-patcher-role apiGroup : rbac.authorization.k8s.io --- apiVersion : apps/v1 kind : DaemonSet metadata : name : auto-untaint-daemonset labels : app : auto-untaint-configurator spec : selector : matchLabels : app : auto-untaint-configurator updateStrategy : type : RollingUpdate template : metadata : labels : app : auto-untaint-configurator spec : serviceAccountName : node-config-sa hostPID : true Toleration now matches the taint on your node. tolerations : - key : "node.config.status/stage" operator : "Equal" value : "configuring" effect : "NoSchedule" volumes : - name : host-root-fs hostPath : path : / initContainers : - name : configure-and-untaint image : ubuntu:22.04 # Using a standard container image. securityContext : privileged : true # Required for chroot and sysctl. env : - name : NODE NAME valueFrom : fieldRef : fieldPath : spec.nodeName volumeMounts : - name : host-root-fs mountPath : /host command : [ "/bin/bash" , "-c" ] args : - Using explicit error checking for each critical command.
- UNTAINT THE NODE This command removes the taint from the node this Pod is running on. echo "--> Untainting node ${NODE NAME} by removing taint ${TAINT KEY}..." if ! /host/home/kubernetes/bin/kubectl taint node "${NODE NAME}" "${TAINT KEY}:NoSchedule-"; then echo "ERROR: Failed to untaint the node." >&2 exit 1 fi echo "--> Node has been untainted and is now schedulable." The main container is minimal; it just keeps the Pod running. containers : - name : pause-container image : registry.k8s.io/pause:3.9 This manifest creates a ServiceAccount, ClusterRole, and ClusterRoleBinding to grant the DaemonSet permission to remove taints from nodes.
- In Cloud Shell, create and launch a regional GKE cluster: gcloud container clusters create ds-init-tutorial \ --enable-ip-alias \ --machine-type = n1-standard-2 \ --metadata disable-legacy-endpoints = true \ --node-labels = app = default-init \ --node-locations us-central1-a,us-central1-b,us-central1-c \ --no-enable-basic-auth \ --no-issue-client-certificate \ --num-nodes = 1 \ --location us-central1 \ --service-account = " $GKE SERVICE ACCOUNT EMAIL " Apply node configurations using a DaemonSet In this section, you prevent workloads from running on nodes before configuration is complete by applying a taint to the node pool.
- You should be aware of the following security restrictions and risks that it introduces: Container escape or host compromise: a vulnerability within the privileged container application or image can directly lead to root access on the host node.

