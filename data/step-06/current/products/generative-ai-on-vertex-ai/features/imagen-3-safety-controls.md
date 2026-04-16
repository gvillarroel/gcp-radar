---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.717Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Imagen 3 safety controls"
feature_slug: "imagen-3-safety-controls"
latest_feature_date: "2024-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise"
keywords:
  - "imagen"
  - "safety"
  - "controls"
  - "provides"
  - "user"
  - "configurable"
  - "settings"
  - "including"
---

# Imagen 3 safety controls

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Imagen 3 provides user-configurable safety settings, including person and face settings.

## Extended Definition

Imagen 3 provides user-configurable safety settings, including person and face settings.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise)

## Supporting Pages

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- For example, if a nearest neighbor query for 20 nearest neighbors returned 19 of the "ground truth" nearest neighbors, the recall is 19/20x100 = 95%. recipe In the context of Managed Training, a recipe is a comprehensive and reusable package that contains everything needed to execute a specific large-scale training workload. recommendation system A recommendation system is a machine learning-based system that helps users find compelling content in a large corpus.
- The digital content should be tracked to the movement of the camera or glasses (depending on how the scene is rendered) so that it appears as if it is part of the real world. authentication The process of verifying the identity of a client (which might be a user or another process) for the purposes of gaining access to a secured system.
- For instance, it is the required method for connecting your cluster's VPC to a Filestore instance, which provides the necessary shared /home directory for all the nodes in your cluster. word embedding Word embeddings are a way to represent words as dense vectors of floating-point values.
- Offline or batch serving exports high volumes of feature data—including historical data—for offline processing, such as ML model training. feature view A feature view is a logical collection of features materialized from a BigQuery data source to an online store instance.

### "Vertex AI quickstart \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Once created , it can be reused for multiple requests . try ( Client client = Client . builder () . location ( "global" ) . vertexAI ( true ) . build ()) { GenerateContentConfig contentConfig = GenerateContentConfig . builder () . responseModalities ( "TEXT" , "IMAGE" ) . candidateCount ( 1 ) . safetySettings ( SafetySetting . builder () . method ( "PROBABILITY" ) . category ( "HARM CATEGORY DANGEROUS CONTENT" ) . threshold ( "BLOCK MEDIUM AND ABOVE" ) . build ()) . build (); GenerateContentResponse response = client . models . generateContent ( modelId , "Generate an image of the Eiffel tower with fireworks in the background." , contentConfig ); // Get parts of the response List<Part> parts = response . candidates () . flatMap ( candidates - > candidates . stream () . findFirst ()) . flatMap ( Candidate :: content ) . flatMap ( Content :: parts ) . orElse ( new ArrayList <> ()); // For each part print text if present , otherwise read image data if present and // write it to the output file for ( Part part : parts ) { if ( part . text () . isPresent ()) { System . out . println ( part . text () . get ()); } else if ( part . inlineData () . flatMap ( Blob :: data ) . isPresent ()) { BufferedImage image = ImageIO . read ( new ByteArrayInputStream ( part . inlineData () . flatMap ( Blob :: data ) . get ())); ImageIO . write ( image , "png" , new File ( outputFile )); } } System . out . println ( "Content written to: " + outputFile ); // Example response : // Here is the Eiffel Tower with fireworks in the background ... // // Content written to : resources / output / example - image - eiffel - tower . png } } } Image understanding Gemini can understand images as well.
- Overview Explore Google models Explore the latest Google models supported in Vertex AI, including Gemini, Imagen, Veo, and Gemma.
- ModalityImage ), }, CandidateCount : int32 ( 1 ), SafetySettings : [] genai .
- The tower will be // illuminated , standing tall as the focal point of the scene , with the bursts of // light from the fireworks creating a festive atmosphere . return generatedFileNames ; } Java import com.google.genai.Client ; import com.google.genai.types.Blob ; import com.google.genai.types.Candidate ; import com.google.genai.types.Content ; import com.google.genai.types.GenerateContentConfig ; import com.google.genai.types.GenerateContentResponse ; import com.google.genai.types.Part ; import com.google.genai.types.SafetySetting ; import java.awt.image.BufferedImage ; import java.io.ByteArrayInputStream ; import java.io.File ; import java.io.IOException ; import java.util.ArrayList ; import java.util.List ; import javax.imageio.ImageIO ; public class ImageGenMmFlashWithText { public static void main ( String [] args ) throws IOException { // TODO ( developer ): Replace these variables before running the sample .

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- String project = "YOUR PROJECT ID" ; String textPrompt = "YOUR TEXT PROMPT" ; String baseImagePath = "YOUR BASE IMAGE PATH" ; // Learn how to use text prompts to update an image: // https://cloud.google.com/vertex-ai/docs/generative-ai/image/edit-images Map<String , Object > parameters = new HashMap<String , Object > (); parameters . put ( "sampleCount" , 1 ); String location = "us-central1" ; String publisher = "google" ; String model = "multimodalembedding@001" ; predictImageFromImageAndText ( project , location , publisher , model , textPrompt , baseImagePath , parameters ); } // Update images using text prompts public static void predictImageFromImageAndText ( String project , String location , String publisher , String model , String textPrompt , String baseImagePath , Map<String , Object > parameters ) throws IOException { final String endpoint = String . format ( "%s-aiplatform.googleapis.com:443" , location ); final PredictionServiceSettings predictionServiceSettings = PredictionServiceSettings . newBuilder (). setEndpoint ( endpoint ). build (); // Initialize client that will be used to send requests.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/multimodalembedding@001:predict Request JSON body: { "instances": [ { "text": " TEXT ", "image": { "gcsUri": " IMAGE URI " }, "video": { "gcsUri": " VIDEO URI ", "videoSegmentConfig": { "startOffsetSec": START SECOND , "endOffsetSec": END SECOND , "intervalSec": INTERVAL SECONDS } } } ] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/multimodalembedding@001:predict Request JSON body: { "instances": [ { "video": { "gcsUri": " VIDEO URI ", "videoSegmentConfig": { "startOffsetSec": START SECOND , "endOffsetSec": END SECOND , "intervalSec": INTERVAL SECONDS } } } ] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/multimodalembedding@001:predict Request JSON body: { "instances": [ { "image": { "gcsUri": " IMAGE URI " }, "text": " TEXT " } ], "parameters": { "dimension": EMBEDDING DIMENSION } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Web Grounding for Enterprise \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- PROMPT : Your prompt. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " -H "Content-Type: application/json" -H "x-server-timeout: 60" https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /publishers/google/models/gemini-2.0-flash:generateContent -d ' { "contents": [{ "role": "user", "parts": [{ "text": PROMPT }] }], "tools": [{ "enterpriseWebSearch": { } }] } ' Use Google Search suggestions When you use Web Grounding for Enterprise, and you receive Search suggestions in your response, you must display the Search suggestions in production and in your applications.
- Code to implement a Search suggestion When you use the API to ground a response to search, the model response provides compliant HTML and CSS styling in the renderedContent field, which you implement to display Search suggestions in your application.
- To use the API, you must set the following fields: Contents.parts.text : The text query users want to send to the API. tools.enterpriseWebSearch : When this tool is provided, Web Grounding for Enterprise can be used by Gemini.
- Note: The provided HTML and CSS provided in the API response automatically adapts to your device settings, which displays in either light or dark mode based on the your preference indicated by @media(prefers-color-scheme) .

