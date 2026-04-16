---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:10.272Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Inference Quickstart distributed inference recommendations"
feature_slug: "gke-inference-quickstart-distributed-inference-recommendations"
latest_feature_date: "2026-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm"
keywords:
  - "gke"
  - "inference"
  - "quickstart"
  - "distributed"
  - "recommendations"
  - "recommends"
  - "optimized"
  - "ai"
---

# GKE Inference Quickstart distributed inference recommendations

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Inference Quickstart recommends optimized distributed AI inference configurations for supported model families and accelerator types.

## Extended Definition

GKE Inference Quickstart recommends optimized distributed AI inference configurations for supported model families and accelerator types.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra](https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm)

## Supporting Pages

### "Introduction to AI/ML workloads on GKE \_|\_ GKE AI/ML \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Low-latency online serving : For developers building generative AI applications, GKE with the Inference Gateway provides the optimized routing and autoscaling needed to deliver a responsive user experience while controlling costs.
- AI/ML workload or operation How GKE supports you Key features Inference and serving Optimized to serve AI models elastically, with low latency, high throughput, and cost efficiency.
- Get started in Google Cloud console Try these quickstarts: Inference on GKE : deploy an AI large language model (LLM) on GKE for inference using a pre-defined architecture.
- GKE Inference Quickstart : a tool to simplify performance analysis and deployment by providing a set of benchmarked profiles for popular AI models.

### AI/ML orchestration on GKE documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra](https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. info Manage AI infrastructure and accelerators Concept About accelerator consumption options for AI/ML workloads in GKE Concept About GPUs in GKE Concept About TPUs in GKE Best practice Optimize GPU obtainability with flex-start provisioning mode Best practice Run cost-optimized Kubernetes applications on GKE Best practice Design storage for AI and ML workloads in Google Cloud Quickstart Deploy GPU-accelerated Ray for AI workloads on GKE Video Introduction to Cloud TPUs for machine learning Video Build large-scale machine learning on Cloud TPUs with GKE info Train AI models at scale Quickstart Train a model with GPUs on GKE Standard mode Tutorial Train a model with GPUs on GKE Autopilot mode Tutorial Train a model with PyTorch, Ray, and GKE on GPUs Tutorial Train an LLM using JAX, Ray Train, and TPU Trillium on GKE Quickstart Train Llama2 with Megatron-LM on A3 Mega virtual machines How-to Train large-scale machine learning models on GKE with multi-tier checkpointing Tutorial Optimize GKE resource utilization for mixed AI/ML training and inference workloads info Serve AI models for Inference Best practice Reference architecture for AI/ML inference on GKE Concept About model inference on GKE How-to Analyze model serving performance and costs with GKE Inference Quickstart Quickstart Serve open LLMs on GKE with a pre-configured architecture using Terraform Tutorial Serve LLMs like Deepseek-R1 671B or Llama 3.1 405B on GKE Tutorial Serve Gemma using GPUs on GKE with vLLM Tutorial Serve an LLM using TPU Trillium on GKE with vLLM Tutorial Discover more tutorials for model inference on GKE Related resources Training and tutorials Use cases Code samples Explore self-paced training, use cases, reference architectures, and code samples with examples of how to use and connect Google Cloud services.
- Tutorial AI/ML Inference TPU Training Training and tutorials Serve LLMs on GKE with a cost-optimized and high-availability GPU provisioning strategy Learn how to optimize costs for LLM-serving workloads on GKE using DWS Flex-start.
- Inference GPU HPA Use case Use cases Efficiently serve optimized AI models with NVIDIA NIM microservices on GKE Learn how to deploy cutting-edge NVIDIA NIM microservices on GKE with ease and accelerate your AI workloads.
- Tutorial AI/ML Inference Agentic AI Training Training and tutorials Deploy an agentic AI application on GKE with the Agent Development Kit (ADK) and Vertex AI Learn how to deploy and manage a containerized agentic AI application on GKE, using the Agent Development Kit (ADK) and Vertex AI for scalable inference with Gemini 2.0 Flash.

