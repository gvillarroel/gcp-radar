---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.699Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Imagen 3 Editing"
feature_slug: "imagen-3-editing"
latest_feature_date: "2024-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal"
keywords:
  - "imagen"
  - "editing"
  - "an"
  - "capability"
  - "for"
  - "generated"
  - "images"
  - "approved"
---

# Imagen 3 Editing

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

An Imagen 3 capability for editing generated images for approved users.

## Extended Definition

An Imagen 3 capability for editing generated images for approved users.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal)

## Supporting Pages

### "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Client () TODO(developer): Update and un-comment below line output file = "output-image.png" image = client . models . generate images ( model = "imagen-4.0-generate-001" , prompt = "A dog reading a newspaper" , config = GenerateImagesConfig ( image size = "2K" , ), ) image . generated images [ 0 ] . image . save ( output file ) print ( f "Created output image using { len ( image . generated images [ 0 ] . image . image bytes ) } bytes" ) Example response: Created output image using 1234567 bytes REST Set environment variables: export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT # Replace with your Google Cloud project export GOOGLE CLOUD LOCATION = us-central1 # Replace with the appropriate location for your project Run the following: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https:// ${ GOOGLE CLOUD LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ GOOGLE CLOUD PROJECT } /locations/ ${ GOOGLE CLOUD LOCATION } /publishers/google/models/imagen-4.0-generate-preview-05-20:predict" -d \ $'{ "instances": [ { "prompt": "a cat reading a book" } ], "parameters": { "sampleCount": 1 } }' The model returns a base64 image bytes object.
- Prompts for preceding images These images are generated using the general Imagen 3 image generation model ( imagen-3.0-generate-002 ) and the following prompts: Claymation scene.
- The following samples show a simplified case for generating images, but you can use additional parameters to tailor the generated images to your needs.
- Try more examples To learn more, run the following notebooks in the environment of your choice: "Gemini 3 Pro Image Generation in Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Gemini 2.5 Flash Image Generation in Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Imagen 4 Image Generation": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Imagen 3 Image Editing": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub For a full list of Jupyter notebook tutorials using Imagen, see the Generative AI on Vertex AI cookbook .

### "Prompt and image attribute guide \_|\_ Generative AI on Vertex AI \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Camera Proximity - Close up, taken from far away Prompt: A close-up photo of coffee beans Prompt: A zoomed out photo of a small bag of coffee beans in a messy kitchen Camera Position - aerial, from below Prompt: aerial photo of urban city with skyscrapers Prompt: A photo of a forest canopy with blue skies from below Lighting - natural, dramatic, warm, cold Prompt: studio photo of a modern arm chair, natural lighting Prompt: studio photo of a modern arm chair, dramatic lighting Camera Settings - motion blur, soft focus, bokeh, portrait Prompt: photo of a city with skyscrapers from the inside of a car with motion blur Prompt: soft focus photograph of a bridge in an urban city at night Lens types - 35mm, 50mm, fisheye, wide angle, macro Prompt: photo of a leaf, macro lens Prompt: street photography, new york city, fisheye lens Film types - black and white, polaroid Prompt: a polaroid portrait of a dog wearing sunglasses Prompt: black and white photo of a dog wearing sunglasses Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.
- Prompt: a winning touchdown, fast shutter speed, movement tracking Model: Imagen 3 ( imagen-3.0-generate-002 ) Prompt: A deer running in the forest, fast shutter speed, movement tracking Model: Imagen 3 ( imagen-3.0-generate-002 ) Wide-angle Use case Lens type Focal lengths Additional details Astronomical, landscape (wide-angle) Wide-angle 10-24mm Long exposure times, sharp focus, long exposure, smooth water or clouds Using several keywords from the table, Imagen can generate the following wide-angle images.
- Prompt: A park in the spring next to a lake Prompt: A park in the spring next to a lake, the sun sets across the lake, golden hour Prompt: A park in the spring next to a lake, the sun sets across the lake, golden hour, red wildflowers Imagen 3 prompt writing View Imagen for Generation model card Imagen 3 can transform your ideas into detailed images, whether your prompts are short or long and detailed.
- Prompt: a digital render of a massive skyscraper, modern, grand, epic with a beautiful sunset in the background (9:16 aspect ratio) Negative prompts The previous examples focus on writing prompts for what you want Imagen to create, but you can also provide a negative prompt along with the original prompt to help the product generate or edit images.

