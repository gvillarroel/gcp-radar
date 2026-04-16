---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.770Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Compliance detail resource scan counts"
feature_slug: "compliance-detail-resource-scan-counts"
latest_feature_date: "2025-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans"
  - "https://docs.cloud.google.com/security-command-center/docs/compliance-management"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "compliance"
  - "detail"
  - "resource"
  - "scan"
  - "counts"
  - "security"
  - "command"
  - "center"
---

# Compliance detail resource scan counts

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center can display the number of resources scanned for a specific security compliance standard.

## Extended Definition

Security Command Center can display the number of resources scanned for a specific security compliance standard.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans](https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans)
- [https://docs.cloud.google.com/security-command-center/docs/compliance-management](https://docs.cloud.google.com/security-command-center/docs/compliance-management)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### "Setting up custom scans using Web Security Scanner \_|\_ Security Command\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans](https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If Security Command Center is active , you can enable Web Security Scanner in the Google Cloud console on the Security Command Center Settings page Step 1: Deploying a test application To complete Web Security Scanner setup for custom scans, you need the URL of a Compute Engine, Google Kubernetes Engine (GKE), or App Engine application that is already deployed.
- Home Documentation Security Security Command Center Guides Send feedback Setting up custom scans using Web Security Scanner Stay organized with collections Save and categorize content based on your preferences.
- If you've enabled Web Security Scanner as a Security Command Center security source , scan results appear on the Findings page in the Google Cloud console.
- Important: The managed scans that are included with the Security Command Center Premium tier are separate from Web Security Scanner custom scans.

### "Assess compliance without Compliance Manager \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/compliance-management](https://docs.cloud.google.com/security-command-center/docs/compliance-management)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud Security Command Center maps detectors for Google Cloud to one or more of the following compliance standards: Center for Information Security (CIS) Controls 8.0 CIS Google Cloud Computing Foundations Benchmark v2.0.0, v1.3.0, v1.2.0, v1.1.0, and v1.0.0 CIS Kubernetes Benchmark v1.5.1 Cloud Controls Matrix (CCM) 4 Health Insurance Portability and Accountability Act (HIPAA) International Organization for Standardization (ISO) 27001, 2022 and 2013 National Institute of Standards and Technology (NIST) 800-53 R5 and R4 National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) 1.0 Open Web Application Security Project (OWASP) Top Ten, 2021 and 2017 Payment Card Industry Data Security Standard (PCI DSS) 4.0 and 3.2.1 System and Organization Controls (SOC) 2 2017 Trust Services Criteria (TSC) AWS In the Enterprise service tier, Security Command Center maps detectors for Amazon Web Services (AWS) to one or more of the following compliance standards: CIS Amazon Web Services Foundations 2.0.0 CIS Critical Security Controls Version 8.0 Cloud Controls Matrix (CCM) 4 Health Insurance Portability and Accountability Act (HIPAA) International Organization for Standardization (ISO) 27001, 2022 National Institute of Standards and Technology (NIST) 800-53 R5 National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) 1.0 Payment Card Industry Data Security Standard (PCI DSS) 4.0 and 3.2.1 System and Organization Controls (SOC) 2 2017 Trusted Services Criteria (TSC) Detectors and findings as compliance controls Security Command Center detection services, like Security Health Analytics and Web Security Scanner, use detection modules (detectors) to check for vulnerabilities and misconfigurations in your cloud environment.
- A finding is a record of a vulnerability or other security issue that includes information such as the following: A description of the vulnerability A recommendation to address the vulnerability that would bring the control into compliance The numerical ID of the control that corresponds to the finding Recommended steps for remediating the vulnerability Not all controls in a standard can be mapped to Security Command Center findings, usually because certain controls can't be automated, but possibly for other reasons.
- Note: Security Command Center vulnerability detection services, such as Security Health Analytics and Web Security Scanner, monitor controls based on a best effort mapping between the detectors of the services and the controls of a standard.
- Home Documentation Security Security Command Center Guides Send feedback Assess compliance without Compliance Manager Stay organized with collections Save and categorize content based on your preferences.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- You can filter in the following investigative views: Risk Overview > All risk dashboard Risk Overview > Data dashboard Findings page Issues page Compliance > Monitor (New) tab Compliance > Monitor (New) > Framework Details page The application filter is available when viewing data for an organization and lists applications that are created in App Hub and deployed in the same organization where Security Command Center was activated.
- Pricing tier: Premium or Standard Supported assets cloudresourcemanager.googleapis.com/Project Batch scans : Every 6 hours Fix this finding build High Security Command Center service account missing permissions SCC SERVICE ACCOUNT MISSING PERMISSIONS Finding description: The Security Command Center service account is missing permissions required to function properly.
- Pricing tier: Premium or Standard Supported assets cloudresourcemanager.googleapis.com/Organization cloudresourcemanager.googleapis.com/Project Batch scans : Every 30 minutes Fix this finding build Critical For more information, see Security Command Center errors .
- Security Health Analytics Standard-legacy, Standard, Premium, and Enterprise service tiers Security Health Analytics is a built-in detection service of Security Command Center that provides managed scans of your cloud resources to detect common misconfigurations.

