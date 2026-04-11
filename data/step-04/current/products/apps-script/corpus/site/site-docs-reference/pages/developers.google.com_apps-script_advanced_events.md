---
title: "Advanced Google Workspace Events Service \_|\_ Apps Script \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/apps-script/advanced/events
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/reference
source_metadata:
  url: https://developers.google.com/apps-script/advanced/events
  title: "Advanced Google Workspace Events Service \_|\_ Apps Script \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Advanced Google Workspace Events Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Advanced Google Workspace Events service allows Apps Script to use the Google Workspace Events API to subscribe to resource changes like creations, updates, or deletions.
Using this service requires an Apps Script project with a standard Google Cloud project, a Pub/Sub topic, and necessary authorization scopes.
Specific prerequisites exist for subscribing to Chat events, including a configured Google Chat app.
Sample code is provided for common actions such as creating, listing, getting, updating, reactivating, and deleting subscriptions, as well as getting operation details.
Apps Script to subscribe to Google Workspace resources and receive event
notifications.
The Advanced Google Workspace Events service lets you use the
Google Workspace Events API in Google Apps Script.
This API lets you subscribe to Google Workspace resources so that you
receive relevant events that you're interested in. Events represent changes to
resources, such as when resources are created, updated, or deleted.
Prerequisites
An Apps Script project using a standard Google Cloud project
instead of the default one created automatically by Apps Script.
A Pub/Sub topic created in the same
Google Cloud project to receive subscription events.
To create a Pub/Sub topic, see
Create and subscribe to a Pub/Sub topic .
To subscribe to Chat events, you must have a
Google Chat app configured on the Chat API configuration
page in the Google Cloud console. To create a Google Chat app, see
Build a Google Chat app with Apps Script .
The necessary authorization scopes added to the Apps Script
project's appsscript.json file. The necessary scopes depend on the types of
the subscriptions' target resources and events. For details, see
Choose Google Workspace Events API scopes .
For example:
"oauthScopes" : [
"https://www.googleapis.com/auth/chat.messages.readonly"
]
This is an advanced service that you must
turn on before use .
Reference
For more information about this service, see the
Google Workspace Events API reference documentation .
Like all advanced services in Apps Script, the
Google Workspace Events service uses the same objects, methods, and
parameters as the public API.
Sample code
These samples show you how to perform common
Google Workspace Events API
actions using the advanced service.
Create a subscription
To create a subscription to a Google Workspace resource, add
the following function to the Apps Script project's code:
advanced/events.gs
View on GitHub
/**
* Creates a subscription to receive events about a Google Workspace resource.
* For a list of supported resources and event types, see the
* [Google Workspace Events API Overview](https://developers.google.com/workspace/events#supported-events).
* For additional information, see the
* [subscriptions.create](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/create)
* method reference.
* @param {!string} targetResource The full resource name of the Google Workspace resource to subscribe to.
* @param {!string|!Array<string>} eventTypes The types of events to receive about the resource.
* @param {!string} pubsubTopic The resource name of the Pub/Sub topic that receives events from the subscription.
*/
function createSubscription ( targetResource , eventTypes , pubsubTopic ) {
try {
const operation = WorkspaceEvents . Subscriptions . create ({
targetResource : targetResource ,
eventTypes : eventTypes ,
notificationEndpoint : {
pubsubTopic : pubsubTopic ,
},
});
console . log ( operation );
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed to create subscription with error %s" , err . message );
}
}
List subscriptions
To list subscriptions filtered by event types and target resource,
add the following function to the Apps Script project's code:
advanced/events.gs
View on GitHub
/**
* Lists subscriptions created by the calling app filtered by one or more event types and optionally by a target resource.
* For additional information, see the
* [subscriptions.list](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/list)
* method reference.
* @param {!string} filter The query filter.
*/
function listSubscriptions ( filter ) {
try {
const response = WorkspaceEvents . Subscriptions . list ({ filter });
console . log ( response );
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed to list subscriptions with error %s" , err . message );
}
}
Get subscription
To get information about a subscription, add the following function to
the Apps Script project's code:
advanced/events.gs
View on GitHub
/**
* Gets details about a subscription.
* For additional information, see the
* [subscriptions.get](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/get)
* method reference.
* @param {!string} name The resource name of the subscription.
*/
function getSubscription ( name ) {
try {
const subscription = WorkspaceEvents . Subscriptions . get ( name );
console . log ( subscription );
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed to get subscription with error %s" , err . message );
}
}
Update subscription
To update or renew a subscription, add the following function to the
Apps Script project's code:
advanced/events.gs
View on GitHub
/**
* Updates an existing subscription.
* This can be used to renew a subscription that is about to expire.
* For additional information, see the
* [subscriptions.patch](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/patch)
* method reference.
* @param {!string} name The resource name of the subscription.
*/
function patchSubscription ( name ) {
try {
const operation = WorkspaceEvents . Subscriptions . patch (
{
// Setting the TTL to 0 seconds extends the subscription to its maximum expiration time.
ttl : "0s" ,
},
name ,
);
console . log ( operation );
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed to update subscription with error %s" , err . message );
}
}
Reactivate subscription
To reactivate a subscription, add the following function to the
Apps Script project's code:
advanced/events.gs
View on GitHub
/**
* Reactivates a suspended subscription.
* Before reactivating, you must resolve any errors with the subscription.
* For additional information, see the
* [subscriptions.reactivate](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/reactivate)
* method reference.
* @param {!string} name The resource name of the subscription.
*/
function reactivateSubscription ( name ) {
try {
const operation = WorkspaceEvents . Subscriptions . reactivate ({}, name );
console . log ( operation );
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed to reactivate subscription with error %s" , err . message );
}
}
Delete subscription
To delete a subscription, add the following function to the
Apps Script project's code:
advanced/events.gs
View on GitHub
/**
* Deletes a subscription.
* For additional information, see the
* [subscriptions.delete](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/delete)
* method reference.
* @param {!string} name The resource name of the subscription.
*/
function deleteSubscription ( name ) {
try {
const operation = WorkspaceEvents . Subscriptions . remove ( name );
console . log ( operation );
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed to delete subscription with error %s" , err . message );
}
}
Get operation
Most Google Workspace Events API methods return a
long-running operation .
To determine the status of the operation, you can use the
operations.get()
method.
To get information about an operation, add the following function
to the Apps Script project's code:
advanced/events.gs
View on GitHub
/**
* Gets details about an operation returned by one of the methods on the subscription
* resource of the Google Workspace Events API.
* For additional information, see the
* [operations.get](https://developers.google.com/workspace/events/reference/rest/v1/operations/get)
* method reference.
* @param {!string} name The resource name of the operation.
*/
function getOperation ( name ) {
try {
const operation = WorkspaceEvents . Operations . get ( name );
console . log ( operation );
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed to get operation with error %s" , err . message );
}
}
To get the name of an operation, use the value from the name field returned
from one of the Google Workspace Events API methods, such as
subscriptions.create() or
subscriptions.patch() .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
