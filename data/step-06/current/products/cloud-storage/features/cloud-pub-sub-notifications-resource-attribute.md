---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.965Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Cloud Pub/Sub Notifications resource attribute"
feature_slug: "cloud-pub-sub-notifications-resource-attribute"
latest_feature_date: "2017-11-14"
deprecation_date: "2018-06-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1"
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
  - "https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys"
keywords:
  - "pub"
  - "sub"
  - "notifications"
  - "resource"
  - "attribute"
  - "the"
  - "in"
  - "for"
---

# Cloud Pub/Sub Notifications resource attribute

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

The resource attribute in Cloud Pub/Sub Notifications for Cloud Storage identifies the notified resource in subscription data; deprecated on 2018-06-01.

## Extended Definition

The resource attribute in Cloud Pub/Sub Notifications for Cloud Storage identifies the notified resource in subscription data; deprecated on 2018-06-01.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil)
- [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)

## Supporting Pages

### "IAM permissions for gsutil commands \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On this page, you can also find information about the following: Using additional commands that only apply to buckets with uniform bucket-level access disabled Using wildcards and recursive flags Using the -u flag to specify projects for billing Using the -m flag to run operations in parallel Command Sub-command Required IAM Permissions autoclass get storage.buckets.get autoclass set storage.buckets.update cat storage.objects.get compose storage.objects.get storage.objects.create storage.objects.delete 1 config None cors get storage.buckets.get cors set storage.buckets.update cp storage.objects.list 2 (for the destination bucket) storage.objects.get (for the source objects) storage.objects.create (for the destination bucket) storage.objects.delete 3 (for the destination bucket) defstorageclass get storage.buckets.get defstorageclass set storage.buckets.update du storage.objects.get hash storage.objects.get help None hmacKeys create storage.hmacKeys.create hmacKeys delete storage.hmacKeys.delete hmacKeys get storage.hmacKeys.get hmacKeys list storage.hmacKeys.list hmacKeys update storage.hmacKeys.update iam get storage.buckets.get storage.buckets.getIamPolicy iam set or ch storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update kms authorize resourceManager.projects.get iam.serviceAccounts.create 4 cloudkms.cryptoKeys.setIamPolicy (for the Cloud KMS key being authorized) kms encryption storage.buckets.get kms encryption -d storage.buckets.get storage.buckets.update kms encryption -k storage.buckets.get storage.buckets.update resourceManager.projects.get 5 cloudkms.cryptoKeys.setIamPolicy 5 kms serviceaccount resourceManager.projects.get label get storage.buckets.get label set/ch storage.buckets.update lifecycle get storage.buckets.get lifecycle set/ch storage.buckets.update logging get storage.buckets.get logging set storage.buckets.update ls (listing buckets) storage.buckets.list storage.buckets.getIamPolicy 6 ls (listing objects) storage.objects.list storage.objects.getIamPolicy 7 ls -b storage.buckets.get storage.buckets.getIamPolicy 6 mb storage.buckets.create mv storage.objects.list 2 (for the destination bucket) storage.objects.get (for the source objects) storage.objects.create (for the destination bucket) storage.objects.delete (for the source bucket) storage.objects.delete 3 (for the destination bucket) notification create storage.buckets.update pubsub.topics.get (for the project containing the Pub/Sub topic) pubsub.topics.create 8 (for the project containing the Pub/Sub topic) pubsub.topics.getIamPolicy (for Pub/Sub topic receiving notifications) pubsub.topics.setIamPolicy 8 (for Pub/Sub topic receiving notifications) notification create -s storage.buckets.update notification delete storage.buckets.get storage.buckets.update notification list storage.buckets.get pap get storage.buckets.get pap set storage.buckets.get storage.buckets.update storage.buckets.setIamPolicy 10 perfdiag storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list storage.objects.get rb storage.buckets.delete requesterpays get storage.buckets.get requesterpays set on storage.buckets.update requesterpays set off storage.buckets.update resourcemanager.projects.createBillingAssignment 9 retention clear , event-default , lock , or set storage.buckets.update retention event or temp storage.objects.get storage.objects.list storage.objects.update retention get storage.buckets.get rewrite -k storage.objects.list storage.objects.get storage.objects.create storage.objects.delete rewrite -s storage.objects.list storage.objects.get storage.objects.create storage.objects.delete storage.objects.update rm storage.objects.delete rm -a storage.objects.delete storage.objects.list rm -r (deleting a bucket) storage.buckets.delete storage.objects.delete storage.objects.list rpo get storage.buckets.get rpo set storage.buckets.get storage.buckets.update rsync storage.objects.get (for the source objects and destination bucket) storage.objects.create (for the destination bucket) storage.objects.delete 11 (for the destination bucket) storage.objects.list (for the source and destination buckets) rsync -n storage.objects.list (for the source and destination buckets) setmeta storage.objects.get storage.objects.list storage.objects.update signurl None; however, the service account whose key is used as part of this command must have permission to perform the request being encoded into the signed URL. stat storage.objects.get test None ubla set storage.buckets.get storage.buckets.update ubla get storage.buckets.get update None version None versioning get storage.buckets.get versioning set storage.buckets.update web get storage.buckets.get web set storage.buckets.update 1 This permission is only required if the composed object has the same name as an object that already exists in the bucket.
- Command Subcommand Resource Acted On Required IAM Permissions acl get Buckets storage.buckets.get storage.buckets.getIamPolicy acl set or ch Buckets storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update acl get Objects storage.objects.get storage.objects.getIamPolicy acl set or ch Objects storage.objects.get storage.objects.getIamPolicy storage.objects.setIamPolicy storage.objects.update cp -a or cp -p Objects storage.objects.list a (for the destination bucket) storage.objects.get (for the source objects) storage.objects.create (for the destination bucket) storage.objects.delete b (for the destination bucket) storage.objects.getIamPolicy (for the source objects) storage.objects.setIamPolicy (for the destination bucket) defacl get Buckets storage.buckets.get storage.buckets.getIamPolicy defacl set or ch Buckets storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update iam get Objects storage.objects.get storage.objects.getIamPolicy iam set or ch Objects storage.objects.get storage.objects.getIamPolicy storage.objects.setIamPolicy storage.objects.update mv -a or mv -p Objects storage.objects.list a (for the destination bucket) storage.objects.get (for the source objects) storage.objects.create (for the destination bucket) storage.objects.delete (for the source bucket) storage.objects.delete b (for the destination bucket) storage.objects.getIamPolicy (for the source objects) storage.objects.setIamPolicy (for the destination bucket) rsync -a or rsync -p Objects storage.objects.get (for the source objects and destination bucket) storage.objects.create (for the destination bucket) storage.objects.delete c (for the destination bucket) storage.objects.list (for the source and destination buckets) storage.objects.getIamPolicy (for the source objects) storage.objects.setIamPolicy (for the destination bucket) a This permission is only required when the destination in the command contains an object path. b This permission is only required if you use parallel composite uploads or if you don't use the -n flag but insert an object that has the same name as an object that already exists in the bucket. c This permission is only required if you use the -d flag or if you insert an object that has the same name as, but different data than, an object that already exists in the bucket.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
- If you use the recursive flags ( -r and -R ), you must have storage.objects.list permission for the relevant bucket, in addition to the permissions required for the specific command you are using.

