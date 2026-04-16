---
title: "Application-centric Google Cloud \_|\_ App Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/supported-resources
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud
  title: "Application-centric Google Cloud \_|\_ App Hub \_|\_ Google Cloud Documentation"
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
Application-centric Google Cloud
Stay organized with collections
Save and categorize content based on your preferences.
This document provides a conceptual overview of Application-centric Google Cloud, its core products, and
how they work together to streamline the entire application management
lifecycle.
As cloud applications become increasingly complex, managing their underlying
infrastructure can pose a significant challenge. Additionally, these
applications often consist of numerous components spread across multiple
Google Cloud projects. This distribution can hinder developers and operators
from maintaining a clear and unified view, thereby complicating tasks such as
monitoring, troubleshooting, and cost management.
To address this challenge, Google Cloud offers an integrated,
application-centric experience for deploying, managing, and operating
application components. You can shift your focus from your individual
infrastructure resources to the application as a whole, enabling application
management in a way that aligns with business functionality and day-to-day
operations.
Key concepts for application management
At the core of the application-centric experience is the concept of an
App Hub application. An application acts as a logical grouping of
components, including services and workloads, which collectively provide a
specific business functionality.
To enable application management, you define an application management boundary, which is
the collection of projects whose underlying Google Cloud resources
App Hub can discover and register in applications. This boundary for
resource discovery is established by designating a Google Cloud project to act
as the management project.
For detailed definitions of all Application-centric Google Cloud key concepts, see
Key concepts .
Data handling in resource organization
The management project stores not just high-level application attributes but
the entire application model, including the following:
App Hub data : The complete logical model of your
applications, including the definitions of and relationships between
applications, services, and workloads. This model also includes metadata
like application owners, criticality, and environment.
Application Design Center data : Elements such as application
templates, catalogs, and spaces that are used to design and deploy new
applications.
If the management project is deleted, all of this application model data is
permanently lost. The underlying infrastructure resources, such as your
Google Kubernetes Engine clusters or load balancers, will continue to exist, but
their logical grouping and relationships within App Hub will be lost.
When you set up a management project, APIs for application management are
automatically enabled. These include APIs for App Hub,
Application Design Center, Google Cloud Observability, and their associated API dependencies.
For more information about these automatically enabled APIs, see
Enable APIs on the management project .
The following diagram shows an example of how resources can be organized for
application management. In this case, two folders ( Business Unit 1 and
Business Unit 2 ) are attached to their own management projects, defining
separate application management boundaries. Each folder represents a business unit with
its resources registered as services and workloads in applications. The first
folder ( Business Unit 1 ) also includes a sub-folder
( Business Sub-unit 1 ), which represents a separate business sub-unit, and
various independent projects with their own resources. All the folders are
configured for application management and hence have their own distinct
management projects.
Figure 1. An example resource organization model in
Application-centric Google Cloud.
Benefits of application-centric management
Organizing Google Cloud resources and registering them in applications as
services and workloads offers an alternative to tracking individual resources
across various projects or products. This approach lets you do the following:
Manage consistent application designs, deployments, and updates using
application templates.
Gain a comprehensive view of your application's health, performance, and
cost.
Streamline operations by managing related components as a single unit.
Improve governance by assigning ownership and applying policies at the
application level.
Accelerate troubleshooting with a clear understanding of resource
dependencies.
The application management lifecycle
Managing your applications in Google Cloud follows a logical lifecycle. You
first define and organize your applications, then you operate and optimize them,
with AI assistance available at every stage.
The following diagram illustrates the key products and features that let you
manage applications in Google Cloud.
Figure 2. Relationships between application-centric products and
features.
The numbers in the diagram reference the following descriptions:
Resources : Applications in App Hub represent groupings of
Google Cloud resources, which are registered as services and workloads. You
define which resources App Hub can manage by configuring an
application management boundary with a management project. For example, you can
define the boundary at the folder level by configuring an
app-enabled folder. The management project from your boundary
stores App Hub and Application Design Center data and enables the
necessary APIs for application management. For more information about these
concepts, see Key concepts and
Data handling in resource organization .
Application design and deployment :
Application Design Center : Design and deploy new applications
using prebuilt or custom templates that you can update. Deploying an
application creates new Google Cloud resources and registers those
resources and your application to App Hub. For more
information, see the Application Design Center overview .
App Hub : Organize existing resources within your
application management boundary into applications to gain a unified view
of your services and workloads. For more information, see the
App Hub overview .
Whether you use Application Design Center to build a new application
or App Hub to organize your existing resources, the result is
a defined application that is cataloged in App Hub and serves
as the basis for unified operations.
Application-centric observability : Monitor applications and optimize
usage with Google Cloud Observability products and features:
Monitor application health and performance with metrics, logs, and
traces.
Set up alerts based on metrics and logs.
Analyze costs and resource usage in Cost Explorer.
Application insights: Use Cloud Hub to get a centralized view
of operational data and insights for your applications and their components,
including alerts, incidents, and maintenance activities, to manage your
applications proactively. For more information, see the
Cloud Hub overview .
Application assistance : Get AI-powered support from
Gemini Cloud Assist with tasks such as designing
applications in Application Design Center, investigating issues, and
optimizing your resources. For more information, see the
Gemini Cloud Assist overview .
What's next
Learn more about App Hub
Choose your application setup model
Learn more about Application Design Center
Learn more about Cloud Hub
Prepare for application management
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
