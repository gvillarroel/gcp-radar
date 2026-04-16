---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.043Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Remote WMI Windows guest host collection"
feature_slug: "remote-wmi-windows-guest-host-collection"
latest_feature_date: "2026-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security"
  - "https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
keywords:
  - "remote"
  - "wmi"
  - "windows"
  - "guest"
  - "host"
  - "collection"
  - "migration"
  - "center"
---

# Remote WMI Windows guest host collection

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center discovery client CLI uses remote WMI collections by default for Windows guest host collection instead of local scripts.

## Extended Definition

Migration Center discovery client CLI uses remote WMI collections by default for Windows guest host collection instead of local scripts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)

## Supporting Pages

### "Discovery client data collection and security \_|\_ Migration Center \_\

- URL: [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Migration Migration Center Resources Send feedback Discovery client data collection and security Stay organized with collections Save and categorize content based on your preferences.
- VMware Guest Tools (Linux and Windows) During VMware collection for both Linux and Windows, the following process occurs: A temporary directory is created using VMware guest tools.
- WMI (Windows) By default, discovery client uses remote WMI calls to collect data from target Windows machines.
- You can review the actual scripts used for collection at the following links: Linux Full collection Performance collection Windows Full collection Performance collection The collection scripts store the results in an archive file (zip or tar) which the discovery client then retrieves.

### MachineDetails \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails)
- Source ID: `site-api-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "vcenterVersion" : string , "esxVersion" : string , "osid" : string , "vcenterFolder" : string , "vcenterUri" : string , "vcenterVmId" : string , "esxHyperthreading" : enum ( HyperthreadingStatus ) } Fields vcenter Version string vCenter version. esx Version string ESX version. osid string VMware os enum - https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html . vcenter Folder string Folder name in vCenter where asset resides. vcenter Uri string vCenter URI used in collection. vcenter Vm Id string vCenter VM ID. esx Hyperthreading enum ( HyperthreadingStatus ) Whether the ESX is hyperthreaded.
- Home Documentation Migration Migration Center Reference Send feedback MachineDetails Stay organized with collections Save and categorize content based on your preferences.
- JSON representation PowerState MachineArchitectureDetails JSON representation BiosDetails JSON representation FirmwareType CpuHyperThreading GuestOsDetails JSON representation OperatingSystemFamily GuestConfigDetails JSON representation FstabEntryList JSON representation FstabEntry JSON representation HostsEntryList JSON representation HostsEntry JSON representation NfsExportList JSON representation NfsExport JSON representation SeLinuxMode GuestRuntimeDetails JSON representation RunningServiceList JSON representation RunningService JSON representation State StartMode RunningProcessList JSON representation RunningProcess JSON representation RuntimeNetworkInfo JSON representation NetworkConnectionList JSON representation NetworkConnection JSON representation State GuestInstalledApplicationList JSON representation GuestInstalledApplication JSON representation OpenFileList JSON representation OpenFileDetails JSON representation MachineNetworkDetails JSON representation NetworkAdapterList JSON representation NetworkAdapterDetails JSON representation NetworkAddressList JSON representation NetworkAddress JSON representation AddressAssignment MachineDiskDetails JSON representation DiskEntryList JSON representation DiskEntry JSON representation InterfaceType DiskPartitionList JSON representation DiskPartition JSON representation VmwareDiskConfig JSON representation BackingType VmdkMode RdmCompatibility PlatformDetails JSON representation VmwarePlatformDetails JSON representation HyperthreadingStatus AwsEc2PlatformDetails JSON representation AzureVmPlatformDetails JSON representation GenericPlatformDetails JSON representation PhysicalPlatformDetails JSON representation Details of a machine.
- GuestOsDetails Information from Guest-level collections.

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class MigrationCenterAsyncClient (0.4.0) Stay organized with collections Save and categorize content based on your preferences.
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict]] The request object.
- Returns Type Description google.cloud.migrationcenter v1.types.ReportAssetFramesResponse A response to a call to ReportAssetFrame. report config path report config path ( project : str , location : str , report config : str ) - > str Returns a fully-qualified report config string. report path report path ( project : str , location : str , report config : str , report : str ) - > str Returns a fully-qualified report string. run import job run import job ( request : typing .
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class MigrationCenterClient (0.4.0) Stay organized with collections Save and categorize content based on your preferences.
- Returns Type Description google.cloud.migrationcenter v1.types.Source Source represents an object from which asset information is streamed to Migration Center. group path group path ( project : str , location : str , group : str ) - > str Returns a fully-qualified group string. import data file path import data file path ( project : str , location : str , import job : str , import data file : str ) - > str Returns a fully-qualified import data file string. import job path import job path ( project : str , location : str , import job : str ) - > str Returns a fully-qualified import job string. list assets list assets ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.ReportAssetFramesResponse A response to a call to ReportAssetFrame. report config path report config path ( project : str , location : str , report config : str ) - > str Returns a fully-qualified report config string. report path report path ( project : str , location : str , report config : str , report : str ) - > str Returns a fully-qualified report string. run import job run import job ( request : typing .
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict] The request object.

