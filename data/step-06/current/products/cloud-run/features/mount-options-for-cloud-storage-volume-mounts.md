---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.422Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Mount options for Cloud Storage volume mounts"
feature_slug: "mount-options-for-cloud-storage-volume-mounts"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/securing/service-identity"
  - "https://docs.cloud.google.com/run/docs/configuring"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2"
keywords:
  - "specifying"
  - "options"
  - "storage"
  - "mounts"
  - "volume"
  - "mount"
  - "supports"
---

# Mount options for Cloud Storage volume mounts

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports specifying mount options for Cloud Storage volume mounts.

## Extended Definition

Cloud Run supports specifying mount options for Cloud Storage volume mounts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity)
- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)

## Supporting Pages

### Introduction to service identity \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity)
- Source ID: `site-docs-reference-required-6`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call Google Cloud APIs with the service identity When a Cloud Run instance interacts with other IAM-authenticated Cloud Run services, or calls Cloud Client Libraries either through application code or built-in features like Cloud Run integrations or Cloud Storage volume mounts , the Google Cloud environment uses Application Default Credentials (ADC) to automatically detect whether the Cloud Run service identity is authenticated to perform the API operation.
- Examples of Google Cloud products that have Cloud Client Libraries include Cloud Storage, Firestore, Cloud SQL, Pub/Sub, and Cloud Tasks.

### Configure Cloud Run services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- Source ID: `site-docs-reference-2`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Run volume mounts lets you access shared data stored in a local file system, such as a storage bucket or file server content, from your container.
- Container You can configure the container by specifying the container port, settings, variables and secrets, and volume mounts.
- Volumes mounts Configure volume mounts for your service.
- You can mount a Cloud Storage bucket , an NFS share like a Filestore instance, an in-memory filesystem provided by Cloud Run , or a CIFS/SMB network file systems .

### "Package com.google.cloud.run.v2 (0.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- Source ID: `site-java-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Builder Represents a volume backed by a Cloud Storage bucket using Cloud Storage FUSE. com. google. cloud. run. v2.GRPC Action GRPCAction describes an action involving a GRPC port. com. google. cloud. run. v2.GRPC Action.
- Builder Builder for ExecutionsSettings. com. google. cloud. run. v2.GCS Volume Source Represents a volume backed by a Cloud Storage bucket using Cloud Storage FUSE. com. google. cloud. run. v2.GCS Volume Source.
- Builder Builder for projects/{project}/locations/{location}. com. google. cloud. run. v2.NFS Volume Source Represents an NFS mount. com. google. cloud. run. v2.NFS Volume Source.
- Version To Path VersionToPath maps a specific version of a secret to a relative file to mount to, relative to VolumeMount's mount path. com. google. cloud. run. v2.

