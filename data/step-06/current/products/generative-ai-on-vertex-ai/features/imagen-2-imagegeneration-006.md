---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.727Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Imagen 2 imagegeneration@006"
feature_slug: "imagen-2-imagegeneration-006"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal"
keywords:
  - "imagen"
  - "imagegeneration"
  - "006"
  - "the"
  - "version"
  - "of"
  - "is"
  - "now"
---

# Imagen 2 imagegeneration@006

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The imagegeneration@006 version of Imagen 2 is now available.

## Extended Definition

The imagegeneration@006 version of Imagen 2 is now available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal)

## Supporting Pages

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Phrased differently, a model is the set of parameters and structure needed for a system to make inferences. model distillation (knowledge distillation, teacher-student models) Model distillation is a technique that allows a smaller student model to learn from a larger teacher model.
- Each column in a DataFrame is structured like a 2D array, except that each column can be assigned its own data type. data indexing In the context of generative AI, data indexing is the process of structuring and organizing a knowledge base to optimize search and retrieval.
- Ray on Vertex AI SDK for Python Ray on Vertex AI SDK for Python is a version of the Vertex AI SDK for Python that includes the functionality of the Ray Client, Ray BigQuery connector, Ray cluster management on Vertex AI, and inferences on Vertex AI.
- For more information, see Imagen on Vertex AI overview . image recognition Image recognition is the process of classifying objects, patterns, or concepts in an image.

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the Python API reference documentation . import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel , Video from vertexai.vision models import VideoSegmentConfig TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) video = Video . load from file ( "gs://cloud-samples-data/vertex-ai-vision/highway vehicles.mp4" ) embeddings = model . get embeddings ( image = image , video = video , video segment config = VideoSegmentConfig ( end offset sec = 1 ), contextual text = "Cars on Highway" , ) print ( f "Image Embedding: { embeddings . image embedding } " ) Video Embeddings are segmented based on the video segment config. print ( "Video Embeddings:" ) for video embedding in embeddings . video embeddings : print ( f "Video Segment: { video embedding . start offset sec } - { video embedding . end offset sec } " ) print ( f "Embedding: { video embedding . embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [-0.0123144267, 0.0727186054, 0.000201397663, ...] Video Embeddings: Video Segment: 0.0 - 1.0 Embedding: [-0.0206376351, 0.0345234685, ...] Text Embedding: [-0.0207006838, -0.00251058186, ...] Go Before trying this sample, follow the Go setup instructions in the Vertex AI quickstart using client libraries .
- The following sample response is shortened for space. { "predictions": [ { "textEmbedding": [ 0.0105433334, -0.00302835181, 0.00656806398, 0.00603460241, [...] 0.00445805816, 0.0139605571, -0.00170318608, -0.00490092579 ], "videoEmbeddings": [ { "startOffsetSec": 0, "endOffsetSec": 7, "embedding": [ -0.00673126569, 0.0248149596, 0.0128901172, 0.0107588246, [...] -0.00180952181, -0.0054573305, 0.0117037306, 0.0169312079 ] } ], "imageEmbedding": [ -0.00728622358, 0.031021487, -0.00206603738, 0.0273937676, [...] -0.00204976718, 0.00321615417, 0.0121978866, 0.0193375275 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // const baseImagePath = 'YOUR BASE IMAGE PATH'; // const textPrompt = 'YOUR TEXT PROMPT'; const aiplatform = require ( ' @google-cloud/aiplatform ' ); // Imports the Google Cloud Prediction service client const { PredictionServiceClient } = aiplatform . v1 ; // Import the helper module for converting arbitrary protobuf.Value objects. const { helpers } = aiplatform ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : 'us-central1-aiplatform.googleapis.com' , }; const publisher = 'google' ; const model = 'multimodalembedding@001' ; // Instantiates a client const predictionServiceClient = new PredictionServiceClient ( clientOptions ); async function predictImageFromImageAndText () { // Configure the parent resource const endpoint = projects/ ${ project } /locations/ ${ location } /publishers/ ${ publisher } /models/ ${ model } ; const fs = require ( 'fs' ); const imageFile = fs . readFileSync ( baseImagePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const prompt = { text : textPrompt , image : { bytesBase64Encoded : encodedImage , }, }; const instanceValue = helpers . toValue ( prompt ); const instances = [ instanceValue ]; const parameter = { sampleCount : 1 , }; const parameters = helpers . toValue ( parameter ); const request = { endpoint , instances , parameters , }; // Predict request const [ response ] = await predictionServiceClient . predict ( request ); console . log ( 'Get image embedding response' ); const predictions = response . predictions ; console . log ( '\tPredictions :' ); for ( const prediction of predictions ) { console . log ( \t\tPrediction : ${ JSON . stringify ( prediction ) } ); } } await predictImageFromImageAndText (); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- Response (7 second video, no videoSegmentConfig specified): { "predictions": [ { "videoEmbeddings": [ { "endOffsetSec": 7, "embedding": [ -0.0045467657, 0.0258095954, 0.0146885719, 0.00945400633, [...] -0.0023291884, -0.00493789, 0.00975185353, 0.0168156829 ], "startOffsetSec": 0 } ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Response (59 second video, with the following video segment config: "videoSegmentConfig": { "startOffsetSec": 0, "endOffsetSec": 60, "intervalSec": 10 } ): { "predictions": [ { "videoEmbeddings": [ { "endOffsetSec": 10, "startOffsetSec": 0, "embedding": [ -0.00683252793, 0.0390476175, [...] 0.00657121744, 0.013023301 ] }, { "startOffsetSec": 10, "endOffsetSec": 20, "embedding": [ -0.0104404651, 0.0357737206, [...] 0.00509833824, 0.0131902946 ] }, { "startOffsetSec": 20, "embedding": [ -0.0113538112, 0.0305239167, [...] -0.00195809244, 0.00941874553 ], "endOffsetSec": 30 }, { "embedding": [ -0.00299320649, 0.0322436653, [...] -0.00993082579, 0.00968887936 ], "startOffsetSec": 30, "endOffsetSec": 40 }, { "endOffsetSec": 50, "startOffsetSec": 40, "embedding": [ -0.00591270532, 0.0368893594, [...] -0.00219071587, 0.0042470959 ] }, { "embedding": [ -0.00458270218, 0.0368121453, [...] -0.00317760976, 0.00595594104 ], "endOffsetSec": 59, "startOffsetSec": 50 } ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .

### "Prompt and image attribute guide \_|\_ Generative AI on Vertex AI \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Prompt (no negative prompt): 4K video game concept art, urban jungle, cyberpunk city, detailed rendering Prompt: 4K video game concept art, urban jungle, cyberpunk city, detailed rendering Negative prompt: greenery, plants, forest, trees Prompt (no negative prompt): Illustration of a mythical wyvern flying over mountains Prompt: Illustration of a mythical wyvern flying over mountains Negative prompt: snow, frost Photorealistic images Different versions of the image generation model might offer a mix of artistic and photorealistic output.
- Camera Proximity - Close up, taken from far away Prompt: A close-up photo of coffee beans Prompt: A zoomed out photo of a small bag of coffee beans in a messy kitchen Camera Position - aerial, from below Prompt: aerial photo of urban city with skyscrapers Prompt: A photo of a forest canopy with blue skies from below Lighting - natural, dramatic, warm, cold Prompt: studio photo of a modern arm chair, natural lighting Prompt: studio photo of a modern arm chair, dramatic lighting Camera Settings - motion blur, soft focus, bokeh, portrait Prompt: photo of a city with skyscrapers from the inside of a car with motion blur Prompt: soft focus photograph of a bridge in an urban city at night Lens types - 35mm, 50mm, fisheye, wide angle, macro Prompt: photo of a leaf, macro lens Prompt: street photography, new york city, fisheye lens Film types - black and white, polaroid Prompt: a polaroid portrait of a dog wearing sunglasses Prompt: black and white photo of a dog wearing sunglasses Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.
- Use case Lens type Focal lengths Additional details People (portraits) Prime, zoom 24-35mm black and white film, Film noir, Depth of field, duotone (mention two colors) Food, insects, plants (objects, still life) Macro 60-105mm High detail, precise focusing, controlled lighting Sports, wildlife (motion) Telephoto zoom 100-400mm Fast shutter speed, Action or movement tracking Astronomical, landscape (wide-angle) Wide-angle 10-24mm Long exposure times, sharp focus, long exposure, smooth water or clouds Portraits Use case Lens type Focal lengths Additional details People (portraits) Prime, zoom 24-35mm black and white film, Film noir, Depth of field, duotone (mention two colors) Using several keywords from the table, Imagen can generate the following portraits.
- Prompt: an expansive mountain range, landscape wide angle 10mm Model: Imagen 3 ( imagen-3.0-generate-002 ) Prompt: a photo of the moon, astro photography, wide angle 10mm Model: Imagen 3 ( imagen-3.0-generate-002 ) What's next Read articles about Imagen and other Generative AI on Vertex AI products: A developer's guide to getting started with Imagen 3 on Vertex AI New generative media models and tools, built with and for creators New in Gemini: Custom Gems and improved image generation with Imagen 3 Google DeepMind: Imagen 3 - Our highest quality text-to-image model Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Vertex AI quickstart \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- This client only needs to be created // once , and can be reused for multiple requests . try ( Client client = Client . builder () . location ( "global" ) . vertexAI ( true ) . httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ()) . build ()) { GenerateContentResponse response = client . models . generateContent ( modelId , Content . fromParts ( Part . fromText ( "What is shown in this image?" ), Part . fromUri ( "gs://cloud-samples-data/generative-ai/image/scones.jpg" , "image/jpeg" )), null ); System . out . print ( response . text ()); // Example response : // The image shows a flat lay of blueberry scones arranged on parchment paper .
- Client ( http options = HttpOptions ( api version = "v1" )) response = client . models . generate content ( model = "gemini-2.5-flash" , contents = [ "What is shown in this image?" , Part . from uri ( file uri = "gs://cloud-samples-data/generative-ai/image/scones.jpg" , mime type = "image/jpeg" , ), ], ) print ( response . text ) Example response: The image shows a flat lay of blueberry scones arranged on parchment paper.
- Once created , it can be reused for multiple requests . try ( Client client = Client . builder () . location ( "global" ) . vertexAI ( true ) . build ()) { GenerateContentConfig contentConfig = GenerateContentConfig . builder () . responseModalities ( "TEXT" , "IMAGE" ) . candidateCount ( 1 ) . safetySettings ( SafetySetting . builder () . method ( "PROBABILITY" ) . category ( "HARM CATEGORY DANGEROUS CONTENT" ) . threshold ( "BLOCK MEDIUM AND ABOVE" ) . build ()) . build (); GenerateContentResponse response = client . models . generateContent ( modelId , "Generate an image of the Eiffel tower with fireworks in the background." , contentConfig ); // Get parts of the response List<Part> parts = response . candidates () . flatMap ( candidates - > candidates . stream () . findFirst ()) . flatMap ( Candidate :: content ) . flatMap ( Content :: parts ) . orElse ( new ArrayList <> ()); // For each part print text if present , otherwise read image data if present and // write it to the output file for ( Part part : parts ) { if ( part . text () . isPresent ()) { System . out . println ( part . text () . get ()); } else if ( part . inlineData () . flatMap ( Blob :: data ) . isPresent ()) { BufferedImage image = ImageIO . read ( new ByteArrayInputStream ( part . inlineData () . flatMap ( Blob :: data ) . get ())); ImageIO . write ( image , "png" , new File ( outputFile )); } } System . out . println ( "Content written to: " + outputFile ); // Example response : // Here is the Eiffel Tower with fireworks in the background ... // // Content written to : resources / output / example - image - eiffel - tower . png } } } Image understanding Gemini can understand images as well.
- The tower will be // illuminated , standing tall as the focal point of the scene , with the bursts of // light from the fireworks creating a festive atmosphere . return generatedFileNames ; } Java import com.google.genai.Client ; import com.google.genai.types.Blob ; import com.google.genai.types.Candidate ; import com.google.genai.types.Content ; import com.google.genai.types.GenerateContentConfig ; import com.google.genai.types.GenerateContentResponse ; import com.google.genai.types.Part ; import com.google.genai.types.SafetySetting ; import java.awt.image.BufferedImage ; import java.io.ByteArrayInputStream ; import java.io.File ; import java.io.IOException ; import java.util.ArrayList ; import java.util.List ; import javax.imageio.ImageIO ; public class ImageGenMmFlashWithText { public static void main ( String [] args ) throws IOException { // TODO ( developer ): Replace these variables before running the sample .

