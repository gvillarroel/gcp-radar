---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.726Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security graph"
feature_slug: "security-graph"
latest_feature_date: "2025-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini"
  - "https://docs.cloud.google.com/security-command-center/docs/assess-risk"
keywords:
  - "security"
  - "graph"
  - "database"
  - "models"
  - "resources"
  - "risk"
  - "relationships"
---

# Security graph

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security graph is a graph database that models cloud resources and their risk relationships.

## Extended Definition

Security graph is a graph database that models cloud resources and their risk relationships.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini](https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini)
- [https://docs.cloud.google.com/security-command-center/docs/assess-risk](https://docs.cloud.google.com/security-command-center/docs/assess-risk)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Security graph is a graph database that has cloud resources like assets, identities, apps, and data assigned to its nodes, while the edges of the graph determine the risk relationship between those resources following detection rules.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .
- August 07, 2025 Feature The following Container Threat Detection detectors have been released to General Availability : Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47177) Execution: Socat Reverse Shell Detected Privilege Escalation: Abuse of Sudo For Privilege Escalation (CVE-2019-14287) Privilege Escalation: Polkit Local Privilege Escalation Vulnerability (CVE-2021-4034) Privilege Escalation: Sudo Potential Privilege Escalation (CVE-2021-3156) Feature Risk reports generated and downloaded from Security Command Center include a system attack exposure page that shows the organization's exposure risk over time and lists the projects and resources that have the highest risk.

### "Assess risk at a glance \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/assess-risk](https://docs.cloud.google.com/security-command-center/docs/assess-risk)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can view multiple domains in Overview by selecting one of the following views: All risk Vulnerabilities Identity Data AI security Threats If Security Command Center was recently activated, it might take time for data to appear.
- All risk dashboard The All risk dashboard surfaces the following high-priority security risks across your cloud environments: Standard-legacy Misconfigurations by date : shows the number of misconfiguration findings over time.
- Home Documentation Security Security Command Center Guides Send feedback Assess risk at a glance Stay organized with collections Save and categorize content based on your preferences.
- The Overview page serves as your first contact security dashboard, highlighting the highest priority risks in your cloud environments.

### "Analyze database fleet health using Gemini \_|\_ Database Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini](https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini)
- Source ID: `site-docs-reference-2`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To determine the number of database resources, for example, you can enter the following prompt: How many of my Postgres 13 databases are affected by security issues?
- Gemini returns the number of database resources that run Postgres (product engine) 13 (product version) and are affected by Security (signals) problems.
- You can use Database Center to learn more about your database fleet health by prompting Gemini to answer questions about the following: Database fleet inventory information Database fleet health Database configuration best practices The following are example prompts to help you learn about your database fleet inventory data: "How many PostgreSQL instances do I have in Tokyo?" "How many of my database resources are not NIST 800-53 compliant?" "Why is it an issue that my database is exposed to ownership chaining?" "Why is it an issue that my database is not logging only DDL statements?" Note: Gemini provides query suggestions and health issues based on all instances and databases in your project.
- Examples of prompts include the following: "Are all of my database backups working correctly?" "How many databases do I have with data protection issues?" "Which of my database resources are located in the US?" "Show me the number of database resources I have by product type and engine." "Show me key:value labeled databases with performance recommendations." (replace "key:value" with your own label) "Show me all Cloud SQL databases running on PostgreSQL version 12." Use Gemini to help you analyze database fleet health As an early-stage technology, Gemini for Google Cloud products can generate output that seems plausible but is factually incorrect.

