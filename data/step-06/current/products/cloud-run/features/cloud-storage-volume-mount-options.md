---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.908Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud Storage volume mount options"
feature_slug: "cloud-storage-volume-mount-options"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/configuring"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2"
keywords:
  - "storage"
  - "volume"
  - "mount"
  - "options"
  - "mounts"
  - "let"
  - "run"
  - "services"
---

# Cloud Storage volume mount options

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Storage volume mounts let Cloud Run services and jobs specify mount options when attaching buckets as volumes.

## Extended Definition

Cloud Storage volume mounts let Cloud Run services and jobs specify mount options when attaching buckets as volumes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)

## Supporting Pages

### Configure Cloud Run services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Run volume mounts lets you access shared data stored in a local file system, such as a storage bucket or file server content, from your container.
- You can mount a Cloud Storage bucket , an NFS share like a Filestore instance, an in-memory filesystem provided by Cloud Run , or a CIFS/SMB network file systems .
- Container You can configure the container by specifying the container port, settings, variables and secrets, and volume mounts.
- This page provides an overview of configuration options for Cloud Run services.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- September 23, 2025 Feature You can specify mount options when you configure Cloud Storage volume mounts for Cloud Run services , jobs , and worker pools . (GA) September 10, 2025 Feature You can deploy and configure a multi-region service from a single gcloud CLI command or by using a YAML or Terraform file (GA).
- November 07, 2024 Feature You can now specify mount options when you configure Cloud Storage volume mounts for both Cloud Run services and jobs . (In Preview) October 23, 2024 Feature GPU support (Preview) is now available in the following region: europe-west4 .
- January 19, 2024 Feature You can now mount a Cloud Storage bucket as a storage volume for services, and also for Cloud Run jobs .
- Mounting a Cloud Storage bucket as a storage volume for Cloud Run services and jobs .

### "Package com.google.cloud.run.v2 (0.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- Source ID: `site-java-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder Represents a volume backed by a Cloud Storage bucket using Cloud Storage FUSE. com. google. cloud. run. v2.GRPC Action GRPCAction describes an action involving a GRPC port. com. google. cloud. run. v2.GRPC Action.
- Builder Builder for ExecutionsSettings. com. google. cloud. run. v2.GCS Volume Source Represents a volume backed by a Cloud Storage bucket using Cloud Storage FUSE. com. google. cloud. run. v2.GCS Volume Source.
- Builder Builder for projects/{project}/locations/{location}. com. google. cloud. run. v2.NFS Volume Source Represents an NFS mount. com. google. cloud. run. v2.NFS Volume Source.
- Version To Path VersionToPath maps a specific version of a secret to a relative file to mount to, relative to VolumeMount's mount path. com. google. cloud. run. v2.

