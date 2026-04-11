---
title: "Package types (4.2.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types
  title: "Package types (4.2.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Package types (4.2.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
4.2.0 (latest)
4.1.0
4.0.0
3.30.1
3.29.2
3.28.0
3.27.1
3.26.4
3.25.1
3.24.3
3.23.0
3.22.0
3.21.0
3.20.1
3.19.1
3.18.1
3.17.1
3.16.0
3.15.0
3.14.2
3.13.1
3.12.0
3.11.0
3.10.0
3.9.1
3.8.1
3.7.1
3.6.1
3.5.0
3.4.0
3.3.0
3.2.1
3.1.0
2.2.2
2.1.0
2.0.0
1.3.2
1.2.0
1.1.0
1.0.0
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.1
0.3.0
API documentation for asset_v1.types package.
Classes
AnalyzeIamPolicyLongrunningMetadata
Represents the metadata of the longrunning operation for the
AnalyzeIamPolicyLongrunning RPC.
AnalyzeIamPolicyLongrunningRequest
A request message for
AssetService.AnalyzeIamPolicyLongrunning .
AnalyzeIamPolicyLongrunningResponse
A response message for
AssetService.AnalyzeIamPolicyLongrunning .
AnalyzeIamPolicyRequest
A request message for
AssetService.AnalyzeIamPolicy .
AnalyzeIamPolicyResponse
A response message for
AssetService.AnalyzeIamPolicy .
AnalyzeMoveRequest
The request message for performing resource move analysis.
AnalyzeMoveResponse
The response message for resource move analysis.
AnalyzeOrgPoliciesRequest
A request message for
AssetService.AnalyzeOrgPolicies .
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AnalyzeOrgPoliciesResponse
The response message for
AssetService.AnalyzeOrgPolicies .
AnalyzeOrgPolicyGovernedAssetsRequest
A request message for
AssetService.AnalyzeOrgPolicyGovernedAssets .
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AnalyzeOrgPolicyGovernedAssetsResponse
The response message for
AssetService.AnalyzeOrgPolicyGovernedAssets .
AnalyzeOrgPolicyGovernedContainersRequest
A request message for
AssetService.AnalyzeOrgPolicyGovernedContainers .
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AnalyzeOrgPolicyGovernedContainersResponse
The response message for
AssetService.AnalyzeOrgPolicyGovernedContainers .
AnalyzerOrgPolicy
This organization policy message is a modified version of the
one defined in the Organization Policy system. This message
contains several fields defined in the original organization
policy with some new fields for analysis purpose.
AnalyzerOrgPolicyConstraint
The organization policy constraint definition.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Asset
An asset in Google Cloud. An asset can be any resource in the Google
Cloud resource
hierarchy <https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy> ,
a resource outside the Google Cloud resource hierarchy (such as
Google Kubernetes Engine clusters and objects), or a policy (e.g.
IAM policy), or a relationship (e.g. an INSTANCE_TO_INSTANCEGROUP
relationship). See Supported asset
types <https://cloud.google.com/asset-inventory/docs/supported-asset-types>
for more information.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AssetEnrichment
The enhanced metadata information for a resource.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AttachedResource
Attached resource representation, which is defined by the
corresponding service provider. It represents an attached
resource's payload.
BatchGetAssetsHistoryRequest
Batch get assets history request.
BatchGetAssetsHistoryResponse
Batch get assets history response.
BatchGetEffectiveIamPoliciesRequest
A request message for
AssetService.BatchGetEffectiveIamPolicies .
BatchGetEffectiveIamPoliciesResponse
A response message for
AssetService.BatchGetEffectiveIamPolicies .
BigQueryDestination
A BigQuery destination for exporting assets to.
ConditionEvaluation
The condition evaluation.
ContentType
Asset content type.
CreateFeedRequest
Create asset feed request.
CreateSavedQueryRequest
Request to create a saved query.
DeleteFeedRequest
DeleteSavedQueryRequest
Request to delete a saved query.
EffectiveTagDetails
The effective tags and the ancestor resources from which they
were inherited.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ExportAssetsRequest
Export asset request.
ExportAssetsResponse
The export asset response. This message is returned by the
google.longrunning.Operations.GetOperation][google.longrunning.Operations.GetOperation]
method in the returned
google.longrunning.Operation.response][google.longrunning.Operation.response]
field.
Feed
An asset feed used to export asset updates to a destinations.
An asset feed filter controls what updates are exported. The
asset feed must be created within a project, organization, or
folder. Supported destinations are:
Pub/Sub topics.
FeedOutputConfig
Output configuration for asset feed destination.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
GcsDestination
A Cloud Storage location.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
GcsOutputResult
A Cloud Storage output result.
GetFeedRequest
Get asset feed request.
GetSavedQueryRequest
Request to get a saved query.
IamPolicyAnalysisOutputConfig
Output configuration for export IAM policy analysis
destination.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
IamPolicyAnalysisQuery
IAM policy analysis query message.
IamPolicyAnalysisResult
IAM Policy analysis result, consisting of one IAM policy
binding and derived access control lists.
IamPolicyAnalysisState
Represents the detailed state of an entity under analysis,
such as a resource, an identity or an access.
IamPolicySearchResult
A result of IAM Policy search, containing information of an
IAM policy.
ListAssetsRequest
ListAssets request.
ListAssetsResponse
ListAssets response.
ListFeedsRequest
List asset feeds request.
ListFeedsResponse
ListSavedQueriesRequest
Request to list saved queries.
ListSavedQueriesResponse
Response of listing saved queries.
MoveAnalysis
A message to group the analysis information.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
MoveAnalysisResult
An analysis result including blockers and warnings.
MoveImpact
A message to group impacts of moving the target resource.
OutputConfig
Output configuration for export assets destination.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
OutputResult
Output result of export assets.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
PartitionSpec
Specifications of BigQuery partitioned table as export
destination.
PubsubDestination
A Pub/Sub destination.
QueryAssetsOutputConfig
Output configuration query assets.
QueryAssetsRequest
QueryAssets request.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
QueryAssetsResponse
QueryAssets response.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
QueryResult
Execution results of the query.
The result is formatted as rows represented by BigQuery compatible
[schema]. When pagination is necessary, it will contains the page
token to retrieve the results of following pages.
RelatedAsset
An asset identifier in Google Cloud which contains its name, type
and ancestors. An asset can be any resource in the Google Cloud
resource
hierarchy <https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy> ,
a resource outside the Google Cloud resource hierarchy (such as
Google Kubernetes Engine clusters and objects), or a policy (e.g.
IAM policy). See Supported asset
types <https://cloud.google.com/asset-inventory/docs/supported-asset-types>
for more information.
RelatedAssets
DEPRECATED. This message only presents for the purpose of
backward-compatibility. The server will never populate this message
in responses. The detailed related assets with the
relationship_type .
RelatedResource
The detailed related resource.
RelatedResources
The related resources of the primary resource.
RelationshipAttributes
DEPRECATED. This message only presents for the purpose of
backward-compatibility. The server will never populate this message
in responses. The relationship attributes which include type ,
source_resource_type , target_resource_type and action .
Resource
A representation of a Google Cloud resource.
ResourceOwners
The resource owners information.
ResourceSearchResult
A result of Resource Search, containing information of a
cloud resource.
SavedQuery
A saved query which can be shared with others or used later.
SearchAllIamPoliciesRequest
Search all IAM policies request.
SearchAllIamPoliciesResponse
Search all IAM policies response.
SearchAllResourcesRequest
Search all resources request.
SearchAllResourcesResponse
Search all resources response.
TableFieldSchema
A field in TableSchema.
TableSchema
BigQuery Compatible table schema.
Tag
The key and value for a
tag <https://cloud.google.com/resource-manager/docs/tags/tags-overview> __.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
TemporalAsset
An asset in Google Cloud and its temporal metadata, including
the time window when it was observed and its status during that
window.
TimeWindow
A time window specified by its start_time and end_time .
UpdateFeedRequest
Update asset feed request.
UpdateSavedQueryRequest
Request to update a saved query.
VersionedResource
Resource representation as defined by the corresponding
service providing the resource for a given API version.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
