---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.664Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Customer-managed encryption keys for Enterprise tier"
feature_slug: "customer-managed-encryption-keys-for-enterprise-tier"
latest_feature_date: "2021-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/cmek"
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/overview"
  - "https://docs.cloud.google.com/filestore/docs/about-supported-protocols"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "for"
  - "enterprise"
  - "tier"
  - "filestore"
---

# Customer-managed encryption keys for Enterprise tier

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore supports customer-managed encryption keys for Enterprise tier instances; Filestore supports customer-managed encryption keys for Enterprise tier instances in preview.

## Extended Definition

Filestore supports customer-managed encryption keys for Enterprise tier instances; Filestore supports customer-managed encryption keys for Enterprise tier instances in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/cmek](https://docs.cloud.google.com/filestore/docs/cmek)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols)

## Supporting Pages

### "Encrypt data with customer-managed encryption keys (CMEK) \_|\_ Filestore\

- URL: [https://docs.cloud.google.com/filestore/docs/cmek](https://docs.cloud.google.com/filestore/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 307
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: gcloud filestore instances list \ --filter = "kmsKeyName=projects/example-project/locations/us-central1/keyRings/example-ring/cryptoKeys/example-key" The output looks like: INSTANCE NAME LOCATION TIER CAPACITY GB FILE SHARE NAME IP ADDRESS STATE CREATE TIME nfs-server us-central1 ENTERPRISE 1024 vol1 10 .166.108.2 READY 2021 -08-12T11:38:56 Get Cloud KMS key information for an instance Use one of the following methods to get Cloud KMS key information for a Filestore instance: Google Cloud console Go to the Filestore instances page.
- Home Documentation Storage Filestore Guides Send feedback Encrypt data with customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Filestore.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- If you need more control over the keys that protect your data, you can use customer-managed encryption keys (CMEK) for Filestore.
- For details, see Encrypt data with customer-managed encryption keys .
- The following table shows the instance sizes available for each tier: Tier Minimum size Maximum size Incremental step size Zonal 1 TiB 9.75 TiB 256 GiB Zonal 10 TiB 100 TiB 2.5 TiB Regional 100 GiB or 1 TiB 10,239 GiB or 9.75 TiB 1 GiB or 256 GiB Regional 10 TiB 100 TiB 2.5 TiB Basic HDD 1 TiB 63.9 TiB 1 GiB Basic SSD 2.5 TiB 63.9 TiB 1 GiB Enterprise 1 TiB 10 TiB 256 GiB Depending on the access to the small capacity instances feature, the lower capacity range for Filestore regional instances can be either 100 GiB to 10,239 GiB or 1 TiB to 9.75 TiB.
- You can set the default location by running the config set filestore/zone command: gcloud config set filestore/zone zone For the regional or enterprise tier, use the config set filestore/region command: gcloud config set filestore/region region DESCRIPTION A description of the Filestore instance.

### Filestore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- Source ID: `site-api-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- If you need more control over the keys that protect your data, you can also use customer-managed encryption keys (CMEK) with Filestore.
- For details, see the following resources: Benefits of NFSv4.1 Encryption in Transit in Google Cloud Access control You can control the level of access that a client has on Filestore instance data based on the client's IP address.
- When you delete a Filestore instance, Google discards the encryption information used by the instance, rendering the data irretrievable as per the description in Data deletion on Google Cloud .
- NFSv4.1 zonal, regional, and enterprise service tiers Supports client and server authentication, message integrity checks, and in-transit data encryption.

### "About supported file system protocols \_|\_ Filestore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols)
- Source ID: `site-docs-root-2`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed Service for Microsoft Active Directory While Managed Service for Microsoft Active Directory (Managed Microsoft AD) is not a strict requirement, it is the only Google Cloud-managed solution to support both LDAP and Kerberos, both of which are requirements for the Filestore NFSv4.1 protocol.
- For a comprehensive list of supported GKE versions for each Filestore service tier and protocol, see the compatibility table in Access Filestore instances with the Filestore CSI driver .
- Create a Filestore instance with Private Service Connect Configure the NFSv4.1 protocol Create a Filestore instance with Managed Microsoft AD Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access control and additional behaviors Filestore NFSv4.1 ACEs are managed on Linux using the following commands: nfs4 setfacl : Create or edit ACEs on a file or directory. nfs4 getfacl : List the ACEs on a file or directory.

