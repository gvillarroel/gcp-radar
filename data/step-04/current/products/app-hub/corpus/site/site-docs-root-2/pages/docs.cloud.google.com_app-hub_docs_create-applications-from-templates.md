---
title: "Create applications from published templates \_|\_ App Hub \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/app-hub/docs/create-applications-from-templates
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/create-applications-from-templates
  title: "Create applications from published templates \_|\_ App Hub \_|\_ Google\
    \ Cloud Documentation"
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
Create applications from published templates
Stay organized with collections
Save and categorize content based on your preferences.
Deploying new App Hub applications from
templates helps you achieve the
following:
Visualize the design as infrastructure code.
Quickly access templates for your deployments.
Comply with organizational best practices.
Gain visibility into application components, health, and operational status.
This guide shows you how to deploy applications using a standardized template
with Application Design Center .
This option is ideal for new infrastructure scenarios where no services or
workloads for the application exist yet.
Before you begin
You must complete the following steps before using templates to create
applications:
For administrators :
Choose your application setup model .
Application Design Center requires a management project .
Enable required APIs for all Google Cloud resources you intend to use.
Set up Application Design Center .
You must configure Application Design Center to let users deploy new
application components from templates.
Design
and
publish
an application template to a catalog .
You can also use
pre-built Google templates .
Grant access to users .
Assign appropriate IAM roles based on user's
responsibilities in the application lifecycle.
For developers and operators :
Confirm with your administrator that the initial setup and template
publication is finalized.
Make sure you have the necessary IAM roles
for the tasks you want to perform.
Open your management project
in the Google Cloud console.
Configure and deploy the application
Application Design Center lets you
create a template, configure its parameters, and deploy application components
based on it. Follow these steps to create and access a template from a catalog
and deploy the application:
In the Google Cloud console, navigate to the Templates page from
Application Design Center to see the list of available application
templates:
Go to Templates
Select the template for the application you want to deploy and review its
details.
Create an application draft
from the template, providing values for any required input parameters, such
as the application name and deployment region.
Deploy your application
from the template.
The deployment process in Application Design Center automatically registers the
application and its components in App Hub, where you can view
application details, services, and workloads.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
