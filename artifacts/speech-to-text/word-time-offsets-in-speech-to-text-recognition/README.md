# Word time offsets in Speech-to-Text recognition

Product: Speech-to-Text
Feature slug: `word-time-offsets-in-speech-to-text-recognition`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Speech-to-Text now supports returning begin and end timestamps for each recognized word when the enableWordTimeOffsets request parameter is enabled.

## Lifecycle

- Latest feature date: 2017-08-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig), [https://docs.cloud.google.com/speech-to-text/docs/encoding](https://docs.cloud.google.com/speech-to-text/docs/encoding), [https://docs.cloud.google.com/speech-to-text/docs/multiple-voices](https://docs.cloud.google.com/speech-to-text/docs/multiple-voices), [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2))
- auth (evidence: [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig), [https://docs.cloud.google.com/speech-to-text/docs/encoding](https://docs.cloud.google.com/speech-to-text/docs/encoding), [https://docs.cloud.google.com/speech-to-text/docs/multiple-voices](https://docs.cloud.google.com/speech-to-text/docs/multiple-voices), [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2))
- authorization (evidence: [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig), [https://docs.cloud.google.com/speech-to-text/docs/encoding](https://docs.cloud.google.com/speech-to-text/docs/encoding), [https://docs.cloud.google.com/speech-to-text/docs/multiple-voices](https://docs.cloud.google.com/speech-to-text/docs/multiple-voices), [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2))
- token (evidence: [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig), [https://docs.cloud.google.com/speech-to-text/docs/encoding](https://docs.cloud.google.com/speech-to-text/docs/encoding), [https://docs.cloud.google.com/speech-to-text/docs/multiple-voices](https://docs.cloud.google.com/speech-to-text/docs/multiple-voices), [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2))

## Official Evidence

- [https://docs.cloud.google.com/speech-to-text/docs/encoding](https://docs.cloud.google.com/speech-to-text/docs/encoding)
- [https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2](https://docs.cloud.google.com/speech-to-text/docs/models/chirp-2)
- [https://docs.cloud.google.com/speech-to-text/docs/multiple-voices](https://docs.cloud.google.com/speech-to-text/docs/multiple-voices)
- [https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig](https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig)
