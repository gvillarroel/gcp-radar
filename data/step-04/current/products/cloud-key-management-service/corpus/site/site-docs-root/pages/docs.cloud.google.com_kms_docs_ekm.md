---
title: "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/ekm
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/ekm
  title: "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Guides
Send feedback
Cloud External Key Manager
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of Cloud External Key Manager (Cloud EKM).
Terminology
External key manager (EKM)
The key manager used outside of Google Cloud to manage your keys.
Cloud External Key Manager (Cloud EKM)
A Google Cloud service for using your external keys that are
managed within a supported EKM.
Cloud EKM through the
internet
A version of Cloud EKM where Google Cloud communicates
with your external key manager over the internet.
Cloud EKM through a
VPC
A version of Cloud EKM where Google Cloud communicates
with your external key manager over a Virtual Private Cloud (VPC). For more
information, see VPC network overview .
EKM key management from
Cloud KMS
When using Cloud EKM through a VPC with an
external key management partner that supports the Cloud EKM
control plane, you can use the Cloud KMS EKM
management mode to simplify the process of maintaining external keys in
your external key management partner and in Cloud EKM. For more information, see
Coordinated external keys and
EKM key management from
Cloud KMS on this page.
Crypto space
A container for your resources within your external key management partner. Your crypto
space is identified by a unique crypto space path. The format of the
crypto space path varies by external key management partner—for example,
v0/cryptospaces/ YOUR_UNIQUE_PATH .
Partner-managed EKM
An arrangement where your EKM is managed for you by a trusted partner.
For more information, see Partner-managed EKM
on this page.
Key Access Justifications
When you use Cloud EKM with Key Access Justifications, each request to
your external key management partner includes a field that identifies the reason for each
request. You can configure your external key management partner to allow or deny requests
based on the Key Access Justifications code provided. For more information about
Key Access Justifications, see
Key Access Justifications overview .
Overview
With Cloud EKM, you can use keys that you manage within a
supported external key management partner to protect data within
Google Cloud. You can protect data at rest in supported CMEK integration
services , or by calling the Cloud Key Management Service API directly.
Cloud EKM provides several benefits:
Key provenance: You control the location and distribution of your
externally managed keys. Externally managed keys are never cached or stored
within Google Cloud. Instead, Cloud EKM communicates directly
with the external key management partner for each request.
Access control: You manage access to your externally managed keys in
your external key manager. You can't use an externally managed key in
Google Cloud without first granting the Google Cloud project
access to the key in your external key manager. You can revoke this access
at any time.
Centralized key management: You can manage your keys and access policies
from a single user interface, whether the data they protect resides in the
cloud or on your premises.
In all cases, the key resides on the external system, and is never sent to
Google.
You can communicate with your external key manager over the
internet or over a
Virtual Private Cloud (VPC) .
How Cloud EKM works
Cloud EKM key versions consist of these parts:
External key material : The external key material of a Cloud EKM
key is cryptographic material created and stored in your EKM. This material
does not leave your EKM and it is never shared with Google.
Key reference : Each Cloud EKM key version contains either a key
URI or a key path. This is a unique identifier for the external key material
that Cloud EKM uses when requesting cryptographic operations using
the key.
Internal key material : When a symmetric Cloud EKM key is
created, Cloud KMS creates additional key material in
Cloud KMS, which never leaves Cloud KMS. This key material
is used as an extra layer of encryption when communicating with your EKM.
This internal key material does not apply to asymmetric signing keys.
To use your Cloud EKM keys, Cloud EKM sends requests for
cryptographic operations to your EKM. For example, to encrypt data with a
symmetric encryption key, Cloud EKM first encrypts the data using the
internal key material. The encrypted data is included in a request to the EKM.
The EKM wraps the encrypted data in another layer of encryption using the
external key material, and then returns the resulting ciphertext. Data encrypted
using a Cloud EKM key can't be decrypted without both the external key
material and the internal key material.
If your organization has enabled Key Access Justifications, your external key management partner
records the provided access justification and completes the request only
for justification reason codes that are allowed by your
Key Access Justifications policy on the external key management partner.
Creating and managing Cloud EKM keys requires corresponding changes in
both Cloud KMS and the EKM.
These corresponding changes are handled differently for manually managed
external keys and for coordinated external keys . All external keys accessed over the
internet are manually managed. External keys accessed over a VPC network can be
manually managed or coordinated, depending on the EKM management mode of the EKM
connection. The Manual EKM management mode is used for manually
managed keys. The Cloud KMS EKM management mode is used for coordinated external keys.
For more information about EKM management modes, see Manually managed external
keys and Coordinated external keys
on this page.
The following diagram shows how Cloud KMS fits into the key management
model. This diagram uses Compute Engine and BigQuery as two examples;
you can also see the full list of services that support Cloud EKM
keys .
Caution: Both the Cloud EKM key version and the external key are
required for each encryption and decryption request. If you lose access to
either key, your data cannot be recovered. It is not possible to re-create an
identical Cloud EKM key version by using the same external key URI or
key path.
You can learn about the considerations and
restrictions when using Cloud EKM.
Manually managed external keys
This section provides a broad overview of how Cloud EKM works with a
manually managed external key.
You create or use an existing key in a supported external key management partner
system . This key has a unique URI or key path.
You grant your Google Cloud project access to use the key,
in the external key management partner system.
In your Google Cloud project, you create a Cloud EKM key
version, using the URI or key path for the externally managed key.
Maintenance operations like key rotation must be manually managed between
your EKM and Cloud EKM. For example, key version rotation or
key version destruction operations need to be completed both directly in
your EKM and in Cloud KMS.
Within Google Cloud, the key appears alongside your other
Cloud KMS and Cloud HSM keys, with protection level
EXTERNAL or EXTERNAL_VPC . The Cloud EKM key and the
external key management partner key work together to protect your data. The external key
material is never exposed to Google.
Coordinated external keys
This section provides an overview of how Cloud EKM works with
coordinated external keys.
You set up an EKM connection ,
setting the EKM management mode to Cloud KMS . During setup, you
must authorize your EKM to access your VPC network and authorize your
Google Cloud project service account to access your crypto space in
your EKM. Your EKM connection uses the hostname of your EKM and a crypto
space path that identifies your resources within your EKM.
You create an external key in
Cloud KMS. When you create a Cloud EKM key using an EKM
over VPC connection with the Cloud KMS EKM management mode enabled, the
following steps take place automatically:
Cloud EKM sends a key creation request to your EKM.
Your EKM creates the requested key material. This external key material
remains in the EKM and is never sent to Google.
Your EKM returns a key path to Cloud EKM.
Cloud EKM creates your Cloud EKM key version using the
key path provided by your EKM.
Maintenance operations on coordinated external keys can be initiated from
Cloud KMS. For example, coordinated external keys used for
symmetric encryption can be automatically rotated on a set schedule. The
creation of new key versions is coordinated in your EKM by
Cloud EKM. You can also trigger the creation or destruction of
key versions in your EKM from Cloud KMS using the
Google Cloud console, the gcloud CLI, the Cloud KMS
API, or Cloud KMS client libraries.
Within Google Cloud, the key appears alongside your other
Cloud KMS and Cloud HSM keys, with protection level
EXTERNAL_VPC . The Cloud EKM key and the external key management partner key work
together to protect your data. The external key material is never exposed to
Google.
EKM key management from
Cloud KMS
Coordinated external keys are made possible by EKM connections that use EKM key management from
Cloud KMS.
If your EKM supports the Cloud EKM
control plane, then you can enable EKM key management from
Cloud KMS for your
EKM connections to create coordinated external keys. With EKM key management from
Cloud KMS enabled,
Cloud EKM can request the following changes in your EKM:
Create a key: When you create an externally managed key in
Cloud KMS using a compatible EKM connection,
Cloud EKM sends your key creation request to your EKM. When
successful, your EKM creates the new key and key material and returns the
key path for Cloud EKM to use to access the key.
Rotate a key: When you rotate an externally-managed key in
Cloud KMS using a compatible EKM connection,
Cloud EKM sends your rotation request to your EKM. When successful,
your EKM creates new key material and returns the key path for
Cloud EKM to use to access the new key version.
Destroy a key: When you destroy a key version for an externally-managed key
in Cloud KMS using a compatible EKM connection,
Cloud KMS schedules the key version for destruction in
Cloud KMS. If the key version is not restored before the scheduled
for destruction period ends, Cloud EKM destroys its part of the
key's cryptographic material and sends a destruction request to your EKM.
Data encrypted with this key version cannot be decrypted after the key
version is destroyed in Cloud KMS, even if the EKM has not yet
destroyed the key version. You can see whether the EKM has successfully
destroyed the key version by viewing the key's details in
Cloud KMS.
When keys in your EKM are managed from Cloud KMS, the key material
still resides in your EKM. Google can't make any key management requests to your
EKM without explicit permission.
Google can't change permissions or Key Access Justifications policies in your
external key management partner system.
If you revoke Google's permissions in your EKM, key management operations
attempted in Cloud KMS fail.
Compatibility
Supported key managers
You can store external keys in the following external key management partner systems:
Supported today:
Fortanix
Futurex
Thales
Services that support CMEK with Cloud EKM
The following services support integration with Cloud KMS for
external (Cloud EKM) keys:
Agent Assist
AlloyDB for PostgreSQL
Apigee API hub
Application Integration
Artifact Registry
Backup and DR Service:
Backup Vault Container
and Backups at rest
Backup for GKE
BigQuery
Bigtable
Cloud Composer
Cloud Data Fusion
Cloud Healthcare API
Cloud Logging:
Data in the Log Router
and Data in Logging storage
Cloud Run
Cloud Run functions
Cloud SQL
Cloud Storage
Cloud Tasks
Cloud Workstations
Compute Engine:
Persistent disks ,
Snapshots ,
Custom images ,
and Machine images
Customer Experience Insights
Database Migration Service:
MySQL migrations - data written to databases ,
PostgreSQL migrations - Data written to databases ,
PostgreSQL to AlloyDB migrations - Data written to databases ,
SQL Server migrations - Data written to databases ,
and Oracle to PostgreSQL data at rest
Dataflow
Dataform
Dataplex Universal Catalog
Dataproc Metastore
Datastream
Dialogflow CX
Document AI
Eventarc Advanced
( Preview )
Eventarc Standard
Filestore
Firestore
Google Cloud Managed Lustre
Google Cloud Managed Service for Apache Kafka
Google Cloud NetApp Volumes
Google Distributed Cloud
Google Kubernetes Engine:
Data on VM disks
and Application-layer secrets
Integration Connectors
Looker (Google Cloud core)
Managed Service for Apache Spark:
Dataproc clusters data on VM disks
and Dataproc serverless data on VM disks
Memorystore for Redis
Memorystore for Redis Cluster
Memorystore for Valkey
Migrate to Virtual Machines:
Data migrated from VMware, AWS, and Azure VM sources
and Data migrated from disk and machine image sources
Parameter Manager
Pub/Sub
Secret Manager
Secure Source Manager
Security Command Center
Spanner
Speech-to-Text
Vertex AI
Vertex AI Workbench instances
Workflows
Workload Manager
Important: All other services are not compatible with Cloud External Key Manager for CMEK. Note: If your Cloud EKM key is not listed in the Google Cloud console
when setting up CMEK services, first copy the resource
name .
Then select Don't see your key? Enter key resource name. and enter the key
resource name captured earlier.
Considerations
When you use a Cloud EKM key, Google has no control over the
availability of your externally managed key in the external key management partner system.
If you lose keys that you manage outside of Google Cloud, Google can't
recover your data.
Review the guidelines about external key management partners and regions when
choosing the locations for your Cloud EKM keys.
Review the Cloud EKM Service Level Agreement
(SLA) .
Communicating with an external service over the internet can lead to
problems with reliability, availability, and latency. For applications with
low tolerance for these types of risks, consider using Cloud HSM or
Cloud KMS to store your key material.
If an external key is unavailable, Cloud KMS returns a
FAILED_PRECONDITION error and provides details in the
PreconditionFailure
error detail.
Enable data audit logging to maintain a record of all
errors related to Cloud EKM. Error messages contain detailed
information to help pinpoint the source of the error. An example of a
common error is when an external key management partner does not respond to a request
within a reasonable timeframe.
You need a support contract with the external key management partner.
Google Cloud support can only help with issues in
Google Cloud services and cannot directly assist with issues on
external systems. Sometimes, you must work with support on both sides to
troubleshoot interoperability issues.
Cloud EKM can be used with
Bare Metal Rack HSM to create a standalone HSM
solution integrated with Cloud KMS. To learn more, choose a
Cloud EKM partner that supports single-tenant HSMs and review the
requirements for Bare Metal Rack HSMs .
This is different from
Single-tenant Cloud HSM , and you should
carefully consider which solution better meets your requirements.
Enable audit logging in your external key manager to capture access to and
usage of your EKM keys.
Caution: When you use Cloud EKM keys, there's a risk that the key can
become unavailable. Depending on which services you're using, this can cause
fatal errors or inaccessible data. For example, if you use an external CMEK key
to encrypt Google Kubernetes Engine application-layer secrets, your nodes can become
unavailable if they can't decrypt the secrets. Inability to access the external
key can also cause permanent data loss. For example, if the CMEK key used to
encrypt a Spanner database remains unavailable for more than 30
consecutive days, Spanner
automatically deletes the database. When the current key version is not
available, you cannot recover the data by rotating to a new key version. For
better availability, consider using Cloud EKM over VPC or
Cloud HSM keys.
Restrictions
When you create a Cloud EKM key using the API or the
Google Cloud CLI, it must not have an initial key version. This does not
apply to Cloud EKM keys created using the
Google Cloud console.
Automatic rotation is not supported for manually-managed external
keys.
Cloud EKM operations are subject to specific
quotas
in addition to the quotas on Cloud KMS operations.
Symmetric encryption keys
Symmetric encryption keys are only supported for the following:
Customer managed encryption keys (CMEK) in supported integration
services .
Symmetric encryption and decryption using Cloud KMS
directly .
Data that is encrypted by Cloud EKM using an externally managed key
cannot be decrypted without using Cloud EKM.
Asymmetric signing keys
Asymmetric signing keys are limited to a subset of Cloud KMS
algorithms.
Asymmetric signing keys are only supported for the following use cases:
Asymmetric signing using Cloud KMS
directly .
Custom signing key with
Access Approval .
Once an asymmetric signing algorithm is set on a Cloud EKM key, it
cannot be modified.
Signing must be done on the data field.
External key managers and regions
Cloud EKM needs to be able to reach your keys quickly to
avoid an error. When creating a Cloud EKM key, choose a
Google Cloud location that is geographically near the location of the
external key management partner key. See your external key management partner's documentation to determine
which locations they support.
Cloud EKM over the internet: available in most Google Cloud
locations where Cloud KMS is available, including regional and
multi-regional locations.
Cloud EKM over a VPC: available in most regional
locations where Cloud KMS is
available. Cloud EKM over a VPC isn't available in
multi-regional locations.
Some locations including global and nam-eur-asia1 aren't available for
Cloud EKM. To learn which locations support Cloud EKM, see
Cloud KMS locations .
Multi-region use
When you use an externally managed key with a multi-region, the metadata of the
key is available in multiple data centers within the multi-region. This metadata
includes the information needed to communicate with the external key management partner. If your
application fails over from one data center to another within the multi-region,
the new data center initiates key requests. The new data center may have
different network characteristics from the previous data center, including
distance from the external key management partner and the likelihood of timeouts. We recommend
only using a multi-region with Cloud EKM if your chosen external key
manager provides low latency to all areas of that multi-region.
Partner-managed EKM
Partner-managed EKM lets you use Cloud EKM through a trusted sovereign
partner that manages your EKM system for you. With partner-managed EKM, your
partner creates and manages the keys that you
use in Cloud EKM. The partner ensures that your EKM complies with
sovereignty requirements.
When you onboard with your sovereign partner, the partner provisions resources
in the Google Cloud and your EKM. These resources include a
Cloud KMS project to manage your Cloud EKM keys and an EKM
connection configured for EKM key management from
Cloud KMS. Your partner creates resources
in Google Cloud locations according to your data residency requirements.
Each Cloud EKM key includes
Cloud KMS metadata, which lets Cloud EKM send requests to your
EKM to perform cryptographic operations using the external key material that
never leaves your EKM. Symmetric Cloud EKM keys also include
Cloud KMS internal key material that never leaves Google Cloud.
For more information about the internal and external sides of Cloud EKM
keys, see How Cloud EKM works on this page.
For more information about partner-managed EKM, see Configure partner-managed
Cloud KMS .
Monitor Cloud EKM usage
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can use Cloud Monitoring to monitor your EKM connection. The following
metrics can help you understand your EKM usage:
cloudkms.googleapis.com/ekm/external/request_latencies
cloudkms.googleapis.com/ekm/external/request_count
For more information about these metrics, see
cloudkms metrics . You can create a
dashboard to track these metrics. To learn how to set up a dashboard to monitor
your EKM connection, see Monitor EKM usage .
Getting support
If you experience an issue with Cloud EKM, contact Support .
What's next
Start using the
API .
Set up Cloud EKM over the
internet .
Create an EKM connection to use EKM over
VPC.
Read through the Cloud KMS API
Reference .
Learn about Logging in Cloud KMS. Logging is based
on operations, and applies to keys with both HSM and software protection
levels.
See Reference architectures for reliable deployment of Cloud EKM
services for recommendations on configuring an External Key
Manager (EKM) service deployment integrated
with Cloud EKM.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
