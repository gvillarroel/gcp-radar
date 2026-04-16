---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:11.995Z"
product_name: "Speech-to-Text"
product_slug: "speech-to-text"
feature_name: "Speech-to-Text long-running transcription output to Cloud Storage"
feature_slug: "speech-to-text-long-running-transcription-output-to-cloud-storage"
latest_feature_date: "2021-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/speech-to-text/docs/batch-recognize"
  - "https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models"
  - "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3"
  - "https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries"
keywords:
  - "speech"
  - "to"
  - "text"
  - "long"
  - "running"
  - "transcription"
  - "output"
  - "storage"
---

# Speech-to-Text long-running transcription output to Cloud Storage

Product: Speech-to-Text
Coverage: MEDIUM

## Step 02 Summary

Speech-to-Text now allows long-running transcription results to be uploaded directly to a Cloud Storage bucket.

## Extended Definition

Speech-to-Text now allows long-running transcription results to be uploaded directly to a Cloud Storage bucket.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/speech-to-text/docs/batch-recognize](https://docs.cloud.google.com/speech-to-text/docs/batch-recognize)
- [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries)

## Supporting Pages

### "Transcribe long audio files into text \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/batch-recognize](https://docs.cloud.google.com/speech-to-text/docs/batch-recognize)
- Source ID: `site-docs-root`
- Final score: 342
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- InlineOutputConfig (), ), ) Transcribes the audio into text operation = client . batch recognize ( request = request ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout = 120 ) for result in response . results [ audio uri ] . transcript . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response . results [ audio uri ] . transcript Perform batch recognition and write results to Cloud Storage Here is an example of performing batch speech recognition on an audio file in Cloud Storage and reading the transcription results from the output file in Cloud Storage.
- BatchRecognizeResults . from json ( results bytes , ignore unknown fields = True ) for result in batch recognize results . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return batch recognize results Perform batch recognition on multiple files Here is an example of performing batch speech recognition on multiple audio files in Cloud Storage and reading the transcription results from the output files in Cloud Storage: Python import os import re from typing import List from google.cloud import storage from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe batch multiple files v2 ( audio uris : List [ str ], gcs output path : str , ) - > cloud speech .
- Perform batch recognition with inline results Here is an example of performing batch speech recognition on an audio file in Cloud Storage and reading the transcription results inline from the response: Python import os from google.cloud.speech v2 import SpeechClient from google.cloud.speech v2.types import cloud speech PROJECT ID = os . getenv ( "GOOGLE CLOUD PROJECT" ) def transcribe batch gcs input inline output v2 ( audio uri : str , ) - > cloud speech .
- The service account email address is the following: service- PROJECT NUMBER @gcp-sa-speech.iam.gserviceaccount.com In order to transcribe Cloud Storage files in another project, you can give this service account the [Speech-to-Text Service Agent][speech-service-agent] role in the other project: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-speech.iam.gserviceaccount.com \ --role = roles/speech.serviceAgent More information about project IAM policy is available at [Manage access to projects, folders, and organizations][manage-access].

### "Overview of custom speech models \_|\_ Cloud Speech-to-Text \_|\_ Google\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models](https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models)
- Source ID: `site-docs-root`
- Final score: 286
- Re-rank relevance: N/A

Evidence snippets:
- Supported models, languages and regions Custom Speech-to-Text models support the following combinations of models and languages and locales for training: Language BCP-47 Base model German (Germany) de-DE latest long English (Australia) en-AU latest long English (United Kingdom) en-GB latest long English (India) en-IN latest long English (United States) en-US latest long Spanish (United States) es-US latest long Spanish (Spain) es-ES latest long French (Canada) fr-CA latest long French (France) fr-FR latest long Hindi (India) hi-IN latest long Italian (Italy) it-IT latest long Japanese (Japan) ja-JP latest long Korean (South Korea) ko-KR latest long Dutch (Netherlands) nl-NL latest long Portuguese (Brazil) pt-BR latest long Portuguese (Portugal) pt-PT latest long Additionally, to comply with your data residency requirements we offer training and deployment hardware in different regions.
- Dedicated hardware is supported in the following combinations of models and regions: Base model Google Cloud Region Supported tasks latest long us-east1 Training and Deployment latest long europe-west4 Training and Deployment Quota For Custom Speech-to-Text model training, each Google Cloud project should have enough default quota to run multiple training jobs concurrently and is intended to meet the needs of most projects without additional adjustments.
- Inference : You will be charged for the number of streamed seconds of audio for transcription, in alignment with the general Cloud Speech-to-Text billing.
- Creating and using a custom Cloud Speech-to-Text model involves the following steps: Prepare and upload training data in a Cloud Storage bucket.

