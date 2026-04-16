---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.941Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Cloud EKM encryption for Cloud Storage"
feature_slug: "cloud-ekm-encryption-for-cloud-storage"
latest_feature_date: "2021-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud"
  - "https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys"
  - "https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage"
  - "https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud"
keywords:
  - "ekm"
  - "encryption"
  - "for"
  - "storage"
  - "can"
  - "use"
  - "keys"
  - "as"
---

# Cloud EKM encryption for Cloud Storage

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage can use Cloud EKM keys as customer-managed encryption keys for data encryption.

## Extended Definition

Cloud Storage can use Cloud EKM keys as customer-managed encryption keys for data encryption.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)
- [https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud](https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud)

## Supporting Pages

### "IAM permissions for gcloud storage commands \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- Source ID: `site-docs-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Command Flag Required IAM Permissions batch-operations jobs create storagebatchoperations.jobs.create batch-operations jobs cancel storagebatchoperations.jobs.cancel batch-operations jobs delete storagebatchoperations.jobs.delete batch-operations jobs get storagebatchoperations.jobs.get batch-operations jobs list storagebatchoperations.jobs.list buckets add-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets anywhere-caches create storage.anywhereCaches.create buckets anywhere-caches describe storage.anywhereCaches.get buckets anywhere-caches list storage.anywhereCaches.list buckets anywhere-caches update storage.anywhereCaches.update buckets anywhere-caches pause storage.anywhereCaches.pause buckets anywhere-caches resume storage.anywhereCaches.resume buckets anywhere-caches disable storage.anywhereCaches.disable buckets create storage.buckets.create storage.buckets.setIpFilter 15 buckets delete storage.buckets.delete buckets describe storage.buckets.get storage.buckets.getIamPolicy 1 storage.buckets.getIpFilter 16 buckets get-iam-policy storage.buckets.get storage.buckets.getIamPolicy buckets list storage.buckets.list storage.buckets.getIamPolicy 1 buckets notifications create storage.buckets.get storage.buckets.update pubsub.topics.get (for the project containing the Pub/Sub topic) pubsub.topics.create 3 (for the project containing the Pub/Sub topic) pubsub.topics.getIamPolicy (for Pub/Sub topic receiving notifications) pubsub.topics.setIamPolicy 3 (for Pub/Sub topic receiving notifications) buckets notifications create --skip-topic-setup storage.buckets.get storage.buckets.update buckets notifications delete storage.buckets.get storage.buckets.update buckets notifications describe storage.buckets.get buckets notifications list storage.buckets.get buckets relocate storage.buckets.relocate buckets remove-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets set-iam-policy storage.buckets.setIamPolicy storage.buckets.update buckets update storage.buckets.update storage.buckets.setIpFilter 15 buckets update --no-requester-pays storage.buckets.update resourcemanager.projects.createBillingAssignment 2 buckets update --recovery-point-objective --rpo --[no-]uniform-bucket-level-access storage.buckets.get storage.buckets.update buckets update --clear-pap --clear-public-access-prevention --[no-]pap --[no-]public-access-prevention storage.buckets.get storage.buckets.update storage.buckets.setIamPolicy cat storage.objects.get storage.objects.list 13 cp storage.objects.get (for the source objects) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) du storage.objects.list folders create storage.folders.create folders delete storage.folders.delete folders describe storage.folders.get folders list storage.folders.list folders rename storage.folders.rename (for the source bucket) storage.folders.create (for the destination bucket) hash storage.objects.get hmac create storage.hmacKeys.create hmac delete storage.hmacKeys.delete hmac describe storage.hmacKeys.get hmac list storage.hmacKeys.list hmac update storage.hmacKeys.update insights dataset-configs create storageinsights.datasetConfigs.create insights dataset-configs create-link storageinsights.datasetConfigs.linkDataset insights dataset-configs delete storageinsights.datasetConfigs.delete insights dataset-configs delete-link storageinsights.datasetConfigs.unlinkDataset insights dataset-configs describe storageinsights.datasetConfigs.get insights dataset-configs list storageinsights.datasetConfigs.list insights dataset-configs update storageinsights.datasetConfigs.update insights inventory-reports create storageinsights.reportConfigs.create insights inventory-reports delete storageinsights.reportConfigs.delete insights inventory-reports details list storageinsights.reportDetails.list insights inventory-reports details describe storageinsights.reportDetails.get insights inventory-reports list storageinsights.reportConfigs.list insights inventory-reports update storageinsights.reportConfigs.get storageinsights.reportConfigs.update ls (for bucket listing) storage.buckets.list storage.buckets.getIamPolicy 6 ls (for object listing) storage.objects.get 7 storage.objects.list storage.objects.getIamPolicy 8 ls --buckets storage.buckets.get storage.buckets.getIamPolicy 6 storage intelligence-config enable storage.intelligenceConfigs.update storage-intelligence disable storage.intelligenceConfigs.update storage-intelligence describe storage.intelligenceConfigs.get storage-intelligence update storage.intelligenceConfigs.update mv storage.objects.get (for the source objects) storage.objects.delete (for the source bucket) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) objects compose storage.objects.get storage.objects.create storage.objects.delete 9 objects describe storage.objects.get storage.objects.getIamPolicy 8 objects list storage.objects.list storage.objects.getIamPolicy 8 objects update storage.objects.get storage.objects.list storage.objects.update objects update --storage-class --encryption-key --clear-encryption-key storage.objects.get storage.objects.list storage.objects.create storage.objects.delete objects update --retention-mode --retain-until --clear-retention storage.objects.get storage.objects.list storage.objects.update storage.objects.setRetention storage.objects.overrideUnlockedRetention 11 operations cancel storage.bucketOperations.cancel operations describe storage.bucketOperations.get operations list storage.bucketOperations.list restore storage.objects.create storage.objects.delete 9 storage.objects.restore restore --async storage.objects.create storage.objects.delete 14 storage.objects.restore storage.buckets.restore rm storage.buckets.delete storage.objects.delete storage.objects.list rsync storage.objects.list (for the source bucket) storage.objects.get (for the source objects) storage.objects.list (for the destination bucket) storage.objects.get (for the destination bucket) storage.objects.create (for the destination bucket) storage.objects.delete 10 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) rsync --dry-run storage.objects.list (for the source and destination buckets) service-agent resourceManager.projects.get sign-url None; however, the service account whose key is used as part of this command must have permission to perform the request being encoded into the signed URL.
- Home Documentation Storage Cloud Storage Reference Send feedback IAM permissions for gcloud storage commands Stay organized with collections Save and categorize content based on your preferences.
- For example, buckets notification create requires only storage.buckets.get and storage.buckets.update to use, but you must have additional permissions for the feature to work properly.
- If you use the --recursive flag, you must have storage.objects.list permission for the relevant bucket, in addition to the permissions required for the specific command you are using.

