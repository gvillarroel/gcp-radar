---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.878Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine SDK delivery via Cloud SDK"
feature_slug: "app-engine-sdk-delivery-via-cloud-sdk"
latest_feature_date: "2019-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project"
keywords:
  - "app"
  - "engine"
  - "sdk"
  - "delivery"
  - "via"
  - "functionality"
  - "now"
  - "delivered"
---

# App Engine SDK delivery via Cloud SDK

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine SDK functionality is now delivered exclusively through the Cloud SDK.

## Extended Definition

App Engine SDK functionality is now delivered exclusively through the Cloud SDK.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)

## Supporting Pages

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Identity-Aware Proxy (IAP) Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.
- IAP doesn't protect against activity within a project, such as one App Engine service accessing another service in the same project.

### "Mail API for legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Bounce notifications when mail is not delivered Mail that matches a known signature for spam, viruses, or other malicious content may not be accepted for delivery.
- Go Java PHP Python Note: To improve email security and ensure reliable, high-volume email delivery, we recommend that you migrate from the legacy Mail API to an SMTP-based email service , such as SendGrid, Mailgun, or Mailjet.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Mail API for legacy bundled services Stay organized with collections Save and categorize content based on your preferences.
- Authentication with DomainKeys Identified Mail (DKIM) When you send mail, App Engine uses the DomainKeys Identified Mail (DKIM) standard to authenticate the domain.

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Provide access to the connector Provide access to the connector by granting the Serverless VPC Access User IAM role on the host project to the principal that deploys your App Engine service.
- Click Save . gcloud Run the following in your terminal: gcloud projects add-iam-policy-binding HOST PROJECT ID \ --member= PRINCIPAL \ --role=roles/vpcaccess.user Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project PRINCIPAL : the principal that deploys your App Engine service.
- Click Save . gcloud Run the following in your terminal: gcloud projects add-iam-policy-binding SERVICE PROJECT ID \ --member= PRINCIPAL \ --role=roles/compute.networkViewer Replace the following: SERVICE PROJECT ID : the ID of the service project PRINCIPAL : the principal who deploys App Engine services.
- Click Save . gcloud Run the following in your terminal: gcloud projects add-iam-policy-binding HOST PROJECT ID \ --member= PRINCIPAL \ --role=roles/vpcaccess.viewer Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project PRINCIPAL : the principal who deploys App Engine services.

