---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.705Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Llama batch prediction on Vertex AI"
feature_slug: "llama-batch-prediction-on-vertex-ai"
latest_feature_date: "2024-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest"
keywords:
  - "llama"
  - "batch"
  - "prediction"
  - "on"
  - "vertex"
  - "ai"
  - "models"
  - "predictions"
---

# Llama batch prediction on Vertex AI

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Llama models on Vertex AI support batch predictions in Preview.

## Extended Definition

Llama models on Vertex AI support batch predictions in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)

## Supporting Pages

### "Get batch text embeddings inferences \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings)
- Source ID: `site-docs-root`
- Final score: 349
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/batchPredictionJobs" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/123456789012/locations/us-central1/batchPredictionJobs/1234567890123456789", "displayName": "BP sample publisher BQ 20230712 134650", "model": "projects/{PROJECT ID}/locations/us-central1/models/textembedding-gecko", "inputConfig": { "instancesFormat": "bigquery", "bigquerySource": { "inputUri": "bq://project name.dataset name.text input" } }, "modelParameters": {}, "outputConfig": { "predictionsFormat": "bigquery", "bigqueryDestination": { "outputUri": "bq://project name.llm dataset.embedding out BP sample publisher BQ 20230712 134650" } }, "state": "JOB STATE PENDING", "createTime": "2023-07-12T20:46:52.148717Z", "updateTime": "2023-07-12T20:46:52.148717Z", "labels": { "owner": "sample owner", "product": "llm" }, "modelVersionId": "1", "modelMonitoringStatus": {} } The response includes a unique identifier for the batch job.
- HTTP method and URL: POST https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/batchPredictionJobs Request JSON body: { "name": " BP JOB NAME ", "displayName": " BP JOB NAME ", "model": " publishers/google/models/textembedding-gecko ", "inputConfig": { "instancesFormat":"bigquery", "bigquerySource":{ "inputUri" : " INPUT URI " } }, "outputConfig": { "predictionsFormat":"bigquery", "bigqueryDestination":{ "outputUri": " OUTPUT URI " } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Once created , it can be reused for multiple requests . try ( Client client = Client . builder () . location ( "us-central1" ) . vertexAI ( true ) . httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ()) . build ()) { // See the documentation : // https : // googleapis . github . io / java - genai / javadoc / com / google / genai / Batches . html BatchJobSource batchJobSource = BatchJobSource . builder () // Source link : // https : // storage . cloud . google . com / cloud - samples - data / generative - ai / embeddings / embeddings input . jsonl . gcsUri ( "gs://cloud-samples-data/generative-ai/embeddings/embeddings input.jsonl" ) . format ( "jsonl" ) . build (); CreateBatchJobConfig batchJobConfig = CreateBatchJobConfig . builder () . displayName ( "your-display-name" ) . dest ( BatchJobDestination . builder () . gcsUri ( outputGcsUri ) . format ( "jsonl" ) . build ()) . build (); BatchJob batchJob = client . batches . create ( modelId , batchJobSource , batchJobConfig ); String jobName = batchJob . name () . orElseThrow (() - > new IllegalStateException ( "Missing job name" )); JobState jobState = batchJob . state () . orElseThrow (() - > new IllegalStateException ( "Missing job state" )); System . out . println ( "Job name: " + jobName ); System . out . println ( "Job state: " + jobState ); // Job name : projects /.../ locations /.../ batchPredictionJobs / 6205497615459549184 // Job state : JOB STATE PENDING // See the documentation : // https : // googleapis . github . io / java - genai / javadoc / com / google / genai / types / BatchJob . html Set<JobState .
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = us-central1 export GOOGLE GENAI USE VERTEXAI = True import ( "context" "fmt" "io" "time" "google.golang.org/genai" ) // generateBatchEmbeddings shows how to run a batch embeddings prediction job . func generateBatchEmbeddings ( w io .

### "Vertex AI consumption options \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options)
- Source ID: `site-docs-root`
- Final score: 336
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Consumption options Vertex AI provides five consumption options tailored to different traffic patterns and business needs: Consumption option Description Ideal For Pricing Provisioned Throughput Provides guaranteed throughput for a commitment period Critical, steady-state, always-on workloads where SLA is needed Commitment-based (available in 1 week, 1 month, 3 month, and 1 year plans) PayGo Standard Flexible, pay-per-use option with no upfront commitment Default option for everyday use cases with flexibility for variable traffic demand Per-token (standard rate) Priority Delivers higher reliability through priority processing while maintaining PayGo flexibility Important workloads that require higher reliability and limits than standard PayGo Per-token (premium rate) Flex Cost-effective option for latency-tolerant workloads Tasks that can tolerate slower response time and higher throttling, offering lower prices Per-token (discounted rate) Batch inference Cost-optimized for high-volume, asynchronous processing Large-scale jobs where results are needed within a longer timeframe Per-token (discounted rate) For information on pricing, see the pricing page .
- Vertex AI offers multiple options for getting and using compute resources when using generative models.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Vertex AI consumption options Stay organized with collections Save and categorize content based on your preferences.
- To optimize for latency: Select the right model for your use case : Vertex AI provides a diverse range of models with varying capabilities and performance characteristics.

### "Model deprecations (MaaS) \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models)
- Source ID: `site-docs-root`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Try in Vertex AI Model ID claude-3-5-sonnet-v2 Launch stage GA Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Batch predictions Prompt caching Function calling Count tokens Not supported Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date August 2024 Versions claude-3-5-sonnet-v2 Launch stage: Generally available Release date: October 22, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Global global endpoint ML processing United States Multi-region Europe Multi-region Quota limits us-east5: QPM: 90 TPM: 540,000 (input and output) Context length: 200,000 europe-west1: QPM: 55 TPM: 330,000 (input and output) Context length: 200,000 global endpoint: QPM: 25 TPM: 140,000 (input and output) Context length: 200,000 Pricing See Pricing .
- Model ID claude-3-5-sonnet Launch stage GA Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Prompt caching Function calling Count tokens Not supported Batch predictions Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date April 2024 Versions claude-3-5-sonnet Launch stage: Generally available Release date: June 20, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Asia Pacific asia-southeast1 ML processing United States Multi-region Europe Multi-region Asia Pacific asia-southeast1 Quota limits us-east5: QPM: 80 TPM: 350,000 (input and output) Context length: 200,000 europe-west1: QPM: 130 TPM: 600,000 (input and output) Context length: 200,000 asia-southeast1: QPM: 35 TPM: 150,000 (input and output) Context length: 200,000 Pricing See Pricing .
- Model ID claude-3-7-sonnet Launch stage deprecated Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 128,000 Capabilities Supported Batch predictions Prompt caching Function calling Count tokens Not supported Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date November 2024 Versions claude-3-7-sonnet Launch stage: Deprecated Release date: March 20, 2025 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Global global endpoint ML processing United States Multi-region Europe Multi-region Quota limits us-east5: QPM: 55 TPM: 500,000 ( uncached input and output) Context length: 200,000 europe-west1: QPM: 40 TPM: 300,000 ( uncached input and output) Context length: 200,000 global endpoint: QPM: 35 TPM: 300,000 ( uncached input and output) Context length: 200,000 Pricing See Pricing .
- Model ID claude-3-haiku Launch stage deprecated Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Prompt caching Function calling Count tokens Not supported Batch predictions Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date August 2023 Versions claude-3-haiku Launch stage: Deprecated Release date: March 19, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Asia Pacific asia-southeast1 ML processing United States Multi-region Europe Multi-region Asia Pacific asia-southeast1 Quota limits us-east5: QPM: 245 TPM: 600,000 (input and output) Context length: 200,000 europe-west1: QPM: 75 TPM: 181,000 (input and output) Context length: 200,000 asia-southeast1: QPM: 70 TPM: 174,000 (input and output) Context length: 200,000 Pricing See Pricing .

### "Vertex AI GenAI API \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations.cachedContents Methods create POST /v1beta1/{parent}/cachedContents Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage. delete DELETE /v1beta1/{name} Deletes cached content get GET /v1beta1/{name} Gets cached content configurations list GET /v1beta1/{parent}/cachedContents Lists cached contents in a project patch PATCH /v1beta1/{cachedContent.name} Updates cached content configurations REST Resource: v1beta1.projects.locations.endpoints Methods computeTokens POST /v1beta1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. fetchPredictOperation POST /v1beta1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1beta1/{model}:generateContent Generate content with multimodal inputs. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. predict POST /v1beta1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. streamGenerateContent POST /v1beta1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.cachedContents Methods create POST /v1/{parent}/cachedContents Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage. delete DELETE /v1/{name} Deletes cached content get GET /v1/{name} Gets cached content configurations list GET /v1/{parent}/cachedContents Lists cached contents in a project patch PATCH /v1/{cachedContent.name} Updates cached content configurations REST Resource: v1.projects.locations.endpoints Methods computeTokens POST /v1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1/{endpoint}:countTokens Perform a token counting. fetchPredictOperation POST /v1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1/{model}:generateContent Generate content with multimodal inputs. predict POST /v1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1/{endpoint}:predictLongRunning rawPredict POST /v1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamGenerateContent POST /v1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.
- REST Resource: v1beta1.projects.locations.publishers.models Methods computeTokens POST /v1beta1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. embedContent POST /v1beta1/{model}:embedContent Embed content with multimodal inputs. fetchPredictOperation POST /v1beta1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1beta1/{model}:generateContent Generate content with multimodal inputs. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. predict POST /v1beta1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamGenerateContent POST /v1beta1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.
- REST Resource: v1.projects.locations.publishers.models Methods computeTokens POST /v1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1/{endpoint}:countTokens Perform a token counting. embedContent POST /v1/{model}:embedContent Embed content with multimodal inputs. fetchPredictOperation POST /v1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1/{model}:generateContent Generate content with multimodal inputs. predict POST /v1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1/{endpoint}:predictLongRunning rawPredict POST /v1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamGenerateContent POST /v1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.

