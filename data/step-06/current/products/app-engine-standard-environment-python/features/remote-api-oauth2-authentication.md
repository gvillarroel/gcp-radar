---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.173Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Remote API OAuth2 authentication"
feature_slug: "remote-api-oauth2-authentication"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml"
keywords:
  - "authentication"
  - "oauth2"
  - "remote"
  - "can"
  - "be"
  - "api"
  - "now"
  - "the"
---

# Remote API OAuth2 authentication

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

The Remote API can now be accessed using OAuth2 credentials via application default credentials.

## Extended Definition

The Remote API can now be accessed using OAuth2 credentials via application default credentials.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)

## Supporting Pages

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After configuring authentication, you can begin managing your apps, including deploying versions of applications and managing the amount of traffic to those versions.
- With the Admin API, you can manage your App Engine applications in manners that best suit your environment or process.
- Home Technology areas App Engine Admin API Overview Send feedback An Overview of the Admin API Stay organized with collections Save and categorize content based on your preferences.
- Tighter control around deploying new versions, including the ability to automate traffic migration between two versions or traffic splitting across one or more versions.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go Java Node.js PHP Python Ruby To authenticate users in Google Cloud applications, Google offers the following user authentication methods: Authentication Service Summary Identity Platform (recommended) Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol.
- The recommended method when starting a new project, so you can use the capabilities of Identity Platform as well as the legacy features from Firebase Authentication .
- This solution is best for most users who want flexible authentication options based on reliable, enterprise-grade features and SLAs.
- This solution is best if you want the most lightweight way to set up user authentication for an App Engine app.

### "The deployment descriptor: web.xml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- For example, if the user accesses the URL path /help/accounts/ , the following <welcome-file-list> element in the deployment descriptor tells the server to check for help/accounts/index.jsp and help/accounts/index.html before reporting that the URL does not exist: <welcome-file-list> <welcome-file>index.jsp</welcome-file> <welcome-file>index.html</welcome-file> </welcome-file-list> Filters A filter is a class that acts on a request like a servlet, but can allow the handling of the request to continue with other filters or servlets.
- If you are migrating from Java 8 and need to use the legacy bundled services with the latest supported Java version, you must add the <app-engine-apis> element and set it to true in your web.xml file: < app - engine - apis>true < / app - engine - apis > Deployment descriptors A web application's deployment descriptor describes the classes, resources and configuration of the application and how the web server uses them to serve web requests.
- Note that App Engine provides the JavaServer Pages Standard Tag Library (JSTL), and you don't need to install it. <taglib> <taglib-uri>/escape</taglib-uri> <taglib-location>/WEB-INF/escape-tags.tld</taglib-location> </taglib> Security and authentication An App Engine application can use Google Accounts for user authentication.
- To declare that HTTPS should be used for a URL, you set up a security constraint in the deployment descriptor (as described in Security and authentication ) with a <user-data-constraint> whose <transport-guarantee> is CONFIDENTIAL .

