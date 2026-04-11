---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.908Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "GPU support"
feature_slug: "gpu-support"
latest_feature_date: "2024-10-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/configuring"
keywords:
  - "gpu"
  - "lets"
  - "run"
  - "services"
  - "use"
  - "attached"
  - "gpus"
  - "for"
---

# GPU support

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

GPU support lets Cloud Run services use attached GPUs for accelerated workloads; GPU support lets Cloud Run services use attached GPUs for accelerated workloads.

## Extended Definition

GPU support lets Cloud Run services use attached GPUs for accelerated workloads; GPU support lets Cloud Run services use attached GPUs for accelerated workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)

## Supporting Pages

### Run LLM inference on GPUs with Gemma 4 and Ollama \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REGION with a Google Cloud region where nvidia-rtx-pro-6000 GPUs are supported for Cloud Run, such as us-central1 .
- Deploy the Ollama service for LLM inference Deploy the service to Cloud Run: gcloud beta run deploy SERVICE-NAME \ --image "ollama/ollama:latest" \ --project PROJECT ID \ --region REGION \ --no-allow-unauthenticated \ --cpu 20 \ --memory 80Gi \ --gpu 1 \ --gpu-type nvidia-rtx-pro-6000 \ --no-gpu-zonal-redundancy \ --max-instances 1 \ --concurrency 16 \ --timeout 600 \ --set-env-vars = OLLAMA NUM PARALLEL = 16 \ --set-env-vars = OLLAMA HOST = 0 .0.0.0:8080 \ --set-env-vars = OLLAMA DEBUG = false \ --set-env-vars = OLLAMA KEEP ALIVE = -1 \ --startup-probe tcpSocket.port = 8080 ,initialDelaySeconds = 240 ,failureThreshold = 1 ,timeoutSeconds = 240 ,periodSeconds = 240 \ --command "bash" \ --args = "-c,(sleep 15 && ollama pull MODEL NAME ) & ollama serve" Replace: SERVICE-NAME with a unique name for the Cloud Run service.
- Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Cloud Run Admin ( roles/run.admin ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project What's next Configure GPU Best practices: AI inference on Cloud Run with GPUs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- August 20, 2025 Feature For Cloud Run source deployed services and functions with GPU enabled , Cloud Run defaults to using Cloud Build's e2-highcpu-8 machine type for the build process when you use the gcloud beta run command (Preview).
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.
- Feature Cloud Run support for network file systems such as NFS, NDB, 9P, CIFS/Samba, and Ceph , as well as Cloud Filestore and Cloud Storage FUSE , is now at general availability (GA.) November 17, 2022 Feature Logs from Cloud Run services can now be tailed or viewed in a command-line friendly format using gcloud beta run services logs tail and gcloud beta run services logs read October 07, 2022 Feature Cloud Run services can now use the Global External HTTP(S) Load Balancer to map Custom Domains using integrations (Preview).
- July 21, 2020 Feature Cloud Run resources are now available in Cloud Asset Inventory July 13, 2020 Feature The Cloud Run user interface now allows you to easily set up Continuous Deployment from Git using Cloud Build July 07, 2020 Feature External HTTP(S) Load Balancing is now supported for Cloud Run services via Serverless network endpoint groups .

### Configure Cloud Run services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table explains the features for this section: Section Feature Description A Use HTTP/2 for services Configure your service to use end-to-end HTTP/2 , which prevents Cloud Run from downgrading requests to HTTP/1.
- C GPU If you need to host AI workloads, such as inference models and model training, you can configure Cloud Run services with GPUs .
- The following table explains the features for this section: Section Feature Description A Service account The Cloud Run service identity is the service account that is used as the authenticated account for accessing Google Cloud APIs from your Cloud Run instance container.
- The following table explains the features for this section: Section Feature Description A Authentication All Cloud Run services are deployed privately by default, which means that they can't be accessed without providing authentication credentials in the request.

