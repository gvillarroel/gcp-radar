---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.661Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Update Center"
feature_slug: "update-center"
latest_feature_date: "2025-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates"
keywords:
  - "update"
  - "center"
  - "provides"
  - "console"
  - "experience"
  - "viewing"
  - "managing"
  - "private"
---

# Update Center

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Provides a console experience for viewing and managing private cloud updates, including scheduled version updates and patch status.

## Extended Definition

Provides a console experience for viewing and managing private cloud updates, including scheduled version updates and patch status.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates](https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates)

## Supporting Pages

### "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NodeTypeConfig () } request . cluster . node type configs [ "standard-72" ] . node count = node count request . update mask = "nodeTypeConfigs. .nodeCount" return client . update cluster ( request ) Add a new cluster to a private cloud To add a new cluster to an existing private cloud, do the following: Console To add a new cluster using the Google Cloud console, follow these steps: In the Google Cloud console, go to the Private clouds page.
- NodeTypeConfig () } request . cluster . node type configs [ "standard-72" ] . node count = node count request . update mask = "nodeTypeConfigs. .nodeCount" return client . update cluster ( request ) Delete a cluster To delete a whole cluster, do the following: Console In the Google Cloud console, go to the Private clouds page.
- Viewing a private cloud summary The summary provides information about your private cloud including its name, number of vSphere clusters, number of nodes, location, operational state, and more.
- Click Save . gcloud To delete a whole cluster using the Google Cloud CLI, use the gcloud vmware private-clouds clusters delete command : gcloud vmware private-clouds clusters delete CLUSTER ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID Replace the following: CLUSTER ID : the cluster ID for the cluster to update in this private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud API To delete a whole cluster using the VMware Engine API, make a DELETE request: curl -L -X DELETE -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID " Replace the following: PROJECT ID : the project ID for the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud CLUSTER ID : the cluster ID for the cluster to update in this private cloud Python from google.api core import operation from google.cloud import vmwareengine v1 def delete cluster ( project id : str , zone : str , private cloud name : str , cluster name : str ) - > operation .

### "Private cloud maintenance and updates \_|\_ Google Cloud VMware Engine \_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates](https://docs.cloud.google.com/vmware-engine/docs/concepts-maintenance-updates)
- Source ID: `site-docs-reference-required-4`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- During a VMware maintenance interval, the following services continue to function without any impact: VMware management plane and applications vCenter access All networking and storage Updates and upgrades VMware Engine is responsible for lifecycle management of VMware software (ESXi, vCenter, PSC, and NSX) in private clouds.
- The following VMware elements in private clouds are backed up, maintained, and updated: ESXi vCenter Platform Services Controller vSAN NSX Backup and restore Backups include the following: Nightly incremental backups of vCenter, PSC, and DVS rules. vCenter built-in APIs to back up components at the application layer.
- Update VMware add-ons and third-party solutions: Verify that VMware add-ons and third party solutions deployed on your private cloud vCenter are compatible with the post-upgrade versions mentioned previously.
- VMware Engine continuously monitors uptime, monitors availability, and provides availability SLAs for the following types of VMs: ESXi hosts vCenter PSC NSX Manager VMware Engine continuously monitors the following for failures: Hard disks Physical NIC ports Servers Fans Power Switches Switch ports If a disk or node fails, VMware Engine immediately and automatically adds a new node to the affected VMware cluster to restore service operability.

### "Overview of VMware Engine monitoring \_|\_ Google Cloud VMware Engine \_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table lists the classes of available logs for VMware Engine and the severity of the reported events: The following table lists the available logs for VMware Engine and the severity of the reported events: VMware component Issue notification Resolution notification Action owner VMware Engine node ALERT NOTICE VMware Engine Service Operations VMware vCenter CRITICAL NOTICE VMware Engine Service Operations VMware NSX Manager CRITICAL NOTICE VMware Engine Service Operations VMware HCX CRITICAL NOTICE VMware Engine Service Operations vSAN utilization ALERT Not applicable Customer Cluster auto-scale Issue dependent Issue dependent Issue dependent Private cloud operations (create, delete, add and remove nodes) Issue dependent Issue dependent Issue dependent Stretched private cloud issues ALERT NOTICE VMware Engine Service Operations You can access logs for VMware Engine in the following ways: In Logs Explorer , by using the following log name: projects/ PROJECT ID /logs/vmwareengine.googleapis.com%2Falerts In the Google Cloud console, by going to the Dashboard page .
- VMware component Essential Contacts notification category Action owner VMware Engine node Technical VMware Engine Service Operations VMware vCenter Technical VMware Engine Service Operations VMware NSX Manager Technical VMware Engine Service Operations VMware HCX Technical VMware Engine Service Operations vSAN utilization Technical Customer Cluster auto-scale Technical Issue dependent Private cloud operations (create, delete, add and remove nodes) Technical Issue dependent Stretched private cloud issues Technical VMware Engine Service Operations Use of Essential Contacts by other VMware Engine features Other VMware Engine features also use service-related automatic email notifications, such as Update Center , which supports day-2 operations.
- Use of Cloud Logging by other VMware Engine features Other VMware Engine features also generate service-related logs, such as Update Center , which supports day-2 operations.
- Identify and fix issues with VMware Aria Operations VMware Aria Operations is a VMware product that provides detailed insights into your VMware vCenter environments.

