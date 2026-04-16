---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.160Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Data preview in the data source editor"
feature_slug: "data-preview-in-the-data-source-editor"
latest_feature_date: "2025-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/studio/nativedimension"
  - "https://developers.google.com/looker-studio/visualization/developer-preview"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/analyticshub"
keywords:
  - "preview"
  - "source"
  - "editor"
  - "shows"
  - "fields"
  - "connected"
---

# Data preview in the data source editor

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The data source editor shows a preview of the fields in the connected data.

## Extended Definition

The data source editor shows a preview of the fields in the connected data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)
- [https://developers.google.com/looker-studio/visualization/developer-preview](https://developers.google.com/looker-studio/visualization/developer-preview)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/analyticshub](https://docs.cloud.google.com/iam/docs/roles-permissions/analyticshub)

## Supporting Pages

### Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)
- Source ID: `site-docs-reference-required-4`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limits of NATIVE DIMENSION Who can use native functions If native functions are enabled, owners and editors of the data source can create fields with native functions on the data source.
- For example: NATIVE DIMENSION("CAST({expression} AS DATETIME)", "DATETIME") Related resources Dates and times Calculated fields Data Studio function list CAST function Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Viewers of the data source can use fields with native functions in charts.
- In the top right of the data source editor, click Native functions .

### Community Visualizations Developer Preview \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/visualization/developer-preview](https://developers.google.com/looker-studio/visualization/developer-preview)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This Developer Preview offers core functionalities and resources for building, sharing, and managing visualizations using the Looker Studio Community Component Library.
- The Developer Preview / Beta introduces the core functionality, resources, and tools required for you to build and share visualizations in Looker Studio.
- While external resource requests are currently restricted for security, future development plans include enhancements to developer workflow, distribution options, and new visualization capabilities.
- Even though a Content Security Policy restricts requests to external resources, some users prefer to know that their data will never be rendered by a third-party built community visualization.

### "BigQuery sharing roles and permissions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/analyticshub](https://docs.cloud.google.com/iam/docs/roles-permissions/analyticshub)
- Source ID: `site-iam-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery sharing roles Role Permissions Analytics Hub Admin ( roles/ analyticshub.admin ) Administer Data Exchanges and Listings analyticshub. dataExchanges. create analyticshub. dataExchanges. delete analyticshub.dataExchanges.get analyticshub. dataExchanges. getIamPolicy analyticshub. dataExchanges. list analyticshub. dataExchanges. setIamPolicy analyticshub. dataExchanges. update analyticshub. dataExchanges. viewSubscriptions analyticshub.listings.create analyticshub.listings.delete analyticshub.listings.get analyticshub. listings. getIamPolicy analyticshub.listings.list analyticshub. listings. setIamPolicy analyticshub.listings.update analyticshub. listings. viewSubscriptions analyticshub.subscriptions. analyticshub. subscriptions. create analyticshub. subscriptions. delete analyticshub.subscriptions.get analyticshub. subscriptions. list analyticshub. subscriptions. update resourcemanager.projects.get resourcemanager.projects.list Analyticshub Editor ( roles/ analyticshub.editor ) Editor role for analyticshub analyticshub. dataExchanges. create analyticshub. dataExchanges. delete analyticshub.dataExchanges.get analyticshub. dataExchanges. getIamPolicy analyticshub. dataExchanges. list analyticshub. dataExchanges. update analyticshub.listings.create analyticshub.listings.delete analyticshub.listings.get analyticshub. listings. getIamPolicy analyticshub.listings.list analyticshub.listings.update analyticshub.subscriptions. analyticshub. subscriptions. create analyticshub. subscriptions. delete analyticshub.subscriptions.get analyticshub. subscriptions. list analyticshub. subscriptions. update resourcemanager.projects.get resourcemanager.projects.list Analytics Hub Viewer ( roles/ analyticshub.viewer ) Can browse Data Exchanges and Listings analyticshub.dataExchanges.get analyticshub. dataExchanges. getIamPolicy analyticshub. dataExchanges. list analyticshub.listings.get analyticshub. listings. getIamPolicy analyticshub.listings.list resourcemanager.projects.get resourcemanager.projects.list Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin ) Grants full control over the Listing, including updating, deleting and setting ACLs analyticshub.dataExchanges.get analyticshub. dataExchanges. getIamPolicy analyticshub. dataExchanges. list analyticshub.listings.delete analyticshub.listings.get analyticshub. listings. getIamPolicy analyticshub.listings.list analyticshub. listings. setIamPolicy analyticshub.listings.update analyticshub. listings. viewSubscriptions resourcemanager.projects.get resourcemanager.projects.list Analytics Hub Publisher ( roles/ analyticshub.publisher ) Can publish to Data Exchanges thus creating Listings analyticshub.dataExchanges.get analyticshub. dataExchanges. getIamPolicy analyticshub. dataExchanges. list analyticshub.listings.create analyticshub.listings.get analyticshub. listings. getIamPolicy analyticshub.listings.list resourcemanager.projects.get resourcemanager.projects.list Analytics Hub Subscriber ( roles/ analyticshub.subscriber ) Can browse Data Exchanges and subscribe to Listings analyticshub.dataExchanges.get analyticshub. dataExchanges. getIamPolicy analyticshub. dataExchanges. list analyticshub. dataExchanges. subscribe analyticshub.listings.get analyticshub. listings. getIamPolicy analyticshub.listings.list analyticshub. listings. subscribe resourcemanager.projects.get resourcemanager.projects.list Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner ) Grants full control over the Subscription, including updating and deleting analyticshub.dataExchanges.get analyticshub. dataExchanges. getIamPolicy analyticshub. dataExchanges. list analyticshub.listings.get analyticshub. listings. getIamPolicy analyticshub.listings.list analyticshub.subscriptions. analyticshub. subscriptions. create analyticshub. subscriptions. delete analyticshub.subscriptions.get analyticshub. subscriptions. list analyticshub. subscriptions. update resourcemanager.projects.get resourcemanager.projects.list BigQuery sharing permissions Permission Included in roles analyticshub. dataExchanges. create Owner ( roles/ owner ) Editor ( roles/ editor ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) analyticshub. dataExchanges. delete Owner ( roles/ owner ) Editor ( roles/ editor ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) analyticshub.dataExchanges.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) Analytics Hub Viewer ( roles/ analyticshub.viewer ) Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin ) Analytics Hub Publisher ( roles/ analyticshub.publisher ) Analytics Hub Subscriber ( roles/ analyticshub.subscriber ) Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner ) Support User ( roles/ iam.supportUser ) analyticshub. dataExchanges. getIamPolicy Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) Analytics Hub Viewer ( roles/ analyticshub.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin ) Analytics Hub Publisher ( roles/ analyticshub.publisher ) Analytics Hub Subscriber ( roles/ analyticshub.subscriber ) Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) analyticshub. dataExchanges. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) Analytics Hub Viewer ( roles/ analyticshub.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin ) Analytics Hub Publisher ( roles/ analyticshub.publisher ) Analytics Hub Subscriber ( roles/ analyticshub.subscriber ) Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) analyticshub. dataExchanges. setIamPolicy Owner ( roles/ owner ) Analytics Hub Admin ( roles/ analyticshub.admin ) Security Admin ( roles/ iam.securityAdmin ) analyticshub. dataExchanges. subscribe Owner ( roles/ owner ) Analytics Hub Subscriber ( roles/ analyticshub.subscriber ) analyticshub. dataExchanges. update Owner ( roles/ owner ) Editor ( roles/ editor ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) analyticshub. dataExchanges. viewSubscriptions Owner ( roles/ owner ) Analytics Hub Admin ( roles/ analyticshub.admin ) analyticshub.listings.create Owner ( roles/ owner ) Editor ( roles/ editor ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) Analytics Hub Publisher ( roles/ analyticshub.publisher ) analyticshub.listings.delete Owner ( roles/ owner ) Editor ( roles/ editor ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin ) analyticshub.listings.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) Analytics Hub Viewer ( roles/ analyticshub.viewer ) Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin ) Analytics Hub Publisher ( roles/ analyticshub.publisher ) Analytics Hub Subscriber ( roles/ analyticshub.subscriber ) Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner ) Support User ( roles/ iam.supportUser ) analyticshub. listings. getIamPolicy Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) Analytics Hub Viewer ( roles/ analyticshub.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin ) Analytics Hub Publisher ( roles/ analyticshub.publisher ) Analytics Hub Subscriber ( roles/ analyticshub.subscriber ) Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) analyticshub.listings.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) Analytics Hub Viewer ( roles/ analyticshub.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin ) Analytics Hub Publisher ( roles/ analyticshub.publisher ) Analytics Hub Subscriber ( roles/ analyticshub.subscriber ) Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) analyticshub. listings. setIamPolicy Owner ( roles/ owner ) Analytics Hub Admin ( roles/ analyticshub.admin ) Security Admin ( roles/ iam.securityAdmin ) Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin ) analyticshub. listings. subscribe Owner ( roles/ owner ) Analytics Hub Subscriber ( roles/ analyticshub.subscriber ) analyticshub.listings.update Owner ( roles/ owner ) Editor ( roles/ editor ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin ) analyticshub. listings. viewSubscriptions Owner ( roles/ owner ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin ) analyticshub. subscriptions. create Owner ( roles/ owner ) Editor ( roles/ editor ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner ) analyticshub. subscriptions. delete Owner ( roles/ owner ) Editor ( roles/ editor ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner ) analyticshub.subscriptions.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner ) Support User ( roles/ iam.supportUser ) analyticshub. subscriptions. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) analyticshub. subscriptions. update Owner ( roles/ owner ) Editor ( roles/ editor ) Analytics Hub Admin ( roles/ analyticshub.admin ) Analyticshub Editor ( roles/ analyticshub.editor ) Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

