---
title: "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist
  title: "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\
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
Agent Assist
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to set up Agent Assist for
Contact Center AI Platform (CCAI Platform). Agent Assist provides in-the-moment assistance
to your human agents, helping them resolve customer issues faster and with
greater accuracy.
Set up Agent Assist
This section shows you how to set up Agent Assist.
Service account requirements
To use Agent Assist, you need to create a
Google Cloud Service Account and key in
the project where you created your Agent Assist conversation
profile . In addition, you must grant the following
IAM roles to your service account:
Dialogflow Agent Assist
Client
Note: Failure to grant the correct IAM role prevents
Agent Assist from working correctly. Caution: Follow Google's best practices for managing service account
keys .
Add an Agent Assist platform
To add an Agent Assist platform, follow these steps:
In the CCAI Platform portal, click Settings > Developer Settings .
If you don't see the Settings menu, click menu Menu .
Go to the Agent Assist Platform pane, and then click Add platform .
The Add an Agent Assist platform dialog appears.
In the Name field, enter a name for your platform.
In the Service field, select CCAI Conversation Profile , and then
click Create .
Click Upload key to upload your JSON service account key. For more
information, see Service account
requirements .
Click close Close to close the
dialog.
Configure Agent Assist for calls globally
To configure Agent Assist for calls globally, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Agent Assist pane, and then click the Agent Assist toggle
to the on position.
Select the Agent Assist capabilities that you want to turn on,
and then click Save Agent Assist . For information about
Agent Assist call capabilities, see Agent Assist for
calls .
Configure Agent Assist for chats globally
To configure Agent Assist for chats globally, follow these steps:
In the CCAI Platform portal, click Settings > Chat . If you don't
see the Settings menu, click menu
Menu .
Go to the Agent Assist pane, and then click the Agent Assist toggle
to the on position.
Select the Agent Assist capabilities that you
want to turn on.
If you select the Spelling and Grammar Check checkbox, then
the following two checkboxes appear:
Allow agents to turn on/off automatic checks : Select this checkbox
to let agents turn on and off spelling and grammar check in the chat
adapter.
Allow agents to select languages : Select this checkbox to let agents
select the language that the chat adapter uses when checking spelling
and grammar.
Click Save Agent Assist .
For information about Agent Assist chat capabilities, see Agent Assist
for chat .
Configure Agent Assist at the queue level
To configure Agent Assist at the queue level, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
Depending on the channel you want, click Edit / View in one of the
following panes: IVR (Interactive Voice Response) , Mobile , or
Web .
Click a leaf queue.
In the Settings pane, under Agent Assist , click Configure . The
Agent Assist Profile Configuration pane appears.
In the Platform Name field, select a platform that you added
previously . The Profile Name field
appears.
In the Profile Name field, select a profile.
Note: If you intend to use the spelling and grammar Agent Assist
capability, select the spelling-and-grammar profile.
Click Save . The Settings pane appears.
Under Agent Assist , click the Enable Agent Assist toggle to the on
position.
Note: If you click the Agent Assist toggle to the off position, you lose
your Agent Assist configuration.
Configure Agent Assist at the team level
You can configure Agent Assist at the team level for sessions that
aren't associated with a queue. This lets you use Agent Assist with the
following session types:
Calls to direct phone numbers
Calls to agent extension numbers
Outbound calls where no queue is selected
Chats transferred directly to another agent
Note: When a chat is transferred, the originating agent sees
Agent Assist as it's configured for the originating team or
queue, and the receiving agent sees Agent Assist as it's
configured for the receiving team or queue.
If an agent belongs to multiple teams, there's a hierarchy of priority that
determines which team's settings apply to the agent. For more information, see
Team priority when an agent belongs to multiple
teams .
To configure Agent Assist at the team level, follow these steps:
In the CCAI Platform portal, click Settings > Users & Teams . If
you don't see the Settings menu, click menu Menu .
For the team that you want to edit, click edit edit icon . The Edit Team pane
appears.
Go to the Agent Assist section, and then click expand_more arrow-down-icon to expand the
section.
Click Configure . The Agent Assist Profile Configuration pane
appears.
In the Platform Name field, select a platform that you added
previously . The Profile Name field
appears.
In the Profile Name field, select a profile.
Note: If you intend to use the spelling and grammar Agent Assist
capability, select the spelling-and-grammar profile.
Click Save .
Click the Enable Agent Assist toggle to the on position.
Note: If you click the Agent Assist toggle to the off position, you lose
your Agent Assist configuration.
Agent Assist for calls
The following call capabilities are available with Agent Assist. To
enable these capabilities, select them when you turn on and configure
Agent Assist for calls .
Knowledge assist : provides suggestions for knowledge articles to human
agents during a call. These suggestions are based on the dialog between the
agent and the end-user. An agent can examine the suggestions and decide
which to share with the end-user. You must create a knowledge
base to use knowledge assist. For quota requirements, see
Generative knowledge assist .
Generative knowledge assist : provides suggestions for generated
knowledge articles to human agents during a call. These suggestions are
based on the dialog between the agent and the end-user. For more
information, see generative knowledge
assist . For quota
requirements, see Generative knowledge
assist .
Proactive generative knowledge assist : follows the ongoing conversation
between an agent and end-user. It proactively provides search query
suggestions based on the conversation context. For more information, see
generative knowledge
assist . For quota
requirements, see Proactive generative knowledge
assist .
Sentiment analysis : analyzes messages in real time from both the human
agent and the end-user to determine emotional intent. The score is visible
in the agent adapter. For quota requirements, see Sentiment
analysis .
Real-time call transcription : transcribes calls in real time for agents
to reference during the call or for analysis after the call. For quota
requirements, see Voice transcription .
Generative AI session summarization : displays a generated summary in the
agent adapter when the call enters wrap-up. If there was a single human
agent in the session, the summary is for the entire session. If there were
multiple human agents in the session, the session is divided into segments,
one for each human agent that participated. In that case, each human agent
sees a summary for the segment that they participated in. An agent can
insert the summary, along with their own notes, during wrap-up. The agent
can then submit the summary and notes to your CRM or external storage,
depending on your configuration. For more information, see Summarization
with custom
sections . For quota
requirements, see Summarization .
Summarization automatic evaluation : assesses the quality of AI generated
summaries based on three metrics: accuracy, completeness, and adherence.
This feature helps to evaluate the quality of summarization generators,
which is crucial when tuning custom section definitions or upgrading
versions that affect summarization quality. For more information, see
Summarization automatic
evaluation . For quota
requirements, see Summarization
autoevaluation .
Agent experience
The following sections explain the agent experience for each
Agent Assist capability.
Knowledge assist
This feature follows a conversation between a live agent and a end-user
and provides the live agent with relevant document suggestions.
Agents are alerted to knowledge assist document suggestions when the
Agent Assist icon in the agent adapter has a green dot next to it.
Click the Agent Assist icon to view the suggestions in the Knowledge tab
in the agent adapter.
Click the External Link icon next to a suggested article to share a
document with the end-user.
Generative knowledge assist
Note: If a call is transferred to another agent, the knowledge articles will
remain accessible to the new agent until the session ends or the transferring
agent exits.
To see suggestions from generative knowledge assist, follow these steps:
Start a voice call :
As soon as a voice support session begins, the generative AI knowledge
assist panel will become active.
View knowledge suggestions :
The system listens to the ongoing conversation and generates knowledge
suggestions based on both the agent's and end-user's dialogue.
These suggestions appear as Clickable tiles in the
Contact Center AI Platform agent voice adapter.
Each tile includes a Title and a short Preview of the article .
Clicking the tile opens the full article in a new browser tab, so agents
can view more detailed information.
Searching for articles :
If agents need to search for a specific topic, they can manually enter
keywords in the Knowledge base search field within the same panel.
Matching articles will appear in a similar tile format, allowing
agents to click through and view the content.
Real-Time sentiment analysis
Sentiment Analysis evaluates the conversation between a human agent and end-user
to determine emotional intent. The analysis is generated in real-time to display
the sentiment of the present session, or as a one-time score upon Virtual Agent
escalation. Sentiment Analysis is available for both Voice and Chat.
For Voice : The Sentiment feature panel displays on the Agent Adapter during a
live session.
Sentiment Analysis breakdown
The Real-Time Sentiment Analysis displays 3 scores: last, session, and previous
leg.
A ( -- ) displays when no score is available.
last
sentiment score for the last consumer response (updates in real-time)
session
current average sentiment score (updates in real-time)
prev. leg
average sentiment score of the previous segment
There are three sentiments types (neutral, happy, and negative) in the Real-Time
Sentiment Analysis and scores displayed fall into the following ranges:
Over 63 = Happy
Between 38 and 63 = Neutral
Below 38 = Negative
During the session, the Real-Time Sentiment Analysis scores are sent the to the
Agent Adapter. After the session, the session's average score will be posted in
the CRM ticket.
Generated session summarization
If configured , you can add a generated summarization to
your wrap-up notes for the segment of the call that you handled.
To add a generated session summarization to your wrap-up notes, follow these
steps:
End a call in the call adapter. The Wrap-up pane appears.
In the Notes field, add your notes.
Click Agent Assist . A generated session
summary appears.
Click Insert summary to add the summary to your notes.
Edit or add to the notes as needed, and then click Submit .
Agent Assist for chat
The following chat capabilities are available with Agent Assist. To
enable these capabilities, select them when you turn on and configure
Agent Assist for chat .
Smart reply : provides chat responses to your human agents in real time
during a conversation. For quota requirements, see Smart
reply .
Generative knowledge assist : provides suggestions for generated
knowledge articles to human agents during a call. These suggestions are
based on the dialog between the agent and the end-user. For more
information, see generative knowledge
assist . For quota
requirements, see Generative knowledge
assist .
Proactive generative knowledge assist : follows the ongoing conversation
between an agent and end-user. It proactively provides search query
suggestions based on the conversation context. For more information, see
generative knowledge
assist . For quota
requirements, see Proactive generative knowledge
assist .
Sentiment analysis : analyzes messages in real time from both the human
agent and the end-user to determine emotional intent. The score is visible
in the agent adapter. For quota requirements, see Sentiment
analysis .
Generative AI session summarization : displays a generated summary of the
conversation when the chat session enters wrap-up. This summary provides a
brief overview of the chat session, including the resolution, situation, and
action. If there are multiple segments in the session, the summary is
available at the segment level. A segment is created each time there is a
transfer to a human or virtual agent. The agent can insert the summary along
with their own notes. The agent can then submit the summary and notes to
your CRM or external storage, depending on your configuration. For quota
requirements, see Summarization .
Spelling and grammar correction : provides spelling and grammar
suggestions for messages that agents type into the message field of the chat
adapter. Spelling and grammar correction is available for the Mobile, Web,
SMS, and WhatsApp channels. For quota requirements, see Before you
begin in the Agent Assist
documentation.
Important: Spelling and grammar correction is in
Preview . To
enable spelling and grammar correction, contact your Google Cloud account
team to request access. After you have access, the option to select
Spelling and grammar correction appears in the Conversational
Profiles settings page. For more information, see Create conversation
profile .
Agent experience
The following sections explain the agent experience for each
Agent Assist capability.
Smart Reply
Smart Reply suggests chat responses to the agent using context from the ongoing
conversation. The suggested responses are in bubbles above the text entry box.
How it works : Suggestions appear above the text entry field. Select
the suggestion that you want and paste it into the field and send the reply to the
end-user.
Knowledge Assist
This feature follows a conversation between a human agent and an end-user and
provides the human agent with relevant document suggestions.
How it works : The Knowledge Assist button is located in the top right hand
corner of the Agent Adapter. A pink circle indicates that articles are
available. Click the icon to show the articles. The icon expands to show a list
of articles.
Click the Share button next to the article to send it to the end-user.
Generative knowledge assist
To see suggestions from generative knowledge assist, follow these steps:
Start a chat session :
Once the chat session is active, Generative AI Knowledge Assist begins
providing suggestions based on the conversation.
View knowledge suggestions :
As the chat continues, the system analyzes both end-user and agent
messages and displays relevant article suggestions as Clickable tiles .
Each tile shows a Title and a Preview snippet . Click the tile
to open the article in a new tab for further reading.
Searching for articles :
Agents can manually search for specific knowledge articles by entering
keywords into the Knowledge base search field
Search results appear as tiles, similar to automatic suggestions, and can
be clicked to view the article
Note: If a chat is transferred to another agent, the knowledge articles
remain accessible to the new agent until the session ends or the transferring
agent exits.
Real-Time Sentiment Analysis
Sentiment Analysis evaluates the conversation between a human agent an end-user
to determine emotional intent. The analysis is generated in real-time to display
the sentiment of the present session, or as a one-time score upon Virtual Agent
escalation. Sentiment Analysis is available for both Voice and Chat.
Sentiment Feature Panel
For Chat : The Sentiment feature panel will be displayed in an
open state by default for all new chats. Click the X or the
Sentiment Stars Icon to open or hide the panel.
Sentiment Analysis breakdown
The Real-Time Sentiment Analysis displays 3 scores: last, session, and previous
leg.
A ( -- ) displays when no score is available.
Score
Description
last
Sentiment score for the last consumer response. Updates in real time.
session
Current average sentiment score. Updates in real time.
prev. leg
Average sentiment score of the previous segment.
There are three sentiments types (neutral, happy, and negative) in the Real-Time
Sentiment Analysis and scores displayed fall into the following ranges:
40-75 = Neutral
Over 75 = Happy
Below 30 = Negative
During the session, the Real-Time Sentiment Analysis scores are sent the to the
Agent Adapter. After the session, the session's average score will be posted in
the CRM ticket.
Generated session summarization
If configured , you can add a generated summarization to
your wrap-up notes for the segment of the chat session that you
handled.
To add a generated segment session summarization to your wrap-up notes, follow
these steps:
End a chat in the chat adapter. The Wrap-up pane appears.
In the Notes field, add your notes.
Click Agent Assist . A generated session
summary appears.
Click Insert summary to add the summary to your notes.
Edit or add to the notes as needed, and then click Submit .
Interaction history
Interaction history lets your agents view the end-user's interactions from
previous call and chat sessions. This provides context to help agents provide a
better support experience and improve handle time. Supervisors can also see
interaction history when viewing connected call or chat sessions.
Interaction history requires integrating your instance with a CRM.
Before you begin
Before you can use interaction history, you must do the following:
Set up Agent Assist .
Do one of the following, or both, depending on your use case:
Configure session summarization for calls. To do this, follow these steps:
Turn on and configure Agent Assist for calls .
In the Agent Assist pane, select the Gen AI session
Summarization and Call details view checkboxes.
Click Save Agent Assist .
Configure session summarization for chat. To do this, follow these steps:
Turn on and configure Agent Assist for
chat . In the Agent Assist pane, select the
Gen AI session Summarization and Chat details view
checkboxes.
Click Save Agent Assist .
Set up interaction history
To set up interaction history, do the following:
Integrate a CRM with your CCAI Platform instance. For more
information, see Custom CRM or other documentation under CRM
Integrations for integrating with commercially available CRMs.
Turn on interaction history .
Turn on interaction history
To turn on interaction history, follow these steps:
In the CCAI Platform portal, click Settings > Operation
Management . If you don't see the Settings menu, click menu Menu .
Go to the Interaction History pane.
Do one of the following, or both, depending on your use case:
For Call , select the Session Summary checkbox.
For Chat , select the Session Summary checkbox.
For Data Retrieval , select the period of time for which you want to
retrieve interaction history.
Click Save .
View interaction history for a connected session
You can view interaction history when viewing a connected call or chat sessions.
To view interaction history for a connected call, follow these steps:
In the CCAI Platform portal, click Calls > Connected . If you don't
see the Calls menu, click menu
Menu . The Connected Calls pane appears.
In the Actions column, for the connected call that you want, click more_horiz More and then Call Details .
The interaction history appears in the Call Details dialog.
To view interaction history for a connected chat session, follow these steps:
In the CCAI Platform portal, click Chat > Connected . If you don't
see the Chat menu, click menu
Menu . The Connected Chats pane appears.
In the Actions column, for the connected chat that you want, click more_horiz More and then Chat Details .
The interaction history appears in the Chat Details dialog.
Agent experience
Agents can view interaction history from the agent adapter.
To view interaction history from the call adapter, follow these steps:
Answer a call. For more information, see Agent call
adapter .
Click Details . The Call details pane appears.
Click Previous interactions . The Previous interactions pane appears.
If you have previous interactions, they appear in this pane. Otherwise,
No summary available appears.
Click Generated summaries to see generated summaries for each
interaction.
Click chevron_right Forward next to
an interaction to see an expanded view of the generated summary.
To view interaction history from the chat adapter, follow these steps:
Answer a chat request. For more information, see Handle a
chat .
Click Details . The Details pane appears.
Click Previous interactions . The Previous interactions pane appears.
If you have previous interactions, they appear in this pane. Otherwise,
No summary available appears.
Click Generated summaries to see generated summaries for each
interaction.
Click chevron_right Forward next to
an interaction to see an expanded view of the generated summary.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
