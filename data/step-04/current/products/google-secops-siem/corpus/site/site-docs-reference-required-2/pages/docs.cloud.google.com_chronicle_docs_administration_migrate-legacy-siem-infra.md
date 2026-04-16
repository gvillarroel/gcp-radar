---
title: "Migrate legacy SIEM Infra to Google Cloud \_|\_ Google Security Operations\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/administration/migrate-legacy-siem-infra
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/threatconnect-ioc-v3
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/administration/migrate-legacy-siem-infra
  title: "Migrate legacy SIEM Infra to Google Cloud \_|\_ Google Security Operations\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Migrate legacy SIEM Infra to Google Cloud
Supported in:
Google secops
SIEM
This document guides you through a self-service migration of legacy SIEM Infra to Google Cloud. This migration modernizes your SIEM infrastructure to meet industry standards, enhances reliability, privacy, compliance, and granular access controls, and unlocks newer capabilities, such as agentic SOC.
Which SIEM instance should be migrated?
Migrate your SIEM instance if it is any of the following types:
Not deployed in your Google Cloud project
OR Not using Google Cloud Authentication (Workforce Identity Federation / Cloud Identity)
OR Not using Google Cloud Identity and Access Management (IAM) for Role-Based Access Control (RBAC)
You don't need to migrate if your instance meets all of the following conditions:
Deployed in a Google Cloud project
AND Uses Workforce Identity Federation or Cloud Identity for authentication
AND Uses Google Cloud IAM to manage granular access permissions
Why migrate now?
Migrating to the new infrastructure unlocks several critical benefits for your organization:
Enhanced reliability and security: Leverages Google Cloud infrastructure to provide higher platform reliability, stronger privacy controls, and enhanced security controls with VPC Service Controls.
Granular access controls: Transition from homegrown RBAC to Google Cloud IAM, enabling very precise feature and data access permissions.
Agentic SOC capabilities: Unlocks new agentic capabilities and AI-driven security operations.
Comprehensive auditing: Integration with Cloud Audit Logs for enhanced visibility into product actions.
Compliance: Meet growing compliance requirements including CMEK, VPC Service Controls, FedRAMP, and regional data residency requirements.
Scope of migration
Infra
Legacy stack
Modern stack
Project hosting
Google owned project
Customer-owned Google Cloud project
Authentication
Legacy SIEM Authentication
Google Cloud Auth: Workforce Identity Federation (WIF) or Cloud Identity
Authorization
Legacy SIEM RBAC
Feature RBAC: Google Cloud IAM
Audit Logging
Limited internal logging
Cloud Audit Logs: Comprehensive Google Cloud logging
Before you begin
Prepare your Google Cloud environment before you start the migration:
Identify or create a Google Cloud organization and a Google Cloud project . Contact your Google Cloud administrator if you don't have the permissions to do so.
Link the project to the correct billing account , consistent with your Google SecOps contract.
Perform the Self-service Migration
Perform the following migration steps in order. These steps are designed to ensure no adverse impact to customers, including no data loss and no product downtime.
Migrate from your non-Google Cloud project to a Google Cloud project
Migrate from legacy authentication to Google Cloud authentication
Migrate from legacy RBAC to feature RBAC .
After migration
After migration, you gain the following enhanced Google SecOps capabilities:
Authentication : Your authentication service is upgraded to Cloud Identity or Workforce Identity Federation .
Authorization : You have granular authorization, based on Cloud IAM roles and permissions.
Audit logs : You have comprehensive logs that you can view in Cloud Audit Logs .
We're here to help
We understand that these changes might require some planning, and we are here to support you throughout this transition. If you have any questions or require assistance, contact Google Cloud Support .
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
