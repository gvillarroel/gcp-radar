---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.603Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Adaptive translation low-latency processing"
feature_slug: "adaptive-translation-low-latency-processing"
latest_feature_date: "2024-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/glossary"
  - "https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translations"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-beginner"
keywords:
  - "adaptive"
  - "translation"
  - "low"
  - "latency"
  - "processing"
  - "reduces"
  - "in"
  - "both"
---

# Adaptive translation low-latency processing

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Adaptive translation reduces latency in both the API and the console.

## Extended Definition

Adaptive translation reduces latency in both the API and the console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)

## Supporting Pages

### "Creating and using glossaries (Advanced) \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . { % setvar launch stage % } preview { % endsetvar % } { % setvar launch type % } feature { % endsetvar % } { % include "cloud/ shared/ info launch stage disclaimer.html" % } / Translates using AdaptiveMt. / private static void adaptiveMtTranslate ( TranslationServiceClient translationServiceClient , String projectId , String datasetId ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectId , datasetId ); String glossaryId = "your-glossary-display-name" ; GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); GlossaryConfig glossaryConfig = GlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); AdaptiveMtTranslateRequest request = AdaptiveMtTranslateRequest . newBuilder () . setParent ( LocationName . of ( projectId , "us-central1" ). toString ()) . setDataset ( adaptiveMtDatasetName ) . addContent ( "Sample translation text" ) . setGlossaryConfig ( glossaryConfig ) . build (); AdaptiveMtTranslateResponse response = translationServiceClient . adaptiveMtTranslate ( request ); System . out . println ( "Translating using AdaptiveMt" ); System . out . println ( response ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- AdaptiveMtTranslateRequest ( parent = "projects/PROJECT ID/locations/LOCATION" , dataset = "projects/PROJECT ID/locations/LOCATION/adaptiveMtDatasets/DATASET ID" , content = [ "Sample translation request" ] glossary config = glossary config , ) Make the request response = client . adaptive mt translate ( request ) Handle the response print ( response ) Get information about a glossary REST Before using any of the request data, make the following replacements: PROJECT NUMBER OR ID : the numeric or alphanumeric ID of your Google Cloud project glossary-id : your glossary ID, for example, "my-en-to-ru-glossary" HTTP method and URL: GET https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries/ glossary-id To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :adaptiveMtTranslate" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translations": [ { "translatedText": " TRANSLATED TEXT " } ], "languageCode": " TARGET LANGUAGE ", "glossaryTranslations": { "translatedText": " TRANSLATED TEXT ", "glossaryConfig": { "glossary": "projects/ project-number /locations/ LOCATION /glossaries/ GLOSSARY ID ", "ignoreCase": BOOLEAN , "contextual translation enabled": BOOLEAN CONTEXTUAL } }, } Java Before trying this sample, follow the Java setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . async function translate () { / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'global'; // const glossaryId = 'YOUR GLOSSARY ID'; const glossaryConfig = { glossary : projects/ ${ projectId } /locations/ ${ location } /glossaries/ ${ glossaryId } , }; const request = { parent : projects/ ${ projectId } /locations/ ${ location } , dataset : projects/ ${ projectId } /locations/ ${ location } /adaptiveMtDatasets/ ${ adaptiveMtDatasetName } , content : [ 'Sample translate query' ], glossaryConfig : glossaryConfig , } const [ response ] = await translationClient . adaptiveMtTranslate ( request ) console . log ( 'Translating' ) console . log ( response ) } Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .

