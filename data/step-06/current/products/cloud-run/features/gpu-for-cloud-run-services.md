---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.903Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "GPU for Cloud Run services"
feature_slug: "gpu-for-cloud-run-services"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient"
keywords:
  - "gpu"
  - "for"
  - "run"
  - "services"
  - "configuration"
  - "workloads"
---

# GPU for Cloud Run services

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run services support GPU configuration for service workloads.

## Extended Definition

Cloud Run services support GPU configuration for service workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient)

## Supporting Pages

### Run LLM inference on GPUs with Gemma 4 and Ollama \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deploy the Ollama service for LLM inference Deploy the service to Cloud Run: gcloud beta run deploy SERVICE-NAME \ --image "ollama/ollama:latest" \ --project PROJECT ID \ --region REGION \ --no-allow-unauthenticated \ --cpu 20 \ --memory 80Gi \ --gpu 1 \ --gpu-type nvidia-rtx-pro-6000 \ --no-gpu-zonal-redundancy \ --max-instances 1 \ --concurrency 16 \ --timeout 600 \ --set-env-vars = OLLAMA NUM PARALLEL = 16 \ --set-env-vars = OLLAMA HOST = 0 .0.0.0:8080 \ --set-env-vars = OLLAMA DEBUG = false \ --set-env-vars = OLLAMA KEEP ALIVE = -1 \ --startup-probe tcpSocket.port = 8080 ,initialDelaySeconds = 240 ,failureThreshold = 1 ,timeoutSeconds = 240 ,periodSeconds = 240 \ --command "bash" \ --args = "-c,(sleep 15 && ollama pull MODEL NAME ) & ollama serve" Replace: SERVICE-NAME with a unique name for the Cloud Run service.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project What's next Configure GPU Best practices: AI inference on Cloud Run with GPUs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To send requests to the Ollama service, add a header with a valid OIDC token to the requests, for example using the Cloud Run developer proxy : Start the proxy, and when prompted to install the cloud-run-proxy component, choose Y : gcloud run services proxy SERVICE-NAME \ --project PROJECT ID \ --region REGION \ --port = 9090 Send a request to it in a separate terminal tab, leaving the proxy running.
- REGION with a Google Cloud region where nvidia-rtx-pro-6000 GPUs are supported for Cloud Run, such as us-central1 .

### "Class ServicesAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)
- Source ID: `site-python-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 async def sample list services(): Create a client client = run v2 .
- ListServicesRequest ( parent="parent value", ) Make the request page result = client. list services (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.run v2.types.ListServicesRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = run v2 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = run v2 .

### "Class ServicesClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient)
- Source ID: `site-python-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 def sample list services(): Create a client client = run v2 .
- ListServicesRequest ( parent="parent value", ) Make the request page result = client. list services (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.run v2.types.ListServicesRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = run v2 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = run v2 .