### "Overview of resources and methods for the JSON API \_|\_ Cloud Storage \_\

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method HTTP request Description cancel POST /b/ BUCKET /operations/ OPERATION ID /cancel Cancels a long-running operation. get GET /b/ BUCKET /operations/ OPERATION ID Gets a long-running operation. list GET /b/ BUCKET /operations Lists long-running operations. advanceRelocateBucket POST /b/ BUCKET /operations/ OPERATION ID /advanceRelocateBucket Initiates the final synchronization step of a bucket relocation operation Projects.hmacKeys For Projects.hmacKeys Resource details, see the resource representation page.
- Resource types AnywhereCache BucketAccessControls Buckets DefaultObjectAccessControls Folders ManagedFolders Notifications ObjectAccessControls Objects Operations Projects.hmacKeys Projects.serviceAccount AnywhereCache For AnywhereCache Resource details, see the resource representation page.
- Notifications For Notifications Resource details, see the resource representation page.
- Method HTTP request Description delete DELETE /b/ BUCKET /managedFolders/ MANAGED FOLDER Permanently deletes a managed folder. get GET /b/ BUCKET /managedFolders/ MANAGED FOLDER Returns metadata for the specified managed folder. getIamPolicy GET /b/ BUCKET /managedFolders/ MANAGED FOLDER /iam Returns an IAM policy for the specified managed folder. insert POST /b/ BUCKET /managedFolders Creates a new managed folder. list GET /b/ BUCKET /managedFolders Retrieves a list of managed folders in a given bucket. setIamPolicy PUT /b/ BUCKET /managedFolders/ MANAGED FOLDER /iam Updates an IAM policy for the specified managed folder. testIamPermissions GET /b/ BUCKET /managedFolders/ MANAGED FOLDER /iam/testPermissions Tests a set of permissions on the given managed folder. to see which, if any, are held by the caller.

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of a valid URL: curl -X PATCH -H "Content-Type: application/json" -d '{"edition config": "STANDARD" }' -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://storage.googleapis.com/v2/projects/my-project/locations/global/storageIntelligence?updateMask=edition config" 400: Invalid Argument - Empty Update Mask Issue : When you configure or manage Storage Intelligence for a resource, you might receive this error and the message Empty UPDATE MASK in the request.
- Solution : If you receive a permission denied error with a message similar to permission storage.intelligenceConfigs.update when you configure and manage Storage Intelligence for a resource, see the permission section for the operation you want to perform.
- 400: Non-empty Filter Issue : When you update the Storage Intelligence configuration for a resource, you might receive this error and the message Non-empty filter cannot be specified for INHERIT or DISABLED edition configuration.
- For organization policy failures, contact your administrator to grant you the project or bucket-level permissions to allow resource sharing by editing the organization policy for the organization, folder, or project resource .

