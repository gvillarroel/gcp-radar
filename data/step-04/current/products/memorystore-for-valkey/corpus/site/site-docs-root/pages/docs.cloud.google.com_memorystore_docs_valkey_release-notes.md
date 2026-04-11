---
title: "Memorystore for Valkey release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/release-notes
  title: "Memorystore for Valkey release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Valkey
Resources
Send feedback
Memorystore for Valkey release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Memorystore for Valkey. You can
periodically check this page for announcements about new or updated features,
bug fixes, known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
April 06, 2026
Feature
You can use the Memorystore for Valkey remote MCP server .
This server lets you connect to Memorystore for Valkey instances from LLMs, AI
applications, and AI-enabled development platforms. This feature is available in Preview .
March 26, 2026
Feature
In addition to the per-instance CA mode , Memorystore for Valkey offers the following new CA modes:
Shared CA : a managed,
regionalized CA infrastructure. For each region, you can download a single CA
certificate bundle. This bundle is valid for all instances located in a region
that you configure to use the shared CA. Using a shared CA reduces the number of
certificates that clients need to manage. This CA mode is available in Preview .
Customer-managed CA :
use your own CA pool that's hosted on Certificate Authority Service . If your client applications are configured to trust this CA, then your
applications can connect to an instance without you having to download and
install additional CA certificates. This gives you greater control and helps you
meet compliance requirements. This CA mode is available in Preview .
Feature
Memorystore for Valkey supports version 1.0 of Bloom filters and JSON documents . This feature is available in Preview .
March 18, 2026
Feature
You can use the Google Cloud console to find and set maintenance windows and perform self-service maintenance on instances. This feature is Generally Available .
March 17, 2026
Feature
The simulate maintenance event feature for Memorystore for Valkey is Generally Available .
Feature
You can now deploy instances in the asia-southeast3 (Bangkok), europe-north2
(Stockholm), and northamerica-south1 (Mexico)
regions .
March 11, 2026
Feature
Support for version 9.0 of Valkey
is Generally Available .
February 10, 2026
Feature
You can now use the Google Cloud console to manage backups .
This feature is Generally Available .
January 23, 2026
Feature
Added support for Valkey version
9.0. As a result, you can now upgrade the version of your Memorystore for Valkey
instance to 9.0. For more information, see About upgrading the Valkey version of an instance . This feature is available in Preview .
December 18, 2025
Feature
Memorystore for Valkey supports organization policy constraints for customer-managed encryption keys (CMEK). By using
these constraints, you can enforce CMEK protection for your instances and limit
which Cloud Key Management Service (KMS) keys you can use for this protection.
This feature is Generally Available .
December 11, 2025
Feature
You can now deploy instances in the africa-south1 (Johannesburg) region.
November 17, 2025
Feature
The /node/server/healthy
metric is Generally Available .
October 22, 2025
Feature
We have implemented a security fix for CVE-2025-49844 .
October 21, 2025
Feature
You can now use self-service maintenance
to update your instance to a newer version. This feature is Generally Available .
October 17, 2025
Feature
You can now create an instance in
Memorystore for Valkey, even if a zone of the region where you want the instance
to be created is unavailable. If this occurs, then Memorystore for Valkey creates
the instance in the available zones of the region. This feature is Generally Available .
October 10, 2025
Feature
Memorystore for Valkey now supports maintenance changelogs. Maintenance
changelogs provide information about updates available in new maintenance
versions, such as patches for security vulnerabilities.
For links to current maintenance changelogs for each major version of
Memorystore for Valkey, see Memorystore for Valkey maintenance changelogs . This feature is Generally Available .
October 06, 2025
Feature
For each primary node of a Memorystore for Valkey instance, you can now have up to
five replica nodes. For more information, see Memorystore for Valkey overview . This feature is Generally Available .
September 19, 2025
Feature
The customer-managed encryption keys (CMEK) feature for Memorystore for Valkey is now Generally Available .
August 29, 2025
Feature
You can now simulate maintenance events on your Memorystore for Valkey instances. This feature helps you test how your application behaves during a maintenance event by triggering a simulation of the operations that occur during maintenance. This feature is available in Preview .
August 27, 2025
Feature
You can now use Memorystore for Valkey, along with Spring Boot and PostgreSQL, to create a session management system, scalable leaderboard system, and high-performance caching service. For more information, see Client library code samples . These code samples are Generally Available .
August 26, 2025
Feature
You can now use Cloud Logging to query and view maintenance logs for a Memorystore for Valkey instance. For more information, see View maintenance logs . This feature is Generally Available .
August 12, 2025
Feature
You can now use the Google Cloud console to work with cross-region replication . This feature is Generally Available .
August 11, 2025
Feature
You can now use the /node/server/healthy metric to determine whether an instance node is available and functioning correctly. This metric is available in Preview .
July 16, 2025
Feature
You can now use Valkey GLIDE to connect your applications to Memorystore for Valkey instances.
July 07, 2025
Feature
The feature to create Memorystore for Valkey instances in Cluster Enabled and Cluster Disabled modes is now Generally Available .
June 25, 2025
Feature
The version upgrade feature for Memorystore for Valkey is now Generally Available (GA) .
May 09, 2025
Feature
Memorystore for Valkey now provides node-level metrics. This feature is Generally Available (GA) . For more information, see Supported monitoring metrics .
April 25, 2025
Feature
The maintenance feature for Memorystore for Valkey is now Generally Available (GA) .
April 22, 2025
Feature
Memorystore for Valkey supports storing and querying vector data. This feature is now Generally Available (GA) . For more information, see About vector search .
April 18, 2025
Feature
You can now manage backups for Memorystore for Valkey instances. This feature is Generally Available (GA) .
April 16, 2025
Feature
You can now create Memorystore for Valkey instances with the Cluster Mode Disabled configuration. This configuration is in addition to the Cluster Mode Enabled configuration that we already support. The Cluster Mode Disabled feature is available in Preview . For more information, see Enable and disable cluster mode .
April 02, 2025
Feature
Multi-VPC support for Memorystore for Valkey is now Generally Available (GA) . This functionality enables you to create Private Service Connect endpoints in multiple VPCs to connect to the same Memorystore for Valkey instance. This provides you with enhanced flexibility and resilience for your network architecture. For more information, see About multiple VPC networking .
Feature
The cross-region replication feature for Memorystore for Valkey is now Generally Available (GA) . This release includes Terraform support for cross-region replication on Memorystore for Valkey.
Feature
Memorystore for Valkey is now Generally Available (GA) .
Feature
You can now upgrade the version of your Memorystore for Valkey instance from 7.2 to 8.0. For more information, see About upgrading the Valkey version of an instance . This feature is Public Preview .
March 28, 2025
Feature
You can now perform maintenance on a Memorystore for Valkey instance. This feature is Public Preview .
March 24, 2025
Feature
After you create a Memorystore for Valkey instance, you can now change the node type for the instance. For more information, see Scale an instance .
October 02, 2024
Feature
Added support for Valkey version 8.0 (Preview). For more information, see Supported versions .
September 19, 2024
Feature
Added support for 1, 2, and 4 shard instance shapes (Preview). For more details, see Selecting an instance shape of 1, 2, or 4 shards .
September 13, 2024
Feature
Added support for vector store and vector search capabilities (Preview). For more details, see About vector search .
August 30, 2024
Announcement
Preview release of Memorystore for Valkey .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
