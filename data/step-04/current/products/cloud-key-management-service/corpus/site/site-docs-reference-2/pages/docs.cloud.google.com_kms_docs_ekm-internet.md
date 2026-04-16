---
title: "Set up Cloud EKM via the internet \_|\_ Cloud Key Management Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/ekm-internet
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/ekm-internet
  title: "Set up Cloud EKM via the internet \_|\_ Cloud Key Management Service \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Guides
Send feedback
Set up Cloud EKM via the internet
Stay organized with collections
Save and categorize content based on your preferences.
This topic is about using Cloud External Key Manager (Cloud EKM) to create and manage external keys
accessed via the internet.
Before you begin
After you complete the steps below, you can begin using Cloud EKM
keys to protect your data.
Create a new project
In the Google Cloud console, go to the Manage Resources page.
Go to the Manage Resources page
Create a new Google Cloud project or select an existing project.
Important:
The name you use must be between 4 and 30 characters. When you type the name,
the form will suggest a project ID, which you can edit. The project ID you use
must be between 6 and 30 characters, with a lowercase letter as the first character.
You can use a dash, lowercase letter, or digit for
the remaining characters, but the last character cannot be a dash.
You should be aware that some resource identifiers (such as project IDs) might be
retained beyond the life of your project. For this reason, avoid storing
sensitive information in resource identifiers.
...see naming guidelines
Verify that billing is enabled for your Google Cloud project .
You can learn more about Cloud EKM pricing .
Enable Cloud KMS
Enable the Cloud Key Management Service API for the project.
Enable the Cloud Key Management Service API
Make a note of your project's Cloud EKM service account. In the
following example, replace PROJECT_NUMBER with your
Google Cloud project's project number . This
information is also visible each time you use the Google Cloud console to create
a Cloud EKM key.
service- PROJECT_NUMBER @gcp-sa-ekms.iam.gserviceaccount.com
Prepare the external key management partner system
In the external key management partner system, grant the Google Cloud service account
access to use the external key. Treat the service account as an email address.
Partners may use different terminology than that used in this topic.
Ensure gcloud CLI is up to date
If you're going to use the Google Cloud CLI, ensure that it's up-to-date with
the following command:
gcloud
gcloud components update
Troubleshooting errors
If you experience an error when creating or using a Cloud EKM key, an
error is logged. For information about troubleshooting Cloud EKM
errors, see the Cloud EKM error reference .
What's next
Create an external key
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
