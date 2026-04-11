---
title: "REST Resource: feeds \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/feeds
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/feeds
  title: "REST Resource: feeds \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Reference
Send feedback
REST Resource: feeds
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Feed
JSON representation
ContentType
FeedOutputConfig
JSON representation
PubsubDestination
JSON representation
Methods
Resource: Feed
An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics.
JSON representation
{
"name" : string ,
"assetNames" : [
string
] ,
"assetTypes" : [
string
] ,
"contentType" : enum ( ContentType ) ,
"feedOutputConfig" : {
object ( FeedOutputConfig )
} ,
"condition" : {
object ( Expr )
} ,
"relationshipTypes" : [
string
]
}
Fields
name
string
Required. The format will be projects/{projectNumber}/feeds/{client-assigned_feed_identifier} or folders/{folder_number}/feeds/{client-assigned_feed_identifier} or organizations/{organization_number}/feeds/{client-assigned_feed_identifier}
The client-assigned feed identifier must be unique within the parent project/folder/organization.
assetNames[]
string
A list of the full names of the assets to receive updates. You must specify either or both of assetNames and assetTypes. Only asset updates matching specified assetNames or assetTypes are exported to the feed. Example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1 . For a list of the full names for supported asset types, see Resource name format .
assetTypes[]
string
A list of types of the assets to receive updates. You must specify either or both of assetNames and assetTypes. Only asset updates matching specified assetNames or assetTypes are exported to the feed. Example: "compute.googleapis.com/Disk"
For a list of all supported asset types, see Supported asset types .
contentType
enum ( ContentType )
Asset content type. If not specified, no content but the asset name and type will be returned.
feedOutputConfig
object ( FeedOutputConfig )
Required. Feed output configuration defining where the asset updates are published to.
condition
object ( Expr )
A condition which determines whether an asset update should be published. If specified, an asset will be returned only when the expression evaluates to true. When set, expression field in the Expr must be a valid CEL expression on a TemporalAsset with name temporal_asset . Example: a Feed with expression ("temporal_asset.deleted == true") will only publish Asset deletions. Other fields of Expr are optional.
See our user guide for detailed instructions.
relationshipTypes[]
string
A list of relationship types to output, for example: INSTANCE_TO_INSTANCEGROUP . This field should only be specified if contentType=RELATIONSHIP. * If specified: it outputs specified relationship updates on the [assetNames] or the [assetTypes]. It returns an error if any of the [relationshipTypes] doesn't belong to the supported relationship types of the [assetNames] or [assetTypes], or any of the [assetNames] or the [assetTypes] doesn't belong to the source types of the [relationshipTypes]. * Otherwise: it outputs the supported relationships of the types of [assetNames] and [assetTypes] or returns an error if any of the [assetNames] or the [assetTypes] has no replationship support. See Introduction to Cloud Asset Inventory for all supported asset types and relationship types.
ContentType
Asset content type.
Enums
CONTENT_TYPE_UNSPECIFIED
Unspecified content type.
RESOURCE
Resource metadata.
IAM_POLICY
The actual IAM policy set on a resource.
ORG_POLICY
The organization policy set on an asset.
ACCESS_POLICY
The Access Context Manager policy set on an asset.
OS_INVENTORY
The runtime OS Inventory information.
RELATIONSHIP
The related resources.
FeedOutputConfig
Output configuration for asset feed destination.
JSON representation
{
// Union field destination can be only one of the following:
"pubsubDestination" : {
object ( PubsubDestination )
}
// End of list of possible types for union field destination .
}
Fields
Union field destination . Asset feed destination. destination can be only one of the following:
pubsubDestination
object ( PubsubDestination )
Destination on Pub/Sub.
PubsubDestination
A Pub/Sub destination.
JSON representation
{
"topic" : string
}
Fields
topic
string
The name of the Pub/Sub topic to publish to. Example: projects/PROJECT_ID/topics/TOPIC_ID .
Methods
create
Creates a feed in a parent project/folder/organization to listen to its asset updates.
delete
Deletes an asset feed.
get
Gets details about an asset feed.
list
Lists all asset feeds in a parent project/folder/organization.
patch
Updates an asset feed configuration.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-08 UTC."],[],[]]
