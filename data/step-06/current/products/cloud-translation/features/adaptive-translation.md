---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.602Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Adaptive translation"
feature_slug: "adaptive-translation"
latest_feature_date: "2024-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translations"
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/advanced/glossary"
keywords:
  - "adaptive"
  - "translation"
  - "uses"
  - "llms"
  - "to"
  - "tailor"
  - "translations"
  - "the"
---

# Adaptive translation

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Adaptive translation uses Google LLMs to tailor translations to the provided context; Adaptive translation uses Google LLMs to tailor translations to the provided context.

## Extended Definition

Adaptive translation uses Google LLMs to tailor translations to the provided context; Adaptive translation uses Google LLMs to tailor translations to the provided context.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)

## Supporting Pages

### "Translate text by using adaptive translation \_|\_ Cloud Translation \_\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- Source ID: `site-iam-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Translate text by using adaptive translation When you request an adaptive translation, you provide the text to translate and example translations that Cloud Translation uses to tailor its responses.
- DATASET NAME : The name of the dataset that Cloud Translation uses to customize your translations, formatted as projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID .
- For more information, see Set up authentication for a local development environment . / Translates using AdaptiveMt. / private static void adaptiveMtTranslate ( TranslationServiceClient translationServiceClient , String projectId , String sourceLang , String targetLang , Pair<String , String > referencePairs ) { ReferenceSentencePairList refList = ReferenceSentencePairList . newBuilder (); for ( Pair<String , String > referencePair : referencePairs ) { ReferenceSentencePair refPair = ReferenceSentencePair . newBuilder () . setSourceSentence ( referencePair . getKey ()) . setTargetSentence ( referencePair . getValue ()); refList . addReferenceSentencePair ( refPair ); } AdaptiveMtTranslateRequest request = AdaptiveMtTranslateRequest . newBuilder () . setParent ( LocationName . of ( projectId , "us-central1" ). toString ()) . setSourceLanguageCode ( sourceLang ) . setTargetLanguageCOde ( targetLang ) . addReferenceSentencePairLists ( refList ) . build (); AdaptiveMtTranslateResponse response = translationServiceClient . adaptiveMtTranslate ( request ); System . out . println ( "Translating using AdaptiveMt" ); System . out . println ( response ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / Creates an AdaptiveMtDataset. / private static void createAdaptiveMtDataset ( TranslationServiceClient translationServiceClient , String projectName , String datasetName ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectName , datasetName ); AdaptiveMtDataset adaptiveMtDataset = AdaptiveMtDataset . newBuilder () . setName ( adaptiveMtDatasetName ) . setDisplayName ( "DATASET DISPLAY NAME" ) . setSourceLanguageCode ( "SOURCE LANGUAGE CODE" ) . setTargetLanguageCode ( "TARGET LANGUAGE CODE" ) . build (); CreateAdaptiveMtDatasetRequest request = CreateAdaptiveMtDatasetRequest . newBuilder () . setParent ( LocationName . of ( "PROJECT NAME" , "LOCATION" ). toString ()) . setAdaptiveMtDataset ( adaptiveMtDataset ) . build (); AdaptiveMtDataset dataset = translationServiceClient . createAdaptiveMtDataset ( request ); System . out . println ( "Created dataset" ); System . out . println ( dataset ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .

### "Custom translations overview \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- Source ID: `site-iam-reference`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Adaptive Translation Adaptive translations use LLMs combined with small datasets to provide high-quality translations, often on par with Cloud Translation custom models.
- You provide a list of terms and their translations that Cloud Translation uses to ensure consistent and accurate translations for those terms.
- The advanced version of the Cloud Translation API provides a variety of solutions for customizing translations: NMT customization : You can train your own custom version of the standard NMT model with a rich dataset of translation examples.
- Custom translations overview The default Google Neural Machine Translation (NMT) model covers a wide range of languages and works well for general-purpose text.

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- Compare supported models Customize the NMT model Customize the Translation LLM Supported languages Supported formats Perform adaptive translation Migrate to Translation Advanced For answers to general questions about Cloud Translation API, refer to the General FAQs page.
- Glossaries A glossary is a custom dictionary that Cloud Translation - Advanced API uses to correctly and consistently translate domain-specific terms, named entities, and other kinds of terms that are specific to you.
- Advanced API features Using Cloud Translation - Advanced API rather than Cloud Translation - Basic API gives you access to the following features that can make your translation solution more robust and better suited to your specific use case: Model selection and customization Cloud Translation - Advanced API model selection lets you dynamically select different models, including models that you customize to suit your particular application.

### "Creating and using glossaries (Advanced) \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DATASET NAME : The name of the dataset that Cloud Translation uses to customize your translations, formatted as projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID .
- For more information, see Set up authentication for a local development environment . { % setvar launch stage % } preview { % endsetvar % } { % setvar launch type % } feature { % endsetvar % } { % include "cloud/ shared/ info launch stage disclaimer.html" % } / Translates using AdaptiveMt. / private static void adaptiveMtTranslate ( TranslationServiceClient translationServiceClient , String projectId , String datasetId ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectId , datasetId ); String glossaryId = "your-glossary-display-name" ; GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); GlossaryConfig glossaryConfig = GlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); AdaptiveMtTranslateRequest request = AdaptiveMtTranslateRequest . newBuilder () . setParent ( LocationName . of ( projectId , "us-central1" ). toString ()) . setDataset ( adaptiveMtDatasetName ) . addContent ( "Sample translation text" ) . setGlossaryConfig ( glossaryConfig ) . build (); AdaptiveMtTranslateResponse response = translationServiceClient . adaptiveMtTranslate ( request ); System . out . println ( "Translating using AdaptiveMt" ); System . out . println ( response ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :adaptiveMtTranslate" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": " TRANSLATED TEXT " } ], "languageCode": " TARGET LANGUAGE ", "glossaryTranslations": { "translatedText": " TRANSLATED TEXT ", "glossaryConfig": { "glossary": "projects/ project-number /locations/ LOCATION /glossaries/ GLOSSARY ID ", "ignoreCase": BOOLEAN , "contextual translation enabled": BOOLEAN CONTEXTUAL } }, } Java Before trying this sample, follow the Java setup instructions in the Cloud Translation quickstart using client libraries .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); TranslateTextGlossaryConfig glossaryConfig = TranslateTextGlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats TranslateTextRequest request = TranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setMimeType ( "text/plain" ) . setSourceLanguageCode ( sourceLanguage ) . setTargetLanguageCode ( targetLanguage ) . addContents ( text ) . setGlossaryConfig ( glossaryConfig ) . build (); TranslateTextResponse response = client . translateText ( request ); // Display the translation for each input text provided for ( Translation translation : response . getGlossaryTranslationsList ()) { System . out . printf ( "Translated text: %s\n" , translation . getTranslatedText ()); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .

