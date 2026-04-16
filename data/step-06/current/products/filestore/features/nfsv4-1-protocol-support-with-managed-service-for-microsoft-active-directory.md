---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.657Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "NFSv4.1 protocol support with Managed Service for Microsoft Active Directory"
feature_slug: "nfsv4-1-protocol-support-with-managed-service-for-microsoft-active-directory"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad"
  - "https://docs.cloud.google.com/filestore/docs/configure-nfsv4"
  - "https://docs.cloud.google.com/filestore/docs/about-supported-protocols"
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
keywords:
  - "nfsv4"
  - "protocol"
  - "with"
  - "managed"
  - "for"
  - "microsoft"
  - "active"
  - "directory"
---

# NFSv4.1 protocol support with Managed Service for Microsoft Active Directory

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore supports the NFSv4.1 protocol with integration for Managed Service for Microsoft Active Directory.

## Extended Definition

Filestore supports the NFSv4.1 protocol with integration for Managed Service for Microsoft Active Directory.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad)
- [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4)
- [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)

## Supporting Pages

### "Create a Filestore instance with Managed Microsoft AD \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad)
- Source ID: `site-docs-root-2`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If Managed Microsoft AD is in a separate project, then the VPC network should be configured with Active Directory network peering on the Managed Microsoft AD configuration.
- For more information on how to configure objects in Managed Microsoft AD, see Managed Active Directory objects .
- Create a Filestore instance that uses the NFSv4.1 protocol with Managed Microsoft AD.
- Create the Managed Microsoft AD domain If you want to use Managed Microsoft AD with a Filestore instance, the Managed Microsoft AD domain must be created before the Filestore instance.

### About NFSv4.1 protocol \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4)
- Source ID: `site-docs-root-2`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filestore offers NFSv4.1 protocol support for instances created in the following service tiers : Zonal Regional Enterprise This capability can be integrated with Managed Service for Microsoft Active Directory (Managed Microsoft AD) to support workloads that require client and server authentication, message data integrity checks, and in-transit data encryption, capabilities previously unavailable in Filestore.
- In the Filestore NFSv4.1 protocol, several network ACL security flavors or settings are available: krb5 Authenticates the client using a Kerberos ticket, which is validated against the Managed Microsoft AD Kerberos server. krb5i Includes the authentication provided by krb5 and also uses Kerberos to run message integrity checks on all network traffic to and from the instance. krb5p Includes the authentication provided by krb5 and message integrity checks of krb5i and also uses Kerberos for in-transit data encryption.
- Managed Microsoft AD is the only fully-managed Google Cloud solution that supports both LDAP and Kerberos , requirements for the NFSv4.1 protocol and its security and privacy benefits.
- If you want to take advantage of these options, Managed Service for Microsoft Active Directory integration is required.

### "About supported file system protocols \_|\_ Filestore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols)
- Source ID: `site-docs-root-2`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed Service for Microsoft Active Directory While Managed Service for Microsoft Active Directory (Managed Microsoft AD) is not a strict requirement, it is the only Google Cloud-managed solution to support both LDAP and Kerberos, both of which are requirements for the Filestore NFSv4.1 protocol.
- Create a Filestore instance with Private Service Connect Configure the NFSv4.1 protocol Create a Filestore instance with Managed Microsoft AD Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Administrators are strongly encouraged to use Managed Service for Microsoft Active Directory (Managed Microsoft AD) to implement and manage LDAP and Kerberos.
- Requires RPCSEC GSS Authentication which is implemented using LDAP and Kerberos , both available in Managed Service for Microsoft Active Directory .

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Scales up or down in increments of 256 GiB Regional (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Scales up or down in increments of 256 GiB Performance Basic HDD : Static Basic SSD : Performance step at 10 TiB Configurable Configurable Scales linearly with capacity Protocol NFSv3 NFSv3, NFSv4.1 NFSv3, NFSv4.1 NFSv3, NFSv4.1 Create operations for zonal, regional, and enterprise instances can take anywhere between 15 minutes and one hour to complete, depending on instance size.
- What's next Learn how to configure an instance for use with the NFSv4.1 protocol .
- For details, see Encrypt data with customer-managed encryption keys .
- For more information, see Quotas or Request a quota increase . gcloud filestore instances create INSTANCE ID \ [--project= PROJECT ID ] \ [--location= LOCATION ] \ [--description= DESCRIPTION ] \ [--performance= PERFORMANCE ] \ --tier= TIER \ --file-share=name=" FILE SHARE NAME ",capacity= FILE SHARE SIZE \ --network=name=" VPC-NETWORK ",[connect-mode= CONNECT MODE ],[reserved-ip-range=" RESERVED IP ADDRESS "] \ [--labels= KEY = VALUE ,[ KEY = VALUE ,…]] \ [--kms-key= KMS KEY ] \ [--deletion-protection] \ [--deletion-protection-reason=" PROTECTION REASON "] Where: INSTANCE ID with the instance ID of the Filestore instance that you want to create.

