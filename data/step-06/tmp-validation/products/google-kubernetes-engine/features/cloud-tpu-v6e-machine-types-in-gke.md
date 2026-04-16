---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.198Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Cloud TPU v6e machine types in GKE"
feature_slug: "cloud-tpu-v6e-machine-types-in-gke"
latest_feature_date: "2024-11-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
keywords:
  - "ct6e"
  - "available"
  - "standard"
  - "types"
  - "machine"
---

# Cloud TPU v6e machine types in GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Cloud TPU v6e ct6e-standard machine types are available for supported GKE clusters in selected zones.

## Extended Definition

Cloud TPU v6e ct6e-standard machine types are available for supported GKE clusters in selected zones.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)

## Supporting Pages

### "Fine-tune a LLM using TPUs on GKE with JAX \_|\_ GKE AI/ML \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax)
- Source ID: `site-docs-reference-required-4`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : jax-gemma3-train-multihost spec : replicatedJobs : - name : trainers replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 1 template : metadata : annotations : gke-gcsfuse/volumes : "true" spec : serviceAccountName : jaxserviceaccout nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v6e-slice cloud.google.com/gke-tpu-topology : 2x4 cloud.google.com/gke-nodepool : jax-tpu-multihost1 containers : - name : training-container image : ${IMAGE URI} imagePullPolicy : "Always" ports : - containerPort : 8471 command : [ "python" , "Gemma3LLMTrain.py" , "--maxlen" , "256" , "--batch size" , "64" , "--datacount" , "5120" ] resources : limits : google.com/tpu : 4 volumeMounts : - name : gcs-fuse-csi-ephemeral mountPath : /data volumes : - name : gcs-fuse-csi-ephemeral csi : driver : gcsfuse.csi.storage.gke.io volumeAttributes : bucketName : ${GCS BUCKET NAME} mountOptions : "implicit-dirs,file-cache:enable-parallel-downloads:true,file-cache:parallel-downloads-per-file:100,file-cache:max-parallel-downloads:-1,file-cache:download-chunk-size-mb:10,file-cache:max-size-mb:-1" Deploy the fine-tuning Job: envsubst < training multihost jobset.yaml kubectl apply -f - Multislice In Cloud Shell, run the following command: gcloud container node-pools create jax-tpu-multihost1 \ --cluster = ${ CLUSTER NAME } \ --machine-type = ct6e-standard-4t \ --num-nodes = 2 \ --tpu-topology = 2x4 \ --location = ${ REGION } \ --node-locations = ${ ZONE } gcloud container node-pools create jax-tpu-multihost2 \ --cluster = ${ CLUSTER NAME } \ --machine-type = ct6e-standard-4t \ --num-nodes = 2 \ --tpu-topology = 2x4 \ --location = ${ REGION } \ --node-locations = ${ ZONE } GKE creates two TPU Trillium node pools.
- The following tabs show how to create for multi-host and multislice node pools: Multi-host In Cloud Shell, run the following command: gcloud container node-pools create jax-tpu-multihost1 \ --cluster = ${ CLUSTER NAME } \ --machine-type = ct6e-standard-4t \ --num-nodes = 2 \ --tpu-topology = 2x4 \ --location = ${ REGION } \ --node-locations = ${ ZONE } GKE creates a TPU Trillium node pool with a 2x4 topology and two nodes.
- Create a single-host node pool: gcloud container node-pools create jax-tpu-nodepool \ --cluster = ${ CLUSTER NAME } \ --machine-type = ct6e-standard-1t \ --num-nodes = 1 \ --location = ${ REGION } \ --node-locations = ${ ZONE } \ --workload-metadata = GKE METADATA GKE creates a TPU Trillium node pool with a 1x1 topology and one node.
- To list zones where TPU Trillium (v6e) TPUs are available, run the following command: gcloud compute accelerator-types list --filter = "name ct6e" --format = "value(zone)" BUCKET NAME : the name of the Cloud Storage bucket that contains your training data.

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- This is necessary for when you set GPU TYPE to nvidia-rtx-pro-6000 and MACHINE TYPE to one of the following: g4-standard-6 (one-eighth of a GPU) g4-standard-12 (one-quarter of a GPU) g4-standard-24 (one-half of a GPU) g4-standard-48 (one GPU) Additionally, ensure that you follow the instructions to prepare workloads for G4 machine types that have less than one GPU .
- Add the following block to your Terraform configuration: provider "google" { project = var.project id region = var.region } resource "google container cluster" "ml cluster" { name = var.cluster name location = var.region initial node count = 1 } resource "google container node pool" "gpu pool" { name = google container cluster.ml cluster.name location = var.region node locations = [ var.zones ] cluster = google container cluster.ml cluster.name node count = 3 autoscaling { total min node count = "1" total max node count = "5" } management { auto repair = "true" auto upgrade = "true" } node config { oauth scopes = [ "https://www.googleapis.com/auth/logging.write" , "https://www.googleapis.com/auth/monitoring" , "https://www.googleapis.com/auth/devstorage.read only" , "https://www.googleapis.com/auth/trace.append" , "https://www.googleapis.com/auth/service.management.readonly" , "https://www.googleapis.com/auth/servicecontrol" , ] labels = { env = var.project id } guest accelerator { type = var.gpu type count = 1 gpu driver installation config { gpu driver version = var.gpu driver version } } image type = "cos containerd" machine type = var.machine type tags = [ "gke-node", "${var.project id}-gke" ] disk size gb = "30" disk type = "pd-standard" metadata = { disable-legacy-endpoints = "true" } } } Terraform calls Google Cloud APIs to set create a new cluster with a node pool that uses GPUs.
- G4 machine series : Machine types that have one or more GPUs : 1.34.0-gke.1662000 or later Machine types that have less than one GPU ( Preview ) : Use one of the following patch versions or later, based on the GKE minor version: 1.34 : 1.34.5-gke.1153000 1.35 or later : 1.35.2-gke.1485000 GPUs on Ubuntu nodes : If you use GPUs with Ubuntu nodes, the following requirements apply: Ubuntu driver compatibility : L4 GPUs and H100 GPUs : NVIDIA driver version 535 or later H200 GPUs : NVIDIA driver version 550 or later B200 GPUs : NVIDIA driver version 570 or later RTX PRO 6000 GPUs : NVIDIA driver version 580 or later.
- Required for the following GPU types: NVIDIA B200 GPUs (corresponding to the nvidia-b200 accelerator type and A4 machine series ) NVIDIA H200 141 GB GPUs (corresponding to the nvidia-h200-141gb accelerator type and A3 Ultra machine type), or NVIDIA H100 80 GB GPUs (corresponding to the nvidia-h100-80gb accelerator type and A3 High machine type), or NVIDIA H100 80GB Mega GPUs (corresponding to the nvidia-h100-mega-80gb accelerator type and A3 Mega machine type).

