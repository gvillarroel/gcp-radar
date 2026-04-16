---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:52:40.541Z"
product_name: "AI Hypercomputer"
product_slug: "ai-hypercomputer"
feature_name: "A4X VM monitoring metrics in Cloud Monitoring"
feature_slug: "a4x-vm-monitoring-metrics-in-cloud-monitoring"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/vllm-gke-llama4"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/vllm-gke-deepseek-speciale"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/gpt-oss-vllm-inference"
keywords:
  - "monitoring"
  - "monitor"
  - "specific"
  - "metrics"
  - "enables"
---

# A4X VM monitoring metrics in Cloud Monitoring

Product: AI Hypercomputer
Coverage: MEDIUM

## Step 02 Summary

Enables use of specific Cloud Monitoring metrics to monitor A4X VM GPU health and troubleshooting signals.

## Extended Definition

Enables use of specific Cloud Monitoring metrics to monitor A4X VM GPU health and troubleshooting signals.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/vllm-gke-llama4](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/vllm-gke-llama4)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/vllm-gke-deepseek-speciale](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/vllm-gke-deepseek-speciale)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/gpt-oss-vllm-inference](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/gpt-oss-vllm-inference)

## Supporting Pages

### "Use vLLM on GKE to run inference with DeepSeek-V3.2-Speciale \_|\_ AI Hypercomputer\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/vllm-gke-deepseek-speciale](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/vllm-gke-deepseek-speciale)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Create a Kubernetes secret to store your Hugging Face credentials To create a Kubernetes secret to store your Hugging Face credentials, do the following: Configure kubectl to communicate with your GKE cluster: gcloud container clusters get-credentials $CLUSTER NAME \ --location=$REGION Create a Kubernetes secret that contains the Hugging Face read access token that you created in an earlier step: kubectl create secret generic hf-secret \ --from-literal=hf token=${HUGGING FACE TOKEN} \ --dry-run=client -o yaml kubectl apply -f - Deploy a vLLM container to your GKE cluster To deploy the vLLM container to serve the deepseek-ai/DeepSeek-V3.2-Speciale model, do the following: Create a vllm-deepseek3-2.yaml file with your chosen vLLM deployment: apiVersion : apps/v1 kind : Deployment metadata : name : deepseek3-2-deploy spec : replicas : 1 selector : matchLabels : app : deepseek template : metadata : labels : app : deepseek ai.gke.io/model : deepseek-v3-2 ai.gke.io/inference-server : vllm examples.ai.gke.io/source : user-guide spec : containers : - name : vllm-inference image : us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:model-garden.pytorch-vllm-serve-release 20251126.00 p0 resources : requests : cpu : "10" memory : "1000Gi" ephemeral-storage : "1Ti" nvidia.com/gpu : "8" limits : cpu : "10" memory : "1000Gi" ephemeral-storage : "1Ti" nvidia.com/gpu : "8" command : [ "python3" , "-m" , "vllm.entrypoints.openai.api server" ] args : - --model=$(MODEL ID) - --tensor-parallel-size=8 - --host=0.0.0.0 - --port=8000 - --max-model-len=131072 - --max-num-seqs=16 - --enable-chunked-prefill - --gpu-memory-utilization=0.90 - --enforce-eager - --trust-remote-code env : - name : MODEL ID value : deepseek-ai/DeepSeek-V3.2-Speciale - name : HUGGING FACE HUB TOKEN valueFrom : secretKeyRef : name : hf-secret key : hf token volumeMounts : - mountPath : /dev/shm name : dshm livenessProbe : httpGet : path : /health port : 8000 initialDelaySeconds : 1800 periodSeconds : 10 readinessProbe : httpGet : path : /health port : 8000 initialDelaySeconds : 1800 periodSeconds : 5 volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : nvidia-b200 cloud.google.com/reservation-name : $RESERVATION URL cloud.google.com/reservation-affinity : "specific" cloud.google.com/gke-gpu-driver-version : latest --- apiVersion : v1 kind : Service metadata : name : deepseek-service spec : selector : app : deepseek type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 8000 --- apiVersion : monitoring.googleapis.com/v1 kind : PodMonitoring metadata : name : deepseek-monitoring spec : selector : matchLabels : app : deepseek endpoints : - port : 8000 path : /metrics interval : 30s Apply the vllm-deepseek3-2.yaml file to your GKE cluster: envsubst < vllm-deepseek3-2.yaml kubectl apply -f - During the deployment process, the container must download the deepseek-ai/DeepSeek-V3.2-Speciale model from Hugging Face.
- For information about using Google Cloud Managed Service for Prometheus to collect metrics from your model, see the vLLM observability guidance in the Cloud Monitoring documentation.
- Keep the explanation under 300 words.< im end >\n< im start >assistant\n", "max tokens": 1024, "temperature": 0.7, "stream": false, "stop": ["< im end >"] }' The output that you see is similar to the following: { "id" : "cmpl-be345f0499e949ed8500e533be2cfe3f" , "object" : "text completion" , "created" : 1764803171 , "model" : "deepseek-ai/DeepSeek-V3.2-Speciale" , "choices" : [ { "index" : 0 , "text" : "The ReAct pattern integrates reasoning (thoughts) and actions (tool calls) within an agentic loop... [TRUNCATED FOR BREVITY] ...ReAct improves transparency and reliability by explicit reasoning steps." , "logprobs" : null , "finish reason" : "stop" , "stop reason" : "< im end >" , "token ids" : null , "prompt logprobs" : null , "prompt token ids" : null } ], "service tier" : null , "system fingerprint" : null , "usage" : { "prompt tokens" : 57 , "total tokens" : 317 , "completion tokens" : 260 , "prompt tokens details" : null }, "kv transfer params" : null } Observe model performance To observe the performance of your model, you can use the vLLM dashboard integration in Cloud Monitoring .
- To see the completion status, run the following command: kubectl wait \ --for=condition=Available \ --timeout=1800s deployment/deepseek3-2-deploy The --timeout=1800s flag allows the command to monitor the deployment for up to 30 minutes.

