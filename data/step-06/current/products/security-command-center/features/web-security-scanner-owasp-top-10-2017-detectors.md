---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.033Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Web Security Scanner OWASP Top 10 2017 detectors"
feature_slug: "web-security-scanner-owasp-top-10-2017-detectors"
latest_feature_date: "2022-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/compliance-management"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
keywords:
  - "web"
  - "security"
  - "scanner"
  - "owasp"
  - "top"
  - "10"
  - "2017"
  - "detectors"
---

# Web Security Scanner OWASP Top 10 2017 detectors

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Web Security Scanner now includes detectors aligned to the OWASP Top 10 2017.

## Extended Definition

Web Security Scanner now includes detectors aligned to the OWASP Top 10 2017.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/compliance-management](https://docs.cloud.google.com/security-command-center/docs/compliance-management)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)

## Supporting Pages

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Detectors and compliance Web Security Scanner supports categories in the OWASP Top Ten , a document that ranks and provides remediation guidance for the top 10 most critical web application security risks, as determined by the Open Web Application Security Project (OWASP).
- After Notebook Security Scanner is enabled, it automatically scans Colab Enterprise notebooks (files with the ipynb filename extension) every 24 hours to detect vulnerabilities in Python packages and publishes these findings to the Security Command Center Findings page.
- Depending on the Security Command Center service tier you are using, the available detectors differ: In the Standard-legacy tier, Security Health Analytics includes only a basic group of medium-severity and high-severity vulnerability detectors.
- Custom scans Standard-legacy, Premium, and Enterprise service tiers Web Security Scanner custom scans provide granular information about application vulnerability findings, like outdated libraries, cross-site scripting, or use of mixed content.

### "Assess compliance without Compliance Manager \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/compliance-management](https://docs.cloud.google.com/security-command-center/docs/compliance-management)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud Security Command Center maps detectors for Google Cloud to one or more of the following compliance standards: Center for Information Security (CIS) Controls 8.0 CIS Google Cloud Computing Foundations Benchmark v2.0.0, v1.3.0, v1.2.0, v1.1.0, and v1.0.0 CIS Kubernetes Benchmark v1.5.1 Cloud Controls Matrix (CCM) 4 Health Insurance Portability and Accountability Act (HIPAA) International Organization for Standardization (ISO) 27001, 2022 and 2013 National Institute of Standards and Technology (NIST) 800-53 R5 and R4 National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) 1.0 Open Web Application Security Project (OWASP) Top Ten, 2021 and 2017 Payment Card Industry Data Security Standard (PCI DSS) 4.0 and 3.2.1 System and Organization Controls (SOC) 2 2017 Trust Services Criteria (TSC) AWS In the Enterprise service tier, Security Command Center maps detectors for Amazon Web Services (AWS) to one or more of the following compliance standards: CIS Amazon Web Services Foundations 2.0.0 CIS Critical Security Controls Version 8.0 Cloud Controls Matrix (CCM) 4 Health Insurance Portability and Accountability Act (HIPAA) International Organization for Standardization (ISO) 27001, 2022 National Institute of Standards and Technology (NIST) 800-53 R5 National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) 1.0 Payment Card Industry Data Security Standard (PCI DSS) 4.0 and 3.2.1 System and Organization Controls (SOC) 2 2017 Trusted Services Criteria (TSC) Detectors and findings as compliance controls Security Command Center detection services, like Security Health Analytics and Web Security Scanner, use detection modules (detectors) to check for vulnerabilities and misconfigurations in your cloud environment.
- Note: Security Command Center vulnerability detection services, such as Security Health Analytics and Web Security Scanner, monitor controls based on a best effort mapping between the detectors of the services and the controls of a standard.
- To learn more about Security Health Analytics and Web Security Scanner findings and the mapping between supported detectors and compliance standards, see vulnerabilities findings .
- With the security posture service , you can map organization policies and Security Health Analytics detectors to the standards and controls that apply to your business.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Feature Web Security Scanner, a built-in service of Security Command Center, provides detectors for the OWASP Top 10 2017 and OWASP Top 10 2021 .
- March 21, 2024 Feature Security Command Center detectors are now mapped to the following additional compliance frameworks: CIS Critical Security Controls v8 Cloud Controls Matrix v 4 HIPAA ISO 27001 (2022) NIST 800-53 (rev 5) NIST Cybersecurity Framework (v 1.0) PCI-DSS 4.0 SOC 2 (2017) March 20, 2024 Feature New misconfiguration detectors for AlloyDB for PostgreSQL clusters released to General Availability.
- The following detectors, which are available with the Enterprise and Premium tiers of Security Command Center, detect misconfigurations in web applications: HSTS MISCONFIGURATION CSP MISSING CSP MISCONFIGURATION COOP MISSING CLICKJACKING PROTECTION MISSING For more information, see Web Security Scanner misconfiguration findings .
- May 05, 2025 Feature Web Security Scanner, a built-in service of Security Command Center, released new detectors.

