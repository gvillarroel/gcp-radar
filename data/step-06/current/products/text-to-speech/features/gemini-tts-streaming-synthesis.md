---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.668Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Gemini TTS streaming synthesis"
feature_slug: "gemini-tts-streaming-synthesis"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/text-to-speech/docs/gemini-tts"
  - "https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers"
  - "https://docs.cloud.google.com/text-to-speech/docs/reference/rpc/google.cloud.texttospeech.v1"
keywords:
  - "gemini"
  - "tts"
  - "streaming"
  - "synthesis"
  - "now"
  - "supports"
  - "performing"
  - "speech"
---

# Gemini TTS streaming synthesis

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

Gemini TTS now supports performing speech synthesis on streaming requests.

## Extended Definition

Gemini TTS now supports performing speech synthesis on streaming requests.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/gemini-tts](https://docs.cloud.google.com/text-to-speech/docs/gemini-tts)
- [https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers](https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers)
- [https://docs.cloud.google.com/text-to-speech/docs/reference/rpc/google.cloud.texttospeech.v1](https://docs.cloud.google.com/text-to-speech/docs/reference/rpc/google.cloud.texttospeech.v1)

## Supporting Pages

### Gemini-TTS \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/text-to-speech/docs/gemini-tts](https://docs.cloud.google.com/text-to-speech/docs/gemini-tts)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "contents": { "role": "user", "parts": { "text": "Say the following as a conversation between friends: Sam: Hi Bob, how are you?\\nBob: I am doing well, and you?" } }, "generation config": { "speech config": { "language code": "en-in", "multi speaker voice config": { "speaker voice configs": [{ "speaker": "Sam", "voice config": { "prebuilt voice config": { "voice name": "Aoede" } } },{ "speaker": "Bob", "voice config": { "prebuilt voice config": { "voice name": "Algieba" } } }] } }, "temperature": 2.0, } }' \ https://aiplatform.googleapis.com/v1beta1/projects/ $PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.5-flash-tts:generateContent \ jq -r '.candidates[0].content.parts[0].inlineData.data' \ base64 -d ffmpeg -f s16le -ar 24k -ac 1 -i - output speech.wav Perform streaming multi-speaker synthesis In Vertex AI API, unidirectional streaming is supported, that is, the client sends a single request and receives a stream of responses.
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "contents": { "role": "user", "parts": { "text": "Say the following in a curious way: OK, so... tell me about this [uhm] AI thing." } }, "generation config": { "speech config": { "language code": "en-in", "voice config": { "prebuilt voice config": { "voice name": "kore" } } }, "temperature": 2.0, } }' \ https://aiplatform.googleapis.com/v1beta1/projects/ $PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.5-flash-tts:generateContent \ jq -r '.candidates[0].content.parts[0].inlineData.data' \ base64 -d ffmpeg -f s16le -ar 24k -ac 1 -i - output speech.wav Perform streaming single-speaker synthesis In Vertex AI API, unidirectional streaming is supported, that is, the client sends a single request and receives a stream of responses.
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following in a curious way", "text": "OK, so... tell me about this [uhm] AI thing." }, "voice": { "languageCode": "en-us", "name": "Kore", "model name": "gemini-2.5-flash-tts" }, "audioConfig": { "audioEncoding": "LINEAR16" } }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Perform streaming single-speaker synthesis Streaming synthesis is suitable for real-time applications where fast response is critical for the user experience.
- Available languages Gemini-TTS supports the following languages: Select launch stage GA Preview Language BCP-47 code Launch readiness Arabic (Egypt) ar-EG GA Bangla (Bangladesh) bn-BD GA Dutch (Netherlands) nl-NL GA English (India) en-IN GA English (United States) en-US GA French (France) fr-FR GA German (Germany) de-DE GA Hindi (India) hi-IN GA Indonesian (Indonesia) id-ID GA Italian (Italy) it-IT GA Japanese (Japan) ja-JP GA Korean (South Korea) ko-KR GA Marathi (India) mr-IN GA Polish (Poland) pl-PL GA Portuguese (Brazil) pt-BR GA Romanian (Romania) ro-RO GA Russian (Russia) ru-RU GA Spanish (Spain) es-ES GA Tamil (India) ta-IN GA Telugu (India) te-IN GA Thai (Thailand) th-TH GA Turkish (Turkey) tr-TR GA Ukrainian (Ukraine) uk-UA GA Vietnamese (Vietnam) vi-VN GA Afrikaans (South Africa) af-ZA Preview Albanian (Albania) sq-AL Preview Amharic (Ethiopia) am-ET Preview Arabic (World) ar-001 Preview Armenian (Armenia) hy-AM Preview Azerbaijani (Azerbaijan) az-AZ Preview Basque (Spain) eu-ES Preview Belarusian (Belarus) be-BY Preview Bulgarian (Bulgaria) bg-BG Preview Burmese (Myanmar) my-MM Preview Catalan (Spain) ca-ES Preview Cebuano (Philippines) ceb-PH Preview Chinese, Mandarin (China) cmn-CN Preview Chinese, Mandarin (Taiwan) cmn-tw Preview Croatian (Croatia) hr-HR Preview Czech (Czech Republic) cs-CZ Preview Danish (Denmark) da-DK Preview English (Australia) en-AU Preview English (United Kingdom) en-GB Preview Estonian (Estonia) et-EE Preview Filipino (Philippines) fil-PH Preview Finnish (Finland) fi-FI Preview French (Canada) fr-CA Preview Galician (Spain) gl-ES Preview Georgian (Georgia) ka-GE Preview Greek (Greece) el-GR Preview Gujarati (India) gu-IN Preview Haitian Creole (Haiti) ht-HT Preview Hebrew (Israel) he-IL Preview Hungarian (Hungary) hu-HU Preview Icelandic (Iceland) is-IS Preview Javanese (Java) jv-JV Preview Kannada (India) kn-IN Preview Konkani (India) kok-IN Preview Lao (Laos) lo-LA Preview Latin (Vatican City) la-VA Preview Latvian (Latvia) lv-LV Preview Lithuanian (Lithuania) lt-LT Preview Luxembourgish (Luxembourg) lb-LU Preview Macedonian (North Macedonia) mk-MK Preview Maithili (India) mai-IN Preview Malagasy (Madagascar) mg-MG Preview Malay (Malaysia) ms-MY Preview Malayalam (India) ml-IN Preview Mongolian (Mongolia) mn-MN Preview Nepali (Nepal) ne-NP Preview Norwegian, Bokmål (Norway) nb-NO Preview Norwegian, Nynorsk (Norway) nn-NO Preview Odia (India) or-IN Preview Pashto (Afghanistan) ps-AF Preview Persian (Iran) fa-IR Preview Portuguese (Portugal) pt-PT Preview Punjabi (India) pa-IN Preview Serbian (Serbia) sr-RS Preview Sindhi (India) sd-IN Preview Sinhala (Sri Lanka) si-LK Preview Slovak (Slovakia) sk-SK Preview Slovenian (Slovenia) sl-SI Preview Spanish (Latin America) es-419 Preview Spanish (Mexico) es-MX Preview Swahili (Kenya) sw-KE Preview Swedish (Sweden) sv-SE Preview Urdu (Pakistan) ur-PK Preview Available regions Gemini-TTS is available multiple regions, through Cloud Text-to-Speech API or Vertex AI API.

### Gemini-TTS \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers](https://docs.cloud.google.com/text-to-speech/docs/create-dialogue-with-multispeakers)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "contents": { "role": "user", "parts": { "text": "Say the following as a conversation between friends: Sam: Hi Bob, how are you?\\nBob: I am doing well, and you?" } }, "generation config": { "speech config": { "language code": "en-in", "multi speaker voice config": { "speaker voice configs": [{ "speaker": "Sam", "voice config": { "prebuilt voice config": { "voice name": "Aoede" } } },{ "speaker": "Bob", "voice config": { "prebuilt voice config": { "voice name": "Algieba" } } }] } }, "temperature": 2.0, } }' \ https://aiplatform.googleapis.com/v1beta1/projects/ $PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.5-flash-tts:generateContent \ jq -r '.candidates[0].content.parts[0].inlineData.data' \ base64 -d ffmpeg -f s16le -ar 24k -ac 1 -i - output speech.wav Perform streaming multi-speaker synthesis In Vertex AI API, unidirectional streaming is supported, that is, the client sends a single request and receives a stream of responses.
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "contents": { "role": "user", "parts": { "text": "Say the following in a curious way: OK, so... tell me about this [uhm] AI thing." } }, "generation config": { "speech config": { "language code": "en-in", "voice config": { "prebuilt voice config": { "voice name": "kore" } } }, "temperature": 2.0, } }' \ https://aiplatform.googleapis.com/v1beta1/projects/ $PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.5-flash-tts:generateContent \ jq -r '.candidates[0].content.parts[0].inlineData.data' \ base64 -d ffmpeg -f s16le -ar 24k -ac 1 -i - output speech.wav Perform streaming single-speaker synthesis In Vertex AI API, unidirectional streaming is supported, that is, the client sends a single request and receives a stream of responses.
- PROJECT ID = YOUR PROJECT ID curl -X POST \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "x-goog-user-project: $PROJECT ID " \ -H "Content-Type: application/json" \ -d '{ "input": { "prompt": "Say the following in a curious way", "text": "OK, so... tell me about this [uhm] AI thing." }, "voice": { "languageCode": "en-us", "name": "Kore", "model name": "gemini-2.5-flash-tts" }, "audioConfig": { "audioEncoding": "LINEAR16" } }' \ "https://texttospeech.googleapis.com/v1/text:synthesize" \ jq -r '.audioContent' base64 -d ffplay - -autoexit Perform streaming single-speaker synthesis Streaming synthesis is suitable for real-time applications where fast response is critical for the user experience.
- Available languages Gemini-TTS supports the following languages: Select launch stage GA Preview Language BCP-47 code Launch readiness Arabic (Egypt) ar-EG GA Bangla (Bangladesh) bn-BD GA Dutch (Netherlands) nl-NL GA English (India) en-IN GA English (United States) en-US GA French (France) fr-FR GA German (Germany) de-DE GA Hindi (India) hi-IN GA Indonesian (Indonesia) id-ID GA Italian (Italy) it-IT GA Japanese (Japan) ja-JP GA Korean (South Korea) ko-KR GA Marathi (India) mr-IN GA Polish (Poland) pl-PL GA Portuguese (Brazil) pt-BR GA Romanian (Romania) ro-RO GA Russian (Russia) ru-RU GA Spanish (Spain) es-ES GA Tamil (India) ta-IN GA Telugu (India) te-IN GA Thai (Thailand) th-TH GA Turkish (Turkey) tr-TR GA Ukrainian (Ukraine) uk-UA GA Vietnamese (Vietnam) vi-VN GA Afrikaans (South Africa) af-ZA Preview Albanian (Albania) sq-AL Preview Amharic (Ethiopia) am-ET Preview Arabic (World) ar-001 Preview Armenian (Armenia) hy-AM Preview Azerbaijani (Azerbaijan) az-AZ Preview Basque (Spain) eu-ES Preview Belarusian (Belarus) be-BY Preview Bulgarian (Bulgaria) bg-BG Preview Burmese (Myanmar) my-MM Preview Catalan (Spain) ca-ES Preview Cebuano (Philippines) ceb-PH Preview Chinese, Mandarin (China) cmn-CN Preview Chinese, Mandarin (Taiwan) cmn-tw Preview Croatian (Croatia) hr-HR Preview Czech (Czech Republic) cs-CZ Preview Danish (Denmark) da-DK Preview English (Australia) en-AU Preview English (United Kingdom) en-GB Preview Estonian (Estonia) et-EE Preview Filipino (Philippines) fil-PH Preview Finnish (Finland) fi-FI Preview French (Canada) fr-CA Preview Galician (Spain) gl-ES Preview Georgian (Georgia) ka-GE Preview Greek (Greece) el-GR Preview Gujarati (India) gu-IN Preview Haitian Creole (Haiti) ht-HT Preview Hebrew (Israel) he-IL Preview Hungarian (Hungary) hu-HU Preview Icelandic (Iceland) is-IS Preview Javanese (Java) jv-JV Preview Kannada (India) kn-IN Preview Konkani (India) kok-IN Preview Lao (Laos) lo-LA Preview Latin (Vatican City) la-VA Preview Latvian (Latvia) lv-LV Preview Lithuanian (Lithuania) lt-LT Preview Luxembourgish (Luxembourg) lb-LU Preview Macedonian (North Macedonia) mk-MK Preview Maithili (India) mai-IN Preview Malagasy (Madagascar) mg-MG Preview Malay (Malaysia) ms-MY Preview Malayalam (India) ml-IN Preview Mongolian (Mongolia) mn-MN Preview Nepali (Nepal) ne-NP Preview Norwegian, Bokmål (Norway) nb-NO Preview Norwegian, Nynorsk (Norway) nn-NO Preview Odia (India) or-IN Preview Pashto (Afghanistan) ps-AF Preview Persian (Iran) fa-IR Preview Portuguese (Portugal) pt-PT Preview Punjabi (India) pa-IN Preview Serbian (Serbia) sr-RS Preview Sindhi (India) sd-IN Preview Sinhala (Sri Lanka) si-LK Preview Slovak (Slovakia) sk-SK Preview Slovenian (Slovenia) sl-SI Preview Spanish (Latin America) es-419 Preview Spanish (Mexico) es-MX Preview Swahili (Kenya) sw-KE Preview Swedish (Sweden) sv-SE Preview Urdu (Pakistan) ur-PK Preview Available regions Gemini-TTS is available multiple regions, through Cloud Text-to-Speech API or Vertex AI API.

