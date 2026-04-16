---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.829Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Compliance framework mappings for Security Command Center detectors"
feature_slug: "compliance-framework-mappings-for-security-command-center-detectors"
latest_feature_date: "2024-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/compliance-management"
  - "https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/FrameworkComplianceSummaryView"
  - "https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFrameworkComplianceSummariesResponse"
keywords:
  - "compliance"
  - "framework"
  - "mappings"
  - "security"
  - "command"
  - "center"
  - "detectors"
  - "now"
---

# Compliance framework mappings for Security Command Center detectors

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center detectors are now mapped to additional compliance frameworks.

## Extended Definition

Security Command Center detectors are now mapped to additional compliance frameworks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/compliance-management](https://docs.cloud.google.com/security-command-center/docs/compliance-management)
- [https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/FrameworkComplianceSummaryView](https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/FrameworkComplianceSummaryView)
- [https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFrameworkComplianceSummariesResponse](https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFrameworkComplianceSummariesResponse)

## Supporting Pages

### "Assess compliance without Compliance Manager \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/compliance-management](https://docs.cloud.google.com/security-command-center/docs/compliance-management)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud Security Command Center maps detectors for Google Cloud to one or more of the following compliance standards: Center for Information Security (CIS) Controls 8.0 CIS Google Cloud Computing Foundations Benchmark v2.0.0, v1.3.0, v1.2.0, v1.1.0, and v1.0.0 CIS Kubernetes Benchmark v1.5.1 Cloud Controls Matrix (CCM) 4 Health Insurance Portability and Accountability Act (HIPAA) International Organization for Standardization (ISO) 27001, 2022 and 2013 National Institute of Standards and Technology (NIST) 800-53 R5 and R4 National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) 1.0 Open Web Application Security Project (OWASP) Top Ten, 2021 and 2017 Payment Card Industry Data Security Standard (PCI DSS) 4.0 and 3.2.1 System and Organization Controls (SOC) 2 2017 Trust Services Criteria (TSC) AWS In the Enterprise service tier, Security Command Center maps detectors for Amazon Web Services (AWS) to one or more of the following compliance standards: CIS Amazon Web Services Foundations 2.0.0 CIS Critical Security Controls Version 8.0 Cloud Controls Matrix (CCM) 4 Health Insurance Portability and Accountability Act (HIPAA) International Organization for Standardization (ISO) 27001, 2022 National Institute of Standards and Technology (NIST) 800-53 R5 National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) 1.0 Payment Card Industry Data Security Standard (PCI DSS) 4.0 and 3.2.1 System and Organization Controls (SOC) 2 2017 Trusted Services Criteria (TSC) Detectors and findings as compliance controls Security Command Center detection services, like Security Health Analytics and Web Security Scanner, use detection modules (detectors) to check for vulnerabilities and misconfigurations in your cloud environment.
- CIS reviews and certifies the mappings of Security Command Center detectors to each supported version of the CIS Google Cloud Foundations Benchmark.
- Security Command Center monitors your compliance with detectors that are mapped to the controls of a wide variety of security standards.
- A finding is a record of a vulnerability or other security issue that includes information such as the following: A description of the vulnerability A recommendation to address the vulnerability that would bring the control into compliance The numerical ID of the control that corresponds to the finding Recommended steps for remediating the vulnerability Not all controls in a standard can be mapped to Security Command Center findings, usually because certain controls can't be automated, but possibly for other reasons.

### "FrameworkComplianceSummaryView \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/FrameworkComplianceSummaryView](https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/FrameworkComplianceSummaryView)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Security Command Center Reference Send feedback FrameworkComplianceSummaryView Stay organized with collections Save and categorize content based on your preferences.
- FRAMEWORK COMPLIANCE SUMMARY VIEW FULL Includes all information, including findingCount and controlsPassingTrend .
- FRAMEWORK COMPLIANCE SUMMARY VIEW BASIC Includes basic compliance metadata, but omits trend data.
- Enums FRAMEWORK COMPLIANCE SUMMARY VIEW UNSPECIFIED The default / unset value.

### "ListFrameworkComplianceSummariesResponse \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFrameworkComplianceSummariesResponse](https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFrameworkComplianceSummariesResponse)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Security Command Center Reference Send feedback ListFrameworkComplianceSummariesResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "frameworkComplianceSummaries" : [ { object ( FrameworkComplianceSummary ) } ] , "nextPageToken" : string } Fields frameworkComplianceSummaries[] object ( FrameworkComplianceSummary ) The list of framework compliance summaries. nextPageToken string Output only.
- JSON representation The response message for ListFrameworkComplianceSummariesResponse .

