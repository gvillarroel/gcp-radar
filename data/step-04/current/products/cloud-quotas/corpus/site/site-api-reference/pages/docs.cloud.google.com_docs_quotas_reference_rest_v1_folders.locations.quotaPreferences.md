---
title: "REST Resource: folders.locations.quotaPreferences \_|\_ Cloud Quotas \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.quotaPreferences
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.quotaPreferences
  title: "REST Resource: folders.locations.quotaPreferences \_|\_ Cloud Quotas \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Cloud Quotas
Reference
Send feedback
REST Resource: folders.locations.quotaPreferences
Stay organized with collections
Save and categorize content based on your preferences.
Resource: QuotaPreference
JSON representation
QuotaConfig
JSON representation
Origin
Methods
Resource: QuotaPreference
QuotaPreference represents the preferred quota configuration specified for a project, folder or organization. There is only one QuotaPreference resource for a quota value targeting a unique set of dimensions.
JSON representation
{
"name" : string ,
"dimensions" : {
string : string ,
...
} ,
"quotaConfig" : {
object ( QuotaConfig )
} ,
"etag" : string ,
"createTime" : string ,
"updateTime" : string ,
"service" : string ,
"quotaId" : string ,
"reconciling" : boolean ,
"justification" : string ,
"contactEmail" : string
}
Fields
name
string
Required except in the CREATE requests. The resource name of the quota preference. The path that follows /locations must be /global . For example: projects/123/locations/global/quotaPreferences/my-config-for-us-east1
dimensions
map (key: string, value: string)
Immutable. The dimensions that this quota preference applies to. The key of the map entry is the name of a dimension, such as region , zone , network_id , and the value of the map entry is the dimension value.
If a dimension is missing from the map of dimensions, the quota preference applies to all the dimension values except for those that have other quota preferences configured for the specific value.
Note: QuotaPreferences can only be applied across all values of user and resource dimension. Do not set values for user or resource in the dimension map.
For example: {"provider" : "Example Organization"} where provider is a service-specific quota dimension and Example Organization is the provider name.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
quotaConfig
object ( QuotaConfig )
Required. Preferred quota configuration.
etag
string
Optional. The current etag of the quota preference. If an etag is provided on update and does not match the current server's etag of the quota preference, the request will be blocked and an ABORTED error will be returned. See https://google.aip.dev/134#etags for more details on etags.
createTime
string ( Timestamp format)
Output only. Create time stamp
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. Update time stamp
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
service
string
Required. The name of the service to which the quota preference is applied.
quotaId
string
Required. The id of the quota to which the quota preference is applied. A quota name is unique in the service. For example, CpusPerProjectPerRegion
reconciling
boolean
Output only. Is the quota preference pending Google Cloud approval and fulfillment.
justification
string
The reason / justification for this quota preference.
contactEmail
string
Input only. An email address that can be used to contact the user, in case Google Cloud needs more information to make a decision before additional quota can be granted.
When requesting a quota increase, the email address is required. When requesting a quota decrease, the email address is optional. For example, the email address is optional when the QuotaConfig.preferred_value is smaller than the QuotaDetails.reset_value .
QuotaConfig
The preferred quota configuration.
JSON representation
{
"preferredValue" : string ,
"stateDetail" : string ,
"grantedValue" : string ,
"traceId" : string ,
"annotations" : {
string : string ,
...
} ,
"requestOrigin" : enum ( Origin )
}
Fields
preferredValue
string ( int64 format)
Required. The preferred value. Must be greater than or equal to -1. If set to -1, it means the value is "unlimited".
stateDetail
string
Output only. Optional details about the state of this quota preference.
grantedValue
string ( Int64Value format)
Output only. Granted quota value.
traceId
string
Output only. The trace id that the Google Cloud uses to provision the requested quota. This trace id may be used by the client to contact Cloud support to track the state of a quota preference request. The trace id is only produced for increase requests and is unique for each request. The quota decrease requests do not have a trace id.
annotations
map (key: string, value: string)
Optional. The annotations map for clients to store small amounts of arbitrary data. Do not put PII or other sensitive information here. See https://google.aip.dev/128#annotations
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
requestOrigin
enum ( Origin )
Output only. The origin of the quota preference request.
Origin
The enumeration of the origins of quota preference requests.
Enums
ORIGIN_UNSPECIFIED
The unspecified value.
CLOUD_CONSOLE
Created through Cloud Console.
AUTO_ADJUSTER
Generated by automatic quota adjustment.
Methods
create
Creates a new QuotaPreference that declares the desired value for a quota.
get
Gets details of a single QuotaPreference.
list
Lists QuotaPreferences in a given project, folder or organization.
patch
Updates the parameters of a single QuotaPreference.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
