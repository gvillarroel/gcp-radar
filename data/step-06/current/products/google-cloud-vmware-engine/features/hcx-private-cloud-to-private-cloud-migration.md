---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.732Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "HCX private cloud-to-private cloud migration"
feature_slug: "hcx-private-cloud-to-private-cloud-migration"
latest_feature_date: "2020-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options"
  - "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-migration"
keywords:
  - "hcx"
  - "private"
  - "migration"
  - "can"
  - "migrate"
  - "virtual"
  - "machines"
  - "between"
---

# HCX private cloud-to-private cloud migration

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

HCX can migrate virtual machines between two private clouds.

## Extended Definition

HCX can migrate virtual machines between two private clouds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options)
- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-migration](https://docs.cloud.google.com/vmware-engine/docs/best-practices-migration)

## Supporting Pages

### "Workload VM migration \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options)
- Source ID: `site-docs-reference-required-4`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workload VM migration Using Google Cloud VMware Engine, you can migrate virtual machines (VMs) from an on-premises data center to your private cloud.
- Migration requirements Migration of VMs and data from your on-premises environment requires network connectivity between it and your private cloud to establish a secure connection before you can migrate workloads.
- Migration options You can migrate workload VMs to your private cloud in multiple ways.
- The network path from your on-premises vCenter environment to your private cloud must support migration of VMs by using vMotion.

### "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Viewing vSphere management network To view the list of VMware management resources and virtual machines that are configured on your private cloud, select the vSphere Management Network tab.
- You can migrate VMware management VMs from the cluster where they are being hosted to a different cluster within the same private cloud.
- To migrate management VMs, you must have at least two clusters in your private cloud.
- Click Save . gcloud To delete a whole cluster using the Google Cloud CLI, use the gcloud vmware private-clouds clusters delete command : gcloud vmware private-clouds clusters delete CLUSTER ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID Replace the following: CLUSTER ID : the cluster ID for the cluster to update in this private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud API To delete a whole cluster using the VMware Engine API, make a DELETE request: curl -L -X DELETE -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID " Replace the following: PROJECT ID : the project ID for the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud CLUSTER ID : the cluster ID for the cluster to update in this private cloud Python from google.api core import operation from google.cloud import vmwareengine v1 def delete cluster ( project id : str , zone : str , private cloud name : str , cluster name : str ) - > operation .

### "Migration best practices \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-migration](https://docs.cloud.google.com/vmware-engine/docs/best-practices-migration)
- Source ID: `site-docs-reference-required-4`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migration best practices This page presents some best practices for migrating VMware virtual machine (VM) instances to your private cloud by using Google Cloud VMware Engine.
- Plan the migration project Before migrating VMware VMs to your private cloud, plan the migration as follows: Identify the personnel, including the following: Customer stakeholders Program sponsor and owner The technical team responsible for the migration The stakeholders for in-scope systems and applications The relevant Google Technical Account Manager (TAM), Partner Engineering Manager (PEM), or Customer Engineer (CE) Assess the source environment .
- Create a plan that defines the following: the migration strategy the architecture of the new environment the goals and success criteria, including the UAT and QA scripts the roles and responsibilities the communication model, including daily standups, status reporting, escalation paths, chat rooms the data that cannot be migrated and related strategies milestones and timings Ensure alignment with all stakeholders.
- Develop pre- and post-migration strategies for content that cannot be migrated due to persistent hardware or tagging, such as mounted ISOs, NSX-T tags, passthrough devices that use DirectPath I/O , multi-writer disks , and physical RDMs.

