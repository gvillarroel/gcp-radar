---
title: "Standard reports \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports
  title: "Standard reports \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Google Cloud CCaaS
User Guides
Send feedback
Standard reports
Stay organized with collections
Save and categorize content based on your preferences.
Standard Reporting: Viewing Chat CSAT Scores
In the Contact Center AI Platform (CCAI Platform) portal, go to Reports > Calls and Chats.
In Step 1: Select Session Type, choose Chats .
In Step 2: Select Chat Types, select the desired chat types.
The Performance Metrics report is pre-selected.
Select the checkboxes next to Avg. CSAT Rating and Lowest CSAT
Rating .
Select the Individual Call History Report .
Select the Timeframe and Time zone and click Download.
The reports will download.
Open both reports generated.
The Individual Chat History Report will show the individual chats and
contains the scores, if given, in the CSAT column.
The Chat Type Performance Report will show the summary values for
Average CSAT Rating and Lowest CSAT Rating for the time period selected.
Get session data reports
Session data reports provide session data for chat or call sessions that you
specify. You can use this data to map the customer journey across a session or
to perform analysis for a quality assurance program.
You can set user level permissions to limit access to session data reports. By
selecting Assigned Teams Only , only the assigned team has access to the
session data report.
To generate a session data report, follow these steps.
In the CCAI Platform portal, click Reports > Session Data . If you
don't see the Reports menu, click menu Menu .
Under Session Types , select Calls or Chats .
Under Session ID(s) , enter your session ID, and then press Enter .
Repeat to enter additional session IDs. For more information, see Session
metadata file .
Click Request Data .
Standard Reports: Using the Report builder
The Report Builder in the Reports tab allows you to generate standard
reports for the metrics that are important to your organization.
Reports are generated based on three categories: Agents &
Team , Call &
Chat ,
and Queues .
When selected, each report type downloads as a separate CSV file. A
folder containing all selected reports will be downloaded once the
reports are generated.
Each section below outlines the various report types and some example
questions that could be answered by the report data.
Standard Report (historical) data vs Dashboard (real-time) data
With so many data points at your fingertips, there is a lot to take in! Below
are some guidelines when comparing data across the CCAI Platform
real-time and historical reporting features.
Reports and dashboards exclude calls abandoned during the menu
selection by a consumer if the setting in Settings > Operation
Management > Customer Abandoned Details is on. For more
details see
Operation Management Settings .
Report data excludes voicemails whereas the call dashboard includes
voicemails.
Report data includes short-abandoned calls, whereas the dashboard
may not include this data based on settings in Settings >
Operation Management > Customer Abandoned Details .
Data Limits
The only limit will be in the "Agent Timeline" The report will be broken
up into multiple files if it exceeds 1 million rows. Each fill will have
up to 1 million rows. 2,300,000 lines will be broken up into 3 files,
two that are 1 million in length and one 300k in length
Sample Reports
There are different report types available, depending on the data set
you are accessing.
When selected, each report type downloads as a separate CSV file.
A folder containing all selected reports will be downloaded once the
reports are generated.
Performance Metrics Report : Custom report where Agents show on
each individual row, and the selected metrics appear in each column.
Aggregates all agents selected into one report.
What was the average hold time and Average Handle time for
Agent A last week?
Individual Call History Report : Individual session interaction
history for the session type selected. Individual CSV files are
created for each Agent selected.
What were 5 call IDs that Agent A handled last week?
What was the queue time for call 1234 last week?
Agent Activity - Summary Report (includes calls and chats when
enabled): Generates one csv for all Agents selected. Contains data
showing cumulative duration in each status and number of
interactions attempted and completed. How long was Agent A in each
status last week?
Agent Activity - Timeline Report (includes calls and chats when
enabled): Detailed timeline of every event, either performed by an
Agent to performed by the system to an Agent's account. CSV files
contain data for all Agents selected.
What time exactly did Agent A login and then what time did they
take their first call?
What time was Agent A offered a call via Deltacast?
Did Agent A try to pick up their calls from 11-12pm?
Disposition Report (includes calls and chats when enabled):
Lists all selected disposition codes for all agents/queues within
the selected timeframe.
Creating Standard Reports
Agents & Teams
From the CCAI Platform portal, go to Reports > Agent & Teams .
Select the individual or group of Agents and/or Teams for which you
need to download data:
All Agents : Includes all agents within your CCAI Platform
environment
Select Agents and Teams : Multi-select agents and/or entire teams
by starting to type the Agent or Team name and selecting the option
when it appears. Repeat until all Agent and Teams have been
selected.
In the Session Types list, select Calls or Chats . Chats include
SMS messages.
If you select Calls , checkboxes for call types appear. Select the call
types that you want to include in the report.
Select the reports needed, and when available select the metrics
to include.
Select the Timeframe : Adjust period of time the report will
cover:
Today: The current date based on your locally configured time zone
Past 24 hours
This week: Starts on Monday at 12:00 am
Last Month
This quarter: Starts at the first day of the current calendar
quarter until the current day
Custom: Sliding 90-day range
Select the time zone the reports should be generated to reflect.
Click Download Report .
Calls and Chats
Go to Reports > Calls & Chats
Select the Session Type For Calls or Chats. A list of call and
chat types are available following step 6 below.
Select the reports needed, and when available select the metrics
to include .
Select the Timeframe .
Select the time zone the reports should be generated to reflect.
Click Download .
Call and chat types
You can select the call or chat types that you want to include in your reports.
Here are the available call types:
Voice Inbound (IVR) : standard PSTN calls
Voice Inbound (IVR via Mobile) : fallback PSTN calls made using the
mobile SDKs
Voice Inbound (Mobile) : calls placed by end-users using the mobile
SDKs
Voice Callback (Web) : calls initiated from the web SDK
Voice Inbound (API) : calls initiated using an API
Voice Scheduled (Mobile) : calls scheduled using the mobile SDKs
Voice Scheduled (Web) : calls scheduled using the web SDK
Voice Outbound : calls placed by agents dialing a number
Voice Outbound (API) : calls initiated using an API
Voice Scheduled (API) : calls initiated by an outbound dialer campaign
Voice Internal : agent-to-agent calls
Voice Inbound (Direct) : calls initiated by end-users using agents'
direct numbers
Voice Outbound (Direct) calls initiated by agents using their direct
numbers
Voice Outbound (UCaaS) : outbound, unified communications as a service
(UCaaS) calls
Voice Inbound (Extension) : inbound end-user to agent calls
Here are the available chat types:
Messaging Inbound (Mobile Chat) : chats initiated by end-users using the
mobile SDKs
Messaging Inbound (Web Chat) : chats initiated by end-users using the web
SDK
Messaging Inbound (SMS) : SMS chats initiated by end-users
Messaging Outbound (SMS) : SMS chats initiated by agents
Messaging Outbound (SMS via API) : SMS chats initiated by an API
Messaging Inbound (SMS Direct) : SMS chats initiated by end-users using
agents' direct numbers
Messaging Outbound (SMS Direct) : SMS chats initiated by agents using
their direct numbers
Messaging Outbound (SMS Direct via API) : SMS chats initiated by an API
using agents' direct numbers
Messaging (WhatsApp) : chats initiated using WhatsApp
Queues
From the CCAI Platform portal, go to Reports > Queues .
Select the individual or group of Agents and/or Teams for which you
need to download data:
All Queues : Includes all queues within your CCAI Platform
environment.
Select Queues : Multi-select queues by starting to type the queue
name and selecting the option when it appears. Repeat until all
queues have been selected.
Select the Session Type : Calls or chats. Chats include SMS
messages.
Select the reports needed, and when available select the metrics
to include . See Report
Types
for details.
Performance Metrics Report: Select from the available metrics to
include.
Individual Call History Report
Disposition Report
Select the Timeframe : Adjust period of time the report will
cover:
Today: The current date based on your locally configured time zone
Past 24 hours
This week: Starts on Monday at 12:00 am
This quarter: Starts at the first day of the current calendar
quarter until the current day
Custom: Sliding 90-day range
Select the time zone the reports should be generated to reflect.
Click Download .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
