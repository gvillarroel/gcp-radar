---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.582Z"
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
  - "restricted"
  - "group"
  - "control"
  - "access"
  - "apps"
---

# Earth Engine Apps Google Group access control

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Earth Engine Apps can be restricted so only members of a specified Google Group can access them.

## Extended Definition

Earth Engine Apps can be restricted so only members of a specified Google Group can access them.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- [https://developers.google.com/earth-engine/guides/apps](https://developers.google.com/earth-engine/guides/apps)
- [https://developers.google.com/earth-engine/guides/noncommercial_tiers](https://developers.google.com/earth-engine/guides/noncommercial_tiers)

## Supporting Pages

### Control access to resources \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- Source ID: `site-docs-root-2`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the case of a public Earth Engine App, the identity granted that role is earth-engine-public-apps@appspot.gserviceaccount.com and in the case of restricted apps the identity is the Access Restriction Google Group configured by the app creator.
- Permissions needed on the billing account billing.subscriptions.list Apps management Display app info Permissions needed iam.serviceAccounts.get iam.serviceAccounts.getIamPolicy , if app is restricted (less common) Suggested roles Viewer ( roles/viewer ) OR Earth Engine Apps Publisher ( roles/earthengine.appsPublisher ) Publish/Update app Permissions needed iam.serviceAccounts.get iam.serviceAccounts.create iam.serviceAccounts.enable iam.serviceAccounts.getIamPolicy iam.serviceAccounts.setIamPolicy iam.serviceAccounts.disable , if app is moved from one project to another (uncommon) Suggested roles Earth Engine Apps Publisher ( roles/earthengine.appsPublisher ) OR Service Account Admin ( roles/iam.serviceAccountAdmin ) Notes In addition, Earth Engine App service accounts identify themselves to the Earth Engine servers by presenting an OAuth access token.
- These roles are: Role Title Description roles/earthengine.viewer Earth Engine Resource Viewer Provides permission to view and list Assets and tasks. roles/earthengine.writer Earth Engine Resource Writer Provides permission to read, create, modify and delete assets, import images and tables, read and update tasks, perform interactive computations, and create long running export tasks. roles/earthengine.admin Earth Engine Admin Provides permission for all Earth Engine resources including changing access controls for Earth Engine assets. roles/earthengine.appsPublisher Earth Engine Apps Publisher Provides permission to create a service account for use with an Earth Engine app.
- Access and permissions for Earth Engine resources are controlled through Identity and Access Management (IAM) roles, including predefined Earth Engine roles and general Google Cloud roles.

### Earth Engine Apps \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/apps](https://developers.google.com/earth-engine/guides/apps)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apps can be restricted to members of a Google Group or made publicly accessible, viewable by anyone without signing in.
- For apps restricted to a Google Group, sharing an asset with that Google Group will not make it viewable by the App; the assets should be shared with the App or publicly, instead.
- Note: Access to a published App can be restricted to members of a Google Group, or it can be made publicly accessible.
- Apps with restricted access cannot be featured.

### "Earth Engine Noncommercial Tiers \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/noncommercial_tiers](https://developers.google.com/earth-engine/guides/noncommercial_tiers)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Once you reach the limit for the month, you'll still be able to perform computation in restricted mode (your requests, EE Apps and tasks will still run), but you'll see reduced performance and throughput unless you get more quota .
- See the cost controls documentation for more details on how to access and update this quota.
- Earth Engine Apps created by non-commercial projects are exempt from non-commercial eligibility confirmation, but may get slowed down with noncommercial tiers, when the owners' project runs out of their daily or monthly quota resources for their tier.
- Intended for Nonprofits/NGOs, university research groups, government research groups, or other organizations with high computation requirements and clear evidence of high-impact sustainability work that influences environment policy and practices.

