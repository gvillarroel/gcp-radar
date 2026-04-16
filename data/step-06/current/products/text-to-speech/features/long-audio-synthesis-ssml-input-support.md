---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:58:39.675Z"
product_name: "Text-to-Speech"
product_slug: "text-to-speech"
feature_name: "Long Audio Synthesis SSML input support"
feature_slug: "long-audio-synthesis-ssml-input-support"
latest_feature_date: "2023-10-24"
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
  - "ssml"
  - "input"
  - "now"
  - "supports"
  - "receiving"
---

# Long Audio Synthesis SSML input support

Product: Text-to-Speech
Coverage: MEDIUM

## Step 02 Summary

Long Audio Synthesis now supports receiving SSML inputs for speech generation.

## Extended Definition

Long Audio Synthesis now supports receiving SSML inputs for speech generation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/text-to-speech/docs/ssml](https://docs.cloud.google.com/text-to-speech/docs/ssml)
- [https://docs.cloud.google.com/text-to-speech/docs/ssml-beta](https://docs.cloud.google.com/text-to-speech/docs/ssml-beta)
- [https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis](https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis)

## Supporting Pages

### "Speech Synthesis Markup Language (SSML) \_|\_ Cloud Text-to-Speech \_|\_\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/ssml](https://docs.cloud.google.com/text-to-speech/docs/ssml)
- Source ID: `site-api-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to format SSML input included within a JSON object. "{ 'input':{ 'ssml':'<speak>The <say-as interpret-as=\"characters\">SSML</say-as> standard <break time=\"1s\"/>is defined by the <sub alias=\"World Wide Web Consortium\">W3C</sub>.</speak>' }, 'voice':{ 'languageCode':'en-us', 'name':'en-US-Standard-B', 'ssmlGender':'MALE' }, 'audioConfig':{ 'audioEncoding':'MP3' } }" Reserve characters Avoid using SSML reserve characters in the text that is to be converted to audio.
- You can send Speech Synthesis Markup Language (SSML) in your Cloud Text-to-Speech request to allow for more customization in your audio response by providing details on pauses, and audio formatting for acronyms, dates, times, abbreviations, or text that should be censored.
- For more information about how to create audio data from SSML input with the Cloud TTS, see Creating Voice Audio Files .
- SSML timepoints The Text-to-Speech API supports the use of timepoints in your created audio data.

### "Speech Synthesis Markup Language (SSML) \_|\_ Cloud Text-to-Speech \_|\_\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/ssml-beta](https://docs.cloud.google.com/text-to-speech/docs/ssml-beta)
- Source ID: `site-docs-reference-2`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to format SSML input included within a JSON object. "{ 'input':{ 'ssml':'<speak>The <say-as interpret-as=\"characters\">SSML</say-as> standard <break time=\"1s\"/>is defined by the <sub alias=\"World Wide Web Consortium\">W3C</sub>.</speak>' }, 'voice':{ 'languageCode':'en-us', 'name':'en-US-Standard-B', 'ssmlGender':'MALE' }, 'audioConfig':{ 'audioEncoding':'MP3' } }" Reserve characters Avoid using SSML reserve characters in the text that is to be converted to audio.
- You can send Speech Synthesis Markup Language (SSML) in your Cloud Text-to-Speech request to allow for more customization in your audio response by providing details on pauses, and audio formatting for acronyms, dates, times, abbreviations, or text that should be censored.
- For more information about how to create audio data from SSML input with the Cloud TTS, see Creating Voice Audio Files .
- SSML timepoints The Text-to-Speech API supports the use of timepoints in your created audio data.

### "Quickstart: Create long-form audio \_|\_ Cloud Text-to-Speech \_|\_ Google\

- URL: [https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis](https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-long-audio-synthesis)
- Source ID: `site-docs-reference-2`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Long Audio Synthesis asynchronously synthesizes up to 1 million bytes on input.
- HTTP method and URL: POST https://texttospeech.googleapis.com/v1beta1/projects/12345/locations/global:synthesizeLongAudio Request JSON body: { "parent": "projects/12345/locations/global", "audio config":{ "audio encoding":"LINEAR16" }, "input":{ "text":"hello" }, "voice":{ "language code":"en-us", "name":"en-us-Standard-A" }, "output gcs uri": "gs://bucket name/file name.wav" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- See the License for the specific language governing permissions and limitations under the License. from google.cloud import texttospeech def synthesize long audio ( project id : str , output gcs uri : str ) - > None : """ Synthesizes long input, writing the resulting audio to output gcs uri.
- SynthesizeLongAudioRequest ( parent = parent , input = input , audio config = audio config , voice = voice , output gcs uri = output gcs uri , ) operation = client . synthesize long audio ( request = request ) Set a deadline for your LRO to finish.

