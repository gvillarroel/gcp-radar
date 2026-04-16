---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.042Z"
product_name: "Secure Source Manager"
product_slug: "secure-source-manager"
feature_name: "Cloud Build integration"
feature_slug: "cloud-build-integration"
latest_feature_date: "2024-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-source-manager/docs/overview"
  - "https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code"
  - "https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect"
  - "https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build"
keywords:
  - "build"
  - "integration"
  - "secure"
  - "source"
  - "manager"
  - "repositories"
  - "can"
  - "now"
---

# Cloud Build integration

Product: Secure Source Manager
Coverage: MEDIUM

## Step 02 Summary

Secure Source Manager repositories can now define Cloud Build configurations and build triggers for automatic builds.

## Extended Definition

Secure Source Manager repositories can now define Cloud Build configurations and build triggers for automatic builds.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-source-manager/docs/overview](https://docs.cloud.google.com/secure-source-manager/docs/overview)
- [https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code](https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code)
- [https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect](https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect)
- [https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build](https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build)

## Supporting Pages

### Secure Source Manager overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/overview](https://docs.cloud.google.com/secure-source-manager/docs/overview)
- Source ID: `site-docs-root`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Notifications Secure Source Manager can send you notifications for events in pull requests and issues in which you're participating or for repositories you're watching.
- Connect to other services You can invoke builds automatically using the following methods: Create a Secure Source Manager triggers file to connect to Cloud Build.
- Developer Connect integration You can connect Secure Source Manager to Developer Connect to unify repository connections across Google Cloud services.
- Security compliance Secure Source Manager is in compliance with the following certifications: FedRAMP High compliant HIPAA compliant Configure a private Secure Source Manager instance in a VPC Service Controls perimeter You can use Secure Source Manager in a VPC Service Controls perimeter in order to guard against data exfiltration.

### "Configure CI/CD to store terraform config-as-code \_|\_ Secure Source Manager\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code](https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code)
- Source ID: `site-docs-reference`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To re-authenticate after the initial credential setup, run the following gcloud CLI command: gcloud auth login Clone the solutions-terraform-cloudbuild-gitops repository to your local shell or working environment: git clone https://github.com/GoogleCloudPlatform/solutions-terraform-cloudbuild-gitops.git Add your Secure Source Manager repository as an upstream. git remote add google HTTPS REPO URL Where HTTPS REP URL is the HTTPS URL for your Secure Source Manager repository.
- Replace PROJECT ID with your project ID. gcloud config set project PROJECT ID Enable the required APIs: gcloud services enable cloudbuild.googleapis.com compute.googleapis.com securesourcemanager.googleapis.com This step might take a few minutes to finish.
- Modify the build configuration file To make the sample build configuration file work with Secure Source Manager, you need to make the following edits: Add a step to clone your repository.
- Set up a webhook in Secure Source Manager Create a webhook to trigger builds on pushes to your dev or prod branches.

### "Connect Cloud Build to a Private Service Connect instance \_|\_ Secure Source\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect](https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To grant the service account permissions to access the Secure Source Manager instance, run the following command. gcloud projects add-iam-policy-binding INSTANCE PROJECT ID \ --member = serviceAccount: SA EMAIL \ --role = roles/securesourcemanager.instanceAccessor \ --condition = None To grant the service account permissions to read from Secure Source Manager repositories, run the following command. gcloud projects add-iam-policy-binding INSTANCE PROJECT ID \ --member = serviceAccount: SA EMAIL \ --role = roles/securesourcemanager.repoReader \ --condition = None Set up build logs When you specify your own service account for builds, you must store your build logs either in Cloud Logging or in a user-created Cloud Storage bucket.
- Test access to Secure Source Manager from Cloud Build To confirm everything is working correctly, you can use the following build config file to test connectivity and pull source code from Secure Source Manager.
- You can connect Cloud Build to a Secure Source Manager Private Service Connect instance using Cloud Build private pools .
- Configure your Virtual Private Cloud (VPC) network Reserve an IP range that you want to use to peer the Secure Source Manager VPC with the Cloud Build private pool. gcloud compute addresses create CB PEER RANGE \ --global \ --purpose = VPC PEERING \ --prefix-length = 24 \ --description = "IP range for peering with Cloud Build private pool" \ --network = NETWORK \ --project = INSTANCE PROJECT ID Replace the following: CB PEER RANGE : with the name of the address to create.

### Connect to Cloud Build \_|\_ Secure Source Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build](https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build)
- Source ID: `site-docs-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to connect a Secure Source Manager repository to Cloud Build, ask your administrator to grant you the following IAM roles: Secure Source Manager Repository Writer ( roles/securesourcemanager.repoWriter ) on your repository Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor ) on the Secure Source Manager instance For more information about granting roles, see Manage access to projects, folders, and organizations .
- Required service account roles To create builds and get build status from Cloud Build, grant the Secure Source Manager service agent ( service- PROJECT-NUMBER @gcp-sa-sourcemanager.iam.gserviceaccount.com ) the following Identity and Access Management (IAM) roles: Cloud Build Editor role ( roles/cloudbuild.builds.editor ) on the project where you enabled Cloud Build.
- To let Cloud Build read from your Secure Source Manager repository, grant the Cloud Build service account the following IAM roles: Secure Source Manager Instance Accessor role ( roles/securesourcemanager.instanceAccessor ) on the Secure Source Manager instance.
- If the project where you enabled Cloud Build is different than the project where Secure Source Manager is enabled, grant the Service Usage Consumer role ( roles/serviceusage.serviceUsageConsumer ) on the Cloud Build project.

