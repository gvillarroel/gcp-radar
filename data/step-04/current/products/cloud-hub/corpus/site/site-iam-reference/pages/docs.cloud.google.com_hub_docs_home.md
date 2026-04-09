---
title: "View top items on the Home page \_|\_ Cloud Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/hub/docs/home
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/hub/docs/deployments
source_metadata:
  url: https://docs.cloud.google.com/hub/docs/home
  title: "View top items on the Home page \_|\_ Cloud Hub \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

View top items on the Home page | Cloud Hub | Google Cloud Documentation
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
Before you begin Required roles
Open the Home page
What's next
Home
Documentation
Access and resource management
Cloud Hub
Guides
Was this helpful?
Send feedback
View top items on the Home page
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Open the Home page
What's next
The Home page of Cloud Hub lets you view key information about your
Google Cloud resources and App Hub applications
on a single page. From the Home page you can explore details on other pages
in Cloud Hub or on the pages of the Google Cloud services that
provide the data.
The types of information that appear on the Home page depend on whether you
selected a project or an application. The following example shows Home page
information for an application.
Before you begin
To view data for App Hub applications, ensure that
the following steps are complete:
Set up App Hub for a folder and create your
applications.
Set up aggregation of logs, metrics, and traces for your
applications.
To use investigations, set up Gemini Cloud Assist .
Note: Cloud Hub only supports applications in a folder configured for
application management. It doesn't support applications in a
host project or a single-project boundary .
Required roles
To get the permissions that
you need to view data in Cloud Hub,
ask your administrator to grant you the
following IAM roles on the project ( project view ) or management
project for a folder ( application view ):
View most application and project data:
Cloud Hub Operator ( roles/cloudhub.operator )
View resource cost data:
( roles/viewer ) or a custom role with the billing.resourceCosts.get permission
Use Gemini Cloud Assist:
Gemini Cloud Assist User ( roles/geminicloudassist.user )
Create and view investigations:
Investigations Creator ( roles/geminicloudassist.investigationCreator )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Open the Home page
In the Google Cloud console, go to the Home page,
Go to Home
Select the project or application that you want to
view:
To view data for applications, choose the folder that is configured for
application management. Folders configured for application management
have an special icon ( ). The management
project for the folder also has a special icon
( ) and the project name is in the
format FOLDER-NAME -mp . If you choose the
management project instead of the folder, then the project picker
automatically changes the selection to the folder.
To view data for an individual project, choose the project
that contains the resources you want to view.
If you selected an app-enabled folder, select the application that you want
to view data for.
The following table describes each information card and indicates if the data
is visible for a project view, an application view, or both views.
Card
Description
Application view
Project view
Open alerts
This card displays the total number of open alerts for alert policies that
are configured in Cloud Monitoring. To your open alerts in
Cloud Monitoring, click View alerts .
Learn about alerts in Monitoring
You can also view summary information for open alerts on the
Learn about alerts in
Monitoring .
Yes
Yes
Google Cloud incidents
This card displays the total number of Google Cloud outages and
degradations that affect the selected project or application. To view incident
details in Personalized Service Health, click View incidents
Learn about viewing incidents .
You can also view summary information for open incidents on the
Learn about alerts in
Monitoring .
Yes
Yes
Cost summary
This card displays the gross cost and cost change in the last 7 days.
Costs are based on your contract prices, before any
committed-use discounts (CUDs) or other credits are
applied. For an application, costs include all resources that are fully
used by the application and doesn't include costs for resources that are
shared across applications. To view details,
click View Optimization board .
Learn about viewing cost optimization data .
Yes
Yes
My recent investigations
This card displays the status of your
Gemini Cloud Assist [investigations][gca-investigate]. To create a new
investigation, click Investigate . To view more information, click
View Health & Troubleshooting board .
Learn about viewing investigations in
Cloud Hub .
Yes
Yes
ADC application infrastructure deployment notifications
This card lists issues with Application Design Center deployments for
applications in the selected folder. To view for a deployment, click the
application name. To view the list of deployments on the Deployments page,
click View Deployments board .
Learn about viewing deployment issues .
Yes
No
Maintenance summary
This card displays the total number of scheduled, running, succeeded and
canceled maintenance activities. To view maintenance details, click
View maintenance board .
Learn about viewing maintenance .
No
Yes
Quotas & System Limits at risk
This card displays quotas and system limits with over 90% usage in the selected
project. To view a quota or system limit, click its name in the list. To view
all quotas and system limits with over 90% usage, click
View all at risk .
Learn about viewing quotas and system limits .
No
Yes
Technical cases information
This card displays open support cases and cases that need input. To view
details, click View support board .
Learn about viewing support information .
No
Yes
All recommendations
This card displays recommendations from Active Assist for
resources in the selected project. To view details about the recommendations
in
Active Assist , click >View all recommendations .
No
Yes
Technical cases information
This card displays open support cases and cases that need input. To view
details, click View support board .
Learn about viewing support information .
No
Yes
Folder info
This card displays information about the selected folder and the
associated management project, including the folder name, folder ID, folder
type, management project name, and management project ID.
Yes
No
Project info
This card displays information about the selected Google Cloud project,
including the project name, project number, and project ID.
No
Yes
News
This card displays recent Google Cloud news. For more news, click
Read all news . To view Google Cloud release notes, click
Read all release notes .
No
Yes
Getting started with Google Cloud
This card displays links to tutorials to help you get started with
Google Cloud. To view more tutorials, click
View all tutorials .
No
Yes
What's next
Learn about application and project views .
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
