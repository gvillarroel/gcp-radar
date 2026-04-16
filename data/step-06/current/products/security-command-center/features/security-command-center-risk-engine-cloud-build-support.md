---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.594Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center Risk Engine Cloud Build support"
feature_slug: "security-command-center-risk-engine-cloud-build-support"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
keywords:
  - "security"
  - "command"
  - "center"
  - "risk"
  - "engine"
  - "build"
  - "supports"
  - "attack"
---

# Security Command Center Risk Engine Cloud Build support

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Risk Engine supports Cloud Build attack paths and Cloud Build resources in the high-value resource set.

## Extended Definition

Risk Engine supports Cloud Build attack paths and Cloud Build resources in the high-value resource set.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)

## Supporting Pages

### "Risk Engine feature support \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud services supported by Risk Engine The simulations that Risk Engine runs can include the following Google Cloud services: Artifact Registry BigQuery Cloud Build Cloud Run Cloud Run functions Managed Service for Apache Spark Cloud Key Management Service Cloud Load Balancing Cloud NAT Cloud Router Cloud SQL Cloud Storage Compute Engine Google Kubernetes Engine Identity and Access Management Resource Manager Vertex AI Virtual Private Cloud, including subnets, firewall configurations and service control perimeters Google Cloud resource types supported in high-value resource sets You can add only the following types of Google Cloud resources to a high-value resource set: aiplatform.googleapis.com/Dataset aiplatform.googleapis.com/Featurestore aiplatform.googleapis.com/MetadataStore aiplatform.googleapis.com/Model aiplatform.googleapis.com/ReasoningEngine aiplatform.googleapis.com/TrainingPipeline artifactregistry.googleapis.com/Repository bigquery.googleapis.com/Dataset cloudbuild.googleapis.com/BitbucketServerConfig cloudbuild.googleapis.com/BuildTrigger cloudbuild.googleapis.com/Connection cloudbuild.googleapis.com/GithubEnterpriseConfig cloudbuild.googleapis.com/Repository cloudbuild.googleapis.com/WorkerPool cloudfunctions.googleapis.com/CloudFunction compute.googleapis.com/Instance container.googleapis.com/Cluster dataproc.googleapis.com/Cluster dataproc.googleapis.com/Job run.googleapis.com/Job run.googleapis.com/Service spanner.googleapis.com/Instance sqladmin.googleapis.com/Instance storage.googleapis.com/Bucket Google Cloud resource types supported with data-sensitivity classifications Attack path simulations can automatically set priority values based on data-sensitivity classifications from Sensitive Data Protection discovery for only the following data resource types: aiplatform.googleapis.com/Dataset bigquery.googleapis.com/Dataset sqladmin.googleapis.com/Instance storage.googleapis.com/Bucket Supported finding categories Attack path simulations generate attack exposure scores and attack paths for only the Security Command Center finding categories from the Security Command Center detection services that are listed in this section.
- Google Cloud Amazon Web Services (AWS) Microsoft Azure Organization-level support only The attack path simulations that Risk Engine uses to generate the attack exposure scores and attack paths require Security Command Center to be activated at the organization level .
- Premium and Enterprise service tiers (requires organization-level activation ) This page describes the services and findings that the Security Command Center Risk Engine feature supports and the supportability limits it is subject to.
- AWS services supported by Risk Engine The simulations can include the following AWS services: Identity and Access Management (IAM) Security Token Service (STS) Simple Storage Service (S3) Web Application Firewall (WAFv2) Elastic Compute Cloud (EC2) Elastic Load Balancing (ELB & ELBv2) Relational Database Service (RDS) Key Management Service (KMS) Elastic Container Registry (ECR) Elastic Container Service (ECS) ApiGateway & ApiGatewayv2 Organizations (Account Management Service) CloudFront AutoScaling Lambda DynamoDB AWS resource types supported in high-value resource sets You can add only the following types of AWS resources to a high-value resource set: DynamoDB table EC2 instance Lambda function RDS DBCluster RDS DBInstance S3 bucket AWS resource types supported with data-sensitivity classifications Attack path simulations can automatically set priority values based on data-sensitivity classifications from Sensitive Data Protection discovery for only the following AWS data resource types: Amazon S3 bucket Finding support in Security Health Analytics for AWS Risk Engine provides scores and attack path visualizations for the following Security Health Analytics finding categories: Access keys rotated 90 days less Credentials unused 45 days greater disabled Default security group VPC restricts all traffic EC2 instance no public IP IAM password policy IAM password policy prevents password reuse IAM password policy requires minimum length 14 greater IAM user unused credentials check IAM users receive permissions groups KMS cmk not scheduled for deletion MFA delete enabled S3 buckets MFA enabled root user account Multi factor authentication MFA enabled all IAM users console No root user account access key exists No security groups allow ingress 0 remote server administration No security groups allow ingress 0 0 0 0 remote server administration One active access key available any single IAM user Public access given RDS instance Restricted common ports Restricted SSH Rotation customer created CMKS enabled Rotation customer created symmetric CMKS enabled S3 buckets configured block public access bucket settings S3 bucket policy set deny HTTP requests S3 default encryption KMS VPC default security group closed Vulnerability Assessment for Amazon Web Services findings The Software vulnerability finding category that is generated by EC2 Vulnerability Assessment supports attack exposure scores.

### "Attack exposure scores and attack paths \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Premium and Enterprise service tiers (requires organization-level activation ) This page explains key concepts, principles, and restrictions to help you learn about, refine, and use the attack exposure scores and attack paths that are generated by the Risk Engine of Security Command Center.
- Risk Engine generates attack paths and attack exposure scores by simulating what hypothetical attackers could do if they gained access to your Google Cloud environment and discovered the attack paths and vulnerabilities that Security Command Center has already found.
- The following list shows the resource types that are included in the default high-value resource set: aiplatform.googleapis.com/Model aiplatform.googleapis.com/ReasoningEngine artifactregistry.googleapis.com/Repository bigquery.googleapis.com/Dataset cloudbuild.googleapis.com/BuildTrigger cloudfunctions.googleapis.com/CloudFunction compute.googleapis.com/Instance run.googleapis.com/Job run.googleapis.com/Service spanner.googleapis.com/Instance sqladmin.googleapis.com/Instance storage.googleapis.com/Bucket Limit on resources in a high-value resource set Security Command Center limits the number of resources in a high-value resource set to 1,000 per cloud service provider.
- Multicloud risk assessments Enterprise service tier In addition to Google Cloud, Security Command Center can run attack path simulations to assess risk in your deployments on multiple cloud service provider platforms.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- December 11, 2025 Feature Security Command Center Risk Engine supports Cloud Build Attack Paths with Cloud Build Resources supported in the high-value resource set.
- November 06, 2025 Feature Security Command Center Risk Engine supports Cloud Run attack paths for the following high-value resources: run.googleapis.com/Job run.googleapis.com/Service November 03, 2025 Feature Compliance Manager supports the Security Command Center Premium tier at the organization level.
- April 02, 2026 Feature Security Command Center Risk Engine supports Managed Service for Apache Spark resources in attack paths and Managed Service for Apache Spark clusters and jobs in high-value resource sets.
- For more information, see the following: Work with findings in the console Inspect resources related to findings June 25, 2024 Announcement Introducing the Security Command Center Risk Engine Security Command Center introduces Risk Engine as the name of the functionality that provides attack path simulations, attack exposure scores, attack path visualizations, and toxic combination findings.

