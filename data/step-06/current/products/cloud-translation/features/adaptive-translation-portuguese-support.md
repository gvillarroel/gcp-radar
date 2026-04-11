---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.590Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Adaptive translation Portuguese support"
feature_slug: "adaptive-translation-portuguese-support"
latest_feature_date: "2024-02-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translations"
  - "https://docs.cloud.google.com/translate/docs/release-notes"
keywords:
  - "adaptive"
  - "translation"
  - "portuguese"
  - "supports"
---

# Adaptive translation Portuguese support

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Adaptive translation supports Portuguese.

## Extended Definition

Adaptive translation supports Portuguese.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)

## Supporting Pages

### "Translate text by using adaptive translation \_|\_ Cloud Translation \_\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- Source ID: `site-iam-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / Translates using AdaptiveMt. / private static void adaptiveMtTranslate ( TranslationServiceClient translationServiceClient , String projectId , String sourceLang , String targetLang , Pair<String , String > referencePairs ) { ReferenceSentencePairList refList = ReferenceSentencePairList . newBuilder (); for ( Pair<String , String > referencePair : referencePairs ) { ReferenceSentencePair refPair = ReferenceSentencePair . newBuilder () . setSourceSentence ( referencePair . getKey ()) . setTargetSentence ( referencePair . getValue ()); refList . addReferenceSentencePair ( refPair ); } AdaptiveMtTranslateRequest request = AdaptiveMtTranslateRequest . newBuilder () . setParent ( LocationName . of ( projectId , "us-central1" ). toString ()) . setSourceLanguageCode ( sourceLang ) . setTargetLanguageCOde ( targetLang ) . addReferenceSentencePairLists ( refList ) . build (); AdaptiveMtTranslateResponse response = translationServiceClient . adaptiveMtTranslate ( request ); System . out . println ( "Translating using AdaptiveMt" ); System . out . println ( response ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / Creates an AdaptiveMtDataset. / private static void createAdaptiveMtDataset ( TranslationServiceClient translationServiceClient , String projectName , String datasetName ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectName , datasetName ); AdaptiveMtDataset adaptiveMtDataset = AdaptiveMtDataset . newBuilder () . setName ( adaptiveMtDatasetName ) . setDisplayName ( "DATASET DISPLAY NAME" ) . setSourceLanguageCode ( "SOURCE LANGUAGE CODE" ) . setTargetLanguageCode ( "TARGET LANGUAGE CODE" ) . build (); CreateAdaptiveMtDatasetRequest request = CreateAdaptiveMtDatasetRequest . newBuilder () . setParent ( LocationName . of ( "PROJECT NAME" , "LOCATION" ). toString ()) . setAdaptiveMtDataset ( adaptiveMtDataset ) . build (); AdaptiveMtDataset dataset = translationServiceClient . createAdaptiveMtDataset ( request ); System . out . println ( "Created dataset" ); System . out . println ( dataset ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / Imports an AdaptiveMtFile. / private static String importAdaptiveMtFile ( TranslationServiceClient translationServiceClient , String projectId , String datasetId , String gcsUri ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectId , datasetId ); ImportAdaptiveMtFileRequest importAdaptiveMtFileRequest = ImportAdaptiveMtFileRequest . newBuilder () . setParent ( adaptiveMtDatasetName ) . setGcsInputSource ( GcsInputSource . newBuilder (). setInputUri ( gcsUri ). build ()) . build (); ImportAdaptiveMtFileResponse response = translationServiceClient . importAdaptiveMtFile ( importAdaptiveMtFileRequest ); System . out . println ( "Importing file" ); System . out . println ( response ); return response . getAdaptiveMtFile (). getName (); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / Translates using AdaptiveMt. / private static void adaptiveMtTranslate ( TranslationServiceClient translationServiceClient , String projectId , String datasetId ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectId , datasetId ); AdaptiveMtTranslateRequest request = AdaptiveMtTranslateRequest . newBuilder () . setParent ( LocationName . of ( projectId , "us-central1" ). toString ()) . setDataset ( adaptiveMtDatasetName ) . addContent ( "Sample translation text" ) . build (); AdaptiveMtTranslateResponse response = translationServiceClient . adaptiveMtTranslate ( request ); System . out . println ( "Translating using AdaptiveMt" ); System . out . println ( response ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .

### "Custom translations overview \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- Source ID: `site-iam-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Adaptive Translation Adaptive translations use LLMs combined with small datasets to provide high-quality translations, often on par with Cloud Translation custom models.
- Adaptive Translation : You can create a lightweight customization of the Translation LLM (TLLM) model with a limited dataset of translation examples.
- Compared to custom models, Adaptive Translation works well for getting responses that are similar in style, tone, and voice with your input.
- What's next For more information about each feature, see NMT customization overview or Adaptive translation .

### Cloud Translation release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- February 14, 2024 Feature Adaptive translation is Generally Available and adds Portuguese support, raises the limit for input and output characters, and decreases latency in the API and console.
- November 04, 2024 Change Glossary now supports Translation-LLM and Adaptive Translation.
- In addition to the features of Cloud Translation API v3beta1, Translation API - Advanced supports: User labels Audit logging Separate quotas for batch translation and for translation using AutoML models Client libraries for additional languages PHP, GO, C#, and Ruby Note: Existing users should pay careful attention to client library versions before updating.
- December 12, 2023 Feature Adaptive translation , which leverages Google LLMs to tailor translations, is in Preview May 19, 2023 Feature Romanization and transliteration are now in Preview .