### "Allocate network resources by using GKE managed DRANET \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- You must use one of the following accelerator-optimized machine types: Machine series Machine type Accelerator model Networking technology A3 Ultra a3-ultragpu-8g NVIDIA H200 GPU RDMA A4 a4-highgpu-8g NVIDIA B200 GPU RDMA A4X a4x-highgpu-4g NVIDIA GB200 GPU RDMA A4X Max a4x-maxgpu-4g-metal NVIDIA B300 GPU RDMA TPU v7 tpu7x-standard-4t TPU v7 NetDevice TPU v6e ct6e-standard-8t Trillium TPU NetDevice TPU v6e ct6e-standard-4t Trillium TPU NetDevice TPU v6e ct6e-standard-1t Trillium TPU NetDevice Limitations GKE DRANET has the following limitations: You can't use GKE DRANET to allocate the default network interface card (NIC) or virtual NICs (such as veth).
- The number of NICs and their names will vary based on the machine type of the GKE node. eth0 eth1 eth2 lo Enable DRANET with custom ComputeClass To use GKE managed DRANET in Autopilot clusters or with node auto-provisioning in Standard clusters, you must use a custom ComputeClass resource to opt-in to the feature.
- For more information about TPU-compatible machine types, see Choose the TPU version .
- Enable GKE managed DRANET driver on a GPU node pool To enable the GKE DRANET driver on a GPU node pool that supports RDMA, add the cloud.google.com/gke-networking-dra-driver=true label when you create the node pool. gcloud beta container node-pools create NODE POOL NAME \ --region = REGION \ --cluster = CLUSTER NAME \ --node-locations = NODE LOCATIONS \ --accelerator type = ACCELERATOR TYPE ,count = ACCELERATOR COUNT ,gpu-driver-version = DRIVER VERSION \ --machine-type = MACHINE TYPE \ --num-nodes = NUM NODES \ --reservation-affinity = specific \ --reservation = projects/ RESERVATION PROJECT /reservations/ RESERVATION NAME /reservationBlocks/ RESERVATION BLOCK \ --accelerator-network-profile = auto \ --node-labels = cloud.google.com/gke-networking-dra-driver = true Replace the following: NODE POOL NAME : the name of your new node pool.

