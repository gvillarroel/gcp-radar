---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.439Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Conversational Analytics System Activity event tracking"
feature_slug: "conversational-analytics-system-activity-event-tracking"
latest_feature_date: "2025-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices"
  - "https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation"
keywords:
  - "conversational"
  - "analytics"
  - "system"
  - "activity"
  - "event"
  - "tracking"
  - "explores"
  - "now"
---

# Conversational Analytics System Activity event tracking

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

System Activity Explores now include Conversational Analytics event and event-attribute data.

## Extended Definition

System Activity Explores now include Conversational Analytics event and event-attribute data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices)
- [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .
- This permission grants users the ability to perform the following tasks: Write LookML using Gemini assistance when they also have a Looker role that contains the develop permission for at least one model in a LookML project Create custom Looker visualizations using Gemini assistance when they also have a Looker role that contains the can override vis config permission Use Conversational Analytics with Looker Explore data in Looker Studio, even if they don't have a role that contains the explore permission, when they also have a Looker role that contains the access data permission on the model that they are querying chat with agent gemini in looker Model Specific Added 25.18 Conversational Analytics users can chat with data agents that use one or more Looker Explores.
- Users with this role can create, edit, share, and delete Conversational Analytics data agents that use Looker Explores.

### "Best practices for using the ConversationalAnalytics API endpoints in Looker's\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Recommendations Follow these recommendations for best results: Persist all messages : After each call to /conversational analytics/chat , make sure to call POST /conversations/:conversation id/messages to save both the user's message from that turn and all system messages that are returned by the chat API.
- Failing to persist messages after each call to /conversational analytics/chat will prevent the conversation history from being maintained, and the agent won't have context for follow-up questions in a multi-turn conversation.
- Persist messages : The /conversational analytics/chat endpoint does not persist the user message or the returned system messages.
- Limitations and considerations When using the ConversationalAnalytics API endpoints, consider the following limitations: Message Persistence : It is your responsibility to persist messages using the POST /conversations/:conversation id/messages endpoint.

### "Google Analytics 4 report transformation \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation)
- Source ID: `site-docs-reference-required-6`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, English. region The geographic region from which the user activity originated, derived from their IP address. userAgeBracket User age brackets. userGender User gender. activeUsers The number of distinct users who visited your website or application. engagedSessions The number of sessions that had an engaged event. engagementRate The percentage of sessions that had an engaged event. eventCount The count of events. keyEvents The number of key events that occurred. newUsers The number of users who interacted with your site or launched your app for the first time (event triggered: first open or first visit). totalRevenue The sum of revenue from purchases, subscriptions, and advertising (Purchase revenue plus Subscription revenue plus Ad revenue) minus refunded transaction revenue. totalUsers The number of distinct users who have logged at least one event, regardless of whether the site or app was in use when that event was logged. userEngagementDuration The total amount of time (in seconds) your website or app was in the foreground of users' devices. userKeyEventRate The percentage of users who triggered any key event.
- GA4 report name BigQuery table BigQuery view Audiences p ga4 Audiences ga4 Audiences Demographic details p ga4 DemographicDetails ga4 DemographicDetails Ecommerce purchases p ga4 EcommercePurchases ga4 EcommercePurchases Events p ga4 Events ga4 Events Landing page p ga4 LandingPage ga4 LandingPage Pages and screens p ga4 PagesAndScreens ga4 PagesAndScreens Promotions p ga4 Promotions ga4 Promotions Tech details p ga4 TechDetails ga4 TechDetails Traffic Acquisition p ga4 TrafficAcquisition ga4 TrafficAcquisition User Acquisition p ga4 UserAcquisition ga4 UserAcquisition Table schemas for Google Analytics reports Table Name: Audiences Field Name Description audienceName The given name of an Audience.
- Table Name: LandingPage Field Name Description landingPage The page path associated with the first pageview in a session. activeUsers The number of distinct users who visited your website or application. keyEvents The number of key events that occurred. newUsers The number of users who interacted with your site or launched your app for the first time (event triggered: first open or first visit). sessionKeyEventRate The percentage of sessions in which any key event was triggered. sessions The number of sessions that began on your site or app (event triggered: session start). totalRevenue The sum of revenue from purchases, subscriptions, and advertising (Purchase revenue plus Subscription revenue plus Ad revenue) minus refunded transaction revenue. userEngagementDurationPerSession Average engagement time per session Table Name: PagesAndScreens Field Name Description contentGroup A category that applies to items of published content.
- This metric is returned as a fraction; for example, 0.7239 means 72.39% of sessions were engaged sessions. engagedSessions The number of sessions that lasted longer than 10 seconds, or had a key event, or had 2 or more screen views. keyEvents The number of key events that occurred. sessions The number of sessions that began on your site or app (event triggered: session start). sessionKeyEventRate The percentage of sessions in which any key event was triggered. sessionsPerUser The average number of sessions per user (Sessions divided by Active Users). totalRevenue The sum of revenue from purchases, subscriptions, and advertising (Purchase revenue plus Subscription revenue plus Ad revenue) minus refunded transaction revenue. userEngagementDurationPerSession Average engagement time per session Table Name: UserAcquisition Field Name Description firstUserCampaignName Name of the marketing campaign that first acquired the user.

