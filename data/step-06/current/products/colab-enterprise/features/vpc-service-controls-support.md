---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.778Z"
product_name: "Colab Enterprise"
product_slug: "colab-enterprise"
feature_name: "VPC Service Controls support"
feature_slug: "vpc-service-controls-support"
latest_feature_date: "2024-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/colab/docs/gemini-in-colab/set-up-gemini"
  - "https://docs.cloud.google.com/colab/docs/cmek"
  - "https://docs.cloud.google.com/colab/docs/create-runtime-template"
  - "https://docs.cloud.google.com/colab/docs/gemini-in-colab/turn-off-gemini"
keywords:
  - "vpc"
  - "controls"
  - "colab"
  - "enterprise"
  - "supports"
  - "for"
  - "perimeter"
  - "protection"
---

# VPC Service Controls support

Product: Colab Enterprise
Coverage: MEDIUM

## Step 02 Summary

Colab Enterprise supports VPC Service Controls for service perimeter protection.

## Extended Definition

Colab Enterprise supports VPC Service Controls for service perimeter protection.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/colab/docs/gemini-in-colab/set-up-gemini](https://docs.cloud.google.com/colab/docs/gemini-in-colab/set-up-gemini)
- [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek)
- [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- [https://docs.cloud.google.com/colab/docs/gemini-in-colab/turn-off-gemini](https://docs.cloud.google.com/colab/docs/gemini-in-colab/turn-off-gemini)

## Supporting Pages

### Set up Gemini in Colab Enterprise for a project \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/gemini-in-colab/set-up-gemini](https://docs.cloud.google.com/colab/docs/gemini-in-colab/set-up-gemini)
- Source ID: `site-iam-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Activate Gemini in Colab Enterprise in a Google Cloud project To activate Gemini in Colab Enterprise in a Google Cloud project, an administrator needs to enable the Gemini for Google Cloud API and grant the Gemini for Google Cloud User role to users.
- Set up Gemini in Colab Enterprise for a project Before you can use Gemini in Colab Enterprise , your team needs to activate Gemini in Colab Enterprise in a Google Cloud project , as described in this document.
- Go to IAM & Admin In the Principal column, find a principal for which you want to give access to Gemini in Colab Enterprise, and then click edit Edit principal in that row.
- Any custom roles that you create need the following permissions to access Gemini: cloudaicompanion.instances.generateCode cloudaicompanion.instances.completeCode cloudaicompanion.entitlements.get Billing Gemini in Colab Enterprise is currently available to try at no additional cost.

### "Use customer-managed encryption keys (CMEK) \_|\_ Colab Enterprise \_|\_\

- URL: [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Configure CMEK for your runtimes The following sections describe how to create a key ring and key in Cloud Key Management Service, grant Colab Enterprise encrypter and decrypter permissions for your key, and create a runtime template configures to use CMEK.
- Before you begin This guide assumes that you use two separate Google Cloud projects to configure CMEK for Colab Enterprise runtimes: A project for managing your encryption key (referred to as the "Cloud KMS project").
- Supported keys Colab Enterprise supports the following types of CMEK keys: Cloud KMS software keys Cloud Hardware Security Module (HSM) keys Key availability varies by key type and region.
- Restrictions and limitations Colab Enterprise supports CMEK with the following restrictions and limitations: The default quota in Vertex AI is one encryption key per project and region.

### Create a runtime template in Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Use Colab Enterprise in a Shared VPC network When you create a runtime template or runtime in a service project of a Shared VPC network, you must grant the Vertex AI service agent ( service- SERVICE PROJECT NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com ) specific permissions on the host project.
- The following sample uses the google colab runtime template Terraform resource to create a Colab Enterprise runtime template. resource "google compute network" "my network" { name = "{{index $.Vars "network name"}}" auto create subnetworks = false } resource "google compute subnetwork" "my subnetwork" { name = "{{index $.Vars "network name"}}" network = google compute network.my network.id region = "us-central1" ip cidr range = "10.0.1.0/24" } resource "google colab runtime template" "{{$.PrimaryResourceId}}" { name = "{{index $.Vars "runtime template name"}}" display name = "Runtime template full" location = "us-central1" description = "Full runtime template" machine spec { machine type = "n1-standard-2" accelerator type = "NVIDIA TESLA T4" accelerator count = "1" } data persistent disk spec { disk type = "pd-standard" disk size gb = 200 } network spec { enable internet access = true network = google compute network.my network.id subnetwork = google compute subnetwork.my subnetwork.id } labels = { k = "val" } idle shutdown config { idle timeout = "3600s" } euc config { euc disabled = false } shielded vm config { enable secure boot = false } network tags = [ "abc", "def" ] encryption spec { kms key name = "{{index $.Vars "key name"}}" } software config { env { name = "TEST" value = 1 } post startup script config { post startup script = "echo 'hello world'" post startup script url = "gs://colab-enterprise-pss-secure/secure pss.sh" post startup script behavior = "RUN ONCE" } colab image { release name = "py312" } } } Granting access to the runtime template After you create a runtime template, you must grant access to it for a principal to be able to use it.
- Schedule notebook runs in a Shared VPC network If you want to use the notebook scheduler with a runtime template or runtime in a service project of a Shared VPC network, you must grant the Colab Enterprise service agent ( service- SERVICE PROJECT NUMBER @gcp-sa-vertex-nb.iam.gserviceaccount.com ) specific permissions on the host project.
- To ensure that the Colab Enterprise service agent has the necessary permissions to use scheduled notebooks within a Shared VPC network, ask your administrator to grant the Compute Network User ( roles/compute.networkUser ) IAM role to the Colab Enterprise service agent on the host project.

### Turn off Gemini in Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/gemini-in-colab/turn-off-gemini](https://docs.cloud.google.com/colab/docs/gemini-in-colab/turn-off-gemini)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to IAM & Admin In the Principal column, find a principal for which you want to remove access to Gemini in Colab Enterprise, and then click edit Edit principal in that row.
- Before you begin To update a Gemini in Colab Enterprise subscription, make sure you have the billing.subscriptions.update Identity and Access Management (IAM) permission.
- Turn off Gemini in Colab Enterprise To turn off Gemini in Colab Enterprise, you can remove access for specific users or turn off features within Colab Enterprise .
- Remove all applicable user Identity and Access Management roles or permissions for Gemini in Colab Enterprise: Go to the IAM & Admin page.

