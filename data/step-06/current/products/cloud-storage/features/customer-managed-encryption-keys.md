---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.963Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Customer-managed encryption keys"
feature_slug: "customer-managed-encryption-keys"
latest_feature_date: "2018-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.BucketEncryption"
  - "https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud"
  - "https://docs.cloud.google.com/storage/docs/introduction"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "let"
  - "storage"
  - "use"
  - "kms"
---

# Customer-managed encryption keys

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Customer-managed encryption keys let Cloud Storage use Cloud KMS keys to encrypt objects.

## Extended Definition

Customer-managed encryption keys let Cloud Storage use Cloud KMS keys to encrypt objects.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.BucketEncryption](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.BucketEncryption)
- [https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud](https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud)
- [https://docs.cloud.google.com/storage/docs/introduction](https://docs.cloud.google.com/storage/docs/introduction)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)

## Supporting Pages

### "Class BucketEncryption (3.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.BucketEncryption](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.BucketEncryption)
- Source ID: `site-python-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description bucket Bucket Bucket for which this instance is the policy. default kms key name str (Optional) Resource name of KMS key used to encrypt bucket's content. google managed encryption enforcement config EncryptionEnforcementConfig (Optional) Encryption enforcement configuration for Google managed encryption. customer managed encryption enforcement config EncryptionEnforcementConfig (Optional) Encryption enforcement configuration for Customer managed encryption. customer supplied encryption enforcement config EncryptionEnforcementConfig (Optional) Encryption enforcement configuration for Customer supplied encryption.
- 3.10.0 (latest) 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.1 3.3.1 3.2.0 3.1.1 3.0.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.0 1.44.0 1.43.0 1.42.3 1.41.1 1.40.0 1.39.0 1.38.0 1.37.1 1.36.2 1.35.1 1.34.0 1.33.0 1.32.0 1.31.2 1.30.0 1.29.0 1.28.1 1.27.0 1.26.0 1.25.0 1.24.1 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 BucketEncryption ( bucket , default kms key name = None , google managed encryption enforcement config = None , customer managed encryption enforcement config = None , customer supplied encryption enforcement config = None , ) Map a bucket's encryption configuration.
- Returns Type Description BucketEncryption Instance created from resource. fromkeys fromkeys ( value = None , / ) Create a new dictionary with keys from iterable and values set to value. get get ( key , default = None , / ) Return the value for key if key is in the dictionary, else default. items items () API documentation for storage.bucket.BucketEncryption.items method. keys keys () API documentation for storage.bucket.BucketEncryption.keys method. pop pop ( k [, d ]) If the key is not found, return the default if given; otherwise, raise a KeyError. popitem popitem () Remove and return a (key, value) pair as a 2-tuple.
- Return the value for key if key is in the dictionary, else default. update update ([ E , ] F ) If E is present and has a .keys() method, then does: for k in E: D[k] = E[k] If E is present and lacks a .keys() method, then does: for k, v in E: D[k] = v In either case, this is followed by: for k in F: D[k] = F[k] values values () API documentation for storage.bucket.BucketEncryption.values method.

### "Transition from gsutil to gcloud storage \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud](https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The object is then encrypted with the bucket's default KMS key or with Google-managed encryption. gsutil rewrite includes logic to skip rewriting an object if the requested transformation wouldn't change its state (for example, if the object is already in a target storage class). gcloud storage objects update might not perform the same checks, potentially leading to unnecessary operations.
- This removes any customer-supplied encryption keys (CSEK) or customer-managed encryption keys (CMEK) from the object.
- Operation gsutil command gcloud storage command Manage Access Control Lists (ACLs) gsutil acl get gsutil acl set gsutil acl ch gcloud storage RESOURCE describe --format="multi(acl:format=json)" gcloud storage RESOURCE update --acl-file= ACL FILE PATH gcloud storage RESOURCE update --add-acl-grant= GRANT gcloud storage RESOURCE update --remove-acl-grant= GRANT Operation gsutil command gcloud storage command Concatenate objects and display object content gsutil cat gcloud storage cat Operation gsutil command gcloud storage command Concatenate objects by combining them into a new object gsutil compose gcloud storage objects compose Notes To apply preconditions in gcloud storage objects compose , use specific flags, such as --if-generation-match or --if-metageneration-match .
- It only performs a more thorough checksum comparison if an object is missing its modification time, or if you manually force it to with the -c flag. gcloud storage rsync also starts by checking a file's size and last modification time; however, if the object sizes match but the modification times differ or are missing, it automatically performs a checksum comparison. gcloud storage rsync performs operations in parallel by default for better performance. gsutil rsync runs sequentially unless the top-level -m flag is used. gsutil rsync follows symbolic links by default. gcloud storage rsync ignores them by default unless the --no-ignore-symlinks flag is used.

### Cloud Storage overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/introduction](https://docs.cloud.google.com/storage/docs/introduction)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also use supplemental data encryption options such as customer-managed encryption keys and customer-supplied encryption keys .
- While buckets are suitable for most data storage use cases, you can set up optional configurations and features on a bucket to make it more suitable for high-performance workloads specifically: Hierarchical namespace : Buckets can have hierarchical namespace enabled, which lets you store your data in a logical file system structure by using folders.
- For more information, see Provision resources with Cloud Storage . gRPC : gRPC lets you interact with Cloud Storage. gRPC is a high performance, open source universal RPC framework developed by Google that you can use to define your services using Protocol Buffers.
- Directory capabilities let you utilize Cloud Storage more similarly to a hard drive or Network Attached Storage (NAS): folders let you organize objects in a directory structure, and managed folders let you simplify access control to your objects.

### "Package com.google.cloud.storage (2.64.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- Source ID: `site-java-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Customer Managed Encryption Enforcement Config Customer Managed Encryption (CMEK) enforcement config of a bucket. com. google. cloud. storage.
- Customer Encryption Objects of this class hold information on the customer-supplied encryption key, if the blob is encrypted using such a key. com. google. cloud. storage.
- Use a LifecycleRule with a DeleteLifecycleAction and a LifecycleCondition which is equivalent to a subclass of DeleteRule instead. com. google. cloud. storage.
- Use a LifecycleRule with an action DeleteLifecycleAction and a condition LifecycleCondition.Builder.setCreatedBefore instead. com. google. cloud. storage.

