---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.284Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "TLS 1.2+ support"
feature_slug: "tls-1-2-support"
latest_feature_date: "2025-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
keywords:
  - "secure"
  - "later"
  - "supports"
---

# TLS 1.2+ support

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine standard environment supports TLS 1.2 and later with a secure set of cipher suites; App Engine standard environment supports TLS 1.2 and later with a secure set of cipher suites.

## Extended Definition

App Engine standard environment supports TLS 1.2 and later with a secure set of cipher suites; App Engine standard environment supports TLS 1.2 and later with a secure set of cipher suites.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)

## Supporting Pages

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### "Securing custom domains with SSL \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-4`
- Final score: 51
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next To upgrade existing apps to only allow secure traffic for TLS versions 1.2 and later, see Secure your app with minimum TLS .
- Example: myserver.key.pem Example: openssl rsa -in myserver.key -out myserver.key.pem Concatenate all of the .crt files from your CA into one file, using the following command: cat [ MY DOMAIN CERT ] . crt [ MY SecureServerCA ] . crt [ MY TrustCA ] . crt [ MY TrustExternalCARoot ] . crt > [ MY CONCAT CERT ] . crt where [MY DOMAIN CERT].crt is the certificate for your domain.
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- Example: concat.crt Example: cat www example com.crt AddTrustExternalCARoot.crt RSADomainValidationSecureServerCA.crt RSAAddTrustCA.crt > concat.crt Verify your SSL certificate and private key: To verify that the private key and certificate match , you can use the openssl x509 and openssl rsa commands.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go Java Node.js PHP Python Ruby To authenticate users in Google Cloud applications, Google offers the following user authentication methods: Authentication Service Summary Identity Platform (recommended) Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol.
- Identity-Aware Proxy (IAP) Unlike the other authentication options that implement authentication within your app, IAP protects and secures your application by adding an IAM authentication and authorization layer in front of your resources.
- Similar to Identity Platform, Firebase Authentication supports multiple authentication methods (SAML, OIDC, email/password, social, mobile, and custom auth) to provide flexible integration options for any identity solution.
- Identity Platform supports multiple authentication methods (SAML, OIDC, email/password, social, phone, and custom auth) to provide flexible integration options for any identity solution.

