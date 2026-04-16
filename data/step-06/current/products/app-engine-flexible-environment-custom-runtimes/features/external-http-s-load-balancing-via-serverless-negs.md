---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:30:30.390Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "External HTTP(S) Load Balancing via serverless NEGs"
feature_slug: "external-http-s-load-balancing-via-serverless-negs"
latest_feature_date: "2020-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls"
keywords:
  - "external"
  - "http"
  - "load"
  - "balancing"
  - "via"
  - "serverless"
  - "negs"
  - "app"
---

# External HTTP(S) Load Balancing via serverless NEGs

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine can be integrated with External HTTP(S) Load Balancing by using serverless network endpoint groups.

## Extended Definition

App Engine can be integrated with External HTTP(S) Load Balancing by using serverless network endpoint groups.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls](https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls)

## Supporting Pages

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- App Engine SSL support offers globally distributed SSL endpoints and built-in load balancing to serve your app securely, reliably, and quickly to a worldwide audience.
- If you want Cloud Load Balancing to manage incoming requests to your custom domain, see Migrate App Engine custom domain to Cloud Load Balancing .
- With Cloud Load Balancing, you can set SSL policies that control the features of SSL that your load balancer negotiates with clients.

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When HTTP(S) Load Balancing is enabled for serverless apps , you can: Configure your serverless app to serve from a dedicated IPv4 or IPv6 IP address that is not shared with other services.
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud , run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- Requests that don't pass through Cloud Load Balancing are never intercepted and rerouted by the patterns that you have defined in your dispatch file: Sends the request to an available instance of a specific service and version: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- For more information, see HTTP(S) Load Balancing logging and monitoring .

### "Secure your app with minimum TLS (flexible environment) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls](https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use Cloud Load Balancing and serverless NEGS to route traffic to your App Engine application, you can disable a TLS version or cipher by defining an SSL security policy .
- These cipher suites are identified by IANA values, as detailed in the following table: TLS version IANA value Cipher suite TLS v1.3 0x1301 TLS AES 128 GCM SHA256 0x1302 TLS AES 256 GCM SHA384 0x1303 TLS CHACHA20 POLY1305 SHA256 TLS v1.2 0xCCA9 TLS ECDHE ECDSA WITH CHACHA20 POLY1305 SHA256 0xCCA8 TLS ECDHE RSA WITH CHACHA20 POLY1305 SHA256 0xC02B TLS ECDHE ECDSA WITH AES 128 GCM SHA256 0xC02F TLS ECDHE RSA WITH AES 128 GCM SHA256 0xC02C TLS ECDHE ECDSA WITH AES 256 GCM SHA384 0xC030 TLS ECDHE RSA WITH AES 256 GCM SHA384 0xC009 TLS ECDHE ECDSA WITH AES 128 CBC SHA 0xC013 TLS ECDHE RSA WITH AES 128 CBC SHA 0xC00A TLS ECDHE ECDSA WITH AES 256 CBC SHA 0xC014 TLS ECDHE RSA WITH AES 256 CBC SHA If you need to use a different or a less restrictive cipher suite, we recommend that you use a global external Application Load Balancer.
- When you select the latest TLS version, App Engine automatically blocks insecure traffic, without requiring you to configure a global external Application Load Balancer to route requests to your application.
- For more information, see Set up a classic Application Load Balancer with App Engine and SSL policies for SSL and TLS protocols in the Cloud Load Balancing documentation.

