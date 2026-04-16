---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.642Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "imagen-2.0-edit-preview-0627"
feature_slug: "imagen-2-0-edit-preview-0627"
latest_feature_date: "2026-02-17"
deprecation_date: "2026-03-19"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig"
keywords:
  - "imagen"
  - "edit"
  - "preview"
  - "0627"
  - "deprecated"
  - "endpoint"
  - "scheduled"
  - "for"
---

# imagen-2.0-edit-preview-0627

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A deprecated Imagen 2.0 edit preview endpoint scheduled for shutdown on 2026-03-19; deprecated on 2026-03-19.

## Extended Definition

A deprecated Imagen 2.0 edit preview endpoint scheduled for shutdown on 2026-03-19; deprecated on 2026-03-19.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig)

## Supporting Pages

### "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Client () TODO(developer): Update and un-comment below line output file = "output-image.png" image = client . models . generate images ( model = "imagen-4.0-generate-001" , prompt = "A dog reading a newspaper" , config = GenerateImagesConfig ( image size = "2K" , ), ) image . generated images [ 0 ] . image . save ( output file ) print ( f "Created output image using { len ( image . generated images [ 0 ] . image . image bytes ) } bytes" ) Example response: Created output image using 1234567 bytes REST Set environment variables: export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT # Replace with your Google Cloud project export GOOGLE CLOUD LOCATION = us-central1 # Replace with the appropriate location for your project Run the following: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https:// ${ GOOGLE CLOUD LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ GOOGLE CLOUD PROJECT } /locations/ ${ GOOGLE CLOUD LOCATION } /publishers/google/models/imagen-4.0-generate-preview-05-20:predict" -d \ $'{ "instances": [ { "prompt": "a cat reading a book" } ], "parameters": { "sampleCount": 1 } }' The model returns a base64 image bytes object.
- Try more examples To learn more, run the following notebooks in the environment of your choice: "Gemini 3 Pro Image Generation in Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Gemini 2.5 Flash Image Generation in Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Imagen 4 Image Generation": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Imagen 3 Image Editing": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub For a full list of Jupyter notebook tutorials using Imagen, see the Generative AI on Vertex AI cookbook .
- With Gemini and Imagen on Vertex AI on Vertex AI, application developers can build next-generation AI products that transform their user's imagination into high-quality visual assets using AI generation, in seconds.
- Prompts for preceding images These images are generated using the general Imagen 3 image generation model ( imagen-3.0-generate-002 ) and the following prompts: Claymation scene.

