---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.950Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search EU customer-managed encryption keys (CMEK)"
feature_slug: "vertex-ai-search-eu-customer-managed-encryption-keys-cmek"
latest_feature_date: "2023-10-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "eu"
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
---

# Vertex AI Search EU customer-managed encryption keys (CMEK)

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Adds support for using customer-managed encryption keys to encrypt data at rest for EU multi-region Vertex AI Search data stores in allowlist preview.

## Extended Definition

Adds support for using customer-managed encryption keys to encrypt data at rest for EU multi-region Vertex AI Search data stores in allowlist preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)

## Supporting Pages

### "Customer-managed encryption keys \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek)
- Source ID: `site-api-reference`
- Final score: 270
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Vertex AI Search.
- An example curl call and response looks like this: $ curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://us-discoveryengine.googleapis.com/v1/projects/my-ai-app-project-123/locations/us/cmekConfigs" { "cmek configs": [ { "name": "projects/my-ai-app-project-123/locations/us/cmekConfigs/default cmek config", "kmsKey": "projects/key-project-456/locations/us/keyRings/my-key-ring/cryptoKeys/my-key" "state": "ACTIVE" "isDefault": true } ] } Unregister your Cloud KMS key To unregister your key from Vertex AI Search, follow these steps: Call the DeleteCmekConfig method with the CmekConfig resource name that you want to unregister. curl -X DELETE \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID " Replace the following: LOCATION : the multi-region of your data store: us or eu .
- View Cloud KMS keys To view a registered key for Vertex AI Search, do one of the following: If you have the CmekConfig resource name, call the GetCmekConfig method: curl -X GET \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID " Replace the following: LOCATION : the multi-region of your data store: us or eu .

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Troubleshoot data ingestion If you are having problems with data ingestion, review these tips: If you're using customer-managed encryption keys and data import fails (with error message The caller does not have permission ), then make sure that the CryptoKey Encrypter/Decrypter IAM role ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) on the key has been granted to the Cloud Storage service agent.
- Customer-managed encryption keys (CMEK) Your keys only encrypt data within Google Cloud.
- Customer-managed encryption keys (CMEK) Your keys only encrypt data within Google Cloud.
- Customer-managed encryption keys (CMEK) Your keys only encrypt data within Google Cloud.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema.
- Home Documentation AI and ML Vertex AI Search Reference Send feedback MCP Tools Reference: discoveryengine.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- SearchRequest JSON representation { "servingConfig" : string , "branch" : string , "query" : string , "pageCategories" : [ string ] , "imageQuery" : { object ( ImageQuery ) } , "pageSize" : integer , "pageToken" : string , "offset" : integer , "oneBoxPageSize" : integer , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "filter" : string , "canonicalFilter" : string , "orderBy" : string , "userInfo" : { object ( UserInfo ) } , "languageCode" : string , "regionCode" : string , "facetSpecs" : [ { object ( FacetSpec ) } ] , "boostSpec" : { object ( BoostSpec ) } , "params" : { string : value , ... } , "queryExpansionSpec" : { object ( QueryExpansionSpec ) } , "spellCorrectionSpec" : { object ( SpellCorrectionSpec ) } , "userPseudoId" : string , "useLatestData" : boolean , "contentSearchSpec" : { object ( ContentSearchSpec ) } , "embeddingSpec" : { object ( EmbeddingSpec ) } , "rankingExpression" : string , "rankingExpressionBackend" : enum ( RankingExpressionBackend ) , "safeSearch" : boolean , "userLabels" : { string : string , ... } , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } , "searchAsYouTypeSpec" : { object ( SearchAsYouTypeSpec ) } , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "displaySpec" : { object ( DisplaySpec ) } , "crowdingSpecs" : [ { object ( CrowdingSpec ) } ] , "session" : string , "sessionSpec" : { object ( SessionSpec ) } , "relevanceThreshold" : enum ( RelevanceThreshold ) , "relevanceFilterSpec" : { object ( RelevanceFilterSpec ) } , "personalizationSpec" : { object ( PersonalizationSpec ) } , "relevanceScoreSpec" : { object ( RelevanceScoreSpec ) } , "searchAddonSpec" : { object ( SearchAddonSpec ) } } Fields servingConfig string Required.
- NumberConstraint JSON representation { "fieldName" : string , "comparison" : enum ( Comparison ) , "value" : number , "querySegment" : string } Fields fieldName string Name of the numerical field as defined in the schema. comparison enum ( Comparison ) The comparison operation performed between the field value and the value specified in the constraint. value number The value specified in the numerical constraint. querySegment string Identifies the keywords within the search query that match a filter.

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Additional information about the methodology used to aggregate the data is available upon request.\n\n## Contributors\n\nDavid Michael Tinsley Senior Economist, Bank of America Institute Joe Wadford Economist, Bank of America Institute Taylor Bowley Economist, Bank of America Institute Liz Everett Krisberg Head of Bank of America Institute\n\n## Sources\n\nLi Wei Director, Global Risk Analytics Kimberly Warren Director, Global Risk Analytics Ana Maxim Senior Vice President, Consumer and Small Business Mel Roasa Vice President, Digital and MarketingBANK OF AMERICA INSTITUTE11 March 2024 7", "relevanceScore": 0.3, "documentMetadata": { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/719bfb7c1c0cde3888debd43542aabfe", "uri": "gs://yipeiw multimodal 0827/rzilleruelo multimodal datasets/20240806/Document Understanding Evaluation Dataset/Bank of America/1odEo6QRllsURLZRDwHNruCXK9bsWmhtR.pdf", "title": "1odEo6QRllsURLZRDwHNruCXK9bsWmhtR", "pageIdentifier": "6" } } } ], "steps": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": "Rank generations from highest to lowest based on their spending on holiday items using cards." }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/935c4e1f18ccff2b5fa51d6d00e40dc4", "uri": "gs://yipeiw multimodal 0827/rzilleruelo multimodal datasets/20240806/Document Understanding Evaluation Dataset/Bank of America/1baMNJuizoK7u3P2-gYRwpVz 46-uOhn4.pdf", "title": "1baMNJuizoK7u3P2-gYRwpVz 46-uOhn4", "snippetInfo": [ { "snippet": "## Exhibit 6: Credit and debit \u003cb\u003ecard spending\u003c/b\u003e per household on \u003cb\u003eholiday items\u003c/b\u003e by \u003cb\u003egeneration\u003c/b\u003e (index, Aug-Sep average=100 for each year, 7- day moving average) ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/0b4c8cfb6f5ed9ef0df70ffcd79fe2c0", "uri": "gs://yipeiw multimodal 0827/rzilleruelo multimodal datasets/20240806/Document Understanding Evaluation Dataset/Bank of America/1pVkzcMDNAy-p7AlrE0LRlhpbbDzCNndJ.pdf", "title": "1pVkzcMDNAy-p7AlrE0LRlhpbbDzCNndJ", "snippetInfo": [ { "snippet": "Consumer \u003cb\u003espending\u003c/b\u003e finished solidly in 2023, \u003cb\u003ewith\u003c/b\u003e total \u003cb\u003ecard spending\u003c/b\u003e per household increasing by 0.2% year-over-year (YoY) in December, according to Bank of ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f8d7887862167c5daf6c7a30e1d464e0", "uri": "gs://yipeiw multimodal 0827/rzilleruelo multimodal datasets/20240806/Document Understanding Evaluation Dataset/Bank of America/1WkoquhDpqHphSnqIVKX45iers7kvmGjZ.pdf", "title": "1WkoquhDpqHphSnqIVKX45iers7kvmGjZ", "snippetInfo": [ { "snippet": "This could be due to an increasing customer \u003cb\u003ebase\u003c/b\u003e or inactive customers \u003cb\u003eusing their cards\u003c/b\u003e more frequently.
- Example command and result curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/sessions?filter=userPseudoId=test user%20AND%20state=IN PROGRESS" { "sessions": [ { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943", "state": "IN PROGRESS", "userPseudoId": "test user", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/741830", "text": "Compare bigquery with spanner database?" }, "answer": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943/answers/4861507376861383072" } ], "startTime": "2024-09-13T18:47:10.465311Z", "endTime": "2024-09-13T18:49:41.579151Z" } ] } Python For more information, see the Vertex AI Search Python API reference documentation .
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Search phase commands: Search and answer with search result options This section shows how to specify options for the search phase portion of the answer method call, options such as setting the maximum number of documents returned, boosting, and filtering, and how to get an answer when you supply your own search results.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Personalize answers If there is specific information about the user available—for example, data in a profile, you can specify that information in the endUserMetadata object so that the query results can be personalized for the user.

