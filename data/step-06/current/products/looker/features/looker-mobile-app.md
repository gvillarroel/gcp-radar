---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.500Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker Mobile app"
feature_slug: "looker-mobile-app"
latest_feature_date: "2025-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition"
keywords:
  - "looker"
  - "mobile"
  - "app"
  - "provides"
  - "core"
  - "instances"
---

# Looker Mobile app

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Provides support for the Looker Mobile app on Google Cloud Core instances.

## Extended Definition

Provides support for the Looker Mobile app on Google Cloud Core instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Email Domain Allowlist for Scheduled Content Note: In Looker (Google Cloud core) instances, you set the email domain allowlist for an instance within the Google Cloud console .
- Automated Gemini in Looker enablement and user management Note: This setting is not available for Looker (Google Cloud core) instances.
- Some settings are available only for Looker (original) instances or only for Looker (Google Cloud core) instances.
- Login Consent Configuration Note: This setting is available only for Looker (Google Cloud core) instances.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Note: Looker (Google Cloud core) instances don't contain the sudo permission. manage groups see users Instance Wide CM Users can create, edit, and delete groups on the Groups page in the Users section of the Admin menu, with the exception of any groups that are associated with the Admin role. manage roles manage groups Instance Wide CM Users can create, edit, and delete roles, except for the Admin role, on the Roles page in the Users section of the Admin menu.
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .
- Default permission sets For new installations, Looker includes several default permission sets that you can start with: Permission Set Included Permissions Admin All permissions Developer access data , can create forecast , clear cache refresh , create custom fields , create table calculations , deploy , develop , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see drill overlay , see lookml , see lookml dashboards , see looks , see pdts , see sql , see user dashboards , send to integration , schedule without limit , use sql runner NOTE : The see pdts permission is included in the Developer default permission only for Looker installations that were created with Looker 21.18 or later.
- Default roles For new instances, Looker creates the following default roles, each of which includes a default permission set of the same name: Admin Admin via IAM Developer Gemini Looker CI Users Conversational Analytics Agent Manager Conversational Analytics User Support Advanced Editor Support Basic Editor Customer Engineer Advanced Editor User Viewer The default roles in the following sections have conditions for use.

### "Quickstart: Create a Looker (Google Cloud core) public secure connection\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)
- Source ID: `site-docs-reference-required-4`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- When you click the button, depending on what Looker instances already exist in this project, you'll see one of the following: If a Looker (Google Cloud core) instance already exists within this project, the Instances page will open.
- If no Looker (Google Cloud core) instances have been created in this project, the Looker (Google Cloud core) product page will open.
- For more information about creating and configuring an instance, see the Looker (Google Cloud core) documentation: Create a Looker (Google Cloud core) instance Set up a custom domain for a Looker (Google Cloud core) instance that uses public connections Configure an IP allowlist for Looker (Google Cloud core) Prepare a Looker (Google Cloud core) instance for users Connect to your database Use the sample LookML project on a Looker (Google Cloud core) instance Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Before you can create an instance, you need to complete these steps for the Google Cloud project in which you want to create the Looker (Google Cloud core) instance: Work with Sales to ensure that your annual contract is completed and that you have quota allocated in your project.

