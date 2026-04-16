---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.797Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Automatic resource value assignment for Amazon S3 buckets"
feature_slug: "automatic-resource-value-assignment-for-amazon-s3-buckets"
latest_feature_date: "2024-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn"
keywords:
  - "automatic"
  - "resource"
  - "value"
  - "assignment"
  - "amazon"
  - "s3"
  - "buckets"
  - "attack"
---

# Automatic resource value assignment for Amazon S3 buckets

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Attack path simulations can automatically set an Amazon S3 bucket's resource value based on the sensitivity of the data it contains.

## Extended Definition

Attack path simulations can automatically set an Amazon S3 bucket's resource value based on the sensitivity of the data it contains.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)

## Supporting Pages

### "Define and manage your high-value resource set \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- To review the remediation instructions for the attack path simulation SCC Error findings in the documentation, see: APS no resource value configs match any resources APS resource value assignment limit exceeded What's next For information about working with Security Command Center findings, see Review and manage findings .
- In the Assign resource value field, select a priority value for the matching resources by specifying one of the following options: Optional: If you use the Sensitive Data Protection discovery service , enable Security Command Center to automatically set the priority value of supported AWS data resources based on data-sensitivity classifications from Sensitive Data Protection: Click the slider next to Include discovery insights from Sensitive Data Protection .
- Set the priority value for the matching resources by specifying one of the following options: Optional: If you use the Sensitive Data Protection discovery service , enable Security Command Center to automatically set the priority value of supported data resources based on data-sensitivity classifications from Sensitive Data Protection: Click the slider next to Include discovery insights from Sensitive Data Protection .
- Note: If you select Any and enable the Include discovery insights from Sensitive Data Protection option, then for all supported AWS resources , the system automatically sets resource values based on data sensitivity classifications from Sensitive Data Protection.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- The following are examples of the new names: Ext FE Hunting Linux CYCLOPSBLINK FEBeta M APT Controller REDFLARE 1 M Backdoor REDSONJA 4 M Cryptomine XMRIG 1 September 18, 2024 Feature Assign high-value resources based on Sensitive Data Protection insights for Amazon S3 buckets The attack path simulations feature can now automatically set the resource value of an Amazon S3 bucket based on the sensitivity of the data that the bucket contains.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- May 06, 2024 Feature Assign high-value resources based on Sensitive Data Protection insights for Cloud SQL The attack path simulations feature can now automatically set the resource value of a Cloud SQL resource based on the sensitivity of the data that the instance contains.

### "Attack exposure scores and attack paths \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Supported Google Cloud resource types for automated data-sensitivity priority values Attack path simulations can automatically set priority values based on data-sensitivity classifications from Sensitive Data Protection discovery for only the following data resource types: aiplatform.googleapis.com/Dataset bigquery.googleapis.com/Dataset sqladmin.googleapis.com/Instance storage.googleapis.com/Bucket Supported AWS resource types for automated data-sensitivity priority values Attack path simulations can automatically set priority values based on data-sensitivity classifications from Sensitive Data Protection discovery for only the following AWS data resource types: Amazon S3 bucket High-value resource sets Premium and Enterprise service tiers (requires organization-level activation ) A high-value resource set is a defined collection of the resources in your Google Cloud environment that are the most important to secure and protect.
- Attack path simulations support the following resource types: aiplatform.googleapis.com/Dataset aiplatform.googleapis.com/Featurestore aiplatform.googleapis.com/MetadataStore aiplatform.googleapis.com/Model aiplatform.googleapis.com/ReasoningEngine aiplatform.googleapis.com/TrainingPipeline artifactregistry.googleapis.com/Repository bigquery.googleapis.com/Dataset cloudbuild.googleapis.com/BitbucketServerConfig cloudbuild.googleapis.com/BuildTrigger cloudbuild.googleapis.com/Connection cloudbuild.googleapis.com/GithubEnterpriseConfig cloudbuild.googleapis.com/Repository cloudbuild.googleapis.com/WorkerPool cloudfunctions.googleapis.com/CloudFunction compute.googleapis.com/Instance container.googleapis.com/Cluster dataproc.googleapis.com/Cluster dataproc.googleapis.com/Job run.googleapis.com/Job run.googleapis.com/Service spanner.googleapis.com/Instance sqladmin.googleapis.com/Instance storage.googleapis.com/Bucket Score calculation Each time the attack path simulations run, they recalculate the attack exposure scores.
- Set resource priority values manually In a resource value configuration, you assign a priority to the matching high-value resources by specifying one of the following priority values: LOW = 1 MEDIUM = 5 HIGH = 10 NONE = 0 If you specify a priority value of LOW in a resource value configuration, the matching resources are still high-value resources; the attack path simulations just treat them with a lower priority and assign them a lower attack exposure score than high-value resources that have a priority value of MEDIUM or HIGH .
- Using scores to prioritize finding remediations To effectively prioritize the remediation of findings based on their attack exposure or toxic combination scores, consider the following points: Any finding that has a score that is greater than zero exposes a high-value resource to potential attack in some way, so the remediation should be prioritized over findings that have a score of zero.

