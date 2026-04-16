---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.038Z"
product_name: "Secure Source Manager"
product_slug: "secure-source-manager"
feature_name: "Developer Connect integration"
feature_slug: "developer-connect-integration"
latest_feature_date: "2026-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-source-manager/docs/overview"
  - "https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect"
  - "https://docs.cloud.google.com/secure-source-manager/docs/use-git"
  - "https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code"
keywords:
  - "developer"
  - "connect"
  - "integration"
  - "secure"
  - "source"
  - "manager"
  - "can"
  - "now"
---

# Developer Connect integration

Product: Secure Source Manager
Coverage: MEDIUM

## Step 02 Summary

Secure Source Manager can now be connected through Developer Connect.

## Extended Definition

Secure Source Manager can now be connected through Developer Connect.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-source-manager/docs/overview](https://docs.cloud.google.com/secure-source-manager/docs/overview)
- [https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect](https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect)
- [https://docs.cloud.google.com/secure-source-manager/docs/use-git](https://docs.cloud.google.com/secure-source-manager/docs/use-git)
- [https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code](https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code)

## Supporting Pages

### Secure Source Manager overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/overview](https://docs.cloud.google.com/secure-source-manager/docs/overview)
- Source ID: `site-docs-root`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Developer Connect integration You can connect Secure Source Manager to Developer Connect to unify repository connections across Google Cloud services.
- Connect to other services You can invoke builds automatically using the following methods: Create a Secure Source Manager triggers file to connect to Cloud Build.
- For information on connecting Secure Source Manager to Developer Connect, see Configure Developer Connect for Secure Source Manager .
- Connecting to Developer Connect lets you use its Git proxy feature for secure access to your Secure Source Manager repositories.

### "Connect Cloud Build to a Private Service Connect instance \_|\_ Secure Source\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect](https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect)
- Source ID: `site-docs-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Alternatively, you can use Secure Source Manager with Developer Connect to do this.
- Test access to Secure Source Manager from Cloud Build To confirm everything is working correctly, you can use the following build config file to test connectivity and pull source code from Secure Source Manager.
- You can connect Cloud Build to a Secure Source Manager Private Service Connect instance using Cloud Build private pools .
- Enable the APIs Required roles To get the permissions that you need to connect Cloud Build to a Private Service Connect Secure Source Manager instance, ask your administrator to grant you the Access Context Manager Admin role ( roles/accesscontextmanager.policyAdmin ) IAM role on the organization.

### "Use Git source code management \_|\_ Secure Source Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/use-git](https://docs.cloud.google.com/secure-source-manager/docs/use-git)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clone with Developer Connect You can clone repositories using the Developer Connect Git proxy if you have linked your Secure Source Manager repository in Developer Connect.
- Before you begin Follow the instructions to create a connection to a Secure Source Manager repository in Developer Connect.
- Note: Pushing to Secure Source Manager repositories using the Developer Connect Git proxy URI is not supported.
- Push an existing repository to Secure Source Manager You must create a Secure Source Manager repository to act as a remote before you can push to it.

### "Configure CI/CD to store terraform config-as-code \_|\_ Secure Source Manager\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code](https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code)
- Source ID: `site-docs-reference`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connect to Cloud Build To trigger Cloud Build on a push to any branch, set up a Secure Source Manager webhook.
- You can find the URL at the top of your repository page in the Secure Source Manager web interface.
- Connect Cloud Build to your Secure Source Manager repository.
- To re-authenticate after the initial credential setup, run the following gcloud CLI command: gcloud auth login Clone the solutions-terraform-cloudbuild-gitops repository to your local shell or working environment: git clone https://github.com/GoogleCloudPlatform/solutions-terraform-cloudbuild-gitops.git Add your Secure Source Manager repository as an upstream. git remote add google HTTPS REPO URL Where HTTPS REP URL is the HTTPS URL for your Secure Source Manager repository.

