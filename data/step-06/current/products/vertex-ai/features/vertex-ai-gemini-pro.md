---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.093Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Gemini Pro"
feature_slug: "vertex-ai-gemini-pro"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/deprecations"
  - "https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens"
keywords:
  - "vertex"
  - "ai"
  - "gemini"
  - "pro"
  - "introduces"
  - "multimodal"
  - "language"
  - "model"
---

# Vertex AI Gemini Pro

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Introduces Vertex AI Gemini Pro, a multimodal language model, in Preview.

## Extended Definition

Introduces Vertex AI Gemini Pro, a multimodal language model, in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/deprecations](https://docs.cloud.google.com/vertex-ai/docs/deprecations)
- [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens)

## Supporting Pages

### "Quickstart: Send text prompts to Gemini using Vertex AI Studio \_|\_ Generative\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart)
- Source ID: `site-docs-reference-3`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use Vertex AI Studio to design, test, and manage prompts for Google's Gemini large language models (LLMs) and third-party models.
- Enable the API Sample prompts in Vertex AI Studio A prompt is a natural language request submitted to a language model that generates a response.
- Test the Gemini flash model using a summarization text prompt Send a summarization text prompt to the Gemini API in Vertex AI.
- Test the Gemini flash model using a code generation prompt Send a code generation prompt to the Gemini API in Vertex AI.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In Gemini Multimodal Live API, if store context bool is specified, Gemini will leverage it to automatically memorize the interactions between the client and Gemini, and retrieve context when needed to augment the response generation for users' ongoing and future interactions.
- This field is for use with Gemini 1.5 models; google search is used for Gemini 2.0 and newer models.
- Currently only supported for Gemini Multimodal Live API.
- GenerationConfig JSON representation { "stopSequences" : [ string ] , "responseMimeType" : string , "responseModalities" : [ enum ( Modality ) ] , "thinkingConfig" : { object ( ThinkingConfig ) } , "modelConfig" : { object ( ModelConfig ) } , // Union field temperature can be only one of the following: "temperature" : number // End of list of possible types for union field temperature . // Union field top p can be only one of the following: "topP" : number // End of list of possible types for union field top p . // Union field top k can be only one of the following: "topK" : number // End of list of possible types for union field top k . // Union field candidate count can be only one of the following: "candidateCount" : integer // End of list of possible types for union field candidate count . // Union field max output tokens can be only one of the following: "maxOutputTokens" : integer // End of list of possible types for union field max output tokens . // Union field response logprobs can be only one of the following: "responseLogprobs" : boolean // End of list of possible types for union field response logprobs . // Union field logprobs can be only one of the following: "logprobs" : integer // End of list of possible types for union field logprobs . // Union field presence penalty can be only one of the following: "presencePenalty" : number // End of list of possible types for union field presence penalty . // Union field frequency penalty can be only one of the following: "frequencyPenalty" : number // End of list of possible types for union field frequency penalty . // Union field seed can be only one of the following: "seed" : integer // End of list of possible types for union field seed . // Union field response schema can be only one of the following: "responseSchema" : { object ( Schema ) } // End of list of possible types for union field response schema . // Union field response json schema can be only one of the following: "responseJsonSchema" : value // End of list of possible types for union field response json schema . // Union field routing config can be only one of the following: "routingConfig" : { object ( RoutingConfig ) } // End of list of possible types for union field routing config . // Union field audio timestamp can be only one of the following: "audioTimestamp" : boolean // End of list of possible types for union field audio timestamp . // Union field media resolution can be only one of the following: "mediaResolution" : enum ( MediaResolution ) // End of list of possible types for union field media resolution . // Union field speech config can be only one of the following: "speechConfig" : { object ( SpeechConfig ) } // End of list of possible types for union field speech config . // Union field enable affective dialog can be only one of the following: "enableAffectiveDialog" : boolean // End of list of possible types for union field enable affective dialog . // Union field image config can be only one of the following: "imageConfig" : { object ( ImageConfig ) } // End of list of possible types for union field image config . } Fields stopSequences[] string Optional.

### Vertex AI deprecations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/deprecations](https://docs.cloud.google.com/vertex-ai/docs/deprecations)
- Source ID: `site-docs-reference-3`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AutoML Text September 15, 2024 June 15, 2025 Starting on September 15, 2024, you can only customize Text classification, entity extraction, and sentiment analysis objectives by moving to Vertex AI Gemini prompts and tuning.
- Training or updating models for Vertex AI AutoML for Text classification, entity extraction, and sentiment analysis objectives will no longer be available.
- Legacy AutoML Natural Language July 31, 2023 August 7, 2024 New models can no longer be trained nor deployed on the legacy platform.
- You can continue using existing Vertex AI AutoML Text models until June 15, 2025.

