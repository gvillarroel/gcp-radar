---
title: "Module bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/storage/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket
  title: "Module bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Module bucket (3.10.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.10.0 (latest)
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.1
3.3.1
3.2.0
3.1.1
3.0.0
2.19.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.0
2.2.1
2.1.0
2.0.0
1.44.0
1.43.0
1.42.3
1.41.1
1.40.0
1.39.0
1.38.0
1.37.1
1.36.2
1.35.1
1.34.0
1.33.0
1.32.0
1.31.2
1.30.0
1.29.0
1.28.1
1.27.0
1.26.0
1.25.0
1.24.1
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
Create / interact with Google Cloud Storage buckets.
Classes
Bucket
Bucket ( client , name = None , user_project = None , generation = None )
A class representing a Bucket on Cloud Storage.
Parameters
Name
Description
client
Client
A client which holds credentials and project configuration for the bucket (which requires a project).
name
str
The name of the bucket. Bucket names must start and end with a number or letter.
user_project
str
(Optional) the project ID to be billed for API requests made via this instance.
generation
int
(Optional) If present, selects a specific revision of this bucket.
BucketEncryption
BucketEncryption (
bucket ,
default_kms_key_name = None ,
google_managed_encryption_enforcement_config = None ,
customer_managed_encryption_enforcement_config = None ,
customer_supplied_encryption_enforcement_config = None ,
)
Map a bucket's encryption configuration.
Parameters
Name
Description
bucket
Bucket
Bucket for which this instance is the policy.
default_kms_key_name
str
(Optional) Resource name of KMS key used to encrypt bucket's content.
google_managed_encryption_enforcement_config
EncryptionEnforcementConfig
(Optional) Encryption enforcement configuration for Google managed encryption.
customer_managed_encryption_enforcement_config
EncryptionEnforcementConfig
(Optional) Encryption enforcement configuration for Customer managed encryption.
customer_supplied_encryption_enforcement_config
EncryptionEnforcementConfig
(Optional) Encryption enforcement configuration for Customer supplied encryption.
EncryptionEnforcementConfig
EncryptionEnforcementConfig ( restriction_mode = None )
Map a bucket's encryption enforcement configuration.
Parameters
Name
Description
restriction_mode
str
(Optional) The restriction mode for the encryption type. When set to FullyRestricted , the bucket will only allow objects encrypted with the encryption type corresponding to this configuration. When set to NotRestricted , the bucket will allow objects encrypted with any encryption type.
effective_time
datetime.datetime
(Output only) The time when the encryption enforcement configuration became effective.
IAMConfiguration
IAMConfiguration (
bucket ,
public_access_prevention = object ,
uniform_bucket_level_access_enabled = object ,
uniform_bucket_level_access_locked_time = object ,
bucket_policy_only_enabled = object ,
bucket_policy_only_locked_time = object ,
)
Map a bucket's IAM configuration.
LifecycleRuleAbortIncompleteMultipartUpload
LifecycleRuleAbortIncompleteMultipartUpload ( ** kw )
Map a rule aborting incomplete multipart uploads of matching items.
The "age" lifecycle condition is the only supported condition for this rule.
LifecycleRuleConditions
LifecycleRuleConditions (
age = None ,
created_before = None ,
is_live = None ,
matches_storage_class = None ,
number_of_newer_versions = None ,
days_since_custom_time = None ,
custom_time_before = None ,
days_since_noncurrent_time = None ,
noncurrent_time_before = None ,
matches_prefix = None ,
matches_suffix = None ,
_factory = False ,
)
Map a single lifecycle rule for a bucket.
See: https://cloud.google.com/storage/docs/lifecycle
Parameters
Name
Description
age
int
(Optional) Apply rule action to items whose age, in days, exceeds this value.
created_before
datetime.date
(Optional) Apply rule action to items created before this date.
is_live
bool
(Optional) If true, apply rule action to non-versioned items, or to items with no newer versions. If false, apply rule action to versioned items with at least one newer version.
matches_prefix
list(str)
(Optional) Apply rule action to items which any prefix matches the beginning of the item name.
matches_storage_class
list(str), one or more of Bucket.STORAGE_CLASSES .
(Optional) Apply rule action to items whose storage class matches this value.
matches_suffix
list(str)
(Optional) Apply rule action to items which any suffix matches the end of the item name.
number_of_newer_versions
int
(Optional) Apply rule action to versioned items having N newer versions.
days_since_custom_time
int
(Optional) Apply rule action to items whose number of days elapsed since the custom timestamp. This condition is relevant only for versioned objects. The value of the field must be a non negative integer. If it's zero, the object version will become eligible for lifecycle action as soon as it becomes custom.
custom_time_before
datetime.date
(Optional) Date object parsed from RFC3339 valid date, apply rule action to items whose custom time is before this date. This condition is relevant only for versioned objects, e.g., 2019-03-16.
days_since_noncurrent_time
int
(Optional) Apply rule action to items whose number of days elapsed since the non current timestamp. This condition is relevant only for versioned objects. The value of the field must be a non negative integer. If it's zero, the object version will become eligible for lifecycle action as soon as it becomes non current.
noncurrent_time_before
datetime.date
(Optional) Date object parsed from RFC3339 valid date, apply rule action to items whose non current time is before this date. This condition is relevant only for versioned objects, e.g, 2019-03-16.
Exceptions
Type
Description
ValueError
if no arguments are passed.
LifecycleRuleDelete
LifecycleRuleDelete ( ** kw )
Map a lifecycle rule deleting matching items.
LifecycleRuleSetStorageClass
LifecycleRuleSetStorageClass ( storage_class , ** kw )
Map a lifecycle rule updating storage class of matching items.
Parameter
Name
Description
storage_class
str, one of Bucket.STORAGE_CLASSES .
new storage class to assign to matching items.
SoftDeletePolicy
SoftDeletePolicy ( bucket , ** kw )
Map a bucket's soft delete policy.
See https://cloud.google.com/storage/docs/soft-delete
Parameters
Name
Description
bucket
Bucket
Bucket for which this instance is the policy.
retention_duration_seconds
int
(Optional) The period of time in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted.
effective_time
datetime.datetime
(Optional) When the bucket's soft delete policy is effective. This value should normally only be set by the back-end API.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-19 UTC."],[],[]]
