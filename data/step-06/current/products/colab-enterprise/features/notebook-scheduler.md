---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.777Z"
product_name: "Colab Enterprise"
product_slug: "colab-enterprise"
feature_name: "Notebook scheduler"
feature_slug: "notebook-scheduler"
latest_feature_date: "2024-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/colab/docs/create-runtime-template"
  - "https://docs.cloud.google.com/colab/docs/create-console-quickstart"
  - "https://docs.cloud.google.com/colab/docs/runtimes"
  - "https://docs.cloud.google.com/colab/docs/manage-access-notebook"
keywords:
  - "notebook"
  - "scheduler"
  - "the"
  - "lets"
  - "you"
  - "run"
  - "notebooks"
  - "immediately"
---

# Notebook scheduler

Product: Colab Enterprise
Coverage: MEDIUM

## Step 02 Summary

The notebook scheduler lets you run notebooks immediately or on a recurring schedule; The notebook scheduler lets you run notebooks immediately or on a recurring schedule.

## Extended Definition

The notebook scheduler lets you run notebooks immediately or on a recurring schedule; The notebook scheduler lets you run notebooks immediately or on a recurring schedule.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart)
- [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
- [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook)

## Supporting Pages

### Create a runtime template in Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Schedule notebook runs in a Shared VPC network If you want to use the notebook scheduler with a runtime template or runtime in a service project of a Shared VPC network, you must grant the Colab Enterprise service agent ( service- SERVICE PROJECT NUMBER @gcp-sa-vertex-nb.iam.gserviceaccount.com ) specific permissions on the host project.
- HTTP method and URL: POST https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /notebookRuntimeTemplates Request JSON body: { "displayName": " DISPLAY NAME ", "machineSpec": { { "machineType": MACHINE TYPE "acceleratorType": ACCELERATOR TYPE , "acceleratorCount": ACCELERATOR COUNT , } }, } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /notebookRuntimeTemplates" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- To ensure that the Colab Enterprise service agent has the necessary permissions to use scheduled notebooks within a Shared VPC network, ask your administrator to grant the Compute Network User ( roles/compute.networkUser ) IAM role to the Colab Enterprise service agent on the host project.

### "Quickstart: Create a Colab Enterprise notebook by using the Google Cloud\

- URL: [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to create a Colab Enterprise notebook and run the notebook's code on a runtime, ask your administrator to grant you the Colab Enterprise User ( roles/aiplatform.colabEnterpriseUser ) IAM role on the project.
- Run code in the default runtime To run a Colab Enterprise notebook's code on the default runtime, do the following: In the Google Cloud console, go to the Colab Enterprise My notebooks page.
- Rename your notebook To rename a Colab Enterprise notebook: In the Google Cloud console, go to the Colab Enterprise My notebooks page.
- Delete your notebook To delete a Colab Enterprise notebook: In the Google Cloud console, go to the Colab Enterprise My notebooks page.

### "Runtimes and runtime templates \_|\_ Colab Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- If you configure your runtime template this way, notebooks that use runtimes created from the runtime template won't have access to the public internet.
- Instead of running code from multiple notebooks on the same runtime, you can create a runtime for each notebook based on the same runtime template.
- When you create a runtime, it is in the same region as the runtime template, and the runtime can only be used with notebooks in that region.
- Runtimes can be shared by notebooks You can connect more than one notebook to the same runtime but this isn't recommended.

### Manage access to a Colab Enterprise notebook \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook)
- Source ID: `site-iam-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you turn off output saving for a selected notebook, Colab Enterprise deletes all output saved in the notebook file and doesn't save the output of subsequent runs.
- Go to My notebooks In the Region menu, select the region that contains your notebook.
- Go to My notebooks In the Region menu, select the region that contains your notebook.
- See the following table: Principal Example user account Single user user@gmail.com Google group admins@googlegroups.com Google Workspace domain example.com Turn off notebook output saving To prevent sharing saved notebook output with other users who have access to the notebook file, you can turn off notebook output saving.

