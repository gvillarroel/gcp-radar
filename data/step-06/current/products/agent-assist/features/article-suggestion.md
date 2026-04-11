---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.435Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Article Suggestion"
feature_slug: "article-suggestion"
latest_feature_date: "2025-08-21"
deprecation_date: "April 1, 2026"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/article-suggestion"
  - "https://docs.cloud.google.com/agent-assist/docs/faq"
keywords:
  - "deprecation of Article Suggestion"
  - "article suggestion deprecation"
  - "stops new conversation profile creation"
  - "Article Suggestion feature"
  - "Article Suggestion"
  - "deprecated on April 1, 2026"
  - "Article suggestions"
  - "permanent removal"
---

# Article Suggestion

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Deprecates the Article suggestion feature, stops new conversation profile creation, and schedules permanent removal; deprecated on April 1, 2026.

## Extended Definition

Article Suggestion is a feature of Google Cloud Agent Assist that analyzes an ongoing conversation between a human agent and an end-user and returns suggested documents for the agent. The feature appears as part of `analyzeContent` responses via human-agent and end-user suggestion results, where article suggestions are returned with details such as answer titles and answer records. The documentation snippet includes a caution that Article Suggestion is deprecated on April 1, 2026, but does not provide explicit evidence in the provided excerpts about when new conversation profile creation stops or when permanent removal occurs.

## Evidence Summary

The Article Suggestion page defines the feature’s conversational document-suggestion behavior and states the April 1, 2026 deprecation date, while the FAQ page shows related API usage and conversation-profile configuration that references ARTICLE_SUGGESTION.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/article-suggestion](https://docs.cloud.google.com/agent-assist/docs/article-suggestion)
- [https://docs.cloud.google.com/agent-assist/docs/faq](https://docs.cloud.google.com/agent-assist/docs/faq)

## Supporting Pages

### Article Suggestion \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/article-suggestion](https://docs.cloud.google.com/agent-assist/docs/article-suggestion)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a dedicated Agent Assist Article Suggestion document that describes its behavior, API implementation flow, conversation profile and knowledge base requirements, and includes the deprecation and removal timeline.

Evidence snippets:
- The Agent Assist Article Suggestion feature follows a conversation between a human agent and an end-user and provides the human agent with relevant document suggestions.
- Caution: Article suggestion will be deprecated on April 1, 2026.
- ParticipantsClient () participant path = client . participant path ( project id , conversation id , participant id ) text input = { "text" : text , "language code" : "en-US" } response = client . analyze content ( participant = participant path , text input = text input ) print ( "AnalyzeContent Response:" ) print ( f "Reply Text: { response . reply text } " ) for suggestion result in response . human agent suggestion results : if suggestion result . error is not None : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) for suggestion result in response . end user suggestion results : if suggestion result . error : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) return response Add a message from the end-user and get suggestions In response to the human agent, the end-user says "I want to return my order." This time, the API response contains a suggested document with its associated confidence score.
- ParticipantsClient () participant path = client . participant path ( project id , conversation id , participant id ) text input = { "text" : text , "language code" : "en-US" } response = client . analyze content ( participant = participant path , text input = text input ) print ( "AnalyzeContent Response:" ) print ( f "Reply Text: { response . reply text } " ) for suggestion result in response . human agent suggestion results : if suggestion result . error is not None : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) for suggestion result in response . end user suggestion results : if suggestion result . error : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) return response Complete the conversation When the conversation ends, use the API to complete the conversation.

### FAQ assist \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/faq](https://docs.cloud.google.com/agent-assist/docs/faq)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Article Suggestion appears only as a related design-time testing concept within FAQ Assist guidance, without a dedicated definition or lifecycle details for that feature.

Evidence snippets:
- ParticipantsClient () participant path = client . participant path ( project id , conversation id , participant id ) text input = { "text" : text , "language code" : "en-US" } response = client . analyze content ( participant = participant path , text input = text input ) print ( "AnalyzeContent Response:" ) print ( f "Reply Text: { response . reply text } " ) for suggestion result in response . human agent suggestion results : if suggestion result . error is not None : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) for suggestion result in response . end user suggestion results : if suggestion result . error : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) return response Add a message from the end-user and get suggestions In response to the agent, the end-user asks "How do I sign up?".
- ParticipantsClient () participant path = client . participant path ( project id , conversation id , participant id ) text input = { "text" : text , "language code" : "en-US" } response = client . analyze content ( participant = participant path , text input = text input ) print ( "AnalyzeContent Response:" ) print ( f "Reply Text: { response . reply text } " ) for suggestion result in response . human agent suggestion results : if suggestion result . error is not None : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) for suggestion result in response . end user suggestion results : if suggestion result . error : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) return response Complete the conversation When the conversation ends, use the API to complete the conversation.
- For more information, see Set up authentication for a local development environment . def create conversation profile article faq ( project id , display name , article suggestion knowledge base id = None , faq knowledge base id = None , ): """Creates a conversation profile with given values Args: project id: The GCP project linked with the conversation profile. display name: The display name for the conversation profile to be created. article suggestion knowledge base id: knowledge base id for article suggestion. faq knowledge base id: knowledge base id for faq.""" client = dialogflow .
- KnowledgeBasesClient . knowledge base path ( project id , article suggestion knowledge base id ) feature config = { "suggestion feature" : { "type " : "ARTICLE SUGGESTION" }, "suggestion trigger settings" : { "no small talk" : True , "only end user" : True , }, "query config" : { "knowledge base query source" : { "knowledge bases" : [ as kb path ]}, "max results" : 3 , }, } conversation profile [ "human agent assistant config" ][ "human agent suggestion config" ][ "feature configs" ] . append ( feature config ) if faq knowledge base id is not None : faq kb path = dialogflow .

