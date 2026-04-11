---
title: "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Redis\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/about-cmek
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/access-control
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/about-cmek
  title: "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Redis\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis
Guides
Send feedback
About customer-managed encryption keys (CMEK)
Stay organized with collections
Save and categorize content based on your preferences.
By default, Memorystore for Redis encrypts customer content at
rest. Memorystore for Redis handles encryption for you without any
additional actions on your part. This option is called Google default encryption .
If you want to control your encryption keys, then you can use customer-managed encryption keys
(CMEKs) in Cloud KMS with CMEK-integrated services including
Memorystore for Redis. Using Cloud KMS keys gives you control over their protection
level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
Using Cloud KMS also lets
you view audit logs and control key lifecycles.
Instead of Google owning and managing the symmetric
key encryption keys (KEKs) that protect your data, you control and
manage these keys in Cloud KMS.
After you set up your resources with CMEKs, the experience of accessing your
Memorystore for Redis resources is similar to using Google default encryption.
For more information about your encryption
options, see Customer-managed encryption keys (CMEK) .
Note: You can use CMEK on new Memorystore for Redis
deployments only. You can't enable CMEK on existing Memorystore for Redis
instances. Also, to begin using this feature to create instances that use CMEK,
see Use customer-managed encryption
keys (CMEK) .
Who should use CMEK?
CMEK is intended for organizations that have sensitive or regulated data that
must be encrypted. For more information about whether to use CMEK to encrypt
this data, see Decide whether to use CMEK .
Google-managed encryption versus customer-managed encryption
The CMEK feature lets you use your own cryptographic keys for data at rest in
Memorystore for Redis. For CMEK-enabled Memorystore for Redis instances,
Google uses your keys to access all data at rest.
Memorystore uses Google-managed data encryption keys (DEK) and key
encryption keys (KEK) to encrypt data in Memorystore for Redis.
There are two levels of encryption:
DEK encryption: Memorystore uses DEKs to encrypt data in
Memorystore for Redis.
KEK encryption: Memorystore uses KEKs to encrypt DEKs.
The Memorystore for Redis instance stores the encrypted DEK alongside the
encrypted data on the persistent disk and Google manages the Google KEK. The
CMEK is the KEK that wraps the DEK. CMEK lets you
create , disable or destroy , and enable or restore the KEK.
You manage CMEK by using the Cloud Key Management Service API .
The following diagrams show how data-at-rest encryption works inside a
Memorystore for Redis instance when using default Google-managed encryption
versus CMEK.
Without CMEK
With CMEK
When decrypting data wrapped with CMEK, Memorystore uses the KEK
from Cloud Key Management Service to decrypt the DEK and the unencrypted DEK to decrypt data at
rest.
Pricing
Memorystore for Redis bills for a CMEK-enabled instance just like any other
instance; there are no additional costs. For more information, see
Memorystore for Redis pricing .
You use the Cloud KMS API to manage CMEK.
When you create a Memorystore for Redis instance with CMEK, Memorystore
uses the key periodically to encrypt data.
You're billed by Cloud KMS for the cost of the key and for encryption
and decryption operations when Memorystore for Redis uses the
key. For more information, see Cloud KMS pricing .
When does Memorystore interact with CMEK?
Operation
Description
Instance creation
When you create an instance, you configure it to use CMEK.
Instance update
During updates to a CMEK-enabled instance, Memorystore for Redis checks
the CMEK.
Which data is encrypted using CMEK?
CMEK encrypts the following types of data:
Customer data stored in persistent storage.
Metadata related to security features like AUTH
and in-transit encryption .
About service accounts
When creating an instance with CMEK, you must grant the
cloudkms.cryptoKeyEncrypterDecrypter role to the Memorystore for Redis
service account that has the following format:
service- PROJECT_NUMBER @cloud-redis.iam.gserviceaccount.com
Granting this permission allows the service account to request key access from
Cloud KMS.
For instructions on granting this permission to the service account, see
Grant the Memorystore for Redis service account access to the key .
About keys
In Cloud KMS, you need to create a key ring with a cryptographic key
that uses a symmetric encryption algorithm .
When you create a Memorystore for Redis instance, you select this key to
encrypt the instance. You can create one project for both your keys and
instances, or different projects for each of them.
CMEK is available in all Memorystore for Redis instance locations. You must
create the key ring and key in the same region where you want to create the
instance. A key for a multi-region or global region doesn't work. If the regions
or locations don't match, then a request for creating the instance fails.
For the resource ID of the key, CMEK uses the following format:
projects/ CMEK_ENABLED_PROJECT /locations/ REGION /keyRings/ KEY_RING_NAME /cryptoKeys/ KEY_NAME
Note: For more information about finding the resource IDs of existing keys, see
Getting a Cloud KMS resource ID .
If Memorystore for Redis can't access any key version being used (for example,
you disable all key versions), then Memorystore for Redis shuts down the
instance. In the Google Cloud console, a suspended instance shows a red
exclamation mark tooltip on the Instances page. If you hover over the tooltip,
then a No state status appears. After the key becomes accessible,
Memorystore for Redis resumes the instance automatically.
Warning: Avoid disabling or destroying any version of the key that
Memorystore for Redis uses to encrypt the instance. Disabling or destroying
any key version can suspend the instance.
External keys
You can use Cloud External Key Manager (Cloud EKM) to encrypt data within
Google Cloud using external keys that you manage.
When you use a Cloud EKM key, Google has no control over the
availability of your externally managed key. If the key isn't available when you
create your instance, then the instance isn't created.
For more considerations when using external keys, see
Cloud External Key Manager .
How do you make CMEK-encrypted data inaccessible permanently?
Warning: You have control over keys and data access. After you destroy a key
version that's associated with a Memorystore for Redis instance, Google can't
get the data back. However, if you re-enable the instance, you can
restore data by importing a backup .
You might have situations where you want to make data that's encrypted with CMEK
inaccessible permanently. To do this, you destroy the key version. For more
information about destroying versions of the key, see Destroy and restore key versions .
How do you import or export data for a CMEK-enabled instance?
If you want your data to remain encrypted with a CMEK when you export data , then you must set a CMEK on the
Cloud Storage bucket before you export data to it.
If your data is stored on a CMEK-enabled instance, then there are no special
requirements or restrictions for importing data
into a new instance.
Behavior of a CMEK key version
This section provides information about what happens when you disable, destroy,
rotate, enable, and restore a key version.
Disable or destroy a CMEK key version
If you want to ensure no data access to your instance, then disable the primary
key version of your CMEK. This shuts down your instance. Also, if any CMEK
that's in use is disabled or destroyed, then Memorystore for Redis shuts down
the instance. This includes any older key version that the instance uses.
To see if Memorystore for Redis suspends your instance, use one of the
following interfaces:
Google Cloud console : in the Instances page, a red exclamation mark
tooltip appears next to your instance. If you hover over the tooltip, then a
No state status appears.
gcloud CLI : use the gcloud redis instances describe command. Verify that you don't see state: READY ,
state: REPAIRING , or any other state in the instance metadata.
Enable or restore the primary CMEK key version
If you enable or restore the primary key
version of your CMEK, then Memorystore for Redis no longer hides your instance.
Limitations
The following limitations apply when using CMEK with Memorystore for Redis:
You can't enable CMEK on an existing Memorystore for Redis instance.
The key, key ring, and instance must be located in the same region.
You must use the symmetric encryption algorithm
for your key.
Cloud KMS encryption and decryption rates are subject to a quota .
About CMEK organization policy constraints
Memorystore for Redis supports organization policy constraints for CMEK. By using these constraints, you can enforce
CMEK protection for your instances and limit which Cloud KMS keys you
can use for this protection.
You can configure the following organization policy constraints:
constraints/gcp.restrictNonCmekServices : use this constraint to enforce
CMEK protection for your instances. If the Memorystore for Redis API
is in the Deny policy list of services for this constraint, then you can't
create non-CMEK-protected instances.
constraints/gcp.restrictCmekCryptoKeyProjects : use this constraint to limit
which Cloud KMS keys you can use for CMEK protection. If you
configure this constraint, then the instances that use CMEK encryption must use
a key from an allowed project, folder, or organization.
Note: Because both Memorystore for Redis and Memorystore for Redis Cluster
share the same endpoint ( redis.googleapis.com ), you can't enforce CMEK for
instances independently from clusters in Memorystore for Redis Cluster.
Also, when you set up the organization policy for the project, provide a
project ID instead of a project
number.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
