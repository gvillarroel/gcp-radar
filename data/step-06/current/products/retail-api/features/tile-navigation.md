---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.269Z"
product_name: "Retail API"
product_slug: "retail-api"
feature_name: "Tile navigation"
feature_slug: "tile-navigation"
latest_feature_date: "2024-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/retail/docs/a-b-monitor"
  - "https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide"
  - "https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide"
  - "https://docs.cloud.google.com/retail/docs/retail-api-tutorials"
keywords:
  - "tile"
  - "navigation"
  - "shows"
  - "tiles"
  - "for"
  - "likely"
  - "useful"
  - "dynamic"
---

# Tile navigation

Product: Retail API
Coverage: MEDIUM

## Step 02 Summary

Tile navigation shows tiles for likely useful dynamic facets to help users narrow search results faster.

## Extended Definition

Tile navigation shows tiles for likely useful dynamic facets to help users narrow search results faster.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/retail/docs/a-b-monitor](https://docs.cloud.google.com/retail/docs/a-b-monitor)
- [https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide)
- [https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide)
- [https://docs.cloud.google.com/retail/docs/retail-api-tutorials](https://docs.cloud.google.com/retail/docs/retail-api-tutorials)

## Supporting Pages

### "Monitor and analyze A/B experiments \_|\_ Vertex AI Search for commerce\

- URL: [https://docs.cloud.google.com/retail/docs/a-b-monitor](https://docs.cloud.google.com/retail/docs/a-b-monitor)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The requests and user events configurations would be: Variant arm name Traffic destination event.experimentIds event.attributionToken Traffic % Head queries control In-house CONTROL N/A 50% of head queries Head queries dynamic facets ON experiment Google Vertex AI Search for Retail API EXP DF ON Attribution token from search response 25% of head queries Head queries dynamic facets OFF experiment Google Vertex AI Search for Retail API EXP DF OFF Attribution token from search response 25% of head queries Non-head queries and other holdouts Google Vertex AI Search for Retail API N/A Depends on engine used N/A To set up monitoring for this example experiment, you would create corresponding variant arms in the console for each experiment group.
- Variant arm name Traffic destination User event experiment ID Intended traffic % Example control arm External CONTROL 50% Example experiment arm 1 Google Vertex AI Search for Retail API EXP DF ON 25% Example experiment arm 2 Google Vertex AI Search for Retail API EXP DF OFF 25% Traffic metrics An experiment's Monitoring page shows if there are unintended traffic splits for the following metrics: Search/Browse event count per date Search/Browse visitor count per date Search/Browse event count per category When unintended traffic splits occur for one of these metrics, its card at the top of the Monitoring page shows the dates on which the unintended traffic split occurred.
- Variant arm name Traffic destination User event experiment ID Intended traffic % Example control arm External CONTROL 50% Example experiment arm Google Vertex AI Search for Retail API EXPERIMENT 50% Example 2: Three variant arms In this example, assume that you plan to conduct an A/B experiment on the head queries (high-frequency queries) and include both turning on and off dynamic facets.
- For example, the baseline (or control) variant arm likely represents an external destination if the experiment is comparing an existing service's traffic to Vertex AI Search for commerce traffic.

### "Conversational filtering developer's guide \_|\_ Vertex AI Search for commerce\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-filtering-dev-guide)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Applying a filter using conversational multiple choice is identical to applying the same filter using dynamic facets or tiles.
- The starting (neutral) state is a landing page, likely with a search bar, recommendations, or marketing campaigns, depending on your Vertex AI Search for commerce application.
- Conversational API request { query : "dress" co n versa t io n id : "c154d073-87f5-4edb-accd-587eabe014ff" co n versa t io nal search spec { "mode" : "CONVERSATIONAL FILTER ONLY" user a ns wer { selec te d a ns wer { produc t a ttr ibu te value { na me : "colors" value : "yellow" } } } } } The response from the Conversational API then looks like this: Conversational API response { co n versa t io n id : "c154d073-87f5-4edb-accd-587eabe014ff" re f i ne d query : "dress" co n versa t io nal f il ter i n g resul t { addi t io nal f il ter { produc t a ttr ibu te value { na me : "colors" , value : "yellow" } } f ollowup ques t io n { f ollowup ques t io n : "What is the occasion?" sugges te d a ns wers { produc t a ttr ibu te value { na me : "attribute.occasion" , value : "wedding" } } sugges te d a ns wers { produc t a ttr ibu te value { na me : "attribute.occasion" , value : "party" } } } } } What you should do with the response: The Google response is basically identical to the response to the first query, except the additional filter field can be used to check off the filter box for color = yellow and should be added to any other filters that the user has selected.
- Enable the feature // Configuration for overall generative question feature state. message GenerativeQuestionsFeatureConfig { ... // Resource name of the affected catalog. // Format: projects/{project}/locations/{location}/catalogs/{catalog} string catalog = 1 [( google . api . field behavior ) = REQUIRED ]; // Determines whether questions are used at serving time. // Note: You cannot enable this until initial data requirements are // satisfied. bool feature enabled = 2 [( google . api . field behavior ) = OPTIONAL ]; // Minimum number of products in the response to trigger follow-up questions. // Value must be 0 or positive. int32 minimum products = 3 [( google . api . field behavior ) = OPTIONAL ]; } Conversation-relevant fields catalog string The resource name of the affected catalog at the project level.

### "Conversational Commerce agent user experience guide \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-ux-guide)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Indicate support for natural language input Suggested prompts : Show me red sneakers for under $100 Dynamic placeholder text : Ask a question Microcopy : Try searching in full sentences!
- This minor detail aligns with the Conversational Commerce agent goals of making search more intuitive and reducing navigation effort and friction.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Accessibility tools Multimodal input support Voice-to-text correction Screen reader compatibility Real-time transcription Clear semantic structuring Predictive text assist Voiceovers for image-based content Autocorrect Use targeted questions to ensure graceful error handling Inevitably, there are instances when a query produces no results on a particular site.

### "Interactive tutorials \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/retail/docs/retail-api-tutorials](https://docs.cloud.google.com/retail/docs/retail-api-tutorials)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create/Get/Update/Delete product tutorial This tutorial shows you how to use API methods, which perform the following actions: Create a product Get a product Update a product Delete a product To follow step-by-step guidance for this task directly in the Cloud Shell Editor, click Guide me : Guide me Create product tutorial This tutorial shows you how to create a single product.
- The following Product fields are considered inventory fields: Product.price info Product.availability Product.available quantity Product.fulfillment info Add fulfillment tutorial This tutorial shows how to update product fulfillment information using the AddFulfillmentPlaces method.
- To follow step-by-step guidance for this task directly in the Cloud Shell Editor, click Guide me : Guide me Set inventory tutorial This tutorial shows how to push inventory updates using the SetInventory method instead of updating the entire product.
- To follow step-by-step guidance for this task directly in the Cloud Shell Editor, click Guide me : Guide me Remove fulfillment tutorial This tutorial shows how to update product fulfillment information using the RemoveFulfillmentPlaces method.

