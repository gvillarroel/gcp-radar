---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.682Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Custom domain mappings with existing SSL certificates"
feature_slug: "custom-domain-mappings-with-existing-ssl-certificates"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl"
keywords:
  - "custom"
  - "domain"
  - "mappings"
  - "existing"
  - "ssl"
  - "certificates"
  - "continue"
  - "expected"
---

# Custom domain mappings with existing SSL certificates

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

Existing custom domain mappings and SSL certificates continue to function as expected, with an option to upgrade to managed SSL certificates.

## Extended Definition

Existing custom domain mappings and SSL certificates continue to function as expected, with an option to upgrade to managed SSL certificates.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl)

## Supporting Pages

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 195
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Disable managed SSL certificates To disable managed SSL certificates: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain and click Disable managed security .
- To use and manage your own SSL certificates instead of Google-managed certificates: Make sure you have already set up your custom domain in your App Engine project.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Retrieve the DNS record information for your domain mappings: In the Google Cloud console, go to the Custom Domains tab of the App Engine Settings page.
- For more information on using SSL with your custom domain, including how to use your own SSL certificates, see Securing your custom domains with SSL .
- Updating DNS records at your domain registrar Note: If you have a custom domain set up for your App Engine app and want to move it to a different Google Cloud project, you do not need to update your custom domain DNS records as these will remain fixed for the domain when you switch projects.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/using-custom-domains-and-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Retrieve the DNS record information for your domain mappings: In the Google Cloud console, go to the Custom Domains tab of the App Engine Settings page.
- For more information on using SSL with your custom domain, including how to use your own SSL certificates, see Securing your custom domains with SSL .
- Updating DNS records at your domain registrar Note: If you have a custom domain set up for your App Engine app and want to move it to a different Google Cloud project, you do not need to update your custom domain DNS records as these will remain fixed for the domain when you switch projects.