### "Use vLLM on GKE to run inference with Llama 4 \_|\_ AI Hypercomputer \_\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/vllm-gke-llama4](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/vllm-gke-llama4)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Create a Kubernetes secret to store your Hugging Face credentials To create a Kubernetes secret to store your Hugging Face credentials, do the following: Configure kubectl to communicate with your GKE cluster: gcloud container clusters get-credentials $CLUSTER NAME \ --location=$REGION Create a Kubernetes secret that contains the Hugging Face read access token that you created in an earlier step: kubectl create secret generic hf-secret \ --from-literal=hf api token=${HUGGING FACE TOKEN} \ --dry-run=client -o yaml kubectl apply -f - Deploy a vLLM container to your GKE cluster To deploy the vLLM container to serve the Llama-4-Scout-17B-16E-Instruct model, do the following: Create a vllm-l4-17b.yaml file with your chosen vLLM deployment: apiVersion : apps/v1 kind : Deployment metadata : name : vllm-llama4-deployment spec : replicas : 1 selector : matchLabels : app : llama4-server template : metadata : labels : app : llama4-server ai.gke.io/model : llama-4-scout-17b ai.gke.io/inference-server : vllm examples.ai.gke.io/source : user-guide spec : containers : - name : inference-server image : us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250722 0916 RC01 resources : requests : cpu : "10" memory : "128Gi" ephemeral-storage : "240Gi" nvidia.com/gpu : "8" limits : cpu : "10" memory : "128Gi" ephemeral-storage : "240Gi" nvidia.com/gpu : "8" command : [ "python3" , "-m" , "vllm.entrypoints.openai.api server" ] args : - --model=$(MODEL ID) - --tensor-parallel-size=8 - --host=0.0.0.0 - --port=8000 - --max-model-len=4096 - --max-num-seqs=4 env : - name : MODEL ID value : meta-llama/Llama-4-Scout-17B-16E-Instruct - name : HUGGING FACE HUB TOKEN valueFrom : secretKeyRef : name : hf-secret key : hf api token volumeMounts : - mountPath : /dev/shm name : dshm livenessProbe : httpGet : path : /health port : 8000 initialDelaySeconds : 1800 periodSeconds : 10 readinessProbe : httpGet : path : /health port : 8000 initialDelaySeconds : 1800 periodSeconds : 5 volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : nvidia-b200 cloud.google.com/reservation-name : RESERVATION URL cloud.google.com/reservation-affinity : "specific" cloud.google.com/gke-gpu-driver-version : latest --- apiVersion : v1 kind : Service metadata : name : llm-service spec : selector : app : llama4-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 8000 --- apiVersion : monitoring.googleapis.com/v1 kind : PodMonitoring metadata : name : vllm-llama4-monitoring spec : selector : matchLabels : app : llama4-server endpoints : - port : 8000 path : /metrics interval : 30s Apply the vllm-l4-17b.yaml file to your GKE cluster: kubectl apply -f vllm-l4-17b.yaml During the deployment process, the container must download the Llama-4-Scout-17B-16E-Instruct model from Hugging Face.
- For information about using Google Cloud Managed Service for Prometheus to collect metrics from your model, see the vLLM observability guidance in the Cloud Monitoring documentation.
- You can then chat with your model by using curl : curl http://127.0.0.1:8000/v1/chat/completions \ -X POST \ -H "Content-Type: application/json" \ -d '{ "model": "meta-llama/Llama-4-Scout-17B-16E-Instruct", "messages": [ { "role": "user", "content": "Describe a sailboat in one short sentence?" } ] }' The output that you see is similar to the following: { "id" : "chatcmpl-ec0ad6310c494a889b17600881c06e3d" , "object" : "chat.completion" , "created" : 1754073279 , "model" : "meta-llama/Llama-4-Scout-17B-16E-Instruct" , "choices" : [ { "index" : 0 , "message" : { "role" : "assistant" , "content" : "A sailboat is a type of watercraft that uses the wind for propulsion, typically featuring a hull, mast, and one or more sails." , "refusal" : null , "annotations" : null , "audio" : null , "function call" : null , "tool calls" : [], "reasoning content" : null }, "logprobs" : null , "finish reason" : "stop" , "stop reason" : null } ], "service tier" : null , "system fingerprint" : null , "usage" : { "prompt tokens" : 19 , "total tokens" : 49 , "completion tokens" : 30 , "prompt tokens details" : null }, "prompt logprobs" : null , "kv transfer params" : null } Observe model performance To observe the performance of your model, you can use the vLLM dashboard integration in Cloud Monitoring .
- To see the completion status, run the following command: kubectl wait \ --for=condition=Available \ --timeout=1800s deployment/vllm-llama4-deployment The --timeout=1800s flag allows the command to monitor the deployment for up to 30 minutes.

