---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.669Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Chirp 3 HD SSML synthesis support"
feature_slug: "chirp-3-hd-ssml-synthesis-support"
latest_feature_date: "2025-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/text-to-speech/docs/ssml"
  - "https://docs.cloud.google.com/text-to-speech/docs/ssml-beta"
  - "https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd"
keywords:
  - "chirp"
  - "hd"
  - "ssml"
  - "synthesis"
  - "now"
  - "supports"
  - "speech"
  - "input"
---

# Chirp 3 HD SSML synthesis support

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

Chirp 3 HD now supports speech synthesis using SSML input.

## Extended Definition

Chirp 3 HD now supports speech synthesis using SSML input.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/ssml](https://docs.cloud.google.com/text-to-speech/docs/ssml)
- [https://docs.cloud.google.com/text-to-speech/docs/ssml-beta](https://docs.cloud.google.com/text-to-speech/docs/ssml-beta)
- [https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd](https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd)

## Supporting Pages

### "Speech Synthesis Markup Language (SSML) \_|\_ Cloud Text-to-Speech \_|\_\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/ssml](https://docs.cloud.google.com/text-to-speech/docs/ssml)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can send Speech Synthesis Markup Language (SSML) in your Cloud Text-to-Speech request to allow for more customization in your audio response by providing details on pauses, and audio formatting for acronyms, dates, times, abbreviations, or text that should be censored.
- For the root <par> element, the begin attribute is ignored and the beginning time is when SSML speech synthesis process starts generating output for the root <par> element (i.e. effectively time "zero").
- Home Documentation AI and ML Cloud Text-to-Speech Reference Send feedback Speech Synthesis Markup Language (SSML) Stay organized with collections Save and categorize content based on your preferences.
- Click the ssml link under the bottom right corner of the "Convert your text to speech right now" demo's text box to view your input in ssml format.

### "Speech Synthesis Markup Language (SSML) \_|\_ Cloud Text-to-Speech \_|\_\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/ssml-beta](https://docs.cloud.google.com/text-to-speech/docs/ssml-beta)
- Source ID: `site-docs-reference-2`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can send Speech Synthesis Markup Language (SSML) in your Cloud Text-to-Speech request to allow for more customization in your audio response by providing details on pauses, and audio formatting for acronyms, dates, times, abbreviations, or text that should be censored.
- For the root <par> element, the begin attribute is ignored and the beginning time is when SSML speech synthesis process starts generating output for the root <par> element (i.e. effectively time "zero").
- Home Documentation AI and ML Cloud Text-to-Speech Reference Send feedback Speech Synthesis Markup Language (SSML) Stay organized with collections Save and categorize content based on your preferences.
- Click the ssml link under the bottom right corner of the "Convert your text to speech right now" demo's text box to view your input in ssml format.

### Chirp 3: HD voices \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd](https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd)
- Source ID: `site-docs-reference-2`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample SynthesizeSpeechRequest using pause control: { "audio config" : { "audio encoding" : "LINEAR16" , }, "input" : { "markup" : "Let me take a look, [pause long] yes, I see it." , }, "voice" : { "language code" : "en-US" , "name" : "en-us-Chirp3-HD-Leda" , } } Sample StreamingSynthesisInput using pause control: { "markup" : "Let me take a look, [pause long] yes, I see it." , } Pause control audio samples: Markup input Output "Let me take a look, yes, I see it." Your browser doesn't support the audio element. "Let me take a look, [pause long] yes, I see it." Your browser doesn't support the audio element.
- Sample SynthesizeSpeechRequest using custom pronunciations: { "audio config" : { "audio encoding" : "LINEAR16" , }, "input" : { "text" : "There is a dog in the boat" , "custom pronunciations" : { "phrase" : "dog" , "phonetic encoding" : "PHONETIC ENCODING X SAMPA" , "pronunciation" : "\"k{t" , } }, "voice" : { "language code" : "en-US" , "name" : "en-us-Chirp3-HD-Leda" , } } Sample StreamingSynthesizeConfig using custom pronunciations: { "streaming audio config" : { "audio encoding" : "LINEAR16" , }, "voice" : { "language code" : "en-US" , "name" : "en-us-Chirp3-HD-Leda" , } "custom pronunciations" : { "phrase" : "dog" , "phonetic encoding" : "PHONETIC ENCODING X SAMPA" , "pronunciation" : "\"k{t" , } } Custom pronunciations audio samples: Custom pronunciations applied Output None Your browser doesn't support the audio element. "dog" pronounced as ""k{t" Your browser doesn't support the audio element.
- StreamingSynthesisInput ( text = text ) ) streaming responses = client . streaming synthesize ( request generator ()) for response in streaming responses : print ( f "Audio content size in bytes is: { len ( response . audio content ) } " ) Perform online speech synthesis request Python To learn how to install and use the client library for Cloud TTS, see Cloud TTS client libraries .
- Sample SynthesizeSpeechRequest using SSML: { "audio config" : { "audio encoding" : "LINEAR16" , }, "input" : { "ssml" : "<speak>Here are <say-as interpret-as=\"characters\">SSML</say-as> samples.

