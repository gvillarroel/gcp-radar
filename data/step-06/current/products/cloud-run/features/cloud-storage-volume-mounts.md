---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.910Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud Storage volume mounts"
feature_slug: "cloud-storage-volume-mounts"
latest_feature_date: "2024-08-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2"
  - "https://docs.cloud.google.com/run/docs/container-contract"
keywords:
  - "storage"
  - "volume"
  - "mounts"
  - "let"
  - "run"
  - "services"
  - "and"
  - "jobs"
---

# Cloud Storage volume mounts

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Storage volume mounts let Cloud Run services and jobs mount a Cloud Storage bucket as a storage volume; Cloud Storage volume mounts let Cloud Run services and jobs mount a Cloud Storage bucket as a storage volume.

## Extended Definition

Cloud Storage volume mounts let Cloud Run services and jobs mount a Cloud Storage bucket as a storage volume; Cloud Storage volume mounts let Cloud Run services and jobs mount a Cloud Storage bucket as a storage volume.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- September 23, 2025 Feature You can specify mount options when you configure Cloud Storage volume mounts for Cloud Run services , jobs , and worker pools . (GA) September 10, 2025 Feature You can deploy and configure a multi-region service from a single gcloud CLI command or by using a YAML or Terraform file (GA).
- November 07, 2024 Feature You can now specify mount options when you configure Cloud Storage volume mounts for both Cloud Run services and jobs . (In Preview) October 23, 2024 Feature GPU support (Preview) is now available in the following region: europe-west4 .
- January 19, 2024 Feature You can now mount a Cloud Storage bucket as a storage volume for services, and also for Cloud Run jobs .
- Mounting a Cloud Storage bucket as a storage volume for Cloud Run services and jobs .

### "Package com.google.cloud.run.v2 (0.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- Source ID: `site-java-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder Represents a volume backed by a Cloud Storage bucket using Cloud Storage FUSE. com. google. cloud. run. v2.GRPC Action GRPCAction describes an action involving a GRPC port. com. google. cloud. run. v2.GRPC Action.
- Builder Builder for ExecutionsSettings. com. google. cloud. run. v2.GCS Volume Source Represents a volume backed by a Cloud Storage bucket using Cloud Storage FUSE. com. google. cloud. run. v2.GCS Volume Source.
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.cloud.run.v2 (0.88.0) Stay organized with collections Save and categorize content based on your preferences.
- Services Client Service Description: Cloud Run Service Control Plane API This class provides the ability to make remote calls to the backing service through method calls that map to API methods.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- This restricts some network capabilities and prevents your root containers from running as "true root." Limited file system mounts from inside containers The supported path for mounting file systems in Cloud Run is through the fully managed volume mounts feature in your Cloud Run container configuration .
- Container running in a job execution must exit upon completion For Cloud Run jobs, the container must exit with exit code 0 when the job has successfully completed, and exit with a non-zero exit code when the job has failed.
- Outbound request timeouts For Cloud Run services and jobs, there is a timeout after 10 minutes of idle time for requests from your container to VPC .
- Instance lifecycle Lifecycle characteristics differ for Cloud Run jobs and services, so these are described separately in the following subsections.

