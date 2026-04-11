---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:52:53.930Z"
product_name: "AutoML Translation"
product_slug: "automl-translation"
feature_name: "AutoML Translation Cloud Console interface"
feature_slug: "automl-translation-cloud-console-interface"
latest_feature_date: "2019-09-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart"
  - "https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation"
  - "https://docs.cloud.google.com/translate/docs/advanced/batch-translation"
keywords:
  - "introduced"
  - "interface"
  - "platform"
  - "console"
  - "ui"
  - "for"
  - "translation"
  - "automl"
---

# AutoML Translation Cloud Console interface

Product: AutoML Translation
Coverage: LOW

## Step 02 Summary

AutoML Translation introduced a Google Cloud Platform Console UI for all customers with dataset management controls such as sort and filter.

## Extended Definition

AutoML Translation introduced a Google Cloud Platform Console UI for all customers with dataset management controls such as sort and filter.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart)
- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)

## Supporting Pages

### "Create a custom translation model \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart](https://docs.cloud.google.com/translate/docs/advanced/custom-translation-quickstart)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: The following tutorial assumes that, for your project, the Google Cloud console is using the Cloud Translation API instead of the AutoML API to create datasets.
- Before you begin Before you can start using AutoML Translation, your project must have the Cloud Translation API enabled, and you must have the permissions that are granted by the following roles: Viewer role to view existing resources in your project Cloud Translation API Editor role to create and manage datasets and models Storage Admin role to upload training data to a Cloud Storage bucket Create a translation dataset and import segment pairs Download the archive file that contains the sample data for training the model, and extract the files.
- Train a model Go to the AutoML Translation console.
- Go to the AutoML Translation console.

### "Translate text by using adaptive translation \_|\_ Cloud Translation \_\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . async function translate () { const request = { parent : projects/ ${ projectId } /locations/ ${ location } , referenceSentenceConfig : { referenceSentencePairLists : [ { referenceSentencePairs : [{ sourceSentence : 'Sample reference source 1' targetSentence : 'Sample reference target 1' }, { sourceSentence : 'Sample reference source 2' targetSentence : 'Sample reference target 2' }] } ], sourceLanguageCode : 'en' targetLanguageCode : 'ja' }, content : [ 'Sample translate query' ] } const [ response ] = await translationClient . adaptiveMtTranslate ( request ) console . log ( 'Translating' ) console . log ( response ) } Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . async function createAdaptiveMtDataset () { // Construct request const request = { parent : projects/ ${ projectId } /locations/ ${ location } , adaptiveMtDataset : { name : projects/ ${ projectId } /locations/ ${ location } /adaptiveMtDatasets/ ${ adaptiveMtDatasetName } , displayName : 'DATASET DISPLAY NAME' , sourceLanguageCode : 'SOURCE LANGUAGE CODE' , targetLanguageCode : 'TARGET LANGUAGE CODE' , } }; // Run request const [ response ] = await translationClient . createAdaptiveMtDataset ( request ); console . log ( 'Created' ) console . log ( response ) } Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . async function translate () { const request = { parent : projects/ ${ projectId } /locations/ ${ location } , dataset : projects/ ${ projectId } /locations/ ${ location } /adaptiveMtDatasets/ ${ adaptiveMtDatasetName } , content : [ 'Sample translate query' ] } const [ response ] = await translationClient . adaptiveMtTranslate ( request ) console . log ( 'Translating' ) console . log ( response ) } Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . async function importAdaptiveMtFile () { const request = { parent : projects/ ${ projectId } /locations/ ${ location } /adaptiveMtDatasets/ ${ adaptiveMtDatasetName } , gcsInputSource : { inputUri : gcs file uri } } const [ response ] = await translationClient . importAdaptiveMtFile ( request ) console . log ( 'Importing file' ) console . log ( response ) } Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .

