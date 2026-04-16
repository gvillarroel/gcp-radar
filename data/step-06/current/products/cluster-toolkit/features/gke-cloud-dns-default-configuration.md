---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.425Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "GKE cloud DNS default configuration"
feature_slug: "gke-cloud-dns-default-configuration"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files"
keywords:
  - "gke"
  - "dns"
  - "default"
  - "configuration"
  - "the"
  - "cluster"
  - "module"
  - "defaults"
---

# GKE cloud DNS default configuration

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

The gke-cluster module defaults cloud_dns_config to KUBE_DNS with CoreDNS support.

## Extended Definition

The gke-cluster module defaults cloud_dns_config to KUBE_DNS with CoreDNS support.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint)
- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files)

## Supporting Pages

### Cluster blueprint \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. --- blueprint name : hpc-enterprise-slurm-v6 vars : project id : ## Set GCP Project ID Here ## deployment name : hpc01 region : us-central1 zone : us-central1-a gpu zones : [ us-central1-a , us-central1-b , us-central1-c , us-central1-f ] lustre instance id : lustre-hpc slurm image : Visit https://github.com/GoogleCloudPlatform/slurm-gcp/blob/master/docs/images.md#published-image-family for a list of valid family options with Slurm family : slurm-gcp-6-12-hpc-rocky-linux-8 project : schedmd-slurm-public If image above is changed to use custom image, then setting below must be set to true instance image custom : false metadata : # Workaround for https://github.com/GoogleCloudPlatform/cluster-toolkit/discussions/3243 VmDnsSetting : GlobalOnly Recommended to use GCS backend for Terraform state See https://github.com/GoogleCloudPlatform/hpc-toolkit/tree/main/examples#optional-setting-up-a-remote-terraform-state terraform backend defaults: type: gcs configuration: bucket: <<BUCKET NAME> > Documentation for each of the modules used below can be found at https://github.com/GoogleCloudPlatform/hpc-toolkit/blob/main/modules/README.md deployment groups : - group : primary modules : Source is an embedded module, denoted by "modules/ " without ./, ../, / as a prefix.
- The following configuration enables remote state for all deployment groups in a blueprint: terraform backend defaults: type: gcs configuration: bucket: BUCKET NAME For more information about advanced Terraform remote state configuration, see the Cluster Toolkit GitHub repository .
- PSA is a best practice for Filestore instances, but can be optionally removed by deleting the private service access module and any references to the module by Filestore modules. https://cloud.google.com/vpc/docs/configure-private-services-access#permissions - id : private service access source : modules/network/private-service-access use : [ network ] - id : controller sa source : modules/project/service-account settings : name : controller project roles : - compute.instanceAdmin.v1 - iam.serviceAccountUser - logging.logWriter - monitoring.metricWriter - pubsub.admin - storage.objectViewer - id : login sa source : modules/project/service-account settings : name : login project roles : - logging.logWriter - monitoring.metricWriter - storage.objectViewer - id : compute sa source : modules/project/service-account settings : name : compute project roles : - logging.logWriter - monitoring.metricWriter - storage.objectCreator - id : homefs source : modules/file-system/filestore use : [ network , private service access ] settings : local mount : /home - id : projectsfs source : modules/file-system/filestore use : [ network , private service access ] settings : local mount : /projects - id : lustre-gcp source : modules/file-system/managed-lustre use : [ network , private service access ] settings : name : $(vars.lustre instance id) local mount : /lustre remote mount : lustrefs size gib : 36000 - id : n2 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 4 machine type : n2-standard-2 instance image : $(vars.slurm image) allow automatic updates : false - id : n2 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ n2 nodeset ] settings : partition name : n2 exclusive : false # allows nodes to stay up after jobs are done is default : true partition conf : SuspendTime : 300 # time (in secs) the nodes in this partition stay active after their tasks have completed - id : c2 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 20 machine type : c2-standard-60 # this is the default bandwidth tier : tier 1 enabled instance image : $(vars.slurm image) disk type : pd-ssd disk size gb : 100 allow automatic updates : false use -p c2 to submit jobs to this partition: ex: srun -p c2 -N 1 hostname - id : c2 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ c2 nodeset ] settings : partition name : c2 the following two are true by default exclusive : true - id : c2d nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 20 machine type : c2d-standard-112 instance image : $(vars.slurm image) bandwidth tier : tier 1 enabled disk type : pd-ssd disk size gb : 100 allow automatic updates : false - id : c2d partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ c2d nodeset ] settings : partition name : c2d - id : c3 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 20 machine type : c3-highcpu-176 instance image : $(vars.slurm image) bandwidth tier : tier 1 enabled disk type : pd-ssd disk size gb : 100 allow automatic updates : false - id : c3 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ c3 nodeset ] settings : partition name : c3 - id : a2 8 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 16 machine type : a2-ultragpu-8g This makes this nodeset look for machines in any of the following zones https://github.com/GoogleCloudPlatform/hpc-toolkit/tree/develop/community/modules/compute/schedmd-slurm-gcp-v6-nodeset#compute-vm-zone-policies zones : $(vars.gpu zones) bandwidth tier : gvnic enabled instance image : $(vars.slurm image) disk type : pd-ssd disk size gb : 100 node conf : SocketsPerBoard : 2 CoresPerSocket : 24 allow automatic updates : false use -p a208 to submit jobs to this partition: ex: srun -p a208 --gpus-per-node=8 -N 1 nvidia-smi - id : a2 8 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ a2 8 nodeset ] settings : partition name : a208 The following allows users to use more host memory without specifying cpus on a job partition conf : DefMemPerGPU : 160000 DefMemPerCPU : null - id : a2 16 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 16 machine type : a2-megagpu-16g This makes this nodeset look for machines in any of the following zones https://github.com/GoogleCloudPlatform/hpc-toolkit/tree/develop/community/modules/compute/schedmd-slurm-gcp-v6-nodeset#compute-vm-zone-policies // !!! zones : $(vars.gpu zones) bandwidth tier : gvnic enabled instance image : $(vars.slurm image) disk type : pd-ssd disk size gb : 100 node conf : SocketsPerBoard : 2 CoresPerSocket : 24 allow automatic updates : false use -p a216 to submit jobs to this partition: ex: srun -p a216 --gpus-per-node=16 -N 1 nvidia-smi - id : a2 16 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ a2 16 nodeset ] settings : partition name : a216 The following allows users to use more host memory without specifying cpus on a job partition conf : DefMemPerGPU : 160000 DefMemPerCPU : null - id : h3 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 16 Note that H3 is available in only specific zones. https://cloud.google.com/compute/docs/regions-zones machine type : h3-standard-88 bandwidth tier : gvnic enabled # https://cloud.google.com/compute/docs/compute-optimized-machines#h3 network instance image : $(vars.slurm image) H3 does not support pd-ssd and pd-standard https://cloud.google.com/compute/docs/compute-optimized-machines#h3 disks disk type : pd-balanced disk size gb : 100 allow automatic updates : false use -p h3 to submit jobs to this partition: ex: srun -p h3 -N 1 hostname - id : h3 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ h3 nodeset ] settings : partition name : h3 - id : slurm login source : community/modules/scheduler/schedmd-slurm-gcp-v6-login use : [ network , login sa ] settings : instance image : $(vars.slurm image) machine type : n2-standard-4 we recommend disabling public IPs if possible but that requires your network to have a NAT or private access configured enable login public ips : true - id : slurm controller source : community/modules/scheduler/schedmd-slurm-gcp-v6-controller use : [ network , controller sa , homefs , projectsfs , lustre-gcp , slurm login , n2 partition , c2 partition , c2d partition , c3 partition , a2 8 partition , a2 16 partition , h3 partition ] settings : instance image : $(vars.slurm image) the following allow for longer boot time which is useful for large GPU nodes cloud parameters : no comma params : false resume rate : 0 resume timeout : 600 suspend rate : 0 suspend timeout : 600 we recommend disabling public IPs if possible but that requires your network to have a NAT or private access configured enable controller public ips : true - id : hpc dashboard source : modules/monitoring/dashboard outputs : [ instructions ] Request additional quotas You might need to request additional quota to be able to deploy and use your cluster.
- PSA is a best practice for Filestore instances, but can be optionally removed by deleting the private service access module and any references to the module by Filestore modules. https://cloud.google.com/vpc/docs/configure-private-services-access#permissions - id : private service access source : modules/network/private-service-access use : [ network ] - id : homefs source : modules/file-system/filestore use : [ network , private service access ] settings : local mount : /home - id : debug nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network ] settings : node count dynamic max : 4 machine type : n2-standard-2 allow automatic updates : false - id : debug partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : - debug nodeset settings : partition name : debug exclusive : false # allows nodes to stay up after jobs are done is default : true - id : compute nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network ] settings : node count dynamic max : 20 bandwidth tier : gvnic enabled allow automatic updates : false - id : compute partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : - compute nodeset settings : partition name : compute - id : h3 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network ] settings : node count dynamic max : 20 Note that H3 is available in only specific zones. https://cloud.google.com/compute/docs/regions-zones machine type : h3-standard-88 H3 does not support pd-ssd and pd-standard https://cloud.google.com/compute/docs/compute-optimized-machines#h3 disks disk type : pd-balanced bandwidth tier : gvnic enabled allow automatic updates : false - id : h3 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : - h3 nodeset settings : partition name : h3 - id : slurm login source : community/modules/scheduler/schedmd-slurm-gcp-v6-login use : [ network ] settings : machine type : n2-standard-4 enable login public ips : true - id : slurm controller source : community/modules/scheduler/schedmd-slurm-gcp-v6-controller use : - network - debug partition - compute partition - h3 partition - homefs - slurm login settings : enable controller public ips : true Example 2 Deploys a cluster with Slurm that has a tiered file systems for higher performance.

