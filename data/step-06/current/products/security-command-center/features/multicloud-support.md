---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.821Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Multicloud support"
feature_slug: "multicloud-support"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set"
  - "https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier"
keywords:
  - "multicloud"
  - "security"
  - "command"
  - "center"
  - "enterprise"
  - "can"
  - "connect"
  - "aws"
---

# Multicloud support

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center Enterprise can connect to AWS to detect threats, assess exposure, and check compliance.

## Extended Definition

Security Command Center Enterprise can connect to AWS to detect threats, assess exposure, and check compliance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set)
- [https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier](https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- April 02, 2024 Feature Enterprise tier released to General Availability The Enterprise tier, which transforms Security Command Center into a cloud-native application protection platform (CNAPP) that combines cloud security and enterprise security operations with multicloud support, is released to General Availability .
- December 09, 2024 Change When activating the Security Command Center Enterprise tier, you now have the option to connect Security Command Center to an existing Google Security Operations instance or provision a new instance.
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .

### "Define and manage your high-value resource set \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Azure Enterprise service tier Before Security Command Center can generate attack exposure scores and attack paths for the Azure resources that you specify in a resource value configuration, Security Command Center must be connected to Azure.
- AWS Enterprise service tier Before Security Command Center can generate attack exposure scores and attack paths for the resources that you specify in a resource value configuration, Security Command Center must be connected to AWS.
- Also, in the Enterprise service tier, you can define configurations for resources on the other cloud service providers that Security Command Center is connected to.
- In the Assign resource value field, select a priority value for the matching resources by specifying one of the following options: Optional: If you use the Sensitive Data Protection discovery service , enable Security Command Center to automatically set the priority value of supported AWS data resources based on data-sensitivity classifications from Sensitive Data Protection: Click the slider next to Include discovery insights from Sensitive Data Protection .

### "Activate the Security Command Center Enterprise tier \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier](https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Cloud threat detection Container Threat Detection overview Overview of Event Threat Detection Virtual Machine Threat Detection overview Connect to AWS for configuration and resource data collection Identity and access security Overview of the IAM recommender integrated service Overview of Cloud Infrastructure Entitlement Management (CIEM) Data security Review and customize data security frameworks Enable Event Threat Detection Enable Sensitive Data Protection Enable discovery Compliance Apply a framework Grant roles in IAM Posture and compliance Manage a security posture Overview of Security Health Analytics Overview of Web Security Scanner Response platform Map and authenticate users to enable SOAR-related features Integrate Security Command Center Enterprise with ticketing systems Update the Enterprise use case Work with playbooks Vulnerability assessment Assess software vulnerabilities overview Configure permissions for ongoing Security Command Center Enterprise use To change the configuration of your organization, you need both of the following roles at the organization level: Organization Administrator ( roles/resourcemanager.organizationAdmin ) Security Center Admin ( roles/securitycenter.admin ) If a user doesn't require edit permissions, consider granting them viewer roles.
- Configure permissions and APIs Use information in this section to configure permissions required to activate Security Command Center Enterprise: Configure permissions on the organization Configure permissions and enable APIs on the management project Create a service account if you plan to connect to an existing Google SecOps instance Learn more about Security Command Center roles and Google Cloud APIs .
- Connect to an existing instance You can't connect Security Command Center Enterprise to an existing Google SecOps SIEM standalone or Google SecOps SOAR standalone instance.
- Choose the Google SecOps configuration During activation, you connect Security Command Center Enterprise to a Google SecOps instance.

