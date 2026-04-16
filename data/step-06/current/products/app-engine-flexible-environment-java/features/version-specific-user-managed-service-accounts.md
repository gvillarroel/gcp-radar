---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:03.271Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "Version-specific user-managed service accounts"
feature_slug: "version-specific-user-managed-service-accounts"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/user-managed-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/access-control"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/access-control"
keywords:
  - "version"
  - "specific"
  - "user"
  - "managed"
  - "accounts"
  - "each"
  - "app"
  - "engine"
---

# Version-specific user-managed service accounts

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

Each App Engine version can be deployed with a specified user-managed service account; Each App Engine version can be deployed with a specified user-managed service account.

## Extended Definition

Each App Engine version can be deployed with a specified user-managed service account; Each App Engine version can be deployed with a specified user-managed service account.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/java/user-managed-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/access-control](https://docs.cloud.google.com/appengine/docs/flexible/java/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/java/user-managed-service-accounts)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Using a version-specific service account lets you grant different privileges to each application version, based on the specific tasks it performs, and avoid granting more privileges than necessary.
- Each new version that you deploy hereafter uses the new app-level default service account unless you explicitly assign a version-specific service account.
- Each new version that you deploy hereafter uses the new app-level default service account unless you explicitly assign a version-specific service account.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.
- A user account can be used to authenticate from the following tools: Google Cloud console Google Cloud CLI IDEs and build tools that use the gcloud CLI to test and deploy App Engine apps A service account , which is intended to represent an application or a process instead of a person.
- Granting access to team members To give a developer access to your Google Cloud project, create one or both of the following: A user account , which is associated with a Google account and is intended to represent a specific individual on your project.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/access-control](https://docs.cloud.google.com/appengine/docs/flexible/java/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.
- A user account can be used to authenticate from the following tools: Google Cloud console Google Cloud CLI IDEs and build tools that use the gcloud CLI to test and deploy App Engine apps A service account , which is intended to represent an application or a process instead of a person.
- Granting access to team members To give a developer access to your Google Cloud project, create one or both of the following: A user account , which is associated with a Google account and is intended to represent a specific individual on your project.

