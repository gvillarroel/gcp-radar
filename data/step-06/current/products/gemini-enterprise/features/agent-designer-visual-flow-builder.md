---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.688Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Agent Designer visual flow builder"
feature_slug: "agent-designer-visual-flow-builder"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/libraries"
keywords:
  - "agent"
  - "designer"
  - "visual"
  - "flow"
  - "builder"
  - "includes"
  - "for"
  - "creating"
---

# Agent Designer visual flow builder

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Agent Designer includes a visual flow builder for creating and managing complex multi-step agents.

## Extended Definition

Agent Designer includes a visual flow builder for creating and managing complex multi-step agents.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer)
- [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview)
- [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery)
- [https://docs.cloud.google.com/gemini/enterprise/docs/libraries](https://docs.cloud.google.com/gemini/enterprise/docs/libraries)

## Supporting Pages

### Agent Designer overview \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Designer pane: the designer pane provides you with granular, low-code control over your agent's configuration and is organized into three tabs: Flow: presents a visual representation of your agent's workflow and control logic.
- Agent Designer is an interactive no-code, low-code platform for creating, managing, and launching single and multi-step agents in Gemini Enterprise.
- Agent types The following table lists the type of agents that you can create using the Agent Designer: Agent type Description Best for Single-step agent An agent that operates independently to complete a specific task.
- Agent Designer canvas The Agent Designer canvas is an interactive, unified interface for building and configuring your agent.

### Agents overview \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see: Update an A2A agent Update an ADK agent Update a Dialogflow agent Share an agent You can share the available agents in your Google Cloud console.
- For more information, see Register and manage Dialogflow agents .
- For more information, see Agent Designer overview .
- Agent type Gemini Enterprise tool Description Employee-made agents from your organization Agent Designer This interactive, no-code, low-code tool lets users in your organization create, launch, and manage single and multi-step agents on the Gemini Enterprise web app.

### "Browse agents with Agent Gallery \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Note: In the Gemini Enterprise Frontline edition, access to agents added by your organization is limited to agents that have been provisioned for you by your administrator.
- Agent Gallery is your central hub for discovering, using, and managing agents.
- Your agents: custom agents that you can create using Agent Designer .
- Create a new custom agent using Agent Designer.

### Gemini Enterprise client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/libraries](https://docs.cloud.google.com/gemini/enterprise/docs/libraries)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- SearchResult element : response . getResultsList ()) { System . out . println ( "Response content: " + element ); } } } } Node.js / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR LOCATION'; // Options: 'global', 'us', 'eu' // const collectionId = 'default collection'; // Options: 'default collection' // const dataStoreId = 'YOUR DATA STORE ID' // Create in Cloud Console // const servingConfigId = 'default config'; // Options: 'default config' // const searchQuery = 'Google'; const { SearchServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1beta ; // For more information, refer to: // https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store const apiEndpoint = location === 'global' ? 'discoveryengine.googleapis.com' : ${ location } -discoveryengine.googleapis.com ; // Instantiates a client const client = new SearchServiceClient ({ apiEndpoint : apiEndpoint }); async function search () { // The full resource name of the search engine serving configuration. // Example: projects/{projectId}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}/servingConfigs/{servingConfigId} // You must create a search engine in the Cloud Console first. const name = client . projectLocationCollectionDataStoreServingConfigPath ( projectId , location , collectionId , dataStoreId , servingConfigId ); const request = { pageSize : 10 , query : searchQuery , servingConfig : name , }; const IResponseParams = { ISearchResult : 0 , ISearchRequest : 1 , ISearchResponse : 2 , }; // Perform search request const response = await client . search ( request , { // Warning: Should always disable autoPaginate to avoid iterate through all pages. // // By default NodeJS SDK returns an iterable where you can iterate through all // search results instead of only the limited number of results requested on // pageSize, by sending multiple sequential search requests page-by-page while // iterating, until it exhausts all the search results.
- You can iterate over elements, and API calls will be issued to fetch pages as needed. result . each do item Each element is of type ::Google::Cloud::DiscoveryEngine::V1beta::SearchResponse::SearchResult. p item end end Additional resources C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker Gemini Enterprise on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker Gemini Enterprise on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker Gemini Enterprise on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker Gemini Enterprise on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker Gemini Enterprise on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker Gemini Enterprise on Stack Overflow Source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>26 .79.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - discoveryengine < / artifactId > < / dependency > < / dependencies > If you are using Gradle , add the following to your dependencies: implementation ' com . google . cloud : google - cloud - discoveryengine : 0.84.0 ' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-discoveryengine" % "0.84.0" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client, please see the apiEndpoint client configuration option for more details. / function callSample(): void { $formattedServingConfig = SearchServiceClient::servingConfigName( '[PROJECT]', '[LOCATION]', '[DATA STORE]', '[SERVING CONFIG]' ); search sample($formattedServingConfig); } Python from google.api core.client options import ClientOptions from google.cloud import discoveryengine v1 as discoveryengine TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR LOCATION" # Values: "global", "us", "eu" engine id = "YOUR APP ID" search query = "YOUR SEARCH QUERY" def search sample ( project id : str , location : str , engine id : str , search query : str , ) - > discoveryengine . services . search service . pagers .

