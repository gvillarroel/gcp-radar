---
title: "Speech data logging \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/es/docs/data-logging
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/es/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/es/docs/data-logging
  title: "Speech data logging \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Dialogflow
Dialogflow ES
Send feedback
Speech data logging
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
With Dialogflow Essentials, you can opt in to speech data logging to access
enhanced speech models ,
which use customer data for speech recognition improvements.
Limitations
The following limitations apply:
This setting is currently only available to users of a paid
edition .
Enabling data logging and using enhanced models
Note: Before enabling data logging, you need to certify that you have the
proper permissions from the data originator(s), and that you haven't
entered into a BAA with Google, for HIPAA purposes as an example. See
the complete
terms for data logging
for details.
To enable data logging:
Go to the Dialogflow ES console .
Select your agent.
Click the settings settings button next to the agent name to edit its settings.
Select the Speech tab.
Scroll to the Improve Speech Recognition Quality section.
Toggle Enable enhanced speech models and data logging on.
To use an enhanced model, you just need to specify a speech model in your API request.
If you do not specify a speech model, Dialogflow CX does not use an enhanced model.
Disabling data logging
You can disable data logging for your project at any time. Review the
terms for data logging to
read about what happens to your data when you disable data logging
for a project.
To disable data logging:
Go to the Dialogflow ES console .
Select your agent.
Click the settings settings button next to the agent name to edit its settings.
Select the Speech tab.
Scroll to the Improve Speech Recognition Quality section.
Toggle Enable enhanced speech models and data logging off.
Previous
arrow_back
History
Next
Audit logging
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
