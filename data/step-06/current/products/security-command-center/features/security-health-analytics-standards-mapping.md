---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.823Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Health Analytics standards mapping"
feature_slug: "security-health-analytics-standards-mapping"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/compliance-management"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics"
keywords:
  - "security"
  - "health"
  - "analytics"
  - "standards"
  - "mapping"
  - "detectors"
  - "mapped"
---

# Security Health Analytics standards mapping

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Health Analytics detectors are mapped to new security standards.

## Extended Definition

Security Health Analytics detectors are mapped to new security standards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/compliance-management](https://docs.cloud.google.com/security-command-center/docs/compliance-management)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)

## Supporting Pages

### "Assess compliance without Compliance Manager \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/compliance-management](https://docs.cloud.google.com/security-command-center/docs/compliance-management)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more about Security Health Analytics and Web Security Scanner findings and the mapping between supported detectors and compliance standards, see vulnerabilities findings .
- Google Cloud Security Command Center maps detectors for Google Cloud to one or more of the following compliance standards: Center for Information Security (CIS) Controls 8.0 CIS Google Cloud Computing Foundations Benchmark v2.0.0, v1.3.0, v1.2.0, v1.1.0, and v1.0.0 CIS Kubernetes Benchmark v1.5.1 Cloud Controls Matrix (CCM) 4 Health Insurance Portability and Accountability Act (HIPAA) International Organization for Standardization (ISO) 27001, 2022 and 2013 National Institute of Standards and Technology (NIST) 800-53 R5 and R4 National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) 1.0 Open Web Application Security Project (OWASP) Top Ten, 2021 and 2017 Payment Card Industry Data Security Standard (PCI DSS) 4.0 and 3.2.1 System and Organization Controls (SOC) 2 2017 Trust Services Criteria (TSC) AWS In the Enterprise service tier, Security Command Center maps detectors for Amazon Web Services (AWS) to one or more of the following compliance standards: CIS Amazon Web Services Foundations 2.0.0 CIS Critical Security Controls Version 8.0 Cloud Controls Matrix (CCM) 4 Health Insurance Portability and Accountability Act (HIPAA) International Organization for Standardization (ISO) 27001, 2022 National Institute of Standards and Technology (NIST) 800-53 R5 National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) 1.0 Payment Card Industry Data Security Standard (PCI DSS) 4.0 and 3.2.1 System and Organization Controls (SOC) 2 2017 Trusted Services Criteria (TSC) Detectors and findings as compliance controls Security Command Center detection services, like Security Health Analytics and Web Security Scanner, use detection modules (detectors) to check for vulnerabilities and misconfigurations in your cloud environment.
- Note: Security Command Center vulnerability detection services, such as Security Health Analytics and Web Security Scanner, monitor controls based on a best effort mapping between the detectors of the services and the controls of a standard.
- With the security posture service , you can map organization policies and Security Health Analytics detectors to the standards and controls that apply to your business.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Depending on the Security Command Center service tier you are using, the available detectors differ: In the Standard-legacy tier, Security Health Analytics includes only a basic group of medium-severity and high-severity vulnerability detectors.
- Most Security Health Analytics findings are mapped to security standard controls so that you can assess compliance.
- For more information, see the following: Security Health Analytics overview How to use Security Health Analytics Remediating Security Health Analytics findings Reference of Security Health Analytics findings Security posture service Premium and Enterprise service tiers (requires organization-level activation ) The security posture service is a built-in service for the Security Command Center Premium tier that lets you define, assess, and monitor the overall status of your security in Google Cloud.
- Pricing tier: Premium Supported assets cloudresourcemanager.googleapis.com/Organization Batch scans : Every 30 minutes Fix this finding build High VPC Service Controls Restriction VPC SC RESTRICTION Finding description: Security Health Analytics can't produce certain findings for a project.

### "Using Security Health Analytics \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Standard-legacy, Standard, Premium, and Enterprise service tiers To get the permissions that you need to manage Security Health Analytics findings, ask your administrator to grant you the following IAM roles on your organization, folder, or project: Enable and disable detectors: Security Center Settings Editor ( roles/securitycenter.settingsEditor ) View and filter findings: Security Center Findings Viewer ( roles/securitycenter.findingsViewer ) Manage mute rules: Security Center Mute Configurations Editor ( roles/securitycenter.muteConfigsEditor ) Manage security marks: Security Center Finding Security Marks Writer ( roles/securitycenter.findingSecurityMarksWriter ) Programmatically manage findings: Security Center Findings Editor ( roles/securitycenter.findingsEditor ) Grant inbound access to a VPC Service Controls service perimeter: Access Context Manager Editor ( roles/accesscontextmanager.policyEditor ) Complete any task on this page: Security Center Settings Admin ( roles/securitycenter.settingsAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- The following Security Health Analytics detectors for Google Cloud are disabled by default: ALLOYDB AUTO BACKUP DISABLED ALLOYDB CMEK DISABLED BIGQUERY TABLE CMEK DISABLED BUCKET CMEK DISABLED CLOUD ASSET API DISABLED DATAPROC CMEK DISABLED DATASET CMEK DISABLED DISK CMEK DISABLED DISK CSEK DISABLED NODEPOOL BOOT CMEK DISABLED PUBSUB CMEK DISABLED SQL CMEK DISABLED SQL NO ROOT PASSWORD SQL WEAK ROOT PASSWORD VPC FLOW LOGS SETTINGS NOT RECOMMENDED Note: If you disable Security Health Analytics, Security Command Center also disables the individual Security Health Analytics modules and stores their previous enablement states.
- Although it is not a recommended method, you can suppress unneeded findings by adding dedicated security marks to assets so that the Security Health Analytics detectors don't create security findings for those assets.
- When you activate Security Command Center at the organization level, you can disable Security Health Analytics or specific detectors for specific folders or projects.

