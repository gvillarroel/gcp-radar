---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.503Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Earth Engine Apps Google Group access control"
feature_slug: "earth-engine-apps-google-group-access-control"
latest_feature_date: "2019-11-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/access_control"
  - "https://developers.google.com/earth-engine/guides/apps"
  - "https://developers.google.com/earth-engine/guides/noncommercial_tiers"
keywords:
  - "earth"
  - "engine"
  - "apps"
  - "group"
  - "access"
  - "control"
  - "can"
  - "restricted"
---

# Earth Engine Apps Google Group access control

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Earth Engine Apps can be restricted so only members of a specified Google Group can access them.

## Extended Definition

Earth Engine Apps can be restricted so only members of a specified Google Group can access them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- [https://developers.google.com/earth-engine/guides/apps](https://developers.google.com/earth-engine/guides/apps)
- [https://developers.google.com/earth-engine/guides/noncommercial_tiers](https://developers.google.com/earth-engine/guides/noncommercial_tiers)

## Supporting Pages

### Control access to resources \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the case of a public Earth Engine App, the identity granted that role is earth-engine-public-apps@appspot.gserviceaccount.com and in the case of restricted apps the identity is the Access Restriction Google Group configured by the app creator.
- Permissions needed on the billing account billing.subscriptions.list Apps management Display app info Permissions needed iam.serviceAccounts.get iam.serviceAccounts.getIamPolicy , if app is restricted (less common) Suggested roles Viewer ( roles/viewer ) OR Earth Engine Apps Publisher ( roles/earthengine.appsPublisher ) Publish/Update app Permissions needed iam.serviceAccounts.get iam.serviceAccounts.create iam.serviceAccounts.enable iam.serviceAccounts.getIamPolicy iam.serviceAccounts.setIamPolicy iam.serviceAccounts.disable , if app is moved from one project to another (uncommon) Suggested roles Earth Engine Apps Publisher ( roles/earthengine.appsPublisher ) OR Service Account Admin ( roles/iam.serviceAccountAdmin ) Notes In addition, Earth Engine App service accounts identify themselves to the Earth Engine servers by presenting an OAuth access token.
- These roles are: Role Title Description roles/earthengine.viewer Earth Engine Resource Viewer Provides permission to view and list Assets and tasks. roles/earthengine.writer Earth Engine Resource Writer Provides permission to read, create, modify and delete assets, import images and tables, read and update tasks, perform interactive computations, and create long running export tasks. roles/earthengine.admin Earth Engine Admin Provides permission for all Earth Engine resources including changing access controls for Earth Engine assets. roles/earthengine.appsPublisher Earth Engine Apps Publisher Provides permission to create a service account for use with an Earth Engine app.
- Access and permissions for Earth Engine resources are controlled through Identity and Access Management (IAM) roles, including predefined Earth Engine roles and general Google Cloud roles.

### Earth Engine Apps \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/apps](https://developers.google.com/earth-engine/guides/apps)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Earth Engine Apps are dynamic, shareable user interfaces for Earth Engine analyses accessible via a unique URL without requiring an Earth Engine account.
- Apps can be restricted to members of a Google Group or made publicly accessible, viewable by anyone without signing in.
- Apps published from Earth Engine are accessible from the application-specific URL generated at time of publishing.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-08-09 UTC."],[],["Earth Engine Apps enable sharing interactive analyses.

### "Earth Engine Noncommercial Tiers \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/noncommercial_tiers](https://developers.google.com/earth-engine/guides/noncommercial_tiers)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Earth Engine Apps created by non-commercial projects are exempt from non-commercial eligibility confirmation, but may get slowed down with noncommercial tiers, when the owners' project runs out of their daily or monthly quota resources for their tier.
- Restricted mode Even if your project runs out of EECU-hour credits, you can still use Earth Engine, but it'll be in restricted mode until your credits refresh.
- Exceptions Earth Engine Apps usage is tracked against the parent project of the EE App.
- Q: How are Earth Engine Apps affected by this change?

