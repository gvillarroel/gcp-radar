---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.048Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "AI-powered software detection suggestions"
feature_slug: "ai-powered-software-detection-suggestions"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/software-workloads-insights"
  - "https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
keywords:
  - "ai"
  - "powered"
  - "software"
  - "detection"
  - "suggestions"
  - "migration"
  - "center"
  - "includes"
---

# AI-powered software detection suggestions

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center includes AI-powered suggestions for software detection.

## Extended Definition

Migration Center includes AI-powered suggestions for software detection.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/software-workloads-insights](https://docs.cloud.google.com/migration-center/docs/software-workloads-insights)
- [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)

## Supporting Pages

### Detected software workloads \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/software-workloads-insights](https://docs.cloud.google.com/migration-center/docs/software-workloads-insights)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OS not supported by the vendor SharePoint Server 2019 Standard for Windows Server 2019 SharePoint Server 2019 Enterprise for Windows Server 2022 AI-powered software suggestions The following table lists AI-powered suggestions for software workloads detected by Migration Center in your infrastructure: Product Vendor Workload type Acronis Cyber Protect Acronis Cybersecurity and Backup Apache Kafka Apache Software Foundation Stream-processing and message broker Apache Solr Apache Software Foundation Search platform Apache ZooKeeper Apache Software Foundation Distributed coordination service ArcGIS Server Esri GIS server Avamar Backup Dell EMC Backup and recovery Avaya IP Office Avaya Unified communications Azure DevOps Server Microsoft DevOps BIND Internet Systems Consortium (ISC) DNS server Bacula Bacula Systems Backup and recovery Check Point Software Technologies Gaia Check Point Security OS and firewall Checkmk Tribe29 Monitoring Citrix Citrix Systems Virtualization Cloud Foundry Cloud Foundry Foundation Platform as a Service (PaaS) CodeMeter Runtime Server Wibu-Systems License management CommVault Backup Commvault Backup and recovery CompleteFTP Server Enterprise DT FTP server Docker Docker, Inc.
- It also provides AI-powered software suggestions.
- Containerization Dovecot (IMAP/POP3) Dovecot Oy Mail server ELK Stack (Elasticsearch, Logstash, Kibana) Elastic Log management and Analytics Eclipse Jetty Eclipse Foundation Web server Elasticsearch Elastic Search engine Entrust PKI Entrust Public key infrastructure Exim University of Cambridge Mail transfer agent FLEXlm Flexera Software License management FileMaker Server Claris Database server Firebird Firebird Foundation Relational database management system Genetec Security Center Genetec Security platform Git Software Freedom Conservancy Version control system GitLab GitLab Inc.
- Workloads detected by predefined rules The following table lists software workloads in your infrastructure detected by Migration Center using predefined rules: Product Vendor Workload type Summary text Versions tested on Linux Versions tested on Windows MS SQL Server Microsoft Database Management System Relational database management system known for scalability and Windows integration.

### "Discovery client data collection and security \_|\_ Migration Center \_\

- URL: [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- It includes: Operating system (version and release) Hardware (CPU, memory, BIOS details) Network configuration (network interfaces, IP addresses, routing tables) Storage (disk drives, partitions, mount points) Installed software and services : The scripts collect a list of installed packages and running services to understand the VM's software stack and its role.
- Home Documentation Migration Migration Center Resources Send feedback Discovery client data collection and security Stay organized with collections Save and categorize content based on your preferences.
- It includes: Web servers (Apache, Tomcat, JBoss) Databases (evidence of SQL Server is collected in the Windows script) Other applications that might require specific configurations during migration.
- VMWare and cloud environment detection : Both the Linux and Windows scripts attempt to detect if the VM is already running in a cloud environment (AWS or Google Cloud), or in a VCenter cluster.

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict]] The request object.
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.
- CreateImportJobRequest ( parent="parent value", import job id="import job id value", import job=import job, ) Make the request operation = client. create import job (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportJobRequest , dict]] The request object.
- CreatePreferenceSetRequest ( parent="parent value", preference set id="preference set id value", ) Make the request operation = client. create preference set (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreatePreferenceSetRequest , dict]] The request object.

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict] The request object.
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict] The request object.
- CreateImportJobRequest ( parent="parent value", import job id="import job id value", import job=import job, ) Make the request operation = client. create import job (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateImportJobRequest , dict] The request object.
- CreatePreferenceSetRequest ( parent="parent value", preference set id="preference set id value", ) Make the request operation = client. create preference set (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreatePreferenceSetRequest , dict] The request object.

