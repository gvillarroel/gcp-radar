---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.660Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Cloud External Key Management support"
feature_slug: "cloud-external-key-management-support"
latest_feature_date: "2023-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/cmek"
  - "https://docs.cloud.google.com/filestore/docs/csi-driver"
  - "https://docs.cloud.google.com/filestore/docs/overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/overview"
keywords:
  - "external"
  - "key"
  - "management"
  - "filestore"
  - "supports"
---

# Cloud External Key Management support

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore supports Cloud External Key Management.

## Extended Definition

Filestore supports Cloud External Key Management.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/cmek](https://docs.cloud.google.com/filestore/docs/cmek)
- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/overview)

## Supporting Pages

### "Encrypt data with customer-managed encryption keys (CMEK) \_|\_ Filestore\

- URL: [https://docs.cloud.google.com/filestore/docs/cmek](https://docs.cloud.google.com/filestore/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- CMEK options Filestore supports CMEKs stored as software keys, as hardware keys in an HSM cluster , and as keys stored externally in Cloud External Key Manager (Cloud EKM) .
- Click Create . gcloud CLI To create a Filestore instance that uses your Cloud KMS key for data encryption, specify the --kms-key flag in the filestore instances create command: gcloud filestore instances create nfs-server \ --tier = <var>TIER</var> \ --location = us-central1 \ --file-share = name = "vol1" ,capacity = 1TiB \ --network = name = "default" \ --kms-key = KMS KEY Replace the following: TIER with a Filestore tier that supports CMEKs.
- If the Cloud Key Management Service (Cloud KMS) is notified by the External Key Manager (EKM) that an external key is unreachable, users receive an ekm key unreachable detected notification.
- Unreachable key notifications can be viewed from the Filestore instance details page: Go to the Filestore instances page Users also receive ekm key unreachable detected notifications on any of the following operations if performed within one hour of the first reported notification: Revert a snapshot Create an instance backup Delete a backup Restore an instance from a backup Update or patch an instance Supported tiers The following table shows the Filestore service tiers that support CMEKs: Tier CMEK support Basic HDD No Basic SSD No Zonal Yes Regional Yes Enterprise Yes Create a key ring and key to use with your instance The key ring and key can be in a different project from the Filestore instance but they must be in the same location.

### "Access Filestore instances with the Filestore CSI driver \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Service tier Share type GKE minimum version for NFSv3 GKE minimum version for NFSv4.1 Enterprise Single share, multishare 1.25 1.33 (single share only) Zonal (1 TiB - 9.75 TiB) Single share 1.31 1.33 Zonal (10 TiB - 100 TiB) Single share 1.27 1.33 Regional Single share 1.33.4-gke.1172000 1.33.4-gke.1172000 Basic HDD (100 GiB - 63.9 TiB) Single share 1.33 Not supported Basic HDD Single share 1.21 Not supported Basic SSD Single share 1.21 Not supported Filestore uses the NFSv3 file system protocol on the Filestore instance by default and supports any NFSv3-compatible client.
- However, understanding how it manages file ownership and access requires grasping a few key concepts: NFS and user mappings NFS (Network File System) is the protocol used by Filestore.
- Use NFSv4.1 file system protocol with Filestore The Filestore CSI driver supports the NFSv4.1 file system protocol with GKE version 1.33 or later.
- Configure IP access rules with Filestore volumes Filestore supports IP-based access control rules for volumes.

### Filestore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Filestore instances are fully managed file servers on Google Cloud that can be connected to a number of client types: Compute Engine VMs Google Kubernetes Engine (GKE) clusters External datastores such as Google Cloud VMware Engine On-premises machines Cloud Run services Once provisioned, you can scale the capacity of your instances according to need without any downtime.
- Filestore supports the following file system protocols: Protocol Supported service tiers Highlights NFSv3 All service tiers Supports bidirectional communication between the client and server.
- As a type of persistent file storage, Filestore supports multiple concurrent application instances accessing the same file system simultaneously.
- If you need more control over the keys that protect your data, you can also use customer-managed encryption keys (CMEK) with Filestore.

### "google-cloud-filestore overview (1.89.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/overview)
- Source ID: `site-java-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- 1.89.0 (latest) 1.88.0 1.86.0 1.84.0 1.83.0 1.82.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.2.0 Key Reference Links Cloud Filestore API Description: Instances are fully managed NFS file servers on Google Cloud for use with applications running on Compute Engine virtual machines (VMs) instances or Google Kubernetes Engine clusters.
- The example below demonstrates how you would import the BOM and include the google-cloud-filestore artifact. <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.79.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-filestore</artifactId> </dependency> </dependencies> Gradle BOMs are supported by default in Gradle 5.x or later.
- The example below demonstrates how you would import the BOM and include the google-cloud-filestore artifact. implementation ( platform ( "com.google.cloud:libraries-bom:26.79.0" )) implementation ( "com.google.cloud:google-cloud-filestore" ) The platform and enforcedPlatform keywords supply dependency versions declared in a BOM.
- Cloud Filestore API Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Cloud Filestore API for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.

