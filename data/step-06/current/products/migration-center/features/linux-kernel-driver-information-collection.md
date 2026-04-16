---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.083Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Linux kernel driver information collection"
feature_slug: "linux-kernel-driver-information-collection"
latest_feature_date: "2024-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails"
keywords:
  - "linux"
  - "kernel"
  - "driver"
  - "information"
  - "collection"
  - "migration"
  - "center"
  - "supports"
---

# Linux kernel driver information collection

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center supports collecting Linux kernel driver information for enhanced technical assessment.

## Extended Definition

Migration Center supports collecting Linux kernel driver information for enhanced technical assessment.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails)

## Supporting Pages

### "Discovery client data collection and security \_|\_ Migration Center \_\

- URL: [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Migration Migration Center Resources Send feedback Discovery client data collection and security Stay organized with collections Save and categorize content based on your preferences.
- You can review the actual scripts used for collection at the following links: Linux Full collection Performance collection Windows Full collection Performance collection The collection scripts store the results in an archive file (zip or tar) which the discovery client then retrieves.
- The following list describes the data that is collected: System information : The basic information that is crucial for determining the VM's size, performance requirements, and dependencies on specific hardware or drivers.
- VMWare and cloud environment detection : Both the Linux and Windows scripts attempt to detect if the VM is already running in a cloud environment (AWS or Google Cloud), or in a VCenter cluster.

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.migrationcenter v1.types.Source Source represents an object from which asset information is streamed to Migration Center. get transport class get transport class ( label : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class MigrationCenterAsyncClient (0.4.0) Stay organized with collections Save and categorize content based on your preferences.
- The result type for the operation will be Source Source represents an object from which asset information is streamed to Migration Center. validate import job validate import job ( request : typing .
- The result type for the operation will be Source Source represents an object from which asset information is streamed to Migration Center. delete asset delete asset ( request : typing .

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.migrationcenter v1.types.Source Source represents an object from which asset information is streamed to Migration Center. group path group path ( project : str , location : str , group : str ) - > str Returns a fully-qualified group string. import data file path import data file path ( project : str , location : str , import job : str , import data file : str ) - > str Returns a fully-qualified import data file string. import job path import job path ( project : str , location : str , import job : str ) - > str Returns a fully-qualified import job string. list assets list assets ( request : typing .
- The result type for the operation will be Source Source represents an object from which asset information is streamed to Migration Center. validate import job validate import job ( request : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class MigrationCenterClient (0.4.0) Stay organized with collections Save and categorize content based on your preferences.
- The result type for the operation will be Source Source represents an object from which asset information is streamed to Migration Center. delete asset delete asset ( request : typing .

### MachineDetails \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migration Center Reference Send feedback MachineDetails Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "vcenterVersion" : string , "esxVersion" : string , "osid" : string , "vcenterFolder" : string , "vcenterUri" : string , "vcenterVmId" : string , "esxHyperthreading" : enum ( HyperthreadingStatus ) } Fields vcenter Version string vCenter version. esx Version string ESX version. osid string VMware os enum - https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html . vcenter Folder string Folder name in vCenter where asset resides. vcenter Uri string vCenter URI used in collection. vcenter Vm Id string vCenter VM ID. esx Hyperthreading enum ( HyperthreadingStatus ) Whether the ESX is hyperthreaded.
- GuestOsDetails Information from Guest-level collections.
- JSON representation PowerState MachineArchitectureDetails JSON representation BiosDetails JSON representation FirmwareType CpuHyperThreading GuestOsDetails JSON representation OperatingSystemFamily GuestConfigDetails JSON representation FstabEntryList JSON representation FstabEntry JSON representation HostsEntryList JSON representation HostsEntry JSON representation NfsExportList JSON representation NfsExport JSON representation SeLinuxMode GuestRuntimeDetails JSON representation RunningServiceList JSON representation RunningService JSON representation State StartMode RunningProcessList JSON representation RunningProcess JSON representation RuntimeNetworkInfo JSON representation NetworkConnectionList JSON representation NetworkConnection JSON representation State GuestInstalledApplicationList JSON representation GuestInstalledApplication JSON representation OpenFileList JSON representation OpenFileDetails JSON representation MachineNetworkDetails JSON representation NetworkAdapterList JSON representation NetworkAdapterDetails JSON representation NetworkAddressList JSON representation NetworkAddress JSON representation AddressAssignment MachineDiskDetails JSON representation DiskEntryList JSON representation DiskEntry JSON representation InterfaceType DiskPartitionList JSON representation DiskPartition JSON representation VmwareDiskConfig JSON representation BackingType VmdkMode RdmCompatibility PlatformDetails JSON representation VmwarePlatformDetails JSON representation HyperthreadingStatus AwsEc2PlatformDetails JSON representation AzureVmPlatformDetails JSON representation GenericPlatformDetails JSON representation PhysicalPlatformDetails JSON representation Details of a machine.

