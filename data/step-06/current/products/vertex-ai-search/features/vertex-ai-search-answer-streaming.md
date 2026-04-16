---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.947Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search answer streaming"
feature_slug: "vertex-ai-search-answer-streaming"
latest_feature_date: "2024-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/advanced-llm"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "answer"
  - "streaming"
  - "returns"
  - "generated"
  - "responses"
---

# Vertex AI Search answer streaming

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search answer streaming returns generated responses in sequential parts so users can view early answer segments while the remainder is still being generated.

## Extended Definition

Vertex AI Search answer streaming returns generated responses in sequential parts so users can view early answer segments while the remainder is still being generated.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/advanced-llm](https://docs.cloud.google.com/generative-ai-app-builder/docs/advanced-llm)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Search and answer (specify maximum steps) The following command shows how to call the answer method and return a generated answer and a list of search results.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Specify a custom preamble The following command shows how to set a preamble for the generated answer.
- For the nine months ended September 30, 2019, the net cash used in investing activities totaled $(24,788).\n\nHere's a breakdown of the specific cash flows for investing activities (in millions):\n\n Purchases of property and equipment: $(16,802) in 2020 and $(17,496) in 2019\n Purchases of marketable securities: $(104,932) in 2020 and $(80,968) in 2019\n Maturities and sales of marketable securities: $97,751 in 2020 and $74,783 in 2019\n Purchases of non-marketable investments: $(1,864) in 2020 and $(1,499) in 2019\n Maturities and sales of non-marketable investments: $598 in 2020 and $297 in 2019\n Acquisitions, net of cash acquired, and purchases of intangible assets: $(368) in 2020 and $(373) in 2019\n Other investing activities: $125 in 2020 and $468 in 2019", "steps": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": "Plot composition of net cash used in investing activities" }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/b3133a895e0404984959736488992b53", "uri": "gs://yipeiw multimodal 0827/rzilleruelo multimodal datasets/20240806/Document Understanding Evaluation Dataset/boa-tabular/Testing 20201030-alphabet-cash flow statement.pdf", "title": "Testing 20201030-alphabet-cash flow statement", "snippetInfo": [ { "snippet": "... \u003cb\u003eNet cash provided by operating activities\u003c/b\u003e 42,447 40,093 \u003cb\u003eInvesting activities\u003c/b\u003e (16,802) Purchases of property and equipment (17,496) ...", "snippetStatus": "SUCCESS" } ] } ] } } ] } ], "blobAttachments": [ { "data": { "mimeType": "image/png", "data": "iVBORw0KGgoAAAANSUhEUgAACvAAZd8AEZFKHDp0CE5OTgCAZcuWYfr06QonIqIMXIGXiIhUITY2Vq4tLCxyNdbMzEyuk5OTtZaJiEgfZd5aMj4+Xq4zr1rztm3SMs/fXIGXiOjDGRgYyLWpqalcJyUlyfW/V7rJULVqVbl++PChDtIREemXr7766oPHPnr0CK1bt9ZeGCIiPXXlypWPGr9lyxYtJSEi0k9ly5bFzZs30bNnT0iSBEmS8PLlS1y6dAlHjhzBpUuX8PLlS/lcjx49cOPGDZQtW1bp6EREquHv7w9JkgAALVq0UDgNEWXGBl4iIlIFc3NzuY6MjMzV2ICAALkuVqyY1jIREemjzDdVb926JdeWlpZynXlr98z8/f3lunDhwtoPR0SkJzLPuYGBgXKd+bOun5/fG8dmXjE9PT1dB+mIiPTL8uXLP2hVm19++QV169aFt7e3DlIREemXDh06wMfHJ9fjwsLC0K1bN4wePVoHqYiI9EuRIkXwxx9/4MSJE3BycoKFhYXcsCtJEiwsLNC/f38cP34chw4dyrJQBBERfbxChQrJde...PrTn86//Mu/5Jhjjql1NACAAeP/AX0CwI314+qiAAAAAElFTkSuQmCC" }, "attributionType": "GENERATED" } ] }, "answerQueryToken": "NMwKDAjEjOe-BhD-meX6ARIkNjdkNjBhM2QtMDAwMC0yYzU4LTgxYjctMDg5ZTA4MmNhZDgw" In this example, a generated chart is included in the answer because the query requested a plot and there was enough data to generate the chart.
- Example command and result curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/sessions?filter=userPseudoId=test user%20AND%20state=IN PROGRESS" { "sessions": [ { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943", "state": "IN PROGRESS", "userPseudoId": "test user", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/741830", "text": "Compare bigquery with spanner database?" }, "answer": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943/answers/4861507376861383072" } ], "startTime": "2024-09-13T18:47:10.465311Z", "endTime": "2024-09-13T18:49:41.579151Z" } ] } Python For more information, see the Vertex AI Search Python API reference documentation .

### Check grounding with RAG \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-grounding)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, in the context of Vertex AI Search, the answer candidate might be the generated search summary that answers a query.
- As part of your Retrieval Augmented Generation (RAG) experience in Vertex AI Search, you can check grounding to determine how grounded a piece of text (called an answer candidate ) is in a given set of reference texts (called facts ).
- Output data The check grounding API returns the following for an answer candidate: Support score: The support score is a number from 0 to 1 that indicates how grounded an answer candidate is in the provided set of facts.
- Examples of answer candidates and grounding responses The following table shows examples of different answer candidates and responses when you send the example request , based on the example facts .

### "Turn generative responses on or off \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/advanced-llm](https://docs.cloud.google.com/generative-ai-app-builder/docs/advanced-llm)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For structured, unstructured, and advanced website search, generative responses include the following advanced LLM features: Search summaries using the search method Search answers using the answer method Search with follow-ups using the answer or the converse method This page describes how to turn generative responses on or off for an app.
- Home Documentation AI and ML Vertex AI Search Send feedback Turn generative responses on or off Stay organized with collections Save and categorize content based on your preferences.
- However, answers are generated by the answer method and summaries are generated by the search method.
- For example, if you have deployed a search widget that uses search with follow-ups, Google recommends that you change the search type to "single-turn without summarization" before turning off generative responses.

