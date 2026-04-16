---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.828Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "GKE security posture findings"
feature_slug: "gke-security-posture-findings"
latest_feature_date: "2024-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
keywords:
  - "gke"
  - "security"
  - "posture"
  - "findings"
  - "recommendations"
  - "now"
  - "surfaced"
  - "misconfiguration"
---

# GKE security posture findings

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

GKE security posture recommendations are now surfaced as misconfiguration and vulnerability findings in Security Command Center.

## Extended Definition

GKE security posture recommendations are now surfaced as misconfiguration and vulnerability findings in Security Command Center.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)

## Supporting Pages

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- To see these findings, enable any of the following GKE security posture dashboard features: GKE security posture dashboard pane Security Command Center finding class Workload configuration auditing 1 MISCONFIGURATION Top threats 2 THREAT Container OS vulnerability scanning 1 Language package vulnerability scanning 1 Actionable security bulletins 1 ( Preview ) Top software vulnerabilities 2 ( Preview ) VULNERABILITY Available only if you enable this feature in GKE.
- The Policy Controller findings come from the following Policy Controller bundles: CIS Kubernetes Benchmark v.1.5.1 , a set of recommendations for configuring Kubernetes to support a strong security posture.
- Use the following query to view the findings for DSPM: state="ACTIVE" AND NOT mute="MUTED" AND resource.name="//aiplatform.googleapis.com/projects/478190632149/locations/us-central1/models/1244151282898305024" AND category="DATA SECURITY POSTURE ACCESS VIOLATION" OR category="DATA SECURITY POSTURE FLOW VIOLATION" OR category="DATA SECURITY POSTURE DELETION VIOLATION" OR category="DATA SECURITY POSTURE PROTECTION KEY GOVERNANCE" OR category="BIGQUERY TABLE CMEK DISABLED" OR category="VERTEX AI MODEL CMEK DISABLED" OR category="VERTEX AI METADATA STORE CMEK DISABLED" OR category="VERTEX AI DATASET CMEK DISABLED" OR category="VERTEX AI FEATURE STORE TABLE CMEK DISABLED" OR category="DATA SECURITY POSTURE CMEK POLICY MISCONFIGURED" OR category="DATA SECURITY POSTURE CMEK POLICY DELETED" OR category="DATA SECURITY POSTURE CMEK VIOLATION" OR category="SENSITIVE DATA PUBLIC SQL INSTANCE" OR category="SENSITIVE DATA PUBLIC DATASET" OR category="SENSITIVE DATA BIGQUERY TABLE CMEK DISABLED" OR category="SENSITIVE DATA DATASET CMEK DISABLED" OR category="SENSITIVE DATA SQL CMEK DISABLED" OR category="PUBLIC DATASET" OR category="PUBLIC SQL INSTANCE" OR category="SQL PUBLIC IP" OR category="ACCESS TRANSPARENCY DISABLED" OR category="ORG POLICY LOCATION RESTRICTION" OR category="BUCKET POLICY ONLY DISABLED" OR category="DATA EXFILTRATION BIG QUERY" OR category="DATA EXFILTRATION BIG QUERY EXTRACTION" OR category="DATA EXFILTRATION BIG QUERY TO GOOGLE DRIVE" To view the details of a specific finding, click the finding name in the Category column.
- For more information, see the following: Security Health Analytics overview How to use Security Health Analytics Remediating Security Health Analytics findings Reference of Security Health Analytics findings Security posture service Premium and Enterprise service tiers (requires organization-level activation ) The security posture service is a built-in service for the Security Command Center Premium tier that lets you define, assess, and monitor the overall status of your security in Google Cloud.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- April 01, 2024 Fixed The following Security Health Analytics misconfiguration detectors have changed to check for overly restrictive flag values that might prevent error messages from being written to the logs: SQL LOG ERROR VERBOSITY SQL LOG MIN ERROR STATEMENT SEVERITY For the flag values that the detectors check for, see: SQL log error verbosity SQL log min error statement severity March 26, 2024 Feature GKE security posture recommendations released to Preview Recommendations from GKE security posture are now available as findings in all tiers of Security Command Center as a Preview release.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- GKE security posture publishes workload configuration auditing results as Misconfiguration class findings and vulnerability assessment results as Vulnerability class findings in Security Command Center.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.

### "Risk Engine feature support \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Vulnerability Assessment for Google Cloud findings Attack path simulations support the following Vulnerability Assessment for Google Cloud finding categories: GCE OS vulnerability GCE Software vulnerability GKE OS vulnerability GKE Software vulnerability GKE Security Posture findings Attach path simulations support the following GKE Security Posture finding categories: GKE runtime OS vulnerability Mandiant Attack Surface Management findings Attack path simulations support the following Mandiant Attack Surface Management finding categories: Software vulnerability VM Manager findings The OS Vulnerability finding category that is generated by VM Manager supports attack exposure scores.
- AWS services supported by Risk Engine The simulations can include the following AWS services: Identity and Access Management (IAM) Security Token Service (STS) Simple Storage Service (S3) Web Application Firewall (WAFv2) Elastic Compute Cloud (EC2) Elastic Load Balancing (ELB & ELBv2) Relational Database Service (RDS) Key Management Service (KMS) Elastic Container Registry (ECR) Elastic Container Service (ECS) ApiGateway & ApiGatewayv2 Organizations (Account Management Service) CloudFront AutoScaling Lambda DynamoDB AWS resource types supported in high-value resource sets You can add only the following types of AWS resources to a high-value resource set: DynamoDB table EC2 instance Lambda function RDS DBCluster RDS DBInstance S3 bucket AWS resource types supported with data-sensitivity classifications Attack path simulations can automatically set priority values based on data-sensitivity classifications from Sensitive Data Protection discovery for only the following AWS data resource types: Amazon S3 bucket Finding support in Security Health Analytics for AWS Risk Engine provides scores and attack path visualizations for the following Security Health Analytics finding categories: Access keys rotated 90 days less Credentials unused 45 days greater disabled Default security group VPC restricts all traffic EC2 instance no public IP IAM password policy IAM password policy prevents password reuse IAM password policy requires minimum length 14 greater IAM user unused credentials check IAM users receive permissions groups KMS cmk not scheduled for deletion MFA delete enabled S3 buckets MFA enabled root user account Multi factor authentication MFA enabled all IAM users console No root user account access key exists No security groups allow ingress 0 remote server administration No security groups allow ingress 0 0 0 0 remote server administration One active access key available any single IAM user Public access given RDS instance Restricted common ports Restricted SSH Rotation customer created CMKS enabled Rotation customer created symmetric CMKS enabled S3 buckets configured block public access bucket settings S3 bucket policy set deny HTTP requests S3 default encryption KMS VPC default security group closed Vulnerability Assessment for Amazon Web Services findings The Software vulnerability finding category that is generated by EC2 Vulnerability Assessment supports attack exposure scores.
- To get the permissions that you need to view attack paths, ask your administrator to grant you the following IAM roles on your organization: Security Center Attack Paths Reader ( roles/securitycenter.attackPathsViewer ) View attack paths generated from findings and issues (for example, toxic combinations and chokepoints): Security Center Findings Viewer ( roles/securitycenter.findingsViewer ) Allow access to attack paths for high-value resources: Security Center Assets Viewer ( roles/securitycenter.assetsViewer ) Security Center Valued Resources Reader ( roles/securitycenter.valuedResourcesViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Premium and Enterprise service tiers (requires organization-level activation ) This page describes the services and findings that the Security Command Center Risk Engine feature supports and the supportability limits it is subject to.

