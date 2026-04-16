---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:12.003Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Cloud Speech-to-Text v1beta API version"
feature_slug: "cloud-speech-to-text-v1beta-api-version"
latest_feature_date: "2019-04-04"
deprecation_date: "2019-04-04"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api"
  - "https://docs.cloud.google.com/speech-to-text/docs/migration"
  - "https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries"
  - "https://docs.cloud.google.com/speech-to-text/docs/apis"
keywords:
  - "speech"
  - "to"
  - "text"
  - "v1beta"
  - "api"
  - "version"
  - "the"
  - "is"
---

# Cloud Speech-to-Text v1beta API version

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

The Cloud Speech-to-Text v1beta API version is no longer available and users are required to migrate to v1 or v1p1beta1; deprecated on 2019-04-04.

## Extended Definition

The Cloud Speech-to-Text v1beta API version is no longer available and users are required to migrate to v1 or v1p1beta1; deprecated on 2019-04-04.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api)
- [https://docs.cloud.google.com/speech-to-text/docs/migration](https://docs.cloud.google.com/speech-to-text/docs/migration)
- [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries)
- [https://docs.cloud.google.com/speech-to-text/docs/apis](https://docs.cloud.google.com/speech-to-text/docs/apis)

## Supporting Pages

### "Transcribe speech to text by using the command line \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api)
- Source ID: `site-docs-root`
- Final score: 336
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the Speech-to-Text APIs.
- Enable the Speech-to-Text APIs.
- Replace /full/path/to/audio/file.wav with the path to the audio file you want to transcribe: echo "{ \"config\": { \"auto decoding config\": {}, \"language codes\": [\"en-US\"], \"model\": \"long\" }, \"content\": \" $( base64 -w 0 /full/path/to/audio/file.wav sed 's/+/-/g; s/\// /g' ) \" }" > /tmp/data.txt Use curl to make a recognize request: curl -X POST -H "Content-Type: application/json; charset=utf-8" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -d @/tmp/data.txt \ https://speech.googleapis.com/v2/projects/ PROJECT ID /locations/global/recognizers/ :recognize Note: To pass a filename to curl , you use the -d option (for "data") and precede the filename with an @ sign.
- You should see a response similar to the following: { "results" : [ { "alternatives" : [ { "transcript" : "how old is the Brooklyn Bridge" , "confidence" : 0.98267895 } ] } ] } You sent your first request to Speech-to-Text.

### "Migrate to the latest version of Cloud Speech-to-Text API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/migration](https://docs.cloud.google.com/speech-to-text/docs/migration)
- Source ID: `site-docs-root`
- Final score: 326
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrating in the API Similar to Cloud STT V1, to transcribe audio , you need to create a RecognitionConfig by selecting the language of your audio and the recognition model of your choice: Note: The difference between the V1 and V2 versions of the Cloud Speech-to-Text API in the definition of RecognitionConfig message is the addition of the AutoDetectDecodingConfig message, which automatically detects the audio specifications.
- Home Documentation AI and ML Cloud Speech-to-Text Send feedback Migrate to the latest version of Cloud Speech-to-Text API Stay organized with collections Save and categorize content based on your preferences.
- Cloud Speech-to-Text API V2 brings the latest Google Cloud API design for customers to meet enterprise security and regulatory requirements out of the box.
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/global/recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response If needed, select a region in which you want to use the Cloud Speech-to-Text API, and check the language and model availability in that region: Python import os from google.api core.client options import ClientOptions from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def change speech v2 location ( audio file : str , location : str ) - > cloud speech .

### "Transcribe speech to text by using client libraries \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries)
- Source ID: `site-docs-root`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the Speech-to-Text APIs.
- Enable the Speech-to-Text APIs.
- Enable the APIs Make sure that you have the following role or roles on the project: Cloud Speech Administrator Check for the roles In the Google Cloud console, go to the IAM page.
- Enable the APIs Make sure that you have the following role or roles on the project: Cloud Speech Administrator Check for the roles In the Google Cloud console, go to the IAM page.

### APIs and references \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/apis](https://docs.cloud.google.com/speech-to-text/docs/apis)
- Source ID: `site-api-reference`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Speech REST API REST API Reference. (Non-streaming JSON.) Cloud Speech RPC API gRPC API Reference. (Streaming and non-streaming Proto3.) Language support The list of languages supported by Cloud Speech-to-Text.
- Home Documentation AI and ML Cloud Speech-to-Text Reference Send feedback APIs and references Stay organized with collections Save and categorize content based on your preferences.
- Cloud Speech-to-Text On-Prem API The Cloud Speech-to-Text On-Prem solution.
- Supported class tokens The list of class tokens supported for speech adaptation, by language.

