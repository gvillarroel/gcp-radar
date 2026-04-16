---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:00.992Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench startup script dependency removal"
feature_slug: "vertex-ai-workbench-startup-script-dependency-removal"
latest_feature_date: "2026-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-training-script"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "startup"
  - "script"
  - "dependency"
  - "removal"
  - "m139"
---

# Vertex AI Workbench startup script dependency removal

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

The Vertex AI Workbench M139 release removed the startup script dependency on the gs://dl-platform-public-configs location for instances.

## Extended Definition

The Vertex AI Workbench M139 release removed the startup script dependency on the gs://dl-platform-public-configs location for instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-training-script](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-training-script)

## Supporting Pages

### "Method: projects.locations.instances.getInstanceHealth \_|\_ Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
- Source ID: `site-api-reference-2`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Reference Send feedback Method: projects.locations.instances.getInstanceHealth Stay organized with collections Save and categorize content based on your preferences.

### Create a training script \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-training-script](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-training-script)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- ArgumentParser () parser . add argument ( '--label column' , required = True , type = str ) parser . add argument ( '--epochs' , default = 10 , type = int ) parser . add argument ( '--batch size' , default = 10 , type = int ) args = parser . parse args () Set up training variables LABEL COLUMN = args . label column See https://cloud.google.com/vertex-ai/docs/workbench/managed/executor#explicit-project-selection for issues regarding permissions.
- Home Documentation AI and ML Vertex AI Send feedback Create a training script Stay organized with collections Save and categorize content based on your preferences.
- RMSprop ( lr = 0.001 ) model . compile ( loss = "categorical crossentropy" , metrics = [ "accuracy" ], optimizer = optimizer ) return model Create the model model = create model ( num features = dataset train . flat shapes [ 0 ] . dims [ 0 ] . value ) Set up datasets dataset train = dataset train . batch ( args . batch size ) dataset validation = dataset validation . batch ( args . batch size ) Train the model model . fit ( dataset train , epochs = args . epochs , validation data = dataset validation ) tf . saved model . save ( model , os . getenv ( "AIP MODEL DIR" )) After you create the script, it appears in the root folder of your notebook: Define arguments for your training script You pass the following command-line arguments to your training script: label column - This identifies the column in your data that contains what you want to predict.
- To define the arguments that are passed to your script, run the following code: JOB NAME = "custom job unique" EPOCHS = 20 BATCH SIZE = 10 CMDARGS = [ "--label column=" + LABEL COLUMN, "--epochs=" + str(EPOCHS), "--batch size=" + str(BATCH SIZE), ] Previous arrow back Create a dataset Next Train a model arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- Source ID: `site-api-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- NotebookSoftwareConfig JSON representation { "env" : [ { object ( EnvVar ) } ] , "postStartupScriptConfig" : { object ( PostStartupScriptConfig ) } , // Union field runtime image can be only one of the following: "colabImage" : { object ( ColabImage ) } // End of list of possible types for union field runtime image . } Fields env[] object ( EnvVar ) Optional.
- PostStartupScriptConfig JSON representation { "postStartupScript" : string , "postStartupScriptUrl" : string , "postStartupScriptBehavior" : enum ( PostStartupScriptBehavior ) } Fields postStartupScript string Optional.
- Example: gs://bucket/script.sh postStartupScriptBehavior enum ( PostStartupScriptBehavior ) Optional.
- Maximum limit is 100. postStartupScriptConfig object ( PostStartupScriptConfig ) Optional.

