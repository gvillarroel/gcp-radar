---
title: "REST Resource: projects.locations.cloudLocations \_|\_ Cloud Location Finder\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/location-finder/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations
  title: "REST Resource: projects.locations.cloudLocations \_|\_ Cloud Location Finder\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Cloud Location Finder
Reference
Send feedback
REST Resource: projects.locations.cloudLocations
Stay organized with collections
Save and categorize content based on your preferences.
Resource: CloudLocation
JSON representation
CloudProvider
CloudLocationType
Methods
Resource: CloudLocation
Represents resource cloud locations.
JSON representation
{
"name" : string ,
"containingCloudLocation" : string ,
"displayName" : string ,
"cloudProvider" : enum ( CloudProvider ) ,
"territoryCode" : string ,
"cloudLocationType" : enum ( CloudLocationType ) ,
"carbonFreeEnergyPercentage" : number
}
Fields
name
string
Identifier. Name of the cloud location. Unique name of the cloud location including project and location using the form: projects/{projectId}/locations/{location}/cloudLocations/{cloudLocation}
containingCloudLocation
string
Output only. The containing cloud location in the strict nesting hierarchy. For example, the containing cloud location of a zone is a region.
displayName
string
Optional. The human-readable name of the cloud location. Example: us-east-2, us-east1.
cloudProvider
enum ( CloudProvider )
Optional. The provider of the cloud location. Values can be Google Cloud or third-party providers, including AWS, Azure, or Oracle Cloud Infrastructure.
territoryCode
string
Optional. The two-letter ISO 3166-1 alpha-2 code of the cloud location. Examples: US, JP, KR.
cloudLocationType
enum ( CloudLocationType )
Optional. The type of the cloud location.
carbonFreeEnergyPercentage
number
Optional. The carbon free energy percentage of the cloud location. This represents the average percentage of time customers' application will be running on carbon-free energy. See https://cloud.google.com/sustainability/region-carbon for more details. There is a difference between default value 0 and unset value. 0 means the carbon free energy percentage is 0%, while unset value means the carbon footprint data is not available.
CloudProvider
The type of the cloud provider. This enum lists all possible providers of cloud locations.
Enums
CLOUD_PROVIDER_UNSPECIFIED
Unspecified type.
CLOUD_PROVIDER_GCP
Cloud provider type for Google Cloud.
CLOUD_PROVIDER_AWS
Cloud provider type for AWS.
CLOUD_PROVIDER_AZURE
Cloud provider type for Azure.
CLOUD_PROVIDER_OCI
Cloud provider type for OCI.
CloudLocationType
The type of the cloud location. This enum lists all possible categories of cloud locations.
Enums
CLOUD_LOCATION_TYPE_UNSPECIFIED
Unspecified type.
CLOUD_LOCATION_TYPE_REGION
CloudLocation type for region.
CLOUD_LOCATION_TYPE_ZONE
CloudLocation type for zone.
CLOUD_LOCATION_TYPE_REGION_EXTENSION
CloudLocation type for region extension.
CLOUD_LOCATION_TYPE_GDCC_ZONE
CloudLocation type for Google Distributed Cloud Connected Zone.
Methods
get
Retrieves a resource containing information about a cloud location.
list
Lists cloud locations under a given project and location.
search
Searches for cloud locations from a given source location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-06 UTC."],[],[]]
