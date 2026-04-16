---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.883Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Bucket IP filtering"
feature_slug: "bucket-ip-filtering"
latest_feature_date: "2025-07-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket"
  - "https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud"
keywords:
  - "bucket"
  - "ip"
  - "filtering"
  - "restricts"
  - "requests"
  - "to"
  - "storage"
  - "buckets"
---

# Bucket IP filtering

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Bucket IP filtering restricts requests to Cloud Storage buckets based on source IP addresses or VPC origin.

## Extended Definition

Bucket IP filtering restricts requests to Cloud Storage buckets based on source IP addresses or VPC origin.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control](https://docs.cloud.google.com/storage/docs/access-control)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- [https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud](https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud)

## Supporting Pages

### Overview of access control \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control](https://docs.cloud.google.com/storage/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Over time, changes in project management, usage patterns, and organizational ownership might require you to modify IAM or ACL settings on buckets and projects, especially if you manage Cloud Storage in a large organization or for a large group of users.
- As you evaluate and plan your access control settings, keep the following best practices in mind: Use the principle of least privilege when granting access to your buckets, objects, or managed folders.
- Using IAM permissions with ACLs Cloud Storage offers two systems for granting users access your buckets and objects: IAM and Access Control Lists (ACLs).
- Bucket IP filtering Use Bucket IP filtering to restrict access on your bucket based on the source IP address of the request.

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://cloud.google.com/storage/docs/json api/v1/buckets Returns Type Description datetime.datetime or NoneType Datetime object parsed from RFC3339 valid timestamp, or None if the bucket's resource has not been loaded from the server. user project Project ID to be billed for API requests made via this bucket.
- See https://cloud.google.com/storage/docs/json api/v1/buckets Returns Type Description int or NoneType The project number that owns the bucket or None if the bucket's resource has not been loaded from the server. requester pays Does the requester pay for API requests for this bucket?
- See https://cloud.google.com/storage/docs/ip-filtering-overview and https://cloud.google.com/storage/docs/json api/v1/buckets#ipFilter Note: The getter for this property returns an xref IPFilter object, which is a structured representation of the bucket's IP filter configuration.
- See https://cloud.google.com/storage/docs/json api/v1/buckets Returns Type Description datetime.datetime or NoneType Datetime object parsed from RFC3339 valid timestamp, or None if the bucket's resource has not been loaded from the server. updated Retrieve the timestamp at which the bucket was last updated.

### "Mount a Cloud Storage bucket using Cloud Storage FUSE \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- Source ID: `site-iam-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how Vertex AI uses Cloud Storage FUSE to mount Cloud Storage buckets for custom training jobs.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the resources by completing the following steps: Unmount the storage bucket from your Linux machine by using the fusermount tool: fusermount -u "$HOME/mount-folder" To delete the bucket and everything inside of it, use the gcloud storage rm command with the --recursive flag: gcloud storage rm gs:// BUCKET NAME --recursive Replace BUCKET NAME with the name of your bucket.
- In this quickstart, you'll complete the following tasks: Install Cloud Storage FUSE on Debian or Ubuntu Mount the bucket as a folder on the machine Upload an object to the bucket You'll use the Google Cloud CLI to create and manage the object in your storage bucket, and you'll use the Cloud Storage FUSE CLI to mount your bucket to your machine.
- Mount the bucket To mount the bucket to your local file system, complete the following steps: Generate Application Default Credentials using the gcloud auth application-default login command: gcloud auth application-default login Cloud Storage FUSE automatically loads the credentials.

### "Transition from gsutil to gcloud storage \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud](https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud)
- Source ID: `site-docs-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Operation gsutil command gcloud storage command Manage bucket labels gsutil label get gsutil label set gsutil label ch gcloud storage buckets describe gcloud storage buckets update gcloud storage buckets update Notes The combination of adding, updating, and removing labels in a single gsutil label ch command can behave differently than the equivalent operations using gcloud storage buckets update .
- The object is then encrypted with the bucket's default KMS key or with Google-managed encryption. gsutil rewrite includes logic to skip rewriting an object if the requested transformation wouldn't change its state (for example, if the object is already in a target storage class). gcloud storage objects update might not perform the same checks, potentially leading to unnecessary operations.
- Operation gsutil command gcloud storage command List buckets, objects, and folders gsutil ls gcloud storage ls Notes When a wildcard is used to list objects in a project, gsutil ls returns a flat list of objects, whereas gcloud storage ls returns objects grouped by bucket name.
- Operation gsutil command gcloud storage command Synchronize the contents of two buckets or directories gsutil rsync gcloud storage rsync Notes By default, gsutil rsync considers an object unchanged if its size and last modification time match between the source and destination.

