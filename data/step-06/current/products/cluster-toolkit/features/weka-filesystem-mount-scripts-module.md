---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.443Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "WEKA filesystem mount scripts module"
feature_slug: "weka-filesystem-mount-scripts-module"
latest_feature_date: "2025-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/support-matrix"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4"
keywords:
  - "weka"
  - "filesystem"
  - "mount"
  - "scripts"
  - "module"
  - "cluster"
  - "toolkit"
  - "adds"
---

# WEKA filesystem mount scripts module

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

Cluster Toolkit adds a module that provides mount scripts for WEKA filesystems.

## Extended Definition

Cluster Toolkit adds a module that provides mount scripts for WEKA filesystems.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/support-matrix](https://docs.cloud.google.com/cluster-toolkit/docs/support-matrix)
- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint)
- [https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo](https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo)
- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4)

## Supporting Pages

### Supported modules \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/support-matrix](https://docs.cloud.google.com/cluster-toolkit/docs/support-matrix)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported schedulers The following schedulers are supported: Batch Google Kubernetes Engine (GKE) HTCondor PBS Professional Slurm Supported Compute Engine resources The following features are supported for Compute Engine resources : VM creation - many of the core VM customization options are supported including, but not limited to, the following: Machine type options: all machine types VM instance placement policy options: both compact and spread placement policies GPU integration: all GPU types Advanced networking: all options including gVNIC support and Tier 1 higher bandwidths Service account setup Disabling simultaneous multithreading (SMT) Startup scripts Spot VMs Supported monitoring options The following tools are supported for collecting measurements of your service and Google Cloud resources: Cloud Monitoring Supported networking resources The following features are supported for Virtual Private Cloud (VPC) resources : Create a new VPC network Integrate with existing VPC networks Supported software installation and system setup Cluster Toolkit can be used for the following use cases: Automation of application installations by using Spack Ansible installation GPU accelerated Chrome Remote Desktop Google Cloud Observability Ops Agent installation and setup Network File System (NFS) client installation and automatic mounting Custom image building automation with Packer What's next Review how to prepare your cluster blueprint .
- Home Documentation Compute Cluster Toolkit Guides Send feedback Supported modules Stay organized with collections Save and categorize content based on your preferences.
- For a complete list of supported modules including the experimental options, see the modules page on the Cluster Toolkit GitHub repository documentation.
- This document outlines the core supported module options for Cluster Toolkit v1.3.0 or higher.

