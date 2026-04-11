---
title: "Database Center release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-center/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/database-center/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/database-center/docs/release-notes
  title: "Database Center release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Center
Guides
Send feedback
Database Center release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Database Center.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
December 22, 2025
Feature
You can use Database Center to monitor your Cloud SQL database
resources for enhanced backup protection. Enhanced protection is a
Backup and DR Service feature. For more information, see
Use enhanced backup protection .
To configure enhanced backups for Cloud SQL resources, see
Enhanced backups .
October 10, 2025
Feature
You can monitor the inventory, metrics, and alerts for Oracle Database@Google Cloud
databases using Database Center. For more information, see
Metrics and alerting policy filters .
Oracle Database@Google Cloud support in Database Center is in
Preview .
During Preview, you can't monitor health issues for Oracle Database@Google Cloud
databases.
September 02, 2025
Feature
You can create alerting policies for new database resources and signals, using
filters to restrict the monitored metric data. This feature lets you get
detailed insights into the health of your database fleet and troubleshoot
issues. You can filter data based on metric labels, such as signal type, or by
resource labels, such as the resource's location or name. For more information,
see
Metrics and alerting policy filters .
Feature
The following performance recommendations and insights are available in
Database Center:
Replication lag for Bigtable.
Outdated client for Bigtable.
Connections burdening disk for Cloud SQL for SQL Server.
Location org policy not satisfied for Spanner.
For more information, see
Supported health issues .
August 05, 2025
Feature
Database Center offers monitoring support for databases running on
Google Compute Engine virtual machines. This feature is in
Preview .
To request access to this feature, visit the
access request page .
For more information, see
Monitor databases on Compute Engine virtual machines .
Feature
Database Center supports the analyze system performance feature
in the High Resource Utilization recommendation for
AlloyDB for PostgreSQL. For more information, see
Performance insights and recommendations .
Change
You can enable Gemini chat at the folder level to help you learn about
Google Cloud database products. To learn how to enable Gemini
chat at the folder level, see
Before you begin using Gemini chat .
Change
You can monitor the number of new Google Cloud database resources that were
added to your fleet over the past 1, 7, or 30 days. For more information, see
View recently added database resources .
April 09, 2025
Feature
When you enable Gemini, the following performance recommendations and insights are available in Database Center:
Inefficient query/index advisor for Cloud SQL
Analyze option for high resource utilization health recommendation for Cloud SQL and AlloyDB.
For more information, see Supported health issues .
Feature
Database Center is integrated with VPC Service Controls to secure data and resources. Use VPC Service Controls to create service perimeters that protect the resources in your database fleet and data of services that you explicitly specify. For more information, see Configure VPC Service Controls .
Feature
You can view incidents and alerting policies in Database Center. Use incidents to be notified when a metric specific to a resource is more or less than a threshold value. Use an alerting policy to create incidents to help you monitor your database fleet resources. For more information, see Monitor your database fleet with alerting policies .
Feature
Database Center is generally available ( GA ). Database Center is an AI-assisted dashboard that gives you a centralized view across your database fleet. You can view database fleet health issues and recommendations, and you can ask questions about database fleet health issues, including availability configuration, data protection, security, and industry compliance. For more information, see Database Center overview .
Feature
Additional supported health issues are available in Database Center. Database Center detects health issues in multiple database products to help you maintain and troubleshoot your database fleet. For more information, see Supported health issues in the Database Center documentation.
Feature
You can create a customized dashboard view that shows only the health issues in your database fleet that you want to see. A dashboard view can be for only you, or it can be shared with other users who have access to your Google Cloud project. For more information, see Create customized dashboard views .
Change
To use Gemini chat, you must open a Google Cloud project. Use Gemini chat to learn more about database fleet health issues in Database Center. For more information, see Use Gemini chat .
December 12, 2024
Feature
Database Center added support for Bigtable , Firestore , and Memorystore so you can view and analyze their resources in your fleet inventory. Database Center also added support for detecting the following health issues in Bigtable and Firestore:
Displayed Bigtable health issues:
Resource not failover protected
No automated backup policy
Short backup retention
Last backup failed
Last backup older than 24 hours
Not replicating across all regions
Displayed Firestore health issues
No automated backup policy
October 10, 2024
Feature
Spanner is now available on Database Center in Preview . You can track your Spanner resources in the fleet inventory section and the resource table in the Database Center. You can also use Database Center to monitor the following health issues for your Spanner resources:
Short backup retention
Last backup older than 24h
Not replicating across regions
You can now access Database Center without enabling Gemini in Databases. Supported health issues are in one of three tiers : Standard, Gemini in Databases, or Security Command Center (SCC). For more information about health issues and their tiers, see Supported health issues .
July 16, 2024
Feature
The following Database Center features are now available in Preview :
New health issues: Database Center supports new health issues in the following categories for AlloyDB for PostgreSQL, Cloud SQL for PostgreSQL, Cloud SQL for MySQL, and Cloud SQL for SQL Server:
Industry compliance
Performance and capacity
Security
Event Threat Detection (ETD) from Security Command Center
To learn details about supported health issues, see Database health issues .
CSV export: You can export database fleet inventory information to a comma-separated values (CSV) file. For more information, see Export database fleet inventory information .
All Resources page: The Database Center dashboard now offers a separate page for database resources, which includes additional metadata columns. For more information, see Filter resources and export fleet inventory information .
Additional resource metadata: On the All Resources page, Database Center now displays additional metadata for each relevant database resource, including machine configuration (CPU count and memory size) and utilization metrics (current CPU utilization, memory utilization, and storage utilization as percentages of total capacity).
April 09, 2024
Feature
Gemini in Databases is now in Preview. This includes Database Center, which supports Cloud SQL for MySQL, Cloud SQL for PostgreSQL, Cloud SQL for SQL Server, and AlloyDB for PostgreSQL. For more information, see the Gemini in Databases release notes .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
