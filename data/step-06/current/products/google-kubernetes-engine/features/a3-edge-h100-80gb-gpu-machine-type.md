---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.727Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "A3 Edge H100 80GB GPU machine type"
feature_slug: "a3-edge-h100-80gb-gpu-machine-type"
latest_feature_date: "2024-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm"
keywords:
  - "a3"
  - "edge"
  - "h100"
  - "80gb"
  - "gpu"
  - "machine"
  - "type"
  - "edgegpu"
---

# A3 Edge H100 80GB GPU machine type

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The a3-edgegpu-8g machine type with attached NVIDIA H100 80GB GPUs is available on GKE Standard clusters.

## Extended Definition

The a3-edgegpu-8g machine type with attached NVIDIA H100 80GB GPUs is available on GKE Standard clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm)

## Supporting Pages

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- For this example, save the following as a3-computeclass.yaml : apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : a3-edge-gpu spec : priorities : - machineType : a3-edgegpu-8g-nolssd gpu : count : 8 type : nvidia-h100-80gb nodePoolAutoCreation : enabled : true In this manifest: The metadata.name is the name of your custom ComputeClass, which you will reference in your Pod specification.
- Allowed values are the following: nvidia-gb200 : NVIDIA GB200 (Preview) nvidia-b200 : NVIDIA B200 (180GB) nvidia-h200-141gb : NVIDIA H200 (141GB) nvidia-h100-mega-80gb : NVIDIA H100 Mega (80GB) nvidia-h100-80gb : NVIDIA H100 (80GB) nvidia-a100-80gb : NVIDIA A100 (80GB) nvidia-tesla-a100 : NVIDIA A100 (40GB) nvidia-rtx-pro-6000 : NVIDIA RTX PRO 6000 (except for G4 machine types that have less than one GPU, see the limitations ) nvidia-l4 : NVIDIA L4 nvidia-tesla-t4 : NVIDIA T4 or if you use GKE Sandbox, one of the following: nvidia-gb200 : NVIDIA GB200 (Preview) nvidia-b200 : NVIDIA B200 (180GB) (Preview) nvidia-h200-141gb : NVIDIA H200 (141GB) (Preview) nvidia-h100-mega-80gb : NVIDIA H100 Mega (80GB) nvidia-h100-80gb : NVIDIA H100 (80GB) nvidia-a100-80gb : NVIDIA A100 (80GB) nvidia-tesla-a100 : NVIDIA A100 (40GB) nvidia-rtx-pro-6000 : NVIDIA RTX PRO 6000 (Preview) (except for G4 machine types that have less than one GPU, see the limitations ) nvidia-l4 : NVIDIA L4 nvidia-tesla-t4 : NVIDIA T4 For more information, see GPU model support .
- This can be one of the following: nvidia-gb200 : NVIDIA GB200 (Preview) nvidia-b200 : NVIDIA B200 (180GB) nvidia-h200-141gb : NVIDIA H200 (141GB) nvidia-h100-mega-80gb : NVIDIA H100 Mega (80GB) nvidia-h100-80gb : NVIDIA H100 (80GB) nvidia-a100-80gb : NVIDIA A100 (80GB) nvidia-tesla-a100 : NVIDIA A100 (40GB) nvidia-rtx-pro-6000 : NVIDIA RTX PRO 6000 (except for G4 machine types that have less than one GPU, see the limitations ) nvidia-l4 : NVIDIA L4 nvidia-tesla-t4 : NVIDIA T4 or if you use GKE Sandbox, one of the following: nvidia-gb200 : NVIDIA GB200 (Preview) nvidia-b200 : NVIDIA B200 (180GB) (Preview) nvidia-h200-141gb : NVIDIA H200 (141GB) (Preview) nvidia-h100-mega-80gb : NVIDIA H100 Mega (80GB) nvidia-h100-80gb : NVIDIA H100 (80GB) nvidia-a100-80gb : NVIDIA A100 (80GB) nvidia-tesla-a100 : NVIDIA A100 (40GB) nvidia-rtx-pro-6000 : NVIDIA RTX PRO 6000 (Preview) (except for G4 machine types that have less than one GPU, see the limitations ) nvidia-l4 : NVIDIA L4 nvidia-tesla-t4 : NVIDIA T4 For more information, see GPU model support .
- GPU use cases in Autopilot You can allocate GPUs to containers in Autopilot Pods to facilitate workloads such as the following: Machine learning (ML) inference ML training Rendering Supported GPU quantities When you request GPUs in your Pod specification, you must use the following quantities based on the GPU type: GPU quantities NVIDIA B200 (180GB) nvidia-b200 8 NVIDIA H200 (141GB) nvidia-h200-141gb 8 NVIDIA H100 Mega (80GB) nvidia-h100-mega-80gb 8 NVIDIA H100 (80GB) nvidia-h100-80gb 1, 2, 4, 8 NVIDIA A100 (80GB) nvidia-a100-80gb 1, 2, 4, 8 NVIDIA A100 (40GB) nvidia-tesla-a100 1, 2, 4, 8, 16 NVIDIA RTX PRO 6000 nvidia-rtx-pro-6000 1, 2, 4, 8 NVIDIA L4 nvidia-l4 1, 2, 4, 8 NVIDIA T4 nvidia-tesla-t4 1, 2, 4 Note: Autopilot supports the smaller machine shapes of 1, 2, and 4 GPUs for NVIDIA H100 (80GB) GPUs on version 1.31.4-gke.1072000 or later.

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Required for the following GPU types: NVIDIA B200 GPUs (corresponding to the nvidia-b200 accelerator type and A4 machine series ) NVIDIA H200 141 GB GPUs (corresponding to the nvidia-h200-141gb accelerator type and A3 Ultra machine type), or NVIDIA H100 80 GB GPUs (corresponding to the nvidia-h100-80gb accelerator type and A3 High machine type), or NVIDIA H100 80GB Mega GPUs (corresponding to the nvidia-h100-mega-80gb accelerator type and A3 Mega machine type).
- Required for the following GPU types: NVIDIA B200 GPUs (corresponding to the nvidia-b200 accelerator type and A4 machine series ) NVIDIA H200 141 GB GPUs (corresponding to the nvidia-h200-141gb accelerator type and A3 Ultra machine type), or NVIDIA H100 80 GB GPUs (corresponding to the nvidia-h100-80gb accelerator type and A3 High machine type), or NVIDIA H100 80GB Mega GPUs (corresponding to the nvidia-h100-mega-80gb accelerator type and A3 Mega machine type).
- G4 machine series : Machine types that have one or more GPUs : 1.34.0-gke.1662000 or later Machine types that have less than one GPU ( Preview ) : Use one of the following patch versions or later, based on the GKE minor version: 1.34 : 1.34.5-gke.1153000 1.35 or later : 1.35.2-gke.1485000 GPUs on Ubuntu nodes : If you use GPUs with Ubuntu nodes, the following requirements apply: Ubuntu driver compatibility : L4 GPUs and H100 GPUs : NVIDIA driver version 535 or later H200 GPUs : NVIDIA driver version 550 or later B200 GPUs : NVIDIA driver version 570 or later RTX PRO 6000 GPUs : NVIDIA driver version 580 or later.
- NVIDIA A100 40 GB GPUs (corresponding to the nvidia-tesla-a100 accelerator type and the A2 Standard machine type), or NVIDIA A100 80GB GPUs (corresponding to the nvidia-a100-80gb accelerator type and A2 Ultra machine type).

### "Serve Llama models using GPUs on GKE with vLLM \_|\_ Kubernetes Engine \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create a node pool for your cluster with the appropriate disk size, run the following command: gcloud container node-pools create gpupool \ --accelerator type = nvidia-h100-80gb,count = 1 ,gpu-driver-version = latest \ --project = PROJECT ID \ --location = REGION \ --node-locations = REGION -a \ --cluster = CLUSTER NAME \ --machine-type = a3-highgpu-8g \ --disk-type = pd-ssd \ --num-nodes = 1 \ --disk-size = 256 GKE creates a single node pool containing eight H100 80GB GPUs.
- Llama 4 Maverick 17B-128e-it-fp8 To deploy the Llama 4 Maverick 17B-128e-Instruct-FP8 model, follow these instructions: Create the following vllm-llama4-maverick-17b-128e-instruct-fp8.yaml manifest: apiVersion : apps/v1 kind : Deployment metadata : name : llama-deployment spec : replicas : 1 selector : matchLabels : app : llama-server template : metadata : labels : app : llama-server ai.gke.io/model : Llama-4-Maverick-17B-128E-Instruct-FP8 ai.gke.io/inference-server : vllm spec : containers : - name : inference-server image : docker.io/vllm/vllm-openai:v0.10.0 resources : requests : cpu : 146 memory : 1311Gi ephemeral-storage : 600Gi nvidia.com/gpu : 8 limits : cpu : 146 memory : 1311Gi ephemeral-storage : 600Gi nvidia.com/gpu : 8 command : [ "python3" , "-m" , "vllm.entrypoints.openai.api server" ] args : - --host=0.0.0.0 - --port=7080 - --swap-space=16 - --max-model-len=524288 - --gpu-memory-utilization=0.90 - --disable-log-stats - --model=meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8 - --tensor-parallel-size=8 env : - name : LD LIBRARY PATH value : ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 - name : MODEL ID value : 'meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8' - name : HUGGING FACE HUB TOKEN valueFrom : secretKeyRef : name : hf-secret key : hf api token volumeMounts : - mountPath : /dev/shm name : dshm volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : nvidia-h100-80gb --- apiVersion : v1 kind : Service metadata : name : llama-service spec : selector : app : llama-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 7080 --- apiVersion : v1 kind : Secret metadata : name : hf-secret type : Opaque stringData : hf api token : {{HF TOKEN} } Apply the manifest: kubectl apply -f vllm-llama4-maverick-17b-128e-instruct-fp8.yaml In our example, we limit the context window by 512 K by using the --max-model-len=524288 vLLM option.
- Llama 4 Scout 17B-16e-it To deploy the Llama 4 Scout 17B-16e Instruct instruction tuned model, follow these instructions: Create the following vllm-llama4-scout-17b-16e-instruct.yaml manifest: apiVersion : apps/v1 kind : Deployment metadata : name : llama-deployment spec : replicas : 1 selector : matchLabels : app : llama-server template : metadata : labels : app : llama-server ai.gke.io/model : Llama-4-Scout-17B-16E-Instruct ai.gke.io/inference-server : vllm spec : containers : - name : inference-server image : docker.io/vllm/vllm-openai:v0.10.0 resources : requests : cpu : 146 memory : 1311Gi ephemeral-storage : 600Gi nvidia.com/gpu : 8 limits : cpu : 146 memory : 1311Gi ephemeral-storage : 600Gi nvidia.com/gpu : 8 command : [ "python3" , "-m" , "vllm.entrypoints.openai.api server" ] args : - --host=0.0.0.0 - --port=7080 - --swap-space=16 - --max-model-len=1310720 - --limit mm per prompt - '{"image": 5}' - --disable-log-stats - --model=meta-llama/Llama-4-Scout-17B-16E-Instruct - --tensor-parallel-size=8 env : - name : LD LIBRARY PATH value : ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 - name : MODEL ID value : 'meta-llama/Llama-4-Scout-17B-16E-Instruct' - name : HUGGING FACE HUB TOKEN valueFrom : secretKeyRef : name : hf-secret key : hf api token volumeMounts : - mountPath : /dev/shm name : dshm volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : nvidia-h100-80gb --- apiVersion : v1 kind : Service metadata : name : llama-service spec : selector : app : llama-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 7080 --- apiVersion : v1 kind : Secret metadata : name : hf-secret type : Opaque stringData : hf api token : {{HF TOKEN} } Apply the manifest: kubectl apply -f vllm-llama4-scout-17b-16e-instruct.yaml In our example, we limit the context window by 1280 K by using the --max-model-len=1310720 vLLM option.
- Llama 4 Scout 17B-16e To deploy the Llama 4 Scout 17B-16E model, follow these instructions: Create the following vllm-llama4-scout-17b-16e.yaml manifest: apiVersion : apps/v1 kind : Deployment metadata : name : llama-deployment spec : replicas : 1 selector : matchLabels : app : llama-server template : metadata : labels : app : llama-server ai.gke.io/model : Llama-4-Scout-17B-16E ai.gke.io/inference-server : vllm spec : containers : - name : inference-server image : docker.io/vllm/vllm-openai:v0.10.0 resources : requests : cpu : 146 memory : 1311Gi ephemeral-storage : 600Gi nvidia.com/gpu : 8 limits : cpu : 146 memory : 1311Gi ephemeral-storage : 600Gi nvidia.com/gpu : 8 command : [ "python3" , "-m" , "vllm.entrypoints.openai.api server" ] args : - --host=0.0.0.0 - --port=7080 - --swap-space=16 - --max-model-len=262144 - --limit mm per prompt - '{"image": 5}' - --disable-log-stats - --model=meta-llama/Llama-4-Scout-17B-16E - --tensor-parallel-size=8 env : - name : LD LIBRARY PATH value : ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 - name : MODEL ID value : 'meta-llama/Llama-4-Scout-17B-16E' - name : HUGGING FACE HUB TOKEN valueFrom : secretKeyRef : name : hf-secret key : hf api token volumeMounts : - mountPath : /dev/shm name : dshm volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : nvidia-h100-80gb --- apiVersion : v1 kind : Service metadata : name : llama-service spec : selector : app : llama-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 7080 --- apiVersion : v1 kind : Secret metadata : name : hf-secret type : Opaque stringData : hf api token : {{HF TOKEN} } Apply the manifest: kubectl apply -f vllm-llama4-scout-17b-16e.yaml In our example, we limit the context window by 256 K by using the --max-model-len=262144 vLLM option.