### "Deploy an A3 Mega GKE cluster for ML training \_|\_ Cluster Toolkit \_|\_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- In the examples/gke-a3-megagpu/gke-a3-megagpu-deployment.yaml file, fill in the following settings in the terraform backend defaults and vars sections to match the specific values for your deployment: DEPLOYMENT NAME : a unique name for the deployment.
- To go to the main Cluster Toolkit blueprint's working directory, run the following command from the CLI. cd cluster-toolkit Create a Cloud Storage bucket to store the state of the Terraform deployment: gcloud storage buckets create gs:// BUCKET NAME \ --default-storage-class = STANDARD \ --project = PROJECT ID \ --location = COMPUTE REGION TERRAFORM STATE \ --uniform-bucket-level-access gcloud storage buckets update gs:// BUCKET NAME --versioning Replace the following variables: BUCKET NAME : the name of the new Cloud Storage bucket.
- Clean up resources created by Cluster Toolkit To avoid recurring charges for the resources used on this page, clean up the resources provisioned by Cluster Toolkit, including the VPC networks and GKE cluster: cd /cluster-toolkit ./gcluster destroy CLUSTER NAME / Replace CLUSTER NAME with the name of your cluster.
- Deploy the blueprint to provision the GKE infrastructure using A3 Mega machine types: cd /cluster-toolkit ./gcluster deploy -d \ examples/gke-a3-megagpu/gke-a3-megagpu-deployment.yaml \ examples/gke-a3-megagpu/gke-a3-megagpu.yaml When prompted, select (A)pply to deploy the blueprint.

