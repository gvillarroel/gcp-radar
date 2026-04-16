---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.704Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Translation model evaluation in Gen AI evaluation service"
feature_slug: "translation-model-evaluation-in-gen-ai-evaluation-service"
latest_feature_date: "2024-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings"
keywords:
  - "translation"
  - "model"
  - "evaluation"
  - "in"
  - "gen"
  - "ai"
  - "the"
  - "can"
---

# Translation model evaluation in Gen AI evaluation service

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The Gen AI evaluation service can evaluate translation models with MetricX, COMET, and BLEU metrics.

## Extended Definition

The Gen AI evaluation service can evaluate translation models with MetricX, COMET, and BLEU metrics.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings)

## Supporting Pages

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 342
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Bilingual Evaluation Understudy (BLEU) A popular measure for evaluating the quality of a machine-translation algorithm by comparing its output to that of one or more human translations. boosting In model training: Boosting can refer to data augmentation techniques used to increase the size and diversity of training datasets.
- By understanding the relationships between words, generative AI models can create new content that is both coherent and relevant. zero-shot prompt (direct prompting) In generative AI, a zero-shot prompt is a prompt that enables a large language model (LLM) to perform a task without any additional training or examples.
- A model that can generalize is the opposite of a model that is overfitting. generation In the context of generative AI, "generation" refers to the process of creating new data or content from existing data or information.
- For generative AI models, the F1 score can be used to compare the model's inferences with ground truth data to determine the model's accuracy.

### "Tutorial: Perform evaluation using the Python SDK \_|\_ Generative AI on\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-quickstart)
- Source ID: `site-docs-root`
- Final score: 319
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tutorial: Perform evaluation using the Python SDK To see an example of Getting started with the Vertex AI Python SDK for Gen AI evaluation service, run the "Getting Started with the Vertex AI Python SDK for Gen AI evaluation service" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub This page shows you how to perform a model-based evaluation with Gen AI evaluation service using the Vertex AI SDK for Python.
- Set up evaluation metrics based on your criteria The following metric definition evaluates the text quality generated from a large language model based on two criteria: Fluency and Entertaining .
- Install the Vertex AI SDK for Python with Gen AI evaluation service dependency: !pip install google-cloud-aiplatform [ evaluation ] Set up your credentials.
- Import libraries Import your libraries and set up your project and location. import pandas as pd import vertexai from vertexai.evaluation import EvalTask , PointwiseMetric , PointwiseMetricPromptTemplate from google.cloud import aiplatform PROJECT ID = " PROJECT ID " LOCATION = " LOCATION " EXPERIMENT NAME = " EXPERIMENT NAME " vertexai . init ( project = PROJECT ID , location = LOCATION , ) Note that EXPERIMENT NAME can only contain lowercase alphanumeric characters and hyphens, up to a maximum of 127 characters.

### "Vertex AI GenAI API \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 319
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations.cachedContents Methods create POST /v1beta1/{parent}/cachedContents Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage. delete DELETE /v1beta1/{name} Deletes cached content get GET /v1beta1/{name} Gets cached content configurations list GET /v1beta1/{parent}/cachedContents Lists cached contents in a project patch PATCH /v1beta1/{cachedContent.name} Updates cached content configurations REST Resource: v1beta1.projects.locations.endpoints Methods computeTokens POST /v1beta1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. fetchPredictOperation POST /v1beta1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1beta1/{model}:generateContent Generate content with multimodal inputs. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. predict POST /v1beta1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. streamGenerateContent POST /v1beta1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.cachedContents Methods create POST /v1/{parent}/cachedContents Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage. delete DELETE /v1/{name} Deletes cached content get GET /v1/{name} Gets cached content configurations list GET /v1/{parent}/cachedContents Lists cached contents in a project patch PATCH /v1/{cachedContent.name} Updates cached content configurations REST Resource: v1.projects.locations.endpoints Methods computeTokens POST /v1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1/{endpoint}:countTokens Perform a token counting. fetchPredictOperation POST /v1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1/{model}:generateContent Generate content with multimodal inputs. predict POST /v1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1/{endpoint}:predictLongRunning rawPredict POST /v1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamGenerateContent POST /v1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.
- REST Resource: v1beta1.projects.locations.publishers.models Methods computeTokens POST /v1beta1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. embedContent POST /v1beta1/{model}:embedContent Embed content with multimodal inputs. fetchPredictOperation POST /v1beta1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1beta1/{model}:generateContent Generate content with multimodal inputs. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. predict POST /v1beta1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamGenerateContent POST /v1beta1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.
- REST Resource: v1.projects.locations.publishers.models Methods computeTokens POST /v1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1/{endpoint}:countTokens Perform a token counting. embedContent POST /v1/{model}:embedContent Embed content with multimodal inputs. fetchPredictOperation POST /v1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1/{model}:generateContent Generate content with multimodal inputs. predict POST /v1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1/{endpoint}:predictLongRunning rawPredict POST /v1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamGenerateContent POST /v1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.

