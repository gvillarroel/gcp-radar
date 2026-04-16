---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.403Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine custom domain verification with gcloud domains verify"
feature_slug: "app-engine-custom-domain-verification-with-gcloud-domains-verify"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
keywords:
  - "app"
  - "engine"
  - "custom"
  - "domain"
  - "verification"
  - "gcloud"
  - "domains"
  - "verify"
---

# App Engine custom domain verification with gcloud domains verify

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The `gcloud domains verify` command for mapping custom domains to App Engine apps became generally available.

## Extended Definition

The `gcloud domains verify` command for mapping custom domains to App Engine apps became generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)

## Supporting Pages

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This does not prevent your service from receiving requests from the internet or App Engine services with custom domains, because the fully qualified domain name of your service is still externally visible.
- Limitations Disabling ephemeral external IP addresses has the following limitations: Services with custom domains: To send requests to App Engine services with custom domains you must configure Cloud NAT .
- The ephemeral external IP address allows your service to send requests to App Engine services with custom domains, and resources on the internet.
- Deploy the service. gcloud beta app deploy Verify configuration by checking the Instances page of the Google Cloud console.

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- Soft routing does not apply to custom domains; requests to them will return a HTTP 404 status code if the hostname is invalid.
- You can use the simple " . " URL notation with your own custom domains and with HTTP requests.
- For example, to describe version 20191023t101741 for the default service, enter gcloud app versions describe 20191023t101741 --service=default Domain name is included in the request data The domain name used for the request is included in the request data that is passed to your app.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- Soft routing does not apply to custom domains; requests to them will return a HTTP 404 status code if the hostname is invalid.
- You can use the simple " . " URL notation with your own custom domains and with HTTP requests.
- For example, to describe version 20191023t101741 for the default service, enter gcloud app versions describe 20191023t101741 --service=default Domain name is included in the request data The domain name used for the request is included in the request data that is passed to your app.

