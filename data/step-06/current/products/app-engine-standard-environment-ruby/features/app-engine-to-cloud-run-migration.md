---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.391Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine to Cloud Run migration"
feature_slug: "app-engine-to-cloud-run-migration"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref"
keywords:
  - "migration"
  - "existing"
  - "deploy"
  - "lets"
---

# App Engine to Cloud Run migration

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine to Cloud Run migration lets you deploy existing standard environment apps to Cloud Run with the gcloud beta app migrate-to-run command.

## Extended Definition

App Engine to Cloud Run migration lets you deploy existing standard environment apps to Cloud Run with the gcloud beta app migrate-to-run command.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref](https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- Create a connector using an existing subnet : gcloud compute networks vpc-access connectors create CONNECTOR NAME \ --region REGION \ --subnet SUBNET NAME \ --subnet-project HOST PROJECT ID \ --min-instances MIN \ --max-instances MAX \ --machine-type MACHINE TYPE Replace the following: CONNECTOR NAME : a name for your connector, matching Compute Engine naming conventions , with the additional requirements that the name must be less than 21 characters long, and that hyphens (-) count as two characters.
- Errors Service account needs Service Agent role error If you use the Restrict Resource Service Usage organization policy constraint to block Cloud Deployment Manager ( deploymentmanager.googleapis.com ), you might see the following error message: Serverless VPC Access service account (service-<PROJECT NUMBER>@gcp-sa-vpcaccess.iam.gserviceaccount.com) needs Serverless VPC Access Service Agent role in the project.
- RESOURCE CIDR RANGE : the CIDR range for the connector whose access you are restricting VPC NETWORK : the name of your VPC network VPC CONNECTOR NETWORK TAG : the universal VPC connector network tag if you want the rule to apply to all existing VPC connectors and any VPC connectors made in the future.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- Create a connector using an existing subnet : gcloud compute networks vpc-access connectors create CONNECTOR NAME \ --region REGION \ --subnet SUBNET NAME \ --subnet-project HOST PROJECT ID \ --min-instances MIN \ --max-instances MAX \ --machine-type MACHINE TYPE Replace the following: CONNECTOR NAME : a name for your connector, matching Compute Engine naming conventions , with the additional requirements that the name must be less than 21 characters long, and that hyphens (-) count as two characters.
- Errors Service account needs Service Agent role error If you use the Restrict Resource Service Usage organization policy constraint to block Cloud Deployment Manager ( deploymentmanager.googleapis.com ), you might see the following error message: Serverless VPC Access service account (service-<PROJECT NUMBER>@gcp-sa-vpcaccess.iam.gserviceaccount.com) needs Serverless VPC Access Service Agent role in the project.
- RESOURCE CIDR RANGE : the CIDR range for the connector whose access you are restricting VPC NETWORK : the name of your VPC network VPC CONNECTOR NETWORK TAG : the universal VPC connector network tag if you want the rule to apply to all existing VPC connectors and any VPC connectors made in the future.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref](https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- To override the default, specify a new value between 0 and 2147483647 , and deploy a new version or redeploy over an existing version.
- In order to use static handlers, at least one of your handlers must contain the line script: auto or define an entrypoint element to deploy successfully. secure Optional.
- You must first create the app.yaml file for the default service before you can create and deploy app.yaml files for additional services within your app.
- Note: For new projects you create after March 2025, App Engine sets the maximum instances default for standard environment deployments to 20.

