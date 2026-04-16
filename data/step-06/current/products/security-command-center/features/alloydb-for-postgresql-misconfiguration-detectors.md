---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.830Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "AlloyDB for PostgreSQL misconfiguration detectors"
feature_slug: "alloydb-for-postgresql-misconfiguration-detectors"
latest_feature_date: "2024-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "alloydb"
  - "postgresql"
  - "misconfiguration"
  - "detectors"
  - "security"
  - "health"
  - "analytics"
  - "now"
---

# AlloyDB for PostgreSQL misconfiguration detectors

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Health Analytics now includes GA detectors that identify common AlloyDB for PostgreSQL misconfigurations.

## Extended Definition

Security Health Analytics now includes GA detectors that identify common AlloyDB for PostgreSQL misconfigurations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### "Using Security Health Analytics \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following Security Health Analytics detectors for Google Cloud are disabled by default: ALLOYDB AUTO BACKUP DISABLED ALLOYDB CMEK DISABLED BIGQUERY TABLE CMEK DISABLED BUCKET CMEK DISABLED CLOUD ASSET API DISABLED DATAPROC CMEK DISABLED DATASET CMEK DISABLED DISK CMEK DISABLED DISK CSEK DISABLED NODEPOOL BOOT CMEK DISABLED PUBSUB CMEK DISABLED SQL CMEK DISABLED SQL NO ROOT PASSWORD SQL WEAK ROOT PASSWORD VPC FLOW LOGS SETTINGS NOT RECOMMENDED Note: If you disable Security Health Analytics, Security Command Center also disables the individual Security Health Analytics modules and stores their previous enablement states.
- Before you begin Standard-legacy, Standard, Premium, and Enterprise service tiers To get the permissions that you need to manage Security Health Analytics findings, ask your administrator to grant you the following IAM roles on your organization, folder, or project: Enable and disable detectors: Security Center Settings Editor ( roles/securitycenter.settingsEditor ) View and filter findings: Security Center Findings Viewer ( roles/securitycenter.findingsViewer ) Manage mute rules: Security Center Mute Configurations Editor ( roles/securitycenter.muteConfigsEditor ) Manage security marks: Security Center Finding Security Marks Writer ( roles/securitycenter.findingSecurityMarksWriter ) Programmatically manage findings: Security Center Findings Editor ( roles/securitycenter.findingsEditor ) Grant inbound access to a VPC Service Controls service perimeter: Access Context Manager Editor ( roles/accesscontextmanager.policyEditor ) Complete any task on this page: Security Center Settings Admin ( roles/securitycenter.settingsAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For brevity, this example shows a subset of all Security Health Analytics modules. { "effectiveEnablementState": "ENABLED", "intendedEnablementState": "ENABLED", "modules": { "ACCESS AWSCLOUDSHELLFULLACCESS RESTRICTED": { "effectiveEnablementState": "DISABLED" }, "ACCESS KEYS ROTATED 90 DAYS LESS": { "effectiveEnablementState": "ENABLED" }, "ACCESS TRANSPARENCY DISABLED": { "effectiveEnablementState": "ENABLED" }, "ADMIN SERVICE ACCOUNT": { "effectiveEnablementState": "ENABLED" }, "ALLOYDB AUTO BACKUP DISABLED": { "effectiveEnablementState": "DISABLED" } }, "name": "projects/1070293378382/locations/global/securityCenterServices/SECURITY HEALTH ANALYTICS", "updateTime": "2026-02-11T21:15:41.269584764Z" } Filtering findings in the Google Cloud console Standard-legacy, Standard, Premium, and Enterprise service tiers A large organization might have many vulnerability findings across their deployment to review, triage, and track.
- For brevity, this example shows a subset of all Security Health Analytics modules. effectiveEnablementState: ENABLED intendedEnablementState: ENABLED modules: ACCESS AWSCLOUDSHELLFULLACCESS RESTRICTED: effectiveEnablementState: DISABLED ACCESS KEYS ROTATED 90 DAYS LESS: effectiveEnablementState: ENABLED ACCESS TRANSPARENCY DISABLED: effectiveEnablementState: ENABLED ADMIN SERVICE ACCOUNT: effectiveEnablementState: ENABLED ALLOYDB AUTO BACKUP DISABLED: effectiveEnablementState: DISABLED name: projects/1070293378382/locations/global/securityCenterServices/SECURITY HEALTH ANALYTICS updateTime: '2026-02-11T21:15:41.269584764Z' REST The Security Command Center Management API's RESOURCE TYPE .locations.securityCenterServices.patch method updates the state of a Security Command Center service or module.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .
- April 01, 2024 Fixed The following Security Health Analytics misconfiguration detectors have changed to check for overly restrictive flag values that might prevent error messages from being written to the logs: SQL LOG ERROR VERBOSITY SQL LOG MIN ERROR STATEMENT SEVERITY For the flag values that the detectors check for, see: SQL log error verbosity SQL log min error statement severity March 26, 2024 Feature GKE security posture recommendations released to Preview Recommendations from GKE security posture are now available as findings in all tiers of Security Command Center as a Preview release.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Security Health Analytics Standard-legacy, Standard, Premium, and Enterprise service tiers Security Health Analytics is a built-in detection service of Security Command Center that provides managed scans of your cloud resources to detect common misconfigurations.
- Depending on the Security Command Center service tier you are using, the available detectors differ: In the Standard-legacy tier, Security Health Analytics includes only a basic group of medium-severity and high-severity vulnerability detectors.
- When a misconfiguration is detected, Security Health Analytics generates a finding.
- For more information, see the following: Security Health Analytics overview How to use Security Health Analytics Remediating Security Health Analytics findings Reference of Security Health Analytics findings Security posture service Premium and Enterprise service tiers (requires organization-level activation ) The security posture service is a built-in service for the Security Command Center Premium tier that lets you define, assess, and monitor the overall status of your security in Google Cloud.

