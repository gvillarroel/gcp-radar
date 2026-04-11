---
title: "Deploy Oracle Data Guard on Bare Metal Solution \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/data-guard-setup/overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/bms-overview
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/data-guard-setup/overview
  title: "Deploy Oracle Data Guard on Bare Metal Solution \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new Oracle and Google Cloud strategic partnership offerings .
Home
Documentation
Distributed, hybrid, and multicloud
Bare Metal
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Deploy Oracle Data Guard on Bare Metal Solution
Oracle® Data Guard
is a high availability and disaster recovery solution for Oracle databases.
Setting it up on Bare Metal Solution follows the same best practices
as on-premises or any other Oracle Data Guard deployment.
Note: Customers are responsible for procuring licenses for the Oracle workloads
they choose to run on Bare Metal Solution, and customers are responsible for complying
with those licenses. Google does not provide licenses for Oracle workloads.
Before you begin
This guide explains the process of configuring Oracle Data Guard on Bare Metal Solution.
It applies to Bare Metal Solution environments running Oracle database version 12.2 or
newer that meet the following criteria:
Each environment contains two Bare Metal Solution clusters
that are configured in separate regional extensions.
Each Bare Metal Solution cluster communicates through a Google Virtual Private Cloud (VPC)
via a Partner Cloud Interconnect .
Oracle Grid Infrastructure and Oracle database
are already installed on the Bare Metal Solution servers.
The primary and standby databases for Data Guard are hosted in separate
Bare Metal Solution regional extensions.
Each Bare Metal Solution cluster uses Oracle Real Application Clusters (RAC) option
for high availability.
Each Bare Metal Solution cluster uses Oracle Automatic Storage Management (ASM) for
shared storage.
Oracle ASM diskgroup names are consistent between clusters.
TCP port 1521 is used for communication between the primary and standby
databases.
The first Bare Metal Solution cluster hosts the Data Guard primary database and the
second Bare Metal Solution cluster hosts the standby database. This guide uses the Data
Guard broker to manage the configuration. This guide also includes instructions
to optionally configure the Data Guard observer on Compute Engine. Configuring an
observer lets you configure automatic database failover between the primary and
standby databases.
Important: You are responsible for the disaster recovery service level
objectives for your application.
System architecture
The following diagram shows the system architecture used in this guide:
Each regional extension contains a different Bare Metal Solution cluster. The primary
database, DBDG_SITE1 , exists in regional extension 1. The
standby database, DBDG_SITE2 , exists in regional
extension 2 and is created via active duplication. Communication between the
databases travels over the Partner Cloud Interconnect through a shared
customer Virtual Private Cloud.
Next steps
Next, prepare Data Guard's primary database .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
