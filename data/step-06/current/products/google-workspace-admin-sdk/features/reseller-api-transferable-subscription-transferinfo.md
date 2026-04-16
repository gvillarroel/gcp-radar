---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.724Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Reseller API transferable subscription transferInfo"
feature_slug: "reseller-api-transferable-subscription-transferinfo"
latest_feature_date: "2013-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/reports/v1/guides/push"
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/SubscriptionChannel"
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands"
keywords:
  - "reseller"
  - "transferable"
  - "subscription"
  - "transferinfo"
  - "subscriptions"
  - "include"
  - "property"
  - "transferability"
---

# Reseller API transferable subscription transferInfo

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

Transferable subscriptions include a transferInfo property with transferability expiration time and minimum transfer seats.

## Extended Definition

Transferable subscriptions include a transferInfo property with transferability expiration time and minimum transfer seats.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push)
- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/SubscriptionChannel](https://developers.google.com/workspace/admin/directory/reference/rest/v1/SubscriptionChannel)
- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands)

## Supporting Pages

### Push notifications \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push)
- Source ID: `site-docs-reference-required-2`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- Watch for all admin activities: POST https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/admin/watch Watch for all docs activities: POST https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/docs/watch Watch for a specific user's admin activity: POST https://admin.googleapis.com/admin/reports/v1/activity/users/liz@example.com/applications/admin/watch Watch for a specific event, such as changing a user's password: POST https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/admin/watch?eventName=CHANGE PASSWORD Watch for changes to a specific document: POST https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/docs/watch?eventName=EDIT&filters==doc id=123456abcdef Required properties With each watch request, you must provide these fields: An id property string that uniquely identifies this new notification channel within your project.
- The message body of the watch response provides information about the notification channel you just created, as shown in the example below. { "kind": "api#channel", "id": "reportsApiId", "resourceId": "o3hgv1538sdjfh", "resourceUri": "https://admin.googleapis.com/admin/reports/v1/activity/ userKey /applications/ applicationName ", "token": "target=myApp-myFilesChannelDest", "expiration": 3600 } In addition to the properties you sent as part of your request, the returned information also includes the resourceId and resourceUri to identify the resource being watched on this notification channel.
- The value for this field must be web hook . address : The URL where notifications are sent. token : An arbitrary string delivered to the target address with each notification, for the purpose of verifying that the notification comes from a trusted source. payload : A boolean flag indicating whether the payload should be included in the notification. expiration : The time-to-live in seconds for the notification channel.
- The possible values include: admin calendar drive groups groups enterprise login mobile saml token user accounts id. customerId The unique identifier for a Google Workspace account. actor User doing the action. actor. callerType The type of author who performed the activity listed in the report.

### SubscriptionChannel \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/SubscriptionChannel](https://developers.google.com/workspace/admin/directory/reference/rest/v1/SubscriptionChannel)
- Source ID: `site-api-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Admin console Reference Send feedback SubscriptionChannel Stay organized with collections Save and categorize content based on your preferences.

### "REST Resource: customer.devices.chromeos.commands \_|\_ Admin console \_\

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

