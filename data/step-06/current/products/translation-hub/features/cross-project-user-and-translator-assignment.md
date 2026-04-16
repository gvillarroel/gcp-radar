---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.858Z"
product_name: "Translation Hub"
product_slug: "translation-hub"
feature_name: "Cross-project user and translator assignment"
feature_slug: "cross-project-user-and-translator-assignment"
latest_feature_date: "2023-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translation-hub/docs/overview"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-control-access"
  - "https://docs.cloud.google.com/translation-hub/docs/translator-edit"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations"
keywords:
  - "cross"
  - "project"
  - "user"
  - "and"
  - "translator"
  - "assignment"
  - "administrators"
  - "can"
---

# Cross-project user and translator assignment

Product: Translation Hub
Coverage: MEDIUM

## Step 02 Summary

Administrators can assign the same portal users and translators to multiple Translation Hub projects.

## Extended Definition

Administrators can assign the same portal users and translators to multiple Translation Hub projects.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translation-hub/docs/overview](https://docs.cloud.google.com/translation-hub/docs/overview)
- [https://docs.cloud.google.com/translation-hub/docs/admin-control-access](https://docs.cloud.google.com/translation-hub/docs/admin-control-access)
- [https://docs.cloud.google.com/translation-hub/docs/translator-edit](https://docs.cloud.google.com/translation-hub/docs/translator-edit)
- [https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations](https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations)

## Supporting Pages

### Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/overview](https://docs.cloud.google.com/translation-hub/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To grant users access to portals, administrators add them to their Google Cloud project and assign them to portals.
- Benefits The following benefits highlight how Translation Hub can improve the overall efficiency of your translation workloads: Self-serve translation Compared to traditional Translation Management Systems, which are process heavy and start with human translators, Translation Hub lets you use AI and then augment results with human translators.
- Because you have readers across many different languages, you require a translation service that can quickly turnaround translations and handle many different documents.
- For example, you can set up portals, manage user access, and create translation resources like glossaries and translation memories.

### Control access \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-control-access](https://docs.cloud.google.com/translation-hub/docs/admin-control-access)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Remove a user from a project When you remove users from a project, all translations that are associated with that user are disassociated and cannot be downloaded or exported.
- Portal users and translators have access only to Translation Hub resources that are assigned to their portals, such as glossaries or translation memories.
- Revoke translator access To revoke access for translators, you can remove them from a post-editing group or from your project.
- Revoke user access to portals To revoke access to portals, you can remove users from the portals or from your project.

### Review and edit translations \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/translator-edit](https://docs.cloud.google.com/translation-hub/docs/translator-edit)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're assigned to multiple projects or roles, choose a project and then choose the translator role.
- After portal users complete a translation (advanced tier only), they can send translations for post-editing by selecting a post-editing group.
- Reject a task If you can't commit to an accepted task, you can remove it from your queue so that other translators can accept it.
- Before you begin An administrator must add you to a project and to a post-editing group.

### "Enable users to request translations \_|\_ Translation Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations](https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Translation Hub uses the service account to authorize API calls to your project on behalf of portal users and translators.
- Each line of the CSV file uses the following format that contains the user's email address, sign-in method, and portal IDs: EMAIL ADDRESS , SIGN IN METHOD , PORTAL ID 1 ; PORTAL ID 2 The sign-in method can be google for Google Accounts or email/password for all other email addresses.
- Specify user details: To manually add one user, specify the user's email address, sign-in method, and the portals they can access.
- Invite users and add them to portals Invite users to your Google Cloud project and then add them to portals.

