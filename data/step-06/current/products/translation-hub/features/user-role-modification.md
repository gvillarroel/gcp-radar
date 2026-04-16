---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.861Z"
product_name: "Translation Hub"
product_slug: "translation-hub"
feature_name: "User role modification"
feature_slug: "user-role-modification"
latest_feature_date: "2023-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translation-hub/docs/admin-permissions"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-control-access"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits"
keywords:
  - "user"
  - "role"
  - "modification"
  - "administrators"
  - "can"
  - "modify"
  - "roles"
  - "in"
---

# User role modification

Product: Translation Hub
Coverage: MEDIUM

## Step 02 Summary

Administrators can modify user roles in the Translation Hub.

## Extended Definition

Administrators can modify user roles in the Translation Hub.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translation-hub/docs/admin-permissions](https://docs.cloud.google.com/translation-hub/docs/admin-permissions)
- [https://docs.cloud.google.com/translation-hub/docs/admin-control-access](https://docs.cloud.google.com/translation-hub/docs/admin-control-access)
- [https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations](https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations)
- [https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits](https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits)

## Supporting Pages

### Admin permissions \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-permissions](https://docs.cloud.google.com/translation-hub/docs/admin-permissions)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To set Translation Hub administrator privileges, use the following predefined roles: Translation Hub Admin ( roles/translationhub.admin ) Storage Admin ( roles/storage.admin ) Service Account Token Creator ( roles/iam.serviceAccountTokenCreator ) Translation Hub administrators can, for example, manage glossaries, portals, and portal users, but they cannot work with other Google Cloud services like Compute Engine or BigQuery.
- If you want to scope permissions to only Translation Hub tasks for you or other users, you can use Identity and Access Management (IAM) roles.
- For more information about setting permissions and IAM roles, see Manage access to projects, folders, and organizations .
- The Cloud Storage permissions are required to create glossaries and to import portal users and translators by using a CSV file.

### Control access \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-control-access](https://docs.cloud.google.com/translation-hub/docs/admin-control-access)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If an existing user's responsibilities change, you can modify their role.
- Add or remove roles for existing users on the Translation Hub Users page: In the Translation Hub section of the Google Cloud console, go to the Users page.
- Manage user roles User roles in Translation Hub indicate if a user is a portal user, translator, or both.
- To change a user's role, find the user and then select more vert More > Edit roles .

### "Enable users to request translations \_|\_ Translation Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations](https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Each line of the CSV file uses the following format that contains the user's email address, sign-in method, and portal IDs: EMAIL ADDRESS , SIGN IN METHOD , PORTAL ID 1 ; PORTAL ID 2 The sign-in method can be google for Google Accounts or email/password for all other email addresses.
- Users with the EMAIL PASSWORD sign-in method receive an email notification with a portal URL; they can also sign in by going to https://translationhub.cloud.google.com/ .
- Translation resources Translation resources let portal users modify the machine translations so that the results are tailored for a specific domain.
- On the Assign users to portal step, you can add invited users to the portal, or you can add users to portals later when you invite them.

### Enable post-editing requests \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits](https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you create a post-editing group, you assign it to one or more portals (advanced-tier portals only), and then portal users can submit post-editing requests against that group.
- If a portal user selects a read-only translation memory, no post edits can be saved; the translation memory is used only for matching translations.
- When portal users request a post-edit, they can select any post-editing group that's assigned to their portal.
- On the Users page, you can the view status of each translator: Registered or Invited .

