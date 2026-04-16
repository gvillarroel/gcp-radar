---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.776Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "CIEM findings for federated AWS identities"
feature_slug: "ciem-findings-for-federated-aws-identities"
latest_feature_date: "2024-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/ciem-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics"
keywords:
  - "ciem"
  - "findings"
  - "federated"
  - "aws"
  - "identities"
  - "security"
  - "command"
  - "center"
---

# CIEM findings for federated AWS identities

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center can generate CIEM misconfiguration findings for federated identities connected to AWS through AWS IAM Identity Center.

## Extended Definition

Security Command Center can generate CIEM misconfiguration findings for federated identities connected to AWS through AWS IAM Identity Center.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/ciem-overview](https://docs.cloud.google.com/security-command-center/docs/ciem-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)

## Supporting Pages

### "Overview of Cloud Infrastructure Entitlement Management \_|\_ Security Command\

- URL: [https://docs.cloud.google.com/security-command-center/docs/ciem-overview](https://docs.cloud.google.com/security-command-center/docs/ciem-overview)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enterprise service tier With Security Command Center's Cloud Infrastructure Entitlement Management (CIEM) capabilities, you can manage which identities have access to which resources in your deployments on multiple cloud platforms and mitigate potential vulnerabilities that result from misconfigurations.
- Many different Security Command Center detection services (such as IAM recommender, Security Health Analytics, and CIEM) produce the identity and access findings that are considered part of Security Command Center's CIEM capabilities.
- With CIEM, Security Command Center presents Google Cloud, AWS, and Microsoft Azure ( Preview ) identity and access findings categorically on the Identity and access findings card of the Security Command Center Risk Overview page.
- Discovery of federated identities' permissions CIEM helps to provide a more granular view of the security of your identity and access configurations by providing insight into the Google Cloud and AWS permissions of federated identities from other identity providers, such as Entra ID (Azure AD), Okta, and on-premises Active Directory.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- December 16, 2024 Feature Security Command Center can now produce Cloud Infrastructure Entitlement Management (CIEM) misconfiguration findings for federated identities that are connected to your AWS environment through the AWS IAM Identity Center.
- November 21, 2024 Feature As of November 13, 2024, Security Command Center can produce Cloud Entitlement Infrastructure Management (CIEM) findings for the following identity and access issues in AWS environments: Users, groups, or assumed IAM roles that are inactive and have one or more permissions.
- November 11, 2025 Change Several features and updates have been made available to Security Command Center in a federated identity environment: Exporting findings to a CSV file.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.

### "Using Security Health Analytics \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- The command should display output like the following, with results from your organization: groupByResults : - count : '1' properties : category : MFA NOT ENFORCED - count : '3' properties : category : ADMIN SERVICE ACCOUNT - count : '2' properties : category : API KEY APIS UNRESTRICTED - count : '1' properties : category : API KEY APPS UNRESTRICTED - count : '2' properties : category : API KEY EXISTS - count : '10' properties : category : AUDIT CONFIG NOT MONITORED - count : '10' properties : category : AUDIT LOGGING DISABLED - count : '1' properties : category : AUTO UPGRADE DISABLED - count : '10' properties : category : BUCKET IAM NOT MONITORED - count : '10' properties : category : BUCKET LOGGING DISABLED nextPageToken : TOKEN readTime : '2023-08-05T21:56:13.862Z' totalSize : 50 Programmatically manage findings Standard-legacy, Standard, Premium, and Enterprise service tiers Using the Google Cloud CLI and the Security Command Center client libraries, you can automate almost anything you can do with Security Command Center in the Google Cloud console.
- If you activated Security Command Center at the organization level, run the following command: gcloud scc findings group organizations/ ORGANIZATION ID /sources/ SOURCE ID \ --group-by = category --page-size = PAGE SIZE If you activated Security Command Center at the project level, run the following command: gcloud scc findings group projects/ PROJECT ID /sources/ SOURCE ID \ --group-by = category --page-size = PAGE SIZE You can set the page size to any value up to 1000.
- Go to Vulnerabilities To sort findings by the number of active findings for each finding type, click the Active column header. gcloud To use the gcloud CLI to get a count of all active findings, you query Security Command Center to get the Security Health Analytics source ID.
- By using filters that are available on the Security Command Center Vulnerabilities and Findings pages in the Google Cloud console, you can focus on the highest severity vulnerabilities across your organization, and review vulnerabilities by asset type, project, and more.

