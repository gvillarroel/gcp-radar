---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.135Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center Legacy"
feature_slug: "security-command-center-legacy"
latest_feature_date: "2021-06-07"
deprecation_date: "2021-06-07"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/activate-premium-tier"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "security"
  - "command"
  - "center"
  - "legacy"
  - "offering"
  - "has"
  - "been"
  - "permanently"
---

# Security Command Center Legacy

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The legacy Security Command Center offering has been permanently disabled and must be migrated to Standard or Premium; deprecated on 2021-06-07.

## Extended Definition

The legacy Security Command Center offering has been permanently disabled and must be migrated to Standard or Premium; deprecated on 2021-06-07.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/activate-premium-tier](https://docs.cloud.google.com/security-command-center/docs/activate-premium-tier)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- June 07, 2021 Deprecated Security Command Center Legacy, previously known as Cloud Security Command Center, and Event Threat Detection Legacy have been permanently disabled.
- April 07, 2021 Breaking Security Command Center Legacy, previously known as Cloud Security Command Center, and Event Threat Detection Legacy are being permanently disabled for all customers on June 7, 2021.
- Feature The following Event Threat Detection rules for Google Kubernetes Engine have been released to General Availability : GKE NODEPORT SERVICE CREATED GKE SENSITIVE NAMESPACE WORKLOAD TRIGGERED GKE STATIC POD CREATED GKE TOR PROXY IP REQUEST GKE WEBHOOK CONFIG CREATED YL2 GKE ANONYMOUS USERS GRANTED ACCESS YL2 GKE APPROVE CSR FORBIDDEN YL2 GKE CRB CLUSTERROLE AGGREGATION CONTROLLER YL2 GKE MANUALLY DELETED CSR YL2 GKE POD MASQUERADING YL2 GKE REVERSE SHELL POD YL2 GKE SERVICE ACCOUNT CREATION SENSITIVE NAMESPACE YL2 GKE SUSPICIOUS CRYPTOMINING POD March 13, 2025 Feature Security Command Center has released the Artifact Registry vulnerability assessment detection service, which includes the CONTAINER IMAGE VULNERABILITY detector.
- August 07, 2025 Feature The following Container Threat Detection detectors have been released to General Availability : Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47177) Execution: Socat Reverse Shell Detected Privilege Escalation: Abuse of Sudo For Privilege Escalation (CVE-2019-14287) Privilege Escalation: Polkit Local Privilege Escalation Vulnerability (CVE-2021-4034) Privilege Escalation: Sudo Potential Privilege Escalation (CVE-2021-3156) Feature Risk reports generated and downloaded from Security Command Center include a system attack exposure page that shows the organization's exposure risk over time and lists the projects and resources that have the highest risk.

### "Activate Security Command Center Premium tier for an organization \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/activate-premium-tier](https://docs.cloud.google.com/security-command-center/docs/activate-premium-tier)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security Command Center Premium activation includes the following service agents: Cloud Security Command Center Service Agent for Event Threat Detection, Security Health Analytics, Virtual Machine Threat Detection, and Vulnerability Assessment Cloud Security Compliance Service Agent for AI Protection and Compliance Manager Container Threat Detection Service Agent for Container Threat Detection Data Security Posture Management Service Agent for DSPM Note: If you use service perimeters , you must configure ingress and egress policies for service agents to allow them access to each service.
- Required roles To get the permissions that you need to activate Security Command Center for an organization, ask your administrator to grant you the following IAM roles on your organization: Security Center Admin ( roles/securitycenter.admin ) Organization Administrator ( roles/resourcemanager.organizationAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- If your organization policies are set to restrict resource usage , verify that the following APIs are allowed by your policy : cloudsecuritycompliance.googleapis.com securitycenter.googleapis.com securitycentermanagement.googleapis.com Activate Security Command Center Premium You can activate Security Command Center Premium for an organization through the Google Cloud console.
- The following services are enabled when you activate Security Command Center Premium: AI Protection Compliance Manager Container Threat Detection For Container Threat Detection to function, make sure that your clusters are on a supported version of Google Kubernetes Engine (GKE) and that your GKE clusters are configured correctly.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Security Health Analytics Standard-legacy, Standard, Premium, and Enterprise service tiers Security Health Analytics is a built-in detection service of Security Command Center that provides managed scans of your cloud resources to detect common misconfigurations.
- Standard-legacy, Standard, Premium, and Enterprise service tiers This page contains a list of the detection services, sometimes also referred to as security sources , that Security Command Center uses to detect security issues in your cloud environments.
- Depending on the Security Command Center service tier you are using, the available detectors differ: In the Standard-legacy tier, Security Health Analytics includes only a basic group of medium-severity and high-severity vulnerability detectors.
- App Hub Standard-legacy, Standard, Premium, and Enterprise service tiers Security Command Center and Compliance Manager let you view findings, issues, and compliance information for resources within a specific App Hub application.

