---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.109Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "WMI guest collection"
feature_slug: "wmi-guest-collection"
latest_feature_date: "2023-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security"
  - "https://docs.cloud.google.com/migration-center/docs/software-workloads-insights"
  - "https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails"
  - "https://docs.cloud.google.com/migration-center/docs/run-offline-assessment"
keywords:
  - "wmi"
  - "guest"
  - "collection"
  - "the"
  - "windows"
  - "version"
  - "of"
  - "migration"
---

# WMI guest collection

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

The Windows version of the Migration Center discovery client CLI can collect guests from Windows target machines using WMI.

## Extended Definition

The Windows version of the Migration Center discovery client CLI can collect guests from Windows target machines using WMI.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- [https://docs.cloud.google.com/migration-center/docs/software-workloads-insights](https://docs.cloud.google.com/migration-center/docs/software-workloads-insights)
- [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails)
- [https://docs.cloud.google.com/migration-center/docs/run-offline-assessment](https://docs.cloud.google.com/migration-center/docs/run-offline-assessment)

## Supporting Pages

### "Discovery client data collection and security \_|\_ Migration Center \_\

- URL: [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- It includes: Web servers (Apache, Tomcat, JBoss) Databases (evidence of SQL Server is collected in the Windows script) Other applications that might require specific configurations during migration.
- VMware Guest Tools (Linux and Windows) During VMware collection for both Linux and Windows, the following process occurs: A temporary directory is created using VMware guest tools.
- It includes: Operating system (version and release) Hardware (CPU, memory, BIOS details) Network configuration (network interfaces, IP addresses, routing tables) Storage (disk drives, partitions, mount points) Installed software and services : The scripts collect a list of installed packages and running services to understand the VM's software stack and its role.
- Performance impact on target machines Resource utilization assessment The resource utilization of the collection scripts on the target machine depends on parameters such as the number of processes running, the number of applications deployed, the number of active network connections, and others.

### Detected software workloads \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/software-workloads-insights](https://docs.cloud.google.com/migration-center/docs/software-workloads-insights)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workloads detected by predefined rules The following table lists software workloads in your infrastructure detected by Migration Center using predefined rules: Product Vendor Workload type Summary text Versions tested on Linux Versions tested on Windows MS SQL Server Microsoft Database Management System Relational database management system known for scalability and Windows integration.
- OS not supported by the vendor SharePoint Server 2019 Standard for Windows Server 2019 SharePoint Server 2019 Enterprise for Windows Server 2022 AI-powered software suggestions The following table lists AI-powered suggestions for software workloads detected by Migration Center in your infrastructure: Product Vendor Workload type Acronis Cyber Protect Acronis Cybersecurity and Backup Apache Kafka Apache Software Foundation Stream-processing and message broker Apache Solr Apache Software Foundation Search platform Apache ZooKeeper Apache Software Foundation Distributed coordination service ArcGIS Server Esri GIS server Avamar Backup Dell EMC Backup and recovery Avaya IP Office Avaya Unified communications Azure DevOps Server Microsoft DevOps BIND Internet Systems Consortium (ISC) DNS server Bacula Bacula Systems Backup and recovery Check Point Software Technologies Gaia Check Point Security OS and firewall Checkmk Tribe29 Monitoring Citrix Citrix Systems Virtualization Cloud Foundry Cloud Foundry Foundation Platform as a Service (PaaS) CodeMeter Runtime Server Wibu-Systems License management CommVault Backup Commvault Backup and recovery CompleteFTP Server Enterprise DT FTP server Docker Docker, Inc.
- Security Information and Event Management (SIEM) WildFly (formerly JBoss AS) Red Hat Application server Windows Server File Services Microsoft File server Xen Linux Foundation Hypervisor and virtualization Zabbix Zabbix LLC Monitoring Zerto Backup Hewlett Packard Enterprise Backup and disaster recovery containerd Cloud Native Computing Foundation (CNCF) Container runtime dnsmasq Dnsmasq DNS server etcd Cloud Native Computing Foundation (CNCF) Distributed key-value store hMailServer hMailServer project Mail server uWSGI Unbit WSGI server Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- OS not supported by the vendor IIS 10 for Windows Server 2016 IIS 10 for Windows Server 2019 IIS 10 for Windows Server 2022 .NET Core Microsoft Cross-platform Framework Open-source development framework for building cross-platform applications and services. .NET 6.0.x for Red Hat Enterprise Linux 8 .NET 7.0.x for CentOS 7 .NET 8.0.x for Rocky Linux 9 .NET Core 3.1.x for Windows Server 2016 Cassandra Apache Software Foundation Database Management System Open-source, distributed, wide-column, NoSQL database management system.

### MachineDetails \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "vcenterVersion" : string , "esxVersion" : string , "osid" : string , "vcenterFolder" : string , "vcenterUri" : string , "vcenterVmId" : string , "esxHyperthreading" : enum ( HyperthreadingStatus ) } Fields vcenter Version string vCenter version. esx Version string ESX version. osid string VMware os enum - https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html . vcenter Folder string Folder name in vCenter where asset resides. vcenter Uri string vCenter URI used in collection. vcenter Vm Id string vCenter VM ID. esx Hyperthreading enum ( HyperthreadingStatus ) Whether the ESX is hyperthreaded.
- JSON representation { "osName" : string , "family" : enum ( OperatingSystemFamily ) , "version" : string , "config" : { object ( GuestConfigDetails ) } , "runtime" : { object ( GuestRuntimeDetails ) } } Fields os Name string The name of the operating system. family enum ( OperatingSystemFamily ) What family the OS belong to, if known. version string The version of the operating system. config object ( GuestConfigDetails ) OS and app configuration. runtime object ( GuestRuntimeDetails ) Runtime information.
- Must be non-negative. power State enum ( PowerState ) Power state of the machine. architecture object ( MachineArchitectureDetails ) Architecture details (vendor, CPU architecture). guest Os object ( GuestOsDetails ) Guest OS information. network object ( MachineNetworkDetails ) Network details. disks object ( MachineDiskDetails ) Disk details. platform object ( PlatformDetails ) Platform specific information.
- JSON representation PowerState MachineArchitectureDetails JSON representation BiosDetails JSON representation FirmwareType CpuHyperThreading GuestOsDetails JSON representation OperatingSystemFamily GuestConfigDetails JSON representation FstabEntryList JSON representation FstabEntry JSON representation HostsEntryList JSON representation HostsEntry JSON representation NfsExportList JSON representation NfsExport JSON representation SeLinuxMode GuestRuntimeDetails JSON representation RunningServiceList JSON representation RunningService JSON representation State StartMode RunningProcessList JSON representation RunningProcess JSON representation RuntimeNetworkInfo JSON representation NetworkConnectionList JSON representation NetworkConnection JSON representation State GuestInstalledApplicationList JSON representation GuestInstalledApplication JSON representation OpenFileList JSON representation OpenFileDetails JSON representation MachineNetworkDetails JSON representation NetworkAdapterList JSON representation NetworkAdapterDetails JSON representation NetworkAddressList JSON representation NetworkAddress JSON representation AddressAssignment MachineDiskDetails JSON representation DiskEntryList JSON representation DiskEntry JSON representation InterfaceType DiskPartitionList JSON representation DiskPartition JSON representation VmwareDiskConfig JSON representation BackingType VmdkMode RdmCompatibility PlatformDetails JSON representation VmwarePlatformDetails JSON representation HyperthreadingStatus AwsEc2PlatformDetails JSON representation AzureVmPlatformDetails JSON representation GenericPlatformDetails JSON representation PhysicalPlatformDetails JSON representation Details of a machine.

### "Generate an offline assessment \_|\_ Migration Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migration-center/docs/run-offline-assessment](https://docs.cloud.google.com/migration-center/docs/run-offline-assessment)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- For example, to limit the report to the gcp migration journey, run the following command: Linux ./mcdc report --format FORMAT --target-platform gcp --file REPORT NAME Windows mcdc.exe report --format FORMAT --target-platform gcp --file REPORT NAME If you use the mcdc CLI in a Google Distributed Cloud environment , then specify the gdc value for the target platform: Linux ./mcdc report --format FORMAT --target-platform gdc --file REPORT NAME Windows mcdc.exe report --format FORMAT --target-platform gdc --file REPORT NAME What's next Learn how to generate a total cost of ownership (TCO) report .
- Home Documentation Migration Migration Center Guides Send feedback Generate an offline assessment Stay organized with collections Save and categorize content based on your preferences.
- The offline assessment creates reports that provide you with a high-level fit assessment result for migration and potential blockers for different migration journeys.
- The offline assessment also describes any issues that must be resolved before the migration.

