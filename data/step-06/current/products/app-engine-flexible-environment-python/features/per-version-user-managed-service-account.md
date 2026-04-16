---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:40:42.096Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Per-version user-managed service account"
feature_slug: "per-version-user-managed-service-account"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/user-managed-service-accounts"
keywords:
  - "per"
  - "version"
  - "user"
  - "managed"
  - "account"
  - "each"
  - "app"
  - "engine"
---

# Per-version user-managed service account

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

Each App Engine version can be deployed with its own user-managed service account; Each App Engine version can be deployed with its own user-managed service account.

## Extended Definition

Each App Engine version can be deployed with its own user-managed service account; Each App Engine version can be deployed with its own user-managed service account.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/python/user-managed-service-accounts)

## Supporting Pages

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Delegating ownership to other Google Cloud users or service accounts If you need to delegate the ownership of your domain to other users or service accounts, you can add permission through the Search Console page.
- Note: Some third party CDN providers might inadvertently intercept validation requests, preventing them from reaching the App Engine app and causing the domain mapping to fail or its certificate to fail to renew.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Delegating ownership to other Google Cloud users or service accounts If you need to delegate the ownership of your domain to other users or service accounts, you can add permission through the Search Console page.
- Note: Some third party CDN providers might inadvertently intercept validation requests, preventing them from reaching the App Engine app and causing the domain mapping to fail or its certificate to fail to renew.

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/python/user-managed-service-accounts)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Using a version-specific service account lets you grant different privileges to each application version, based on the specific tasks it performs, and avoid granting more privileges than necessary.
- Each new version that you deploy hereafter uses the new app-level default service account unless you explicitly assign a version-specific service account.
- Each new version that you deploy hereafter uses the new app-level default service account unless you explicitly assign a version-specific service account.

