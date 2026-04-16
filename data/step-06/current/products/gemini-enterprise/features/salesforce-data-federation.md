---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.657Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Salesforce data federation"
feature_slug: "salesforce-data-federation"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging"
keywords:
  - "salesforce"
  - "federation"
  - "gemini"
  - "enterprise"
  - "can"
  - "connect"
  - "stores"
  - "using"
---

# Salesforce data federation

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Enterprise can connect Salesforce data stores using data federation.

## Extended Definition

Gemini Enterprise can connect Salesforce data stores using data federation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- [https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging](https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging)

## Supporting Pages

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Note: You can't connect website data stores to your Gemini Enterprise search and assistant apps.
- Third-party data Structured data Unstructured data Structured data for third-party data stores The following third-party data source connectors are available in Preview with allowlist: Confluence Jira Salesforce Sharepoint Online Slack Data from these third parties is considered structured data.
- Home Documentation AI and ML Gemini Enterprise Send feedback About apps and data stores Stay organized with collections Save and categorize content based on your preferences.
- You can add or remove data stores from a blended search app, but the app can't have fewer than two data stores connected to it at any time.

### "Connect a third-party data source \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source)
- Source ID: `site-docs-root-2`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- When you connect a third-party data source, Gemini Enterprise creates a data store and associates entity data stores with it for each specified entity.
- Connect Box with data ingestion Connect Confluence Data Center On-premises with data ingestion Connect Jira Data Center On-premises with data ingestion Connect Salesforce with data ingestion Connect Slack with data federation Supported actions Expand the data store name in the following list to reveal the available actions for each.
- Home Documentation AI and ML Gemini Enterprise Send feedback Connect a third-party data source Stay organized with collections Save and categorize content based on your preferences.
- Connect a third-party data source Visit a source-specific page for information on how to connect that source to Gemini Enterprise.

### Configure identity provider \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- For example, if your organization uses both email and principal name as user identifiers across different applications, and the principal name is set as the preferred username in your third-party identity provider, you can map it to Gemini Enterprise using the Workforce Identity Federation attribute mapping (for example, attribute.as user identifier 1=assertion.preferred username ).
- Third-party identity provider When you only connect Gemini Enterprise to third-party data sources, and you are already using a third-party identity provider that supports OIDC or SAML 2.0, such as Microsoft Entra ID, Active Directory Federation Services (AD FS), Okta, and others, you must use Workforce Identity Federation.
- Configure Workforce Identity Federation For details on configuring Workforce Identity Federation with your third-party identity connector, see the following resources: Identity provider Resources Entra ID Note: When using data ingestion to connect to Microsoft data sources like SharePoint, OneDrive, or Outlook, you must use Microsoft Entra ID groups to control document access.
- For example: "metadata": { "mapped attributes": { "attributes.as user identifier 1": "alex@admin.altostrat.com" "google.subject": "alex@altostrat.com" "google.groups": "[123abc-456d, efg-h789-ijk]" } }, Limitations When connecting your data sources using a connector to create data stores, the following limitations apply: 3000 readers are allowed per document.

### "Access Gemini Enterprise connector error logs with Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging](https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- To view the error logs of your data stores that connect to Gemini Enterprise using data federation, follow these steps: In the Google Cloud console, go to the Gemini Enterprise page.
- To view the error logs of your data stores that connect to Gemini Enterprise using data ingestion, follow these steps: In the Google Cloud console, go to the Gemini Enterprise page.
- Access federated connector error logs Key Term: In Gemini Enterprise, the term app can be used interchangeably with the term engine in the context of APIs.
- Access ingestion connector error logs Key Term: In Gemini Enterprise, the term app can be used interchangeably with the term engine in the context of APIs.

