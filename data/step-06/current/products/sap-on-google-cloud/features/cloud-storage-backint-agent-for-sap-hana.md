---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.647Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "Cloud Storage Backint agent for SAP HANA"
feature_slug: "cloud-storage-backint-agent-for-sap-hana"
latest_feature_date: "2020-08-31"
deprecation_date: "2025-02-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp"
keywords:
  - "storage"
  - "backint"
  - "agent"
  - "sap"
  - "hana"
  - "deprecated"
  - "replaced"
  - "feature"
---

# Cloud Storage Backint agent for SAP HANA

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

The Cloud Storage Backint agent for SAP HANA is deprecated and replaced by the Backint feature in version 3.0 of Google Cloud's Agent for SAP; The Cloud Storage Backint agent for SAP HANA provides backup integration with Cloud Storage and includes encryption options and other enhancements; deprecated on 2025-02-28.

## Extended Definition

The Cloud Storage Backint agent for SAP HANA is deprecated and replaced by the Backint feature in version 3.0 of Google Cloud's Agent for SAP; The Cloud Storage Backint agent for SAP HANA provides backup integration with Cloud Storage and includes encryption options and other enhancements; deprecated on 2025-02-28.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)

## Supporting Pages

### "HA scale-up cluster configuration guide for SAP HANA on SLES \_|\_ SAP on\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- Source ID: `site-docs-reference-required-2`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the Cloud Storage Backint agent for SAP HANA to backup and restore HANA databases.
- See Cloud Storage Backint agent for SAP HANA .
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates/sap hana/sap hana.py properties: instanceName: hana-ha-vm-2 instanceType: n2-highmem-32 zone: us-central1-c subnetwork: example-subnet-us-central1 linuxImage: family/sles-15-sp1-sap linuxImageProject: suse-sap-cloud sap hana deployment bucket: hana2-sp4-rev46 sap hana sid: HA1 sap hana instance number: 22 sap hana sidadm password: Google123 sap hana system password: Google123 sap hana scaleout nodes: 0 networkTag: cluster-ntwk-tag serviceAccount: limited-roles@example-project-123456.iam.gserviceaccount.com sap hana sidadm uid: 900 sap hana sapsys gid: 79 Create firewall rules that allow access to the host VMs If you haven't done so already, create firewall rules that allow access to each host VM from the following sources: For configuration purposes, your local workstation, a bastion host, or a jump server For access between the cluster nodes, the other host VMs in the HA cluster When you create VPC firewall rules, you specify the network tags that you defined in the template.yaml configuration file to designate your host VMs as the target for the rule.
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates/sap hana/sap hana.py properties: instanceName: hana-ha-vm-1 instanceType: n2-highmem-32 zone: us-central1-a subnetwork: example-subnet-us-central1 linuxImage: family/sles-15-sp1-sap linuxImageProject: suse-sap-cloud sap hana deployment bucket: hana2-sp4-rev46 sap hana sid: HA1 sap hana instance number: 22 sap hana sidadm password: Tempa55word sap hana system password: Tempa55word sap hana scaleout nodes: 0 networkTag: cluster-ntwk-tag serviceAccount: limited-roles@example-project-123456.iam.gserviceaccount.com sap hana sidadm uid: 900 sap hana sapsys gid: 79 - name: sap hana secondary type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana/sap hana.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.

### "Reference architecture: SAP Business Suite on SAP HANA on Google Cloud \_\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram shows the flow of backups when you use the Backint feature of Google Cloud's Agent for SAP: Back up to disks You can use the native SAP HANA backup and recovery function with Compute Engine Persistent Disk volumes and use a Cloud Storage bucket for longer-term storage of the backups.
- Back up to Cloud Storage From version 3.0, Google Cloud's Agent for SAP supports the Backint feature, which allows SAP HANA to back up and recover database backups directly from Cloud Storage.
- Back up directly to Cloud Storage using the SAP-certified Backint feature of Google Cloud's Agent for SAP .
- This new feature is available for SAP HANA instances running on Compute Engine instances, on premises servers, or on other cloud platforms so you can back up directly to, and recover from, Cloud Storage without needing persistent disk storage for your backups.

### "Reference architecture: SAP S/4HANA on Google Cloud \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram shows the flow of backups when you use the Backint feature of Google Cloud's Agent for SAP: Back up to disks You can use the native SAP HANA backup and recovery function with Compute Engine Persistent Disk volumes and use a Cloud Storage bucket for longer-term storage of the backups.
- Back up to Cloud Storage From version 3.0, Google Cloud's Agent for SAP supports the Backint feature, which allows SAP HANA to back up and recover database backups directly from Cloud Storage.
- Back up directly to Cloud Storage using the SAP-certified Backint feature of Google Cloud's Agent for SAP .
- This new feature is available for SAP HANA instances running on Compute Engine instances, on premises servers, or on other cloud platforms so you can back up directly to, and recover from, Cloud Storage without needing persistent disk storage for your backups.

