---
title: "Assured Workloads \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/Workload
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/Workload
  title: "Assured Workloads \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workloads control packages have changed. For information about the name change, see Control package renaming notice .
Home
Documentation
Security
Assured Workloads
Reference
Send feedback
Workload
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
ResourceInfo
JSON representation
KMSSettings
JSON representation
ResourceSettings
JSON representation
SaaEnrollmentResponse
JSON representation
ComplianceStatus
JSON representation
EkmProvisioningResponse
JSON representation
WorkloadOptions
JSON representation
A Workload object for managing highly regulated workloads of cloud customers.
JSON representation
{
"name" : string ,
"displayName" : string ,
"resources" : [
{
object ( ResourceInfo )
}
] ,
"complianceRegime" : enum ( ComplianceRegime ) ,
"createTime" : string ,
"billingAccount" : string ,
"etag" : string ,
"labels" : {
string : string ,
...
} ,
"provisionedResourcesParent" : string ,
"kmsSettings" : {
object ( KMSSettings )
} ,
"resourceSettings" : [
{
object ( ResourceSettings )
}
] ,
"kajEnrollmentState" : enum ( KajEnrollmentState ) ,
"enableSovereignControls" : boolean ,
"saaEnrollmentResponse" : {
object ( SaaEnrollmentResponse )
} ,
"complianceStatus" : {
object ( ComplianceStatus )
} ,
"compliantButDisallowedServices" : [
string
] ,
"partner" : enum ( Partner ) ,
"partnerPermissions" : {
object ( PartnerPermissions )
} ,
"partnerServicesBillingAccount" : string ,
"ekmProvisioningResponse" : {
object ( EkmProvisioningResponse )
} ,
"workloadOptions" : {
object ( WorkloadOptions )
} ,
"violationNotificationsEnabled" : boolean
}
Fields
name
string
Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload}
Read-only.
displayName
string
Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces.
Example: My Workload
resources[]
object ( ResourceInfo )
Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only.
complianceRegime
enum ( ComplianceRegime )
Required. Immutable. Compliance Regime associated with this workload.
createTime
string ( Timestamp format)
Output only. Immutable. The Workload creation timestamp.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
billingAccount
string
Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form billingAccounts/{billing_account_id} . For example, billingAccounts/012345-567890-ABCDEF .
etag
string
Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.
labels
map (key: string, value: string)
Optional. Labels applied to the workload.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
provisionedResourcesParent
string
Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folderId}
kmsSettings (deprecated)
object ( KMSSettings )
This item is deprecated!
Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
resourceSettings[]
object ( ResourceSettings )
Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.
kajEnrollmentState
enum ( KajEnrollmentState )
Output only. Represents the KAJ enrollment state of the given workload.
enableSovereignControls
boolean
Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.
saaEnrollmentResponse
object ( SaaEnrollmentResponse )
Output only. Represents the SAA enrollment response of the given workload. SAA enrollment response is queried during GetWorkload call. In failure cases, user friendly error message is shown in SAA details page.
complianceStatus
object ( ComplianceStatus )
Output only. Count of active Violations in the Workload.
compliantButDisallowedServices[]
string
Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke RestrictAllowedResources endpoint to allow your project developers to use these services in their environment.
partner
enum ( Partner )
Optional. Partner regime associated with this workload.
partnerPermissions
object ( PartnerPermissions )
Optional. Permissions granted to the AW Partner SA account for the customer workload
partnerServicesBillingAccount
string
Optional. Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT/Telefonica partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC
ekmProvisioningResponse
object ( EkmProvisioningResponse )
Output only. Represents the Ekm Provisioning State of the given workload.
workloadOptions
object ( WorkloadOptions )
Optional. Options to be set for the given created workload.
violationNotificationsEnabled
boolean
Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored.
ResourceInfo
Represent the resources that are children of this Workload.
JSON representation
{
"resourceId" : string ,
"resourceType" : enum ( ResourceType )
}
Fields
resourceId
string ( int64 format)
Output only. Resource identifier. For a project this represents project_number.
resourceType
enum ( ResourceType )
Indicates the type of resource.
KMSSettings
This item is deprecated!
Settings specific to the Key Management Service. This message is deprecated. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
JSON representation
{
"nextRotationTime" : string ,
"rotationPeriod" : string
}
Fields
nextRotationTime
string ( Timestamp format)
Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
rotationPeriod
string ( Duration format)
Required. Input only. Immutable. [nextRotationTime] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
ResourceSettings
Represent the custom settings for the resources to be created.
JSON representation
{
"resourceId" : string ,
"resourceType" : enum ( ResourceType ) ,
"displayName" : string
}
Fields
resourceId
string
Optional. Resource identifier. For a project this represents projectId. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folderId is assigned by Google.
resourceType
enum ( ResourceType )
Indicates the type of resource. This field should be specified to correspond the id to the right resource type (CONSUMER_FOLDER or ENCRYPTION_KEYS_PROJECT)
displayName
string
User-assigned resource display name. If not empty it will be used to create a resource with the specified name.
SaaEnrollmentResponse
Signed Access Approvals (SAA) enrollment response.
JSON representation
{
"setupErrors" : [
enum ( SetupError )
] ,
"setupStatus" : enum ( SetupState )
}
Fields
setupErrors[]
enum ( SetupError )
Indicates SAA enrollment setup error if any.
setupStatus
enum ( SetupState )
Output only. Indicates SAA enrollment status of a given workload.
ComplianceStatus
Represents the Compliance Status of this workload
JSON representation
{
"activeViolationCount" : integer ,
"acknowledgedViolationCount" : integer
}
Fields
activeViolationCount
integer
Output only. Number of current orgPolicy violations which are not acknowledged.
acknowledgedViolationCount
integer
Output only. Number of current orgPolicy violations which are acknowledged.
EkmProvisioningResponse
External key management systems(EKM) Provisioning response
JSON representation
{
"ekmProvisioningState" : enum ( EkmProvisioningState ) ,
"ekmProvisioningErrorDomain" : enum ( EkmProvisioningErrorDomain ) ,
"ekmProvisioningErrorMapping" : enum ( EkmProvisioningErrorMapping )
}
Fields
ekmProvisioningState
enum ( EkmProvisioningState )
Output only. Indicates Ekm enrollment Provisioning of a given workload.
ekmProvisioningErrorDomain
enum ( EkmProvisioningErrorDomain )
Indicates Ekm provisioning error if any.
ekmProvisioningErrorMapping
enum ( EkmProvisioningErrorMapping )
Detailed error message if Ekm provisioning fails
WorkloadOptions
Options to be set for the given created workload.
JSON representation
{
"kajEnrollmentType" : enum ( KajEnrollmentType )
}
Fields
kajEnrollmentType
enum ( KajEnrollmentType )
Optional. Specifies type of KAJ Enrollment if provided.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-27 UTC."],[],[]]
