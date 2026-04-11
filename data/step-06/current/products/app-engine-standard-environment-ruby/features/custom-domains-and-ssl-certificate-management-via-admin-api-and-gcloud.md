---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.368Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Custom domains and SSL certificate management via Admin API and gcloud"
feature_slug: "custom-domains-and-ssl-certificate-management-via-admin-api-and-gcloud"
latest_feature_date: "2017-06-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "certificate"
  - "management"
  - "ssl"
  - "domains"
  - "via"
  - "custom"
  - "admin"
  - "and"
---

# Custom domains and SSL certificate management via Admin API and gcloud

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

The Admin API and gcloud CLI now support beta-level creation and management of custom domains and SSL certificates for App Engine.

## Extended Definition

The Admin API and gcloud CLI now support beta-level creation and management of custom domains and SSL certificates for App Engine.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "The deployment descriptor: web.xml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: To use G Suite domains with HTTPS, you must first activate and configure SSL for App Engine with your domain .
- Google does not issue SSL certificates for double-wildcard domains hosted at appspot.com .
- The admin role makes it easy to build administrator-only sections of your site. <security-constraint> <web-resource-collection> <web-resource-name>profile</web-resource-name> <url-pattern>/profile/ </url-pattern> </web-resource-collection> <auth-constraint> <role-name> </role-name> </auth-constraint> </security-constraint> <security-constraint> <web-resource-collection> <web-resource-name>admin</web-resource-name> <url-pattern>/admin/ </url-pattern> </web-resource-collection> <auth-constraint> <role-name>admin</role-name> </auth-constraint> </security-constraint> Note: G Suite domain administrators and App Engine domain administrators are not included in the admin role in this context.
- It also contains a <location> element containing the URL path of the resource to show when the error occurs. <error-page> <error-code>500</error-code> <location>/errors/servererror.jsp</location> </error-page> You can't configure custom error handlers for the following error conditions: 404 response page when no servlet mapping is defined for a URL.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Otherwise, users can use your app's App Engine URL to bypass the load balancer, Cloud Armor security policies, SSL certificates, and private keys that are passed through the load balancer.
- Reuse the same SSL certificates and private keys that you use for Compute Engine, Google Kubernetes Engine, and Cloud Storage.
- You can use the simple " . " URL notation with your own custom domains and with HTTP requests.
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-root-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny egress traffic from your connector.

