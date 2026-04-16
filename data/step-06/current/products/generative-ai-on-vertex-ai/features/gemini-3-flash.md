---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.649Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Gemini 3 Flash"
feature_slug: "gemini-3-flash"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview"
keywords:
  - "gemini"
  - "flash"
  - "is"
  - "available"
  - "in"
  - "public"
  - "preview"
  - "model"
---

# Gemini 3 Flash

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Gemini 3 Flash is available in public preview in Model Garden.

## Extended Definition

Gemini 3 Flash is available in public preview in Model Garden.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)

## Supporting Pages

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Make sure that you have the following information: The ID and the version of the tuned Gemini model The endpoint resource name for the deployed fine-tuned model Supported versions Fine-tuned Gemini models support implicit caching for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching is supported for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 ) Gemini 2.0 Flash-Lite Create a context cache for a fine-tuned model The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache .
- Prerequisites Fine-tuning a Gemini Model: You need a deployed fine-tuned Gemini model based on a supported base model (see Context caching overview ).
- Consult the linked documentation for the general process; this guide focuses on the difference of creating context cache for fine-tuned Gemini models.
- Consult the linked documentation for the general process; this guide focuses on the difference of using context cache for fine-tuned Gemini models.

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- The Routing tool supports the following: Modes of transportation : Routing for driving, walking, bicycling, transit, and two-wheeled motorized vehicles (not all travel modes are available in all countries) Multiple waypoints : Up to 13 intermediate stops between origin and destination Real-time traffic : Accounting for current traffic conditions to provide accurate "live" travel times rather than static averages The following are examples of the types of questions that the Routing tool supports: Proximity based on travel time : "What are some American restaurants within a 10-minute walk from the Hilton Hotel on 1335 6th Ave in NYC?" Commute estimation : "How long does it take to take public transit from Pike Place Market to Capitol Hill in Seattle?" Understand the response When a prompt triggers the Routing tool, the model generates a natural language answer backed by structured metadata.
- Valid values include the following: 2D roadmap map : map-mode="roadmap" 3D hybrid map : map-mode="hybrid" No map : map-mode="none" This code sample demonstrates changing the map mode to a 2D map. <gmp-place-contextual id="widget"> <gmp-place-contextual-list-config map-mode="roadmap"> </gmp-place-contextual-list-config> </gmp-place-contextual> What's next To learn more about how to ground Gemini models to your data, see Grounding with your data .
- Client ( http options = HttpOptions ( api version = "v1" )) response = client . models . generate content ( model = "gemini-2.5-flash" , contents = "Where can I get the best espresso near me?" , config = GenerateContentConfig ( tools = [ Use Google Maps Tool Tool ( google maps = GoogleMaps ( enable widget = False # Optional: return Maps widget token )) ], tool config = types .
- Overview Grounding with Google Maps with Vertex AI is a service that connects Gemini models with geospatial data from Google Maps.

### "Grounding with Google Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Grounding with Google Image Search is available in Preview only for the Gemini 3.1 Flash Image model .
- There is a slight chance of rain on both days.\n" } ] }, "finishReason": "STOP", "groundingMetadata": { "webSearchQueries": [ "weather in Chicago this weekend" ], "searchEntryPoint": { "renderedContent": "..." }, "groundingChunks": [ { "web": { "uri": "https://www.google.com/search?q=weather+in+Chicago,+IL", "title": "Weather information for locality: Chicago, administrative area: IL", "domain": "google.com" } }, { "web": { "uri": "...", "title": "weatherbug.com", "domain": "weatherbug.com" } } ], "groundingSupports": [ { "segment": { "startIndex": 85, "endIndex": 214, "text": "The temperature will be between 49°F (9°C) and 55°F (13°C) on Saturday and between 51°F (11°C) and 56°F (13°C) on Sunday." }, "groundingChunkIndices": [ 0 ], "confidenceScores": [ 0.8662828 ] }, { "segment": { "startIndex": 215, "endIndex": 261, "text": "There is a slight chance of rain on both days." }, "groundingChunkIndices": [ 1, 0 ], "confidenceScores": [ 0.62836814, 0.6488607 ] } ], "retrievalMetadata": {} } } ], "usageMetadata": { "promptTokenCount": 10, "candidatesTokenCount": 98, "totalTokenCount": 108, "trafficType": "ON DEMAND", "promptTokensDetails": [ { "modality": "TEXT", "tokenCount": 10 } ], "candidatesTokensDetails": [ { "modality": "TEXT", "tokenCount": 98 } ] }, "modelVersion": "gemini-2.0-flash", "createTime": "2025-05-19T14:42:55.000643Z", "responseId": "b0MraIMFoqnf-Q-D66G4BQ" } Grounding with Google Image Search Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- GOOGLE CLOUD LOCATION 'global' ; async function generateGoogleSearch ( projectId = GOOGLE CLOUD PROJECT , location = GOOGLE CLOUD LOCATION ) { const client = new GoogleGenAI ({ vertexai : true , project : projectId , location : location , }); const response = await client . models . generateContent ({ model : 'gemini-2.5-flash' , contents : 'When is the next total solar eclipse in the United States?' , config : { tools : [ { googleSearch : {}, }, ], }, }); console . log ( response . text ); // Example response : // 'The next total solar eclipse in United States will occur on ...' return response . text ; } REST Before using any of the request data, make the following replacements: LOCATION : The region to process the request.
- Client ( http options = HttpOptions ( api version = "v1" )) response = client . models . generate content ( model = "gemini-2.5-flash" , contents = "When is the next total solar eclipse in the United States?" , config = GenerateContentConfig ( tools = [ Use Google Search Tool Tool ( google search = GoogleSearch ( Optional: Domains to exclude from results exclude domains = [ "domain.com" , "domain2.com" ] ) ) ], ), ) print ( response . text ) Example response: 'The next total solar eclipse in the United States will occur on ...' Go Learn how to install or update the Go .

### "Context caching overview \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported models Explicit caching is supported when using the following models: Gemini 3.1 Flash-Lite preview Gemini 3.1 Pro preview Gemini 3 Flash preview Gemini 2.5 Pro Gemini 2.5 Flash preview Gemini 2.5 Flash-Lite preview Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching also supports the latest aliases, including: gemini-flash-latest gemini-flash-lite-latest When to use context caching Context caching is particularly well suited to scenarios where a substantial initial context is referenced repeatedly by subsequent requests.
- Supported models Implicit caching is supported when using the following models: Gemini 3.1 Flash-Lite preview Gemini 3.1 Pro preview Gemini 3 Flash preview Gemini 2.5 Pro Gemini 2.5 Flash preview Gemini 2.5 Flash-Lite preview Gemini 2.5 Flash Gemini 2.5 Flash-Lite Implicit caching also supports the latest aliases, including: gemini-flash-latest gemini-flash-lite-latest Implicit caching also supports Open Models.
- Limits The content that you explicitly cache must adhere to the limits shown in the following table: Context caching limits Minimum cache token count for implicit and explicit caching Gemini 3 and Gemini 3.1 models: 4,096 tokens Gemini 2.0 and 2.5 models: 2,048 tokens Maximum size of content you can cache using a blob or text 10 MB Minimum time before a cache expires after it's created 1 minute Maximum time before a cache expires after it's created There isn't a maximum cache duration Important: When caching objects that are stored in a Cloud Storage bucket, don't make changes to objects until the cached contents are expired or deleted.
- On Gemini 2.5 or later models this discount is 90%, on Gemini 2.0 models this discount is 75%.

