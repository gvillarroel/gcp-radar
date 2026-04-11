---
title: "Cloud KMS release notes \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/release-notes
  title: "Cloud KMS release notes \_|\_ Cloud Key Management Service \_|\_ Google\
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
Resources
Send feedback
Cloud KMS release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Cloud Key Management Service. You can
periodically check this page for announcements about new or updated features,
bug fixes, known issues, and deprecated functionality.
Current version: v1
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 02, 2026
Feature
Cloud KMS deletion of keys and key versions is generally available. Keys and key
versions must meet deletion criteria before they can be deleted. Names of
deleted keys can't be reused.
For more information, including deletion criteria, see Delete Cloud KMS
resources .
February 11, 2026
Feature
Cloud KMS Autokey for projects is available in Public Preview. Autokey for
projects lets you enable Cloud KMS Autokey for delegated key management. In
delegated key management, keys created by Autokey are created in the same
project as the resources they protect. This option is suitable for your
organization if project administrators are in charge of key management for the
projects they manage.
You can still use Cloud KMS Autokey for centralized key management in a folder,
where all keys that protect resources in that folder are created in a dedicated
key project. You can also use centralized key management in a folder, with
certain projects within that folder configured to use delegated key management
and same-project keys instead of creating keys in the dedicated key project.
You can enable Autokey for projects on individual projects or on all projects
within a folder. For more information, see
Enable Cloud KMS Autokey .
January 20, 2026
Feature
Cloud KMS is available in the following region:
asia-southeast3
For more information, see Cloud KMS locations .
December 17, 2025
Feature
Single-tenant Cloud HSM is now generally available. With
Single-tenant Cloud HSM, you can create and manage dedicated single-tenant
instances. Each instance is a cluster of partitions on HSMs in a single
Cloud KMS region. Google manages the HSMs, but you have administrative
control over your instance.
Single-tenant Cloud HSM is available in the following locations:
us-central1
us-east4
europe-west1
europe-west4
Creating a managing an instance requires quorum approval with two-factor
authentication using keys that you create and secure outside of
Google Cloud. Single-tenant Cloud HSM instances incur additional costs.
For more information about Single-tenant Cloud HSM, see
Single-tenant Cloud HSM . To learn how to
create and maintain a Single-tenant Cloud HSM instance, see Create and
manage a Single-tenant Cloud HSM
instance . To see pricing details for
Single-tenant Cloud HSM, see Pricing for
Single-tenant Cloud HSM .
September 23, 2025
Feature
Cloud KMS now supports key encapsulation mechanisms (KEMs) for sharing secrets in Preview. KEMs are designed to be resistant to post-quantum attacks. You can use the following KEM algorithms:
ML_KEM_768
ML_KEM_1024
KEM_XWING
For more information about key encapsulation mechanisms, see Key encapsulation mechanisms . To learn how to use key encapsulation mechanisms to share secrets, see Encapsulate and decapsulate using KEMs .
June 30, 2025
Feature
Cloud HSM for Google Workspace now lets you use Cloud HSM keys for client-side encryption (CSE) to protect sensitive workloads in Google Workspace. For more information about Cloud HSM for Google Workspace, including how to get started, see Onboard to Cloud HSM for Google Workspace .
April 09, 2025
Feature
To help you get the right Cloud KMS keys on-demand, for consistent alignment with recommended encryption practices, Cloud KMS Autokey now has a free tier. The free tier covers the following usage:
100 free active key versions monthly
10,000 free cryptographic operations monthly
The free tier only applies to keys created using Cloud KMS Autokey. Key administration operations including key rotation are always free. For more details, see Cloud Key Management Service pricing
March 04, 2025
Feature
Cloud KMS is available in the following region:
europe-north2
For more information, see Cloud KMS locations .
February 21, 2025
Feature
Cloud KMS now supports the following post-quantum computing (PQC) algorithms for digital signatures in Public Preview:
PQ_SIGN_ML_DSA_65 : Module-lattice-based digital signature algorithm
PQ_SIGN_SLH_DSA_SHA2_128S : Stateless hash-based digital signature algorithm
To Retrieve a public key for a PQC key, you must use the gcloud CLI or the Cloud KMS REST API.
For the gcloud CLI, use the --public-key-format nist-pqc flag.
For the REST API, use the public_key_format=NIST_PQC header parameter.
For more information about PQC algorithms, see PQC signing algorithms . For more information about PQC digital signatures, see Post-quantum cryptography (PQC) digital signature .
November 18, 2024
Feature
Cloud KMS is available in the following region:
northamerica-south1
For more information, see Cloud KMS locations .
October 18, 2024
Feature
You can now use custom constraints with Organization Policy to provide more granular control over specific fields for some Cloud KMS resources. For more information, see Create custom organization policy constraints for Cloud KMS .
September 24, 2024
Feature
Cloud KMS with Autokey is now in General Availability for Cloud Storage, Compute Engine, BigQuery, Secret Manager, Cloud SQL, and Spanner.
Autokey simplifies creating and using customer-managed encryption keys (CMEKs) by automating provisioning and assignment. With Autokey, key rings, keys, and service accounts don't need to be planned and provisioned before they're needed. Instead, Autokey generates keys on demand as resources are created.
Using keys generated by Autokey can help you consistently align with industry standards and recommended practices for data security, including the HSM protection level, separation of duties, key rotation, location, and key specificity. Keys requested using Autokey function identically to other Cloud HSM keys with the same settings.
For more information, see Autokey overview .
June 14, 2024
Change
As previously announced, Cloud KMS has changed the default duration of the scheduled for destruction period from 24 hours to 30 days.
As of February 1, 2024, newly created CryptoKeys use the new default duration of 30 days, unless a different duration is specified during key creation. For more information about key destruction, see Destroy and restore key versions .
Owners of existing CryptoKeys that had used the default duration were given until May 1, 2024 to opt out from automatically updating those keys to use the new default duration. Existing CryptoKeys that were not opted out have been updated to use the new default duration of 30 days. No further action is required from you.
May 16, 2024
Feature
Cloud KMS with Autokey is now in Preview for Cloud Storage, Compute Engine, BigQuery, and Secret Manager.
Autokey simplifies creating and using customer-managed encryption keys (CMEKs) by automating provisioning and assignment. With Autokey, key rings, keys, and service accounts don't need to be planned and provisioned before they're needed. Instead, Autokey generates keys on demand as resources are created.
Using keys generated by Autokey can help you consistently align with industry standards and recommended practices for data security, including the HSM protection level, separation of duties, key rotation, location, and key specificity. Keys requested using Autokey function identically to other Cloud HSM keys with the same settings.
For more information, see Autokey overview .
Feature
Cloud KMS has two new organization policy constraints that you can use to control key version destruction. These constraints became available on November 1, 2023.
For more information, see Control key version destruction .
April 15, 2024
Feature
Cloud KMS now supports asymmetric signing and validation using ECDSA on the Curve25519 in PureEdDSA mode, which takes raw data as input instead of hashed data.
For more information on this and other algorithms supported by Cloud KMS, see Key purposes and algorithms .
April 04, 2024
Feature
Bare Metal Rack HSM is generally available for customers with specific business and technical requirements in limited regions.
Bare Metal Rack HSM is an infrastructure-as-a-service offering that lets you deploy large numbers of customer-owned hardware security modules (HSMs) in PCI-compliant facilities next to your Google Cloud workloads. This product helps to accelerate migration of your payment applications to Google Cloud.
For more information, including to compare Bare Metal Rack HSM with Bare Metal HSM, see Bare Metal Rack HSM .
March 20, 2024
Deprecated
Certificate bundles for verifying attestations for Cloud HSM keys are deprecated. You can no longer download certificate bundles as of March 20, 2024.
Certificate bundles have been replaced by certificate chains. To learn how to use certificate chains to verify attestations for Cloud HSM keys, see Verifying the attestation manually .
January 31, 2024
Feature
Cloud KMS is available in the following region:
africa-south1
For more information, see Cloud KMS locations .
January 18, 2024
Feature
Bare Metal HSM is generally available for customers with specific business and technical requirements in limited regions.
Bare Metal HSM is an infrastructure-as-a-service offering that lets you deploy customer-owned hardware security modules (HSMs) in PCI-compliant facilities next to your Google Cloud workloads. This product helps to accelerate migration of your payment applications to Google Cloud.
For more information, see Bare Metal HSM .
September 15, 2023
Feature
Cloud KMS is available in the following region:
me-central2
For more information, see Cloud KMS locations .
August 22, 2023
Feature
Cloud KMS is available in the following region:
europe-west10
For more information, see Cloud KMS locations .
May 22, 2023
Feature
The Key Usage dashboard in the Google Cloud console and the new KMS Inventory REST API are now generally available.
For more information about the Key Usage dashboard, see View key usage .
For more information about the KMS Inventory REST API, see KMS Inventory API .
For example curl commands using the KMS Inventory REST API, see View key usage and View keys by project .
April 18, 2023
Feature
Cloud HSM resources are now available in the following regions:
europe-west12
me-central1
For information about which locations are supported by Cloud KMS, Cloud HSM, and Cloud EKM, see Cloud KMS locations .
March 30, 2023
Feature
Cloud KMS is available in the following region:
me-central1
For more information, see Cloud KMS locations .
March 24, 2023
Feature
Cloud EKM now supports coordinated external keys .
Coordinated external keys let you create and manage keys in a compatible external key management system from Cloud KMS over a VPC network. For more information, see EKM key management from Cloud KMS .
Thales CipherTrust Cloud Key Manager is the first external key management partner system that is compatible with EKM key management from Cloud KMS.
March 23, 2023
Feature
Cloud KMS is available in the following region:
europe-west12
For more information, see Cloud KMS locations .
January 19, 2023
Feature
Cloud KMS and Cloud EKM resources are available in the in (India) multi-regional location. Cloud HSM resources are not available in this location.
For information about which Google Cloud Locations are supported by Cloud KMS, Cloud HSM, and Cloud EKM, see Cloud KMS Locations .
December 09, 2022
Feature
The Key Usage dashboard in the Google Cloud console and the new KMS Inventory REST API are now in Preview.
For more information about the Key Usage dashboard, see View key usage .
For more information about the KMS Inventory REST API, see KMS Inventory API .
For example curl commands using the KMS Inventory REST API, see View key usage and View keys by project .
October 31, 2022
Feature
Cloud HSM resources are now available in the following regions:
europe-southwest1
europe-west9
me-west1
For information about which locations are supported by Cloud KMS, Cloud HSM, and Cloud EKM, see Cloud KMS locations .
September 12, 2022
Feature
Cloud KMS is available in the following region:
me-west1
For more information, see Cloud KMS locations .
June 29, 2022
Feature
Customers enrolled in Key Access Justifications will now see justifications listed in Cloud Audit Logs for Cloud KMS.
June 08, 2022
Feature
Cloud EKM now supports Dataproc Metastore. For more information, see Cloud External Key Manager .
June 07, 2022
Feature
Cloud KMS is available in the following region:
us-south1
For more information, see Cloud KMS locations .
May 24, 2022
Feature
Cloud KMS is available in the following region:
us-east5
For more information, see Cloud KMS locations .
May 10, 2022
Feature
Cloud KMS is available in the following region:
europe-southwest1
For more information, see Cloud KMS locations .
May 03, 2022
Feature
Cloud KMS is available in the following region:
europe-west9
For more information, see Cloud KMS locations .
March 30, 2022
Feature
Two new organization policy constraints are now available in Preview to help ensure CMEK usage across an organization:
constraints/gcp.restrictNonCmekServices requires CMEK protection.
constraints/gcp.restrictCmekCryptoKeyProjects limits which Cloud KMS keys are used for CMEK protection.
To learn more, see CMEK organization policies .
March 25, 2022
Feature
Cloud EKM now supports Cloud Bigtable and Log Storage in Cloud Logging. For more information, see Cloud External Key Manager .
March 18, 2022
Feature
Using Cloud EKM with a Virtual Private Network is now generally available. This means you can access your external key manager with a private endpoint.
See Using Cloud EKM with VPC to learn more.
February 28, 2022
Feature
Cloud HSM resources are now available in the following regions:
asia1
eur3
eur4
nam3
nam4
nam6
nam9
For information about which locations are supported by Cloud KMS, Cloud HSM, and Cloud EKM, see Cloud KMS locations .
February 14, 2022
Announcement
Virtru is now available as a supported Cloud EKM partner. See Supported key managers to learn more.
January 31, 2022
Feature
You can now use Cloud EKM with a Virtual Private Network (preview). This means you can access your external key manager with a private endpoint.
See Using Cloud EKM with VPC to learn more.
January 28, 2022
Feature
Cloud EKM now supports Cloud Run, Dataproc, and Vertex AI. For more information, see Cloud External Key Manager .
January 05, 2022
Feature
Cloud HSM is now available in the Melbourne (australia-southeast2) region.
December 23, 2021
Feature
Asymmetric keys for Cloud EKM are now generally available (GA).
December 07, 2021
Change
The Cloud EKM cryptographic requests quota has been increased from 10 QPS to 100 QPS. If you use quotas to determine how much you are billed, this change could increase the amount you spend on Cloud KMS. See Cloud EKM quotas for more details.
November 16, 2021
Feature
Cloud KMS is now available in the Santiago (southamerica-west1) region.
November 03, 2021
Feature
You can now attest HSM keys using certificate chains via gcloud command-line tool, Cloud Console, or Cloud KMS API. See Verifying attestations to learn more.
September 09, 2021
Feature
Cloud KMS now provides a library that conforms to the PKCS #11 standard, which enables working with existing applications that use the PKCS #11 API. See Library for PKCS #11 to learn more.
September 03, 2021
Feature
Re-importing previously destroyed keys is now supported in Cloud KMS.
August 20, 2021
Feature
You can now retrieve random bytes from the random number generator in Cloud HSM. See Generating random bytes to learn more.
Feature
MAC keys are now supported by Cloud KMS. See Creating and validating MAC digital signatures to learn more.
Feature
Cloud KMS now supports a configurable variable soft deletion window for cryptographic keys.
July 29, 2021
Feature
Cloud EKM now supports Artifact Registry, Logs Router in Cloud Logging, and Cloud Spanner. For more information, see Cloud External Key Manager .
June 21, 2021
Feature
Several fields related to verifying end-to-end data integrity for cryptographic operations are generally available (GA).
May 19, 2021
Change
The Cloud KMS and Cloud HSM SLA has been updated.
March 31, 2021
Feature
Cloud EKM now supports Dataflow Appliance and Pub/Sub. For more information, see Cloud External Key Manager .
March 24, 2021
Feature
The europe-central2 region in Warsaw is now available. See Cloud KMS locations for more details.
February 01, 2021
Feature
Cloud EKM adds support for Dataflow shuffle and Secret Manager. For more information, see Cloud External Key Manager .
October 28, 2020
Feature
Cloud EKM now supports Cloud SQL and GKE. For more information, see Cloud External Key Manager .
July 14, 2020
Feature
Cloud HSM resources are available in the us-west4 and asia-southeast2 regions. Cloud KMS resources were already available in these regions.
For information about which Cloud Locations are supported by Cloud KMS, Cloud HSM, and Cloud EKM, see the Cloud KMS regional locations .
June 22, 2020
Feature
Keys hosted by Thales are now supported in Cloud EKM. To learn more, see Cloud EKM .
June 08, 2020
Feature
Cloud KMS and Cloud EKM resources are available in the asia-southeast2 region. Cloud HSM resources are not available in this region.
For information about which Cloud Locations are supported by Cloud KMS, Cloud HSM, and Cloud EKM, see the Cloud KMS regional locations .
May 28, 2020
Feature
Several fields related to data integrity have been added to the Cloud KMS API, along with guidelines for using them. To learn more about maintaining data integrity when performing cryptographic operations, see Verifying end-to-end data integrity .
April 30, 2020
Feature
Hosted Private HSM is generally available.
April 20, 2020
Feature
Cloud KMS and Cloud EKM resources are available in the us-west4 region. Cloud HSM resources are not available in this region.
Cloud HSM resources are available in the global multi-regional location.
For information about which Cloud Locations are supported by Cloud KMS, Cloud HSM, and Cloud EKM, see the Cloud KMS regional locations .
April 15, 2020
Feature
Cloud External Key Manager (Cloud EKM) is generally available.
March 18, 2020
Feature
Importing keys into Cloud KMS software keys is generally available (GA).
March 05, 2020
Feature
Cloud EKM resources are now available in the asia-northeast3 and us-west3 locations .
February 25, 2020
Feature
Cloud KMS resources can now be created in the us-west3 region.
Cloud HSM resources are now also available in the us-west3 region.
Cloud EKM resources are not available in the us-west3 region.
For information about which Cloud Locations are supported by Cloud KMS, Cloud HSM, and Cloud EKM, refer to Cloud KMS locations .
February 20, 2020
Feature
You can now import key material into Cloud KMS software keys. For more information, see Key import . Importing key material into Cloud HSM keys is already generally available.
January 24, 2020
Feature
Cloud KMS resources can now be created in the asia-northeast3 region.
Cloud HSM resources are now also available in the asia-northeast3 region.
Note: Cloud EKM resources are not available in the asia-northeast3 region.
Learn more about Cloud Locations . For the list of all regions supported by Cloud KMS, Cloud HSM, and Cloud EKM, see the Cloud KMS regional locations .
December 17, 2019
Feature
Cloud External Key Manager (Cloud EKM) (Beta) allows you to encrypt data stored in Google Cloud using keys stored in a supported partner external key management system. You can encrypt or decrypt data in BigQuery, Compute Engine persistent disks, or directly using the Cloud KMS API.
You can learn about changes to the API since the Alpha release.
August 22, 2019
Breaking
The Cryptographic Requests quota has been increased from 600 QPM to 60,000 QPM. If you use quotas to determine how much you are billed, this change could increase the amount you end up spending on your Cloud KMS.
If you require a smaller quota than 60,000 QPM, or you don't need a quota increase, go to the Cloud Console Quotas page and set a new value for Cryptographic requests per minute. HSM specific quotas will not be increased.
July 02, 2019
Feature
The gcloud beta kms import-jobs command group was released as part of gcloud 253.0.0 .
July 01, 2019
Feature
Introduction of import key functionality into the Cloud KMS beta release.
Note: You can import only into keys with protection level HSM .
The following are additions to the API definition.
New resources
ImportJob has been added as a resource.
The ImportJob resource contains the following methods:
ImportJobs.create
ImportJobs.get
ImportJobs.getIamPolicy
ImportJobs.list
ImportJobs.setIamPolicy
ImportJobs.testIamPermissions
The ImportJob resource contains the following enums:
ImportJobState
ImportMethod
The ImportJob resource contains the following type:
WrappingPublicKey
New methods
CryptoKeyVersions.import
New fields
CreateCryptoKeyRequest.skip_initial_version_creation
CryptoKeyVersions.import_failure_reason
CryptoKeyVersions.import_job
CryptoKeyVersions.import_time
New enums
CryptoKeyVersionState.PENDING_IMPORT
CryptoKeyVersionState.IMPORT_FAILED
New permissions
cloudkms.cryptoKeyVersions.useToImport
cloudkms.importJobs.create
cloudkms.importJobs.get
cloudkms.importJobs.getIamPolicy
cloudkms.importJobs.list
cloudkms.importJobs.setIamPolicy
For more information about Cloud KMS permissions, see Permissions and roles .
June 28, 2019
Feature
Cloud HSM resources are now available in the following regional locations:
asia-east2
europe-west6
us-west2
For the list of all supported regions, see Supported regions .
June 27, 2019
Feature
Introduction of the Cloud KMS beta release to support filtering and sorting results from the following list operations.
keyRings.list
cryptoKeys.list
cryptoKeyVersions.list
For more information, see Sorting and filtering list results .
June 20, 2019
Feature
Cloud HSM resources are now available in the following regional locations:
asia-northeast1
asia-northeast2
For the list of all supported regions, see Supported regions .
June 11, 2019
Change
The gcloud kms command group was updated as part of gcloud 250.0.0 .
Promoted the following commands to GA.
gcloud kms asymmetric-decrypt .
gcloud kms asymmetric-sign .
gcloud kms keys versions get-public-key .
Promoted the following flags in gcloud kms keys command group to GA.
--attestation-file .
--default-algorithm .
--purpose .
--protection-level .
June 04, 2019
Feature
Cloud HSM resources are now available in the following regional locations:
asia-south1
europe-north1
europe-west1
europe-west4
For the list of all supported regions, see Supported regions for Cloud HSM .
May 13, 2019
Feature
Cloud HSM resources are now available in the us multi-regional location. For the list of all supported regions, see Supported regions for Cloud HSM .
April 18, 2019
Feature
Cloud KMS resources can now be created in the asia-northeast2 region. Learn more about Cloud Locations .
April 02, 2019
Feature
Cloud HSM resources are now available in the asia-southeast 1 regional location. For the list of all supported regions, see Supported regions for Cloud HSM .
March 11, 2019
Feature
Cloud KMS resources can now be created in the europe-west6 region. Learn more about Cloud Locations .
February 26, 2019
Feature
CAVIUM_V2_COMPRESSED has been added as an enum value to AttestationFormat . To learn how to verify an attestation that is in the CAVIUM_V2_COMPRESSED format, see Verifying Attestations .
December 14, 2018
Feature
Announced general availability of asymmetric keys and Cloud HSM in Cloud KMS.
December 13, 2018
Feature
Cloud HSM resources are now available in the europe-west3 regional location. For the list of all supported regions, see Supported regions for Cloud HSM .
December 06, 2018
Feature
Cloud HSM resources are now available in the europe-west2 regional location. For the list of all supported regions, see Supported regions for Cloud HSM .
November 12, 2018
Feature
Cloud KMS resources can now be created in the eur4 and nam4 dual-regions. Learn more about Cloud Locations .
October 26, 2018
Feature
Cloud KMS resources can now be created in the asia-east2 region. Learn more about Cloud Locations .
October 11, 2018
Feature
New algorithms have been added:
RSA_SIGN_PSS_4096_SHA512
RSA_SIGN_PKCS1_4096_SHA512
RSA_DECRYPT_OAEP_4096_SHA512
For the list of all supported algorithms, see Key purposes and algorithms .
September 27, 2018
Feature
Cloud HSM resources are now available in the us-central1 regional location. For the list of all supported regions, see Supported regions for Cloud HSM .
September 05, 2018
Feature
Attestations that are downloaded via the Google Cloud Platform Console are no longer base64-encoded. This matches the raw format of the attestations downloaded via the gcloud command-line tool and the Cloud KMS API. The instructions for Verifying Attestations expect the attestation to be in raw format, not base64-encoded.
August 20, 2018
Feature
Introduction of asymmetric keys and Cloud HSM into the Cloud KMS beta release.
Additions to the API definition:
New method for creating digital signatures:
CryptoKeys.asymmetricSign
New method for retrieving an asymmetric key's public key:
CryptoKeyVersions.getPublicKey
New method for decrypting data encoded with an asymmetric public key generated by Cloud KMS:
CryptoKeyVersions.asymmetricDecrypt
New types:
CryptoKeyVersionAlgorithm
CryptoKeyVersionTemplate
CryptoKeyVersionView
ProtectionLevel
New fields:
CryptoKey.versionTemplate
CryptoKeyVersion.algorithm
CryptoKeyVersion.attestation
CryptoKeyVersion.generateTime
CryptoKeyVersion.protectionLevel
LocationMetadata.hsmAvailable
The CryptoKey.list method now contains a versionView query parameter that lists the fields of the primary key version to include in the response.
The CryptoKeyVersion.list method now contains a view query parameter that lists the fields to include in the response.
The LocationMetadata resource returned by the Locations.get and Locations.list methods now contain an hsm_available field. The hsm_available field is a bool that indicates whether the location supports Hardware Security Modules (HSMs).
Feature
Cloud HSM resources are now available in the us-east1 and us-west1 regional locations.
July 14, 2018
Feature
Cloud KMS resources can now be created in the us-west2 region. Learn more about Cloud Locations .
June 14, 2018
Feature
Cloud KMS resources can now be created in the europe-north1 region. Learn more about Cloud Locations .
April 12, 2018
Feature
Cloud KMS resources can now be created in the following regions:
asia-south1
australia-southeast1
europe-west2
europe-west3
northamerica-northeast1
southamerica-east1
us-east4
Learn more about Cloud Locations .
April 11, 2018
Change
The URL of the Cloud KMS page in the Google Cloud Platform Console has been changed from https://console.cloud.google.com/iam-admin/kms to https://console.cloud.google.com/security/kms.
April 03, 2018
Feature
The name of the Cloud KMS page in the Google Cloud Platform Console has been changed from Encryption keys to Cryptographic keys .
March 29, 2018
Feature
Cloud KMS resources can now be created in the asia-northeast1 region. Learn more about Cloud Locations .
February 08, 2018
Feature
Cloud KMS resources can now be created in the asia , europe , and us multi-regional locations. Learn more about Cloud KMS locations .
January 31, 2018
Feature
Announced general availability of IAM custom roles for Cloud KMS.
January 22, 2018
Feature
The gcloud kms locations list command now supports the europe-west4 region.
January 17, 2018
Feature
The Google Cloud Platform console now supports the europe-west4 region. You can create new key rings in this region using the console, the API and the gcloud command-line tool. The gcloud kms locations list command will support this region approximately January 22, 2018. Learn more about Cloud Locations .
January 10, 2018
Feature
Cloud KMS resources can now be created in the europe-west4 region. You can use this region to create new key rings using the API and the gcloud command-line tool. This region will not be viewable in the Google Cloud Platform console or returned by gcloud kms locations list until approximately January 17, 2018. Learn more about Cloud Locations .
October 11, 2017
Change
Promoted keys update from gcloud beta kms to gcloud kms as part of gcloud 175.0.0 .
October 04, 2017
Change
The Envelope Encryption topic provides more information about key wrapping and envelope encryption.
September 19, 2017
Change
Batch operations are no longer supported.
September 06, 2017
Feature
Labels can now be applied to CryptoKeys:
The CryptoKey type now contains the labels field.
To learn more about this feature, see Labeling CryptoKeys .
Feature
gcloud changes:
The gcloud kms keys create command has a new parameter, --labels . Use this parameter to specify labels when you create a key.
The output from the gcloud kms keys list command now contains a LABELS column.
The gcloud beta kms keys update command is new. This command supports updating an existing key.
These changes are effective in gcloud version 170.0.0 .
August 23, 2017
Feature
Cloud KMS resources can now be created in the asia-southeast1 region. Learn more about Cloud Locations .
August 18, 2017
Change
Cloud KMS is now available in a larger group of countries.
June 14, 2017
Change
Promoted encrypt and decrypt commands from gcloud beta kms to gcloud kms as part of gcloud 159.0.0 .
June 07, 2017
Deprecated
API version v1beta1 has been turned off. Please use v1 API endpoint.
Change
As part of gcloud 158.0.0 , when using gcloud to update IAM policies, data access logs can be enabled for key rings and keys, in addition to projects which were already supported.
gcloud kms keyrings set-iam-policy
gcloud kms keys set-iam-policy
May 31, 2017
Feature
Added encrypt and decrypt commands to gcloud beta kms as part of gcloud 157.0.0 .
Added examples for using gcloud beta kms encrypt and gcloud beta kms decrypt .
May 02, 2017
Feature
Data Access audit logs can now be self-enabled for Cloud KMS. For more information, see Cloud Audit Logging documentation .
Updated documentation on logs types in Cloud KMS.
April 17, 2017
Feature
Cloud KMS resources can now be created in the us-west1 region. Learn more about Cloud Locations .
March 22, 2017
Change
Promoted gcloud beta kms commands to gcloud kms as part of gcloud 148.0.0 .
March 15, 2017
Change
Renamed cryptokey to key as part of gcloud 147.0.0 .
Renamed gcloud kms cryptokeys as gcloud kms keys .
Renamed the --cryptokey flag as --key .
Deprecated the cryptokey variants.
March 08, 2017
Feature
Launch of Cloud KMS to General Availability .
Updated client libraries and code samples in C#, Go, Java, Node.js, PHP, Python, and Ruby.
New Secret Management documentation that explains how to protect secrets using Cloud KMS.
Added a Service Level Agreement (SLA) .
Change
API version from v1beta1 to v1.
The v1beta1 API is deprecated and will be turned down no sooner than June 7, 2017.
To start using the v1 API, follow the process to install the client library for your preferred language. Other than the API version, your code shouldn't need any other changes.
January 11, 2017
Feature
Launch of Cloud KMS to Beta . Use Cloud KMS to create, use, rotate, automatically rotate, and destroy symmetric AES256 encryption keys. Cloud KMS is accessible via
REST API
Google APIs Client Libraries in go, python, and java
Cloud Console user interface
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
