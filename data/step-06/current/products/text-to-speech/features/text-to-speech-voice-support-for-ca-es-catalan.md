---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.682Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Text-to-Speech voice support for ca-ES (Catalan"
feature_slug: "text-to-speech-voice-support-for-ca-es-catalan"
latest_feature_date: "2021-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/text-to-speech/docs/chirp3-instant-custom-voice"
  - "https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd"
  - "https://docs.cloud.google.com/text-to-speech/docs/voices"
keywords:
  - "text"
  - "speech"
  - "voice"
  - "ca"
  - "es"
  - "catalan"
  - "added"
  - "locale"
---

# Text-to-Speech voice support for ca-ES (Catalan

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

Text-to-Speech added a supported voice for the ca-ES locale (Catalan, Spain).

## Extended Definition

Text-to-Speech added a supported voice for the ca-ES locale (Catalan, Spain).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/chirp3-instant-custom-voice](https://docs.cloud.google.com/text-to-speech/docs/chirp3-instant-custom-voice)
- [https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd](https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd)
- [https://docs.cloud.google.com/text-to-speech/docs/voices](https://docs.cloud.google.com/text-to-speech/docs/voices)

## Supporting Pages

### "Chirp 3: Instant Custom Voice \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/chirp3-instant-custom-voice](https://docs.cloud.google.com/text-to-speech/docs/chirp3-instant-custom-voice)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- JSONDecodeError as e : print ( f "Error decoding JSON response: { e } " ) except Exception as e : print ( f "An unexpected error occurred: { e } " ) Synthesize with an instant custom voice using the REST API Use the voice cloning key to synthesize audio using the REST API. import requests , os , json , base64 from IPython.display import Audio , display def synthesize text with cloned voice ( access token , project id , voice key , text ): url = "https://texttospeech.googleapis.com/v1beta1/text:synthesize" request body = { "input" : { "text" : text }, "voice" : { "language code" : "en-US" , "voice clone" : { "voice cloning key" : voice key , } }, "audioConfig" : { Supported audio encoding values are LINEAR16, PCM, MP3, and M4A. "audioEncoding" : "LINEAR16" , } } try : headers = { "Authorization" : f "Bearer { access token } " , "x-goog-user-project" : project id , "Content-Type" : "application/json; charset=utf-8" } response = requests . post ( url , headers = headers , json = request body ) response . raise for status () response json = response . json () audio content = response json . get ( "audioContent" ) if audio content : display ( Audio ( base64 . b64decode ( audio content ), rate = 24000 )) else : print ( "Error: Audio content not found in the response." ) print ( response json ) except requests . exceptions .
- You must use the provided consent statement script for your chosen language. import requests , os , json def create instant custom voice key ( access token , project id , reference audio bytes , consent audio bytes ): url = "https://texttospeech.googleapis.com/v1beta1/voices:generateVoiceCloningKey" request body = { "reference audio" : { Supported audio encoding values are LINEAR16, PCM, MP3, and M4A. "audio config" : { "audio encoding" : "LINEAR16" }, "content" : reference audio bytes , }, "voice talent consent" : { Supported audio encoding values are LINEAR16, PCM, MP3, and M4A. "audio config" : { "audio encoding" : "LINEAR16" }, "content" : consent audio bytes , }, "consent script" : "I am the owner of this voice and I consent to Google using this voice to create a synthetic voice model." , "language code" : "en-US" , } try : headers = { "Authorization" : f "Bearer { access token } " , "x-goog-user-project" : project id , "Content-Type" : "application/json; charset=utf-8" , } response = requests . post ( url , headers = headers , json = request body ) response . raise for status () response json = response . json () return response json . get ( "voiceCloningKey" ) except requests . exceptions .
- TextToSpeechClient () with open ( 'voice cloning key.txt' , 'r' ) as f : key = f . read () perform voice cloning with simulated streaming ( voice cloning key = key , simulated streamed text = [ 'Hello world!' , 'This is the second text chunk.' , 'This simulates streaming text for synthesis.' , ], language code = 'en-US' , synthesis output path = 'streaming output.wav' , tts client = client , ) Use Chirp 3: HD voice controls Instant Custom Voice supports the same pace control, pause control, and custom pronunciation features that Chirp 3: HD voices supports.
- TextToSpeechClient () with open ( 'voice cloning key.txt' , 'r' ) as f : key = f . read () perform voice cloning ( voice cloning key = key , transcript = 'Hello world!' , language code = 'en-US' , synthesis output path = '/tmp/output.wav' , tts client = client , ) Streaming synthesize with an instant custom voice using the Python client library This example uses the Python client library to perform instant custom voice streaming synthesis, using a voice cloning key saved to voice cloning key.txt .

### Chirp 3: HD voices \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd](https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Sample SynthesizeSpeechRequest using custom pronunciations: { "audio config" : { "audio encoding" : "LINEAR16" , }, "input" : { "text" : "There is a dog in the boat" , "custom pronunciations" : { "phrase" : "dog" , "phonetic encoding" : "PHONETIC ENCODING X SAMPA" , "pronunciation" : "\"k{t" , } }, "voice" : { "language code" : "en-US" , "name" : "en-us-Chirp3-HD-Leda" , } } Sample StreamingSynthesizeConfig using custom pronunciations: { "streaming audio config" : { "audio encoding" : "LINEAR16" , }, "voice" : { "language code" : "en-US" , "name" : "en-us-Chirp3-HD-Leda" , } "custom pronunciations" : { "phrase" : "dog" , "phonetic encoding" : "PHONETIC ENCODING X SAMPA" , "pronunciation" : "\"k{t" , } } Custom pronunciations audio samples: Custom pronunciations applied Output None Your browser doesn't support the audio element. "dog" pronounced as ""k{t" Your browser doesn't support the audio element.
- MP3 ) response = client . synthesize speech ( input = input text , voice = voice , audio config = audio config , ) The response's audio content is binary. with open ( "output.mp3" , "wb" ) as out : out . write ( response . audio content ) print ( 'Audio content written to file "output.mp3"' ) Scripting and prompting tips Creating engaging and natural-sounding audio from text requires understanding the nuances of spoken language and translating them into script form.
- Home Documentation AI and ML Cloud Text-to-Speech Guides Send feedback Chirp 3: HD voices Stay organized with collections Save and categorize content based on your preferences.
- Try Chirp 3: HD voices in Vertex AI Studio Try in Colab View notebook on GitHub Cloud TTS Chirp 3: HD voices represent the latest generation of Text-to-Speech technology.

### "Supported voices and languages \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/voices](https://docs.cloud.google.com/text-to-speech/docs/voices)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Replace PROJECT ID with your project ID. curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ "https://texttospeech.googleapis.com/v1/voices" The Cloud Text-to-Speech API returns a JSON-formatted result that looks similar to the following: { "voices": [ { "languageCodes": [ "es-ES" ], "name": "es-ES-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, { "languageCodes": [ "ja-JP" ], "name": "ja-JP-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 22050 }, { "languageCodes": [ "pt-BR" ], "name": "pt-BR-Standard-A", "ssmlGender": "FEMALE", "naturalSampleRateHertz": 24000 }, ... ] } Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- For more information, see Set up authentication for a local development environment . / Demonstrates using the Text to Speech client to list the client's supported voices. @throws Exception on TextToSpeechClient Errors. / public static List<Voice> listAllSupportedVoices () throws Exception { // Instantiates a client try ( TextToSpeechClient textToSpeechClient = TextToSpeechClient . create ()) { // Builds the text to speech list voices request ListVoicesRequest request = ListVoicesRequest . getDefaultInstance (); // Performs the list voices request ListVoicesResponse response = textToSpeechClient . listVoices ( request ); List<Voice> voices = response . getVoicesList (); for ( Voice voice : voices ) { // Display the voice's name.
- TextToSpeechClient (); const [ result ] = await client . listVoices ({}); const voices = result . voices ; console . log ( 'Voices:' ); voices . forEach ( voice = > { console . log ( Name: ${ voice . name } ); console . log ( SSML Voice Gender: ${ voice . ssmlGender } ); console . log ( Natural Sample Rate Hertz: ${ voice . naturalSampleRateHertz } ); console . log ( ' Supported languages:' ); voice . languageCodes . forEach ( languageCode = > { console . log ( ${ languageCode } ); }); }); Python To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- For more information, see Set up authentication for a local development environment . def list voices (): """Lists the available voices.""" from google.cloud import texttospeech client = texttospeech .

