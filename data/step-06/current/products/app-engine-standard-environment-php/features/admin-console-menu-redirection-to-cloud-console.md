---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.580Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Admin Console menu redirection to Cloud Console"
feature_slug: "admin-console-menu-redirection-to-cloud-console"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml"
keywords:
  - "redirection"
  - "redirect"
  - "menus"
  - "menu"
  - "console"
  - "admin"
  - "now"
  - "to"
---

# Admin Console menu redirection to Cloud Console

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

Admin Console menus now redirect to the Cloud Console while selected services, such as Admin Logs, remain available.

## Extended Definition

Admin Console menus now redirect to the Cloud Console while selected services, such as Admin Logs, remain available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)

## Supporting Pages

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Admin API provides programmatic access to several of the App Engine administrative operations that are found in the Google Cloud console .
- For example, the Admin API provides you with: An integration point for your development and build tools.
- Tip: You can use client libraries to interact with App Engine Admin API.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- Update a connector You can update and monitor the following attributes of your connector by using the Google Cloud console, Google Cloud CLI, or the API: Machine (instance) type Minimum and maximum number of instances Recent throughput, number of instances, and CPU utilization Update machine type Caution: Changing machine type can cause some long-running connections to drop.
- When a connector and its VPC network are in different projects, a Shared VPC network administrator must create the connector's subnet in the Shared VPC network before you can create the connector, and you must create the connector using an existing subnet.
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .

### "The deployment descriptor: web.xml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The admin role makes it easy to build administrator-only sections of your site. <security-constraint> <web-resource-collection> <web-resource-name>profile</web-resource-name> <url-pattern>/profile/ </url-pattern> </web-resource-collection> <auth-constraint> <role-name> </role-name> </auth-constraint> </security-constraint> <security-constraint> <web-resource-collection> <web-resource-name>admin</web-resource-name> <url-pattern>/admin/ </url-pattern> </web-resource-collection> <auth-constraint> <role-name>admin</role-name> </auth-constraint> </security-constraint> Note: G Suite domain administrators and App Engine domain administrators are not included in the admin role in this context.
- For example: <security-constraint> <web-resource-collection> <web-resource-name>profile</web-resource-name> <url-pattern>/profile/ </url-pattern> </web-resource-collection> <user-data-constraint> <transport-guarantee>CONFIDENTIAL</transport-guarantee> </user-data-constraint> </security-constraint> Requests using HTTP (non-secure) for URLs whose transport guarantee is CONFIDENTIAL are automatically redirected to the same URL using HTTPS.
- If a user accesses a URL whose path has a security constraint and the user is not signed in, App Engine redirects the user to the Google Accounts sign-in page.
- Google Accounts redirects the user back to the application URL after successfully signing in or registering a new account.

