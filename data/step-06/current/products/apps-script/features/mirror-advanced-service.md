---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.618Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Mirror advanced service"
feature_slug: "mirror-advanced-service"
latest_feature_date: "2013-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/events"
  - "https://developers.google.com/apps-script/advanced/groups"
  - "https://developers.google.com/apps-script/advanced/people"
keywords:
  - "mirror"
  - "advanced"
  - "apps"
  - "script"
  - "added"
---

# Mirror advanced service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script added an advanced service for the Mirror API.

## Extended Definition

Apps Script added an advanced service for the Mirror API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/events](https://developers.google.com/apps-script/advanced/events)
- [https://developers.google.com/apps-script/advanced/groups](https://developers.google.com/apps-script/advanced/groups)
- [https://developers.google.com/apps-script/advanced/people](https://developers.google.com/apps-script/advanced/people)

## Supporting Pages

### "Advanced Cloud Identity Groups Service \_|\_ Apps Script \_|\_ Google for\

- URL: [https://developers.google.com/apps-script/advanced/groups](https://developers.google.com/apps-script/advanced/groups)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Advanced Cloud Identity Groups Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the advanced CIG service uses the same objects, methods, and parameters as the public API.
- Page Summary outlined flag The advanced Cloud Identity Groups (CIG) service in Apps Script allows interaction with the CIG API.
- The advanced Cloud Identity Groups (CIG) service lets you use the CIG API in Google Apps Script.

### "Advanced Google Workspace Events Service \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/advanced/events](https://developers.google.com/apps-script/advanced/events)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Subscriptions . create ({ targetResource : targetResource , eventTypes : eventTypes , notificationEndpoint : { pubsubTopic : pubsubTopic , }, }); console . log ( operation ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to create subscription with error %s" , err . message ); } } List subscriptions To list subscriptions filtered by event types and target resource, add the following function to the Apps Script project's code: advanced/events.gs View on GitHub / Lists subscriptions created by the calling app filtered by one or more event types and optionally by a target resource.
- Subscriptions . patch ( { // Setting the TTL to 0 seconds extends the subscription to its maximum expiration time. ttl : "0s" , }, name , ); console . log ( operation ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to update subscription with error %s" , err . message ); } } Reactivate subscription To reactivate a subscription, add the following function to the Apps Script project's code: advanced/events.gs View on GitHub / Reactivates a suspended subscription.
- Subscriptions . list ({ filter }); console . log ( response ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to list subscriptions with error %s" , err . message ); } } Get subscription To get information about a subscription, add the following function to the Apps Script project's code: advanced/events.gs View on GitHub / Gets details about a subscription.
- Subscriptions . get ( name ); console . log ( subscription ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to get subscription with error %s" , err . message ); } } Update subscription To update or renew a subscription, add the following function to the Apps Script project's code: advanced/events.gs View on GitHub / Updates an existing subscription.

### Advanced People Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/people](https://developers.google.com/apps-script/advanced/people)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Advanced People Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the advanced People service uses the same objects, methods, and parameters as the public API.
- Page Summary outlined flag The advanced People service in Apps Script utilizes the People API to manage contact and profile data.
- The Advanced People Service lets you use the People API in Google Apps Script.

