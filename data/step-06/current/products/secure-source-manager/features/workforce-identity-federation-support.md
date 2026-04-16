---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.041Z"
product_name: "Secure Source Manager"
product_slug: "secure-source-manager"
feature_name: "Workforce Identity Federation support"
feature_slug: "workforce-identity-federation-support"
latest_feature_date: "2024-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-source-manager/docs/use-git"
  - "https://docs.cloud.google.com/secure-source-manager/docs/create-instance-federated-identities"
  - "https://docs.cloud.google.com/secure-source-manager/docs/grant-users-instance-access"
  - "https://docs.cloud.google.com/secure-source-manager/docs/add-repository-users"
keywords:
  - "workforce"
  - "identity"
  - "federation"
  - "secure"
  - "source"
  - "manager"
  - "now"
  - "supports"
---

# Workforce Identity Federation support

Product: Secure Source Manager
Coverage: MEDIUM

## Step 02 Summary

Secure Source Manager now supports Workforce Identity Federation.

## Extended Definition

Secure Source Manager now supports Workforce Identity Federation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-source-manager/docs/use-git](https://docs.cloud.google.com/secure-source-manager/docs/use-git)
- [https://docs.cloud.google.com/secure-source-manager/docs/create-instance-federated-identities](https://docs.cloud.google.com/secure-source-manager/docs/create-instance-federated-identities)
- [https://docs.cloud.google.com/secure-source-manager/docs/grant-users-instance-access](https://docs.cloud.google.com/secure-source-manager/docs/grant-users-instance-access)
- [https://docs.cloud.google.com/secure-source-manager/docs/add-repository-users](https://docs.cloud.google.com/secure-source-manager/docs/add-repository-users)

## Supporting Pages

### "Use Git source code management \_|\_ Secure Source Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/use-git](https://docs.cloud.google.com/secure-source-manager/docs/use-git)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up your credentials If you authenticate to Secure Source Manager using a third-party identity provider and Workforce Identity Federation, you don't need to complete this section—instead, you must create a workforce identity pool login configuration .
- Create a workforce identity pool login configuration You don't need to complete this section unless you're using Workforce Identity Federation to authenticate to Secure Source Manager with a third-party identity provider.
- To authenticate with your workforce identity pool credentials to your Secure Source Manager instance using gcloud CLI commands or Git commands, you must create a login configuration with your workforce identity pool.
- Secure Source Manager supports all Git SCM client commands and has built in pull requests and issue tracking.

### "Create a Secure Source Manager instance to use with federated identities\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/create-instance-federated-identities](https://docs.cloud.google.com/secure-source-manager/docs/create-instance-federated-identities)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://securesourcemanager.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content Once the instance is ready, the response will look similar to the following: "name": "projects/my-project/locations/us-central1/operations/operation-123456789012-5ec69948c0f2b-60dd727f-a9b97a2e", "metadata": { "@type": "type.googleapis.com/google.cloud.securesourcemanager.v1.OperationMetadata", "createTime": "2024-10-28T15:37:39.009812863Z", "endTime": "2024-10-28T16:10:58.416640259Z", "target": "projects/my-project/locations/us-central1/instances/my-instance", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.securesourcemanager.v1.Instance", "name": "projects/my-project/locations/us-central1/instances/my-instance", "createTime": "2024-10-28T15:37:39.004550840Z", "updateTime": "2024-10-28T15:37:39.867857246Z", "state": "ACTIVE", "hostConfig": { "html": "my-instance-326202322590.us-central1.sourcemanager.dev", "api": "my-instance-326202322590-api.us-central1.sourcemanager.dev", "gitHttp": "my-instance-326202322590-git.us-central1.sourcemanager.dev", "gitSsh": "my-instance-326202322590-ssh.us-central1.sourcemanager.dev" }, "workforceIdentityFederationConfig": { "enabled": true } } Where the my-instance-098765432109.us-central1.sourcemanager.dev is the instance HTML URL. it's possible for the status check to report completion before the instance is fully operational.
- Terraform The following example creates a Secure Source Manager instance with Workforce Identity Federation enabled: resource "google secure source manager instance" "instance" { instance id = " INSTANCE ID " location = " LOCATION " project = " PROJECT ID " workforce identity federation config { enabled = true } } Check operation status gcloud Before using any of the command data below, make the following replacements: OPERATION NAME : the operation name from your create command response.
- Run the following command: curl \ -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https://securesourcemanager.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /instances?instance id = INSTANCE ID \ -H "Content-Type: application/json" \ -d "{workforce identity federation config: {enabled: true}}" A long-running create instance operation starts.
- For information about limitations to Workforce Identity Federation in Secure Source Manager, see Identity federation: products and limitations .

### "Grant users instance access \_|\_ Secure Source Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/grant-users-instance-access](https://docs.cloud.google.com/secure-source-manager/docs/grant-users-instance-access)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant Workforce Identity Federation users access If you use Workforce Identity Federation to access Secure Source Manager, then principals are represented differently.
- For example, the following command grants the user user@example.com the Instance Accessor role ( roles/securesourcemanager.instanceAccessor ) in the workforce pool my-pool on the instance my-instance in the project my-project in the us-central1 region: gcloud source-manager instances add-iam-policy-binding my-instance \ --project = my-project \ --region = us-central1 \ --member = principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com \ --role = roles/securesourcemanager.instanceAccessor You can grant users or groups within your workforce identity pool based on your Identity provider (IdP) attributes, or use Common Expression Language (CEL) to map your OIDC attributes to custom attributes to define an authorization strategy in your IAM policy.
- This page describes how to grant your users access to your Secure Source Manager instance using Identity and Access Management (IAM).
- For example, the following command grants the trusted-user1@gmail.com user the roles/securesourcemanager.instanceAccessor role on the instance my-instance , in the project my-project in the us-central region. gcloud source-manager instances add-iam-policy-binding INSTANCE ID \ --project = my-project \ --region = us-central1 \ --member = user:trusted-user1@gmail.com \ --role = roles/securesourcemanager.instanceAccessor Grant multiple users access To grant access to multiple users, we recommend creating a Google group that includes all potential users, such as all developers.

### "Grant users repository access \_|\_ Secure Source Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/add-repository-users](https://docs.cloud.google.com/secure-source-manager/docs/add-repository-users)
- Source ID: `site-docs-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're authenticating to Secure Source Manager using a third-party identity provider and Workforce Identity Federation, then principals must be added to your workforce identity pool, and granted at least the Instance Accessor role ( roles/securesourcemanager.instanceAccessor ).
- Required roles To get the permissions that you need to grant users repository-level roles, ask your administrator to grant you the following IAM roles: Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor ) on the Secure Source Manager instance Secure Source Manager Repo Admin ( roles/securesourcemanager.repoAdmin ) on the repository For more information about granting roles, see Manage access to projects, folders, and organizations .
- Grant users repository-level roles Users, groups, and service accounts must be granted the Instance Accessor role ( roles/securesourcemanager.instanceAccessor ) or Instance Repository Creator role ( roles.securesourcemanager.instanceRepositoryCreator ) before they can be granted repository roles.
- To grant users or service accounts repository-level roles using the web interface: To access the Secure Source Manager instance through its web interface, copy the following URL into your browser address bar.

