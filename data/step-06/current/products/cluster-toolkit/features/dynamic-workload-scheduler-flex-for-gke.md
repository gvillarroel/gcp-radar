---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.454Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "Dynamic Workload Scheduler Flex for GKE"
feature_slug: "dynamic-workload-scheduler-flex-for-gke"
latest_feature_date: "2025-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint"
keywords:
  - "dynamic"
  - "workload"
  - "scheduler"
  - "flex"
  - "for"
  - "gke"
  - "cluster"
  - "toolkit"
---

# Dynamic Workload Scheduler Flex for GKE

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

Cluster Toolkit adds Dynamic Workload Scheduler Flex support for GKE.

## Extended Definition

Cluster Toolkit adds Dynamic Workload Scheduler Flex support for GKE.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices)
- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint)

## Supporting Pages

### "Best practices for running HPC workloads \_|\_ Cluster Toolkit \_|\_ Google\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Cluster Toolkit Guides Send feedback Best practices for running HPC workloads Stay organized with collections Save and categorize content based on your preferences.
- For example, this setting affects dnf automatic package updates on the following image families: HPC images, such as hpc-rocky-linux-8 (project cloud-hpc-image-public ) Slurm images, such as slurm-gcp-6-6-hpc-rocky-linux-8 (project schedmd-slurm-public ) Cluster Toolkit provides a convenient setting on relevant modules to set this metadata flag for you: allow automatic updates: false .
- You can create H4D instances using a variety of consumption and provisioning models, including on-demand instance creation, one and three year committed use discounts (CUDs), and Dynamic Workload Scheduler.
- Here is an example using the vm-instance module: - id: workstation-rocky source: modules/compute/vm-instance use: [network] settings: allow automatic updates: false Here is an example for a Slurm nodeset: - id: dynamic nodeset source: community/modules/compute/schedmd-slurm-gcp-v6-nodeset use: [network] settings: node count static: 1 node count dynamic max: 4 allow automatic updates: false The examples/hpc-slurm-h4d/hpc-slurm-h4d.yaml blueprint is configured to automatically disable updates by setting allow automatic updates to false .

### "Deploy an A3 Mega GKE cluster for ML training \_|\_ Cluster Toolkit \_|\_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- Source ID: `site-docs-reference`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- Clean up resources created by Cluster Toolkit To avoid recurring charges for the resources used on this page, clean up the resources provisioned by Cluster Toolkit, including the VPC networks and GKE cluster: cd /cluster-toolkit ./gcluster destroy CLUSTER NAME / Replace CLUSTER NAME with the name of your cluster.
- This document outlines the deployment steps for provisioning an A3 Mega ( a3-megagpu-8g ) Google Kubernetes Engine (GKE) cluster that is ideal for running large-scale artificial intelligence (AI) and machine learning (ML) training workloads.
- Home Documentation Compute Cluster Toolkit Guides Send feedback Deploy an A3 Mega GKE cluster for ML training Stay organized with collections Save and categorize content based on your preferences.
- To go to the main Cluster Toolkit blueprint's working directory, run the following command from the CLI. cd cluster-toolkit Create a Cloud Storage bucket to store the state of the Terraform deployment: gcloud storage buckets create gs:// BUCKET NAME \ --default-storage-class = STANDARD \ --project = PROJECT ID \ --location = COMPUTE REGION TERRAFORM STATE \ --uniform-bucket-level-access gcloud storage buckets update gs:// BUCKET NAME --versioning Replace the following variables: BUCKET NAME : the name of the new Cloud Storage bucket.

