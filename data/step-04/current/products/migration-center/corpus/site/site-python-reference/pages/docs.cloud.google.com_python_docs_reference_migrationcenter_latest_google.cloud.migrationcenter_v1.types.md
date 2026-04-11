---
title: "Package types (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.types
  title: "Package types (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Package types (0.4.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.4.0 (latest)
0.3.0
0.2.0
0.1.15
API documentation for migrationcenter_v1.types package.
Classes
AddAssetsToGroupRequest
A request to add assets to a group.
AggregateAssetsValuesRequest
A request to aggregate one or more values.
AggregateAssetsValuesResponse
A response to a request to aggregated assets values.
Aggregation
Message describing an aggregation. The message includes the
aggregation type, parameters, and the field on which to perform
the aggregation.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AggregationResult
Message describing a result of an aggregation.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Asset
An asset represents a resource in your environment. Asset
types include virtual machines and databases.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AssetFrame
Contains data reported from an inventory source on an asset.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AssetList
Lists the asset IDs of all assets.
AssetPerformanceData
Performance data for an asset.
AssetView
Specifies the types of asset views that provide complete or
partial details of an asset.
AwsEc2PlatformDetails
AWS EC2 specific details.
AzureVmPlatformDetails
Azure VM specific details.
BatchDeleteAssetsRequest
A request to delete a list of asset.
BatchUpdateAssetsRequest
A request to update a list of assets.
BatchUpdateAssetsResponse
Response for updating a list of assets.
BiosDetails
Details about the BIOS.
CommitmentPlan
The plan of commitments for VM resource-based committed use
discount (CUD).
ComputeEngineMigrationTarget
Compute engine migration target.
ComputeEnginePreferences
The user preferences relating to Compute Engine target
platform.
ComputeEngineShapeDescriptor
Compute Engine target shape descriptor.
ComputeMigrationTargetProduct
The preference for a specific Google Cloud product platform.
ComputeStorageDescriptor
Compute Engine storage option descriptor.
CpuUsageSample
CPU usage sample.
CreateGroupRequest
A request to create a group.
CreateImportDataFileRequest
A request to create an ImportDataFile resource.
CreateImportJobRequest
A request to create an import job.
CreatePreferenceSetRequest
A request to create a preference set.
CreateReportConfigRequest
A request to create a ReportConfig resource.
CreateReportRequest
Message for creating a Report.
CreateSourceRequest
A request to create a source.
DailyResourceUsageAggregation
Usage data aggregation for a single day.
DeleteAssetRequest
A request to delete an asset.
DeleteGroupRequest
A request to delete a group.
DeleteImportDataFileRequest
A request to delete an ImportDataFile resource.
DeleteImportJobRequest
A request to delete an import job.
DeletePreferenceSetRequest
A request to delete a preference set.
DeleteReportConfigRequest
A request to delete a ReportConfig.
DeleteReportRequest
A request to delete a Report.
DeleteSourceRequest
A request to delete a source.
DiskEntry
Single disk entry.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
DiskEntryList
VM disks.
DiskPartition
Disk Partition details.
DiskPartitionList
Disk partition list.
DiskUsageSample
Disk usage sample. Values are across all disks.
ErrorFrame
Message representing a frame which failed to be processed due
to an error.
ErrorFrameView
ErrorFrameView can be specified in ErrorFrames List and Get
requests to control the level of details that is returned for
the original frame.
ExecutionReport
A resource that reports result of the import job execution.
FileValidationReport
A resource that aggregates the validation errors found in an
import job file.
FitDescriptor
Describes the fit level of an asset for migration to a
specific target.
FrameViolationEntry
A resource that contains a single violation of a reported
AssetFrame resource.
Frames
Collection of frame data.
FstabEntry
Single fstab entry.
FstabEntryList
Fstab content.
GenericInsight
A generic insight about an asset.
GenericPlatformDetails
Generic platform details.
GetAssetRequest
Message for getting a Asset.
GetErrorFrameRequest
GetGroupRequest
A request to get a group.
GetImportDataFileRequest
A request to get an import data file.
GetImportJobRequest
A request to get an import job.
GetPreferenceSetRequest
A request to get a preference set.
GetReportConfigRequest
A request to get a ReportConfig resource.
GetReportRequest
A request to get a Report.
GetSettingsRequest
A request to get the settings.
GetSourceRequest
A request to get a source.
Group
A resource that represents an asset group.
The purpose of an asset group is to bundle a set of assets that
have something in common, while allowing users to add
annotations to the group. An asset can belong to multiple
groups.
GuestConfigDetails
Guest OS config information.
GuestInstalledApplication
Guest installed application information.
GuestInstalledApplicationList
Guest installed application list.
GuestOsDetails
Information from Guest-level collections.
GuestRuntimeDetails
Guest OS runtime information.
HostsEntry
Single /etc/hosts entry.
HostsEntryList
Hosts content.
ImportDataFile
A resource that represents a payload file in an import job.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ImportError
A resource that reports the errors encountered while
processing an import job.
ImportJob
A resource that represents the background job that imports
asset frames.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ImportJobFormat
Specifies the data formats supported by Migration Center.
ImportJobView
Specifies the types of import job views that provide complete
or partial details of an import job.
ImportRowError
A resource that reports the import job errors at row level.
Insight
An insight about an asset.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
InsightList
Message containing insights list.
LicenseType
The License type for premium images (RHEL, RHEL for SAP,
SLES, SLES for SAP, Windows Server).
ListAssetsRequest
Message for requesting a list of assets.
ListAssetsResponse
Response message for listing assets.
ListErrorFramesRequest
A request to list error frames for a source.
ListErrorFramesResponse
A response for listing error frames.
ListGroupsRequest
A request to list groups.
ListGroupsResponse
A response for listing groups.
ListImportDataFilesRequest
A request to list import data files of an import job.
ListImportDataFilesResponse
Response for listing payload files of an import job.
ListImportJobsRequest
A request to list import jobs.
ListImportJobsResponse
A response for listing import jobs.
ListPreferenceSetsRequest
Request for listing preference sets.
ListPreferenceSetsResponse
Response message for listing preference sets.
ListReportConfigsRequest
A request to get a list of ReportConfig resources.
ListReportConfigsResponse
Response message for listing report configs.
ListReportsRequest
A request for a list of Reports.
ListReportsResponse
Response message for listing Reports.
ListSourcesRequest
A request for a list of sources.
ListSourcesResponse
Response message for listing sources.
MachineArchitectureDetails
Details of the machine architecture.
MachineDetails
Details of a machine.
MachineDiskDetails
Details of machine disks.
MachineNetworkDetails
Details of network adapters and settings.
MachinePreferences
The type of machines to consider when calculating virtual
machine migration insights and recommendations.
Not all machine types are available in all zones and regions.
MachineSeries
A Compute Engine machine series.
MemoryUsageSample
Memory usage sample.
MigrationInsight
An insight about potential migrations for an asset.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
NetworkAdapterDetails
Details of network adapter.
NetworkAdapterList
List of network adapters.
NetworkAddress
Details of network address.
NetworkAddressList
List of allocated/assigned network addresses.
NetworkConnection
NetworkConnectionList
Network connection list.
NetworkUsageSample
Network usage sample. Values are across all network
interfaces.
NfsExport
NFS export.
NfsExportList
NFS exports.
OpenFileDetails
Open file Information.
OpenFileList
Open file list.
OperatingSystemFamily
Known categories of operating systems.
OperationMetadata
Represents the metadata of the long-running operation.
PerformanceSample
Performance data sample.
PersistentDiskType
The persistent disk (PD) types of Compute Engine virtual
machines.
PhysicalPlatformDetails
Platform specific details for Physical Machines.
PlatformDetails
Information about the platform.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
PreferenceSet
The preferences that apply to all assets in a given context.
RegionPreferences
The user preferences relating to target regions.
RemoveAssetsFromGroupRequest
A request to remove assets from a group.
Report
Report represents a point-in-time rendering of the
ReportConfig results.
ReportAssetFramesRequest
A request to report a set of asset frames.
ReportAssetFramesResponse
A response to a call to ReportAssetFrame .
ReportConfig
The groups and associated preference sets on which
we can generate reports.
ReportSummary
Describes the Summary view of a Report, which contains
aggregated values for all the groups and preference sets
included in this Report.
ReportView
Specifies the types of views that provide complete or partial
details of a Report.
RunImportJobRequest
A request to run an import job.
RunningProcess
Guest OS running process details.
RunningProcessList
List of running guest OS processes.
RunningService
Guest OS running service details.
RunningServiceList
List of running guest OS services.
RuntimeNetworkInfo
Runtime networking information.
Settings
Describes the Migration Center settings related to the
project.
SizingOptimizationStrategy
The sizing optimization strategy preferences of a virtual
machine. This strategy, in addition to actual usage data of the
virtual machine, can help determine the recommended shape on the
target platform.
SoleTenancyPreferences
Preferences concerning Sole Tenancy nodes and VMs.
SoleTenantNodeType
A Sole Tenant node type.
Source
Source represents an object from which asset information is
streamed to Migration Center.
UpdateAssetRequest
A request to update an asset.
UpdateGroupRequest
A request to update a group.
UpdateImportJobRequest
A request to update an import job.
UpdatePreferenceSetRequest
A request to update a preference set.
UpdateSettingsRequest
A request to update the settings.
UpdateSourceRequest
A request to update a source.
UploadFileInfo
A resource that contains a URI to which a data file can be
uploaded.
ValidateImportJobRequest
A request to validate an import job.
ValidationReport
A resource that aggregates errors across import job files.
VirtualMachinePreferences
VirtualMachinePreferences enables you to create sets of
assumptions, for example, a geographical location and pricing
track, for your migrated virtual machines. The set of
preferences influence recommendations for migrating virtual
machine assets.
VmwareDiskConfig
VMware disk config details.
VmwareEnginePreferences
The user preferences relating to Google Cloud VMware Engine
target platform.
VmwarePlatformDetails
VMware specific details.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
