---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.665Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Database Center health issues CSV export"
feature_slug: "database-center-health-issues-csv-export"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/overview"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.types.AlloyDbDatabaseReference"
keywords:
  - "database"
  - "center"
  - "health"
  - "issues"
  - "csv"
  - "export"
  - "adds"
  - "for"
---

# Database Center health issues CSV export

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Database Center adds a CSV export for health issues.

## Extended Definition

Database Center adds a CSV export for health issues.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/overview](https://docs.cloud.google.com/gemini/docs/overview)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.types.AlloyDbDatabaseReference](https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.types.AlloyDbDatabaseReference)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info 'Activate Gemini Code Assist' still appears after selecting Gemini Code Assist project If you selected your project per the instructions in this guide, which includes enabling the Gemini for Google Cloud API, then there may be an issue with the LS server.
- IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Sign-in attempts keep timing out If your sign-in attempts keep timing out, try adding the cloudcode.beta.forceOobLogin setting to your settings.json file: "cloudcode.beta.forceOobLogin" : true License recitation warnings don't persist across sessions If license recitation warnings don't persist across sessions, refer to the persistent logs: Click View > Output .

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- You can use the following code transformation commands in your IDE: /fix : Fix issues or errors in your code.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Sign-in attempts keep timing out If your sign-in attempts keep timing out, try adding the cloudcode.beta.forceOobLogin setting to your settings.json file: "cloudcode.beta.forceOobLogin" : true License recitation warnings don't persist across sessions If license recitation warnings don't persist across sessions, refer to the persistent logs: Click View > Output .

### Gemini for Google Cloud overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/docs/overview](https://docs.cloud.google.com/gemini/docs/overview)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Build integrations that connect enterprise applications like Salesforce, databases like MySQL, and event-driven systems like Pub/Sub.
- Summarize cases that are opened for security issues and suggest steps to resolve the issues.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- The following table shows the types of generative AI assistance that are available in Gemini for Google Cloud, along with links to product overview information: Product Type of assistance Tasks Gemini Cloud Assist Design, optimize, and operate cloud applications.

### "Class AlloyDbDatabaseReference (0.12.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.types.AlloyDbDatabaseReference](https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.types.AlloyDbDatabaseReference)
- Source ID: `site-python-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
- 0.12.0 (latest) 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0 AlloyDbDatabaseReference ( mapping = None , , ignore unknown fields = False , kwargs ) Message representing a reference to a single AlloyDB database.
- Home Documentation Developer tools Python Client libraries Send feedback Class AlloyDbDatabaseReference (0.12.0) Stay organized with collections Save and categorize content based on your preferences.
- The database id. table ids MutableSequence[str] Optional.

