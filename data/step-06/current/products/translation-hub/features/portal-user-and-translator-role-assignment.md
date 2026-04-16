---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.859Z"
product_name: "Translation Hub"
product_slug: "translation-hub"
feature_name: "Portal user and translator role assignment"
feature_slug: "portal-user-and-translator-role-assignment"
latest_feature_date: "2023-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-control-access"
  - "https://docs.cloud.google.com/translation-hub/docs/translator-edit"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits"
keywords:
  - "portal"
  - "user"
  - "and"
  - "translator"
  - "role"
  - "assignment"
  - "administrators"
  - "can"
---

# Portal user and translator role assignment

Product: Translation Hub
Coverage: MEDIUM

## Step 02 Summary

Administrators can add users to a portal as a portal user, a translator, or both.

## Extended Definition

Administrators can add users to a portal as a portal user, a translator, or both.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations](https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations)
- [https://docs.cloud.google.com/translation-hub/docs/admin-control-access](https://docs.cloud.google.com/translation-hub/docs/admin-control-access)
- [https://docs.cloud.google.com/translation-hub/docs/translator-edit](https://docs.cloud.google.com/translation-hub/docs/translator-edit)
- [https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits](https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits)

## Supporting Pages

### "Enable users to request translations \_|\_ Translation Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations](https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each line of the CSV file uses the following format that contains the user's email address, sign-in method, and portal IDs: EMAIL ADDRESS , SIGN IN METHOD , PORTAL ID 1 ; PORTAL ID 2 The sign-in method can be google for Google Accounts or email/password for all other email addresses.
- Portal service account Translation Hub assigns each portal a unique service account and, by default, automatically assigns the Translation Hub Portal User role to the service account.
- Specify user details: To manually add one user, specify the user's email address, sign-in method, and the portals they can access.
- Translation Hub uses the service account to authorize API calls to your project on behalf of portal users and translators.

### Control access \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-control-access](https://docs.cloud.google.com/translation-hub/docs/admin-control-access)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Portal users and translators have access only to Translation Hub resources that are assigned to their portals, such as glossaries or translation memories.
- Manage user roles User roles in Translation Hub indicate if a user is a portal user, translator, or both.
- For example, you can make an existing portal user a translator too.
- Go to the Users page All portal users and translators are listed.

### Review and edit translations \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/translator-edit](https://docs.cloud.google.com/translation-hub/docs/translator-edit)
- Source ID: `site-iam-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After portal users complete a translation (advanced tier only), they can send translations for post-editing by selecting a post-editing group.
- If you're assigned to multiple projects or roles, choose a project and then choose the translator role.
- If portal users specified a translation memory when they did the initial machine translation, your edits are automatically saved to that translation memory.
- Reject a task If you can't commit to an accepted task, you can remove it from your queue so that other translators can accept it.

### Enable post-editing requests \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits](https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits)
- Source ID: `site-iam-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you create a post-editing group, you assign it to one or more portals (advanced-tier portals only), and then portal users can submit post-editing requests against that group.
- If portal users don't select a translation memory, they cannot select one later and no post-edits can be saved.
- Each line of the CSV file uses the following format that contains the translator's email address, sign-in method, post-editing group names, and fluent language pairs: EMAIL ADDRESS , SIGN IN METHOD , GROUP NAME 1 ; GROUP NAME 2 , LANGUAGE CODE:LANGUAGE CODE ; LANGUAGE CODE:LANGUAGE CODE The sign-in method can be google for Google Accounts or email/password for all other email addresses.
- Specify user details: To manually add one translator, specify the translator's email address, sign-in method, post-editing groups, and fluent language pairs.

