---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:28:23.681Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Single project boundary setup"
feature_slug: "single-project-boundary-setup"
latest_feature_date: "2025-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/setup"
  - "https://docs.cloud.google.com/iam/docs/principal-identifiers"
  - "https://docs.cloud.google.com/iam/docs/overview"
keywords:
  - "boundary"
  - "project"
  - "single"
  - "setup"
---

# Single project boundary setup

Product: Application Design Center
Coverage: MEDIUM

## Step 02 Summary

Application Design Center can be set up using a single Google Cloud project boundary.

## Extended Definition

Application Design Center can be set up using a single Google Cloud project boundary.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/setup](https://docs.cloud.google.com/application-design-center/docs/setup)
- [https://docs.cloud.google.com/iam/docs/principal-identifiers](https://docs.cloud.google.com/iam/docs/principal-identifiers)
- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)

## Supporting Pages

### Set up Application Design Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/setup](https://docs.cloud.google.com/application-design-center/docs/setup)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The application management boundary you choose impacts your Application Design Center setup in the following ways: Single-project boundary Preview : The system quickly configures your project for application management, enables required APIs, and creates a space and storage bucket.
- Before you begin Single-project (Preview) You must have the following roles on the project: If you have the Project Owner ( roles/owner ) role, the system will automatically assign the remaining permissions to your user to complete the setup.
- To enable application management in a single project, see Create a space and enable APIs Folder-level You can use App Design Center in a folder configured for application management, which lets you define, group, and manage applications.
- Single-project (Preview) To enable application management on a single project and set up App Design Center, do the following: Go to the Application Design Center Overview page.

### "Principal identifiers \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/principal-identifiers](https://docs.cloud.google.com/iam/docs/principal-identifiers)
- Source ID: `site-iam-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- ATTRIBUTE NAME / ATTRIBUTE VALUE All identities in a workload identity pool principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ POOL ID / Agent identity (Preview) principal:// TRUST DOMAIN / AGENT UNIQUE IDENTIFIER Example: principal://agents.global.org-123456789012.system.id.goog/resources/aiplatform/projects/9876543210/locations/us-central1/reasoningEngines/my-test-agent All agent identities in a trust domain (Preview) principalSet:// TRUST DOMAIN / Example: principalSet://agents.global.org-123456789012.system.id.goog/ All GKE Pods that use a specific Kubernetes service account By service account name: principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/subject/ns/ NAMESPACE /sa/ KUBERNETES SERVICE ACCOUNT By service account ID: principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/kubernetes.serviceaccount.uid/ SERVICEACCOUNT ID Legacy format: serviceAccount: PROJECT ID .svc.id.goog[ NAMESPACE / KUBERNETES SERVICE ACCOUNT ] All GKE Pods in a Kubernetes namespace, regardless of service account or cluster principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/namespace/ NAMESPACE All GKE Pods in a specific cluster principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/kubernetes.cluster/https://container.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /clusters/ CLUSTER NAME Deleted Google Account 1 deleted:user: USER EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:user:alex@example.com?uid=123456789012345678901 Deleted service account 1 deleted:serviceAccount: SA EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:serviceAccount:my-service-account@my-project.iam.gserviceaccount.com?uid=123456789012345678901 Deleted Google group 1 deleted:group: GROUP EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:group:my-group@example.com?uid=123456789012345678901 Deleted single identity in a workforce identity pool 1 deleted:principal://iam.googleapis.com/locations/global/workforcePools/ POOL ID /subject/ SUBJECT ATTRIBUTE VALUE Example: deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value 1 Don't add deleted principals when creating or modifying policies.
- ATTRIBUTE NAME / ATTRIBUTE VALUE All identities in a workload identity pool principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ POOL ID / Agent identity (Preview) principal:// TRUST DOMAIN / AGENT RESOURCE PATH / AGENT ID Example: principal://agents.global.org-123456789012.system.id.goog/resources/aiplatform/projects/9876543210/locations/us-central1/reasoningEngines/my-test-agent Deleted Google Account 2 deleted:principal://goog/subject/ USER EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:principal://goog/subject/alex@example.com?uid=123456789012345678901 Deleted service account 2 deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/ SA EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com?uid=123456789012345678901 Deleted Google group 2 deleted:principalSet://goog/group/ GROUP EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:principalSet://goog/group/my-group@example.com?uid=123456789012345678901 Deleted single identity in a workforce identity pool 2 deleted:principal://iam.googleapis.com/locations/global/workforcePools/ POOL ID /subject/ SUBJECT ATTRIBUTE VALUE Example: deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value 1 Learn how to find your Cloud Identity customer ID .
- ATTRIBUTE NAME / ATTRIBUTE VALUE Example: principalSet://iam.googleapis.com/locations/global/workforcePools/altostrat-contractors/attribute.department/administration All identities in a workforce identity pool principalSet://iam.googleapis.com/locations/global/workforcePools/ POOL ID / Example: principalSet://iam.googleapis.com/locations/global/workforcePools/altostrat-contractors/ Single identity in a workload identity pool principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ POOL ID /subject/ SUBJECT ATTRIBUTE VALUE Workload identity pool group principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ POOL ID /group/ GROUP ID All identities in a workload identity pool with a certain attribute principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ POOL ID /attribute.
- ATTRIBUTE NAME / ATTRIBUTE VALUE Example: principalSet://iam.googleapis.com/locations/global/workforcePools/altostrat-contractors/attribute.department/administration All identities in a workforce identity pool principalSet://iam.googleapis.com/locations/global/workforcePools/ POOL ID / Example: principalSet://iam.googleapis.com/locations/global/workforcePools/altostrat-contractors/ Single identity in a workload identity pool principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ POOL ID /subject/ SUBJECT ATTRIBUTE VALUE Workload identity pool group principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ POOL ID /group/ GROUP ID All identities in a workload identity pool with a certain attribute principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ POOL ID /attribute.

### "IAM overview \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- Source ID: `site-iam-reference`
- Final score: 63
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Log buckets don't have their own allow policies, so to give someone this permission, you can instead grant them the Logs Bucket Writer role ( roles/logging.bucketWriter ) on the project that contains the log bucket.
- However, they have a higher maintenance burden than predefined roles and there's a limit to the number of custom roles that you can have in your project and in your organization.
- Policy inheritance Google Cloud has container resources—such as projects, folders, and organizations—that let you organize your resources in a parent-child hierarchy.
- Allow policies are directly attached to some Google Cloud resources, which are organized hierarchically —for example, projects contain service-specific resources.

