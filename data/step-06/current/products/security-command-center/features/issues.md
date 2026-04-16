---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.723Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Issues"
feature_slug: "issues"
latest_feature_date: "2025-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/database-center/docs/database-health-issues"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center"
keywords:
  - "issues"
  - "highlight"
  - "most"
  - "important"
  - "security"
  - "risks"
  - "found"
  - "command"
---

# Issues

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Issues highlight the most important security risks found in Security Command Center Enterprise cloud environments.

## Extended Definition

Issues highlight the most important security risks found in Security Command Center Enterprise cloud environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/database-center/docs/database-health-issues](https://docs.cloud.google.com/database-center/docs/database-health-issues)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center)

## Supporting Pages

### Database health issues \_|\_ Database Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-center/docs/database-health-issues](https://docs.cloud.google.com/database-center/docs/database-health-issues)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Built-in SCC Gemini AlloyDB for PostgreSQL Bigtable Cloud SQL for MySQL Cloud SQL for PostgreSQL Cloud SQL for SQL Server Firestore Memorystore Spanner MySQL on Compute Engine PostgreSQL on Compute Engine Microsoft SQL Server on Compute Engine Availability Cost Data protection Industry compliance Other Performance and capacity Security Clear all element. --> Category Issue Tier AlloyDB for PostgreSQL Bigtable Cloud SQL for MySQL Cloud SQL for PostgreSQL Cloud SQL for SQL Server Firestore Memorystore Spanner MySQL on Compute Engine PostgreSQL on Compute Engine Microsoft SQL Server on Compute Engine Availability Database resource not failover protected Built-in ✔ ✔ ✔ ✔ ✔ Availability Suspended resource Built-in ✔ Availability Not multi-regional for disaster recovery Built-in ✔ ✔ ✔ ✔ ✔ ✔ Availability Maintenance policy not set Other ✔ Cost Idle database resource Gemini ✔ ✔ ✔ Cost Overprovisioned database resource Gemini ✔ ✔ ✔ Data protection No automated backup policy Built-in ✔ ✔ ✔ ✔ ✔ ✔ ✔ Data protection Short backup retention Built-in ✔ ✔ ✔ ✔ ✔ ✔ Data protection Last backup failed Built-in ✔ ✔ ✔ ✔ ✔ Data protection Last backup older than 24 hours Built-in ✔ ✔ ✔ ✔ ✔ ✔ Data protection Deletion protection not enabled Built-in ✔ ✔ ✔ ✔ ✔ Data protection Short backup retention Built-in ✔ Data protection No point-in-time recovery Built-in ✔ ✔ ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 2.0 SCC ✔ ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.3 SCC ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.2 SCC ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.1 SCC ✔ ✔ ✔ Industry compliance Violates CIS Google Cloud Foundation 1.0 SCC ✔ ✔ ✔ Industry compliance Violates NIST 800-53 SCC ✔ ✔ ✔ ✔ Industry compliance Violates ISO-27001 SCC ✔ ✔ ✔ ✔ Industry compliance Violates PCI-DSS v3.2.1 SCC ✔ ✔ Industry compliance Violates NIST 800-53 R5 SCC ✔ ✔ ✔ Industry compliance Violates NIST Cybersecurity Framework 1.0 SCC ✔ ✔ ✔ ✔ Industry compliance Violates ISO-27001 v2022 SCC ✔ ✔ ✔ ✔ Industry compliance Violates PCI-DSS v4.0 SCC ✔ ✔ ✔ ✔ Industry compliance Violates SOC2 v2017 SCC ✔ ✔ ✔ ✔ Industry compliance Violates Cloud Controls Matrix 4 SCC ✔ ✔ ✔ ✔ Industry compliance Violates CIS Critical Security Controls 8.0 SCC ✔ ✔ ✔ Industry compliance Violates HIPAA SCC ✔ ✔ ✔ Other Logs not optimized for troubleshooting SCC ✔ Other Query durations not logged SCC ✔ Other Error logging misconfigured for statement severity SCC ✔ ✔ Other Error logging misconfigured for message severity SCC ✔ ✔ Other Verbose error logging SCC ✔ ✔ Other User granted all permissions SCC ✔ ✔ Other Query lock waits not logged SCC ✔ Other Error logging misconfigured for statements SCC ✔ Other Query statistics logged SCC ✔ Other Excessive logging of client hostname SCC ✔ Other Excessive logging of parser statistics SCC ✔ Other Excessive logging of planner statistics SCC ✔ Other Not logging temporary files SCC ✔ Other Not logging only DDL statements SCC ✔ Other Logging query statement statistics SCC ✔ Other Concurrent connections max configured SCC ✔ Other User options configured SCC ✔ Other Connection attempts not logged SCC ✔ Other Disconnections not logged SCC ✔ Other Logging excessive statement info SCC ✔ Other Data exported to external Cloud Storage bucket SCC ✔ ✔ ✔ Other Data exported to public Cloud Storage bucket SCC ✔ ✔ ✔ Other Writes to user table by superuser SCC ✔ ✔ ✔ Security Public IP enabled Built-in ✔ ✔ ✔ Security Exposed to broad access Built-in ✔ ✔ ✔ ✔ ✔ ✔ Security Unencrypted connections Built-in ✔ ✔ ✔ ✔ ✔ ✔ Security No root password SCC ✔ ✔ ✔ ✔ Security Weak root password SCC ✔ ✔ ✔ ✔ Security Encryption key not customer-managed SCC ✔ ✔ ✔ Security Contained database authentication not required SCC ✔ Security Exposed to external scripts SCC ✔ Security Exposed to local data loads SCC ✔ Security Exposed to remote access SCC ✔ Security Database names exposed SCC ✔ Security Sensitive trace info not masked SCC ✔ Security Auditing not enabled Built-in ✔ ✔ ✔ ✔ ✔ ✔ Security Server certificate expiring Built-in ✔ ✔ ✔ ✔ Security Violates policy restricting public IP Built-in ✔ ✔ ✔ Security Violates policy restricting authorized networks Built-in ✔ ✔ ✔ Security No password policy Built-in ✔ ✔ ✔ Security No user password policy Built-in ✔ ✔ Performance and capacity High number of tables Built-in ✔ (E+) Performance and capacity High transaction ID utilization Built-in ✔ (E+) Performance and capacity High number of open tables Built-in ✔ Performance and capacity Connections impacting performance Built-in ✔ (E+) ✔ Performance and capacity Temp tables impacting performance Built-in ✔ (E+) Performance and capacity Transaction logs burdening disk Built-in ✔ (E+) Performance and capacity Nearing cluster quota limit Built-in ✔ Performance and capacity High resource utilization Built-in ✔ ✔ ✔ ✔ ✔ ✔ Performance and capacity Hotspot detected Built-in ✔ ✔ Performance and capacity Nearing or at storage capacity Built-in ✔ ✔ Performance and capacity Expensive commands Built-in ✔ Performance and capacity Inefficient queries SCC ✔ ✔ ✔ ✔ Performance and capacity Read-intensive workload Built-in ✔ Performance and capacity Memory nearing tier limit Built-in ✔ Performance and capacity Server memory misconfigured Built-in ✔ Security Encryption org policy not satisfied Built-in ✔ Performance and capacity Large rows detected Built-in ✔ Performance and capacity High write pressure Built-in ✔ Performance and capacity High read pressure Built-in ✔ Security Outdated minor version for patch Built-in ✔ ✔ ✔ Performance and capacity Replication lag Built-in ✔ Security Outdated client Built-in ✔ Security Location org policy not satisfied Built-in ✔ Performance Schema not optimized Built-in ✔ Performance and capacity Analytical workload not using Data Boost Built-in ✔ Cost Outdated version needs extended support Built-in ✔ ✔ ✔ Supported health issues in Preview The following health issues are in Preview for the specified database products: Health check Product No point-in-time recovery AlloyDB for PostgreSQL High resource utilization Bigtable Hotspot detected Bigtable Nearing or at storage capacity Bigtable Deletion protection not enabled Bigtable Suspended resource Bigtable Large rows detected Bigtable High write pressure Bigtable High read pressure Bigtable Deletion protection not enabled Cloud SQL Inefficient queries Cloud SQL No point-in-time recovery Cloud SQL Read-intensive workload Cloud SQL Memory nearing tier limit Cloud SQL Server memory misconfigured Cloud SQL No point-in-time recovery Firestore No automated backup policy Firestore Exposed to broad access Firestore High resource utilization Memorystore Expensive commands Memorystore Maintenance policy not set Memorystore Deletion protection not enabled Spanner Last backup older than 24 hours Spanner Encryption org policy not satisfied Spanner Outdated minor version for patch MySQL on Compute Engine, PostgreSQL on Compute Engine, Microsoft SQL Server on Compute Engine Unencrypted connections MySQL on Compute Engine, PostgreSQL on Compute Engine No root password MySQL on Compute Engine, PostgreSQL on Compute Engine, Microsoft SQL Server on Compute Engine Auditing not enabled MySQL on Compute Engine, PostgreSQL on Compute Engine Exposed to broad access MySQL on Compute Engine, PostgreSQL on Compute Engine Security issues supported by Security Command Center pricing tiers Security Command Center Built-in tier supports the following health issues for Cloud SQL in Database Center: Public IP enabled Exposed to public access Security Command Center Premium tier supports the following health issues in Database Center: Industry compliance violations Unencrypted connections Databases not auditable No password Weak password Encryption key not customer-managed Server authentication not required Exposed by ownership chaining Exposed to external scripts Exposed to local data loads Logs not optimized for troubleshooting Connection attempts not logged Disconnections not logged Query durations not logged Verbose error logging Error logging misconfigured for statements Error logging misconfigured for statement severity Error log misconfigured for message severity Not logging only DDL statements Exposed to remote access Database names exposed Sensitive trace info not masked For more information, see Security Command Center pricing tiers .
- Health issue categories To help you view the most important aspects of your database fleet health at a glance, Database Center organizes health issues into industry-standard categories including cost, performance and capacity, availability, data protection, security, and industry compliance.
- To help you find health issues in specific areas, health issues are categorized by the following: Tier, such as Built-in, Gemini, and Security Command Center Category, such as cost, data protection, and security Database product, such as Spanner, and Bigtable.
- Security Command Center (SCC) : requires you to enable the Security Command Center Database Center doesn't check for issues that are dependent on Security Command Center (SCC) or Gemini Cloud Assist unless you have the specific tiers enabled.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- March 20, 2025 Feature The Risk section of the SecOps console has been updated for Security Command Center Enterprise, introducing the following features in Preview : Issues are the most important security risks Security Command Center Enterprise has found in your cloud environments.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- Change The following Security Command Center Enterprise pages that you previously accessed through the Google Security Operations console are now under Security Command Center in the Google Cloud console: Risk Overview Issues Assets (previously called resources ) Findings The Security Command Center Enterprise left navigation also includes links to pages in the Google Security Operations console.
- Change Security Command Center now supports two versions of CIS Benchmarks for Google Cloud Platform Foundation : CIS Google Cloud Computing Foundations Benchmark v1.1.0 (CIS Google Cloud Foundation 1.1) CIS Google Cloud Computing Foundations Benchmark v1.0.0 (CIS Google Cloud Foundation 1.0) For more information about supported compliance standards, see Detectors and compliance .

### "Use Security Command Center in the Google Cloud console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Work with issues, the most important security risks Security Command Center Enterprise has found in your cloud environments.
- Issues Premium and Enterprise service tiers (requires organization-level activation ) Issues are the most important security risks that Security Command Center finds in your cloud environments, giving you the opportunity to respond quickly to vulnerabilities and threats.
- Risk overview Graph Search Issues page Findings Assets Compliance Posture Management Sources Settings Setup Guide Cases Risk overview Standard-legacy, Standard, Premium, and Enterprise service tiers The Risk overview page serves as your first-contact security dashboard, highlighting high-priority risks in your cloud environments identified by all built-in and integrated services.
- Risk overview Graph Search Issues page Findings Assets Compliance Posture Management Sources Settings Enterprise In the Security Command Center Enterprise left navigation, Cases links to pages in the Google Security Operations tenant that was configured during Security Command Center Enterprise activation.

