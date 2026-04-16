---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.725Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "text-embedding-004"
feature_slug: "text-embedding-004"
latest_feature_date: "2024-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types"
keywords:
  - "text"
  - "embedding"
  - "004"
  - "is"
  - "stable"
  - "model"
  - "available"
  - "in"
---

# text-embedding-004

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Text-embedding-004 is a stable text embedding model available in GA.

## Extended Definition

Text-embedding-004 is a stable text embedding model available in GA.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types)

## Supporting Pages

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 128 dimensions: { "predictions": [ { "imageEmbedding": [ 0.0279239565, [...128 dimension vector...] 0.00403284049 ], "textEmbedding": [ 0.202921599, [...128 dimension vector...] -0.0365431122 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } 256 dimensions: { "predictions": [ { "imageEmbedding": [ 0.248620048, [...256 dimension vector...] -0.0646447465 ], "textEmbedding": [ 0.0757875815, [...256 dimension vector...] -0.02749932 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } 512 dimensions: { "predictions": [ { "imageEmbedding": [ -0.0523675755, [...512 dimension vector...] -0.0444030389 ], "textEmbedding": [ -0.0592851527, [...512 dimension vector...] 0.0350437127 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) TODO(developer): Try different dimenions: 128, 256, 512, 1408 embedding dimension = 128 model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) embeddings = model . get embeddings ( image = image , contextual text = "Colosseum" , dimension = embedding dimension , ) print ( f "Image Embedding: { embeddings . image embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [0.0622573346, -0.0406507477, 0.0260440577, ...] Text Embedding: [0.27469793, -0.146258667, 0.0222803634, ...] Go import ( "context" "encoding/json" "fmt" "io" aiplatform "cloud.google.com/go/aiplatform/apiv1beta1" aiplatformpb "cloud.google.com/go/aiplatform/apiv1beta1/aiplatformpb" "google.golang.org/api/option" "google.golang.org/protobuf/encoding/protojson" "google.golang.org/protobuf/types/known/structpb" ) // generateWithLowerDimension shows how to generate lower-dimensional embeddings for text and image inputs. func generateWithLowerDimension ( w io .
- The following sample response is shortened for space. { "predictions": [ { "textEmbedding": [ 0.0105433334, -0.00302835181, 0.00656806398, 0.00603460241, [...] 0.00445805816, 0.0139605571, -0.00170318608, -0.00490092579 ], "videoEmbeddings": [ { "startOffsetSec": 0, "endOffsetSec": 7, "embedding": [ -0.00673126569, 0.0248149596, 0.0128901172, 0.0107588246, [...] -0.00180952181, -0.0054573305, 0.0117037306, 0.0169312079 ] } ], "imageEmbedding": [ -0.00728622358, 0.031021487, -0.00206603738, 0.0273937676, [...] -0.00204976718, 0.00321615417, 0.0121978866, 0.0193375275 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
- The following sample response is shortened for space. { "predictions": [ { "textEmbedding": [ 0.010477379, -0.00399621, 0.00576670747, [...] -0.00823613815, -0.0169572588, -0.00472954148 ], "imageEmbedding": [ 0.00262696808, -0.00198890246, 0.0152047109, -0.0103145819, [...] 0.0324628279, 0.0284924973, 0.011650892, -0.00452344026 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // const baseImagePath = 'YOUR BASE IMAGE PATH'; // const textPrompt = 'YOUR TEXT PROMPT'; const aiplatform = require ( ' @google-cloud/aiplatform ' ); // Imports the Google Cloud Prediction service client const { PredictionServiceClient } = aiplatform . v1 ; // Import the helper module for converting arbitrary protobuf.Value objects. const { helpers } = aiplatform ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : 'us-central1-aiplatform.googleapis.com' , }; const publisher = 'google' ; const model = 'multimodalembedding@001' ; // Instantiates a client const predictionServiceClient = new PredictionServiceClient ( clientOptions ); async function predictImageFromImageAndText () { // Configure the parent resource const endpoint = projects/ ${ project } /locations/ ${ location } /publishers/ ${ publisher } /models/ ${ model } ; const fs = require ( 'fs' ); const imageFile = fs . readFileSync ( baseImagePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const prompt = { text : textPrompt , image : { bytesBase64Encoded : encodedImage , }, }; const instanceValue = helpers . toValue ( prompt ); const instances = [ instanceValue ]; const parameter = { sampleCount : 1 , }; const parameters = helpers . toValue ( parameter ); const request = { endpoint , instances , parameters , }; // Predict request const [ response ] = await predictionServiceClient . predict ( request ); console . log ( 'Get image embedding response' ); const predictions = response . predictions ; console . log ( '\tPredictions :' ); for ( const prediction of predictions ) { console . log ( \t\tPrediction : ${ JSON . stringify ( prediction ) } ); } } await predictImageFromImageAndText (); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .

### "Get batch text embeddings inferences \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/batchPredictionJobs" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/123456789012/locations/us-central1/batchPredictionJobs/1234567890123456789", "displayName": "BP sample publisher BQ 20230712 134650", "model": "projects/{PROJECT ID}/locations/us-central1/models/textembedding-gecko", "inputConfig": { "instancesFormat": "bigquery", "bigquerySource": { "inputUri": "bq://project name.dataset name.text input" } }, "modelParameters": {}, "outputConfig": { "predictionsFormat": "bigquery", "bigqueryDestination": { "outputUri": "bq://project name.llm dataset.embedding out BP sample publisher BQ 20230712 134650" } }, "state": "JOB STATE PENDING", "createTime": "2023-07-12T20:46:52.148717Z", "updateTime": "2023-07-12T20:46:52.148717Z", "labels": { "owner": "sample owner", "product": "llm" }, "modelVersionId": "1", "modelMonitoringStatus": {} } The response includes a unique identifier for the batch job.
- Batches . html let job = await client . batches . create ({ model : 'text-embedding-005' , // Source link : https : // storage . cloud . google . com / cloud - samples - data / batch / prompt for batch gemini predict . jsonl src : 'gs://cloud-samples-data/generative-ai/embeddings/embeddings input.jsonl' , config : { dest : outputUri , }, }); console . log ( Job name : $ { job . name } ); console . log ( Job state : $ { job . state } ); // Example response : // Job name : projects /% PROJECT ID %/ locations / us - central1 / batchPredictionJobs / 9876453210000000000 // Job state : JOB STATE PENDING const completedStates = new Set ([ 'JOB STATE SUCCEEDED' , 'JOB STATE FAILED' , 'JOB STATE CANCELLED' , 'JOB STATE PAUSED' , ]); while ( ! completedStates . has ( job . state )) { await new Promise ( resolve = > setTimeout ( resolve , 30000 )); job = await client . batches . get ({ name : job . name }); console . log ( Job state : $ { job . state } ); } // Example response : // Job state : JOB STATE PENDING // Job state : JOB STATE RUNNING // Job state : JOB STATE RUNNING // ... // Job state : JOB STATE SUCCEEDED return job . state ; } Java Learn how to install or update the Java .
- Client ( http options = HttpOptions ( api version = "v1" )) TODO(developer): Update and un-comment below line output uri = "gs://your-bucket/your-prefix" See the documentation: https://googleapis.github.io/python-genai/genai.html#genai.batches.Batches.create job = client . batches . create ( model = "text-embedding-005" , Source link: https://storage.cloud.google.com/cloud-samples-data/generative-ai/embeddings/embeddings input.jsonl src = "gs://cloud-samples-data/generative-ai/embeddings/embeddings input.jsonl" , config = CreateBatchJobConfig ( dest = output uri ), ) print ( f "Job name: { job . name } " ) print ( f "Job state: { job . state } " ) Example response: Job name: projects/.../locations/.../batchPredictionJobs/9876453210000000000 Job state: JOB STATE PENDING See the documentation: https://googleapis.github.io/python-genai/genai.html#genai.types.BatchJob completed states = { JobState .
- HTTP method and URL: POST https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/batchPredictionJobs Request JSON body: { "name": " BP JOB NAME ", "displayName": " BP JOB NAME ", "model": " publishers/google/models/textembedding-gecko ", "inputConfig": { "instancesFormat":"bigquery", "bigquerySource":{ "inputUri" : " INPUT URI " } }, "outputConfig": { "predictionsFormat":"bigquery", "bigqueryDestination":{ "outputUri": " OUTPUT URI " } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Get text embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response { "predictions": [ { "embeddings": { "statistics": { "truncated": false, "token count": 6 }, "values": [ ... ] } } ] } Example curl command MODEL ID= "gemini-embedding-001" PROJECT ID= PROJECT ID curl \ - X POST \ - H "Authorization: Bearer $(gcloud auth print-access-token)" \ - H "Content-Type: application/json" \ h tt ps : //us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/publishers/google/models/${MODEL ID}:predict -d \ $' { "instances" : [ { "content" : "What is life?" } ], } ' Supported models The following tables show the available Google and open text embedding models.
- HTTP method and URL: POST https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-embedding-001:predict Request JSON body: { "instances": [ { "content": " TEXT "} ], "parameters": { "autoTruncate": AUTO TRUNCATE } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Read our Tech Report for more detail. up to 3072 2048 tokens Supported text languages text-embedding-005 Specialized in English and code tasks. up to 768 2048 tokens English text-multilingual-embedding-002 Specialized in multilingual tasks. up to 768 2048 tokens Supported text languages For superior embedding quality, gemini-embedding-001 is our large model designed to provide the highest performance.
- To get batch predictions for embeddings, see Get batch text embeddings predictions To learn more about multimodal embeddings, see Get multimodal embeddings To tune an embedding, see Tune text embeddings To learn more about the research behind text-embedding-005 and text-multilingual-embedding-002 , see the research paper Gecko: Versatile Text Embeddings Distilled from Large Language Models .

### "Choose an embeddings task type \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Python API reference documentation . from vertexai.language models import TextEmbeddingInput , TextEmbeddingModel MODEL NAME = "gemini-embedding-001" DIMENSIONALITY = 3072 def embed text ( texts : list [ str ] = [ "Retrieve a function that adds two numbers" ], task : str = "CODE RETRIEVAL QUERY" , model name : str = "gemini-embedding-001" , dimensionality : int None = 3072 , ) - > list [ list [ float ]]: """Embeds texts with a pre-trained, foundational model.""" model = TextEmbeddingModel . from pretrained ( model name ) kwargs = dict ( output dimensionality = dimensionality ) if dimensionality else {} embeddings = [] gemini-embedding-001 takes one input at a time for text in texts : text input = TextEmbeddingInput ( text , task ) embedding = model . get embeddings ([ text input ], kwargs ) print ( embedding ) Example response: [[0.006135190837085247, -0.01462465338408947, 0.004978656303137541, ...]] embeddings . append ( embedding [ 0 ] . values ) return embeddings if name == " main " : Embeds code block with a pre-trained, foundational model.
- Supported task types Embeddings models that use task types support the following task types: Task type Description CLASSIFICATION Used to generate embeddings that are optimized to classify texts according to preset labels CLUSTERING Used to generate embeddings that are optimized to cluster texts based on their similarities RETRIEVAL DOCUMENT , RETRIEVAL QUERY , QUESTION ANSWERING , and FACT VERIFICATION Used to generate embeddings that are optimized for document search or information retrieval CODE RETRIEVAL QUERY Used to retrieve a code block based on a natural language query, such as sort an array or reverse a linked list .
- Here is an example: REST PROJECT ID= PROJECT ID curl \ - X POST \ - H "Authorization: Bearer $(gcloud auth print-access-token)" \ - H "Content-Type: application/json" \ h tt ps : //us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/publishers/google/models/text-embedding-005:predict -d \ $' { "instances" : [ { "task type" : "CODE RETRIEVAL QUERY" , "content" : "Function to add two numbers" } ], } ' Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
- Using this function to calculate the embedding for query. texts = [ "def func(a, b): return a + b" , "def func(a, b): return a - b" , "def func(a, b): return (a 2 + b 2) 0.5" , ] task = "RETRIEVAL DOCUMENT" code query embeddings = embed text ( texts = texts , task = task , model name = MODEL NAME , dimensionality = DIMENSIONALITY ) Assess text similarity If you want to use embeddings to assess text similarity, use the SEMANTIC SIMILARITY task type.