### "Translate text by using adaptive translation \_|\_ Cloud Translation \_\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- Source ID: `site-iam-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / Translates using AdaptiveMt. / private static void adaptiveMtTranslate ( TranslationServiceClient translationServiceClient , String projectId , String sourceLang , String targetLang , Pair<String , String > referencePairs ) { ReferenceSentencePairList refList = ReferenceSentencePairList . newBuilder (); for ( Pair<String , String > referencePair : referencePairs ) { ReferenceSentencePair refPair = ReferenceSentencePair . newBuilder () . setSourceSentence ( referencePair . getKey ()) . setTargetSentence ( referencePair . getValue ()); refList . addReferenceSentencePair ( refPair ); } AdaptiveMtTranslateRequest request = AdaptiveMtTranslateRequest . newBuilder () . setParent ( LocationName . of ( projectId , "us-central1" ). toString ()) . setSourceLanguageCode ( sourceLang ) . setTargetLanguageCOde ( targetLang ) . addReferenceSentencePairLists ( refList ) . build (); AdaptiveMtTranslateResponse response = translationServiceClient . adaptiveMtTranslate ( request ); System . out . println ( "Translating using AdaptiveMt" ); System . out . println ( response ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / Creates an AdaptiveMtDataset. / private static void createAdaptiveMtDataset ( TranslationServiceClient translationServiceClient , String projectName , String datasetName ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectName , datasetName ); AdaptiveMtDataset adaptiveMtDataset = AdaptiveMtDataset . newBuilder () . setName ( adaptiveMtDatasetName ) . setDisplayName ( "DATASET DISPLAY NAME" ) . setSourceLanguageCode ( "SOURCE LANGUAGE CODE" ) . setTargetLanguageCode ( "TARGET LANGUAGE CODE" ) . build (); CreateAdaptiveMtDatasetRequest request = CreateAdaptiveMtDatasetRequest . newBuilder () . setParent ( LocationName . of ( "PROJECT NAME" , "LOCATION" ). toString ()) . setAdaptiveMtDataset ( adaptiveMtDataset ) . build (); AdaptiveMtDataset dataset = translationServiceClient . createAdaptiveMtDataset ( request ); System . out . println ( "Created dataset" ); System . out . println ( dataset ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / Imports an AdaptiveMtFile. / private static String importAdaptiveMtFile ( TranslationServiceClient translationServiceClient , String projectId , String datasetId , String gcsUri ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectId , datasetId ); ImportAdaptiveMtFileRequest importAdaptiveMtFileRequest = ImportAdaptiveMtFileRequest . newBuilder () . setParent ( adaptiveMtDatasetName ) . setGcsInputSource ( GcsInputSource . newBuilder (). setInputUri ( gcsUri ). build ()) . build (); ImportAdaptiveMtFileResponse response = translationServiceClient . importAdaptiveMtFile ( importAdaptiveMtFileRequest ); System . out . println ( "Importing file" ); System . out . println ( response ); return response . getAdaptiveMtFile (). getName (); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / Translates using AdaptiveMt. / private static void adaptiveMtTranslate ( TranslationServiceClient translationServiceClient , String projectId , String datasetId ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectId , datasetId ); AdaptiveMtTranslateRequest request = AdaptiveMtTranslateRequest . newBuilder () . setParent ( LocationName . of ( projectId , "us-central1" ). toString ()) . setDataset ( adaptiveMtDatasetName ) . addContent ( "Sample translation text" ) . build (); AdaptiveMtTranslateResponse response = translationServiceClient . adaptiveMtTranslate ( request ); System . out . println ( "Translating using AdaptiveMt" ); System . out . println ( response ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .

### "Custom translations overview \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Adaptive Translation Adaptive translations use LLMs combined with small datasets to provide high-quality translations, often on par with Cloud Translation custom models.
- If the file does not conform to proper XML and TMX format (for example, if it is missing an end tag or a <tmx> element) Cloud Translation aborts processing it.
- Compared to custom models, Adaptive Translation works well for getting responses that are similar in style, tone, and voice with your input.
- The following example includes segment pairs for English to German translations: It's a beautiful day. \t Es ist ein schöner Tag.

### Customizing the NMT model \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- Source ID: `site-iam-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Keep humans in the loop If it's at all feasible, make sure a person who understands both languages well has validated that the segment pairs match up correctly and represent understandable, accurate translations.
- If the TMX file contains XML or TMX errors, like if an end tag or <tmx> element is missing, Cloud Translation - Advanced API ends processing and returns an error if it skips more than 1024 invalid ` ' elements.
- Instead of having to hire bilingual staff or contract with specialist translators, both of which come at a high price, you can create and refine a custom model to do the job in real time at a much lower cost.
- For automatic data splitting, Cloud Translation - Advanced API performs additional processing (see Dataset division ): After the dataset is uploaded, it removes segment pairs with identical source segments.