### "Content Credentials \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- All images or videos created or modified using the listed models are automatically digitally signed by Google LLC. "Google Media Processing Services" is specified as the app or device used in the Content Credential. gemini-3.1-flash-image-preview gemini-3-pro-image-preview gemini-2.5-flash-image imagen-3.0-generate-002 imagen-3.0-generate-001 imagen-3.0-fast-generate-001 imagen-3.0-capability-001 imagen-4.0-generate-001 imagen-4.0-fast-generate-001 imagen-4.0-ultra-generate-001 virtual-try-on-001 veo-2.0-generate-001 veo-2.0-generate-exp veo-2.0-generate-preview veo-3.0-generate-preview veo-3.0-fast-generate-preview veo-3.0-generate-001 veo-3.0-fast-generate-001 veo-3.1-generate-preview veo-3.1-fast-generate-preview veo-3.1-generate-001 veo-3.1-fast-generate-001 veo-3.1-lite-generate-001 lyria-3-clip-preview lyria-3-pro-preview What's next Guide Generate and edit images with Gemini Use Gemini's image generation models (Nano Banana and Nano Banana Pro) to create and edit images.
- Content Credentials include information about the creation process, the tools used, and edits that were made to a media file.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
- On the other hand, if you're viewing a file with Content Credentials in a C2PA-compatible application, you can view the file's history, such as the device, app, or service used to create and edit the file.

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- String project = "YOUR PROJECT ID" ; String textPrompt = "YOUR TEXT PROMPT" ; String baseImagePath = "YOUR BASE IMAGE PATH" ; // Learn how to use text prompts to update an image: // https://cloud.google.com/vertex-ai/docs/generative-ai/image/edit-images Map<String , Object > parameters = new HashMap<String , Object > (); parameters . put ( "sampleCount" , 1 ); String location = "us-central1" ; String publisher = "google" ; String model = "multimodalembedding@001" ; predictImageFromImageAndText ( project , location , publisher , model , textPrompt , baseImagePath , parameters ); } // Update images using text prompts public static void predictImageFromImageAndText ( String project , String location , String publisher , String model , String textPrompt , String baseImagePath , Map<String , Object > parameters ) throws IOException { final String endpoint = String . format ( "%s-aiplatform.googleapis.com:443" , location ); final PredictionServiceSettings predictionServiceSettings = PredictionServiceSettings . newBuilder (). setEndpoint ( endpoint ). build (); // Initialize client that will be used to send requests.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // const baseImagePath = 'YOUR BASE IMAGE PATH'; // const textPrompt = 'YOUR TEXT PROMPT'; const aiplatform = require ( ' @google-cloud/aiplatform ' ); // Imports the Google Cloud Prediction service client const { PredictionServiceClient } = aiplatform . v1 ; // Import the helper module for converting arbitrary protobuf.Value objects. const { helpers } = aiplatform ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : 'us-central1-aiplatform.googleapis.com' , }; const publisher = 'google' ; const model = 'multimodalembedding@001' ; // Instantiates a client const predictionServiceClient = new PredictionServiceClient ( clientOptions ); async function predictImageFromImageAndText () { // Configure the parent resource const endpoint = projects/ ${ project } /locations/ ${ location } /publishers/ ${ publisher } /models/ ${ model } ; const fs = require ( 'fs' ); const imageFile = fs . readFileSync ( baseImagePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const prompt = { text : textPrompt , image : { bytesBase64Encoded : encodedImage , }, }; const instanceValue = helpers . toValue ( prompt ); const instances = [ instanceValue ]; const parameter = { sampleCount : 1 , }; const parameters = helpers . toValue ( parameter ); const request = { endpoint , instances , parameters , }; // Predict request const [ response ] = await predictionServiceClient . predict ( request ); console . log ( 'Get image embedding response' ); const predictions = response . predictions ; console . log ( '\tPredictions :' ); for ( const prediction of predictions ) { console . log ( \t\tPrediction : ${ JSON . stringify ( prediction ) } ); } } await predictImageFromImageAndText (); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- EmbedContentConfig ( output dimensionality = 128 ), ) Normalize the output embedding. embedding values np = np . array ( response . embeddings [ 0 ] . values ) normed embedding = embedding values np / np . linalg . norm ( embedding values np ) print ( f "Normed embedding length: { len ( normed embedding ) } " ) print ( f "Norm of normed embedding: { np . linalg . norm ( normed embedding ) : .6f } " ) # Should be very close to 1 Get multimodal embeddings REST PROJECT ID = "YOUR PROJECT ID" LOCATION = "us-central1" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /publishers/google/models/gemini-embedding-2-preview:embedContent" \ -d '{ "content": { "parts": [ { "text": "Whats this" }, { "file data": { "mime type": "video/mp4", "file uri": "gs://cloud-samples-data/generative-ai/video/pixel8.mp4" } } ] } }' Python from google import genai from google.genai import types Initialize the client. client = genai .
- UTF 8 ); JsonObject jsonInstance = new JsonObject (); jsonInstance . addProperty ( "text" , textPrompt ); JsonObject jsonImage = new JsonObject (); jsonImage . addProperty ( "bytesBase64Encoded" , encodedImage ); jsonInstance . add ( "image" , jsonImage ); Value instanceValue = stringToValue ( jsonInstance . toString ()); List<Value> instances = new ArrayList <> (); instances . add ( instanceValue ); Gson gson = new Gson (); String gsonString = gson . toJson ( parameters ); Value parameterValue = stringToValue ( gsonString ); PredictResponse predictResponse = predictionServiceClient . predict ( endpointName , instances , parameterValue ); System . out . println ( "Predict Response" ); System . out . println ( predictResponse ); for ( Value prediction : predictResponse . getPredictionsList ()) { System . out . format ( "\tPrediction: %s\n" , prediction ); } } } // Convert a Json string to a protobuf.Value static Value stringToValue ( String value ) throws InvalidProtocolBufferException { Value .

### EditConfig \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "bufferZones" : [ { object ( BufferZone ) } ] , "baseGuidanceScale" : [ integer ] , "enableClamping" : boolean , "baseSteps" : integer , "baseGamma" : number , "sr1Steps" : integer , "sr2Steps" : integer , "semanticFilterConfig" : { object ( SemanticFilterConfig ) } , "experimentUseServoBackend" : boolean , "editMode" : string , "alternateInitConfig" : { object ( AlternateInitConfig ) } , "experimentalSrVersion" : string , "experimentalBaseVersion" : string , "embeddingScale" : number , "enableBorderReplicatePadding" : boolean , "enablePostProcessingBlend" : boolean , "outpaintingConfig" : { object ( OutpaintingProcessingConfig ) } , "bgswapConfig" : { object ( BackgroundSwapProcessingConfig ) } } BufferZone Fields pixels integer The number of pixels for the mask to dilate. diffusionT number When during diffusion this pixel dilation takes effect, 1=start, 0=end.
- The values can be one of: inpainting-remove inpainting-insert outpainting alternateInitConfig object ( AlternateInitConfig ) Parameters for AlternateInitConfig experimentalSrVersion string Experimental flag for sr version. experimentalBaseVersion string Experimental flag for base version. embeddingScale number Parameter to control embedding scale, range: [0, 1], default: 0.6. enableBorderReplicatePadding (deprecated) boolean This item is deprecated!
- Parameter to enable post-processing blending for masked editing. outpaintingConfig object ( OutpaintingProcessingConfig ) Outpainting processing config. bgswapConfig object ( BackgroundSwapProcessingConfig ) Background swap processing config.
- This config is only enabled in Editing config. experimentUseServoBackend boolean Experiment flag to use servo backend. editMode string The editing mode that describes the use case for editing.

