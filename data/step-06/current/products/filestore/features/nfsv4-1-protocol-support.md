---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.657Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "NFSv4.1 protocol support"
feature_slug: "nfsv4-1-protocol-support"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/configure-nfsv4"
  - "https://docs.cloud.google.com/filestore/docs/csi-driver"
  - "https://docs.cloud.google.com/filestore/docs/about-supported-protocols"
  - "https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad"
keywords:
  - "nfsv4"
  - "protocol"
  - "filestore"
  - "supports"
  - "the"
  - "with"
  - "managed"
  - "for"
---

# NFSv4.1 protocol support

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore supports the NFSv4.1 protocol with Managed Service for Microsoft Active Directory integration.

## Extended Definition

Filestore supports the NFSv4.1 protocol with Managed Service for Microsoft Active Directory integration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4)
- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols)
- [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad)

## Supporting Pages

### About NFSv4.1 protocol \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4)
- Source ID: `site-docs-root-2`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filestore offers NFSv4.1 protocol support for instances created in the following service tiers : Zonal Regional Enterprise This capability can be integrated with Managed Service for Microsoft Active Directory (Managed Microsoft AD) to support workloads that require client and server authentication, message data integrity checks, and in-transit data encryption, capabilities previously unavailable in Filestore.
- In the Filestore NFSv4.1 protocol, several network ACL security flavors or settings are available: krb5 Authenticates the client using a Kerberos ticket, which is validated against the Managed Microsoft AD Kerberos server. krb5i Includes the authentication provided by krb5 and also uses Kerberos to run message integrity checks on all network traffic to and from the instance. krb5p Includes the authentication provided by krb5 and message integrity checks of krb5i and also uses Kerberos for in-transit data encryption.
- Managed Microsoft AD is the only fully-managed Google Cloud solution that supports both LDAP and Kerberos , requirements for the NFSv4.1 protocol and its security and privacy benefits.
- Run the following setup command: sudo apt-get update \ sudo apt-get -y -qq install adcli realmd sssd sssd-tools packagekit krb5-user \ nfs-common expect retry When prompted for realm, replace the existing entry with the Managed Microsoft AD domain used on the Filestore instance.

### "Access Filestore instances with the Filestore CSI driver \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service tier Share type GKE minimum version for NFSv3 GKE minimum version for NFSv4.1 Enterprise Single share, multishare 1.25 1.33 (single share only) Zonal (1 TiB - 9.75 TiB) Single share 1.31 1.33 Zonal (10 TiB - 100 TiB) Single share 1.27 1.33 Regional Single share 1.33.4-gke.1172000 1.33.4-gke.1172000 Basic HDD (100 GiB - 63.9 TiB) Single share 1.33 Not supported Basic HDD Single share 1.21 Not supported Basic SSD Single share 1.21 Not supported Filestore uses the NFSv3 file system protocol on the Filestore instance by default and supports any NFSv3-compatible client.
- For dynamic provisioning, set the protocol field to NFS V4 1 in the parameters of a StorageClass object. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : enterprise-multishare-rwx provisioner : filestore.csi.storage.gke.io parameters : tier : enterprise multishare : "true" instance-storageclass-label : "enterprise-multishare-rwx" protocol : NFS V4 1 volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true You cannot mount the Filestore instance with the NFSv4.1 protocol with mountOptions set to nfsvers=3 in the StorageClass object.
- Use NFSv4.1 file system protocol with Filestore The Filestore CSI driver supports the NFSv4.1 file system protocol with GKE version 1.33 or later.
- Access pre-existing Filestore instances using the Filestore CSI driver This section describes the typical process for using a Kubernetes volume to access pre-existing Filestore instances using Filestore CSI driver in GKE: Create a PersistentVolume and a PersistentVolumeClaim to access the instance Create a manifest file like the one shown in the following example, and name it preprov-filestore.yaml : apiVersion : v1 kind : PersistentVolume metadata : name : PV NAME spec : storageClassName : "" capacity : storage : 1Ti accessModes : - ReadWriteMany persistentVolumeReclaimPolicy : Retain volumeMode : Filesystem csi : driver : filestore.csi.storage.gke.io volumeHandle : "modeInstance/ FILESTORE INSTANCE LOCATION / FILESTORE INSTANCE NAME / FILESTORE SHARE NAME " volumeAttributes : ip : FILESTORE INSTANCE IP volume : FILESTORE SHARE NAME protocol : FILESYSTEM PROTOCOL claimRef : name : PVC NAME namespace : NAMESPACE --- kind : PersistentVolumeClaim apiVersion : v1 metadata : name : PVC NAME namespace : NAMESPACE spec : accessModes : - ReadWriteMany storageClassName : "" resources : requests : storage : 1Ti To create the PersistentVolumeClaim and PersistentVolume resources based on the preprov-filestore.yaml manifest file, run the following command: kubectl apply -f preprov-filestore.yaml To specify the NFSv4.1 file system protocol, set the protocol field to NFS V4 1 in the volumeAttributes field of a PersistentVolume object.

