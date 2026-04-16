---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:44:33.569Z"
product_name: "Advisory Notifications"
product_slug: "advisory-notifications"
feature_name: "Opting in and out of optional advisory notification types"
feature_slug: "opting-in-and-out-of-optional-advisory-notification-types"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications"
  - "https://docs.cloud.google.com/advisory-notifications/docs/quickstart"
  - "https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications"
keywords:
  - "notification"
  - "optional"
  - "opting"
  - "types"
  - "adds"
---

# Opting in and out of optional advisory notification types

Product: Advisory Notifications
Coverage: MEDIUM

## Step 02 Summary

Advisory Notifications adds support for users to opt in to or opt out of optional notification types.

## Extended Definition

Advisory Notifications adds support for users to opt in to or opt out of optional notification types.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications)
- [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart)
- [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications)

## Supporting Pages

### "REST Resource: organizations.locations.notifications \_|\_ Advisory Notifications\

- URL: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- NotificationType Type of notification Enums NOTIFICATION TYPE UNSPECIFIED Default type NOTIFICATION TYPE SECURITY PRIVACY ADVISORY Security and privacy advisory notifications NOTIFICATION TYPE SENSITIVE ACTIONS Sensitive action notifications NOTIFICATION TYPE SECURITY MSA General security MSA NOTIFICATION TYPE THREAT HORIZONS Threat horizons MSA Methods get Gets a notification. list Lists notifications under a given parent.
- Resource: Notification JSON representation Subject JSON representation Text JSON representation LocalizationState Message JSON representation Body JSON representation Attachment JSON representation Csv JSON representation CsvRow JSON representation NotificationType Methods Resource: Notification A notification object for notifying customers about security and privacy issues.
- Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{project}/locations/{location}/notifications/{notification}. subject object ( Subject ) The subject line of the notification. messages[] object ( Message ) A list of messages in the notification. createTime string ( Timestamp format) Output only.
- This can happen when: - The requested language was not supported by Advisory Notifications at the time of localization (including notifications created before the localization feature was launched). - The requested language is English, so only the English text is returned.

### "Quickstart: Viewing notifications \_|\_ Advisory Notifications \_|\_ Google\

- URL: [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optional: If you don't have the required permissions to view the notification, click Request access to gain those permissions.
- These permissions are included in the Advisory Notifications Viewer ( roles/advisorynotifications.viewer ) IAM role. advisorynotifications.notifications.get advisorynotifications.notifications.list resourcemanager.organizations.get , if you need to view notifications for your organization resourcemanager.projects.get , if you need to view notifications for your project Required roles for organizations If you have an organization resource, you receive notifications through your organization.
- To help users receive access, Advisory Notifications provides recipients of each notification email a two-week voucher to request permissions from a highly privileged grantor by using the following instructions: Click View notification details in the Advisory Notifications email you received.
- Before you begin Ensure that you have the required roles To view Advisory Notifications in the Google Cloud console, each user must be granted a role that contains the following Identity and Access Management (IAM) permissions.

### "REST Resource: projects.locations.notifications \_|\_ Advisory Notifications\

- URL: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{project}/locations/{location}/notifications/{notification}. subject object ( Subject ) The subject line of the notification. messages[] object ( Message ) A list of messages in the notification. createTime string ( Timestamp format) Output only.
- JSON representation { "name" : string , "subject" : { object ( Subject ) } , "messages" : [ { object ( Message ) } ] , "createTime" : string , "notificationType" : enum ( NotificationType ) } Fields name string The resource name of the notification.
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . notificationType enum ( NotificationType ) Type of notification Methods get Gets a notification. list Lists notifications under a given parent.
- Home Documentation Security Advisory Notifications Reference Send feedback REST Resource: projects.locations.notifications Stay organized with collections Save and categorize content based on your preferences.

