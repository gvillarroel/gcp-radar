---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.626Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "Oracle Automatic Storage Management support for Oracle Database on SAP NetWeaver"
feature_slug: "oracle-automatic-storage-management-support-for-oracle-database-on-sap-netweaver"
latest_feature_date: "2025-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp"
keywords:
  - "oracle"
  - "automatic"
  - "storage"
  - "management"
  - "database"
  - "sap"
  - "netweaver"
  - "have"
---

# Oracle Automatic Storage Management support for Oracle Database on SAP NetWeaver

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

SAP and Oracle have validated Oracle Automatic Storage Management for running Oracle Database with SAP NetWeaver-based applications on Google Cloud.

## Extended Definition

SAP and Oracle have validated Oracle Automatic Storage Management for running Oracle Database with SAP NetWeaver-based applications on Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)

## Supporting Pages

### "Reference architecture: SAP Business Suite on SAP ASE or IBM Db2 on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- While Cloud Storage automatically encrypts data at rest, you can instead specify your own encryption keys if you have your own key-management system.
- Drive Description Recommended storage option in Google Cloud C:\ Boot Balanced Persistent Disk D:\ Database binaries Balanced Persistent Disk E:\ Database data files SSD-based Persistent Disk or Hyperdisk L:\ Database log files SSD-based Persistent Disk or Hyperdisk P:\ Page file Balanced Persistent Disk S:\ /usr/sap and /sapmnt directories Balanced Persistent Disk T:\ temp and saptemp directories Balanced Persistent Disk X:\ Backup Balanced Persistent Disk For more information about the directory structures, see the SAP NetWeaver planning guide .
- For information about planning your SAP ASE deployment, see: SAP NetWeaver planning guide IBM Db2 for SAP planning guide What's next Learn more about the Google Cloud services used in this guide: VPC networks Compute Engine Storage options : Persistent Disk, Hyperdisk, and Cloud Storage Google Cloud console Cloud Monitoring Identity and Access Management Filestore NetApp Cloud Volumes ONTAP Google Cloud NetApp Volumes Backup and DR Service For more reference architectures, design guides, and best practices, explore the Cloud Architecture Center .
- The following operating systems are certified by SAP for use with SAP NetWeaver on Google Cloud: Red Hat Enterprise Linux (RHEL) SUSE Linux Enterprise Server (SLES) Windows Server You can find more information about specific OS versions and their compatibility with both SAP Business Suite and SAP ASE or IBM Db2 in the following guides: OS support for SAP NetWeaver on Google Cloud The "Supported operating systems" section in the SAP ASE planning guide The "Supported operating systems" section in the IBM Db2 for SAP planning guide Deployment architecture for SAP ASE SAP ASE is a key component of any SAP Business Suite system because it serves as one of the possible database types for the system.

### "Reference architecture: SAP Business Suite on SAP HANA on Google Cloud \_\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- While Cloud Storage automatically encrypts data at rest, you can instead specify your own encryption keys if you have your own key-management system.
- Single points of failure An SAP Business Suite system on SAP HANA, has some common single points of failure that can impact the availability of the system: SAP Central Services such as Message Server and Enqueue Server SAP Application Server SAP HANA database SAP Web Dispatcher, if used as a frontend for HTTP/HTTPS access to the system Shared storage such as NFS There are multiple options for reducing the impact of such single points of failure, and these options involve deploying the system using high-availability solutions, replication services, or using other functionalities that protect the system from failures.
- What's next Learn more about the Google Cloud services used in this guide: VPC networks Compute Engine Storage options : Persistent Disk, Hyperdisk, and Cloud Storage Google Cloud console Cloud Monitoring Identity and Access Management Filestore NetApp Cloud Volumes ONTAP Google Cloud NetApp Volumes Backup and DR Service For more reference architectures, design guides, and best practices, explore the Cloud Architecture Center .
- Cloud Storage for object storage Cloud Storage is an object store for files of any type or format; it has virtually unlimited storage, and you don't have to worry about provisioning it or adding more capacity.

### "Reference architecture: SAP S/4HANA on Google Cloud \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- While Cloud Storage automatically encrypts data at rest, you can instead specify your own encryption keys if you have your own key-management system.
- Single points of failure An SAP S/4HANA system has some common single points of failure that can impact the availability of the system: SAP Central Services such as Message Server and Enqueue Server SAP Application Server SAP HANA database SAP Web Dispatcher, if used as a frontend for HTTP/HTTPS access to the system Shared storage such as NFS There are multiple options for reducing the impact of such single points of failure, and these options involve deploying the system using high-availability solutions, replication services, or using other functionalities that protect the system from failures.
- What's next Learn more about the Google Cloud services used in this guide: VPC networks Compute Engine Storage options : Persistent Disk, Hyperdisk, and Cloud Storage Google Cloud console Cloud Monitoring Identity and Access Management Filestore NetApp Cloud Volumes ONTAP Google Cloud NetApp Volumes Backup and DR Service For more reference architectures, design guides, and best practices, explore the Cloud Architecture Center .
- Cloud Storage for object storage Cloud Storage is an object store for files of any type or format; it has virtually unlimited storage, and you don't have to worry about provisioning it or adding more capacity.

