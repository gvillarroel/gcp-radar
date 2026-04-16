---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:35.138Z"
product_name: "Database Center"
product_slug: "database-center"
feature_name: "Firestore automated backup policy insight"
feature_slug: "firestore-automated-backup-policy-insight"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-center/docs/metrics"
  - "https://docs.cloud.google.com/database-center/docs/database-health-issues"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types.AdditionalDetail"
  - "https://docs.cloud.google.com/database-center/docs/best-practices-managing-database-fleet-health"
keywords:
  - "firestore"
  - "automated"
  - "backup"
  - "policy"
  - "insight"
  - "database"
  - "center"
  - "detects"
---

# Firestore automated backup policy insight

Product: Database Center
Coverage: MEDIUM

## Step 02 Summary

Database Center detects when a Firestore resource has no automated backup policy.

## Extended Definition

Database Center detects when a Firestore resource has no automated backup policy.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-center/docs/metrics](https://docs.cloud.google.com/database-center/docs/metrics)
- [https://docs.cloud.google.com/database-center/docs/database-health-issues](https://docs.cloud.google.com/database-center/docs/database-health-issues)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types.AdditionalDetail](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types.AdditionalDetail)
- [https://docs.cloud.google.com/database-center/docs/best-practices-managing-database-fleet-health](https://docs.cloud.google.com/database-center/docs/best-practices-managing-database-fleet-health)

## Supporting Pages

### "Metrics and alerting policy filters \_|\_ Database Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-center/docs/metrics](https://docs.cloud.google.com/database-center/docs/metrics)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Database Center Guides Send feedback Metrics and alerting policy filters Stay organized with collections Save and categorize content based on your preferences.
- NO AUTOMATED BACKUP POLICY The resource has no automated backup policy.
- However, if you add the filters product=CLOUD SQL and version=2 to a chart, then the chart won't display data. product engine version ALLOYDB POSTGRES 14 , 15 , 16 , 17 BIGTABLE NATIVE N/A CLOUD SQL MYSQL 5.6 , 5.7 , 8.0 , 8.4 CLOUD SQL POSTGRES 9.6 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 CLOUD SQL SQL SERVER SQLSERVER 2017 EXPRESS , SQLSERVER 2017 STANDARD , SQLSERVER 2017 ENTERPRISE , SQLSERVER 2017 WEB , SQLSERVER 2019 EXPRESS , SQLSERVER 2019 STANDARD , SQLSERVER 2019 ENTERPRISE , SQLSERVER 2019 WEB , SQLSERVER 2022 EXPRESS , SQLSERVER 2022 STANDARD , SQLSERVER 2022 ENTERPRISE , SQLSERVER 2022 WEB COMPUTE ENGINE MYSQL , POSTGRES , SQL SERVER N/A FIRESTORE FIRESTORE WITH NATIVE MODE , FIRESTORE WITH DATASTORE MODE , FIRESTORE WITH MONGODB COMPATIBILITY MODE N/A MEMORYSTORE MEMORYSTORE FOR REDIS 3.2 , 4.0 , 5.0 , 6.X , 7.0 , 7.2 MEMORYSTORE MEMORYSTORE FOR REDIS CLUSTER 7 ORACLE ON GCP EXADATA ORACLE 19, 23 ORACLE ON GCP ADB SERVERLESS ORACLE 19c, 23ai SPANNER NATIVE N/A Filter by signal type The New database signals (resource/new signal count) metric type defines the one label key, issue type .
- Use the following table to choose a supported resource type: resource type Definition alloydb . googleapis . com / Cluster An AlloyDB for PostgreSQL cluster. alloydb . googleapis . com / Instance An AlloyDB for PostgreSQL instance. bigtableadmin . googleapis . com / Cluster A Bigtable cluster. bigtableadmin . googleapis . com / Instance A Bigtable instance. compute . googleapis . com / Instance A Compute Engine instance. firestore . googleapis . com / Database A Firestore database. oracledatabase . googleapis . com / AutonomousDatabase An Oracle autonomous database resource. oracledatabase . googleapis . com / CloudExadataInfrastructure An Oracle cloud Exadata infrastructure resource oracledatabase . googleapis . com / CloudVmCluster An Oracle cloud VM Cluster resource redis . googleapis . com / Cluster A Redis cluster redis . googleapis . com / Instance A Redis instance spanner . googleapis . com / Instance A Spanner instance. sqladmin . googleapis . com / Instance A Cloud SQL instance.

### Database health issues \_|\_ Database Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-center/docs/database-health-issues](https://docs.cloud.google.com/database-center/docs/database-health-issues)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Built-in SCC Gemini AlloyDB for PostgreSQL Bigtable Cloud SQL for MySQL Cloud SQL for PostgreSQL Cloud SQL for SQL Server Firestore Memorystore Spanner MySQL on Compute Engine PostgreSQL on Compute Engine Microsoft SQL Server on Compute Engine Availability Cost Data protection Industry compliance Other Performance and capacity Security Clear all element. --> Category Issue Tier AlloyDB for PostgreSQL Bigtable Cloud SQL for MySQL Cloud SQL for PostgreSQL Cloud SQL for SQL Server Firestore Memorystore Spanner MySQL on Compute Engine PostgreSQL on Compute Engine Microsoft SQL Server on Compute Engine Availability Database resource not failover protected Built-in ✔ ✔ ✔ ✔ ✔ Availability Suspended resource Built-in ✔ Availability Not multi-regional for disaster recovery Built-in ✔ ✔ ✔ ✔ ✔ ✔ Availability Maintenance policy not set Other ✔ Cost Idle database resource Gemini ✔ ✔ ✔ Cost Overprovisioned database resource Gemini ✔ ✔ ✔ Data protection No automated backup policy Built-in ✔ ✔ ✔ ✔ ✔ ✔ ✔ Data protection Short backup retention Built-in ✔ ✔ ✔ ✔ ✔ ✔ Data protection Last backup failed Built-in ✔ ✔ ✔ ✔ ✔ Data protection Last backup older than 24 hours Built-in ✔ ✔ ✔ ✔ ✔ ✔ Data protection Deletion protection not enabled Built-in ✔ ✔ ✔ ✔ ✔ Data protection Short backup retention Built-in ✔ Data protection No point-in-time recovery Built-in ✔ ✔ ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 2.0 SCC ✔ ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.3 SCC ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.2 SCC ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.1 SCC ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.0 SCC ✔ ✔ ✔ Industry compliance Violates NIST 800-53 SCC ✔ ✔ ✔ ✔ Industry compliance Violates ISO-27001 SCC ✔ ✔ ✔ ✔ Industry compliance Violates PCI-DSS v3.2.1 SCC ✔ ✔ Industry compliance Violates NIST 800-53 R5 SCC ✔ ✔ ✔ Industry compliance Violates NIST Cybersecurity Framework 1.0 SCC ✔ ✔ ✔ ✔ Industry compliance Violates ISO-27001 v2022 SCC ✔ ✔ ✔ ✔ Industry compliance Violates PCI-DSS v4.0 SCC ✔ ✔ ✔ ✔ Industry compliance Violates SOC2 v2017 SCC ✔ ✔ ✔ ✔ Industry compliance Violates Cloud Controls Matrix 4 SCC ✔ ✔ ✔ ✔ Industry compliance Violates CIS Critical Security Controls 8.0 SCC ✔ ✔ ✔ Industry compliance Violates HIPAA SCC ✔ ✔ ✔ Other Logs not optimized for troubleshooting SCC ✔ Other Query durations not logged SCC ✔ Other Error logging misconfigured for statement severity SCC ✔ ✔ Other Error logging misconfigured for message severity SCC ✔ ✔ Other Verbose error logging SCC ✔ ✔ Other User granted all permissions SCC ✔ ✔ Other Query lock waits not logged SCC ✔ Other Error logging misconfigured for statements SCC ✔ Other Query statistics logged SCC ✔ Other Excessive logging of client hostname SCC ✔ Other Excessive logging of parser statistics SCC ✔ Other Excessive logging of planner statistics SCC ✔ Other Not logging temporary files SCC ✔ Other Not logging only DDL statements SCC ✔ Other Logging query statement statistics SCC ✔ Other Concurrent connections max configured SCC ✔ Other User options configured SCC ✔ Other Connection attempts not logged SCC ✔ Other Disconnections not logged SCC ✔ Other Logging excessive statement info SCC ✔ Other Data exported to external Cloud Storage bucket SCC ✔ ✔ ✔ Other Data exported to public Cloud Storage bucket SCC ✔ ✔ ✔ Other Writes to user table by superuser SCC ✔ ✔ ✔ Security Public IP enabled Built-in ✔ ✔ ✔ Security Exposed to broad access Built-in ✔ ✔ ✔ ✔ ✔ ✔ Security Unencrypted connections Built-in ✔ ✔ ✔ ✔ ✔ ✔ Security No root password SCC ✔ ✔ ✔ ✔ Security Weak root password SCC ✔ ✔ ✔ ✔ Security Encryption key not customer-managed SCC ✔ ✔ ✔ Security Contained database authentication not required SCC ✔ Security Exposed to external scripts SCC ✔ Security Exposed to local data loads SCC ✔ Security Exposed to remote access SCC ✔ Security Database names exposed SCC ✔ Security Sensitive trace info not masked SCC ✔ Security Auditing not enabled Built-in ✔ ✔ ✔ ✔ ✔ ✔ Security Server certificate expiring Built-in ✔ ✔ ✔ ✔ Security Violates policy restricting public IP Built-in ✔ ✔ ✔ Security Violates policy restricting authorized networks Built-in ✔ ✔ ✔ Security No password policy Built-in ✔ ✔ ✔ Security No user password policy Built-in ✔ ✔ Performance and capacity High number of tables Built-in ✔ (E+) Performance and capacity High transaction ID utilization Built-in ✔ (E+) Performance and capacity High number of open tables Built-in ✔ Performance and capacity Connections impacting performance Built-in ✔ (E+) ✔ Performance and capacity Temp tables impacting performance Built-in ✔ (E+) Performance and capacity Transaction logs burdening disk Built-in ✔ (E+) Performance and capacity Nearing cluster quota limit Built-in ✔ Performance and capacity High resource utilization Built-in ✔ ✔ ✔ ✔ ✔ ✔ Performance and capacity Hotspot detected Built-in ✔ ✔ Performance and capacity Nearing or at storage capacity Built-in ✔ ✔ Performance and capacity Expensive commands Built-in ✔ Performance and capacity Inefficient queries SCC ✔ ✔ ✔ ✔ Performance and capacity Read-intensive workload Built-in ✔ Performance and capacity Memory nearing tier limit Built-in ✔ Performance and capacity Server memory misconfigured Built-in ✔ Security Encryption org policy not satisfied Built-in ✔ Performance and capacity Large rows detected Built-in ✔ Performance and capacity High write pressure Built-in ✔ Performance and capacity High read pressure Built-in ✔ Security Outdated minor version for patch Built-in ✔ ✔ ✔ Performance and capacity Replication lag Built-in ✔ Security Outdated client Built-in ✔ Security Location org policy not satisfied Built-in ✔ Performance Schema not optimized Built-in ✔ Performance and capacity Analytical workload not using Data Boost Built-in ✔ Cost Outdated version needs extended support Built-in ✔ ✔ ✔ Supported health issues in Preview The following health issues are in Preview for the specified database products: Health check Product No point-in-time recovery AlloyDB for PostgreSQL High resource utilization Bigtable Hotspot detected Bigtable Nearing or at storage capacity Bigtable Deletion protection not enabled Bigtable Suspended resource Bigtable Large rows detected Bigtable High write pressure Bigtable High read pressure Bigtable Deletion protection not enabled Cloud SQL Inefficient queries Cloud SQL No point-in-time recovery Cloud SQL Read-intensive workload Cloud SQL Memory nearing tier limit Cloud SQL Server memory misconfigured Cloud SQL No point-in-time recovery Firestore No automated backup policy Firestore Exposed to broad access Firestore High resource utilization Memorystore Expensive commands Memorystore Maintenance policy not set Memorystore Deletion protection not enabled Spanner Last backup older than 24 hours Spanner Encryption org policy not satisfied Spanner Outdated minor version for patch MySQL on Compute Engine, PostgreSQL on Compute Engine, Microsoft SQL Server on Compute Engine Unencrypted connections MySQL on Compute Engine, PostgreSQL on Compute Engine No root password MySQL on Compute Engine, PostgreSQL on Compute Engine, Microsoft SQL Server on Compute Engine Auditing not enabled MySQL on Compute Engine, PostgreSQL on Compute Engine Exposed to broad access MySQL on Compute Engine, PostgreSQL on Compute Engine Security issues supported by Security Command Center pricing tiers Security Command Center Built-in tier supports the following health issues for Cloud SQL in Database Center: Public IP enabled Exposed to public access Security Command Center Premium tier supports the following health issues in Database Center: Industry compliance violations Unencrypted connections Databases not auditable No password Weak password Encryption key not customer-managed Server authentication not required Exposed by ownership chaining Exposed to external scripts Exposed to local data loads Logs not optimized for troubleshooting Connection attempts not logged Disconnections not logged Query durations not logged Verbose error logging Error logging misconfigured for statements Error logging misconfigured for statement severity Error log misconfigured for message severity Not logging only DDL statements Exposed to remote access Database names exposed Sensitive trace info not masked For more information, see Security Command Center pricing tiers .
- Databases with a large number of tables or high table utilization Temporary tables affecting database performance Other Other issues include miscellaneous configurations that can help you with the following: Query troubleshooting, like "query durations not logged" Errors and logging scope, like "verbose error logging" Settings related to connections and users, like "connection attempts not logged" Health issue tiers Supported health issues are in one of three tiers: Built-in : included by default with Database Center Gemini : requires you to enable Gemini Cloud Assist.
- Database Center helps you monitor compliance for the following industry standards: CIS Google Cloud Foundation 2.0 CIS Google Cloud Foundation 1.3 CIS Google Cloud Foundation 1.2 CIS Google Cloud Foundation 1.1 CIS Google Cloud Foundation 1.0 NIST 800-53 ISO-27001 PCI-DSS v3.2.1 Performance and capacity Performance and capacity issues help you determine if your resource usage is putting your database performance at risk.
- Health issue categories To help you view the most important aspects of your database fleet health at a glance, Database Center organizes health issues into industry-standard categories including cost, performance and capacity, availability, data protection, security, and industry compliance.

### "Class AdditionalDetail (0.7.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types.AdditionalDetail](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types.AdditionalDetail)
- Source ID: `site-python-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This field is a member of oneof detail . automated backup policy info google.cloud.databasecenter v1beta.types.AutomatedBackupPolicyInfo Automated backup policy information applies to signals with type SIGNAL TYPE NO AUTOMATED BACKUP POLICY.
- Setting any member of the oneof automatically clears all other members. .. oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields Attributes Name Description short backup retention info google.cloud.databasecenter v1beta.types.RetentionSettingsInfo Short backup retention information applies to signals with type SIGNAL TYPE SHORT BACKUP RETENTION.
- This field is a member of oneof detail . backup run info google.cloud.databasecenter v1beta.types.BackupRunInfo Backup run information applies to signals with types SIGNAL TYPE LAST BACKUP FAILED and SIGNAL TYPE LAST BACKUP OLD.
- This field is a member of oneof detail . deletion protection info google.cloud.databasecenter v1beta.types.DeletionProtectionInfo Deletion protection information applies to signals with type SIGNAL TYPE NO DELETION PROTECTION This field is a member of oneof detail . resource suspension info google.cloud.databasecenter v1beta.types.ResourceSuspensionInfo Resource suspension information applies to signals with type SIGNAL TYPE RESOURCE SUSPENDED .

### "Best practices for managing database fleet health \_|\_ Database Center\

- URL: [https://docs.cloud.google.com/database-center/docs/best-practices-managing-database-fleet-health](https://docs.cloud.google.com/database-center/docs/best-practices-managing-database-fleet-health)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- To check whether your resource is protected with enhanced backup protection, complete these steps: Go to the Resources page in Database Center.
- Enable automated backups Backups help you restore lost data to your database resources, and they protect your data from loss or damage.
- Home Documentation Databases Database Center Guides Send feedback Best practices for managing database fleet health Stay organized with collections Save and categorize content based on your preferences.
- View recently added database resources To verify that the number of recently added database resources match your expectations, we recommend that you check the Database Center dashboard regularly.

