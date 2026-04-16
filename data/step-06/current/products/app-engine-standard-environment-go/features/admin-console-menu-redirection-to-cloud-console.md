---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.762Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Admin Console menu redirection to Cloud Console"
feature_slug: "admin-console-menu-redirection-to-cloud-console"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains"
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

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Admin Console menus now redirect to Cloud Console while selected services such as Admin Logs remain accessible in the Admin Console.

## Extended Definition

Admin Console menus now redirect to Cloud Console while selected services such as Admin Logs remain accessible in the Admin Console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project)
- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)

## Supporting Pages

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to Google Cloud console dashboard In the menu bar at the top of the dashboard, click the project dropdown menu and select the host project. gcloud Set the default project in the gcloud CLI to the host project by running the following in your terminal: gcloud config set project HOST PROJECT ID Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project Create a Serverless VPC Access connector To send requests to your VPC network and receive the corresponding responses, you must create a Serverless VPC Access connector.
- The active account must have the following roles on the host project: Compute Network Viewer ( compute.networkViewer ) Project IAM Admin ( resourcemanager.projectIamAdmin ) Service Usage Admin ( serviceuseage.serviceUsageAdmin ) Serverless VPC Access Admin ( vpcaccess.admin ) Select the host project in your preferred environment.
- To make your connector appear when principals view available connectors in the Google Cloud console or from their terminal, add IAM roles for principals who deploy App Engine services.
- You can create a connector by using the Google Cloud console, Google Cloud CLI, or Terraform: Console Enable the Serverless VPC Access API for your project.

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Admin API provides programmatic access to several of the App Engine administrative operations that are found in the Google Cloud console .
- Home Technology areas App Engine Admin API Overview Send feedback An Overview of the Admin API Stay organized with collections Save and categorize content based on your preferences.
- The App Engine Admin API is a RESTful API for managing your App Engine applications regardless of programming language.
- With the Admin API, you can manage your App Engine applications in manners that best suit your environment or process.

### "Mapping custom domains \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Delegating ownership to other Google Cloud users or service accounts If you need to delegate the ownership of your domain to other users or service accounts, you can add permission through the Search Console page.
- In order to add or edit a custom domain mapping, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.get permission.
- To view a list of service accounts, open the Service Accounts page in the Google Cloud console To add permissions through the Search Console : Open the Search Console verification .

