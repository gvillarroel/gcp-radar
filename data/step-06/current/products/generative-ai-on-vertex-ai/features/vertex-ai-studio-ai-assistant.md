---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.710Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Vertex AI Studio AI assistant"
feature_slug: "vertex-ai-studio-ai-assistant"
latest_feature_date: "2024-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide"
keywords:
  - "vertex"
  - "ai"
  - "studio"
  - "assistant"
  - "the"
  - "in"
  - "can"
  - "help"
---

# Vertex AI Studio AI assistant

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The AI assistant in Vertex AI Studio can help refine and generate prompts.

## Extended Definition

The AI assistant in Vertex AI Studio can help refine and generate prompts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide)

## Supporting Pages

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 355
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The contextual widget is rendered using the context token, googleMapsWidgetContextToken , which is returned in the Vertex AI API response and can be used to render visual content.
- This page describes how Grounding with Google Maps with Vertex AI can help to enhance your generative AI applications by providing geospatial context.
- Console To use Grounding with Google Maps with Vertex AI, follow these steps: In the Google Cloud console, go to the Vertex AI Studio page.
- Go to Vertex AI Studio In the Tools section, click Grounding: Google .

### "Grounding with Vertex AI Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- Source ID: `site-docs-root`
- Final score: 328
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "You can make an appointment on the website https://dmv.gov/" } ] }, "finishReason": "STOP", "safetyRatings": [ "..." ], "groundingMetadata": { "retrievalQueries": [ "How to make appointment to renew driving license?" ], "groundingChunks": [ { "retrievedContext": { "uri": "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AXiHM.....QTN92V5ePQ==", "title": "dmv" } } ], "groundingSupport": [ { "segment": { "startIndex": 25, "endIndex": 147 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1, 2], "confidenceScore": [0.9541752, 0.97726375] }, { "segment": { "startIndex": 294, "endIndex": 439 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1], "confidenceScore": [0.9541752, 0.9325467] } ] } } ], "usageMetadata": { "..." } } Understand your response The response from both APIs include the LLM-generated text, which is called a candidate .
- Client ( http options = HttpOptions ( api version = "v1" )) Replace with your Vertex AI Search data store details DATASTORE PATH = "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/DATASTORE ID" tool = Tool ( retrieval = Retrieval ( vertex ai search = VertexAISearch ( datastore = DATASTORE PATH ) ) ) response = client . models . generate content ( model = "gemini-2.5-flash" , # Or another supported model contents = "What information can you find about topic X in the provided documents?" , # Your query config = GenerateContentConfig ( tools = [ tool ], ), ) print ( response . text ) REST To test a text prompt by using the Vertex AI API, send a POST request to the publisher model endpoint.
- Console To ground your model output to AI Applications by using Vertex AI Studio in the Google Cloud console, follow these steps: In the Google Cloud console, go to the Vertex AI Studio page.
- Go to Vertex AI Studio To turn on grounding, follow these steps: Click + New and Chat from the navigation menu.

### "Tutorial: Vertex AI Studio in express mode \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart)
- Source ID: `site-docs-root`
- Final score: 316
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A response like the following is returned in the Response box: the best dreams HAPPEN when you are awake Design a chatbot and get the code To design a chatbot in Vertex AI Studio and get the code for it, do the following: In the Vertex AI section of the Google Cloud console, go to the Vertex AI Studio page.
- View and try a list of sample prompts To view and try a sample prompt in Vertex AI Studio, do the following: In the Vertex AI section of the Google Cloud console, go to the Vertex AI Studio page.
- This quickstart shows you how to perform the following tasks in Vertex AI Studio in express mode: View and try a list of sample prompts.
- Create and save your own prompts To create and save a prompt in Vertex AI Studio, do the following.

### "Gemini 3 prompting guide \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see an example of Gemini 3.1 Pro, run the "Intro to Gemini 3.1 Pro" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Prompting is a key part of working with any Gemini model and the new features of Gemini 3 models can be prompted to help solve complex problems and achieve other tasks, such as interpreting large amounts of text, solving complex mathematical problems, or even creating images and videos.
- This guide provides a variety of prompting strategies to help you get the most from Gemini 3 on Vertex AI for a variety of use cases.
- While the model is designed to be helpful, if you provide a hypothetical scenario that contradicts real-world facts (prompting with context such as Crabs are fictional and have never existed. ), the model may revert to its training data rather than your prompt to align your request with its existing information.
- A well-structured prompt might look like this: [Context and source material] [Main task instructions] [Negative, formatting, and quantitative constraints] Using personas The model is designed to treat the persona it is assigned seriously and will sometimes ignore instructions in order to maintain adherence to the described persona.

