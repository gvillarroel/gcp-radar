---
title: "REST Resource: organizations.locations.notifications \_|\_ Advisory Notifications\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications
  title: "REST Resource: organizations.locations.notifications \_|\_ Advisory Notifications\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Advisory Notifications
Reference
Send feedback
REST Resource: organizations.locations.notifications
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Notification
JSON representation
Subject
JSON representation
Text
JSON representation
LocalizationState
Message
JSON representation
Body
JSON representation
Attachment
JSON representation
Csv
JSON representation
CsvRow
JSON representation
NotificationType
Methods
Resource: Notification
A notification object for notifying customers about security and privacy issues.
JSON representation
{
"name" : string ,
"subject" : {
object ( Subject )
} ,
"messages" : [
{
object ( Message )
}
] ,
"createTime" : string ,
"notificationType" : enum ( NotificationType )
}
Fields
name
string
The resource name of the notification. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{project}/locations/{location}/notifications/{notification}.
subject
object ( Subject )
The subject line of the notification.
messages[]
object ( Message )
A list of messages in the notification.
createTime
string ( Timestamp format)
Output only. Time the notification was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
notificationType
enum ( NotificationType )
Type of notification
Subject
A subject line of a notification.
JSON representation
{
"text" : {
object ( Text )
}
}
Fields
text
object ( Text )
The text content.
Text
A text object containing the English text and its localized copies.
JSON representation
{
"enText" : string ,
"localizedText" : string ,
"localizationState" : enum ( LocalizationState )
}
Fields
enText
string
The English copy.
localizedText
string
The requested localized copy (if applicable).
localizationState
enum ( LocalizationState )
Status of the localization.
LocalizationState
Status of localized text.
Enums
LOCALIZATION_STATE_UNSPECIFIED
Not used.
LOCALIZATION_STATE_NOT_APPLICABLE
Localization is not applicable for requested language. This can happen when: - The requested language was not supported by Advisory Notifications at the time of localization (including notifications created before the localization feature was launched). - The requested language is English, so only the English text is returned.
LOCALIZATION_STATE_PENDING
Localization for requested language is in progress, and not ready yet.
LOCALIZATION_STATE_COMPLETED
Localization for requested language is completed.
Message
A message which contains notification details.
JSON representation
{
"body" : {
object ( Body )
} ,
"attachments" : [
{
object ( Attachment )
}
] ,
"createTime" : string ,
"localizationTime" : string
}
Fields
body
object ( Body )
The message content.
attachments[]
object ( Attachment )
The attachments to download.
createTime
string ( Timestamp format)
The Message creation timestamp.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
localizationTime
string ( Timestamp format)
Time when Message was localized
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
Body
A message body containing text.
JSON representation
{
"text" : {
object ( Text )
}
}
Fields
text
object ( Text )
The text content of the message body.
Attachment
Attachment with specific information about the issue.
JSON representation
{
"displayName" : string ,
// Union field data can be only one of the following:
"csv" : {
object ( Csv )
}
// End of list of possible types for union field data .
}
Fields
displayName
string
The title of the attachment.
Union field data . Data type of the attachment. data can be only one of the following:
csv
object ( Csv )
A CSV file attachment. Max size is 10 MB.
Csv
A representation of a CSV file attachment, as a list of column headers and a list of data rows.
JSON representation
{
"headers" : [
string
] ,
"dataRows" : [
{
object ( CsvRow )
}
]
}
Fields
headers[]
string
The list of headers for data columns in a CSV file.
dataRows[]
object ( CsvRow )
The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string.
CsvRow
A representation of a single data row in a CSV file.
JSON representation
{
"entries" : [
string
]
}
Fields
entries[]
string
The data entries in a CSV file row, as a string array rather than a single comma-separated string.
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
Threat horizons MSA
Methods
get
Gets a notification.
list
Lists notifications under a given parent.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
