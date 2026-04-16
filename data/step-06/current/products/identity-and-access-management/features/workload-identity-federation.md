---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.425Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Workload Identity Federation"
feature_slug: "workload-identity-federation"
latest_feature_date: "2021-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation"
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines"
  - "https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity"
keywords:
  - "workload"
  - "identity"
  - "federation"
  - "can"
  - "now"
  - "be"
  - "managed"
  - "in"
---

# Workload Identity Federation

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Workload Identity Federation can now be managed in the Google Cloud Console; Workload Identity Federation lets on-premises and multi-cloud workloads access Google Cloud resources.

## Extended Definition

Workload Identity Federation can now be managed in the Google Cloud Console; Workload Identity Federation lets on-premises and multi-cloud workloads access Google Cloud resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)
- [https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines](https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines)
- [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)
- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity)

## Supporting Pages

### "Best practices for using Workload Identity Federation \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)
- Source ID: `site-docs-root-2`
- Final score: 387
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protecting against privilege escalation threats To apply the principle of least privilege when using Workload Identity Federation, you must: limit the number of external identities that can impersonate a service account limit the resources that a service account can access An overly permissive configuration can lead to a situation where a bad actor can use an external identity to escalate their privileges and access resources they shouldn't have access to.
- When you use these identity providers, it's insufficient to let Workload Identity Federation check a token's issuer URL to ensure that it comes from a trusted source and that its claims can be trusted.
- Use organizational policy constraints to disable the creation of workload identity pool providers in other projects Users with the permission to create workload identity pool providers can create workload identity pools and providers that might be redundant to the ones you manage in a dedicated project.
- If you have an identity provider such as Active Directory Federation Services (AD FS) in your environment that supports Integrated Windows Authentication , you can use these Kerberos credentials to authenticate to the identity provider and obtain an OAuth access token that uses the JWT format.

### "Best practices for using service accounts in pipelines \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines](https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines)
- Source ID: `site-docs-root-2`
- Final score: 345
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ways to prevent logs from revealing credentials include the following: Avoid passing access tokens or other credentials as command line arguments Avoid storing credentials in environment variables Configure your CI/CD system to automatically detect and mask tokens and other credentials if possible What's next Learn more about Workload Identity Federation and best practices for using Workload Identity Federation .
- You can let deployment pipelines use these tokens to impersonate a service account by using Workload Identity Federation .
- To perform the deployment, the deployment pipeline typically can't use your identity because: The source code and its metadata might not indicate that you were the author, or the author information isn't tamper-proof (as in the case of unsigned Git commits) The identity you used to submit source code might be different from your identity for Google Cloud, and the two identities can't be mapped Most deployment pipelines therefore perform deployments under their own identity by using a service account.
- Use Workload Identity Federation whenever possible Some CI/CD systems like GitHub Actions or GitLab let deployment pipelines obtain OpenID Connect-compliant tokens that assert the identity of the deployment pipeline.

### "Integrate Cloud Run and Workload Identity Federation \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)
- Source ID: `site-docs-root-2`
- Final score: 343
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you complete this tutorial, you can see how Workload Identity Federation lets you authenticate your Jenkins application with Google Cloud by using OpenID Connect authentication.
- This tutorial describes how to use Workload Identity Federation to authenticate workloads that run outside of Google Cloud so that they can access microservices hosted by Cloud Run.
- Create a role binding for the user to impersonate the service account: gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT \ --role roles/iam.workloadIdentityUser \ --member "principal://iam.googleapis.com/projects/ $PROJECT NUMBER /locations/global/workloadIdentityPools/cloudrun-oidc-pool/subject/ USER EMAIL Replace the following: SERVICE ACCOUNT with the email address of the service account that you created in Configure your Google Cloud environment .
- Your output file should look like the following: { "type" : "external account" , "audience" : "//iam.google.apis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/cloudrun-oidc-pool/subject/ USER EMAIL " , "subject token type" : "urn:ietf:params:oauth:token-type:jwt" , "token url" : "https://sts.googleapis.com/v1/token" , "credential source" : { "file" "token.txt" } } PROJECT NUMBER is your project number.

### "Example logs for Workload Identity Federation \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity)
- Source ID: `site-docs-root-2`
- Final score: 331
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Workload Identity Federation, the pertinent log entry looks similar to the following: "keyInfo": [ { "certificateType": "trust anchor" "timeUntilExpiration": 3333405600s "fingerprintSha256": "e33f612a0e426692f29db2c7b17b9e3810ce13f09ad117c67e7227a84fd25ea5" "use": "verify" } This output includes the following values: certificateType : the type of certificate involved in the client certificate verification, which can be either trust anchor or intermediate ca timeUntilExpiration : the remaining time in seconds until certificate expiration when it's used in the certificate chain verification fingerprintSha256 : the hexadecimal representation of the SHA-256 hash of the X.509 certificate Logs for creating short-lived credentials for a service account After you exchange the IdP token for a federated token, you can use the federated token to create short-lived credentials for a service account.
- In this example, the request was authenticated with federated credentials, and the short-lived credentials were created for the service account my-service-account@my-project.iam.gserviceaccount.com : { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "principal://iam.googleapis.com/projects/1234567890123/locations/global/workloadIdentityPools/aws-pool/subject/012345678901" }, "methodName" : "GenerateAccessToken" , "request" : { "@type" : "type.googleapis.com/google.iam.credentials.v1.GenerateAccessTokenRequest" , "name" : "projects/-/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com" }, "resourceName" : "projects/-/serviceAccounts/123456789012345678901" }, "resource" : { "labels" : { "email id" : "my-service-account@my-project.iam.gserviceaccount.com" , "project id" : "my-project" , "unique id" : "123456789012345678901" }, "type" : "service account" } } Logs for authenticating with credentials for the impersonated service account After you create short-lived credentials for a service account, you can use the credentials to impersonate the service account when you call Google Cloud APIs.
- For Workload Identity Federation, the pertinent log entry looks similar to the following: "keyInfo": [ { "use": "verify" "fingerprint": "3C:B2:47:F8:A5:9A:8A:52:BD:1C:BC:96:B5:45:C1:8D:A7:F1:73:2D" }, { "use": "decrypt" "resourceName": "//iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ WORKLOAD POOL NAME /providers/ PROVIDER NAME /keys/ KEY NAME " } ] This output includes the following values: fingerprint : the hexadecimal representation of the SHA-256 hash of the X.509 certificate that was used to verify the signature on the SAML credential.
- With Workload Identity Federation, you can allow an on-premises or multicloud workload to access Google Cloud resources, without using a service account key.