### Reconfigure a GKE cluster \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster)
- Source ID: `site-docs-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Cluster Toolkit Guides Send feedback Reconfigure a GKE cluster Stay organized with collections Save and categorize content based on your preferences.
- Reconfigure the cluster For GKE clusters, you can update the cluster as follows: Edit the deployment blueprint to update the supported parameters.
- You can't update the GKE version by using the Cluster Toolkit.
- You can also replace this parameter with autoscaling total min nodes and autoscaling total max nodes to switch your cluster from a static to an autocale nodepool. disk size gb in a nodepool Use this parameter to adjust the size of the disk attached to each node to meet your workload requirements.

### Cluster blueprint \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- PSA is a best practice for Filestore instances, but can be optionally removed by deleting the private service access module and any references to the module by Filestore modules. https://cloud.google.com/vpc/docs/configure-private-services-access#permissions - id : private service access source : modules/network/private-service-access use : [ network ] - id : controller sa source : modules/project/service-account settings : name : controller project roles : - compute.instanceAdmin.v1 - iam.serviceAccountUser - logging.logWriter - monitoring.metricWriter - pubsub.admin - storage.objectViewer - id : login sa source : modules/project/service-account settings : name : login project roles : - logging.logWriter - monitoring.metricWriter - storage.objectViewer - id : compute sa source : modules/project/service-account settings : name : compute project roles : - logging.logWriter - monitoring.metricWriter - storage.objectCreator - id : homefs source : modules/file-system/filestore use : [ network , private service access ] settings : local mount : /home - id : projectsfs source : modules/file-system/filestore use : [ network , private service access ] settings : local mount : /projects - id : lustre-gcp source : modules/file-system/managed-lustre use : [ network , private service access ] settings : name : $(vars.lustre instance id) local mount : /lustre remote mount : lustrefs size gib : 36000 - id : n2 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 4 machine type : n2-standard-2 instance image : $(vars.slurm image) allow automatic updates : false - id : n2 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ n2 nodeset ] settings : partition name : n2 exclusive : false # allows nodes to stay up after jobs are done is default : true partition conf : SuspendTime : 300 # time (in secs) the nodes in this partition stay active after their tasks have completed - id : c2 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 20 machine type : c2-standard-60 # this is the default bandwidth tier : tier 1 enabled instance image : $(vars.slurm image) disk type : pd-ssd disk size gb : 100 allow automatic updates : false use -p c2 to submit jobs to this partition: ex: srun -p c2 -N 1 hostname - id : c2 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ c2 nodeset ] settings : partition name : c2 the following two are true by default exclusive : true - id : c2d nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 20 machine type : c2d-standard-112 instance image : $(vars.slurm image) bandwidth tier : tier 1 enabled disk type : pd-ssd disk size gb : 100 allow automatic updates : false - id : c2d partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ c2d nodeset ] settings : partition name : c2d - id : c3 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 20 machine type : c3-highcpu-176 instance image : $(vars.slurm image) bandwidth tier : tier 1 enabled disk type : pd-ssd disk size gb : 100 allow automatic updates : false - id : c3 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ c3 nodeset ] settings : partition name : c3 - id : a2 8 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 16 machine type : a2-ultragpu-8g This makes this nodeset look for machines in any of the following zones https://github.com/GoogleCloudPlatform/hpc-toolkit/tree/develop/community/modules/compute/schedmd-slurm-gcp-v6-nodeset#compute-vm-zone-policies zones : $(vars.gpu zones) bandwidth tier : gvnic enabled instance image : $(vars.slurm image) disk type : pd-ssd disk size gb : 100 node conf : SocketsPerBoard : 2 CoresPerSocket : 24 allow automatic updates : false use -p a208 to submit jobs to this partition: ex: srun -p a208 --gpus-per-node=8 -N 1 nvidia-smi - id : a2 8 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ a2 8 nodeset ] settings : partition name : a208 The following allows users to use more host memory without specifying cpus on a job partition conf : DefMemPerGPU : 160000 DefMemPerCPU : null - id : a2 16 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 16 machine type : a2-megagpu-16g This makes this nodeset look for machines in any of the following zones https://github.com/GoogleCloudPlatform/hpc-toolkit/tree/develop/community/modules/compute/schedmd-slurm-gcp-v6-nodeset#compute-vm-zone-policies // !!! zones : $(vars.gpu zones) bandwidth tier : gvnic enabled instance image : $(vars.slurm image) disk type : pd-ssd disk size gb : 100 node conf : SocketsPerBoard : 2 CoresPerSocket : 24 allow automatic updates : false use -p a216 to submit jobs to this partition: ex: srun -p a216 --gpus-per-node=16 -N 1 nvidia-smi - id : a2 16 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ a2 16 nodeset ] settings : partition name : a216 The following allows users to use more host memory without specifying cpus on a job partition conf : DefMemPerGPU : 160000 DefMemPerCPU : null - id : h3 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 16 Note that H3 is available in only specific zones. https://cloud.google.com/compute/docs/regions-zones machine type : h3-standard-88 bandwidth tier : gvnic enabled # https://cloud.google.com/compute/docs/compute-optimized-machines#h3 network instance image : $(vars.slurm image) H3 does not support pd-ssd and pd-standard https://cloud.google.com/compute/docs/compute-optimized-machines#h3 disks disk type : pd-balanced disk size gb : 100 allow automatic updates : false use -p h3 to submit jobs to this partition: ex: srun -p h3 -N 1 hostname - id : h3 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ h3 nodeset ] settings : partition name : h3 - id : slurm login source : community/modules/scheduler/schedmd-slurm-gcp-v6-login use : [ network , login sa ] settings : instance image : $(vars.slurm image) machine type : n2-standard-4 we recommend disabling public IPs if possible but that requires your network to have a NAT or private access configured enable login public ips : true - id : slurm controller source : community/modules/scheduler/schedmd-slurm-gcp-v6-controller use : [ network , controller sa , homefs , projectsfs , lustre-gcp , slurm login , n2 partition , c2 partition , c2d partition , c3 partition , a2 8 partition , a2 16 partition , h3 partition ] settings : instance image : $(vars.slurm image) the following allow for longer boot time which is useful for large GPU nodes cloud parameters : no comma params : false resume rate : 0 resume timeout : 600 suspend rate : 0 suspend timeout : 600 we recommend disabling public IPs if possible but that requires your network to have a NAT or private access configured enable controller public ips : true - id : hpc dashboard source : modules/monitoring/dashboard outputs : [ instructions ] Request additional quotas You might need to request additional quota to be able to deploy and use your cluster.
- PSA is a best practice for Filestore instances, but can be optionally removed by deleting the private service access module and any references to the module by Filestore modules. https://cloud.google.com/vpc/docs/configure-private-services-access#permissions - id : private service access source : modules/network/private-service-access use : [ network ] - id : homefs source : modules/file-system/filestore use : [ network , private service access ] settings : local mount : /home - id : debug nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network ] settings : node count dynamic max : 4 machine type : n2-standard-2 allow automatic updates : false - id : debug partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : - debug nodeset settings : partition name : debug exclusive : false # allows nodes to stay up after jobs are done is default : true - id : compute nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network ] settings : node count dynamic max : 20 bandwidth tier : gvnic enabled allow automatic updates : false - id : compute partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : - compute nodeset settings : partition name : compute - id : h3 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network ] settings : node count dynamic max : 20 Note that H3 is available in only specific zones. https://cloud.google.com/compute/docs/regions-zones machine type : h3-standard-88 H3 does not support pd-ssd and pd-standard https://cloud.google.com/compute/docs/compute-optimized-machines#h3 disks disk type : pd-balanced bandwidth tier : gvnic enabled allow automatic updates : false - id : h3 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : - h3 nodeset settings : partition name : h3 - id : slurm login source : community/modules/scheduler/schedmd-slurm-gcp-v6-login use : [ network ] settings : machine type : n2-standard-4 enable login public ips : true - id : slurm controller source : community/modules/scheduler/schedmd-slurm-gcp-v6-controller use : - network - debug partition - compute partition - h3 partition - homefs - slurm login settings : enable controller public ips : true Example 2 Deploys a cluster with Slurm that has a tiered file systems for higher performance.
- See the License for the specific language governing permissions and limitations under the License. --- blueprint name : hpc-enterprise-slurm-v6 vars : project id : ## Set GCP Project ID Here ## deployment name : hpc01 region : us-central1 zone : us-central1-a gpu zones : [ us-central1-a , us-central1-b , us-central1-c , us-central1-f ] lustre instance id : lustre-hpc slurm image : Visit https://github.com/GoogleCloudPlatform/slurm-gcp/blob/master/docs/images.md#published-image-family for a list of valid family options with Slurm family : slurm-gcp-6-12-hpc-rocky-linux-8 project : schedmd-slurm-public If image above is changed to use custom image, then setting below must be set to true instance image custom : false metadata : # Workaround for https://github.com/GoogleCloudPlatform/cluster-toolkit/discussions/3243 VmDnsSetting : GlobalOnly Recommended to use GCS backend for Terraform state See https://github.com/GoogleCloudPlatform/hpc-toolkit/tree/main/examples#optional-setting-up-a-remote-terraform-state terraform backend defaults: type: gcs configuration: bucket: <<BUCKET NAME> > Documentation for each of the modules used below can be found at https://github.com/GoogleCloudPlatform/hpc-toolkit/blob/main/modules/README.md deployment groups : - group : primary modules : Source is an embedded module, denoted by "modules/ " without ./, ../, / as a prefix.
- For example if you set the following: toolkit modules url: github.com/GoogleCloudPlatform/cluster-toolkit toolkit modules version: v1.38.0 A module that is specified as source: modules/compute/vm-instance is updated to the following in the deployment folder: source: github.com/GoogleCloudPlatform/cluster-toolkit//modules/compute/vm-instance?ref=v1.38.0&depth=1 Cluster blueprint examples To get started, you can use one of the following cluster blueprint examples.

