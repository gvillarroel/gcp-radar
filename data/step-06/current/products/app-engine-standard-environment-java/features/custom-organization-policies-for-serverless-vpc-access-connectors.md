---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.336Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Custom organization policies for Serverless VPC Access connectors"
feature_slug: "custom-organization-policies-for-serverless-vpc-access-connectors"
latest_feature_date: "2024-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref"
keywords:
  - "policies by project folder organization"
  - "organization policy constraints"
  - "org policy for connector"
  - "custom organization policies"
  - "connector org policy"
  - "custom org policies"
  - "Serverless VPC connector governance"
  - "Serverless VPC Access connector"
---

# Custom organization policies for Serverless VPC Access connectors

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

Serverless VPC Access connectors now support custom organization policies that can be applied to projects, folders, or organizations.

## Extended Definition

Serverless VPC Access connectors now support custom organization policies that can be applied to projects, folders, or organizations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)

## Supporting Pages

### "App Engine standard environment for Java gen2 release notes \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- December 09, 2024 Feature Custom organization policies for Serverless VPC Access connectors are now generally available , and can be applied to projects, folders, or organizations.
- Egress settings allow you to specify whether or not to send traffic with external destinations through your Serverless VPC Access connector, which is necessary if you want to set up a static outbound IP address for your App Engine service.
- Egress settings allow you to specify whether or not to send traffic with external destinations through your Serverless VPC Access connector, which is necessary if you want to set up a static outbound IP address for your App Engine service.
- March 24, 2022 Feature Support for Serverless VPC Access connectors in Shared VPC host projects is now at general availability (GA).

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A green check mark will appear next to the connector's name when it is ready to use. gcloud Update gcloud components to the latest version: gcloud components update Enable the Serverless VPC Access API for your project: gcloud services enable vpcaccess.googleapis.com Create a Serverless VPC Access connector: gcloud compute networks vpc-access connectors create CONNECTOR NAME \ --region = REGION \ --subnet = SUBNET \ --subnet-project = HOST PROJECT ID \ Optional: specify minimum and maximum instance values between 2 and 10, default is 2 min, 10 max. --min-instances = MIN \ --max-instances = MAX \ Optional: specify machine type, default is e2-micro --machine-type = MACHINE TYPE Replace the following: CONNECTOR NAME : a name for your connector.
- Go to Google Cloud console dashboard In the menu bar at the top of the dashboard, click the project dropdown menu and select the host project. gcloud Set the default project in the gcloud CLI to the host project by running the following in your terminal: gcloud config set project HOST PROJECT ID Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project Create a Serverless VPC Access connector To send requests to your VPC network and receive the corresponding responses, you must create a Serverless VPC Access connector.
- If your organization uses Shared VPC, you can set up a Serverless VPC Access connector in either the service project or the host project.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Specify the fully-qualified name of your Serverless VPC Access connector in quotes: "projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME " egress setting Optional.
- Requests to external IP addresses are sent to the public internet. all-traffic All requests are sent through the Serverless VPC Access connector into the connected VPC network.
- Configures your application to use a Serverless VPC Access connector, enabling the application to send requests to internal resources in your VPC network.
- Requests to internal IP addresses are sent through the Serverless VPC Access connector into the connected VPC network.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Specify the fully-qualified name of your Serverless VPC Access connector in quotes: "projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME " egress setting Optional.
- Requests to external IP addresses are sent to the public internet. all-traffic All requests are sent through the Serverless VPC Access connector into the connected VPC network.
- Configures your application to use a Serverless VPC Access connector, enabling the application to send requests to internal resources in your VPC network.
- Requests to internal IP addresses are sent through the Serverless VPC Access connector into the connected VPC network.

