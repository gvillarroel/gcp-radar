---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.786Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DocumentApp InlineImage link URL APIs"
feature_slug: "documentapp-inlineimage-link-url-apis"
latest_feature_date: "2013-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
  - "https://developers.google.com/apps-script/guides/services/advanced"
keywords:
  - "inlineimage"
  - "getlinkurl"
  - "documentapp"
  - "link"
  - "url"
  - "added"
  - "apis"
  - "and"
---

# DocumentApp InlineImage link URL APIs

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added InlineImage.getLinkUrl() and InlineImage.setLinkUrl(url) for reading and setting image link URLs.

## Extended Definition

Added InlineImage.getLinkUrl() and InlineImage.setLinkUrl(url) for reading and setting image link URLs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added the DocumentApp methods InlineImage.getLinkUrl() and InlineImage.setLinkUrl(url) .
- September 09, 2013 Deprecated Deprecated the DocumentApp methods getFootnotes() , getLinkUrl() , setLinkUrl(url) , and isAtDocumentEnd() in the classes FooterSection , FootnoteSection , and HeaderSection , as well as the methods getNextSibling() and getPreviousSibling() in the classes FooterSection and HeaderSection .
- To simplify the Document service, the following methods were removed from the Body class: getNextSibling() , getPreviousSibling() , isAtDocumentEnd() , getLinkUrl() , setLinkUrl() , and removeFromParent() .
- June 12, 2020 Feature New methods have been added to the Spreadsheet service : The RichTextValue class now has a RichTextValue.getLinkUrl() method that gets the URL of the specified value.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Next steps Plan travels with an AI agent accessible across Google Workspace Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and add ons Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and add ons Custom functions in Sheets Extending Sheets Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable the Vertex AI API with the gcloud services enable command: gcloud services enable aiplatform.googleapis.com Create a service account in Google Cloud console Create a new service account with the role Vertex AI User by following these steps: Google Cloud console In the Google Cloud console, go to Menu menu IAM & Admin Service Accounts .
- Implementing this solution requires setting up a Google Cloud project, enabling billing and necessary APIs, creating a service account, and deploying the Vertex AI agent.
- Enable the Vertex AI API Google Cloud console In the Google Cloud console, enable the Vertex AI, and Cloud Resource Manager APIs.

### Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Developers can access Google APIs via advanced services or by making direct requests using UrlFetch , with each method having different requirements and advantages.
- Events . insert ( event , 'primary' , optionalArgs ); UrlFetch (HTTP): const event = { summary : 'Lunch' , location : 'Deli' , start : { dateTime : '2026-01-01T12:00:00-05:00' }, end : { dateTime : '2026-01-01T13:00:00-05:00' } }; const url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events?sendUpdates=all' ; const options = { method : 'post' , contentType : 'application/json' , headers : { Authorization : Bearer ${ ScriptApp . getOAuthToken () } }, payload : JSON . stringify ( event ) }; UrlFetchApp . fetch ( url , options ); For the UrlFetchApp method, manually specify the required OAuth scopes in the script's manifest file .
- The following table compares the two methods: Feature Advanced Service UrlFetch (HTTP) Authorization Handled automatically Manual handling required Autocomplete Available Not available Functionality Scope May be a subset of the API Full access to all API features Complexity Easier More complex (requires constructing headers and parsing responses) Code comparison The code samples show the difference in complexity between creating a Calendar event using the advanced service versus using UrlFetchApp .
- Example: Calendar.Events.insert To create a Calendar event : The Google Calendar API documentation shows the corresponding HTTP request structure: HTTP Verb : POST Request URL : https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events Request Body : An Event resource .

