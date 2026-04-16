---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.398Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "User-managed service account per version"
feature_slug: "user-managed-service-account-per-version"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
keywords:
  - "assign"
  - "user"
  - "managed"
  - "account"
  - "version"
  - "lets"
---

# User-managed service account per version

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

User-managed service account per version lets you assign a specific service account to each deployed App Engine version; User-managed service account per version lets you assign a specific service account to each deployed App Engine version.

## Extended Definition

User-managed service account per version lets you assign a specific service account to each deployed App Engine version; User-managed service account per version lets you assign a specific service account to each deployed App Engine version.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control](https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)

## Supporting Pages

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- For example, if a version requires permissions that differ from the app-level default service account, you can assign a service account that is specific to that version.
- A user account can be used to authenticate from the following tools: Google Cloud console Google Cloud CLI IDEs and build tools that use the gcloud CLI to test and deploy App Engine apps A service account , which is intended to represent an application or a process instead of a person.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control](https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control)
- Source ID: `site-docs-reference-4`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- For example, if a version requires permissions that differ from the app-level default service account, you can assign a service account that is specific to that version.
- A user account can be used to authenticate from the following tools: Google Cloud console Google Cloud CLI IDEs and build tools that use the gcloud CLI to test and deploy App Engine apps A service account , which is intended to represent an application or a process instead of a person.

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Update the app-level default service account for your app To update the app-level default service account for your application, you can use one of the following to assign a new service account: Important: Only versions deployed after the update will use the new app-level default service account.
- Using a version-specific service account lets you grant different privileges to each application version, based on the specific tasks it performs, and avoid granting more privileges than necessary.
- For example, if a version requires permissions that differ from the app-level default service account, you can assign a service account that is specific to that version.

