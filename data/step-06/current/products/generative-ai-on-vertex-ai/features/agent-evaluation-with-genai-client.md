---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.653Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Agent evaluation with GenAI Client"
feature_slug: "agent-evaluation-with-genai-client"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api"
keywords:
  - "agent"
  - "evaluation"
  - "with"
  - "genai"
  - "client"
  - "you"
  - "can"
  - "evaluate"
---

# Agent evaluation with GenAI Client

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

You can evaluate agents using the Gen AI evaluation service's GenAI Client in the Vertex AI SDK.

## Extended Definition

You can evaluate agents using the Gen AI evaluation service's GenAI Client in the Vertex AI SDK.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api)

## Supporting Pages

### "Vertex AI GenAI API \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback Vertex AI GenAI API Stay organized with collections Save and categorize content based on your preferences.
- REST Resource: v1beta1.projects.locations Methods askContexts POST /v1beta1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1beta1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1beta1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1beta1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. evaluateDataset POST /v1beta1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1beta1/{location}:evaluateInstances Evaluates instances based on a given metric. generateInstanceRubrics POST /v1beta1/{location}:generateInstanceRubrics Generates rubrics for a given prompt. generateSyntheticData POST /v1beta1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1beta1/{name} Gets a RagEngineConfig. retrieveContexts POST /v1beta1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1beta1/{ragEngineConfig.name} Updates a RagEngineConfig.
- REST Resource: v1.projects.locations Methods askContexts POST /v1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. evaluateDataset POST /v1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1/{location}:evaluateInstances Evaluates instances based on a given metric. generateInstanceRubrics POST /v1/{location}:generateInstanceRubrics Generates rubrics for a given prompt. generateSyntheticData POST /v1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1/{name} Gets a RagEngineConfig. retrieveContexts POST /v1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1/{ragEngineConfig.name} Updates a RagEngineConfig.
- REST Resource: v1beta1.projects.locations.evaluationRuns Methods cancel POST /v1beta1/{name}:cancel Cancels an Evaluation Run. create POST /v1beta1/{parent}/evaluationRuns Creates an Evaluation Run. delete DELETE /v1beta1/{name} Deletes an Evaluation Run. get GET /v1beta1/{name} Gets an Evaluation Run. list GET /v1beta1/{parent}/evaluationRuns Lists Evaluation Runs.

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- When the agent applies an action to the environment, then the environment transitions between states. evaluation (eval) An eval, short for "evaluation", is a type of experiment in which logged or synthetic queries are sent through two Search stacks--an experimental stack that includes your change and a base stack without your change.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Generative AI glossary Stay organized with collections Save and categorize content based on your preferences. agent In the context of generative AI, an agent is software that autonomously plans and executes a series of actions in pursuit of a goal, potentially in novel situations.
- It's an execution instance of your ML pipeline definition, which is defined as a set of ML tasks interconnected by input-output dependencies. pipeline run One or more Vertex PipelineJobs can be associated with an experiment where each PipelineJob is represented as a single run.
- Ray on Vertex AI (RoV) Ray on Vertex AI is designed so you can use the same open source Ray code to write programs and develop applications on Vertex AI with minimal changes.

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = global export GOOGLE GENAI USE VERTEXAI = True from google import genai from google.genai.types import ( GenerateContentConfig , GoogleMaps , HttpOptions , Tool , ) client = genai .
- Uses of Grounding with Google Maps You can use Grounding with Google Maps for various applications, such as: Conversational assistants that can answer questions about nearby places, such as "Where's the nearest place to get an Italian espresso?" Personalized descriptions and community insights, such as"Can you tell me more about family-friendly restaurants that are within a walkable distance?" Summaries of areas around specific locations, such as an EV charging station or a hotel.
- This data gives you access to information on over 250 million places that can be used to ground your model's responses, enabling your AI applications and agents to provide local data and geospatial context.
- This page describes how Grounding with Google Maps with Vertex AI can help to enhance your generative AI applications by providing geospatial context.

### "Grounding with your search API \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Client ( http options = HttpOptions ( api version = "v1" )) Replace with your API details EXTERNAL API ENDPOINT = "YOUR EXTERNAL API ENDPOINT" # e.g., https://YOUR GATEWAY HOSTNAME/v0/search EXTERNAL API KEY = "YOUR EXTERNAL API KEY" tool = Tool ( retrieval = Retrieval ( external api = ExternalApi ( api spec = "SIMPLE SEARCH" , endpoint = EXTERNAL API ENDPOINT , api auth = { "apiKeyConfig" : { "apiKeyString" : EXTERNAL API KEY } } ) ) ) response = client . models . generate content ( model = "gemini-2.5-flash" , # Or another supported model contents = "What can you tell me about product Y based on my API?" , # Your query config = GenerateContentConfig ( tools = [ tool ], ), ) print ( response . text ) REST Before using any of the request data, make the following replacements: LOCATION : The region to process the request.
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = global export GOOGLE GENAI USE VERTEXAI = True from google import genai from google.genai.types import ( GenerateContentConfig , ExternalApi , Retrieval , Tool , HttpOptions , ) client = genai .
- Create your external API wrapper with Cloud Functions A Cloud Function can act as an intermediary that receives queries from Gemini, issues appropriate queries to your existing search infrastructure, such as a database, internal search engine, or vector search, and then formats the results in the schema Gemini understands.
- Use grounding with your search API with a compatible endpoint If you already have an API endpoint that meets the schema and authentication requirements, you can directly configure it in your Gemini API calls.

