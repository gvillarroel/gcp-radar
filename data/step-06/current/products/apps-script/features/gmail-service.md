---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.675Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Gmail service"
feature_slug: "gmail-service"
latest_feature_date: "2011-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/gmail"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services"
keywords:
  - "gmail"
  - "apps"
  - "script"
  - "includes"
  - "interacting"
---

# Gmail service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script includes a service for interacting with Gmail.

## Extended Definition

Apps Script includes a service for interacting with Gmail.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/gmail](https://developers.google.com/apps-script/advanced/gmail)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services](https://developers.google.com/apps-script/guides/services)

## Supporting Pages

### Advanced Gmail Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/gmail](https://developers.google.com/apps-script/advanced/gmail)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Advanced Gmail Service Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The Advanced Gmail service allows using the Gmail API in Apps Script to find and modify threads, messages, and labels.
- Much like Apps Script's built-in Gmail service , this API lets scripts find and modify threads, messages, and labels in a Gmail mailbox.
- Like all advanced services in Apps Script, the advanced Gmail service uses the same objects, methods, and parameters as the public API.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- Change The quota for the number of email recipients for scripts running from consumer (gmail.com) or free Google Apps accounts has been reduced from 500 to 100 per day.
- This API includes and extends the original Apps Script API.
- This change includes published Apps Script web apps.

### Built-in Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services](https://developers.google.com/apps-script/guides/services)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Scripts make method calls in this format: GlobalObjectName.methodName(argument1, argument2, ..., argumentN); For example, a script can send an email by calling the sendEmail(recipient, subject, body) method of the Gmail service like so: GmailApp . sendEmail ( 'claire@example.com' , 'Subject line' , 'This is the body.' ); If a method returns another Apps Script class, chain method calls on one line. (Return types are shown both in autocomplete and in a method's reference documentation.) For example, the method DocumentApp.create() returns a Document ; thus, the following two sections of code are equivalent: var doc = DocumentApp . create ( 'New document' ); var body = doc . getTab ( 't.0' ) . asDocumentTab () . getBody (); body . appendParagraph ( 'New paragraph.' ); // Same result as above .
- Page Summary outlined flag Google Apps Script offers over 30 built-in services for interacting with user data, other Google systems, and external systems, provided as global objects.
- Google Apps Script provides more than 30 built-in services for interacting with user data, other Google systems, and external systems.
- For example, just as Math offers methods like random() and constants like PI , Apps Script's Spreadsheet service offers methods like openById(id) , classes (child objects) like Range , and enums like DataValidationCriteria .

