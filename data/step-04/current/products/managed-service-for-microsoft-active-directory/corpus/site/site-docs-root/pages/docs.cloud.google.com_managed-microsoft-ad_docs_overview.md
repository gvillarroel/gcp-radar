---
title: "Managed Microsoft AD overview \_|\_ Managed Service for Microsoft Active Directory\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/overview
  title: "Managed Microsoft AD overview \_|\_ Managed Service for Microsoft Active\
    \ Directory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Managed Microsoft AD
Guides
Send feedback
Managed Microsoft AD overview
Stay organized with collections
Save and categorize content based on your preferences.
Managed Service for Microsoft Active Directory (Managed Microsoft AD) offers highly available,
hardened Microsoft Active Directory domains hosted by Google Cloud.
This service helps reduce the important but mundane administrative tasks
required to manage Active Directory, while also extending your Active Directory
footprint into the cloud.
Managed Microsoft AD allows connecting to your existing, on-premises
Active Directory infrastructure from Google Cloud through a forest-level trust,
facilitating secure access to your organization's data.
How Managed Microsoft AD works
Managed Microsoft AD runs actual Microsoft Active Directory domain controllers
on Windows virtual machines to ensure application
compatibility. The service creates and maintains the domain controllers for you,
reducing the maintenance tasks you need to manage.
Multi-regional support
Managed Microsoft AD supports multi-regional deployment of Active Directory
forests when peered with Google Cloud's global low-latency
Virtual Private Cloud (VPC). Within VPC, you can
extend Managed Microsoft AD to multiple regions, without requiring VPC peering
or hybrid connectivity between the regions. This flexibility means that you
neither need to deploy Managed Microsoft AD in the same region as the
infrastructure, nor create a separate domain for each region. You can extend the
domain to up to four supported
regions to be
resilient to regional
outages
and easily horizontally scale, by deploying domain controllers in additional
regions as needed. To maintain
high availability and improve fault
tolerance ,
Managed Microsoft AD deploys two domain controllers to each region in
non-overlapping Google Cloud zones.
Forest design models
Managed Microsoft AD supports the following Active Directory forest design
models:
Organizational forest : The same forest contains both user accounts and
resources, which are managed independently.
Resource forest : A separate forest is used to manage resources.
Restricted access forest : A separate forest contains user
accounts and data that must be isolated from the rest of the organization.
Learn more about
AD forest design models
and
how to choose the right one for your organization .
How Managed Microsoft AD is different
Managed Microsoft AD differs from a traditional deployment of Active
Directory in a number of ways.
When implementing a traditional deployment of Active Directory, you must:
Manually design and deploy your organization's highly-available AD
topology.
Run AD diagnostics manually to ensure your domain is healthy, including
tracking DNS, replication, authentication, CPU load, and more.
Manually create backup plans and verify your organization's disaster
recovery response.
Manually define firewall rules for the network that hosts your AD domain.
Take special care to ensure other servers running on the same network
cannot compromise your AD domain.
Manually patch your AD domain controllers.
Make effort to design and implement security best practices, such as
time-bound access to the domain administrator account.
Ensure only trusted users have administrative access to the resources
that run your AD domain controllers.
The Managed Microsoft AD helps mitigate the effort required to set up and maintain
your Active Directory domains by automating a number of the tasks listed earlier
in this section.
Getting started with Managed Microsoft AD
To get started with using Managed Microsoft AD, specify the name of the
Managed Microsoft AD domain and the Google Cloud VPC networks where
the Managed Microsoft AD domain is authorized to be available. You can access
the Managed Microsoft AD domain using virtual machines in your
authorized Google Cloud VPC networks, or via on-premises
infrastructure and other cloud products that connect to Google Cloud
via VPN or Cloud Interconnect.
Managed Microsoft AD provides the following AD objects:
A delegated administrator account . Use the
account to manage your Active Directory domain.
The Cloud organizational unit (OU). Use the Cloud OU to create your Active
Directory objects, such as users, service accounts, and groups, as well as
additional OUs. You can apply Group Policy Objects (GPO) to the OUs you
create under the Cloud OU.
For more information, see Default Active Directory objects in Managed Microsoft AD .
Learn more
Create a domain
Deploy an Active Directory resource forest
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