### Generative AI on Vertex AI Cookbook \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/cookbook)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- View on GitHub Agent engine Gemini Langchain Deploying a RAG Application with AlloyDB to Agent Engine View on GitHub Agent engine Agents Gemini Rag Search Building a Conversational Search Agent with Agent Engine and RAG on Vertex AI Search View on GitHub Agent engine Agents Gemini Langgraph Rag Building a Multi-Agent RAG Application with LangGraph and Agent Engine View on GitHub Agent engine Gemini Langgraph Rag Deploying a RAG Application with Cloud SQL for PostgreSQL to Agent Engine View on GitHub Agent engine Agents Gemini Building and Deploying a Google Maps API Agent with Agent Engine View on GitHub Agent engine Gemini Langgraph Building and Deploying a LangGraph Application with Agent Engine in Vertex AI View on GitHub Gemini Multimodal YouTube Video Analysis with Gemini View on GitHub Gemini Multimodal Vector search Building a Multimodal Chatbot for Warranty Claims using Gemini and Vector Search in Vertex AI View on GitHub Gemini Multimodal Rag Multimodal Retrieval Augmented Generation (RAG) using Gemini API in Vertex AI View on GitHub Gemini Llamaindex Rag LlamaIndex with Vertex AI Vector Search to perform question answering RAG View on GitHub Gemini Langchain Multimodal Rag Multimodal Retrieval Augmented Generation (RAG) with Gemini, Vertex AI Vector Search, and LangChain View on GitHub Gemini Rag Small-to-big Retrieval-Augmented Generation View on GitHub Gemini Prompting ReAct (Reasoning + Acting) + Custom tool for Healthcare NL API + Gemini + LangChain View on GitHub Gemini Prompting Using Gemini in Education View on GitHub Gemini Prompting AI Quick Build Experience View on GitHub Gemini Multimodal Rag Code Retrieval Augmented Generation (RAG) with Gemini API View on GitHub Gemini Multimodal Product listing generation with Gemini View on GitHub Gemini Multimodal Multimodal retail recommendation: using Gemini to recommend items based on images and image reasoning View on GitHub Gemini Multimodal Prompting Sheet Music Analysis with Gemini View on GitHub Gemini Multimodal Analyzing movie posters in BigQuery with Gemini View on GitHub Gemini Langchain Getting Started with LangChain 🦜️🔗 + Gemini API in Vertex AI View on GitHub Agents Gemini Building a Weather Agent with AutoGen and Gemini View on GitHub Gemini Prompting Vertex AI Prompt Optimizer Notebook UI View on GitHub Gemini Prompting Vertex AI Prompt Optimizer - Tool usage View on GitHub Gemini Prompting Vertex AI Prompt Optimizer - Custom metric View on GitHub Gemini Prompting Intro to Vertex AI Prompt Optimizer View on GitHub Gemini Prompting Text Summarization with Generative Models on Vertex AI View on GitHub Gemini Prompting Ideation with Generative Models on Vertex AI View on GitHub Gemini Prompting Chain of Thought & ReAct View on GitHub Gemini Prompting Question Answering with Generative Models on Vertex AI View on GitHub Gemini Prompting Text Classification with Generative Models on Vertex AI View on GitHub Gemini Prompting Text Extraction with Generative Models on Vertex AI View on GitHub Gemini Tuning Supervised Fine Tuning with Gemini 2.0 Flash for Change Detection View on GitHub Gemini Tuning Supervised Fine-Tuning with Gemini 2.0 Flash for Q & A View on GitHub Gemini Tuning Supervised Fine Tuning with Gemini 2.0 Flash for Image Captioning View on GitHub Evaluation Gemini Model garden Use Gen AI Evaluation SDK to Evaluate Models in Vertex AI Studio, Model Garden, and Model Registry View on GitHub Evaluation Gemini Rag Evaluate Generated Answers from RAG using Rapid Evaluation and Dataflow ML with Vertex AI Pipelines View on GitHub Evaluation Gemini Enhancing Quality and Explainability with Vertex AI Evaluation View on GitHub Evaluation Gemini Evaluate and Compare Gen AI Model Settings View on GitHub Evaluation Gemini Bring-Your-Own-Autorater using Custom Metrics View on GitHub Evaluation Gemini Evaluate a Translation Model View on GitHub Evaluation Gemini Compare and Migrate from PaLM to Gemini Model View on GitHub Evaluation Gemini Multimodal Evaluating Multimodal Tasks View on GitHub Evaluation Gemini Langchain Evaluate LangChain View on GitHub Evaluation Gemini Compare Generative AI Models View on GitHub Evaluation Gemini Rag Evaluate Generated Answers from RAG for QA with Gen AI Evaluation Service SDK View on GitHub Evaluation Gemini Customize Model-based Metrics to Evaluate a Gen AI Model View on GitHub Evaluation Gemini Rag Evaluate Generative Model Tool Use View on GitHub Gemini Prompting Rag Security Gen AI and LLM Security - ReAct and RAG Attacks & Mitigations View on GitHub Gemini Security Responsible AI with Gemini API in Vertex AI: Safety Ratings and Thresholds View on GitHub Batch prediction Gemini Monitor Batch Prediction with Gemini API View on GitHub Imagen Multimodal Imagen 3 Customized Images View on GitHub Gemini Imagen Multimodal Create High Quality Visual Assets with Imagen and Gemini View on GitHub Imagen Multimodal Create a Photoshop Document with Image Segmentation on Vertex AI View on GitHub Gemini Imagen Multimodal Enhance Imagen Prompts with Gemini View on GitHub Imagen Multimodal Image Segmentation on Vertex AI View on GitHub Search Vertex AI Search with Filters & Metadata View on GitHub Gemini Search Vertex AI Search - Querying Blended Data Apps and Summarization with Gemini View on GitHub Search Create a Vertex AI Search Datastore and Search Engine View on GitHub Search Building Search Applications with Vertex AI Search View on GitHub Gemini Langchain Rag Search Question Answering Over Documents View on GitHub Gemini Rag Search Bulk Question Answering with Vertex AI Search View on GitHub Embeddings Search Custom Embeddings with Vertex AI Search View on GitHub Chirp Speech Get Started with Chirp 2 - Advanced Features View on GitHub Claude Function calling Model garden Multimodal Function Calling with Claude Models View on GitHub Agents Search Vertex AI Search and Conversation Data Store Status Checker View on GitHub Agents Gemini Building a Research Multi Agent System - a Design Pattern Overview with Gemini 2.0 View on GitHub Code execution Gemini Intro to Generating and Executing Python Code with Gemini 2.0 View on GitHub Agents Evaluation Gemini Evaluating Agents - Evaluate a CrewAI agent with Vertex AI Gen AI Evaluation View on GitHub Agents Evaluation Gemini Langgraph Evaluating Agents - Evaluate a LangGraph agent with Vertex AI Gen AI Evaluation View on GitHub Gemini Live api Multimodal Rag Interactive Loan Application Assistant (Financial Services) View on GitHub Rag Rag engine Search Vertex AI RAG Engine with Vertex AI Search View on GitHub Agent engine Agents Evaluation Evaluate a CrewAI agent on Vertex AI Agent Engine (Customized template) View on GitHub Agent engine Agents Evaluation Langchain Evaluating a LangChain Agent on Vertex AI Agent Engine (Prebuilt template) View on GitHub Agent engine Agents Evaluation Langgraph Evaluate a LangGraph agent on Vertex AI Agent Engine (Customized template) View on GitHub Gemini Search Q&A Chatbot with Vertex AI Search for summarized website results View on GitHub Gemini Getting started with Gemini using Vertex AI in Express Mode View on GitHub Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- View on GitHub Imagen Multimodal Imagen 3 Image Editing Use Imagen 3 to edit photorealistic images using inpainting, outpainting, and Product Image Editing.
- View on GitHub Imagen Multimodal Imagen 3 Image Editing Use Imagen 3 to edit photorealistic images using inpainting, outpainting, and Product Image Editing.
- View on GitHub All Tutorials Filter by: Agent Engine Agents Batch Prediction Chirp Claude Code Execution Embeddings Evaluation Function Calling Gemini Gemma Grounding Hugging Face Image Generation Imagen LangChain LangGraph Live API LlamaIndex Model Garden Multimodal Orchestration Prompting RAG RAG Engine Search Security Speech Thinking Tuning Vector Search Veo Workspace Function calling Gemini Grounding Multimodal Prompting Thinking Intro to Gemini 3 Pro Get started with Gemini 3 Pro in Vertex AI with the Gen AI Python SDK.

