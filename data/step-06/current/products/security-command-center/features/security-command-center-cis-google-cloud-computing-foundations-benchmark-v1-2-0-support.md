---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.035Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center CIS Google Cloud Computing Foundations Benchmark v1.2.0 support"
feature_slug: "security-command-center-cis-google-cloud-computing-foundations-benchmark-v1-2-0-support"
latest_feature_date: "2022-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/compliance-management"
  - "https://docs.cloud.google.com/database-center/docs/metrics"
keywords:
  - "security"
  - "command"
  - "center"
  - "cis"
  - "computing"
  - "foundations"
  - "benchmark"
  - "v1"
---

# Security Command Center CIS Google Cloud Computing Foundations Benchmark v1.2.0 support

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center now supports CIS Google Cloud Computing Foundations Benchmark v1.2.0.

## Extended Definition

Security Command Center now supports CIS Google Cloud Computing Foundations Benchmark v1.2.0.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/compliance-management](https://docs.cloud.google.com/security-command-center/docs/compliance-management)
- [https://docs.cloud.google.com/database-center/docs/metrics](https://docs.cloud.google.com/database-center/docs/metrics)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Change Security Command Center now supports two versions of CIS Benchmarks for Google Cloud Platform Foundation : CIS Google Cloud Computing Foundations Benchmark v1.1.0 (CIS Google Cloud Foundation 1.1) CIS Google Cloud Computing Foundations Benchmark v1.0.0 (CIS Google Cloud Foundation 1.0) For more information about supported compliance standards, see Detectors and compliance .
- January 26, 2022 Feature Security Command Center supports CIS Google Cloud Computing Foundations Benchmark v1.2.0 (CIS Google Cloud Foundation 1.2.0).
- September 11, 2023 Feature Security Command Center now supports CIS Google Cloud Computing Foundations Benchmark v2.0.0.
- March 31, 2023 Feature Security Command Center supports CIS Google Cloud Computing Foundations Benchmark v1.3.0.

### "Assess compliance without Compliance Manager \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/compliance-management](https://docs.cloud.google.com/security-command-center/docs/compliance-management)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud Security Command Center maps detectors for Google Cloud to one or more of the following compliance standards: Center for Information Security (CIS) Controls 8.0 CIS Google Cloud Computing Foundations Benchmark v2.0.0, v1.3.0, v1.2.0, v1.1.0, and v1.0.0 CIS Kubernetes Benchmark v1.5.1 Cloud Controls Matrix (CCM) 4 Health Insurance Portability and Accountability Act (HIPAA) International Organization for Standardization (ISO) 27001, 2022 and 2013 National Institute of Standards and Technology (NIST) 800-53 R5 and R4 National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) 1.0 Open Web Application Security Project (OWASP) Top Ten, 2021 and 2017 Payment Card Industry Data Security Standard (PCI DSS) 4.0 and 3.2.1 System and Organization Controls (SOC) 2 2017 Trust Services Criteria (TSC) AWS In the Enterprise service tier, Security Command Center maps detectors for Amazon Web Services (AWS) to one or more of the following compliance standards: CIS Amazon Web Services Foundations 2.0.0 CIS Critical Security Controls Version 8.0 Cloud Controls Matrix (CCM) 4 Health Insurance Portability and Accountability Act (HIPAA) International Organization for Standardization (ISO) 27001, 2022 National Institute of Standards and Technology (NIST) 800-53 R5 National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) 1.0 Payment Card Industry Data Security Standard (PCI DSS) 4.0 and 3.2.1 System and Organization Controls (SOC) 2 2017 Trusted Services Criteria (TSC) Detectors and findings as compliance controls Security Command Center detection services, like Security Health Analytics and Web Security Scanner, use detection modules (detectors) to check for vulnerabilities and misconfigurations in your cloud environment.
- CIS reviews and certifies the mappings of Security Command Center detectors to each supported version of the CIS Google Cloud Foundations Benchmark.
- Security Command Center adds support for new benchmark versions and standards periodically.
- A finding is a record of a vulnerability or other security issue that includes information such as the following: A description of the vulnerability A recommendation to address the vulnerability that would bring the control into compliance The numerical ID of the control that corresponds to the finding Recommended steps for remediating the vulnerability Not all controls in a standard can be mapped to Security Command Center findings, usually because certain controls can't be automated, but possibly for other reasons.

### "Metrics and alerting policy filters \_|\_ Database Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-center/docs/metrics](https://docs.cloud.google.com/database-center/docs/metrics)
- Source ID: `site-docs-reference-2`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metric type Launch stage (Resource hierarchy levels) Display name Kind, Type, Unit Monitored resources Description Labels resource/new resource count BETA (project) New database resources CUMULATIVE , INT64 , 1 databasecenter.googleapis.com/Resource Number of new database resources. product : Type of product. engine : Type of engine. version : Version of the product. resource/new signal count BETA (project) New database signals CUMULATIVE , INT64 , 1 databasecenter.googleapis.com/Resource Number of signals generated for resources. issue type : Type of signal.
- Home Documentation Databases Database Center Guides Send feedback Metrics and alerting policy filters Stay organized with collections Save and categorize content based on your preferences.
- Preview — Database Center metrics and filters This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- The remainder of this document lists metric labels and resource labels that you can use to filter the metric data that Database Center generates.

