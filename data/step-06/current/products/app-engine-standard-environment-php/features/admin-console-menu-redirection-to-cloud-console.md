---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.337Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Admin Console menu redirection to Cloud Console"
feature_slug: "admin-console-menu-redirection-to-cloud-console"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "admin"
  - "console"
  - "menu"
  - "redirection"
  - "menus"
  - "now"
  - "redirect"
  - "while"
---

# Admin Console menu redirection to Cloud Console

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

Admin Console menus now redirect to the Cloud Console while selected services, such as Admin Logs, remain available.

## Extended Definition

Admin Console menus now redirect to the Cloud Console while selected services, such as Admin Logs, remain available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Admin API provides programmatic access to several of the App Engine administrative operations that are found in the Google Cloud console .
- Home Technology areas App Engine Admin API Overview Send feedback An Overview of the Admin API Stay organized with collections Save and categorize content based on your preferences.
- The App Engine Admin API is a RESTful API for managing your App Engine applications regardless of programming language.
- With the Admin API, you can manage your App Engine applications in manners that best suit your environment or process.

### "Mapping custom domains \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains)
- Source ID: `site-docs-reference-4`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Delegating ownership to other Google Cloud users or service accounts If you need to delegate the ownership of your domain to other users or service accounts, you can add permission through the Search Console page.
- In order to add or edit a custom domain mapping, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.get permission.
- To view a list of service accounts, open the Service Accounts page in the Google Cloud console To add permissions through the Search Console : Open the Search Console verification .

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- Update a connector You can update and monitor the following attributes of your connector by using the Google Cloud console, Google Cloud CLI, or the API: Machine (instance) type Minimum and maximum number of instances Recent throughput, number of instances, and CPU utilization Update machine type Caution: Changing machine type can cause some long-running connections to drop.
- When a connector and its VPC network are in different projects, a Shared VPC network administrator must create the connector's subnet in the Shared VPC network before you can create the connector, and you must create the connector using an existing subnet.
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .

