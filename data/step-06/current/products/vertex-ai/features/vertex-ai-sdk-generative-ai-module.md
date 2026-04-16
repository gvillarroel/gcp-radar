---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.067Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI SDK Generative AI module"
feature_slug: "vertex-ai-sdk-generative-ai-module"
latest_feature_date: "2025-06-24"
deprecation_date: "2025-06-24"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule"
keywords:
  - "vertex"
  - "ai"
  - "sdk"
  - "generative"
  - "module"
  - "deprecated"
  - "should"
  - "migrated"
---

# Vertex AI SDK Generative AI module

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The Generative AI module in the Vertex AI SDK is deprecated and should be migrated to the Google Gen AI SDK; deprecated on 2025-06-24.

## Extended Definition

The Generative AI module in the Vertex AI SDK is deprecated and should be migrated to the Google Gen AI SDK; deprecated on 2025-06-24.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)

## Supporting Pages

### "Responsible AI and usage guidelines for Imagen \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines)
- Source ID: `site-docs-reference-3`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Responsible AI and usage guidelines for Imagen Stay organized with collections Save and categorize content based on your preferences.
- Imagen on Vertex AI brings Google's state of the art generative AI capabilities to application developers.
- These code to category mappings are as follows: Error code Safety category Description Content filtered: prompt input or image output 58061214 17301594 Child Detects child content where it isn't allowed due to the API request settings or allowlisting. input (prompt): 58061214 output (image): 17301594 29310472 15236754 Celebrity Detects a photorealistic representation of a celebrity in the request. input (prompt): 29310472 output (image): 15236754 62263041 Dangerous content Detects content that's potentially dangerous in nature. input (prompt) 57734940 22137204 Hate Detects hate-related topics or content. input (prompt): 57734940 output (image): 22137204 74803281 29578790 42876398 Other Detects other miscellaneous safety issues with the request. input (prompt): 42876398 output (image): 29578790, 74803281 39322892 People/Face Detects a person or face when it isn't allowed due to the request safety settings. output (image) 92201652 Personal information Detects Personally Identifiable Information (PII) in the text, such as the mentioning a credit card number, home addresses, or other such information. input (prompt) 89371032 49114662 72817394 Prohibited content Detects the request of prohibited content in the request. input (prompt): 89371032 output (image): 49114662, 72817394 90789179 63429089 43188360 Sexual Detects content that's sexual in nature. input (prompt): 90789179 output (image): 63429089, 43188360 35561574 35561575 Third-party content Guardrails related to third-party content. input (prompt) output (image) 78610348 Toxic Detects toxic topics or content in the text. input (prompt) 61493863 56562880 Violence Detects violence-related content from the image or text. input (prompt): 61493863 output (image): 56562880 32635315 Vulgar Detects vulgar topics or content from the text. input (prompt) 64151117 Celebrity or child Detects photorealistic respresentation of a celebrity or of a child that violates Google's safety policies. input (prompt) output (image) Limitations The following limits apply to different tasks: Image generation and editing limitations Bias amplification : While Imagen on Vertex AI can generate high-quality images, there may be potential biases in the generated content.
- Parameters that filter content The following optional parameters affect content filtering or how filtering is reported to you: safetySetting - Lets you set how aggressively to filter for potentially sensitive output content. includeRaiReason - Provides more verbose information on filtered output. personGeneration - A setting that allows you more control over the generation of people, faces, and children. disablePersonFace - Deprecated.

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Execute module for preprocessing data Create a dataset artifact Log parameters Execute module for training the model Log parameters Create model artifact Assign tracking lineage to dataset, model and parameters Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Track parameters and metrics for locally trained models .
- Tutorial steps Installation and imports Create embedding dataset Create an index Query the index Colab Colab Enterprise GitHub Vertex AI Workbench generative ai Getting Text Embeddings on Vertex AI .
- Colab Colab Enterprise GitHub Vertex AI Workbench Overview of Generative AI support on Vertex AI Vertex AI LLM Batch Inference with RLHF-tuned Models .
- Learn how to provide text input to Large Language Models available on Vertex AI to test, tune, and deploy generative AI language models.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- The size of this field should not exceed 200KB. description string Description of the Artifact LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string OutputsEntry JSON representation { "key" : string , "value" : { object ( ArtifactList ) } } Fields key string value object ( ArtifactList ) LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string RuntimeConfig JSON representation { "parameters" : { string : { object ( Value ) } , ... } , "gcsOutputDirectory" : string , "parameterValues" : { string : value , ... } , "failurePolicy" : enum ( PipelineFailurePolicy ) , "inputArtifacts" : { string : { object ( InputArtifact ) } , ... } } Fields parameters (deprecated) map (key: string, value: object ( Value )) This item is deprecated!
- The size of this field should not exceed 200KB. description string Description of the Artifact LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string OutputsEntry JSON representation { "key" : string , "value" : { object ( ArtifactList ) } } Fields key string value object ( ArtifactList ) LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string RuntimeConfig JSON representation { "parameters" : { string : { object ( Value ) } , ... } , "gcsOutputDirectory" : string , "parameterValues" : { string : value , ... } , "failurePolicy" : enum ( PipelineFailurePolicy ) , "inputArtifacts" : { string : { object ( InputArtifact ) } , ... } } Fields parameters (deprecated) map (key: string, value: object ( Value )) This item is deprecated!
- The size of this field should not exceed 200KB. description string Description of the Context LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string PipelineTaskDetail JSON representation { "taskId" : string , "parentTaskId" : string , "taskName" : string , "createTime" : string , "startTime" : string , "endTime" : string , "executorDetail" : { object ( PipelineTaskExecutorDetail ) } , "state" : enum ( State ) , "execution" : { object ( Execution ) } , "error" : { object ( Status ) } , "pipelineTaskStatus" : [ { object ( PipelineTaskStatus ) } ] , "inputs" : { string : { object ( ArtifactList ) } , ... } , "outputs" : { string : { object ( ArtifactList ) } , ... } , "taskUniqueName" : string } Fields taskId string ( int64 format) Output only.
- The size of this field should not exceed 200KB. description string Description of the Context LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string PipelineTaskDetail JSON representation { "taskId" : string , "parentTaskId" : string , "taskName" : string , "createTime" : string , "startTime" : string , "endTime" : string , "executorDetail" : { object ( PipelineTaskExecutorDetail ) } , "state" : enum ( State ) , "execution" : { object ( Execution ) } , "error" : { object ( Status ) } , "pipelineTaskStatus" : [ { object ( PipelineTaskStatus ) } ] , "inputs" : { string : { object ( ArtifactList ) } , ... } , "outputs" : { string : { object ( ArtifactList ) } , ... } , "taskUniqueName" : string } Fields taskId string ( int64 format) Output only.

