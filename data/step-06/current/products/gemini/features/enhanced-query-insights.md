---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.669Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Enhanced Query Insights"
feature_slug: "enhanced-query-insights"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/bigquery/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
  - "https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AdvancedCompleteQueryResponse"
keywords:
  - "enhanced"
  - "query"
  - "insights"
  - "provides"
  - "near"
  - "real"
  - "time"
  - "diagnostics"
---

# Enhanced Query Insights

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Enhanced Query Insights provides near-real-time diagnostics for query performance problems.

## Extended Definition

Enhanced Query Insights provides near-real-time diagnostics for query performance problems.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/bigquery/set-up-gemini](https://docs.cloud.google.com/gemini/docs/bigquery/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- [https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AdvancedCompleteQueryResponse](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AdvancedCompleteQueryResponse)

## Supporting Pages

### Set up Gemini in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/docs/bigquery/set-up-gemini](https://docs.cloud.google.com/gemini/docs/bigquery/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Preview features that require Gemini in BigQuery sign-up include the following: Automated metadata generation for data insights (Preview) Dataset insights with BigQuery knowledge engine (Preview) Turn off Gemini in BigQuery To prevent a user from using Gemini in BigQuery features, revoke the specific cloudaicompanion IAM permissions that grant access to these capabilities, as detailed in Enable necessary APIs and grant roles .
- If your organization is using BigQuery Standard edition for compute only, then you can use Gemini Code Assist Standard, which includes data insights and automated metadata generation capabilities in addition to features listed in Gemini Code Assist Standard and Enterprise pricing overview .
- Use data insights and automated metadata generation features BigQuery data insights and automated metadata generation features are available to customers using BigQuery on-demand compute, Enterprise edition, or Enterprise Plus edition.
- The following roles grant the permissions required to use Gemini: BigQuery Studio User BigQuery Studio Admin Gemini in BigQuery requires the following permissions: cloudaicompanion.entitlements.get cloudaicompanion.instances.completeCode cloudaicompanion.instances.completeTask cloudaicompanion.instances.generateCode cloudaicompanion.operations.get cloudaicompanion.topics.create Click Done .

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Gemini Code Assist code explained for Apigee policies. ( Preview ) Gemini in Application Integration The following table shows the types of generative AI assistance in Application Integration in the Google Cloud console: Integration creation assist Gemini Code Assist Standard Gemini Code Assist Enterprise AI-assisted visual editor for automation flow generation Enterprise context embedded AI-assisted automation authoring Generative AI Automation flow documentation generation and refinement Gemini in BigQuery features with Gemini Code Assist The following table shows the types of generative AI assistance for BigQuery in BigQuery Studio : Data insights Gemini Code Assist Standard Gemini Code Assist Enterprise Data insights provides an insightful library of queries generated from the metadata of your tables.
- Extended integrations: Gemini Code Assist Standard provides AI assistance in Firebase, Colab Enterprise, BigQuery data insights, Cloud Run, and Database Studio.
- Extended integrations: Gemini Code Assist Enterprise provides AI assistance across Google Cloud like Apigee, Application Integration, and Gemini Cloud Assist, empowering cloud teams to build, design and operate, and optimize their applications and infrastructure more effectively on Google Cloud.
- Gemini Code Assist provides contextualized responses to your prompts, including source citations regarding which documentation and code samples Gemini Code Assist used to generate its responses.

### "Security, privacy, and compliance for Gemini in BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- You can also use VPC Service Controls to create a security-enhanced perimeter around your BigQuery resources.
- Certifications and capabilities Generally available (GA) Gemini in BigQuery features are covered by the certifications and security statements of Gemini for Google Cloud with exception of the following limitations: Gemini in BigQuery doesn't provide data residency for individual locations.
- Secure and responsible use You should adhere to the following best practices to help ensure the secure and responsible use of Gemini in BigQuery: Use IAM to give the least privilege necessary.
- Google secures the infrastructure that Google Cloud services run on, and it provides you with tools such as access controls to let you manage who has access to your services and resources.

### "AdvancedCompleteQueryResponse \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AdvancedCompleteQueryResponse](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AdvancedCompleteQueryResponse)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "suggestion" : string , "recentSearchTime" : string , "score" : number } Fields suggestion string The suggestion for the query. recentSearchTime string ( Timestamp format) The time when this recent rearch happened.
- JSON representation { "suggestion" : string , "contentType" : enum ( ContentType ) , "document" : { object ( Document ) } , "dataStore" : string , "score" : number , "iconUri" : string , "destinationUri" : string } Fields suggestion string The suggestion for the query. contentType enum ( ContentType ) The type of the content suggestion. document object ( Document ) The document data snippet in the suggestion.
- JSON representation { "suggestion" : string , "personType" : enum ( PersonType ) , "document" : { object ( Document ) } , "dataStore" : string , "score" : number , "displayPhotoUri" : string , "destinationUri" : string } Fields suggestion string The suggestion for the query. personType enum ( PersonType ) The type of the person. document object ( Document ) The document data snippet in the suggestion.
- JSON representation { "querySuggestions" : [ { object ( QuerySuggestion ) } ] , "tailMatchTriggered" : boolean , "peopleSuggestions" : [ { object ( PersonSuggestion ) } ] , "contentSuggestions" : [ { object ( ContentSuggestion ) } ] , "recentSearchSuggestions" : [ { object ( RecentSearchSuggestion ) } ] } Fields querySuggestions[] object ( QuerySuggestion ) Results of the matched query suggestions.