### Cluster blueprint \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- PSA is a best practice for Filestore instances, but can be optionally removed by deleting the private service access module and any references to the module by Filestore modules. https://cloud.google.com/vpc/docs/configure-private-services-access#permissions - id : private service access source : modules/network/private-service-access use : [ network ] - id : controller sa source : modules/project/service-account settings : name : controller project roles : - compute.instanceAdmin.v1 - iam.serviceAccountUser - logging.logWriter - monitoring.metricWriter - pubsub.admin - storage.objectViewer - id : login sa source : modules/project/service-account settings : name : login project roles : - logging.logWriter - monitoring.metricWriter - storage.objectViewer - id : compute sa source : modules/project/service-account settings : name : compute project roles : - logging.logWriter - monitoring.metricWriter - storage.objectCreator - id : homefs source : modules/file-system/filestore use : [ network , private service access ] settings : local mount : /home - id : projectsfs source : modules/file-system/filestore use : [ network , private service access ] settings : local mount : /projects - id : lustre-gcp source : modules/file-system/managed-lustre use : [ network , private service access ] settings : name : $(vars.lustre instance id) local mount : /lustre remote mount : lustrefs size gib : 36000 - id : n2 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 4 machine type : n2-standard-2 instance image : $(vars.slurm image) allow automatic updates : false - id : n2 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ n2 nodeset ] settings : partition name : n2 exclusive : false # allows nodes to stay up after jobs are done is default : true partition conf : SuspendTime : 300 # time (in secs) the nodes in this partition stay active after their tasks have completed - id : c2 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 20 machine type : c2-standard-60 # this is the default bandwidth tier : tier 1 enabled instance image : $(vars.slurm image) disk type : pd-ssd disk size gb : 100 allow automatic updates : false use -p c2 to submit jobs to this partition: ex: srun -p c2 -N 1 hostname - id : c2 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ c2 nodeset ] settings : partition name : c2 the following two are true by default exclusive : true - id : c2d nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 20 machine type : c2d-standard-112 instance image : $(vars.slurm image) bandwidth tier : tier 1 enabled disk type : pd-ssd disk size gb : 100 allow automatic updates : false - id : c2d partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ c2d nodeset ] settings : partition name : c2d - id : c3 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 20 machine type : c3-highcpu-176 instance image : $(vars.slurm image) bandwidth tier : tier 1 enabled disk type : pd-ssd disk size gb : 100 allow automatic updates : false - id : c3 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ c3 nodeset ] settings : partition name : c3 - id : a2 8 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 16 machine type : a2-ultragpu-8g This makes this nodeset look for machines in any of the following zones https://github.com/GoogleCloudPlatform/hpc-toolkit/tree/develop/community/modules/compute/schedmd-slurm-gcp-v6-nodeset#compute-vm-zone-policies zones : $(vars.gpu zones) bandwidth tier : gvnic enabled instance image : $(vars.slurm image) disk type : pd-ssd disk size gb : 100 node conf : SocketsPerBoard : 2 CoresPerSocket : 24 allow automatic updates : false use -p a208 to submit jobs to this partition: ex: srun -p a208 --gpus-per-node=8 -N 1 nvidia-smi - id : a2 8 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ a2 8 nodeset ] settings : partition name : a208 The following allows users to use more host memory without specifying cpus on a job partition conf : DefMemPerGPU : 160000 DefMemPerCPU : null - id : a2 16 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 16 machine type : a2-megagpu-16g This makes this nodeset look for machines in any of the following zones https://github.com/GoogleCloudPlatform/hpc-toolkit/tree/develop/community/modules/compute/schedmd-slurm-gcp-v6-nodeset#compute-vm-zone-policies // !!! zones : $(vars.gpu zones) bandwidth tier : gvnic enabled instance image : $(vars.slurm image) disk type : pd-ssd disk size gb : 100 node conf : SocketsPerBoard : 2 CoresPerSocket : 24 allow automatic updates : false use -p a216 to submit jobs to this partition: ex: srun -p a216 --gpus-per-node=16 -N 1 nvidia-smi - id : a2 16 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ a2 16 nodeset ] settings : partition name : a216 The following allows users to use more host memory without specifying cpus on a job partition conf : DefMemPerGPU : 160000 DefMemPerCPU : null - id : h3 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network , compute sa ] settings : node count dynamic max : 16 Note that H3 is available in only specific zones. https://cloud.google.com/compute/docs/regions-zones machine type : h3-standard-88 bandwidth tier : gvnic enabled # https://cloud.google.com/compute/docs/compute-optimized-machines#h3 network instance image : $(vars.slurm image) H3 does not support pd-ssd and pd-standard https://cloud.google.com/compute/docs/compute-optimized-machines#h3 disks disk type : pd-balanced disk size gb : 100 allow automatic updates : false use -p h3 to submit jobs to this partition: ex: srun -p h3 -N 1 hostname - id : h3 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : [ h3 nodeset ] settings : partition name : h3 - id : slurm login source : community/modules/scheduler/schedmd-slurm-gcp-v6-login use : [ network , login sa ] settings : instance image : $(vars.slurm image) machine type : n2-standard-4 we recommend disabling public IPs if possible but that requires your network to have a NAT or private access configured enable login public ips : true - id : slurm controller source : community/modules/scheduler/schedmd-slurm-gcp-v6-controller use : [ network , controller sa , homefs , projectsfs , lustre-gcp , slurm login , n2 partition , c2 partition , c2d partition , c3 partition , a2 8 partition , a2 16 partition , h3 partition ] settings : instance image : $(vars.slurm image) the following allow for longer boot time which is useful for large GPU nodes cloud parameters : no comma params : false resume rate : 0 resume timeout : 600 suspend rate : 0 suspend timeout : 600 we recommend disabling public IPs if possible but that requires your network to have a NAT or private access configured enable controller public ips : true - id : hpc dashboard source : modules/monitoring/dashboard outputs : [ instructions ] Request additional quotas You might need to request additional quota to be able to deploy and use your cluster.
- PSA is a best practice for Filestore instances, but can be optionally removed by deleting the private service access module and any references to the module by Filestore modules. https://cloud.google.com/vpc/docs/configure-private-services-access#permissions - id : private service access source : modules/network/private-service-access use : [ network ] - id : homefs source : modules/file-system/filestore use : [ network , private service access ] settings : local mount : /home - id : debug nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network ] settings : node count dynamic max : 4 machine type : n2-standard-2 allow automatic updates : false - id : debug partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : - debug nodeset settings : partition name : debug exclusive : false # allows nodes to stay up after jobs are done is default : true - id : compute nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network ] settings : node count dynamic max : 20 bandwidth tier : gvnic enabled allow automatic updates : false - id : compute partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : - compute nodeset settings : partition name : compute - id : h3 nodeset source : community/modules/compute/schedmd-slurm-gcp-v6-nodeset use : [ network ] settings : node count dynamic max : 20 Note that H3 is available in only specific zones. https://cloud.google.com/compute/docs/regions-zones machine type : h3-standard-88 H3 does not support pd-ssd and pd-standard https://cloud.google.com/compute/docs/compute-optimized-machines#h3 disks disk type : pd-balanced bandwidth tier : gvnic enabled allow automatic updates : false - id : h3 partition source : community/modules/compute/schedmd-slurm-gcp-v6-partition use : - h3 nodeset settings : partition name : h3 - id : slurm login source : community/modules/scheduler/schedmd-slurm-gcp-v6-login use : [ network ] settings : machine type : n2-standard-4 enable login public ips : true - id : slurm controller source : community/modules/scheduler/schedmd-slurm-gcp-v6-controller use : - network - debug partition - compute partition - h3 partition - homefs - slurm login settings : enable controller public ips : true Example 2 Deploys a cluster with Slurm that has a tiered file systems for higher performance.
- See the License for the specific language governing permissions and limitations under the License. --- blueprint name : hpc-enterprise-slurm-v6 vars : project id : ## Set GCP Project ID Here ## deployment name : hpc01 region : us-central1 zone : us-central1-a gpu zones : [ us-central1-a , us-central1-b , us-central1-c , us-central1-f ] lustre instance id : lustre-hpc slurm image : Visit https://github.com/GoogleCloudPlatform/slurm-gcp/blob/master/docs/images.md#published-image-family for a list of valid family options with Slurm family : slurm-gcp-6-12-hpc-rocky-linux-8 project : schedmd-slurm-public If image above is changed to use custom image, then setting below must be set to true instance image custom : false metadata : # Workaround for https://github.com/GoogleCloudPlatform/cluster-toolkit/discussions/3243 VmDnsSetting : GlobalOnly Recommended to use GCS backend for Terraform state See https://github.com/GoogleCloudPlatform/hpc-toolkit/tree/main/examples#optional-setting-up-a-remote-terraform-state terraform backend defaults: type: gcs configuration: bucket: <<BUCKET NAME> > Documentation for each of the modules used below can be found at https://github.com/GoogleCloudPlatform/hpc-toolkit/blob/main/modules/README.md deployment groups : - group : primary modules : Source is an embedded module, denoted by "modules/ " without ./, ../, / as a prefix.
- For example if you set the following: toolkit modules url: github.com/GoogleCloudPlatform/cluster-toolkit toolkit modules version: v1.38.0 A module that is specified as source: modules/compute/vm-instance is updated to the following in the deployment folder: source: github.com/GoogleCloudPlatform/cluster-toolkit//modules/compute/vm-instance?ref=v1.38.0&depth=1 Cluster blueprint examples To get started, you can use one of the following cluster blueprint examples.

