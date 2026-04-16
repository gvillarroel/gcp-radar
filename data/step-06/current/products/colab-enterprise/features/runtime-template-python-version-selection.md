---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.771Z"
product_name: "Colab Enterprise"
product_slug: "colab-enterprise"
feature_name: "Runtime template Python version selection"
feature_slug: "runtime-template-python-version-selection"
latest_feature_date: "2025-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/colab/docs/runtimes"
  - "https://docs.cloud.google.com/colab/docs/create-runtime-template"
  - "https://docs.cloud.google.com/colab/docs/manage-access-runtime-template"
  - "https://docs.cloud.google.com/colab/docs/create-runtime"
keywords:
  - "runtime"
  - "template"
  - "python"
  - "version"
  - "selection"
  - "templates"
  - "can"
  - "be"
---

# Runtime template Python version selection

Product: Colab Enterprise
Coverage: MEDIUM

## Step 02 Summary

Runtime templates can be configured to use a specific Python version or automatically use the latest available version.

## Extended Definition

Runtime templates can be configured to use a specific Python version or automatically use the latest available version.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
- [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template)
- [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime)

## Supporting Pages

### "Runtimes and runtime templates \_|\_ Colab Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Python version End of patch and support date End of availability date Python 3.12 To be determined To be determined Python 3.11 To be determined To be determined Python 3.10 February 23, 2026 August 17, 2026 Understand end of support dates Support for a Python version ends according to the following dates: End of patch and support date : After this date, the following changes take place: You can't create runtime templates that use this Python version.
- Default runtime specifications Default runtimes and their corresponding default runtime templates include the following specifications: Specification Default Default with GPU Python version Latest available (currently Python 3.12) Latest available (currently Python 3.12) Machine type e2-standard-4 Depends on regional availability.
- Change a runtime template's Python version To change a runtime template's Python version, you can use the Google Cloud console or the REST API.
- Any of your existing runtime templates that use this Python version are automatically upgraded to use the latest available Python version.

### Create a runtime template in Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /notebookRuntimeTemplates" Select-Object -Expand Content If successful, the response body contains an instance of Operation .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /notebookRuntimeTemplates" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Your runtime template appears in the list on the Runtime templates tab. gcloud Before using any of the command data below, make the following replacements: DISPLAY NAME : the display name of your runtime template.
- Unable to select enough GPUs While creating a runtime template, you can't select the number of GPUs that you want.

### "Manage access to a runtime template in Colab Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates remove-iam-policy-binding RUNTIME TEMPLATE ID \ --member = PRINCIPAL \ --role = ROLE \ --project = PROJECT ID \ --region = REGION Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates remove-iam-policy-binding RUNTIME TEMPLATE ID --member = PRINCIPAL --role = ROLE --project = PROJECT ID --region = REGION Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates remove-iam-policy-binding RUNTIME TEMPLATE ID ^ --member = PRINCIPAL ^ --role = ROLE ^ --project = PROJECT ID ^ --region = REGION For more information about managing IAM policies for runtime templates from the command line, see the gcloud CLI documentation .
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates add-iam-policy-binding RUNTIME TEMPLATE ID \ --member = PRINCIPAL \ --role = ROLE \ --project = PROJECT ID \ --region = REGION Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates add-iam-policy-binding RUNTIME TEMPLATE ID --member = PRINCIPAL --role = ROLE --project = PROJECT ID --region = REGION Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates add-iam-policy-binding RUNTIME TEMPLATE ID ^ --member = PRINCIPAL ^ --role = ROLE ^ --project = PROJECT ID ^ --region = REGION For more information about managing IAM policies for runtime templates from the command line, see the gcloud CLI documentation .
- The following sample uses the google colab runtime template iam policy Terraform resource to grant access to a Colab Enterprise runtime template. data "google iam policy" "admin" { binding { role = "roles/viewer" members = [ "user:jane@example.com" , ] } } resource "google colab runtime template iam policy" "policy" { project = google colab runtime template.runtime-template.project location = google colab runtime template.runtime-template.location runtime template = google colab runtime template.runtime-template.name policy data = data.google iam policy.admin.policy data } Colab Enterprise principals are users, groups, or domains You can grant access to users, groups, or domains.
- Manage access to a runtime template This page describes how you can grant and revoke access to a runtime template in Colab Enterprise.

### Create a runtime in Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following sample uses the google colab runtime Terraform resource to create a Colab Enterprise runtime. resource "google colab runtime template" "my template" { name = "{{index $.Vars "runtime name"}}" display name = "Runtime template full" location = "us-central1" description = "Full runtime template" machine spec { machine type = "n1-standard-2" accelerator type = "NVIDIA TESLA T4" accelerator count = "1" } data persistent disk spec { disk type = "pd-standard" disk size gb = 200 } network spec { enable internet access = true } labels = { k = "val" } idle shutdown config { idle timeout = "3600s" } euc config { euc disabled = true } shielded vm config { enable secure boot = true } network tags = [ "abc", "def" ] encryption spec { kms key name = "{{index $.Vars "key name"}}" } } resource "google colab runtime" "{{$.PrimaryResourceId}}" { name = "{{index $.Vars "runtime name"}}" location = "us-central1" notebook runtime template ref { notebook runtime template = google colab runtime template.my template.id } display name = "Runtime full" runtime user = "gterraformtestuser@gmail.com" description = "Full runtime" desired state = "ACTIVE" auto upgrade = true depends on = [ google colab runtime template.my template ] } Troubleshoot This section shows you how to resolve issues with creating runtimes in Colab Enterprise.
- If you try to create a default runtime without the permissions required to create a runtime template, then Colab Enterprise can't create the default runtime.
- To resolve this issue, ask your administrator to grant you a role that includes the aiplatform.notebookRuntimeTemplates.create permission.
- If there aren't any runtime templates listed, create a runtime template .

