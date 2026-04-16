---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.650Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Veo 3.1 video extension"
feature_slug: "veo-3-1-video-extension"
latest_feature_date: "2025-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
keywords:
  - "veo"
  - "video"
  - "extension"
  - "supports"
  - "in"
  - "preview"
---

# Veo 3.1 video extension

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Veo 3.1 supports video extension in Preview.

## Extended Definition

Veo 3.1 supports video extension in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)

## Supporting Pages

### "Veo on Vertex AI video generation prompt guide \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- What's next Best practices for Veo on Vertex AI Generate videos with Veo on Vertex AI from text prompts Generate videos with Veo on Vertex AI from an image Generate videos with Veo on Vertex AI using first and last video frames Extend Veo on Vertex AI-generate videos Understand responsible AI and usage guidelines for Veo on Vertex AI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Anatomy of a Veo prompt When you use Veo to generate videos, using the correct keywords and prompt structure helps the model to generate the content that you want.
- Safety filters Veo applies safety filters across Vertex AI to help ensure that generated videos and uploaded photos don't contain offensive content.
- The following sections explain how to use key elements and keywords in your prompts to guide Veo when generating videos.

### "Responsible AI for Veo on Vertex AI video generation \_|\_ Generative AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Safety filter code categories Depending on the safety filters that you configure, your output may contain a safety code similar to: "Veo could not generate videos because the input image violates Vertex AI's usage guidelines.
- Safety filters Veo on Vertex AI offers several ways to input prompts to generate videos, including text, video, and images.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Responsible AI for Veo on Vertex AI video generation Stay organized with collections Save and categorize content based on your preferences.
- These safety filters aim to filter out input images and videos that violate the Google Cloud Platform Acceptable Use Policy , Generative AI Prohibited Use Policy , or Our AI Principles .

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- EmbedContentConfig ( output dimensionality = 128 ), ) Normalize the output embedding. embedding values np = np . array ( response . embeddings [ 0 ] . values ) normed embedding = embedding values np / np . linalg . norm ( embedding values np ) print ( f "Normed embedding length: { len ( normed embedding ) } " ) print ( f "Norm of normed embedding: { np . linalg . norm ( normed embedding ) : .6f } " ) # Should be very close to 1 Get multimodal embeddings REST PROJECT ID = "YOUR PROJECT ID" LOCATION = "us-central1" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /publishers/google/models/gemini-embedding-2-preview:embedContent" \ -d '{ "content": { "parts": [ { "text": "Whats this" }, { "file data": { "mime type": "video/mp4", "file uri": "gs://cloud-samples-data/generative-ai/video/pixel8.mp4" } } ] } }' Python from google import genai from google.genai import types Initialize the client. client = genai .
- Fprintf ( w , "Video embedding (length=%d): %v\n" , len ( videoEmbedding ), videoEmbedding ) // Example response: // Image embedding (length=1408): [-0.01558477 0.0258355 0.016342038 ... ] // Text embedding (length=1408): [-0.005894961 0.008349559 0.015355394 ... ] // Video embedding (length=1408): [-0.018867437 0.013997682 0.0012682161 ... ] return nil } Use gemini-embedding-2-preview The gemini-embedding-2-preview model accepts interleaved inputs across image, text, document, audio, and video modalities.
- VideoMetadata ( fps = 0.5 , start offset = "10s" , end offset = "20s" , ), ), ] ) response = client . models . embed content ( model = "gemini-embedding-2-preview" , contents = [ content ] ) print ( response . embeddings [ 0 ] . values ) Advanced options There are extra options in EmbedContentConfig . output dimensionality - int Reduce the dimensionality for the output embedding. document ocr - bool Enable OCR for document input.
- Part . from uri ( file uri = "gs://cloud-samples-data/generative-ai/audio/Chirp-3-Docs-Dive.mp3" , mime type = "audio/mpeg" , ), ], ) response = client . models . embed content ( model = "gemini-embedding-2-preview" , contents = [ content ] ) print ( response . embeddings [ 0 ] . values ) Video parameters The default video sampling rate is 1 frame per second (FPS).

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- It has a rating of 4.2 stars based on 411 reviews." } ] }, "finishReason": "STOP", "groundingMetadata": { "groundingChunks": [ { "maps": { "uri": "https://maps.google.com/?cid=9001322937822692826", "title": "The Italian Place", "placeId": "places/ChIJOTRDf qwt4kR2kV WYUf63w" } }, { "maps": { "uri": "https://maps.google.com/?cid=9001322937822692826", "title": "Hank's Pasta Bar", "placeId": "places/MMVtPzn9FGcevML89", "placeAnswerSources": { "reviewSnippets": [ { "id": "places/ChIJOTRDf qwt4kR2kV WYUf63w", "title": "Google Maps Review", "uri": "https://maps.google.com/?cid=9001322937822692826" }, ] } } }, ... ], "groundingSupports": [ { "segment": { "endIndex": 79, "text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout." }, "groundingChunkIndices": [ 0 ] }, ], "googleMapsWidgetContextToken": "widgetcontent/..." } } ], ... } Place properties This section lists place properties that are used to describe locations and used by Grounding with Google Maps to generate responses.
- The Routing tool supports the following: Modes of transportation : Routing for driving, walking, bicycling, transit, and two-wheeled motorized vehicles (not all travel modes are available in all countries) Multiple waypoints : Up to 13 intermediate stops between origin and destination Real-time traffic : Accounting for current traffic conditions to provide accurate "live" travel times rather than static averages The following are examples of the types of questions that the Routing tool supports: Proximity based on travel time : "What are some American restaurants within a 10-minute walk from the Hilton Hotel on 1335 6th Ave in NYC?" Commute estimation : "How long does it take to take public transit from Pike Place Market to Capitol Hill in Seattle?" Understand the response When a prompt triggers the Routing tool, the model generates a natural language answer backed by structured metadata.
- This code sample demonstrates a place source and a place answer source in the response: "groundingChunks" : [ { "maps" : { "uri" : "{Link to Maps Content}" , "title" : "{Name of Maps Place}" , "placeId" : "{Place ID}" , "placeAnswerSources" : { "reviewSnippets" : [ { "reviewId" : "{Review ID}" , "googleMapsUri" : "{Link to Maps Content}" , "title" : "{Title of review}" } ] } }, } ], Routing Preview — Grounding with Google Search This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Display Google Maps sources with Google Maps links For each source in groundingChunks and in grounding chunks.maps.placeAnswerSources.reviewSnippets , a link preview must be generated following these requirements: Attribute each source to Google Maps following the Google Maps text attribution guidelines .

