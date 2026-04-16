---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.684Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Custom domains and SSL certificate management via Admin API and gcloud"
feature_slug: "custom-domains-and-ssl-certificate-management-via-admin-api-and-gcloud"
latest_feature_date: "2017-06-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl"
keywords:
  - "custom"
  - "domains"
  - "ssl"
  - "certificate"
  - "management"
  - "via"
  - "admin"
  - "gcloud"
---

# Custom domains and SSL certificate management via Admin API and gcloud

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

Beta support was added in the Admin API and gcloud CLI for creating and managing custom domains and SSL certificates.

## Extended Definition

Beta support was added in the Admin API and gcloud CLI for creating and managing custom domains and SSL certificates.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl)

## Supporting Pages

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Alternatively, you can use gcloud commands or the Admin API to delete custom domains.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- For more information on using SSL with your custom domain, including how to use your own SSL certificates, see Securing your custom domains with SSL .
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Alternatively, you can use gcloud commands or the Admin API to delete custom domains.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- For more information on using SSL with your custom domain, including how to use your own SSL certificates, see Securing your custom domains with SSL .
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- Disable managed SSL certificates To disable managed SSL certificates: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain and click Disable managed security .
- To verify that the certificate was provisioned: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains The SSL security displays as Google-managed .
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.

