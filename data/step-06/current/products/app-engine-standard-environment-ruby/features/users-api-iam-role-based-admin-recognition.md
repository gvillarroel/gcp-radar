---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.410Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Users API IAM role-based admin recognition"
feature_slug: "users-api-iam-role-based-admin-recognition"
latest_feature_date: "2016-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app"
keywords:
  - "users"
  - "iam"
  - "role"
  - "based"
  - "admin"
  - "recognition"
  - "now"
  - "treats"
---

# Users API IAM role-based admin recognition

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The Users API now treats project Owner, Editor, Viewer, and App Engine Admin roles, including group-derived membership, as admin privileges.

## Extended Definition

The Users API now treats project Owner, Editor, Viewer, and App Engine Admin roles, including group-derived membership, as admin privileges.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)

## Supporting Pages

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This solution is best if you want to authenticate users based on their Google Account, or if you are using Google Admin console for your domain.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- If you're already using Google Workspace for your domain and want to authenticate users based on that login, you should use Google Identity Services for Web .
- This solution is best for most users who want flexible authentication options based on reliable, enterprise-grade features and SLAs.

### "Authenticating users \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This solution is best if you want to authenticate users based on their Google Account, or if you are using Google Admin console for your domain.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- If you're already using Google Workspace for your domain and want to authenticate users based on that login, you should use Google Identity Services for Web .
- This solution is best for most users who want flexible authentication options based on reliable, enterprise-grade features and SLAs.

### "Quickstart: Create a .NET app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To initialize the gcloud CLI, run the following command: gcloud init Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: App Engine Admin ( roles/appengine.appAdmin ) on the project Cloud Build Editor ( roles/cloudbuild.builds.editor ) on the project Storage Object Admin ( roles/storage.objectAdmin ) on the project Logs Viewer ( roles/logging.viewer ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service account Ask your administrator to grant the following roles for the App Engine default service account: Artifact Registry Reader ( roles/artifactregistry.reader ) on the project Cloud Build Service Account ( roles/cloudbuild.builds.builder ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.

