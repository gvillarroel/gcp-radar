---
title: "About migration planning \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/migration-planning-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/migration-planning-overview
  title: "About migration planning \_|\_ Migration Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Guides
Send feedback
About migration planning
Stay organized with collections
Save and categorize content based on your preferences.
After you complete the discovery and assessment phase, and set up your
foundation design, you can start planning your migration by categorizing
your workloads into migration waves .
This page describes how to plan a successful migration.
Before you begin
Before you start your migration planning, complete a
workload discovery and assessment ,
and create an overall migration strategy with the following tasks:
Create a catalog of workloads, such as applications, services,
and databases, that you want to migrate.
Map the workloads to infrastructure components.
Map the dependencies.
Identify high level migration and modernization paths (rehost,
replatform, refactor, re-architect, replace, retire).
Then, use the
Cloud Foundation Toolkit
to build your foundation on Google Cloud.
The Cloud Foundation Toolkit includes resources to help you get started with the
following aspects of your new cloud infrastructure:
Identity and Access Management
Resource management
Networking
Data management
Infrastructure as code
Logging, monitoring, and billing
Security foundations
GKE foundations
Note: Foundations design and set up
is a preliminary step to migration planning and landing zone creation.
You must tailor your migration landing zones to meet your specific
use cases and application requirements.
The details of the landing zone, such as IAM, networking
constructs, logging, monitoring, billing, and security, are determined based
on the fundamental design elements created during the foundations design
phase.
Migration concepts
A cloud migration project represents the entire process that
your organization follows to migrate the applications to Google Cloud.
Each cloud migration project is divided into waves . A wave is a group of
applications that share common characteristics or interdependencies, as
identified by the workload discovery and assessment. Standalone applications and
databases are typically good candidates for a first migration wave, given their
low external dependencies. On the other hand, applications with many
dependencies would constitute a complex migration wave that requires
additional planning.
Applications within a migration wave are divided into move groups and
migrated to Google Cloud in sprints .
A move group is a group of infrastructure resources and workloads that
you need to migrate together.
These resources and workloads can be part of the same application, or a group
of applications that are interdependent.
Business capability is one of the most important aspects to determine the move
groups. For example, supply chain management and inventory management in
retail, fraud monitoring in banking, claim processing in insurance, represent
business capability areas in the respective domains.
Considering business capability is critical to ensure minimal or no
disruption to business service performance and availability during
and after migration.
Within a business capability area, you need to perform the migration
according to your different environments.
Research and development (R&D) environments are typically the first to be
migrated. This helps you identify and mitigate any blockers that might
prevent or slow down the migration.
You can then follow the best practices and mitigation activities
as you progress through the migration of R&D, pre-production
and production environments.
You need to run discovery and assessment as an ongoing process, with data
collection getting increasingly refined and more accurate over time.
This lets you constantly improve the accuracy of workload-specific data,
which helps you identify workload-specific risks associated with the
cloud migration.
The first wave of discovery and assessment lets you create a high-level map
of the dependencies between your infrastructure components and workloads.
This helps you plan and optimize the elements of your target Google Cloud
architecture during the first wave—for example, VM types, storage classes,
landing zone design, high-level capacity sizing based on computational
and I/O throughput requirements.
You also need to run a migration risk assessment in parallel with
discovery and assessment. The aim is to identify and measure the
workload-specific risks associated with the migration, and to
start the appropriate mitigation actions.
The following diagram shows the whole migration process at a glance.
What's next
Learn how to evaluate and mitigate the migration risks .
Learn how to plan your migration waves .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
