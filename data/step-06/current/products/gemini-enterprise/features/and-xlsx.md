---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.691Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "and XLSX"
feature_slug: "and-xlsx"
latest_feature_date: "2025-11-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/authentication"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/access-traces-and-spans"
keywords:
  - "and"
  - "xlsx"
  - "the"
  - "layout"
  - "parser"
  - "now"
  - "supports"
  - "docx"
---

# and XLSX

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
- [https://docs.cloud.google.com/gemini/enterprise/docs/authentication](https://docs.cloud.google.com/gemini/enterprise/docs/authentication)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/access-traces-and-spans](https://docs.cloud.google.com/gemini/enterprise/docs/access-traces-and-spans)

## Supporting Pages

### Chat with the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- Source ID: `site-docs-root-2`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- File formats and size limitations The following table lists the file formats and size limitations for files that you can upload to the assistant: File type Description Images Maximum image size: 30 MB Supported file extensions: .png , .jpeg , .svg Documents Maximum document size: .pdf : 100 MB .xlsx : 50 MB The .xlsx limit applies to the size of the file after it's decompressed. .csv : 7 MB .docx : 3 MB .pptx : 100 MB .txt : 7 MB .md : 2 MB .json : 1 MB .js : 1 MB .html : 0.5 MB .css : 1 MB .java : 1 MB .py : 2 MB Supported file extensions: .pdf , .xlsx , .csv , .docx , .pptx , .txt , .md , .json , .js , .html , .css , .java , .py Video Maximum document size: 200 MB Supported file extensions: .mp4 Audio Maximum document size: 200 MB Supported file extensions: .mp3 Add context with mentions You can mention an agent, person, or uploaded file in your chat with the assistant by typing @ in the chat box.
- The assistant displays executed code for XLSX and CSV files.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- If you try to upload a file without this consent, you may encounter an error when signing in to Microsoft Entra ID: "Please ask an admin to grant permission to this app before you can use it." If you encounter this error, copy the URL from your browser's address bar and share it with your administrator, so that they can provide consent on behalf of your organization.

### Authenticate to Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/authentication](https://docs.cloud.google.com/gemini/enterprise/docs/authentication)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .
- Grant the required role to the principal that will attach the service account to other resources. gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com --member = "user: USER EMAIL " --role = roles/iam.serviceAccountUser Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account USER EMAIL : the email address for a Google Account Create the resource that will run your code, and attach the service account to that resource.
- To provide access to your project and your resources, grant a role to the service account: gcloud projects add-iam-policy-binding PROJECT ID --member = "serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" --role = ROLE Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account ROLE : the role to grant Note : The --role flag affects which resources the service account can access in your project.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Blended search allows the following fields in search requests : boostSpec contentSearchSpec dataStoreSpecs facetSpecs filter languageCode offset oneBoxPageSize orderBy query pageSize pageToken relevanceScoreSpec relevanceThreshold session sessionSpec spellCorrectionSpec userInfo userPseudoId Blended search allows the following fields in dataStoreSpecs : dataStore boostSpec : If there are boost specs specified for both SearchRequest and dataStoreSpecs , both boost specs are applied to search results filter : If there are filters specified for both SearchRequest and dataStoreSpecs , both filters are applied to search results Create, Read, Update, and Delete (CRUD) operations on serving configs are supported for blended apps.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Method of app creation and data ingestion How you create an app and ingest data depends on the type of data you have: For third-party data, you use the Google Cloud console, not the API, to create your app and ingest data.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Access traces and spans in Trace Explorer \_|\_ Gemini Enterprise \_|\_\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/access-traces-and-spans](https://docs.cloud.google.com/gemini/enterprise/docs/access-traces-and-spans)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- This includes a user asking a question from the Gemini Enterprise assistant, the Gemini Enterprise assistant responding, and any subsequent actions triggered by the answer, such as sending an email.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Traces and spans provide detailed insights into the performance and execution flow of requests within your application, such as when using the assistant or agents.

