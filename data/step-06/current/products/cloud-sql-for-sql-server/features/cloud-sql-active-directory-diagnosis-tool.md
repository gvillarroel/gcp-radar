---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.564Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Cloud SQL Active Directory Diagnosis tool"
feature_slug: "cloud-sql-active-directory-diagnosis-tool"
latest_feature_date: "2023-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
keywords:
  - "sql"
  - "active"
  - "directory"
  - "diagnosis"
  - "tool"
  - "troubleshooting"
  - "helps"
  - "diagnose"
---

# Cloud SQL Active Directory Diagnosis tool

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

A troubleshooting tool helps diagnose connection issues for AD-enabled Cloud SQL for SQL Server instances using an on-premises Active Directory domain.

## Extended Definition

A troubleshooting tool helps diagnose connection issues for AD-enabled Cloud SQL for SQL Server instances using an on-premises Active Directory domain.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)

## Supporting Pages

### "Active Directory Diagnosis tool for Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- Source ID: `site-docs-reference-required-4`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Active Directory (AD) Diagnosis tool is a utility PowerShell script that helps you to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Active Directory Diagnosis tool for Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to use the Active Directory Diagnosis tool for Cloud SQL and explains the checks that the tool performs.
- Checks performed by the AD Diagnosis tool Check Description Notes and recommendation Available domain controllers Issues a ping to the IP address of each domain controller on the on-premises domain to ensure they are reachable.

### Troubleshoot \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Issues updating storage capacity Topics in this page include: Backup and recovery Cloning Connectivity Creating instances Flags High availability Import and export Linked servers Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "compute#forwardingRule", "id": " ENDPOINT ID ", "creationTimestamp": "2024-05-09T12:03:21.383-07:00", "name": " ENDPOINT NAME ", "region": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME ", "IPAddress": " IP ADDRESS ", "target": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /serviceAttachments/ SERVICE ATTACHMENT NAME ", "selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME ", "network": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/default", "serviceDirectoryRegistrations": [ { "namespace": "goog-psc-default" } ], "networkTier": "PREMIUM", "labelFingerprint": " LABEL FINGERPRINT ID ", "fingerprint": " FINGERPRINT ID ", "pscConnectionId": " CONNECTION ID ", "pscConnectionStatus": "ACCEPTED", "allowPscGlobalAccess": true } Verify that the status of the endpoint is ACCEPTED .
- To download the logs as JSON: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" \ downloaded-log.json To download the logs as TEXT: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" jq -rnc --stream 'fromstream(1 truncate stream(inputs)) \ .textPayload' \ --order = asc downloaded-log.txt Manage instances Issue Troubleshooting Temporary storage increased automatic storage.
- Network connectivity issues with private IP instances You might experience some of the following issues during integration setup: Slow operations to create Microsoft Entra ID logins Unable to create Microsoft Entra ID logins Unable to connect to the instance using Microsoft Entra ID authentication For more information on how to help address these issues, see Troubleshooting Microsoft Entra ID integration .

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- To create an instance that is integrated with Managed Service for Microsoft Active Directory, specify a domain, such as subdomain.mydomain.com , for the domain field.
- Console Note: If you plan to integrate with Managed Service for Microsoft Active Directory, review the prerequisites for integration .
- You only need to do this once per directory. terraform init Optionally, to use the latest Google provider version, include the -upgrade option: terraform init -upgrade Apply the changes Review the configuration and verify that the resources that Terraform is going to create or update match your expectations: terraform plan Make corrections to the configuration as necessary.
- You only need to run this command once per project, and you can run it in any directory. export GOOGLE CLOUD PROJECT= PROJECT ID Environment variables are overridden if you set explicit values in the Terraform configuration file.

