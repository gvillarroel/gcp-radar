---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.810Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Automatic Cloud SQL resource value assignment"
feature_slug: "automatic-cloud-sql-resource-value-assignment"
latest_feature_date: "2024-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
keywords:
  - "automatic"
  - "sql"
  - "resource"
  - "value"
  - "assignment"
  - "attack"
  - "path"
  - "simulations"
---

# Automatic Cloud SQL resource value assignment

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Attack path simulations can automatically set Cloud SQL resource values from Sensitive Data Protection insights.

## Extended Definition

Attack path simulations can automatically set Cloud SQL resource values from Sensitive Data Protection insights.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)

## Supporting Pages

### "Define and manage your high-value resource set \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set)
- Source ID: `site-docs-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To review the remediation instructions for the attack path simulation SCC Error findings in the documentation, see: APS no resource value configs match any resources APS resource value assignment limit exceeded What's next For information about working with Security Command Center findings, see Review and manage findings .
- To create a resource value configuration, click the tab for your cloud service provider and follow the steps: Google Cloud Go to the Attack path simulation page in Security Command Center Settings : Go to Attack path simulations Select your organization.
- When attack path simulations run, they identify attack paths and calculate attack exposure scores for resources that are designated as high-value resources and for Vulnerability class, Misconfiguration class, and Toxic combination class findings.
- Delete a configuration To delete a resource value configuration, follow these steps: Go to the Attack path simulation page in Security Command Center Settings : Go to Attack path simulations Select your organization.

### "Attack exposure scores and attack paths \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Supported Google Cloud resource types for automated data-sensitivity priority values Attack path simulations can automatically set priority values based on data-sensitivity classifications from Sensitive Data Protection discovery for only the following data resource types: aiplatform.googleapis.com/Dataset bigquery.googleapis.com/Dataset sqladmin.googleapis.com/Instance storage.googleapis.com/Bucket Supported AWS resource types for automated data-sensitivity priority values Attack path simulations can automatically set priority values based on data-sensitivity classifications from Sensitive Data Protection discovery for only the following AWS data resource types: Amazon S3 bucket High-value resource sets Premium and Enterprise service tiers (requires organization-level activation ) A high-value resource set is a defined collection of the resources in your Google Cloud environment that are the most important to secure and protect.
- Set resource priority values manually In a resource value configuration, you assign a priority to the matching high-value resources by specifying one of the following priority values: LOW = 1 MEDIUM = 5 HIGH = 10 NONE = 0 If you specify a priority value of LOW in a resource value configuration, the matching resources are still high-value resources; the attack path simulations just treat them with a lower priority and assign them a lower attack exposure score than high-value resources that have a priority value of MEDIUM or HIGH .
- Attacker scenario and capabilities In the simulations, Security Command Center has a logical representation of an attacker attempt to exploit your high-value resources by gaining access to your Google Cloud environment and following potential paths of access through your resources and detected vulnerabilities.
- Attack path simulations identify potential attack paths by modeling what would happen if an attacker applied known attack methods to the vulnerabilities and misconfigurations that Security Command Center has detected in your environment to try to reach your high-value resources.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- The following are examples of the new names: Ext FE Hunting Linux CYCLOPSBLINK FEBeta M APT Controller REDFLARE 1 M Backdoor REDSONJA 4 M Cryptomine XMRIG 1 September 18, 2024 Feature Assign high-value resources based on Sensitive Data Protection insights for Amazon S3 buckets The attack path simulations feature can now automatically set the resource value of an Amazon S3 bucket based on the sensitivity of the data that the bucket contains.
- May 06, 2024 Feature Assign high-value resources based on Sensitive Data Protection insights for Cloud SQL The attack path simulations feature can now automatically set the resource value of a Cloud SQL resource based on the sensitivity of the data that the instance contains.
- Feature Assign high-value resources based on Sensitive Data Protection insights for Cloud Storage The attack path simulations feature can now automatically set the resource value of a Cloud Storage resource based on the sensitivity of the data that the bucket contains.
- February 14, 2025 Feature The attack path simulations feature can now automatically set the resource value of a Vertex AI dataset based on the sensitivity of the data that the dataset contains.

