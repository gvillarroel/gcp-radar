---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.588Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Adaptive translation"
feature_slug: "adaptive-translation"
latest_feature_date: "2024-02-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translations"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-beginner"
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
Coverage: LOW

## Step 02 Summary

Adaptive translation uses Google LLMs to tailor translations to the provided context; Adaptive translation uses Google LLMs to tailor translations to the provided context.

## Extended Definition

Adaptive translation uses Google LLMs to tailor translations to the provided context; Adaptive translation uses Google LLMs to tailor translations to the provided context.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)

## Supporting Pages

### "Translate text by using adaptive translation \_|\_ Cloud Translation \_\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Translate text by using adaptive translation When you request an adaptive translation, you provide the text to translate and example translations that Cloud Translation uses to tailor its responses.
- DATASET NAME : The name of the dataset that Cloud Translation uses to customize your translations, formatted as projects/ PROJECT ID /locations/ LOCATION /adaptiveMtDatasets/ DATASET ID .
- For more information, see Set up authentication for a local development environment . / Translates using AdaptiveMt. / private static void adaptiveMtTranslate ( TranslationServiceClient translationServiceClient , String projectId , String sourceLang , String targetLang , Pair<String , String > referencePairs ) { ReferenceSentencePairList refList = ReferenceSentencePairList . newBuilder (); for ( Pair<String , String > referencePair : referencePairs ) { ReferenceSentencePair refPair = ReferenceSentencePair . newBuilder () . setSourceSentence ( referencePair . getKey ()) . setTargetSentence ( referencePair . getValue ()); refList . addReferenceSentencePair ( refPair ); } AdaptiveMtTranslateRequest request = AdaptiveMtTranslateRequest . newBuilder () . setParent ( LocationName . of ( projectId , "us-central1" ). toString ()) . setSourceLanguageCode ( sourceLang ) . setTargetLanguageCOde ( targetLang ) . addReferenceSentencePairLists ( refList ) . build (); AdaptiveMtTranslateResponse response = translationServiceClient . adaptiveMtTranslate ( request ); System . out . println ( "Translating using AdaptiveMt" ); System . out . println ( response ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / Creates an AdaptiveMtDataset. / private static void createAdaptiveMtDataset ( TranslationServiceClient translationServiceClient , String projectName , String datasetName ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectName , datasetName ); AdaptiveMtDataset adaptiveMtDataset = AdaptiveMtDataset . newBuilder () . setName ( adaptiveMtDatasetName ) . setDisplayName ( "DATASET DISPLAY NAME" ) . setSourceLanguageCode ( "SOURCE LANGUAGE CODE" ) . setTargetLanguageCode ( "TARGET LANGUAGE CODE" ) . build (); CreateAdaptiveMtDatasetRequest request = CreateAdaptiveMtDatasetRequest . newBuilder () . setParent ( LocationName . of ( "PROJECT NAME" , "LOCATION" ). toString ()) . setAdaptiveMtDataset ( adaptiveMtDataset ) . build (); AdaptiveMtDataset dataset = translationServiceClient . createAdaptiveMtDataset ( request ); System . out . println ( "Created dataset" ); System . out . println ( dataset ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .

### "Custom translations overview \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Adaptive Translation Adaptive translations use LLMs combined with small datasets to provide high-quality translations, often on par with Cloud Translation custom models.
- You provide a list of terms and their translations that Cloud Translation uses to ensure consistent and accurate translations for those terms.
- The advanced version of the Cloud Translation API provides a variety of solutions for customizing translations: NMT customization : You can train your own custom version of the standard NMT model with a rich dataset of translation examples.
- Custom translations overview The default Google Neural Machine Translation (NMT) model covers a wide range of languages and works well for general-purpose text.

### Customizing the NMT model \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This means you can tailor a custom model to your domain-specific content and produce more accurate translations than the default Google NMT model would.
- If you don't manually specify how your dataset is split between these functions as described in Preparing your training data , and if your dataset contains fewer than 100,000 segment pairs, then Cloud Translation - Advanced API automatically uses 80% of your content documents for training, 10% for validating, and 10% for testing.
- The higher the BLEU score, the better translations your model can give you for segments that are similar to your training data.
- You're building on top of a model that already does a pretty good job with general-purpose translation - your examples are the special last step that makes custom models work for your use case in particular, so make sure they're relevant and representative of usage you expect to see.

