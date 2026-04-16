---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.676Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Long Audio Synthesis API language support"
feature_slug: "long-audio-synthesis-api-language-support"
latest_feature_date: "2023-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/text-to-speech/docs/ssml"
  - "https://docs.cloud.google.com/text-to-speech/docs/ssml-beta"
  - "https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis"
keywords:
  - "long"
  - "audio"
  - "synthesis"
  - "language"
  - "added"
  - "multiple"
  - "languages"
  - "including"
---

# Long Audio Synthesis API language support

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

The Long Audio Synthesis API added support for multiple languages, including English, Spanish, French, German, Japanese, Hindi, Italian, Korean, Portuguese, Thai, Vietnamese, Danish, and Filipino.

## Extended Definition

The Long Audio Synthesis API added support for multiple languages, including English, Spanish, French, German, Japanese, Hindi, Italian, Korean, Portuguese, Thai, Vietnamese, Danish, and Filipino.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/ssml](https://docs.cloud.google.com/text-to-speech/docs/ssml)
- [https://docs.cloud.google.com/text-to-speech/docs/ssml-beta](https://docs.cloud.google.com/text-to-speech/docs/ssml-beta)
- [https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis](https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis)

## Supporting Pages

### "Quickstart: Create long-form audio \_|\_ Cloud Text-to-Speech \_|\_ Google\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis](https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis)
- Source ID: `site-docs-reference-2`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: POST https://texttospeech.googleapis.com/v1beta1/projects/12345/locations/global:synthesizeLongAudio Request JSON body: { "parent": "projects/12345/locations/global", "audio config":{ "audio encoding":"LINEAR16" }, "input":{ "text":"hello" }, "voice":{ "language code":"en-us", "name":"en-us-Standard-A" }, "output gcs uri": "gs://bucket name/file name.wav" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- See the License for the specific language governing permissions and limitations under the License. from google.cloud import texttospeech def synthesize long audio ( project id : str , output gcs uri : str ) - > None : """ Synthesizes long input, writing the resulting audio to output gcs uri.
- Long Audio Synthesis asynchronously synthesizes up to 1 million bytes on input.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://texttospeech.googleapis.com/v1beta1/projects/12345/locations/global:synthesizeLongAudio" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "23456", "metadata": { "@type": "type.googleapis.com/google.cloud.texttospeech.v1beta1.SynthesizeLongAudioMetadata", "progressPercentage": 0, "startTime": "2022-12-20T00:46:56.296191037Z", "lastUpdateTime": "2022-12-20T00:46:56.296191037Z" }, "done": false } The JSON output for the REST command contains the long operation name in the name field.

### "Speech Synthesis Markup Language (SSML) \_|\_ Cloud Text-to-Speech \_|\_\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/ssml](https://docs.cloud.google.com/text-to-speech/docs/ssml)
- Source ID: `site-api-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples of configurations using the required and ordering tags: <speak>And there it was <voice language="en-GB" gender="male" required="gender" ordering="gender language">a flying bird </voice>roaring in the skies for the first time.</speak> <speak>Today is supposed to be <voice language="en-GB" gender="female" ordering="language gender">Sunday Funday.</voice></speak> <lang> You can use <lang> to include text in multiple languages within the same SSML request.
- You can send Speech Synthesis Markup Language (SSML) in your Cloud Text-to-Speech request to allow for more customization in your audio response by providing details on pauses, and audio formatting for acronyms, dates, times, abbreviations, or text that should be censored.
- The following example shows how to format SSML input included within a JSON object. "{ 'input':{ 'ssml':'<speak>The <say-as interpret-as=\"characters\">SSML</say-as> standard <break time=\"1s\"/>is defined by the <sub alias=\"World Wide Web Consortium\">W3C</sub>.</speak>' }, 'voice':{ 'languageCode':'en-us', 'name':'en-US-Standard-B', 'ssmlGender':'MALE' }, 'audioConfig':{ 'audioEncoding':'MP3' } }" Reserve characters Avoid using SSML reserve characters in the text that is to be converted to audio.
- All three attributes are optional but you must provide at least one if you don't provide a name . gender : One of "male", "female" or "neutral". variant : Used as a tiebreaker in cases where there are multiple possibilities of which voice to use based on your configuration. language : Your desired language.

### "Speech Synthesis Markup Language (SSML) \_|\_ Cloud Text-to-Speech \_|\_\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/ssml-beta](https://docs.cloud.google.com/text-to-speech/docs/ssml-beta)
- Source ID: `site-docs-reference-2`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples of configurations using the required and ordering tags: <speak>And there it was <voice language="en-GB" gender="male" required="gender" ordering="gender language">a flying bird </voice>roaring in the skies for the first time.</speak> <speak>Today is supposed to be <voice language="en-GB" gender="female" ordering="language gender">Sunday Funday.</voice></speak> <lang> You can use <lang> to include text in multiple languages within the same SSML request.
- You can send Speech Synthesis Markup Language (SSML) in your Cloud Text-to-Speech request to allow for more customization in your audio response by providing details on pauses, and audio formatting for acronyms, dates, times, abbreviations, or text that should be censored.
- The following example shows how to format SSML input included within a JSON object. "{ 'input':{ 'ssml':'<speak>The <say-as interpret-as=\"characters\">SSML</say-as> standard <break time=\"1s\"/>is defined by the <sub alias=\"World Wide Web Consortium\">W3C</sub>.</speak>' }, 'voice':{ 'languageCode':'en-us', 'name':'en-US-Standard-B', 'ssmlGender':'MALE' }, 'audioConfig':{ 'audioEncoding':'MP3' } }" Reserve characters Avoid using SSML reserve characters in the text that is to be converted to audio.
- All three attributes are optional but you must provide at least one if you don't provide a name . gender : One of "male", "female" or "neutral". variant : Used as a tiebreaker in cases where there are multiple possibilities of which voice to use based on your configuration. language : Your desired language.

