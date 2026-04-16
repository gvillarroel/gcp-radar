---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:10.384Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Retrieval-augmented generation quick start solution on GKE"
feature_slug: "retrieval-augmented-generation-quick-start-solution-on-gke"
latest_feature_date: "2024-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot"
keywords:
  - "retrieval"
  - "augmented"
  - "generation"
  - "quick"
  - "start"
  - "solution"
  - "on"
  - "gke"
---

# Retrieval-augmented generation quick start solution on GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

A quick start solution and reference architecture are available for developing and deploying RAG applications on GKE.

## Extended Definition

A quick start solution and reference architecture are available for developing and deploying RAG applications on GKE.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra](https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot)

## Supporting Pages

### AI/ML orchestration on GKE documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra](https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GenAI NVIDIA GPU Use case Use cases Infrastructure for a RAG-capable generative AI application using GKE and Cloud SQL Reference architecture for running a generative AI application with retrieval-augmented generation (RAG) using GKE, Cloud SQL, Ray, Hugging Face, and LangChain.
- Tutorial AI/ML Batch Training Training and tutorials Build a RAG chatbot with GKE and Cloud Storage This tutorial shows you how to integrate a Large Language Model application based on retrieval-augmented generation with PDF files that you upload to a Cloud Storage bucket.
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. info Manage AI infrastructure and accelerators Concept About accelerator consumption options for AI/ML workloads in GKE Concept About GPUs in GKE Concept About TPUs in GKE Best practice Optimize GPU obtainability with flex-start provisioning mode Best practice Run cost-optimized Kubernetes applications on GKE Best practice Design storage for AI and ML workloads in Google Cloud Quickstart Deploy GPU-accelerated Ray for AI workloads on GKE Video Introduction to Cloud TPUs for machine learning Video Build large-scale machine learning on Cloud TPUs with GKE info Train AI models at scale Quickstart Train a model with GPUs on GKE Standard mode Tutorial Train a model with GPUs on GKE Autopilot mode Tutorial Train a model with PyTorch, Ray, and GKE on GPUs Tutorial Train an LLM using JAX, Ray Train, and TPU Trillium on GKE Quickstart Train Llama2 with Megatron-LM on A3 Mega virtual machines How-to Train large-scale machine learning models on GKE with multi-tier checkpointing Tutorial Optimize GKE resource utilization for mixed AI/ML training and inference workloads info Serve AI models for Inference Best practice Reference architecture for AI/ML inference on GKE Concept About model inference on GKE How-to Analyze model serving performance and costs with GKE Inference Quickstart Quickstart Serve open LLMs on GKE with a pre-configured architecture using Terraform Tutorial Serve LLMs like Deepseek-R1 671B or Llama 3.1 405B on GKE Tutorial Serve Gemma using GPUs on GKE with vLLM Tutorial Serve an LLM using TPU Trillium on GKE with vLLM Tutorial Discover more tutorials for model inference on GKE Related resources Training and tutorials Use cases Code samples Explore self-paced training, use cases, reference architectures, and code samples with examples of how to use and connect Google Cloud services.
- Tutorial AI/ML Observability GPUs Training Training and tutorials Quickstart: Train a model with GPUs on GKE Standard clusters This quickstart shows you how to deploy a training model with GPUs in GKE and store the predictions in Cloud Storage.

### "Introduction to AI/ML workloads on GKE \_|\_ GKE AI/ML \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Get started in Google Cloud console Try these quickstarts: Inference on GKE : deploy an AI large language model (LLM) on GKE for inference using a pre-defined architecture.
- Get started with AI/ML workloads on GKE You can start exploring GKE in minutes by using GKE's free tier , which lets you get started with Kubernetes without incurring costs for cluster management.
- Cost efficiency at scale : you want to prioritize cost optimization by using GKE's integration with Spot VMs and Flex-start VMs to effectively manage costs.
- GKE Inference Quickstart : a tool to simplify performance analysis and deployment by providing a set of benchmarked profiles for popular AI models.