### "Package google.cloud.texttospeech.v1 \_|\_ Cloud Text-to-Speech \_|\_ Google\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/reference/rpc/google.cloud.texttospeech.v1](https://docs.cloud.google.com/text-to-speech/docs/reference/rpc/google.cloud.texttospeech.v1)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Index TextToSpeech (interface) TextToSpeechLongAudioSynthesize (interface) AdvancedVoiceOptions (message) AudioConfig (message) AudioEncoding (enum) CustomPronunciationParams (message) CustomPronunciationParams.PhoneticEncoding (enum) CustomPronunciations (message) CustomVoiceParams (message) CustomVoiceParams.ReportedUsage (enum) ListVoicesRequest (message) ListVoicesResponse (message) MultiSpeakerMarkup (message) MultiSpeakerMarkup.Turn (message) MultiSpeakerVoiceConfig (message) MultispeakerPrebuiltVoice (message) SsmlVoiceGender (enum) StreamingAudioConfig (message) StreamingSynthesisInput (message) StreamingSynthesizeConfig (message) StreamingSynthesizeRequest (message) StreamingSynthesizeResponse (message) SynthesisInput (message) SynthesizeLongAudioMetadata (message) SynthesizeLongAudioRequest (message) SynthesizeLongAudioResponse (message) SynthesizeSpeechRequest (message) SynthesizeSpeechResponse (message) Voice (message) VoiceCloneParams (message) VoiceSelectionParams (message) TextToSpeech Service that implements Google Cloud Text-to-Speech API.
- StreamingSynthesize rpc StreamingSynthesize( StreamingSynthesizeRequest ) returns ( StreamingSynthesizeResponse ) Performs bidirectional streaming speech synthesis: receives audio while sending text.
- The request to be sent, either a StreamingSynthesizeConfig or StreamingSynthesisInput. streaming request can be only one of the following: streaming config StreamingSynthesizeConfig StreamingSynthesizeConfig to be used in this streaming attempt.
- Only specified in the first message sent in a StreamingSynthesize call. input StreamingSynthesisInput Input to synthesize.

