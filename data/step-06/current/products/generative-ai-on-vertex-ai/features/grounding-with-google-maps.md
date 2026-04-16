---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.684Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Grounding with Google Maps"
feature_slug: "grounding-with-google-maps"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-elasticsearch"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search"
keywords:
  - "grounding"
  - "with"
  - "maps"
  - "grounds"
  - "responses"
  - "in"
---

# Grounding with Google Maps

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Grounding with Google Maps grounds responses in Google Maps data.

## Extended Definition

Grounding with Google Maps grounds responses in Google Maps data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-elasticsearch](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-elasticsearch)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search)

## Supporting Pages

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 348
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It has a rating of 4.2 stars based on 411 reviews." } ] }, "finishReason": "STOP", "groundingMetadata": { "groundingChunks": [ { "maps": { "uri": "https://maps.google.com/?cid=9001322937822692826", "title": "The Italian Place", "placeId": "places/ChIJOTRDf qwt4kR2kV WYUf63w" } }, { "maps": { "uri": "https://maps.google.com/?cid=9001322937822692826", "title": "Hank's Pasta Bar", "placeId": "places/MMVtPzn9FGcevML89", "placeAnswerSources": { "reviewSnippets": [ { "id": "places/ChIJOTRDf qwt4kR2kV WYUf63w", "title": "Google Maps Review", "uri": "https://maps.google.com/?cid=9001322937822692826" }, ] } } }, ... ], "groundingSupports": [ { "segment": { "endIndex": 79, "text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout." }, "groundingChunkIndices": [ 0 ] }, ], "googleMapsWidgetContextToken": "widgetcontent/..." } } ], ... } Place properties This section lists place properties that are used to describe locations and used by Grounding with Google Maps to generate responses.
- Use Grounding with Google Maps to ground your model's responses This code sample demonstrates how to use Grounding with Google Maps to ground your model's responses.
- This code sample demonstrates a place source and a place answer source in the response: "groundingChunks" : [ { "maps" : { "uri" : "{Link to Maps Content}" , "title" : "{Name of Maps Place}" , "placeId" : "{Place ID}" , "placeAnswerSources" : { "reviewSnippets" : [ { "reviewId" : "{Review ID}" , "googleMapsUri" : "{Link to Maps Content}" , "title" : "{Title of review}" } ] } }, } ], Routing Preview — Grounding with Google Search This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Uses of Grounding with Google Maps You can use Grounding with Google Maps for various applications, such as: Conversational assistants that can answer questions about nearby places, such as "Where's the nearest place to get an Italian espresso?" Personalized descriptions and community insights, such as"Can you tell me more about family-friendly restaurants that are within a walkable distance?" Summaries of areas around specific locations, such as an EV charging station or a hotel.

### "Grounding with Elasticsearch \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-elasticsearch](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-elasticsearch)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By grounding with Elasticsearch, you can take advantage of your existing Elasticsearch indexes to help enhance the quality and reliability of Gemini's output, reducing hallucinations and helping to ensure responses are relevant to your data.
- If your model prompt successfully grounds to your Elasticsearch data source, then the responses include grounding metadata, which identifies the parts of the response that were derived from your Elasticsearch data.
- Understand your response If your model prompt successfully grounds to Elasticsearch data stores using the Vertex AI Studio or the API, then the model's responses include metadata with citations and source content.
- Grounding Gemini with Elasticsearch Grounding involves using public and private datasets to provide context and facts to ground Large Language Model (LLM) responses.

### "Grounding with Vertex AI Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- If your model prompt successfully grounds to your data source, then the responses include grounding metadata, which identifies the parts of the response that were derived from your data.
- Go to IAM To get the permissions that you need to use grounding with Vertex AI Search, ask your administrator to grant you the following IAM roles: To read all Discovery Engine resources: Discovery Engine Viewer ( roles/discoveryengine.viewer ).
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Grounding with Vertex AI Search Stay organized with collections Save and categorize content based on your preferences.
- Grounding Gemini to your data If you want to do retrieval-augmented generation (RAG), connect your model to your website data or your sets of documents, then use Grounding with Vertex AI Search .

### "Grounding with Google Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- This capability supports all grounding methods including Search, Google Maps, and Vertex AI Search, providing the precise source details required to display accurate, interactive citations within your application. response = client . models . generate content ( model = "gemini-3.1-pro-preview" , contents = "Where will the next FIFA World Cup be held?" , config = types .
- Benefits The following complex prompts and workflows that require planning, reasoning, and thinking can be done when you use Grounding with Google Search as a tool: You can ground to help ensure responses are based on the latest and most accurate information.
- Understand your response If your model prompt successfully uses Grounding with Google Search from the Vertex AI Studio or from the API, then the responses include metadata with source links (web URLs).
- Your prompt responses now use Grounding with Google Search.

