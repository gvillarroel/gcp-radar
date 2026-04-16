---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.728Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Imagen safety settings"
feature_slug: "imagen-safety-settings"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/bounding-box-detection"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
keywords:
  - "imagen"
  - "safety"
  - "settings"
  - "imagegeneration"
  - "006"
  - "adds"
  - "user"
  - "configurable"
---

# Imagen safety settings

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Imagen 2 imagegeneration@006 adds user-configurable safety settings.

## Extended Definition

Imagen 2 imagegeneration@006 adds user-configurable safety settings.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/bounding-box-detection](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/bounding-box-detection)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)

## Supporting Pages

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the Python API reference documentation . import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel , Video from vertexai.vision models import VideoSegmentConfig TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) video = Video . load from file ( "gs://cloud-samples-data/vertex-ai-vision/highway vehicles.mp4" ) embeddings = model . get embeddings ( image = image , video = video , video segment config = VideoSegmentConfig ( end offset sec = 1 ), contextual text = "Cars on Highway" , ) print ( f "Image Embedding: { embeddings . image embedding } " ) Video Embeddings are segmented based on the video segment config. print ( "Video Embeddings:" ) for video embedding in embeddings . video embeddings : print ( f "Video Segment: { video embedding . start offset sec } - { video embedding . end offset sec } " ) print ( f "Embedding: { video embedding . embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [-0.0123144267, 0.0727186054, 0.000201397663, ...] Video Embeddings: Video Segment: 0.0 - 1.0 Embedding: [-0.0206376351, 0.0345234685, ...] Text Embedding: [-0.0207006838, -0.00251058186, ...] Go Before trying this sample, follow the Go setup instructions in the Vertex AI quickstart using client libraries .
- Response (7 second video, no videoSegmentConfig specified): { "predictions": [ { "videoEmbeddings": [ { "endOffsetSec": 7, "embedding": [ -0.0045467657, 0.0258095954, 0.0146885719, 0.00945400633, [...] -0.0023291884, -0.00493789, 0.00975185353, 0.0168156829 ], "startOffsetSec": 0 } ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Response (59 second video, with the following video segment config: "videoSegmentConfig": { "startOffsetSec": 0, "endOffsetSec": 60, "intervalSec": 10 } ): { "predictions": [ { "videoEmbeddings": [ { "endOffsetSec": 10, "startOffsetSec": 0, "embedding": [ -0.00683252793, 0.0390476175, [...] 0.00657121744, 0.013023301 ] }, { "startOffsetSec": 10, "endOffsetSec": 20, "embedding": [ -0.0104404651, 0.0357737206, [...] 0.00509833824, 0.0131902946 ] }, { "startOffsetSec": 20, "embedding": [ -0.0113538112, 0.0305239167, [...] -0.00195809244, 0.00941874553 ], "endOffsetSec": 30 }, { "embedding": [ -0.00299320649, 0.0322436653, [...] -0.00993082579, 0.00968887936 ], "startOffsetSec": 30, "endOffsetSec": 40 }, { "endOffsetSec": 50, "startOffsetSec": 40, "embedding": [ -0.00591270532, 0.0368893594, [...] -0.00219071587, 0.0042470959 ] }, { "embedding": [ -0.00458270218, 0.0368121453, [...] -0.00317760976, 0.00595594104 ], "endOffsetSec": 59, "startOffsetSec": 50 } ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
- String project = "YOUR PROJECT ID" ; String textPrompt = "YOUR TEXT PROMPT" ; String baseImagePath = "YOUR BASE IMAGE PATH" ; // Learn how to use text prompts to update an image: // https://cloud.google.com/vertex-ai/docs/generative-ai/image/edit-images Map<String , Object > parameters = new HashMap<String , Object > (); parameters . put ( "sampleCount" , 1 ); String location = "us-central1" ; String publisher = "google" ; String model = "multimodalembedding@001" ; predictImageFromImageAndText ( project , location , publisher , model , textPrompt , baseImagePath , parameters ); } // Update images using text prompts public static void predictImageFromImageAndText ( String project , String location , String publisher , String model , String textPrompt , String baseImagePath , Map<String , Object > parameters ) throws IOException { final String endpoint = String . format ( "%s-aiplatform.googleapis.com:443" , location ); final PredictionServiceSettings predictionServiceSettings = PredictionServiceSettings . newBuilder (). setEndpoint ( endpoint ). build (); // Initialize client that will be used to send requests.
- The following sample response is shortened for space. { "predictions": [ { "textEmbedding": [ 0.0105433334, -0.00302835181, 0.00656806398, 0.00603460241, [...] 0.00445805816, 0.0139605571, -0.00170318608, -0.00490092579 ], "videoEmbeddings": [ { "startOffsetSec": 0, "endOffsetSec": 7, "embedding": [ -0.00673126569, 0.0248149596, 0.0128901172, 0.0107588246, [...] -0.00180952181, -0.0054573305, 0.0117037306, 0.0169312079 ] } ], "imageEmbedding": [ -0.00728622358, 0.031021487, -0.00206603738, 0.0273937676, [...] -0.00204976718, 0.00321615417, 0.0121978866, 0.0193375275 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .

### "Vertex AI quickstart \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Once created , it can be reused for multiple requests . try ( Client client = Client . builder () . location ( "global" ) . vertexAI ( true ) . build ()) { GenerateContentConfig contentConfig = GenerateContentConfig . builder () . responseModalities ( "TEXT" , "IMAGE" ) . candidateCount ( 1 ) . safetySettings ( SafetySetting . builder () . method ( "PROBABILITY" ) . category ( "HARM CATEGORY DANGEROUS CONTENT" ) . threshold ( "BLOCK MEDIUM AND ABOVE" ) . build ()) . build (); GenerateContentResponse response = client . models . generateContent ( modelId , "Generate an image of the Eiffel tower with fireworks in the background." , contentConfig ); // Get parts of the response List<Part> parts = response . candidates () . flatMap ( candidates - > candidates . stream () . findFirst ()) . flatMap ( Candidate :: content ) . flatMap ( Content :: parts ) . orElse ( new ArrayList <> ()); // For each part print text if present , otherwise read image data if present and // write it to the output file for ( Part part : parts ) { if ( part . text () . isPresent ()) { System . out . println ( part . text () . get ()); } else if ( part . inlineData () . flatMap ( Blob :: data ) . isPresent ()) { BufferedImage image = ImageIO . read ( new ByteArrayInputStream ( part . inlineData () . flatMap ( Blob :: data ) . get ())); ImageIO . write ( image , "png" , new File ( outputFile )); } } System . out . println ( "Content written to: " + outputFile ); // Example response : // Here is the Eiffel Tower with fireworks in the background ... // // Content written to : resources / output / example - image - eiffel - tower . png } } } Image understanding Gemini can understand images as well.
- ModalityImage ), }, CandidateCount : int32 ( 1 ), SafetySettings : [] genai .
- The tower will be // illuminated , standing tall as the focal point of the scene , with the bursts of // light from the fireworks creating a festive atmosphere . return generatedFileNames ; } Java import com.google.genai.Client ; import com.google.genai.types.Blob ; import com.google.genai.types.Candidate ; import com.google.genai.types.Content ; import com.google.genai.types.GenerateContentConfig ; import com.google.genai.types.GenerateContentResponse ; import com.google.genai.types.Part ; import com.google.genai.types.SafetySetting ; import java.awt.image.BufferedImage ; import java.io.ByteArrayInputStream ; import java.io.File ; import java.io.IOException ; import java.util.ArrayList ; import java.util.List ; import javax.imageio.ImageIO ; public class ImageGenMmFlashWithText { public static void main ( String [] args ) throws IOException { // TODO ( developer ): Replace these variables before running the sample .
- WriteLine ( responseText ); // Example response : // AI , or Artificial Intelligence , at its core , is about creating machines that can perform ... // Here 's a breakdown of how it generally works... return responseText ; } } REST To send this prompt request, run the curl command from the command line or include the REST call in your application. curl \ -X POST \ -H "Content-Type: application/json" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ " ${ API ENDPOINT } /v1/projects/ ${ GOOGLE CLOUD PROJECT } /locations/ ${ GOOGLE CLOUD LOCATION } /publishers/google/models/ ${ MODEL ID } : ${ GENERATE CONTENT API } " -d \ $'{ "contents": { "role": "user", "parts": { "text": "Explain how AI works in a few words" } } }' The model returns a response.

### "Bounding box detection \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/bounding-box-detection](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/bounding-box-detection)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- If an object is present multiple times , give each object a unique label according to its distinct characteristics ( colors , size , position , etc ) . ; const safetySettings = [ { category : 'HARM CATEGORY DANGEROUS CONTENT' , threshold : 'BLOCK ONLY HIGH' , }, ]; const imageUri = 'https://storage.googleapis.com/generativeai-downloads/images/socks.jpg' ; const base64Image = await fetchImageAsBase64 ( imageUri ); const boundingBoxSchema = { type : 'ARRAY' , description : 'List of bounding boxes for detected objects' , items : { type : 'OBJECT' , title : 'BoundingBox' , description : 'Represents a bounding box with coordinates and label' , properties : { box 2d : { type : 'ARRAY' , description : 'Bounding box coordinates in format [y min, x min, y max, x max]' , items : { type : 'INTEGER' , format : 'int32' , }, minItems : 4 , maxItems : 4 , }, label : { type : 'STRING' , description : 'Label describing the object within the bounding box' , }, }, required : [ 'box 2d' , 'label' ], }, }; const response = await client . models . generateContent ({ model : 'gemini-2.5-flash' , contents : [ { role : 'user' , parts : [ { text : 'Output the positions of the socks with a face.
- Label according to position in the image' , }, { inlineData : { data : base64Image , mimeType : 'image/jpeg' , }, }, ], }, ], config : { systemInstruction : systemInstruction , safetySettings : safetySettings , responseMimeType : 'application/json' , temperature : 0.5 , responseSchema : boundingBoxSchema , }, }); const candidate = response . candidates [ 0 ] . content . parts [ 0 ] . text ; const boundingBoxes = JSON . parse ( candidate ); console . log ( 'Bounding boxes:' , boundingBoxes ); await plotBoundingBoxes ( imageUri , boundingBoxes ); return boundingBoxes ; } Java Learn how to install or update the Java .
- GenerateContentConfig contentConfig = GenerateContentConfig . builder () . systemInstruction ( Content . fromParts ( Part . fromText ( systemInstruction ))) . temperature ( 0.5 F ) . safetySettings ( SafetySetting . builder () . category ( HarmCategory .
- If an object is present multiple times, give each object a unique label according to its distinct characteristics (colors, size, position, etc..). """ , temperature = 0.5 , safety settings = [ SafetySetting ( category = HarmCategory .

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- For example, if a nearest neighbor query for 20 nearest neighbors returned 19 of the "ground truth" nearest neighbors, the recall is 19/20x100 = 95%. recipe In the context of Managed Training, a recipe is a comprehensive and reusable package that contains everything needed to execute a specific large-scale training workload. recommendation system A recommendation system is a machine learning-based system that helps users find compelling content in a large corpus.
- The digital content should be tracked to the movement of the camera or glasses (depending on how the scene is rendered) so that it appears as if it is part of the real world. authentication The process of verifying the identity of a client (which might be a user or another process) for the purposes of gaining access to a secured system.
- With IaC, configuration files are created that contain the infrastructure specifications, which makes it easier to create and edit infrastructure at scale. login node A login node is the main entry point for a user to access the cluster, submit jobs, and manage files.
- This approach addresses limitations of traditional generative models, which are often trained on next-token inference without explicit optimization for desirable qualities like coherence, safety, and sensibility.

