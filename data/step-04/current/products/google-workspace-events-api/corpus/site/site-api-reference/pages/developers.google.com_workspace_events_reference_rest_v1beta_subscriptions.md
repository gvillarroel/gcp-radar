---
title: "REST Resource: subscriptions \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/events/reference/rest/v1
source_metadata:
  url: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions
  title: "REST Resource: subscriptions \_|\_ Google Workspace \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
REST Resource: subscriptions
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A Subscription enables receiving events about Google Workspace resources, such as Google Chat messages or Drive files, delivered to a notification endpoint like a Pub/Sub topic.
You can configure payload options to control the data included in the event notifications, such as resource details or specific fields.
Subscriptions can be managed through various methods including creation, deletion, retrieval, listing, updating, and reactivation, providing flexibility in handling event streams.
Subscriptions have a defined state (active, suspended, deleted) and potential error types that can help in monitoring and troubleshooting event delivery.
The API offers developer preview access to manage and interact with Google Workspace subscriptions for receiving real-time event notifications.
Resource: Subscription
JSON representation
DriveOptions
JSON representation
PayloadOptions
JSON representation
NotificationEndpoint
JSON representation
State
ErrorType
Methods
Resource: Subscription
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
A subscription to receive events about a Google Workspace resource. To learn more about subscriptions, see the Google Workspace Events API overview .
JSON representation
{
"name" : string ,
"uid" : string ,
"targetResource" : string ,
"eventTypes" : [
string
] ,
"payloadOptions" : {
object ( PayloadOptions )
} ,
"notificationEndpoint" : {
object ( NotificationEndpoint )
} ,
"state" : enum ( State ) ,
"suspensionReason" : enum ( ErrorType ) ,
"authority" : string ,
"createTime" : string ,
"updateTime" : string ,
"reconciling" : boolean ,
"etag" : string ,
"driveOptions" : {
object ( DriveOptions )
}
"userAuthority" : string ,
"serviceAccountAuthority" : string
"expireTime" : string ,
"ttl" : string
}
Fields
name
string
Identifier. Resource name of the subscription.
Format: subscriptions/{subscription}
uid
string
Output only. System-assigned unique identifier for the subscription.
targetResource
string
Required. Immutable. The Google Workspace resource that's monitored for events, formatted as the full resource name . To learn about target resources and the events that they support, see Supported Google Workspace events .
A user can only authorize your app to create one subscription for a given target resource. If your app tries to create another subscription with the same user credentials, the request returns an ALREADY_EXISTS error.
eventTypes[]
string
Required. Unordered list. Input for creating a subscription. Otherwise, output only. One or more types of events to receive about the target resource. Formatted according to the CloudEvents specification.
The supported event types depend on the target resource of your subscription. For details, see Supported Google Workspace events .
By default, you also receive events about the lifecycle of your subscription . You don't need to specify lifecycle events for this field.
If you specify an event type that doesn't exist for the target resource, the request returns an HTTP 400 Bad Request status code.
payloadOptions
object ( PayloadOptions )
Optional. Options about what data to include in the event payload. Only supported for Google Chat and Google Drive events.
notificationEndpoint
object ( NotificationEndpoint )
Required. Immutable. The endpoint where the subscription delivers events, such as a Pub/Sub topic.
state
enum ( State )
Output only. The state of the subscription. Determines whether the subscription can receive events and deliver them to the notification endpoint.
suspensionReason
enum ( ErrorType )
Output only. The error that suspended the subscription.
To reactivate the subscription, resolve the error and call the subscriptions.reactivate method.
authority
string
Output only. The user who authorized the creation of the subscription.
When a user authorizes the subscription, this field and the userAuthority field have the same value and the format is:
Format: users/{user}
For Google Workspace users, the {user} value is the user.id field from the Directory API.
When a Chat app authorizes the subscription, only serviceAccountAuthority field populates and this field is empty.
createTime
string ( Timestamp format)
Output only. The time when the subscription is created.
updateTime
string ( Timestamp format)
Output only. The last time that the subscription is updated.
reconciling
boolean
Output only. If true , the subscription is in the process of being updated.
etag
string
Optional. This checksum is computed by the server based on the value of other fields, and might be sent on update requests to ensure the client has an up-to-date value before proceeding.
Union field subscription_options . Additional subscription options available to specific target resources for Google Workspace subscriptions. subscription_options can be only one of the following:
driveOptions
object ( DriveOptions )
Optional. Features that are supported only for subscriptions on Drive resources.
Union field authority_info . The identity that authorized the creation of the subscription. authority_info can be only one of the following:
userAuthority
string
Output only. The user who authorized the creation of the subscription. The user must be able to view the targetResource .
For Google Workspace users, the {user} value is the user.id field from the Directory API.
Format: users/{user}
serviceAccountAuthority
string
Output only. The service account that was used to authorize the creation of the subscription. This service account must be owned by the same Google Cloud project where you create this subscription.
Format: projects/{projectId}/serviceAccounts/{service_account_id}
Union field expiration . The time when the subscription expires.
The maximum expiration time depends on whether your subscription includes resource data in event payloads (specified in the PayloadOptions field):
If payloads omit resource data, up to 7 days.
If payloads include resource data, up to 4 hours. If your Google Workspace organization grants access to the resource through domain-wide delegation , you can extend the subscription's expiration time to up to 24 hours.
After a subscription expires, it's deleted automatically. You receive lifecycle events to the notification_endpoint 12 hours and one hour before the subscription expires. For details, see Receive and respond to lifecycle events .
To prevent a subscription from expiring, you can use the UpdateSubscription method to extend its expiration date. For details, see Update or renew a subscription . expiration can be only one of the following:
expireTime
string ( Timestamp format)
Non-empty default. The timestamp in UTC when the subscription expires. Always displayed on output, regardless of what was used on input.
ttl
string ( Duration format)
Input only. The time-to-live (TTL) or duration for the subscription. If unspecified or set to 0 , uses the maximum possible duration.
DriveOptions
Additional supported options for serving Drive events.
JSON representation
{
"includeDescendants" : boolean
}
Fields
includeDescendants
boolean
Optional. Immutable. For subscriptions to Google Drive events, whether to receive events about Drive files that are children of the target folder or shared drive.
If false , the subscription only receives events about changes to the folder or shared drive that's specified as the targetResource .
If true , the mimeType field of the file resource must be set to application/vnd.google-apps.folder .
For details, see Google Drive event types .
PayloadOptions
Options about what data to include in the event payload. Only supported for Google Chat and Google Drive events.
JSON representation
{
"includeResource" : boolean ,
"fieldMask" : string
}
Fields
includeResource
boolean
Optional. Whether the event payload includes data about the resource that changed. For example, for an event where a Google Chat message was created, whether the payload contains data about the Message resource. If false, the event payload only includes the name of the changed resource.
fieldMask
string ( FieldMask format)
Optional. If includeResource is set to true , the list of fields to include in the event payload. Separate fields with a comma. For example, to include a Google Chat message's sender and create time, enter message.sender,message.createTime . If omitted, the payload includes all fields for the resource.
If you specify a field that doesn't exist for the resource, the system ignores the field.
NotificationEndpoint
The endpoint where the subscription delivers events.
JSON representation
{
"pubsubTopic" : string
}
Fields
Union field endpoint .
endpoint can be only one of the following:
pubsubTopic
string
Immutable. The Pub/Sub topic that receives events for the subscription.
Format: projects/{project}/topics/{topic}
You must create the topic in the same Google Cloud project where you create this subscription.
Note: The Google Workspace Events API uses ordering keys for the benefit of sequential events. If the Cloud Pub/Sub topic has a message storage policy configured to exclude the nearest Google Cloud region, publishing events with ordering keys will fail.
When the topic receives events, the events are encoded as Pub/Sub messages. For details, see the Google Cloud Pub/Sub Protocol Binding for CloudEvents .
State
Possible states for the subscription.
Enums
STATE_UNSPECIFIED
Default value. This value is unused.
ACTIVE
The subscription is active and can receive and deliver events to its notification endpoint.
SUSPENDED
The subscription is unable to receive events due to an error. To identify the error, see the suspensionReason field.
DELETED
The subscription is deleted.
ErrorType
Possible errors for a subscription.
Enums
ERROR_TYPE_UNSPECIFIED
Default value. This value is unused.
USER_SCOPE_REVOKED
The authorizing user has revoked the grant of one or more OAuth scopes. To learn more about authorization for Google Workspace, see Configure the OAuth consent screen .
APP_SCOPE_REVOKED
The domain administrator has revoked the grant of one or more OAuth scopes for the app.
RESOURCE_DELETED
The target resource for the subscription no longer exists.
USER_AUTHORIZATION_FAILURE
The user that authorized the creation of the subscription no longer has access to the subscription's target resource.
APP_AUTHORIZATION_FAILURE
The app that authorized the creation of the subscription no longer has access to the subscription's target resource.
ENDPOINT_PERMISSION_DENIED
The Google Workspace application doesn't have access to deliver events to your subscription's notification endpoint.
ENDPOINT_NOT_FOUND
The subscription's notification endpoint doesn't exist, or the endpoint can't be found in the Google Cloud project where you created the subscription.
ENDPOINT_RESOURCE_EXHAUSTED
The subscription's notification endpoint failed to receive events due to insufficient quota or reaching rate limiting.
OTHER
An unidentified error has occurred.
Methods
create
Creates a Google Workspace subscription.
delete
Deletes a Google Workspace subscription.
get
Gets details about a Google Workspace subscription.
list
Lists Google Workspace subscriptions.
patch
Updates or renews a Google Workspace subscription.
reactivate
Reactivates a suspended Google Workspace subscription.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["This document outlines how to create and manage subscriptions for Google Workspace events. Key actions include creating subscriptions for specific resources and event types, defining notification endpoints (like Pub/Sub topics), and specifying payload data. Subscriptions have states (active, suspended, deleted) and can be updated, deleted, or reactivated. They also have an expiration that depends on the payload content. Available methods include `create`, `delete`, `get`, `list`, `patch`, and `reactivate` for managing subscriptions.\n"]]
