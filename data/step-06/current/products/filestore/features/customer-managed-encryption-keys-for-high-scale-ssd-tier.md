---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.664Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Customer-managed encryption keys for High Scale SSD tier"
feature_slug: "customer-managed-encryption-keys-for-high-scale-ssd-tier"
latest_feature_date: "2022-04-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/cmek"
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/overview"
  - "https://docs.cloud.google.com/filestore/docs/configure-nfsv4"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "for"
  - "high"
  - "scale"
  - "ssd"
---

# Customer-managed encryption keys for High Scale SSD tier

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore supports customer-managed encryption keys for High Scale SSD tier instances in preview.

## Extended Definition

Filestore supports customer-managed encryption keys for High Scale SSD tier instances in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/cmek](https://docs.cloud.google.com/filestore/docs/cmek)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4)

## Supporting Pages

### "Encrypt data with customer-managed encryption keys (CMEK) \_|\_ Filestore\

- URL: [https://docs.cloud.google.com/filestore/docs/cmek](https://docs.cloud.google.com/filestore/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- Home Documentation Storage Filestore Guides Send feedback Encrypt data with customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Filestore.
- If the instance encrypts data using a Cloud KMS key instead of a Google-owned and Google-managed encryption key, the key name is displayed in the Encryption key field. gcloud CLI Run the following instances describe command: gcloud filestore instances describe INSTANCE ID \ --location = INSTANCE LOCATION Replace the following: INSTANCE ID with the instance ID of the Filestore instance that you want to get information about.

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- If you need more control over the keys that protect your data, you can use customer-managed encryption keys (CMEK) for Filestore.
- For details, see Encrypt data with customer-managed encryption keys .
- Use a customer-managed encryption key By default, Google Cloud automatically encrypts data when it is at rest using encryption keys managed by Google.
- Scales up or down in increments of 256 GiB Regional (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Scales up or down in increments of 256 GiB Performance Basic HDD : Static Basic SSD : Performance step at 10 TiB Configurable Configurable Scales linearly with capacity Protocol NFSv3 NFSv3, NFSv4.1 NFSv3, NFSv4.1 NFSv3, NFSv4.1 Create operations for zonal, regional, and enterprise instances can take anywhere between 15 minutes and one hour to complete, depending on instance size.

### Filestore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- If you need more control over the keys that protect your data, you can also use customer-managed encryption keys (CMEK) with Filestore.
- Filestore instances are fully managed file servers on Google Cloud that can be connected to a number of client types: Compute Engine VMs Google Kubernetes Engine (GKE) clusters External datastores such as Google Cloud VMware Engine On-premises machines Cloud Run services Once provisioned, you can scale the capacity of your instances according to need without any downtime.
- For details, see the following resources: Benefits of NFSv4.1 Encryption in Transit in Google Cloud Access control You can control the level of access that a client has on Filestore instance data based on the client's IP address.
- When you delete a Filestore instance, Google discards the encryption information used by the instance, rendering the data irretrievable as per the description in Data deletion on Google Cloud .

### About NFSv4.1 protocol \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4)
- Source ID: `site-docs-root-2`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Filestore NFSv4.1 protocol, several network ACL security flavors or settings are available: krb5 Authenticates the client using a Kerberos ticket, which is validated against the Managed Microsoft AD Kerberos server. krb5i Includes the authentication provided by krb5 and also uses Kerberos to run message integrity checks on all network traffic to and from the instance. krb5p Includes the authentication provided by krb5 and message integrity checks of krb5i and also uses Kerberos for in-transit data encryption.
- Join the Managed Microsoft AD domain: sudo yum update \ sudo yum install -y adcli realmd sssd samba-common-tools krb5-workstation nfs-utils \ bind-utils openldap-clients Complete either of the following steps: For VMs with a hostname length less than or equal to 15 characters, run the following command: sudo realm join -vU JOIN DOMAIN USER --automatic-id-mapping=no MANAGED AD DOMAIN NAME Replace the following: JOIN DOMAIN USER is the name of the user account used to join the domain.
- Filestore offers NFSv4.1 protocol support for instances created in the following service tiers : Zonal Regional Enterprise This capability can be integrated with Managed Service for Microsoft Active Directory (Managed Microsoft AD) to support workloads that require client and server authentication, message data integrity checks, and in-transit data encryption, capabilities previously unavailable in Filestore.
- Run the following setup command: sudo apt-get update \ sudo apt-get -y -qq install adcli realmd sssd sssd-tools packagekit krb5-user \ nfs-common expect retry When prompted for realm, replace the existing entry with the Managed Microsoft AD domain used on the Filestore instance.

