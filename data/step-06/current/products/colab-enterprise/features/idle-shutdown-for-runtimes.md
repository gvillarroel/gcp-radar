---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.778Z"
product_name: "Colab Enterprise"
product_slug: "colab-enterprise"
feature_name: "Idle shutdown for runtimes"
feature_slug: "idle-shutdown-for-runtimes"
latest_feature_date: "2023-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/colab/docs/idle-shutdown"
  - "https://docs.cloud.google.com/colab/docs/runtimes"
  - "https://docs.cloud.google.com/colab/docs/create-runtime-template"
  - "https://docs.cloud.google.com/colab/docs/introduction"
keywords:
  - "idle"
  - "shutdown"
  - "for"
  - "runtimes"
  - "colab"
  - "enterprise"
  - "can"
  - "automatically"
---

# Idle shutdown for runtimes

Product: Colab Enterprise
Coverage: MEDIUM

## Step 02 Summary

Colab Enterprise can automatically shut down idle runtimes.

## Extended Definition

Colab Enterprise can automatically shut down idle runtimes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown)
- [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
- [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction)

## Supporting Pages

### Idle shutdown \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown)
- Source ID: `site-iam-reference`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overview To help manage costs, Colab Enterprise runtimes shut down after being idle for a specific time period by default.
- Idle shutdown Colab Enterprise runtimes shut down after 180 minutes of inactivity by default.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates create --display-name = DISPLAY NAME \ --idle-shutdown-timeout = INACTIVITY DURATION \ --project = PROJECT ID \ --region = REGION Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates create --display-name = DISPLAY NAME --idle-shutdown-timeout = INACTIVITY DURATION --project = PROJECT ID ` --region = REGION Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates create --display-name = DISPLAY NAME ^ --idle-shutdown-timeout = INACTIVITY DURATION ^ --project = PROJECT ID ^ --region = REGION For more information about the command for creating a runtime template from the command line, see the gcloud CLI documentation .
- Console To create a runtime template with specific idle shutdown settings: In the Google Cloud console, go to the Colab Enterprise Runtime templates page.

### "Runtimes and runtime templates \_|\_ Colab Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Idle shutdown Enabled, set to 180 minutes Enabled, set to 180 minutes Network Your project's default Virtual Private Cloud network Your project's default Virtual Private Cloud network Public internet access Enabled Enabled End user credential authentication Enabled Enabled Auto deletion Automatic deletion 18 hours after creation Automatic deletion 18 hours after creation Note: When your runtime is deleted, Colab Enterprise doesn't preserve changes that you've made to your runtime's files.
- The Python version of existing runtimes doesn't automatically change, even when a new Python version is available in Colab Enterprise.
- Workflow You can create a Colab Enterprise notebook and run code in it without needing to understand runtimes.
- Runtimes and runtime templates This page describes runtimes and runtime templates for Colab Enterprise.

### Create a runtime template in Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following sample uses the google colab runtime template Terraform resource to create a Colab Enterprise runtime template. resource "google compute network" "my network" { name = "{{index $.Vars "network name"}}" auto create subnetworks = false } resource "google compute subnetwork" "my subnetwork" { name = "{{index $.Vars "network name"}}" network = google compute network.my network.id region = "us-central1" ip cidr range = "10.0.1.0/24" } resource "google colab runtime template" "{{$.PrimaryResourceId}}" { name = "{{index $.Vars "runtime template name"}}" display name = "Runtime template full" location = "us-central1" description = "Full runtime template" machine spec { machine type = "n1-standard-2" accelerator type = "NVIDIA TESLA T4" accelerator count = "1" } data persistent disk spec { disk type = "pd-standard" disk size gb = 200 } network spec { enable internet access = true network = google compute network.my network.id subnetwork = google compute subnetwork.my subnetwork.id } labels = { k = "val" } idle shutdown config { idle timeout = "3600s" } euc config { euc disabled = false } shielded vm config { enable secure boot = false } network tags = [ "abc", "def" ] encryption spec { kms key name = "{{index $.Vars "key name"}}" } software config { env { name = "TEST" value = 1 } post startup script config { post startup script = "echo 'hello world'" post startup script url = "gs://colab-enterprise-pss-secure/secure pss.sh" post startup script behavior = "RUN ONCE" } colab image { release name = "py312" } } } Granting access to the runtime template After you create a runtime template, you must grant access to it for a principal to be able to use it.
- Use Colab Enterprise in a Shared VPC network When you create a runtime template or runtime in a service project of a Shared VPC network, you must grant the Vertex AI service agent ( service- SERVICE PROJECT NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com ) specific permissions on the host project.
- Enable the APIs Required roles To get the permissions that you need to create a runtime template in Colab Enterprise, ask your administrator to grant you the Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin ) IAM role on the project.
- Colab Enterprise uses Compute Engine quota for GPUs.

### Introduction to Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Idle shutdown To help manage costs, Colab Enterprise runtimes shut down when they're inactive for a specific time period.
- If you want to, you can configure runtimes for specific needs, but Colab Enterprise starts them for you and shuts them down when you no longer need them.
- Write and edit code with Gemini assistance You can use Gemini in Colab Enterprise, which is a product in the Gemini for Google Cloud portfolio, to help you write and generate code in a Colab Enterprise notebook.
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) with your Colab Enterprise runtimes and notebooks.

