---
title: "Evaluate models \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/evaluate-model
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/evaluate-model
  title: "Evaluate models \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Speech-to-Text
Send feedback
Evaluate models
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Use the benchmarking functionality of the Cloud Cloud Speech-to-Text Console to
measure the accuracy of any of the transcription
models used in the
Cloud Speech-to-Text V2 API.
Cloud Cloud Speech-to-Text Console provides visual benchmarking for pre-trained and
Custom Speech-to-Text models. You can inspect the recognition quality
by comparing Word-Error-Rate (WER) evaluation metrics across multiple
transcription models to help you decide which model best fits your application.
Before you begin
Ensure you have signed up for a Google Cloud account, created a project, trained
a custom speech model, and deployed using an endpoint.
Create a ground-truth dataset
To create a custom benchmarking dataset, gather audio samples that accurately
reflect the type of traffic the transcription model will encounter in a
production environment. The aggregate duration of these audio files should
ideally span a minimum of 30 minutes and not exceed 10 hours. To assemble the
dataset, you will need to:
Create a directory in a Cloud Storage bucket of your choice to store the
audio and text files for the dataset.
For every audio-file in the dataset, create reasonably accurate
transcriptions. For each audio file (such as example_audio_1.wav ), a
corresponding ground-truth text file ( example_audio_1.txt ) must be
created. This service uses these audio-text pairings in a Cloud Storage
bucket to assemble the dataset.
Benchmark the model
Using the Custom Speech-to-Text model and your benchmarking
dataset to assess the accuracy of your model, follow the Measure and improve
accuracy guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
