---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.818Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Attack exposure scores"
feature_slug: "attack-exposure-scores"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features"
keywords:
  - "attack"
  - "exposure"
  - "scores"
  - "calculated"
  - "high"
  - "value"
  - "resources"
  - "can"
---

# Attack exposure scores

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Attack exposure scores are calculated for high-value resources and can align vulnerability severity with exposure.

## Extended Definition

Attack exposure scores are calculated for high-value resources and can align vulnerability severity with exposure.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features)

## Supporting Pages

### "Attack exposure scores and attack paths \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- Source ID: `site-docs-reference`
- Final score: 321
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
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When attack path simulations run, they identify attack paths and calculate attack exposure scores for resources that are designated as high-value resources and for Vulnerability class, Misconfiguration class, and Toxic combination class findings.
- Azure Enterprise service tier Before Security Command Center can generate attack exposure scores and attack paths for the Azure resources that you specify in a resource value configuration, Security Command Center must be connected to Azure.
- AWS Enterprise service tier Before Security Command Center can generate attack exposure scores and attack paths for the resources that you specify in a resource value configuration, Security Command Center must be connected to AWS.
- Your high-value resource set determines which of your resource instances (referred to as resources ) the attack path simulations consider high-value resources .

### "Risk Engine feature support \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features)
- Source ID: `site-docs-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AWS services supported by Risk Engine The simulations can include the following AWS services: Identity and Access Management (IAM) Security Token Service (STS) Simple Storage Service (S3) Web Application Firewall (WAFv2) Elastic Compute Cloud (EC2) Elastic Load Balancing (ELB & ELBv2) Relational Database Service (RDS) Key Management Service (KMS) Elastic Container Registry (ECR) Elastic Container Service (ECS) ApiGateway & ApiGatewayv2 Organizations (Account Management Service) CloudFront AutoScaling Lambda DynamoDB AWS resource types supported in high-value resource sets You can add only the following types of AWS resources to a high-value resource set: DynamoDB table EC2 instance Lambda function RDS DBCluster RDS DBInstance S3 bucket AWS resource types supported with data-sensitivity classifications Attack path simulations can automatically set priority values based on data-sensitivity classifications from Sensitive Data Protection discovery for only the following AWS data resource types: Amazon S3 bucket Finding support in Security Health Analytics for AWS Risk Engine provides scores and attack path visualizations for the following Security Health Analytics finding categories: Access keys rotated 90 days less Credentials unused 45 days greater disabled Default security group VPC restricts all traffic EC2 instance no public IP IAM password policy IAM password policy prevents password reuse IAM password policy requires minimum length 14 greater IAM user unused credentials check IAM users receive permissions groups KMS cmk not scheduled for deletion MFA delete enabled S3 buckets MFA enabled root user account Multi factor authentication MFA enabled all IAM users console No root user account access key exists No security groups allow ingress 0 remote server administration No security groups allow ingress 0 0 0 0 remote server administration One active access key available any single IAM user Public access given RDS instance Restricted common ports Restricted SSH Rotation customer created CMKS enabled Rotation customer created symmetric CMKS enabled S3 buckets configured block public access bucket settings S3 bucket policy set deny HTTP requests S3 default encryption KMS VPC default security group closed Vulnerability Assessment for Amazon Web Services findings The Software vulnerability finding category that is generated by EC2 Vulnerability Assessment supports attack exposure scores.
- Google Cloud services supported by Risk Engine The simulations that Risk Engine runs can include the following Google Cloud services: Artifact Registry BigQuery Cloud Build Cloud Run Cloud Run functions Managed Service for Apache Spark Cloud Key Management Service Cloud Load Balancing Cloud NAT Cloud Router Cloud SQL Cloud Storage Compute Engine Google Kubernetes Engine Identity and Access Management Resource Manager Vertex AI Virtual Private Cloud, including subnets, firewall configurations and service control perimeters Google Cloud resource types supported in high-value resource sets You can add only the following types of Google Cloud resources to a high-value resource set: aiplatform.googleapis.com/Dataset aiplatform.googleapis.com/Featurestore aiplatform.googleapis.com/MetadataStore aiplatform.googleapis.com/Model aiplatform.googleapis.com/ReasoningEngine aiplatform.googleapis.com/TrainingPipeline artifactregistry.googleapis.com/Repository bigquery.googleapis.com/Dataset cloudbuild.googleapis.com/BitbucketServerConfig cloudbuild.googleapis.com/BuildTrigger cloudbuild.googleapis.com/Connection cloudbuild.googleapis.com/GithubEnterpriseConfig cloudbuild.googleapis.com/Repository cloudbuild.googleapis.com/WorkerPool cloudfunctions.googleapis.com/CloudFunction compute.googleapis.com/Instance container.googleapis.com/Cluster dataproc.googleapis.com/Cluster dataproc.googleapis.com/Job run.googleapis.com/Job run.googleapis.com/Service spanner.googleapis.com/Instance sqladmin.googleapis.com/Instance storage.googleapis.com/Bucket Google Cloud resource types supported with data-sensitivity classifications Attack path simulations can automatically set priority values based on data-sensitivity classifications from Sensitive Data Protection discovery for only the following data resource types: aiplatform.googleapis.com/Dataset bigquery.googleapis.com/Dataset sqladmin.googleapis.com/Instance storage.googleapis.com/Bucket Supported finding categories Attack path simulations generate attack exposure scores and attack paths for only the Security Command Center finding categories from the Security Command Center detection services that are listed in this section.
- Azure services supported by Risk Engine The attack path simulations can include the following Azure services: App Service Azure Kubernetes Service (AKS) Virtual Network Container Registry Cosmos DB Functions Key Vault MySQL database Network security groups PostgreSQL database Role-Based Access Control (RBAC) Service Bus SQL Database Storage Account Virtual Machine Scale Sets Virtual Machines Azure resource types you can specify in high-value resource sets You can add only the following types of Azure resources to a high-value resource set: Microsoft.Compute/virtualMachines Linux VM Windows VM Microsoft.ContainerService/managedClusters Kubernetes Cluster Microsoft.DBforMySQL/flexibleServers/databases MySQL Database Microsoft.DBforPostgreSQL/flexibleServers/databases PostgreSQL Database Microsoft.DocumentDB/databaseAccounts Cosmos DB Account Microsoft.Sql/servers/databases SQL Database Microsoft.Storage/storageAccounts Storage Account Microsoft.Web/sites App Service Function App Azure resources included in the default high-value resource set The following are resources included in the default high-value resource set: Microsoft.Compute/virtualMachines Linux VM Windows VM Microsoft.DBforPostgreSQL/flexibleServers/databases PostgreSQL Database Microsoft.DBforMySQL/flexibleServers/databases MySQL Database Microsoft.DocumentDB/databaseAccounts Cosmos DB Account Microsoft.Sql/servers/databases SQL Database Microsoft.Storage/storageAccounts Storage Account Microsoft.Web/sites App Service Function App Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To get the permissions that you need to view attack paths, ask your administrator to grant you the following IAM roles on your organization: Security Center Attack Paths Reader ( roles/securitycenter.attackPathsViewer ) View attack paths generated from findings and issues (for example, toxic combinations and chokepoints): Security Center Findings Viewer ( roles/securitycenter.findingsViewer ) Allow access to attack paths for high-value resources: Security Center Assets Viewer ( roles/securitycenter.assetsViewer ) Security Center Valued Resources Reader ( roles/securitycenter.valuedResourcesViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

