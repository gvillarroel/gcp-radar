---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.768Z"
product_name: "Colab Enterprise"
product_slug: "colab-enterprise"
feature_name: "Post-startup scripts"
feature_slug: "post-startup-scripts"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/colab/docs/create-runtime-template"
  - "https://docs.cloud.google.com/colab/docs/idle-shutdown"
  - "https://docs.cloud.google.com/colab/docs/custom-constraints"
  - "https://docs.cloud.google.com/colab/docs/manage-access-runtime-template"
keywords:
  - "post"
  - "startup"
  - "scripts"
  - "let"
  - "you"
  - "run"
  - "custom"
  - "tasks"
---

# Post-startup scripts

Product: Colab Enterprise
Coverage: MEDIUM

## Step 02 Summary

Post-startup scripts let you run custom tasks after a Colab Enterprise runtime starts; Post-startup scripts let you run custom tasks after a Colab Enterprise runtime starts.

## Extended Definition

Post-startup scripts let you run custom tasks after a Colab Enterprise runtime starts; Post-startup scripts let you run custom tasks after a Colab Enterprise runtime starts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown)
- [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints)
- [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template)

## Supporting Pages

### Create a runtime template in Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- The following sample uses the google colab runtime template Terraform resource to create a Colab Enterprise runtime template. resource "google compute network" "my network" { name = "{{index $.Vars "network name"}}" auto create subnetworks = false } resource "google compute subnetwork" "my subnetwork" { name = "{{index $.Vars "network name"}}" network = google compute network.my network.id region = "us-central1" ip cidr range = "10.0.1.0/24" } resource "google colab runtime template" "{{$.PrimaryResourceId}}" { name = "{{index $.Vars "runtime template name"}}" display name = "Runtime template full" location = "us-central1" description = "Full runtime template" machine spec { machine type = "n1-standard-2" accelerator type = "NVIDIA TESLA T4" accelerator count = "1" } data persistent disk spec { disk type = "pd-standard" disk size gb = 200 } network spec { enable internet access = true network = google compute network.my network.id subnetwork = google compute subnetwork.my subnetwork.id } labels = { k = "val" } idle shutdown config { idle timeout = "3600s" } euc config { euc disabled = false } shielded vm config { enable secure boot = false } network tags = [ "abc", "def" ] encryption spec { kms key name = "{{index $.Vars "key name"}}" } software config { env { name = "TEST" value = 1 } post startup script config { post startup script = "echo 'hello world'" post startup script url = "gs://colab-enterprise-pss-secure/secure pss.sh" post startup script behavior = "RUN ONCE" } colab image { release name = "py312" } } } Granting access to the runtime template After you create a runtime template, you must grant access to it for a principal to be able to use it.
- HTTP method and URL: POST https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /notebookRuntimeTemplates Request JSON body: { "displayName": " DISPLAY NAME ", "machineSpec": { { "machineType": MACHINE TYPE "acceleratorType": ACCELERATOR TYPE , "acceleratorCount": ACCELERATOR COUNT , } }, } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /notebookRuntimeTemplates" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Optional: Under the post-startup script URL, select your post-startup script's behavior.

### Idle shutdown \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Under the post-startup script URL, select your post-startup script's behavior.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates create --display-name = DISPLAY NAME \ --idle-shutdown-timeout = INACTIVITY DURATION \ --project = PROJECT ID \ --region = REGION Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates create --display-name = DISPLAY NAME --idle-shutdown-timeout = INACTIVITY DURATION --project = PROJECT ID ` --region = REGION Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates create --display-name = DISPLAY NAME ^ --idle-shutdown-timeout = INACTIVITY DURATION ^ --project = PROJECT ID ^ --region = REGION For more information about the command for creating a runtime template from the command line, see the gcloud CLI documentation .
- Enable the APIs Required roles To get the permissions that you need to create a runtime in Colab Enterprise, ask your administrator to grant you the Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin ) IAM role on the project.
- Your runtime template appears in the list on the Runtime templates tab. gcloud Before using any of the command data below, make the following replacements: DISPLAY NAME : the display name of your runtime template.

### "Create custom organization policy constraints \_|\_ Colab Enterprise \_\

