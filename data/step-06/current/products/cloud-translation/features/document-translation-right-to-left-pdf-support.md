---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.610Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Document Translation right-to-left PDF support"
feature_slug: "document-translation-right-to-left-pdf-support"
latest_feature_date: "2021-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-beginner"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translations"
  - "https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial"
keywords:
  - "document"
  - "translation"
  - "right"
  - "to"
  - "left"
  - "pdf"
  - "supports"
  - "languages"
---

# Document Translation right-to-left PDF support

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Document Translation supports right-to-left languages in PDF files.

## Extended Definition

Document Translation supports right-to-left languages in PDF files.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- [https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial](https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial)

## Supporting Pages

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- Document Translation Document Translation lets you directly translate existing documents, such as PDF and DOCX files, to a target language.
- Compare supported models Customize the NMT model Customize the Translation LLM Supported languages Supported formats Perform adaptive translation Migrate to Translation Advanced For answers to general questions about Cloud Translation API, refer to the General FAQs page.
- It also offers features such as glossaries, batch translation, document translation, and more: Glossaries : A glossary is a custom dictionary that you create to translate domain-specific terms correctly and consistently.

### Customizing the NMT model \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you don't manually specify how your dataset is split between these functions as described in Preparing your training data , and if your dataset contains fewer than 100,000 segment pairs, then Cloud Translation - Advanced API automatically uses 80% of your content documents for training, 10% for validating, and 10% for testing.
- If the translation task is ambiguous enough that a person fluent in both languages would have a hard time doing a satisfactory job, the NMT model might perform as well as a custom model.
- Customizing the NMT model lets you get the right translation of domain-specific terminology that matters to you.
- You're building on top of a model that already does a pretty good job with general-purpose translation - your examples are the special last step that makes custom models work for your use case in particular, so make sure they're relevant and representative of usage you expect to see.

### "Custom translations overview \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom translations overview The default Google Neural Machine Translation (NMT) model covers a wide range of languages and works well for general-purpose text.
- The advanced version of the Cloud Translation API provides a variety of solutions for customizing translations: NMT customization : You can train your own custom version of the standard NMT model with a rich dataset of translation examples.
- TSV For tab-separated files, each row has the following format: Source segment tab Translated segment Don't include a header row with language codes to identify the source and target languages.
- TLLM customization : You can tune your own custom version of the standard Translation LLM (TLLM) model with either a limited or extensive dataset of translation examples.

### "Translating text from a photo \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial](https://docs.cloud.google.com/translate/docs/hybrid-glossaries-tutorial)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Args: None Returns: None """ Photo from which to extract text infile = "resources/example.png" Name of file that will hold synthetic speech outfile = "resources/example.mp3" Defines the languages in the glossary This list must match the languages in the glossary Here, the glossary includes French and English glossary langs = [ "fr" , "en" ] Name that will be assigned to your project's glossary resource glossary name = "bistro-glossary" uri of .csv file uploaded to Cloud Storage glossary uri = "gs://cloud-samples-data/translation/bistro glossary.csv" created glossary name = create glossary ( glossary langs , PROJECT ID , glossary name , glossary uri ) photo -> detected text text to translate = pic to text ( infile ) detected text -> translated text text to speak = translate text ( text to translate , "fr" , "en" , PROJECT ID , created glossary name ) translated text -> synthetic audio text to speech ( text to speak , outfile ) Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- TranslationServiceClient (); // Construct glossary const glossary = { languageCodesSet : { languageCodes : languages , }, inputConfig : { gcsSource : { inputUri : glossaryUri , }, }, name : translationClient . glossaryPath ( projectId , 'us-central1' , glossaryName ), }; // Construct request const request = { parent : translationClient . locationPath ( projectId , 'us-central1' ), glossary : glossary , }; // Create glossary using a long-running operation. try { const [ operation ] = await translationClient . createGlossary ( request ); // Wait for operation to complete. await operation . promise (); console . log ( 'Created glossary ' + glossaryName + '.' ); } catch ( AlreadyExists ) { console . log ( 'The glossary ' + glossaryName + ' already exists.
- For more information, see Set up authentication for a local development environment . / Creates a GCP glossary resource Assumes you've already manually uploaded a glossary to Cloud Storage ARGS languages: list of languages in the glossary projectId: GCP project id glossaryName: name you want to give this glossary resource glossaryUri: the uri of the glossary you uploaded to Cloud Storage RETURNS nothing / async function createGlossary ( languages , projectId , glossaryName , glossaryUri ) { // Instantiates a client const translationClient = await new translate .
- Home Documentation AI and ML Cloud Translation Guides Send feedback Translating text from a photo Stay organized with collections Save and categorize content based on your preferences.

