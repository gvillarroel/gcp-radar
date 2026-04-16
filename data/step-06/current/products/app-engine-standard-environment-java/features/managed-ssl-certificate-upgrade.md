---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.247Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Managed SSL certificate upgrade"
feature_slug: "managed-ssl-certificate-upgrade"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration"
keywords:
  - "certificate"
  - "mappings"
  - "existing"
  - "managed"
  - "upgrade"
  - "domain"
---

# Managed SSL certificate upgrade

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Existing domain mappings can be upgraded to managed SSL certificates.

## Extended Definition

Existing domain mappings can be upgraded to managed SSL certificates.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration](https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)

## Supporting Pages

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Upgrade an existing application Stay organized with collections Save and categorize content based on your preferences.
- Upgrade Java on a compatible Enterprise Edition (EE) version To use Java 25 on Enterprise Edition 11 (EE 11) , or Java 21 on Enterprise Edition 10 (EE 10) , upgrade your application servlets and dependencies in your Maven and Gradle files to include the Jakarta namespace: Java 25 (EE 11) To use Java 25 on Enterprise Edition 11 (EE 11) , follow these steps: Change the version number in your web.xml configuration file to version=6.1 .
- The process of upgrading an existing application depends on the runtime version that your application uses: Java 8 : Migrate your application to the latest supported Java version .
- If you use legacy bundled services, upgrade your applications to run on either: Java Enterprise Edition 11 (E11): EE 11 doesn't support javax.servlet.

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration](https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)
- Source ID: `site-docs-reference-4`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Upgrade an existing application Stay organized with collections Save and categorize content based on your preferences.
- Upgrade Java on a compatible Enterprise Edition (EE) version To use Java 25 on Enterprise Edition 11 (EE 11) , or Java 21 on Enterprise Edition 10 (EE 10) , upgrade your application servlets and dependencies in your Maven and Gradle files to include the Jakarta namespace: Java 25 (EE 11) To use Java 25 on Enterprise Edition 11 (EE 11) , follow these steps: Change the version number in your web.xml configuration file to version=6.1 .
- The process of upgrading an existing application depends on the runtime version that your application uses: Java 8 : Migrate your application to the latest supported Java version .
- If you use legacy bundled services, upgrade your applications to run on either: Java Enterprise Edition 11 (E11): EE 11 doesn't support javax.servlet.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- If you have set up a wildcard subdomain mapping for a custom domain, you can also address a service or any of its instances via a URL of the form https://s.domain.com or https://i.s.domain.com .
- To override the default, specify a new max instances value in your app.yaml file, and deploy a new version or redeploy over an existing version.
- When none of the existing instances are available to serve an incoming request, App Engine starts a new instance.

