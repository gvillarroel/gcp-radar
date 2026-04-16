---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.861Z"
product_name: "Translation Hub"
product_slug: "translation-hub"
feature_name: "User list filtering in Translation Hub console"
feature_slug: "user-list-filtering-in-translation-hub-console"
latest_feature_date: "2023-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-control-access"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits"
keywords:
  - "user"
  - "list"
  - "filtering"
  - "in"
  - "translation"
  - "hub"
  - "console"
  - "administrators"
---

# User list filtering in Translation Hub console

Product: Translation Hub
Coverage: MEDIUM

## Step 02 Summary

Administrators can filter users by name or role on the Translation Hub console Users page.

## Extended Definition

Administrators can filter users by name or role on the Translation Hub console Users page.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations](https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations)
- [https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory](https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory)
- [https://docs.cloud.google.com/translation-hub/docs/admin-control-access](https://docs.cloud.google.com/translation-hub/docs/admin-control-access)
- [https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits](https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits)

## Supporting Pages

### "Enable users to request translations \_|\_ Translation Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations](https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Translation Hub section of the Google Cloud console, go to the Users page.
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me To enable translations, use the Google Cloud console to create a portal and add users.
- Go to the IAM page From the list of principals, check to see if the cloud-translation-hub@system.gserviceaccount.com service account already exists with the Storage Admin role.
- Users with the EMAIL PASSWORD sign-in method receive an email notification with a portal URL; they can also sign in by going to https://translationhub.cloud.google.com/ .

### "Save and reuse human-reviewed translations \_|\_ Translation Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory](https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory)
- Source ID: `site-iam-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if a portal user edits a segment that Translation Hub translated with a translation memory, Translation Hub replaces the existing segment with the newly edited segment.
- Remove default translation memory In the Translation Hub section of the Google Cloud console, go to the Portals page.
- Create a translation memory Administrators create translation memories by using the Google Cloud console.
- In the Translation Hub section of the Google Cloud console, go to the Resources page.

### Control access \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-control-access](https://docs.cloud.google.com/translation-hub/docs/admin-control-access)
- Source ID: `site-iam-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add or remove roles for existing users on the Translation Hub Users page: In the Translation Hub section of the Google Cloud console, go to the Users page.
- Remove a translator from a project In the Translation Hub section of the Google Cloud console, go to the Users page.
- In the Translation Hub section of the Google Cloud console, go to the Users page.
- In the Translation Hub section of the Google Cloud console, go to the Users page.

### Enable post-editing requests \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits](https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits)
- Source ID: `site-iam-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Invite translators In the Translation Hub section of the Google Cloud console, go to the Users page.
- Go to the IAM page From the list of principals, check to see if the cloud-translation-hub@system.gserviceaccount.com service account already exists with the Storage Admin role.
- In the Translation Hub section of the Google Cloud console, go to the Post-editing page.
- Don't include a header row for column names. amal@altostrat.com,google,groupname1;groupname2,en:es;zh:de charlie@altostrat.com,email/password,,zh:es hao@myownpersonaldomain.com,email/password, Translation Hub has a limit on the number of rows and CSV file size.

