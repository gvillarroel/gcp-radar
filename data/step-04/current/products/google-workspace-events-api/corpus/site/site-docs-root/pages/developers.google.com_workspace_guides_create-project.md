---
title: "Create a Google Cloud project \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/guides/create-project
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/events
source_metadata:
  url: https://developers.google.com/workspace/guides/create-project
  title: "Create a Google Cloud project \_|\_ Google Workspace \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Create a Google Cloud project
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A Google Cloud project is a prerequisite for utilizing Google Workspace APIs and developing Google Workspace add-ons or applications.
You can create a new Cloud project through the Google Cloud console or the gcloud command-line interface, providing a foundation for your Google Workspace integrations.
Depending on your usage of Google Workspace APIs, enabling billing for your Cloud project might be necessary to access certain features and services.
After creating your Cloud project, the next crucial step is to enable the specific Google Workspace APIs that your application or add-on will interact with.
A Google Cloud project is required to use Google Workspace APIs and build
Google Workspace add-ons or apps. A Cloud project forms the
basis for creating, enabling, and using all Google Cloud services, including
managing APIs, enabling billing, adding and removing collaborators, and managing
permissions.
Create a Cloud project
Google Cloud console
In the Google Cloud console, go to Menu menu
> IAM & Admin
> Create a Project .
Go to Create a Project
In the Project Name field, enter a descriptive name for your project.
Optional: To edit the Project ID , click Edit . The project ID can't be changed
after the project is created, so choose an ID that meets your needs for the lifetime of the
project.
In the Location field, click Browse to display potential locations for your
project. Then, click Select .
Caution: Can't find your Google Workspace organization?
This means you aren't signed in to a Google Workspace account. Some of the features
described in Google Workspace developer documentation are only available to projects
associated with an organization.
Click Create . The Google Cloud console navigates to the Dashboard page and your project is created
within a few minutes.
gcloud CLI
In one of the following development environments, access the Google Cloud
CLI ( gcloud ):
Cloud Shell : To use an online terminal with the gcloud CLI
already set up, activate Cloud Shell.
Activate Cloud Shell
Local Shell : To use a local development environment,
install and
initialize
the gcloud CLI.
To create a Cloud project, use the gcloud projects create command:
gcloud projects create PROJECT_ID
Replace PROJECT_ID by setting the ID for the project you want to create.
For further information on Cloud projects, refer to
Creating and managing projects
in the Google Cloud documentation.
Optional: Enable billing for your Cloud project
Depending on the Google Workspace APIs and features that you want to
use, you might also need to enable billing for your Cloud project:
If you're unable to link a billing account, you don't have the
permissions needed to make this change. For more information, see
Permissions required to enable billing .
Google Cloud console
In the Google Cloud console, go to Billing . Click
Menu menu
> Billing
> My Projects .
Go to Billing for My Projects
In Select an organization , choose the organization associated with
your Google Cloud project.
In the project row, open the Actions menu
( more_vert ),
click Change billing , and choose the
Cloud Billing account.
Click Set account .
gcloud CLI
To list available billing accounts, run:
gcloud billing accounts list
Link a billing account with a Google Cloud project:
gcloud billing projects link PROJECT_ID --billing-account= BILLING_ACCOUNT_ID
Replace the following:
PROJECT_ID is the Project ID for the
Cloud project for which you want to enable billing.
BILLING_ACCOUNT_ID is the billing account ID to link with
the Google Cloud project.
For further information about billing, see
Enable, disable, or change billing for a project
in the Google Cloud Billing documentation.
Next step
Enable Google Workspace APIs
in your Cloud project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["A Google Cloud project is necessary for using Google Workspace APIs. To create one, use the Google Cloud console by navigating to **IAM & Admin** \u003e **Create a Project**, entering a project name and selecting a location. Alternatively, use the `gcloud projects create` command in the Cloud Shell or a local environment. Optionally, enable billing through the console by going to **Billing** and choosing a billing account or using the `gcloud billing projects link` command.\n"]]
