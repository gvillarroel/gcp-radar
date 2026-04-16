---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.534Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Private Service Connect outbound connectivity"
feature_slug: "private-service-connect-outbound-connectivity"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/debugging-connectivity"
keywords:
  - "private"
  - "connect"
  - "outbound"
  - "connectivity"
  - "lets"
  - "psc"
  - "enabled"
  - "sql"
---

# Private Service Connect outbound connectivity

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect outbound connectivity lets PSC-enabled Cloud SQL instances make outbound connections to your network through a PSC interface.

## Extended Definition

Private Service Connect outbound connectivity lets PSC-enabled Cloud SQL instances make outbound connections to your network through a PSC interface.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect](https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)

## Supporting Pages

### "Private Service Connect overview \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect](https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect)
- Source ID: `site-docs-reference-required-4`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can't convert the replica of an instance that has Private Service Connect outbound connectivity-enabled to a DR replica .
- Switchover isn't supported for instances with Private Service Connect outbound connectivity enabled.
- Private Service Connect outbound connectivity can't be enabled on a read replica instance.
- Limitations When using a Private Service Connect interface with a network attachment to create outbound connections to your network from your Cloud SQL instance, note the following limitations: Enabling or disabling Private Service Connect outbound connectivity requires downtime.

### Debugging connection issues \_|\_ Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following section includes examples of questions you can ask yourself to help further narrow down the issue: Connection issues checklist Connecting Private IP Have you enabled the Service Networking API for your project?
- Test with Connectivity Test Connectivity Test is a diagnostics tool that lets you check connectivity between endpoints in your network.
- The limit flag is an optional parameter that indicates the maximum number of entries to return. gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/mysql-general.log" \ --limit = 10 gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/postgres.log" \ --limit = 10 Private IP addresses Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- It's highly encouraged to run tcpdump to capture and inspect the packets between your host and the Cloud SQL instances when you are debugging the connectivity problems.

### Troubleshoot \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The network attachment is unable to accept connections from the Private Service Connect interface when using Private Service Connect outbound connectivity .
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Issues updating storage capacity Topics in this page include: Backup and recovery Cloning Connectivity Creating instances Flags High availability Import and export Linked servers Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- Network connectivity issues with private IP instances You might experience some of the following issues during integration setup: Slow operations to create Microsoft Entra ID logins Unable to create Microsoft Entra ID logins Unable to connect to the instance using Microsoft Entra ID authentication For more information on how to help address these issues, see Troubleshooting Microsoft Entra ID integration .
- For more information, see Edit an instance with Private Service Connect enabled .

