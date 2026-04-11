---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:33.573Z"
product_name: "Access Transparency"
product_slug: "access-transparency"
feature_name: "Model Armor"
feature_slug: "model-armor"
latest_feature_date: "2025-01-24"
deprecation_date: ""
coverage_status: "NONE"
source_links:
  - "https://docs.cloud.google.com/iam/docs/overview"
  - "https://docs.cloud.google.com/iam/docs/principal-identifiers"
keywords:
  - "Model Armor protection in Access Transparency"
  - "Google Cloud Access Transparency model armor"
  - "Access Transparency support for Model Armor"
  - "Access Transparency for Model Armor"
  - "Model Armor in Access Transparency"
  - "Model Armor"
  - "MA"
---

# Model Armor

Product: Access Transparency
Coverage: NONE

## Step 02 Summary

Access Transparency now supports Model Armor in GA.

## Extended Definition

The provided excerpts do not contain any information confirming a feature called “Model Armor” in Access Transparency, so this feature’s behavior or capabilities cannot be defined from these pages alone. The cited docs only describe IAM overview concepts (roles, permissions, maintenance and role usage) and principal identifier formats for IAM identities.

## Evidence Summary

These pages provide IAM role/permission context and identity/principal identifier details, but they do not mention Access Transparency or Model Armor.

## Source Links

- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- [https://docs.cloud.google.com/iam/docs/principal-identifiers](https://docs.cloud.google.com/iam/docs/principal-identifiers)

## Supporting Pages

### "IAM overview \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- Source ID: `site-iam-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- For example, if you want to let your security administrator manage allow policies for all resources in your organization, then you could grant them the Security Admin role ( roles/iam.securityAdmin ) on the organization.
- However, they have a higher maintenance burden than predefined roles and there's a limit to the number of custom roles that you can have in your project and in your organization.
- Often, permissions correspond one-to-one with REST API methods—for example, the resourcemanager.projects.list permission lets you list Resource Manager projects.

### "Principal identifiers \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/principal-identifiers](https://docs.cloud.google.com/iam/docs/principal-identifiers)
- Source ID: `site-iam-reference`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- ATTRIBUTE NAME / ATTRIBUTE VALUE All identities in a workload identity pool principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ POOL ID / Agent identity (Preview) principal:// TRUST DOMAIN / AGENT UNIQUE IDENTIFIER Example: principal://agents.global.org-123456789012.system.id.goog/resources/aiplatform/projects/9876543210/locations/us-central1/reasoningEngines/my-test-agent All agent identities in a trust domain (Preview) principalSet:// TRUST DOMAIN / Example: principalSet://agents.global.org-123456789012.system.id.goog/ All GKE Pods that use a specific Kubernetes service account By service account name: principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/subject/ns/ NAMESPACE /sa/ KUBERNETES SERVICE ACCOUNT By service account ID: principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/kubernetes.serviceaccount.uid/ SERVICEACCOUNT ID Legacy format: serviceAccount: PROJECT ID .svc.id.goog[ NAMESPACE / KUBERNETES SERVICE ACCOUNT ] All GKE Pods in a Kubernetes namespace, regardless of service account or cluster principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/namespace/ NAMESPACE All GKE Pods in a specific cluster principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/kubernetes.cluster/https://container.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /clusters/ CLUSTER NAME Deleted Google Account 1 deleted:user: USER EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:user:alex@example.com?uid=123456789012345678901 Deleted service account 1 deleted:serviceAccount: SA EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:serviceAccount:my-service-account@my-project.iam.gserviceaccount.com?uid=123456789012345678901 Deleted Google group 1 deleted:group: GROUP EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:group:my-group@example.com?uid=123456789012345678901 Deleted single identity in a workforce identity pool 1 deleted:principal://iam.googleapis.com/locations/global/workforcePools/ POOL ID /subject/ SUBJECT ATTRIBUTE VALUE Example: deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value 1 Don't add deleted principals when creating or modifying policies.
- ATTRIBUTE NAME / ATTRIBUTE VALUE All identities in a workload identity pool principalSet://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ POOL ID / Agent identity (Preview) principal:// TRUST DOMAIN / AGENT RESOURCE PATH / AGENT ID Example: principal://agents.global.org-123456789012.system.id.goog/resources/aiplatform/projects/9876543210/locations/us-central1/reasoningEngines/my-test-agent Deleted Google Account 2 deleted:principal://goog/subject/ USER EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:principal://goog/subject/alex@example.com?uid=123456789012345678901 Deleted service account 2 deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/ SA EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com?uid=123456789012345678901 Deleted Google group 2 deleted:principalSet://goog/group/ GROUP EMAIL ADDRESS ?uid= UNIQUE ID Example: deleted:principalSet://goog/group/my-group@example.com?uid=123456789012345678901 Deleted single identity in a workforce identity pool 2 deleted:principal://iam.googleapis.com/locations/global/workforcePools/ POOL ID /subject/ SUBJECT ATTRIBUTE VALUE Example: deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value 1 Learn how to find your Cloud Identity customer ID .
- Google group principalSet://goog/group/ GROUP EMAIL ADDRESS Example: principalSet://goog/group/my-group@example.com All principals principalSet://goog/public:all All principals in a Cloud Identity account (domain) principalSet://goog/cloudIdentityCustomerId/ CLOUD IDENTITY CUSTOMER ID 1 Example: principalSet://goog/cloudIdentityCustomerId/C01Abc35 Single identity in a workforce identity pool principal://iam.googleapis.com/locations/global/workforcePools/ POOL ID /subject/ SUBJECT ATTRIBUTE VALUE Example: principal://iam.googleapis.com/locations/global/workforcePools/altostrat-contractors/subject/raha@altostrat.com All workforce identities in a group principalSet://iam.googleapis.com/locations/global/workforcePools/ POOL ID /group/ GROUP ID Example using a group email: principalSet://iam.googleapis.com/locations/global/workforcePools/altostrat-contractors/group/administrators-group@altostrat.com Example using a group UUID: principalSet://iam.googleapis.com/locations/global/workforcePools/altostrat-contractors/group/abcdefgh-0123-0123-abcdef All workforce identities with a specific attribute value principalSet://iam.googleapis.com/locations/global/workforcePools/ POOL ID /attribute.
- Principal type Identifier Workforce identity pool //iam.googleapis.com/locations/global/workforcePools/ WORKFORCE POOL ID Example: //iam.googleapis.com/locations/global/workforcePools/example-workforce-pool Workload identity pool //iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ WORKLOAD POOL ID Example: //iam.googleapis.com/projects/123456789012/locations/global/workloadIdentityPools/example-workload-pool Google Workspace domain //iam.googleapis.com/locations/global/workspace/ CUSTOMER ID 1 Example: //iam.googleapis.com/locations/global/workspace/C01Abc35 Project's principal set //cloudresourcemanager.googleapis.com/projects/ PROJECT ID Example: //cloudresourcemanager.googleapis.com/projects/example-project Folder's principal set //cloudresourcemanager.googleapis.com/folders/ FOLDER ID Example: //cloudresourcemanager.googleapis.com/folders/0123456789012 Organization's principal set //cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION ID Example: //cloudresourcemanager.googleapis.com/organizations/0123456789012 1 Learn how to find your Cloud Identity customer ID .

