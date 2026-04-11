---
title: "Set up Gemini in Colab Enterprise for a project \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/colab/docs/gemini-in-colab/set-up-gemini
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/gemini-in-colab/set-up-gemini
  title: "Set up Gemini in Colab Enterprise for a project \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Colab Enterprise
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set up Gemini in Colab Enterprise for a project
Before you can use Gemini in Colab Enterprise ,
your team needs to
activate Gemini in Colab Enterprise in a Google Cloud project ,
as described in this document. An administrator typically performs this step.
Activate Gemini in Colab Enterprise in a Google Cloud project
To activate Gemini in Colab Enterprise in a Google Cloud project, an
administrator needs to enable the Gemini for Google Cloud API and grant the
Gemini for Google Cloud User role to users.
To enable the Gemini for Google Cloud API, in the Google Cloud console,
go to the Gemini for Google Cloud page.
Go to Gemini for Google Cloud
In the project selector, select a project.
Click Enable .
The page updates and shows a status of Enabled .
Gemini is now available in the selected
Google Cloud project to all users who have the required
IAM roles.
To grant the IAM roles that are required to use
Gemini, go to the IAM & Admin page.
Go to IAM & Admin
In the Principal column, find a
principal for which you want
to give access to Gemini in Colab Enterprise, and then click
edit Edit principal in that row.
In the Edit access pane, click
add Add another role .
In Select a role , select Gemini for Google Cloud User .
Click Save .
All of the users who have been granted these roles can access Gemini
features in the Google Cloud console within the specified project. For more
information, see
Gemini for Google Cloud overview .
Advanced setup tasks
Instead of using the Google Cloud console or the gcloud CLI to
grant predefined IAM roles, you can do any of the following:
Use IAM REST APIs
or IAM client libraries
to grant roles.
If you use these interfaces, use the fully qualified role name,
roles/cloudaicompanion.user .
For more information about granting roles, see
Manage access to projects, folders, and organizations .
Create and grant custom roles.
Any custom roles that you create need the
following permissions to access Gemini:
cloudaicompanion.instances.generateCode
cloudaicompanion.instances.completeCode
cloudaicompanion.entitlements.get
Billing
Gemini in Colab Enterprise is currently available to try at no additional cost. See
Colab Enterprise pricing .
What's next
Learn how to
write code with Gemini assistance .
Learn more about the
types of generative AI assistance available in Gemini for Google Cloud .
Learn
how Gemini for Google Cloud uses your data .
Learn
how to access and manage Gemini admin controls .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
