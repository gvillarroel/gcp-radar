---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.397Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "NVIDIA RTX PRO 6000 Blackwell GPU support"
feature_slug: "nvidia-rtx-pro-6000-blackwell-gpu-support"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama"
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus"
  - "https://docs.cloud.google.com/run/docs/tutorials/image-processing"
keywords:
  - "blackwell"
  - "nvidia"
  - "6000"
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

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- [https://docs.cloud.google.com/run/docs/tutorials/image-processing](https://docs.cloud.google.com/run/docs/tutorials/image-processing)

## Supporting Pages

### "Autoscale worker pools based on Prometheus metrics \_|\_ Cloud Run \_|\_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- Source ID: `site-docs-root-2`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Run LLM inference on GPUs with Gemma 4 and Ollama \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note the following important flags in this command: --concurrency 16 is set to match the value of the environment variable OLLAMA NUM PARALLEL . --gpu 1 with --gpu-type nvidia-rtx-pro-6000 assigns 1 NVIDIA RTX PRO 6000 Blackwell GPU GPU to every Cloud Run instance in the service. --max-instances 1 specifies the maximum number of instances to scale to.
- Deploy the Ollama service for LLM inference Deploy the service to Cloud Run: gcloud beta run deploy SERVICE-NAME \ --image "ollama/ollama:latest" \ --project PROJECT ID \ --region REGION \ --no-allow-unauthenticated \ --cpu 20 \ --memory 80Gi \ --gpu 1 \ --gpu-type nvidia-rtx-pro-6000 \ --no-gpu-zonal-redundancy \ --max-instances 1 \ --concurrency 16 \ --timeout 600 \ --set-env-vars = OLLAMA NUM PARALLEL = 16 \ --set-env-vars = OLLAMA HOST = 0 .0.0.0:8080 \ --set-env-vars = OLLAMA DEBUG = false \ --set-env-vars = OLLAMA KEEP ALIVE = -1 \ --startup-probe tcpSocket.port = 8080 ,initialDelaySeconds = 240 ,failureThreshold = 1 ,timeoutSeconds = 240 ,periodSeconds = 240 \ --command "bash" \ --args = "-c,(sleep 15 && ollama pull MODEL NAME ) & ollama serve" Replace: SERVICE-NAME with a unique name for the Cloud Run service.
- It has to be equal to or lower than your project's NVIDIA RTX Pro 6000 GPU ( Total NVIDIA RTX Pro 6000 GPU allocation, in milli GPU, without zonal redundancy, per project per region ) quota. --no-allow-unauthenticated restricts unauthenticated access to the service.
- Request Total Nvidia RTX Pro 6000 GPU allocation, in milli GPU, without zonal redundancy, per project per region quota under Cloud Run Admin API in the Quotas and system limits page to complete this tutorial.

### "Process images from Cloud Storage tutorial \_|\_ Cloud Run \_|\_ Google\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/image-processing](https://docs.cloud.google.com/run/docs/tutorials/image-processing)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

