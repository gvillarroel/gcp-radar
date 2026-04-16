---
title: "Export conversation data \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-assist/docs/export-conversations
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/agent-assist/docs/features
source_metadata:
  url: https://docs.cloud.google.com/agent-assist/docs/export-conversations
  title: "Export conversation data \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
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
Export conversation data
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can export conversation messages to a
Cloud Storage bucket. Each conversation is exported as a
separate JSON file in the
standard conversation data format .
A maximum of 10,000 conversations can be exported at a time, and each
conversation can have at most 1000 messages.
Authentication and access control
When you send a request to export conversations, use your
end-user credentials for authentication .
Your user account must be granted at least a read role for the Dialogflow
API and an edit role (with the ability to overwrite objects) for the Cloud Storage bucket you want to export data to. For more details on user account
roles see the Cloud Storage access control
and Dialogflow access control documentation.
When executing REST requests at the command-line:
Use gcloud auth login
to authenticate gcloud with your user account.
Use gcloud auth print-access-token
to create a token for request authentication.
Conversations available for export
Only conversations that have been
completed are
available for export. Old conversations are deleted by the system periodically,
so if you try to reference an older conversation it may no longer be available.
Request export
To request export, call the
exportMessages
method. This method is a
long-running operation , so you
need to check the status for completion.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
