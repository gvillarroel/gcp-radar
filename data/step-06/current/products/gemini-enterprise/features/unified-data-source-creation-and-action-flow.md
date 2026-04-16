---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.684Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Unified data source creation and action flow"
feature_slug: "unified-data-source-creation-and-action-flow"
latest_feature_date: "2025-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/choose-product"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest"
keywords:
  - "unified"
  - "source"
  - "creation"
  - "and"
  - "action"
  - "flow"
  - "the"
  - "creates"
---

# Unified data source creation and action flow

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

The unified flow creates a data store and its associated actions in a single process.

## Extended Definition

The unified flow creates a data store and its associated actions in a single process.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest)

## Supporting Pages

### "Connect a third-party data source \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source)
- Source ID: `site-docs-root-2`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Generally Available Connect Confluence Cloud with data ingestion and federation Connect Dropbox with data federation Connect Jira Cloud with data ingestion and federation Connect Microsoft Entra ID Connect Microsoft Outlook with data ingestion and federation Connect Microsoft OneDrive with data ingestion and federation Connect Microsoft SharePoint Online with data ingestion and federation Connect ServiceNow with data ingestion Public preview Connect Box with data federation Connect Confluence Data Center with data federation Connect Docusign with data federation Connect GitHub with data federation Connect Hubspot with data federation Connect Jira Data Center with data federation Connect Linear with data federation Connect Microsoft Teams with data federation Connect Monday with data federation Connect Notion with data federation Connect ServiceNow with data federation Connect Shopify with data federation Connect Zendesk with data federation Private preview To connect data sources that are in private preview, contact your Google account team and request to be added to the allowlist.
- Connect Box with data ingestion Connect Confluence Data Center On-premises with data ingestion Connect Jira Data Center On-premises with data ingestion Connect Salesforce with data ingestion Connect Slack with data federation Supported actions Expand the data store name in the following list to reveal the available actions for each.
- When you connect a third-party data source, Gemini Enterprise creates a data store and associates entity data stores with it for each specified entity.
- ServiceNow Launch date Action Description 12/12/25 Create incident Creates a new ServiceNow incident to report and track service interruptions.

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Method of app creation and data ingestion How you create an app and ingest data depends on the type of data you have: For third-party data, you use the Google Cloud console, not the API, to create your app and ingest data.
- Blended search has the following limitations: Adding and removing data stores: To turn on blended search for an app, you must connect at least two data stores to it during app creation.
- Relationship between apps and data stores An app must be connected to a data store in order to use the data from it to serve search results, answers, or actions.
- Entities vary depending on the source, such as issues for Jira and content and spaces for Confluence.

### NotebookLM Enterprise, Gemini Enterprise, or both? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- NotebookLM Enterprise Gemini Enterprise Primary Goal Centralized knowledge, content generation from your own documents Enterprise-wide data search, multi-modal content generation, and agent orchestration Input Your uploaded documents, websites, and specific sources Broad queries and data from across enterprise systems (Google and third-party SaaS) Output Synthesized insights, generated content (FAQs, timelines), interactive audio podcasts, and chat-based questions and answers confined to sources Answers from diverse data, text and multi-modal content from across your enterprise, and automated actions by agents User Individual knowledge workers, small teams, content creators Process owners, developers, IT, operations, business analysts, general knowledge seekers, and content creators Complexity Focused knowledge management and document-specific chat experiences Orchestrating multi-agent systems for business processes and general AI assistance Core Function Understanding and extracting from unstructured text, generating content based on your sources Comprehensive information retrieval, multi-modal content creation, and autonomous agent execution How NotebookLM Enterprise and Gemini Enterprise work together NotebookLM Enterprise and Gemini Enterprise are complementary products , enhancing each other's value.
- Focus : Gemini Enterprise is ideal for broad information discovery, comprehensive content generation, and orchestrating autonomous AI agents for action-oriented workflows.
- Gemini Enterprise provides broad, enterprise data search that often leads to the discovery of new, valuable sources from Google systems and third-party SaaS applications.
- It helps create notebooks, which are organized collections of your curated, hand-selected documents, websites, and other sources on a given topic.