### "Serve Gemma open models using GPUs on GKE with vLLM \_|\_ GKE AI/ML \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Tip: For production deployments on GKE, we strongly recommend using Inference Quickstart to get tailored best practices and configurations for your model inference.
- Create the following vllm-4-26b-a4b-it.yaml manifest: apiVersion : apps/v1 kind : Deployment metadata : name : vllm-gemma-deployment spec : replicas : 1 selector : matchLabels : app : gemma-server template : metadata : labels : app : gemma-server ai.gke.io/model : gemma-4-26b-a4b-it ai.gke.io/inference-server : vllm examples.ai.gke.io/source : user-guide spec : containers : - name : inference-server image : us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:gemma4 resources : requests : cpu : "20" memory : "80Gi" ephemeral-storage : "80Gi" nvidia.com/gpu : "1" limits : cpu : "20" memory : "80Gi" ephemeral-storage : "80Gi" nvidia.com/gpu : "1" command : [ "python3" , "-m" , "vllm.entrypoints.api server" ] args : - --model=$(MODEL ID) - --host=0.0.0.0 - --port=8000 - --tensor-parallel-size=1 - --enable-log-requests - --enable-chunked-prefill - --enable-prefix-caching - --enable-auto-tool-choice - --generation-config=auto - --tool-call-parser=gemma4 - --dtype=bfloat16 - --max-num-seqs=16 - --max-model-len=16384 - --gpu-memory-utilization=0.95 - --reasoning-parser=gemma4 - --trust-remote-code env : - name : LD LIBRARY PATH value : ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 - name : MODEL ID value : google/gemma-4-26B-A4B-it volumeMounts : - mountPath : /dev/shm name : dshm volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : nvidia-rtx-pro-6000 cloud.google.com/gke-gpu-driver-version : latest --- apiVersion : v1 kind : Service metadata : name : llm-service spec : selector : app : gemma-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 8000 Apply the manifest: kubectl apply -f vllm-4-26b-a4b-it.yaml In our example, we limit the context window size by 16 K using vLLM option --max-model-len=16384 .
- Create the following vllm-4-31b-it.yaml manifest: apiVersion : apps/v1 kind : Deployment metadata : name : vllm-gemma-deployment spec : replicas : 1 selector : matchLabels : app : gemma-server template : metadata : labels : app : gemma-server ai.gke.io/model : gemma-4-31b-it ai.gke.io/inference-server : vllm examples.ai.gke.io/source : user-guide spec : containers : - name : inference-server image : us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:gemma4 resources : requests : cpu : "22" memory : "100Gi" ephemeral-storage : "80Gi" nvidia.com/gpu : "1" limits : cpu : "22" memory : "100Gi" ephemeral-storage : "80Gi" nvidia.com/gpu : "1" command : [ "python3" , "-m" , "vllm.entrypoints.api server" ] args : - --model=$(MODEL ID) - --host=0.0.0.0 - --port=8000 - --tensor-parallel-size=1 - --enable-log-requests - --enable-chunked-prefill - --enable-prefix-caching - --enable-auto-tool-choice - --generation-config=auto - --tool-call-parser=gemma4 - --dtype=bfloat16 - --max-num-seqs=16 - --max-model-len=16384 - --gpu-memory-utilization=0.95 - --reasoning-parser=gemma4 - --trust-remote-code env : - name : LD LIBRARY PATH value : ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 - name : MODEL ID value : google/gemma-4-31B-it volumeMounts : - mountPath : /dev/shm name : dshm volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : nvidia-rtx-pro-6000 cloud.google.com/gke-gpu-driver-version : latest --- apiVersion : v1 kind : Service metadata : name : llm-service spec : selector : app : gemma-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 8000 Apply the manifest: kubectl apply -f vllm-4-31b-it.yaml In our example, we limit the context window size by 16 K using vLLM option --max-model-len=16384 .
- Create the following vllm-4-e4b-it.yaml manifest: apiVersion : apps/v1 kind : Deployment metadata : name : vllm-gemma-deployment spec : replicas : 1 selector : matchLabels : app : gemma-server template : metadata : labels : app : gemma-server ai.gke.io/model : gemma-4-e4b-it ai.gke.io/inference-server : vllm examples.ai.gke.io/source : user-guide spec : containers : - name : inference-server image : us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:gemma4 resources : requests : cpu : "4" memory : "20Gi" ephemeral-storage : "20Gi" nvidia.com/gpu : "1" limits : cpu : "4" memory : "20Gi" ephemeral-storage : "20Gi" nvidia.com/gpu : "1" command : [ "python3" , "-m" , "vllm.entrypoints.api server" ] args : - --model=$(MODEL ID) - --host=0.0.0.0 - --port=8000 - --tensor-parallel-size=1 - --enable-log-requests - --enable-chunked-prefill - --enable-prefix-caching - --enable-auto-tool-choice - --generation-config=auto - --tool-call-parser=gemma4 - --dtype=bfloat16 - --max-num-seqs=16 - --max-model-len=32768 - --gpu-memory-utilization=0.95 - --reasoning-parser=gemma4 - --trust-remote-code env : - name : LD LIBRARY PATH value : ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 - name : MODEL ID value : google/gemma-4-E4b-it volumeMounts : - mountPath : /dev/shm name : dshm volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : nvidia-rtx-pro-6000 cloud.google.com/gke-gpu-driver-version : latest --- apiVersion : v1 kind : Service metadata : name : llm-service spec : selector : app : gemma-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 8000 Apply the manifest: kubectl apply -f vllm-4-E4b-it.yaml In our example, we limit the context window by 32 K using vLLM option --max-model-len=32768 .

