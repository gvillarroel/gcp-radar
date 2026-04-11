---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.904Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "GPU zonal redundancy options"
feature_slug: "gpu-zonal-redundancy-options"
latest_feature_date: "2025-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient"
keywords:
  - "gpu"
  - "zonal"
  - "redundancy"
  - "options"
  - "run"
  - "lets"
  - "services"
  - "use"
---

# GPU zonal redundancy options

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run lets GPU services use zonal redundancy or non-redundant GPU configurations and request quota for either option.

## Extended Definition

Cloud Run lets GPU services use zonal redundancy or non-redundant GPU configurations and request quota for either option.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)

## Supporting Pages

### Run LLM inference on GPUs with Gemma 4 and Ollama \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deploy the Ollama service for LLM inference Deploy the service to Cloud Run: gcloud beta run deploy SERVICE-NAME \ --image "ollama/ollama:latest" \ --project PROJECT ID \ --region REGION \ --no-allow-unauthenticated \ --cpu 20 \ --memory 80Gi \ --gpu 1 \ --gpu-type nvidia-rtx-pro-6000 \ --no-gpu-zonal-redundancy \ --max-instances 1 \ --concurrency 16 \ --timeout 600 \ --set-env-vars = OLLAMA NUM PARALLEL = 16 \ --set-env-vars = OLLAMA HOST = 0 .0.0.0:8080 \ --set-env-vars = OLLAMA DEBUG = false \ --set-env-vars = OLLAMA KEEP ALIVE = -1 \ --startup-probe tcpSocket.port = 8080 ,initialDelaySeconds = 240 ,failureThreshold = 1 ,timeoutSeconds = 240 ,periodSeconds = 240 \ --command "bash" \ --args = "-c,(sleep 15 && ollama pull MODEL NAME ) & ollama serve" Replace: SERVICE-NAME with a unique name for the Cloud Run service.
- Refer to Managing access using IAM . --no-cpu-throttling is required for enabling GPU. --no-gpu-zonal-redundancy sets zonal redundancy options depending on your zonal failover requirements and available quota.
- Request Total Nvidia RTX Pro 6000 GPU allocation, in milli GPU, without zonal redundancy, per project per region quota under Cloud Run Admin API in the Quotas and system limits page to complete this tutorial.
- See GPU zonal redundancy options for details.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- November 07, 2024 Feature You can now specify mount options when you configure Cloud Storage volume mounts for both Cloud Run services and jobs . (In Preview) October 23, 2024 Feature GPU support (Preview) is now available in the following region: europe-west4 .
- However, you can now specify GPUs with zonal redundancy or without zonal redundancy , and request quota for either of these configurations. (In Preview) March 11, 2025 Feature A new region is now available for Cloud Run GPUs : europe-west1 .
- August 20, 2025 Feature For Cloud Run source deployed services and functions with GPU enabled , Cloud Run defaults to using Cloud Build's e2-highcpu-8 machine type for the build process when you use the gcloud beta run command (Preview).
- March 25, 2025 Feature New services using GPUs by default will have zonal redundancy turned on.

### "Class ServicesAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)
- Source ID: `site-python-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 async def sample list services(): Create a client client = run v2 .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = run v2 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = run v2 .

