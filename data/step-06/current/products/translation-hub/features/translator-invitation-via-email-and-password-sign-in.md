---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.860Z"
product_name: "Translation Hub"
product_slug: "translation-hub"
feature_name: "Translator invitation via email and password sign-in"
feature_slug: "translator-invitation-via-email-and-password-sign-in"
latest_feature_date: "2023-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits"
  - "https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations"
  - "https://docs.cloud.google.com/translation-hub/docs/translator-edit"
  - "https://docs.cloud.google.com/translation-hub/docs/user-post-edit"
keywords:
  - "translator"
  - "invitation"
  - "via"
  - "email"
  - "and"
  - "password"
  - "sign"
  - "in"
---

# Translator invitation via email and password sign-in

Product: Translation Hub
Coverage: MEDIUM

## Step 02 Summary

Administrators can invite translators using the email and password sign-in method.

## Extended Definition

Administrators can invite translators using the email and password sign-in method.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits](https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits)
- [https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations](https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations)
- [https://docs.cloud.google.com/translation-hub/docs/translator-edit](https://docs.cloud.google.com/translation-hub/docs/translator-edit)
- [https://docs.cloud.google.com/translation-hub/docs/user-post-edit](https://docs.cloud.google.com/translation-hub/docs/user-post-edit)

## Supporting Pages

### Enable post-editing requests \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits](https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits)
- Source ID: `site-iam-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each line of the CSV file uses the following format that contains the translator's email address, sign-in method, post-editing group names, and fluent language pairs: EMAIL ADDRESS , SIGN IN METHOD , GROUP NAME 1 ; GROUP NAME 2 , LANGUAGE CODE:LANGUAGE CODE ; LANGUAGE CODE:LANGUAGE CODE The sign-in method can be google for Google Accounts or email/password for all other email addresses.
- The sign-in method specifies whether translators sign in with an email and password or with their Google Account (such as a Google Workspace account).
- To invite translators in bulk, provide a CSV file where each line specifies a translator's email address, sign-in method, associated post-editing groups (optional), and fluent language pairs.
- Specify user details: To manually add one translator, specify the translator's email address, sign-in method, post-editing groups, and fluent language pairs.

### "Enable users to request translations \_|\_ Translation Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations](https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Each line of the CSV file uses the following format that contains the user's email address, sign-in method, and portal IDs: EMAIL ADDRESS , SIGN IN METHOD , PORTAL ID 1 ; PORTAL ID 2 The sign-in method can be google for Google Accounts or email/password for all other email addresses.
- The sign-in method specifies whether users sign in with an email and password or with their Google Account (such as a Google Workspace account).
- Don't include a header row for column names. amal@altostrat.com,email/password,123abc45def678f;234abc45def678g charlie@altostrat.com,email/password, hao@myownpersonaldomain.com,email/password,123abc45def678f Translation Hub has a limit on the number of rows and CSV file size.
- Users with the EMAIL PASSWORD sign-in method receive an email notification with a portal URL; they can also sign in by going to https://translationhub.cloud.google.com/ .

### Review and edit translations \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/translator-edit](https://docs.cloud.google.com/translation-hub/docs/translator-edit)
- Source ID: `site-iam-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- If you are part of a post-editing group, you and all the other group members receive an email notification for each new post-edit request.
- If you're assigned to multiple projects or roles, choose a project and then choose the translator role.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Glossary - If a segment had matching glossary terms, Translation Hub shows a list of the source language terms and their corresponding target language terms. done all Translation reviewed - Indicates that a segment has been post-edited.

### Post-editing \_|\_ Translation Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translation-hub/docs/user-post-edit](https://docs.cloud.google.com/translation-hub/docs/user-post-edit)
- Source ID: `site-iam-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Post-editing in progress section, Translation Hub shows if your request is in one of the following states: Assigned : You have submitted a request but a translator has not yet accepted the editing task.
- Translation Hub shows you post-editing groups that contain a translator who is fluent in your source and translated content language pairs.
- Or, you can contact your Google Cloud administrators and request that they add a translator with the relevant language capabilities.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

