---
title: "MachineDetails \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/api
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails
  title: "MachineDetails \_|\_ Migration Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Reference
Send feedback
MachineDetails
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
PowerState
MachineArchitectureDetails
JSON representation
BiosDetails
JSON representation
FirmwareType
CpuHyperThreading
GuestOsDetails
JSON representation
OperatingSystemFamily
GuestConfigDetails
JSON representation
FstabEntryList
JSON representation
FstabEntry
JSON representation
HostsEntryList
JSON representation
HostsEntry
JSON representation
NfsExportList
JSON representation
NfsExport
JSON representation
SeLinuxMode
GuestRuntimeDetails
JSON representation
RunningServiceList
JSON representation
RunningService
JSON representation
State
StartMode
RunningProcessList
JSON representation
RunningProcess
JSON representation
RuntimeNetworkInfo
JSON representation
NetworkConnectionList
JSON representation
NetworkConnection
JSON representation
State
GuestInstalledApplicationList
JSON representation
GuestInstalledApplication
JSON representation
OpenFileList
JSON representation
OpenFileDetails
JSON representation
MachineNetworkDetails
JSON representation
NetworkAdapterList
JSON representation
NetworkAdapterDetails
JSON representation
NetworkAddressList
JSON representation
NetworkAddress
JSON representation
AddressAssignment
MachineDiskDetails
JSON representation
DiskEntryList
JSON representation
DiskEntry
JSON representation
InterfaceType
DiskPartitionList
JSON representation
DiskPartition
JSON representation
VmwareDiskConfig
JSON representation
BackingType
VmdkMode
RdmCompatibility
PlatformDetails
JSON representation
VmwarePlatformDetails
JSON representation
HyperthreadingStatus
AwsEc2PlatformDetails
JSON representation
AzureVmPlatformDetails
JSON representation
GenericPlatformDetails
JSON representation
PhysicalPlatformDetails
JSON representation
Details of a machine.
JSON representation
{
"uuid" : string ,
"machineName" : string ,
"createTime" : string ,
"coreCount" : integer ,
"memoryMb" : integer ,
"powerState" : enum ( PowerState ) ,
"architecture" : {
object ( MachineArchitectureDetails )
} ,
"guestOs" : {
object ( GuestOsDetails )
} ,
"network" : {
object ( MachineNetworkDetails )
} ,
"disks" : {
object ( MachineDiskDetails )
} ,
"platform" : {
object ( PlatformDetails )
}
}
Fields
uuid
string
Machine unique identifier.
machine Name
string
Machine name.
create Time
string ( Timestamp format)
Machine creation time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
core Count
integer
Number of logical CPU cores in the machine. Must be non-negative.
memory Mb
integer
The amount of memory in the machine. Must be non-negative.
power State
enum ( PowerState )
Power state of the machine.
architecture
object ( MachineArchitectureDetails )
Architecture details (vendor, CPU architecture).
guest Os
object ( GuestOsDetails )
Guest OS information.
network
object ( MachineNetworkDetails )
Network details.
disks
object ( MachineDiskDetails )
Disk details.
platform
object ( PlatformDetails )
Platform specific information.
PowerState
Machine power state.
Enums
POWER_STATE_UNSPECIFIED
Power state is unknown.
PENDING
The machine is preparing to enter the ACTIVE state. An instance may enter the PENDING state when it launches for the first time, or when it is started after being in the SUSPENDED state.
ACTIVE
The machine is active.
SUSPENDING
The machine is being turned off.
SUSPENDED
The machine is off.
DELETING
The machine is being deleted from the hosting platform.
DELETED
The machine is deleted from the hosting platform.
MachineArchitectureDetails
Details of the machine architecture.
JSON representation
{
"cpuArchitecture" : string ,
"cpuName" : string ,
"cpuManufacturer" : string ,
"vendor" : string ,
"cpuThreadCount" : integer ,
"cpuSocketCount" : integer ,
"bios" : {
object ( BiosDetails )
} ,
"firmwareType" : enum ( FirmwareType ) ,
"hyperthreading" : enum ( CpuHyperThreading )
}
Fields
cpu Architecture
string
CPU architecture, e.g., "x64-based PC", "x86_64", "i686" etc.
cpu Name
string
CPU name, e.g., "Intel Xeon E5-2690", "AMD EPYC 7571" etc.
cpu Manufacturer
string
Optional. CPU manufacturer, e.g., "Intel", "AMD".
vendor
string
Hardware vendor.
cpuThreadCount (deprecated)
integer
This item is deprecated!
Deprecated: use MachineDetails.core_count instead. Number of CPU threads allocated to the machine.
cpu Socket Count
integer
Number of processor sockets allocated to the machine.
bios
object ( BiosDetails )
BIOS Details.
firmware Type
enum ( FirmwareType )
Firmware type.
hyperthreading
enum ( CpuHyperThreading )
CPU hyper-threading support.
BiosDetails
Details about the BIOS.
JSON representation
{
"biosName" : string ,
"id" : string ,
"manufacturer" : string ,
"version" : string ,
"releaseDate" : {
object ( Date )
} ,
"smbiosUuid" : string
}
Fields
biosName (deprecated)
string
This item is deprecated!
BIOS name. This fields is deprecated. Please use the id field instead.
id
string
BIOS ID.
manufacturer
string
BIOS manufacturer.
version
string
BIOS version.
release Date
object ( Date )
BIOS release date.
smbios Uuid
string
SMBIOS UUID.
FirmwareType
Firmware type.
Enums
FIRMWARE_TYPE_UNSPECIFIED
Unspecified or unknown.
BIOS
BIOS firmware.
EFI
EFI firmware.
CpuHyperThreading
CPU hyper-threading support.
Enums
CPU_HYPER_THREADING_UNSPECIFIED
Unspecified or unknown.
DISABLED
Hyper-threading is disabled.
ENABLED
Hyper-threading is enabled.
GuestOsDetails
Information from Guest-level collections.
JSON representation
{
"osName" : string ,
"family" : enum ( OperatingSystemFamily ) ,
"version" : string ,
"config" : {
object ( GuestConfigDetails )
} ,
"runtime" : {
object ( GuestRuntimeDetails )
}
}
Fields
os Name
string
The name of the operating system.
family
enum ( OperatingSystemFamily )
What family the OS belong to, if known.
version
string
The version of the operating system.
config
object ( GuestConfigDetails )
OS and app configuration.
runtime
object ( GuestRuntimeDetails )
Runtime information.
OperatingSystemFamily
Known categories of operating systems.
Enums
OS_FAMILY_UNKNOWN
OS_FAMILY_WINDOWS
Microsoft Windows Server and Desktop.
OS_FAMILY_LINUX
Various Linux flavors.
OS_FAMILY_UNIX
Non-Linux Unix flavors.
GuestConfigDetails
Guest OS config information.
JSON representation
{
"issue" : string ,
"fstab" : {
object ( FstabEntryList )
} ,
"hosts" : {
object ( HostsEntryList )
} ,
"nfsExports" : {
object ( NfsExportList )
} ,
"selinuxMode" : enum ( SeLinuxMode )
}
Fields
issue
string
OS issue (typically /etc/issue in Linux).
fstab
object ( FstabEntryList )
Mount list (Linux fstab).
hosts
object ( HostsEntryList )
Hosts file (/etc/hosts).
nfs Exports
object ( NfsExportList )
NFS exports.
selinux Mode
enum ( SeLinuxMode )
Security-Enhanced Linux (SELinux) mode.
FstabEntryList
Fstab content.
JSON representation
{
"entries" : [
{
object ( FstabEntry )
}
]
}
Fields
entries[]
object ( FstabEntry )
Fstab entries.
FstabEntry
Single fstab entry.
JSON representation
{
"spec" : string ,
"file" : string ,
"vfstype" : string ,
"mntops" : string ,
"freq" : integer ,
"passno" : integer
}
Fields
spec
string
The block special device or remote filesystem to be mounted.
file
string
The mount point for the filesystem.
vfstype
string
The type of the filesystem.
mntops
string
Mount options associated with the filesystem.
freq
integer
Used by dump to determine which filesystems need to be dumped.
passno
integer
Used by the fsck(8) program to determine the order in which filesystem checks are done at reboot time.
HostsEntryList
Hosts content.
JSON representation
{
"entries" : [
{
object ( HostsEntry )
}
]
}
Fields
entries[]
object ( HostsEntry )
Hosts entries.
HostsEntry
Single /etc/hosts entry.
JSON representation
{
"ip" : string ,
"hostNames" : [
string
]
}
Fields
ip
string
IP (raw, IPv4/6 agnostic).
host Names[]
string
List of host names / aliases.
NfsExportList
NFS exports.
JSON representation
{
"entries" : [
{
object ( NfsExport )
}
]
}
Fields
entries[]
object ( NfsExport )
NFS export entries.
NfsExport
NFS export.
JSON representation
{
"exportDirectory" : string ,
"hosts" : [
string
]
}
Fields
export Directory
string
The directory being exported.
hosts[]
string
The hosts or networks to which the export is being shared.
SeLinuxMode
Security-Enhanced Linux (SELinux) mode.
Enums
SE_LINUX_MODE_UNSPECIFIED
SELinux mode unknown or unspecified.
SE_LINUX_MODE_DISABLED
SELinux is disabled.
SE_LINUX_MODE_PERMISSIVE
SELinux permissive mode.
SE_LINUX_MODE_ENFORCING
SELinux enforcing mode.
GuestRuntimeDetails
Guest OS runtime information.
JSON representation
{
"services" : {
object ( RunningServiceList )
} ,
"processes" : {
object ( RunningProcessList )
} ,
"network" : {
object ( RuntimeNetworkInfo )
} ,
"lastBootTime" : string ,
"domain" : string ,
"machineName" : string ,
"installedApps" : {
object ( GuestInstalledApplicationList )
} ,
"openFileList" : {
object ( OpenFileList )
}
}
Fields
services
object ( RunningServiceList )
Running background services.
processes
object ( RunningProcessList )
Running processes.
network
object ( RuntimeNetworkInfo )
Runtime network information (connections, ports).
last Boot Time
string ( Timestamp format)
Last time the OS was booted.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
domain
string
Domain, e.g. c.stratozone-development.internal.
machine Name
string
Machine name.
installed Apps
object ( GuestInstalledApplicationList )
Installed applications information.
open File List
object ( OpenFileList )
Open files information.
RunningServiceList
List of running guest OS services.
JSON representation
{
"entries" : [
{
object ( RunningService )
}
]
}
Fields
entries[]
object ( RunningService )
Running service entries.
RunningService
Guest OS running service details.
JSON representation
{
"serviceName" : string ,
"state" : enum ( State ) ,
"startMode" : enum ( StartMode ) ,
"exePath" : string ,
"cmdline" : string ,
"pid" : string
}
Fields
service Name
string
Service name.
state
enum ( State )
Service state (OS-agnostic).
start Mode
enum ( StartMode )
Service start mode (OS-agnostic).
exe Path
string
Service binary path.
cmdline
string
Service command line.
pid
string ( int64 format)
Service pid.
State
Service state (OS-agnostic).
Enums
STATE_UNSPECIFIED
Service state unspecified.
ACTIVE
Service is active.
PAUSED
Service is paused.
STOPPED
Service is stopped.
StartMode
Service start mode (OS-agnostic).
Enums
START_MODE_UNSPECIFIED
Start mode unspecified.
BOOT
The service is a device driver started by the system loader.
SYSTEM
The service is a device driver started by the IOInitSystem function.
AUTO
The service is started by the operating system, at system start-up
MANUAL
The service is started only manually, by a user.
DISABLED
The service is disabled.
RunningProcessList
List of running guest OS processes.
JSON representation
{
"entries" : [
{
object ( RunningProcess )
}
]
}
Fields
entries[]
object ( RunningProcess )
Running process entries.
RunningProcess
Guest OS running process details.
JSON representation
{
"pid" : string ,
"exePath" : string ,
"cmdline" : string ,
"user" : string ,
"attributes" : {
string : string ,
...
}
}
Fields
pid
string ( int64 format)
Process ID.
exe Path
string
Process binary path.
cmdline
string
Process full command line.
user
string
User running the process.
attributes
map (key: string, value: string)
Process extended attributes.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
RuntimeNetworkInfo
Runtime networking information.
JSON representation
{
"scanTime" : string ,
"connections" : {
object ( NetworkConnectionList )
}
}
Fields
scan Time
string ( Timestamp format)
Time of the last network scan.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
connections
object ( NetworkConnectionList )
Network connections.
NetworkConnectionList
Network connection list.
JSON representation
{
"entries" : [
{
object ( NetworkConnection )
}
]
}
Fields
entries[]
object ( NetworkConnection )
Network connection entries.
NetworkConnection
JSON representation
{
"protocol" : string ,
"localIpAddress" : string ,
"localPort" : integer ,
"remoteIpAddress" : string ,
"remotePort" : integer ,
"state" : enum ( State ) ,
"pid" : string ,
"processName" : string
}
Fields
protocol
string
Connection protocol (e.g. TCP/UDP).
local Ip Address
string
Local IP address.
local Port
integer
Local port.
remote Ip Address
string
Remote IP address.
remote Port
integer
Remote port.
state
enum ( State )
Network connection state.
pid
string ( int64 format)
Process ID.
process Name
string
Process or service name.
State
Network connection state.
Enums
STATE_UNSPECIFIED
Connection state is unknown or unspecified.
OPENING
The connection is being opened.
OPEN
The connection is open.
LISTEN
Listening for incoming connections.
CLOSING
The connection is being closed.
CLOSED
The connection is closed.
GuestInstalledApplicationList
Guest installed application list.
JSON representation
{
"entries" : [
{
object ( GuestInstalledApplication )
}
]
}
Fields
entries[]
object ( GuestInstalledApplication )
Application entries.
GuestInstalledApplication
Guest installed application information.
JSON representation
{
"applicationName" : string ,
"vendor" : string ,
"installTime" : string ,
"path" : string ,
"version" : string ,
"licenses" : [
string
]
}
Fields
application Name
string
Installed application name.
vendor
string
Installed application vendor.
install Time
string ( Timestamp format)
The time when the application was installed.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
path
string
Source path.
version
string
Installed application version.
licenses[]
string
License strings associated with the installed application.
OpenFileList
Open file list.
JSON representation
{
"entries" : [
{
object ( OpenFileDetails )
}
]
}
Fields
entries[]
object ( OpenFileDetails )
Open file details entries.
OpenFileDetails
Open file Information.
JSON representation
{
"command" : string ,
"user" : string ,
"fileType" : string ,
"filePath" : string
}
Fields
command
string
Opened file command.
user
string
Opened file user.
file Type
string
Opened file file type.
file Path
string
Opened file file path.
MachineNetworkDetails
Details of network adapters and settings.
JSON representation
{
"primaryIpAddress" : string ,
"publicIpAddress" : string ,
"primaryMacAddress" : string ,
"adapters" : {
object ( NetworkAdapterList )
}
}
Fields
primary Ip Address
string
The primary IP address of the machine.
public Ip Address
string
The public IP address of the machine.
primary Mac Address
string
MAC address of the machine. This property is used to uniqly identify the machine.
adapters
object ( NetworkAdapterList )
List of network adapters.
NetworkAdapterList
List of network adapters.
JSON representation
{
"entries" : [
{
object ( NetworkAdapterDetails )
}
]
}
Fields
entries[]
object ( NetworkAdapterDetails )
Network adapter entries.
NetworkAdapterDetails
Details of network adapter.
JSON representation
{
"adapterType" : string ,
"macAddress" : string ,
"addresses" : {
object ( NetworkAddressList )
}
}
Fields
adapter Type
string
Network adapter type (e.g. VMXNET3).
mac Address
string
MAC address.
addresses
object ( NetworkAddressList )
NetworkAddressList
NetworkAddressList
List of allocated/assigned network addresses.
JSON representation
{
"entries" : [
{
object ( NetworkAddress )
}
]
}
Fields
entries[]
object ( NetworkAddress )
Network address entries.
NetworkAddress
Details of network address.
JSON representation
{
"ipAddress" : string ,
"subnetMask" : string ,
"bcast" : string ,
"fqdn" : string ,
"assignment" : enum ( AddressAssignment )
}
Fields
ip Address
string
Assigned or configured IP Address.
subnet Mask
string
Subnet mask.
bcast
string
Broadcast address.
fqdn
string
Fully qualified domain name.
assignment
enum ( AddressAssignment )
Whether DHCP is used to assign addresses.
AddressAssignment
Network address assignment.
Enums
ADDRESS_ASSIGNMENT_UNSPECIFIED
Unknown (default value).
ADDRESS_ASSIGNMENT_STATIC
Staticly assigned IP.
ADDRESS_ASSIGNMENT_DHCP
Dynamically assigned IP (DHCP).
MachineDiskDetails
Details of machine disks.
JSON representation
{
"totalCapacityBytes" : string ,
"totalFreeBytes" : string ,
"disks" : {
object ( DiskEntryList )
}
}
Fields
total Capacity Bytes
string ( int64 format)
Disk total Capacity.
total Free Bytes
string ( int64 format)
Total disk free space.
disks
object ( DiskEntryList )
List of disks.
DiskEntryList
VM disks.
JSON representation
{
"entries" : [
{
object ( DiskEntry )
}
]
}
Fields
entries[]
object ( DiskEntry )
Disk entries.
DiskEntry
Single disk entry.
JSON representation
{
"capacityBytes" : string ,
"freeBytes" : string ,
"diskLabel" : string ,
"diskLabelType" : string ,
"interfaceType" : enum ( InterfaceType ) ,
"partitions" : {
object ( DiskPartitionList )
} ,
"hwAddress" : string ,
// Union field platform_specific can be only one of the following:
"vmware" : {
object ( VmwareDiskConfig )
}
// End of list of possible types for union field platform_specific .
}
Fields
capacity Bytes
string ( int64 format)
Disk capacity.
free Bytes
string ( int64 format)
Disk free space.
disk Label
string
Disk label.
disk Label Type
string
Disk label type (e.g. BIOS/GPT)
interface Type
enum ( InterfaceType )
Disks interface type.
partitions
object ( DiskPartitionList )
Partition layout.
hw Address
string
Disk hardware address (e.g. 0:1 for SCSI).
Union field platform_specific . Additional details for specific platforms. platform_specific can be only one of the following:
vmware
object ( VmwareDiskConfig )
VMware disk details.
InterfaceType
Disks interface type.
Enums
INTERFACE_TYPE_UNSPECIFIED
Interface type unknown or unspecified.
IDE
IDE interface type.
SATA
SATA interface type.
SAS
SAS interface type.
SCSI
SCSI interface type.
NVME
NVME interface type.
FC
FC interface type.
ISCSI
iSCSI interface type.
DiskPartitionList
Disk partition list.
JSON representation
{
"entries" : [
{
object ( DiskPartition )
}
]
}
Fields
entries[]
object ( DiskPartition )
Partition entries.
DiskPartition
Disk Partition details.
JSON representation
{
"type" : string ,
"fileSystem" : string ,
"mountPoint" : string ,
"capacityBytes" : string ,
"freeBytes" : string ,
"uuid" : string ,
"subPartitions" : {
object ( DiskPartitionList )
}
}
Fields
type
string
Partition type.
file System
string
Partition file system.
mount Point
string
Mount pount (Linux/Windows) or drive letter (Windows).
capacity Bytes
string ( int64 format)
Partition capacity.
free Bytes
string ( int64 format)
Partition free space.
uuid
string
Partition UUID.
sub Partitions
object ( DiskPartitionList )
Sub-partitions.
VmwareDiskConfig
VMware disk config details.
JSON representation
{
"backingType" : enum ( BackingType ) ,
"shared" : boolean ,
"vmdkMode" : enum ( VmdkMode ) ,
"rdmCompatibility" : enum ( RdmCompatibility )
}
Fields
backing Type
enum ( BackingType )
VMDK backing type.
shared
boolean
Is VMDK shared with other VMs.
vmdk Mode
enum ( VmdkMode )
VMDK disk mode.
rdm Compatibility
enum ( RdmCompatibility )
RDM compatibility mode.
BackingType
VMDK backing type possible values.
Enums
BACKING_TYPE_UNSPECIFIED
Default value.
BACKING_TYPE_FLAT_V1
Flat v1.
BACKING_TYPE_FLAT_V2
Flat v2.
BACKING_TYPE_PMEM
Persistent memory, also known as Non-Volatile Memory (NVM).
BACKING_TYPE_RDM_V1
Raw Disk Memory v1.
BACKING_TYPE_RDM_V2
Raw Disk Memory v2.
BACKING_TYPE_SESPARSE
SEsparse is a snapshot format introduced in vSphere 5.5 for large disks.
BACKING_TYPE_SESPARSE_V1
SEsparse v1.
BACKING_TYPE_SESPARSE_V2
SEsparse v1.
VmdkMode
VMDK disk mode.
Enums
VMDK_MODE_UNSPECIFIED
VMDK disk mode unspecified or unknown.
DEPENDENT
Dependent disk mode.
INDEPENDENT_PERSISTENT
Independent - Persistent disk mode.
INDEPENDENT_NONPERSISTENT
Independent - Nonpersistent disk mode.
RdmCompatibility
RDM compatibility mode.
Enums
RDM_COMPATIBILITY_UNSPECIFIED
Compatibility mode unspecified or unknown.
PHYSICAL_COMPATIBILITY
Physical compatibility mode.
VIRTUAL_COMPATIBILITY
Virtual compatibility mode.
PlatformDetails
Information about the platform.
JSON representation
{
// Union field vendor_details can be only one of the following:
"vmwareDetails" : {
object ( VmwarePlatformDetails )
} ,
"awsEc2Details" : {
object ( AwsEc2PlatformDetails )
} ,
"azureVmDetails" : {
object ( AzureVmPlatformDetails )
} ,
"genericDetails" : {
object ( GenericPlatformDetails )
} ,
"physicalDetails" : {
object ( PhysicalPlatformDetails )
}
// End of list of possible types for union field vendor_details .
}
Fields
Union field vendor_details .
vendor_details can be only one of the following:
vmware Details
object ( VmwarePlatformDetails )
VMware specific details.
aws Ec2 Details
object ( AwsEc2PlatformDetails )
AWS EC2 specific details.
azure Vm Details
object ( AzureVmPlatformDetails )
Azure VM specific details.
generic Details
object ( GenericPlatformDetails )
Generic platform details.
physical Details
object ( PhysicalPlatformDetails )
Physical machines platform details.
VmwarePlatformDetails
VMware specific details.
JSON representation
{
"vcenterVersion" : string ,
"esxVersion" : string ,
"osid" : string ,
"vcenterFolder" : string ,
"vcenterUri" : string ,
"vcenterVmId" : string ,
"esxHyperthreading" : enum ( HyperthreadingStatus )
}
Fields
vcenter Version
string
vCenter version.
esx Version
string
ESX version.
osid
string
VMware os enum - https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html .
vcenter Folder
string
Folder name in vCenter where asset resides.
vcenter Uri
string
vCenter URI used in collection.
vcenter Vm Id
string
vCenter VM ID.
esx Hyperthreading
enum ( HyperthreadingStatus )
Whether the ESX is hyperthreaded.
HyperthreadingStatus
The Simultaneous Multithreading (Hyperthreading) Status of the machine.
Enums
HYPERTHREADING_STATUS_UNSPECIFIED
Simultaneous Multithreading status unknown.
HYPERTHREADING_STATUS_DISABLED
Simultaneous Multithreading is disabled or unavailable.
HYPERTHREADING_STATUS_ENABLED
Simultaneous Multithreading is enabled.
AwsEc2PlatformDetails
AWS EC2 specific details.
JSON representation
{
"machineTypeLabel" : string ,
"location" : string ,
"hyperthreading" : enum ( HyperthreadingStatus )
}
Fields
machine Type Label
string
AWS platform's machine type label.
location
string
The location of the machine in the AWS format.
hyperthreading
enum ( HyperthreadingStatus )
Optional. Whether the machine is hyperthreaded.
AzureVmPlatformDetails
Azure VM specific details.
JSON representation
{
"machineTypeLabel" : string ,
"location" : string ,
"provisioningState" : string ,
"hyperthreading" : enum ( HyperthreadingStatus )
}
Fields
machine Type Label
string
Azure platform's machine type label.
location
string
The location of the machine in the Azure format.
provisioning State
string
Azure platform's provisioning state.
hyperthreading
enum ( HyperthreadingStatus )
Whether the machine is hyperthreaded.
GenericPlatformDetails
Generic platform details.
JSON representation
{
"location" : string ,
"hyperthreading" : enum ( HyperthreadingStatus )
}
Fields
location
string
Free text representation of the machine location. The format of this field should not be relied on. Different VMs in the same location may have different string values for this field.
hyperthreading
enum ( HyperthreadingStatus )
Whether the machine is hyperthreaded.
PhysicalPlatformDetails
Platform specific details for Physical Machines.
JSON representation
{
"location" : string ,
"hyperthreading" : enum ( HyperthreadingStatus )
}
Fields
location
string
Free text representation of the machine location. The format of this field should not be relied on. Different machines in the same location may have different string values for this field.
hyperthreading
enum ( HyperthreadingStatus )
Whether the machine is hyperthreaded.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
