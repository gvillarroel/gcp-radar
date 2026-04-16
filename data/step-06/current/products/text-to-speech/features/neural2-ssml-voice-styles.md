---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.674Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Neural2 SSML voice styles"
feature_slug: "neural2-ssml-voice-styles"
latest_feature_date: "2023-10-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/text-to-speech/docs/ssml"
  - "https://docs.cloud.google.com/text-to-speech/docs/ssml-beta"
  - "https://docs.cloud.google.com/text-to-speech/docs/voices"
keywords:
  - "neural2"
  - "ssml"
  - "voice"
  - "styles"
  - "voices"
  - "now"
  - "style"
  - "control"
---

# Neural2 SSML voice styles

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

Neural2 voices now support style control through SSML, including style-enabled voices such as en-us-Neural2-F and en-us-Neural2-J.

## Extended Definition

Neural2 voices now support style control through SSML, including style-enabled voices such as en-us-Neural2-F and en-us-Neural2-J.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/ssml](https://docs.cloud.google.com/text-to-speech/docs/ssml)
- [https://docs.cloud.google.com/text-to-speech/docs/ssml-beta](https://docs.cloud.google.com/text-to-speech/docs/ssml-beta)
- [https://docs.cloud.google.com/text-to-speech/docs/voices](https://docs.cloud.google.com/text-to-speech/docs/voices)

## Supporting Pages

### "Speech Synthesis Markup Language (SSML) \_|\_ Cloud Text-to-Speech \_|\_\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/ssml](https://docs.cloud.google.com/text-to-speech/docs/ssml)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following voices can speak in multiple styles: en-US-Neural2-F en-US-Neural2-J Use the <google:style> tag to control what style to use.
- You can use the <voice> tag to read SSML in multiple voices, but you must set the VoiceSelectionParams name to a compatible voice: Requested voice type Supported voice type in <voice> tag Neural2 Studio Wavenet News Standard Neural2 ✔ ✔ ✔ Studio ✔ ✔ ✔ Wavenet ✔ ✔ ✔ Standard ✔ ✔ ✔ News ✔ ✔ ✔ Support for SSML elements The following sections describe the SSML elements and options that can be used in your Actions.
- See the Text-to-Speech SSML tutorial to see a code sample demonstrating use of the VoiceSelectionParams object.
- All words will be synthesized in this voice except for "qu'est-ce qui t'amène ici", which will be verbalized in French using a female voice instead of the default language (English) and gender (male). <speak>And then she asked, <voice language="fr-FR" gender="female">qu'est-ce qui t'amène ici</voice><break time="250ms"/> in her sweet and gentle voice.</speak> Alternatively, you can use a <voice> tag to specify an individual voice (the voice name on the supported voices page ) rather than specifying a language and/or gender : <speak>The dog is friendly<voice name="fr-CA-Wavenet-B">mais la chat est mignon</voice><break time="250ms"/> said a pet shop owner</speak> Note: When a <voice> tag specifies a voice name, the type of voice must be compatible with the requested voice name .

### "Speech Synthesis Markup Language (SSML) \_|\_ Cloud Text-to-Speech \_|\_\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/ssml-beta](https://docs.cloud.google.com/text-to-speech/docs/ssml-beta)
- Source ID: `site-docs-reference-2`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following voices can speak in multiple styles: en-US-Neural2-F en-US-Neural2-J Use the <google:style> tag to control what style to use.
- You can use the <voice> tag to read SSML in multiple voices, but you must set the VoiceSelectionParams name to a compatible voice: Requested voice type Supported voice type in <voice> tag Neural2 Studio Wavenet News Standard Neural2 ✔ ✔ ✔ Studio ✔ ✔ ✔ Wavenet ✔ ✔ ✔ Standard ✔ ✔ ✔ News ✔ ✔ ✔ Support for SSML elements The following sections describe the SSML elements and options that can be used in your Actions.
- See the Text-to-Speech SSML tutorial to see a code sample demonstrating use of the VoiceSelectionParams object.
- All words will be synthesized in this voice except for "qu'est-ce qui t'amène ici", which will be verbalized in French using a female voice instead of the default language (English) and gender (male). <speak>And then she asked, <voice language="fr-FR" gender="female">qu'est-ce qui t'amène ici</voice><break time="250ms"/> in her sweet and gentle voice.</speak> Alternatively, you can use a <voice> tag to specify an individual voice (the voice name on the supported voices page ) rather than specifying a language and/or gender : <speak>The dog is friendly<voice name="fr-CA-Wavenet-B">mais la chat est mignon</voice><break time="250ms"/> said a pet shop owner</speak> Note: When a <voice> tag specifies a voice name, the type of voice must be compatible with the requested voice name .

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/voices](https://docs.cloud.google.com/text-to-speech/docs/voices)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These voices are in 30 distinct styles across many languages , which are suitable for real-time and standard applications.
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- TextToSpeechClient (); const [ result ] = await client . listVoices ({}); const voices = result . voices ; console . log ( 'Voices:' ); voices . forEach ( voice = > { console . log ( Name: ${ voice . name } ); console . log ( SSML Voice Gender: ${ voice . ssmlGender } ); console . log ( Natural Sample Rate Hertz: ${ voice . naturalSampleRateHertz } ); console . log ( ' Supported languages:' ); voice . languageCodes . forEach ( languageCode = > { console . log ( ${ languageCode } ); }); }); Python To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- GA SSML - Pricing Details Chirp 3: HD voices Chirp 3: HD voices are driven by technology that captures nuances in human intonation, which make conversations more engaging.

