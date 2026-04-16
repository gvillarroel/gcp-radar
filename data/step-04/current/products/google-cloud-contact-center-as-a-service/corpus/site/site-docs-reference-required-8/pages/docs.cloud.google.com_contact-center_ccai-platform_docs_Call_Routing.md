---
title: "Multicast and deltacast \_|\_ Google Cloud Contact Center as a Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing
  title: "Multicast and deltacast \_|\_ Google Cloud Contact Center as a Service \_\
    |\_ Google Cloud Documentation"
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
Multicast and deltacast
Stay organized with collections
Save and categorize content based on your preferences.
Contact Center AI Platform (CCAI Platform) offers multiple features that let you automate call and
chat routing between agents and end-users. Routing can decrease end-user wait
times and increase agent efficiency.
Multicast is the default routing configuration for all sessions , which are
communications between an agent and an end-user. Multicast routes sessions
to agents assigned to a specified queue. Each has an equal opportunity to answer,
and the quickest to respond will get the call or chat.
Deltacast is an intelligent routing system unique to CCAI Platform
that uses logic to disperse calls to individual agents, rather than giving
agents the same opportunity to answer.
Deltacast for calls
If enabled, deltacast extends to the following:
Transfers
Scheduled calls
Calls routed using Direct Access Points (DAPs)
Queues with cascade groups enabled
Queues with percent allocation groups
This section outlines deltacast routing logic and describes how to enable
this feature.
Missed call status
The Missed Call agent status is used for sessions with deltacast enabled. Missed
calls are deltacast calls that are routed to an agent and not answered within
the Deltacast Timeout time threshold. Missed multicast calls don't put an agent in Missed Call status.
If an agent is placed in Missed Call status, they won't be able to receive
new calls until either they or an Admin manually change their status back to
Available. Admins can see a count of agents in Missed Call status in the Call
Dashboard, Agent page, and in reporting. Agent status and activity information
is also available using the API. To be placed in Missed Call status, the agent
must have been in Available status. If they are in any other status, Missed Call
will still show in reporting but not in the agent adapter.
Missed Call status is independent of the Missed Chat threshold. Calls are not
projected to agents in Missed Call status; they are only routed to agents in
Available or In-chat status.
Deltacast routing logic for calls
An incoming call is routed to the agent in status Available with the longest
duration since they last ended a call.
If the agent does not answer within the time set in the deltacast timeout
setting:
If there are remaining deltacast attempt counts for the call, the call is
routed to an available agent with the next longest duration.
If the deltacast attempt count has run out, the call is routed using
multicast to the rest of the agents assigned to that queue menu option.
If cascade groups are also being used
If a deltacast call is routed to an agent and the agent does not answer
within the time set in the deltacast timeout setting:
When deltacast attempt counts remain for the call, it's
routed to an available agent with the next longest duration.
When the deltacast attempt count runs out, the call is
multicast to all agents assigned to Cascade Group 1.
If the multicast call to Cascade Group 1 remains unanswered in the set amount
of seconds, the call is multicast to all of the agents
assigned to Cascade Group 1 and Cascade Group 2.
If the multicast call being offered to Groups 1 & 2 is still unanswered in the
set amount of seconds, the call is offered using multicast to all
agents assigned to Cascade Group 1, Group 2, and Group 3.
Multicast continues to offer the call to successive cascade groups until
an agent accepts the call.
If auto answer is also being used
An incoming call is routed, using deltacast, to the agent in Available status
with the longest duration since they last ended a call. Auto answer immediately
connects the call to the agent. The agent is notified with a tone and their call
adapter begins the 3-2-1 countdown.
The following diagram shows the deltacast routing flow:
Turn on deltacast for calls globally
This section shows you how to switch from the default multicast routing to
deltacast routing. Global deltacast settings are inherited by all eligible
queues, unless you change them at the queue level. You are not required to turn
on deltacast globally to turn it on for individual queues. For more information,
see Turn on deltacast for calls at the queue
level .
To turn on deltacast for calls globally, follow these steps:
In the CCAI Platform portal, click Settings > Operation
Management . If you don't see the Settings menu, click menu Menu . The Operation Management
page displays.
Go to the Routing pane.
Under Call Routing , select Deltacast . The following configuration
settings appear:
Auto Answer : connects incoming calls with an agent without clicking
to answer. For more information, see Turn on auto answer for calls
globally .
Deltacast Attempt Count : the number of times deltacast should offer
an incoming call to a single, eligible agent before switching to
multicast.
Disable Multicast fallback after all Deltacast attempts : Select this checkbox to
disable multicast fallback after all deltacast attempts. The system only uses deltacast
attempts to find an agent. If no agent accepts the deltacast, the call isn't multicasted
to all available agents. Instead, it follows your settings for cascade groups or
overcapacity deflection. All other deltacast rules, such as maximum queue time, remain in
effect.
Deltacast Timeout for calls : the amount of time, in seconds, that
an agent has to pick up a call before it is offered to the next agent or queue.
You can configure different time thresholds for agents working at a computer
and agents using twinning
to answer calls on a mobile phone. Agents answering on a mobile phone might
need more time to answer than agents working at a computer.
Missed Call Threshold : set the number of consecutive calls that
an agent can miss (that is, not pick up within the timeout threshold) before
they are placed in missed
call status .
Unresponsive Threshold : set the number of times that a call is
unable to reach an agent's agent adapter before the agent is placed in
Unresponsive status.
Optional: Select the Apply unresponsive thresholds when agent
is in an active chat or call session checkbox to apply the
unresponsive threshold count to agents that become unresponsive
during an active session.
Cascade Timer selection : select this checkbox to skip the cascade
group timer if no agents are available in the cascade group.
Configure your deltacast settings, and then click Save routing .
Turn on deltacast for calls at the queue level
Deltacast settings for queues are automatically inherited from the global
settings unless you change them for individual queues. You don't need to
turn on deltacast globally to turn it on for specific queues.
To turn on deltacast for calls at the queue level, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu . The Queue Menu Settings page appears.
Depending on the type of queue that you want to edit, click Edit / View
in either the IVR (Interactive Voice Response) , Mobile , or Web
pane.
Click the queue that you want to edit.
In the Settings pane, go to the Routing section. Under Routing ,
each routing capability is marked with either a Global or a Queue
label. These labels indicate whether this capability is configured globally
or at the queue level.
Click Configure .
In the Routing pane, go to the Call Routing section, and then click
Deltacast . The following configuration settings appear:
Auto Answer : connects incoming calls with an agent without clicking
to answer. For more information, see Turn on auto answer for calls at
the queue level .
Deltacast Attempt Count : the number of times deltacast should offer
an incoming call to a single, eligible agent before switching to
multicast.
Disable Multicast fallback after all Deltacast attempts : Select this checkbox to
disable multicast fallback after all deltacast attempts. The system only uses deltacast
attempts to find an agent. If no agent accepts the deltacast, the call isn't multicasted
to all available agents. Instead, it follows your settings for cascade groups or
overcapacity deflection. All other deltacast rules, such as maximum queue time, remain in
effect.
Deltacast Timeout for calls : the amount of time, in seconds, that
an agent has to pick up a call before it is offered to the next agent or queue.
You can configure different time thresholds for agents working at a computer
and agents using twinning
to answer calls on a mobile phone. Agents answering on a mobile phone might
need more time to answer than agents working at a computer.
Missed Call Threshold : set the number of consecutive calls that
an agent can miss (that is, not pick up within the timeout threshold) before
they are placed in missed
call status .
Unresponsive Threshold : set the number of times that a call is
unable to reach an agent's agent adapter before the agent is placed in
Unresponsive status.
Optional: Select the Apply unresponsive thresholds when agent
is in an active chat or call session checkbox to apply the
unresponsive threshold count to agents that become unresponsive
during an active session.
Cascade Timer selection : select this checkbox to skip the cascade
group timer if no agents are available in the cascade group.
Configure your deltacast settings, and then click Save .
Optional: Skip cascade group timer
The skip cascade group timer capabilities let you bypass the
cascade timer settings and route a call or chat to the next available agent,
regardless of your cascade group. With this feature enabled, the call is
routed to agents immediately if they are available in the next cascade group.
When disabled, the platform will adhere to the cascade timer settings and wait
for the specified time before proceeding to the next group.
In the CCAI Platform portal, go to Settings > Operation Management >
Routing .
Under Cascade Timer selection , select the Skip Cascade Group Timer
checkbox. By default, this checkbox is unchecked.
Click Save Routing .
Monitoring and reporting for calls
Admins and managers can see agents in Missed Call status in the Logged in
agent section of the call dashboard. Agents in Missed Call status are also
visible on the Settings > Agents > Agent page. You can click the Filter
Settings menu on this page to filter on agent status.
View deltacast and multicast call data
All notifications offered, pickup attempts, and successfully answered calls are
logged and can be viewed in reports and reporting APIs. The following reports
are available:
Agent Activity - Summary Report
Agent Activity - Timeline Report
To download a report, follow these steps:
Go to Reports > Agents & Teams .
Choose an agent or team for which you want to see data.
Under Select Session Type , select Calls .
Under Select Reports Desired , select the report type(s) that you want.
Select the Timeframe and Timezone .
Click Download . Deltacast metrics are labeled in the downloaded report.
Deltacast for chat
If enabled, deltacast extends to every channel and every queue that uses chat.
It applies to all chat types and the following chat flows:
Transfers
Chats routed through Direct Access Points (DAPs)
Queues with cascade groups enabled
Queues with percent allocation groups enabled
Eligible agents
To receive a deltacast call, an agent must fulfill one of following
requirements:
Status is set to Available.
Status is In-chat and the agent has not reached the chat concurrency
threshold.
Chat concurrency is configured globally in Settings > Chat and
individually in Settings > Users & Teams > Edit a user (pencil
icon) .
If the agent is assigned to both chat and call sessions, a call counts
as one chat toward the chat threshold.
Missed chat status
The agent status Missed Chat is used for sessions with Deltacast enabled. Missed
chats are defined as Deltacast chats routed to an agent and not answered within
the Deltacast Timeout time threshold. Missed Multicast chats don't count
toward Missed Chat.
If an agent is placed in Missed Chat status, they won't be able to receive
new chats until either they or an Admin manually change their status back to
Available. Admins can see a count of agents in Missed Chat status in the Chat
Dashboard, Agent page, and in reporting. Agent status and activity information
is also available using the API. To be placed in Missed Chat status, the agent
must have been in Available status. If they are in any other status, Missed Chat
still shows in reporting but not in the agent adapter.
Missed Chat status is independent of the Missed Call threshold. Chats are not
projected to agents in Missed Chat status; they are only routed to agents in
Available or In-chat status.
Deltacast routing logic for chat
Basic routing:
When a chat enters the queue, the chat is offered to a single, eligible
agent (status Available or In-Chat), according to these rules:
If multiple agents are in Available status, the chat is routed to the
agent with the longest period of time since they were last in In-Chat
status.
If all assigned agents are In-call or In-chat, the agent who has the
fewest number of concurrent chats will get the next chat.
If an agent is on a call, the call counts as [X] concurrent chats as
configured in Settings > Operation Management .
If multiple agents have the same number of concurrent chats, the agent
with the longest period of time since receiving a chat will get the next
chat.
If the agent who is offered a chat does not pick up the chat within the time set in the deltacast timeout setting, the chat is offered using Multicast.
Multicast sends the chat to every agent in the queue, including the agent
who didn't answer the chat in time.
Routing with cascade groups:
The chat is offered to an eligible agent in Cascade Group A for the duration
of the Deltacast Timeout for Chats timer. If it isn't answered:
If there are remaining deltacast attempt counts for the chat, the chat is
routed to an eligible agent with the next longest duration.
If the deltacast attempt count has run out, then the chat is offered
using multicast to all agents in Cascade Group A, both in Available and
In-chat statuses, including the original agent routed the chat (if they
did not reach the Missed Chat threshold).
If no agents pick up the chat and the cascade group timer expires: The chat
is offered using multicast to all agents in Cascade Group A in either
Available and In-Chat status, including the original agent routed the
chat.
If no agents pick up the chat and the cascade group timer expires: The chat
is offered using multicast to all eligible agents in Cascade Group B, and
continues to offer the chat using multicast to all eligible agents
in Cascade Group A.
If the cascade group timer expires, and Group B is the last group: The chat
continues to be routed using multicast until the unanswered chat
expiration timer expires, as set in Settings > Chat .
Routing with auto answer enabled:
The incoming chat will be routed using Deltacast to an eligible agent based
on the routing logic described previously. Auto answer initiates the chat
conversation in the Agent Adapter. The agent will hear an audible tone, and
the New Chat tab will flash red.
Turn on deltacast for chat globally
This section shows you how to switch from the default multicast routing to
deltacast routing. Global deltacast settings are inherited by all eligible
queues, unless you change them at the queue level. You are not required to turn
on deltacast globally to turn it on for individual queues. For more information,
see Turn on deltacast for chat at the queue
level .
To turn on deltacast for chat globally, follow these steps:
Go to Settings > Operation Management , and then go to the Routing
pane.
At Chat Routing , select Deltacast . The following configuration
settings appear:
Deltacast Attempt Count : The number of times deltacast should offer an
incoming chat to a single, eligible agent before switching to Multicast.
Deltacast Routing Logic : This setting affects the eligible agent
calculation. This setting only applies to agents who are assigned to a
queue configured for both chat and call channels.
Deltacast Timeout for chats : This is the time duration, in seconds,
before the chat is offered to the next agent or queue.
The suggested value is 10 seconds, which ensures that the chat has
enough time to connect in most network connection scenarios.
Make sure that percent allocation and cascade group time
threshold settings are higher than the deltacast Timeout value. If
they are the same or lower, you won't be able to enable deltacast.
Group settings are located in the General section of the
Operation Management page.
Missed Chat Threshold : set the number of chats that an agent can miss
(not pick up in the timeout threshold) before they are placed in missed
call status .
Unresponsive Threshold : set the number of times that a chat is unable
to reach an agent's agent adapter before the agent is placed in
Unresponsive status.
Optional: Select the Apply unresponsive thresholds when agent is in an
active chat or call session checkbox to apply the unresponsive
threshold count to agents that become unresponsive during an active
session.
Cascade Timer selection : Select this checkbox to skip the cascade
group timer if no agents are available in the cascade group.
Configure your deltacast settings, and then click Save routing .
Turn on deltacast for chat at the queue level
Deltacast settings for queues are automatically inherited from the global
settings unless you change them for individual queues. You don't need to
enable deltacast globally to configure it for specific queues.
To turn on deltacast for chat at the queue level, follow these steps:
Go to Settings > Queues > {Web or Mobile channel} > { QUEUE_NAME } .
Go to the Routing section. If you have global deltacast settings
enabled, a Global tag appears. All queues automatically
inherit global deltacast settings unless you change them at the queue level.
Click Configure , and then click Deltacast to enable it for this
queue.
Set your deltacast configuration values, and then click Save . For more
information about deltacast configuration settings, see
Turn on deltacast for chat globally .
Monitoring and reporting for chat
Admins and managers can see agents in Missed Chat status in the Logged in
Agent section of the CCAI Platform Chat Dashboard in the
CCAI Platform portal. Agents in Missed Chat status are also visible in the
CCAI Platform portal in the Agents > Agent page. You can click the Filter
Settings menu at the top of this page to filter on agent status.
View deltacast and multicast chat data
All notifications offered, pickup attempts, and successfully answered chats are
logged and can be viewed in reports and reporting APIs. The following reports
are available:
Agent Activity - Summary Report
Agent Activity - Timeline Report
To download a report, follow these steps:
Go to Reports > Agents & Teams .
Choose an agent or team for which you want to see data.
Under Select Session Type , select Chats .
Under Select Reports Desired , select the report type(s) that you want.
Select the Timeframe and Timezone .
Click Download . Deltacast metrics are labeled in the downloaded report.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
