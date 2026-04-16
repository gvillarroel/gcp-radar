---
title: "Agent file attachments with the chat platform API \_|\_ Google Cloud Contact\
  \ Center as a Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api
  title: "Agent file attachments with the chat platform API \_|\_ Google Cloud Contact\
    \ Center as a Service \_|\_ Google Cloud Documentation"
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
Agent file attachments with the chat platform API
Stay organized with collections
Save and categorize content based on your preferences.
With a chat platform API custom app, you can set up a workflow that lets your
agents attach files during a chat session.
Agent file attachment workflow
Here's the workflow for an agent attaching a file during a chat session.
An agent attaches a file during a chat session.
Your webhook endpoint receives a message_received event, which includes
the media_id value for the attached file. For more information, see
Webhooks for the chat API platform .
Send a GET request to the following endpoint to get the attachment file,
specifying the media_id value from the previous step. Authenticate using
basic authentication .
https:// YOUR_CCAAS_HOST /apps/api/v1/chats/ CHAT_ID /media/ MEDIA_ID
Replace the following:
YOUR_CCAAS_HOST : your Contact Center AI Platform (CCAI Platform) host
CHAT_ID : the chat ID
MEDIA_ID : the ID of the file that you want to
download. Get this from the message_received webhook event.
A successful request returns the attachment file. For more information, see
Chat platform API Guide .
File limitations
Here are the file types that agents can attach to a chat session:
Images : JPEG, JPG, PNG, GIF, TIFF, RAW, WebP
Video : MP4, MOV, AVI, WMV, WebM
Audio : MP3, WAV
Documents : PDF, XML, XLS, PPT, CSV, TXT
The maximum file size is 100 MB.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
