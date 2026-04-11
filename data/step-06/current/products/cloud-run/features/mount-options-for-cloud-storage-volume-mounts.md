---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.893Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Mount options for Cloud Storage volume mounts"
feature_slug: "mount-options-for-cloud-storage-volume-mounts"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2"
  - "https://docs.cloud.google.com/run/docs/configuring"
keywords:
  - "mount"
  - "options"
  - "for"
  - "storage"
  - "volume"
  - "mounts"
  - "run"
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

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- September 23, 2025 Feature You can specify mount options when you configure Cloud Storage volume mounts for Cloud Run services , jobs , and worker pools . (GA) September 10, 2025 Feature You can deploy and configure a multi-region service from a single gcloud CLI command or by using a YAML or Terraform file (GA).
- November 07, 2024 Feature You can now specify mount options when you configure Cloud Storage volume mounts for both Cloud Run services and jobs . (In Preview) October 23, 2024 Feature GPU support (Preview) is now available in the following region: europe-west4 .
- March 19, 2024 Feature You can now mount an NFS file share as a volume for Cloud Run services and jobs . (In Preview) March 14, 2024 Feature Direct VPC egress now supports Cloud NAT with Public NAT IP addresses (in Preview).
- January 19, 2024 Feature You can now mount a Cloud Storage bucket as a storage volume for services, and also for Cloud Run jobs .

### "Package com.google.cloud.run.v2 (0.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- Source ID: `site-java-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Builder Builder for ExecutionsSettings. com. google. cloud. run. v2.GCS Volume Source Represents a volume backed by a Cloud Storage bucket using Cloud Storage FUSE. com. google. cloud. run. v2.GCS Volume Source.
- Builder Builder for projects/{project}/locations/{location}. com. google. cloud. run. v2.NFS Volume Source Represents an NFS mount. com. google. cloud. run. v2.NFS Volume Source.
- Builder Represents a volume backed by a Cloud Storage bucket using Cloud Storage FUSE. com. google. cloud. run. v2.GRPC Action GRPCAction describes an action involving a GRPC port. com. google. cloud. run. v2.GRPC Action.
- Version To Path VersionToPath maps a specific version of a secret to a relative file to mount to, relative to VolumeMount's mount path. com. google. cloud. run. v2.

### Configure Cloud Run services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Run volume mounts lets you access shared data stored in a local file system, such as a storage bucket or file server content, from your container.
- Volumes mounts Configure volume mounts for your service.
- You can mount a Cloud Storage bucket , an NFS share like a Filestore instance, an in-memory filesystem provided by Cloud Run , or a CIFS/SMB network file systems .
- Container You can configure the container by specifying the container port, settings, variables and secrets, and volume mounts.

