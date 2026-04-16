---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.045Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "TCO details in Cloud Console"
feature_slug: "tco-details-in-cloud-console"
latest_feature_date: "2025-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/generate-tco-report"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails"
keywords:
  - "tco"
  - "details"
  - "in"
  - "console"
  - "migration"
  - "center"
  - "shows"
  - "detailed"
---

# TCO details in Cloud Console

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center shows detailed total cost of ownership (TCO) information in Google Cloud Console for each asset and migration preference set without exporting the report.

## Extended Definition

Migration Center shows detailed total cost of ownership (TCO) information in Google Cloud Console for each asset and migration preference set without exporting the report.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/generate-tco-report](https://docs.cloud.google.com/migration-center/docs/generate-tco-report)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails)

## Supporting Pages

### Generate TCO reports \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/generate-tco-report](https://docs.cloud.google.com/migration-center/docs/generate-tco-report)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations If you generate a TCO report for a group that contains a database deployment and its underlying server, Migration Center generates separate cost estimates for the server and the database.
- You can view your TCO report directly in Migration Center, or export it to Google Slides or Google Sheets, or download it as a CSV file or a Microsoft Excel spreadsheet.
- Depending on the report that you want to generate, on the report details page do the following: To export the TCO summary report in Google Slides format, click Export report > Export TCO report to Google Slides .
- It provides the details of the discovered assets, the recommended target product for migration, and the associated costs for each individual asset in the groups for which you generated the report.

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.
- DeleteReportConfigRequest ( name="name value", ) Make the request operation = client. delete report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.DeleteReportConfigRequest , dict]] The request object.
- ListReportConfigsRequest ( parent="parent value", ) Make the request page result = client. list report configs (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.ListReportConfigsRequest , dict]] The request object.
- GetReportConfigRequest ( name="name value", ) Make the request response = await client. get report config (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.GetReportConfigRequest , dict]] The request object.

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict] The request object.
- DeleteReportConfigRequest ( name="name value", ) Make the request operation = client. delete report config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.DeleteReportConfigRequest , dict] The request object.
- ListReportConfigsRequest ( parent="parent value", ) Make the request page result = client. list report configs (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.ListReportConfigsRequest , dict] The request object.
- GetReportConfigRequest ( name="name value", ) Make the request response = client. get report config (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.GetReportConfigRequest , dict] The request object.

### MachineDetails \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails)
- Source ID: `site-api-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migration Center Reference Send feedback MachineDetails Stay organized with collections Save and categorize content based on your preferences.
- JSON representation PowerState MachineArchitectureDetails JSON representation BiosDetails JSON representation FirmwareType CpuHyperThreading GuestOsDetails JSON representation OperatingSystemFamily GuestConfigDetails JSON representation FstabEntryList JSON representation FstabEntry JSON representation HostsEntryList JSON representation HostsEntry JSON representation NfsExportList JSON representation NfsExport JSON representation SeLinuxMode GuestRuntimeDetails JSON representation RunningServiceList JSON representation RunningService JSON representation State StartMode RunningProcessList JSON representation RunningProcess JSON representation RuntimeNetworkInfo JSON representation NetworkConnectionList JSON representation NetworkConnection JSON representation State GuestInstalledApplicationList JSON representation GuestInstalledApplication JSON representation OpenFileList JSON representation OpenFileDetails JSON representation MachineNetworkDetails JSON representation NetworkAdapterList JSON representation NetworkAdapterDetails JSON representation NetworkAddressList JSON representation NetworkAddress JSON representation AddressAssignment MachineDiskDetails JSON representation DiskEntryList JSON representation DiskEntry JSON representation InterfaceType DiskPartitionList JSON representation DiskPartition JSON representation VmwareDiskConfig JSON representation BackingType VmdkMode RdmCompatibility PlatformDetails JSON representation VmwarePlatformDetails JSON representation HyperthreadingStatus AwsEc2PlatformDetails JSON representation AzureVmPlatformDetails JSON representation GenericPlatformDetails JSON representation PhysicalPlatformDetails JSON representation Details of a machine.
- JSON representation { "osName" : string , "family" : enum ( OperatingSystemFamily ) , "version" : string , "config" : { object ( GuestConfigDetails ) } , "runtime" : { object ( GuestRuntimeDetails ) } } Fields os Name string The name of the operating system. family enum ( OperatingSystemFamily ) What family the OS belong to, if known. version string The version of the operating system. config object ( GuestConfigDetails ) OS and app configuration. runtime object ( GuestRuntimeDetails ) Runtime information.
- JSON representation { "cpuArchitecture" : string , "cpuName" : string , "cpuManufacturer" : string , "vendor" : string , "cpuThreadCount" : integer , "cpuSocketCount" : integer , "bios" : { object ( BiosDetails ) } , "firmwareType" : enum ( FirmwareType ) , "hyperthreading" : enum ( CpuHyperThreading ) } Fields cpu Architecture string CPU architecture, e.g., "x64-based PC", "x86 64", "i686" etc. cpu Name string CPU name, e.g., "Intel Xeon E5-2690", "AMD EPYC 7571" etc. cpu Manufacturer string Optional.

