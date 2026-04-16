---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:17.309Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "User-managed service account per App Engine version"
feature_slug: "user-managed-service-account-per-app-engine-version"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/user-managed-service-accounts"
keywords:
  - "user"
  - "managed"
  - "account"
  - "per"
  - "app"
  - "engine"
  - "version"
  - "specifying"
---

# User-managed service account per App Engine version

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

Specifying a user-managed service account per App Engine version during deployment is now generally available; You can now specify a user-managed service account for each App Engine version during deployment in Preview.

## Extended Definition

Specifying a user-managed service account per App Engine version during deployment is now generally available; You can now specify a user-managed service account for each App Engine version during deployment in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/python/user-managed-service-accounts)

## Supporting Pages

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Delegating ownership to other Google Cloud users or service accounts If you need to delegate the ownership of your domain to other users or service accounts, you can add permission through the Search Console page.
- In order to add or edit a custom domain mapping, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.get permission.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Delegating ownership to other Google Cloud users or service accounts If you need to delegate the ownership of your domain to other users or service accounts, you can add permission through the Search Console page.
- In order to add or edit a custom domain mapping, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.get permission.

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/python/user-managed-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Go to Versions Locate the email address of your App Engine version-specific service account.
- Your version-specific service account must be in the same project where you deploy your application. app.yaml In your app.yaml file, specify your service account by adding the service account element: service account: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.

