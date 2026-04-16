---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.824Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Information and Event Management"
feature_slug: "security-information-and-event-management"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/secops-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/service-tiers"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
keywords:
  - "security"
  - "information"
  - "event"
  - "management"
  - "siem"
  - "capabilities"
  - "ingest"
  - "normalize"
---

# Security Information and Event Management

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The SIEM capabilities ingest and normalize logs and resource metadata for threat detection and search.

## Extended Definition

The SIEM capabilities ingest and normalize logs and resource metadata for threat detection and search.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- [https://docs.cloud.google.com/security-command-center/docs/service-tiers](https://docs.cloud.google.com/security-command-center/docs/service-tiers)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)

## Supporting Pages

### "Google SecOps overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data collection Google SecOps can ingest numerous security telemetry types through a variety of methods, including the following: Forwarder : A lightweight software component, deployed in the customer's network, that supports syslog, packet capture, and existing log management or security information and event management (SIEM) data repositories.
- The Google SecOps platform enables security analysts to analyze and mitigate a security threat throughout its lifecycle by employing the following capabilities: Collection : Data is ingested into the platform using forwarders, parsers, OpenTelemetry collectors, connectors, and webhooks.
- Procedural filtering : Fine tune information about an asset, including by event type, log source, network connection status, and Top Level Domain (TLD).
- Response : Security analysts can respond quickly and provide resolutions using automated playbooks and incident management.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- For more information, see the following: IAM roles for Event Threat Detection custom modules IAM roles for Security Health Analytics custom modules December 11, 2023 Change New Container Threat Detection service account with new activations For activations of Security Command Center after December 7, 2023, Container Threat Detection uses a new service account for Identity and Access Management (IAM) permissions.
- The ExternalSystems resource can contain any of the following: Third-party SIEM/SOAR fields within Security Command Center External system information External system finding fields A caller with the Security Center External Systems Editor ( roles/securitycenter.externalSystemsEditor ) IAM role can update an ExternalSystems object using the organizations.sources.findings.externalSystems.patch API.

### Security Command Center service tiers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/service-tiers](https://docs.cloud.google.com/security-command-center/docs/service-tiers)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google SecOps includes the following: Google SecOps security information and event management (SIEM) .
- Everything in Standard, plus advanced security and compliance posture management, attack paths, threat detection, and compliance monitoring for Google Cloud only.
- Use Cloud Key Management Service keys that you create to encrypt selected Security Command Center data.
- Supports basic security and compliance posture management for Google Cloud only.

