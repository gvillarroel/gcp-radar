---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.974Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Per-object storage classes"
feature_slug: "per-object-storage-classes"
latest_feature_date: "2016-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/storage-classes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage"
  - "https://docs.cloud.google.com/storage/docs/autoclass"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
keywords:
  - "per"
  - "object"
  - "storage"
  - "classes"
  - "allows"
  - "class"
  - "assignment"
  - "at"
---

# Per-object storage classes

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage allows storage class assignment at the object level and lifecycle-based automatic class changes.

## Extended Definition

Cloud Storage allows storage class assignment at the object level and lifecycle-based automatic class changes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)

## Supporting Pages

### Storage classes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- Source ID: `site-docs-root`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Pricing Storage classes affect the pricing model of objects and the operations you perform.
- Storing your objects in the same zones as your compute resources enables significantly lower latency and higher throughput compared to other storage classes.
- You can move your data from DRA to other storage classes by performing a storage transfer .
- For example, objects in your bucket other than soft-deleted objects transition to Standard storage when Autoclass is enabled, and this includes objects stored in legacy classes.

### "Package com.google.cloud.storage (2.64.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- Source ID: `site-java-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instances of this class are used to create a new object in Google Cloud Storage or update the properties of an existing object.
- Customer Encryption Objects of this class hold information on the customer-supplied encryption key, if the blob is encrypted using such a key. com. google. cloud. storage.
- This allows callers to catch ApiException thrown in an async operation, while still maintaining the call site. com. google. cloud. storage.
- Copy Request A class to contain all information needed for a Google Cloud Storage Copy operation. com. google. cloud. storage.

### Autoclass \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once an object becomes eligible to transition between storage classes, Cloud Storage performs the transition asynchronously, so there can be a lag between when an object is eligible for transition and when the transition actually occurs.
- If the bucket is configured to use Archive storage as the terminal storage class, objects continue to transition to colder storage classes as follows: Any object that isn't accessed for 90 days transitions to Coldline storage.
- Objects in a storage class other than Standard storage are handled as follows: Relocating objects in Nearline storage, Coldline storage, or Archive storage storage classes does not count as accessing them.
- Transition behavior Once Autoclass is enabled, objects at least 128 KiB in size transition between storage classes as follows: If an object's data is accessed, the object transitions to Standard storage.

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The name of a storage class // See the StorageClass documentation for other valid storage classes: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/storage/StorageClass.html // const storageClass = 'coldline'; // The name of a location // See this documentation for other valid locations: // http://g.co/cloud/storage/docs/locations#location-mr // const location = 'ASIA'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client // The bucket in the sample below will be created in the project associated with this client. // For more information, please see https://cloud.google.com/docs/authentication/production or https://googleapis.dev/nodejs/storage/latest/Storage.html const storage = new Storage (); async function createBucketWithStorageClassAndLocation () { // For default values see: https://cloud.google.com/storage/docs/locations and // https://cloud.google.com/storage/docs/storage-classes const [ bucket ] = await storage . createBucket ( bucketName , { location , [ storageClass ] : true , }); console . log ( ${ bucket . name } created with ${ storageClass } class in ${ location } ); } createBucketWithStorageClassAndLocation (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . use Google\Cloud\Storage\StorageClient; / Create a new bucket with a custom default storage class and location. @param string $bucketName The name of your Cloud Storage bucket. (e.g. 'my-bucket') / function create bucket class location(string $bucketName): void { $storage = new StorageClient(); $storageClass = 'COLDLINE'; $location = 'ASIA'; $bucket = $storage->createBucket($bucketName, [ 'storageClass' => $storageClass, 'location' => $location, ]); $objects = $bucket->objects([ 'encryption' => [ 'defaultKmsKeyName' => null, ] ]); printf('Created bucket %s in %s with storage class %s', $bucketName, $storageClass, $location); } Python For more information, see the Cloud Storage Python API reference documentation .
- StorageOptions ; public class CreateBucketWithStorageClassAndLocation { public static void createBucketWithStorageClassAndLocation ( String projectId , String bucketName ) { // The ID of your GCP project // String projectId = "your-project-id"; // The ID to give your GCS bucket // String bucketName = "your-unique-bucket-name"; Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService (); // See the StorageClass documentation for other valid storage classes: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/storage/StorageClass.html StorageClass storageClass = StorageClass .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions storage.buckets.create storage.buckets.enableObjectRetention (only required if enabling object retention configurations for the bucket) storage.buckets.list (only required if creating a bucket using the Google Cloud console.) resourcemanager.projects.get (only required if creating a bucket using the Google Cloud console) You might also be able to get these permissions with custom roles or other predefined roles.

