---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.839Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Compliance reporting improvements"
feature_slug: "compliance-reporting-improvements"
latest_feature_date: "2024-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/compliance-management"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFrameworkComplianceSummariesResponse"
keywords:
  - "compliance"
  - "reporting"
  - "improvements"
  - "security"
  - "command"
  - "center"
  - "page"
  - "now"
---

# Compliance reporting improvements

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The Security Command Center Compliance page now presents supported standards more clearly and adds a Compliance details page for failing controls.

## Extended Definition

The Security Command Center Compliance page now presents supported standards more clearly and adds a Compliance details page for failing controls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/compliance-management](https://docs.cloud.google.com/security-command-center/docs/compliance-management)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFrameworkComplianceSummariesResponse](https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFrameworkComplianceSummariesResponse)

## Supporting Pages

### "Assess compliance without Compliance Manager \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/compliance-management](https://docs.cloud.google.com/security-command-center/docs/compliance-management)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security Command Center uses active and muted findings to calculate the percentages for compliance controls on the Compliance page and in compliance reports.
- Google Cloud Security Command Center maps detectors for Google Cloud to one or more of the following compliance standards: Center for Information Security (CIS) Controls 8.0 CIS Google Cloud Computing Foundations Benchmark v2.0.0, v1.3.0, v1.2.0, v1.1.0, and v1.0.0 CIS Kubernetes Benchmark v1.5.1 Cloud Controls Matrix (CCM) 4 Health Insurance Portability and Accountability Act (HIPAA) International Organization for Standardization (ISO) 27001, 2022 and 2013 National Institute of Standards and Technology (NIST) 800-53 R5 and R4 National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) 1.0 Open Web Application Security Project (OWASP) Top Ten, 2021 and 2017 Payment Card Industry Data Security Standard (PCI DSS) 4.0 and 3.2.1 System and Organization Controls (SOC) 2 2017 Trust Services Criteria (TSC) AWS In the Enterprise service tier, Security Command Center maps detectors for Amazon Web Services (AWS) to one or more of the following compliance standards: CIS Amazon Web Services Foundations 2.0.0 CIS Critical Security Controls Version 8.0 Cloud Controls Matrix (CCM) 4 Health Insurance Portability and Accountability Act (HIPAA) International Organization for Standardization (ISO) 27001, 2022 National Institute of Standards and Technology (NIST) 800-53 R5 National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) 1.0 Payment Card Industry Data Security Standard (PCI DSS) 4.0 and 3.2.1 System and Organization Controls (SOC) 2 2017 Trusted Services Criteria (TSC) Detectors and findings as compliance controls Security Command Center detection services, like Security Health Analytics and Web Security Scanner, use detection modules (detectors) to check for vulnerabilities and misconfigurations in your cloud environment.
- A finding is a record of a vulnerability or other security issue that includes information such as the following: A description of the vulnerability A recommendation to address the vulnerability that would bring the control into compliance The numerical ID of the control that corresponds to the finding Recommended steps for remediating the vulnerability Not all controls in a standard can be mapped to Security Command Center findings, usually because certain controls can't be automated, but possibly for other reasons.
- Home Documentation Security Security Command Center Guides Send feedback Assess compliance without Compliance Manager Stay organized with collections Save and categorize content based on your preferences.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Feature Improvements to compliance standards support now available Improvements to the Security Command Center Compliance page in the Google Cloud console are released to General Availability .
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- For more information, see the following pages: Container Threat Detection overview Findings Workflow Improvements December 05, 2022 Feature The kernelRootkit attribute was added to the Finding object of the Security Command Center API.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.

### "ListFrameworkComplianceSummariesResponse \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFrameworkComplianceSummariesResponse](https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFrameworkComplianceSummariesResponse)
- Source ID: `site-api-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Security Command Center Reference Send feedback ListFrameworkComplianceSummariesResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "frameworkComplianceSummaries" : [ { object ( FrameworkComplianceSummary ) } ] , "nextPageToken" : string } Fields frameworkComplianceSummaries[] object ( FrameworkComplianceSummary ) The list of framework compliance summaries. nextPageToken string Output only.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- JSON representation The response message for ListFrameworkComplianceSummariesResponse .

