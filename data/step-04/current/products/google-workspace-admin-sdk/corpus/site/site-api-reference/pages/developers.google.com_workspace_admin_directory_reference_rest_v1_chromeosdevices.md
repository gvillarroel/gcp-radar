---
title: "REST Resource: chromeosdevices \_|\_ Admin console \_|\_ Google for Developers"
url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/admin/directory/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices
  title: "REST Resource: chromeosdevices \_|\_ Admin console \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Admin console
Reference
Send feedback
REST Resource: chromeosdevices
Stay organized with collections
Save and categorize content based on your preferences.
Resource: ChromeOsDevice
Google Chrome devices run on the Chrome OS . For more information about common API tasks, see the Developer's Guide .
JSON representation
{
"deviceId" : string ,
"serialNumber" : string ,
"status" : string ,
"lastSync" : string ,
"supportEndDate" : string ,
"annotatedUser" : string ,
"annotatedLocation" : string ,
"notes" : string ,
"model" : string ,
"meid" : string ,
"orderNumber" : string ,
"willAutoRenew" : boolean ,
"osVersion" : string ,
"platformVersion" : string ,
"firmwareVersion" : string ,
"macAddress" : string ,
"bootMode" : string ,
"lastEnrollmentTime" : string ,
"kind" : string ,
"recentUsers" : [
{
"type" : string ,
"email" : string
}
] ,
"activeTimeRanges" : [
{
"activeTime" : integer ,
"date" : string
}
] ,
"ethernetMacAddress" : string ,
"annotatedAssetId" : string ,
"etag" : string ,
"diskVolumeReports" : [
{
"volumeInfo" : [
{
"volumeId" : string ,
"storageTotal" : string ,
"storageFree" : string
}
]
}
] ,
"systemRamTotal" : string ,
"cpuStatusReports" : [
{
"reportTime" : string ,
"cpuUtilizationPercentageInfo" : [
integer
] ,
"cpuTemperatureInfo" : [
{
"temperature" : integer ,
"label" : string
}
]
}
] ,
"cpuInfo" : [
{
"model" : string ,
"architecture" : string ,
"maxClockSpeedKhz" : integer ,
"logicalCpus" : [
{
"maxScalingFrequencyKhz" : integer ,
"currentScalingFrequencyKhz" : integer ,
"idleDuration" : string ,
"cStates" : [
{
"displayName" : string ,
"sessionDuration" : string
}
]
}
]
}
] ,
"deviceFiles" : [
{
"name" : string ,
"type" : string ,
"downloadUrl" : string ,
"createTime" : string
}
] ,
"systemRamFreeReports" : [
{
"reportTime" : string ,
"systemRamFreeInfo" : [
string
]
}
] ,
"lastKnownNetwork" : [
{
"ipAddress" : string ,
"wanIpAddress" : string
}
] ,
"autoUpdateExpiration" : string ,
"ethernetMacAddress0" : string ,
"dockMacAddress" : string ,
"manufactureDate" : string ,
"orgUnitPath" : string ,
"tpmVersionInfo" : {
"family" : string ,
"specLevel" : string ,
"manufacturer" : string ,
"tpmModel" : string ,
"firmwareVersion" : string ,
"vendorSpecific" : string
} ,
"screenshotFiles" : [
{
"name" : string ,
"type" : string ,
"downloadUrl" : string ,
"createTime" : string
}
] ,
"orgUnitId" : string ,
"osUpdateStatus" : {
object ( OsUpdateStatus )
} ,
"firstEnrollmentTime" : string ,
"lastDeprovisionTimestamp" : string ,
"deprovisionReason" : enum ( DeprovisionReason ) ,
"deviceLicenseType" : enum ( DeviceLicenseType ) ,
"backlightInfo" : [
{
object ( BacklightInfo )
}
] ,
"autoUpdateThrough" : string ,
"extendedSupportEligible" : boolean ,
"extendedSupportStart" : string ,
"extendedSupportEnabled" : boolean ,
"fanInfo" : [
{
object ( FanInfo )
}
] ,
"chromeOsType" : enum ( ChromeOsType ) ,
"diskSpaceUsage" : {
object ( ByteUsage )
} ,
"osVersionCompliance" : enum ( Compliance ) ,
"bluetoothAdapterInfo" : [
{
object ( BluetoothAdapterInfo )
}
]
}
Fields
deviceId
string
The unique ID of the Chrome device.
serialNumber
string
The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's Serial Number in the Chrome OS Devices tab.
status
string
The status of the device.
Acceptable values are:
ACTIVE : The device is enrolled into the domain.
DELINQUENT : The annual license for the domain has expired and the device no longer receives policies and settings. When a new license is purchased, the device will return to ACTIVE state.
PRE_PROVISIONED : The device has been registered for zero-touch enrollment . A PRE_PROVISIONED device can be moved to a different organizational unit or deleted. Once enrollment is complete the device will be ACTIVE .
DEPROVISIONED : The device is no longer eligible to be enrolled into the domain. The order has been cancelled. The device's settings have been cached on the device. If the device is activated again, the latest system settings are applied to this newly activated device.
DISABLED : The device has been disabled by the administrator and cannot be used.
INACTIVE : The device is not enrolled into the domain.
RETURN_ARRIVED : The request to replace this device has arrived.
RETURN_REQUESTED : A request has been made to replace this device.
SHIPPED : The device is shipped from Google inventory. (Deprecated)
UNKNOWN : The status of the device cannot be determined.
lastSync
string
The date and time the device was last synchronized with the policy settings in the Admin console. The value is in ISO 8601 date and time format. The time is the complete date plus hours, minutes, and seconds in the form YYYY-MM-DDThh:mm:ssTZD . For example, 2010-04-05T17:30:04+01:00 .
supportEndDate
string
The final date the device will be supported. This is applicable only for those devices purchased directly from Google. The value is in ISO 8601 date and time format. The time is the complete date plus hours, minutes, and seconds in the form YYYY-MM-DDThh:mm:ssTZD . For example, 2010-04-05T17:30:04+01:00 .
annotatedUser
string
The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed.
annotatedLocation
string
The address or location of the device as noted by the administrator. Maximum length is 200 characters. Empty values are allowed.
notes
string
Notes about this device added by the administrator. This property can be searched with the list method's query parameter. Maximum length is 500 characters. Empty values are allowed.
model
string
The device's model information. If the device does not have this information, this property is not included in the response.
meid
string
The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the Developer's Guide .
orderNumber
string
The device's order number. Only devices directly purchased from Google have an order number.
willAutoRenew
boolean
Determines if the device will auto renew its support after the support end date. This is a read-only property.
osVersion
string
The Chrome device's operating system version.
platformVersion
string
The Chrome device's platform version.
firmwareVersion
string
The Chrome device's firmware version.
macAddress
string
The device's wireless MAC address. If the device does not have this information, it is not included in the response.
bootMode
string
The boot mode for the device. The possible values are:
Verified : The device is running a valid version of the Chrome OS.
Dev : The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the Chromebook developer information .
lastEnrollmentTime
string
The date and time the device was last enrolled. The value is in ISO 8601 date and time format. The time is the complete date plus hours, minutes, and seconds in the form YYYY-MM-DDThh:mm:ssTZD . For example, 2010-04-05T17:30:04+01:00 . For more information about automatic and manual enrollment, see the Chrome help center .
kind
string
The type of resource. For the Chromeosdevices resource, the value is admin#directory#chromeosdevice .
recentUsers[]
object
A list of recent device users, in descending order, by last login time.
recentUsers[].type
string
The type of the user.
Acceptable values are:
USER_TYPE_MANAGED : The user is managed by the domain.
USER_TYPE_UNMANAGED : The user is not managed by the domain.
recentUsers[].email
string
The user's email address. This is only present if the user type is USER_TYPE_MANAGED .
activeTimeRanges[]
object
A list of active time ranges (Read-only).
activeTimeRanges[].activeTime
integer
Duration of usage in milliseconds.
activeTimeRanges[].date
string
Date of usage.
ethernetMacAddress
string
The device's MAC address on the ethernet network interface.
annotatedAssetId
string
The asset identifier as noted by an administrator or specified during enrollment.
etag
string
ETag of the resource.
diskVolumeReports[]
object
Reports of disk space and other info about mounted/connected volumes.
diskVolumeReports[].volumeInfo[]
object
Disk volumes
diskVolumeReports[].volumeInfo[].volumeId
string
Volume id
diskVolumeReports[].volumeInfo[].storageTotal
string ( int64 format)
Total disk space [in bytes]
diskVolumeReports[].volumeInfo[].storageFree
string ( int64 format)
Free disk space [in bytes]
systemRamTotal
string ( int64 format)
Total RAM on the device in bytes
cpuStatusReports[]
object
Reports of CPU utilization and temperature (Read-only)
cpuStatusReports[].reportTime
string
Date and time the report was received.
cpuStatusReports[].cpuUtilizationPercentageInfo[]
integer
cpuStatusReports[].cpuTemperatureInfo[]
object
A list of CPU temperature samples.
cpuStatusReports[].cpuTemperatureInfo[].temperature
integer
Temperature in Celsius degrees.
cpuStatusReports[].cpuTemperatureInfo[].label
string
CPU label
cpuInfo[]
object
Information regarding CPU specs in the device.
cpuInfo[].model
string
The CPU model name.
cpuInfo[].architecture
string
The CPU architecture.
cpuInfo[].maxClockSpeedKhz
integer
The max CPU clock speed in kHz.
cpuInfo[].logicalCpus[]
object
Information for the Logical CPUs
cpuInfo[].logicalCpus[].maxScalingFrequencyKhz
integer
Maximum frequency the CPU is allowed to run at, by policy.
cpuInfo[].logicalCpus[].currentScalingFrequencyKhz
integer
Current frequency the CPU is running at.
cpuInfo[].logicalCpus[].idleDuration
string ( Duration format)
Idle time since last boot.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
cpuInfo[].logicalCpus[].cStates[]
object
C-States indicate the power consumption state of the CPU. For more information look at documentation published by the CPU maker.
cpuInfo[].logicalCpus[].cStates[].displayName
string
Name of the state.
cpuInfo[].logicalCpus[].cStates[].sessionDuration
string ( Duration format)
Time spent in the state since the last reboot.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
deviceFiles[]
object
A list of device files to download (Read-only)
deviceFiles[].name
string
File name
deviceFiles[].type
string
File type
deviceFiles[].downloadUrl
string
File download URL
deviceFiles[].createTime
string
Date and time the file was created
systemRamFreeReports[]
object
Reports of amounts of available RAM memory (Read-only)
systemRamFreeReports[].reportTime
string
Date and time the report was received.
systemRamFreeReports[].systemRamFreeInfo[]
string ( int64 format)
lastKnownNetwork[]
object
Contains last known network (Read-only)
lastKnownNetwork[].ipAddress
string
The IP address.
lastKnownNetwork[].wanIpAddress
string
The WAN IP address.
autoUpdateExpiration (deprecated)
string ( int64 format)
This item is deprecated!
(Read-only) The timestamp after which the device will stop receiving Chrome updates or support. Please use "autoUpdateThrough" instead.
ethernetMacAddress0
string
(Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.
dockMacAddress
string
(Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.
manufactureDate
string
(Read-only) The date the device was manufactured in yyyy-mm-dd format.
orgUnitPath
string
The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, / . This property can be updated using the API. For more information about how to create an organizational structure for your device, see the administration help center .
tpmVersionInfo
object
Trusted Platform Module (TPM) (Read-only)
tpmVersionInfo.family
string
TPM family. We use the TPM 2.0 style encoding, e.g.: TPM 1.2: "1.2" -> 312e3200 TPM 2.0: "2.0" -> 322e3000
tpmVersionInfo.specLevel
string
TPM specification level. See Library Specification for TPM 2.0 and Main Specification for TPM 1.2.
tpmVersionInfo.manufacturer
string
TPM manufacturer code.
tpmVersionInfo.tpmModel
string
TPM model number.
tpmVersionInfo.firmwareVersion
string
TPM firmware version.
tpmVersionInfo.vendorSpecific
string
Vendor-specific information such as Vendor ID.
screenshotFiles[]
object
A list of screenshot files to download. Type is always "SCREENSHOT_FILE". (Read-only)
screenshotFiles[].name
string
File name
screenshotFiles[].type
string
File type
screenshotFiles[].downloadUrl
string
File download URL
screenshotFiles[].createTime
string
Date and time the file was created
orgUnitId
string
The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be updated using the API. For more information about how to create an organizational structure for your device, see the administration help center .
osUpdateStatus
object ( OsUpdateStatus )
The status of the OS updates for the device.
firstEnrollmentTime
string
Date and time for the first time the device was enrolled.
lastDeprovisionTimestamp
string
(Read-only) Date and time for the last deprovision of the device.
deprovisionReason
enum ( DeprovisionReason )
(Read-only) Deprovision reason.
deviceLicenseType
enum ( DeviceLicenseType )
Output only. Device license type.
backlightInfo[]
object ( BacklightInfo )
Output only. Contains backlight information for the device.
autoUpdateThrough
string
Output only. The timestamp after which the device will stop receiving Chrome updates or support.
extendedSupportEligible
boolean
Output only. Whether or not the device requires the extended support opt in.
extendedSupportStart
string
Output only. Date of the device when extended support policy for automatic updates starts.
extendedSupportEnabled
boolean
Output only. Whether extended support policy is enabled on the device.
fanInfo[]
object ( FanInfo )
Output only. Fan information for the device.
chromeOsType
enum ( ChromeOsType )
Output only. Chrome OS type of the device.
diskSpaceUsage
object ( ByteUsage )
Output only. How much disk space the device has available and is currently using.
osVersionCompliance
enum ( Compliance )
Output only. Device policy compliance status of the OS version.
bluetoothAdapterInfo[]
object ( BluetoothAdapterInfo )
Output only. Information about Bluetooth adapters of the device.
OsUpdateStatus
Contains information regarding the current OS update status.
JSON representation
{
"state" : enum ( UpdateState ) ,
"targetOsVersion" : string ,
"targetKioskAppVersion" : string ,
"updateTime" : string ,
"updateCheckTime" : string ,
"rebootTime" : string
}
Fields
state
enum ( UpdateState )
The update state of an OS update.
targetOsVersion
string
New platform version of the OS image being downloaded and applied. It is only set when update status is UPDATE_STATUS_DOWNLOAD_IN_PROGRESS or UPDATE_STATUS_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for UPDATE_STATUS_NEED_REBOOT for some edge cases, e.g. update engine is restarted without a reboot.
targetKioskAppVersion
string
New required platform version from the pending updated kiosk app.
updateTime
string
Date and time of the last successful OS update.
updateCheckTime
string
Date and time of the last update check.
rebootTime
string
Date and time of the last reboot.
UpdateState
The update state of an OS update.
Enums
UPDATE_STATE_UNSPECIFIED
The update state is unspecified.
UPDATE_STATE_NOT_STARTED
There is an update pending but it hasn't started.
UPDATE_STATE_DOWNLOAD_IN_PROGRESS
The pending update is being downloaded.
UPDATE_STATE_NEED_REBOOT
The device is ready to install the update, but must reboot.
DeprovisionReason
The reason for the deprovision of a ChromeOS device.
Enums
DEPROVISION_REASON_UNSPECIFIED
The deprovision reason is unknown.
DEPROVISION_REASON_SAME_MODEL_REPLACEMENT
Same model replacement. You have return materials authorization (RMA) or you are replacing a malfunctioning device under warranty with the same device model.
DEPROVISION_REASON_UPGRADE
The device was upgraded.
This item is deprecated!
DEPROVISION_REASON_DOMAIN_MOVE
The device's domain was changed.
This item is deprecated!
DEPROVISION_REASON_SERVICE_EXPIRATION
Service expired for the device.
This item is deprecated!
DEPROVISION_REASON_OTHER
The device was deprovisioned for a legacy reason that is no longer supported.
This item is deprecated!
DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT
Different model replacement. You are replacing this device with an upgraded or newer device model.
DEPROVISION_REASON_RETIRING_DEVICE
Retiring from fleet. You are donating, discarding, or otherwise removing the device from use.
DEPROVISION_REASON_UPGRADE_TRANSFER
ChromeOS Flex upgrade transfer. This is a ChromeOS Flex device that you are replacing with a Chromebook within a year.
DEPROVISION_REASON_NOT_REQUIRED
A reason was not required. For example, the licenses were returned to the customer's license pool.
DEPROVISION_REASON_REPAIR_CENTER
The device was deprovisioned by the Repair Service Center. Can only be set by Repair Service Center during RMA.
DeviceLicenseType
The license type of this device.
Enums
DEVICE_LICENSE_TYPE_UNSPECIFIED
The license type is unknown.
ENTERPRISE
The device is bundled with a perpetual Chrome Enterprise Upgrade.
ENTERPRISE_UPGRADE
The device has an annual standalone Chrome Enterprise Upgrade.
This item is deprecated!
EDUCATION_UPGRADE
The device has a perpetual standalone Chrome Education Upgrade.
This item is deprecated!
EDUCATION
The device is bundled with a perpetual Chrome Education Upgrade.
KIOSK_UPGRADE
The device has an annual Kiosk Upgrade.
ENTERPRISE_UPGRADE_PERPETUAL
Indicates that the device is consuming a standalone, perpetual Chrome Enterprise Upgrade, a Chrome Enterprise license.
ENTERPRISE_UPGRADE_FIXED_TERM
Indicates that the device is consuming a standalone, fixed-term Chrome Enterprise Upgrade, a Chrome Enterprise license.
EDUCATION_UPGRADE_PERPETUAL
Indicates that the device is consuming a standalone, perpetual Chrome Education Upgrade(AKA Chrome EDU perpetual license).
EDUCATION_UPGRADE_FIXED_TERM
Indicates that the device is consuming a standalone, fixed-term Chrome Education Upgrade(AKA Chrome EDU fixed-term license).
BacklightInfo
Information about the device's backlights.
JSON representation
{
"path" : string ,
"maxBrightness" : integer ,
"brightness" : integer
}
Fields
path
string
Output only. Path to this backlight on the system. Useful if the caller needs to correlate with other information.
maxBrightness
integer
Output only. Maximum brightness for the backlight.
brightness
integer
Output only. Current brightness of the backlight, between 0 and maxBrightness.
FanInfo
Information about the device's fan.
JSON representation
{
"speedRpm" : integer
}
Fields
speedRpm
integer
Output only. Fan speed in RPM.
ChromeOsType
Chrome OS type of the device.
Enums
CHROME_OS_TYPE_UNSPECIFIED
Chrome OS Type unspecified.
CHROME_OS_FLEX
Chrome OS Type Chrome OS Flex.
CHROME_OS
Chrome OS Type Chrome OS.
ByteUsage
Represents a data capacity with some amount of current usage in bytes.
JSON representation
{
"capacityBytes" : string ,
"usedBytes" : string
}
Fields
capacityBytes
string ( int64 format)
Output only. The total capacity value, in bytes.
usedBytes
string ( int64 format)
Output only. The current usage value, in bytes.
Compliance
Device policy compliance status of the OS version.
Enums
COMPLIANCE_UNSPECIFIED
Compliance status unspecified.
COMPLIANT
Compliance status compliant.
PENDING
Compliance status pending.
NOT_COMPLIANT
Compliance status not compliant.
BluetoothAdapterInfo
Information about a device's Bluetooth adapter.
JSON representation
{
"address" : string ,
"numConnectedDevices" : integer
}
Fields
address
string
Output only. The MAC address of the adapter.
numConnectedDevices
integer
Output only. The number of devices connected to this adapter.
Methods
action (deprecated)
Use BatchChangeChromeOsDeviceStatus instead.
get
Retrieves a Chrome OS device's properties.
list
Retrieves a paginated list of Chrome OS devices within an account.
moveDevicesToOu
Moves or inserts multiple Chrome OS devices to an organizational unit.
patch
Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
update
Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-07 UTC."],[],[]]
