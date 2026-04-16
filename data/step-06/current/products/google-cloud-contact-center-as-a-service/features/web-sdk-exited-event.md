---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.017Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Web SDK exited event"
feature_slug: "web-sdk-exited-event"
latest_feature_date: "2025-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets"
keywords:
  - "web"
  - "sdk"
  - "exited"
  - "event"
  - "now"
  - "provides"
  - "triggers"
  - "when"
---

# Web SDK exited event

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The web SDK now provides an exited event that triggers when an end user leaves a chat session after the agent ends it.

## Extended Definition

The web SDK now provides an exited event that triggers when an end user leaves a chat session after the agent ends it.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- For When the transfer count exceeds the limit , select one of the following: Disable all transfer options : when the limit is reached, this prevents an agent from making additional transfers Allow one final transfer to the queue : when the limit is reached, this lets an agent do a final transfer to a queue that you specify.
- Proactive Web SDK Triggers Overview When triggers are configured, and the trigger conditions are met, the Web SDK window will appear expanded on the page, prompting the consumer to make a selection from choices dictated by the trigger configuration.
- Triggers can be set for: Time spent on a page Keywords are/are not in the URL Returning or new visitor to the page Visited page number of times Setting up Proactive Triggers There are four steps to follow when setting up a new Proactive Trigger.
- Reporting details When the timer hits 00 seconds, an event is logged that notes that the agent exceeded the target chat response time and can be seen in the 2 Agent Activity reports.

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Log.i ( "CCAI Platform Event Type" , eventType.getValue ()) ; StringBuilder builder = new StringBuilder () ; for ( Map.Entry<String, Object> entry : eventData.entrySet ()) { builder.append ( entry.getKey ()) .append ( " : " ) .append ( entry.getValue ()) .append ( "\n" ) ; } Log.i ( "CCAI Platform Event Data" , builder.toString ()) ; } }) ; Event type Description Data included in event EmailClicked Triggers when the end-user clicks the email channel.
- Log.i ( "CCAI Platform Event Type" , eventType.getValue ()) ; StringBuilder builder = new StringBuilder () ; for ( Map.Entry<String, Object> entry : eventData.entrySet ()) { builder.append ( entry.getKey ()) .append ( " : " ) .append ( entry.getValue ()) .append ( "\n" ) ; } Log.i ( "CCAI Platform Event Data" , builder.toString ()) ; } }) ; App permissions The app requires the following permissions and requests these permissions of user when required.
- Queue menu data, session created data, session ended data SdkTerminated Triggers when the SDK is closed, including when it's closed unexpectedly.
- Session data SessionResumed Triggers when the end-user switches back to a chat or call session from the background.

### "Standard Reports: Queue Data Sets \_|\_ Google Cloud Contact Center as a\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- For the queue interactions for each date, the report provides a breakdown of how the interactions exited the queue.
- For the queue entries for each date, the report provides a breakdown of how those interactions exited the queue.
- This report provides insights to configured SLAs including thresholds and service level event status.
- Avg Speed of Answer (ASA) Average time that elapsed between when an interaction entered a queue and when it was assigned to an agent. (Avg Queue Time) Max Speed to Answer The maximum time that elapsed from when an interaction entered a queue and when it was assigned to an agent. (Also known as Max Queue Time) SLA % Out of all the interactions that entered the queue, the percentage of interactions that started an active conversation with an agent within the configured SLA threshold.