### "Get batch text embeddings inferences \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings)
- Source ID: `site-docs-root`
- Final score: 317
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once created , it can be reused for multiple requests . try ( Client client = Client . builder () . location ( "us-central1" ) . vertexAI ( true ) . httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ()) . build ()) { // See the documentation : // https : // googleapis . github . io / java - genai / javadoc / com / google / genai / Batches . html BatchJobSource batchJobSource = BatchJobSource . builder () // Source link : // https : // storage . cloud . google . com / cloud - samples - data / generative - ai / embeddings / embeddings input . jsonl . gcsUri ( "gs://cloud-samples-data/generative-ai/embeddings/embeddings input.jsonl" ) . format ( "jsonl" ) . build (); CreateBatchJobConfig batchJobConfig = CreateBatchJobConfig . builder () . displayName ( "your-display-name" ) . dest ( BatchJobDestination . builder () . gcsUri ( outputGcsUri ) . format ( "jsonl" ) . build ()) . build (); BatchJob batchJob = client . batches . create ( modelId , batchJobSource , batchJobConfig ); String jobName = batchJob . name () . orElseThrow (() - > new IllegalStateException ( "Missing job name" )); JobState jobState = batchJob . state () . orElseThrow (() - > new IllegalStateException ( "Missing job state" )); System . out . println ( "Job name: " + jobName ); System . out . println ( "Job state: " + jobState ); // Job name : projects /.../ locations /.../ batchPredictionJobs / 6205497615459549184 // Job state : JOB STATE PENDING // See the documentation : // https : // googleapis . github . io / java - genai / javadoc / com / google / genai / types / BatchJob . html Set<JobState .
- Batches . html let job = await client . batches . create ({ model : 'text-embedding-005' , // Source link : https : // storage . cloud . google . com / cloud - samples - data / batch / prompt for batch gemini predict . jsonl src : 'gs://cloud-samples-data/generative-ai/embeddings/embeddings input.jsonl' , config : { dest : outputUri , }, }); console . log ( Job name : $ { job . name } ); console . log ( Job state : $ { job . state } ); // Example response : // Job name : projects /% PROJECT ID %/ locations / us - central1 / batchPredictionJobs / 9876453210000000000 // Job state : JOB STATE PENDING const completedStates = new Set ([ 'JOB STATE SUCCEEDED' , 'JOB STATE FAILED' , 'JOB STATE CANCELLED' , 'JOB STATE PAUSED' , ]); while ( ! completedStates . has ( job . state )) { await new Promise ( resolve = > setTimeout ( resolve , 30000 )); job = await client . batches . get ({ name : job . name }); console . log ( Job state : $ { job . state } ); } // Example response : // Job state : JOB STATE PENDING // Job state : JOB STATE RUNNING // Job state : JOB STATE RUNNING // ... // Job state : JOB STATE SUCCEEDED return job . state ; } Java Learn how to install or update the Java .
- Client ( http options = HttpOptions ( api version = "v1" )) TODO(developer): Update and un-comment below line output uri = "gs://your-bucket/your-prefix" See the documentation: https://googleapis.github.io/python-genai/genai.html#genai.batches.Batches.create job = client . batches . create ( model = "text-embedding-005" , Source link: https://storage.cloud.google.com/cloud-samples-data/generative-ai/embeddings/embeddings input.jsonl src = "gs://cloud-samples-data/generative-ai/embeddings/embeddings input.jsonl" , config = CreateBatchJobConfig ( dest = output uri ), ) print ( f "Job name: { job . name } " ) print ( f "Job state: { job . state } " ) Example response: Job name: projects/.../locations/.../batchPredictionJobs/9876453210000000000 Job state: JOB STATE PENDING See the documentation: https://googleapis.github.io/python-genai/genai.html#genai.types.BatchJob completed states = { JobState .
- BigQuery input example This example shows a single column BigQuery table. content "Give a short description of a machine learning model:" "Best recipe for banana bread:" BigQuery output example content predictions status "Give a short description of a machine learning model:" ' [{ "embeddings" : { "statistics" :{ "token count" : 8 , "truncated" : false }, "Values" :[ 0.1 , .... ] } } ] ' "Best recipe for banana bread:" ' [{ "embeddings" : { "statistics" :{ "token count" : 3 , "truncated" : false }, "Values" :[ 0.2 , .... ] } } ] ' Request a batch response Depending on the number of input items that you've submitted, a batch generation task can take some time to complete.

