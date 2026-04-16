---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.841Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Mandiant-informed attack exposure scores"
feature_slug: "mandiant-informed-attack-exposure-scores"
latest_feature_date: "2024-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features"
keywords:
  - "mandiant"
  - "informed"
  - "attack"
  - "exposure"
  - "scores"
  - "score"
  - "calculations"
  - "now"
---

# Mandiant-informed attack exposure scores

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Attack exposure score calculations now use Mandiant Threat Intelligence CVE exploitability ratings.

## Extended Definition

Attack exposure score calculations now use Mandiant Threat Intelligence CVE exploitability ratings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features)

## Supporting Pages

### "Attack exposure scores and attack paths \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- Source ID: `site-docs-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Incorporation of CVE data When calculating attack exposure scores for vulnerability findings, the attack path simulations consider data from the vulnerability's CVE record , the CVSS scores , as well as assessments of the exploitability of the vulnerability that are provided by Mandiant.
- Attack path simulations support the following resource types: aiplatform.googleapis.com/Dataset aiplatform.googleapis.com/Featurestore aiplatform.googleapis.com/MetadataStore aiplatform.googleapis.com/Model aiplatform.googleapis.com/ReasoningEngine aiplatform.googleapis.com/TrainingPipeline artifactregistry.googleapis.com/Repository bigquery.googleapis.com/Dataset cloudbuild.googleapis.com/BitbucketServerConfig cloudbuild.googleapis.com/BuildTrigger cloudbuild.googleapis.com/Connection cloudbuild.googleapis.com/GithubEnterpriseConfig cloudbuild.googleapis.com/Repository cloudbuild.googleapis.com/WorkerPool cloudfunctions.googleapis.com/CloudFunction compute.googleapis.com/Instance container.googleapis.com/Cluster dataproc.googleapis.com/Cluster dataproc.googleapis.com/Job run.googleapis.com/Job run.googleapis.com/Service spanner.googleapis.com/Instance sqladmin.googleapis.com/Instance storage.googleapis.com/Bucket Score calculation Each time the attack path simulations run, they recalculate the attack exposure scores.
- For more information, see the following sections on this page: Attack exposure scores Attack paths Attack path simulations Attack exposure scores Premium and Enterprise service tiers (requires organization-level activation ) An attack exposure score appears for the following: A Security Command Center finding or resource A Security Command Center Premium or Enterprise issue An attack exposure score is a measure of how exposed resources are to potential attack if a malicious actor were to gain access to your Google Cloud environment.
- Using scores to prioritize finding remediations To effectively prioritize the remediation of findings based on their attack exposure or toxic combination scores, consider the following points: Any finding that has a score that is greater than zero exposes a high-value resource to potential attack in some way, so the remediation should be prioritized over findings that have a score of zero.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Feature Attack exposure scores informed by Mandiant Threat Intelligence The inclusion of CVE exploitability ratings in the calculation of attack exposure scores for vulnerability findings is released to Preview .
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- September 20, 2023 Feature Attack path simulations support additional resources The attack path simulation feature that generates attack exposure scores and attack paths for your high-value resources now supports the following additional Google Cloud resources: aiplatform.googleapis.com/Dataset aiplatform.googleapis.com/Featurestore aiplatform.googleapis.com/MetadataStore aiplatform.googleapis.com/Model aiplatform.googleapis.com/TrainingPipeline container.googleapis.com/Cluster For more information, see Resource types supported in high-value resource sets .
- For more information, see the following: Work with findings in the console Inspect resources related to findings June 25, 2024 Announcement Introducing the Security Command Center Risk Engine Security Command Center introduces Risk Engine as the name of the functionality that provides attack path simulations, attack exposure scores, attack path visualizations, and toxic combination findings.