### "Manage HMAC keys for service accounts \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following sample retrieves a list of HMAC keys associated with a project: def list hmac keys require "google/cloud/storage" storage = Google :: Cloud :: Storage . new By default Storage#hmac keys uses the Storage client project id hmac keys = storage . hmac keys puts "HMAC Keys:" hmac keys . all do hmac key puts "Service Account Email: #{ hmac key . service account email } " puts "Access ID: #{ hmac key . access id } " end end The following sample retrieves information for a specific HMAC key: def get hmac key access id : The access ID of the HMAC key access id = "GOOG0234230X00" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new By default Storage#hmac keys uses the Storage client project id hmac key = storage . hmac key access id puts "The HMAC key metadata is:" puts "Key ID: #{ hmac key . id } " puts "Service Account Email: #{ hmac key . service account email } " puts "Access ID: #{ hmac key . access id } " puts "Project ID: #{ hmac key . project id } " puts "Active: #{ hmac key . active? } " puts "Created At: #{ hmac key . created at } " puts "Updated At: #{ hmac key . updated at } " puts "Etag: #{ hmac key . etag } " end REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For more information, see Set up authentication for client libraries . def create hmac key service account email : The service account email used to generate an HMAC key service account email = "service-my-project-number@gs-project-accounts.iam.gserviceaccount.com" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new By default Storage#create hmac key uses the Storage client project id hmac key = storage . create hmac key service account email puts "The base64 encoded secret is: #{ hmac key . secret } " puts "Do not miss that secret, there is no API to recover it." puts " \n The HMAC key metadata is:" puts "Key ID: #{ hmac key . id } " puts "Service Account Email: #{ hmac key . service account email } " puts "Access ID: #{ hmac key . access id } " puts "Project ID: #{ hmac key . project id } " puts "Active: #{ hmac key . active? } " puts "Created At: #{ hmac key . created at } " puts "Updated At: #{ hmac key . updated at } " puts "Etag: #{ hmac key . etag } " end Terraform You can use a Terraform resource to create an HMAC key .
- The following sample retrieves a list of HMAC keys associated with a project: use Google\Cloud\Storage\StorageClient; / List HMAC keys. @param string $projectId The ID of your Google Cloud Platform project. (e.g. 'my-project-id') / function list hmac keys(string $projectId): void { $storage = new StorageClient(); // By default hmacKeys will use the projectId used by StorageClient() to list HMAC Keys. $hmacKeys = $storage->hmacKeys(['projectId' => $projectId]); printf('HMAC Key\'s:' .
- Use cURL to call the JSON API with a POST hmacKeys request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://storage.googleapis.com/storage/v1/projects/ PROJECT IDENTIFIER /hmacKeys?serviceAccountEmail= SERVICE ACCOUNT EMAIL " Where: PROJECT IDENTIFIER is the ID or number for the project associated with the key you want to create.

### Shim for Running gcloud storage \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)
- Source ID: `site-docs-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Boto Configuration Configuration found in the boto file is mapped 1:1 to gcloud environment variables where appropriate. [Credentials] aws access key id: AWS ACCESS KEY ID aws secret access key: AWS SECRET ACCESS KEY use client certificate: CLOUDSDK CONTEXT AWARE USE CLIENT CERTIFICATE [Boto] proxy: CLOUDSDK PROXY ADDRESS proxy type: CLOUDSDK PROXY TYPE proxy port: CLOUDSDK PROXY PORT proxy user: CLOUDSDK PROXY USERNAME proxy pass: CLOUDSDK PROXY PASSWORD proxy rdns: CLOUDSDK PROXY RDNS http socket timeout: CLOUDSDK CORE HTTP TIMEOUT ca certificates file: CLOUDSDK CORE CUSTOM CA CERTS FILE max retry delay: CLOUDSDK STORAGE BASE RETRY DELAY num retries: CLOUDSDK STORAGE MAX RETRIES [GSUtil] check hashes: CLOUDSDK STORAGE CHECK HASHES default project id: CLOUDSDK CORE PROJECT disable analytics prompt: CLOUDSDK CORE DISABLE USAGE REPORTING use magicfile: CLOUDSDK STORAGE USE MAGICFILE parallel composite upload threshold: CLOUDSDK STORAGE PARALLEL COMPOSITE UPLOAD THRESHOLD resumable threshold: CLOUDSDK STORAGE RESUMABLE THRESHOLD [OAuth2] client id: CLOUDSDK AUTH CLIENT ID client secret: CLOUDSDK AUTH CLIENT SECRET provider authorization uri: CLOUDSDK AUTH AUTH HOST provider token uri: CLOUDSDK AUTH TOKEN HOST General Compatibility Notes Due to its compatibility across all major platforms, multiprocessing is enabled for all commands by default (equivalent to the -m option always being included in gsutil).
- To Enable Set use gcloud storage=True in the .boto config file under the [GSUtil] section: [GSUtil] use gcloud storage=True You can also set the flag for individual commands using the top-level -o flag: gsutil -o "GSUtil:use gcloud storage=True" -m cp -p file gs://bucket/obj Available Commands The gcloud storage CLI only supports a subset of gsutil commands.
- Overview Cloud SDK includes a new CLI, gcloud storage, that can be considerably faster than gsutil when performing uploads and downloads with less parameter tweaking.
- The encryption subcommand returns informational messages in a different format. labels get subcommand prints "[]" instead of "gs://[bucket name] has no labels configuration." lifecycle Works as expected. logging The get subcommand has different JSON spacing and doesn't print an informational message if no configuration is found. ls Works as expected. mb Works as expected. mv See notes on cp. notification The list subcommand prints configuration information as YAML.

### "Transition from gsutil to gcloud storage \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud](https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud)
- Source ID: `site-docs-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Operation gsutil command gcloud storage command Manage Access Control Lists (ACLs) gsutil acl get gsutil acl set gsutil acl ch gcloud storage RESOURCE describe --format="multi(acl:format=json)" gcloud storage RESOURCE update --acl-file= ACL FILE PATH gcloud storage RESOURCE update --add-acl-grant= GRANT gcloud storage RESOURCE update --remove-acl-grant= GRANT Operation gsutil command gcloud storage command Concatenate objects and display object content gsutil cat gcloud storage cat Operation gsutil command gcloud storage command Concatenate objects by combining them into a new object gsutil compose gcloud storage objects compose Notes To apply preconditions in gcloud storage objects compose , use specific flags, such as --if-generation-match or --if-metageneration-match .
- It only performs a more thorough checksum comparison if an object is missing its modification time, or if you manually force it to with the -c flag. gcloud storage rsync also starts by checking a file's size and last modification time; however, if the object sizes match but the modification times differ or are missing, it automatically performs a checksum comparison. gcloud storage rsync performs operations in parallel by default for better performance. gsutil rsync runs sequentially unless the top-level -m flag is used. gsutil rsync follows symbolic links by default. gcloud storage rsync ignores them by default unless the --no-ignore-symlinks flag is used.
- The object is then encrypted with the bucket's default KMS key or with Google-managed encryption. gsutil rewrite includes logic to skip rewriting an object if the requested transformation wouldn't change its state (for example, if the object is already in a target storage class). gcloud storage objects update might not perform the same checks, potentially leading to unnecessary operations.
- Operation gsutil command gcloud storage command Copy objects and other resources gsutil cp gcloud storage cp Notes Simulated folders created using the Google Cloud console are recognized as 0-byte placeholder objects. gcloud storage cp can be used to copy simulated folders, whereas gsutil cp cannot.

