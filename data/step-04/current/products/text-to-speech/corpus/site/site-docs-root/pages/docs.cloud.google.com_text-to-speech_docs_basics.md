---
title: "Cloud Text-to-Speech basics \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/basics
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/basics
  title: "Cloud Text-to-Speech basics \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Text-to-Speech
Guides
Send feedback
Cloud Text-to-Speech basics
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Text-to-Speech is an API that lets you create natural-sounding, synthetic
human speech as playable audio. You can use the audio data files you create
using Cloud Text-to-Speech to power your applications or augment media like videos
or audio recordings (in compliance with the Google Cloud Platform Terms of
Service including compliance with all
applicable law).
Cloud TTS converts text or Speech Synthesis Markup Language (SSML)
input into audio data like MP3 or LINEAR16 (the encoding used in WAV
files).
This document is a conceptual guide to using Cloud Text-to-Speech. For practical
code examples, see our samples section , and see our
getting started page for information on how to set
up your Google Cloud project to use the Cloud Text-to-Speech API.
Basic example
Cloud TTS is ideal for any application that plays audio of human
speech to users. With Cloud TTS, you can convert arbitrary strings,
words, and sentences into the sound of a person speaking the same things.
Imagine that you have a voice assistant app that provides natural language
feedback to your users as playable audio files. You can use
Cloud TTS to have your app perform an action and then provide human
speech as feedback to the user. You might want to have your app report that it
successfully added an event to the user's calendar. Your app would construct a
response string to report the success to the user, something like "I've added
the event to your calendar."
With Cloud TTS, you can convert that response string to
actual human speech to play back to the user, similar to the following example:
Your browser doesn't support the audio element.
Example 1. Audio file generated from Cloud TTS
To create an audio file like example 1, you send a request to
Cloud TTS like the following code snippet.
Note: The following sample uses the gcloud auth print-access-token command to
retrieve an access token for the request. Before you run the sample, you must
install and initialize the Google Cloud CLI . Replace
PROJECT_ID with your project ID.
curl -H "Authorization: Bearer "$(gcloud auth print-access-token) -H "x-goog-user-project: PROJECT_ID " -H "Content-Type: application/json; charset=utf-8" --data "{
'input':{
'text':'With Cloud machine learning, your application interprets images, texts, and more.'
},
'voice':{
'languageCode':'en-gb',
'name':'en-GB-Chirp3-HD-Charon',
},
'audioConfig':{
'audioEncoding':'LINEAR16'
}
}" "https://texttospeech.googleapis.com/v1/text:synthesize"
Speech synthesis
The process of translating text input into audio data is called synthesis and
the output of synthesis is called synthetic speech . Cloud TTS
takes two types of input: raw text or SSML-formatted data (discussed below). To
create a new audio file, call the
synthesize endpoint of the
API.
The speech synthesis process generates raw audio data as a base64-encoded
string. You must decode the base64-encoded string into an audio file before
an application can play it. Most platforms and operating systems have
tools for decoding base64 text into playable media files.
Note: You must decode the base64 string returned from Cloud TTS
before you can play it. For more information about how to decode base64
data, see
Decoding Base64-Encoded Audio Content
To learn more about synthesis, review the
quickstarts or the
Creating Voice Audio Files page.
Voices
Cloud TTS creates raw audio data of natural, human speech.
That is, it creates audio that sounds like a person talking. When
you send a synthesis request to Cloud TTS, you must
specify a voice that 'speaks' the words.
Cloud TTS has a wide selection of custom voices available for you
to use. The voices differ by language, gender, and accent (for some languages).
For example, you can create audio that mimics the sound of a female English
speaker with a British accent like the previous example . You
can also convert the same text into a different voice (for example, a male
English speaker with an Australian accent).
Your browser doesn't support the audio element.
Example 2. Audio file generated with en-AU speaker
To see the complete list of the available voices, see
Supported Voices .
Other audio output settings
Besides the voice, you can also configure other aspects of the audio
data output created by speech synthesis. Cloud TTS
supports configuring the speaking rate, pitch, volume, and sample
rate hertz.
For more information, see the AudioConfig reference .
Speech Synthesis Markup Language (SSML) support
You can enhance the synthetic speech produced by Cloud TTS
by marking up the text using Speech Synthesis Markup Language (SSML). SSML
lets you insert pauses, acronym pronunciations, or other additional
details into the audio data created by Cloud TTS.
Cloud TTS supports a
subset of the available SSML elements .
Note: Cloud TTS does not support all SSML elements for all
available languages.
For example, you can ensure that the synthetic speech correctly pronounces
ordinal numbers by providing Cloud TTS with SSML input that marks
ordinal numbers as such.
Your browser doesn't support the audio element.
Example 5. Audio file generated from plain text input
Your browser doesn't support the audio element.
Example 6. Audio file generated from SSML input
To learn more about how to synthesize speech from SSML, see
Creating Voice Audio Files .
What's next?
Get started with using Cloud Text-to-Speech by following our setup guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
