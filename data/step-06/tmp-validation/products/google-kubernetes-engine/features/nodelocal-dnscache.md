---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.142Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "NodeLocal DNSCache"
feature_slug: "nodelocal-dnscache"
latest_feature_date: "2026-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
keywords:
  - "nodelocal"
  - "dnscache"
  - "enabled"
  - "standard"
  - "running"
  - "clusters"
  - "default"
---

# NodeLocal DNSCache

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

NodeLocal DNSCache is enabled by default on new Standard GKE clusters running version 1.34.1-gke.3720000 or later; NodeLocal DNSCache provides node-local DNS caching for GKE clusters.

## Extended Definition

NodeLocal DNSCache is enabled by default on new Standard GKE clusters running version 1.34.1-gke.3720000 or later; NodeLocal DNSCache provides node-local DNS caching for GKE clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. cloudRunConfig object ( CloudRunConfig ) Configuration for the Cloud Run addon, which allows the user to use a managed Knative service. dnsCacheConfig object ( DnsCacheConfig ) Configuration for NodeLocalDNS, a dns cache running on cluster nodes configConnectorConfig object ( ConfigConnectorConfig ) Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. gcePersistentDiskCsiDriverConfig object ( GcePersistentDiskCsiDriverConfig ) Configuration for the Compute Engine Persistent Disk CSI driver. gcpFilestoreCsiDriverConfig object ( GcpFilestoreCsiDriverConfig ) Configuration for the Filestore CSI driver. gkeBackupAgentConfig object ( GkeBackupAgentConfig ) Configuration for the Backup for GKE agent addon. gcsFuseCsiDriverConfig object ( GcsFuseCsiDriverConfig ) Configuration for the Cloud Storage Fuse CSI driver. statefulHaConfig object ( StatefulHAConfig ) Optional.
- Union field autopilot compatibility auditing enabled . autopilot compatibility auditing enabled can be only one of the following: autopilotCompatibilityAuditingEnabled boolean If true, enables the GCW Auditor that audits workloads on standard clusters.
- DnsCacheConfig JSON representation { "enabled" : boolean } Fields enabled boolean Whether NodeLocal DNSCache is enabled for this cluster.
- The following parameters are supported. net.core.busy poll net.core.busy read net.core.netdev max backlog net.core.rmem max net.core.rmem default net.core.wmem default net.core.wmem max net.core.optmem max net.core.somaxconn net.ipv4.tcp rmem net.ipv4.tcp wmem net.ipv4.tcp tw reuse net.ipv4.tcp mtu probing net.ipv4.tcp max orphans net.ipv4.tcp max tw buckets net.ipv4.tcp syn retries net.ipv4.tcp ecn net.ipv4.tcp congestion control net.netfilter.nf conntrack max net.netfilter.nf conntrack buckets net.netfilter.nf conntrack tcp timeout close wait net.netfilter.nf conntrack tcp timeout time wait net.netfilter.nf conntrack tcp timeout established net.netfilter.nf conntrack acct kernel.shmmni kernel.shmmax kernel.shmall kernel.perf event paranoid kernel.sched rt runtime us kernel.softlockup panic kernel.yama.ptrace scope kernel.kptr restrict kernel.dmesg restrict kernel.sysrq fs.aio-max-nr fs.file-max fs.inotify.max user instances fs.inotify.max user watches fs.nr open vm.dirty background ratio vm.dirty background bytes vm.dirty expire centisecs vm.dirty ratio vm.dirty bytes vm.dirty writeback centisecs vm.max map count vm.overcommit memory vm.overcommit ratio vm.vfs cache pressure vm.swappiness vm.watermark scale factor vm.min free kbytes cgroupMode enum ( CgroupMode ) cgroup mode specifies the cgroup mode to be used on the node. transparentHugepageEnabled enum ( TransparentHugepageEnabled ) Optional.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. cloudRunConfig object ( CloudRunConfig ) Configuration for the Cloud Run addon, which allows the user to use a managed Knative service. dnsCacheConfig object ( DnsCacheConfig ) Configuration for NodeLocalDNS, a dns cache running on cluster nodes configConnectorConfig object ( ConfigConnectorConfig ) Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. gcePersistentDiskCsiDriverConfig object ( GcePersistentDiskCsiDriverConfig ) Configuration for the Compute Engine Persistent Disk CSI driver. gcpFilestoreCsiDriverConfig object ( GcpFilestoreCsiDriverConfig ) Configuration for the Filestore CSI driver. gkeBackupAgentConfig object ( GkeBackupAgentConfig ) Configuration for the Backup for GKE agent addon. gcsFuseCsiDriverConfig object ( GcsFuseCsiDriverConfig ) Configuration for the Cloud Storage Fuse CSI driver. statefulHaConfig object ( StatefulHAConfig ) Optional.
- Union field autopilot compatibility auditing enabled . autopilot compatibility auditing enabled can be only one of the following: autopilotCompatibilityAuditingEnabled boolean If true, enables the GCW Auditor that audits workloads on standard clusters.
- DnsCacheConfig JSON representation { "enabled" : boolean } Fields enabled boolean Whether NodeLocal DNSCache is enabled for this cluster.
- The following parameters are supported. net.core.busy poll net.core.busy read net.core.netdev max backlog net.core.rmem max net.core.rmem default net.core.wmem default net.core.wmem max net.core.optmem max net.core.somaxconn net.ipv4.tcp rmem net.ipv4.tcp wmem net.ipv4.tcp tw reuse net.ipv4.tcp mtu probing net.ipv4.tcp max orphans net.ipv4.tcp max tw buckets net.ipv4.tcp syn retries net.ipv4.tcp ecn net.ipv4.tcp congestion control net.netfilter.nf conntrack max net.netfilter.nf conntrack buckets net.netfilter.nf conntrack tcp timeout close wait net.netfilter.nf conntrack tcp timeout time wait net.netfilter.nf conntrack tcp timeout established net.netfilter.nf conntrack acct kernel.shmmni kernel.shmmax kernel.shmall kernel.perf event paranoid kernel.sched rt runtime us kernel.softlockup panic kernel.yama.ptrace scope kernel.kptr restrict kernel.dmesg restrict kernel.sysrq fs.aio-max-nr fs.file-max fs.inotify.max user instances fs.inotify.max user watches fs.nr open vm.dirty background ratio vm.dirty background bytes vm.dirty expire centisecs vm.dirty ratio vm.dirty bytes vm.dirty writeback centisecs vm.max map count vm.overcommit memory vm.overcommit ratio vm.vfs cache pressure vm.swappiness vm.watermark scale factor vm.min free kbytes cgroupMode enum ( CgroupMode ) cgroup mode specifies the cgroup mode to be used on the node. transparentHugepageEnabled enum ( TransparentHugepageEnabled ) Optional.

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .
- Use the container-optimized compute platform with modifications : apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : general-purpose-class spec : autopilot : enabled : true priorities : - podFamily : general-purpose priorityDefaults : location : zones : [ 'us-central1-a' , 'us-central1-b' , 'us-central1-f' ] This manifest includes the following fields: autopilot : enables Autopilot mode for the ComputeClass.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Run workloads in Autopilot mode in Standard clusters Stay organized with collections Save and categorize content based on your preferences.
- Autopilot Standard Cluster administrators and application operators can get the benefits of Google Kubernetes Engine (GKE) Autopilot, like pricing and pre-configured settings, in Standard mode clusters.

