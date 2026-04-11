---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:56.283Z"
product_name: "Google Workspace Marketplace API"
product_slug: "google-workspace-marketplace-api"
feature_name: "License notifications"
feature_slug: "license-notifications"
latest_feature_date: "2026-01-08"
deprecation_date: "2026-01-08"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/marketplace/about-app-review"
  - "https://developers.google.com/workspace/marketplace/example-calls-marketplace-api"
  - "https://developers.google.com/workspace/marketplace/list-multiple-app-integrations"
keywords:
  - "license"
  - "notifications"
  - "the"
  - "provided"
  - "licensenotification"
  - "resource"
  - "and"
  - "list"
---

# License notifications

Product: Google Workspace Marketplace API
Coverage: LOW

## Step 02 Summary

The License notifications feature provided the licenseNotification resource and the licenseNotification.list method for retrieving licensing notifications for a given app; deprecated on 2026-01-08.

## Extended Definition

The License notifications feature provided the licenseNotification resource and the licenseNotification.list method for retrieving licensing notifications for a given app; deprecated on 2026-01-08.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/marketplace/about-app-review](https://developers.google.com/workspace/marketplace/about-app-review)
- [https://developers.google.com/workspace/marketplace/example-calls-marketplace-api](https://developers.google.com/workspace/marketplace/example-calls-marketplace-api)
- [https://developers.google.com/workspace/marketplace/list-multiple-app-integrations](https://developers.google.com/workspace/marketplace/list-multiple-app-integrations)

## Supporting Pages

### "App review process and requirements for the Google Workspace Marketplace\

- URL: [https://developers.google.com/workspace/marketplace/about-app-review](https://developers.google.com/workspace/marketplace/about-app-review)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- The Google Workspace Marketplace listing for the add-on must specify details about the license and subscription requirements that may be required to use the add-on.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To publish an app publicly to the Google Workspace Marketplace, Google reviews your app and its listing to make sure they meet Google's design, content, and style guidelines.
- Google Workspace add-on Name Calendar add-ons If the add-on uses calendar.name or common.name , the name in the manifest is identical to the name provided in the app listing.

### "Get app installation and licensing details \_|\_ Google Workspace Marketplace\

- URL: [https://developers.google.com/workspace/marketplace/example-calls-marketplace-api](https://developers.google.com/workspace/marketplace/example-calls-marketplace-api)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- When an app is individually installed, a provision notification is returned. userLicense.get checks a user's license status, revealing if they are enabled and active. customerLicense.get checks domain licensing status, and the licenseNotification.list is used to see all notifications.
- You can use the licenseNotification.list , userLicense.get , and customerLicense.get methods to obtain detailed licensing and installation data.
- GET /appsmarket/v2/userLicense/{applicationId}/{userId} curl -H "Authorization: Bearer {TOKEN}" https://appsmarket.googleapis.com/appsmarket/v2/userLicense/ APPLICATION ID /user2@cymbalgroup.com Response body Since the application is only administrator installed for user2@cymbalgroup.com, the response returns a userLicense resource for user2@cymbalgroup.com that has the enabled field set to true and the state field set to ACTIVE . { "kind" : "appsmarket#userLicense" , "enabled" : true , "state" : "ACTIVE" , "editionId" : "default edition" , "customerId" : "cymbalgroup.com" , "applicationId" : " APPLICATION ID " , "id" : " USER LICENSE ID " , "userId" : "user2@cymbalgroup.com" } The application is deleted for everyone in the organization Even though the application was deleted for everyone in the organization, user1@cymbalgroup.com still has access because they previously installed it individually. userLicense.get request This request calls the userLicense.get method to get the licensing status of user2@cymbalgroup.com to determine if they have permission to use the application.
- GET /appsmarket/v2/userLicense/{applicationId}/{userId} curl -H "Authorization: Bearer {TOKEN}" https://appsmarket.googleapis.com/appsmarket/v2/userLicense/ APPLICATION ID /user3@cymbalgroup.com Response body Since the application is only administrator installed for user2@cymbalgroup.com, the response returns a userLicense resource for user3@cymbalgroup.com that has the enabled field set to false , indicating that the domain administrator for cymbalgroup.com has not activated the application for this domain, and the state field set to ACTIVE , indicating that the user has a valid license and should be permitted to use the application. { "kind" : "appsmarket#userLicense" , "enabled" : false , "state" : "ACTIVE" , "editionId" : "default edition" , "customerId" : "cymbalgroup.com" , "applicationId" : " APPLICATION ID " , "id" : " USER LICENSE ID " , "userId" : "user3@cymbalgroup.com" } userLicense.get request This request calls the userLicense.get method to get the licensing status of user2@cymbalgroup.com to determine if they have permission to use the application.

### "List app integrations together \_|\_ Google Workspace Marketplace \_|\_\

- URL: [https://developers.google.com/workspace/marketplace/list-multiple-app-integrations](https://developers.google.com/workspace/marketplace/list-multiple-app-integrations)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Multiple app integrations, excluding Google Chat apps, can be published in a single listing, allowing simultaneous installation and authorization for users.
- For example, if your app offers a specific integration with Google Sheets and is available as a web app, instead of creating two app listings for a Sheets add-on and a web app, you can list them together as one app.
- Doing so lets users install and authorize them at the same time, provides a more seamless user experience, and lets you grow your user count faster because all integrations are installed from one listing.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

