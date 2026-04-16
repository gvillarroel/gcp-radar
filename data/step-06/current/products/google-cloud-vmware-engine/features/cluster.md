---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.671Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Cluster"
feature_slug: "cluster"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListClustersAsyncPager"
keywords:
  - "cluster"
  - "clusters"
  - "can"
  - "managed"
  - "terraform"
  - "resources"
  - "available"
  - "through"
---

# Cluster

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Clusters can be managed with Terraform resources; Clusters are available through Cloud Asset Inventory and Cloud Asset APIs.

## Extended Definition

Clusters can be managed with Terraform resources; Clusters are available through Cloud Asset Inventory and Cloud Asset APIs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListClustersAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListClustersAsyncPager)

## Supporting Pages

### "Set up Cloud Monitoring with a standalone agent \_|\_ Google Cloud VMware\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Hosts that are unresponsive or in maintenance mode are not counted. cluster.hosts Number of hosts in a cluster cluster.vsan.latency vSAN latency of a cluster, in microseconds cluster.vsan.throughput vSAN read-write throughput of a cluster, in bytes cluster.vsan.iops vSAN IOPS of a cluster cluster.vsan.congestions vSAN congestion value of a cluster cluster.vsan.oio vSAN outstanding I/O (oio) in a cluster datacenter.cpu.average host utilization Average host utilization of a datacenter, as a percentage datacenter.clusters Number of clusters in a datacenter datacenter.datastores Number of datastores in a datacenter datacenter.hosts Number of hosts in a datacenter datacenter.host systems Number of host systems in a datacenter datacenter.hosts/powered on Number of powered on hosts in a datacenter datacenter.hosts/powered off Number of powered off hosts in a datacenter datacenter.disk/space Total disk space in a datacenter, in terabytes datastore.capacity bytes Capacity of a datastore, in bytes datastore.capacity utilization Capacity utilization of a datastore, as a percentage host system.network.transmitted packets Number of network packets transmitted by the host system host system.network.received packets Number of network packets received by the host system host system.dropped packets Number of network packets dropped by the host system host system.network.adapters Number of host system network adapters host system.memory.utilization Memory utilization of the host system, as a percentage host system.memory.utilization ratio Memory utilization ratio of the host system host system.memory.used Memory used by the host system, in megabytes host system.disk.read Disk read of the host system, in kilobytes per second host system.disk latency Disk latency of the host system, in milliseconds host system.cpu.usage CPU usage of the host system, as a percentage host system.cpu.utilization ratio CPU utilization ratio of the host system host system.cpu.capacity CPU capacity of the host system, in megahertz host system.cpu.reserved capacity Reserved CPU capacity of the host system, in megahertz host system.cpu.average speed Average CPU speed of the host system, in megahertz host system.cpu.used CPU used by the host system, in megahertz host system.vsan.throughput vSAN read-write throughput of the host system, in bytes host system.vsan.iops vSAN IOPS of the host system host system.vsan.latency vSAN latency of the host system, in microseconds host system.vsan.client cache hits vSAN client cache hits of the host system host system.vsan.client cache hit rate vSAN client cache hit rate of the host system, as a percentage host system.vsan.congestions vSAN congestion value of the host system resource pool.memory.swapped bytes vCenter swapped memory, in megabytes resource pool.memory.shared bytes vCenter shared memory, in megabytes resource pool.memory.private bytes vCenter private memory, in megabytes resource pool.memory.shares Number of vCenter memory shares resource pool.memory.overhead usage bytes vCenter memory overhead usage, in megabytes resource pool.memory.host usage bytes vCenter memory host usage, in megabytes resource pool.memory.active guest usage bytes vCenter memory active guest usage, in megabytes resource pool.memory.balloon size Size of the vCenter balloon memory, in megabytes resource pool.cpu.usage CPU used by vCenter, in megahertz resource pool.cpu.shares Number of CPU shares in the resource pool, in megabytes vm.memory.ballooned Size of the VM balloon memory, in megabytes vm.network.throughput bytes Network throughput of the VM, in kilobytes per second vm.memory.used percent Memory used by the VM, as a percentage of available memory vm.memory.usage bytes Memory used by the VM, in megabytes vm.disk.throughput bytes Disk read-write throughput of the VM, in kilobytes per second vm.disk.used percent Disk usage of the VM, as a percentage of available storage vm.disk.usage bytes Disk usage of the VM, in bytes vm.disk.free bytes Available disk space of the VM, in bytes vm.cpu.used percent CPU usage of the VM, as a percentage of available CPU vm.cpu.usage CPU usage of the VM, in megahertz vm.cpu.ready percent CPU of the VM that's ready but unable to run, as a percentage vm.vsan.throughput vSAN read-write throughput of the VM, in bytes vm.vsan.iops vSAN IOPS of the VM vm.vsan.latency vSAN latency of the VM, in microseconds vm.vsan.readCount vSAN read count of the VM vm.vsan.writeCount vSAN write count of the VM vsphere.cpu.available CPU available across clusters managed by vSphere, in gigahertz vsphere.memory.available Memory available across clusters managed by vSphere, in gigabytes vsphere.clusters.total Number of clusters managed by vSphere vsphere.clusters Count of clusters managed by vSphere with the cluster status color code (like green, grey, red, or yellow) vsphere.cpu.cpus Total number of host system CPU cores managed by vSphere vsphere.datacenters Number of datacenters managed by vSphere vsphere.datastores.total Number of datastores in vSphere vsphere.datastores Count of datastores managed by vSphere with the datastore status color code (like green, grey, red, or yellow) vsphere.disk.space Total attached disk space in vSphere, in terabytes vsphere.host systems Number of host systems in vSphere vsphere.hosts Count of host systems managed by vSphere with the host system status color code (like green, grey, red, or yellow) vsphere.network.adapters Number of network adapters in vSphere vsphere.hosts.powered off Number of powered off hosts in vSphere vsphere.hosts.powered on Number of powered on hosts in vSphere vsphere.virtual machines.total Number of VMs across all vSphere clusters vsphere.virtual machines Count of VMs managed by vSphere with the VM status color code (like green, grey, red, or yellow) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following dashboards provide you with aggregated information across all sources that you specify: Overview dashboard: High-level view that lists key resources like data centers, clusters, and VMs.
- Here's the full list of metrics collected for VMware Engine, with the prefix omitted: Resource and metric type Description cluster.cpu.available CPU available in a cluster, in megahertz cluster.memory.available Memory available in a cluster, in bytes cluster.cpu.threads Number of CPU threads in a cluster cluster.cpu.effective Effective CPU in a cluster from all running hosts.
- Regardless of where you create your agent host VM, it must meet the following requirements: Requirements Your agent host VM must meet the following system requirements: Supported Linux operating systems: Red Hat Enterprise Linux 9 SLES 15 Ubuntu 20.04 LTS, 22.04 LTS, or 24.04 LTS At least 4 GB of RAM 300 MB installation space available Installation directory set to /opt/bpagent curl CLI utility installed Your agent host VM also needs access to the following addresses to collect and push metrics and logs: Port 443 (TCP) for the HTTPS connection to your vCenter Server (default) monitoring.googleapis.com:443 (external access) logging.googleapis.com:443 (external access) Enabling metrics forwarding To obtain agent binaries and installation steps, contact Cloud Customer Care.

