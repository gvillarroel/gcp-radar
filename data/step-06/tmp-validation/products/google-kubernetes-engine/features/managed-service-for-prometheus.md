---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.262Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Managed Service for Prometheus"
feature_slug: "managed-service-for-prometheus"
latest_feature_date: "2023-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "prometheus"
  - "enabled"
  - "standard"
  - "managed"
  - "running"
  - "clusters"
  - "default"
---

# Managed Service for Prometheus

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Managed Service for Prometheus is enabled by default in new GKE Standard clusters running version 1.27 and later.

## Extended Definition

Managed Service for Prometheus is enabled by default in new GKE Standard clusters running version 1.27 and later.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Collect and view logs and metrics for Ray clusters on Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics)
- Source ID: `site-docs-reference-required-4`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For Autopilot clusters, Google Cloud Managed Service for Prometheus is enabled by default.
- For Standard clusters, you must also enable Google Cloud Managed Service for Prometheus. gcloud Create a cluster using the --addons=RayOperator option and the --enable-ray-cluster-monitoring option: gcloud container clusters create CLUSTER NAME \ --location = LOCATION \ --addons = RayOperator \ --enable-ray-cluster-monitoring Replace the following: CLUSTER NAME : the name of the new cluster.
- For Standard clusters, you must also enable Google Cloud Managed Service for Prometheus. gcloud Create a cluster using the --addons=RayOperator option and the --enable-ray-cluster-logging option: gcloud container clusters create CLUSTER NAME \ --location = LOCATION \ --addons = RayOperator \ --enable-ray-cluster-logging Replace the following: CLUSTER NAME : the name of the new cluster.
- For Standard GKE clusters, you must enable Google Cloud Managed Service for Prometheus to enable metrics collection for Ray clusters.

