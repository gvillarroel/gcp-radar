---
title: "Prepare training data \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/prepare-data
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/custom-speech-models/prepare-data
  title: "Prepare training data \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
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
Prepare training data
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
Learn to prepare your audio and text data for fine-tuning a
Custom Speech-to-Text model in Google Cloud Speech console.
The quality of your training data impacts the effectiveness of the models you
create. You will need to compose a diverse dataset that contains representative
audio and text context that's directly relevant to what the model will respond
to during inference time in production, including noise and unusual vocabulary.
For the effective training of a Custom Speech-to-Text model,
you need:
Minimum 100 audio-hours of training data, either audio-only or with the
corresponding text transcript as ground-truth. This data is crucial for the
initial training phase, so the model learns the nuances of the speech
patterns and vocabulary. For details, see Create a ground-truth dataset .
A separate dataset of at least 10 audio-hours of validation data, with the
corresponding text transcript as ground-truth.
Before you begin
Ensure you have signed up for a Google Cloud account, created a Google Cloud
project, and enabled the Cloud Speech-to-Text API:
Navigate to Cloud Storage.
Create a bucket, if you don't already have one.
Create a dataset
To create a dataset, you will need to create two subdirectories in the
Cloud Storage bucket of your choice. Follow simple naming conventions:
Create a training_dataset subdirectory to store all your training files.
Create a validation_dataset subdirectory to store all your training
files.
Upload your audio and text files in the directories by following the
Ground-truth annotation
guidelines .
Dataset guidelines
For both training and validation, supported file formats are .wav for
audio files in LINEAR16 encoding and .txt for text files, if available.
Avoid non-ASCII characters in the filenames.
Audio files in the same directory should be provided in a separate TXT file,
each with the same name as the corresponding WAV file, for example,
my_file_1.wav, my_file_1.txt. There should be only one transcription file
per audio file.
Training data
All files for training must be provided under the same directory, without
any nested folders.
Optional: If available, provide transcriptions to the audio files. No
timestamps are required.
Ensure that the cumulative audio length of your audio files is longer than
100 hours. If it isn't, the training job will fail.
Here is an example of how the directory structure should look after the files
are uploaded as a training dataset:
├── training_dataset
│ ├── example_1.wav
│ ├── example_1.txt
│ ├── example_2.wav
│ ├── example_2.txt
│ ├── example_3.wav (Note: Audio only instance, without corresponding text)
│ └── example_4.wav (Note: Audio only instance, without corresponding text)
Validation data
All files for validation are provided in the same directory named
validation_dataset without any nested folders.
Validation audios shouldn't be longer than 30 seconds each.
Provide ground-truth transcriptions for each of the audio files in the same
directory in a separate TXT file.
Here is an example of how the directory structure should look after the files
are uploaded as a validation dataset:
├── validation_dataset
│ ├── example_1.wav
│ ├── example_1.txt
│ ├── example_2.wav
│ └── example_2.txt
Ground-truth annotation guidelines
Refer to the following formatting instructions.
Numbers
Cardinals and ordinals should be transcribed only in digits.
Audio : "A deck of cards has fifty two cards, thirteen ranks of the four
suits, diamonds, hearts, and spades"
Ground-truth text : "A deck of cards has 52 cards, 13 ranks of the four
suits, diamonds, hearts, and spades"
Currency and units
Transcribe them as they're commonly written in the transcription locale.
Abbreviate all units that follow numeric values. If it's clear from context that
a number or number sequence refers to currency or time, format it as such.
Date and time
Transcribe in the common form for dates and times used in the transcription
language. Write times in hh:mm format, when possible.
Addresses
Transcribe with full names of locations, roads, and states, for example, with
abbreviations when explicitly spoken. Entities and locations should be
transcribed using a comma between them.
Proper names and accents
Transcribe using the official spelling and punctuation. If a personal name could
have multiple spellings and context does not help, use the most frequent
spelling.
Brand, product names, and media titles
Transcribe them as they're officially formatted and most commonly written.
Interjections
Laughter or other non-speech vocalizations should be transcribed using up to
three syllables. Laughter that is included within speech should be ignored
completely. Example:
Audio: "ha ha ha ha ha"
Ground-truth text: "hahaha"
Multiple speakers
Don't separate them with speaker tags, because diarization is generally not
supported.
What's next
Follow the resources to take advantage of custom speech models in your
application:
Train and manage your custom models
Deploy and manage model endpoints
Use your custom models
Evaluate your custom models
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