### "Backup vault for immutable and indelible backups \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- Source ID: `site-docs-reference-2`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workload Managed by Compute Engine instance Google Cloud console Compute Engine disk Google Cloud console Filestore instance (invitation only) Google Cloud console Cloud SQL instance Google Cloud console AlloyDB cluster Google Cloud console Google Cloud VMware Engine, Oracle database, and SQL Server database appliance management console Note: AlloyDB clusters and Filestore instances in backup vaults are not supported for multi-regions.
- Resources managed through the appliance management console (for example, Google Cloud VMware Engine VMs) are also supported, but backup and restore operations for those resources are not restricted to your current organization.
- Restrict access to current organization & unrestricted access for backup appliances : for resources managed through Google Cloud console, backup and restore operations are only supported within your current organization.
- This selection makes the backup vault compatible with resources managed through Google Cloud console (for example, Compute Engine VMs), but not with resources managed through the appliance management console.

### "Class ListClustersAsyncPager (1.11.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListClustersAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListClustersAsyncPager)
- Source ID: `site-python-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- If there are more pages, the aiter method will make additional ListClusters requests and continue to iterate through the clusters field on the corresponding responses.
- This class thinly wraps an initial ListClustersResponse object, and provides an aiter method to iterate through its clusters field.
- Union [ str , bytes ]]] = () ) A pager for iterating through list clusters requests.
- All the usual ListClustersResponse attributes are available on the pager.

