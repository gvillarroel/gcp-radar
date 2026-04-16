---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.603Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Datastore empty list property support"
feature_slug: "datastore-empty-list-property-support"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "datastore"
  - "empty"
  - "list"
  - "property"
  - "now"
  - "supports"
  - "properties"
  - "whose"
---

# Datastore empty list property support

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Datastore now supports properties whose value is an empty list.

## Extended Definition

Datastore now supports properties whose value is an empty list.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The kind of the entity for the query. properties A list of properties to include as columns of the index, in the order to be sorted: properties used in equality filters first, followed by the property used in inequality filters, then the sort orders and their directions.
- Each element in this list has the following elements: name The datastore name of the property. direction The direction to sort, either asc for ascending or desc for descending.
- The following is an example of an index.yaml file: indexes : - kind : Cat ancestor : no properties : - name : name - name : age direction : desc - kind : Cat properties : - name : name direction : asc - name : whiskers direction : desc - kind : Store ancestor : yes properties : - name : business direction : asc - name : owner direction : asc The syntax of index.yaml is the YAML format.
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Node.js Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists the endpoints where you can make HTTP requests for specific metadata: Metadata endpoint Description /computeMetadata/v1/project/numeric-project-id The project number assigned to your project. /computeMetadata/v1/project/project-id The project ID assigned to your project. /computeMetadata/v1/instance/region The region the instance is running in. /computeMetadata/v1/instance/service-accounts/default/aliases /computeMetadata/v1/instance/service-accounts/default/email The default service account email assigned to your project. /computeMetadata/v1/instance/service-accounts/default/ Lists all the default service accounts for your project. /computeMetadata/v1/instance/service-accounts/default/scopes Lists all the supported scopes for the default service accounts. /computeMetadata/v1/instance/service-accounts/default/token Returns the auth token that can be used to authenticate your application to other Google Cloud APIs.
- For example: "scripts" : { "start" : "node app.js" } For your app to receive HTTP requests, your start script should start a web server that listens on host 0.0.0.0 and the port specified by the PORT environment variable , which is accessible in Node.js as process.env.PORT .
- Add the GOOGLE NODE RUN SCRIPTS build environment variable with an empty value in your app.yaml file. build env variables : GOOGLE NODE RUN SCRIPTS : '' For details about specifying build environment variables see build env variables section in the app.yaml file.
- Because minor and patch versions are automatically updated, if present, the engines.node property in your package.json file can only specify the major version and be compatible with the Node.js version specified in your app.yaml file.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- VPC CONNECTOR CIDR RANGE : the CIDR range for the connector you whose access you are restricting VPC NETWORK : the name of your VPC network RESOURCE TAG : the network tag for the VPC resource that you want your VPC connector to access PRIORITY : an integer less than the priority you set in the previous step.
- RESOURCE CIDR RANGE : the CIDR range for the connector whose access you are restricting VPC NETWORK : the name of your VPC network VPC CONNECTOR NETWORK TAG : the universal VPC connector network tag if you want the rule to apply to all existing VPC connectors and any VPC connectors made in the future.
- To verify that the custom constraint exists, use the gcloud org-policies list-custom-constraints command: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID Replace ORGANIZATION ID with the ID of your organization resource.

