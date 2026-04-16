---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.768Z"
product_name: "Colab Enterprise"
product_slug: "colab-enterprise"
feature_name: "Python 3.12 support"
feature_slug: "python-3-12-support"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/colab/docs/runtimes"
  - "https://docs.cloud.google.com/colab/docs/authentication"
  - "https://docs.cloud.google.com/colab/docs/idle-shutdown"
  - "https://docs.cloud.google.com/colab/docs/create-runtime-template"
keywords:
  - "python"
  - "12"
  - "colab"
  - "enterprise"
  - "supports"
  - "as"
  - "the"
  - "latest"
---

# Python 3.12 support

Product: Colab Enterprise
Coverage: MEDIUM

## Step 02 Summary

Colab Enterprise supports Python 3.12 as the latest default Python version.

## Extended Definition

Colab Enterprise supports Python 3.12 as the latest default Python version.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
- [https://docs.cloud.google.com/colab/docs/authentication](https://docs.cloud.google.com/colab/docs/authentication)
- [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown)
- [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)

## Supporting Pages

### "Runtimes and runtime templates \_|\_ Colab Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Python versions Starting in May, 2025, when Colab Enterprise creates a default runtime template, the default runtime template is configured to use the latest version of Python (currently Python 3.12).
- This means that when a new version of Python is available in Colab Enterprise, new runtimes created from the default runtime template will use the latest Python version.
- Default runtime specifications Default runtimes and their corresponding default runtime templates include the following specifications: Specification Default Default with GPU Python version Latest available (currently Python 3.12) Latest available (currently Python 3.12) Machine type e2-standard-4 Depends on regional availability.
- End of availability date : After this date, the following changes take place: This Python version isn't available in Colab Enterprise, even for users who were granted an extension.

### Authenticate to Vertex AI \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/authentication](https://docs.cloud.google.com/colab/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Colab Enterprise Reference Send feedback Authenticate to Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- How you authenticate to Colab Enterprise through Vertex AI depends on the interface you use to access the API and the environment where your code is running.
- This document describes how to authenticate to Colab Enterprise through Vertex AI programmatically.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### Idle shutdown \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to create a runtime in Colab Enterprise, ask your administrator to grant you the Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin ) IAM role on the project.
- The default is Latest (currently Python 3.12).
- Console To create a runtime template with specific idle shutdown settings: In the Google Cloud console, go to the Colab Enterprise Runtime templates page.
- Home Documentation AI and ML Colab Enterprise Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Create a runtime template in Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- The following sample uses the google colab runtime template Terraform resource to create a Colab Enterprise runtime template. resource "google compute network" "my network" { name = "{{index $.Vars "network name"}}" auto create subnetworks = false } resource "google compute subnetwork" "my subnetwork" { name = "{{index $.Vars "network name"}}" network = google compute network.my network.id region = "us-central1" ip cidr range = "10.0.1.0/24" } resource "google colab runtime template" "{{$.PrimaryResourceId}}" { name = "{{index $.Vars "runtime template name"}}" display name = "Runtime template full" location = "us-central1" description = "Full runtime template" machine spec { machine type = "n1-standard-2" accelerator type = "NVIDIA TESLA T4" accelerator count = "1" } data persistent disk spec { disk type = "pd-standard" disk size gb = 200 } network spec { enable internet access = true network = google compute network.my network.id subnetwork = google compute subnetwork.my subnetwork.id } labels = { k = "val" } idle shutdown config { idle timeout = "3600s" } euc config { euc disabled = false } shielded vm config { enable secure boot = false } network tags = [ "abc", "def" ] encryption spec { kms key name = "{{index $.Vars "key name"}}" } software config { env { name = "TEST" value = 1 } post startup script config { post startup script = "echo 'hello world'" post startup script url = "gs://colab-enterprise-pss-secure/secure pss.sh" post startup script behavior = "RUN ONCE" } colab image { release name = "py312" } } } Granting access to the runtime template After you create a runtime template, you must grant access to it for a principal to be able to use it.
- To ensure that the Colab Enterprise service agent has the necessary permissions to use scheduled notebooks within a Shared VPC network, ask your administrator to grant the Compute Network User ( roles/compute.networkUser ) IAM role to the Colab Enterprise service agent on the host project.
- Enable the APIs Required roles To get the permissions that you need to create a runtime template in Colab Enterprise, ask your administrator to grant you the Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin ) IAM role on the project.
- The default is Latest (currently Python 3.12).

