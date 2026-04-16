---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.436Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Service account attachment across projects"
feature_slug: "service-account-attachment-across-projects"
latest_feature_date: "2020-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/best-practices-service-accounts"
  - "https://docs.cloud.google.com/iam/docs/attach-service-accounts"
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines"
  - "https://docs.cloud.google.com/iam/docs/service-account-overview"
keywords:
  - "account"
  - "attachment"
  - "across"
  - "projects"
  - "accounts"
  - "can"
  - "be"
  - "attached"
---

# Service account attachment across projects

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Service accounts can be attached to resources in other projects.

## Extended Definition

Service accounts can be attached to resources in other projects.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts)
- [https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines](https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines)
- [https://docs.cloud.google.com/iam/docs/service-account-overview](https://docs.cloud.google.com/iam/docs/service-account-overview)

## Supporting Pages

### "Best practices for using service accounts securely \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- Source ID: `site-docs-root-2`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Linux instances, you can enforce that SSH access is more restrictive than access to the attached service account by using OS Login: To connect to a VM instance that has OS Login enabled, a user must not only be allowed to use OS Login , but must also have the iam.serviceAccounts.actAs permission on the attached service account.
- For service accounts that are used for multiple purposes or shared across multiple resources, it can be more difficult to identify whether the service account is still used.
- Use Google's tools to understand service account usage , which can help you monitor usage and prevent service accounts from being shared across multiple applications.
- Using resources that have an attached service account: If a user has permission to access and modify CI/CD pipelines, VM instances, or other automation systems that have attached service accounts, then they might be able to perform actions using those resources' attached service accounts.

### "Attach service accounts to resources \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable service accounts to be attached across projects If you want to let users attach service accounts in one project to resources in another project, you must update the organization policies for the project that contains the service accounts.
- Disable service accounts from being attached across projects If you previously enabled service accounts to be attached across projects , we strongly discourage you from disabling this feature, especially in production environments.
- Before you attach a service account to a resource in another project, do the following: In the project where the service account is located, follow the steps on this page to enable service accounts to be attached across projects .
- Caution: If you disable service accounts from being attached across projects, your Google Cloud resources might not work correctly.

### "Best practices for using service accounts in pipelines \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines](https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Use dedicated service accounts per deployment pipeline When you let multiple deployment pipelines use the same service account, IAM can't differentiate between the pipelines.
- You can limit a deployment pipeline's impact on the integrity of your resources by doing the following: Not granting deployment pipelines access to allow policies, deny policies, and other security controls, and restricting their access to other resources Granting access to selected security controls only, such as the allow policies and deny policies of a specific resource or project, while not granting access to broader controls that affect multiple resources or projects If your deployment pipeline, its components, and underlying infrastructure can't meet the integrity demands of certain security controls, it's best to avoid letting deployment pipelines manage these security controls.
- To perform the deployment, the deployment pipeline typically can't use your identity because: The source code and its metadata might not indicate that you were the author, or the author information isn't tamper-proof (as in the case of unsigned Git commits) The identity you used to submit source code might be different from your identity for Google Cloud, and the two identities can't be mapped Most deployment pipelines therefore perform deployments under their own identity by using a service account.
- You can impose restrictions on the sources from where your Google Cloud resources can be accessed by placing your projects in a VPC service perimeter and using ingress rules : If your deployment pipeline runs on Google Cloud, you can configure an ingress rule to only allow access from the project that contains your CI/CD system.

### "Service accounts overview \_|\_ Identity and Access Management (IAM) \_\

- URL: [https://docs.cloud.google.com/iam/docs/service-account-overview](https://docs.cloud.google.com/iam/docs/service-account-overview)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, it can be difficult to keep track of your service accounts when they are spread across many projects.
- Before you enforce this constraint, consider the following limitations: If you enforce this constraint in a project, or in all projects within an organization, then some Google Cloud services cannot create default service accounts .
- This approach puts all of the service accounts for your organization in a small number of projects, which can make the service accounts easier to manage.
- When managing access for service accounts, use the following principal identifiers to refer to the service accounts: Principal type Principal identifier An individual service account serviceAccount: SA EMAIL ADDRESS Example: serviceAccount:my-service-account@my-project.iam.gserviceaccount.com All service accounts in a project principalSet://cloudresourcemanager.googleapis.com/ projects/ PROJECT NUMBER / type/ ServiceAccount Example: principalSet://cloudresourcemanager.googleapis.com/ projects/ 123456789012/ type/ ServiceAccount All service accounts in all projects in a folder principalSet://cloudresourcemanager.googleapis.com/ folders/ FOLDER NUMBER / type/ ServiceAccount Example: principalSet://cloudresourcemanager.googleapis.com/ folders/ 123456789012/ type/ ServiceAccount Note : Moving projects into or out of a folder changes the service accounts included in this principal set.

