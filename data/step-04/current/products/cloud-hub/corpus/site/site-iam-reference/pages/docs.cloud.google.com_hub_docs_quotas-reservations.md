---
title: "View quotas and reservations \_|\_ Cloud Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/hub/docs/quotas-reservations
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/hub/docs/deployments
source_metadata:
  url: https://docs.cloud.google.com/hub/docs/quotas-reservations
  title: "View quotas and reservations \_|\_ Cloud Hub \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

View quotas and reservations | Cloud Hub | Google Cloud Documentation
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
Required roles
View quotas and system limits
View usage and forecast data
View reservations
What's next
Home
Documentation
Access and resource management
Cloud Hub
Guides
Was this helpful?
Send feedback
View quotas and reservations
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Required roles
View quotas and system limits
View usage and forecast data
View reservations
What's next
On the Quotas & reservations board, you can view aggregated data for
quotas, system limits, and Compute Engine resource usage.
View Google Cloud quotas and system limits with over 90% usage.
View, historical and forecasted usage of Compute Engine resources.
View Compute Engine reservations .
Use this data to better understand current quota and Compute Engine usage
and plan for future needs.
Required roles
To get the permissions that
you need to view quotas, system limits, and Compute Engine resource usage,
ask your administrator to grant you the
Cloud Hub Operator ( roles/cloudhub.operator )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
To make changes to quotas or reservations, additional permissions are required.
For permissions to work with quotas, see the
Cloud Quotas documentation .
For requirements and permissions to create future reservation requests, see
the documentation for creating future reservations .
View quotas and system limits
Quotas restrict how much of a Google Cloud resource your
Google Cloud project can use. You can request an increase or decrease to your quota.
System limits are fixed constraints and aren't adjustable.
You can view the following information for a selected project:
Quotas and system limits that are over 90% used.
Pending quota increase requests.
To view quota information:
In the Google Cloud console, go to the Quotas and Reservations board,
Go to Quotas & reservations
In the project selector, select the project that you want to view.
The page displays the following information information for the selected
project:
Quotas & System Limits at risk : displays quotas and system
limits that are over 90% used.
To view more information about a quota or system limit, click its name.
To view all quotas with usage over 90%, click View all at risk .
If you click one of the links, then the Quotas & System Limits page displays
the quota details. If you have the necessary permissions, then you can
request a quota adjustment .
Quotas & System Limits summary : displays additional information about
quotas.
All quotas and system limits : displays the total number of
quotas and system limits. To view a list of quotas and system limits for
the selected project, click View .
Pending increase requests : displays the total number of pending
quota increase requests. To view pending requests for the selected project,
click View requests .
Quota adjuster status : displays whether the
quota adjuster is enabled or disabled. The quota adjuster
is only available for projects with enough historical activity to support
accurate predictions for submitting proactive quota adjustment requests on
your behalf. To view or change the setting, click View .
For more information about viewing and managing quotas on the Quotas & System
Limits page, see View and manage quotas .
View usage and forecast data
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can view the usage and forecast data of the following Compute Engine
resources:
Compute Engine instances, including vCPUs, RAM, and Local SSD disks
attached to the instances.
Persistent Disk volumes, whether they're attached to instances or not.
GPUs, whether they're attached to instances or not.
To plan for future usage, you can explore additional details in
Capacity Planner and request future reservations to reserve
capacity in advance.
Note: If the Quotas and reservations page doesn't display a section for
usage and forecast data, then your project might not be eligible to use
this feature. To request access, contact your
Technical Account Manager (TAM) or the Sales team .
To view usage and forecast data:
In the Google Cloud console, go to the Quotas and Reservations board,
Go to Quotas & reservations
In the project selector, select the project that you want to view.
In the Usage and Forecast section, use the selectors to choose the data
that you want to view.
Resource type : Select the resource type you want to view.
Resource name : If you selected vCPU , RAM , or Local SSD
as the resource type, select a machine family. To view all
machine families, select ALL .
Location : Select a region or zone that you want to view.
The Usage and Forecast graph displays usage, forecast data for the next
six months, reservations (if any), and quota for the selected resource type
and location.
Quota data only appears on the graph if you selected resource and location
options that have an associated quota.
The Usage line shows the history of daily usage aggregated at the 99th
percentile. Historical usage data is updated every 24 hours.
The Forecast line shows an estimate of future usage based on
historical usage patterns. It is an upper bound of P50 prediction interval.
For more information about usage and forecast data, see the
Capacity Planner overview .
You can view historically reserved capacity for your instances from
August 1, 2024.
To change the time range that the graph displays, use one of the following
options:
Expand a specific time interval : drag to select the time range that
you want to magnify.
Pan : press Control or Command , and then drag horizontally
to shift the time range.
Zoom : press Control or Command , and then scroll to zoom in or
zoom out.
To explore the selected data further in Capacity Planner,
click Plan capacity . Capacity Planner provides detailed
views on usage, forecast, and reservations. It also lets you create
future reservations based on historical usage and forecast data at the
machine type level. Learn more about
requesting future capacity .
Capacity Planner displays data for resources you selected
on the Quotas & reservations board . To learn about using the graphs in
Capacity Planner, see View usage and forecast data in
Capacity Planner .
View reservations
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can view current usage for Compute Engine reservations. Comparing
current usage with historical or forecast usage can help you better plan for
future capacity needs.
Note: If the Quotas & reservations page doesn't display a section for
reservation usage, then your project might not be eligible to use
this feature. To request access, contact your
Technical Account Manager (TAM) or the Sales team .
To view reservation usage:
In the Google Cloud console, go to the Quotas and Reservations board,
Go to Quotas & reservations
In the project selector, select the project that you want to view.
The Utilization of reservations displays usage of your reservations in the
last 24 hours. To view and manage reservations, click Manage reservations .
For more information about viewing reservation details, see
View reservations or future reservation requests .
What's next
Learn about setting up alerts and monitoring for quotas.
Learn more about reservations .
Learn more about Capacity Planner .
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