### "Deploy a highly-available PostgreSQL database on GKE \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql)
- Source ID: `site-docs-root-2`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Terraform creates a private cluster in the us-central1 region, and enables Backup for GKE for disaster recovery and Managed Service for Prometheus for cluster monitoring. module "gke-db1" { source = "../modules/beta-private-cluster" project id = var.project id name = "cluster-db1" regional = true region = "us-central1" network = module.network.network name subnetwork = module.network.primary subnet name ip range pods = "ip-range-pods-db1" ip range services = "ip-range-svc-db1" create service account = true enable private endpoint = false enable private nodes = true master ipv4 cidr block = "172.16.0.0/28" network policy = true cluster autoscaling = { "autoscaling profile" : "OPTIMIZE UTILIZATION" , "enabled" : true , "gpu resources" : [], "min cpu cores" : 36 , "min memory gb" : 144 , "max cpu cores" : 48 , "max memory gb" : 192 , } monitoring enable managed prometheus = true gke backup agent config = true node pools = [ { name = "pool-sys" autoscaling = true min count = 1 max count = 3 max surge = 1 max unavailable = 0 machine type = "e2-standard-4" node locations = "us-central1-a,us-central1-b,us-central1-c" auto repair = true }, { name = "pool-db" autoscaling = true max surge = 1 max unavailable = 0 machine type = "e2-standard-8" node locations = "us-central1-a,us-central1-b,us-central1-c" auto repair = true }, ] node pools labels = { all = {} pool-db = { "app.stateful/component" = "postgresql" } pool-sys = { "app.stateful/component" = "postgresql-pgpool" } } node pools taints = { all = [] pool-db = [ { key = "app.stateful/component" value = "postgresql" effect = "NO SCHEDULE" }, ], pool-sys = [ { key = "app.stateful/component" value = "postgresql-pgpool" effect = "NO SCHEDULE" }, ], } gce pd csi driver = true } Create a backup cluster in the us-west1 region for disaster recovery. module "gke-db2" { source = "../modules/beta-private-cluster" project id = var.project id name = "cluster-db2" regional = true region = "us-west1" network = module.network.network name subnetwork = module.network.secondary subnet name ip range pods = "ip-range-pods-db2" ip range services = "ip-range-svc-db2" create service account = false service account = module.gke-db1.service account enable private endpoint = false enable private nodes = true master ipv4 cidr block = "172.16.0.16/28" network policy = true cluster autoscaling = { "autoscaling profile" : "OPTIMIZE UTILIZATION" , "enabled" : true , "gpu resources" : [], "min cpu cores" : 10 , "min memory gb" : 144 , "max cpu cores" : 48 , "max memory gb" : 192 , } monitoring enable managed prometheus = true gke backup agent config = true node pools = [ { name = "pool-sys" autoscaling = true min count = 1 max count = 3 max surge = 1 max unavailable = 0 machine type = "e2-standard-4" node locations = "us-west1-a,us-west1-b,us-west1-c" auto repair = true }, { name = "pool-db" autoscaling = true max surge = 1 max unavailable = 0 machine type = "e2-standard-8" node locations = "us-west1-a,us-west1-b,us-west1-c" auto repair = true }, ] node pools labels = { all = {} pool-db = { "app.stateful/component" = "postgresql" } pool-sys = { "app.stateful/component" = "postgresql-pgpool" } } node pools taints = { all = [] pool-db = [ { key = "app.stateful/component" value = "postgresql" effect = "NO SCHEDULE" }, ], pool-sys = [ { key = "app.stateful/component" value = "postgresql-pgpool" effect = "NO SCHEDULE" }, ], } gce pd csi driver = true } Tip: To debug issues when running Terraform, you can capture debug output by setting the Terraform log level environment variable TF LOG .
- Managed Service for Prometheus is only supported on Autopilot clusters running GKE version 1.25 or later. module "gke-db1-autopilot" { source = "../modules/beta-autopilot-private-cluster" project id = var.project id name = "cluster-db1" kubernetes version = "1.25" # Will be ignored if use "REGULAR" release channel region = "us-central1" regional = true zones = [ "us-central1-a", "us-central1-b", "us-central1-c" ] network = module.network.network name subnetwork = module.network.primary subnet name ip range pods = "ip-range-pods-db1" ip range services = "ip-range-svc-db1" horizontal pod autoscaling = true release channel = "RAPID" # Default version is 1.22 in REGULAR.
- Verify database availability during Standard cluster upgrades This section is applicable if you are running Standard clusters.
- Plan for GKE upgrades on Standard clusters This section is applicable if you are running Standard clusters.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. cloudRunConfig object ( CloudRunConfig ) Configuration for the Cloud Run addon, which allows the user to use a managed Knative service. dnsCacheConfig object ( DnsCacheConfig ) Configuration for NodeLocalDNS, a dns cache running on cluster nodes configConnectorConfig object ( ConfigConnectorConfig ) Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. gcePersistentDiskCsiDriverConfig object ( GcePersistentDiskCsiDriverConfig ) Configuration for the Compute Engine Persistent Disk CSI driver. gcpFilestoreCsiDriverConfig object ( GcpFilestoreCsiDriverConfig ) Configuration for the Filestore CSI driver. gkeBackupAgentConfig object ( GkeBackupAgentConfig ) Configuration for the Backup for GKE agent addon. gcsFuseCsiDriverConfig object ( GcsFuseCsiDriverConfig ) Configuration for the Cloud Storage Fuse CSI driver. statefulHaConfig object ( StatefulHAConfig ) Optional.
- If unspecified, the default disk size is 100GB. diskType string Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard' shieldedInstanceConfig object ( ShieldedInstanceConfig ) Shielded Instance options. bootDiskKmsKey string The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
- ManagedPrometheusConfig JSON representation { "enabled" : boolean , "autoMonitoringConfig" : { object ( AutoMonitoringConfig ) } } Fields enabled boolean Enable Managed Collection. autoMonitoringConfig object ( AutoMonitoringConfig ) GKE Workload Auto-Monitoring Configuration.
- Union field autopilot compatibility auditing enabled . autopilot compatibility auditing enabled can be only one of the following: autopilotCompatibilityAuditingEnabled boolean If true, enables the GCW Auditor that audits workloads on standard clusters.

