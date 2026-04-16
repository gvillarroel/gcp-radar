---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.646Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Veo 3.1 reference-to-video 9:16 aspect ratio support"
feature_slug: "veo-3-1-reference-to-video-9-16-aspect-ratio-support"
latest_feature_date: "2026-01-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ListOperationsResponse"
keywords:
  - "veo"
  - "reference"
  - "to"
  - "video"
  - "16"
  - "aspect"
  - "ratio"
  - "preview"
---

# Veo 3.1 reference-to-video 9:16 aspect ratio support

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Veo 3.1 Preview reference-to-video generation now supports a 9:16 aspect ratio.

## Extended Definition

Veo 3.1 Preview reference-to-video generation now supports a 9:16 aspect ratio.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ListOperationsResponse)

## Supporting Pages

### "Veo on Vertex AI video generation prompt guide \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Veo on Vertex AI video generation prompt guide Stay organized with collections Save and categorize content based on your preferences.
- Anatomy of a Veo prompt When you use Veo to generate videos, using the correct keywords and prompt structure helps the model to generate the content that you want.
- Safety filters Veo applies safety filters across Vertex AI to help ensure that generated videos and uploaded photos don't contain offensive content.
- The following sections explain how to use key elements and keywords in your prompts to guide Veo when generating videos.

### "Responsible AI for Veo on Vertex AI video generation \_|\_ Generative AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Responsible AI for Veo on Vertex AI video generation Stay organized with collections Save and categorize content based on your preferences.
- Safety filter code categories Depending on the safety filters that you configure, your output may contain a safety code similar to: "Veo could not generate videos because the input image violates Vertex AI's usage guidelines.
- Safety filters Veo on Vertex AI offers several ways to input prompts to generate videos, including text, video, and images.
- The following table displays the support code to safety category mappings: Support code Safety category Description 58061214 17301594 Child Rejects requests to generate content depicting children if personGeneration isn't set to "allow all" or if the project isn't on the allowlist for this feature.

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the Python API reference documentation . import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel , Video from vertexai.vision models import VideoSegmentConfig TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) video = Video . load from file ( "gs://cloud-samples-data/vertex-ai-vision/highway vehicles.mp4" ) embeddings = model . get embeddings ( image = image , video = video , video segment config = VideoSegmentConfig ( end offset sec = 1 ), contextual text = "Cars on Highway" , ) print ( f "Image Embedding: { embeddings . image embedding } " ) Video Embeddings are segmented based on the video segment config. print ( "Video Embeddings:" ) for video embedding in embeddings . video embeddings : print ( f "Video Segment: { video embedding . start offset sec } - { video embedding . end offset sec } " ) print ( f "Embedding: { video embedding . embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [-0.0123144267, 0.0727186054, 0.000201397663, ...] Video Embeddings: Video Segment: 0.0 - 1.0 Embedding: [-0.0206376351, 0.0345234685, ...] Text Embedding: [-0.0207006838, -0.00251058186, ...] Go Before trying this sample, follow the Go setup instructions in the Vertex AI quickstart using client libraries .
- Response (7 second video, no videoSegmentConfig specified): { "predictions": [ { "videoEmbeddings": [ { "endOffsetSec": 7, "embedding": [ -0.0045467657, 0.0258095954, 0.0146885719, 0.00945400633, [...] -0.0023291884, -0.00493789, 0.00975185353, 0.0168156829 ], "startOffsetSec": 0 } ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Response (59 second video, with the following video segment config: "videoSegmentConfig": { "startOffsetSec": 0, "endOffsetSec": 60, "intervalSec": 10 } ): { "predictions": [ { "videoEmbeddings": [ { "endOffsetSec": 10, "startOffsetSec": 0, "embedding": [ -0.00683252793, 0.0390476175, [...] 0.00657121744, 0.013023301 ] }, { "startOffsetSec": 10, "endOffsetSec": 20, "embedding": [ -0.0104404651, 0.0357737206, [...] 0.00509833824, 0.0131902946 ] }, { "startOffsetSec": 20, "embedding": [ -0.0113538112, 0.0305239167, [...] -0.00195809244, 0.00941874553 ], "endOffsetSec": 30 }, { "embedding": [ -0.00299320649, 0.0322436653, [...] -0.00993082579, 0.00968887936 ], "startOffsetSec": 30, "endOffsetSec": 40 }, { "endOffsetSec": 50, "startOffsetSec": 40, "embedding": [ -0.00591270532, 0.0368893594, [...] -0.00219071587, 0.0042470959 ] }, { "embedding": [ -0.00458270218, 0.0368121453, [...] -0.00317760976, 0.00595594104 ], "endOffsetSec": 59, "startOffsetSec": 50 } ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
- For more information, see the Python API reference documentation . import vertexai from vertexai.vision models import MultiModalEmbeddingModel , Video from vertexai.vision models import VideoSegmentConfig TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) embeddings = model . get embeddings ( video = Video . load from file ( "gs://cloud-samples-data/vertex-ai-vision/highway vehicles.mp4" ), video segment config = VideoSegmentConfig ( end offset sec = 1 ), ) Video Embeddings are segmented based on the video segment config. print ( "Video Embeddings:" ) for video embedding in embeddings . video embeddings : print ( f "Video Segment: { video embedding . start offset sec } - { video embedding . end offset sec } " ) print ( f "Embedding: { video embedding . embedding } " ) Example response: Video Embeddings: Video Segment: 0.0 - 1.0 Embedding: [-0.0206376351, 0.0123456789, ...] Go Before trying this sample, follow the Go setup instructions in the Vertex AI quickstart using client libraries .
- EmbedContentConfig ( output dimensionality = 128 ), ) Normalize the output embedding. embedding values np = np . array ( response . embeddings [ 0 ] . values ) normed embedding = embedding values np / np . linalg . norm ( embedding values np ) print ( f "Normed embedding length: { len ( normed embedding ) } " ) print ( f "Norm of normed embedding: { np . linalg . norm ( normed embedding ) : .6f } " ) # Should be very close to 1 Get multimodal embeddings REST PROJECT ID = "YOUR PROJECT ID" LOCATION = "us-central1" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /publishers/google/models/gemini-embedding-2-preview:embedContent" \ -d '{ "content": { "parts": [ { "text": "Whats this" }, { "file data": { "mime type": "video/mp4", "file uri": "gs://cloud-samples-data/generative-ai/video/pixel8.mp4" } } ] } }' Python from google import genai from google.genai import types Initialize the client. client = genai .

### "ListOperationsResponse \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ListOperationsResponse)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback ListOperationsResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "operations" : [ { object ( Operation ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Operation This resource represents a long-running operation that is the result of a network API call.
- Fields operations[] object ( Operation ) A list of operations that matches the specified filter in the request. nextPageToken string The standard List next-page token. unreachable[] string Unordered list.
- Populated when the request sets ListOperationsRequest.return partial success and reads across collections.