### Reconfigure a GKE cluster \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- To make basic configuration changes to the deployed Google Kubernetes Engine (GKE) resources, it is recommended that you edit and redeploy the blueprint.
- Reconfigure the cluster For GKE clusters, you can update the cluster as follows: Edit the deployment blueprint to update the supported parameters.
- Limitations The following changes can't be made by editing the blueprint: You can't switch from a zonal to a regional GKE cluster.
- You can't update the GKE version by using the Cluster Toolkit.

### Cluster deployment files \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Common use cases for using deployment files include the following: Specifying a deployment name that must be unique to each deployment Specifying project id , region , or zone that might vary across deployments Specifying an alternative Terraform remote state configuration What can be specified in a deployment file The following shows the parameters that can be set in a deployment file. vars: project id: PROJECT ID deployment name: DEPLOYMENT NAME region: REGION zone: ZONE terraform backend defaults: type: gcs configuration: bucket: BUCKET NAME Using deployment files Deployment files are supported in Cluster Toolkit v1.29.0 and later.
- Variable precedence For variables that are specified in the vars section of blueprints and deployment files, the following precedence is enforced: If a variable is specified in both the deployment file and blueprint, the value in the deployment file takes precedence If a variable is specified in the deployment file and the --vars flag of gcluster create or gcluster deploy commands, then the value supplied in the --vars flag takes precedence Any variable that isn't specified in the deployment file or --vars flag, uses the value from the blueprint If terraform backend defaults is set in a deployment file, then it replaces all terraform backend defaults settings in the blueprint.
- Deployment files are an optional feature that modify a blueprint's configuration without changing the underlying Terraform and Packer modules.
- Cluster blueprints represent patterns of infrastructure that you might need to deploy multiple times for different purposes or with different configurations.

