# Google Cloud Contact Center as a Service

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 294
Unique features: 325

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-03 | Repeat contacts data in advanced reporting dashboards |  | Advanced reporting dashboards now include repeat contacts data in queue monitoring, interaction details, and connected call and chat tables. |
| 2026-04-03 | Total Queued Answered metric in Chat Queue Metrics Explore |  | The Chat Queue Metrics Explore now includes a Total Queued Answered metric for counting chats answered from the queue. |
| 2026-04-02 | Agent Assist for unassociated calls and chats |  | Agent Assist can now be enabled at the team level for calls and chats that are not associated with a queue. |
| 2026-04-02 | HubSpot CRM ticket view |  | HubSpot integrations can now use either the standard CRM ticket view or the real-time Help desk view. |
| 2026-04-02 | Pre-recorded audio for virtual agents |  | Virtual agents can respond with pre-recorded audio instead of text-to-speech across voice channels. |
| 2026-04-02 | Virtual agent SIP endpoint ringing timeout |  | Virtual agents can be configured with a custom ringing timeout for outbound calls transferred to SIP endpoints. |
| 2026-03-24 | Agent extension search multiple-match paging |  | Improves extension directory searches by reading multiple matching agent results in groups of eight and adding guidance messages. |
| 2026-03-24 | Callback fulfillment hours |  | Lets administrators define the hours during which the contact center fulfills callbacks, with optional rollover to the next day. |
| 2026-03-24 | Chat resume endpoint |  | Adds an endpoint for resuming dismissed or va_dismissed chat sessions so participants can see the chat history. |
| 2026-03-24 | CX Agent Studio chat virtual agents |  | Adds support for creating chat virtual agents with Customer Experience Agent Studio. |
| 2026-03-24 | HubSpot company profile lookup |  | HubSpot integrations can search both Contacts and Companies to identify end users during active sessions. |
| 2026-03-24 | HubSpot mobile phone number lookup |  | Adds HubSpot integration support for matching contacts by mobile phone number during incoming voice or chat sessions. |
| 2026-03-24 | Predictive campaign dialing controls |  | Adds new predictive campaign controls for dialing rate, agent occupancy, and optional abandonment limits. |
| 2026-03-14 | Advanced reporting in French Canadian |  | Advanced reporting dashboards are available in French Canadian. |
| 2026-03-14 | Channel Interval dashboard |  | The Channel Interval dashboard now lets users drill into historical queue metrics from trend-line data points. |
| 2026-03-14 | Queue Interval dashboard |  | The Queue Interval dashboard now lets users drill into historical queue metrics from SLA by Interval data points. |
| 2026-03-14 | Queue Performance - Calls dashboard |  | The Queue Performance - Calls dashboard provides queue-level performance metrics for call sessions. |
| 2026-03-14 | Queue Performance - Chats dashboard |  | The Queue Performance - Chats dashboard provides queue-level performance metrics for chat sessions. |
| 2026-03-14 | Virtual agent dashboard wait-time metrics |  | The Virtual agent dashboard adds wait-time virtual agent tiles for in-queue interactions, in-queue time, and average in-queue time. |
| 2026-03-14 | Voicemails dashboard |  | The Voicemails dashboard shows voicemail volume and agent response performance. |
| 2026-02-17 | Raw data export call_participants data type |  | Raw data export includes a call_participants data type for wait-time virtual agent escalation details. |
| 2026-02-17 | Salesforce Service Cloud secondary lookup object |  | The Salesforce Service Cloud integration can use a secondary lookup object when the primary lookup returns no results. |
| 2026-02-03 | Email dashboard queue transfers detail table |  | The Email dashboard adds a Queue Transfers Detail table for email transfer information. |
| 2026-02-03 | Performance overview dashboard |  | The Performance overview dashboard adds tiles for average queue time, average queue abandon time, and sentiment score. |
| 2026-02-02 | Add third party to call endpoint |  | The Apps API provides an endpoint to add a third party to an ongoing call by dialing their phone number. |
| 2026-02-02 | Agent deflection audio recording uploads |  | Agents can upload audio recordings from the call adapter for after-hours deflection, overcapacity deflection, and automatic redirection greetings. |
| 2026-02-02 | Apps API end_user.phone parameter |  | The Apps API accepts an optional end_user.phone parameter during chat creation to enable CRM lookup by phone number and display the end user's name in the chat adapter. |
| 2026-02-02 | Assigned agent tags on email lists |  | Email list views can display round tags with agent initials to show the assigned agent or unassigned emails. |
| 2026-02-02 | Custom data-collection forms for chats in Web SDK |  | The Web SDK can send custom data-collection forms for chats to end users. |
| 2026-02-02 | Custom panel language variables |  | Custom panel URLs can use agent language variables to dynamically set the panel language. |
| 2026-02-02 | Disable multicast for call routing |  | Call routing can be configured to disable multicast so calls are offered to one agent at a time through deltacast. |
| 2026-02-02 | Email subject line editing |  | Agents can edit email subject lines when replying to or forwarding messages while preserving the conversation thread. |
| 2026-02-02 | END_USER_NUMBER text-to-speech variable |  | The @{END_USER_NUMBER} variable can read out the end user's phone number in voicemail and callback prompts. |
| 2026-02-02 | End-user-to-agent extension input |  | Administrators can configure end users to enter an agent extension number during a call and provide supporting prompt and directory messages. |
| 2026-02-02 | French Canadian portal localization |  | The Google Cloud CCaaS portal can be viewed in French Canadian, while system and error messages remain in English. |
| 2026-02-02 | Keyboard DTMF entry in the agent adapter |  | Agents can type or paste alphanumeric strings into the call adapter to play DTMF tones with pauses. |
| 2026-02-02 | Revert to agent deflection settings |  | Administrators can revert agent deflection settings to the values selected by the agent in the call adapter. |
| 2025-12-06 | Cloud Logging integration |  | Cloud Logging is generally available for Google Cloud CCaaS projects to capture log data and events and filter entries by the ContactCenter resource type. |
| 2025-12-06 | Wait-time virtual agents for calls |  | A virtual agent can handle escalated incoming calls by providing real-time queue updates and transferring the call when an agent becomes available. |
| 2025-12-06 | Web SDK exited event |  | The web SDK now provides an exited event that triggers when an end user leaves a chat session after the agent ends it. |
| 2025-12-02 | Global push notification disablement |  | Android and iOS SDKs can be configured to turn off push notifications at the global level. |
| 2025-11-19 | Alvaria Advanced List Management integration with the outbound dialer |  | The outbound dialer can integrate with Alvaria Advanced List Management to exchange contact and result files through Cloud Storage. |
| 2025-11-19 | Chat check-in |  | Chat check-in prompts end-users at the front of the queue and removes them if they do not respond in time. |
| 2025-11-19 | Chat platform API media file endpoint |  | The chat platform API adds an endpoint that lets applications retrieve media files sent during a chat session. |
| 2025-11-19 | Click-to-call dial pad screen |  | Instances with CRM click-to-call can show a dial pad screen before a call starts so agents can adjust call details. |
| 2025-11-19 | Dial pad improvements |  | The agent adapter dial pad now includes additional selectors such as country code, outbound number, language, and queue. |
| 2025-11-19 | Email session transfer restrictions |  | Administrators can disable incoming email transfers for a queue with the Allow incoming Email Transfers setting. |
| 2025-11-19 | Flexible delimiter support for Alvaria Advanced List Management integration |  | The integration supports files that use comma, pipe, tab, or semicolon delimiters. |
| 2025-11-19 | Multi-tenancy support for Alvaria Advanced List Management integration |  | The integration supports separate tenant data handling to help keep each tenant's data isolated and secure. |
| 2025-11-19 | Queue email signatures |  | Administrators can define standardized email signatures for all outgoing emails sent from a queue. |
| 2025-11-19 | Sensitive data redaction |  | Chat conversations can automatically detect and redact sensitive data in real time and in transcripts. |
| 2025-11-19 | Standalone queue menu settings page |  | Each queue has a standalone Queue Menu Settings page that loads faster than the embedded queue settings view. |
| 2025-11-19 | Virtual agent aliases |  | Virtual agent aliases let multiple virtual agents present the same public-facing name across supported channels and messages. |
| 2025-11-19 | Virtual task assistant support in the chat platform API |  | The chat platform API now supports transferring chats to virtual task assistants and exchanging messages and webhook content with them. |
| 2025-11-17 | All Interactions dashboards |  | The All Interactions calls and chats dashboards were updated with renamed detail tables and improved table formatting. |
| 2025-11-17 | Campaigns dashboard |  | The Campaigns dashboard shows real-time and historical call campaign metrics, including outcomes, volumes, and agent performance. |
| 2025-11-17 | Real-time dashboards |  | Real-time dashboards now load and refresh faster. |
| 2025-11-03 | Agent extensions |  | Administrators can assign extension numbers to agents and provide an extension directory for end-users to call them directly; Agents can be assigned extensions for agent-to-agent calling. |
| 2025-11-03 | Email session transfer to queue |  | Agents can transfer an assigned email session to a queue from the email adapter. |
| 2025-11-03 | Google Cloud CCaaS version 3.41 |  | Google Cloud CCaaS version 3.41 was released. |
| 2025-11-03 | Nested disposition lists |  | Administrators can organize disposition codes into nested folders for use in the agent adapter and desktop. |
| 2025-11-03 | Skip IVR menu readout |  | Call flows can skip the IVR menu readout and route callers directly to the default queue. |
| 2025-11-03 | Skip language selection |  | Call flows can skip language selection and route callers to the default language and queue. |
| 2025-11-03 | Virtual agent to virtual agent direct chat transfer |  | Dialogflow payloads can transfer a chat session directly from one virtual agent to another using the destination agent ID. |
| 2025-10-31 | Agent Assist conversation profiles |  | Conversation profiles for Dialogflow CX virtual agents can now be created in europe-west4 and europe-west6; This feature lets administrators onboard, edit, remove, and monitor Agent Assist conversation profiles. |
| 2025-10-31 | Agent desktop state persistence |  | The agent desktop preserves active conversations, finished tabs, and recently closed sessions after a browser refresh. |
| 2025-10-31 | Custom lookup URL variables |  | Custom lookup URLs now support five additional variables for caller, agent, session, and outbound phone number data. |
| 2025-10-31 | Email adapter session search |  | Agents can search for email sessions by email address and name in the email adapter. |
| 2025-10-31 | Hide Start a new conversation button in Web SDK |  | The web SDK can hide the Start a new conversation button after a chat session ends. |
| 2025-10-31 | Start Screen Share button customization |  | Administrators can customize the Start Screen Share button color to match brand palettes. |
| 2025-10-31 | Web SDK transcript download controls |  | The web SDK can hide transcript download options during and after a chat session. |
| 2025-10-30 | Agent Preference table |  | The Agent Availability dashboard now includes an Agent Preference table for assigning skilled agents and spotting improper availability filter changes. |
| 2025-10-30 | Audit Log dashboard |  | A dashboard that shows configuration changes to an instance, including what changed, who changed it, and when. |
| 2025-10-09 | Agent activity timeline dashboard |  | The dashboard shows the historical activity of an agent. |
| 2025-10-09 | All Interactions - Chat dashboard |  | The All Chat Interactions (Historical) table can now link Chat ID values to chat transcripts when CRM transcript storage is configured. |
| 2025-10-09 | Call Queue Metrics (Historical) Explore |  | The explore now includes CSL % and Total Queued Answered metrics. |
| 2025-10-09 | Callback call cancellation API |  | The callback calls API can cancel a scheduled callback call or a list of scheduled calls. |
| 2025-10-09 | Deflections dashboard |  | The dashboard provides deflection information by queue and across the contact center. |
| 2025-10-09 | Destination queue display in the agent adapter |  | The agent adapter shows the destination queue during IVR call transfers and deflections. |
| 2025-10-09 | Email search in the agent adapter |  | Agents can search for emails in the agent adapter by keyword, session ID, or subject. |
| 2025-10-09 | Key-value pair ordering in agent adapter and CRM records |  | Google Cloud CCaaS now controls the order of key-value pairs shown in the agent adapter and CRM records for virtual agent session variables and Web SDK custom data. |
| 2025-10-09 | Mid-session authentication |  | Mid-session authentication is supported for all CRM types. |
| 2025-10-09 | Queue Group Dashboards All |  | The dashboard now uses separate tables for queue group call and chat performance. |
| 2025-10-09 | Queue Interval dashboards |  | The Queue Interval calls and chats dashboards now include a Total Queue Entries column for inbound interactions entering a queue, excluding transfers. |
| 2025-10-09 | Transfer history in the agent adapter |  | The agent adapter shows transfer history in call and chat details, including a Transfer History section and pane. |
| 2025-10-09 | Virtual Agent dashboards |  | The virtual agent metrics table on the call and chat dashboards now includes an Interaction Outcome column. |
| 2025-10-09 | Virtual agents for SMS |  | Virtual agents can be assigned to SMS queues to support end users in SMS chat sessions. |
| 2025-08-20 | Connecting message playback skip setting |  | Administrators can configure an instance to skip playback of the connecting message when calls connect to agents. |
| 2025-08-20 | CSAT dashboard |  | The dashboard provides insight into customer satisfaction ratings for agent sessions. |
| 2025-08-20 | Dispositions dashboard |  | The dashboard provides disposition information to help identify common end-user issues and concerns. |
| 2025-08-20 | Email transfer restrictions |  | Administrators can prevent agents from transferring email sessions to other agents while still allowing self-assignment and manager-to-agent transfers. |
| 2025-08-20 | Failed sessions dashboard |  | The dashboard provides insight into why sessions are failing. |
| 2025-08-20 | Generative knowledge assist |  | Generative knowledge assist is now available in the agent adapter; Generative knowledge assist is now available in Agent Desktop as a draggable widget. |
| 2025-08-20 | Missed interactions dashboard |  | The dashboard provides data on missed interactions to help optimize operations. |
| 2025-08-20 | Screen share dashboard |  | The dashboard provides data on agent screen share interactions with end users. |
| 2025-08-20 | Web SDK accessibility |  | Web SDK version 3.37 improves accessibility to better align with the European Accessibility Act. |
| 2025-08-20 | Workforce Management terminology update |  | Workforce Management labels now use Google Cloud CCaaS terms such as manager, agent, and Manager Portal. |
| 2025-07-02 | Email queue auto-assignment restrictions |  | Email queues can be configured to auto-assign incoming emails only during operating hours or to signed-in agents. |
| 2025-07-02 | Salesforce closed record options for scheduled calls |  | Lets Salesforce-integrated CCaaS instances decide whether to reopen or cancel scheduled calls for closed records, or ignore record status checks. |
| 2025-07-02 | Screen Share recordings storage |  | Administrators can configure retention for Screen Share recordings in external storage and store recordings from the Screen Share adapter. |
| 2025-05-27 | Email subject line removal during interaction data deletion |  | Removes email subject lines when end-user interaction data is deleted from the instance. |
| 2025-05-27 | Image insertion in outbound emails |  | Allows images to be included in outbound agent emails and auto-response emails. |
| 2025-05-27 | Outbound-only sender email for auto-response emails |  | Allows auto-response emails to use an outbound-only sender address that prevents replies. |
| 2025-05-27 | QM chat session event export |  | Streams chat session events in real time to an external quality management system. |
| 2025-05-13 | Automatic wrap-up assignment for the last completed chat |  | Automatically assigns wrap-up status to the agent's last completed chat when the agent enters wrap-up manually. |
| 2025-05-13 | Screen Share |  | Renames the Co-browse capability to Screen Share in the user interface and documentation. |
| 2025-05-13 | Spelling and grammar check for SMS and WhatsApp sessions |  | Adds spelling and grammar checking to SMS and WhatsApp chat sessions. |
| 2025-05-13 | Virtual agent to virtual agent chat transfers |  | Allows a virtual agent to transfer a chat session to another virtual agent through the destination queue. |
| 2025-04-02 | Bulk agent status import notifications |  | Adds upload completion status and confirmation email notifications for bulk agent status imports. |
| 2025-04-02 | CCaaS session object attachment to Salesforce CRM records |  | Lets Salesforce CRMs attach a CCaaS session object to a matching CRM record when a call or chat session is appended. |
| 2025-04-02 | Completed Chats transcript viewing |  | Lets users view saved chat transcripts from the Completed Chats dashboard. |
| 2025-04-02 | Conditional overcapacity deflections |  | Lets calls use wait-time or time-of-day conditions to trigger distinct overcapacity deflection messages. |
| 2025-04-02 | Conversation IDs in session metadata |  | Adds conversation IDs to session metadata files for sessions involving virtual agents or Agent Assist. |
| 2025-04-02 | CRM comment options for external call and chat storage |  | Lets administrators choose how call recordings and chat transcripts are referenced in CRM records when saved to external storage. |
| 2025-04-02 | SIP header parameters for contact list destinations |  | Lets a contact list destination pass data parameters to a SIP URI when an agent places or transfers an outbound call. |
| 2025-04-02 | Virtual task assistant post events |  | Introduces new post events for virtual task assistants so session variables and related actions can be remapped in downstream integrations. |
| 2025-04-02 | Voice Outbound (UCaaS) report type |  | Adds a report type for Voice Outbound (UCaaS) calls and chats in report creation. |
| 2025-02-17 | Apps API user configuration data retrieval |  | The Apps API can now be used to retrieve user configuration data. |
| 2025-02-17 | Automatic redirection |  | Automatic redirection lets administrators route specified percentages of sessions to selected redirection groups. |
| 2025-02-17 | Availability preferences |  | Availability preferences let administrators filter incoming contacts using criteria such as channel, direction, schedule, and transfers. |
| 2025-02-17 | Call blending |  | Agents can be automatically transitioned between outbound campaign calls and inbound calls based on configured call volumes and conditions. |
| 2025-02-17 | Chat transfer limits |  | Chat transfer limit settings can include virtual agents, human agents, or both, and can reset the transfer count when a chat is dismissed; Chat sessions can be limited to a configured number of transfers, with options to disable transfer or allow one final transfer to a queue. |
| 2025-02-17 | Custom agent status lists |  | Custom agent status lists let administrators create status lists and assign them to queues or teams. |
| 2025-02-17 | Interaction history retrieval |  | Interaction history can be retrieved for up to 90 days, with configurable retrieval windows of 60 or 90 days. |
| 2025-02-17 | Outbound calling restrictions for emergency or special services |  | Outbound calling restrictions let administrators block specific agents or locations from calling emergency or special service numbers. |
| 2025-02-17 | Spelling and grammar check for chat adapter |  | Spelling and grammar check for the chat adapter lets agents toggle proofreading on or off and choose the language. |
| 2025-02-17 | Team transfer restrictions |  | Team transfer restrictions let administrators control which sources and destinations are allowed for transfers. |
| 2025-02-17 | Virtual agent mid-session data parameters |  | Data parameters can be passed to a virtual agent while a session is in progress. |
| 2025-01-07 | Call waiting |  | Agents can manage multiple inbound calls from different channels at the same time. |
| 2025-01-07 | Cascade conditions |  | Cascade group logic can include SLA, agent availability, and queue length conditions. |
| 2025-01-07 | Chat web forms |  | Agents can present data-collection forms to end users through the agent adapter during chat sessions. |
| 2025-01-07 | Direct SMS numbers |  | Agents can be assigned direct SMS numbers so end users can send SMS chat messages directly to agents without going through a queue. |
| 2025-01-07 | Outbound call queue selection |  | Agents can be allowed to choose the queue to use when placing an outbound call. |
| 2025-01-07 | SDK custom data controls |  | Admins can control which SDK custom data is sent to session metadata files, CRM records, and the agent adapter at both the global and queue levels. |
| 2025-01-07 | Short call recovery timer |  | The recovery timer after a short call is reduced from 180 seconds to 15 seconds. |
| 2025-01-07 | SMS chat configuration |  | Agents can configure SMS chat deflections and greeting messages in the chat adapter. |
| 2025-01-07 | Supported languages |  | The product now supports additional agent-facing and end-user-facing languages, including Croatian, Hindi, Romanian, Russian, Ukrainian, Tagalog, and English (India). |
| 2025-01-07 | Wrap-up settings |  | Wrap-up can be configured separately for inbound and outbound calls at both the global and queue levels. |
| 2024-11-07 | Agent Assist added event |  | A new Agent_Assist_Added event provides the conversation ID for a specific Agent Assist session. |
| 2024-11-07 | Agent authentication status marking |  | Agents can click the authentication icon in Agent Adapter to mark a customer as authenticated or unauthenticated. |
| 2024-11-07 | Agent status translation |  | Default, system, and custom agent statuses can now be translated for supported CCaaS languages. |
| 2024-11-07 | Alvaria Workforce Management chat integration |  | Alvaria-integrated customers can receive chat session data. |
| 2024-11-07 | CRM account and record creation skip |  | Zendesk and ServiceNow integrations can be configured to skip CRM account and record creation. |
| 2024-11-07 | CRM lookup SDK data parameters |  | CRM lookup now supports SDK Name, SDK Email, SDK Phone, and SDK Identifier parameters. |
| 2024-11-07 | Custom CRM lookup flow SDK parameters |  | The CRM lookup flow can now use SDK data parameters. |
| 2024-11-07 | Direct SIP REFER call transfers |  | Virtual assistant call transfers can now use the direct SIP REFER method and pass transfer context such as caller intent and account information. |
| 2024-11-07 | Email session ID display |  | The email adapter and email subject line can display the session ID for an email thread. |
| 2024-11-07 | Interaction history |  | Agents and supervisors can view a customer’s prior call and chat interactions for added session context. |
| 2024-11-07 | Queue operation statuses endpoint |  | A new API endpoint lets you check whether a queue is in After Hours or Overcapacity status. |
| 2024-11-07 | Queue transfer restrictions |  | Agents can be restricted to transferring sessions only to approved queues or teams. |
| 2024-11-07 | Queue voicemail clearing |  | Administrators can clear voicemails from any queue from the Call settings page. |
| 2024-11-07 | Salesforce admin user CRM API calls |  | Salesforce can use the admin user for CRM API calls for record creation and updates while agents retain ownership of CRM-specific actions. |
| 2024-11-07 | Segment summarization |  | Generative session summarization now includes summaries for individual conversation segments within a session. |
| 2024-10-15 | Auto answer voice detection |  | Auto-answer can listen for an agent's voice after a call connects and mark the call missed if no voice is detected within the configured time. |
| 2024-10-15 | Conversational Agents (Dialogflow CX) regional availability |  | Conversational Agents (Dialogflow CX) is now supported in additional regions. |
| 2024-10-15 | Emergency calling |  | Agents in the US and Canada can place emergency service calls, and agents in Canada can also call special services. |
| 2024-10-15 | Inbound SIP header data capture |  | Incoming SIP header data can now be passed to session metadata files and CRM records. |
| 2024-10-15 | Spelling and grammar check |  | The agent adapter now provides spelling and grammar suggestions while agents enter text. |
| 2024-09-23 | Agent-level deflections |  | Agent-level deflections let agents choose how to route agent-to-agent calls for over-capacity, after-hours, and automatic redirection scenarios. |
| 2024-09-23 | Direct inbound calling |  | Direct inbound calling lets administrators assign direct phone numbers to agents or queues so end users can bypass IVR queue trees. |
| 2024-09-23 | First in first out queue routing |  | First in first out queue routing lets transferred and standard calls and chats share equal priority in queue assignment. |
| 2024-09-23 | Rich messaging |  | Rich messaging lets users format chat messages with styles, lists, links, and emojis in the chat adapter, shortcuts, and SDK initial messages. |
| 2024-09-23 | Session data in the agent adapter |  | Session data can be displayed in the agent adapter, including virtual agent session variables and custom data from web and mobile SDK sessions. |
| 2024-09-03 | Barge for chat |  | Barge for chat lets supervisors join or take over live chat conversations with end users. |
| 2024-09-03 | Raw data export |  | Raw data export lets users export detailed CCAI Platform session data to an external storage bucket for analysis. |
| 2024-09-03 | Reserved data attributes |  | Reserved data attributes let sessions be tagged as Verified Customer, Bad Actor, or Repeat Customer and surfaced in the agent adapter. |
| 2024-09-03 | Virtual agent ticket creation and assignment for custom CRM apps |  | Virtual agents can create and assign incoming tickets for custom CRM apps before a human agent takes ownership. |
| 2024-08-09 | Organization Policy custom constraints |  | Organization Policy custom constraints provide centralized, programmatic control over restricted fields in CCAI Platform resources. |
| 2024-08-09 | Private Service Connect |  | Private Service Connect enables private access to CCAI Platform instances while keeping agent, manager, and administrator traffic within Google Cloud. |
| 2024-08-05 | Agent statuses endpoint |  | The agent statuses API endpoint now returns an agent's IP address. |
| 2024-08-05 | Auto answer settings relocation |  | Auto answer settings for calls and chats have been moved to new routing configuration locations. |
| 2024-08-05 | Cascade group timer |  | The cascade group timer can now be configured at the queue level. |
| 2024-08-05 | Contact lists |  | Agents can create and manage personal, favorite, global, and custom contact lists for external contacts. |
| 2024-08-05 | End-of-session transfers for virtual agents |  | Virtual agents can receive end-of-session transfers for wrap-up interactions such as surveys or feedback. |
| 2024-08-05 | Force logout endpoint |  | The Apps API now includes a force logout endpoint for logging agents out by agent ID or IP address. |
| 2024-08-05 | Partial response cancellation for virtual agents |  | Virtual agents can cancel partial-response playback when a final fulfillment arrives. |
| 2024-08-05 | Percent allocation group timer |  | The percent allocation group timer can now be configured at the queue level. |
| 2024-08-05 | Quality management session event agent_number field |  | Call session event payloads now include the agent_number value for events with an agent participant. |
| 2024-08-05 | Queue-level whisper settings for calls |  | Call whisper settings can now be configured per queue, including custom messages and countdown behavior. |
| 2024-08-05 | Workforce management |  | Workforce management provides forecasting, scheduling, and adherence monitoring for omnichannel contact center operations. |
| 2024-07-17 | Agent chat adapter redesign |  | The agent chat adapter has been redesigned with improved chat details, transfer, and overview workflows. |
| 2024-07-09 | Custom data types for events in Web SDK |  | The Web SDK now supports the custom_data_secured and custom_data_not_secured event data types. |
| 2024-07-09 | Quality management session events |  | Quality management integrations can now receive session events for hold, mute, redaction, recording indication, and queue information. |
| 2024-05-28 | Co-browse events from agent adapter |  | The agent adapter now generates events during co-browse sessions. |
| 2024-05-28 | End co-browse sessions with Apps API |  | The Apps API now provides an endpoint to end a co-browse session by external session ID. |
| 2024-05-28 | Next UI support in ServiceNow CRM integration |  | The Next UI experience is now supported in the ServiceNow CRM integration. |
| 2024-04-23 | Deployment schedules |  | Deployment schedules let you control when Google's automatic updates are applied to a contact center instance. |
| 2024-04-22 | Authentication context for CRM SAML SSO |  | You can now select the authentication context when setting up SAML single sign-on for supported CRMs. |
| 2024-04-22 | Email channel endpoints in Manager API |  | The Manager API now includes endpoints for email data management and analysis. |
| 2024-04-22 | Live translation glossaries |  | Live translation now supports glossaries to help ensure specific terms are translated appropriately. |
| 2024-04-22 | Queue-level chat auto answer |  | Chat auto-answer settings can now be configured at the queue level. |
| 2024-04-22 | Session report event field in Manager API |  | Session reports from the Manager API now include an event field that indicates how a session ends. |
| 2024-04-22 | Skip CRM account and record creation |  | Salesforce CRM and custom CRM sessions can now skip account creation, record creation, or both. |
| 2024-03-26 | Agent aliases |  | Agents can communicate with end users using aliases instead of their real names. |
| 2024-03-26 | Agent-to-agent call deflection |  | Agent-to-agent calls can be configured to deflect to voicemail after a set timeout. |
| 2024-03-26 | Calls waiting indicator |  | The call adapter shows the number of queued calls waiting to be answered. |
| 2024-03-26 | Chat adapter message timestamps in seconds |  | The chat adapter can display message timestamps with second-level precision. |
| 2024-03-26 | Email channel SSO with Google Cloud OAuth |  | The email channel can use Google Cloud OAuth 2.0 credentials for single sign-on. |
| 2024-03-26 | Multiple data parameters for DAP API requests |  | API requests to Direct Access Points for IVR queues can include multiple data parameters from SIP call headers. |
| 2024-03-26 | Outbound phone number country code propagation |  | The country code from an outbound phone number is automatically included in the phone number of an added call party. |
| 2024-03-26 | Support phone number display on incoming calls |  | The incoming call screen shows the support phone number that the end user dialed. |
| 2024-03-26 | Virtual task assistant for chats |  | A virtual task assistant is available for chat interactions in the web SDK. |
| 2024-02-21 | Agent availability fields in status and wait time APIs |  | The current status and wait time APIs return additional fields for agent availability counts. |
| 2024-02-21 | Cold chat transfer |  | An agent can transfer a chat session to another agent or queue and leave immediately. |
| 2024-02-21 | Dialogflow partial response |  | Dialogflow can send an initial fulfillment message before a webhook finishes running. |
| 2024-01-29 | Agent Call Adapter answer button |  | The Agent Call Adapter answer button has been made more visible to agents. |
| 2024-01-29 | Agent Chat Adapter automatic translations |  | The Agent Chat Adapter can automatically translate messages between the end user's language and the queue's default language. |
| 2024-01-29 | Email channel Chrome push notifications |  | Agents can receive Chrome push notifications when new emails are assigned. |
| 2024-01-29 | Email channel Microsoft OAuth authentication |  | Email channel authentication now supports Microsoft OAuth. |
| 2024-01-29 | Queue-level Deltacast and Multicast configuration |  | Admins can configure Multicast or Deltacast at the queue level and set the Deltacast attempt count. |
| 2024-01-29 | Web chat virtual agent metadata passthrough |  | Web chat queues can pass CCAI Platform metadata parameters to a Virtual Agent. |
| 2024-01-09 | Dialogflow API Analyze Content support for chat virtual agent sessions |  | Chat virtual agent sessions can use Analyze Content in the Dialogflow API. |
| 2024-01-09 | Dialogflow CX Chat and Voice legacy onboarding flow | 2024-01-09 | The legacy Dialogflow CX Chat and Voice onboarding flow is deprecated in favor of the new onboarding flow; deprecated on 2024-01-09. |
| 2024-01-09 | Dialogflow CX chat onboarding flow selection |  | The virtual agent platform workflow drop-down now includes the new Dialogflow CX onboarding flow for chats. |
| 2024-01-09 | Email channel |  | The Email Channel adds configuration options, an integrated email adapter, the In-email agent status, and CRM data push settings. |
| 2024-01-09 | Multiple disposition code lists |  | Disposition codes can be grouped into lists and applied to queues that share common disposition codes. |
| 2024-01-09 | Previous chats display |  | Agents and end users can view prior support chat interactions above the current chat. |
| 2024-01-09 | Queue-level estimated wait time caller announcements |  | Administrators can configure estimated wait time announcements at the queue level. |
| 2024-01-09 | WhatsApp channel support |  | CCAI Platform now supports WhatsApp as a social channel. |
| 2023-12-06 | Call Adapter agent and queue tabs |  | The Call Adapter provides separate Agent and Queue tabs for smoother transfer management. |
| 2023-12-06 | Call Adapter blended SMS tab |  | The Call Adapter gives Blended SMS a dedicated tab and a more chat-like interface. |
| 2023-12-06 | Call Adapter call details screen |  | The Call Adapter adds a call details screen with in-call access to call information and CRM launch support. |
| 2023-12-06 | Call Adapter queue search |  | The Call Adapter adds search for finding the right queue more quickly. |
| 2023-12-06 | Call Adapter transfer workflow |  | The Call Adapter combines Transfer and Add Party into one streamlined transfer flow and supports use of the Outside Line tab during transfers. |
| 2023-12-06 | Call history |  | Agents can view completed calls and related metadata such as timestamps, call duration, and disposition notes. |
| 2023-12-06 | Custom caller ID using SIP headers |  | Administrators can set a custom caller ID from an incoming SIP header for call connecting and connected screens. |
| 2023-12-06 | Display Previous Chats |  | End users and agents can view prior chat interactions in the Web and Mobile SDKs and the agent chat adapter. |
| 2023-12-06 | Holidays messaging menu |  | Administrators can customize voice and text greetings for each holiday. |
| 2023-12-06 | Phone number management pagination |  | The phone number management page supports page-by-page browsing with up to 100 entries per page. |
| 2023-12-06 | Phone number management search |  | The phone number management page supports searching by phone number or label. |
| 2023-12-06 | Session data export settings |  | Administrators can configure session data export settings under Developer Settings > Session Data Export. |
| 2023-12-06 | Verint Face-to-Face recording settings |  | With a Verint integration, administrators can add email domains to record calls made by agents with matching email domains. |
| 2023-12-06 | Voicemail forwarding |  | Agents can forward voicemails to other queues, specific agents, or back to the same queue. |
| 2023-12-06 | Voicemail history |  | Agents can access previous voicemails to support follow-up actions when needed. |
| 2023-11-07 | Campaign time zone management |  | Administrators can define time zone schemas and apply a specific schema to each campaign. |
| 2023-11-07 | Company Do Not Call list for campaigns |  | Campaign owners can create and manage a company Do Not Call list to block selected outbound campaign calls. |
| 2023-11-07 | Kustomer bi-directional agent status syncing |  | The Kustomer integration supports two-way synchronization of agent status. |
| 2023-11-07 | Localization country code setting for calls |  | Call and add-party dialogs can use a country code based on the outgoing or dialed number. |
| 2023-11-07 | Virtual Agent channel parameters |  | Virtual Agents can pass channel-specific parameters to CCAI Platform when invoking a Dialogflow agent. |
| 2023-11-07 | Virtual Agent signed and unsigned data parameters |  | Virtual Agent calls and chats can pass signed and unsigned data parameters through the Mobile SDK and Web SDK. |
| 2023-10-17 | Additional language support |  | Polish, Czech, Australian English, and Hungarian are now supported across all channels. |
| 2023-10-17 | Agent Status Breakthrough |  | Incoming calls can be routed to agents even when they are in statuses that normally do not accept calls. |
| 2023-10-17 | Custom notification tones |  | Custom audio files can be uploaded for incoming call and chat notifications, as well as new chat messages. |
| 2023-10-17 | External Storage permission for recordings and transcripts |  | A new permission controls access to call recordings and chat transcripts stored in external storage without a CRM. |
| 2023-10-17 | Kustomer API rate limits |  | API rate limits for Kustomer integrations have been improved. |
| 2023-10-17 | Third-party call recording after agent exit |  | Calls can continue to be recorded after an agent leaves following the addition of a third party. |
| 2023-10-17 | Virtual Agent data parameters |  | Virtual Agents can receive session-based contextual data, including dynamic routing and sentiment parameters, plus static or dynamic metadata at the mobile queue level. |
| 2023-10-17 | Voice Virtual Agent transfers to parent queues |  | Voice Virtual Agent transfers can be assigned to top-level queues so users can hear subqueue options in IVR. |
| 2023-09-25 | Agent status management API |  | Two Apps API endpoints let you retrieve and update agent statuses, including bulk status updates for teams or selected agents. |
| 2023-09-25 | ANI storage retention |  | ANI storage can now be enabled through Support. |
| 2023-09-25 | Automatic CRM record loading on chat tab switch |  | The CRM record can now load automatically when an agent switches between active chat tabs. |
| 2023-09-25 | Call recording and chat transcript file access control |  | A role permission now controls whether users can access call recordings and chat transcript files stored in external storage without a CRM. |
| 2023-09-25 | CCAI Platform WhatsApp flag |  | The WhatsApp flag for CCAI Platform is disabled until OEM compatibility is available. |
| 2023-09-25 | Chat and call cast failure status handling |  | If a chat or call cast fails or is not picked up, the agent status now changes to Unresponsive or Missed Chat as appropriate. |
| 2023-09-25 | Chat API suite |  | The Chat API suite now provides APIs and webhooks to create chats, exchange text and media messages, and end chats with agents or virtual agents. |
| 2023-09-25 | Chat inbound message event |  | The agent chat adapter now emits a Chat Inbound Message event when a consumer message is received. |
| 2023-09-25 | Chat outbound message event |  | The agent chat adapter now emits a Chat Outbound Message event when an agent message is sent. |
| 2023-09-25 | Content cards |  | Content cards let you deliver rich messages in virtual agent chats with customizable layouts and deep links. |
| 2023-09-25 | Historical report access for assigned queues only |  | Historical reports can now be limited so that only data for assigned queues is downloaded. |
| 2023-09-25 | Historical report access for assigned teams only |  | Historical reports can now be limited so that only data for assigned teams is downloaded. |
| 2023-09-25 | International calling restrictions |  | International calling can now be limited by area code, short code, or phone number for specific agents or all agents. |
| 2023-09-25 | iOS SDK accessibility improvements |  | The mobile iOS SDK adds support for several WCAG accessibility criteria to improve assistive technology compatibility. |
| 2023-09-25 | Microsoft Dynamics contact object case field population |  | When the Contact object type is used, customer information can populate fields on a Case object at the same time. |
| 2023-09-25 | NICE QM integration |  | The platform provides an out-of-the-box data export integration for NICE QM; The platform provides an out-of-the-box data export integration for NICE QM. |
| 2023-09-25 | Post-call session transfers |  | Calls can now end with a cold transfer to a virtual agent for automated workflows such as post-call surveys. |
| 2023-09-25 | ServiceNow integration agent status inheritance |  | The ServiceNow integration now supports agent status inheritance as a CRM feature. |
| 2023-09-25 | ServiceNow integration custom callback number support |  | The ServiceNow integration now supports custom callback numbers as a CRM feature. |
| 2023-09-25 | ServiceNow integration default user support |  | The ServiceNow integration now supports a Default User option with reduced admin permission requirements. |
| 2023-09-25 | ServiceNow integration field mapping and property assignment configuration |  | The ServiceNow integration now provides more flexible field mapping and property assignment configuration options. |
| 2023-09-25 | ServiceNow integration OAuth authentication support |  | The ServiceNow integration now has improved OAuth authentication support, including admin tokens. |
| 2023-09-25 | ServiceNow integration survey support |  | The ServiceNow integration now supports surveys as a CRM feature. |
| 2023-09-25 | Session Data report access management |  | Admins can now manage who has access to the Session Data report. |
| 2023-09-25 | Virtual agent top-level queue transfers |  | A virtual agent can now transfer consumers to a top-level queue and navigate active subqueue and leaf queue options. |
| 2023-08-21 | Agent ID dynamic session variable |  | The agent ID can be inserted as a session variable in automated messages and chat shortcuts to support agent-specific routing. |
| 2023-08-21 | Alvaria data exporter queue naming |  | Queue names exported to Alvaria can include the language code and queue ID so repeated names remain distinguishable across queue paths. |
| 2023-08-21 | Call Adapter error messages |  | Call Adapter error messages now include more detailed error codes and explanations. |
| 2023-08-21 | Call Session Events |  | This feature deploys generator and sender applications to process call events and forward them to configured endpoints. |
| 2023-08-21 | Custom POST events |  | Custom JavaScript can listen for CCAIP events and react to them with extended payload data for consumer interactions. |
| 2023-08-21 | Dynamic parameters for SIP Redirect and Dialogflow |  | SIP Redirect and Dialogflow sessions can use new real-time dynamic parameters such as DNIS, latest agent details, queue language, and sentiment scores. |
| 2023-08-21 | Fallback IVR navigation settings |  | Administrators can configure global and queue-level fallback routing when an end user does not select a queue in IVR navigation. |
| 2023-08-21 | Headless Web SDK |  | The Headless Web SDK lets teams build a fully customized and branded web support experience using its API suite. |
| 2023-08-21 | Hold music during call connection |  | Call handling now keeps music playing until an agent joins the call and plays a distinct sound for the agent when the end-user joins. |
| 2023-08-21 | Microsoft Teams integration |  | CCAI Platform can integrate with Microsoft Teams to route and transfer calls, assign Teams users to queues, and support cascade groups. |
| 2023-08-21 | Mobile SDK UI customization |  | The mobile SDK chat interface can now be customized more extensively to match branding needs. |
| 2023-08-21 | Outbound SMS API |  | Agents can start outbound SMS sessions with number pairs that were previously used by other agents. |
| 2023-08-21 | Report data restriction controls |  | Administrators can restrict editing and limit downloadable report data to assigned teams or assigned queues. |
| 2023-08-21 | SIP phone number format support |  | DAP now supports incoming SIP phone numbers in the sip:[number]@[domain] format. |
| 2023-08-21 | Skip Cascade Group Timer |  | This setting bypasses cascade timers and routes a call or chat to the next available agent. |
| 2023-08-09 | International calling configuration |  | Phone numbers can be configured for international calling at the country code level with user-level access controls. |
| 2023-08-09 | Outbound dialer list management API |  | The List Management API lets you programmatically add, remove, and update outbound dialer campaign contact lists. |
| 2023-06-30 | Alvaria WFM integration |  | Alvaria WFM integration is available as an out-of-the-box data export for session data and daily agent productivity reports. |
| 2023-06-30 | Call recordings per call segment |  | Call recordings can be saved as separate recordings for each call segment instead of a single recording for the whole call. |
| 2023-06-30 | External Storage dynamic folder paths and filename formats |  | External Storage can use runtime variables and custom subpaths to format folder paths and filenames for stored contact center files. |
| 2023-06-30 | ServiceNow native CRM integration |  | ServiceNow is available as a native fully integrated CRM with embedded agent adapters. |
| 2023-06-16 | CCAI Insights |  | CCAI Insights helps detect and visualize patterns in contact center data. |
| 2023-05-25 | Agent Assist Session Summarization |  | Agent Assist Session Summarization automatically generates a summary of a chat or phone call transcript at the end of the session. |
| 2023-05-16 | SIP Directory call routing and transfers |  | The SIP Directory can be used to configure SIP call routing and transfers in IVR queue settings. |
| 2023-05-12 | Holiday Hours |  | Holiday Hours lets administrators create, manage, and group custom holidays with defined names, times, and dates. |
| 2023-05-12 | Legacy session type components | 2023-10-06 | Legacy session type components are no longer updated with new functionality and are deprecated; deprecated on 2023-10-06. |
| 2023-05-12 | Outbound Number |  | Outbound Number lets the outbound dialer choose which outbound phone number to use for each contact. |
| 2023-05-12 | Session Type V2 |  | Session Type V2 adds new fields and variables that distinguish inbound SMS, outbound SMS, and outbound SMS via API. |
| 2023-04-27 | Campaign Management Unique ID column |  | Campaign management CSV uploads can include a unique ID column to associate CRM data with each dialer call. |
| 2023-04-27 | Manager API calls endpoint fields |  | The /manager/api/v1/calls endpoint includes Machine Detected and Skipped fields for campaign call status analysis. |
| 2023-04-27 | Virtual Agent transcripts to external storage |  | Custom CRM can send Virtual Agent transcripts to external storage for review and compliance. |
| 2023-04-27 | Voice Virtual Agents call transfer to phone number or SIP endpoint |  | Voice Virtual Agents can transfer a call to a specific phone number or SIP endpoint. |
| 2023-04-25 | Custom CRM background screen pop |  | Supports doing a CRM screen pop in the background for embedded adapters. |
| 2023-04-25 | Queue-level wrap-up settings |  | Lets admins set different wrap-up times per queue so agents have time to finish work before taking another interaction. |
| 2023-03-14 | Agent Adapter audio chimes |  | Adds and updates audio chimes in the Agent Adapter for call connection and related call events. |
| 2023-03-14 | Custom CRM extended OAuth authentication |  | Adds extended OAuth authentication support to the Custom CRM integration. |
| 2023-03-14 | Custom CRM nested parameter support |  | Allows nested parameters to be used in Custom CRM API endpoint configurations. |
| 2023-03-14 | Dialogflow wrap-up custom events |  | Sends DF wrap-up events as custom events to Dialogflow CX when a Virtual Agent session ends. |
| 2023-03-14 | Domain-based access control |  | Restricts which domains can frame the agent adapter and admin portal through an allowlist. |
| 2023-03-14 | DTMF support |  | Enables DTMF tone support during Virtual Task Assistant and Virtual Agent setup. |
| 2023-03-14 | Kustomer call transfer comments |  | Posts call transfer information as a comment in Kustomer. |
| 2023-03-14 | Kustomer custom fields creation |  | Allows administrators to create custom Account and Record fields from CCAIP. |
| 2023-03-14 | Microsoft Dynamics default user assignment |  | Lets admins assign a CRM Admin user as the default user for CRM actions and Customer Support Virtual Agent sessions. |
| 2023-03-14 | Salesforce multi-number account lookup |  | Lets CCAIP look up a Salesforce account across multiple phone number fields and map them to one account. |
| 2023-03-14 | Twinning |  | Allows a primary extension and a secondary extension to operate as a single phone. |
| 2023-03-14 | Virtual Task Assistant data parameters |  | Lets admins define parameters that Virtual Task Assistant can collect and send, with support for multiple languages and a dedicated settings panel. |
| 2022-10-21 | Bring Your Own Carrier |  | This feature lets customers bring their own phone numbers through their carrier. |
| 2022-10-21 | Dual Channel Recording |  | This feature records calls in separate customer and agent audio channels. |
| 2022-10-21 | Secure Payments |  | This feature adds Braintree as a payment provider and improves secure payment configuration and agent payment handling. |
| 2022-10-21 | Secure Payments Multi-currency |  | This feature adds multi-currency payment support for Stripe and Braintree. |
| 2022-10-21 | Virtual Agent Dialogflow Barge-in |  | This feature supports Dialogflow CX barge-in for voice virtual agents. |
| 2022-10-21 | Virtual Agents with Dialogflow CX |  | This feature allows onboarding and use of Dialogflow CX agents configured for the global region. |

Source file slug: `google-cloud-contact-center-as-a-service.md`

