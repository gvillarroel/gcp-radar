---
title: "Types overview \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/googleapis/workflows/v1/Overview
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/googleapis/workflows/v1/Overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/googleapis/workflows/v1/Overview
  title: "Types overview \_|\_ Workflows \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Reference
Send feedback
Types overview
Stay organized with collections
Save and categorize content based on your preferences.
ListLocationsResponse
The response message for Locations.ListLocations.
Fields
locations[]
object ( Location )
A list of locations that matches the specified filter in the request.
nextPageToken
string
The standard List next-page token.
ListOperationsResponse
The response message for Operations.ListOperations.
Fields
nextPageToken
string
The standard List next-page token.
operations[]
object ( Operation )
A list of operations that matches the specified filter in the request.
ListWorkflowsResponse
Response for the ListWorkflows method.
Fields
nextPageToken
string
A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
unreachable[]
string
Unreachable resources.
workflows[]
object ( Workflow )
The workflows which match the request.
Location
A resource that represents Google Cloud Platform location.
Fields
displayName
string
The friendly name for this location, typically a nearby city name. For example, "Tokyo".
labels
map (key: string, value: string)
Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}
locationId
string
The canonical id for this location. For example: "us-east1" .
metadata
map (key: string, value: any)
Service-specific metadata. For example the available capacity at the given location.
name
string
Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"
Operation
This resource represents a long-running operation that is the result of a network API call.
Fields
done
boolean
If the value is false , it means the operation is still in progress. If true , the operation is completed, and either error or response is available.
error
object ( Status )
The error result of the operation in case of failure or cancellation.
metadata
map (key: string, value: any)
Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
name
string
The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id} .
response
map (key: string, value: any)
The normal response of the operation in case of success. If the original method returns no data on success, such as Delete , the response is google.protobuf.Empty . If the original method is standard Get / Create / Update , the response should be the resource. For other methods, the response should have the type XxxResponse , where Xxx is the original method name. For example, if the original method name is TakeSnapshot() , the inferred response type is TakeSnapshotResponse .
OperationMetadata
Represents the metadata of the long-running operation.
Fields
apiVersion
string
API version used to start the operation.
createTime
string ( Timestamp format)
The time the operation was created.
endTime
string ( Timestamp format)
The time the operation finished running.
target
string
Server-defined resource path for the target of the operation.
verb
string
Name of the verb executed by the operation.
Status
The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC . Each Status message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the API Design Guide .
Fields
code
integer ( int32 format)
The status code, which should be an enum value of google.rpc.Code.
details[]
object
A list of messages that carry the error details. There is a common set of message types for APIs to use.
message
string
A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
Workflow
Workflow program to be executed by Workflows.
Fields
createTime
string ( Timestamp format)
Output only. The timestamp of when the workflow was created.
description
string
Description of the workflow provided by the user. Must be at most 1000 unicode characters long.
labels
map (key: string, value: string)
Labels associated with this workflow. Labels can contain at most 64 entries. Keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores and dashes. Label keys must start with a letter. International characters are allowed.
name
string
The resource name of the workflow. Format: projects/{project}/locations/{location}/workflows/{workflow}
revisionCreateTime
string ( Timestamp format)
Output only. The timestamp that the latest revision of the workflow was created.
revisionId
string
Output only. The revision of the workflow. A new revision of a workflow is created as a result of updating the following properties of a workflow: - Service account - Workflow code to be executed The format is "000001-a4d", where the first 6 characters define the zero-padded revision ordinal number. They are followed by a hyphen and 3 hexadecimal random characters.
serviceAccount
string
The service account associated with the latest workflow version. This service account represents the identity of the workflow and determines what permissions the workflow has. Format: projects/{project}/serviceAccounts/{account} or {account} Using - as a wildcard for the {project} or not providing one at all will infer the project from the account. The {account} value can be the email address or the unique_id of the service account. If not provided, workflow will use the project's default service account. Modifying this field for an existing workflow results in a new workflow revision.
sourceContents
string
Workflow code to be executed. The size limit is 128KB.
state
enum
Output only. State of the workflow deployment.
Enum type. Can be one of the following:
STATE_UNSPECIFIED
Invalid state.
ACTIVE
The workflow has been deployed successfully and is serving.
updateTime
string ( Timestamp format)
Output only. The last update timestamp of the workflow.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
