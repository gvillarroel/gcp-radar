---
title: "REST Resource: projects.locations.configurations \_|\_ Compute Engine \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations
  title: "REST Resource: projects.locations.configurations \_|\_ Compute Engine \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
APIs & Reference
Send feedback
REST Resource: projects.locations.configurations
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Configuration
JSON representation
LicenseType
BillingInfo
JSON representation
UserCountBillingInfo
JSON representation
State
Methods
Resource: Configuration
Configuration for a Google SPLA product
JSON representation
{
"name" : string ,
"displayName" : string ,
"product" : string ,
"licenseType" : enum ( LicenseType ) ,
"currentBillingInfo" : {
object ( BillingInfo )
} ,
"nextBillingInfo" : {
object ( BillingInfo )
} ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"state" : enum ( State )
}
Fields
name
string
Identifier. name of resource
displayName
string
Required. User given name.
product
string
Required. Name field (with URL) of the Product offered for SPLA.
licenseType
enum ( LicenseType )
Required. LicenseType to be applied for billing
currentBillingInfo
object ( BillingInfo )
Required. Billing information applicable till end of the current month.
nextBillingInfo
object ( BillingInfo )
Required. Billing information applicable for next month.
createTime
string ( Timestamp format)
Output only. [Output only] Create time stamp
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. [Output only] Update time stamp
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. Labels as key value pairs
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
state
enum ( State )
Output only. State of the configuration.
LicenseType
Different types of licenses that are supported.
Enums
LICENSE_TYPE_UNSPECIFIED
unspecified.
LICENSE_TYPE_PER_MONTH_PER_USER
Billing will be based on number of users listed per month.
LICENSE_TYPE_BRING_YOUR_OWN_LICENSE
Bring your own license.
BillingInfo
Billing Information.
JSON representation
{
"startTime" : string ,
"endTime" : string ,
// Union field current_billing_info can be only one of the following:
"userCountBilling" : {
object ( UserCountBillingInfo )
}
// End of list of possible types for union field current_billing_info .
}
Fields
startTime
string ( Timestamp format)
Output only. When the billing starts.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
Output only. When the billing ends.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Union field current_billing_info . Billing information, depending on the license type. current_billing_info can be only one of the following:
userCountBilling
object ( UserCountBillingInfo )
This type of billing uses user count for computing total charge.
UserCountBillingInfo
This approach uses total unique user count for billing.
JSON representation
{
"userCount" : integer
}
Fields
userCount
integer
Required. Number of users to bill for.
State
State of the configuration.
Enums
STATE_UNSPECIFIED
The Status of the configuration is unspecified
STATE_ACTIVE
Configuration is in active state.
STATE_SUSPENDED
Configuration is in deactivated state.
STATE_DELETED
Configuration is in deleted state.
Methods
aggregateUsage
Aggregates Usage per Instance for a Configuration.
create
Creates a new Configuration in a given project and location.
deactivate
Deactivates the given configuration.
delete
Deletes a single Configuration.
get
Gets details of a single Configuration.
list
Lists Configurations in a given project and location.
patch
Updates the parameters of a single Configuration.
queryLicenseUsage
License Usage information for a Configuration.
reactivate
Reactivates the given configuration.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
