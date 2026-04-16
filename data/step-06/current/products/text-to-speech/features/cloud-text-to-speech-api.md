---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.692Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Cloud Text-to-Speech API"
feature_slug: "cloud-text-to-speech-api"
latest_feature_date: "2018-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/text-to-speech/docs/reference/rest"
  - "https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis"
  - "https://docs.cloud.google.com/text-to-speech/docs/authentication"
keywords:
  - "text"
  - "speech"
  - "introduced"
  - "beta"
  - "offering"
---

# Cloud Text-to-Speech API

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

The Cloud Text-to-Speech API is introduced as a new beta offering.

## Extended Definition

The Cloud Text-to-Speech API is introduced as a new beta offering.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/reference/rest](https://docs.cloud.google.com/text-to-speech/docs/reference/rest)
- [https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis](https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis)
- [https://docs.cloud.google.com/text-to-speech/docs/authentication](https://docs.cloud.google.com/text-to-speech/docs/authentication)

## Supporting Pages

### "Quickstart: Create long-form audio \_|\_ Cloud Text-to-Speech \_|\_ Google\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis](https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis)
- Source ID: `site-docs-reference-2`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://texttospeech.googleapis.com/v1beta1/projects/12345/locations/global:synthesizeLongAudio" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "23456", "metadata": { "@type": "type.googleapis.com/google.cloud.texttospeech.v1beta1.SynthesizeLongAudioMetadata", "progressPercentage": 0, "startTime": "2022-12-20T00:46:56.296191037Z", "lastUpdateTime": "2022-12-20T00:46:56.296191037Z" }, "done": false } The JSON output for the REST command contains the long operation name in the name field.
- HTTP method and URL: POST https://texttospeech.googleapis.com/v1beta1/projects/12345/locations/global:synthesizeLongAudio Request JSON body: { "parent": "projects/12345/locations/global", "audio config":{ "audio encoding":"LINEAR16" }, "input":{ "text":"hello" }, "voice":{ "language code":"en-us", "name":"en-us-Standard-A" }, "output gcs uri": "gs://bucket name/file name.wav" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://texttospeech.googleapis.com/v1beta1/projects/12345/locations/global/operations/23456" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/12345/locations/global/operations/23456", "metadata": { "@type": "type.googleapis.com/google.cloud.texttospeech.v1beta1.SynthesizeLongAudioMetadata", "progressPercentage": 100 }, "done": true } Query the list of all operations running under a given project, execute the REST request.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://texttospeech.googleapis.com/v1beta1/projects/12345/locations/global/operations" Select-Object -Expand Content You should receive a JSON response similar to the following: { "operations": [ { "name": "12345", "done": false }, { "name": "23456", "done": false } ], "nextPageToken": "" } Once the long-running operation successfully completes, find the output audio file in the given bucket uri in the output gcs uri field.

### Cloud Text-to-Speech API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/text-to-speech/docs/reference/rest](https://docs.cloud.google.com/text-to-speech/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations REST Resource: v1beta1.projects.locations.operations REST Resource: v1beta1.text REST Resource: v1beta1.voices REST Resource: v1.operations REST Resource: v1.projects.locations REST Resource: v1.projects.locations.operations REST Resource: v1.text REST Resource: v1.voices Service: texttospeech.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://texttospeech.googleapis.com REST Resource: v1beta1.projects.locations Methods synthesizeLongAudio POST /v1beta1/{parent=projects/ /locations/ }:synthesizeLongAudio Synthesizes long form text asynchronously.
- This service provides the following discovery documents: https://texttospeech.googleapis.com/$discovery/rest?version=v1 https://texttospeech.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1beta1.text Methods synthesize POST /v1beta1/text:synthesize Synthesizes speech synchronously: receive results after all text input has been processed.

### "Authenticate to Cloud TTS \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/authentication](https://docs.cloud.google.com/text-to-speech/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Cloud Text-to-Speech Reference Send feedback Authenticate to Cloud TTS Stay organized with collections Save and categorize content based on your preferences.
- How you authenticate to Cloud Text-to-Speech depends on the interface you use to access the API and the environment where your code is running.
- This document describes how to authenticate to Cloud Text-to-Speech programmatically.

