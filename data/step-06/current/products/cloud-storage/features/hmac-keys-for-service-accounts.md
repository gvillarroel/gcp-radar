---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.956Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "HMAC keys for service accounts"
feature_slug: "hmac-keys-for-service-accounts"
latest_feature_date: "2019-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys"
  - "https://docs.cloud.google.com/storage/docs/authentication/hmackeys"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-permissions"
  - "https://docs.cloud.google.com/storage/docs/audit-logging"
keywords:
  - "hmac"
  - "keys"
  - "for"
  - "accounts"
  - "let"
  - "clients"
  - "create"
  - "signed"
---

# HMAC keys for service accounts

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

HMAC keys for service accounts let clients create signed XML API requests without using user account HMAC keys.

## Extended Definition

HMAC keys for service accounts let clients create signed XML API requests without using user account HMAC keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- [https://docs.cloud.google.com/storage/docs/authentication/hmackeys](https://docs.cloud.google.com/storage/docs/authentication/hmackeys)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions)
- [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)

## Supporting Pages

### "Manage HMAC keys for service accounts \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- Source ID: `site-iam-reference`
- Final score: 309
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following sample deactivates an HMAC key: def deactivate hmac key access id : The access ID of the HMAC key access id = "GOOG0234230X00" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new By default Storage#hmac keys uses the Storage client project id hmac key = storage . hmac key access id hmac key . inactive! puts "The HMAC key is now inactive." puts "The HMAC key metadata is:" puts "Key ID: #{ hmac key . id } " puts "Service Account Email: #{ hmac key . service account email } " puts "Access ID: #{ hmac key . access id } " puts "Project ID: #{ hmac key . project id } " puts "Active: #{ hmac key . active? } " puts "Created At: #{ hmac key . created at } " puts "Updated At: #{ hmac key . updated at } " puts "Etag: #{ hmac key . etag } " end The following sample activates an HMAC key: def activate hmac key access id : The access ID of the HMAC key access id = "GOOG0234230X00" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new By default Storage#hmac keys uses the Storage client project id hmac key = storage . hmac key access id hmac key . active! puts "The HMAC key is now active." puts "The HMAC key metadata is:" puts "Key ID: #{ hmac key . id } " puts "Service Account Email: #{ hmac key . service account email } " puts "Access ID: #{ hmac key . access id } " puts "Project ID: #{ hmac key . project id } " puts "Active: #{ hmac key . active? } " puts "Created At: #{ hmac key . created at } " puts "Updated At: #{ hmac key . updated at } " puts "Etag: #{ hmac key . etag } " end REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- The following sample retrieves a list of HMAC keys associated with a project: def list hmac keys require "google/cloud/storage" storage = Google :: Cloud :: Storage . new By default Storage#hmac keys uses the Storage client project id hmac keys = storage . hmac keys puts "HMAC Keys:" hmac keys . all do hmac key puts "Service Account Email: #{ hmac key . service account email } " puts "Access ID: #{ hmac key . access id } " end end The following sample retrieves information for a specific HMAC key: def get hmac key access id : The access ID of the HMAC key access id = "GOOG0234230X00" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new By default Storage#hmac keys uses the Storage client project id hmac key = storage . hmac key access id puts "The HMAC key metadata is:" puts "Key ID: #{ hmac key . id } " puts "Service Account Email: #{ hmac key . service account email } " puts "Access ID: #{ hmac key . access id } " puts "Project ID: #{ hmac key . project id } " puts "Active: #{ hmac key . active? } " puts "Created At: #{ hmac key . created at } " puts "Updated At: #{ hmac key . updated at } " puts "Etag: #{ hmac key . etag } " end REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The access ID of the HMAC key // const hmacKeyAccessId = 'GOOG0234230X00'; // The ID of the project to which the service account belongs // const projectId = 'project-id'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); // Delete HMAC SA Key async function deleteHmacKey () { const hmacKey = storage . hmacKey ( hmacKeyAccessId , { projectId }); await hmacKey . delete (); console . log ( 'The key is deleted, though it may still appear in getHmacKeys() results.' ); } PHP For more information, see the Cloud Storage PHP API reference documentation .
- Overview This page shows you how to create, disable, and delete Hash-based Message Authentication Code (HMAC) keys associated with service accounts in your project.

### HMAC keys \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/authentication/hmackeys](https://docs.cloud.google.com/storage/docs/authentication/hmackeys)
- Source ID: `site-iam-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Create HMAC keys for your service accounts .
- Migration from user account HMAC keys Generally, associating HMAC keys with service accounts are a better option than doing so with user accounts, particularly for production workloads: Service accounts allow for better administrative oversight, and they eliminate the security and privacy implications of accounts held by individual users.
- If you enable the restrictAuthTypes constraint on a resource, you can no longer create or activate HMAC keys for the specified account type in that resource.
- You can optionally enable the restrictAuthTypes constraint on a resource, which restricts access for requests signed by HMAC keys.

### IAM permissions for Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- HMAC key permission name Description storage.hmacKeys.create Create new HMAC keys for service accounts in a project. storage.hmacKeys.delete Delete existing HMAC keys. storage.hmacKeys.get Read HMAC key metadata. storage.hmacKeys.list List the metadata of HMAC keys in a project. storage.hmacKeys.update Update HMAC key status.
- Bucket permissions Bucket permission name Description storage.buckets.create Create new buckets in a project. storage.buckets.createTagBinding Create a new tag binding to a bucket. storage.buckets.delete Delete buckets. storage.buckets.deleteTagBinding Delete the tag binding on a bucket. storage.buckets.enableObjectRetention Enable object retention configurations on a bucket. storage.buckets.exemptFromIpFilter Exempts the user or service account from IP filtering rules for bucket-level operations. storage.buckets.get Read bucket metadata, including listing or reading the Pub/Sub notification configurations on a bucket.
- Storage batch operations permissions Storage batch operations permission name Description storagebatchoperations.jobs.create Create storage batch operations jobs. storagebatchoperations.jobs.cancel Cancel storage batch operations jobs. storagebatchoperations.jobs.delete Delete storage batch operations jobs. storagebatchoperations.jobs.get Retrieve storage batch operations jobs. storagebatchoperations.jobs.list List storage batch operations jobs. storagebatchoperations.operations.get Retrieve long-running operations associated with storage batch operations jobs. storagebatchoperations.operations.list List long-running operations associated with storage batch operations jobs. storagebatchoperations.operations.cancel Cancel long-running operations associated with storage batch operations jobs. storagebatchoperations.operations.delete Delete long-running operations associated with storage batch operations jobs.
- Storage Insights dataset permissions Dataset permission name Description storageinsights.datasetConfigs.create Create dataset configurations. storageinsights.datasetConfigs.delete Delete dataset configurations. storageinsights.datasetConfigs.linkDataset Create linked datasets in BigQuery that contain the output of Storage Insights datasets. storageinsights.datasetConfigs.unlinkDataset Remove linked datasets from BigQuery that contain the output of Storage Insights datasets. storageinsights.datasetConfigs.update Modify dataset configurations. storageinsights.datasetConfigs.get Get dataset configurations. storageinsights.datasetConfigs.list List dataset configurations.

### Cloud Audit Logs with Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Audit log type Sub-type Cloud Storage operations Admin Activity ADMIN WRITE Setting bucket or managed folder IAM policies Setting object ACLs 1 Creating buckets Deleting buckets Restoring soft-deleted buckets Relocating buckets Updating bucket metadata Creating tag bindings on buckets Deleting tag bindings on buckets Creating managed folders Deleting managed folders Updating Storage Intelligence configuration for a project, a folder, or an organization Creating Rapid Cache caches Pausing Rapid Cache caches Resuming Rapid Cache caches Disabling Rapid Cache caches Updating Rapid Cache caches Creating HMAC keys Deleting HMAC keys Updating HMAC keys Cancelling long-running operations Deleting long-running operations Creating Storage Insights inventory report configurations Updating Storage Insights inventory report configurations Deleting Storage Insights inventory report configurations Creating Storage Insights dataset configurations Updating Storage Insights dataset configurations Deleting Storage Insights dataset configurations Linking Storage Insights dataset configurations Unlinking Storage Insights dataset configurations Data Access ADMIN READ Getting bucket or managed folder IAM policies Getting object ACLs Getting bucket metadata Listing buckets Listing tag bindings on buckets Listing effective tags on buckets Getting managed folder metadata Listing managed folders Getting Storage Intelligence configuration for a project, a folder, or an organization Getting Rapid Cache caches Listing Rapid Cache caches Getting HMAC keys Listing HMAC keys Getting long-running operations Listing long-running operations Getting Storage Insights inventory report configurations Listing Storage Insights inventory report configurations Getting Storage Insights inventory reports Listing Storage Insights inventory reports Getting Storage Insights dataset configurations Listing Storage Insights dataset configurations Data Access DATA READ Getting object data Getting object metadata Listing objects Getting folder metadata Listing folders Copying objects 2 Composing objects 2 Listing ongoing XML API multipart uploads Listing XML API multipart upload parts Data Access DATA WRITE Creating objects Deleting objects Deleting multiple objects using the XML API Restoring soft-deleted objects Moving objects Updating non-ACL object metadata Setting retentions for objects Overriding unlocked retentions for objects Copying objects 2 Composing objects 2 Initiating XML API multipart uploads Creating parts in an XML API multipart upload Aborting XML API multipart uploads Completing XML API multipart uploads Creating folders Deleting folders Renaming folders System Event Start of bucket relocate process 3 End of bucket relocate process 1 Admin Activity audit logs are not generated if/when ACLs are initially set at object creation.
- The following are the audit log names, including variables for the resource identifiers: projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fdata access folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Factivity folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fdata access billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Factivity billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fdata access organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Factivity organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fdata access Note: The part of the log name following /logs/ must be URL-encoded.
- Audit logs for multi-object delete XML API When you use the XML API to delete multiple objects in a single request, Cloud Storage generates two types of data access audit logs, provided you enable data access audit logs : Parent request audit log : A log is generated for the overall multi-object delete request.
- For example: gcloud storage sign-url gs://example bucket/example object.jpeg --private-key-file=example-key.json --duration=10m --headers=x-goog-custom-audit-job:"job name",x-goog-custom-audit-user="test user" You can also use client libraries to generate the signed URL when you set custom headers .

