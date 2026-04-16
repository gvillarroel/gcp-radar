---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.488Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Studio in Looker reports in System Activity"
feature_slug: "studio-in-looker-reports-in-system-activity"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-server-usage"
keywords:
  - "studio"
  - "looker"
  - "reports"
  - "system"
  - "activity"
  - "includes"
  - "usage"
  - "historical"
---

# Studio in Looker reports in System Activity

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker System Activity includes usage, historical, and performance information about Looker reports.

## Extended Definition

Looker System Activity includes usage, historical, and performance information about Looker reports.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation)
- [https://docs.cloud.google.com/looker/docs/admin-panel-server-usage](https://docs.cloud.google.com/looker/docs/admin-panel-server-usage)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .
- Looker Studio users with this permission can view Looker data on Looker Studio reports that use the Looker connector. see lookml dashboards access data Model Specific Users can see the LookML Dashboards folder, which includes all LookML dashboards.
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Permissions and Looker licenses Looker licenses classify users into three types: Developer (Admin) Standard (Creator) Viewer The permissions granted to a user determine how that user is classified under the Looker license: A user is classified as a Developer (Admin) user if they have the Admin default role , or at least one of the following permissions: develop manage models see datagroups see logs see pdts sudo A user is classified as a Standard (Creator) user if they have none of the Developer (Admin) permissions but do have at least one of the following permissions: create prefetches explore manage homepage manage spaces save content see queries see schedules see system activity see users use sql runner save agents admin agents A user is classified as a Viewer if they have the access data permission, but none of the Developer (Admin) permissions and none of the Standard (Creator) permissions.

### "Google Analytics 4 report transformation \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation)
- Source ID: `site-docs-reference-required-6`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Current user behavior does not affect historical audience membership in reports. averageSessionDuration The average duration (in seconds) of users' sessions. newUsers The number of users who interacted with your site or launched your app for the first time (event triggered: first open or first visit). screenPageViewsPerSession The number of app screens or web pages your users viewed per session.
- Includes desktop and mobile operating systems such as Windows and Android. operatingSystemVersion The operating system versions used by visitors to your website or app.
- For example, English. region The geographic region from which the user activity originated, derived from their IP address. userAgeBracket User age brackets. userGender User gender. activeUsers The number of distinct users who visited your website or application. engagedSessions The number of sessions that had an engaged event. engagementRate The percentage of sessions that had an engaged event. eventCount The count of events. keyEvents The number of key events that occurred. newUsers The number of users who interacted with your site or launched your app for the first time (event triggered: first open or first visit). totalRevenue The sum of revenue from purchases, subscriptions, and advertising (Purchase revenue plus Subscription revenue plus Ad revenue) minus refunded transaction revenue. totalUsers The number of distinct users who have logged at least one event, regardless of whether the site or app was in use when that event was logged. userEngagementDuration The total amount of time (in seconds) your website or app was in the foreground of users' devices. userKeyEventRate The percentage of users who triggered any key event.
- GA4 report name BigQuery table BigQuery view Audiences p ga4 Audiences ga4 Audiences Demographic details p ga4 DemographicDetails ga4 DemographicDetails Ecommerce purchases p ga4 EcommercePurchases ga4 EcommercePurchases Events p ga4 Events ga4 Events Landing page p ga4 LandingPage ga4 LandingPage Pages and screens p ga4 PagesAndScreens ga4 PagesAndScreens Promotions p ga4 Promotions ga4 Promotions Tech details p ga4 TechDetails ga4 TechDetails Traffic Acquisition p ga4 TrafficAcquisition ga4 TrafficAcquisition User Acquisition p ga4 UserAcquisition ga4 UserAcquisition Table schemas for Google Analytics reports Table Name: Audiences Field Name Description audienceName The given name of an Audience.

### Admin settings - Usage \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-server-usage](https://docs.cloud.google.com/looker/docs/admin-panel-server-usage)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Check the System Activity dashboards for additional usage information about your Looker instance.
- This prevents the comments from affecting the caching of Looker queries, but it also means that you cannot see the added comments in most places in Looker (such as the Queries page or System Activity ).
- Query by Source tile The Query by Source tile, which is located at the top of the Usage page, includes information about the number of queries run from different sources within Looker.
- Usage information can be viewed using the System Activity dashboards and Explores .

