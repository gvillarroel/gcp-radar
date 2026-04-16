---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.800Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Remote API OAuth2 access"
feature_slug: "remote-api-oauth2-access"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/python3/services/access"
  - "https://cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
keywords:
  - "credentials"
  - "accessed"
  - "remote"
  - "oauth2"
  - "access"
  - "through"
---

# Remote API OAuth2 access

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Remote API can now be accessed using OAuth2 credentials through application default credentials.

## Extended Definition

Remote API can now be accessed using OAuth2 credentials through application default credentials.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- [https://cloud.google.com/appengine/docs/standard/access-control](https://cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)

## Supporting Pages

### "Access legacy bundled services for Python 3 \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Your app must access the bundled services through the App Engine services SDK for Python 3 .
- DateTimeProperty ( auto now add = True ) def store visit ( remote addr , user agent ): 'create new Visit entity in Datastore' Visit ( visitor = ' {} : {} ' . format ( remote addr , user agent )) . put () def fetch visits ( limit ): 'get most recent visits' return Visit . query () . order ( - Visit . timestamp ) . fetch ( limit ) @app . route ( '/' ) def root (): 'main application (GET) handler' store visit ( request . remote addr , request . user agent ) visits = fetch visits ( 10 ) return render template ( 'index.html' , visits = visits ) Both of these apps can be found in the open source repo for the Python App Engine migration content (code samples, videos , codelabs ), specifically in the mod0 and mod1b folders, respectively.
- DateTimeProperty ( auto now add = True ) def store visit ( remote addr , user agent ): 'create new Visit entity in Datastore' Visit ( visitor = ' {} : {} ' . format ( remote addr , user agent )) . put () def fetch visits ( limit ): 'get most recent visits' return Visit . query () . order ( - Visit . timestamp ) . fetch ( limit ) class MainHandler ( webapp2 .
- RequestHandler ): 'main application (GET) handler' def get ( self ): store visit ( self . request . remote addr , self . request . user agent ) visits = fetch visits ( 10 ) tmpl = os . path . join ( os . path . dirname ( file ), 'index.html' ) self . response . out . write ( template . render ( tmpl , { 'visits' : visits })) app = webapp2 .

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: App Engine is not a supported service for workforce identity federation , and can only be accessed using Cloud Identity or Google Workspace accounts .
- If you don't specify credentials when constructing // the client, the client library will look for credentials in the // environment. const storage = new Storage (); // Makes an authenticated API request. async function listBuckets () { try { const results = await storage . getBuckets (); const [ buckets ] = results ; console . log ( 'Buckets:' ); buckets . forEach ( bucket = > { console . log ( bucket . name ); }); } catch ( err ) { console . error ( 'ERROR:' , err ); } } listBuckets (); PHP // Imports the Cloud Storage client library. use Google\Cloud\Storage\StorageClient; / Authenticate to a cloud client library using a service account implicitly. @param string $projectId The Google project ID. / function auth cloud implicit($projectId) { $config = [ 'projectId' => $projectId, ]; If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. $storage = new StorageClient($config); Make an authenticated API request (listing storage buckets) foreach ($storage->buckets() as $bucket) { printf('Bucket: %s' .
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .
- If you set the GOOGLE APPLICATION CREDENTIALS environment variable or pass credentials in your code, we recommend that you store your credentials in one of the following ways: Store your credentials in a secure location such as Firestore in Datastore mode (Datastore) and retrieve them at runtime.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/access-control](https://cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference-3`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: App Engine is not a supported service for workforce identity federation , and can only be accessed using Cloud Identity or Google Workspace accounts .
- If you don't specify credentials when constructing // the client, the client library will look for credentials in the // environment. const storage = new Storage (); // Makes an authenticated API request. async function listBuckets () { try { const results = await storage . getBuckets (); const [ buckets ] = results ; console . log ( 'Buckets:' ); buckets . forEach ( bucket = > { console . log ( bucket . name ); }); } catch ( err ) { console . error ( 'ERROR:' , err ); } } listBuckets (); PHP // Imports the Cloud Storage client library. use Google\Cloud\Storage\StorageClient; / Authenticate to a cloud client library using a service account implicitly. @param string $projectId The Google project ID. / function auth cloud implicit($projectId) { $config = [ 'projectId' => $projectId, ]; If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. $storage = new StorageClient($config); Make an authenticated API request (listing storage buckets) foreach ($storage->buckets() as $bucket) { printf('Bucket: %s' .
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .
- If you set the GOOGLE APPLICATION CREDENTIALS environment variable or pass credentials in your code, we recommend that you store your credentials in one of the following ways: Store your credentials in a secure location such as Firestore in Datastore mode (Datastore) and retrieve them at runtime.

