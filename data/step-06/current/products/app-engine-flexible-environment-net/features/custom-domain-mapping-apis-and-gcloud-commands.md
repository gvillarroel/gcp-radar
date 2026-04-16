---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.682Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Custom domain mapping APIs and gcloud commands"
feature_slug: "custom-domain-mapping-apis-and-gcloud-commands"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl"
keywords:
  - "custom"
  - "domain"
  - "mapping"
  - "apis"
  - "gcloud"
  - "commands"
  - "became"
  - "generally"
---

# Custom domain mapping APIs and gcloud commands

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

Custom domain mapping became generally available via gcloud commands and Admin API methods such as apps.authorizedDomains.list.

## Extended Definition

Custom domain mapping became generally available via gcloud commands and Admin API methods such as apps.authorizedDomains.list.

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
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Alternatively, you can use gcloud commands or the Admin API to delete custom domains.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Troubleshooting If your app shows authentication errors after configuring your custom domain with Google Workspace domain authentication, remove your custom domain mapping and redo the steps for mapping a custom domain to your app .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Mapping custom domains Stay organized with collections Save and categorize content based on your preferences.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Alternatively, you can use gcloud commands or the Admin API to delete custom domains.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Troubleshooting If your app shows authentication errors after configuring your custom domain with Google Workspace domain authentication, remove your custom domain mapping and redo the steps for mapping a custom domain to your app .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Mapping custom domains Stay organized with collections Save and categorize content based on your preferences.

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- After mapping a custom domain to your application and updating your DNS records , App Engine provisions a managed SSL certificate, renews the certificate, and revokes it when you remove the custom domain from your application.
- Check your DNS settings then update your custom domain mapping by following the steps to update to managed SSL certificates .
- Example: concat.crt Example: cat www example com.crt AddTrustExternalCARoot.crt RSADomainValidationSecureServerCA.crt RSAAddTrustCA.crt > concat.crt Verify your SSL certificate and private key: To verify that the private key and certificate match , you can use the openssl x509 and openssl rsa commands.

