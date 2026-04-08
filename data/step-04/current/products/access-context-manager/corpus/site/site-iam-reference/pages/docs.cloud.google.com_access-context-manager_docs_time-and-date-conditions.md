---
title: "Configuring time and day access conditions \_|\_ Access Context Manager \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/time-and-date-conditions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/time-and-date-conditions
  title: "Configuring time and day access conditions \_|\_ Access Context Manager\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configuring time and day access conditions | Access Context Manager | Google Cloud Documentation
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Access Context Manager
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
How-to guides
All how-to guides
Access control with IAM
Create an access policy
Create a basic access level
Create a custom access level
Use mobile devices with access levels
Manage an access policy
Create custom constraints
Manage access levels
Make bulk changes to access levels
Audit logging
Use Context-Aware Access
Set up context-aware access
Define access policies using access levels
Apply policies to user groups with access bindings
Configure session controls for re-authentication
Configure a credential strength policy
Configure Chrome browser attributes
Configure enterprise certificate conditions
Configure time and date conditions
Manage access bindings
Context-aware access enforcement points
Use certificate-based access
Certificate-based access overview
Understand mutual TLS at Google Cloud
Set up certificate-based access
Create access levels for certificate-based access
Enforce certificate-based access for a user group
Enforce certificate-based access with VPC Service Controls
Enable certificate-based access in client applications
Enable certificate-based access for web applications
Enable certificate-based access for VMs
Setting up Endpoint Verification
Enable certificate-based access with your enterprise certificates
Enable certificate-based access with Endpoint Verification certificates
Configure certificate-based access for Workload Identity Federation
Concepts
All concepts
Overview
Scoped policies
Custom access levels
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
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Configuring time and day access conditions
Stay organized with collections
Save and categorize content based on your preferences.
The Access Context Manager date and time restriction feature gives enterprises the ability to set access controls based on the date and time.
When evaluating zero-trust access, it is often necessary to restrict user access to resources to specific days and times. For example, shift workers may only be allowed to access company resources during their shift hours, or users may be given temporary access between a particular time of the day.
To apply the time and day access level condition, use the functions listed in the following table. The format of the functions is function(timezone) .
You can specify timezone as UTC, fixed time zones which are explicit hour and minute offsets from UTC, or as long timezone names like Europe/Paris , CET , or US/Central . For a complete listing, see the Timezone section of the Common Express Language definition.
If you don't specify a 'timezone', the expression defaults to UTC.
Function
Description
Example
get Full Year
Retrieve the number that represents the current year, such as 2020.
Is the year 2020?
request. time. getFullYear( "America/ Los_ Angeles") == 2020
get Month
Retrieve the month of the year. The month values range from 0 to 11, where 0 == January and 11 == December.
Is the month January?
request. time. getMonth( "America/ Los_ Angeles") == 0
get Date
Retrieve the date of the month. The date values range from 1 to 31, where 1 is the first of the month, and 31 is the 31st of the month.
Is it the first of the month?
request. time. getDate( "America/ Los_ Angeles") == 1
get Day Of Month
Retrieve the day of the month. The day values range from 0 to 30, where 0 is the first of the month, and 30 is the 31st of the month.
Is it the first of the month?
request. time. getDayOfMonth( "America/ Los_ Angeles") == 0
get Day Of Week
Retrieve the day of the week. The day values range from 0 to 6, where 0 is Sunday, and 6 is Saturday.
Is it Monday?
request. time. getDayOfWeek( "America/ Los_ Angeles") == 1
get Day Of Year
Retrieve the day of the year. The day values range from 0 to 365, where 0 is the first day of the year, and 365 is the 366th day of the year.
Is it the first day of the year?
request. time. getDayOfYear( "America/ Los_ Angeles") == 0
get Hours
Retrieve the hour of the day. The hour values range from 0 to 23, where 0 is midnight and 23 is 11 PM.
Is it 7 PM?
request. time. getHours( "America/ Los_ Angeles") == 19
get Minutes
Retrieve the minute of the hour. The minute values range from 0 to 59, where 0 is the first minute and 59 is the last minute of the hour.
Is it 7:30 PM?
request. time. getHours( "America/ Los_ Angeles") == 19 && request. time. getMinutes( "America/ Los_ Angeles") == 30
date
Return the timestamp representing the date normalized to midnight UTC.
Current time in UTC.
request. time. date()
date( tz string)
Return the timestamp representing the date normalized to midnight relative to the TimeZone string <tz>.
Current time in Pacific time.
request.time.date('America/Los_Angeles')
request.time.date('08:00')
time Of Day
Return the google. type. Time Of Day associated with the timestamp in UTC.
Current time of day in UTC, such as '09:30:00'
request. time. time Of Day()
timeOfDay( tz string)
Return the google.type.TimeOfDay associated with the timestamp and relative to the TimeZone string <tz>.
Current time of day in pacific time, such as '09:30:00'
request. time. timeOfDay( 'America/ Los_ Angeles')
between( start, stop) (for timestamp)
For a given timestamp, return True if the timestamp is between time 'start' (inclusive) and 'stop' (exclusive).
'Start' and 'stop' can be type.Timestamp or string, which will be converted to type.Timestamp .
Is the current timestamp, in PST, between Jan 10, 2020 00:00 (inclusive) and Jan 11, 2020 00:00 (exclusive)?
request. time. date( '08:00')
. between( '2020-10-01T00:00:00+08:00', '2020-10-01T00:00:00+08:00')
between( start, stop string) (for TimeOfDay)
For a given TimeOfDay , return True if the time of date is between the 'start' (inclusive) and 'stop' (exclusive).
'Start' and 'stop' can be type. Time Of Day or string, which will be converted to type. Time Of Day .
Is the current time of day, in Pacific time, between 09:30 AM (inclusive) and 05:30 PM (exclusive)?
request. time. timeOfDay( 'America/ Los_ Angeles'). between( '09:30:00', '17:30:00')
The following table contains examples of how to use time and date restrictions:
Example Policy
Expression
Allow shift workers to access resources from Monday to Friday between 9 AM to 5 PM, except for July fourth.
Option 1:
request. time. getDayOfWeek( "America/ Los_ Angeles") >= 1 && request. time. getDayOfWeek( "America/ Los_ Angeles") <= 5 && request. time. getHours( "America/ Los_ Angeles") >= 9 && request. time. getHours( "America/ Los_ Angeles") <= 17 && !(request. time. getMonth( "America/ Los_ Angeles") == 6 && request. time. getDayOfMonth( "America/ Los_ Angeles") == 3)
Option 2:
request.time.getDayOfWeek("America/Los_Angeles") >= 1 && request.time.getDayOfWeek("America/Los_Angeles") <= 5 &&
!(request.time.getMonth("America/Los_Angeles") == 6 && request.time.getDayOfMonth("America/Los_Angeles") == 3) &&
request.time.timeOfDay("America/Los_Angeles").between('09:30:00', '17:00:00')
Allow temporary access to resources on March 1, 2020, between 10 PM to midnight.
Option 1:
request.time.getFullYear("America/Los_Angeles") == 2020 && request.time.getMonth("America/Los_Angeles") == 2 && request.time.getDayOfMonth("America/Los_Angeles") == 0 && request.time.getHours("America/Los_Angeles") >= 22 && request.time.getHours("America/Los_Angeles") <= 23
Option 2:
request.time.between('2020-03-01T23:00:00+08:00', '2020-03-02T00:00:00+08:00')
Following are some example expressions that use some of the functions to capture specific time ranges:
Express the range during business hours
The date-time format is 'HH:MM:SS' and follows the RFC 3339 standard.
request.time.timeOfDay('America/Los_Angeles').between('09:30:00', '17:30:00')
request.time.date('America/Los_Angeles')
.between('01-10-2020T00:00:00+08:00', '01-11-2020T00:00:00-07:00')
Express specific days of the month, first week
(Note support for alternative timezone format)
request.time.getDayOfMonth('America/Los_Angeles') < 7
Express specific date ranges, yearly
For example, for quarterly reporting.
request.time.date('Asia/Hong_Kong').between(
request.time.getFullYear('08:00') + '-12-15T00:00:00+08:00',
request.time.getFullYear('08:00')+1 + '-01-01T00:00:00+08:00')
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