### "Serve Gemma open models using GPUs on GKE with vLLM \_|\_ GKE AI/ML \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Tip: For production deployments on GKE, we strongly recommend using Inference Quickstart to get tailored best practices and configurations for your model inference.
- Create the following vllm-4-26b-a4b-it.yaml manifest: apiVersion : apps/v1 kind : Deployment metadata : name : vllm-gemma-deployment spec : replicas : 1 selector : matchLabels : app : gemma-server template : metadata : labels : app : gemma-server ai.gke.io/model : gemma-4-26b-a4b-it ai.gke.io/inference-server : vllm examples.ai.gke.io/source : user-guide spec : containers : - name : inference-server image : us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:gemma4 resources : requests : cpu : "20" memory : "80Gi" ephemeral-storage : "80Gi" nvidia.com/gpu : "1" limits : cpu : "20" memory : "80Gi" ephemeral-storage : "80Gi" nvidia.com/gpu : "1" command : [ "python3" , "-m" , "vllm.entrypoints.api server" ] args : - --model=$(MODEL ID) - --host=0.0.0.0 - --port=8000 - --tensor-parallel-size=1 - --enable-log-requests - --enable-chunked-prefill - --enable-prefix-caching - --enable-auto-tool-choice - --generation-config=auto - --tool-call-parser=gemma4 - --dtype=bfloat16 - --max-num-seqs=16 - --max-model-len=16384 - --gpu-memory-utilization=0.95 - --reasoning-parser=gemma4 - --trust-remote-code env : - name : LD LIBRARY PATH value : ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 - name : MODEL ID value : google/gemma-4-26B-A4B-it volumeMounts : - mountPath : /dev/shm name : dshm volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : nvidia-rtx-pro-6000 cloud.google.com/gke-gpu-driver-version : latest --- apiVersion : v1 kind : Service metadata : name : llm-service spec : selector : app : gemma-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 8000 Apply the manifest: kubectl apply -f vllm-4-26b-a4b-it.yaml In our example, we limit the context window size by 16 K using vLLM option --max-model-len=16384 .
- Create the following vllm-4-31b-it.yaml manifest: apiVersion : apps/v1 kind : Deployment metadata : name : vllm-gemma-deployment spec : replicas : 1 selector : matchLabels : app : gemma-server template : metadata : labels : app : gemma-server ai.gke.io/model : gemma-4-31b-it ai.gke.io/inference-server : vllm examples.ai.gke.io/source : user-guide spec : containers : - name : inference-server image : us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:gemma4 resources : requests : cpu : "22" memory : "100Gi" ephemeral-storage : "80Gi" nvidia.com/gpu : "1" limits : cpu : "22" memory : "100Gi" ephemeral-storage : "80Gi" nvidia.com/gpu : "1" command : [ "python3" , "-m" , "vllm.entrypoints.api server" ] args : - --model=$(MODEL ID) - --host=0.0.0.0 - --port=8000 - --tensor-parallel-size=1 - --enable-log-requests - --enable-chunked-prefill - --enable-prefix-caching - --enable-auto-tool-choice - --generation-config=auto - --tool-call-parser=gemma4 - --dtype=bfloat16 - --max-num-seqs=16 - --max-model-len=16384 - --gpu-memory-utilization=0.95 - --reasoning-parser=gemma4 - --trust-remote-code env : - name : LD LIBRARY PATH value : ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 - name : MODEL ID value : google/gemma-4-31B-it volumeMounts : - mountPath : /dev/shm name : dshm volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : nvidia-rtx-pro-6000 cloud.google.com/gke-gpu-driver-version : latest --- apiVersion : v1 kind : Service metadata : name : llm-service spec : selector : app : gemma-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 8000 Apply the manifest: kubectl apply -f vllm-4-31b-it.yaml In our example, we limit the context window size by 16 K using vLLM option --max-model-len=16384 .
- Create the following vllm-4-e4b-it.yaml manifest: apiVersion : apps/v1 kind : Deployment metadata : name : vllm-gemma-deployment spec : replicas : 1 selector : matchLabels : app : gemma-server template : metadata : labels : app : gemma-server ai.gke.io/model : gemma-4-e4b-it ai.gke.io/inference-server : vllm examples.ai.gke.io/source : user-guide spec : containers : - name : inference-server image : us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:gemma4 resources : requests : cpu : "4" memory : "20Gi" ephemeral-storage : "20Gi" nvidia.com/gpu : "1" limits : cpu : "4" memory : "20Gi" ephemeral-storage : "20Gi" nvidia.com/gpu : "1" command : [ "python3" , "-m" , "vllm.entrypoints.api server" ] args : - --model=$(MODEL ID) - --host=0.0.0.0 - --port=8000 - --tensor-parallel-size=1 - --enable-log-requests - --enable-chunked-prefill - --enable-prefix-caching - --enable-auto-tool-choice - --generation-config=auto - --tool-call-parser=gemma4 - --dtype=bfloat16 - --max-num-seqs=16 - --max-model-len=32768 - --gpu-memory-utilization=0.95 - --reasoning-parser=gemma4 - --trust-remote-code env : - name : LD LIBRARY PATH value : ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 - name : MODEL ID value : google/gemma-4-E4b-it volumeMounts : - mountPath : /dev/shm name : dshm volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : nvidia-rtx-pro-6000 cloud.google.com/gke-gpu-driver-version : latest --- apiVersion : v1 kind : Service metadata : name : llm-service spec : selector : app : gemma-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 8000 Apply the manifest: kubectl apply -f vllm-4-E4b-it.yaml In our example, we limit the context window by 32 K using vLLM option --max-model-len=32768 .

