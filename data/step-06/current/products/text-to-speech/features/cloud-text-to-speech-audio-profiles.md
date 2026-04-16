---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.690Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Cloud Text-to-Speech audio profiles"
feature_slug: "cloud-text-to-speech-audio-profiles"
latest_feature_date: "2019-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/text-to-speech/docs/audio-profiles"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioConfig"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioConfig.Builder"
keywords:
  - "text"
  - "speech"
  - "audio"
  - "profiles"
  - "introduced"
  - "availability"
  - "so"
  - "applications"
---

# Cloud Text-to-Speech audio profiles

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

Cloud Text-to-Speech introduced general availability of audio profiles so applications can optimize generated speech for specific playback hardware such as headphones and car stereos.

## Extended Definition

Cloud Text-to-Speech introduced general availability of audio profiles so applications can optimize generated speech for specific playback hardware such as headphones and car stereos.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/audio-profiles](https://docs.cloud.google.com/text-to-speech/docs/audio-profiles)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioConfig](https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioConfig)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioConfig.Builder)

## Supporting Pages

### "Use device profiles for generated audio \_|\_ Cloud Text-to-Speech \_|\_\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/audio-profiles](https://docs.cloud.google.com/text-to-speech/docs/audio-profiles)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / Demonstrates using the Text to Speech client with audio profiles to synthesize text or ssml @param text the raw text to be synthesized. (e.g., "Hello there!") @param effectsProfile audio profile to be used for synthesis. (e.g., "telephony-class-application") @throws Exception on TextToSpeechClient Errors. / public static void synthesizeTextWithAudioProfile ( String text , String effectsProfile ) throws Exception { // Instantiates a client try ( TextToSpeechClient textToSpeechClient = TextToSpeechClient . create ()) { // Set the text input to be synthesized SynthesisInput input = SynthesisInput . newBuilder (). setText ( text ). build (); // Build the voice request VoiceSelectionParams voice = VoiceSelectionParams . newBuilder () . setLanguageCode ( "en-US" ) // languageCode = "en us" . setSsmlGender ( SsmlVoiceGender .
- TextToSpeechClient (); async function synthesizeWithEffectsProfile () { // Add one or more effects profiles to array. // Refer to documentation for more details: // https://cloud.google.com/text-to-speech/docs/audio-profiles const effectsProfileId = [ 'telephony-class-application' ]; const request = { input : { text : text }, voice : { languageCode : languageCode , ssmlGender : ssmlGender }, audioConfig : { audioEncoding : 'MP3' , effectsProfileId : effectsProfileId }, }; const [ response ] = await client . synthesizeSpeech ( request ); const writeFile = util . promisify ( fs . writeFile ); await writeFile ( outputFile , response . audioContent , 'binary' ); console . log ( Audio content written to file: ${ outputFile } ); } Python To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- The following example shows how to send a request to the text:synthesize endpoint. curl \ -H "Authorization: Bearer " $( gcloud auth print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ --data "{ 'input':{ 'text':'This is a sentence that helps test how audio profiles can change the way Cloud Text-to-Speech sounds.' }, 'voice':{ 'languageCode':'en-us', }, 'audioConfig':{ 'audioEncoding':'LINEAR16', 'effectsProfileId': ['telephony-class-application'] } }" "https://texttospeech.googleapis.com/v1beta1/text:synthesize" > audio-profile.txt If the request is successful, the Cloud Text-to-Speech API returns the synthesized audio as base64-encoded data contained in the JSON output.
- The JSON output in the audio-profiles.txt file looks like the following: { "audioContent" : "//NExAASCCIIAAhEAGAAEMW4kAYPnwwIKw/BBTpwTvB+IAxIfghUfW.." } To decode the results from the Cloud Text-to-Speech API as an MP3 audio file, run the following command from the same directory as the audio-profiles.txt file. sed 's audioContent ' < audio-profile.txt > tmp-output.txt && \ tr -d '\n ":{}' < tmp-output.txt > tmp-output-2.txt && \ base64 tmp-output-2.txt --decode > audio-profile.wav && \ rm tmp-output .txt Go To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .

### "Class AudioConfig (2.89.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioConfig](https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioConfig)
- Source ID: `site-java-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech.
- An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech.
- An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech.
- An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech.

### "Class AudioConfig.Builder (2.89.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioConfig.Builder)
- Source ID: `site-java-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech.
- An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech.
- An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech.
- An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech.

