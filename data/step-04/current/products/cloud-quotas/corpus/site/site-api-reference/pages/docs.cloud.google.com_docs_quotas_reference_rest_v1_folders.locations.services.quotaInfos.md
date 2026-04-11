---
title: "REST Resource: folders.locations.services.quotaInfos \_|\_ Cloud Quotas \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.services.quotaInfos
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.services.quotaInfos
  title: "REST Resource: folders.locations.services.quotaInfos \_|\_ Cloud Quotas\
    \ \_|\_ Google Cloud Documentation"
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
REST Resource: folders.locations.services.quotaInfos
Stay organized with collections
Save and categorize content based on your preferences.
Resource: QuotaInfo
JSON representation
ContainerType
QuotaIncreaseEligibility
JSON representation
IneligibilityReason
DimensionsInfo
JSON representation
QuotaDetails
JSON representation
RolloutInfo
JSON representation
Methods
Resource: QuotaInfo
QuotaInfo represents information about a particular quota for a given project, folder or organization.
JSON representation
{
"name" : string ,
"quotaId" : string ,
"metric" : string ,
"service" : string ,
"isPrecise" : boolean ,
"refreshInterval" : string ,
"containerType" : enum ( ContainerType ) ,
"dimensions" : [
string
] ,
"metricDisplayName" : string ,
"quotaDisplayName" : string ,
"metricUnit" : string ,
"quotaIncreaseEligibility" : {
object ( QuotaIncreaseEligibility )
} ,
"isFixed" : boolean ,
"dimensionsInfos" : [
{
object ( DimensionsInfo )
}
] ,
"isConcurrent" : boolean ,
"serviceRequestQuotaUri" : string
}
Fields
name
string
Resource name of this QuotaInfo. The ID component following "locations/" must be "global". For example, projects/123/locations/global/services/compute.googleapis.com/quotaInfos/CpusPerProjectPerRegion
quotaId
string
The id of the quota, which is unique within the service. For example, CpusPerProjectPerRegion
metric
string
The metric of the quota. It specifies the resources consumption the quota is defined for. For example, compute.googleapis.com/cpus
service
string
The name of the service in which the quota is defined. For example, compute.googleapis.com
isPrecise
boolean
Whether this is a precise quota. A precise quota is tracked with absolute precision. In contrast, an imprecise quota is not tracked with precision.
refreshInterval
string
The reset time interval for the quota. Refresh interval applies to rate quota only. For example, "minute" for per minute, "day" for per day, or "10 seconds" for every 10 seconds.
containerType
enum ( ContainerType )
The container type of the QuotaInfo.
dimensions[]
string
The dimensions the quota is defined on.
metricDisplayName
string
The display name of the quota metric
quotaDisplayName
string
The display name of the quota.
metricUnit
string
The unit in which the metric value is reported, e.g., "MByte".
quotaIncreaseEligibility
object ( QuotaIncreaseEligibility )
Whether it is eligible to request a higher quota value for this quota.
isFixed
boolean
Whether the quota value is fixed or adjustable
dimensionsInfos[]
object ( DimensionsInfo )
The collection of dimensions info ordered by their dimensions from more specific ones to less specific ones.
isConcurrent
boolean
Whether the quota is a concurrent quota. Concurrent quotas are enforced on the total number of concurrent operations in flight at any given time.
serviceRequestQuotaUri
string
URI to the page where users can request more quota for the cloud service—for example, https://console.cloud.google.com/iam-admin/quotas .
ContainerType
The enumeration of the types of a cloud resource container.
Enums
CONTAINER_TYPE_UNSPECIFIED
Unspecified container type.
PROJECT
consumer project
FOLDER
folder
ORGANIZATION
organization
QuotaIncreaseEligibility
Eligibility information regarding requesting increase adjustment of a quota.
JSON representation
{
"isEligible" : boolean ,
"ineligibilityReason" : enum ( IneligibilityReason )
}
Fields
isEligible
boolean
Whether a higher quota value can be requested for the quota.
ineligibilityReason
enum ( IneligibilityReason )
The reason of why it is ineligible to request increased value of the quota. If the isEligible field is true, it defaults to INELIGIBILITY_REASON_UNSPECIFIED.
IneligibilityReason
The enumeration of reasons when it is ineligible to request increase adjustment.
Enums
INELIGIBILITY_REASON_UNSPECIFIED
Default value when isEligible is true.
NO_VALID_BILLING_ACCOUNT
The container is not linked with a valid billing account.
NOT_SUPPORTED
Quota increase is not supported for the quota.
NOT_ENOUGH_USAGE_HISTORY
There is not enough usage history to determine the eligibility.
OTHER
Other reasons.
DimensionsInfo
The detailed quota information such as effective quota value for a combination of dimensions.
JSON representation
{
"dimensions" : {
string : string ,
...
} ,
"details" : {
object ( QuotaDetails )
} ,
"applicableLocations" : [
string
]
}
Fields
dimensions
map (key: string, value: string)
The map of dimensions in key-value pairs. The key of a map entry is "region", "zone", or the name of a service-specific dimension, and the value of a map entry is the value of the dimension. If a dimension does not appear in the map of dimensions, the dimensions info applies to all the dimension values except for those that have another DimensionInfo instance configured for the specific value. For example: {"provider" : "Example Organization"} where provider is a service-specific quota dimension and Example Organization is the provider name.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
details
object ( QuotaDetails )
Quota details for the specified dimensions.
applicableLocations[]
string
The applicable regions or zones of this dimension. The field is set to ['global'] for quotas that are not per region or per zone. Otherwise, it will be set to the list of locations this dimension info is applicable to.
QuotaDetails
The quota details for a map of dimensions.
JSON representation
{
"value" : string ,
"rolloutInfo" : {
object ( RolloutInfo )
}
}
Fields
value
string ( int64 format)
The value currently in effect and being enforced.
rolloutInfo
object ( RolloutInfo )
Rollout information of this quota. This field is present only if the effective limit will change due to the ongoing rollout of the service config.
RolloutInfo
[Output only] Rollout information of a quota.
JSON representation
{
"ongoingRollout" : boolean
}
Fields
ongoingRollout
boolean
Whether there is an ongoing rollout for a quota or not.
Methods
get
Retrieve the QuotaInfo of a quota for a project, folder or organization.
list
Lists QuotaInfos of all quotas for a given project, folder or organization.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-21 UTC."],[],[]]
