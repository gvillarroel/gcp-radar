---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.785Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Object Lifecycle Management prefix and suffix match conditions"
feature_slug: "object-lifecycle-management-prefix-and-suffix-match-conditions"
latest_feature_date: "2022-06-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.LifecycleRuleConditions"
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
keywords:
  - "object"
  - "lifecycle"
  - "management"
  - "prefix"
  - "and"
  - "suffix"
  - "match"
  - "conditions"
---

# Object Lifecycle Management prefix and suffix match conditions

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Object Lifecycle Management supports MatchesPrefix and MatchesSuffix conditions to target objects by name patterns.

## Extended Definition

Object Lifecycle Management supports MatchesPrefix and MatchesSuffix conditions to target objects by name patterns.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.LifecycleRuleConditions](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.LifecycleRuleConditions)
- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)

## Supporting Pages

### "Class LifecycleRuleConditions (3.10.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.LifecycleRuleConditions](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.LifecycleRuleConditions)
- Source ID: `site-python-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 3.10.0 (latest) 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.1 3.3.1 3.2.0 3.1.1 3.0.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.0 1.44.0 1.43.0 1.42.3 1.41.1 1.40.0 1.39.0 1.38.0 1.37.1 1.36.2 1.35.1 1.34.0 1.33.0 1.32.0 1.31.2 1.30.0 1.29.0 1.28.1 1.27.0 1.26.0 1.25.0 1.24.1 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 LifecycleRuleConditions ( age = None , created before = None , is live = None , matches storage class = None , number of newer versions = None , days since custom time = None , custom time before = None , days since noncurrent time = None , noncurrent time before = None , matches prefix = None , matches suffix = None , factory = False , ) Map a single lifecycle rule for a bucket.
- If false, apply rule action to versioned items with at least one newer version. matches prefix list(str) (Optional) Apply rule action to items which any prefix matches the beginning of the item name. matches storage class list(str), one or more of Bucket.STORAGE CLASSES . (Optional) Apply rule action to items whose storage class matches this value. matches suffix list(str) (Optional) Apply rule action to items which any suffix matches the end of the item name. number of newer versions int (Optional) Apply rule action to versioned items having N newer versions. days since custom time int (Optional) Apply rule action to items whose number of days elapsed since the custom timestamp.
- Returns Type Description LifecycleRuleConditions Instance created from resource. fromkeys fromkeys ( value = None , / ) Create a new dictionary with keys from iterable and values set to value. get get ( key , default = None , / ) Return the value for key if key is in the dictionary, else default. items items () API documentation for storage.bucket.LifecycleRuleConditions.items method. keys keys () API documentation for storage.bucket.LifecycleRuleConditions.keys method. pop pop ( k [, d ]) If the key is not found, return the default if given; otherwise, raise a KeyError. popitem popitem () Remove and return a (key, value) pair as a 2-tuple.
- Properties age Conditon's age value. created before Conditon's created before value. custom time before Conditon's 'custom time before' value. days since custom time Conditon's 'days since custom time' value. days since noncurrent time Conditon's 'days since noncurrent time' value. is live Conditon's 'is live' value. matches prefix Conditon's 'matches prefix' value. matches storage class Conditon's 'matches storage class' value. matches suffix Conditon's 'matches suffix' value. noncurrent time before Conditon's 'noncurrent time before' value. number of newer versions Conditon's 'number of newer versions' value.

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- The MatchesPrefix and MatchesSuffix conditions allow you to restrict lifecycle actions to objects with specific prefixes and suffixes.
- June 09, 2025 Libraries Java 2.53.0 (2025-06-04) Features Expose BucketInfo.getProject as a BigInteger ( #3119 ) ( 64bbb60 ), closes #3023 storagecontrol: Add Anywhere cache control APIs ( 06572b7 ) storagecontrol: Add Client Libraries Storage IntelligenceConfig ( 06572b7 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.58.0 ( 06572b7 ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250521-2.0.0 ( #3118 ) ( e1be49e ) Update dependency com.google.apis:google-api-services-storage to v1-rev20250524-2.0.0 ( #3127 ) ( 2a4499d ) Update sdk-platform-java dependencies ( #3129 ) ( 31cd058 ) Documentation Add explicit Optional annotations to fields that have always been treated as optional ( 53b6927 ) Add note that Bucket.project output format is always project number format ( 53b6927 ) Add note that managedFolders are supported for GetIamPolicy and SetIamPolicy ( 53b6927 ) June 05, 2025 Change The limit for the maximum number of prefixes and suffixes when using matchesPrefix and matchesSuffix lifecycle conditions across all rules on a bucket is increased from 50 to 1,000.
- Announcement Beginning October 16, 2023, the Autoclass feature and the matchesStorageClass condition for Object Lifecycle Management will be incompatible.
- June 27, 2022 Feature Object Lifecycle Management now supports new conditions and a new action.

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive). include trailing delimiter boolean (Optional) If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes . versions bool (Optional) Whether object versions should be returned as separate blobs. projection str (Optional) If used, must be 'full' or 'noAcl'.
- See https://cloud.google.com/storage/docs/access-logs Parameters Name Description bucket name str name of bucket in which to store access logs object prefix str prefix for access log filenames exists exists ( client = None , timeout = 60 , if etag match = None , if etag not match = None , if metageneration match = None , if metageneration not match = None , retry = google . api core . retry . retry unary .
- See: configuring retries Exceptions Type Description ValueError if force is True and the bucket contains more than 256 objects / blobs. delete blob delete blob ( blob name , client = None , generation = None , if generation match = None , if generation not match = None , if metageneration match = None , if metageneration not match = None , timeout = 60 , retry = google . api core . retry . retry unary .
- See https://cloud.google.com/storage/docs/lifecycle and https://cloud.google.com/storage/docs/json api/v1/buckets clear lifecyle rules clear lifecyle rules () Deprecated alias for clear lifecycle rules. configure website configure website ( main page suffix = None , not found page = None ) Configure website-related properties.