### "Use vLLM on GKE to run inference with gpt-oss-120b \_|\_ AI Hypercomputer\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/gpt-oss-vllm-inference](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/gpt-oss-vllm-inference)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Create a Kubernetes secret for Hugging Face credentials To create a Kubernetes secret for Hugging Face credentials, do the following: Configure kubectl to communicate with your GKE cluster: gcloud container clusters get-credentials $CLUSTER NAME \ --location = $REGION Create a Kubernetes secret to store your Hugging Face token: kubectl create secret generic hf-secret \ --from-literal = hf token = ${ HUGGING FACE TOKEN } \ --dry-run = client -o yaml kubectl apply -f - Deploy a vLLM container to your GKE cluster Create a vllm-gpt-oss-120b.yaml file with your chosen vLLM deployment: apiVersion: apps/v1 kind: Deployment metadata: name: vllm-gpt-oss-deployment spec: replicas: 1 selector: matchLabels: app: gpt-oss template: metadata: labels: app: gpt-oss ai.gke.io/model: gpt-oss-120b ai.gke.io/inference-server: vllm examples.ai.gke.io/source: user-guide spec: containers: - name: vllm-inference image: us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250822 0916 RC01 resources: requests: cpu: "10" memory: "128Gi" ephemeral-storage: "240Gi" nvidia.com/gpu: "8" limits: cpu: "10" memory: "128Gi" ephemeral-storage: "240Gi" nvidia.com/gpu: "8" command: ["python3", "-m", "vllm.entrypoints.openai.api server"] args: - --model=$(MODEL ID) - --tensor-parallel-size=2 - --host=0.0.0.0 - --port=8000 - --max-model-len=8192 - --max-num-seqs=4 env: - name: MODEL ID value: openai/gpt-oss-120b - name: HUGGING FACE HUB TOKEN valueFrom: secretKeyRef: name: hf-secret key: hf token volumeMounts: - mountPath: /dev/shm name: dshm livenessProbe: httpGet: path: /health port: 8000 initialDelaySeconds: 1200 periodSeconds: 10 readinessProbe: httpGet: path: /health port: 8000 initialDelaySeconds: 1200 periodSeconds: 5 volumes: - name: dshm emptyDir: medium: Memory nodeSelector: cloud.google.com/gke-accelerator: nvidia-b200 cloud.google.com/reservation-name: $RESERVATION URL cloud.google.com/reservation-affinity: "specific" cloud.google.com/gke-gpu-driver-version: latest --- apiVersion: v1 kind: Service metadata: name: oss-service spec: selector: app: gpt-oss type: ClusterIP ports: - protocol: TCP port: 8000 targetPort: 8000 --- apiVersion: monitoring.googleapis.com/v1 kind: PodMonitoring metadata: name: vllm-gpt-oss-monitoring spec: selector: matchLabels: app: gpt-oss endpoints: - port: 8000 path: /metrics interval: 30s Apply the vllm-gpt-oss-120b.yaml file to your GKE cluster: envsubst < vllm-gpt-oss-120b.yaml kubectl apply -f - During the deployment process, the container must download the gpt-oss-120b model from Hugging Face.
- Provide a short sentence." }, "logprobs": null, "finish reason": "stop", "stop reason": null } ], "service tier": null, "system fingerprint": null, "usage": { "prompt tokens": 80, "total tokens": 142, "completion tokens": 62, "prompt tokens details": null }, "prompt logprobs": null, "kv transfer params": null } Observe the performance of the model To observe your model's performance, you can use the vLLM dashboard integration in Cloud Monitoring.
- For information, see vLLM in the Monitoring documentation.
- To see the completion status, run the following command: kubectl wait \ --for=condition=Available \ --timeout=1200s deployment/vllm-gpt-oss-deployment The --timeout=1200s flag allows the command to monitor the deployment for up to 20 minutes.

