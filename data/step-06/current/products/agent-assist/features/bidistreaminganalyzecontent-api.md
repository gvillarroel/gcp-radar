---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.434Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "BiDiStreamingAnalyzeContent API"
feature_slug: "bidistreaminganalyzecontent-api"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/bidi-stream-api"
keywords:
  - "next-generation audio streaming"
  - "bidirectional streaming AnalyzeContent"
  - "BiDi Streaming AnalyzeContent"
  - "multimodal streaming content"
  - "transcript streaming results"
  - "Streaming AnalyzeContent API"
  - "human agent suggestions stream"
  - "BiDiStreamingAnalyzeContent API"
---

# BiDiStreamingAnalyzeContent API

Product: Agent Assist
Coverage: HIGH

## Step 02 Summary

Introduces the bidirectional streaming API for next-generation audio and multimodal experiences, returning transcripts or human agent suggestions.

## Extended Definition

BiDiStreamingAnalyzeContent is the bidirectional streaming AnalyzeContent API used in Agent Assist and Conversational Agents for next-generation audio and multimodal experiences. It streams conversation audio to the backend and returns `BidiStreamingAnalyzeContentResponse` messages, including recognition/transcription results and processed conversation outputs such as human agent suggestions.

## Evidence Summary

The cited Google Cloud page defines BiDiStreamingAnalyzeContent as the primary next-generation streaming API for audio/multimodal scenarios and explicitly states that stream responses include transcription results and human-agent recommendation content.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/bidi-stream-api](https://docs.cloud.google.com/agent-assist/docs/bidi-stream-api)

## Supporting Pages

### Bidirectional API \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/bidi-stream-api](https://docs.cloud.google.com/agent-assist/docs/bidi-stream-api)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- BidiStreamingAnalyzeContentResponse ): """Call Bidi Streaming Analyze Content """ if response . recognition result : print ( f "Recognition result: { response . recognition result . transcript } " , ) def audio request iterator ( audio ): """Iterate the request for bidi streaming analyze content """ total audio length = len ( audio ) print ( f "total audio length { total audio length } " ) array = [] for i in range ( 0 , total audio length , POINT ONE SECOND IN BYTES ): chunk = audio [ i : i + POINT ONE SECOND IN BYTES ] array . append ( chunk ) if not chunk : break return array def python client handler (): """Downloads audios from the google cloud storage bucket and stream to the Bidi streaming AnalyzeContent site. """ print ( "Start streaming" ) conversation = conversation management . create conversation ( project id = PROJECT ID , conversation profile id = CONVERSATION PROFILE ID STAGING ) conversation id = conversation . name . split ( "conversations/" )[ 1 ] . rstrip () human agent = human agent = participant management . create participant ( project id = PROJECT ID , conversation id = conversation id , role = "HUMAN AGENT" ) end user = end user = participant management . create participant ( project id = PROJECT ID , conversation id = conversation id , role = "END USER" ) end user requests = [] agent request = [] download blob ( BUCKET NAME , FOLDER PTAH FOR CUSTOMER AUDIO , end user requests ) download blob ( BUCKET NAME , FOLDER PTAH FOR AGENT AUDIO , agent request ) participant bidi streaming analyze content ( human agent , agent request ) participant bidi streaming analyze content ( end user , end user requests ) conversation management . complete conversation ( PROJECT ID , conversation id ) Enable for telephony SipRec integration You can enable telephony SipRec integration to use BidiStreamingAnalyzeContent for audio processing.
- The BiDiStreamingAnalyzeContent API is the primary API for next-generation audio and multi-modal experiences in both Conversational Agents and Agent Assist.
- Streaming guide To use the BiDiStreamingAnalyzeContent API at conversation runtime, follow these guidelines.

