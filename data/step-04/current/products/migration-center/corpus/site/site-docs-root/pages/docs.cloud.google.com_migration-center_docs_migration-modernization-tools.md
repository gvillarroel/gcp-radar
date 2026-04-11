---
title: "Migration tools \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools
  title: "Migration tools \_|\_ Migration Center \_|\_ Google Cloud Documentation"
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
Migration tools
Stay organized with collections
Save and categorize content based on your preferences.
Migration tools are at the center of migration execution.
They allow you to move your existing workloads to Google Cloud and to
take advantage of Google Cloud managed services when you modernize your
infrastructure.
This document presents the main tools that Google Cloud professional
service teams use during migration projects.
Google Cloud tools
This table presents some of the migration tools
available in Google Cloud.
Strategy
Tools
Source
Destination
Description
Lift and shift
Migrate to Virtual Machines
On-premises VMware VMs
VMs from other cloud environments
Compute Engine
Tool to migrate virtual machines
from on-premises and cloud environments to Google Cloud.
VMware HCX
On-premises VMware VMs
VMware VMs running in alternate clouds
Google Cloud VMware Engine
Tool to migrate virtual machines (VMs) from on-premises
environments to Google Cloud VMware Engine. VMware HCX abstracts
vSphere-based on-premises and cloud resources and presents them to
applications as one continuous resource, creating a hybrid
infrastructure.
Replatform
Migrate to Containers
On-premises physical servers, VMs, GKE
GKE, Autopilot, GKE Enterprise, Cloud Run
Tool used to convert VM-based workloads into containers in
Google Kubernetes Engine (GKE) or GKE Enterprise.
Workloads can be migrated from VMs running on either VMware on-premises,
AWS, Azure, or Compute Engine, giving the flexibility to
containerize the existing workloads with ease.
Datastream
PostgreSQL (including AlloyDB for PostgreSQL and AlloyDB Omni),
MySQL, SQL Server, Oracle
Cloud Storage, BigQuery
This tool is a serverless change data capture (CDC) and replication
service that lets you synchronize data reliably, and with minimal latency.
It provides seamless replication of data from operational databases into
BigQuery, and supports writing the change event stream into
Cloud Storage. You can also integrate Datastream with
Dataflow templates to build custom workflows for loading data
into destinations such as Cloud SQL and Spanner.
Database Migration Service
PostgreSQL, MySQL, SQL Server, Oracle
Cloud SQL, AlloyDB for PostgreSQL
This tool is a serverless service that helps migrate PostgreSQL workloads
into Cloud SQL and AlloyDB for PostgreSQL, MySQL and SQL Server workloads
into Cloud SQL, and Oracle workloads into Cloud SQL for PostgreSQL or
AlloyDB for PostgreSQL. Database Migration Service streamlines networking workflows, manages
the initial snapshot and ongoing replication, and provides a status of the
migration operations.
Refactor
BigQuery Data Transfer Service
Teradata, Amazon RedShift
BigQuery
This tool automates data movement from software-as-a-service apps to
BigQuery on a scheduled, managed basis.
Based on the nature of the workloads that you want to migrate, you might want
to integrate other tools with your migration tools architecture.
The following list includes additional migration tools:
Storage Transfer Service
lets you bring data to Cloud Storage from other cloud providers, online
resources, or local data (for example: S3, Blob, Data Lake, on-premises file
systems).
Transfer Appliance
is a hardware appliance you can use to migrate large volumes of data
(recommended for data that exceeds 20 TBs and up to 1 petabyte) to
Google Cloud without disrupting business operations.
Image Import
lets you to import virtual disks in your on-premises environment with
software and configurations that you need (a.k.a. golden disks or golden
images) into Google Cloud and uses the resulting image to create
virtual machines.
The tool supports most virtual disk file formats, including VMDK
and VHD.
Third-party tools
The following list includes third-party migration tools.
The list is meant as a reference only, and doesn't represent a statement of
support by Google.
RackWare Management Module (RMM)
is a fully-automated enterprise-grade migration solution that lets you migrate
physical and virtual servers from any data center or public cloud into
Google Cloud.
It is listed in Google Cloud Marketplace, and you can purchase a license in
two ways:
Within the Cloud Marketplace, by selecting
RackWare Cloud Migration SaaS and API .
Directly from RackWare, by selecting
RackWare Cloud Migration Virtual Machine .
SUREedge
is a tool that lets you migrate physical and virtual environments to
Google Cloud when Migrate to Virtual Machines might not be a fit, for
example for on-premises non-vSphere virtualized environments.
Data Validation Tool
is an open sourced Python CLI tool based on the Ibis framework that
compares heterogeneous data source tables with multi-leveled validation
functions. Data validation is a critical step in a Data Warehouse,
Database or Data Lake migration project.
HarbourBridge: Spanner Evaluation and Migration
is a standalone open source tool for Spanner evaluation and
migration, using data from an existing PostgreSQL, MySQL, SQL Server,
Oracle or DynamoDB database.
HBase Tools
help HBase users with migrations to Bigtable.
Migrate Hive tables to BigQuery
framework migrates data from Hive to BigQuery using
Cloud SQL to keep track of the migration progress.
Build and deploy automation and CI/CD tools
The automation of building and deployment within a CI/CD framework
is an essential part of the migration process.
Cloud Build
is a service that executes your builds on Google Cloud.
Cloud Build can import source code from Cloud Storage,
Cloud Source Repositories, GitHub, or Bitbucket, execute a build to your
specifications, and produce artifacts such as Docker containers or Java archives.
Artifact Registry
provides a single location for managing packages and Docker container images. It
integrates with CI/CD tools and Google Cloud runtime environments so that you
can manage the full artifact lifecycle.
Cloud Deploy
is a managed service that automates delivery of your applications to a series of
target environments in a defined promotion sequence.
If you have containerized applications, you can deploy them with
Kubernetes
and managed services such as
Google Kubernetes Engine .
To deploy into a serverless environment, you can use tools such as
App Engine flexible environment ,
Cloud Run functions ,
and
Cloud Run .
Testing tools
As you migrate workloads to Google Cloud, you need to test these workloads
for specific functional and non-functional scenarios with a view to measure and
mitigate the impact on functionality, integration, security, performance,
and availability.
The choice of testing tools depends on several factors, such as the following:
Compatibility with technology stacks of workloads
Degree of test automation
Integration with CI/CD framework
Defect logging and management
Test project and program management
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
