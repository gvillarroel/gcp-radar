---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.073Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Smart Compose"
feature_slug: "smart-compose"
latest_feature_date: "2025-10-01"
deprecation_date: "October 2025"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/ai-coach-best-practices"
  - "https://docs.cloud.google.com/agent-assist/docs/article-suggestion"
  - "https://docs.cloud.google.com/agent-assist/docs/faq"
keywords:
  - "scheduled"
  - "compose"
  - "longer"
  - "marks"
  - "smart"
  - "permanent"
---

# Smart Compose

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Marks Smart Compose as no longer in use and scheduled for permanent removal; deprecated on October 2025.

## Extended Definition

Marks Smart Compose as no longer in use and scheduled for permanent removal; deprecated on October 2025.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/ai-coach-best-practices](https://docs.cloud.google.com/agent-assist/docs/ai-coach-best-practices)
- [https://docs.cloud.google.com/agent-assist/docs/article-suggestion](https://docs.cloud.google.com/agent-assist/docs/article-suggestion)
- [https://docs.cloud.google.com/agent-assist/docs/faq](https://docs.cloud.google.com/agent-assist/docs/faq)

## Supporting Pages

### AI coach: Best practices \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/ai-coach-best-practices](https://docs.cloud.google.com/agent-assist/docs/ai-coach-best-practices)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- The following detailed example illustrates how lightweight examples (highlighted) can be used: display title: smartwatch recommendation display detail: see Smartwatch Catalog for a relevant smartwatch condition: the customer recently purchased phones agent action: recommend a specific smartwatch from the section titled "Smartwatch Catalog"; the recommendation should match the recently purchased phones from the section titled "Recent Purchases".
- Some of the agent actions are not completed yet. (If all the agent actions are done, then the instruction no longer applies.) Notes on following the applicable instructions: Do not suggest any sample responses or agent actions that are not specified in the applicable instructions.
- If unsure about address type, default to 'Permanent'." } Data delivery When AI coach successfully extracts entity data and initiates a tool, the API delivers results in a ToolCall object to the backend system.
- 6 Agent "Great, I've updated your permanent address to 123 Main Street, Austin, TX 78701." Agent verifies pre-filled form in CRM.

### Article Suggestion \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/article-suggestion](https://docs.cloud.google.com/agent-assist/docs/article-suggestion)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- ParticipantsClient () participant path = client . participant path ( project id , conversation id , participant id ) text input = { "text" : text , "language code" : "en-US" } response = client . analyze content ( participant = participant path , text input = text input ) print ( "AnalyzeContent Response:" ) print ( f "Reply Text: { response . reply text } " ) for suggestion result in response . human agent suggestion results : if suggestion result . error is not None : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) for suggestion result in response . end user suggestion results : if suggestion result . error : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) return response Add a message from the end-user and get suggestions In response to the human agent, the end-user says "I want to return my order." This time, the API response contains a suggested document with its associated confidence score.
- ParticipantsClient () participant path = client . participant path ( project id , conversation id , participant id ) text input = { "text" : text , "language code" : "en-US" } response = client . analyze content ( participant = participant path , text input = text input ) print ( "AnalyzeContent Response:" ) print ( f "Reply Text: { response . reply text } " ) for suggestion result in response . human agent suggestion results : if suggestion result . error is not None : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) for suggestion result in response . end user suggestion results : if suggestion result . error : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) return response Complete the conversation When the conversation ends, use the API to complete the conversation.
- As of August 21, 2025 you can no longer create new conversation profiles for this feature, and existing profiles will be removed on or after April 1, 2026.

### FAQ assist \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/faq](https://docs.cloud.google.com/agent-assist/docs/faq)
- Source ID: `site-docs-root`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- ParticipantsClient () participant path = client . participant path ( project id , conversation id , participant id ) text input = { "text" : text , "language code" : "en-US" } response = client . analyze content ( participant = participant path , text input = text input ) print ( "AnalyzeContent Response:" ) print ( f "Reply Text: { response . reply text } " ) for suggestion result in response . human agent suggestion results : if suggestion result . error is not None : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) for suggestion result in response . end user suggestion results : if suggestion result . error : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) return response Add a message from the end-user and get suggestions In response to the agent, the end-user asks "How do I sign up?".
- ParticipantsClient () participant path = client . participant path ( project id , conversation id , participant id ) text input = { "text" : text , "language code" : "en-US" } response = client . analyze content ( participant = participant path , text input = text input ) print ( "AnalyzeContent Response:" ) print ( f "Reply Text: { response . reply text } " ) for suggestion result in response . human agent suggestion results : if suggestion result . error is not None : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) for suggestion result in response . end user suggestion results : if suggestion result . error : print ( f "Error: { suggestion result . error . message } " ) if suggestion result . suggest articles response : for answer in suggestion result . suggest articles response . article answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest faq answers response : for answer in suggestion result . suggest faq answers response . faq answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer record } " ) if suggestion result . suggest smart replies response : for ( answer ) in suggestion result . suggest smart replies response . smart reply answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer record } " ) return response Complete the conversation When the conversation ends, use the API to complete the conversation.
- As of August 21, 2025 you can no longer create new conversation profiles for this feature, and existing profiles will be removed on or after April 1, 2026.

