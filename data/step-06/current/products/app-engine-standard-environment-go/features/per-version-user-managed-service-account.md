---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.290Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Per-version user-managed service account"
feature_slug: "per-version-user-managed-service-account"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts"
keywords:
  - "each"
  - "version"
  - "account"
  - "user"
  - "managed"
---

# Per-version user-managed service account

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Each App Engine version can be deployed with a specified user-managed service account; Each App Engine version can be deployed with a specified user-managed service account.

## Extended Definition

Each App Engine version can be deployed with a specified user-managed service account; Each App Engine version can be deployed with a specified user-managed service account.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts)

## Supporting Pages

### "Mapping custom domains \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- Source ID: `site-docs-reference-4`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Delegating ownership to other Google Cloud users or service accounts If you need to delegate the ownership of your domain to other users or service accounts, you can add permission through the Search Console page.
- If the user browses a domain that matches an application version name or service name, the application serves that version.
- Under Properties , click the domain for which you want to add a user or service account.
- There is a limit of 20 managed SSL certificates per week for each base domain.

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts)
- Source ID: `site-docs-reference-4`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using a version-specific service account lets you grant different privileges to each application version, based on the specific tasks it performs, and avoid granting more privileges than necessary.
- Each new version that you deploy hereafter uses the new app-level default service account unless you explicitly assign a version-specific service account.
- Each new version that you deploy hereafter uses the new app-level default service account unless you explicitly assign a version-specific service account.
- Your version-specific service account must be in the same project where you deploy your application. appengine-web.xml If you use the Java runtimes and include the App Engine legacy bundled services, specify your service account by adding the <service-account> element in your appengine-web.xml file: <service-account> SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com</service-account> Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.
- If you don't specify credentials when constructing // the client, the client library will look for credentials in the // environment. const storage = new Storage (); // Makes an authenticated API request. async function listBuckets () { try { const results = await storage . getBuckets (); const [ buckets ] = results ; console . log ( 'Buckets:' ); buckets . forEach ( bucket = > { console . log ( bucket . name ); }); } catch ( err ) { console . error ( 'ERROR:' , err ); } } listBuckets (); PHP // Imports the Cloud Storage client library. use Google\Cloud\Storage\StorageClient; / Authenticate to a cloud client library using a service account implicitly. @param string $projectId The Google project ID. / function auth cloud implicit($projectId) { $config = [ 'projectId' => $projectId, ]; If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. $storage = new StorageClient($config); Make an authenticated API request (listing storage buckets) foreach ($storage->buckets() as $bucket) { printf('Bucket: %s' .
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .
- A user account can be used to authenticate from the following tools: Google Cloud console Google Cloud CLI IDEs and build tools that use the gcloud CLI to test and deploy App Engine apps A service account , which is intended to represent an application or a process instead of a person.

