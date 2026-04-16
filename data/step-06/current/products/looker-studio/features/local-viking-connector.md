---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.136Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Local Viking connector"
feature_slug: "local-viking-connector"
latest_feature_date: "2025-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/local-development"
  - "https://developers.google.com/looker-studio/connector/reference"
  - "https://developers.google.com/looker-studio/connector/publish-connector"
keywords:
  - "local"
  - "viking"
  - "connector"
  - "connects"
  - "looker"
  - "studio"
---

# Local Viking connector

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Connects Looker Studio to Local Viking data.

## Extended Definition

Connects Looker Studio to Local Viking data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/local-development](https://developers.google.com/looker-studio/connector/local-development)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- [https://developers.google.com/looker-studio/connector/publish-connector](https://developers.google.com/looker-studio/connector/publish-connector)

## Supporting Pages

### Local development \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/local-development](https://developers.google.com/looker-studio/connector/local-development)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Looker Studio Community Connectors Local development Stay organized with collections Save and categorize content based on your preferences.
- Command Description npm run open Open your project in Apps Script. npm run push Push your local changes to Apps Script. npm run watch Watch for local changes, and push them to Apps Script. npm run prettier Format your code using community standards. npm run try latest Open the deployment with your latest code in Looker Studio. npm run try production Open your Production deployment in Looker Studio. npm run update production Update your production deployment to use your latest code.
- It simplifies connector development by providing commands to create projects, push code updates, and deploy to Looker Studio.
- Page Summary outlined flag dscc-gen is a tool that automates repetitive tasks in creating and managing Data Studio community connectors.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Home Products Looker Studio Community Connectors Reference Community Connector API Reference Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The document provides a guide for building Google Looker Studio Connectors to integrate custom data sources.
- Response Looker Studio Service @return {object} An object that contains the AuthType used by the connector.
- Example function getConfig ( request ) { var cc = DataStudioApp . createCommunityConnector (); var config = cc . getConfig (); config . newTextInput () . setId ( 'exampleTextInput' ) . setName ( 'Single line text' ) . setHelpText ( 'Helper text for single line text' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newTextArea () . setId ( 'exampleTextArea' ) . setName ( 'Text area' ) . setHelpText ( 'Helper text for text area' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newSelectSingle () . setId ( 'exampleSelectSingle' ) . setName ( 'Select single' ) . setHelpText ( 'Helper text for select single' ) . setAllowOverride ( true ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newSelectMultiple () . setId ( 'exampleSelectMultiple' ) . setName ( 'Select multiple' ) . setHelpText ( 'Helper text for select multiple' ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newCheckbox () . setId ( 'exampleCheckbox' ) . setName ( 'This is a checkbox' ) . setHelpText ( 'Helper text for checkbox' ); config . newInfo () . setId ( 'exampleInfo' ) . setText ( 'Examle instructions text used in Info' ) config . setDateRangeRequired ( true ); config . setIsSteppedConfig ( false ); return config . build (); } Legacy @return {object} A JavaScript object representing the connector configuration that should be displayed to the user.

### "Publish a Community Connector \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/publish-connector](https://developers.google.com/looker-studio/connector/publish-connector)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag Publishing your Community Connector in the Looker Studio Connector Gallery increases its visibility and allows all Looker Studio users to easily find and use it.
- Publishing will let all Looker Studio users easily find your connector and provide visibility to your connector based on connector name, description, and listed data sources.
- Remove your published connector from the gallery To remove your Community Connector from the gallery, send a removal request to looker-studio-developer-feedback@google.com .
- Home Products Looker Studio Community Connectors Publish a Community Connector Stay organized with collections Save and categorize content based on your preferences.

