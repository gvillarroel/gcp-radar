---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.597Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Multi-regional US endpoint"
feature_slug: "multi-regional-us-endpoint"
latest_feature_date: "2022-08-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/endpoints"
  - "https://docs.cloud.google.com/translate/docs/release-notes"
  - "https://docs.cloud.google.com/translate/docs/advanced/glossary"
keywords:
  - "multi"
  - "regional"
  - "us"
  - "endpoint"
  - "translation"
  - "advanced"
  - "v3"
  - "provides"
---

# Multi-regional US endpoint

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Cloud Translation - Advanced (v3) provides a multi-regional US endpoint.

## Extended Definition

Cloud Translation - Advanced (v3) provides a multi-regional US endpoint.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/endpoints](https://docs.cloud.google.com/translate/docs/advanced/endpoints)
- [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)

## Supporting Pages

### "Global and multi-regional endpoints \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/endpoints](https://docs.cloud.google.com/translate/docs/advanced/endpoints)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Global and multi-regional endpoints Cloud Translation - Advanced offers a global endpoint as well as EU and US multi-regional endpoints: translate.googleapis.com (global) translate-eu.googleapis.com translate-us.googleapis.com If you use a multi-regional endpoint, your data at-rest and machine learning processing stays within the continental boundaries of the EU or US.
- Global versus multi-regional endpoints When using a multi-regional endpoint, there are some difference when compared to using the global endpoint: Text translations that use custom AutoML models are not supported.
- Specify an endpoint The following example shows a text translation that uses a multi-regional endpoint.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// ENDPOINT /v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": "Komm her!", "model": "projects/ PROJECT NUMBER OR ID /locations/ LOCATION /models/general/base" } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Cloud Translation release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Assamese Aymara Bambara Bhojpuri Dhivehi Dogri Ewe Guarani Ilocano Konkani Krio Kurdish(Sorani) Lingala Luganda Maithili Meiteilon(Manipuri) Mizo Oromo Quechua Sanskrit Sepedi(Pedi) Tigrinya Tsonga Twi (Akan) August 31, 2022 Feature Cloud Translation - Advanced (v3) support for a multi-regional US endpoint is now Generally Available ( GA ).
- January 28, 2022 Feature Cloud Translation - Advanced (v3) support for a multi-regional EU endpoint is now Generally Available ( GA ).
- July 01, 2021 Feature Cloud Translation - Advanced (v3) support for a regional EU endpoint is now in Preview .
- November 01, 2021 Feature Document Translation for Cloud Translation - Advanced (v3) is now Generally Available ( GA ) and includes the following enhancements: Right to left language support for PDFs Preserves font size, font color, font style, and hyperlinks for native PDFs only Batch document translation requests support PDF to DOCX conversions for native PDFs only August 02, 2021 Change Removed the Phrase-Based Machine Translation (PBMT) model.

### "Creating and using glossaries (Advanced) \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID ?update mask=input config&update mask=display name" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3.UpdateGlossaryMetadata", "glossary": { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID ", "languageCodesSet": { "languageCodes": [" LANGUAGE CODE ", ...] }, "inputConfig": { "gcsSource": { "inputUri": "gs:// GLOSSARY FILE PATH " } }, "entryCount": NUMBER OF ENTRIES , "submitTime": "2022-04-22T23:16:30.628806944Z", "endTime": "2022-04-22T23:41:15.115797Z", "displayName": " GLOSSARY ID " }, "state": "RUNNING", "submitTime": "2022-04-22T23:50:24.337964527Z" } } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "glossaryTranslations": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со я . Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "glossaryConfig": { "glossary": "projects/ project-number /locations/us-central1/glossaries/ GLOSSARY ID ", "ignoreCase": BOOLEAN , "contextual translation enabled": BOOLEAN CONTEXTUAL } }, "translations": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", } } The translations field contains the regular machine translation before the glossary is applied; the glossaryTranslations field contains the translation after the glossary is applied.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-number /locations/us-central1/operations/ operation-id ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3beta1.CreateGlossaryMetadata", "name": "projects/ project-number /locations/us-central1/glossaries/ glossary-id ", "state": "RUNNING", "submitTime": "2019-11-19T19:05:10.650047636Z" } } Equivalent term sets glossary Once you have the glossary terms identified in your equivalent term set, make the glossary file available to the Cloud Translation API by creating a glossary resource.
- AdaptiveMtTranslateRequest ( parent = "projects/PROJECT ID/locations/LOCATION" , dataset = "projects/PROJECT ID/locations/LOCATION/adaptiveMtDatasets/DATASET ID" , content = [ "Sample translation request" ] glossary config = glossary config , ) Make the request response = client . adaptive mt translate ( request ) Handle the response print ( response ) Get information about a glossary REST Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project glossary-id : your glossary ID, for example, "my-en-to-ru-glossary" HTTP method and URL: GET https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries/ glossary-id To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

