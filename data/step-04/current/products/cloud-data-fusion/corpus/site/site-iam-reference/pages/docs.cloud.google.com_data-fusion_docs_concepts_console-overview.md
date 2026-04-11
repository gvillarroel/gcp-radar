---
title: "Introduction to Cloud Data Fusion: Console \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/concepts/console-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/concepts/console-overview
  title: "Introduction to Cloud Data Fusion: Console \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Data Fusion
Guides
Send feedback
Introduction to Cloud Data Fusion: Console
Stay organized with collections
Save and categorize content based on your preferences.
This page introduces the Cloud Data Fusion: Console, also known as the
control plane . It's a set of API
operations and a Google Cloud console interface that
let you manage a Cloud Data Fusion instance. For example, using the
console, you can create, delete, restart, or update an instance.
Before you begin
Enable the Cloud Data Fusion API .
Understand the costs of Cloud Data Fusion editions .
Understand access control and service accounts in
Cloud Data Fusion.
Cloud Data Fusion: Console overview
The following sections describe important aspects of the console.
Instances
An instance is a unique deployment of Cloud Data Fusion. To start using
Cloud Data Fusion, you create an instance in the Google Cloud console.
You can create multiple Cloud Data Fusion instances in a single
Google Cloud project. You can specify a Google Cloud region for each
instance. Each instance is a unique, independent Cloud Data Fusion
deployment, which contains a set of services that handle pipeline lifecycle
management, orchestration, coordination, and metadata management. These services
run using long-running resources in a
tenant project .
When you create the instance, consider the following options.
Edition
You create the instance in one of the following Cloud Data Fusion editions:
Developer, Basic, or Enterprise .
Choose the edition based on the following criteria:
Cost
Concurrency limits for pipeline execution
Role-based access control (RBAC) availability
The editions are intended for the following use cases:
Cloud Data Fusion edition
Use case
Developer edition
For development, testing, or small-scale integrations
Basic edition
For production with moderate needs
Enterprise edition
For large-scale, mission-critical data pipelines with RBAC
Public or private instance
Depending on your requirements, decide if you need a public or a private
instance. The key differences between private and public instances in
Cloud Data Fusion are network connectivity and security:
Cloud Data Fusion instance type
Behavior
Public instance
Network connectivity : uses public IP addresses to
connect to the internet.
Data access : directly accesses data sources on the
public internet.
For more information, see Create a public instance .
Private instance
Network connectivity : uses private IP addresses
within a Virtual Private Cloud (VPC) network.
Data access : requires preconfigured connections to
access data sources. The following connections are supported:
On-premises data sources connected through VPN or
Cloud Interconnect.
Other Google Cloud services running privately within the same
VPC.
Note: Cloud Data Fusion recommends creating private instances with Private Service Connect .
Authorization and service account
Cloud Data Fusion typically has two service accounts:
Design-time service account
This Google-managed service account, called the Cloud Data Fusion API Service
Agent, is used in the tenant project of Cloud Data Fusion to access
customer project resources.
Execution-time service account
This is the default Compute Engine service account that
Cloud Data Fusion creates to deploy jobs that access other
Google Cloud resources. By default, it attaches to a Dataproc
cluster VM to enable Cloud Data Fusion to access Dataproc
resources during a pipeline run.
For more information, see Service accounts in Cloud Data Fusion .
Logging and monitoring
Cloud Logging and Cloud Monitoring are crucial for gaining insights into the health and
performance of your Cloud Data Fusion pipelines. You enable Logging
and Monitoring only when you create the Cloud Data Fusion instance.
Enabling Logging and Monitoring lets you view
Cloud Data Fusion pipeline logs in the Google Cloud console on the
Logging viewer page.
Monitoring provides built-in dashboards for
Cloud Data Fusion. You can also create custom dashboards to monitor
specific metrics.
Note: Enabling Logging and Monitoring in your
instance incurs additional costs. For more information, see
Pricing .
Lineage integration with Dataplex Universal Catalog
Cloud Data Fusion provides an integration with Dataplex Universal Catalog for
lineage. For more information, see View lineage in Dataplex Universal Catalog .
Encryption
Customer-managed encryption keys (CMEK) enable encryption of data at rest with a
key that you can control through the Cloud Key Management Service. CMEK provides user control
over the data written to Google Cloud internal resources in tenant projects
and data written by Cloud Data Fusion pipelines. For more information, see
Customer managed data encryption .
Manage permissions with role-based access control (RBAC)
Cloud Data Fusion lets you control with Identity and Access Management (IAM).
For granular permissions for actions performed in Cloud Data Fusion: Studio
operations, use RBAC. For more information, see the
RBAC overview .
Version upgrades
Cloud Data Fusion has versions. You can upgrade an instance to a later
version in the Cloud Data Fusion console. For more information, see
Versioning in Cloud Data Fusion .
What's next
Learn more about Cloud Data Fusion: Studio .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
