---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.648Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Prompt sharing in Vertex AI Studio"
feature_slug: "prompt-sharing-in-vertex-ai-studio"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt"
keywords:
  - "prompt"
  - "sharing"
  - "in"
  - "vertex"
  - "ai"
  - "studio"
  - "no"
  - "longer"
---

# Prompt sharing in Vertex AI Studio

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Studio prompt sharing no longer requires administrator enablement.

## Extended Definition

Vertex AI Studio prompt sharing no longer requires administrator enablement.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt)

## Supporting Pages

### "Tutorial: Vertex AI Studio in express mode \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart)
- Source ID: `site-docs-root`
- Final score: 329
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View and try a list of sample prompts To view and try a sample prompt in Vertex AI Studio, do the following: In the Vertex AI section of the Google Cloud console, go to the Vertex AI Studio page.
- This quickstart shows you how to perform the following tasks in Vertex AI Studio in express mode: View and try a list of sample prompts.
- Create and save your own prompts To create and save a prompt in Vertex AI Studio, do the following.
- Go to Vertex AI Studio In the navigation pane, click Prompt Gallery .

### "Grounding with Vertex AI Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- Source ID: `site-docs-root`
- Final score: 327
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "retrieval": { "vertexAiSearch": { "datastore": projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATASTORE ID } } }], "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Client ( http options = HttpOptions ( api version = "v1" )) Replace with your Vertex AI Search data store details DATASTORE PATH = "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/DATASTORE ID" tool = Tool ( retrieval = Retrieval ( vertex ai search = VertexAISearch ( datastore = DATASTORE PATH ) ) ) response = client . models . generate content ( model = "gemini-2.5-flash" , # Or another supported model contents = "What information can you find about topic X in the provided documents?" , # Your query config = GenerateContentConfig ( tools = [ tool ], ), ) print ( response . text ) REST To test a text prompt by using the Vertex AI API, send a POST request to the publisher model endpoint.
- Console To ground your model output to AI Applications by using Vertex AI Studio in the Google Cloud console, follow these steps: In the Google Cloud console, go to the Vertex AI Studio page.
- Go to Vertex AI Studio To turn on grounding, follow these steps: Click + New and Chat from the navigation menu.

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 309
- Re-rank relevance: N/A

Evidence snippets:
- The Routing tool supports the following: Modes of transportation : Routing for driving, walking, bicycling, transit, and two-wheeled motorized vehicles (not all travel modes are available in all countries) Multiple waypoints : Up to 13 intermediate stops between origin and destination Real-time traffic : Accounting for current traffic conditions to provide accurate "live" travel times rather than static averages The following are examples of the types of questions that the Routing tool supports: Proximity based on travel time : "What are some American restaurants within a 10-minute walk from the Hilton Hotel on 1335 6th Ave in NYC?" Commute estimation : "How long does it take to take public transit from Pike Place Market to Capitol Hill in Seattle?" Understand the response When a prompt triggers the Routing tool, the model generates a natural language answer backed by structured metadata.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "googleMaps": { "enableWidget": " ENABLE WIDGET " } }], "toolConfig": { "retrievalConfig": { "latLng": { "latitude": LATITUDE , "longitude": LONGITUDE }, "languageCode": "en US" } }, "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Console To use Grounding with Google Maps with Vertex AI, follow these steps: In the Google Cloud console, go to the Vertex AI Studio page.
- Go to Vertex AI Studio In the Tools section, click Grounding: Google .

### "Quickstart: Deploy your Vertex AI Studio prompt as a web application \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt)
- Source ID: `site-docs-root`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this quick start, you will: Create a prompt with prompt variables Deploy your prompt as a web application Monitor deployment progress and test the deployed application Update and re-deploy your prompt Test out prompt submission with multimodal supports Before you start If you have never used Vertex AI Studio before, you can follow another quickstart guide or take the Google Cloud Skills Boost course to learn the basics of Vertex AI Studio.
- Required roles To get the permissions that you need to deploy a Vertex AI Studio prompt as a web application, ask your administrator to grant you the following IAM roles on your project: Vertex AI User ( roles/aiplatform.user ) Enable the required APIs: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Grant required roles to the Compute Engine default service account: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Deploy a Cloud Run application: Cloud Run Admin ( roles/run.admin ) Cloud Run Source Developer ( roles/run.sourceDeveloper ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create a prompt with prompt variables Navigate to the create prompt page of Vertex AI Studio, and then click data object Add variable in the prompt input box.
- Update and re-deploy your prompt You can further edit your prompt in Vertex AI Studio and turn the prompt into a conversation.

