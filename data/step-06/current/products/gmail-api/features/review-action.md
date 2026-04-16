---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.977Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Review Action"
feature_slug: "review-action"
latest_feature_date: "2013-10-28"
deprecation_date: "2017-07-15"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/markup/reference/one-click-action"
  - "https://developers.google.com/workspace/gmail/markup/actions/actions-overview"
  - "https://developers.google.com/workspace/gmail/markup/actions/declaring-actions"
keywords:
  - "generally"
  - "review"
  - "deprecated"
  - "users"
  - "action"
  - "available"
---

# Review Action

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

Review Action is deprecated; Review Action is now generally available to all users; deprecated on 2017-07-15.

## Extended Definition

Review Action is deprecated; Review Action is now generally available to all users; deprecated on 2017-07-15.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/markup/reference/one-click-action](https://developers.google.com/workspace/gmail/markup/reference/one-click-action)
- [https://developers.google.com/workspace/gmail/markup/actions/actions-overview](https://developers.google.com/workspace/gmail/markup/actions/actions-overview)
- [https://developers.google.com/workspace/gmail/markup/actions/declaring-actions](https://developers.google.com/workspace/gmail/markup/actions/declaring-actions)

## Supporting Pages

### Declare Actions \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/markup/actions/declaring-actions](https://developers.google.com/workspace/gmail/markup/actions/declaring-actions)
- Source ID: `site-docs-reference-required-10`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To deep link to an app, include additional target URLs encoded with the android-app:// and ios-app:// schemes as shown below: JSON-LD "target" : [ “<web url>” , “a n droid - app : //<android package name>/<scheme>/<host>/<path+query>”, “ios - app : //<App store ID>/<scheme>/<host><path+query>" ] Microdata < link itemprop = "target" href = "<web url>" / > < link itemprop = "target" href = "android-app://<android package name>/<scheme>/<host>/<path+query>”/> < link itemprop=" target " href=" ios - app : //<App store ID>/<scheme>/<host>/<path+query>"/> Extending the previous EmailMessage example: JSON-LD < scrip t t ype= "application/ld+json" > { "@context" : "http://schema.org" , "@type" : "EmailMessage" , "name" : "Watch movie" , ... i nf orma t io n abou t t he movie ... "potentialAction" : { "@type" : "ViewAction" , "target" : [ "https://watch-movies.com/watch?movieId=abc123" , "android-app://com.watchmovies.app/http/watch-movies.com/watch?movieId=abc123" , "ios-app://12345/movieapp/watch-movies.com/watch?movieId=abc123" ] } } < /scrip t > Microdata < div itemscope itemtype = "http://schema.org/EmailMessage" > < meta itemprop = "name" content = "Watch movie" / > ... information about the movie ... < div itemprop = "potentialAction" itemscope itemtype = "http://schema.org/ViewAction" > < meta itemprop = "target" content = "https://watch-movies.com/watch?movieId=abc123" / > < meta itemprop = "target" content = "android-app://com.watchmovies.android/http/watch-movies.com/watch?movieId=abc123" / > < meta itemprop = "target" content = "ios://12345/movieapp/watch-movies.com/watch?movieId=abc123" / > < / div > < / div > If the user doesn't have your app, the action takes the user to the web URL you provide.
- To set the time window for when an action is displayed, set the startTime and endTime properties of the action: JSON-LD < scrip t t ype= "application/ld+json" > { "@context" : "http://schema.org" , "@type" : "EmailMessage" , "potentialAction" : { "@type" : "ConfirmAction" , "name" : "Save coupon" , "handler" : { "@type" : "HttpActionHandler" , "url" : "https://my-coupons.com/approve?couponId=abc123" }, "startTime" : "2015-06-01T12:00:00Z" , "endTime" : "2015-06-05T12:00:00Z" } } < /scrip t > Microdata < div itemscope itemtype = "http://schema.org/EmailMessage" > < div itemprop = "potentialAction" itemscope itemtype = "http://schema.org/ConfirmAction" > < meta itemprop = "name" content = "Save coupon" / > < div itemprop = "handler" itemscope itemtype = "http://schema.org/HttpActionHandler" > < link itemprop = "url" href = "https://my-coupons.com/approve?couponId=abc123" / > < / div > < meta itemprop = "startTime" content = "2015-06-01T12:00:00Z" / > < meta itemprop = "endTime" content = "2015-06-05T12:00:00Z" / > < / div > < / div > Further Reading For more details about Actions, see: Handling Action Requests Securing Actions Android Deep Linking iOS Deep Linking Note: Some of the schemas used by Google are still going through the standardization process of schema.org , and therefore, may change in the future.
- The following example adds a ConfirmAction button to an email about an expense report: JSON-LD < scrip t t ype= "application/ld+json" > { "@context" : "http://schema.org" , "@type" : "EmailMessage" , "potentialAction" : { "@type" : "ConfirmAction" , "name" : "Approve Expense" , "handler" : { "@type" : "HttpActionHandler" , "url" : "https://myexpenses.com/approve?expenseId=abc123" } }, "description" : "Approval request for John's $10.13 expense for office supplies" } < /scrip t > Microdata < div itemscope itemtype = "http://schema.org/EmailMessage" > < div itemprop = "potentialAction" itemscope itemtype = "http://schema.org/ConfirmAction" > < meta itemprop = "name" content = "Approve Expense" / > < div itemprop = "handler" itemscope itemtype = "http://schema.org/HttpActionHandler" > < link itemprop = "url" href = "https://myexpenses.com/approve?expenseId=abc123" / > < / div > < / div > < meta itemprop = "description" content = "Approval request for John's $10.13 expense for office supplies" / > < / div > Expiring Actions In many cases, actions are only relevant for a limited period of time.
- For example, to make an EmailMessage entity have a ViewAction Go-To link, populate the email's potentialAction property, as in the following example: JSON-LD < scrip t t ype= "application/ld+json" > { "@context" : "http://schema.org" , "@type" : "EmailMessage" , "potentialAction" : { "@type" : "ViewAction" , "target" : "https://watch-movies.com/watch?movieId=abc123" , "name" : "Watch movie" }, "description" : "Watch the 'Avengers' movie online" } < /scrip t > Microdata < div itemscope itemtype = "http://schema.org/EmailMessage" > < div itemprop = "potentialAction" itemscope itemtype = "http://schema.org/ViewAction" > < link itemprop = "target" href = "https://watch-movies.com/watch?movieId=abc123" / > < meta itemprop = "name" content = "Watch movie" / > < / div > < meta itemprop = "description" content = "Watch the 'Avengers' movie online" / > < / div > Note that the markup above is automatically ignored by other email clients that do not support schemas in emails.

### What Are Actions? \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/markup/actions/actions-overview](https://developers.google.com/workspace/gmail/markup/actions/actions-overview)
- Source ID: `site-docs-reference-required-10`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Actions enable users to interact with your product or service right inside Gmail.
- Further Reading Declaring Actions Note: Some of the schemas used by Google are still going through the standardization process of schema.org , and therefore, may change in the future.
- For instance, an airline sending a check-in reminder can add a Go-To Action to quickly take the user to the airline website to select a seat or request an upgrade.
- Go-To Actions For more complex interactions, Go-To Actions can be used to provide a direct link to the page where the action can be performed.

### One Click Actions \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/markup/reference/one-click-action](https://developers.google.com/workspace/gmail/markup/reference/one-click-action)
- Source ID: `site-docs-reference-required-11`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Specification For properties available to these actions, refer to the documentation for the specific types ConfirmAction and SaveAction .
- Confirm Action You may add a one-click confirm button to emails requiring users to approve, confirm and acknowledge something.
- One-click actions allow users to perform operations directly from the inbox without having to leave Gmail.
- The following declaration adds a ConfirmAction button to an email about an expense report: JSON-LD < scrip t t ype= "application/ld+json" > { "@context" : "http://schema.org" , "@type" : "EmailMessage" , "potentialAction" : { "@type" : "ConfirmAction" , "name" : "Approve Expense" , "handler" : { "@type" : "HttpActionHandler" , "url" : "https://myexpenses.com/approve?expenseId=abc123" } }, "description" : "Approval request for John's $10.13 expense for office supplies" } < /scrip t > Microdata < div itemscope itemtype = "http://schema.org/EmailMessage" > < div itemprop = "potentialAction" itemscope itemtype = "http://schema.org/ConfirmAction" > < meta itemprop = "name" content = "Approve Expense" / > < div itemprop = "handler" itemscope itemtype = "http://schema.org/HttpActionHandler" > < link itemprop = "url" href = "https://myexpenses.com/approve?expenseId=abc123" / > < / div > < / div > < meta itemprop = "description" content = "Approval request for John's $10.13 expense for office supplies" / > < / div > Save Action SaveAction can be used to describe interactions like saving a coupon or adding songs to the listen queue.

