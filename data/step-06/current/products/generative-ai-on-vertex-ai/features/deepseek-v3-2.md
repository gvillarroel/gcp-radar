---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.649Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "DeepSeek-V3.2"
feature_slug: "deepseek-v3-2"
latest_feature_date: "2025-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/countTokens"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/generateContent"
keywords:
  - "deepseek"
  - "v3"
  - "managed"
  - "api"
  - "for"
  - "the"
  - "model"
  - "is"
---

# DeepSeek-V3.2

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A managed API for the DeepSeek-V3.2 model is available in Model Garden; The DeepSeek-V3.2 model is available through Model Garden.

## Extended Definition

A managed API for the DeepSeek-V3.2 model is available in Model Garden; The DeepSeek-V3.2 model is available through Model Garden.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/countTokens](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/countTokens)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/generateContent](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/generateContent)

## Supporting Pages

### "Web Grounding for Enterprise \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- PROMPT : Your prompt. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " -H "Content-Type: application/json" -H "x-server-timeout: 60" https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /publishers/google/models/gemini-2.0-flash:generateContent -d ' { "contents": [{ "role": "user", "parts": [{ "text": PROMPT }] }], "tools": [{ "enterpriseWebSearch": { } }] } ' Use Google Search suggestions When you use Web Grounding for Enterprise, and you receive Search suggestions in your response, you must display the Search suggestions in production and in your applications.
- Client ( http options = HttpOptions ( api version = "v1" )) response = client . models . generate content ( model = "gemini-2.5-flash" , contents = "When is the next total solar eclipse in the United States?" , config = GenerateContentConfig ( tools = [ Use Enterprise Web Search Tool Tool ( enterprise web search = EnterpriseWebSearch ()) ], ), ) print ( response . text ) Example response: 'The next total solar eclipse in the United States will occur on ...' REST Replace the following variables with values: PROJECT NUMBER : Your project number.
- Code to implement a Search suggestion When you use the API to ground a response to search, the model response provides compliant HTML and CSS styling in the renderedContent field, which you implement to display Search suggestions in your application.
- To use the API, you must set the following fields: Contents.parts.text : The text query users want to send to the API. tools.enterpriseWebSearch : When this tool is provided, Web Grounding for Enterprise can be used by Gemini.

### "Method: publishers.models.countTokens \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/countTokens](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/countTokens)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A Tool is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. systemInstruction object ( Content ) Optional.
- Format: /publishers/google/models/ Request body The request body contains data with the following structure: Fields model string Optional.
- Endpoint post https: / /aiplatform.googleapis.com /v1 /{model}:countTokens Path parameters model string Required.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]

### "Method: publishers.models.countTokens \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A Tool is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. systemInstruction object ( Content ) Optional.
- Format: /publishers/google/models/ Request body The request body contains data with the following structure: Fields model string Optional.
- Endpoint post https: / /aiplatform.googleapis.com /v1beta1 /{model}:countTokens Path parameters model string Required.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]

### "Method: publishers.models.generateContent \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/generateContent](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/generateContent)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A Tool is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. toolConfig object ( ToolConfig ) Optional.
- Publisher model format: publishers/google/models/ Request body The request body contains data with the following structure: Fields contents[] object ( Content ) Required.
- Endpoint post https: / /aiplatform.googleapis.com /v1 /{model}:generateContent Path parameters model string Required.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]

