---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.714Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Web grounding default"
feature_slug: "web-grounding-default"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete"
keywords:
  - "web"
  - "grounding"
  - "default"
  - "is"
  - "enabled"
  - "by"
  - "for"
  - "new"
---

# Web grounding default

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Web grounding is enabled by default for new apps.

## Extended Definition

Web grounding is enabled by default for new apps.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results](https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)

## Supporting Pages

### Configure the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Default web search state section, use the toggle to define the default behavior for queries: Switch the toggle on to enable web search by default for new queries.
- For example: Make the summary headings bold List the resources as an unordered list In the Enable web grounding section, make sure the toggle is switched on and then select one of the following options: Google search (not Data Residency compliant) to use the standard Google Search index for grounding.
- Switch the toggle off to disable web search by default.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### Discovery Engine API \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1alpha.projects.locations Methods completeExternalIdentities GET /v1alpha/{parent=projects/ /locations/ }:completeExternalIdentities This method provides suggestions for users and groups managed in an external identity provider, based on the provided prefix. estimateDataSize POST /v1alpha/{location=projects/ /locations/ }:estimateDataSize Estimates the data size to be used by a customer. getAclConfig GET /v1alpha/{name=projects/ /locations/ /aclConfig} Gets the AclConfig . getCmekConfig GET /v1alpha/{name=projects/ /locations/ /cmekConfig} Gets the CmekConfig . obtainCrawlRate POST /v1alpha/{location=projects/ /locations/ }:obtainCrawlRate Obtains the time series data of organic or dedicated crawl rate for monitoring. queryConfigurablePricingUsageStats GET /v1alpha/{project=projects/ }/locations/{location}:queryConfigurablePricingUsageStats Queries configurable pricing usage stats for a project. removeDedicatedCrawlRate POST /v1alpha/{location=projects/ /locations/ }:removeDedicatedCrawlRate Removes the dedicated crawl rate for a craw rate scope. setDedicatedCrawlRate POST /v1alpha/{location=projects/ /locations/ }:setDedicatedCrawlRate Sets the dedicated crawl rate for a crawl rate scope. setUpDataConnector POST /v1alpha/{parent=projects/ /locations/ }:setUpDataConnector Creates a Collection and sets up the DataConnector for it. setUpDataConnectorV2 POST /v1alpha/{parent=projects/ /locations/ }:setUpDataConnectorV2 Creates a Collection and sets up the DataConnector for it. updateAclConfig PATCH /v1alpha/{aclConfig.name=projects/ /locations/ /aclConfig} Default ACL configuration for use in a location of a customer's project. updateCmekConfig PATCH /v1alpha/{config.name=projects/ /locations/ /cmekConfig} Provisions a CMEK key for use in a location of a customer's project.
- REST Resource: v1alpha.projects.locations.collections.dataConnector Methods acquireAccessToken POST /v1alpha/{name=projects/ /locations/ /collections/ /dataConnector}:acquireAccessToken Uses the per-user refresh token minted with AcquireAndStoreRefreshToken to generate and return a new access token and its details. acquireAndStoreRefreshToken POST /v1alpha/{name=projects/ /locations/ /collections/ /dataConnector}:acquireAndStoreRefreshToken Exchanges OAuth authorization credentials for a refresh token and stores the refresh token and the scopes. buildActionInvocation POST /v1alpha/{name=projects/ /locations/ /collections/ /dataConnector}:buildActionInvocation Builds an action invocation using the DataConnector . checkRefreshToken (deprecated) GET /v1alpha/{name=projects/ /locations/ /collections/ /dataConnector}:checkRefreshToken Deprecated: Checks the existence of a refresh token for the EUC user for a given connection and returns its details. executeAction POST /v1alpha/{name=projects/ /locations/ /collections/ /dataConnector}:executeAction Executes a 3rd party action using the DataConnector . fetchEntitiesTypes GET /v1alpha/{name=projects/ /locations/ /collections/ /dataConnector}:FetchEntitiesTypes Fetch the entities types for a DataConnector . getConnectorSecret GET /v1alpha/{name=projects/ /locations/ /collections/ /dataConnector}:getConnectorSecret Get the secret for the associated connector. startConnectorRun POST /v1alpha/{parent=projects/ /locations/ /collections/ /dataConnector}:startConnectorRun Starts an immediate synchronization process for a DataConnector .
- REST Resource: v1alpha.projects.locations.collections.engines.sessions Methods addContextFile POST /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /sessions/ }:addContextFile Uploads a context file to use as source for the assist calls within the session. create POST /v1alpha/{parent=projects/ /locations/ /collections/ /engines/ }/sessions Creates a Session. delete DELETE /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /sessions/ } Deletes a Session. get GET /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /sessions/ } Gets a Session. list GET /v1alpha/{parent=projects/ /locations/ /collections/ /engines/ }/sessions Lists all Sessions by their parent DataStore . listSessionFileMetadata GET /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /sessions/ }:listSessionFileMetadata Lists metadata for all files in the current session. patch PATCH /v1alpha/{session.name=projects/ /locations/ /collections/ /engines/ /sessions/ } Updates a Session. recommendQuestions GET /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /sessions/ }:recommendQuestions Gets recommended questions for the given session. removeContextFile POST /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /sessions/ }:removeContextFile Removes a context file from a session. selectContextFiles POST /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /sessions/ }:selectContextFiles Selects context files to be used in a session.
- REST Resource: v1alpha.projects.locations.collections.engines.assistants.agents Methods create POST /v1alpha/{parent=projects/ /locations/ /collections/ /engines/ /assistants/ }/agents Creates an Agent . delete DELETE /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /assistants/ /agents/ } Deletes an Agent . deploy POST /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /assistants/ /agents/ }:deploy Deploys an Agent . get GET /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /assistants/ /agents/ } Gets an Agent . list GET /v1alpha/{parent=projects/ /locations/ /collections/ /engines/ /assistants/ }/agents Lists all Agent s under an Assistant which were created by the caller. patch PATCH /v1alpha/{agent.name=projects/ /locations/ /collections/ /engines/ /assistants/ /agents/ } Updates an Agent rejectAgent POST /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /assistants/ /agents/ }:rejectAgent Rejects an Agent offered to the public. requestAgentReview POST /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /assistants/ /agents/ }:requestAgentReview Presents an Agent to admins by making it available for review. withdrawAgent POST /v1alpha/{name=projects/ /locations/ /collections/ /engines/ /assistants/ /agents/ }:withdrawAgent Withdraws an Agent offered to the public.

