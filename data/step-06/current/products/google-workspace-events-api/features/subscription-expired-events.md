---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:23.875Z"
product_name: "Google Workspace Events API"
product_slug: "google-workspace-events-api"
feature_name: "Subscription expired events"
feature_slug: "subscription-expired-events"
latest_feature_date: "2024-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/events/guides/events-lifecycle"
  - "https://developers.google.com/workspace/events"
  - "https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions"
  - "https://developers.google.com/workspace/events/guides/reactivate-subscription"
keywords:
  - "subscription"
  - "expired"
  - "events"
  - "the"
  - "workspace"
  - "api"
  - "sends"
  - "lifecycle"
---

# Subscription expired events

Product: Google Workspace Events API
Coverage: MEDIUM

## Step 02 Summary

The Google Workspace Events API sends lifecycle events when subscriptions expire.

## Extended Definition

The Google Workspace Events API sends lifecycle events when subscriptions expire.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/events/guides/events-lifecycle](https://developers.google.com/workspace/events/guides/events-lifecycle)
- [https://developers.google.com/workspace/events](https://developers.google.com/workspace/events)
- [https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions](https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions)
- [https://developers.google.com/workspace/events/guides/reactivate-subscription](https://developers.google.com/workspace/events/guides/reactivate-subscription)

## Supporting Pages

### "Receive and respond to lifecycle events for Google Workspace subscriptions\

- URL: [https://developers.google.com/workspace/events/guides/events-lifecycle](https://developers.google.com/workspace/events/guides/events-lifecycle)
- Source ID: `site-docs-root`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following shows a CloudEvent for a lifecycle event about an expiring Google Workspace subscription: { "id": " EVENT UUID ", "source": "//workspaceevents.googleapis.com/subscriptions/ SUBSCRIPTION ID ", "subject": "//workspaceevents.googleapis.com/subscriptions/ SUBSCRIPTION ID ", "type": "google.workspace.events.subscription.v1.expirationReminder", "time": "2023-06-08T06:50:43.641299Z", "spec version": '1.0', "datacontenttype": "application/json", "data": { "subscription":{ "name": "subscriptions/ SUBSCRIPTION ID ", "expire time": "2023-06-08T18:50:43.641299Z", ... } } } Subscription expired events The Google Workspace Events API sends you a lifecycle event when the subscription expires.
- The following shows a CloudEvent for a lifecycle event about an expired Google Workspace subscription: { "id": " EVENT UUID ", "source": "//workspaceevents.googleapis.com/subscriptions/ SUBSCRIPTION ID ", "subject": "//workspaceevents.googleapis.com/subscriptions/ SUBSCRIPTION ID ", "type": "google.workspace.events.subscription.v1.expired", "time": "2023-06-08T07:00:00.000000Z", "spec version": '1.0', "datacontenttype": "application/json", "data": { "subscription":{ "name": "subscriptions/ SUBSCRIPTION ID ", "expire time": "2023-06-08T07:00:00.000000Z", ... } } } Related topics Structure of Google Workspace events Resolve errors and reactivate a subscription Update or renew a subscription Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["The Google Workspace Events API sends lifecycle events to manage subscriptions, including suspension, expiration reminders, and expiration notifications.
- The Google Workspace Events API sends lifecycle events as structured CloudEvents to notify you about subscription suspensions, upcoming expirations, and actual expirations.

### "Subscribe to events using the Google Workspace Events API \_|\_ Google for\

- URL: [https://developers.google.com/workspace/events](https://developers.google.com/workspace/events)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows a Google Cloud Pub/Sub message that contains an event about an updated message in a Chat space: { "message" : { "attributes" : { "ce-datacontenttype" : "application/json" , "ce-id" : "spaces/ SPACE ID /spaceEvents/ SPACE EVENT ID " , "ce-source" : "//workspaceevents.googleapis.com/subscriptions/ SUBSCRIPTION ID " , "ce-specversion" : "1.0" , "ce-subject" : "//chat.googleapis.com/spaces/ SPACE ID " , "ce-time" : "2023-09-07T21:37:53.274191Z" , "ce-type" : "google.workspace.chat.message.v1.updated" }, "data" : " EVENT DATA " , "messageId" : " PUBSUB MESSAGE ID " , "orderingKey" : "//workspaceevents.googleapis.com/subscriptions/ SUBSCRIPTION ID " , "publishTime" : "2023-09-07T21:37:53.713Z" } } This example contains the following fields: attributes : Attributes for the CloudEvent , which include the event type.
- Related topics Choose Google Workspace Events API scopes Create a Google Workspace subscription Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Events are formatted using the CloudEvents specification, and can be either a subscription event or a lifecycle event : Subscription event A change to the Google Workspace resource that you're monitoring, such as a new message in a Chat space.
- For Google Workspace events, this is the full resource name of the subscription. //workspaceevents.googleapis.com/subscriptions/chat-spaces-abcdefg specversion The CloudEvents specification version used for this event.

### REST Resource: subscriptions \_|\_ Google Workspace \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions](https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more about subscriptions, see the Google Workspace Events API overview .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["This document outlines how to create and manage subscriptions for Google Workspace events.
- When a user authorizes the subscription, this field and the userAuthority field have the same value and the format is: Format: users/{user} For Google Workspace users, the {user} value is the user.id field from the Directory API.
- The API offers developer preview access to manage and interact with Google Workspace subscriptions for receiving real-time event notifications.

### "Resolve errors and reactivate a Google Workspace subscription \_|\_ Google\

- URL: [https://developers.google.com/workspace/events/guides/reactivate-subscription](https://developers.google.com/workspace/events/guides/reactivate-subscription)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- The Google Workspace Events API deletes expired subscriptions automatically.
- SCOPES = [ SCOPES ] Authenticate with Google Workspace and get user authentication. flow = InstalledAppFlow . from client secrets file ( 'credentials.json' , SCOPES ) CREDENTIALS = flow . run local server () Call the Workspace Events API using the service endpoint. service = build ( 'workspaceevents' , 'v1' , credentials = CREDENTIALS , ) NAME = 'subscriptions/ SUBSCRIPTION ID ' response = service . subscriptions () . reactivate ( name = NAME ) . execute () print ( response ) Replace the following: SCOPES : One or more OAuth scopes that support each event type for the subscription.
- Credentials . from service account file ( 'credentials.json' ) . with scopes ( SCOPES ) ) Call the Workspace Events API using the service endpoint. service = build ( 'workspaceevents' , 'v1beta' , credentials = CREDENTIALS , ) NAME = 'subscriptions/ SUBSCRIPTION ID ' response = service . subscriptions () . reactivate ( name = NAME ) . execute () print ( response ) Replace the following: SCOPES : Specify authorization scopes that allow the Chat app to subscribe to Chat events.
- To reactivate a Google Workspace subscription: Apps Script In your Apps Script project, create a new script file named reactivateSubscription and add the following code: function reactivateSubscription () { // The name of the subscription to reactivate. const name = 'subscriptions/ SUBSCRIPTION ID ' ; // Call the Workspace Events API using the advanced service. const response = WorkspaceEvents .

