---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.838Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Attack exposure scores for high-value resources"
feature_slug: "attack-exposure-scores-for-high-value-resources"
latest_feature_date: "2024-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set"
keywords:
  - "attack"
  - "exposure"
  - "scores"
  - "high"
  - "value"
  - "resources"
  - "now"
  - "show"
---

# Attack exposure scores for high-value resources

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

High-value resources now show attack exposure scores calculated by Attack Path Simulations.

## Extended Definition

High-value resources now show attack exposure scores calculated by Attack Path Simulations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set)

## Supporting Pages

### "Attack exposure scores and attack paths \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- Source ID: `site-docs-reference`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource values Premium and Enterprise service tiers (requires organization-level activation ) Although all of your resources on Google Cloud have value, Security Command Center identifies attack paths and calculates attack exposure scores for only the resources that you designate as high-value resources (sometimes referred to as valued resources ).
- Insight reporting: Based on the simulations, Security Command Center assigns attack exposure scores to your high-value resources and to the findings that expose them and visualizes the potential paths an attacker could take to those resources.
- Default high-value resource set Security Command Center uses a default high-value resource set to calculate attack exposure scores when no resource value configurations are defined or when no defined configurations match any resources.
- The attack path simulations account for these adjacent resources already, and if you designate them as high value also, it can make your attack exposure scores less reliable.

### "Define and manage your high-value resource set \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set)
- Source ID: `site-docs-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When attack path simulations run, they identify attack paths and calculate attack exposure scores for resources that are designated as high-value resources and for Vulnerability class, Misconfiguration class, and Toxic combination class findings.
- Azure Enterprise service tier Before Security Command Center can generate attack exposure scores and attack paths for the Azure resources that you specify in a resource value configuration, Security Command Center must be connected to Azure.
- AWS Enterprise service tier Before Security Command Center can generate attack exposure scores and attack paths for the resources that you specify in a resource value configuration, Security Command Center must be connected to AWS.
- Your high-value resource set determines which of your resource instances (referred to as resources ) the attack path simulations consider high-value resources .

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- September 20, 2023 Feature Attack path simulations support additional resources The attack path simulation feature that generates attack exposure scores and attack paths for your high-value resources now supports the following additional Google Cloud resources: aiplatform.googleapis.com/Dataset aiplatform.googleapis.com/Featurestore aiplatform.googleapis.com/MetadataStore aiplatform.googleapis.com/Model aiplatform.googleapis.com/TrainingPipeline container.googleapis.com/Cluster For more information, see Resource types supported in high-value resource sets .
- Feature Attack exposure scores and attack paths released to General Availability The attack path simulation feature that generates attack exposure scores and attack paths for findings that expose your high-value resources is now released to General Availability .
- February 06, 2024 Feature High-value resources now include attack exposure scores The calculation of attack exposure scores for high-value resources by the Security Command Center Attack Path Simulations feature is released to Preview .

