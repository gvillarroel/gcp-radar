---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.683Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Microsoft SharePoint data store"
feature_slug: "microsoft-sharepoint-data-store"
latest_feature_date: "2025-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
keywords:
  - "microsoft"
  - "sharepoint"
  - "store"
  - "gemini"
  - "enterprise"
  - "supports"
  - "the"
  - "you"
---

# Microsoft SharePoint data store

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Enterprise supports the Microsoft SharePoint data store; You can connect a data store to ingest content from Microsoft SharePoint.

## Extended Definition

Gemini Enterprise supports the Microsoft SharePoint data store; You can connect a data store to ingest content from Microsoft SharePoint.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)

## Supporting Pages

### "Connect a third-party data source \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source)
- Source ID: `site-docs-root-2`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Generally Available Connect Confluence Cloud with data ingestion and federation Connect Dropbox with data federation Connect Jira Cloud with data ingestion and federation Connect Microsoft Entra ID Connect Microsoft Outlook with data ingestion and federation Connect Microsoft OneDrive with data ingestion and federation Connect Microsoft SharePoint Online with data ingestion and federation Connect ServiceNow with data ingestion Public preview Connect Box with data federation Connect Confluence Data Center with data federation Connect Docusign with data federation Connect GitHub with data federation Connect Hubspot with data federation Connect Jira Data Center with data federation Connect Linear with data federation Connect Microsoft Teams with data federation Connect Monday with data federation Connect Notion with data federation Connect ServiceNow with data federation Connect Shopify with data federation Connect Zendesk with data federation Private preview To connect data sources that are in private preview, contact your Google account team and request to be added to the allowlist.
- When you connect a third-party data source, Gemini Enterprise creates a data store and associates entity data stores with it for each specified entity.
- Home Documentation AI and ML Gemini Enterprise Send feedback Connect a third-party data source Stay organized with collections Save and categorize content based on your preferences.
- Microsoft SharePoint Launch date Action Description 3/11/26 Add page Creates a new page on the SharePoint site.

### Configure identity provider \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Third-party identity provider When you only connect Gemini Enterprise to third-party data sources, and you are already using a third-party identity provider that supports OIDC or SAML 2.0, such as Microsoft Entra ID, Active Directory Federation Services (AD FS), Okta, and others, you must use Workforce Identity Federation.
- Gemini Enterprise supports the following options: Identity provider type When to use Google Identity When you connect Gemini Enterprise to Google Workspace data sources, you must use Google Identity .
- For example, if your organization uses both email and principal name as user identifiers across different applications, and the principal name is set as the preferred username in your third-party identity provider, you can map it to Gemini Enterprise using the Workforce Identity Federation attribute mapping (for example, attribute.as user identifier 1=assertion.preferred username ).
- Configure Workforce Identity Federation For details on configuring Workforce Identity Federation with your third-party identity connector, see the following resources: Identity provider Resources Entra ID Note: When using data ingestion to connect to Microsoft data sources like SharePoint, OneDrive, or Outlook, you must use Microsoft Entra ID groups to control document access.

### Chat with the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- Source ID: `site-docs-root-2`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- Note: When you upload a file from your Microsoft OneDrive Business account for the first time, you might need to have a Microsoft Entra ID Global Administrator or Application Administrator for your tenant to grant consent for the Gemini Enterprise app.
- Chat with files in connectors Gemini Enterprise can analyze content and generate answers from the following connectors: Note: A Gemini Enterprise admin must enable the required actions for the Gemini Enterprise assistant to access the content, allowing you to chat with the files.
- Home Documentation AI and ML Gemini Enterprise Use Gemini Enterprise Send feedback Chat with the assistant Stay organized with collections Save and categorize content based on your preferences.
- To chat with files, do the following: Ensure that you have authorized Gemini Enterprise to access the data in the connector.

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Gemini Enterprise Send feedback About apps and data stores Stay organized with collections Save and categorize content based on your preferences.
- You can provide this schema yourself or you can let Gemini Enterprise derive the schema from the ingested data.
- Note: You can't connect website data stores to your Gemini Enterprise search and assistant apps.
- Data stores and apps In Gemini Enterprise, there are various kinds of data stores.