### "Enable GPUDirect-TCPXO optimized NCCL communication \_|\_ Cluster Toolkit\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo](https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Cluster Toolkit Guides Send feedback Enable GPUDirect-TCPXO optimized NCCL communication Stay organized with collections Save and categorize content based on your preferences.
- A3 Mega Slurm clusters that are created by using Cluster Toolkit version 1.39.0 or later have automatic integration of topology aware scheduling.
- Before you begin You need to have an A3 Mega Slurm cluster that was created by using Cluster Toolkit version v1.51.1 or later.
- Slurm would otherwise only pass these env vars to the job environment on the host. shellcheck disable=SC2001 HOST VARS = $( sed 's/ \{1,\}/,/g' <<< " ${ !NCCL } " ) Mount /var/tmp to allow the rest of the enroot container to be read-only, and mount current $PWD to /nccl to for accessing nccl-tests binary CONTAINER MOUNTS = "/var/tmp:/var/tmp" Mount PWD to /nccl in the enroot container CONTAINER MOUNTS = ${ CONTAINER MOUNTS } , " $PWD :/nccl" Mount required directories for GPUDirect-TCPXO functionality CONTAINER MOUNTS = ${ CONTAINER MOUNTS } , "/var/lib/tcpxo/lib64/" Run the workload srun -l \ -N " ${ SLURM NNODES } " \ --mpi = pmi2 \ --ntasks-per-node = 8 \ --container-image = " ${ CONTAINER IMAGE } " \ --container-env = " ${ HOST VARS } " \ --container-mounts = " ${ CONTAINER MOUNTS } " \ sh -c " export LD LIBRARY PATH=/var/lib/tcpxo/lib64:/usr/lib/x86 64-linux-gnu:\$LD LIBRARY PATH; /nccl/nccl-tests/build/all gather perf -b 8M -e 8G -f 2 -g 1 -w 5 --iters 200; " Submit the script. sbatch run-nccl-tests.sh This results in a slurm-XX.out file that contains the results of the nccl all gather perf benchmark.

