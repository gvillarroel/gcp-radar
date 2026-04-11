---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.607Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Bucket encryption type enforcement"
feature_slug: "bucket-encryption-type-enforcement"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.EncryptionEnforcementConfig"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.BucketEncryption"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
keywords:
  - "bucket"
  - "encryption"
  - "type"
  - "enforcement"
  - "storage"
  - "lets"
  - "you"
  - "allow"
---

# Bucket encryption type enforcement

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Cloud Storage lets you allow or prohibit specific encryption types for new objects created in a bucket.

## Extended Definition

Cloud Storage lets you allow or prohibit specific encryption types for new objects created in a bucket.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.EncryptionEnforcementConfig](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.EncryptionEnforcementConfig)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.BucketEncryption](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.BucketEncryption)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)

## Supporting Pages

### "Class EncryptionEnforcementConfig (3.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.EncryptionEnforcementConfig](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.EncryptionEnforcementConfig)
- Source ID: `site-python-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description EncryptionEnforcementConfig Instance created from resource. fromkeys fromkeys ( value = None , / ) Create a new dictionary with keys from iterable and values set to value. get get ( key , default = None , / ) Return the value for key if key is in the dictionary, else default. items items () API documentation for storage.bucket.EncryptionEnforcementConfig.items method. keys keys () API documentation for storage.bucket.EncryptionEnforcementConfig.keys method. pop pop ( k [, d ]) If the key is not found, return the default if given; otherwise, raise a KeyError. popitem popitem () Remove and return a (key, value) pair as a 2-tuple.
- When set to NotRestricted , the bucket will allow objects encrypted with any encryption type. effective time datetime.datetime (Output only) The time when the encryption enforcement configuration became effective.
- Return the value for key if key is in the dictionary, else default. update update ([ E , ] F ) If E is present and has a .keys() method, then does: for k in E: D[k] = E[k] If E is present and lacks a .keys() method, then does: for k, v in E: D[k] = v In either case, this is followed by: for k in F: D[k] = F[k] values values () API documentation for storage.bucket.EncryptionEnforcementConfig.values method.
- Methods clear clear () API documentation for storage.bucket.EncryptionEnforcementConfig.clear method. copy copy () API documentation for storage.bucket.EncryptionEnforcementConfig.copy method. from api repr from api repr ( resource ) Factory: construct instance from resource.

### "Class BucketEncryption (3.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.BucketEncryption](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.BucketEncryption)
- Source ID: `site-python-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description BucketEncryption Instance created from resource. fromkeys fromkeys ( value = None , / ) Create a new dictionary with keys from iterable and values set to value. get get ( key , default = None , / ) Return the value for key if key is in the dictionary, else default. items items () API documentation for storage.bucket.BucketEncryption.items method. keys keys () API documentation for storage.bucket.BucketEncryption.keys method. pop pop ( k [, d ]) If the key is not found, return the default if given; otherwise, raise a KeyError. popitem popitem () Remove and return a (key, value) pair as a 2-tuple.
- Returns Type Description Bucket the instance's bucket. customer managed encryption enforcement config Retrieve the encryption enforcement configuration for Customer managed encryption.
- Returns Type Description EncryptionEnforcementConfig The configuration instance. default kms key name Retrieve default KMS encryption key for objects in the bucket.
- 3.10.0 (latest) 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.1 3.3.1 3.2.0 3.1.1 3.0.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.0 1.44.0 1.43.0 1.42.3 1.41.1 1.40.0 1.39.0 1.38.0 1.37.1 1.36.2 1.35.1 1.34.0 1.33.0 1.32.0 1.31.2 1.30.0 1.29.0 1.28.1 1.27.0 1.26.0 1.25.0 1.24.1 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 BucketEncryption ( bucket , default kms key name = None , google managed encryption enforcement config = None , customer managed encryption enforcement config = None , customer supplied encryption enforcement config = None , ) Map a bucket's encryption configuration.

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for client libraries . use Google\Cloud\Storage\StorageClient; / Create a new bucket with a custom default storage class and location. @param string $bucketName The name of your Cloud Storage bucket. (e.g. 'my-bucket') / function create bucket class location(string $bucketName): void { $storage = new StorageClient(); $storageClass = 'COLDLINE'; $location = 'ASIA'; $bucket = $storage->createBucket($bucketName, [ 'storageClass' => $storageClass, 'location' => $location, ]); $objects = $bucket->objects([ 'encryption' => [ 'defaultKmsKeyName' => null, ] ]); printf('Created bucket %s in %s with storage class %s', $bucketName, $storageClass, $location); } Python For more information, see the Cloud Storage Python API reference documentation .
- Create new storage bucket in the US multi-region with coldline storage resource "random id" "bucket prefix" { byte length = 8 } resource "google storage bucket" "static" { name = "${random id.bucket prefix.hex}-new-bucket" location = "US" storage class = "COLDLINE" uniform bucket level access = true } REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For example: gcloud storage buckets create gs:// BUCKET NAME --project= PROJECT ID --default-storage-class= STORAGE CLASS --location= BUCKET LOCATION --uniform-bucket-level-access --soft-delete-duration= RETENTION DURATION --encryption-enforcement-file= ENCRYPTION ENFORCEMENT FILE For a complete list of options for bucket creation using the gcloud CLI, see buckets create options .
- For example, 10d . --encryption-enforcement-file : Provide a file that defines which encryption methods are restricted or allowed for new objects in the bucket.

