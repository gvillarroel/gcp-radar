---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.403Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker Conversational Analytics API endpoints"
feature_slug: "looker-conversational-analytics-api-endpoints"
latest_feature_date: "2026-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation"
keywords:
  - "looker"
  - "conversational"
  - "analytics"
  - "endpoints"
  - "now"
  - "includes"
  - "creating"
  - "managing"
---

# Looker Conversational Analytics API endpoints

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker API now includes Conversational Analytics endpoints for creating and managing agents, conversations, and messages.

## Extended Definition

The Looker API now includes Conversational Analytics endpoints for creating and managing agents, conversations, and messages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation)

## Supporting Pages

### "Best practices for using the ConversationalAnalytics API endpoints in Looker's\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Looker Best Practices Send feedback Best practices for using the ConversationalAnalytics API endpoints in Looker's API Stay organized with collections Save and categorize content based on your preferences.
- Looker's ConversationalAnalytics API endpoints let you build custom Conversational Analytics experiences within your embedded applications.
- These APIs mirror the endpoints that power Looker's Conversational Analytics feature and provide the same functions within the Looker API.
- Limitations and considerations When using the ConversationalAnalytics API endpoints, consider the following limitations: Message Persistence : It is your responsibility to persist messages using the POST /conversations/:conversation id/messages endpoint.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Default roles For new instances, Looker creates the following default roles, each of which includes a default permission set of the same name: Admin Admin via IAM Developer Gemini Looker CI Users Conversational Analytics Agent Manager Conversational Analytics User Support Advanced Editor Support Basic Editor Customer Engineer Advanced Editor User Viewer The default roles in the following sections have conditions for use.
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- This permission grants users the ability to perform the following tasks: Write LookML using Gemini assistance when they also have a Looker role that contains the develop permission for at least one model in a LookML project Create custom Looker visualizations using Gemini assistance when they also have a Looker role that contains the can override vis config permission Use Conversational Analytics with Looker Explore data in Looker Studio, even if they don't have a role that contains the explore permission, when they also have a Looker role that contains the access data permission on the model that they are querying chat with agent gemini in looker Model Specific Added 25.18 Conversational Analytics users can chat with data agents that use one or more Looker Explores.
- See Create and manage data agents for more information about data agent permissions. chat with explore chat with agent Model Specific Added 25.18 Conversational Analytics users can chat with a Looker Explore when they have the access data permission on the model that underlies the Explore. save agents chat with explore Model Specific Added 25.18 Conversational Analytics users can create, edit, delete, and share data agents .

### "Google Analytics 4 report transformation \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation)
- Source ID: `site-docs-reference-required-6`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- GA4 report name BigQuery table BigQuery view Audiences p ga4 Audiences ga4 Audiences Demographic details p ga4 DemographicDetails ga4 DemographicDetails Ecommerce purchases p ga4 EcommercePurchases ga4 EcommercePurchases Events p ga4 Events ga4 Events Landing page p ga4 LandingPage ga4 LandingPage Pages and screens p ga4 PagesAndScreens ga4 PagesAndScreens Promotions p ga4 Promotions ga4 Promotions Tech details p ga4 TechDetails ga4 TechDetails Traffic Acquisition p ga4 TrafficAcquisition ga4 TrafficAcquisition User Acquisition p ga4 UserAcquisition ga4 UserAcquisition Table schemas for Google Analytics reports Table Name: Audiences Field Name Description audienceName The given name of an Audience.
- Primary channel groups are the channel groups used in standard reports in Google Analytics and serve as an active record of your property's data in alignment with channel grouping over time. firstUserSource The source that first acquired the user to your website or app. firstUserSourceMedium The combined values of the dimensions firstUserSource and firstUserMedium. firstUserSourcePlatform The source platform that first acquired the user.
- Primary channel groups are the channel groups used in standard reports in Google Analytics and serve as an active record of your property's data in alignment with channel grouping over time. sessionSource The source that initiated a session on your website or app. sessionSourceMedium The combined values of the dimensions sessionSource and sessionMedium. sessionSourcePlatform The source platform of the session's campaign.
- An enumeration which includes Direct, Organic Search, Paid Social, Organic Social, Email, Affiliates, Referral, Paid Search, Video, and Display. firstUserMedium The medium that first acquired the user to your website or app. firstUserPrimaryChannelGroup The primary channel group that originally acquired a user.