### "Vertex AI quickstart \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Once created , it can be reused for multiple requests . try ( Client client = Client . builder () . location ( "global" ) . vertexAI ( true ) . build ()) { GenerateContentConfig contentConfig = GenerateContentConfig . builder () . responseModalities ( "TEXT" , "IMAGE" ) . candidateCount ( 1 ) . safetySettings ( SafetySetting . builder () . method ( "PROBABILITY" ) . category ( "HARM CATEGORY DANGEROUS CONTENT" ) . threshold ( "BLOCK MEDIUM AND ABOVE" ) . build ()) . build (); GenerateContentResponse response = client . models . generateContent ( modelId , "Generate an image of the Eiffel tower with fireworks in the background." , contentConfig ); // Get parts of the response List<Part> parts = response . candidates () . flatMap ( candidates - > candidates . stream () . findFirst ()) . flatMap ( Candidate :: content ) . flatMap ( Content :: parts ) . orElse ( new ArrayList <> ()); // For each part print text if present , otherwise read image data if present and // write it to the output file for ( Part part : parts ) { if ( part . text () . isPresent ()) { System . out . println ( part . text () . get ()); } else if ( part . inlineData () . flatMap ( Blob :: data ) . isPresent ()) { BufferedImage image = ImageIO . read ( new ByteArrayInputStream ( part . inlineData () . flatMap ( Blob :: data ) . get ())); ImageIO . write ( image , "png" , new File ( outputFile )); } } System . out . println ( "Content written to: " + outputFile ); // Example response : // Here is the Eiffel Tower with fireworks in the background ... // // Content written to : resources / output / example - image - eiffel - tower . png } } } Image understanding Gemini can understand images as well.
- The tower will be // illuminated , standing tall as the focal point of the scene , with the bursts of // light from the fireworks creating a festive atmosphere . return generatedFileNames ; } Java import com.google.genai.Client ; import com.google.genai.types.Blob ; import com.google.genai.types.Candidate ; import com.google.genai.types.Content ; import com.google.genai.types.GenerateContentConfig ; import com.google.genai.types.GenerateContentResponse ; import com.google.genai.types.Part ; import com.google.genai.types.SafetySetting ; import java.awt.image.BufferedImage ; import java.io.ByteArrayInputStream ; import java.io.File ; import java.io.IOException ; import java.util.ArrayList ; import java.util.List ; import javax.imageio.ImageIO ; public class ImageGenMmFlashWithText { public static void main ( String [] args ) throws IOException { // TODO ( developer ): Replace these variables before running the sample .
- IMAGE ], }, }); const generatedFileNames = []; let imageIndex = 0 ; for await ( const chunk of response ) { const text = chunk . text ; const data = chunk . data ; if ( text ) { console . debug ( text ); } else if ( data ) { const outputDir = 'output-folder' ; if ( ! fs . existsSync ( outputDir )) { fs . mkdirSync ( outputDir , { recursive : true }); } const fileName = $ { outputDir } / generate content streaming image $ { imageIndex ++ } . png ; console . debug ( Writing response image to file : $ { fileName } . ); try { fs . writeFileSync ( fileName , data ); generatedFileNames . push ( fileName ); } catch ( error ) { console . error ( Failed to write image file $ { fileName }: , error ); } } } // Example response : // I will generate an image of the Eiffel Tower at night , with a vibrant display of // colorful fireworks exploding in the dark sky behind it .
- The following code uses the image generated in the previous section and uses a different model to infer information about the image: Python from google import genai from google.genai.types import HttpOptions , Part client = genai .

