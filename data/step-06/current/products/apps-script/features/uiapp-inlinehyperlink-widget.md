---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.785Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UiApp InlineHyperlink widget"
feature_slug: "uiapp-inlinehyperlink-widget"
latest_feature_date: "2013-09-16"
deprecation_date: "2013-03-18"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
  - "https://developers.google.com/apps-script/add-ons/overview"
keywords:
  - "inlinehyperlink"
  - "disabled"
  - "deprecated"
  - "widget"
  - "uiapp"
  - "due"
  - "and"
  - "the"
---

# UiApp InlineHyperlink widget

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Deprecated and disabled the UiApp InlineHyperlink widget; Deprecated the UiApp InlineHyperlink widget due to limited usability; deprecated on 2013-03-18.

## Extended Definition

Deprecated and disabled the UiApp InlineHyperlink widget; Deprecated the UiApp InlineHyperlink widget due to limited usability; deprecated on 2013-03-18.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- Deprecated Deprecated the GUI Builder and the UIApp widgets Hyperlink , InlineHyperlink , LayoutPanel , RichTextArea , and SuggestBox , which had limited usability.
- March 25, 2016 Deprecated Deprecated the add(widget) method in the DashboardPanel class because it takes a UiApp.Widget argument, and UiApp was deprecated in 2014.
- Feature The Slides service has been extended with the following new classes and methods that support connector lines: ConnnectionSite Group.getConnectionSites() Image.getConnectionSites() Line.getConnectionSites() Line.getEndConnection() Line.getLineCategory() Line.getStartConnection() Line.isConnector() Line.setEndConnection(connectionSite) Line.setLineCategory(lineCategory) Line.setStartConnection(connectionSite) LineCategory.UNSUPPORTED PageElement.getConnectionSites() Shape.getConnectionSites() SheetsChart.getConnectionSites() Table.getConnectionSites() Video.getConnectionSites() WordArt.getConnectionSites() November 14, 2018 Feature The Card service has been extended with the following new classes and methods that let you to customize the background of text button widgets: TextButtonStyle TextButton.setBackgroundColor(backgroundColor) TextButton.setDisabled(disabled) TextButton.setTextButtonStyle(textButtonStyle) The Slides service has been extended with the following new methods that let you control the Z-positioning of page elements in Slides.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Download this GitHub repository: Download In your preferred local development environment, extract the downloaded archive file and open the adk-samples/python/agents/llm-auditor directory. unzip adk-samples-main.zip cd adk-samples-main/python/agents/llm-auditor Create a new Cloud Storage bucket dedicated to the ADK agent. gcloud storage buckets create gs:// CLOUD STORAGE BUCKET NAME --project = PROJECT ID --location = PROJECT LOCATION Replace the following: CLOUD STORAGE BUCKET NAME with a unique bucket name you want to use.
- Next steps Plan travels with an AI agent accessible across Google Workspace Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and add ons Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and add ons Custom functions in Sheets Extending Sheets Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Install and deploy ADK agent from virtual environment. python3 -m venv myenv source myenv/bin/activate poetry install --with deployment python3 deployment/deploy.py --create Retrieve the agent ID, you'll need it later to configure the custom function. python3 deployment/deploy.py --list Review the sample code Optionally, before creating the new spreadsheet, take a moment to review and familiarize yourself with the sample code hosted on GitHub.

### Add-ons overview \_|\_ Google Workspace add-ons \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-04 UTC."],[],["Add-ons enhance Google Workspace by automating tasks, integrating third-party services, and creating custom user interfaces.
- Subscribe now Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Workspace add-ons API Some features, like extending the Google Calendar conferencing drop-down and iOS capabilities, are not yet supported by the Google Workspace add-ons API.
- The Google Workspace add-ons API enables developers to automate tasks, manage deployments, and control data flow within Google Workspace.

