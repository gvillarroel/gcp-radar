---
title: "Cloud SQL built-in database authentication \_|\_ Cloud SQL for SQL Server\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/built-in-authentication
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/built-in-authentication
  title: "Cloud SQL built-in database authentication \_|\_ Cloud SQL for SQL Server\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
SQL Server
Guides
Send feedback
Cloud SQL built-in database authentication
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how built-in authentication works on Cloud SQL instances.
Introduction
Authentication is the process of verifying the identity of a user who is
attempting to access an instance. Cloud SQL uses the following types of
authentication for database users:
The database's built-in authentication uses a username and a password to
authenticate local database users. For more information, see the following resources:
Create and manage users
About SQL Server users
Authentication using Managed Service for Microsoft Active Directory .
Authentication using customer-managed Microsoft AD .
Authentication using Microsoft Entra ID .
Although Active Directory or Microsoft Entra ID authentication can be more secure
and reliable, you might prefer to use built-in authentication or a hybrid
authentication model that includes different authentication types.
Limitations
Cloud SQL for SQL Server doesn't support the following capabilities:
Custom password policies
IAM database authentication
IAM authentication for database operations
Cloud SQL for SQL Serversupports IAM authentication for instance and
backup operations only. For more information, see IAM authentication .
What's next
Create an instance and set the password policy .
Create users with built-in authentication .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
