---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.514Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Third-party smart chips and link previews"
feature_slug: "third-party-smart-chips-and-link-previews"
latest_feature_date: "2023-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/link-preview"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service"
keywords:
  - "third"
  - "party"
  - "smart"
  - "chips"
  - "link"
  - "previews"
  - "let"
  - "workspace"
---

# Third-party smart chips and link previews

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Third-party smart chips and link previews let Google Workspace Add-ons preview links with smart chips.

## Extended Definition

Third-party smart chips and link previews let Google Workspace Add-ons preview links with smart chips.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/link-preview](https://developers.google.com/apps-script/reference/add-ons-response-service/link-preview)
- [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more, refer to the following: Google Workspace Updates blog : View & compare script versions with Apps Script project history Developer documentation : Versions June 12, 2023 Feature Third-party smart chips and link previews are now generally available.
- To build a Google Workspace Add-on that uses this feature, see Preview links with smart chips .
- January 24, 2024 Feature ( Generally Available ): Google Workspace Add-ons now support third-party resource creation from the @ menu in Google Docs.
- November 15, 2023 Feature ( Developer Preview ) : Google Workspace Add-ons now support third-party resource creation from the @ menu in Google Docs.

### Class LinkPreview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/link-preview](https://developers.google.com/apps-script/reference/add-ons-response-service/link-preview)
- Source ID: `site-docs-reference-3`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, refer to Preview links with smart chips . const decoratedText = CardService . newDecoratedText (). setTopLabel ( 'Hello' ). setText ( 'Hi!' ); const cardSection = CardService . newCardSection (). addWidget ( decoratedText ); const card = CardService . newCardBuilder (). addSection ( cardSection ). build (); const linkPreview = AddOnsResponseService . newLinkPreview (). setPreviewCard ( card ). setTitle ( 'Smart chip title' ); Methods Method Return type Brief description print Json() String Prints the JSON representation of this object. set Link Preview Title(title) Link Preview Sets the title that displays in the link preview above the preview card. set Preview Card(previewCard) Link Preview Sets the card that displays information about a link from a third-party or non-Google service. set Title(title) Link Preview Sets the title that displays in the smart chip for the link preview.
- Return LinkPreview — This object, for chaining. setPreviewCard(previewCard) Sets the card that displays information about a link from a third-party or non-Google service. const decoratedText = CardService . newDecoratedText (). setTopLabel ( 'Hello' ). setText ( 'Hi!' ); const cardSection = CardService . newCardSection (). addWidget ( decoratedText ); const card = CardService . newCardBuilder (). addSection ( cardSection ). build (); const linkPreview = AddOnsResponseService . newLinkPreview (). setPreviewCard ( card ). setTitle ( 'Smart chip title' ); Parameters Name Type Description preview Card Card The preview card.
- If unset, the smart chip displays the header of the PreviewCard . const linkPreview = AddOnsResponseService . newLinkPreview (). setTitle ( 'Smart chip title' ); Parameters Name Type Description title String The title of the smart chip.
- Home Google Workspace Apps Script Reference Send feedback Class LinkPreview Stay organized with collections Save and categorize content based on your preferences.

### AddOns Response Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- LinkPreview Methods Method Return type Brief description print Json() String Prints the JSON representation of this object. set Link Preview Title(title) Link Preview Sets the title that displays in the link preview above the preview card. set Preview Card(previewCard) Link Preview Sets the card that displays information about a link from a third-party or non-Google service. set Title(title) Link Preview Sets the title that displays in the smart chip for the link preview.
- Link The link object from a third-party resource which gets converted it to a smart chip in the host application.
- Update Inline Preview Action The Chat app previews a link in a message by adding or updating one or more cards.
- Link Preview Card action that displays a link preview card and smart chip in the host app.

