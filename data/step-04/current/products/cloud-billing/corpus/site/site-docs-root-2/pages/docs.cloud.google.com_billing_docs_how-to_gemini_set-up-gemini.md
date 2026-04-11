---
title: "Set up Gemini Cloud Assist in Cloud Billing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/gemini/set-up-gemini
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/gemini/set-up-gemini
  title: "Set up Gemini Cloud Assist in Cloud Billing \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
Guides
Send feedback
Set up Gemini Cloud Assist in Cloud Billing
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
To set up
Gemini Cloud Assist in Cloud Billing ,
perform the following steps:
Enable the Gemini Cloud Assist API in a Google Cloud project .
An administrator typically performs this step.
In the Google Cloud project, grant Identity and Access Management (IAM) roles
to the same users who access Cloud Billing cost and utilization
data. An administrator typically performs this step.
For users who need access to Cloud Billing data and
Gemini Cloud Assist in Cloud Billing,
grant IAM roles in the Cloud Billing account
that's
linked to the project
where the Gemini Cloud Assist API is enabled. An administrator
typically performs this step.
Enable the Gemini Cloud Assist API in a Google Cloud project
This section describes the steps required to enable the
Gemini Cloud Assist API in a Google Cloud project.
Console
To enable the Gemini Cloud Assist API, go to the
Gemini Cloud Assist API page.
Go to the Gemini Cloud Assist API
In the project selector, select the project you want to use as a
"Gemini" project.
You can enable the Gemini Cloud Assist API in more than one
project. For Cloud Billing users who have
billing-account-level permissions
on the Cloud Billing account, we recommend that you use a
FinOps administration project
to contain the API.
Click Enable .
The page updates and shows a status of API Enabled .
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
In the project selector menu, select the project you want to use as a
"Gemini" project.
You can enable the Gemini Cloud Assist API in more than one
project. For Cloud Billing users who have
billing-account-level permissions
on the Cloud Billing account, we recommend that you use a
FinOps administration project
to contain the API.
Enable the Gemini Cloud Assist API using
the gcloud services enable command :
gcloud services enable geminicloudassist.googleapis.com
If you want to enable the Gemini Cloud Assist API in a different
Google Cloud project, add the
--project parameter:
gcloud services enable geminicloudassist.googleapis.com --project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project
ID.
The output is similar to the following:
Waiting for async operation operations/acf.2e2fcfce-8327-4984-9040-a67777082687 to complete...
Operation finished successfully.
After you enable the Gemini Cloud Assist API in the specified
Google Cloud project, Gemini Cloud Assist is now available to
all users who have the
required IAM roles
on the specified project.
Grant IAM roles in a Google Cloud project
This section describes the steps to grant the required project permissions to
use Gemini Cloud Assist. In the Google Cloud project where you
enabled the Gemini Cloud Assist API, grant the following
IAM roles to users
( principals )
on the project:
Gemini Cloud Assist User
Service Usage Consumer
Console
To grant the IAM roles that are required to use
Gemini Cloud Assist, go to the IAM & Admin page.
Go to IAM & Admin
In the Principal column, find a
principal
for which you want to enable access to Gemini Cloud Assist, and
then click edit Edit principal in
that row.
In the Edit access pane, click
add Add another role .
In Select a role , select Gemini Cloud Assist User .
Click Add another role and select Service Usage Consumer .
Click Save .
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
In the project selector menu, select a project.
Grant the Gemini Cloud Assist User role:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member= PRINCIPAL --role=roles/geminicloudassist.user
Replace the following:
PROJECT_ID : the ID of your
Google Cloud project—for example, 1234567890 .
PRINCIPAL : the
identifier for the
principal—for example, user:cloudysanfrancisco@gmail.com .
The output is a list of policy bindings that includes the following:
- members:
- user: PRINCIPAL
role: roles/geminicloudassist.user
Repeat the previous step for the role roles/serviceusage.serviceUsageConsumer .
For more information, see
Grant a single role
and
gcloud projects add-iam-policy-binding .
All of the users (principals) who are granted these roles can access
Gemini Cloud Assist features in the Google Cloud console within the
specified project. If the project users also have
access to view Cloud Billing data ,
they can use Gemini Cloud Assist in Cloud Billing Reports
and the FinOps hub to get AI assistance to create cost reports and to
summarize key insights about cloud costs and optimization recommendations.
For more information, see
Gemini Cloud Assist in Cloud Billing overview .
Advanced IAM setup tasks for projects
Instead of using the Google Cloud console or the gcloud CLI to
grant predefined IAM roles on a project, you can do any of the
following:
Use IAM REST APIs
or IAM client libraries
to grant roles.
If you use these interfaces, use the fully qualified role names:
roles/geminicloudassist.user
roles/serviceusage.serviceUsageConsumer
For more information about granting roles, see
Manage access to projects, folders, and organizations .
Create and grant custom roles.
Any custom roles
for project permissions that you create need the following permissions to
access Gemini Cloud Assist:
geminicloudassist.companions.generateChat
geminicloudassist.companions.generateCode
serviceusage.services.use
Grant IAM roles in a Cloud Billing account
For users who need access to Cloud Billing cost data, you need to grant
permissions on the Cloud Billing account that are adequate to access
the Reports page and the FinOps hub . To use
Gemini Cloud Assist in Cloud Billing, grant users access
to the Cloud Billing account that is
linked to the project
where the Gemini Cloud Assist API is enabled.
Required permissions: for detailed guidance about the permissions
required to access Billing Reports , see the
Permissions required to access reports
section available in the
"Analyze billing data and cost trends with Reports" article.
Required permissions: for detailed guidance about the permissions
required to access the Billing FinOps hub , see the
Permissions required to access the FinOps hub
section available in the
"Optimize costs with FinOps hub" article.
Grant access: for guidance on how to grant access to a
Cloud Billing account, see the
Update user permissions for a Cloud Billing account
section available in the
"Manage access to Cloud Billing accounts" article.
What's next
Learn more about
AI assistance that's available in Gemini Cloud Assist in Cloud Billing .
Learn more about the different
types of generative AI assistance available in Gemini Cloud Assist .
Learn
how Gemini Cloud Assist uses your data .
Learn more about Google Cloud compliance .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
