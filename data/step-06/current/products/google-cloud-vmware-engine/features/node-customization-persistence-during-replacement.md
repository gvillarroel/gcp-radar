---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.728Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Node customization persistence during replacement"
feature_slug: "node-customization-persistence-during-replacement"
latest_feature_date: "2020-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-high-availability-vmware"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates"
keywords:
  - "node"
  - "customization"
  - "persistence"
  - "during"
  - "replacement"
  - "customizations"
  - "failed"
  - "transfer"
---

# Node customization persistence during replacement

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Customizations from a failed node transfer to its replacement, including vSphere labels, custom attributes, tags, and affinity rules.

## Extended Definition

Customizations from a failed node transfer to its replacement, including vSphere labels, custom attributes, tags, and affinity rules.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-high-availability-vmware](https://docs.cloud.google.com/vmware-engine/docs/concepts-high-availability-vmware)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates](https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates)

## Supporting Pages

### "Availability and redundancy \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-high-availability-vmware](https://docs.cloud.google.com/vmware-engine/docs/concepts-high-availability-vmware)
- Source ID: `site-docs-reference-required-4`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VMware Engine HA feature VMware HA feature Google Cloud feature Disk failure Yes Fast replacement of failed node About the vSAN Default Storage Policy N/A Fan failure Yes Redundant fans, fast replacement of failed node N/A N/A NIC failure Yes Redundant NIC, fast replacement of failed node N/A N/A Host power failure Yes Redundant power supply N/A N/A ESXi host failure Yes Fast replacement of failed node VMware vSphere High Availability N/A VM failure Yes N/A VMware vSphere High Availability Load balancer for stateless VMware VMs Leaf switch port failure Yes Redundant NIC N/A N/A Leaf switch failure Yes Redundant leaf switches N/A N/A Rack failure Yes Placement groups N/A N/A Network connectivity to on-premises Yes Redundant networking services N/A Redundant Dedicated Interconnect and Partner Interconnect circuits Network connectivity Yes N/A N/A Redundant Dedicated Interconnect and Partner Interconnect circuits Regional failure Yes N/A N/A Hosting regions Availability features The following sections describe availability features.
- Fast replacement of a failed node VMware Engine continuously monitors the health of VMware clusters.
- When VMware Engine detects an ESXi node failure, it adds a new ESXi host to the affected VMware cluster from its pool of readily available nodes and removes the failed node from the cluster.
- If you require applications to remain operational during a VMware Engine zone failure, we recommend that you distribute redundant resources across different zones so you can safeguard your applications and data from potential data center failures.

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If the secondary node or database is down during backup, Persistent Disk details of the secondary node won't be saved.
- During this time, you need to apply to SAP to have the license from the source database transferred to a new license key.
- You can mount snapshot backup images of an SAP HANA database as a standard mount for: Any manual operation or To Mount a backup for an integrity check Pre checks during mount Connector connectivity status: Verify that the Backup and DR agent is installed and secret is applied for host connectivity between the backup/recovery appliance and the Backup and DR agent.
- Mount a backup for an integrity check This tool runs the SAP HANA persistence checking tool, hdbpersdiag , with the 'check all' option to verify the healthy state of data volumes from the mounted snapshot image.

### "Private cloud maintenance and updates \_|\_ Google Cloud VMware Engine \_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates](https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates)
- Source ID: `site-docs-reference-required-4`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, temporary network issues or software glitches can trigger similar alerts to hardware failures, and we want to avoid impacting your cluster with node replacement when it might not be the recommended action.
- Automated node replacement for hardware failures : If our engineers confirm a hardware failure, the automated node replacement process begins immediately.
- This ensures that we're addressing the correct issue and prevents unnecessary node replacements when a simpler solution (like a reboot) is recommended.
- If your storage utilization is higher than 70%, add a node to expand the cluster and avoid any potential downtime during upgrades.

