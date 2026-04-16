---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:12.001Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Endless streaming transcription"
feature_slug: "endless-streaming-transcription"
latest_feature_date: "2019-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3"
  - "https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api"
keywords:
  - "endless"
  - "streaming"
  - "transcription"
  - "speech"
  - "to"
  - "text"
  - "provides"
  - "for"
---

# Endless streaming transcription

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Cloud Speech-to-Text provides endless streaming support for transcribing an infinite audio stream.

## Extended Definition

Cloud Speech-to-Text provides endless streaming support for transcribing an infinite audio stream.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api)

## Supporting Pages

### "Chirp 3 Transcription: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- Model Model identifier Chirp 3 chirp 3 API methods Not all recognition methods support the same language availability sets, because Chirp 3 is available in the Speech-to-Text API V2, it supports the following recognition methods: API version API method Support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Supported V2 Speech.Recognize (good for audio shorter than one minute) Supported V2 Speech.BatchRecognize (good for long audio 1 minute to 1 hour in general, but up to 20 minutes with word-level timestamp enabled) Supported Note: You can always find the latest list of supported locales and features for each transcription model, using the locations API as explained here.
- RecognitionConfig , audio : list ) - > list : yield config yield from audio Transcribes the audio into text responses iterator = client . streaming recognize ( requests = requests ( config request , audio requests ) ) responses = [] for response in responses iterator : responses . append ( response ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return responses Perform synchronous speech recognition Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech from google.api core.client options import ClientOptions PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) REGION = "us" def transcribe sync chirp3 ( audio file : str ) - > cloud speech .
- Example: "resources/audio.wav" Returns: cloud speech.RecognizeResponse: The response from the Speech-to-Text API V2 containing the transcription results. """ Instantiates a client client = SpeechClient ( client options = ClientOptions ( api endpoint = f " { REGION } -speech.googleapis.com" , ) ) Reads a file as bytes with open ( audio file , "rb" ) as f : content = f . read () In practice, stream should be a generator yielding chunks of audio data chunk length = len ( content ) // 5 stream = [ content [ start : start + chunk length ] for start in range ( 0 , len ( content ), chunk length ) ] audio requests = ( cloud speech .
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/ { REGION } /recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response Adjust endpointing sensitivity The Cloud Speech-to-Text API lets you control the trade-off between latency and accuracy for streaming and real-time applications for Chirp 3.

### "Transcribe speech to text by using client libraries \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( SpeechClient speechClient = SpeechClient . create ()) { Path path = Paths . get ( filePath ); byte [] data = Files . readAllBytes ( path ); ByteString audioBytes = ByteString . copyFrom ( data ); String parent = String . format ( "projects/%s/locations/global" , projectId ); // First, create a recognizer Recognizer recognizer = Recognizer . newBuilder () . setModel ( "latest long" ) . addLanguageCodes ( "en-US" ) . build (); CreateRecognizerRequest createRecognizerRequest = CreateRecognizerRequest . newBuilder () . setParent ( parent ) . setRecognizerId ( recognizerId ) . setRecognizer ( recognizer ) . build (); OperationFuture<Recognizer , OperationMetadata > operationFuture = speechClient . createRecognizerAsync ( createRecognizerRequest ); recognizer = operationFuture . get (); // Next, create the transcription request RecognitionConfig recognitionConfig = RecognitionConfig . newBuilder () . setAutoDecodingConfig ( AutoDetectDecodingConfig . newBuilder (). build ()) . build (); RecognizeRequest request = RecognizeRequest . newBuilder () . setConfig ( recognitionConfig ) . setRecognizer ( recognizer . getName ()) . setContent ( audioBytes ) . build (); RecognizeResponse response = speechClient . recognize ( request ); List<SpeechRecognitionResult> results = response . getResultsList (); for ( SpeechRecognitionResult result : results ) { // There can be several alternative transcripts for a given chunk of speech.
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/global/recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response You sent your first request to Speech-to-Text.
- Make an audio transcription request Use the following code to send a Recognize request to the Speech-to-Text API.
- You can send audio data to the Speech-to-Text API, which then returns a text transcription of that audio file.

### "Overview of custom speech models \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: N/A

Evidence snippets:
- Inference : You will be charged for the number of streamed seconds of audio for transcription, in alignment with the general Cloud Speech-to-Text billing.
- Supported models, languages and regions Custom Speech-to-Text models support the following combinations of models and languages and locales for training: Language BCP-47 Base model German (Germany) de-DE latest long English (Australia) en-AU latest long English (United Kingdom) en-GB latest long English (India) en-IN latest long English (United States) en-US latest long Spanish (United States) es-US latest long Spanish (Spain) es-ES latest long French (Canada) fr-CA latest long French (France) fr-FR latest long Hindi (India) hi-IN latest long Italian (Italy) it-IT latest long Japanese (Japan) ja-JP latest long Korean (South Korea) ko-KR latest long Dutch (Netherlands) nl-NL latest long Portuguese (Brazil) pt-BR latest long Portuguese (Portugal) pt-PT latest long Additionally, to comply with your data residency requirements we offer training and deployment hardware in different regions.
- Dedicated hardware is supported in the following combinations of models and regions: Base model Google Cloud Region Supported tasks latest long us-east1 Training and Deployment latest long europe-west4 Training and Deployment Quota For Custom Speech-to-Text model training, each Google Cloud project should have enough default quota to run multiple training jobs concurrently and is intended to meet the needs of most projects without additional adjustments.
- Following a successful training, you can deploy a Custom Speech-to-Text model in an endpoint with one click, and use it directly through the Cloud Cloud Speech-to-Text V2 API for inference and benchmarking.

### "Transcribe speech to text by using the command line \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-api)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- To initialize the gcloud CLI, run the following command: gcloud init Make an audio transcription request Use the following code sample to send a recognize REST request to the Speech-to-Text API.
- You can send audio data to the Speech-to-Text API, which then returns a text transcription of that audio file.
- Replace /full/path/to/audio/file.wav with the path to the audio file you want to transcribe: echo "{ \"config\": { \"auto decoding config\": {}, \"language codes\": [\"en-US\"], \"model\": \"long\" }, \"content\": \" $( base64 -w 0 /full/path/to/audio/file.wav sed 's/+/-/g; s/\// /g' ) \" }" > /tmp/data.txt Use curl to make a recognize request: curl -X POST -H "Content-Type: application/json; charset=utf-8" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -d @/tmp/data.txt \ https://speech.googleapis.com/v2/projects/ PROJECT ID /locations/global/recognizers/ :recognize Note: To pass a filename to curl , you use the -d option (for "data") and precede the filename with an @ sign.
- You should see a response similar to the following: { "results" : [ { "alternatives" : [ { "transcript" : "how old is the Brooklyn Bridge" , "confidence" : 0.98267895 } ] } ] } You sent your first request to Speech-to-Text.

