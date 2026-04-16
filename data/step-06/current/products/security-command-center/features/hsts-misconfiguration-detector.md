---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.711Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "HSTS_MISCONFIGURATION detector"
feature_slug: "hsts-misconfiguration-detector"
latest_feature_date: "2025-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
keywords:
  - "hsts"
  - "misconfiguration"
  - "detector"
  - "web"
  - "security"
  - "scanner"
  - "added"
  - "identifies"
---

# HSTS_MISCONFIGURATION detector

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Web Security Scanner added a detector that identifies missing HTTP Strict Transport Security configurations in web applications.

## Extended Definition

Web Security Scanner added a detector that identifies missing HTTP Strict Transport Security configurations in web applications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- The following detectors, which are available with the Enterprise and Premium tiers of Security Command Center, detect misconfigurations in web applications: HSTS MISCONFIGURATION CSP MISSING CSP MISCONFIGURATION COOP MISSING CLICKJACKING PROTECTION MISSING For more information, see Web Security Scanner misconfiguration findings .
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .

### "Overview of Event Threat Detection \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- That information is used to detect the following unsafe changes for privileged Google Groups: External group members added to privileged groups Sensitive roles or permissions granted to groups with external group members Privileged groups that are changed to allow anyone in the general public to join Event Threat Detection writes findings to Security Command Center.
- The following list shows all possible subrules: external service account added to policy , external member added to policy : Privileges were granted to IAM users and service accounts that are not members of your organization or, if Security Command Center is activated at the project level only, your project.
- Event Threat Detection is a built-in service for the Security Command Center Premium tier that continuously monitors your organization or projects and identifies threats within your systems in near-real time.
- Note : If Security Command Center is activated at the organization level at any tier, then this detector uses an organization's existing IAM policies as context.

### "Use Security Command Center in the Google Cloud console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Vulnerability detection services The Vulnerabilities page lists detectors for the following built-in detection services of Security Command Center: Notebook Security Scanner ( Preview ) Security Health Analytics Vulnerability Assessment for Amazon Web Services (AWS) Web Security Scanner Other Google Cloud services that are integrated with Security Command Center also detect software vulnerabilities and misconfigurations.
- For a list of the categories that each Security Command Center service detects, see the following: Notebook Security Scanner findings ( Preview ) Security Health Analytics findings Vulnerability Assessment for AWS findings Web Security Scanner findings Recommendation : a summary of how to remediate the finding.
- Information about vulnerability detector categories For each misconfiguration or software vulnerability detector, the Vulnerabilities page shows the following information: Status : an icon indicates whether the detector is active and whether the detector found a finding that needs to be addressed.
- Legacy Vulnerabilities page Standard-legacy, Standard, Premium, and Enterprise service tiers The legacy Vulnerabilities page lists all of the misconfiguration and software vulnerability findings that the built-in detection services of Security Command Center run in your cloud environments.

