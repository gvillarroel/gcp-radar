---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.676Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Agent Development Kit session support"
feature_slug: "agent-development-kit-session-support"
latest_feature_date: "2025-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/libraries"
keywords:
  - "agent"
  - "development"
  - "kit"
  - "session"
  - "vertex"
  - "ai"
  - "engine"
  - "gained"
---

# Agent Development Kit session support

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Agent Engine gained Preview support for sessions with Agent Development Kit agents.

## Extended Definition

Vertex AI Agent Engine gained Preview support for sessions with Agent Development Kit agents.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/libraries](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/libraries)

## Supporting Pages

### "Vertex AI GenAI API \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 247
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations Methods askContexts POST /v1beta1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1beta1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1beta1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1beta1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. evaluateDataset POST /v1beta1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1beta1/{location}:evaluateInstances Evaluates instances based on a given metric. generateInstanceRubrics POST /v1beta1/{location}:generateInstanceRubrics Generates rubrics for a given prompt. generateSyntheticData POST /v1beta1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1beta1/{name} Gets a RagEngineConfig. retrieveContexts POST /v1beta1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1beta1/{ragEngineConfig.name} Updates a RagEngineConfig.
- REST Resource: v1.projects.locations Methods askContexts POST /v1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. evaluateDataset POST /v1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1/{location}:evaluateInstances Evaluates instances based on a given metric. generateInstanceRubrics POST /v1/{location}:generateInstanceRubrics Generates rubrics for a given prompt. generateSyntheticData POST /v1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1/{name} Gets a RagEngineConfig. retrieveContexts POST /v1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1/{ragEngineConfig.name} Updates a RagEngineConfig.
- REST Resource: v1beta1.projects.locations.reasoningEngines.sessions Methods appendEvent POST /v1beta1/{name}:appendEvent Appends an event to a given session. create POST /v1beta1/{parent}/sessions Creates a new Session . delete DELETE /v1beta1/{name} Deletes details of the specific Session . get GET /v1beta1/{name} Gets details of the specific Session . list GET /v1beta1/{parent}/sessions Lists Sessions in a given reasoning engine. patch PATCH /v1beta1/{session.name} Updates the specific Session .
- REST Resource: v1.projects.locations.reasoningEngines.sessions Methods appendEvent POST /v1/{name}:appendEvent Appends an event to a given session. create POST /v1/{parent}/sessions Creates a new Session . delete DELETE /v1/{name} Deletes details of the specific Session . get GET /v1/{name} Gets details of the specific Session . list GET /v1/{parent}/sessions Lists Sessions in a given reasoning engine. patch PATCH /v1/{session.name} Updates the specific Session .

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Agent Engine Vertex AI Agent Engine, a part of the Vertex AI Platform, is a set of services that enables developers to deploy, manage, and scale AI agents in production.
- For more information, see Vertex AI Agent Engine overview .
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Generative AI glossary Stay organized with collections Save and categorize content based on your preferences. agent In the context of generative AI, an agent is software that autonomously plans and executes a series of actions in pursuit of a goal, potentially in novel situations.
- Vertex AI offers a suite of APIs to help you build your own Retrieval Augmented Generation (RAG) applications or to build your own Search engine.

### "Grounding with Vertex AI Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- Go to IAM To get the permissions that you need to use grounding with Vertex AI Search, ask your administrator to grant you the following IAM roles: To read all Discovery Engine resources: Discovery Engine Viewer ( roles/discoveryengine.viewer ).
- Select a grounding source option from the following table: Grounding option Description Input Vertex AI RAG Engine Grounds using your data and do-it-yourself components.
- To read and write all Discovery Engine resources and to create a Vertex AI Search instance: Discovery Engine Editor ( roles/discoveryengine.editor ).
- Vertex AI Search Grounds using your data with a Google-managed search engine.

### "Vertex AI client libraries \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/libraries](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/libraries)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Java If you are using Maven with BOM, add the following in your pom.xml: <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.34.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-vertexai</artifactId> </dependency> </dependencies> If you are using Maven without BOM, add the following to your pom.xml: <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-vertexai</artifactId> <version>1.1.0</version> </dependency> If you are using Gradle without BOM, add the following to your build.gradle: implementation 'com.google.cloud:google-cloud-vertexai:1.1.0' For more information, see Setting Up a Java Development Environment .
- Node.js npm install @google-cloud/vertexai For more information, see Setting Up a Node.js Development Environment .
- Go go get cloud.google.com/go/vertexai/genai For more information, see Setting Up a Go Development Environment .
- This client only needs // to be created once, and can be reused for multiple requests. try ( VertexAI vertexAI = new VertexAI ( projectId , location )) { String imageUri = "gs://generativeai-downloads/images/scones.jpg" ; GenerativeModel model = new GenerativeModel ( modelName , vertexAI ); GenerateContentResponse response = model . generateContent ( ContentMaker . fromMultiModalData ( PartMaker . fromMimeTypeAndData ( "image/png" , imageUri ), "What's in this photo" )); return response . toString (); } } } Node.js const { VertexAI } = require ( ' @google-cloud/vertexai ' ); / TODO(developer): Update these variables before running the sample. / async function createNonStreamingMultipartContent ( projectId = 'PROJECT ID' , location = 'us-central1' , model = 'gemini-2.0-flash-001' , image = 'gs://generativeai-downloads/images/scones.jpg' , mimeType = 'image/jpeg' ) { // Initialize Vertex with your Cloud project and location const vertexAI = new VertexAI ({ project : projectId , location : location }); // Instantiate the model const generativeVisionModel = vertexAI . getGenerativeModel ({ model : model , }); // For images, the SDK supports both Google Cloud Storage URI and base64 strings const filePart = { fileData : { fileUri : image , mimeType : mimeType , }, }; const textPart = { text : 'what is shown in this image?' , }; const request = { contents : [{ role : 'user' , parts : [ filePart , textPart ]}], }; console . log ( 'Prompt Text:' ); console . log ( request . contents [ 0 ]. parts [ 1 ]. text ); console . log ( 'Non-Streaming Response Text:' ); // Generate a response const response = await generativeVisionModel . generateContent ( request ); // Select the text from the response const fullTextResponse = response . response . candidates [ 0 ]. content . parts [ 0 ]. text ; console . log ( fullTextResponse ); } Python import vertexai from vertexai.preview.prompts import Prompt Initialize vertexai vertexai . init ( project = PROJECT ID , location = "us-central1" ) variables = [ { "animal" : "Eagles" , "activity" : "eat berries" }, { "animal" : "Coyotes" , "activity" : "jump" }, { "animal" : "Squirrels" , "activity" : "fly" } ] define prompt template prompt = Prompt ( prompt data = "Do {animal} {activity} ?" , model name = "gemini-2.0-flash-001" , variables = variables , system instruction = "You are a helpful zoologist" generation config=generation config, # Optional safety settings=safety settings, # Optional ) Generates content using the assembled prompt. responses = [] for variable set in prompt . variables : response = prompt . generate content ( contents = prompt . assemble contents ( variable set ) ) responses . append ( response ) for response in responses : print ( response . text , end = "" ) Example response Assembled prompt replacing: 1 instances of variable animal, 1 instances of variable activity Eagles are primarily carnivorous.

