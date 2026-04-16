---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.161Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Vulnerabilities tab"
feature_slug: "vulnerabilities-tab"
latest_feature_date: "2019-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center"
  - "https://docs.cloud.google.com/database-center/docs/database-health-issues"
keywords:
  - "vulnerabilities"
  - "tab"
  - "scc"
  - "displays"
  - "dashboard"
  - "summarizing"
  - "security"
  - "health"
---

# Vulnerabilities tab

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The Vulnerabilities tab in Cloud SCC displays a dashboard summarizing Security Health Analytics findings.

## Extended Definition

The Vulnerabilities tab in Cloud SCC displays a dashboard summarizing Security Health Analytics findings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center)
- [https://docs.cloud.google.com/database-center/docs/database-health-issues](https://docs.cloud.google.com/database-center/docs/database-health-issues)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Feature A new Vulnerabilities tab in Cloud SCC displays a dashboard that summarizes Security Health Analytics findings.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .
- Feature Pane on Overview page that supports postures for Vertex AI released to Preview A pane on the Overview page lets you monitor for vulnerabilities that were found by the Security Health Analytics custom modules that apply to Vertex AI, and lets you view any drift from the Vertex AI organization policies that are defined in a posture.

### "Use Security Command Center in the Google Cloud console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Vulnerability detection services The Vulnerabilities page lists detectors for the following built-in detection services of Security Command Center: Notebook Security Scanner ( Preview ) Security Health Analytics Vulnerability Assessment for Amazon Web Services (AWS) Web Security Scanner Other Google Cloud services that are integrated with Security Command Center also detect software vulnerabilities and misconfigurations.
- Risk overview Graph Search Issues page Findings Assets Compliance Posture Management Sources Settings Setup Guide Cases Risk overview Standard-legacy, Standard, Premium, and Enterprise service tiers The Risk overview page serves as your first-contact security dashboard, highlighting high-priority risks in your cloud environments identified by all built-in and integrated services.
- For a list of the categories that each Security Command Center service detects, see the following: Notebook Security Scanner findings ( Preview ) Security Health Analytics findings Vulnerability Assessment for AWS findings Web Security Scanner findings Recommendation : a summary of how to remediate the finding.
- Legacy Vulnerabilities page Standard-legacy, Standard, Premium, and Enterprise service tiers The legacy Vulnerabilities page lists all of the misconfiguration and software vulnerability findings that the built-in detection services of Security Command Center run in your cloud environments.

### Database health issues \_|\_ Database Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-center/docs/database-health-issues](https://docs.cloud.google.com/database-center/docs/database-health-issues)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The health issues dashboard displays all health issues in your database fleet.
- Built-in SCC Gemini AlloyDB for PostgreSQL Bigtable Cloud SQL for MySQL Cloud SQL for PostgreSQL Cloud SQL for SQL Server Firestore Memorystore Spanner MySQL on Compute Engine PostgreSQL on Compute Engine Microsoft SQL Server on Compute Engine Availability Cost Data protection Industry compliance Other Performance and capacity Security Clear all element. --> Category Issue Tier AlloyDB for PostgreSQL Bigtable Cloud SQL for MySQL Cloud SQL for PostgreSQL Cloud SQL for SQL Server Firestore Memorystore Spanner MySQL on Compute Engine PostgreSQL on Compute Engine Microsoft SQL Server on Compute Engine Availability Database resource not failover protected Built-in ✔ ✔ ✔ ✔ ✔ Availability Suspended resource Built-in ✔ Availability Not multi-regional for disaster recovery Built-in ✔ ✔ ✔ ✔ ✔ ✔ Availability Maintenance policy not set Other ✔ Cost Idle database resource Gemini ✔ ✔ ✔ Cost Overprovisioned database resource Gemini ✔ ✔ ✔ Data protection No automated backup policy Built-in ✔ ✔ ✔ ✔ ✔ ✔ ✔ Data protection Short backup retention Built-in ✔ ✔ ✔ ✔ ✔ ✔ Data protection Last backup failed Built-in ✔ ✔ ✔ ✔ ✔ Data protection Last backup older than 24 hours Built-in ✔ ✔ ✔ ✔ ✔ ✔ Data protection Deletion protection not enabled Built-in ✔ ✔ ✔ ✔ ✔ Data protection Short backup retention Built-in ✔ Data protection No point-in-time recovery Built-in ✔ ✔ ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 2.0 SCC ✔ ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.3 SCC ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.2 SCC ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.1 SCC ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.0 SCC ✔ ✔ ✔ Industry compliance Violates NIST 800-53 SCC ✔ ✔ ✔ ✔ Industry compliance Violates ISO-27001 SCC ✔ ✔ ✔ ✔ Industry compliance Violates PCI-DSS v3.2.1 SCC ✔ ✔ Industry compliance Violates NIST 800-53 R5 SCC ✔ ✔ ✔ Industry compliance Violates NIST Cybersecurity Framework 1.0 SCC ✔ ✔ ✔ ✔ Industry compliance Violates ISO-27001 v2022 SCC ✔ ✔ ✔ ✔ Industry compliance Violates PCI-DSS v4.0 SCC ✔ ✔ ✔ ✔ Industry compliance Violates SOC2 v2017 SCC ✔ ✔ ✔ ✔ Industry compliance Violates Cloud Controls Matrix 4 SCC ✔ ✔ ✔ ✔ Industry compliance Violates CIS Critical Security Controls 8.0 SCC ✔ ✔ ✔ Industry compliance Violates HIPAA SCC ✔ ✔ ✔ Other Logs not optimized for troubleshooting SCC ✔ Other Query durations not logged SCC ✔ Other Error logging misconfigured for statement severity SCC ✔ ✔ Other Error logging misconfigured for message severity SCC ✔ ✔ Other Verbose error logging SCC ✔ ✔ Other User granted all permissions SCC ✔ ✔ Other Query lock waits not logged SCC ✔ Other Error logging misconfigured for statements SCC ✔ Other Query statistics logged SCC ✔ Other Excessive logging of client hostname SCC ✔ Other Excessive logging of parser statistics SCC ✔ Other Excessive logging of planner statistics SCC ✔ Other Not logging temporary files SCC ✔ Other Not logging only DDL statements SCC ✔ Other Logging query statement statistics SCC ✔ Other Concurrent connections max configured SCC ✔ Other User options configured SCC ✔ Other Connection attempts not logged SCC ✔ Other Disconnections not logged SCC ✔ Other Logging excessive statement info SCC ✔ Other Data exported to external Cloud Storage bucket SCC ✔ ✔ ✔ Other Data exported to public Cloud Storage bucket SCC ✔ ✔ ✔ Other Writes to user table by superuser SCC ✔ ✔ ✔ Security Public IP enabled Built-in ✔ ✔ ✔ Security Exposed to broad access Built-in ✔ ✔ ✔ ✔ ✔ ✔ Security Unencrypted connections Built-in ✔ ✔ ✔ ✔ ✔ ✔ Security No root password SCC ✔ ✔ ✔ ✔ Security Weak root password SCC ✔ ✔ ✔ ✔ Security Encryption key not customer-managed SCC ✔ ✔ ✔ Security Contained database authentication not required SCC ✔ Security Exposed to external scripts SCC ✔ Security Exposed to local data loads SCC ✔ Security Exposed to remote access SCC ✔ Security Database names exposed SCC ✔ Security Sensitive trace info not masked SCC ✔ Security Auditing not enabled Built-in ✔ ✔ ✔ ✔ ✔ ✔ Security Server certificate expiring Built-in ✔ ✔ ✔ ✔ Security Violates policy restricting public IP Built-in ✔ ✔ ✔ Security Violates policy restricting authorized networks Built-in ✔ ✔ ✔ Security No password policy Built-in ✔ ✔ ✔ Security No user password policy Built-in ✔ ✔ Performance and capacity High number of tables Built-in ✔ (E+) Performance and capacity High transaction ID utilization Built-in ✔ (E+) Performance and capacity High number of open tables Built-in ✔ Performance and capacity Connections impacting performance Built-in ✔ (E+) ✔ Performance and capacity Temp tables impacting performance Built-in ✔ (E+) Performance and capacity Transaction logs burdening disk Built-in ✔ (E+) Performance and capacity Nearing cluster quota limit Built-in ✔ Performance and capacity High resource utilization Built-in ✔ ✔ ✔ ✔ ✔ ✔ Performance and capacity Hotspot detected Built-in ✔ ✔ Performance and capacity Nearing or at storage capacity Built-in ✔ ✔ Performance and capacity Expensive commands Built-in ✔ Performance and capacity Inefficient queries SCC ✔ ✔ ✔ ✔ Performance and capacity Read-intensive workload Built-in ✔ Performance and capacity Memory nearing tier limit Built-in ✔ Performance and capacity Server memory misconfigured Built-in ✔ Security Encryption org policy not satisfied Built-in ✔ Performance and capacity Large rows detected Built-in ✔ Performance and capacity High write pressure Built-in ✔ Performance and capacity High read pressure Built-in ✔ Security Outdated minor version for patch Built-in ✔ ✔ ✔ Performance and capacity Replication lag Built-in ✔ Security Outdated client Built-in ✔ Security Location org policy not satisfied Built-in ✔ Performance Schema not optimized Built-in ✔ Performance and capacity Analytical workload not using Data Boost Built-in ✔ Cost Outdated version needs extended support Built-in ✔ ✔ ✔ Supported health issues in Preview The following health issues are in Preview for the specified database products: Health check Product No point-in-time recovery AlloyDB for PostgreSQL High resource utilization Bigtable Hotspot detected Bigtable Nearing or at storage capacity Bigtable Deletion protection not enabled Bigtable Suspended resource Bigtable Large rows detected Bigtable High write pressure Bigtable High read pressure Bigtable Deletion protection not enabled Cloud SQL Inefficient queries Cloud SQL No point-in-time recovery Cloud SQL Read-intensive workload Cloud SQL Memory nearing tier limit Cloud SQL Server memory misconfigured Cloud SQL No point-in-time recovery Firestore No automated backup policy Firestore Exposed to broad access Firestore High resource utilization Memorystore Expensive commands Memorystore Maintenance policy not set Memorystore Deletion protection not enabled Spanner Last backup older than 24 hours Spanner Encryption org policy not satisfied Spanner Outdated minor version for patch MySQL on Compute Engine, PostgreSQL on Compute Engine, Microsoft SQL Server on Compute Engine Unencrypted connections MySQL on Compute Engine, PostgreSQL on Compute Engine No root password MySQL on Compute Engine, PostgreSQL on Compute Engine, Microsoft SQL Server on Compute Engine Auditing not enabled MySQL on Compute Engine, PostgreSQL on Compute Engine Exposed to broad access MySQL on Compute Engine, PostgreSQL on Compute Engine Security issues supported by Security Command Center pricing tiers Security Command Center Built-in tier supports the following health issues for Cloud SQL in Database Center: Public IP enabled Exposed to public access Security Command Center Premium tier supports the following health issues in Database Center: Industry compliance violations Unencrypted connections Databases not auditable No password Weak password Encryption key not customer-managed Server authentication not required Exposed by ownership chaining Exposed to external scripts Exposed to local data loads Logs not optimized for troubleshooting Connection attempts not logged Disconnections not logged Query durations not logged Verbose error logging Error logging misconfigured for statements Error logging misconfigured for statement severity Error log misconfigured for message severity Not logging only DDL statements Exposed to remote access Database names exposed Sensitive trace info not masked For more information, see Security Command Center pricing tiers .
- Health issue categories To help you view the most important aspects of your database fleet health at a glance, Database Center organizes health issues into industry-standard categories including cost, performance and capacity, availability, data protection, security, and industry compliance.
- To help you find health issues in specific areas, health issues are categorized by the following: Tier, such as Built-in, Gemini, and Security Command Center Category, such as cost, data protection, and security Database product, such as Spanner, and Bigtable.

