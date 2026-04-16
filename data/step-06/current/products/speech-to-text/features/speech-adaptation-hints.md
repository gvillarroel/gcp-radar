---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:12.001Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Speech adaptation hints"
feature_slug: "speech-adaptation-hints"
latest_feature_date: "2019-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig"
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3"
  - "https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationClient"
keywords:
  - "speech"
  - "adaptation"
  - "hints"
  - "to"
  - "text"
  - "now"
  - "supports"
  - "by"
---

# Speech adaptation hints

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Cloud Speech-to-Text now supports speech adaptation by allowing users to supply hints that influence speech recognition.

## Extended Definition

Cloud Speech-to-Text now supports speech adaptation by allowing users to supply hints that influence speech recognition.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)
- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- [https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationAsyncClient](https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationClient](https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationClient)

## Supporting Pages

### RecognitionConfig \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)
- Source ID: `site-api-reference`
- Final score: 269
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "encoding" : enum ( AudioEncoding ) , "sampleRateHertz" : integer , "audioChannelCount" : integer , "enableSeparateRecognitionPerChannel" : boolean , "languageCode" : string , "alternativeLanguageCodes" : [ string ] , "maxAlternatives" : integer , "profanityFilter" : boolean , "adaptation" : { object ( SpeechAdaptation ) } , "transcriptNormalization" : { object ( TranscriptNormalization ) } , "speechContexts" : [ { object ( SpeechContext ) } ] , "enableWordTimeOffsets" : boolean , "enableWordConfidence" : boolean , "enableAutomaticPunctuation" : boolean , "enableSpokenPunctuation" : boolean , "enableSpokenEmojis" : boolean , "diarizationConfig" : { object ( SpeakerDiarizationConfig ) } , "metadata" : { object ( RecognitionMetadata ) } , "model" : string , "useEnhanced" : boolean } Fields encoding enum ( AudioEncoding ) Encoding of audio data sent in all RecognitionAudio messages.
- JSON representation AudioEncoding SpeechAdaptation JSON representation ABNFGrammar JSON representation TranscriptNormalization JSON representation Entry JSON representation SpeechContext JSON representation SpeakerDiarizationConfig JSON representation RecognitionMetadata JSON representation InteractionType MicrophoneDistance OriginalMediaType RecordingDeviceType Provides information to the recognizer that specifies how to process the request.
- SpeechContext Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
- Ideally the audio is high-fidelity, recorded at a 16khz or greater sampling rate. medical conversation Best for audio that originated from a conversation between a medical provider and patient. medical dictation Best for audio that originated from dictation notes by a medical provider. useEnhanced boolean Set to true to use an enhanced model for speech recognition.

### "Chirp 3 Transcription: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: N/A

Evidence snippets:
- Model Model identifier Chirp 3 chirp 3 API methods Not all recognition methods support the same language availability sets, because Chirp 3 is available in the Speech-to-Text API V2, it supports the following recognition methods: API version API method Support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Supported V2 Speech.Recognize (good for audio shorter than one minute) Supported V2 Speech.BatchRecognize (good for long audio 1 minute to 1 hour in general, but up to 20 minutes with word-level timestamp enabled) Supported Note: You can always find the latest list of supported locales and features for each transcription model, using the locations API as explained here.
- Example: "resources/audio.wav" Returns: cloud speech.RecognizeResponse: The response from the Speech-to-Text API V2 containing the transcription results. """ Instantiates a client client = SpeechClient ( client options = ClientOptions ( api endpoint = f " { REGION } -speech.googleapis.com" , ) ) Reads a file as bytes with open ( audio file , "rb" ) as f : content = f . read () In practice, stream should be a generator yielding chunks of audio data chunk length = len ( content ) // 5 stream = [ content [ start : start + chunk length ] for start in range ( 0 , len ( content ), chunk length ) ] audio requests = ( cloud speech .
- But strictly use the '12/23/1939' format." Returns: cloud speech.RecognizeResponse: The response from the Speech-to-Text API containing the transcription results. """ Instantiates a client client = SpeechClient ( client options = ClientOptions ( api endpoint = f " { REGION } -speech.googleapis.com" , ) ) Reads a file as bytes with open ( audio file , "rb" ) as f : audio content = f . read () config = cloud speech .
- Example: "resources/audio.wav" Returns: cloud speech.RecognizeResponse: The response from the Speech-to-Text API containing the transcription results. """ Instantiates a client client = SpeechClient ( client options = ClientOptions ( api endpoint = f " { REGION } -speech.googleapis.com" , ) ) Reads a file as bytes with open ( audio file , "rb" ) as f : audio content = f . read () config = cloud speech .

### "Class AdaptationAsyncClient (2.38.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationAsyncClient](https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationAsyncClient)
- Source ID: `site-python-reference`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Format: projects/{project}/locations/{location}/customClasses/{custom class} Speech-to-Text supports three locations: global , us (US North America), and eu (Europe).
- Returns Type Description google.cloud.speech v1.services.adaptation.pagers.ListCustomClassesAsyncPager Message returned to the client by the ListCustomClasses method.
- Format: projects/{project}/locations/{location}/customClasses/{custom class} Speech-to-Text supports three locations: global , us (US North America), and eu (Europe).
- Format: projects/{project}/locations/{location}/phraseSets/{phrase set} Speech-to-Text supports three locations: global , us (US North America), and eu (Europe).

### "Class AdaptationClient (2.38.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationClient](https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationClient)
- Source ID: `site-python-reference`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Format: projects/{project}/locations/{location}/customClasses/{custom class} Speech-to-Text supports three locations: global , us (US North America), and eu (Europe).
- Format: projects/{project}/locations/{location}/customClasses/{custom class} Speech-to-Text supports three locations: global , us (US North America), and eu (Europe).
- Format: projects/{project}/locations/{location}/phraseSets/{phrase set} Speech-to-Text supports three locations: global , us (US North America), and eu (Europe).
- Returns Type Description google.cloud.speech v1.services.adaptation.pagers.ListCustomClassesPager Message returned to the client by the ListCustomClasses method.

