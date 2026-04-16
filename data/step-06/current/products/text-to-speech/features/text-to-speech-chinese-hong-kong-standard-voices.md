---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.689Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Text-to-Speech Chinese (Hong Kong) Standard voices"
feature_slug: "text-to-speech-chinese-hong-kong-standard-voices"
latest_feature_date: "2020-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types"
  - "https://docs.cloud.google.com/text-to-speech/docs/voices"
  - "https://docs.cloud.google.com/text-to-speech/docs/voice-types"
keywords:
  - "text"
  - "speech"
  - "chinese"
  - "hong"
  - "kong"
  - "standard"
  - "voices"
  - "added"
---

# Text-to-Speech Chinese (Hong Kong) Standard voices

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

Added four new Chinese (Hong Kong) voices to Text-to-Speech using Standard models.

## Extended Definition

Added four new Chinese (Hong Kong) voices to Text-to-Speech using Standard models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types](https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types)
- [https://docs.cloud.google.com/text-to-speech/docs/voices](https://docs.cloud.google.com/text-to-speech/docs/voices)
- [https://docs.cloud.google.com/text-to-speech/docs/voice-types](https://docs.cloud.google.com/text-to-speech/docs/voice-types)

## Supporting Pages

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/voices](https://docs.cloud.google.com/text-to-speech/docs/voices)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- Chinese (Hong Kong) Standard yue-HK yue-HK-Standard-A FEMALE Your browser doesn't support the audio element.
- Chinese (Hong Kong) Standard yue-HK yue-HK-Standard-C FEMALE Your browser doesn't support the audio element.
- Chinese (Hong Kong) Standard yue-HK yue-HK-Standard-B MALE Your browser doesn't support the audio element.

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types](https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- Chinese (Hong Kong) Standard yue-HK yue-HK-Standard-A FEMALE Your browser doesn't support the audio element.
- Chinese (Hong Kong) Standard yue-HK yue-HK-Standard-C FEMALE Your browser doesn't support the audio element.
- Chinese (Hong Kong) Standard yue-HK yue-HK-Standard-B MALE Your browser doesn't support the audio element.

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/voice-types](https://docs.cloud.google.com/text-to-speech/docs/voice-types)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- Chinese (Hong Kong) Standard yue-HK yue-HK-Standard-A FEMALE Your browser doesn't support the audio element.
- Chinese (Hong Kong) Standard yue-HK yue-HK-Standard-C FEMALE Your browser doesn't support the audio element.
- Chinese (Hong Kong) Standard yue-HK yue-HK-Standard-B MALE Your browser doesn't support the audio element.

