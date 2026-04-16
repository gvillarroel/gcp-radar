---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.146Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Inference Gateway v1 API"
feature_slug: "inference-gateway-v1-api"
latest_feature_date: "2025-12-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads"
keywords:
  - "inferenceobjective"
  - "inference"
  - "graduated"
  - "gateway"
  - "uses"
---

# Inference Gateway v1 API

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The Inference Gateway API has graduated to v1 and now uses the InferenceObjective resource.

## Extended Definition

The Inference Gateway API has graduated to v1 and now uses the InferenceObjective resource.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads)

## Supporting Pages

### About GKE Inference Gateway \_|\_ GKE networking \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Figure: GKE Inference Gateway resource model with inference-focused personas How GKE Inference Gateway works GKE Inference Gateway uses Gateway API extensions and model-specific routing logic to handle client requests to an AI model.
- GKE Inference Gateway uses the following two mechanisms to manage traffic distribution: Endpoint picking : dynamically selects the most suitable model server to handle an inference request.
- Figure: GKE Inference Gateway resource model The following diagram illustrates the resource model that focuses on two new inference-focused personas and the resources they manage.
- GKE Inference Gateway then uses this identifier to route the request based on rules defined in the Gateway API HTTPRoute object.

### "Analyze model serving performance and costs with GKE Inference Quickstart\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- For example, the llm-d serving stack uses vLLM as its underlying model server, adding a layer of orchestration and routing on top of the core inference engine.
- Cost estimation To estimate per-token costs of your accelerator VMs, Inference Quickstart uses a configurable output-to-input cost ratio.
- The following is an example of a command to enable observability features: gcloud container clusters update $CLUSTER NAME \ --project = $PROJECT ID \ --location = $LOCATION \ --enable-managed-prometheus \ --logging = SYSTEM,WORKLOAD \ --monitoring = SYSTEM,DEPLOYMENT,HPA,POD,DCGM \ --auto-monitoring-scope = ALL For more information, see Monitor your inference workloads . (HPA only) Deploy a metrics adapter : A metrics adapter, such as the Custom Metrics Stackdriver Adapter , is necessary if HPA resources were generated in the deployment manifests.
- Prepare to use the command line interface If you use the gcloud CLI to run Inference Quickstart, you also need to run these additional commands: Enable the gkerecommender.googleapis.com API: gcloud services enable gkerecommender.googleapis.com Set the billing quota project that you use for API calls: gcloud config set billing/quota project PROJECT ID Check that your gcloud CLI version is at least 536.0.1.

### "Optimize GKE resource utilization for mixed AI/ML training and inference\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads)
- Source ID: `site-docs-reference-required-4`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- It uses tensor parallelism , by setting the NUM SHARD environment variable, to fit the model into GPU memory. apiVersion : apps/v1 kind : Deployment metadata : name : tgi-gemma-deployment labels : app : gemma-server spec : replicas : 1 selector : matchLabels : app : gemma-server template : metadata : labels : app : gemma-server ai.gke.io/model : gemma-2-9b-it ai.gke.io/inference-server : text-generation-inference examples.ai.gke.io/source : user-guide kueue.x-k8s.io/queue-name : lq spec : priorityClassName : high-priority-preempting containers : - name : inference-server image : us-docker.pkg.dev/deeplearning-platform-release/gcr.io/huggingface-text-generation-inference-cu121.2-1.ubuntu2204.py310 resources : requests : cpu : "4" memory : "30Gi" ephemeral-storage : "30Gi" nvidia.com/gpu : "2" limits : cpu : "4" memory : "30Gi" ephemeral-storage : "30Gi" nvidia.com/gpu : "2" env : - name : AIP HTTP PORT value : '8000' - name : NUM SHARD value : '2' - name : MODEL ID value : google/gemma-2-9b-it - name : HUGGING FACE HUB TOKEN valueFrom : secretKeyRef : name : hf-secret key : hf api token volumeMounts : - mountPath : /dev/shm name : dshm volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : "nvidia-l4" --- apiVersion : v1 kind : Service metadata : name : llm-service spec : selector : app : gemma-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 8000 Apply the manifest by running the following command: kubectl apply --filename = tgi-gemma-2-9b-it-hp.yaml --namespace = llm The deployment operation will take a few minutes to complete.
- This tutorial uses the Workload resource type to group the inference and fine-tuning workloads, respectively.
- The Deployment prioritizes inference tasks and uses two GPUs for the model.
- Create a Standard cluster: gcloud container clusters create ${ CLUSTER NAME } \ --project = ${ PROJECT ID } \ --location = ${ REGION } \ --workload-pool = ${ PROJECT ID } .svc.id.goog \ --release-channel = rapid \ --machine-type = e2-standard-4 \ --addons GcsFuseCsiDriver \ --num-nodes = 1 Create the GPU node pool for inference and fine-tuning workloads: gcloud container node-pools create gpupool \ --accelerator type = ${ GPU POOL ACCELERATOR TYPE } ,count = 2 ,gpu-driver-version = latest \ --project = ${ PROJECT ID } \ --location = ${ REGION } \ --node-locations = ${ REGION } -a \ --cluster = ${ CLUSTER NAME } \ --machine-type = ${ GPU POOL MACHINE TYPE } \ --num-nodes = 3 Create the Cloud Storage bucket for the fine-tuning job: gcloud storage buckets create gs:// ${ MODEL BUCKET } \ --location ${ REGION } \ --uniform-bucket-level-access To grant access to the Cloud Storage bucket, run this command: gcloud storage buckets add-iam-policy-binding "gs:// $MODEL BUCKET " \ --role = roles/storage.objectAdmin \ --member = principal://iam.googleapis.com/projects/ $PROJECT NUMBER /locations/global/workloadIdentityPools/ $PROJECT ID .svc.id.goog/subject/ns/llm/sa/default \ --condition = None To get authentication credentials for the cluster, run this command: gcloud container clusters get-credentials llm-cluster \ --location = $REGION \ --project = $PROJECT ID Create a namespace for your Deployments.

