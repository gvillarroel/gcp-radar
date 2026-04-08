---
title: "Package google.cloud.advisorynotifications.v1 \_|\_ Advisory Notifications\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rpc/google.cloud.advisorynotifications.v1
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rpc/google.cloud.advisorynotifications.v1
  title: "Package google.cloud.advisorynotifications.v1 \_|\_ Advisory Notifications\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Package google.cloud.advisorynotifications.v1 | Advisory Notifications | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Advisory Notifications
Start free
Overview
Guides
Reference
Support
Resources
More
Technology areas
More
Overview
Guides
Reference
Support
Resources
Cross-product tools
More
Console
Advisory Notifications
All APIs and references
Client libraries
Advisory Notifications API
REST Reference
Overview
v1
REST Resources
organizations.locations
Overview
getSettings
updateSettings
organizations.locations.notifications
Overview
get
list
projects.locations
Overview
getSettings
updateSettings
projects.locations.notifications
Overview
get
list
Types
ListNotificationsResponse
NotificationView
Settings
RPC Reference
Overview
v1
Overview
google. cloud. advisorynotifications. v1
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Index
AdvisoryNotificationsService
Attachment
Csv
CsvRow
GetNotificationRequest
GetSettingsRequest
ListNotificationsRequest
ListNotificationsResponse
LocalizationState
Message
Body
Notification
NotificationSettings
NotificationType
NotificationView
Settings
Subject
Text
UpdateSettingsRequest
Home
Documentation
Security
Advisory Notifications
Reference
Was this helpful?
Send feedback
Package google. cloud. advisorynotifications. v1
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Index
AdvisoryNotificationsService
Attachment
Csv
CsvRow
GetNotificationRequest
GetSettingsRequest
ListNotificationsRequest
ListNotificationsResponse
LocalizationState
Message
Body
Notification
NotificationSettings
NotificationType
NotificationView
Settings
Subject
Text
UpdateSettingsRequest
Index
AdvisoryNotificationsService (interface)
Attachment (message)
Csv (message)
Csv.CsvRow (message)
GetNotificationRequest (message)
GetSettingsRequest (message)
ListNotificationsRequest (message)
ListNotificationsResponse (message)
LocalizationState (enum)
Message (message)
Message.Body (message)
Notification (message)
NotificationSettings (message)
NotificationType (enum)
NotificationView (enum)
Settings (message)
Subject (message)
Text (message)
UpdateSettingsRequest (message)
Advisory Notifications Service
Service to manage Security and Privacy Notifications.
GetNotification
rpc GetNotification( GetNotificationRequest ) returns ( Notification )
Gets a notification.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
advisorynotifications.notifications.get
For more information, see the IAM documentation .
GetSettings
rpc GetSettings( GetSettingsRequest ) returns ( Settings )
Get notification settings.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
advisorynotifications.settings.get
For more information, see the IAM documentation .
ListNotifications
rpc ListNotifications( ListNotificationsRequest ) returns ( ListNotificationsResponse )
Lists notifications under a given parent.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
advisorynotifications.notifications.list
For more information, see the IAM documentation .
UpdateSettings
rpc UpdateSettings( UpdateSettingsRequest ) returns ( Settings )
Update notification settings.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
advisorynotifications.settings.update
For more information, see the IAM documentation .
Attachment
Attachment with specific information about the issue.
Fields
display_name
string
The title of the attachment.
Union field data . Data type of the attachment. data can be only one of the following:
csv
Csv
A CSV file attachment. Max size is 10 MB.
Csv
A representation of a CSV file attachment, as a list of column headers and a list of data rows.
Fields
headers[]
string
The list of headers for data columns in a CSV file.
data_rows[]
CsvRow
The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string.
CsvRow
A representation of a single data row in a CSV file.
Fields
entries[]
string
The data entries in a CSV file row, as a string array rather than a single comma-separated string.
GetNotificationRequest
Request for fetching a notification.
Fields
name
string
Required. A name of the notification to retrieve. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{projects}/locations/{location}/notifications/{notification}.
language_code
string
ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.
GetSettingsRequest
Request of GetSettings endpoint.
Fields
name
string
Required. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings.
ListNotificationsRequest
Request for fetching all notifications for a given parent.
Fields
parent
string
Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization}/locations/{location}" or "projects/{project}/locations/{location}".
page_size
int32
The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50.
page_token
string
A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token.
view
NotificationView
Specifies which parts of the notification resource should be returned in the response.
language_code
string
ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.
ListNotificationsResponse
Response of ListNotifications endpoint.
Fields
notifications[]
Notification
List of notifications under a given parent.
next_page_token
string
A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
total_size
int32
Estimation of a total number of notifications.
LocalizationState
Status of localized text.
Enums
LOCALIZATION_STATE_UNSPECIFIED
Not used.
LOCALIZATION_STATE_NOT_APPLICABLE
Localization is not applicable for requested language. This can happen when:
The requested language was not supported by Advisory Notifications at the time of localization (including notifications created before the localization feature was launched).
The requested language is English, so only the English text is returned.
LOCALIZATION_STATE_PENDING
Localization for requested language is in progress, and not ready yet.
LOCALIZATION_STATE_COMPLETED
Localization for requested language is completed.
Message
A message which contains notification details.
Fields
body
Body
The message content.
attachments[]
Attachment
The attachments to download.
create_time
Timestamp
The Message creation timestamp.
localization_time
Timestamp
Time when Message was localized
Body
A message body containing text.
Fields
text
Text
The text content of the message body.
Notification
A notification object for notifying customers about security and privacy issues.
Fields
name
string
The resource name of the notification. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{project}/locations/{location}/notifications/{notification}.
subject
Subject
The subject line of the notification.
messages[]
Message
A list of messages in the notification.
create_time
Timestamp
Output only. Time the notification was created.
notification_type
NotificationType
Type of notification
NotificationSettings
Settings for each NotificationType.
Fields
enabled
bool
Whether the associated NotificationType is enabled.
NotificationType
Type of notification
Enums
NOTIFICATION_TYPE_UNSPECIFIED
Default type
NOTIFICATION_TYPE_SECURITY_PRIVACY_ADVISORY
Security and privacy advisory notifications
NOTIFICATION_TYPE_SENSITIVE_ACTIONS
Sensitive action notifications
NOTIFICATION_TYPE_SECURITY_MSA
General security MSA
NOTIFICATION_TYPE_THREAT_HORIZONS
Threat Horizons preview
NotificationView
Notification view.
Enums
NOTIFICATION_VIEW_UNSPECIFIED
Not specified, equivalent to BASIC.
BASIC
Server responses only include title, creation time and Notification ID. Note: for internal use responses also include the last update time, the latest message text and whether notification has attachments.
FULL
Include everything.
Settings
Settings for Advisory Notifications.
Fields
name
string
Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings.
notification_settings
map<string, NotificationSettings >
Required. Map of each notification type and its settings to get/set all settings at once. The server will validate the value for each notification type.
etag
string
Required. Fingerprint for optimistic concurrency returned in Get requests. Must be provided for Update requests. If the value provided does not match the value known to the server, ABORTED will be thrown, and the client should retry the read-modify-write cycle.
Subject
A subject line of a notification.
Fields
text
Text
The text content.
Text
A text object containing the English text and its localized copies.
Fields
en_text
string
The English copy.
localized_text
string
The requested localized copy (if applicable).
localization_state
LocalizationState
Status of the localization.
UpdateSettingsRequest
Request of UpdateSettings endpoint.
Fields
settings
Settings
Required. New settings.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
