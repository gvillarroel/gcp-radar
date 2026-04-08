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
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: organizations.locations.notifications | Advisory Notifications | Google Cloud Documentation
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
organizations. locations
Overview
getSettings
updateSettings
organizations. locations. notifications
Overview
get
list
projects. locations
Overview
getSettings
updateSettings
projects. locations. notifications
Overview
get
list
Types
List Notifications Response
Notification View
Settings
RPC Reference
Overview
v1
Overview
google.cloud.advisorynotifications.v1
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
Resource: Notification Subject
Text
LocalizationState
Message
Body
Attachment
Csv
CsvRow
NotificationType
Methods get
list
Home
Documentation
Security
Advisory Notifications
Reference
Was this helpful?
Send feedback
REST Resource: organizations. locations. notifications
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: Notification Subject
Text
LocalizationState
Message
Body
Attachment
Csv
CsvRow
NotificationType
Methods get
list
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
See more code actions.
Light code theme
Dark code theme
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
create Time
string ( Timestamp format)
Output only. Time the notification was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
notification Type
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
en Text
string
The English copy.
localized Text
string
The requested localized copy (if applicable).
localization State
enum ( LocalizationState )
Status of the localization.
Localization State
Status of localized text.
Enums
LOCALIZATION_ STATE_ UNSPECIFIED
Not used.
LOCALIZATION_ STATE_ NOT_ APPLICABLE
Localization is not applicable for requested language. This can happen when: - The requested language was not supported by Advisory Notifications at the time of localization (including notifications created before the localization feature was launched). - The requested language is English, so only the English text is returned.
LOCALIZATION_ STATE_ PENDING
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
