---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.714Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Discover sources"
feature_slug: "discover-sources"
latest_feature_date: "2025-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/choose-product"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider"
keywords:
  - "discover"
  - "sources"
  - "notebooklm"
  - "enterprise"
  - "can"
  - "find"
  - "on"
  - "the"
---

# Discover sources

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

NotebookLM Enterprise can find sources on the web and import them into a notebook.

## Extended Definition

NotebookLM Enterprise can find sources on the web and import them into a notebook.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)

## Supporting Pages

### NotebookLM Enterprise, Gemini Enterprise, or both? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Users can then add these newly-discovered sources directly into a NotebookLM Enterprise notebook, further enriching their curated knowledge bases.
- NotebookLM Enterprise Gemini Enterprise Primary Goal Centralized knowledge, content generation from your own documents Enterprise-wide data search, multi-modal content generation, and agent orchestration Input Your uploaded documents, websites, and specific sources Broad queries and data from across enterprise systems (Google and third-party SaaS) Output Synthesized insights, generated content (FAQs, timelines), interactive audio podcasts, and chat-based questions and answers confined to sources Answers from diverse data, text and multi-modal content from across your enterprise, and automated actions by agents User Individual knowledge workers, small teams, content creators Process owners, developers, IT, operations, business analysts, general knowledge seekers, and content creators Complexity Focused knowledge management and document-specific chat experiences Orchestrating multi-agent systems for business processes and general AI assistance Core Function Understanding and extracting from unstructured text, generating content based on your sources Comprehensive information retrieval, multi-modal content creation, and autonomous agent execution How NotebookLM Enterprise and Gemini Enterprise work together NotebookLM Enterprise and Gemini Enterprise are complementary products , enhancing each other's value.
- Key features of NotebookLM Enterprise NotebookLM Enterprise includes the following key features: Centralized knowledge : Notebooks serve as a single, trusted reference for specific topics, projects, or departments, built from your intentionally selected sources.
- This integration allows Gemini Enterprise to act as a powerful engine for discovery, helping users find and curate content to make their notebooks more comprehensive and authoritative.

### Configure serving controls \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls)
- Source ID: `site-docs-root`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following curl commands to create your controls. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /controls?controlId= CONTROL ID " \ -d '{ "displayName": " DISPLAY NAME ", "solutionType": "SOLUTION TYPE SEARCH", "useCases": [" USE CASE "], "conditions": { "queryTerms": [ { "value": " VALUE ", "fullMatch": FULL MATCH } ], "activeTimeRange": [ { "startTime": " START TIMESTAMP ", "endTime": " END TIMESTAMP " } ] }, "promoteAction": { "dataStore": " DATA STORE RESOURCE PATH ", "searchLinkPromotion": { "document": " DOCUMENT RESOURCE PATH ", "title": " TITLE ", "uri": " URI ", "description": " URI DESCRIPTION " } } }' Replace the following: PROJECT ID : the number or ID of your Google Cloud project.
- Serving control types The following types of serving controls are available: Control Description Available for Boost control Changes the returned order of results Search apps with data stores that support a schema, such as data stores that contain structured data or unstructured data with metadata Filter control Removes entries from returned results Search apps with data stores that support a schema, such as data stores that contain structured data or unstructured data with metadata Synonyms control Associates queries with each other Search apps with structured or unstructured data stores Redirect control Redirects to a specified URI All search apps Promote control Promotes a specified link for a query Search apps with structured or unstructured data stores About conditions When creating a control, you can optionally define a condition that determines when the control is applied.
- Run the following curl commands to create your controls. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /controls?controlId= CONTROL ID " \ -d '{ "displayName": " DISPLAY NAME ", "solutionType": "SOLUTION TYPE SEARCH", "useCases": [ " USE CASE " ], "conditions": { "queryTerms": [ { "value": " VALUE ", "fullMatch": FULL MATCH } ], "activeTimeRange": [ { "startTime": " START TIMESTAMP ", "endTime": " END TIMESTAMP " } ] }, "boostAction": { "boost": BOOST VALUE , "filter": " FILTER ", "dataStore": " DATA STORE RESOURCE PATH " } }' Replace the following: PROJECT ID : the number or ID of your Google Cloud project.
- Run the following curl commands to create your controls. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /controls?controlId= CONTROL ID " \ -d '{ "displayName": " DISPLAY NAME ", "solutionType": "SOLUTION TYPE SEARCH", "useCases": [" USE CASE "], "conditions": { "queryTerms": [ { "value": " VALUE ", "fullMatch": FULL MATCH } ], "activeTimeRange": [ { "startTime": " START TIMESTAMP ", "endTime": " END TIMESTAMP " } ] }, "synonymsAction": { "synonyms": [" SYNONYMS 1 "," SYNONYMS 2 "] } }' Replace the following: PROJECT ID : the number or ID of your Google Cloud project.

### "Confluence Cloud configuration \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant administrator roles To grant the Confluence administrator the Discovery Engine Editor role in the Google Cloud console, do the following: In the Google Cloud console, go to the Gemini Enterprise page.
- Support for User Identity Accessor for Confluence Cloud Support offerings are available from Google for the User Identity Accessor for Confluence Cloud app that can include maintenance and regular updates to keep the app up to date.
- You can authenticate requests using either of the following methods: Enter your own key : Type or paste your own strong, unique API key into the API Key field.
- Click Add group members to add a user account or group members that the connector uses to authenticate and access the required resources.

### Configure identity provider \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- For example, if your organization uses both email and principal name as user identifiers across different applications, and the principal name is set as the preferred username in your third-party identity provider, you can map it to Gemini Enterprise using the Workforce Identity Federation attribute mapping (for example, attribute.as user identifier 1=assertion.preferred username ).
- Third-party identity provider When you only connect Gemini Enterprise to third-party data sources, and you are already using a third-party identity provider that supports OIDC or SAML 2.0, such as Microsoft Entra ID, Active Directory Federation Services (AD FS), Okta, and others, you must use Workforce Identity Federation.
- Gemini Enterprise supports the following options: Identity provider type When to use Google Identity When you connect Gemini Enterprise to Google Workspace data sources, you must use Google Identity .
- Choose your identity provider type The type of the identity provider you choose, depends on the data sources connected to your Gemini Enterprise app.

