---
title: "Standard Reports: Virtual Agent Data Sets \_|\_ Google Cloud Contact Center\
  \ as a Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets
  title: "Standard Reports: Virtual Agent Data Sets \_|\_ Google Cloud Contact Center\
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
Standard Reports: Virtual Agent Data Sets
Stay organized with collections
Save and categorize content based on your preferences.
Virtual Agent Summary Report
Overview
The Virtual Agent Summary Report summarizes Virtual Agent
performance. This report provides the sum of inbound interactions,
Customer Abandons, Avg. Talk Time, Sum of Deflections and Escalations,
plus other relevant metrics.
Note: The columns Response Time , Avg. Response Time , and
Max. Response Time are available for Chat Only .
The Virtual Agent Summary Report can be found at Reports >
Queues . For more information on accessing and building reports see the
Accessing Reports section of Historical Reports: Interaction-based Data
Model .
The metrics in this report are as follows:
Metric Name
Measure
Definition
Queue Name
Attribute
The name of the queue including the full path names if the queue
is a sub queue - where the interaction came into.
In this report - this is specifically the queue associated with the
virtual agent.
Total Interactions
SUM
The total number of interactions.
Inbound Interactions
SUM
The total number of inbound interactions.
Abandons by Consumer
SUM
The number of interactions that started with the virtual agent
and abandoned before connecting.
Avg. Abandon Time
Average
The average time it took across all interactions before the
consumer abandoned.
This formats as hh:mm:ss.
Avg. Responses per session
Average
The average number of responses across allinteractions.
Chat Duration
Sum of Time
The total time of the chat durations.
This formats as hh:mm:ss.
Avg. Chat Duration
Average of Time
The average time of the chat durations.
This formats as hh:mm:ss.
Avg. Handle Time
Average
The average of the entire handle times across all
interactions.
This formats as hh:mm:ss.
Escalations
SUM
The sum of interactions that were escalated.
Deflections
SUM
The sum of interactions that were deflected.
Response Time - Chat
SUM of Time
The total Virtual Agent Response Time.
This formats as hh:mm:ss.
Avg. Response Time - Chat
Average of Time
The average Virtual Agent Response Time.
This formats as hh:mm:ss.
Max. Response Time - Chat
Max of Time
The maximum Virtual Agent Response Time.
This formats as hh:mm:ss.
Transferred Interactions
SUM
The sum of interactions that were transferred from a live agent
to the virtual agent.
Returning users
SUM
The total number of consumers that revisited within the
configured time frame.
Virtual Agent Detail Report
Overview
The Virtual Agent Detailed Report provides detailed Virtual Agent
performance.
The Virtual Agent Detailed Report can be found at Reports >
Queues .
The metrics included in this report are as follows:
Metric Name
Measure
Definition
Queue Name
Attribute
The name of the queue including the full path names if the queue
is a sub queue - where the interaction came into.
In this report - this is specifically the queue associated with the
virtual agent.
Language
Attribute
The language associated with the virtual agent.
Interaction ID
Integer
The unique identifier of the interaction.
Started Time
Attribute
The start time of the interaction.
This formats as hh:mm:ss .
Ended Time
Attribute
The end time of the interaction.
This formats as hh:mm:ss .
Abandoned by Consumer
Attribute
This identifies whether the call or chat was abandoned by the
consumer.
This formats as True or
False .
Abandon Time
SUM
The time the interaction queued for before it was disconnected by
the consumer.
Fallback Response Count
Count
This counts how many times the virtual agent did not understand
and routed to default message.
Chat Duration
Time
The total chat duration.
This formats as hh:mm:ss .
Handle Time
Time
The total handle time.
This formats as hh:mm:ss .
Planned Transfer
Attribute
Indicates when the voice virtual agent transferred the call to a
human agent through planned interaction.
For example, the virtual agent understood what the consumer was
requesting and sent them to the proper queue/agent.
This formats as True or
False .
Initiated by
Attribute
This identifies who initiated the engagement with the virtual
agent.
For example, the value 'agent' will appear if an agent transfers to a
queue that is answered by a virtual agent.
Response Time
Time
The time it took for the virtual agent to respond.
Transfer ID
Integer
The identifier for the transfer.
Sentiment Score
Decimal
The sentiment score for the interaction.
Interaction Outcome
Attribute
The end outcome of the interaction.
Possible values include:
Undefined
Resolved
Unexpectedly_ended
Escalated
Failed
Consumer_ended
CSAT %
Percentage
The CSAT score awarded to the interaction.
Returning Users
Attribute
This identifies whether it is a repeat consumer within the
configured time frame.
This formats as True or
False .
Virtual Agent Escalation / Deflection Report (Detailed)
Overview
This Virtual Agent Escalation/Deflection Report provides a breakdown
of all the escalation and deflection reasons associated with a Virtual
Agent. It also includes timestamps for each interaction.
The Virtual Agent Escalation/Deflection Report can be found at
Reports > Queues . For more information on accessing and building
reports see the Accessing Reports section of Historical Reports:
Interaction-based Data
Model.
The metrics included in this report are as follows:
Metric Name
Measure
Definition
Queue Name
Attribute
The name of the queue including the full path names if the queue
is a sub queue - where the interaction came into.
In this report - this is specifically the queue that involved the
virtual agent.
Language
Attribute
The language associated with the virtual agent.
Interaction ID
Attribute
The unique identifier of the interaction.
Deflection Reason
Attribute
The reason for the deflection.
Escalation Reason
Attribute
The reason for the escalation.
Date Time Start Timestamp
Attribute
The time the interaction began.
This formats as date and hh:mm:ss.
Date Time End Timestamp
Attribute
The time the interaction ended.
This formats as date and hh:mm:ss.
Virtual Agent
Attribute
The name of the Virtual Agent.
In this report - this is specifically the virtual agent that was
involved in the escalation or deflection.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
