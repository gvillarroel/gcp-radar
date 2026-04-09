---
title: "Troubleshoot Cloud Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/hub/docs/troubleshooting
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/hub/docs/deployments
source_metadata:
  url: https://docs.cloud.google.com/hub/docs/troubleshooting
  title: "Troubleshoot Cloud Hub \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Troubleshoot Cloud Hub | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud Hub
Start free
Overview
Guides
Resources
More
Technology areas
More
Overview
Guides
Resources
Cross-product tools
More
Console
Discover
Explore Application-centric Google Cloud
Cloud Hub overview
Application views and project views
Get started
Set up Cloud Hub
Control access
Access control with IAM
Review data and insights
View top items on the home page
View deployments
View application and resource health
Optimize resource costs and utilization
View maintenance activities
View quotas and reservations
Get support and manage support cases
Troubleshoot
Troubleshoot Cloud Hub
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Missing required APIs and permissions
Page is not viewable
Missing application data Verify requirements
Can't select an application from the Application list
The selected folder is not app-enabled
Can't view data for some applications on the Optimization page
Home
Documentation
Access and resource management
Cloud Hub
Guides
Was this helpful?
Send feedback
Troubleshoot Cloud Hub
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Missing required APIs and permissions
Page is not viewable
Missing application data Verify requirements
Can't select an application from the Application list
The selected folder is not app-enabled
Can't view data for some applications on the Optimization page
This document helps you how to resolve some common issues with data that is
missing or unavailable in Cloud Hub.
Cloud Hub displays data from other Google Cloud services. To
view the data, the APIs that provide the data must be enabled and you must
have permissions to view the data. To view data for an
App Hub application, there are additional requirements.
To learn more about application and project data views, see
Application views and project views .
Missing required APIs and permissions
If some or all data is missing from a Cloud Hub page, the cause
might be that a required API is not enabled or that you are missing permissions
to view the data.
Cloud Hub pages display a message if:
A required API is not enabled.
You don't have permissions to view data for the selected project or
folder.
The page doesn't support viewing data for a project or doesn't support
viewing data for an application.
The following table shows the support that each page provides for
displaying data for a project or an application.
Page
Supported data
Home
Application or project. The Home page displays summary data from
other Cloud Hub pages that are relevant for the
selected view.
Deployments
Application
Health & troubleshooting
Application or project
Optimization
Application or project
Maintenance
Project only
Quotas & reservations
Project only
Support
Project only
Some APIs such as Cloud Logging and Cloud Monitoring are enabled by
default when you create a project. APIs for other services, such as
Cloud Quotas, Unified Maintenance, and Personalized Service Health must
be enabled separately to view data related to the service.
The names in the Page column link to the documentation for each page. The
page-specific documentation describes required roles to view data on the page.
If you are viewing data by project, then you must have the required permissions
on the selected project.
If you are viewing data by application, then the data that you
can access depends on how your administrator granted permissions.
For example:
Granting Identity and Access Management (IAM) roles on a folder provides access
to data in descendant projects.
Granting IAM roles on the management project provides access
to data that is stored in the management project or is visible from the
management project.
Granting IAM roles on specific projects only provides access
to data that is stored in or is visible from those projects.
Page is not viewable
When you try to open a page, you see one of the following messages:
Page not viewable for projects
Page not viewable for folders
Some Cloud Hub pages only display data for projects or only
display data for applications.
If you see the message Page not viewable for projects , a project is selected
in the project picker in the Google Cloud console toolbar and you are viewing
a page that can only display data for an application. To view application
data, select a folder configured for application management instead.
If you see the message Not viewable for folders when you try to view a
page, then a folder configured for application management
( ) is selected in the project picker in the
Google Cloud console toolbar. You can only view Cloud Hub
pages that can display data for App Hub applications. You can
view data for an individual project in the folder by selecting the project
from the project picker.
Missing application data
This section describes requirements to view data for App Hub
applications and some situations where you might encounter missing data for an
App Hub application.
Verify requirements
To view data for App Hub applications, ensure that
the following steps are complete:
Set up App Hub for a folder and create your
applications.
Set up aggregation of logs, metrics, and traces for your
applications.
Note: Cloud Hub only supports applications in a folder configured for
application management. It doesn't support applications in a
host project or a single-project boundary .
Can't select an application from the Application list
Some Cloud Hub pages such as Health & troubleshooting have
an Application selector that you can use to choose an App Hub
application to review.
If you see the message Application: not available , then a project is selected
in the project picker in the Google Cloud console toolbar.
To view data for an application, choose a folder that is configured for
application management ( ) in the project picker.
To learn about enabling a folder for application management, see
Managing applications in a folder .
The selected folder is not app-enabled
If you see the message Folder is not app-enabled , then the folder that is
selected in the project picker in the Google Cloud console toolbar is not
configured for application management.
To view data for an application, choose a folder configured for application
management in the project picker. Folders configured for application management
have a special icon ( ). To learn about enabling
a folder for application management, see
Managing applications in a folder .
Can't view data for some applications on the Optimization page
When you try to view cost data for an application on the Optimization page,
you see an error about mismatched currency codes similar to the following
example:
Currency codes 'EUR' and 'GBP' do not match
The Optimization page can only display costs for an application with all
resource costs in the same currency. The currency for a resource is determined
by the currency of the parent project's billing account.
If an application has resources associated with different billing accounts,
the billing accounts must all be configured for the same currency to view
application cost data.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