### "Serve Llama models using GPUs on GKE with vLLM \_|\_ Kubernetes Engine \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm)
- Source ID: `site-iam-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Tip: For production deployments on GKE, we strongly recommend using Inference Quickstart to get tailored best practices and configurations for your model inference.
- Llama 4 Maverick 17B-128e-it To deploy the Llama 4 Maverick 17B-128e instruction tuned model, follow these instructions: Create the following vllm-llama4-maverick-17b-128e-instruct.yaml manifest: apiVersion : apps/v1 kind : Deployment metadata : name : llama-deployment spec : replicas : 1 selector : matchLabels : app : llama-server template : metadata : labels : app : llama-server ai.gke.io/model : Llama-4-Maverick-17B-128E-Instruct ai.gke.io/inference-server : vllm spec : containers : - name : inference-server image : docker.io/vllm/vllm-openai:v0.10.0 resources : requests : cpu : 157 memory : 2067Gi ephemeral-storage : 850Gi nvidia.com/gpu : 8 limits : cpu : 157 memory : 2067Gi ephemeral-storage : 850Gi nvidia.com/gpu : 8 command : [ "python3" , "-m" , "vllm.entrypoints.openai.api server" ] args : - --host=0.0.0.0 - --port=7080 - --swap-space=16 - --max-model-len=131072 - --gpu-memory-utilization=0.95 - --disable-log-stats - --dtype=auto - --kv-cache-dtype=auto - --max-num-seqs=64 - --model=meta-llama/Llama-4-Maverick-17B-128E-Instruct - --tensor-parallel-size=8 env : - name : LD LIBRARY PATH value : ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 - name : MODEL ID value : 'meta-llama/Llama-4-Maverick-17B-128E-Instruct' - name : HUGGING FACE HUB TOKEN valueFrom : secretKeyRef : name : hf-secret key : hf api token volumeMounts : - mountPath : /dev/shm name : dshm volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : nvidia-h200-141gb --- apiVersion : v1 kind : Service metadata : name : llama-service spec : selector : app : llama-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 7080 --- apiVersion : v1 kind : Secret metadata : name : hf-secret type : Opaque stringData : hf api token : {{HF TOKEN} } Apply the manifest: kubectl apply -f vllm-llama4-maverick-17b-128e-instruct.yaml In our example, we limit the context window by 128 K by using the --max-model-len=131072 vLLM option.
- Llama 4 Maverick 17B-128e-it-fp8 To deploy the Llama 4 Maverick 17B-128e-Instruct-FP8 model, follow these instructions: Create the following vllm-llama4-maverick-17b-128e-instruct-fp8.yaml manifest: apiVersion : apps/v1 kind : Deployment metadata : name : llama-deployment spec : replicas : 1 selector : matchLabels : app : llama-server template : metadata : labels : app : llama-server ai.gke.io/model : Llama-4-Maverick-17B-128E-Instruct-FP8 ai.gke.io/inference-server : vllm spec : containers : - name : inference-server image : docker.io/vllm/vllm-openai:v0.10.0 resources : requests : cpu : 146 memory : 1311Gi ephemeral-storage : 600Gi nvidia.com/gpu : 8 limits : cpu : 146 memory : 1311Gi ephemeral-storage : 600Gi nvidia.com/gpu : 8 command : [ "python3" , "-m" , "vllm.entrypoints.openai.api server" ] args : - --host=0.0.0.0 - --port=7080 - --swap-space=16 - --max-model-len=524288 - --gpu-memory-utilization=0.90 - --disable-log-stats - --model=meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8 - --tensor-parallel-size=8 env : - name : LD LIBRARY PATH value : ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 - name : MODEL ID value : 'meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8' - name : HUGGING FACE HUB TOKEN valueFrom : secretKeyRef : name : hf-secret key : hf api token volumeMounts : - mountPath : /dev/shm name : dshm volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : nvidia-h100-80gb --- apiVersion : v1 kind : Service metadata : name : llama-service spec : selector : app : llama-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 7080 --- apiVersion : v1 kind : Secret metadata : name : hf-secret type : Opaque stringData : hf api token : {{HF TOKEN} } Apply the manifest: kubectl apply -f vllm-llama4-maverick-17b-128e-instruct-fp8.yaml In our example, we limit the context window by 512 K by using the --max-model-len=524288 vLLM option.
- Llama 4 Maverick 17B-128e To deploy the Llama 4 Maverick 17B-128E model, follow these instructions: Create the following vllm-llama4-maverick-17b-128e.yaml manifest: apiVersion : apps/v1 kind : Deployment metadata : name : llama-deployment spec : replicas : 1 selector : matchLabels : app : llama-server template : metadata : labels : app : llama-server ai.gke.io/model : Llama-4-Maverick-17B-128E ai.gke.io/inference-server : vllm spec : containers : - name : inference-server image : docker.io/vllm/vllm-openai:v0.10.0 resources : requests : cpu : 157 memory : 2067Gi ephemeral-storage : 850Gi nvidia.com/gpu : 8 limits : cpu : 157 memory : 2067Gi ephemeral-storage : 850Gi nvidia.com/gpu : 8 command : [ "python3" , "-m" , "vllm.entrypoints.openai.api server" ] args : - --host=0.0.0.0 - --port=7080 - --swap-space=16 - --max-model-len=131072 - --gpu-memory-utilization=0.95 - --disable-log-stats - --dtype=auto - --kv-cache-dtype=auto - --max-num-seqs=64 - --model=meta-llama/Llama-4-Maverick-17B-128E - --tensor-parallel-size=8 env : - name : LD LIBRARY PATH value : ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 - name : MODEL ID value : 'meta-llama/Llama-4-Maverick-17B-128E' - name : HUGGING FACE HUB TOKEN valueFrom : secretKeyRef : name : hf-secret key : hf api token volumeMounts : - mountPath : /dev/shm name : dshm volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : nvidia-h200-141gb --- apiVersion : v1 kind : Service metadata : name : llama-service spec : selector : app : llama-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 7080 --- apiVersion : v1 kind : Secret metadata : name : hf-secret type : Opaque stringData : hf api token : {{HF TOKEN} } Apply the manifest: kubectl apply -f vllm-llama4-maverick-17b-128e.yaml In our example, we limit the context window by 128 K by using the --max-model-len=131072 vLLM option.

