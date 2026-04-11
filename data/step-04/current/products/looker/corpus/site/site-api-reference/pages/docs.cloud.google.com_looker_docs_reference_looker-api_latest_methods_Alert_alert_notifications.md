---
title: "Alert Notifications \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/alert_notifications
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/alert_notifications
  title: "Alert Notifications \_|\_ Looker \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
API Reference
Send feedback
Alert Notifications
Stay organized with collections
Save and categorize content based on your preferences.
Version 4.0.26.6 (latest)
Alert Notifications.
The endpoint returns all the alert notifications received by the user on email in the past 7 days. It also returns whether the notifications have been read by the user.
Request
GET
/alert_notifications
Datatype
Description
Request
HTTP Request
query
HTTP Query
Expand HTTP Query definition...
limit
integer
(Optional) Number of results to return (used with `offset`).
offset
integer
(Optional) Number of results to skip before returning any (used with `limit`).
Response
200: It shows all the alert notifications received by the user on email.
Datatype
Description
(array)
AlertNotifications []
notification_id
lock
string
ID of the notification
alert_condition_id
lock
string
ID of the alert
user_id
lock
string
ID of the user
is_read
boolean
Read state of the notification
field_value
lock
number
The value of the field on which the alert condition is set
threshold_value
lock
number
The value of the threshold which triggers the alert notification
ran_at
lock
string
The time at which the alert query ran
alert
lock
MobilePayload
It contains the details needed for mobile alerts payload
Expand MobilePayload definition...
title
lock
string
Title of the alert
alert_id
lock
string
ID of the alert
investigative_content_id
lock
string
ID of the investigative content
dashboard_name
lock
string
Name of the dashboard on which the alert has been set
dashboard_id
lock
string
ID of the dashboard on which the alert has been set
query_slug
lock
string
Slug of the query which runs the alert queries.
notification_type
lock
string
The type of notification, 'email' or 'slack'
triggering_field_title
lock
string
The title of the field on which the alert condition is set
400: Bad Request
Datatype
Description
(object)
Error
message
lock
string
Error details
documentation_url
lock
string
Documentation link
404: Not Found
Datatype
Description
(object)
Error
message
lock
string
Error details
documentation_url
lock
string
Documentation link
429: Too Many Requests
Datatype
Description
(object)
Error
message
lock
string
Error details
documentation_url
lock
string
Documentation link
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],[]]
