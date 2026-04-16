---
title: "Standard Reports: Interactions Data Sets \_|\_ Google Cloud Contact Center\
  \ as a Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets
  title: "Standard Reports: Interactions Data Sets \_|\_ Google Cloud Contact Center\
    \ as a Service \_|\_ Google Cloud Documentation"
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
Standard Reports: Interactions Data Sets
Stay organized with collections
Save and categorize content based on your preferences.
All Handled Interactions Report
The All Handled Interactions report displays details about
interactions for one or more agents during a specific date and time
range. This report details all handled interactions from a queue. Use
the report to identify whether a few calls or most calls took longer
than average.
The report includes the following information:
Any interaction associated with the agent
Date, time, and duration of the interaction
Event status of the interaction
If the interaction was barged
Amount of time in seconds that the interaction remained in a queue
Interactions that have associated scheduled
calls
The All Handled Interactions report can be found at Reports >
Queues .
The metrics included in this report are as follows:
Metric Name
Definition
Queue Name
The name of the queue including the full path names if the queue
is a sub queue.
Started At
The timestamp (date and time) when the interaction
started.
Ended At
The timestamp (date and time) when the interaction
finished.
Agent Name
The identity of the individual that handled the
interaction
Agent ID
The Contact Center AI Platform (CCAI Platform) unique ID of the individual that handled the
interaction
Agent Email
The email address of the individual that handled the
interaction.
Lang
The language associated with the queue the call was routed
through.
Transfer
Identifies whether the interaction was transferred.
Cold Transfer
An interaction where a transfer occurs without prior notification
to its recipient. Returns (1) if a transfer is completed as cold, as
opposed to warm. See the description of each here.
Inbound
Indicates the direction of the interaction
Barged
Identifies whether the interaction was barged by a
supervisor
Talk Time
The total length of time the agent spent talking to a customer.
This metric doesn't include hold time or wrap-up time.
Hold Time
The total time for the interaction where the consumer was placed
on hold by an agent.
Wrap-up Time
The total time that an agent was in wrap-up status.
Handle Time
The total time for the interaction that elapsed from when the
agent accepts an interaction to when they end their wrap-up
phase. This is calculated as: Talk Time + Hold time + Wrap-up
time.
Scheduled At
The date and time at which a consumer requested a scheduled call
to take place.
Event Status
The outcome of the interaction. Possible values include:
All finished
ACW Ended
Interaction ID
The unique identifier of the interaction.
Interaction Detail by Agent Report
The Interaction Details by Agent report displays the interaction
statistics for an agent during the specified period. This report allows
supervisors to monitor agent performance at a granular level.
Sample metrics in this report include the Start and End Time, the Talk
Time, or the Hold Time for each interaction.
The Interaction Detail by Agent report can be found at Reports >
Agents and Teams .
For more information on how to build this report see Standard Reports:
Using the Report
Builder .
Tip
This report complements the Agent Activity Timeline Reports.
The existing Agent Activity reports are based on user activity logs
while the Interaction Detail by Agent report is based on interactions.
For example, user activity logs can show the agent was in the In Chat
status for 1 hour, while this report could show the breakdown of total
agent chat interactions.
Metric Name
Definition
Agent Name
The name of the agent that handled the
work item
Agent ID
The unique ID of the agent that handled
the work item.
Agent Email Address
The email address of the agent that
handled the work item.
Agent Location
The geographical location of the
agent.
Queue Name
The name of the queue where the
interaction originated before being routed to the agent.
Note: If this is an outbound call with no queue - the column will
be blank.
Lang
The queue language where call / chat
entered.
Note: Outbound interactions should be empty.
Interaction Type
The channel that the consumer has
selected to make contact.
Possible values include:
Call
IVR Call (Inbound Voice Call)
Scheduled Call
Direct Call (Outbound)
Incoming Call (Inbound)
Numbered Incoming Call (Callback)
Numbered Scheduled (Scheduled - Web)
Campaign Call
Agent Scheduled Call
Action Only Call
Voice Inbound Call
Chat
Mobile (In-App)
Web (In- Web)
SMS Chat (Messaging)
Whatsapp (Messaging)
Direction
Indicates if the interaction was in an
inbound interaction or an outbound interaction.
Possible values include:
Inbound
Outbound
Event
Indicates the how the interaction
ended.
Possible values include:
Call: ACW Ended, BCW Ended (Campaign Calls Only), Call Ended
Chat: Chat Finished, Chat Failed, ACW Ended
Start Time
The date and time the interaction
started.
End Time
The date and time that the interaction
ended.
Total Interaction Time
The total time that the interaction was
in focus.
Interaction ID
The unique identifier of the work
item.
Agent Connection Time
The time it took for the agent to
accept the interaction.
Note: this is not queue time - it is the connection time to the
agent.
Agent Response Time (Chat
Only)
The total time it took for the agent to
respond to the work item.
Response Count (Chat Only)
The total Response Count for the interaction. Response (Time and Count)
Talk Time or Chat Time
The sum of Talk Time or Chat Time for the interaction. Chat Time
Hold Time (Call Only)
The sum of Hold Time for the interaction. Hold Time
Wrap-up Time
The sum of Wrap-up Time for the interaction. Wrap-up Time (Interaction
Metric)
Handle Time
The sum of Handle Time for the interaction. Includes
Talk Time, Hold Time, Wrap-up Time. Handle Time
Agent Holds (Calls Only)
Indicates if the interaction was placed
in a hold status.
Transfers
Indicates if the interaction was
transferred. Displays a TRUE or FALSE.
Auto Answered Calls
Indicates if the call went through as
an auto answered call.
Displays a TRUE or FALSE
TRUE = yes
FALSE = no
Disposition Code
The disposition code the agent awarded
the interaction.
Call ID
The unique identifier of the entire
call.
Avg. Agent Network Quality
Score
The average score awarded to the
agent's network quality. Possible values include:
1- Unusable
2 - Poor
3 - Average
4 - Good
5 - Excellent
Interaction Summary by Agent Report
The Interaction Summary by Agent report displays the interaction
statistics for an agent during the specified period. This report allows
supervisors to monitor agent performance at a granular level.
Sample metrics in this report include the Total Talk Time, Avg. Talk
Time, and Avg. Hold Time for the agent during their interactions.
The Interaction Summary by Agent report can be found at Reports
> Agents and Teams .
For more information on building this report see Summary Reports: Using
the Report
Builder .
Tip
This report complements the Agent Activity - Summary Report.
The existing Agent Activity reports are based on user activity logs
while the Interaction Summary by Agent report is based on interactions.
For example, user activity logs can show the agent was in the In Chat
status for 1 hour, while this report could show the breakdown of total
agent chat interactions.
Metric Name
Definition
Agent Name
The name of the agent that handled the
work item
Agent ID
The unique ID of the agent that handled
the work item.
Agent Email Address
The email address of the agent that
handled the work item.
Agent Location
The geographical location of the
agent.
Total Agent Connection Time
The time it took for the agent to
accept the interaction. Note: this is not queue time - it is the
connection time to the agent.
Avg. Agent Connection Time
The average time it took for the agent
to accept the interaction. Note: this is not queue time - it is the
connection time to the agent.
Avg. Talk Time or Avg. Chat
Time
The average of Talk Time or Chat Time for the interactions. Chat Time
Total Talk Time or Total Chat
Time
The total of Talk Time for the
interactions.
Avg. Wrap-up Time
The average of Wrap-up time for the interactions. Wrap-up Time (Interaction
Metric)
Total Wrap-up Time
The total of Wrap-up Time for the interactions. Wrap-up Time (Interaction
Metric)
Total Handle Time
The sum of Handle Time for the interaction. Includes
Talk Time, Hold Time, Wrap-up Time. Handle Time
Avg. Handle Time
The average of Handle Time for the interaction. Includes
Talk Time, Hold Time, Wrap-up Time. Handle Time
Agent Transfers
The total number of transfers that the
agent has actioned.
Work Offered
The total number of interactions
offered to the agent.
This includes:
Deltacast call notification offered
Auto answered call notification offered
Multicast call notification offered
Note: If auto answer is enabled for Deltacast, only Auto answered
call notification offered are logged.
Handled Calls
The total number of interactions the
agent has handled . This is counting both inbound and
outbound interactions. Handled
Missed Calls/ Chats
The total number of interactions that
the agent has missed.
Total Deltacast missed interaction
count
The total number of times an agent
missed a deltacast projection.
Total Auto Answered Calls
The total number of times the agent
responded to an auto-answered call.
CSAT %
The overall CSAT score for the
Agent.
Avg. Agent Response Time* (Chats
Only)
The average time across all chat
interactions for the time it took for the agent to respond to the work
item.
Total Agent Response Time
The total time across all interactions
for the time it took for the agent to respond to the
interaction.
Max. Agent Response Time Time
The longest time out of all the
interactions that it took for the agent to respond to the work
item.
Total Response Count
The sum of all responses by agents or
consumers during matching interactions.
Avg. Agent Network Quality
Score
The average across all network scores /
offered calls.
The score range is as follows:
Possible values include: 5- Excellent, 4- Good, 3- Average, 2- Poor,
1- Unusable.
Missed Calls due to Network
Quality
Displays the total number of calls that
were offered to the agent but were missed while the agent's network
quality was poor or unusable.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
