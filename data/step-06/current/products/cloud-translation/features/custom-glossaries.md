---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.611Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Custom glossaries"
feature_slug: "custom-glossaries"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/intro-to-v3"
  - "https://docs.cloud.google.com/translate/docs/advanced/glossary"
  - "https://docs.cloud.google.com/translate/docs/release-notes"
keywords:
  - "custom"
  - "glossaries"
  - "translation"
  - "api"
  - "v3beta1"
  - "supports"
  - "for"
  - "customer"
---

# Custom glossaries

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Cloud Translation API v3beta1 supports custom glossaries for customer-specific terminology.

## Extended Definition

Cloud Translation API v3beta1 supports custom glossaries for customer-specific terminology.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)

## Supporting Pages

### Overview of the Cloud Translation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/intro-to-v3](https://docs.cloud.google.com/translate/docs/intro-to-v3)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Basic Advanced Translate with the NMT model Translate with the Translation LLM Translate with Adaptive Translation models Translate with custom models Translate multiple strings in a single request Batch translations with Cloud Storage Translate documents Glossary support (control terminology) Train custom models Language Detection Integrated REST API Integrated gRPC API Service Account API Key Audit logging Supports HTML Supports 100+ Languages Romanization support Transliteration support Adaptive Translation Multi-regional endpoint support VPC Service Controls support Refer to Cloud Translation - Advanced API features for more details on Cloud Translation - Advanced API.
- Compare supported models Customize the NMT model Customize the Translation LLM Supported languages Supported formats Perform adaptive translation Migrate to Translation Advanced For answers to general questions about Cloud Translation API, refer to the General FAQs page.
- Glossaries A glossary is a custom dictionary that Cloud Translation - Advanced API uses to correctly and consistently translate domain-specific terms, named entities, and other kinds of terms that are specific to you.
- IAM roles Cloud Translation - Advanced API integrates with IAM to provide additional security for your translation requests, enable fine-grained access control, and support integration with custom NMT models.

### "Creating and using glossaries (Advanced) \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1/glossaries" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-number /locations/us-central1/operations/20191103-09061569945989-5d937985-0000-21ac-816d-f4f5e80782d4", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3beta1.CreateGlossaryMetadata", "name": "projects/ project-number /locations/us-central1/glossaries/ glossary-id ", "state": "RUNNING", "submitTime": "2019-11-03T16:06:29.134496675Z" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- The Cloud Translation API supports both unidirectional glossaries, which specify the desired translation for a single pair of source and target languages, and equivalent term sets , which identify the equivalent terms in multiple languages.
- Creating and using glossaries (Advanced) A glossary is a custom dictionary the Cloud Translation API uses to consistently translate the customer's domain-specific terminology.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( TranslationServiceClient client = TranslationServiceClient . create ()) { // Supported Locations: global, [glossary location], or [model location] // Glossaries must be hosted in us-central1 // Custom Models must use the same location as your model. (us-central1) String location = "us-central1" ; LocationName parent = LocationName . of ( projectId , location ); GlossaryName glossaryName = GlossaryName . of ( projectId , location , glossaryId ); TranslateTextGlossaryConfig glossaryConfig = TranslateTextGlossaryConfig . newBuilder (). setGlossary ( glossaryName . toString ()). build (); // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats TranslateTextRequest request = TranslateTextRequest . newBuilder () . setParent ( parent . toString ()) . setMimeType ( "text/plain" ) . setSourceLanguageCode ( sourceLanguage ) . setTargetLanguageCode ( targetLanguage ) . addContents ( text ) . setGlossaryConfig ( glossaryConfig ) . build (); TranslateTextResponse response = client . translateText ( request ); // Display the translation for each input text provided for ( Translation translation : response . getGlossaryTranslationsList ()) { System . out . printf ( "Translated text: %s\n" , translation . getTranslatedText ()); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .

### Cloud Translation release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/release-notes](https://docs.cloud.google.com/translate/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- In addition, the release includes the following new features: custom glossaries for customer-specific terminology, batch translation for asynchronous translation of .txt, .tsv, and .html files saved in Google Cloud Storage. v3 API offers monthly free tier , and guarded by new Quotas and Limit .
- In addition to the features of Cloud Translation API v3beta1, Translation API - Advanced supports: User labels Audit logging Separate quotas for batch translation and for translation using AutoML models Client libraries for additional languages PHP, GO, C#, and Ruby Note: Existing users should pay careful attention to client library versions before updating.
- Each account receives $10 worth of free usage per month, applied to usage of any of these SKUs: Neural Translation Model Predictions (D90A-CFB2-7CCD) Neural Translation Model Predictions In Translation V3 (E205-31DB-F1F4) Phrase-Based Translation Model Predictions (53BA-5E1D-4314) This credit replaces the free tier for Text Translation requests using NMT for 0-500k characters on Translation API v3beta1.
- Translation API - Advanced also fixes bugs from the v3beta1 version, notably for the glossary feature.

