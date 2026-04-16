---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.702Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Outpainting"
feature_slug: "outpainting"
latest_feature_date: "2024-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/OutpaintingProcessingConfig"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/SemanticFilterConfig"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig"
keywords:
  - "outpainting"
  - "an"
  - "editing"
  - "that"
  - "expands"
  - "image"
  - "beyond"
  - "masked"
---

# Outpainting

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

An editing feature that expands an image beyond a masked area; Outpainting lets you expand a masked area of an image.

## Extended Definition

An editing feature that expands an image beyond a masked area; Outpainting lets you expand a masked area of an image.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/OutpaintingProcessingConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/OutpaintingProcessingConfig)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/SemanticFilterConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/SemanticFilterConfig)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig)

## Supporting Pages

### "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- With Gemini and Imagen on Vertex AI on Vertex AI, application developers can build next-generation AI products that transform their user's imagination into high-quality visual assets using AI generation, in seconds.
- API reference overview : To view an overview of the API options for image generation and editing, see the imagegeneration model API reference .
- Model versions There are multiple image generation models that you can use.
- Client () TODO(developer): Update and un-comment below line output file = "output-image.png" image = client . models . generate images ( model = "imagen-4.0-generate-001" , prompt = "A dog reading a newspaper" , config = GenerateImagesConfig ( image size = "2K" , ), ) image . generated images [ 0 ] . image . save ( output file ) print ( f "Created output image using { len ( image . generated images [ 0 ] . image . image bytes ) } bytes" ) Example response: Created output image using 1234567 bytes REST Set environment variables: export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT # Replace with your Google Cloud project export GOOGLE CLOUD LOCATION = us-central1 # Replace with the appropriate location for your project Run the following: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https:// ${ GOOGLE CLOUD LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ GOOGLE CLOUD PROJECT } /locations/ ${ GOOGLE CLOUD LOCATION } /publishers/google/models/imagen-4.0-generate-preview-05-20:predict" -d \ $'{ "instances": [ { "prompt": "a cat reading a book" } ], "parameters": { "sampleCount": 1 } }' The model returns a base64 image bytes object.

### "OutpaintingProcessingConfig \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/OutpaintingProcessingConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/OutpaintingProcessingConfig)
- Source ID: `site-api-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Fields top integer Number of pixels to expand the image and mask from the top value is an integer that has a minimum of 0 and a maximum of 500. bottom integer Number of pixels to expand the image and mask from the bottom value is an integer that has a minimum of 0 and a maximum of 500. left integer Number of pixels to expand the image and mask from the left value is an integer that has a minimum of 0 and a maximum of 500. right integer Number of pixels to expand the image and mask from the right value is an integer that has a minimum of 0 and a maximum of 500.
- Default value: 0 enableBorderReplicatePadding boolean Parameter to enable recompute with BORDER REPLICATE mode for outpainting image padding. expansionConfig object ( ExpansionConfig ) Fix to one-side expansion issue by adding padding to the image and mask in the backend server and cropped them out in the post-processing.
- JSON representation { "blendingMode" : string , "blendingFactor" : number , "enableBorderReplicatePadding" : boolean , "expansionConfig" : { object ( ExpansionConfig ) } } ExpansionConfig ExpansionConfig to fix one-side expansion issue by adding padding to the image and mask in the backend server and cropped them out in the post-processing.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback OutpaintingProcessingConfig Stay organized with collections Save and categorize content based on your preferences.

### "SemanticFilterConfig \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/SemanticFilterConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/SemanticFilterConfig)
- Source ID: `site-api-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Final filter list is an union of filter classes and filter entities. enableSemanticFilter boolean Whether to enable semantic filtering mode, which enables the following parameters to apply semantic filter on image editing results. intersectRatioThreshold number A threshold value to decide what detected boxes should be included in semantic filter checking. additionalSampleCount integer Additional count of samples, expect a value between 0 and 4. semanticFilterMode string A string to specify semantic filter experimental mode.
- This allows semantic filter to change the default behavior to filter generated images. detectionScoreThreshold number A detection confidence score threshold to decide which detection boxes are considered as the valid detections for semantic filter checking. intersectRatioThresholdOutpainting number For outpainting case.
- Any detected object in the masked region bearing anyone of the class names will be checked. filterEntitiesOutpainting[] string For outpainting case.
- JSON representation { "filterClasses" : [ string ] , "filterEntities" : [ string ] , "filterClassesOutpainting" : [ string ] , "filterEntitiesOutpainting" : [ string ] , "filterClassesSpecialInit" : [ string ] , "filterEntitiesSpecialInit" : [ string ] , "enableSemanticFilter" : boolean , "intersectRatioThreshold" : number , "additionalSampleCount" : integer , "semanticFilterMode" : string , "detectionScoreThreshold" : number , "intersectRatioThresholdOutpainting" : number , "detectionScoreThresholdOutpainting" : number , "intersectRatioThresholdSpecialInit" : number , "detectionScoreThresholdSpecialInit" : number } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### EditConfig \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameter to enable post-processing blending for masked editing. outpaintingConfig object ( OutpaintingProcessingConfig ) Outpainting processing config. bgswapConfig object ( BackgroundSwapProcessingConfig ) Background swap processing config.
- This config is only enabled in Editing config. experimentUseServoBackend boolean Experiment flag to use servo backend. editMode string The editing mode that describes the use case for editing.
- Parameter to enable recompute with BORDER REPLICATE mode for outpainting image padding. enablePostProcessingBlend (deprecated) boolean This item is deprecated!
- Users can set filter classes and filter entities to filter out generated images that hallucinate undesired objects in the inpainted area.