### "Build a RAG chatbot with GKE and Cloud Storage \_|\_ Kubernetes Engine \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot Standard This tutorial shows you how to integrate a large language model (LLM) application based on retrieval-augmented generation (RAG) with PDF files that you upload to a Cloud Storage bucket.
- Discover solutions for running data-intensive workloads with GKE .
- Qdrant export DOCKER REPO = " ${ REGION } -docker.pkg.dev/ ${ PROJECT ID } / ${ KUBERNETES CLUSTER PREFIX } -images" gcloud builds submit qdrant/docker/chatbot --region = ${ REGION } \ --tag ${ DOCKER REPO } /chatbot:1.0 --async gcloud builds submit qdrant/docker/embed-docs --region = ${ REGION } \ --tag ${ DOCKER REPO } /embed-docs:1.0 --async Elasticsearch export DOCKER REPO = " ${ REGION } -docker.pkg.dev/ ${ PROJECT ID } / ${ KUBERNETES CLUSTER PREFIX } -images" gcloud builds submit elasticsearch/docker/chatbot --region = ${ REGION } \ --tag ${ DOCKER REPO } /chatbot:1.0 --async gcloud builds submit elasticsearch/docker/embed-docs --region = ${ REGION } \ --tag ${ DOCKER REPO } /embed-docs:1.0 --async PGVector export DOCKER REPO = " ${ REGION } -docker.pkg.dev/ ${ PROJECT ID } / ${ KUBERNETES CLUSTER PREFIX } -images" gcloud builds submit postgres-pgvector/docker/chatbot --region = ${ REGION } \ --tag ${ DOCKER REPO } /chatbot:1.0 --async gcloud builds submit postgres-pgvector/docker/embed-docs --region = ${ REGION } \ --tag ${ DOCKER REPO } /embed-docs:1.0 --async Weaviate export DOCKER REPO = " ${ REGION } -docker.pkg.dev/ ${ PROJECT ID } / ${ KUBERNETES CLUSTER PREFIX } -images" gcloud builds submit weaviate/docker/chatbot --region = ${ REGION } \ --tag ${ DOCKER REPO } /chatbot:1.0 --async gcloud builds submit weaviate/docker/embed-docs --region = ${ REGION } \ --tag ${ DOCKER REPO } /embed-docs:1.0 --async Verify the images: gcloud artifacts docker images list $DOCKER REPO \ --project = $PROJECT ID \ --format = "value(IMAGE)" The output is similar to the following: $REGION-docker.pkg.dev/$PROJECT ID/${KUBERNETES CLUSTER PREFIX}-images/chatbot $REGION-docker.pkg.dev/$PROJECT ID/${KUBERNETES CLUSTER PREFIX}-images/embed-docs Deploy a Kubernetes Service Account with permissions to run Kubernetes Jobs: Qdrant sed "s/<PROJECT ID>/ $PROJECT ID /;s/<CLUSTER PREFIX>/ $KUBERNETES CLUSTER PREFIX /" qdrant/manifests/05-rag/service-account.yaml kubectl -n qdrant apply -f - Elasticsearch sed "s/<PROJECT ID>/ $PROJECT ID /;s/<CLUSTER PREFIX>/ $KUBERNETES CLUSTER PREFIX /" elasticsearch/manifests/05-rag/service-account.yaml kubectl -n elastic apply -f - PGVector sed "s/<PROJECT ID>/ $PROJECT ID /;s/<CLUSTER PREFIX>/ $KUBERNETES CLUSTER PREFIX /" postgres-pgvector/manifests/03-rag/service-account.yaml kubectl -n pg-ns apply -f - Weaviate sed "s/<PROJECT ID>/ $PROJECT ID /;s/<CLUSTER PREFIX>/ $KUBERNETES CLUSTER PREFIX /" weaviate/manifests/04-rag/service-account.yaml kubectl -n weaviate apply -f - When using Terraform to create the GKE cluster and have create service account set as true, a separate service account will be created and used by the cluster and nodes.
- Verify that your GKE cluster is running: gcloud container clusters list --project = ${ PROJECT ID } --location = ${ CONTROL PLANE LOCATION } The output is similar to the following: NAME LOCATION MASTER VERSION MASTER IP MACHINE TYPE NODE VERSION NUM NODES STATUS [KUBERNETES CLUSTER PREFIX]-cluster us-central1 1.30.1-gke.1329003 <EXTERNAL IP> e2-standard-2 1.30.1-gke.1329003 6 RUNNING Clone the sample code repository from GitHub: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples Navigate to the databases directory: cd kubernetes-engine-samples/databases Prepare your infrastructure Create an Artifact Registry repository, build Docker images, and push Docker images to Artifact Registry: Create an Artifact Registry repository: gcloud artifacts repositories create ${ KUBERNETES CLUSTER PREFIX } -images \ --repository-format = docker \ --location = ${ REGION } \ --description = "Vector database images repository" \ --async Set the storage.objectAdmin and artifactregistry.admin permissions on the Compute Engine service account to use Cloud Build to build and push Docker images for the embed-docs and chatbot Services. export PROJECT NUMBER = PROJECT NUMBER gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ PROJECT NUMBER } -compute@developer.gserviceaccount.com" \ --role = "roles/storage.objectAdmin" gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ PROJECT NUMBER } -compute@developer.gserviceaccount.com" \ --role = "roles/artifactregistry.admin" Replace PROJECT NUMBER with your Google Cloud project number.

