---
title: "Troubleshooting service account access \_|\_ Customer Experience Insights\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/insights/docs/known-issues
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/insights/docs
source_metadata:
  url: https://docs.cloud.google.com/contact-center/insights/docs/known-issues
  title: "Troubleshooting service account access \_|\_ Customer Experience Insights\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Customer Experience Insights
Support
Send feedback
Troubleshooting service account access
Stay organized with collections
Save and categorize content based on your preferences.
CX Insights uses per-project
service accounts to
access resources in the customer project—such as audio and transcript files in your Google Cloud storage bucket—during
analysis. Each project's service account is automatically created the first time you
access any user resources. By default, the service account is
automatically given some default access—such as Google Cloud storage access—to the project.
After you create your first conversation, you should see the service account
permissions in your project's IAM settings. If you accidentally remove or don't see the
service account permissions, then you can manually give it access to the correct permissions. The account
always has the form service-<project_number>@gcp-sa-contactcenterinsights.iam.gserviceaccount.com .
To change an account's permissions manually, navigate to the IAM panel of the
CX Insights console and give that user the
contactcenterinsights.serviceAgent
permission. The service account can also be given fine-grained permissions, though too many of these can lead to instability.
If you see an error message like the following, first verify that your CX Insights service account exists in your IAM configuration.
"message": "IAM permission 'dialogflow.participants.suggest' on 'projects/<project>/locations/global/conversations/fake_conversation_id/participants/fake_participant_id' denied."
Then, make sure Include Google-provided role grants is checked:
Audio export
To export audio from Agent Assist or Dialogflow to CX Insights, verify that service-<project_number>@gcp-sa-dialogflow.iam.gserviceaccount.com has the dialogflow.serviceAgent role.
Manual service agent creation
You can create the Customer Experience Insights service agent with the following command:
gcloud beta services identity create --service = contactcenterinsights.googleapis.com --project = <project_id>
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
