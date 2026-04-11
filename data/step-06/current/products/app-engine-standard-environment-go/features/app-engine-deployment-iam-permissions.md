---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.808Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine deployment IAM permissions"
feature_slug: "app-engine-deployment-iam-permissions"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "roles/appengine.deployer"
  - "App Engine deploy role"
  - "App Engine deployment permissions"
  - "required IAM roles"
  - "predefined roles"
  - "App Engine Deployer"
  - "deploying App Engine"
  - "service account"
---

# App Engine deployment IAM permissions

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Improved documentation for deploying App Engine apps with IAM roles and service accounts, clarifying required predefined roles and permissions.

## Extended Definition

App Engine Standard deployment requires an authenticated identity, which can be a user account (for Console, Cloud CLI, or IDE/build tools using gcloud) or a service account. For service-account-based deployment, Google documents allow configuring the account in `app.yaml` or `appengine-web.xml`, or via `gcloud app create` / `gcloud app update`, and require the service account to be in the same project as the deployment; the App Engine environment by default provides credentials from the default service account. The docs also advise replacing broad Editor access with narrower roles and state that VPC-connector-related deployments additionally need Serverless VPC Access User and Compute Viewer for the deploying identity, while the VPC Access service account uses `roles/vpcaccess.serviceAgent`; however, the exact predefined App Engine deployer role set is not fully enumerated in these excerpts.

## Evidence Summary

These pages provide evidence for authenticated deployment methods, same-project service-account configuration, least-privilege role guidance, and additional IAM requirements for VPC connector deployments, but do not fully list all App Engine deploy-specific predefined roles in the provided excerpts.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: The page is centered on IAM access control for App Engine and explicitly covers granting team members access and using user or service accounts to deploy and manage apps.

Evidence snippets:
- If you don't specify credentials when constructing // the client, the client library will look for credentials in the // environment. const storage = new Storage (); // Makes an authenticated API request. async function listBuckets () { try { const results = await storage . getBuckets (); const [ buckets ] = results ; console . log ( 'Buckets:' ); buckets . forEach ( bucket = > { console . log ( bucket . name ); }); } catch ( err ) { console . error ( 'ERROR:' , err ); } } listBuckets (); PHP // Imports the Cloud Storage client library. use Google\Cloud\Storage\StorageClient; / Authenticate to a cloud client library using a service account implicitly. @param string $projectId The Google project ID. / function auth cloud implicit($projectId) { $config = [ 'projectId' => $projectId, ]; If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. $storage = new StorageClient($config); Make an authenticated API request (listing storage buckets) foreach ($storage->buckets() as $bucket) { printf('Bucket: %s' .
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .
- A user account can be used to authenticate from the following tools: Google Cloud console Google Cloud CLI IDEs and build tools that use the gcloud CLI to test and deploy App Engine apps A service account , which is intended to represent an application or a process instead of a person.
- If the default service account already has the Editor role, we recommend that you replace the Editor role with less permissive roles.To safely modify the service account's roles, use Policy Simulator to see the impact of the change, and then grant and revoke the appropriate roles .

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: The page discusses service account configuration for App Engine deployments but does not document the specific IAM roles or permission sets required for deployment operations.

Evidence snippets:
- Your version-specific service account must be in the same project where you deploy your application. appengine-web.xml If you use the Java runtimes and include the App Engine legacy bundled services, specify your service account by adding the <service-account> element in your appengine-web.xml file: <service-account> SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com</service-account> Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- Your version-specific service account must be in the same project where you deploy your application. app.yaml In your app.yaml file, specify your service account by adding the service account element: service account: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Errors Service account needs Service Agent role error If you use the Restrict Resource Service Usage organization policy constraint to block Cloud Deployment Manager ( deploymentmanager.googleapis.com ), you might see the following error message: Serverless VPC Access service account (service-<PROJECT NUMBER>@gcp-sa-vpcaccess.iam.gserviceaccount.com) needs Serverless VPC Access Service Agent role in the project.
- This service account's email address has the following form: service- PROJECT NUMBER @gcp-sa-vpcaccess.iam.gserviceaccount.com By default, this service account has the Serverless VPC Access Service Agent role ( roles/vpcaccess.serviceAgent ).
- Troubleshooting Service account permissions To perform operations in your Google Cloud project, Serverless VPC Access uses the Serverless VPC Access Service Agent service account.
- Note: To deploy a service with a connector, the user or service account doing the deployment needs the Serverless VPC Access User and Compute Viewer IAM roles.

