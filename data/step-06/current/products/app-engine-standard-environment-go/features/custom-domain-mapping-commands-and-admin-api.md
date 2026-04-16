---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.305Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Custom domain mapping commands and Admin API"
feature_slug: "custom-domain-mapping-commands-and-admin-api"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
keywords:
  - "commands"
  - "mapping"
  - "domain"
  - "custom"
  - "provides"
  - "admin"
---

# Custom domain mapping commands and Admin API

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine provides generally available gcloud commands and Admin API methods for verifying and mapping custom domains.

## Extended Definition

App Engine provides generally available gcloud commands and Admin API methods for verifying and mapping custom domains.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)

## Supporting Pages

### "Mapping custom domains \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- Source ID: `site-docs-reference-4`
- Final score: 219
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- In order to add or edit a custom domain mapping, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.get permission.
- Alternatively, you can use gcloud commands or the Admin API to delete custom domains.
- Troubleshooting If your app shows authentication errors after configuring your custom domain with Google Workspace domain authentication, remove your custom domain mapping and redo the steps for mapping a custom domain to your app .

### "Securing custom domains with SSL \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-4`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- After mapping a custom domain to your application and updating your DNS records , App Engine provisions a managed SSL certificate, renews the certificate, and revokes it when you remove the custom domain from your application.
- Check your DNS settings then update your custom domain mapping by following the steps to update to managed SSL certificates .
- Example: concat.crt Example: cat www example com.crt AddTrustExternalCARoot.crt RSADomainValidationSecureServerCA.crt RSAAddTrustCA.crt > concat.crt Verify your SSL certificate and private key: To verify that the private key and certificate match , you can use the openssl x509 and openssl rsa commands.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- REGION ID .r.appspot.com To use custom domains with HTTPS, you must first activate and configure SSL certificates for that domain .
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- Python example handlers : - url : /youraccount/. secure : always script : auto To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .
- Example vpc access connector : name : "projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME " egress setting : all-traffic Handlers element The handlers element provides a list of URL patterns and descriptions of how they should be handled.

