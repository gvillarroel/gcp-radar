---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.971Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Bucket labels"
feature_slug: "bucket-labels"
latest_feature_date: "2017-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage buckets can be labeled to organize Google Cloud resources.

## Extended Definition

Cloud Storage buckets can be labeled to organize Google Cloud resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud](https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)

## Supporting Pages

### "Transition from gsutil to gcloud storage \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud](https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud)
- Source ID: `site-docs-reference`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Operation gsutil command gcloud storage command Manage bucket labels gsutil label get gsutil label set gsutil label ch gcloud storage buckets describe gcloud storage buckets update gcloud storage buckets update Notes The combination of adding, updating, and removing labels in a single gsutil label ch command can behave differently than the equivalent operations using gcloud storage buckets update .
- Handling of hierarchical namespace buckets gcloud storage can be used to create and manage buckets with hierarchical namespace enabled.
- Operation gsutil command gcloud storage command Synchronize the contents of two buckets or directories gsutil rsync gcloud storage rsync Notes By default, gsutil rsync considers an object unchanged if its size and last modification time match between the source and destination.
- Operation gsutil command gcloud storage command Copy objects and other resources gsutil cp gcloud storage cp Notes Simulated folders created using the Google Cloud console are recognized as 0-byte placeholder objects. gcloud storage cp can be used to copy simulated folders, whereas gsutil cp cannot.

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions storage.buckets.create storage.buckets.enableObjectRetention (only required if enabling object retention configurations for the bucket) storage.buckets.list (only required if creating a bucket using the Google Cloud console.) resourcemanager.projects.get (only required if creating a bucket using the Google Cloud console) You might also be able to get these permissions with custom roles or other predefined roles.
- Client libraries Note: Other options for creating a new bucket can be found in the JSON API reference for bucket.insert C++ For more information, see the Cloud Storage C++ API reference documentation .
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The name of a storage class // See the StorageClass documentation for other valid storage classes: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/storage/StorageClass.html // const storageClass = 'coldline'; // The name of a location // See this documentation for other valid locations: // http://g.co/cloud/storage/docs/locations#location-mr // const location = 'ASIA'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client // The bucket in the sample below will be created in the project associated with this client. // For more information, please see https://cloud.google.com/docs/authentication/production or https://googleapis.dev/nodejs/storage/latest/Storage.html const storage = new Storage (); async function createBucketWithStorageClassAndLocation () { // For default values see: https://cloud.google.com/storage/docs/locations and // https://cloud.google.com/storage/docs/storage-classes const [ bucket ] = await storage . createBucket ( bucketName , { location , [ storageClass ] : true , }); console . log ( ${ bucket . name } created with ${ storageClass } class in ${ location } ); } createBucketWithStorageClassAndLocation (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . def create bucket class location bucket name : The ID to give your GCS bucket bucket name = "your-unique-bucket-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . create bucket bucket name , location : "ASIA" , storage class : "COLDLINE" puts "Created bucket #{ bucket . name } in #{ bucket . location } with #{ bucket . storage class } class" end Terraform You can use a Terraform resource to create a storage bucket .

### "Mount a Cloud Storage bucket using Cloud Storage FUSE \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- Source ID: `site-iam-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how to mount a Cloud Storage bucket as a local file system using Cloud Storage FUSE , so you can interact with your objects using standard file system semantics.
- Learn how Vertex AI uses Cloud Storage FUSE to mount Cloud Storage buckets for custom training jobs.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the resources by completing the following steps: Unmount the storage bucket from your Linux machine by using the fusermount tool: fusermount -u "$HOME/mount-folder" To delete the bucket and everything inside of it, use the gcloud storage rm command with the --recursive flag: gcloud storage rm gs:// BUCKET NAME --recursive Replace BUCKET NAME with the name of your bucket.
- In this quickstart, you'll complete the following tasks: Install Cloud Storage FUSE on Debian or Ubuntu Mount the bucket as a folder on the machine Upload an object to the bucket You'll use the Google Cloud CLI to create and manage the object in your storage bucket, and you'll use the Cloud Storage FUSE CLI to mount your bucket to your machine.

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://cloud.google.com/storage/docs/json api/v1/buckets#labels Note: The getter for this property returns a dict which is a copy of the bucket's labels.
- See https://cloud.google.com/storage/docs/json api/v1/buckets and https://cloud.google.com/storage/docs/locations Returns None if the property has not been set before creation, if the bucket's resource has not been loaded from the server, or if the bucket is not a dual-regions bucket. default event based hold Scalar property getter. default kms key name Retrieve / set default KMS encryption key for objects in the bucket.
- See https://cloud.google.com/storage/docs/json api/v1/buckets Returns Type Description datetime.datetime or NoneType Datetime object parsed from RFC3339 valid timestamp, or None if the bucket's resource has not been loaded from the server. user project Project ID to be billed for API requests made via this bucket.
- See https://cloud.google.com/storage/docs/json api/v1/buckets Returns Type Description datetime.datetime or NoneType Datetime object parsed from RFC3339 valid timestamp, or None if the bucket's resource has not been loaded from the server. updated Retrieve the timestamp at which the bucket was last updated.

