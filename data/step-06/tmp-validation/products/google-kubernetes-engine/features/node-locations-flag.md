---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.445Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "node-locations flag"
feature_slug: "node-locations-flag"
latest_feature_date: "2020-02-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "locations"
  - "flag"
  - "place"
  - "zones"
  - "pools"
  - "lets"
  - "node"
---

# node-locations flag

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The node-locations flag lets you place node pools in zones independently of the cluster zone.

## Extended Definition

The node-locations flag lets you place node pools in zones independently of the cluster zone.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Test new GKE versions for compatibility in a staging environment before automatic upgrades change the version on your production GPU nodes, or disable automatic upgrades in those node pools. gcloud To create a node pool with GPUs in a cluster, run the following command: gcloud container node-pools create POOL NAME \ --accelerator type = GPU TYPE ,count = AMOUNT ,gpu-driver-version = DRIVER VERSION \ --machine-type MACHINE TYPE \ --cluster CLUSTER NAME \ --location CONTROL PLANE LOCATION \ --node-locations COMPUTE ZONE1 [ , COMPUTE ZONE2 ] \ [ --sandbox = type = gvisor ] [ --enable-autoscaling \ --min-nodes MIN NODES \ --max-nodes MAX NODES ] \ [ --scopes = SCOPES ] \ [ --service-account = SERVICE ACCOUNT ] \ [ --reservation-affinity = specific --reservation = RESERVATION NAME ] Replace the following: POOL NAME : the name you choose for the node pool.
- We recommend that you always use the --node-locations flag when creating the node pool to specify the zone or zones that contain the requested GPUs.
- Best practice : You can also create a new cluster with GPUs and specify zones using the --node-locations flag.
- Add the following block to your Terraform configuration: provider "google" { project = var.project id region = var.region } resource "google container cluster" "ml cluster" { name = var.cluster name location = var.region initial node count = 1 } resource "google container node pool" "gpu pool" { name = google container cluster.ml cluster.name location = var.region node locations = [ var.zones ] cluster = google container cluster.ml cluster.name node count = 3 autoscaling { total min node count = "1" total max node count = "5" } management { auto repair = "true" auto upgrade = "true" } node config { oauth scopes = [ "https://www.googleapis.com/auth/logging.write" , "https://www.googleapis.com/auth/monitoring" , "https://www.googleapis.com/auth/devstorage.read only" , "https://www.googleapis.com/auth/trace.append" , "https://www.googleapis.com/auth/service.management.readonly" , "https://www.googleapis.com/auth/servicecontrol" , ] labels = { env = var.project id } guest accelerator { type = var.gpu type count = 1 gpu driver installation config { gpu driver version = var.gpu driver version } } image type = "cos containerd" machine type = var.machine type tags = [ "gke-node", "${var.project id}-gke" ] disk size gb = "30" disk type = "pd-standard" metadata = { disable-legacy-endpoints = "true" } } } Terraform calls Google Cloud APIs to set create a new cluster with a node pool that uses GPUs.

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a new node pool To create a new node pool with Confidential GKE Nodes enabled, select one of the following options: gcloud Run the following command: gcloud container node-pools create NODE POOL NAME \ --location = LOCATION \ --cluster = CLUSTER NAME \ --machine-type = MACHINE TYPE \ --node-locations = ZONE1,ZONE2,... \ --confidential-node-type = CONFIDENTIAL COMPUTE TECHNOLOGY Note: You can enable confidential mode on boot disk storage by passing the --enable-confidential-storage flag and --boot-disk-kms-key= KMS KEY .
- For more information about the supported fields and values for ComputeClasses, see the ComputeClass CustomResourceDefinition . apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : COMPUTE CLASS spec : nodePoolConfig : confidentialNodeType : CONFIDENTIAL COMPUTE TECHNOLOGY nodePoolAutoCreation : enabled : true activeMigration : optimizeRulePriority : true priorityDefaults : location : zones : [ ' ZONE1 ' , ' ZONE2 ' ] priorities : - machineFamily : MACHINE SERIES - machineType : MACHINE TYPE whenUnsatisfiable : DoNotScaleUp Replace the following: COMPUTE CLASS : a name for your new compute class.
- To create a Standard mode cluster that uses Confidential GKE Nodes, select one of the following options: gcloud When creating a new cluster, specify the --confidential-node-type option in the gcloud CLI: gcloud container clusters create CLUSTER NAME \ --location = LOCATION \ --machine-type = MACHINE TYPE \ --node-locations = ZONE1,ZONE2,... \ --confidential-node-type = CONFIDENTIAL COMPUTE TECHNOLOGY Replace the following: CLUSTER NAME : the name of your cluster.
- Update the node pool with the Confidential Computing technology to use: gcloud container node-pools update NODE POOL NAME \ --cluster = CLUSTER NAME \ --location = CLUSTER LOCATION \ --confidential-node-type = CONFIDENTIAL COMPUTE TECHNOLOGY Replace CONFIDENTIAL COMPUTE TECHNOLOGY with the Confidential Computing technology to use.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- For security purposes, even if you have node auto-upgrades enabled, we recommend that you manually upgrade your node pools to one of the following GKE versions: Container-Optimized OS: 1.21.14-gke.7100 and later Ubuntu: 1.21.14-gke.9400 and later 1.22.15-gke.2400 and later 1.23.13-gke.800 and later 1.24.7-gke.800 and later 1.25.3-gke.700 and later A recent feature of release channels lets you apply a patch without having to unsubscribe from a channel.
- For security purposes, even if you have node auto-upgrades enabled, we recommend that you manually upgrade your node pools to one of the following GKE versions: 1.22.15-gke.2300 and later 1.23.13-gke.700 and later 1.24.7-gke.700 and later A recent feature of release channels lets you apply a patch without having to unsubscribe from a channel.
- Convert public node pools to private 2024-07-02 Update: For Autopilot clusters originally created as public clusters, you can place your workloads on private nodes by using nodeSelectors .
- We recommend you to upgrade your node pools to one of the following versions or above to take advantage of the latest patches: 1.21.4-gke.301 1.20.10-gke.301 1.19.14-gke.301 1.18.20-gke.4501 The following versions also contain the fix: 1.21.3-gke.2001 1.20.8-gke.2101 1.20.9-gke.701 1.20.9-gke.1001 1.19.12-gke.2101 1.19.13-gke.701 1.18.20-gke.3001 High GKE clusters on Description Severity A security issue was discovered in Kubernetes , CVE-2021-25741, where a user may be able to create a container with subpath volume mounts to access files & directories outside of the volume, including on the host filesystem.

