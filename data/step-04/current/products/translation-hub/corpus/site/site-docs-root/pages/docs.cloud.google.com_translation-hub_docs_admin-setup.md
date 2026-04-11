---
title: "Set up a project \_|\_ Translation Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translation-hub/docs/admin-setup
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/translation-hub/docs
source_metadata:
  url: https://docs.cloud.google.com/translation-hub/docs/admin-setup
  title: "Set up a project \_|\_ Translation Hub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Translation Hub
Guides
Send feedback
Set up a project
Stay organized with collections
Save and categorize content based on your preferences.
Starting on June 30, 2025, Translation Hub is officially
deprecated and will no longer be supported. You can continue using
Translation Hub until September 20, 2026, when it will be shut down.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
To start using Translation Hub, a Google Cloud administrator must create
or set up an existing Google Cloud project. The administrator must enable
the Translation Hub API in the project. For more information about managing projects,
see Manage access to projects, folders, and organizations .
This process involves the Google Cloud console, which is a web interface that
you can use to provision, configure, manage, and monitor resources in
Google Cloud. If you haven't used the Google Cloud console before, see
the Cloud console page for more information.
Set up a project
A project organizes all your Google Cloud resources. To use
Translation Hub, the project must be linked to a billing account. Project
usage is charged to the linked billing account.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Verify that billing is enabled for your Google Cloud project .
For more information about Translation Hub pricing, see the pricing
page .
Enable the Translation Hub API.
Enable the API
When you enable the Translation Hub API, you also enable the Cloud Translation API.
Both APIs are required to use Translation Hub.
Multiple projects
You can use Translation Hub in multiple projects so that you can track
usage and costs for each project.
A multi-project setup might be useful if you have one centralized billing
account that is linked to multiple projects. For example, you might provide
translation services to multiple clients. You can organize clients by project so
that you can track each client's usage and keep client resources isolated in
their own project. At the same time, you are able to manage all of your
Google Cloud charges from a single billing account.
You can add portal users and translators to multiple projects. For example,
translators might review machine-translated documents for multiple clients. In
this case, you must add translators to each client's project.
What's next
Learn how to enable users to request translations .
Learn how to add translators for post-editing requests .
Compare the basic and advanced tiers .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
