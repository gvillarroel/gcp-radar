---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.750Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Go api_version to GOROOT mapping"
feature_slug: "go-api-version-to-goroot-mapping"
latest_feature_date: "2017-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl"
keywords:
  - "go"
  - "version"
  - "goroot"
  - "mapping"
  - "values"
  - "go1"
  - "were"
  - "mapped"
---

# Go api_version to GOROOT mapping

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Go api_version values go1 and go1.6 were mapped to use the new goroot-1.6 directory; In preparation for the Go 1.8 beta, Go api_version values were mapped to specific GOROOT directories.

## Extended Definition

Go api_version values go1 and go1.6 were mapped to use the new goroot-1.6 directory; In preparation for the Go 1.8 beta, Go api_version values were mapped to specific GOROOT directories.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl)

## Supporting Pages

### "Mapping custom domains \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition, if you have other App Engine apps mapped to other subdomains, those mappings also have higher priority than any wildcard mapping.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Troubleshooting If your app shows authentication errors after configuring your custom domain with Google Workspace domain authentication, remove your custom domain mapping and redo the steps for mapping a custom domain to your app .
- Note: Some third party CDN providers might inadvertently intercept validation requests, preventing them from reaching the App Engine app and causing the domain mapping to fail or its certificate to fail to renew.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the possible MIME media types, see the IANA MIME Media Types website . redirect http response code Optional. redirect http response code is used with the secure setting to set the HTTP response code returned when performing a redirect required by how the secure setting is configured. redirect http response code element has the following possible values: 301 Moved Permanently response code.
- Python example handlers : - url : /youraccount/. secure : always script : auto To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .
- The following values are available depending on your service's scaling : Automatic scaling F1 , F2 , F4 , F4 1G Default: F1 Optionally use the automatic scaling element to change default settings for automatic scaling, such as minimum and maximum number of instances, latency, and concurrent connections.
- This parameter specifies the CPU usage threshold at which new instances will be started to handle traffic, enabling you to balance between performance and cost, with lower values increasing performance and increasing cost, and higher values decreasing performance but also decreasing cost.

### "Securing custom domains with SSL \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- After mapping a custom domain to your application and updating your DNS records , App Engine provisions a managed SSL certificate, renews the certificate, and revokes it when you remove the custom domain from your application.
- When a certificate nears its expiration date, you'll need to upload a new certificate and transfer the old certificate's existing mappings to that new certificate.
- Transfer mappings from a serving certificate to a new certificate Important: The instructions that follow apply to certificates serving in SNI serving mode only.

