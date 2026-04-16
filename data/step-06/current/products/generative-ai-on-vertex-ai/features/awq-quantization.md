---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.695Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "AWQ quantization"
feature_slug: "awq-quantization"
latest_feature_date: "2024-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ImageOutputOptions"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/OutputOptions"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo"
keywords:
  - "awq"
  - "quantization"
  - "hex"
  - "llm"
  - "option"
  - "based"
  - "on"
  - "activation"
---

# AWQ quantization

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A Hex-LLM quantization option based on activation-aware weight quantization.

## Extended Definition

A Hex-LLM quantization option based on activation-aware weight quantization.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ImageOutputOptions](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ImageOutputOptions)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/OutputOptions](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/OutputOptions)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo)

## Supporting Pages

### "Vertex AI consumption options \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Consumption options Vertex AI provides five consumption options tailored to different traffic patterns and business needs: Consumption option Description Ideal For Pricing Provisioned Throughput Provides guaranteed throughput for a commitment period Critical, steady-state, always-on workloads where SLA is needed Commitment-based (available in 1 week, 1 month, 3 month, and 1 year plans) PayGo Standard Flexible, pay-per-use option with no upfront commitment Default option for everyday use cases with flexibility for variable traffic demand Per-token (standard rate) Priority Delivers higher reliability through priority processing while maintaining PayGo flexibility Important workloads that require higher reliability and limits than standard PayGo Per-token (premium rate) Flex Cost-effective option for latency-tolerant workloads Tasks that can tolerate slower response time and higher throttling, offering lower prices Per-token (discounted rate) Batch inference Cost-optimized for high-volume, asynchronous processing Large-scale jobs where results are needed within a longer timeframe Per-token (discounted rate) For information on pricing, see the pricing page .
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Vertex AI consumption options Stay organized with collections Save and categorize content based on your preferences.
- Choose the right option for your workload Latency-sensitive workloads Organizations often have to make tradeoffs between reliability and cost while choosing the right consumption models.
- This guide details the available consumption options, helps you map them to your specific workload requirements, and provides strategies for optimizing latency, availability, and cost.

### ImageOutputOptions \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ImageOutputOptions](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ImageOutputOptions)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback ImageOutputOptions Stay organized with collections Save and categorize content based on your preferences.
- Defaults to image/png. compressionQuality integer Optional compression quality if encoding in image/jpeg.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-20 UTC."],[],[]]
- JSON representation { "mimeType" : string , "compressionQuality" : integer } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### OutputOptions \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/OutputOptions](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/OutputOptions)
- Source ID: `site-api-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback OutputOptions Stay organized with collections Save and categorize content based on your preferences.
- Configuration options for the output image.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-20 UTC."],[],[]]
- JSON representation { "mimeType" : string , "compressionQuality" : integer } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Get information about a context cache \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- GOOGLE CLOUD LOCATION 'global' ; async function listContentCaches ( projectId = GOOGLE CLOUD PROJECT , location = GOOGLE CLOUD LOCATION ) { const client = new GoogleGenAI ({ vertexai : true , project : projectId , location : location , httpOptions : { apiVersion : 'v1' , }, }); const contentCacheList = await client . caches . list (); // Access individual properties of a ContentCache object ( s ) const contentCacheNames = []; for ( const contentCache of contentCacheList . pageInternal ) { console . log ( Cache \ $ { contentCache . name } \ for model \ $ { contentCache . model } \ ` ); console . log ( Last updated at : $ { contentCache . updateTime } ); console . log ( Expires at : $ { contentCache . expireTime } ); contentCacheNames . push ( contentCache . name ); } console . log ( contentCacheNames ); // Example response : // Cache projects / 111111111111 / locations / us - central1 / cachedContents / 1111111111111111111 for // model projects / 111111111111 / locations / us - central1 / publishers / google / models / gemini - XXX - pro - XXX // Last updated at : 2025 - 02 - 13 14 : 46 : 42.620490 + 00 : 00 // CachedContentUsageMetadata ( audio duration seconds = None , image count = 167 , text count = 153 , total token count = 43130 , video duration seconds = None ) // ... return contentCacheNames ; } REST The following shows how to use REST to list the context caches associated with a Google Cloud project by sending a GET request to the publisher model endpoint.
- This client only needs to be created // once , and can be reused for multiple requests . try ( Client client = Client . builder () . location ( "global" ) . vertexAI ( true ) . httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ()) . build ()) { for ( CachedContent content : client . caches . list ( ListCachedContentsConfig . builder () . build ())) { content . name () . ifPresent ( name - > System . out . println ( "Name: " + name )); content . model () . ifPresent ( model - > System . out . println ( "Model: " + model )); content . updateTime () . ifPresent ( time - > System . out . println ( "Last updated at: " + time )); content . expireTime () . ifPresent ( time - > System . out . println ( "Expires at: " + time )); } // Example response : // Name : projects / 111111111111 / locations / global / cachedContents / 1111111111111111111 // Model : // projects / 111111111111 / locations / global / publishers / google / models / gemini - 2.5 - flash // Last updated at : 2025 - 07 - 28 T21 : 54 : 19.125825 Z // Expires at : 2025 - 08 - 04 T21 : 54 : 18.328233500 Z // ... } } } Node.js Install npm install @google/genai To learn more, see the SDK reference documentation .
- Client ( http options = HttpOptions ( api version = "v1" )) content cache list = client . caches . list () Access individual properties of a ContentCache object(s) for content cache in content cache list : print ( f "Cache { content cache . name } for model { content cache . model } " ) print ( f "Last updated at: { content cache . update time } " ) print ( f "Expires at: { content cache . expire time } " ) Example response: Cache projects/111111111111/locations/.../cachedContents/1111111111111111111 for model projects/111111111111/locations/.../publishers/google/models/gemini-XXX-pro-XXX Last updated at: 2025-02-13 14:46:42.620490+00:00 CachedContentUsageMetadata(audio duration seconds=None, image count=167, text count=153, total token count=43130, video duration seconds=None) ...
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = global export GOOGLE GENAI USE VERTEXAI = True import com.google.genai.Client ; import com.google.genai.types.CachedContent ; import com.google.genai.types.HttpOptions ; import com.google.genai.types.ListCachedContentsConfig ; public class ContentCacheList { public static void main ( String [] args ) { contentCacheList (); } // Lists all cached contents public static void contentCacheList () { // Initialize client that will be used to send requests .

