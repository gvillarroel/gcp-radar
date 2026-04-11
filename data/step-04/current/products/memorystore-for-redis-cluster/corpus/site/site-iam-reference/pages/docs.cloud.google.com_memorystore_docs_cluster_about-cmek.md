---
title: "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Redis\
  \ Cluster \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster/access-control
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek
  title: "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Redis\
    \ Cluster \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis Cluster
Guides
Send feedback
About customer-managed encryption keys (CMEK)
Stay organized with collections
Save and categorize content based on your preferences.
By default, Memorystore for Redis Cluster encrypts customer content at
rest. Memorystore for Redis Cluster handles encryption for you without any
additional actions on your part. This option is called Google default encryption .
If you want to control your encryption keys, then you can use customer-managed encryption keys
(CMEKs) in Cloud KMS with CMEK-integrated services including
Memorystore for Redis Cluster. Using Cloud KMS keys gives you control over their protection
level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
Using Cloud KMS also lets
you view audit logs and control key lifecycles.
Instead of Google owning and managing the symmetric
key encryption keys (KEKs) that protect your data, you control and
manage these keys in Cloud KMS.
After you set up your resources with CMEKs, the experience of accessing your
Memorystore for Redis Cluster resources is similar to using Google default encryption.
For more information about your encryption
options, see Customer-managed encryption keys (CMEK) .
Note: You can use CMEK on new Memorystore for Redis Cluster
deployments only. You can't enable CMEK on existing clusters in
Memorystore for Redis Cluster. Also, to begin using this feature to create clusters
that use CMEK, see Use
customer-managed encryption keys (CMEK) .
Who should use CMEK?
CMEK is intended for organizations that have sensitive or regulated data that
must be encrypted. For more information about whether to use CMEK to encrypt
this data, see Decide whether to use CMEK .
Google-managed encryption versus customer-managed encryption
The CMEK feature lets you use your own cryptographic keys for data at rest in
Memorystore for Redis Cluster. For CMEK-enabled clusters in Memorystore for Redis Cluster,
Google uses your keys to access all data at rest.
Memorystore uses Google-managed data encryption keys (DEK) and key
encryption keys (KEK) to encrypt data in Memorystore for Redis Cluster.
There are two levels of encryption:
DEK encryption: Memorystore uses DEKs to encrypt data in
Memorystore for Redis Cluster.
KEK encryption: Memorystore uses KEKs to encrypt DEKs.
The cluster in Memorystore for Redis Cluster stores the encrypted DEK alongside the
encrypted data on disk and Google manages the Google KEK. The CMEK is the KEK
that wraps the DEK. CMEK lets you create ,
disable or destroy , rotate , and enable or restore the KEK.
The following diagrams show how data-at-rest encryption works inside a cluster
when using default Google-managed encryption versus CMEK.
Without CMEK
With CMEK
When decrypting data wrapped with CMEK, Memorystore uses the KEK
from Cloud Key Management Service to decrypt the DEK and the unencrypted DEK to decrypt
data at rest.
Pricing
Memorystore for Redis Cluster bills for a CMEK-enabled cluster just like any other
cluster; there are no additional costs. For more information, see Memorystore for Redis Cluster pricing .
You use the Cloud KMS API to manage CMEK.
When you create a cluster that uses CMEK, Memorystore uses the key
periodically to encrypt data.
You're billed by Cloud KMS for the cost of the key and for encryption
and decryption operations when Memorystore for Redis Cluster uses the
key. For more information, see Cloud KMS pricing .
Which data is encrypted using CMEK?
CMEK encrypts the following types of customer data that are stored in persistent
storage:
Backups : Backups let you recover your
data to a point in time, and export and analyze data. Backups are also useful
for disaster recovery, data migration, data sharing, and compliance scenarios.
Persistence :
Memorystore for Redis Cluster supports two types of persistence:
RDB persistence: The Redis database (RDB) feature protects your data by
saving snapshots of your data on durable storage.
AOF persistence: This feature prioritizes data durability. It stores
data durably by recording every write command to a log file called the
Append-Only File (AOF). If a system failure or restart occurs, then the server
replays AOF file commands sequentially to restore your data.
About service accounts
When creating a cluster with CMEK, you must grant the
cloudkms.cryptoKeyEncrypterDecrypter role to the Memorystore for Redis Cluster
service account that has the following format:
service- PROJECT_NUMBER @cloud-redis.iam.gserviceaccount.com
Granting this permission allows the service account to request key access from
Cloud KMS.
For instructions on granting this permission to the service account, see
Grant the Memorystore for Redis Cluster service account access to the key .
About keys
In Cloud KMS, you need to create a key ring with a cryptographic key
that uses a symmetric encryption algorithm .
When you create a cluster in Memorystore for Redis Cluster, you select this key to
encrypt the cluster. You can create one project for both your keys and clusters,
or different projects for each of them.
CMEK is available in all cluster locations. You must create the key ring and key
in the same region where you want to create the cluster. For a multi-region cluster, you must set the key ring and key to
the same location as the cluster. If the regions or locations don't match, then
a request for creating the cluster fails.
For the resource ID of the key, CMEK uses the following format:
projects/ CMEK_ENABLED_PROJECT /locations/ REGION /keyRings/ KEY_RING_NAME /cryptoKeys/ KEY_NAME
Note: For more information about finding the resource IDs of existing keys, see
Getting a Cloud KMS resource ID .
External keys
You can use Cloud External Key Manager (Cloud EKM) to encrypt data within
Google Cloud using external keys that you manage.
When you use a Cloud EKM key, Google has no control over the
availability of your externally managed key. If the key isn't available when you
create your cluster, then the cluster isn't created.
For more considerations when using external keys, see
Cloud External Key Manager .
How do you make CMEK-encrypted data inaccessible permanently?
Warning: You have control over keys and data access. After you destroy a key
version that's associated with a cluster in Memorystore for Redis Cluster, Google can't
get the data back.
You might have situations where you want to make data that's encrypted with CMEK
inaccessible permanently. To do this, you destroy the key version. For more
information about destroying versions of the key, see Destroy and restore key versions .
Behavior of a CMEK key version
This section provides information about what happens when you disable, destroy,
rotate, enable, and restore a key version.
Disable or destroy a CMEK key version
If you disable or destroy the primary key version of your CMEK, then the
following conditions apply for backups and persistence.
Note: Even though the key version is disabled or destroyed, the cluster
continues to run read and write operations.
Backups
You can't create on-demand or automated backups .
However, if you enable an older key version, then you can access any backups
that you created using this key version.
You can't update or re-enable automated backups until you enable or restore
the primary key version .
Persistence
If you configure your cluster to use persistence ,
then Memorystore for Redis Cluster deactivates the persistence feature when the key
version becomes unavailable. You're no longer charged for this feature.
Memorystore for Redis Cluster doesn't flush new data to persistent storage using the
CMEK.
Memorystore for Redis Cluster can't read existing data that's present in the
persistent storage.
You can't update or re-enable persistence until you enable or restore
the primary key version .
Important: If you disable or destroy the primary key version, then the cluster
is considered to be out of SLA .
If you enable the primary key version of your CMEK, but you disable or destroy
an older key version, then the following conditions apply for backups and
persistence:
You can create backups. However, if a backup is encrypted with an older key
version that's disabled or destroyed, then the backup remains inaccessible.
If you enable persistence, then this feature remains enabled. If the older key
version that's used in persistence is disabled or destroyed, then
Memorystore for Redis Cluster performs an update that's similar to the one that's used
in maintenance and re-encrypts
the data with the primary key version.
Rotate the primary CMEK key version
If you rotate the primary key version of your CMEK and create a new primary key
version, then the following conditions apply for backups and persistence:
The latest primary key version of your CMEK encrypts new backups.
For existing backups, no re-encryption is done.
For persistence, the nodes don't take any action. The nodes continue to use
the older key version until the next maintenance event.
Enable or restore the primary CMEK key version
If you enable or restore the primary key version of your CMEK, then the following
conditions apply for backups and persistence:
You can create on-demand and automated backups again.
Memorystore for Redis Cluster performs an update that's similar to the one used in
maintenance and re-enables
persistence.
Limitations
The following limitations apply when using CMEK with Memorystore for Redis Cluster:
You can't enable CMEK on an existing cluster.
The key, key ring, and cluster must be located in the same region.
You must use the symmetric encryption algorithm
for your key.
Cloud KMS encryption and decryption rates are subject to a quota .
About CMEK organization policy constraints
Memorystore for Redis Cluster supports organization policy constraints for CMEK. By using these constraints, you can enforce
CMEK protection for your clusters and limit which Cloud KMS keys you
can use for this protection.
You can configure the following organization policy constraints:
constraints/gcp.restrictNonCmekServices : use this constraint to enforce
CMEK protection for your clusters. If the Memorystore for Redis Cluster API
is in the Deny policy list of services for this constraint, then you can't
create non-CMEK-protected clusters.
constraints/gcp.restrictCmekCryptoKeyProjects : use this constraint to limit
which Cloud KMS keys you can use for CMEK protection. If you
configure this constraint, then the clusters that use CMEK encryption must use a
key from an allowed project, folder, or organization.
Note: Because both Memorystore for Redis Cluster and Memorystore for Redis
share the same endpoint ( redis.googleapis.com ), you can't enforce CMEK for
clusters independently from Memorystore for Redis instances. Also,
when you set up the organization policy for the project, provide a
project ID instead of a project
number.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
