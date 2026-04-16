---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.178Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI custom jobs local-run CLI command"
feature_slug: "vertex-ai-custom-jobs-local-run-cli-command"
latest_feature_date: "2021-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account"
  - "https://docs.cloud.google.com/vertex-ai/docs/general/cmek"
keywords:
  - "vertex"
  - "ai"
  - "custom"
  - "jobs"
  - "local"
  - "run"
  - "cli"
  - "command"
---

# Vertex AI custom jobs local-run CLI command

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI now supports running containerized training code locally with the `gcloud beta ai custom-jobs local-run` command.

## Extended Definition

Vertex AI now supports running containerized training code locally with the `gcloud beta ai custom-jobs local-run` command.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account)
- [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)

## Supporting Pages

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create a local BigQuery table in your project Train a BigQuery ML model Evaluate the BigQuery ML model Export the BigQuery ML model as a cloud model Upload the exported model as a Vertex AI model resource Hyperparameter tune a BigQuery ML model with Vertex AI Vizier Automatically register a BigQuery ML model to Vertex AI Model Registry Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Vertex AI Inference Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .
- Tutorial steps Prepare the training script Submit a Ray job using the Ray Jobs API Download a trained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Register model in Vertex AI Model Registry Deploy model in Vertex AI Endpoint Make online predictions Colab Colab Enterprise GitHub Vertex AI Workbench Ray on Vertex AI overview Ray on Vertex AI cluster management .
- Tutorial steps Formalize model experiment in a script Run model traning using local script on Vertex AI Training Check out ML experiment parameters and metrics in Vertex AI Experiments Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Vertex ML Metadata Custom training Get started with Vertex AI Experiments .
- Tutorial steps How to delete the TB Experiment with a predefined keyvalue label pair How to delete the TB Experiments created before the create time How to delete the TB Experiments created before the update time Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Custom training autologging - Local script .

### Use a custom service account \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account)
- Source ID: `site-docs-reference-3`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the gcloud ai endpoints deploy-model command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud ai endpoints deploy-model ENDPOINT ID \ --region = LOCATION \ --model = MODEL ID \ --display-name = DEPLOYED MODEL NAME \ --machine-type = MACHINE TYPE \ --min-replica-count = MIN REPLICA COUNT \ --max-replica-count = MAX REPLICA COUNT \ --traffic-split = 0 = 100 \ --service-account = CUSTOM SERVICE ACCOUNT Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud ai endpoints deploy-model ENDPOINT ID --region = LOCATION --model = MODEL ID --display-name = DEPLOYED MODEL NAME --machine-type = MACHINE TYPE --min-replica-count = MIN REPLICA COUNT --max-replica-count = MAX REPLICA COUNT --traffic-split = 0 = 100 --service-account = CUSTOM SERVICE ACCOUNT Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud ai endpoints deploy-model ENDPOINT ID ^ --region = LOCATION ^ --model = MODEL ID ^ --display-name = DEPLOYED MODEL NAME ^ --machine-type = MACHINE TYPE ^ --min-replica-count = MIN REPLICA COUNT ^ --max-replica-count = MAX REPLICA COUNT ^ --traffic-split = 0 = 100 ^ --service-account = CUSTOM SERVICE ACCOUNT API Follow Deploying a model using the Vertex AI API .
- Optional : If the user-managed service account is in a different project than your training jobs, you must grant the Service Account Token Creator role (roles/iam.serviceAccountTokenCreator) to the Vertex AI Service Agent of the project where you're using Vertex AI. gcloud iam service-accounts add-iam-policy-binding \ --role = roles/iam.serviceAccountTokenCreator \ --member = serviceAccount: AI PLATFORM SERVICE AGENT \ CUSTOM SERVICE ACCOUNT Optional : If you also plan to use the user-managed service account for predictions, then you must grant the Service Account Admin role ( roles/iam.serviceAccountAdmin ) to the Vertex AI Service Agent of the project where you're using Vertex AI: gcloud iam service-accounts add-iam-policy-binding \ --role = roles/iam.serviceAccountAdmin \ --member = serviceAccount: AI PLATFORM SERVICE AGENT \ CUSTOM SERVICE ACCOUNT Replace the following: AI PLATFORM SERVICE AGENT : The email address of your project's Vertex AI Service Agent, which has the following format: service- PROJECT NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com To find the Vertex AI Service Agent, go to the IAM page in the Google Cloud console.
- Attach a service account to a custom training resource To configure Vertex AI to use your new service account during custom training, specify the service account's email address in the serviceAccount field of a CustomJobSpec message when you start custom training.
- Note: This command grants your project's Vertex AI Service Agent the Service Account Admin role only for your custom service account resource, not for the whole project.

### "Customer-managed encryption keys (CMEK) \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- Source ID: `site-docs-reference-3`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy and manage public endpoints Deploy and manage index endpoints in a VPC network Vector Search Private Service Connect Colab Enterprise runtime The boot disk and data disks of the runtime's VM Use customer-managed encryption keys (CMEK) in Colab Enterprise Colab Enterprise notebook The notebook file and its comments Use customer-managed encryption keys (CMEK) in Colab Enterprise Vertex AI Agent Engine The copy of your agent source files, including code, scripts, and any dependency files The container images built from your agent source files The running instances deployed from your agent container images Vertex AI Agent Engine overview CMEK support for Generative AI tuning pipelines CMEK support is provided in the tuning pipeline of the following models: BERT T5 image-generation (GPU) Limitations CMEK support isn't provided in the following: AutoML image model batch prediction ( BatchPredictionJob ) TPU tuning Configure CMEK for your resources The following sections describe how to create a key ring and key in Cloud Key Management Service, grant Vertex AI encrypter and decrypter permissions for your key, and create resources that use CMEK.
- Home Documentation AI and ML Vertex AI Send feedback Customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- CMEK for Vertex AI resources The following sections describe basic information about CMEK for Vertex AI resources that you must understand before configuring CMEK for your jobs.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Vertex AI.

