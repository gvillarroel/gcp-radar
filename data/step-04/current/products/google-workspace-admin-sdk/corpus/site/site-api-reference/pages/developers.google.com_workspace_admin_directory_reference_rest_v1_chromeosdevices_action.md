---
title: "Method: chromeosdevices.action \_|\_ Admin console \_|\_ Google for Developers"
url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/action
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/admin/directory/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/action
  title: "Method: chromeosdevices.action \_|\_ Admin console \_|\_ Google for Developers"
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
Method: chromeosdevices.action
Stay organized with collections
Save and categorize content based on your preferences.
This item is deprecated!
Use BatchChangeChromeOsDeviceStatus instead. Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. Warning:
Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled.
Lost or stolen devices should use the disable action.
Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the help center .
HTTP request
POST https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
customerId
string
The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the my_customer alias to represent your account's customerId . The customerId is also returned as part of the Users resource .
resourceId
string
The unique ID of the device. The resourceId s are returned in the response from the chromeosdevices.list method.
Request body
The request body contains an instance of ChromeOsDeviceAction .
Response body
If successful, the response is a generic HTTP response whose format is defined by the method.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/admin.directory.device.chromeos
For more information, see the Authorization guide .
ChromeOsDeviceAction
Data about an update to the status of a Chrome OS device.
JSON representation
{
"action" : string ,
"deprovisionReason" : string
}
Fields
action
string
chromeosdevices.action to be taken on the Chrome OS device.
Acceptable values are:
deprovision : Remove a device from management that is no longer active, being resold, or is being submitted for return / repair, use the deprovision action to dissociate it from management.
disable : If you believe a device in your organization has been lost or stolen, you can disable the device so that no one else can use it. When a device is disabled, all the user can see when turning on the Chrome device is a screen telling them that it’s been disabled, and your desired contact information of where to return the device. Note : Configuration of the message to appear on a disabled device must be completed within the Admin Console.
reenable : Re-enable a disabled device when a misplaced device is found or a lost device is returned. You can also use this feature if you accidentally mark a Chrome device as disabled. Note : The re-enable action can only be performed on devices marked as disabled.
pre_provisioned_disable : A pre-provisioned device that cannot enroll. An admin can re-enable the device to allow Zero-Touch Enrollment by changing the status to "pre_provisioned_reenable". Note : From this state the device can be deprovisioned.
pre_provisioned_reenable : Device is pre-provisioned by OEMs. Devices in this state are eligible for Zero-Touch Enrollment.
deprovisionReason
string
Only used when the action is deprovision. With the deprovision action, this field is required.
Note : The deprovision reason is audited because it might have implications on licenses for perpetual subscription customers.
Acceptable values are:
different_model_replacement : Use if you're upgrading or replacing your device with a newer model of the same device.
retiring_device : Use if you're reselling, donating, or permanently removing the device from use.
same_model_replacement : Use if a hardware issue was encountered on a device and it is being replaced with the same model or a like-model replacement from a repair vendor / manufacturer.
upgrade_transfer : Use if you're replacing your Cloud Ready devices with Chromebooks within one year.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