### "Manage HMAC keys for service accounts \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . def create hmac key service account email : The service account email used to generate an HMAC key service account email = "service-my-project-number@gs-project-accounts.iam.gserviceaccount.com" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new By default Storage#create hmac key uses the Storage client project id hmac key = storage . create hmac key service account email puts "The base64 encoded secret is: #{ hmac key . secret } " puts "Do not miss that secret, there is no API to recover it." puts " \n The HMAC key metadata is:" puts "Key ID: #{ hmac key . id } " puts "Service Account Email: #{ hmac key . service account email } " puts "Access ID: #{ hmac key . access id } " puts "Project ID: #{ hmac key . project id } " puts "Active: #{ hmac key . active? } " puts "Created At: #{ hmac key . created at } " puts "Updated At: #{ hmac key . updated at } " puts "Etag: #{ hmac key . etag } " end Terraform You can use a Terraform resource to create an HMAC key .
- StorageOptions ; import java.util.Date ; public class CreateHmacKey { public static void createHmacKey ( String serviceAccountEmail , String projectId ) throws StorageException { // The service account email for which the new HMAC key will be created. // String serviceAccountEmail = "service-account@iam.gserviceaccount.com"; // The ID of the project to which the service account belongs. // String projectId = "project-id"; Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService (); ServiceAccount account = ServiceAccount . of ( serviceAccountEmail ); HmacKey hmacKey = storage . createHmacKey ( account , Storage .
- Create a new service account resource "google service account" "service account" { account id = "my-svc-acc" } Create the HMAC key for the associated service account resource "google storage hmac key" "key" { service account email = google service account.service account.email } REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- WriteLine ( $"Access ID: {key.AccessId}" ); } return keys ; } } The following sample retrieves information for a specific HMAC key: using Google.Apis.Storage.v1.Data ; using Google.Cloud.Storage.V1 ; using System ; public class GetHmacKeySample { public HmacKeyMetadata GetHmacKey ( string projectId = "your-project-id" , string accessId = "your-access-id" ) { var storage = StorageClient .

