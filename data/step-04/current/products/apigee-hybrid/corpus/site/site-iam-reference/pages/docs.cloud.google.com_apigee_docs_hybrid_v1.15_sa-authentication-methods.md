---
title: "Service account authentication methods in Apigee hybrid \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods
  title: "Service account authentication methods in Apigee hybrid \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Service account authentication methods in Apigee hybrid
Stay organized with collections
Save and categorize content based on your preferences.
You are currently viewing version 1.15 of the
Apigee hybrid documentation. For more information, see
Supported versions .
Version 1.15 keyboard_arrow_down
Supported versions:
v1.16 (latest)
v1.15
v1.14
List of supported versions
Unsupported versions:
v1.13
v1.12
v1.11
v1.10
v1.9
v1.8
v1.7
v1.6
v1.5
v1.4
v1.3
v1.2
v1.1
Choosing service account authentication methods in Apigee hybrid
Apigee hybrid requires service accounts for secure communication with
Google Cloud services. Choose an authentication method for these service
accounts that aligns with your security and operational requirements. This
guide provides a brief overview of the available options.
Understand service account authentication
Apigee hybrid uses Google Cloud service accounts to authenticate and
authorize components running in your Kubernetes cluster. These service accounts
access Google Cloud resources, such as Cloud Storage buckets and
Cloud Logging. Each service account requires specific Identity and Access Management (IAM)
roles to perform its functions.
Learn more about Google Cloud Identity and Access Management service accounts:
Service accounts overview .
Learn more about service accounts in Apigee hybrid: About service accounts .
Authentication Method Options
Apigee hybrid supports several methods for authenticating service accounts. Each method manages
service account keys differently, offering various levels of security and operational complexity.
Consider your platform, security posture, and existing infrastructure when selecting a method.
The following table summarizes the available authentication methods:
Method
Key Storage Location
Platform Compatibility
Key Management
Kubernetes secrets
Kubernetes cluster secrets
Any Kubernetes platform
Kubernetes manages secrets, manual rotation
Service account JSON key files
Local file system
Any Kubernetes platform
Manual rotation and distribution
Vault
HashiCorp Vault
Any Kubernetes platform
Vault manages secrets, manual rotation
Workload Identity Federation for GKE
Google Cloud IAM
Google Kubernetes Engine (GKE)
Google Cloud manages, no key files needed
Workload Identity Federation on other platforms
Google Cloud IAM
AKS, EKS, OpenShift, or other Kubernetes platforms
Google Cloud manages, no key files needed
Store service account keys in Kubernetes secrets
Store service account keys as Kubernetes secrets within your cluster. This
method leverages the built-in secret management capabilities in Kubernetes.
Kubernetes secrets can provide a more secure way to manage keys than direct
file storage. You still manage key rotation manually.
Hybrid components reference these secrets using the serviceAccountRef
and envs[].serviceAccountRefs properties in the overrides.yaml file.
Kubernetes manages the distribution of these secrets to the appropriate pods.
For example:
logger :
serviceAccountRef : "my-project-apigee-logger-key"
To use this method, see
Store service account keys in Kubernetes secrets .
Service account JSON key files
This method involves creating a JSON key file for each service account and storing these files
directly on a file system. This approach offers simplicity for initial setup. However, it requires
ensuring the security of the file system. Key rotation is manual.
Place each service account's private key JSON file in a directory accessible by the
Apigee hybrid components. Reference the path to these files in your
overrides.yaml configuration using the serviceAccountPath and
envs[].serviceAccountPaths properties.
For example:
logger :
serviceAccountPath : "my-project-apigee-logger.json"
You can generate and download the service account key files using the create-service-account tool provided with Apigee hybrid. For more information, see
create-service-account .
Store service account keys in Vault
Integrate HashiCorp Vault to manage your service account keys. Vault provides
a robust solution for secret management, offering features like dynamic secret
generation, auditing, and automated key rotation. It requires setting up and
maintaining a Vault instance.
You will need to create separate Vault secrets, policies, and roles for the org-level and env-level
components. You reference these secrets in your overrides.yaml
configuration using the serviceAccountSecretProviderClass and
envs[].serviceAccountSecretProviderClass properties.
For example:
serviceAccountSecretProviderClass : apigee-orgsakeys-spc
envs :
- name : my-env
serviceAccountSecretProviderClass : apigee-envsakeys-my-env-spc
See
Store service account keys in Vault .
Workload Identity Federation for GKE
Workload Identity Federation for GKE allows Kubernetes service accounts to act as Google Cloud
service accounts. This method eliminates the need for service account key files
entirely. Instead, your GKE cluster directly authenticates workloads using
Google Cloud IAM. Workload Identity Federation for GKE provides a highly secure and automated
authentication mechanism, simplifying key management. This method is specific to GKE clusters.
This method requires binding each Kubernetes service account to a specific Google Cloud service account. The Apigee hybrid installation process creates the Kubernetes service accounts specific to your installation when you install the Apigee hybrid Helm charts. When you run the helm install or helm upgrade command with the --dry-run flag for each chart, the output will include the commands to bind the Kubernetes service accounts to the Google Cloud service accounts for the specific Apigee hybrid component in that chart.
You enable Workload Identity Federation for GKE in your overrides.yaml file with the gcp.workloadIdentity.enabled property.
For example:
gcp :
projectID : my-project
region : us-west1
workloadIdentity :
enabled : true
See
Enable Workload Identity Federation for GKE .
Workload Identity Federation on platforms other than GKE
Workload Identity Federation extends the benefits of Workload Identity Federation for GKE to
Kubernetes clusters running outside of Google Cloud, such as Azure Kubernetes
Service (AKS), Amazon Elastic Kubernetes Service (EKS), or OpenShift. This
method allows your non-GKE cluster to authenticate to Google Cloud using
your cluster's OIDC provider to configure
a trust relationship between your cluster's identity provider and Google Cloud.
After initial setup, this method eliminates the need for service account key files.
You can use Workload Identity Federation with:
Credential configuration files (in place of service account key files)
Kubernetes secrets
Vault
To use Workload Identity Federation you create credential configuration files for each Google Cloud service account. You use these files in place of service account key files or to set up the Kubernetes secrets or Vault if you are using those methods.
You enable Workload Identity Federation in your overrides.yaml file with the gcp.federatedWorkloadIdentity.enabled , gcp.federatedWorkloadIdentity.audience , and gcp.federatedWorkloadIdentity.credentialSourceFile properties.
For example:
gcp :
projectID : my-project
region : us-west1
federatedWorkloadIdentity :
enabled : true
audience : "//iam.googleapis.com/projects/123123123123/locations/global/workloadIdentityPools/my-wi-pool/providers/my-wi-provider"
credentialSourceFile : "/var/run/service-account/token"
See
Enable Workload Identity Federation .
Choose an Authentication Method
Select an authentication method based on your deployment environment and
security requirements.
For GKE deployments , Workload Identity Federation for GKE offers a secure and
streamlined approach. It removes the need to manage service account key
files directly.
For non-GKE Kubernetes deployments (AKS, EKS, OpenShift), Workload
Identity Federation provides a similar keyless authentication experience.
This method is the recommended choice for these environments.
If Workload Identity Federation for GKE or Workload Identity Federation are not options ,
consider using Vault for centralized key management and automation.
For simpler deployments or if you lack a Vault setup , storing keys
in Kubernetes secrets provides a native Kubernetes solution. This method
offers better security than direct file storage.
Direct service account key files are suitable for initial testing or
environments where other methods are not feasible. However, this method
requires careful manual key management and rotation.
What's next
Continue planning and preparing: Secure ports usage .
Learn more about service accounts in Apigee hybrid: About service accounts .
Install Apigee hybrid: Part 1, Project and org setup: Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
