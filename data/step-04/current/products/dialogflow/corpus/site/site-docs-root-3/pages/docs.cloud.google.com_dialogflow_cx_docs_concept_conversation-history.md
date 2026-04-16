---
title: "Conversation history \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history
  title: "Conversation history \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Send feedback
Conversation history
Stay organized with collections
Save and categorize content based on your preferences.
The conversation history tool provides an interface
for browsing and analyzing actual production conversations
between your agent and end-users.
This can be useful to evaluate the functional performance of your agent
or to debug issues.
Flow and page analysis helps you understand
traffic and escalations through the flow graph of an agent. This enables
agent builders to analyze traffic flow (high and low traffic paths), discover
issue hotspots (for example, to pinpoint high escalations), and drill down to
the specific pages and intents causing issues. Flow and page analysis can be
used along with conversation history filters, to allow for maximum flexibility
in studying a relevant subset of traffic.
Limitations
Loading the Flow Analysis Table and Flow Analysis Graph views
can be slow for large agents.
To improve load times,
use an intent filter and a one week date range.
At most 500 turns will be logged for each conversation.
Permissions required
Using this tool requires the dialogflow.conversations permission.
This permission can be added to a
custom role .
It is also available in the
Admin role ,
as well as
other Dialogflow CX roles .
Enable and disable conversation history
The conversation history tool displays conversations from your agent.
You can enable and disable conversation history with the
Enable conversation history
agent setting.
You can also control how long data is retained by
using the retention_window_days
security setting .
Audio playback
Conversation history provides audio playback of conversations.
You can enable this feature in the
general settings .
If it is not enabled when you load a conversation,
a notification will be shown indicating that audio playback is unavailable.
Browsing the conversation history
To use the conversation history tool:
Open the Dialogflow CX console .
Choose your project.
Select your agent.
Select the Manage tab.
Click Conversation History .
Conversations are listed in a table.
Optionally apply filters using the filter control above the table.
Select one of the tabs, each of which are described later in this
document.
Download conversation history to a CSV file
Note: The maximum number of conversations that can be downloaded to a CSV
file is 50 . You can apply filters in the Filter conversations field
at the top of the Conversation History page to select only the specific
conversations you want to export. To export larger batches of conversations, you
must use BigQuery .
Click Conversation History in the left navigation.
Conversation sessions are listed in a table.
Select a conversation session, then click the open conversation in
preview panel button:
Click Export all conversations . A CSV file containing the conversations
will automatically download to your computer. The maximum number of
conversations that can be downloaded is 50 . If the conversation session
you selected contains more than 50 conversations, the download will fail.
Conversations
Conversations are shown in two views:
conversation summary view and conversation details view.
Conversation summary view
The conversation summary view lists all conversations.
The following metadata is provided for each conversation:
X
Item
Conversation ID
An identifier for the conversation
Duration
Duration of the conversation
Turns
The number of conversational turns
Channel
Either chat (text), voice, or undetermined (no end-user input has been provided to the conversation yet)
Language
The language for the conversation
Environment
The agent's environment
Start time
Start time for the conversation
Flags
May be set to Live Agent Handoff (if conversation escalated to a human agent) or Abandoned (if end-user left the incomplete conversation) or TU,TD (if answer in the conversation got end-user rating)
You can filter the results by metadata (except environment and duration)
and the following additional filter options:
X
Item
Intent
The provided intent was matched at some point in the conversation
No Match
Some subset of conversational turns resulted in an intent no-match
Flow
The provided flow is the final active flow at the end of some conversation turn
Page
The provided page is the final active page at the end of some conversation turn
Is Live Agent Handoff
The Live Agent Handoff flag is set
Is Abandoned
The Abandoned flag is set
Conversation ID
A specific conversation is chosen
Start Time
A date range is provided
Agent Utterance
The provided text is a substring of an utterance that was used by the agent at some point in the conversation. The substring must contain complete words (bounded by space characters or either end) as found in the utterance.
User Utterance
The provided text is a substring of an utterance that was used by the user at some point in the conversation. The substring must contain complete words (bounded by space characters or either end) as found in the utterance.
Has Thumbs Up Feedback
Thumbs Up feedback provided for a response in the conversation, the TU flag is set
Has Thumbs Down Feedback
Thumbs Down feedback provided for a response in the conversation, the TD flag is set
Conversation details view
You can browse the turn-by-turn view of a specific conversation
in the conversation details view.
Each conversational turn provides the end-user message,
the agent message,
and the following metadata:
X
Item
Intent
An intent display name that was matched or No Match
Page
The final active page name
Flow
The final active flow name
Parameters
Parameters collected during the conversational turn
Example use case
The tool can be used to identify agent issues that result
in escalations to a human agent.
From the conversation summary view,
you can apply the Is Live Agent Handoff filter for Yes .
Examine some of these conversations
and try to find common patterns.
For example,
you may find that in most of the conversations,
there is a no-match flag for turns on a specific page.
This would indicate that an intent route needs to be created,
or that an existing intent route is not in scope when it needs to be.
Flow analysis table
The Flow Analysis - Table tab
is used to analyze traffic and exits
in flows and pages in tabular form.
The following metrics are shown:
X
Item
Flow name
Flow name for each flow in your agent
Relative traffic
The number of conversations that went through this flow
Escalation rate
The percentage of conversations that result in a request for human escalation out of all conversations that went through this flow
Exit rate
The percentage of conversations that ended after this flow or transitioned to SESSION_END from this flow, out of all conversations that went through this flow
Clicking the
list list_alt button
opens a sample of relevant conversations for the row.
You can read through the samples to better understand specific and nuanced issues.
For example,
you can examine why escalations are happening.
To view the full details of a sample,
click the Conversation details link.
Clicking Detailed Stats for a flow
opens the traffic stats for flows.
This shows flow transition stats from and to the selected flow.
The following metrics are shown:
X
Item
Next Flow
Stats for transitions from selected flow to another flow
Previous Flow
Stats for transitions from another flow to the selected flow
Clicking any flow row drills down into the pages that compromise that flow.
The following metrics are shown:
X
Item
Relative Traffic
The number of conversations that visited this page.
Escalation rate
The percentage of conversations that result in a request for human escalation out of all conversations that visited this page
Exit rate
The percentage of conversations that exit the flow or exit the session (END_SESSION) directly after visiting this page, out of all conversations that visited this page
No Match rate
The percentage of conversations that resulted in no-match out of all conversations that visited this page
Clicking Detailed Stats for a page
opens the traffic stats for pages.
This shows page transition stats from and to the selected page.
The following metrics are shown:
X
Item
Intent
Stats for intent matches for the page
Next Page
Stats for transitions from selected page to another page
Previous Page
Stats for transitions from another page to the selected page
Flow analysis graph
The Flow Analysis - Graph tab
is used to analyze traffic and exits
in flows and pages in graph form.
Clicking on any flow drills down into the traffic for
the pages within the flow.
You can use the zoom slider to vary the level of detail that you see on the
graph. Low volume paths are dropped from the visualization at lower settings.
Even at higher settings, very low volume paths are always hidden.
Metrics are color-coded to easily find high severity issues.
Clicking the
list list_alt button
shows relevant conversations.
Clicking on any flow takes you to the pages within that flow. Here you get more
overlay metrics:
relative traffic, no match rate, escalation rate, and exit rate.
Access conversation history with the API
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can access conversation history with the API.
See the
V3beta1 reference documentation .
Privacy
When you enable conversation history, Google collects and stores your
conversation data for a period of time before permanently deleting it. The
default is 365 days, but you can shorten this time period using the
retention_window_days field in
SecuritySettings .
You retain full ownership of your data while it's stored. Google won't use
your data or access it for any purposes other than customer support.
Previous
arrow_back
Voice agent design best practices
Next
Cloud logging
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