### "Configure results for the UI \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results](https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, a snippet is displayed for each search result for website and unstructured data.
- Configure search results for structured data For structured data, by default, the UI displays all of the name-value pairs for each item in the search results.
- Configure search results for unstructured or website data The UI for unstructured and website data offers the following search customizations: Search (single-turn) Search with an answer (single-turn search with summarization) Search with follow-ups (multi-turn search) To configure how the UI displays search results for unstructured data: In the Google Cloud console, go to the Gemini Enterprise page.
- This feature for website and unstructured data allows for follow-up questions that keep the context of the initial search query.

### Configure autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Example command and result curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: my-project-123" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store:completeQuery?query=t&query model=imported-suggestion" Response: { "querySuggestions": [ { "suggestion": "The Time Machine" }, { "suggestion": "The Scarlet Letter" } ] } Purge the list of imported autocomplete suggestions Before importing a new list of autocomplete suggestions, remove the existing one.
- Query suggestions model Data source Website data Structured data Unstructured data Document Imported by user ✔ (default) ✔ (default) Completable fields Imported by user ✔ Search history Automatically collected ✔ (default) ✔ ✔ User events Imported by user or automatically collected by widget ✔ ✔ ✔ : The document schema must contain title or description fields, or there must be fields that have been specified as title or description key properties.
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \$ curl -X PATCH \ -H "X-Goog-User-Project: my-project-123" \t-access-token)" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=queryFrequencyThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "queryFrequencyThreshold": 30 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "queryFrequencyThreshold": 30 } Update the CompletionConfig.numUniqueUsersThreshold field: curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig?updateMask = numUniqueUsersThreshold \ -d '{ "name": "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig", "numUniqueUsersThreshold": UNIQUE USERS }' Replace UNIQUE USERS with an integer value that represents the minimum number of unique users who must enter a given search query before it can be returned as an autocomplete suggestion.
- DataStoreName ; public class SyncCompleteQuery { public static void main ( String [] args ) throws Exception { syncCompleteQuery (); } public static void syncCompleteQuery () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CompletionServiceClient completionServiceClient = CompletionServiceClient . create ()) { CompleteQueryRequest request = CompleteQueryRequest . newBuilder () . setDataStore ( DataStoreName . ofProjectLocationDataStoreName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" ) . toString ()) . setQuery ( "query107944136" ) . setQueryModel ( "queryModel-184930495" ) . setUserPseudoId ( "userPseudoId-1155274652" ) . setIncludeTailSuggestions ( true ) . build (); CompleteQueryResponse response = completionServiceClient . completeQuery ( request ); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Gemini Enterprise quickstart using client libraries .