- URL: [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Resource Field aiplatform.googleapis.com/NotebookExecutionJob resource.customEnvironmentSpec.machineSpec.acceleratorCount resource.customEnvironmentSpec.machineSpec.acceleratorType resource.customEnvironmentSpec.machineSpec.machineType resource.customEnvironmentSpec.machineSpec.reservationAffinity.key resource.customEnvironmentSpec.machineSpec.reservationAffinity.reservationAffinityType resource.customEnvironmentSpec.machineSpec.reservationAffinity.values resource.customEnvironmentSpec.machineSpec.tpuTopology resource.customEnvironmentSpec.networkSpec.enableInternetAccess resource.customEnvironmentSpec.networkSpec.network resource.customEnvironmentSpec.networkSpec.subnetwork resource.customEnvironmentSpec.persistentDiskSpec.diskSizeGb resource.customEnvironmentSpec.persistentDiskSpec.diskType resource.dataformRepositorySource.commitSha resource.dataformRepositorySource.dataformRepositoryResourceName resource.displayName resource.encryptionSpec.kmsKeyName resource.executionTimeout resource.executionUser resource.gcsNotebookSource.generation resource.gcsNotebookSource.uri resource.gcsOutputUri resource.kernelName resource.notebookRuntimeTemplateResourceName resource.scheduleResourceName resource.serviceAccount aiplatform.googleapis.com/NotebookRuntime resource.description resource.displayName resource.runtimeUser aiplatform.googleapis.com/NotebookRuntimeTemplate resource.dataPersistentDiskSpec.diskSizeGb resource.dataPersistentDiskSpec.diskType resource.description resource.displayName resource.encryptionSpec.kmsKeyName resource.eucConfig.eucDisabled resource.idleShutdownConfig.idleShutdownDisabled resource.idleShutdownConfig.idleTimeout resource.machineSpec.acceleratorCount resource.machineSpec.acceleratorType resource.machineSpec.machineType resource.machineSpec.reservationAffinity.key resource.machineSpec.reservationAffinity.reservationAffinityType resource.machineSpec.reservationAffinity.values resource.machineSpec.tpuTopology resource.networkSpec.enableInternetAccess resource.networkSpec.network resource.networkSpec.subnetwork resource.networkTags resource.notebookRuntimeType resource.reservationAffinity.consumeReservationType resource.reservationAffinity.key resource.reservationAffinity.values resource.shieldedVmConfig.enableSecureBoot resource.softwareConfig.colabImage.releaseName What's next Learn more about Organization Policy Service .
- Before you begin, you must know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-notebook-runtime-template.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictMachineSpecForNotebookRuntimeTemplate resourceTypes : - aiplatform.googleapis.com/NotebookRuntimeTemplate methodTypes : - CREATE condition : "resource.machineSpec.machineType != \"n1-standard-2\"" actionType : DENY displayName : Restrict machine type for notebook runtime templates description : All new notebook runtime templates must use n1-standard-2 machines This defines a constraint where every new notebook runtime template must use the n1-standard-2 machine type, otherwise creation of the runtime template is denied.
- Apply the policy: gcloud org-policies set-policy /policy-deny-machine-type.yaml Verify that the policy exists: gcloud org-policies list --project = PROJECT ID The output is similar to the following: CONSTRAINT LIST POLICY BOOLEAN POLICY ETAG custom.restrictMachineSpecForNotebookRuntimeTemplate - SET CPHYssIGEOi23pAB- After you apply the policy, wait for about two minutes for Google Cloud to start enforcing the policy.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: aiplatform.googleapis.com/NotebookExecutionJob aiplatform.googleapis.com/NotebookRuntime aiplatform.googleapis.com/NotebookRuntimeTemplate To learn more about Organization Policy, see Custom organization policies .

### "Manage access to a runtime template in Colab Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click the Delete delete button for the role that you want to revoke, and then click Save . gcloud Before using any of the command data below, make the following replacements: RUNTIME TEMPLATE ID : the ID of your runtime template.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates remove-iam-policy-binding RUNTIME TEMPLATE ID \ --member = PRINCIPAL \ --role = ROLE \ --project = PROJECT ID \ --region = REGION Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates remove-iam-policy-binding RUNTIME TEMPLATE ID --member = PRINCIPAL --role = ROLE --project = PROJECT ID --region = REGION Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates remove-iam-policy-binding RUNTIME TEMPLATE ID ^ --member = PRINCIPAL ^ --role = ROLE ^ --project = PROJECT ID ^ --region = REGION For more information about managing IAM policies for runtime templates from the command line, see the gcloud CLI documentation .
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates add-iam-policy-binding RUNTIME TEMPLATE ID \ --member = PRINCIPAL \ --role = ROLE \ --project = PROJECT ID \ --region = REGION Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates add-iam-policy-binding RUNTIME TEMPLATE ID --member = PRINCIPAL --role = ROLE --project = PROJECT ID --region = REGION Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates add-iam-policy-binding RUNTIME TEMPLATE ID ^ --member = PRINCIPAL ^ --role = ROLE ^ --project = PROJECT ID ^ --region = REGION For more information about managing IAM policies for runtime templates from the command line, see the gcloud CLI documentation .
- The following sample uses the google colab runtime template iam policy Terraform resource to grant access to a Colab Enterprise runtime template. data "google iam policy" "admin" { binding { role = "roles/viewer" members = [ "user:jane@example.com" , ] } } resource "google colab runtime template iam policy" "policy" { project = google colab runtime template.runtime-template.project location = google colab runtime template.runtime-template.location runtime template = google colab runtime template.runtime-template.name policy data = data.google iam policy.admin.policy data } Colab Enterprise principals are users, groups, or domains You can grant access to users, groups, or domains.