### Batch requests (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'us-central1'; // const inputUri = 'gs://cloud-samples-data/text.txt'; // const outputUri = 'gs://YOUR BUCKET ID/path to store results/'; // const glossaryId = 'YOUR GLOSSARY ID'; // const modelId = 'YOUR MODEL ID'; // Imports the Google Cloud Translation library const { TranslationServiceClient } = require ( ' @google-cloud/translate ' ); // Instantiates a client const client = new TranslationServiceClient (); async function batchTranslateTextWithGlossaryAndModel () { // Construct request const request = { parent : projects/ ${ projectId } /locations/ ${ location } , sourceLanguageCode : 'en' , targetLanguageCodes : [ 'ja' ], inputConfigs : [ { mimeType : 'text/plain' , // mime types: text/plain, text/html gcsSource : { inputUri : inputUri , }, }, ], outputConfig : { gcsDestination : { outputUriPrefix : outputUri , }, }, glossaries : { ja : { glossary : projects/ ${ projectId } /locations/ ${ location } /glossaries/ ${ glossaryId } , }, }, models : { ja : projects/ ${ projectId } /locations/ ${ location } /models/ ${ modelId } , }, }; const options = { timeout : 240000 }; // Create a job using a long-running operation const [ operation ] = await client . batchTranslateText ( request , options ); // Wait for operation to complete const [ response ] = await operation . promise (); // Display the translation for each input text provided console . log ( Total Characters: ${ response . totalCharacters } ); console . log ( Translated Characters: ${ response . translatedCharacters } ` ); } batchTranslateTextWithGlossaryAndModel (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'us-central1'; // const inputUri = 'gs://cloud-samples-data/text.txt'; // const outputUri = 'gs://YOUR BUCKET ID/path to store results/'; // const glossaryId = 'YOUR GLOSSARY ID'; // Imports the Google Cloud Translation library const { TranslationServiceClient } = require ( ' @google-cloud/translate ' ); // Instantiates a client const client = new TranslationServiceClient (); async function batchTranslateTextWithGlossary () { // Construct request const request = { parent : projects/ ${ projectId } /locations/ ${ location } , sourceLanguageCode : 'en' , targetLanguageCodes : [ 'es' ], inputConfigs : [ { mimeType : 'text/plain' , // mime types: text/plain, text/html gcsSource : { inputUri : inputUri , }, }, ], outputConfig : { gcsDestination : { outputUriPrefix : outputUri , }, }, glossaries : { es : { glossary : projects/ ${ projectId } /locations/ ${ location } /glossaries/ ${ glossaryId } , }, }, }; const options = { timeout : 240000 }; // Create a job using a long-running operation const [ operation ] = await client . batchTranslateText ( request , options ); // Wait for the operation to complete const [ response ] = await operation . promise (); // Display the translation for each input text provided console . log ( Total Characters: ${ response . totalCharacters } ); console . log ( Translated Characters: ${ response . translatedCharacters } ); } batchTranslateTextWithGlossary (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'us-central1'; // const inputUri = 'gs://cloud-samples-data/text.txt'; // const outputUri = 'gs://YOUR BUCKET ID/path to store results/'; // const modelId = 'YOUR MODEL ID'; // Imports the Google Cloud Translation library const { TranslationServiceClient } = require ( ' @google-cloud/translate ' ); // Instantiates a client const client = new TranslationServiceClient (); async function batchTranslateTextWithModel () { // Construct request const request = { parent : projects/ ${ projectId } /locations/ ${ location } , sourceLanguageCode : 'en' , targetLanguageCodes : [ 'ja' ], inputConfigs : [ { mimeType : 'text/plain' , // mime types: text/plain, text/html gcsSource : { inputUri : inputUri , }, }, ], outputConfig : { gcsDestination : { outputUriPrefix : outputUri , }, }, models : { ja : projects/ ${ projectId } /locations/ ${ location } /models/ ${ modelId } , }, }; const options = { timeout : 240000 }; // Create a job using a long-running operation const [ operation ] = await client . batchTranslateText ( request , options ); // Wait for the operation to complete const [ response ] = await operation . promise (); // Display the translation for each input text provided console . log ( Total Characters: ${ response . totalCharacters } ); console . log ( Translated Characters: ${ response . translatedCharacters } ); } batchTranslateTextWithModel (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .
- Timeout specified in ms. const options = { timeout : 240000 }; // Batch translate text using a long-running operation with a timeout of 240000ms. const [ operation ] = await translationClient . batchTranslateText ( request , options ); // Wait for operation to complete. const [ response ] = await operation . promise (); console . log ( Total Characters: ${ response . totalCharacters } ); console . log ( Translated Characters: ${ response . translatedCharacters } ); } batchTranslateText (); Python Before trying this sample, follow the Python setup instructions in the Cloud Translation quickstart using client libraries .

