---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.668Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Yarn 2 private module support"
feature_slug: "yarn-2-private-module-support"
latest_feature_date: "2023-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "yarn"
  - "private"
  - "module"
  - "lets"
  - "node"
  - "js"
  - "runtime"
  - "configure"
---

# Yarn 2 private module support

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Yarn 2 support lets the Node.js runtime configure private modules hosted in Artifact Registry.

## Extended Definition

Yarn 2 support lets the Node.js runtime configure private modules hosted in Artifact Registry.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Node.js Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Because the runtime performs a fresh install, you do not need to upload your node modules folder.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Node.js Runtime Environment Stay organized with collections Save and categorize content based on your preferences.
- To support Node.js packages that require native extensions, the runtime includes system packages enabling you to use tools such as ImageMagick , FFmpeg , and Chrome headless .
- The Node.js runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : nodejs VERSION Where VERSION is the Node.js MAJOR version number.

### "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
- Source ID: `site-docs-reference-3`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private dependencies with Artifact Registry If your app uses a private npm module , you can use an Artifact Registry Node.js package repository to host private dependencies.
- You can use any Node.js web framework including the following: Express.js Hapi.js Loopback.js Koa.js Kraken.js Restify.js Sails.js To use a particular web framework, such as Express.js , add the framework to your package.json file: Using npm : npm install express Using yarn : yarn add express Using pnpm : pnpm add express For example, the resulting package.json file might look as follows: { "dependencies" : { "lodash" : "^4.0.1" , "express" : "^4.16.2" } } Installing the Cloud Client Libraries The Cloud Client Libraries for Node.js is the idiomatic way for Node.js developers to integrate with Google Cloud services, such as Firestore in Datastore mode (Datastore) and Cloud Storage .
- To install the Node.js client library for Cloud Storage: Install the Cloud Client Libraries locally by using a package manager: To use npm , run: npm install @google-cloud/storage To use yarn , run: yarn add @google-cloud/storage To use pnpm , run: pnpm add @google-cloud/storage Set up authentication.
- For example, if you want to specify Lodash as a dependency, your package.json file might look as follows: { "dependencies" : { "lodash" : "^4.0.1" } } During deployment, the Node.js runtime automatically installs all dependencies declared in your package.json file.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- To configure the egress behavior of your App Engine service: Add the egress setting attribute to the vpc access connector field of your service's app.yaml file: vpc access connector : name : projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME egress setting : EGRESS SETTING Replace: PROJECT ID with your Google Cloud project ID REGION with the region your connector is in CONNECTOR NAME with the name of your connector EGRESS SETTING with one of the following: private-ranges-only Default.
- Benefits Serverless VPC Access lets you write any number of custom constraints using most user-configured fields in the Serverless VPC Access API.
- In the Resource type box, select the name of the Google Cloud REST resource containing the object and field that you want to restrict—for example, container.googleapis.com/NodePool .