### "About supported file system protocols \_|\_ Filestore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols)
- Source ID: `site-docs-root-2`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Filestore instance with Private Service Connect Configure the NFSv4.1 protocol Create a Filestore instance with Managed Microsoft AD Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Managed Service for Microsoft Active Directory While Managed Service for Microsoft Active Directory (Managed Microsoft AD) is not a strict requirement, it is the only Google Cloud-managed solution to support both LDAP and Kerberos, both of which are requirements for the Filestore NFSv4.1 protocol.
- GKE limitations The NFSv4.1 protocol can't be combined with Filestore multishares for GKE .
- Supports client failures No Yes Supports private services access Yes Yes Supports Private Service Connect (Restricted GA) with IPv4 and IPv6 procotols Yes Yes NFSv3 benefits The NFSv3 protocol offers quick setup for standard POSIX access.

### "Create a Filestore instance with Managed Microsoft AD \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad)
- Source ID: `site-docs-root-2`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Filestore instance that uses the NFSv4.1 protocol with Managed Microsoft AD.
- Create the Managed Microsoft AD domain If you want to use Managed Microsoft AD with a Filestore instance, the Managed Microsoft AD domain must be created before the Filestore instance.
- If you already have the gcloud CLI installed, run the following command to update it: gcloud components update Run the gcloud beta filestore instances create command to create a Filestore zonal, regional, or enterprise instance: gcloud beta filestore instances create INSTANCE-ID \ --description=" DESCRIPTION " \ --region= LOCATION \ --tier= TIER \ --protocol= PROTOCOL \ --file-share=name=" FILE SHARE NAME ",capacity= CAPACITY TB \ --network=name=" VPC NETWORK ",connect-mode= CONNECT MODE ,reserved-ip-range=" RESERVED IP RANGE " \ --managed-ad=domain=projects/ MANAGED AD PROJECT ID /locations/global/domains/ MANAGED AD DOMAIN NAME ,computer= DOMAIN COMPUTER ACCOUNT \ --project= CONSUMER PROJECT ID Where: INSTANCE ID is the instance ID of the Filestore instance that you want to create.
- The following is an example: cn: AliceGroup gidNumber: 555 objectClass: group Grant Filestore access to create and manage objects in Managed Microsoft AD using the gcloud projects add-iam-policy-binding command: gcloud projects add-iam-policy-binding MANAGED MICROSOFT AD PROJECT ID \ --member=serviceAccount:service-$(gcloud projects describe PROJECT ID \ --format='value(projectNumber)')@cloud-filer.iam.gserviceaccount.com \ --role=roles/managedidentities.filestoreintegrator Replace the following: MANAGED MICROSOFT AD PROJECT ID is the project ID of the project where the Managed Microsoft AD domain is located.

