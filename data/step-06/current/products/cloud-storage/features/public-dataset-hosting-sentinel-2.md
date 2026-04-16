---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.976Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Public dataset hosting: Sentinel-2"
feature_slug: "public-dataset-hosting-sentinel-2"
latest_feature_date: "2016-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-public-data"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud"
  - "https://docs.cloud.google.com/storage/docs/access-control/making-data-public"
  - "https://docs.cloud.google.com/storage/docs/hosting-static-website"
keywords:
  - "public"
  - "dataset"
  - "hosting"
  - "sentinel"
  - "storage"
  - "hosts"
  - "the"
  - "mission"
---

# Public dataset hosting: Sentinel-2

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage hosts the Sentinel-2 mission dataset as a public dataset.

## Extended Definition

Cloud Storage hosts the Sentinel-2 mission dataset as a public dataset.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-public-data](https://docs.cloud.google.com/storage/docs/access-public-data)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public)
- [https://docs.cloud.google.com/storage/docs/hosting-static-website](https://docs.cloud.google.com/storage/docs/hosting-static-website)

## Supporting Pages

### Access public data \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-public-data](https://docs.cloud.google.com/storage/docs/access-public-data)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using a web browser, access the object with the following URI (you are asked to sign in if you are not already signed in): https://console.cloud.google.com/storage/browser/ details/ BUCKET NAME / OBJECT NAME If the public has permission to list the bucket's contents, you can list all the objects in the bucket with the following URI: https://console.cloud.google.com/storage/browser/ BUCKET NAME For example, the Google public bucket gcp-public-data-landsat contains the Landsat public dataset .
- For more information, see Set up authentication for client libraries . def download public file bucket name :, file name :, local file path : The name of the bucket to access bucket name = "my-bucket" The name of the remote public file to download file name = "publicfile.txt" The path to which the file should be downloaded local file path = "/local/path/to/file.txt" require "google/cloud/storage" storage = Google :: Cloud :: Storage . anonymous bucket = storage . bucket bucket name , skip lookup : true file = bucket . file file name file . download local file path puts "Downloaded public object #{ file . name } from bucket #{ bucket } to #{ local file path } " end What's next Explore some of the public datasets provided by Cloud Storage .
- Use the following URI to access an object in the bucket: https://storage.googleapis.com/ BUCKET NAME / OBJECT NAME For example, the Google public bucket gcp-public-data-landsat contains the Landsat public dataset .
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The ID of your GCS file // const srcFilename = 'your-file-name'; // The path to which the file should be downloaded // const destFileName = '/local/path/to/file.txt'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function downloadPublicFile () { const options = { destination : destFileName , }; // Download public file. await storage . bucket ( bucketName ). file ( srcFileName ). download ( options ); console . log ( Downloaded public file ${ srcFileName } from bucket name ${ bucketName } to ${ destFileName } ); } downloadPublicFile (). catch ( console . error ); Python For more information, see the Cloud Storage Python API reference documentation .

### "IAM permissions for gcloud storage commands \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Command Flag Required IAM Permissions batch-operations jobs create storagebatchoperations.jobs.create batch-operations jobs cancel storagebatchoperations.jobs.cancel batch-operations jobs delete storagebatchoperations.jobs.delete batch-operations jobs get storagebatchoperations.jobs.get batch-operations jobs list storagebatchoperations.jobs.list buckets add-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets anywhere-caches create storage.anywhereCaches.create buckets anywhere-caches describe storage.anywhereCaches.get buckets anywhere-caches list storage.anywhereCaches.list buckets anywhere-caches update storage.anywhereCaches.update buckets anywhere-caches pause storage.anywhereCaches.pause buckets anywhere-caches resume storage.anywhereCaches.resume buckets anywhere-caches disable storage.anywhereCaches.disable buckets create storage.buckets.create storage.buckets.setIpFilter 15 buckets delete storage.buckets.delete buckets describe storage.buckets.get storage.buckets.getIamPolicy 1 storage.buckets.getIpFilter 16 buckets get-iam-policy storage.buckets.get storage.buckets.getIamPolicy buckets list storage.buckets.list storage.buckets.getIamPolicy 1 buckets notifications create storage.buckets.get storage.buckets.update pubsub.topics.get (for the project containing the Pub/Sub topic) pubsub.topics.create 3 (for the project containing the Pub/Sub topic) pubsub.topics.getIamPolicy (for Pub/Sub topic receiving notifications) pubsub.topics.setIamPolicy 3 (for Pub/Sub topic receiving notifications) buckets notifications create --skip-topic-setup storage.buckets.get storage.buckets.update buckets notifications delete storage.buckets.get storage.buckets.update buckets notifications describe storage.buckets.get buckets notifications list storage.buckets.get buckets relocate storage.buckets.relocate buckets remove-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets set-iam-policy storage.buckets.setIamPolicy storage.buckets.update buckets update storage.buckets.update storage.buckets.setIpFilter 15 buckets update --no-requester-pays storage.buckets.update resourcemanager.projects.createBillingAssignment 2 buckets update --recovery-point-objective --rpo --[no-]uniform-bucket-level-access storage.buckets.get storage.buckets.update buckets update --clear-pap --clear-public-access-prevention --[no-]pap --[no-]public-access-prevention storage.buckets.get storage.buckets.update storage.buckets.setIamPolicy cat storage.objects.get storage.objects.list 13 cp storage.objects.get (for the source objects) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) du storage.objects.list folders create storage.folders.create folders delete storage.folders.delete folders describe storage.folders.get folders list storage.folders.list folders rename storage.folders.rename (for the source bucket) storage.folders.create (for the destination bucket) hash storage.objects.get hmac create storage.hmacKeys.create hmac delete storage.hmacKeys.delete hmac describe storage.hmacKeys.get hmac list storage.hmacKeys.list hmac update storage.hmacKeys.update insights dataset-configs create storageinsights.datasetConfigs.create insights dataset-configs create-link storageinsights.datasetConfigs.linkDataset insights dataset-configs delete storageinsights.datasetConfigs.delete insights dataset-configs delete-link storageinsights.datasetConfigs.unlinkDataset insights dataset-configs describe storageinsights.datasetConfigs.get insights dataset-configs list storageinsights.datasetConfigs.list insights dataset-configs update storageinsights.datasetConfigs.update insights inventory-reports create storageinsights.reportConfigs.create insights inventory-reports delete storageinsights.reportConfigs.delete insights inventory-reports details list storageinsights.reportDetails.list insights inventory-reports details describe storageinsights.reportDetails.get insights inventory-reports list storageinsights.reportConfigs.list insights inventory-reports update storageinsights.reportConfigs.get storageinsights.reportConfigs.update ls (for bucket listing) storage.buckets.list storage.buckets.getIamPolicy 6 ls (for object listing) storage.objects.get 7 storage.objects.list storage.objects.getIamPolicy 8 ls --buckets storage.buckets.get storage.buckets.getIamPolicy 6 storage intelligence-config enable storage.intelligenceConfigs.update storage-intelligence disable storage.intelligenceConfigs.update storage-intelligence describe storage.intelligenceConfigs.get storage-intelligence update storage.intelligenceConfigs.update mv storage.objects.get (for the source objects) storage.objects.delete (for the source bucket) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) objects compose storage.objects.get storage.objects.create storage.objects.delete 9 objects describe storage.objects.get storage.objects.getIamPolicy 8 objects list storage.objects.list storage.objects.getIamPolicy 8 objects update storage.objects.get storage.objects.list storage.objects.update objects update --storage-class --encryption-key --clear-encryption-key storage.objects.get storage.objects.list storage.objects.create storage.objects.delete objects update --retention-mode --retain-until --clear-retention storage.objects.get storage.objects.list storage.objects.update storage.objects.setRetention storage.objects.overrideUnlockedRetention 11 operations cancel storage.bucketOperations.cancel operations describe storage.bucketOperations.get operations list storage.bucketOperations.list restore storage.objects.create storage.objects.delete 9 storage.objects.restore restore --async storage.objects.create storage.objects.delete 14 storage.objects.restore storage.buckets.restore rm storage.buckets.delete storage.objects.delete storage.objects.list rsync storage.objects.list (for the source bucket) storage.objects.get (for the source objects) storage.objects.list (for the destination bucket) storage.objects.get (for the destination bucket) storage.objects.create (for the destination bucket) storage.objects.delete 10 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) rsync --dry-run storage.objects.list (for the source and destination buckets) service-agent resourceManager.projects.get sign-url None; however, the service account whose key is used as part of this command must have permission to perform the request being encoded into the signed URL.
- For example, buckets notification create requires only storage.buckets.get and storage.buckets.update to use, but you must have additional permissions for the feature to work properly.
- If you use the --recursive flag, you must have storage.objects.list permission for the relevant bucket, in addition to the permissions required for the specific command you are using.
- Wildcards and recursive flags If you use URI wildcards to select multiple objects in a command, you must have storage.objects.list permission for the bucket containing the objects.

### Make data public \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public)
- Source ID: `site-iam-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Required roles In order to get the required permissions for making objects publicly readable, ask your administrator to grant you the following roles for the bucket that contains the data you want to make public: To make all objects in a bucket publicly readable: Storage Admin ( roles/storage.admin ) To make individual objects publicly readable: Storage Object Admin ( roles/storage.objectAdmin ) If you plan on using the Google Cloud console, you'll need the Storage Admin ( roles/storage.admin ) role instead of the Storage Object Admin role.
- The following is an example ACL file the would grant allUsers access to an object: <AccessControlList> <Entries> <Entry> <Scope type="AllUsers"/> <Permission>READ</Permission> </Entry> </Entries> </AccessControlList> Remove public access for all objects within a bucket To remove public access for all objects within a bucket, remove the IAM policy that grants allUsers the Storage Object Viewer ( roles/storage.objectViewer ) role: Console In the Google Cloud console, go to the Cloud Storage Buckets page.
- Make all objects in a bucket publicly readable To make all objects in a bucket readable to everyone on the public internet, grant the principal allUsers the Storage Object Viewer ( roles/storage.objectViewer ) role: Note: The Storage Object Viewer ( roles/storage.objectViewer ) role includes the permission required to list the objects in the bucket.
- To remove public access from all objects in a bucket: Storage Admin ( roles/storage.admin ) These roles contain the permissions required to make objects public.

### Host a static website \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/hosting-static-website](https://docs.cloud.google.com/storage/docs/hosting-static-website)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- UploadResult ; import java.io.IOException ; import java.nio.file.Files ; import java.nio.file.Path ; import java.util.ArrayList ; import java.util.List ; import java.util.stream.Stream ; class UploadDirectory { public static void uploadDirectoryContents ( String bucketName , Path sourceDirectory ) throws IOException { TransferManager transferManager = TransferManagerConfig . newBuilder (). build (). getService (); ParallelUploadConfig parallelUploadConfig = ParallelUploadConfig . newBuilder (). setBucketName ( bucketName ). build (); // Create a list to store the file paths List<Path> filePaths = new ArrayList <> (); // Get all files in the directory // try-with-resource to ensure pathStream is closed try ( Stream<Path> pathStream = Files . walk ( sourceDirectory )) { pathStream . filter ( Files :: isRegularFile ). forEach ( filePaths :: add ); } List<UploadResult> results = transferManager . uploadFiles ( filePaths , parallelUploadConfig ). getUploadResults (); for ( UploadResult result : results ) { System . out . println ( "Upload for " + result . getInput (). getName () + " completed with status " + result . getStatus ()); } } } Node.js For more information, see the Cloud Storage Node.js API reference documentation .
- StorageOptions ; public class SetBucketWebsiteInfo { public static void setBucketWesbiteInfo ( String projectId , String bucketName , String indexPage , String notFoundPage ) { // The ID of your GCP project // String projectId = "your-project-id"; // The ID of your static website bucket // String bucketName = "www.example.com"; // The index page for a static website bucket // String indexPage = "index.html"; // The 404 page for a static website bucket // String notFoundPage = "404.html"; Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService (); Bucket bucket = storage . get ( bucketName ); bucket . toBuilder (). setIndexPage ( indexPage ). setNotFoundPage ( notFoundPage ). build (). update (); System . out . println ( "Static website bucket " + bucketName + " is set up to use " + indexPage + " as the index page and " + notFoundPage + " as the 404 page" ); } } Node.js For more information, see the Cloud Storage Node.js API reference documentation .
- StorageOptions ; import java.io.IOException ; import java.nio.file.Paths ; public class UploadObject { public static void uploadObject ( String projectId , String bucketName , String objectName , String filePath ) throws IOException { // The ID of your GCP project // String projectId = "your-project-id"; // The ID of your GCS bucket // String bucketName = "your-unique-bucket-name"; // The ID of your GCS object // String objectName = "your-object-name"; // The path to your file to upload // String filePath = "path/to/your/file" Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService (); BlobId blobId = BlobId . of ( bucketName , objectName ); BlobInfo blobInfo = BlobInfo . newBuilder ( blobId ). build (); // Optional: set a generation-match precondition to avoid potential race // conditions and data corruptions.
- UploadResult ; import java.io.IOException ; import java.nio.file.Path ; import java.util.List ; class UploadMany { public static void uploadManyFiles ( String bucketName , List<Path> files ) throws IOException { TransferManager transferManager = TransferManagerConfig . newBuilder (). build (). getService (); ParallelUploadConfig parallelUploadConfig = ParallelUploadConfig . newBuilder (). setBucketName ( bucketName ). build (); List<UploadResult> results = transferManager . uploadFiles ( files , parallelUploadConfig ). getUploadResults (); for ( UploadResult result : results ) { System . out . println ( "Upload for " + result . getInput (). getName () + " completed with status " + result . getStatus ()); } } } The following sample uploads all objects with a common prefix concurrently: import com.google.cloud.storage.transfermanager.