### "Create an AI-optimized Slurm cluster with A4 VMs \_|\_ Cluster Toolkit \_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Sets up a Cloud Storage bucket to store Cluster Toolkit modules.
- Download the gcluster bundle linux.zip file by using the curl command: curl -LO https://github.com/GoogleCloudPlatform/cluster-toolkit/releases/download/${TAG}/gcluster bundle linux.zip Extract the bundle files to a new gcluster-bundle directory: unzip gcluster bundle linux.zip -d gcluster-bundle Go to the gcluster-bundle directory: cd gcluster-bundle Make the binary gcluster file: chmod +x gcluster To verify the installation, run the following command: ./gcluster --version After installing the binary, you are now ready to deploy clusters to run your jobs or workloads.
- On Google Cloud, you can create a Cloud Storage bucket that has versioning enabled. gcloud storage buckets create gs://${GOOGLE CLOUD BUCKET NAME} \ --project=${A4 RESERVATION PROJECT ID} \ --default-storage-class=STANDARD \ --location=${GOOGLE CLOUD BUCKET LOCATION} \ --uniform-bucket-level-access gcloud storage buckets update gs://${GOOGLE CLOUD BUCKET NAME} --versioning Set up the Cluster Toolkit To create a Slurm cluster in a Google Cloud project, you can use Cluster Toolkit to handle deploying and provisioning the cluster.
- Create a deployment file In the Cluster Toolkit directory, create your Slurm deployment YAML file. nano ${A4 DEPLOYMENT FILE NAME}.yaml Paste the following content into the YAML file. --- terraform backend defaults: type: gcs configuration: bucket: GOOGLE CLOUD BUCKET NAME vars: deployment name: A4 DEPLOYMENT FILE NAME project id: A4 RESERVATION PROJECT ID region: A4 REGION zone: A4 ZONE a4h reservation name: A4 RESERVATION NAME a4h cluster size: 1 To save and exit the file, press Ctrl+O > Enter > Ctrl+X .

