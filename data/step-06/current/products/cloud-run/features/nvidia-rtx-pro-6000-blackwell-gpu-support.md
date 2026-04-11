---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.886Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "NVIDIA RTX PRO 6000 Blackwell GPU support"
feature_slug: "nvidia-rtx-pro-6000-blackwell-gpu-support"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "nvidia"
  - "rtx"
  - "pro"
  - "6000"
  - "blackwell"
  - "gpu"
  - "run"
  - "supports"
---

# NVIDIA RTX PRO 6000 Blackwell GPU support

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports NVIDIA RTX PRO 6000 Blackwell GPUs for supported workloads.

## Extended Definition

Cloud Run supports NVIDIA RTX PRO 6000 Blackwell GPUs for supported workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)

## Supporting Pages

### Run LLM inference on GPUs with Gemma 4 and Ollama \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note the following important flags in this command: --concurrency 16 is set to match the value of the environment variable OLLAMA NUM PARALLEL . --gpu 1 with --gpu-type nvidia-rtx-pro-6000 assigns 1 NVIDIA RTX PRO 6000 Blackwell GPU GPU to every Cloud Run instance in the service. --max-instances 1 specifies the maximum number of instances to scale to.
- Deploy the Ollama service for LLM inference Deploy the service to Cloud Run: gcloud beta run deploy SERVICE-NAME \ --image "ollama/ollama:latest" \ --project PROJECT ID \ --region REGION \ --no-allow-unauthenticated \ --cpu 20 \ --memory 80Gi \ --gpu 1 \ --gpu-type nvidia-rtx-pro-6000 \ --no-gpu-zonal-redundancy \ --max-instances 1 \ --concurrency 16 \ --timeout 600 \ --set-env-vars = OLLAMA NUM PARALLEL = 16 \ --set-env-vars = OLLAMA HOST = 0 .0.0.0:8080 \ --set-env-vars = OLLAMA DEBUG = false \ --set-env-vars = OLLAMA KEEP ALIVE = -1 \ --startup-probe tcpSocket.port = 8080 ,initialDelaySeconds = 240 ,failureThreshold = 1 ,timeoutSeconds = 240 ,periodSeconds = 240 \ --command "bash" \ --args = "-c,(sleep 15 && ollama pull MODEL NAME ) & ollama serve" Replace: SERVICE-NAME with a unique name for the Cloud Run service.
- Request Total Nvidia RTX Pro 6000 GPU allocation, in milli GPU, without zonal redundancy, per project per region quota under Cloud Run Admin API in the Quotas and system limits page to complete this tutorial.
- REGION with a Google Cloud region where nvidia-rtx-pro-6000 GPUs are supported for Cloud Run, such as us-central1 .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- NVIDIA libraries By default, all of the NVIDIA L4 and NVIDIA RTX PRO 6000 Blackwell GPU driver libraries are mounted under /usr/local/nvidia/lib64 .
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.
- Cloud Run automatically appends this path to the LD LIBRARY PATH environment variable (i.e. ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 ) of the container with the GPU.
- The following table lists some of the available metadata server information: Path Description /computeMetadata/v1/project/project-id Project ID of the project the Cloud Run resource belongs to. /computeMetadata/v1/project/numeric-project-id Project number of the project the Cloud Run resource belongs to. /computeMetadata/v1/instance/region Region of this Cloud Run resource, returns projects/ PROJECT-NUMBER /regions/ REGION /computeMetadata/v1/instance/id Unique identifier of the instance (also available in logs ). /computeMetadata/v1/instance/service-accounts/default/email Email for the service identity of this Cloud Run resource. /computeMetadata/v1/instance/service-accounts/default/token Generates an OAuth2 access token for the service account of this Cloud Run resource .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- NVIDIA libraries By default, all of the NVIDIA L4 and NVIDIA RTX PRO 6000 Blackwell GPU driver libraries are mounted under /usr/local/nvidia/lib64 .
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.
- Cloud Run automatically appends this path to the LD LIBRARY PATH environment variable (i.e. ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 ) of the container with the GPU.
- The following table lists some of the available metadata server information: Path Description /computeMetadata/v1/project/project-id Project ID of the project the Cloud Run resource belongs to. /computeMetadata/v1/project/numeric-project-id Project number of the project the Cloud Run resource belongs to. /computeMetadata/v1/instance/region Region of this Cloud Run resource, returns projects/ PROJECT-NUMBER /regions/ REGION /computeMetadata/v1/instance/id Unique identifier of the instance (also available in logs ). /computeMetadata/v1/instance/service-accounts/default/email Email for the service identity of this Cloud Run resource. /computeMetadata/v1/instance/service-accounts/default/token Generates an OAuth2 access token for the service account of this Cloud Run resource .