### "Chirp 3 Transcription: Enhanced multilingual accuracy \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3)
- Source ID: `site-docs-root`
- Final score: 282
- Re-rank relevance: N/A

Evidence snippets:
- Model Model identifier Chirp 3 chirp 3 API methods Not all recognition methods support the same language availability sets, because Chirp 3 is available in the Speech-to-Text API V2, it supports the following recognition methods: API version API method Support V2 Speech.StreamingRecognize (good for streaming and real-time audio) Supported V2 Speech.Recognize (good for audio shorter than one minute) Supported V2 Speech.BatchRecognize (good for long audio 1 minute to 1 hour in general, but up to 20 minutes with word-level timestamp enabled) Supported Note: You can always find the latest list of supported locales and features for each transcription model, using the locations API as explained here.
- InlineOutputConfig (), ), ) Transcribes the audio into text operation = client . batch recognize ( request = request ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout = 120 ) for result in response . results [ audio uri ] . transcript . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response . results [ audio uri ] . transcript Use Chirp 3 features Explore how you can use the latest features, with code examples: Perform a language-agnostic transcription Chirp 3, can automatically identify and transcribe in the dominant language spoken in the audio which is essential for multilingual applications.
- Example: "resources/audio.wav" Returns: cloud speech.RecognizeResponse: The response from the Speech-to-Text API V2 containing the transcription results. """ Instantiates a client client = SpeechClient ( client options = ClientOptions ( api endpoint = f " { REGION } -speech.googleapis.com" , ) ) Reads a file as bytes with open ( audio file , "rb" ) as f : content = f . read () In practice, stream should be a generator yielding chunks of audio data chunk length = len ( content ) // 5 stream = [ content [ start : start + chunk length ] for start in range ( 0 , len ( content ), chunk length ) ] audio requests = ( cloud speech .
- But strictly use the '12/23/1939' format." Returns: cloud speech.RecognizeResponse: The response from the Speech-to-Text API containing the transcription results. """ Instantiates a client client = SpeechClient ( client options = ClientOptions ( api endpoint = f " { REGION } -speech.googleapis.com" , ) ) Reads a file as bytes with open ( audio file , "rb" ) as f : audio content = f . read () config = cloud speech .

### "Transcribe speech to text by using client libraries \_|\_ Cloud Speech-to-Text\

- URL: [https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries](https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries)
- Source ID: `site-docs-root`
- Final score: 282
- Re-rank relevance: N/A

Evidence snippets:
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( SpeechClient speechClient = SpeechClient . create ()) { Path path = Paths . get ( filePath ); byte [] data = Files . readAllBytes ( path ); ByteString audioBytes = ByteString . copyFrom ( data ); String parent = String . format ( "projects/%s/locations/global" , projectId ); // First, create a recognizer Recognizer recognizer = Recognizer . newBuilder () . setModel ( "latest long" ) . addLanguageCodes ( "en-US" ) . build (); CreateRecognizerRequest createRecognizerRequest = CreateRecognizerRequest . newBuilder () . setParent ( parent ) . setRecognizerId ( recognizerId ) . setRecognizer ( recognizer ) . build (); OperationFuture<Recognizer , OperationMetadata > operationFuture = speechClient . createRecognizerAsync ( createRecognizerRequest ); recognizer = operationFuture . get (); // Next, create the transcription request RecognitionConfig recognitionConfig = RecognitionConfig . newBuilder () . setAutoDecodingConfig ( AutoDetectDecodingConfig . newBuilder (). build ()) . build (); RecognizeRequest request = RecognizeRequest . newBuilder () . setConfig ( recognitionConfig ) . setRecognizer ( recognizer . getName ()) . setContent ( audioBytes ) . build (); RecognizeResponse response = speechClient . recognize ( request ); List<SpeechRecognitionResult> results = response . getResultsList (); for ( SpeechRecognitionResult result : results ) { // There can be several alternative transcripts for a given chunk of speech.
- Make an audio transcription request Use the following code to send a Recognize request to the Speech-to-Text API.
- You can send audio data to the Speech-to-Text API, which then returns a text transcription of that audio file.
- RecognizeRequest ( recognizer = f "projects/ { PROJECT ID } /locations/global/recognizers/ " , config = config , content = audio content , ) Transcribes the audio into text response = client . recognize ( request = request ) for result in response . results : print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " ) return response You sent your first request to Speech-to-Text.

