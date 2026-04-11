---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.603Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Regional EU endpoint"
feature_slug: "regional-eu-endpoint"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/endpoints"
  - "https://docs.cloud.google.com/translate/docs/release-notes"
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
keywords:
  - "regional"
  - "eu"
  - "endpoint"
  - "translation"
  - "advanced"
  - "v3"
  - "provides"
---

# Regional EU endpoint

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Cloud Translation - Advanced (v3) provides a regional EU endpoint.

## Extended Definition

Cloud Translation - Advanced (v3) provides a regional EU endpoint.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/endpoints](https://docs.cloud.google.com/translate/docs/advanced/endpoints)
- [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)

## Supporting Pages

### "Global and multi-regional endpoints \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/endpoints](https://docs.cloud.google.com/translate/docs/advanced/endpoints)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Global and multi-regional endpoints Cloud Translation - Advanced offers a global endpoint as well as EU and US multi-regional endpoints: translate.googleapis.com (global) translate-eu.googleapis.com translate-us.googleapis.com If you use a multi-regional endpoint, your data at-rest and machine learning processing stays within the continental boundaries of the EU or US.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// ENDPOINT /v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": "Komm her!", "model": "projects/ PROJECT NUMBER OR ID /locations/ LOCATION /models/general/base" } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Global versus multi-regional endpoints When using a multi-regional endpoint, there are some difference when compared to using the global endpoint: Text translations that use custom AutoML models are not supported.
- Specify an endpoint The following example shows a text translation that uses a multi-regional endpoint.

### Cloud Translation release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- January 28, 2022 Feature Cloud Translation - Advanced (v3) support for a multi-regional EU endpoint is now Generally Available ( GA ).
- July 01, 2021 Feature Cloud Translation - Advanced (v3) support for a regional EU endpoint is now in Preview .
- Assamese Aymara Bambara Bhojpuri Dhivehi Dogri Ewe Guarani Ilocano Konkani Krio Kurdish(Sorani) Lingala Luganda Maithili Meiteilon(Manipuri) Mizo Oromo Quechua Sanskrit Sepedi(Pedi) Tigrinya Tsonga Twi (Akan) August 31, 2022 Feature Cloud Translation - Advanced (v3) support for a multi-regional US endpoint is now Generally Available ( GA ).
- November 01, 2021 Feature Document Translation for Cloud Translation - Advanced (v3) is now Generally Available ( GA ) and includes the following enhancements: Right to left language support for PDFs Preserves font size, font color, font style, and hyperlinks for native PDFs only Batch document translation requests support PDF to DOCX conversions for native PDFs only August 02, 2021 Change Removed the Phrase-Based Machine Translation (PBMT) model.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Translation - Advanced also provides advanced text translation capabilities like translating documents and creating glossaries to ensure that your domain-specific terminology is translated correctly.
- Find available languages and codes here: https://cloud.google.com/translate/docs/languages#neural machine translation model """ Initialize Translation client. client = translate v3 .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": "Доктор Ватсон, иди сюда!", }, { "translatedText": "Принеси мне кофе!", } ] } The translations array contains two translatedText fields with translations provided in the requested targetLanguageCode language ( ru : Russian).

