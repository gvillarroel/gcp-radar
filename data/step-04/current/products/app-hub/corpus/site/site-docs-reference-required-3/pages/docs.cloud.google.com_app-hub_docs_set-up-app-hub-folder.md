---
title: "Set up a folder \_|\_ App Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-folder
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/supported-resources
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-folder
  title: "Set up a folder \_|\_ App Hub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
App Hub
Guides
Send feedback
Set up a folder
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to set up a Google Cloud folder as an
app-enabled folder .
With an app-enabled folder, you can manage applications and group resources
from all projects and subfolders it contains. This configuration is also known
as the folder-level boundary .
App-enabled folders contain a
management project and support
all Application-centric Google Cloud features, including application design in Application Design Center,
insights in Cloud Hub, and assistance from Gemini Cloud Assist.
You can register resources from the Google Cloud projects in the
app-enabled folder as services and
workloads of applications.
After you set up an App Hub application on an app-enabled folder,
you can use natural language prompts to retrieve information about this
application. For more information, see
Use Gemini Cloud Assist in the Google Cloud console .
You use Resource Manager to configure and manage
app-enabled folders. For more information about the application-centric
model and its resource organization, see
Application-centric Google Cloud .
Configure an app-enabled folder
Before you begin, ensure you have the required roles to
configure the app-enabled folder.
To set up the folder, follow the Resource Manager instructions to
manage applications in a folder .
Manage projects in your app-enabled folder
App-enabled folders automatically make infrastructure resources from all
descendant projects and folders available to group into an application. To
control which resources are available, you can create, move, or delete projects
and folders in the app-enabled folder:
Create a project
Shutting down (deleting) projects
Moving a project
Moving a folder
It is important to understand the
resource hierarchy
in your app-enabled folder. If a project or folder containing services and
workloads that you have grouped in an application is moved out of the
app-enabled folder, the application will continue to exist in the
app-enabled folder, but the
registration status of services and workloads
from that project or folder will change to detached .
Disable application management in a folder
You can disable application management from your Google Cloud folder if you
don't want it to be an app-enabled folder anymore. For
instructions, see Disable application management .
What's next
Quickstart: Create an application from existing resources
Prepare for application lifecycle management
Register resources to an application
Set up application monitoring
App Hub IAM roles and permissions
App Hub overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
