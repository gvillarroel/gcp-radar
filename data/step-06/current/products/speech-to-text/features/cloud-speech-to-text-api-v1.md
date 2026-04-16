---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:12.009Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Cloud Speech-to-Text API v1"
feature_slug: "cloud-speech-to-text-api-v1"
latest_feature_date: "2017-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/migration"
  - "https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api"
  - "https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries"
  - "https://docs.cloud.google.com/speech-to-text/docs/reference/rest"
keywords:
  - "speech"
  - "to"
  - "text"
  - "api"
  - "v1"
  - "the"
  - "version"
  - "was"
---

# Cloud Speech-to-Text API v1

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

The Cloud Speech-to-Text v1 version was released.

## Extended Definition

The Cloud Speech-to-Text v1 version was released.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/migration](https://docs.cloud.google.com/speech-to-text/docs/migration)
- [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api)
- [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries)
- [https://docs.cloud.google.com/speech-to-text/docs/reference/rest](https://docs.cloud.google.com/speech-to-text/docs/reference/rest)

## Supporting Pages

### "Migrate to the latest version of Cloud Speech-to-Text API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/migration](https://docs.cloud.google.com/speech-to-text/docs/migration)
- Source ID: `site-docs-root`
- Final score: 322
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrating in the API Similar to Cloud STT V1, to transcribe audio , you need to create a RecognitionConfig by selecting the language of your audio and the recognition model of your choice: Note: The difference between the V1 and V2 versions of the Cloud Speech-to-Text API in the definition of RecognitionConfig message is the addition of the AutoDetectDecodingConfig message, which automatically detects the audio specifications.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Migrate to the latest version of Cloud Speech-to-Text API Stay organized with collections Save and categorize content based on your preferences.
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/global/recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response If needed, select a region in which you want to use the Cloud Speech-to-Text API, and check the language and model availability in that region: Python import os from google.api core.client options import ClientOptions from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def change speech v2 location ( audio file : str , location : str ) - > cloud speech .
- Cloud Speech-to-Text API V2 brings the latest Google Cloud API design for customers to meet enterprise security and regulatory requirements out of the box.

### "Transcribe speech to text by using the command line \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api)
- Source ID: `site-docs-root`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To initialize the gcloud CLI, run the following command: gcloud init Make an audio transcription request Use the following code sample to send a recognize REST request to the Speech-to-Text API.
- You can send audio data to the Speech-to-Text API, which then returns a text transcription of that audio file.
- Enable the Speech-to-Text APIs.
- Enable the Speech-to-Text APIs.

### "Transcribe speech to text by using client libraries \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries)
- Source ID: `site-docs-root`
- Final score: 279
- Re-rank relevance: N/A

Evidence snippets:
- Make an audio transcription request Use the following code to send a Recognize request to the Speech-to-Text API.
- You can send audio data to the Speech-to-Text API, which then returns a text transcription of that audio file.
- Enable the Speech-to-Text APIs.
- Enable the Speech-to-Text APIs.

### Cloud Speech-to-Text API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/reference/rest](https://docs.cloud.google.com/speech-to-text/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 272
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v2.projects.locations REST Resource: v2.projects.locations.config REST Resource: v2.projects.locations.customClasses REST Resource: v2.projects.locations.operations REST Resource: v2.projects.locations.phraseSets REST Resource: v2.projects.locations.recognizers REST Resource: v1p1beta1.operations REST Resource: v1p1beta1.projects.locations.customClasses REST Resource: v1p1beta1.projects.locations.phraseSets REST Resource: v1p1beta1.speech REST Resource: v1.operations REST Resource: v1.projects.locations.customClasses REST Resource: v1.projects.locations.phraseSets REST Resource: v1.speech Service: speech.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service provides the following discovery documents: https://speech.googleapis.com/$discovery/rest?version=v2 https://speech.googleapis.com/$discovery/rest?version=v1 https://speech.googleapis.com/$discovery/rest?version=v1p1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://speech.googleapis.com REST Resource: v2.projects.locations Methods get GET /v2/{name=projects/ /locations/ } Gets information about a location. list GET /v2/{name=projects/ }/locations Lists information about the supported locations for this service.
- Home Documentation AI and ML Cloud Speech-to-Text Reference Send feedback Cloud Speech-to-Text API Stay organized with collections Save and categorize content based on your preferences.

