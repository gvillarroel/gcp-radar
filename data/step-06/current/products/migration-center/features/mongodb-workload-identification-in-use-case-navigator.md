---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.075Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "MongoDB workload identification in Use Case Navigator"
feature_slug: "mongodb-workload-identification-in-use-case-navigator"
latest_feature_date: "2025-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/software-workloads-insights"
  - "https://docs.cloud.google.com/migration-center/docs/migration-execution"
  - "https://docs.cloud.google.com/migration-center/docs/migration-planning-overview"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
keywords:
  - "mongodb"
  - "workload"
  - "identification"
  - "in"
  - "use"
  - "case"
  - "navigator"
  - "migration"
---

# MongoDB workload identification in Use Case Navigator

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center's Use Case Navigator can identify MongoDB workloads and provide transformation guidance and footprint reports.

## Extended Definition

Migration Center's Use Case Navigator can identify MongoDB workloads and provide transformation guidance and footprint reports.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/software-workloads-insights](https://docs.cloud.google.com/migration-center/docs/software-workloads-insights)
- [https://docs.cloud.google.com/migration-center/docs/migration-execution](https://docs.cloud.google.com/migration-center/docs/migration-execution)
- [https://docs.cloud.google.com/migration-center/docs/migration-planning-overview](https://docs.cloud.google.com/migration-center/docs/migration-planning-overview)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)

## Supporting Pages

### Detected software workloads \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/software-workloads-insights](https://docs.cloud.google.com/migration-center/docs/software-workloads-insights)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OS not supported by the vendor SharePoint Server 2019 Standard for Windows Server 2019 SharePoint Server 2019 Enterprise for Windows Server 2022 AI-powered software suggestions The following table lists AI-powered suggestions for software workloads detected by Migration Center in your infrastructure: Product Vendor Workload type Acronis Cyber Protect Acronis Cybersecurity and Backup Apache Kafka Apache Software Foundation Stream-processing and message broker Apache Solr Apache Software Foundation Search platform Apache ZooKeeper Apache Software Foundation Distributed coordination service ArcGIS Server Esri GIS server Avamar Backup Dell EMC Backup and recovery Avaya IP Office Avaya Unified communications Azure DevOps Server Microsoft DevOps BIND Internet Systems Consortium (ISC) DNS server Bacula Bacula Systems Backup and recovery Check Point Software Technologies Gaia Check Point Security OS and firewall Checkmk Tribe29 Monitoring Citrix Citrix Systems Virtualization Cloud Foundry Cloud Foundry Foundation Platform as a Service (PaaS) CodeMeter Runtime Server Wibu-Systems License management CommVault Backup Commvault Backup and recovery CompleteFTP Server Enterprise DT FTP server Docker Docker, Inc.
- MongoDB 6.0.x Community for CentOS 7 MongoDB 6.0.x Community for CentOS 8 MongoDB 7.0.x Community for CentOS 7 MongoDB 7.0.x Community for CentOS 8 MongoDB 7.2.x Community for Windows Server 2016 MongoDB 7.2.x Community for Windows Server 2019 MongoDB 7.2.x Community for Windows Server 2022 MongoDB 7.2.x Community for Windows Server 2022-core SUSE Pacemaker SUSE Cluster Resource Manager Advanced, scalable high-availability cluster resource manager.
- Workloads detected by predefined rules The following table lists software workloads in your infrastructure detected by Migration Center using predefined rules: Product Vendor Workload type Summary text Versions tested on Linux Versions tested on Windows MS SQL Server Microsoft Database Management System Relational database management system known for scalability and Windows integration.
- SAP Netweaver 7.5 for Debian 11 Oracle Database Oracle Corporation Database Management System Commercial relational database system commonly used for running online transaction processing, data warehousing and mixed database workloads.

### Execute your migration \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/migration-execution](https://docs.cloud.google.com/migration-center/docs/migration-execution)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Item Description 0 Migration tools architecture Architecture of tools constituting a migration factory (tools for ongoing assessment, wave plan refinement, workload-specific migration, build, testing, deployment, and monitoring) 1 Migration checklist Checklist for use before and during the migration sprint 2 Inventory List of workloads that will be migrated to Google Cloud 3 Sprint runbook Execution guidelines for migrating each workload 4 Migration plan Step-by-step migration plan (process) to be followed during the migration sprint 5 Network and security rules List of all of the firewall rules for ingress and egress on Google Cloud DNS changes during migration to Google Cloud 6 Risks and mitigation Possible risks during the migration sprint and mitigation steps 7 Testing and validation Test plan to validate functional and non-functional requirements 8 Rollback plan Rollback steps by workload 9 Team composition Team composition and roster with contact details 10 Governance RACI matrix of migration execution team, cadence and reporting, escalation resolution mechanisms Migration execution After you have completed the migration planning and preparation phase, this section describes how to perform repeatable migrations and validations to Google Cloud.
- You must continue to perform discovery and assessment throughout your cloud migration project to recalibrate and enrich data relating to the following aspects: Application and database mapping to infrastructure mapping (to identify all of the infrastructure and platform components for a business workload) Mapping between infrastructure to applications, databases, and services (to identify all of the business workloads attached to an infrastructure or platform component) Dependencies across business workloads Resource consumption by workloads Identification of any workloads that were not discovered in the initial wave of assessment Identification of new or changed landing zone requirements that have not been identified in the initial wave of assessment Identification of blocking issues that potentially prevent the migration An ongoing assessment is critical to continuously calibrate and refine move group, identify and mitigate risks, and refine and optimize migration wave plans.
- During the execution phase of your migration, you need to create an architecture of automation tools based on a number of factors, such as the type of workloads to be migrated, geographical distribution and rollout strategy, and security requirements.
- Assess The first iteration of assessment happens during the migration planning phase, and produces data on dependencies between workloads and infrastructure components.

### About migration planning \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/migration-planning-overview](https://docs.cloud.google.com/migration-center/docs/migration-planning-overview)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- You must tailor your migration landing zones to meet your specific use cases and application requirements.
- Before you begin Before you start your migration planning, complete a workload discovery and assessment , and create an overall migration strategy with the following tasks: Create a catalog of workloads, such as applications, services, and databases, that you want to migrate.
- After you complete the discovery and assessment phase, and set up your foundation design, you can start planning your migration by categorizing your workloads into migration waves .
- The Cloud Foundation Toolkit includes resources to help you get started with the following aspects of your new cloud infrastructure: Identity and Access Management Resource management Networking Data management Infrastructure as code Logging, monitoring, and billing Security foundations GKE foundations Note: Foundations design and set up is a preliminary step to migration planning and landing zone creation.

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,MigrationCenterTransport,Callable[..., MigrationCenterTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.
- Returns Type Description MigrationCenterTransport The transport used by the client instance. universe domain Return the universe domain used by the client instance.
- If a Callable is given, it will be called with the same set of initialization arguments as used in the MigrationCenterTransport constructor.
- If none is provided, then the first transport in the registry is used. group path group path ( project : str , location : str , group : str ) - > str Returns a fully-qualified group string. import data file path import data file path ( project : str , location : str , import job : str , import data file : str ) - > str Returns a fully-qualified import data file string. import job path import job path ( project : str , location : str , import job : str ) - > str Returns a fully-qualified import job string. list assets list assets ( request : typing .

