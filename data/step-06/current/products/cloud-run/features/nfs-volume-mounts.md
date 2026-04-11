---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.911Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "NFS volume mounts"
feature_slug: "nfs-volume-mounts"
latest_feature_date: "2024-08-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2"
keywords:
  - "nfs"
  - "volume"
  - "mounts"
  - "let"
  - "run"
  - "services"
  - "and"
  - "jobs"
---

# NFS volume mounts

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

NFS volume mounts let Cloud Run services and jobs mount an NFS file share as a volume; NFS volume mounts let Cloud Run services and jobs mount an NFS file share as a volume.

## Extended Definition

NFS volume mounts let Cloud Run services and jobs mount an NFS file share as a volume; NFS volume mounts let Cloud Run services and jobs mount an NFS file share as a volume.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- This restricts some network capabilities and prevents your root containers from running as "true root." Limited file system mounts from inside containers The supported path for mounting file systems in Cloud Run is through the fully managed volume mounts feature in your Cloud Run container configuration .
- Container running in a job execution must exit upon completion For Cloud Run jobs, the container must exit with exit code 0 when the job has successfully completed, and exit with a non-zero exit code when the job has failed.
- Outbound request timeouts For Cloud Run services and jobs, there is a timeout after 10 minutes of idle time for requests from your container to VPC .
- Instance lifecycle Lifecycle characteristics differ for Cloud Run jobs and services, so these are described separately in the following subsections.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- This restricts some network capabilities and prevents your root containers from running as "true root." Limited file system mounts from inside containers The supported path for mounting file systems in Cloud Run is through the fully managed volume mounts feature in your Cloud Run container configuration .
- Container running in a job execution must exit upon completion For Cloud Run jobs, the container must exit with exit code 0 when the job has successfully completed, and exit with a non-zero exit code when the job has failed.
- Outbound request timeouts For Cloud Run services and jobs, there is a timeout after 10 minutes of idle time for requests from your container to VPC .
- Instance lifecycle Lifecycle characteristics differ for Cloud Run jobs and services, so these are described separately in the following subsections.

### "Package com.google.cloud.run.v2 (0.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- Source ID: `site-java-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder Builder for projects/{project}/locations/{location}. com. google. cloud. run. v2.NFS Volume Source Represents an NFS mount. com. google. cloud. run. v2.NFS Volume Source.
- List Worker Pools Response Or Builder com. google. cloud. run. v2.NFS Volume Source Or Builder com. google. cloud. run. v2.
- Builder Represents a volume backed by a Cloud Storage bucket using Cloud Storage FUSE. com. google. cloud. run. v2.GRPC Action GRPCAction describes an action involving a GRPC port. com. google. cloud. run. v2.GRPC Action.
- Builder Builder for ExecutionsSettings. com. google. cloud. run. v2.GCS Volume Source Represents a volume backed by a Cloud Storage bucket using Cloud Storage FUSE. com. google. cloud. run. v2.GCS Volume Source.

