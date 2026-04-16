---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.792Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Toxic combination findings on AWS resources"
feature_slug: "toxic-combination-findings-on-aws-resources"
latest_feature_date: "2024-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features"
keywords:
  - "toxic"
  - "combination"
  - "findings"
  - "aws"
  - "resources"
  - "security"
  - "command"
  - "center"
---

# Toxic combination findings on AWS resources

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center now supports toxic combination findings on AWS resources in preview.

## Extended Definition

Security Command Center now supports toxic combination findings on AWS resources in preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following: Work with findings in the console Inspect resources related to findings June 25, 2024 Announcement Introducing the Security Command Center Risk Engine Security Command Center introduces Risk Engine as the name of the functionality that provides attack path simulations, attack exposure scores, attack path visualizations, and toxic combination findings.
- October 21, 2025 Change The release note for Security Command Center and attack path simulations , published on October 16, 2025, was updated to clarify that attack path simulations use Compute Engine and Google Kubernetes Engine OS and software vulnerability findings to detect toxic combinations and chokepoints.
- Feature Toxic combination findings release to Preview In the Enterprise tier of Security Command Center, the Risk Engine generates a finding when it detects a toxic combination during attack path simulations.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.

### "Attack exposure scores and attack paths \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Insight reporting: Based on the simulations, Security Command Center assigns attack exposure scores to your high-value resources and to the findings that expose them and visualizes the potential paths an attacker could take to those resources.
- An attack exposure score reflects exposure of supported Google Cloud service, resources, and Security Command Center findings to potential threats originating from the public internet.
- On the Cases page in Security Command Center Enterprise, you can also sort the toxic combinations and chokepoint cases by the attack exposure score.
- Issues in Security Command Center Premium or Enterprise, which contain toxic combinations and chokepoints .

### "Risk Engine feature support \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- To get the permissions that you need to view attack paths, ask your administrator to grant you the following IAM roles on your organization: Security Center Attack Paths Reader ( roles/securitycenter.attackPathsViewer ) View attack paths generated from findings and issues (for example, toxic combinations and chokepoints): Security Center Findings Viewer ( roles/securitycenter.findingsViewer ) Allow access to attack paths for high-value resources: Security Center Assets Viewer ( roles/securitycenter.assetsViewer ) Security Center Valued Resources Reader ( roles/securitycenter.valuedResourcesViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Required roles Attack paths are associated with specific components of Security Command Center, like findings and high-value resources.
- Google Cloud services supported by Risk Engine The simulations that Risk Engine runs can include the following Google Cloud services: Artifact Registry BigQuery Cloud Build Cloud Run Cloud Run functions Managed Service for Apache Spark Cloud Key Management Service Cloud Load Balancing Cloud NAT Cloud Router Cloud SQL Cloud Storage Compute Engine Google Kubernetes Engine Identity and Access Management Resource Manager Vertex AI Virtual Private Cloud, including subnets, firewall configurations and service control perimeters Google Cloud resource types supported in high-value resource sets You can add only the following types of Google Cloud resources to a high-value resource set: aiplatform.googleapis.com/Dataset aiplatform.googleapis.com/Featurestore aiplatform.googleapis.com/MetadataStore aiplatform.googleapis.com/Model aiplatform.googleapis.com/ReasoningEngine aiplatform.googleapis.com/TrainingPipeline artifactregistry.googleapis.com/Repository bigquery.googleapis.com/Dataset cloudbuild.googleapis.com/BitbucketServerConfig cloudbuild.googleapis.com/BuildTrigger cloudbuild.googleapis.com/Connection cloudbuild.googleapis.com/GithubEnterpriseConfig cloudbuild.googleapis.com/Repository cloudbuild.googleapis.com/WorkerPool cloudfunctions.googleapis.com/CloudFunction compute.googleapis.com/Instance container.googleapis.com/Cluster dataproc.googleapis.com/Cluster dataproc.googleapis.com/Job run.googleapis.com/Job run.googleapis.com/Service spanner.googleapis.com/Instance sqladmin.googleapis.com/Instance storage.googleapis.com/Bucket Google Cloud resource types supported with data-sensitivity classifications Attack path simulations can automatically set priority values based on data-sensitivity classifications from Sensitive Data Protection discovery for only the following data resource types: aiplatform.googleapis.com/Dataset bigquery.googleapis.com/Dataset sqladmin.googleapis.com/Instance storage.googleapis.com/Bucket Supported finding categories Attack path simulations generate attack exposure scores and attack paths for only the Security Command Center finding categories from the Security Command Center detection services that are listed in this section.
- Premium and Enterprise service tiers (requires organization-level activation ) This page describes the services and findings that the Security Command Center Risk Engine feature supports and the supportability limits it is subject to.

