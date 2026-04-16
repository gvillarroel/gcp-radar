---
title: "Choose your application setup model \_|\_ App Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/set-up-app-hub
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/set-up-app-hub
  title: "Choose your application setup model \_|\_ App Hub \_|\_ Google Cloud Documentation"
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
Choose your application setup model
Stay organized with collections
Save and categorize content based on your preferences.
To organize your infrastructure resources into App Hub applications,
you must define an
application management boundary . This
boundary can be a folder containing one or more projects, or a single
project, aligning with your organization's
resource hierarchy .
Within this boundary, App Hub can discover and manage
Google Cloud resources, letting you group them into applications by registering
them as services and
workloads . A key part of this setup is
the management project , a
specific Google Cloud project that serves as the central point for managing APIs,
access control, billing, and quotas for your applications.
This page guides you through selecting the best setup model for your
application management boundary by detailing the benefits, considerations, and feature
differences among the setup alternatives.
Compare setup models
The following table provides a comparison between projects and folders for your
application management boundary:
Feature
Single-project boundary ( Preview )
Folder-level boundary
Host project (Legacy)
Recommendation
New users or small organizations where all application components
reside in a single project.
Large organizations with multiple projects contained in a single
folder, where you want to align application management with your
organizational structure.
Supported model for existing users to manage application components
from multiple projects that aren't contained in a single folder.
Boundary extent
A single Google Cloud project
All descendant projects within a Google Cloud folder
A manually-managed set of service projects that define a
multiple-project boundary
Management
App Hub discovers supported resources within the project
automatically. You can register those resources as services or workloads
of applications.
Projects within the folder are automatically added to the boundary.
You can register supported resources from those descendant projects as
services or workloads of applications.
You must manually attach service projects to the host project to add
them to the boundary. You can register supported resources from those
service projects as services or workloads of applications.
Primary use case
Small applications, initial adoption, or teams managing
infrastructure resources within a single project.
Alignment of application management with your organizational structure
by business unit, environment, or team.
Scenarios where application components are spread across projects that
don't share a common folder.
Application-centric Google Cloud feature support
Limited support
Full support
Limited support
Setup complexity
Low: Requires a single project.
Medium: Requires a folder structure.
High: Requires manual linking of all projects to the boundary.
Setup guide
Set up a single project
Set up a folder
Set up a host project (Legacy)
Plan your resource hierarchy for application management
Effective application management in App Hub builds directly upon your
existing resource hierarchy in Google Cloud .
When you choose a folder or project as an
application management boundary ,
App Hub's application management layer respects the standard
hierarchical rules and inheritance policies of Google Cloud.
The way you define your application management boundary impacts the availability of
features across Application-centric Google Cloud products. For details, see
Feature support by boundary type .
How applications align with the Google Cloud resource hierarchy
Think of App Hub's data model as an overlay on the Google Cloud
resource hierarchy:
Permissions are inherited: IAM roles and permissions for
applications are granted on the management project, and standard
IAM inheritance rules
from your resource hierarchy apply.
Metadata is centralized: The management project centralizes
application metadata, such as application owners, criticality, and
environment, adding an application-aware layer to your resource management.
The choice of your application management boundary fundamentally shapes how you organize
your components in App Hub applications. As illustrated in
Figure 1 , defining your application management boundary on a parent folder, such as
F1 , lets applications within that folder include resources from projects
directly within it, such as P10 and P11 , as well as from projects within
nested folders, such as P20 and P21 within F2 .
Figure 1. The application management boundary is defined on a parent folder.
As illustrated in Figure 2 , if you define your application management boundary on the
nested folder F2 , applications in that folder can use resources from projects
within it, such as P20 and P21 . If you want to include resources from
projects in the parent folder F1 , such as P10 , you must move that project to
F2 .
Figure 2. The application management boundary is defined on a nested folder.
Feature support by boundary type
The following table compares Application-centric Google Cloud product support for each boundary
setup model.
Boundary type
App Hub project type
Application-centric Google Cloud support
Single project ( Preview )
Host project
App Hub
Application Monitoring
Management project
App Hub
Application Design Center
Application Monitoring
Folder level
Management project
App Hub
Application Design Center
Application Monitoring
Cloud Hub
Cost Explorer
Gemini Cloud Assist
Other Application-centric Google Cloud products
Multiple projects
Host project
App Hub
Application Monitoring
What's next
Set up a single project
Set up a folder
Set up a host project (Legacy)
App Hub IAM roles and permissions
App Hub overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
