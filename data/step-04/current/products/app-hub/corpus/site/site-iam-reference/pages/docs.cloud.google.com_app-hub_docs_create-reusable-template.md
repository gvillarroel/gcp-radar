---
title: "Create a reusable template from a running application \_|\_ App Hub \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/create-reusable-template
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/manage-applications
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/create-reusable-template
  title: "Create a reusable template from a running application \_|\_ App Hub \_|\_\
    \ Google Cloud Documentation"
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
Create a reusable template from a running application
Stay organized with collections
Save and categorize content based on your preferences.
When an App Hub application is already running successfully, you can
create a reusable template from it with
Application Design Center . This
practice lets developer teams self-serve their deployments in a way that is
consistent and compliant with your organization's standards.
This guide shows you how to standardize the architecture of an existing,
registered application by creating a governed, reusable template.
This workflow is suitable for promoting
best practices and supporting a consistent and
secure deployment process. For example, use the architecture of a running
translator_v4.0 application to create a template for an upcoming
translator_v5.0 application.
Before you begin
You must complete the following steps before creating templates from existing
applications:
For administrators :
Choose your application setup model .
Application Design Center requires a management project .
Set up Application Design Center .
You must configure Application Design Center to let users create
application templates.
Grant access to users .
Assign appropriate IAM roles based on user's
responsibilities in the application lifecycle.
For developers and operators :
Confirm with your administrator that the initial setup is finalized.
Make sure you have the necessary IAM roles
for the tasks you want to perform.
Open your management project
in the Google Cloud console.
Identify and review the source application
Use App Hub to get a clear blueprint of the existing application's
architecture:
Navigate to the Applications page from App Hub:
Go to Applications
In the list of applications, find the running application you want to use as
a source model. Then, click its name.
In the application details page, review its registered services and
workloads. This view serves as the source of truth for the application's
architecture.
Generate and parametrize the template
With the application blueprint from App Hub, build a flexible, reusable
template in Application Design Center:
Design an application template ,
mapping the inventory of services and workloads from your source
application onto the design canvas .
Identify any configuration values within the components that developers must
customize for each deployment, such as region, machine sizes, or instance
counts. Define these as input parameters in the template. This practice
lets template users specify settings and maintain the core architecture.
Add a detailed description, version number, and other relevant metadata to
the template.
Publish and validate the template
When you finish designing and parametrizing the template, publish it to a
catalog to make it available to other
teams:
Verify your template .
Share the template to a catalog .
As a final validation, verify that the architecture of a test application
matches the original source application .
Developers can now reuse the template for applications that are consistent and
compliant with your organization's standards.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
