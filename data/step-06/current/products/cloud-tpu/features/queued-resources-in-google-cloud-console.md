---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.281Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Queued resources in Google Cloud Console"
feature_slug: "queued-resources-in-google-cloud-console"
latest_feature_date: "2024-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities"
  - "https://docs.cloud.google.com/iam/docs/principal-identifiers"
  - "https://docs.cloud.google.com/iam/docs/resources"
keywords:
  - "queued"
  - "resources"
  - "console"
  - "let"
  - "you"
  - "submit"
  - "tpu"
  - "resource"
---

# Queued resources in Google Cloud Console

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

Queued resources in the Google Cloud Console let you submit Cloud TPU resource requests that wait in a queue until capacity becomes available.

## Extended Definition

Queued resources in the Google Cloud Console let you submit Cloud TPU resource requests that wait in a queue until capacity becomes available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)
- [https://docs.cloud.google.com/iam/docs/principal-identifiers](https://docs.cloud.google.com/iam/docs/principal-identifiers)
- [https://docs.cloud.google.com/iam/docs/resources](https://docs.cloud.google.com/iam/docs/resources)

## Supporting Pages

### "Resource types with built-in identities \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)
- Source ID: `site-iam-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Description Format All resources for the specified service in the specified project principalSet:// RESOURCE SERVICE / projects/ PROJECT NUMBER / All resources in the specified project with the specified type principalSet:// RESOURCE SERVICE / projects/ PROJECT NUMBER / type/ RESOURCE TYPE / All resources with the specified ancestor principalSet:// RESOURCE SERVICE / projects/ PROJECT NUMBER / ancestor.name/ ANCESTOR RESOURCE TYPE / ANCESTOR RESOURCE NAME principalSet:// RESOURCE SERVICE / projects/ PROJECT NUMBER / ancestor.uid/ ANCESTOR RESOURCE TYPE / ANCESTOR RESOURCE UID All resources with the specified type and the specified ancestor principalSet:// RESOURCE SERVICE / projects/ PROJECT NUMBER / type/ RESOURCE TYPE / ancestor.name/ ANCESTOR RESOURCE TYPE / ANCESTOR RESOURCE NAME principalSet:// RESOURCE SERVICE / projects/ PROJECT NUMBER / type/ RESOURCE TYPE / ancestor.uid/ ANCESTOR RESOURCE TYPE / ANCESTOR RESOURCE UID Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Resource type Principal identifier format Parameter Manager parameters principal://parametermanager.googleapis.com/ projects/ PROJECT NUMBER / uid/ locations/ global/ parameters/ PARAMETER UID Workload identity pool (preview) principal://iam.googleapis.com/projects/ PROJECT NUMBER /name/locations/global/workloadIdentityPools/ WORKLOAD IDENTITY POOL NAME Principal identifiers for sets of resources Use the following formats in your allow policies to grant roles to sets of resources with built-in identities: Note: These principal sets don't include resources that don't have built-in identities.
- As a result, resources with built-in identities can do the following: Be granted IAM roles using the resource's principal identifier Access other resources without using service agents Principal identifiers for single resources The following table lists the resource types that have built-in identities.
- These identities let the resources act like principals .

### "Principal identifiers \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/principal-identifiers](https://docs.cloud.google.com/iam/docs/principal-identifiers)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ATTRIBUTE NAME / ATTRIBUTE VALUE All identities in a workload identity pool principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ POOL ID / Agent identity (Preview) principal:// TRUST DOMAIN / AGENT UNIQUE IDENTIFIER Example: principal://agents.global.org-123456789012.system.id.goog/resources/aiplatform/projects/9876543210/locations/us-central1/reasoningEngines/my-test-agent All agent identities in a trust domain (Preview) principalSet:// TRUST DOMAIN / Example: principalSet://agents.global.org-123456789012.system.id.goog/ All GKE Pods that use a specific Kubernetes service account By service account name: principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/subject/ns/ NAMESPACE /sa/ KUBERNETES SERVICE ACCOUNT By service account ID: principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/kubernetes.serviceaccount.uid/ SERVICEACCOUNT ID Legacy format: serviceAccount: PROJECT ID .svc.id.goog[ NAMESPACE / KUBERNETES SERVICE ACCOUNT ] All GKE Pods in a Kubernetes namespace, regardless of service account or cluster principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/namespace/ NAMESPACE All GKE Pods in a specific cluster principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/kubernetes.cluster/https://container.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /clusters/ CLUSTER NAME Deleted Google Account 1 deleted:user: USER EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:user:alex@example.com?uid=123456789012345678901 Deleted service account 1 deleted:serviceAccount: SA EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:serviceAccount:my-service-account@my-project.iam.gserviceaccount.com?uid=123456789012345678901 Deleted Google group 1 deleted:group: GROUP EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:group:my-group@example.com?uid=123456789012345678901 Deleted single identity in a workforce identity pool 1 deleted:principal://iam.googleapis.com/locations/global/workforcePools/ POOL ID /subject/ SUBJECT ATTRIBUTE VALUE Example: deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value 1 Don't add deleted principals when creating or modifying policies.
- ATTRIBUTE NAME / ATTRIBUTE VALUE All identities in a workload identity pool principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ POOL ID / Agent identity (Preview) principal:// TRUST DOMAIN / AGENT RESOURCE PATH / AGENT ID Example: principal://agents.global.org-123456789012.system.id.goog/resources/aiplatform/projects/9876543210/locations/us-central1/reasoningEngines/my-test-agent Deleted Google Account 2 deleted:principal://goog/subject/ USER EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:principal://goog/subject/alex@example.com?uid=123456789012345678901 Deleted service account 2 deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/ SA EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com?uid=123456789012345678901 Deleted Google group 2 deleted:principalSet://goog/group/ GROUP EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:principalSet://goog/group/my-group@example.com?uid=123456789012345678901 Deleted single identity in a workforce identity pool 2 deleted:principal://iam.googleapis.com/locations/global/workforcePools/ POOL ID /subject/ SUBJECT ATTRIBUTE VALUE Example: deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value 1 Learn how to find your Cloud Identity customer ID .
- All users allUsers All authenticated users allAuthenticatedUsers Built-in resource identities Only available for supported resources.
- You can use access policies to control access to Eventarc resources.

### "Resources \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iam/docs/resources](https://docs.cloud.google.com/iam/docs/resources)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security IAM Resources Send feedback Resources Stay organized with collections Save and categorize content based on your preferences.
- Billing questions Resources for answering common billing questions.

