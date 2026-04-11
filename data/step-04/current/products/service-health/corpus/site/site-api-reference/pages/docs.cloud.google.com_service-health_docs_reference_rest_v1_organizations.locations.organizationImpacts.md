---
title: "REST Resource: organizations.locations.organizationImpacts \_|\_ Personalized\
  \ Service Health \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/reference/rest/v1/organizations.locations.organizationImpacts
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/reference/rest/v1/organizations.locations.organizationImpacts
  title: "REST Resource: organizations.locations.organizationImpacts \_|\_ Personalized\
    \ Service Health \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Personalized Service Health
Reference
Send feedback
REST Resource: organizations.locations.organizationImpacts
Stay organized with collections
Save and categorize content based on your preferences.
Resource: OrganizationImpact
JSON representation
Asset
JSON representation
Methods
Resource: OrganizationImpact
Represents impact to assets at organizational level. It is a read-only view and does not allow any modifications.
JSON representation
{
"name" : string ,
"events" : [
string
] ,
"asset" : {
object ( Asset )
} ,
"updateTime" : string
}
Fields
name
string
Output only. Identifier. Unique name of the organization impact in this scope including organization and location using the form organizations/{organization_id}/locations/{location}/organizationImpacts/{organization_impact_id} .
organization_id - ID (number) of the organization that contains the event. To get your organization_id , see Getting your organization resource ID . organization_impact_id - ID of the OrganizationImpact resource .
events[]
string
Output only. A list of event names impacting the asset.
asset
object ( Asset )
Output only. Google Cloud asset possibly impacted by the specified events.
updateTime
string ( Timestamp format)
Output only. The time when the affected project was last modified.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
Asset
Represents the asset impacted by the events.
JSON representation
{
"assetName" : string ,
"assetType" : string
}
Fields
assetName
string
Output only. Full name of the resource as defined in Resource Names .
assetType
string
Output only. Type of the asset. Example: "cloudresourcemanager.googleapis.com/Project"
Methods
get
Retrieves a resource containing information about impact to an asset under an organization affected by a service health event.
list
Lists assets impacted by organization events under a given organization and location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
