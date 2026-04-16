---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.692Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Layout parser support for DOCX"
feature_slug: "layout-parser-support-for-docx"
latest_feature_date: "2025-11-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-facets"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/authentication"
keywords:
  - "layout"
  - "parser"
  - "for"
  - "docx"
  - "the"
  - "now"
  - "supports"
  - "pptx"
---

# Layout parser support for DOCX

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

The layout parser now supports DOCX, PPTX, and XLSX files, and both the layout and digital parsers can parse PDF, HTML, DOCX, PPTX, and XLSX.

## Extended Definition

The layout parser now supports DOCX, PPTX, and XLSX files, and both the layout and digital parsers can parse PDF, HTML, DOCX, PPTX, and XLSX.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-facets](https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-facets)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/authentication](https://docs.cloud.google.com/gemini/enterprise/docs/authentication)

## Supporting Pages

### Chat with the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- Source ID: `site-docs-root-2`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- File formats and size limitations The following table lists the file formats and size limitations for files that you can upload to the assistant: File type Description Images Maximum image size: 30 MB Supported file extensions: .png , .jpeg , .svg Documents Maximum document size: .pdf : 100 MB .xlsx : 50 MB The .xlsx limit applies to the size of the file after it's decompressed. .csv : 7 MB .docx : 3 MB .pptx : 100 MB .txt : 7 MB .md : 2 MB .json : 1 MB .js : 1 MB .html : 0.5 MB .css : 1 MB .java : 1 MB .py : 2 MB Supported file extensions: .pdf , .xlsx , .csv , .docx , .pptx , .txt , .md , .json , .js , .html , .css , .java , .py Video Maximum document size: 200 MB Supported file extensions: .mp4 Audio Maximum document size: 200 MB Supported file extensions: .mp3 Add context with mentions You can mention an agent, person, or uploaded file in your chat with the assistant by typing @ in the chat box.
- Connectors Supported files Required connector actions Google Drive CSV PDF PPTX XLSX Download document For more information, see the Google Drive supported actions .
- Microsoft SharePoint CSV PDF PPTX XLSX Download document For more information, see the Microsoft SharePoint supported actions .
- Box CSV PDF PPTX XLSX Download file For more information, see the Box supported actions .

### Configure facets for the UI \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-facets](https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-facets)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- You can use the Configurations page in the Google Cloud console to specify which fields to use as facets on your UI for apps with structured data or unstructured data with metadata.
- Home Documentation AI and ML Gemini Enterprise Send feedback Configure facets for the UI Stay organized with collections Save and categorize content based on your preferences.
- If you have multiple data stores connected to your app, select the data store to configure facet settings for.

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- PPTX and DOCX formats are available in Preview.
- PPTX and DOCX formats are available in Preview.
- Blended search allows the following fields in search requests : boostSpec contentSearchSpec dataStoreSpecs facetSpecs filter languageCode offset oneBoxPageSize orderBy query pageSize pageToken relevanceScoreSpec relevanceThreshold session sessionSpec spellCorrectionSpec userInfo userPseudoId Blended search allows the following fields in dataStoreSpecs : dataStore boostSpec : If there are boost specs specified for both SearchRequest and dataStoreSpecs , both boost specs are applied to search results filter : If there are filters specified for both SearchRequest and dataStoreSpecs , both filters are applied to search results Create, Read, Update, and Delete (CRUD) operations on serving configs are supported for blended apps.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### Authenticate to Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/authentication](https://docs.cloud.google.com/gemini/enterprise/docs/authentication)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .
- Grant the required role to the principal that will attach the service account to other resources. gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com --member = "user: USER EMAIL " --role = roles/iam.serviceAccountUser Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account USER EMAIL : the email address for a Google Account Create the resource that will run your code, and attach the service account to that resource.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- For a local development environment You can set up credentials for a local development environment in the following ways: User credentials for client libraries or third-party tools User credentials for REST requests from the command line Service account impersonation Client libraries or third-party tools Set up Application Default Credentials (ADC) in your local environment: Install the Google Cloud CLI.

