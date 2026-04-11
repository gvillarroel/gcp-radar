---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.876Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Bucket labels"
feature_slug: "bucket-labels"
latest_feature_date: "2017-04-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
keywords:
  - "bucket"
  - "labels"
  - "storage"
  - "buckets"
  - "can"
  - "be"
  - "labeled"
  - "to"
---

# Bucket labels

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Cloud Storage buckets can be labeled to organize Google Cloud resources.

## Extended Definition

Cloud Storage buckets can be labeled to organize Google Cloud resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud](https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)

## Supporting Pages

### "Transition from gsutil to gcloud storage \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud](https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Operation gsutil command gcloud storage command Manage bucket labels gsutil label get gsutil label set gsutil label ch gcloud storage buckets describe gcloud storage buckets update gcloud storage buckets update Notes The combination of adding, updating, and removing labels in a single gsutil label ch command can behave differently than the equivalent operations using gcloud storage buckets update .
- Handling of hierarchical namespace buckets gcloud storage can be used to create and manage buckets with hierarchical namespace enabled.
- Operation gsutil command gcloud storage command Synchronize the contents of two buckets or directories gsutil rsync gcloud storage rsync Notes By default, gsutil rsync considers an object unchanged if its size and last modification time match between the source and destination.
- Operation gsutil command gcloud storage command Copy objects and other resources gsutil cp gcloud storage cp Notes Simulated folders created using the Google Cloud console are recognized as 0-byte placeholder objects. gcloud storage cp can be used to copy simulated folders, whereas gsutil cp cannot.

### "Mount a Cloud Storage bucket using Cloud Storage FUSE \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Learn how to mount a Cloud Storage bucket as a local file system using Cloud Storage FUSE , so you can interact with your objects using standard file system semantics.
- Learn how Vertex AI uses Cloud Storage FUSE to mount Cloud Storage buckets for custom training jobs.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the resources by completing the following steps: Unmount the storage bucket from your Linux machine by using the fusermount tool: fusermount -u "$HOME/mount-folder" To delete the bucket and everything inside of it, use the gcloud storage rm command with the --recursive flag: gcloud storage rm gs:// BUCKET NAME --recursive Replace BUCKET NAME with the name of your bucket.
- In this quickstart, you'll complete the following tasks: Install Cloud Storage FUSE on Debian or Ubuntu Mount the bucket as a folder on the machine Upload an object to the bucket You'll use the Google Cloud CLI to create and manage the object in your storage bucket, and you'll use the Cloud Storage FUSE CLI to mount your bucket to your machine.

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See https://cloud.google.com/storage/docs/json api/v1/buckets#labels Note: The getter for this property returns a dict which is a copy of the bucket's labels.
- See https://cloud.google.com/storage/docs/json api/v1/buckets and https://cloud.google.com/storage/docs/locations Returns None if the property has not been set before creation, if the bucket's resource has not been loaded from the server, or if the bucket is not a dual-regions bucket. default event based hold Scalar property getter. default kms key name Retrieve / set default KMS encryption key for objects in the bucket.
- See https://cloud.google.com/storage/docs/json api/v1/buckets Returns Type Description datetime.datetime or NoneType Datetime object parsed from RFC3339 valid timestamp, or None if the bucket's resource has not been loaded from the server. user project Project ID to be billed for API requests made via this bucket.
- See https://cloud.google.com/storage/docs/json api/v1/buckets Returns Type Description datetime.datetime or NoneType Datetime object parsed from RFC3339 valid timestamp, or None if the bucket's resource has not been loaded from the server. updated Retrieve the timestamp at which the bucket was last updated.

