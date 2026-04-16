---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:35.141Z"
product_name: "Database Center"
product_slug: "database-center"
feature_name: "Performance and capacity health issues"
feature_slug: "performance-and-capacity-health-issues"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-center/docs/database-health-issues"
  - "https://docs.cloud.google.com/database-center/docs/view-filter-database-health-issues"
  - "https://docs.cloud.google.com/database-center/docs/health-issues-recommendations"
  - "https://docs.cloud.google.com/database-center/docs/troubleshoot-database-health-issues"
keywords:
  - "performance"
  - "and"
  - "capacity"
  - "health"
  - "issues"
  - "database"
  - "center"
  - "supports"
---

# Performance and capacity health issues

Product: Database Center
Coverage: MEDIUM

## Step 02 Summary

Database Center supports performance and capacity health issues for AlloyDB for PostgreSQL and selected Cloud SQL engines.

## Extended Definition

Database Center supports performance and capacity health issues for AlloyDB for PostgreSQL and selected Cloud SQL engines.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-center/docs/database-health-issues](https://docs.cloud.google.com/database-center/docs/database-health-issues)
- [https://docs.cloud.google.com/database-center/docs/view-filter-database-health-issues](https://docs.cloud.google.com/database-center/docs/view-filter-database-health-issues)
- [https://docs.cloud.google.com/database-center/docs/health-issues-recommendations](https://docs.cloud.google.com/database-center/docs/health-issues-recommendations)
- [https://docs.cloud.google.com/database-center/docs/troubleshoot-database-health-issues](https://docs.cloud.google.com/database-center/docs/troubleshoot-database-health-issues)

## Supporting Pages

### Database health issues \_|\_ Database Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-center/docs/database-health-issues](https://docs.cloud.google.com/database-center/docs/database-health-issues)
- Source ID: `site-docs-root`
- Final score: 337
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Built-in SCC Gemini AlloyDB for PostgreSQL Bigtable Cloud SQL for MySQL Cloud SQL for PostgreSQL Cloud SQL for SQL Server Firestore Memorystore Spanner MySQL on Compute Engine PostgreSQL on Compute Engine Microsoft SQL Server on Compute Engine Availability Cost Data protection Industry compliance Other Performance and capacity Security Clear all element. --> Category Issue Tier AlloyDB for PostgreSQL Bigtable Cloud SQL for MySQL Cloud SQL for PostgreSQL Cloud SQL for SQL Server Firestore Memorystore Spanner MySQL on Compute Engine PostgreSQL on Compute Engine Microsoft SQL Server on Compute Engine Availability Database resource not failover protected Built-in ✔ ✔ ✔ ✔ ✔ Availability Suspended resource Built-in ✔ Availability Not multi-regional for disaster recovery Built-in ✔ ✔ ✔ ✔ ✔ ✔ Availability Maintenance policy not set Other ✔ Cost Idle database resource Gemini ✔ ✔ ✔ Cost Overprovisioned database resource Gemini ✔ ✔ ✔ Data protection No automated backup policy Built-in ✔ ✔ ✔ ✔ ✔ ✔ ✔ Data protection Short backup retention Built-in ✔ ✔ ✔ ✔ ✔ ✔ Data protection Last backup failed Built-in ✔ ✔ ✔ ✔ ✔ Data protection Last backup older than 24 hours Built-in ✔ ✔ ✔ ✔ ✔ ✔ Data protection Deletion protection not enabled Built-in ✔ ✔ ✔ ✔ ✔ Data protection Short backup retention Built-in ✔ Data protection No point-in-time recovery Built-in ✔ ✔ ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 2.0 SCC ✔ ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.3 SCC ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.2 SCC ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.1 SCC ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.0 SCC ✔ ✔ ✔ Industry compliance Violates NIST 800-53 SCC ✔ ✔ ✔ ✔ Industry compliance Violates ISO-27001 SCC ✔ ✔ ✔ ✔ Industry compliance Violates PCI-DSS v3.2.1 SCC ✔ ✔ Industry compliance Violates NIST 800-53 R5 SCC ✔ ✔ ✔ Industry compliance Violates NIST Cybersecurity Framework 1.0 SCC ✔ ✔ ✔ ✔ Industry compliance Violates ISO-27001 v2022 SCC ✔ ✔ ✔ ✔ Industry compliance Violates PCI-DSS v4.0 SCC ✔ ✔ ✔ ✔ Industry compliance Violates SOC2 v2017 SCC ✔ ✔ ✔ ✔ Industry compliance Violates Cloud Controls Matrix 4 SCC ✔ ✔ ✔ ✔ Industry compliance Violates CIS Critical Security Controls 8.0 SCC ✔ ✔ ✔ Industry compliance Violates HIPAA SCC ✔ ✔ ✔ Other Logs not optimized for troubleshooting SCC ✔ Other Query durations not logged SCC ✔ Other Error logging misconfigured for statement severity SCC ✔ ✔ Other Error logging misconfigured for message severity SCC ✔ ✔ Other Verbose error logging SCC ✔ ✔ Other User granted all permissions SCC ✔ ✔ Other Query lock waits not logged SCC ✔ Other Error logging misconfigured for statements SCC ✔ Other Query statistics logged SCC ✔ Other Excessive logging of client hostname SCC ✔ Other Excessive logging of parser statistics SCC ✔ Other Excessive logging of planner statistics SCC ✔ Other Not logging temporary files SCC ✔ Other Not logging only DDL statements SCC ✔ Other Logging query statement statistics SCC ✔ Other Concurrent connections max configured SCC ✔ Other User options configured SCC ✔ Other Connection attempts not logged SCC ✔ Other Disconnections not logged SCC ✔ Other Logging excessive statement info SCC ✔ Other Data exported to external Cloud Storage bucket SCC ✔ ✔ ✔ Other Data exported to public Cloud Storage bucket SCC ✔ ✔ ✔ Other Writes to user table by superuser SCC ✔ ✔ ✔ Security Public IP enabled Built-in ✔ ✔ ✔ Security Exposed to broad access Built-in ✔ ✔ ✔ ✔ ✔ ✔ Security Unencrypted connections Built-in ✔ ✔ ✔ ✔ ✔ ✔ Security No root password SCC ✔ ✔ ✔ ✔ Security Weak root password SCC ✔ ✔ ✔ ✔ Security Encryption key not customer-managed SCC ✔ ✔ ✔ Security Contained database authentication not required SCC ✔ Security Exposed to external scripts SCC ✔ Security Exposed to local data loads SCC ✔ Security Exposed to remote access SCC ✔ Security Database names exposed SCC ✔ Security Sensitive trace info not masked SCC ✔ Security Auditing not enabled Built-in ✔ ✔ ✔ ✔ ✔ ✔ Security Server certificate expiring Built-in ✔ ✔ ✔ ✔ Security Violates policy restricting public IP Built-in ✔ ✔ ✔ Security Violates policy restricting authorized networks Built-in ✔ ✔ ✔ Security No password policy Built-in ✔ ✔ ✔ Security No user password policy Built-in ✔ ✔ Performance and capacity High number of tables Built-in ✔ (E+) Performance and capacity High transaction ID utilization Built-in ✔ (E+) Performance and capacity High number of open tables Built-in ✔ Performance and capacity Connections impacting performance Built-in ✔ (E+) ✔ Performance and capacity Temp tables impacting performance Built-in ✔ (E+) Performance and capacity Transaction logs burdening disk Built-in ✔ (E+) Performance and capacity Nearing cluster quota limit Built-in ✔ Performance and capacity High resource utilization Built-in ✔ ✔ ✔ ✔ ✔ ✔ Performance and capacity Hotspot detected Built-in ✔ ✔ Performance and capacity Nearing or at storage capacity Built-in ✔ ✔ Performance and capacity Expensive commands Built-in ✔ Performance and capacity Inefficient queries SCC ✔ ✔ ✔ ✔ Performance and capacity Read-intensive workload Built-in ✔ Performance and capacity Memory nearing tier limit Built-in ✔ Performance and capacity Server memory misconfigured Built-in ✔ Security Encryption org policy not satisfied Built-in ✔ Performance and capacity Large rows detected Built-in ✔ Performance and capacity High write pressure Built-in ✔ Performance and capacity High read pressure Built-in ✔ Security Outdated minor version for patch Built-in ✔ ✔ ✔ Performance and capacity Replication lag Built-in ✔ Security Outdated client Built-in ✔ Security Location org policy not satisfied Built-in ✔ Performance Schema not optimized Built-in ✔ Performance and capacity Analytical workload not using Data Boost Built-in ✔ Cost Outdated version needs extended support Built-in ✔ ✔ ✔ Supported health issues in Preview The following health issues are in Preview for the specified database products: Health check Product No point-in-time recovery AlloyDB for PostgreSQL High resource utilization Bigtable Hotspot detected Bigtable Nearing or at storage capacity Bigtable Deletion protection not enabled Bigtable Suspended resource Bigtable Large rows detected Bigtable High write pressure Bigtable High read pressure Bigtable Deletion protection not enabled Cloud SQL Inefficient queries Cloud SQL No point-in-time recovery Cloud SQL Read-intensive workload Cloud SQL Memory nearing tier limit Cloud SQL Server memory misconfigured Cloud SQL No point-in-time recovery Firestore No automated backup policy Firestore Exposed to broad access Firestore High resource utilization Memorystore Expensive commands Memorystore Maintenance policy not set Memorystore Deletion protection not enabled Spanner Last backup older than 24 hours Spanner Encryption org policy not satisfied Spanner Outdated minor version for patch MySQL on Compute Engine, PostgreSQL on Compute Engine, Microsoft SQL Server on Compute Engine Unencrypted connections MySQL on Compute Engine, PostgreSQL on Compute Engine No root password MySQL on Compute Engine, PostgreSQL on Compute Engine, Microsoft SQL Server on Compute Engine Auditing not enabled MySQL on Compute Engine, PostgreSQL on Compute Engine Exposed to broad access MySQL on Compute Engine, PostgreSQL on Compute Engine Security issues supported by Security Command Center pricing tiers Security Command Center Built-in tier supports the following health issues for Cloud SQL in Database Center: Public IP enabled Exposed to public access Security Command Center Premium tier supports the following health issues in Database Center: Industry compliance violations Unencrypted connections Databases not auditable No password Weak password Encryption key not customer-managed Server authentication not required Exposed by ownership chaining Exposed to external scripts Exposed to local data loads Logs not optimized for troubleshooting Connection attempts not logged Disconnections not logged Query durations not logged Verbose error logging Error logging misconfigured for statements Error logging misconfigured for statement severity Error log misconfigured for message severity Not logging only DDL statements Exposed to remote access Database names exposed Sensitive trace info not masked For more information, see Security Command Center pricing tiers .
- Health issue categories To help you view the most important aspects of your database fleet health at a glance, Database Center organizes health issues into industry-standard categories including cost, performance and capacity, availability, data protection, security, and industry compliance.
- Databases with a large number of tables or high table utilization Temporary tables affecting database performance Other Other issues include miscellaneous configurations that can help you with the following: Query troubleshooting, like "query durations not logged" Errors and logging scope, like "verbose error logging" Settings related to connections and users, like "connection attempts not logged" Health issue tiers Supported health issues are in one of three tiers: Built-in : included by default with Database Center Gemini : requires you to enable Gemini Cloud Assist.
- Database Center helps you monitor compliance for the following industry standards: CIS Google Cloud Foundation 2.0 CIS Google Cloud Foundation 1.3 CIS Google Cloud Foundation 1.2 CIS Google Cloud Foundation 1.1 CIS Google Cloud Foundation 1.0 NIST 800-53 ISO-27001 PCI-DSS v3.2.1 Performance and capacity Performance and capacity issues help you determine if your resource usage is putting your database performance at risk.

### "View and filter database health issues \_|\_ Database Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/database-center/docs/view-filter-database-health-issues](https://docs.cloud.google.com/database-center/docs/view-filter-database-health-issues)
- Source ID: `site-docs-root`
- Final score: 309
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also filter database health issues by clicking one of the database health categories, like Availability Configuration , Data Protection , Security , Industry Compliance , Performance and Capacity , and Cost .
- Filter database health issues To specify which database health issues you care about and the thresholds you consider relevant, follow these steps: Go to the Database Center page in the Google Cloud console.
- Home Documentation Databases Database Center Guides Send feedback View and filter database health issues Stay organized with collections Save and categorize content based on your preferences.
- In Database Center, you can filter database issues and view an aggregation of recent health issues.

### "View and filter health issues and recommendations \_|\_ Database Center\

- URL: [https://docs.cloud.google.com/database-center/docs/health-issues-recommendations](https://docs.cloud.google.com/database-center/docs/health-issues-recommendations)
- Source ID: `site-docs-root`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To filter health issues by database resources, do the following on the View health and recommendations page or the Database Center Overview page: From the drop-down in the Google Cloud console menu bar, select a database scope—for example, a Google Cloud project, folder, or organization.
- Home Documentation Databases Database Center Guides Send feedback View and filter health issues and recommendations Stay organized with collections Save and categorize content based on your preferences.
- Database Center lets you filter and prioritize health issues to understand, triage, and manage database issues across your entire database fleet, helping you identify key recommendations to address.
- Find important health issues To view the issues and recommendations for your fleet, do the following: In the Google Cloud console, go to the Database Center page.

### "Troubleshoot database health issues \_|\_ Database Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-center/docs/troubleshoot-database-health-issues](https://docs.cloud.google.com/database-center/docs/troubleshoot-database-health-issues)
- Source ID: `site-docs-root`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Database Center Guides Send feedback Troubleshoot database health issues Stay organized with collections Save and categorize content based on your preferences.
- You can view details about database fleet health issues and recommended resolutions, as well as compliance violation information.
- Troubleshoot database health issues In the Google Cloud console, go to the Database Center page.
- View database health issues In the Google Cloud console, go to the Database Center page.

