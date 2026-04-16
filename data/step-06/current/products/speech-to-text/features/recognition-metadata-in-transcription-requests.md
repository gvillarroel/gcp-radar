---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:12.007Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Recognition metadata in transcription requests"
feature_slug: "recognition-metadata-in-transcription-requests"
latest_feature_date: "2018-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries"
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3"
  - "https://docs.cloud.google.com/speech-to-text/docs/batch-recognize"
  - "https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig"
keywords:
  - "recognition"
  - "metadata"
  - "in"
  - "transcription"
  - "requests"
  - "speech"
  - "to"
  - "text"
---

# Recognition metadata in transcription requests

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Cloud Speech-to-Text now supports including additional audio source metadata in transcription requests to improve recognition results.

## Extended Definition

Cloud Speech-to-Text now supports including additional audio source metadata in transcription requests to improve recognition results.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries)
- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- [https://docs.cloud.google.com/speech-to-text/docs/batch-recognize](https://docs.cloud.google.com/speech-to-text/docs/batch-recognize)
- [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)

## Supporting Pages

### "Transcribe speech to text by using client libraries \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries)
- Source ID: `site-docs-root`
- Final score: 339
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( SpeechClient speechClient = SpeechClient . create ()) { Path path = Paths . get ( filePath ); byte [] data = Files . readAllBytes ( path ); ByteString audioBytes = ByteString . copyFrom ( data ); String parent = String . format ( "projects/%s/locations/global" , projectId ); // First, create a recognizer Recognizer recognizer = Recognizer . newBuilder () . setModel ( "latest long" ) . addLanguageCodes ( "en-US" ) . build (); CreateRecognizerRequest createRecognizerRequest = CreateRecognizerRequest . newBuilder () . setParent ( parent ) . setRecognizerId ( recognizerId ) . setRecognizer ( recognizer ) . build (); OperationFuture<Recognizer , OperationMetadata > operationFuture = speechClient . createRecognizerAsync ( createRecognizerRequest ); recognizer = operationFuture . get (); // Next, create the transcription request RecognitionConfig recognitionConfig = RecognitionConfig . newBuilder () . setAutoDecodingConfig ( AutoDetectDecodingConfig . newBuilder (). build ()) . build (); RecognizeRequest request = RecognizeRequest . newBuilder () . setConfig ( recognitionConfig ) . setRecognizer ( recognizer . getName ()) . setContent ( audioBytes ) . build (); RecognizeResponse response = speechClient . recognize ( request ); List<SpeechRecognitionResult> results = response . getResultsList (); for ( SpeechRecognitionResult result : results ) { // There can be several alternative transcripts for a given chunk of speech.
- This page shows you how to send a speech recognition request to Speech-to-Text in your favorite programming language using the Google Cloud Client Libraries.
- Make an audio transcription request Use the following code to send a Recognize request to the Speech-to-Text API.
- Speech-to-Text enables easy integration of Google speech recognition technologies into developer applications.

### "Chirp 3 Transcription: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- Source ID: `site-docs-root`
- Final score: 329
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RecognitionConfig , audio : list ) - > list : yield config yield from audio Transcribes the audio into text responses iterator = client . streaming recognize ( requests = requests ( config request , audio requests ) ) responses = [] for response in responses iterator : responses . append ( response ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return responses Perform synchronous speech recognition Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) REGION = "us" def transcribe sync chirp3 ( audio file : str ) - > cloud speech .
- Model Model identifier Chirp 3 chirp 3 API methods Not all recognition methods support the same language availability sets, because Chirp 3 is available in the Speech-to-Text API V2, it supports the following recognition methods: API version API method Support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Supported V2 Speech.Recognize (good for audio shorter than one minute) Supported V2 Speech.BatchRecognize (good for long audio 1 minute to 1 hour in general, but up to 20 minutes with word-level timestamp enabled) Supported Note: You can always find the latest list of supported locales and features for each transcription model, using the locations API as explained here.
- Example: "resources/audio.wav" Returns: cloud speech.RecognizeResponse: The response from the Speech-to-Text API V2 containing the transcription results. """ Instantiates a client client = SpeechClient ( client options = ClientOptions ( api endpoint = f " { REGION } -speech.googleapis.com" , ) ) Reads a file as bytes with open ( audio file , "rb" ) as f : content = f . read () In practice, stream should be a generator yielding chunks of audio data chunk length = len ( content ) // 5 stream = [ content [ start : start + chunk length ] for start in range ( 0 , len ( content ), chunk length ) ] audio requests = ( cloud speech .
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/ { REGION } /recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response Perform batch speech recognition Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) REGION = "us" def transcribe batch 3 ( audio uri : str , ) - > cloud speech .

### "Transcribe long audio files into text \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/batch-recognize](https://docs.cloud.google.com/speech-to-text/docs/batch-recognize)
- Source ID: `site-docs-root`
- Final score: 329
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- InlineOutputConfig (), ), ) Transcribes the audio into text operation = client . batch recognize ( request = request ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout = 120 ) for result in response . results [ audio uri ] . transcript . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response . results [ audio uri ] . transcript Perform batch recognition and write results to Cloud Storage Here is an example of performing batch speech recognition on an audio file in Cloud Storage and reading the transcription results from the output file in Cloud Storage.
- BatchRecognizeResults . from json ( results bytes , ignore unknown fields = True ) for result in batch recognize results . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return batch recognize results Perform batch recognition on multiple files Here is an example of performing batch speech recognition on multiple audio files in Cloud Storage and reading the transcription results from the output files in Cloud Storage: Python import os import re from typing import List from google.cloud import storage from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe batch multiple files v2 ( audio uris : List [ str ], gcs output path : str , ) - > cloud speech .
- Perform batch recognition with inline results Here is an example of performing batch speech recognition on an audio file in Cloud Storage and reading the transcription results inline from the response: Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe batch gcs input inline output v2 ( audio uri : str , ) - > cloud speech .
- This page demonstrates how to transcribe long audio files (longer than one minute) to text using the Speech-to-Text API and asynchronous speech recognition.

### RecognitionConfig \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)
- Source ID: `site-api-reference`
- Final score: 307
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "encoding" : enum ( AudioEncoding ) , "sampleRateHertz" : integer , "audioChannelCount" : integer , "enableSeparateRecognitionPerChannel" : boolean , "languageCode" : string , "alternativeLanguageCodes" : [ string ] , "maxAlternatives" : integer , "profanityFilter" : boolean , "adaptation" : { object ( SpeechAdaptation ) } , "transcriptNormalization" : { object ( TranscriptNormalization ) } , "speechContexts" : [ { object ( SpeechContext ) } ] , "enableWordTimeOffsets" : boolean , "enableWordConfidence" : boolean , "enableAutomaticPunctuation" : boolean , "enableSpokenPunctuation" : boolean , "enableSpokenEmojis" : boolean , "diarizationConfig" : { object ( SpeakerDiarizationConfig ) } , "metadata" : { object ( RecognitionMetadata ) } , "model" : string , "useEnhanced" : boolean } Fields encoding enum ( AudioEncoding ) Encoding of audio data sent in all RecognitionAudio messages.
- JSON representation AudioEncoding SpeechAdaptation JSON representation ABNFGrammar JSON representation TranscriptNormalization JSON representation Entry JSON representation SpeechContext JSON representation SpeakerDiarizationConfig JSON representation RecognitionMetadata JSON representation InteractionType MicrophoneDistance OriginalMediaType RecordingDeviceType Provides information to the recognizer that specifies how to process the request.
- For non-streaming requests, the diarization results will be provided only in the top alternative of the FINAL SpeechRecognitionResult. metadata object ( RecognitionMetadata ) Metadata regarding this request. model string Which model to select for the given request.
- JSON representation { "interactionType" : enum ( InteractionType ) , "industryNaicsCodeOfAudio" : integer , "microphoneDistance" : enum ( MicrophoneDistance ) , "originalMediaType" : enum ( OriginalMediaType ) , "recordingDeviceType" : enum ( RecordingDeviceType ) , "recordingDeviceName" : string , "originalMimeType" : string , "audioTopic" : string } Fields interactionType enum ( InteractionType ) The use case most closely describing the audio content to be recognized. industryNaicsCodeOfAudio integer ( uint32 format) The industry vertical to which this speech recognition request most closely applies.

