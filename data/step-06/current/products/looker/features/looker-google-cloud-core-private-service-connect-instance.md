---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.501Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker Google Cloud core Private Service Connect instance"
feature_slug: "looker-google-cloud-core-private-service-connect-instance"
latest_feature_date: "2024-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/bi-connectors"
  - "https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
keywords:
  - "looker"
  - "core"
  - "private"
  - "connect"
  - "instance"
  - "you"
  - "can"
  - "now"
---

# Looker Google Cloud core Private Service Connect instance

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

You can now create and edit Looker (Google Cloud core) Private Service Connect instances in the Google Cloud console.

## Extended Definition

You can now create and edit Looker (Google Cloud core) Private Service Connect instances in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)

## Supporting Pages

### Admin settings - BI Connectors \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- The Microsoft Excel connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- The Tableau Desktop connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- For customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections, your network administrator must configure your network so that traffic from Microsoft Excel can reach your Looker instance.
- For customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections, your network administrator must configure your network so that traffic from Tableau Desktop can reach your Looker instance.

### "Quickstart: Create a Looker (Google Cloud core) public secure connection\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)
- Source ID: `site-docs-reference-required-4`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about creating and configuring an instance, see the Looker (Google Cloud core) documentation: Create a Looker (Google Cloud core) instance Set up a custom domain for a Looker (Google Cloud core) instance that uses public connections Configure an IP allowlist for Looker (Google Cloud core) Prepare a Looker (Google Cloud core) instance for users Connect to your database Use the sample LookML project on a Looker (Google Cloud core) instance Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- What's next This Quickstart covered how to create a Standard Looker (Google Cloud core) instance that uses a public secure network connection and Google-managed encryption and that requires no deferred or denied maintenance windows and no additional users beyond the default number that is provided for a Standard edition.
- Create a Looker (Google Cloud core) public secure connection standard edition instance Learn how to create a Looker (Google Cloud core) instance that uses default configuration settings.
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Before you can create an instance, you need to complete these steps for the Google Cloud project in which you want to create the Looker (Google Cloud core) instance: Work with Sales to ensure that your annual contract is completed and that you have quota allocated in your project.

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, Looker (Google Cloud core) customers who are using OIDC with a private connections instance, must ensure that their networks are set up to allow access to the OIDC provider.
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- The following section is from an example of a discovery document: { "issuer": "https://accounts.google.com", "authorization endpoint": "https://accounts.google.com/o/oauth2/v2/auth", "token endpoint": "https://www.googleapis.com/oauth2/v4/token", "userinfo endpoint": "https://www.googleapis.com/oauth2/v3/userinfo", "revocation endpoint": "https://accounts.google.com/o/oauth2/revoke", "jwks uri": "https://www.googleapis.com/oauth2/v3/certs", "response types supported": [ "code", "token", "id token", "code token" "code id token", "token id token", "code token id token", "none" ], "subject types supported": [ "public" ], "id token signing alg values supported": [ "RS256" ], "scopes supported": [ "openid", "email", "profile" ], "token endpoint auth methods supported": [ "client secret post", "client secret basic" ], "claims supported": [ "aud", "email", "email verified", "exp", "family name", "given name", "iat", "iss", "locale", "name", "picture", "sub" ], Configuring OpenID Connect auth settings To configure OpenID Connect authentication for your Looker instance, select OpenID Connect from the Authentication section of the Admin panel.
- Use the configuration information you obtained from your OP's discovery document, your OP, or your internal authentication team to enter connection settings in the following fields: Identifier : The client identifier unique to your Looker instance.