### Discovery Engine API \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1alpha.projects.locations Methods completeExternalIdentities GET /v1alpha/{parent=projects/ /locations/ }:completeExternalIdentities This method provides suggestions for users and groups managed in an external identity provider, based on the provided prefix. estimateDataSize POST /v1alpha/{location=projects/ /locations/ }:estimateDataSize Estimates the data size to be used by a customer. getAclConfig GET /v1alpha/{name=projects/ /locations/ /aclConfig} Gets the AclConfig . getCmekConfig GET /v1alpha/{name=projects/ /locations/ /cmekConfig} Gets the CmekConfig . obtainCrawlRate POST /v1alpha/{location=projects/ /locations/ }:obtainCrawlRate Obtains the time series data of organic or dedicated crawl rate for monitoring. queryConfigurablePricingUsageStats GET /v1alpha/{project=projects/ }/locations/{location}:queryConfigurablePricingUsageStats Queries configurable pricing usage stats for a project. removeDedicatedCrawlRate POST /v1alpha/{location=projects/ /locations/ }:removeDedicatedCrawlRate Removes the dedicated crawl rate for a craw rate scope. setDedicatedCrawlRate POST /v1alpha/{location=projects/ /locations/ }:setDedicatedCrawlRate Sets the dedicated crawl rate for a crawl rate scope. setUpDataConnector POST /v1alpha/{parent=projects/ /locations/ }:setUpDataConnector Creates a Collection and sets up the DataConnector for it. setUpDataConnectorV2 POST /v1alpha/{parent=projects/ /locations/ }:setUpDataConnectorV2 Creates a Collection and sets up the DataConnector for it. updateAclConfig PATCH /v1alpha/{aclConfig.name=projects/ /locations/ /aclConfig} Default ACL configuration for use in a location of a customer's project. updateCmekConfig PATCH /v1alpha/{config.name=projects/ /locations/ /cmekConfig} Provisions a CMEK key for use in a location of a customer's project.
- REST Resource: v1alpha.projects.locations.collections.dataConnector Methods acquireAccessToken POST /v1alpha/{name=projects/ /locations/ /collections/ /dataConnector}:acquireAccessToken Uses the per-user refresh token minted with AcquireAndStoreRefreshToken to generate and return a new access token and its details. acquireAndStoreRefreshToken POST /v1alpha/{name=projects/ /locations/ /collections/ /dataConnector}:acquireAndStoreRefreshToken Exchanges OAuth authorization credentials for a refresh token and stores the refresh token and the scopes. buildActionInvocation POST /v1alpha/{name=projects/ /locations/ /collections/ /dataConnector}:buildActionInvocation Builds an action invocation using the DataConnector . checkRefreshToken (deprecated) GET /v1alpha/{name=projects/ /locations/ /collections/ /dataConnector}:checkRefreshToken Deprecated: Checks the existence of a refresh token for the EUC user for a given connection and returns its details. executeAction POST /v1alpha/{name=projects/ /locations/ /collections/ /dataConnector}:executeAction Executes a 3rd party action using the DataConnector . fetchEntitiesTypes GET /v1alpha/{name=projects/ /locations/ /collections/ /dataConnector}:FetchEntitiesTypes Fetch the entities types for a DataConnector . getConnectorSecret GET /v1alpha/{name=projects/ /locations/ /collections/ /dataConnector}:getConnectorSecret Get the secret for the associated connector. startConnectorRun POST /v1alpha/{parent=projects/ /locations/ /collections/ /dataConnector}:startConnectorRun Starts an immediate synchronization process for a DataConnector .
- REST Resource: v1alpha.projects.locations.authorizations Methods acquireUserAuthorization POST /v1alpha/{name=projects/ /locations/ /authorizations/ }:acquireUserAuthorization Uses the stored refresh token for the user identified by their end-user credentials and the given resource, and returns the generated access token and its details. create POST /v1alpha/{parent=projects/ /locations/ }/authorizations Creates an Authorization . delete DELETE /v1alpha/{name=projects/ /locations/ /authorizations/ } Deletes an Authorization . get GET /v1alpha/{name=projects/ /locations/ /authorizations/ } Gets an Authorization . list GET /v1alpha/{parent=projects/ /locations/ }/authorizations Lists all Authorization s under an Engine . patch PATCH /v1alpha/{authorization.name=projects/ /locations/ /authorizations/ } Updates an Authorization storeUserAuthorization POST /v1alpha/{name=projects/ /locations/ /authorizations/ }:storeUserAuthorization Exchanges OAuth authorization credentials for a refresh token and stores the refresh token and the scopes.
- REST Resource: v1.projects.locations Methods getAclConfig GET /v1/{name=projects/ /locations/ /aclConfig} Gets the AclConfig . getCmekConfig GET /v1/{name=projects/ /locations/ /cmekConfig} Gets the CmekConfig . setUpDataConnector POST /v1/{parent=projects/ /locations/ }:setUpDataConnector Creates a Collection and sets up the DataConnector for it. setUpDataConnectorV2 POST /v1/{parent=projects/ /locations/ }:setUpDataConnectorV2 Creates a Collection and sets up the DataConnector for it. updateAclConfig PATCH /v1/{aclConfig.name=projects/ /locations/ /aclConfig} Default ACL configuration for use in a location of a customer's project. updateCmekConfig PATCH /v1/{config.name=projects/ /locations/ /cmekConfig} Provisions a CMEK key for use in a location of a customer's project.

