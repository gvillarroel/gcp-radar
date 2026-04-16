---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.335Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "oauth2client library version 1.4.2 upgrade"
feature_slug: "oauth2client-library-version-1-4-2-upgrade"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
keywords:
  - "oauth2client"
  - "library"
  - "version"
  - "upgrade"
  - "has"
  - "been"
  - "upgraded"
---

# oauth2client library version 1.4.2 upgrade

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

The oauth2client library has been upgraded to version 1.4.2.

## Extended Definition

The oauth2client library has been upgraded to version 1.4.2.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences](https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)

## Supporting Pages

### "Migrate from PHP 5.5 to the latest PHP runtime \_|\_ App Engine migration\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences](https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences)
- Source ID: `site-docs-reference-4`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- The behavior of some elements in the app.yaml configuration file has been modified: Element Change type Description entrypoint Added Optionally , use this field to specify the command that will run when your app starts . threadsafe Deprecated All applications are presumed to be threadsafe, meaning an instance can handle multiple requests at the same time. api version Deprecated Previously required but not needed in the second-generation PHP runtimes. application readable Deprecated builtins Deprecated libraries Deprecated Arbitrary third party dependencies can be installed using a composer.json metadata file. handlers Modified The script field is optional and the only accepted value is auto .
- To upgrade your second-generation app to use the latest supported version of PHP, see Upgrade an existing application .
- Compatibility issues between PHP 5.5 and the second-generation PHP runtimes The official PHP documentation provides information on migrating from different PHP versions: Migrating from PHP 5.5.x to PHP 5.6.x Migrating from PHP 5.6.x to PHP 7.0.x Migrating from PHP 7.0.x to PHP 7.1.x Migrating from PHP 7.1.x to PHP 7.2.x Migrating from PHP 7.2.x to PHP 7.3.x Migrating from PHP 7.3.x to PHP 7.4.x Migrating from PHP 7.4.x to PHP 8.0.x Migrating from PHP 8.0.x to PHP 8.1.x Key differences between PHP 5.5 and the second-generation PHP runtimes The following is a summary of the differences between the PHP 5.5 and the second-generation PHP runtimes in the App Engine standard environment: Memory usage differences Second-generation runtimes see a higher baseline of memory usage compared to first-generation runtimes.
- Running your application locally To test your application and run it locally: Locally install a version of PHP that corresponds to a second-generation PHP runtime available in the App Engine standard environment.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- If you don't specify credentials when constructing // the client, the client library will look for credentials in the // environment. const storage = new Storage (); // Makes an authenticated API request. async function listBuckets () { try { const results = await storage . getBuckets (); const [ buckets ] = results ; console . log ( 'Buckets:' ); buckets . forEach ( bucket = > { console . log ( bucket . name ); }); } catch ( err ) { console . error ( 'ERROR:' , err ); } } listBuckets (); PHP // Imports the Cloud Storage client library. use Google\Cloud\Storage\StorageClient; / Authenticate to a cloud client library using a service account implicitly. @param string $projectId The Google project ID. / function auth cloud implicit($projectId) { $config = [ 'projectId' => $projectId, ]; If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. $storage = new StorageClient($config); Make an authenticated API request (listing storage buckets) foreach ($storage->buckets() as $bucket) { printf('Bucket: %s' .
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .
- Storage storage = StorageOptions . getDefaultInstance (). getService (); System . out . println ( "Buckets:" ); Page<Bucket> buckets = storage . list (); for ( Bucket bucket : buckets . iterateAll ()) { System . out . println ( bucket . toString ()); } } Node.js // Imports the Google Cloud client library. const { Storage } = require ( ' @google-cloud/storage ' ); // Instantiates a client.
- Background () // For API packages whose import path is starting with "cloud.google.com/go", // such as cloud.google.com/go/storage in this case, if there are no credentials // provided, the client library will look for credentials in the environment. storageClient , err := storage .

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- Update gcloud components to the latest version: gcloud components update Ensure that the Serverless VPC Access API is enabled for your project: gcloud services enable vpcaccess.googleapis.com Create the connector using one of the following options: For more details and optional arguments, see the gcloud reference .
- In the Add condition panel, create a CEL condition that refers to a supported service resource, for example, resource.management.autoUpgrade == false .
- Using the urlfetch library ignores egress settings, and requests will not route through a Serverless VPC Access connector.

