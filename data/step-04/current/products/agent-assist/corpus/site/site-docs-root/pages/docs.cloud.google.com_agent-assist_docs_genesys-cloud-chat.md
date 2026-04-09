---
title: "Configuration for chat integration \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-chat
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/agent-assist/docs
source_metadata:
  url: https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-chat
  title: "Configuration for chat integration \_|\_ Agent Assist \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Agent Assist
Guides
Send feedback
Configuration for chat integration
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions for how to configure UI modules for integration with chat.
Set up chat integration
Genesys Cloud supports two types of messaging channels: Chat V2 and Messenger. These channels are designed to enhance customer engagement and provide efficient communication between agents and customers.
Messenger and chat V2 feature real-time communication and communicate with Agent Assist, but Genesys recommends Messenger over chat V2. Messenger has more options for facilitating agent's work. For more details, see the feature comparison .
Integration type
Multiple conversations
Generate summaries
Asynchronous update
Unlimited timeout
Chat V2
close
check
close
close
Messenger
check
check
check
check
Configure the interaction widget
To use either chat V2 or Messenger integration, users must configure the interaction widget. The widget monitors ongoing conversations and transfers the discussion data to Agent Assist, which then creates recommendations based on the context.
To configure the interaction widget, follow the instructions for setting up an interaction widget integration in Genesys Cloud .
After you install the integration widget, click the Configuration tab. The URL of the application must have the following replacements:
Replace APPLICATION_SERVER_URL with the URL of your UI application server.
Append pcConversationID , gcHostOrigin , and gcTargeEnv to {APPLICATION_SERVER_URL} so the full URL has the following format:
{APPLICATION_SERVER_URL}?conversationid={{pcConversationId}}&gcHostOrigin={{gcHostOrigin}}&gcTargetEnv={{gcTargetEnv}}
The pcConversationId , gcHostOrigin , and gcTargetEnv variables are used to construct the client application to communicate with Genesys cloud. Once the iframe for the client application loads, Genesys cloud populates these variables automatically.
Update the Iframe Sandbox Options to allow-scripts , allow-same-origin , allow-forms , allow-modals , and allow-popups .
Update the Iframe Feature/Permissions Policy to clipboard-write , microphone , and display-capture .
Example URL:
https://my-project.wm.r.appspot.com?conversationid = {{ pcConversationId}}&gcHostOrigin = {{ gcHostOrigin}}&gcTargetEnv = {{gcTargetEnv}}
Configure the Messenger
To set up the Genesys Cloud Messenger, follow the provided steps in this document . After you configure Messenger, follow these instructions to deploy it. When you deploy Messenger, you can use it to communicate with your customers.
Example Messenger deployment:
During the Messenger deployment process, select the inbound architect flow that you configured earlier. This specific flow is crucial for handling incoming messages.
Configure the inbound call flow
To test with the Genesys Cloud voice integration, set up an inbound call flow. This flow defines how Genesys Cloud will handle incoming calls, such as configuring an IVR, defining DTMF tones, and transferring the call to a queue.
Follow these steps to create an inbound call flow:
Enable a queue .
Assign yourself to the queue.
Create a DID number for testing when calling the agent.
Create inbound call routing that has the DID number assigned to it.
Connect the call route to an inbound call flow .
An example within an inbound call flow is to transfer the call to the Agent Assist integration queue. When a user calls the DID number and the agent has the On Queue toggle enabled, the call is available for an agent to pick up in Genesys Cloud. More complex queues can be configured according to business requirements.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
