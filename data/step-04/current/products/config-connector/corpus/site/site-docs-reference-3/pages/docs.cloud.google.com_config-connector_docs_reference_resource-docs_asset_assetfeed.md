---
title: "AssetFeed \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/asset/assetfeed
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/asset/assetfeed
  title: "AssetFeed \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
API and reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
AssetFeed
Property
Value
Google Cloud Service Name
Cloud Asset Inventory
Google Cloud Service Documentation
/asset-inventory/docs/
Google Cloud REST Resource Name
v1.feeds
Google Cloud REST Resource Documentation
/asset-inventory/docs/reference/rest/v1/feeds
Config Connector Resource Short Names
gcpassetfeed gcpassetfeeds assetfeed
Config Connector Service Name
cloudasset.googleapis.com
Config Connector Resource Fully Qualified Name
assetfeeds.asset.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
assetNames :
- string
assetTypes :
- string
condition :
description : string
expression : string
location : string
title : string
contentType : string
feedOutputConfig :
pubsubDestination :
topicRef :
external : string
name : string
namespace : string
folderRef :
external : string
name : string
namespace : string
organizationRef :
external : string
projectRef :
external : string
kind : string
name : string
namespace : string
relationshipTypes :
- string
resourceID : string
Fields
assetNames
Optional
list (string)
A list of the full names of the assets to receive updates. You must specify either or both of asset_names and asset_types. Only asset updates matching specified asset_names or asset_types are exported to the feed. Example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1 . For a list of the full names for supported asset types, see Resource name format .
assetNames[]
Optional
string
assetTypes
Optional
list (string)
A list of types of the assets to receive updates. You must specify either
or both of asset_names and asset_types. Only asset updates matching
specified asset_names or asset_types are exported to the feed.
Example: `"compute.googleapis.com/Disk"`
For a list of all supported asset types, see
Supported asset types .
assetTypes[]
Optional
string
condition
Optional
object
A condition which determines whether an asset update should be published.
If specified, an asset will be returned only when the expression evaluates
to true.
When set, expression field in the Expr must be a valid CEL expression on a TemporalAsset with name
temporal_asset . Example: a Feed with expression ("temporal_asset.deleted
== true") will only publish Asset deletions. Other fields of Expr are
optional.
See our user
guide for detailed instructions.
condition.description
Optional
string
Optional. Description of the expression. This is a longer text which describes the expression, for example when hovered over it in a UI.
condition.expression
Optional
string
Textual representation of an expression in Common Expression Language syntax.
condition.location
Optional
string
Optional. String indicating the location of the expression for error reporting, for example a file name and a position in the file.
condition.title
Optional
string
Optional. Title for the expression. This can be used for example in UIs which allow to enter the expression.
contentType
Optional
string
Asset content type. If not specified, no content but the asset name and type will be returned.
feedOutputConfig
Required
object
Required. Feed output configuration defining where the asset updates are published to.
feedOutputConfig.pubsubDestination
Optional
object
Destination on Pub/Sub.
feedOutputConfig.pubsubDestination.topicRef
Optional
object
The name of the Pub/Sub topic to publish to. Example: projects/PROJECT_ID/topics/TOPIC_ID .
feedOutputConfig.pubsubDestination.topicRef.external
Optional
string
A reference to an externally managed PubSubTopic resource. The full name of the externally managed PubSubTopic resource. Use the format "projects/{{projectID}}/topics/{{topicID}}".
feedOutputConfig.pubsubDestination.topicRef.name
Optional
string
The name of a PubSubTopic resource.
feedOutputConfig.pubsubDestination.topicRef.namespace
Optional
string
The namespace of a PubSubTopic resource.
folderRef
Optional
object
FolderRef represents the Folder that this resource belongs to.
folderRef.external
Optional
string
The 'name' field of a folder, when not managed by Config Connector. This field must be set when 'name' field is not set.
folderRef.name
Optional
string
The 'name' field of a 'Folder' resource. This field must be set when 'external' field is not set.
folderRef.namespace
Optional
string
The 'namespace' field of a 'Folder' resource. If unset, the namespace is defaulted to the namespace of the referencer resource.
organizationRef
Optional
object
OrganizationRef represents the Organization that this resource belongs to.
organizationRef.external
Required
string
Required when the `organizationRef` field is specified. The 'name' field of an organization, when not managed by Config Connector.
projectRef
Optional
object
The Project that this resource belongs to.
projectRef.external
Optional
string
The `projectID` field of a project, when not managed by Config Connector.
projectRef.kind
Optional
string
The kind of the Project resource; optional but must be `Project` if provided.
projectRef.name
Optional
string
The `name` field of a `Project` resource.
projectRef.namespace
Optional
string
The `namespace` field of a `Project` resource.
relationshipTypes
Optional
list (string)
A list of relationship types to output, for example: INSTANCE_TO_INSTANCEGROUP . This field should only be specified if contentType is RELATIONSHIP . If specified: it outputs specified relationship updates on assetNames or assetTypes . It returns an error if any of relationshipTypes doesn't belong to the supported relationship types of assetNames or assetTypes , or any of assetNames or assetTypes doesn't belong to the source types of relationshipTypes . Otherwise: it outputs the supported relationships of the types of assetNames and assetTypes or returns an error if any of assetNames or assetTypes has no relationship support. See Introduction to Cloud Asset Inventory for all supported asset types and relationship types.
relationshipTypes[]
Optional
string
resourceID
Optional
string
The AssetFeed name. If not given, the metadata.name will be used.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
externalRef : string
observedGeneration : integer
Fields
conditions
list (object)
Conditions represent the latest available observations of the object's current state.
conditions[]
object
conditions[].lastTransitionTime
string
Last time the condition transitioned from one status to another.
conditions[].message
string
Human-readable message indicating details about last transition.
conditions[].reason
string
Unique, one-word, CamelCase reason for the condition's last transition.
conditions[].status
string
Status is the status of the condition. Can be True, False, Unknown.
conditions[].type
string
Type is the type of the condition.
externalRef
string
A unique specifier for the AssetFeed resource in Google Cloud.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
