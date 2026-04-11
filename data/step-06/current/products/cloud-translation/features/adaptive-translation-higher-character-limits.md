---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.589Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Adaptive translation higher character limits"
feature_slug: "adaptive-translation-higher-character-limits"
latest_feature_date: "2024-02-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation"
  - "https://docs.cloud.google.com/translate/docs/release-notes"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translations"
keywords:
  - "adaptive"
  - "translation"
  - "higher"
  - "character"
  - "limits"
  - "supports"
  - "larger"
  - "input"
---

# Adaptive translation higher character limits

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Adaptive translation supports larger input and output character limits.

## Extended Definition

Adaptive translation supports larger input and output character limits.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)

## Supporting Pages

### "Translate text by using adaptive translation \_|\_ Cloud Translation \_\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Adaptive translation does have limits on the number of input and output characters.
- Adaptive translation has limits on the number of input and output characters.
- For more information, see Set up authentication for a local development environment . / Imports an AdaptiveMtFile. / private static String importAdaptiveMtFile ( TranslationServiceClient translationServiceClient , String projectId , String datasetId , String gcsUri ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectId , datasetId ); ImportAdaptiveMtFileRequest importAdaptiveMtFileRequest = ImportAdaptiveMtFileRequest . newBuilder () . setParent ( adaptiveMtDatasetName ) . setGcsInputSource ( GcsInputSource . newBuilder (). setInputUri ( gcsUri ). build ()) . build (); ImportAdaptiveMtFileResponse response = translationServiceClient . importAdaptiveMtFile ( importAdaptiveMtFileRequest ); System . out . println ( "Importing file" ); System . out . println ( response ); return response . getAdaptiveMtFile (). getName (); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . async function importAdaptiveMtFile () { const request = { parent : projects/ ${ projectId } /locations/ ${ location } /adaptiveMtDatasets/ ${ adaptiveMtDatasetName } , gcsInputSource : { inputUri : gcs file uri } } const [ response ] = await translationClient . importAdaptiveMtFile ( request ) console . log ( 'Importing file' ) console . log ( response ) } Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .

### Cloud Translation release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- February 14, 2024 Feature Adaptive translation is Generally Available and adds Portuguese support, raises the limit for input and output characters, and decreases latency in the API and console.
- Change Adaptive translations with reference sentence pairs support a larger context window, on par with zero-shot translations.
- November 04, 2024 Change Glossary now supports Translation-LLM and Adaptive Translation.
- Each account receives $10 worth of free usage per month, applied to usage of any of these SKUs: Neural Translation Model Predictions (D90A-CFB2-7CCD) Neural Translation Model Predictions In Translation V3 (E205-31DB-F1F4) Phrase-Based Translation Model Predictions (53BA-5E1D-4314) This credit replaces the free tier for Text Translation requests using NMT for 0-500k characters on Translation API v3beta1.

### "Custom translations overview \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- Source ID: `site-iam-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For Adaptive Translation, you're charged on the number of input and output characters.
- Compared to custom models, Adaptive Translation works well for getting responses that are similar in style, tone, and voice with your input.
- You are charged both for the model training time and the number of input characters that you send for translation.
- You are charged both for the model training time and the number of input characters that you send for translation.

