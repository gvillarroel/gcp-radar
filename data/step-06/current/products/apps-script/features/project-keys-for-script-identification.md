---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.584Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Project keys for script identification"
feature_slug: "project-keys-for-script-identification"
latest_feature_date: "2016-07-12"
deprecation_date: "2016-07-12"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/service-account"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
keywords:
  - "project"
  - "keys"
  - "script"
  - "identification"
  - "were"
  - "previously"
  - "used"
  - "unique"
---

# Project keys for script identification

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Project keys were previously used as unique identifiers for Apps Script projects; deprecated on 2016-07-12.

## Extended Definition

Project keys were previously used as unique identifiers for Apps Script projects; deprecated on 2016-07-12.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/service-account](https://developers.google.com/apps-script/guides/service-account)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- The Optimization service has been updated with the following batch methods: LinearOptimizationEngine.addContraints(lowerBounds, upperBounds, variableNames, coefficients) LinearOptimizationEngine.addVariables(names, lowerBounds, upperBounds, types, objectiveCoeffients) May 03, 2019 Feature The Document service has been updated to add methods to get and set the language of a document: Document.getLanguage() Document.getSupportedLanguageCodes() Document.setLanguage(languageCode) April 19, 2019 Feature The Data Studio service has been updated to add a few values to FieldType enum : HYPERLINK IMAGE IMAGE LINK April 08, 2019 Change The behavior of the Google Cloud (GCP) projects used by scripts has been altered.
- Fixed an issue with the Script Editor, where developers were prompted to recover a draft version of another file in the same project, rather than the one being edited.
- July 12, 2016 Deprecated The use of project keys to identify scripts is now deprecated.

### "Authenticate as an Google Apps Script project using service accounts \_\

- URL: [https://developers.google.com/apps-script/guides/service-account](https://developers.google.com/apps-script/guides/service-account)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call an API using service account credentials To use the service account credentials from your Apps Script project, you can use the following function getServiceAccountService() : / Get a new OAuth2 service for a given service account. / function getServiceAccountService () { const serviceAccountKeyString = PropertiesService . getScriptProperties () . getProperty ( 'SERVICE ACCOUNT KEY' ); if ( ! serviceAccountKeyString ) { throw new Error ( 'SERVICE ACCOUNT KEY property is not set. ' + 'Please follow the setup instructions.' ); } const serviceAccountKey = JSON . parse ( serviceAccountKeyString ); const CLIENT EMAIL = serviceAccountKey . client email ; const PRIVATE KEY = serviceAccountKey . private key ; // Replace with the specific scopes required for your API. const SCOPES = [ ' SCOPE ' ]; return OAuth2 . createService ( 'ServiceAccount' ) . setTokenUrl ( 'https://oauth2.googleapis.com/token' ) . setPrivateKey ( PRIVATE KEY ) . setIssuer ( CLIENT EMAIL ) . setPropertyStore ( PropertiesService . getScriptProperties ()) . setScope ( SCOPES ); } Replace SCOPE with the authorization scope that you need to call the API.
- Save the credentials as a script property Securely store your service account credentials by saving them as a script property in your Apps Script project settings: Copy the contents of your service account JSON file ( credentials.json ) that you created in the previous section .
- Home Google Workspace Apps Script Guides Send feedback Authenticate as an Google Apps Script project using service accounts Stay organized with collections Save and categorize content based on your preferences.
- Set up service account authentication in your Apps Script project This section explains how to add your service account credentials from your Cloud project to an Apps Script project.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Coding level : Advanced Duration : 30 minutes Project type : Custom function Overview A fact-check custom function for Google Sheets to be used as a bound Google Apps Script project powered by a Vertex AI agent and Gemini model.
- Download this GitHub repository: Download In your preferred local development environment, extract the downloaded archive file and open the adk-samples/python/agents/llm-auditor directory. unzip adk-samples-main.zip cd adk-samples-main/python/agents/llm-auditor Create a new Cloud Storage bucket dedicated to the ADK agent. gcloud storage buckets create gs:// CLOUD STORAGE BUCKET NAME --project = PROJECT ID --location = PROJECT LOCATION Replace the following: CLOUD STORAGE BUCKET NAME with a unique bucket name you want to use.
- View on GitHub Create and configure in a new spreadsheet To make a complete copy of the sample Sheets spreadsheet including its container-bound Apps Script project, click the following button: Copy Google Sheets speadsheet In the newly created spreadsheet, go to Extensions > Apps Script .
- In the Apps Script project, go to Project Settings , click Edit script properties , then click Add script property to add the following script properties: LOCATION with the location of the Google Cloud project created in previous steps such as us-central1 .

