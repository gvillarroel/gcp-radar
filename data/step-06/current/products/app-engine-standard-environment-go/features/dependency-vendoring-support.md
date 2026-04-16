---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.316Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Dependency vendoring support"
feature_slug: "dependency-vendoring-support"
latest_feature_date: "2016-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app"
keywords:
  - "dependency"
  - "vendoring"
  - "external"
  - "supports"
---

# Dependency vendoring support

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The App Engine Go SDK supports vendoring external dependencies for Go applications.

## Extended Definition

The App Engine Go SDK supports vendoring external dependencies for Go applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)

## Supporting Pages

### "Specify dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- One approach is by creating a symlink: mkdir private / private . example . com ln - s / path / to / private . example . com / foo private / private . example . com / foo Update your go.mod file to use the replace directive to use the private directory for your dependency: go mod edit - replace = private . example . com / foo =. / private / private . example . com / foo Your go.mod file should now look like: Final go.mod file module private . example . com / myapp require private . example . com / foo v1 .2.3 replace private . example . com / foo = > . / private / private . example . com / foo Original go.mod file module private . example . com / myapp require private . example . com / foo v1 .2.3 Don't modify how you import and use your private package.
- Your import statement should look like this: import "private.example.com/foo" Include your private dependency in your deployment by deploying your app: gcloud app deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following example assumes your app is in the /myapp/ directory: Change to your app directory: cd / myapp Create a directory containing your private dependencies: mkdir private Make sure your private dependency is in the private directory.
- Vendoring dependencies Vendoring copies the packages your app uses into the application directory instead of downloading modules from their sources during the build process.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go Java Node.js PHP Python Ruby To authenticate users in Google Cloud applications, Google offers the following user authentication methods: Authentication Service Summary Identity Platform (recommended) Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol.
- Similar to Identity Platform, Firebase Authentication supports multiple authentication methods (SAML, OIDC, email/password, social, mobile, and custom auth) to provide flexible integration options for any identity solution.
- Identity Platform supports multiple authentication methods (SAML, OIDC, email/password, social, phone, and custom auth) to provide flexible integration options for any identity solution.
- Firebase Authentication supports the largest number of users while maintaining the smallest amount of code.

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- Source ID: `site-docs-reference-4`
- Final score: 34
- Re-rank relevance: N/A

