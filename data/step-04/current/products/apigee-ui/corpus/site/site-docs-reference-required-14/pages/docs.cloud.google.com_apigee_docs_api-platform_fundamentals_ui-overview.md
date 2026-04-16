---
title: "UI overview \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview
knowledge_key: corpus
source_id: site-docs-reference-required-14
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview
  title: "UI overview \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
UI overview
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
The Apigee UI is a graphical user interface that you can use to manage the lifecycle of your APIs.
You can use the Apigee UI to develop and deploy your API proxies, trace their
execution, view API analytics, and manage other aspects of your Apigee organization and its environments.
Access the Apigee UI in the Google Cloud console, making it easier to access and manage Apigee
while working with other Google Cloud resources.
Using the Apigee UI, you can:
Build an API
proxy
Deploy and undeploy API proxies
to your cluster
Create, edit, and delete
environments and environment groups
Assign environment-level
access control to users
Work with target servers ,
KVMs , and shared flows
Use the Apigee UI
To open the Apigee UI, go to the Apigee API management page.
Apigee API management
From the Overview page, you can:
Get started as a new Apigee user
Test your Apigee runtime
View key resource usage metrics
Explore Apigee API management features
Get started as a new Apigee user
If you just are new to Apigee, you can begin your API management journey
with quickstart learning options launched from the Overview page:
Begin by deploying your first proxy : Watch a
video tutorial
that walks you through the steps required to create and
deploy an API proxy. Once you are ready, click Create new proxy
to get started.
Note: This video was recorded with a
previous version of the Apigee UI; however, the concepts are still valid.
Start with VS Code : Follow this step-by-step tutorial to
Build and deploy your first API proxy locally using Apigee in VSCode .
For more advanced use cases, follow along with step-by-step video walkthroughs showcased in the Tutorials section of the page:
Test your Apigee runtime
If you just completed provisioning a new Apigee organization, use the Test your Apigee runtime
card to deploy and call a proxy, as described below:
Pay-as-you-go organization
If you have a Pay-as-you-go organization:
Click Deploy API to deploy the sample Hello World
proxy to the test-env environment in your new runtime instance.
Note : The proxy is not fully deployed instantaneously. It can take up to a minute for the proxy to deploy.
Upon successful deployment, the console displays steps for sending a test request.
Subscription organization
If you have a Subscription organization:
Configure DNS to enable external access to your new proxy For more information,
see
Call the proxy with external access .
Click Deploy API to deploy the sample Hello World
proxy to the default-dev environment in your new runtime instance.
Note : The proxy is not fully deployed instantaneously. It can take up to a minute for the proxy to deploy.
Upon successful deployment, the console displays steps for sending a test request.
View key resource usage metrics
You can view key usage metrics for your organization at a glance using the Proxy Usage and Environment Usage cards
on the Overview page. The cards display the following metrics:
Proxy Usage :
Total proxies created : The total number of API proxies created, including deployed and undeployed proxies.
Proxies deployed : The total number of API proxies deployed across all environment(s) in the organization.
Proxy deployment units : The total number of API proxy and shared flow revisions deployed in
your organization. Each deployment per environment, per instance, is counted as one unit.
Proxies and shared flows deployed against limit : Total number of API proxies and shared flows deployed
in the organization, against the limit for your organization type.
Extensible deployment units : The number of extensible API proxy revisions deployed in
your organization. Each deployment per environment, per instance, is counted as one unit.
Standard deployment units : The number of standard API proxy revisions deployed in
your organization. Each deployment per environment, per instance, is counted as one unit.
Environment Usage :
Total environments : The total number of active and inactive environments in the organization.
Active environments : The total number of environments attached to a minimum of one Apigee instance.
Note : If your organization is Apigee hybrid-enabled, only a sub-set of these usage
metrics are displayed.
Whether you are a Pay-as-you-go or Subscription customer, this view provides you with a snapshot of key resource usage, as well as shortcuts to
other monitoring and identity management resources for your organization, including:
Cloud Monitoring
Cloud Billing
Identity and Access Management
Explore Apigee API management features
From the main navigation menu, you can explore the range of Apigee API management features
available for your organization, as described in the table below:
Main navigation menu
Purpose
Proxy development
Develop and deploy
API proxies .
Distribution
Make your APIs available
to app developers.
Analytics
Analyze API traffic data.
API security
Identify security threats and vulnerabilities with Advanced API Security .
API hub
View and manage your organization's APIs with API hub (Preview) .
Management
Manage Apigee
users and roles .
Apigee UI navigation
If you are a long-time Apigee user, you may be accustomed to navigating the
previous Apigee UI to perform the tasks you complete most frequently. The
current Apigee UI gives you the ability to manage all of your Apigee
functionality in one place.
The following table maps each Apigee UI feature page to its current location
in the Apigee UI:
Feature
Apigee UI
Proxies
Proxy development > API proxies
Go to API proxies
Sharedflows
Proxy development > Sharedflows
Go to Sharedflows
Offline debug
Proxy development > Offline debug
Go to Offline debug
API products
Distribution > API products
Go to API products
Portals
Distribution > Portals
Go to Portals
Monetization
Distribution > Monetization
Go to Monetization
Developers
Distribution > Developers
Go to Developers
Apps
Distribution > Apps
Go to Apps
API monitoring
Proxy development > API monitoring
Go to API monitoring
API metrics
Analytics > API metrics
Go to API metrics
Developer Engagement
Analytics > Developer analysis
Go to Developer analysis
Traffic Composition
Analytics > Developer analysis
Go to Developer analysis
Devices
Analytics > End user analysis
Go to End user analysis
Geomap
Analytics > End user analysis
Go to End user analysis
Custom reports
Analytics > Custom reports
Go to Custom reports
Instances
Management > Instances
Go to Instances
Data collectors
Management > Data collectors
Go to Data collectors
Environments
Management > Environments
Go to Environments
Endpoint attachments
Management > Endpoint attachments
Go to Endpoint attachments
Roles
Identity and Access Management (IAM) > Roles
Go to Roles
Users
IAM
Go to IAM
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