### "Risk Engine feature support \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Vulnerability Assessment for Google Cloud findings Attack path simulations support the following Vulnerability Assessment for Google Cloud finding categories: GCE OS vulnerability GCE Software vulnerability GKE OS vulnerability GKE Software vulnerability GKE Security Posture findings Attach path simulations support the following GKE Security Posture finding categories: GKE runtime OS vulnerability Mandiant Attack Surface Management findings Attack path simulations support the following Mandiant Attack Surface Management finding categories: Software vulnerability VM Manager findings The OS Vulnerability finding category that is generated by VM Manager supports attack exposure scores.
- AWS services supported by Risk Engine The simulations can include the following AWS services: Identity and Access Management (IAM) Security Token Service (STS) Simple Storage Service (S3) Web Application Firewall (WAFv2) Elastic Compute Cloud (EC2) Elastic Load Balancing (ELB & ELBv2) Relational Database Service (RDS) Key Management Service (KMS) Elastic Container Registry (ECR) Elastic Container Service (ECS) ApiGateway & ApiGatewayv2 Organizations (Account Management Service) CloudFront AutoScaling Lambda DynamoDB AWS resource types supported in high-value resource sets You can add only the following types of AWS resources to a high-value resource set: DynamoDB table EC2 instance Lambda function RDS DBCluster RDS DBInstance S3 bucket AWS resource types supported with data-sensitivity classifications Attack path simulations can automatically set priority values based on data-sensitivity classifications from Sensitive Data Protection discovery for only the following AWS data resource types: Amazon S3 bucket Finding support in Security Health Analytics for AWS Risk Engine provides scores and attack path visualizations for the following Security Health Analytics finding categories: Access keys rotated 90 days less Credentials unused 45 days greater disabled Default security group VPC restricts all traffic EC2 instance no public IP IAM password policy IAM password policy prevents password reuse IAM password policy requires minimum length 14 greater IAM user unused credentials check IAM users receive permissions groups KMS cmk not scheduled for deletion MFA delete enabled S3 buckets MFA enabled root user account Multi factor authentication MFA enabled all IAM users console No root user account access key exists No security groups allow ingress 0 remote server administration No security groups allow ingress 0 0 0 0 remote server administration One active access key available any single IAM user Public access given RDS instance Restricted common ports Restricted SSH Rotation customer created CMKS enabled Rotation customer created symmetric CMKS enabled S3 buckets configured block public access bucket settings S3 bucket policy set deny HTTP requests S3 default encryption KMS VPC default security group closed Vulnerability Assessment for Amazon Web Services findings The Software vulnerability finding category that is generated by EC2 Vulnerability Assessment supports attack exposure scores.
- Google Cloud services supported by Risk Engine The simulations that Risk Engine runs can include the following Google Cloud services: Artifact Registry BigQuery Cloud Build Cloud Run Cloud Run functions Managed Service for Apache Spark Cloud Key Management Service Cloud Load Balancing Cloud NAT Cloud Router Cloud SQL Cloud Storage Compute Engine Google Kubernetes Engine Identity and Access Management Resource Manager Vertex AI Virtual Private Cloud, including subnets, firewall configurations and service control perimeters Google Cloud resource types supported in high-value resource sets You can add only the following types of Google Cloud resources to a high-value resource set: aiplatform.googleapis.com/Dataset aiplatform.googleapis.com/Featurestore aiplatform.googleapis.com/MetadataStore aiplatform.googleapis.com/Model aiplatform.googleapis.com/ReasoningEngine aiplatform.googleapis.com/TrainingPipeline artifactregistry.googleapis.com/Repository bigquery.googleapis.com/Dataset cloudbuild.googleapis.com/BitbucketServerConfig cloudbuild.googleapis.com/BuildTrigger cloudbuild.googleapis.com/Connection cloudbuild.googleapis.com/GithubEnterpriseConfig cloudbuild.googleapis.com/Repository cloudbuild.googleapis.com/WorkerPool cloudfunctions.googleapis.com/CloudFunction compute.googleapis.com/Instance container.googleapis.com/Cluster dataproc.googleapis.com/Cluster dataproc.googleapis.com/Job run.googleapis.com/Job run.googleapis.com/Service spanner.googleapis.com/Instance sqladmin.googleapis.com/Instance storage.googleapis.com/Bucket Google Cloud resource types supported with data-sensitivity classifications Attack path simulations can automatically set priority values based on data-sensitivity classifications from Sensitive Data Protection discovery for only the following data resource types: aiplatform.googleapis.com/Dataset bigquery.googleapis.com/Dataset sqladmin.googleapis.com/Instance storage.googleapis.com/Bucket Supported finding categories Attack path simulations generate attack exposure scores and attack paths for only the Security Command Center finding categories from the Security Command Center detection services that are listed in this section.
- Google Cloud Amazon Web Services (AWS) Microsoft Azure Organization-level support only The attack path simulations that Risk Engine uses to generate the attack exposure scores and attack paths require Security Command Center to be activated at the organization level .

