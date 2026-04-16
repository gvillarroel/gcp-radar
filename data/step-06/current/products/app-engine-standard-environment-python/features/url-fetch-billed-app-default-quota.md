---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.795Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "URL Fetch billed app default quota"
feature_slug: "url-fetch-billed-app-default-quota"
latest_feature_date: "2016-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref"
  - "https://cloud.google.com/appengine/docs/standard/python3/services/access"
keywords:
  - "increases"
  - "quota"
  - "billed"
  - "fetch"
  - "default"
---

# URL Fetch billed app default quota

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine increases the default URL Fetch quota for billed applications.

## Extended Definition

App Engine increases the default URL Fetch quota for billed applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?
- Resource Default limit Default Cloud Storage Bucket Stored Data First 5 GB free; no maximum Default Cloud Storage Bucket Class A Operations First 20,000 ops/day free; no maximum Default Cloud Storage Bucket Class B Operations First 50,000 ops/day free; no maximum Default Cloud Storage Bucket Network Egress First 1 GB free; no maximum Blobstore The following quotas apply specifically to use of the blobstore.
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- Description Limit Maximum characters in Project URL for VERSION -dot- SERVICE -dot- PROJECT ID URL 63 Default Cloud Storage bucket The Default Cloud Storage bucket has a free quota for daily usage as shown below.

### "Access legacy bundled services for Python 3 \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- DateTimeProperty ( auto now add = True ) def store visit ( remote addr , user agent ): 'create new Visit entity in Datastore' Visit ( visitor = ' {} : {} ' . format ( remote addr , user agent )) . put () def fetch visits ( limit ): 'get most recent visits' return Visit . query () . order ( - Visit . timestamp ) . fetch ( limit ) @app . route ( '/' ) def root (): 'main application (GET) handler' store visit ( request . remote addr , request . user agent ) visits = fetch visits ( 10 ) return render template ( 'index.html' , visits = visits ) Both of these apps can be found in the open source repo for the Python App Engine migration content (code samples, videos , codelabs ), specifically in the mod0 and mod1b folders, respectively.
- DateTimeProperty ( auto now add = True ) def store visit ( remote addr , user agent ): 'create new Visit entity in Datastore' Visit ( visitor = ' {} : {} ' . format ( remote addr , user agent )) . put () def fetch visits ( limit ): 'get most recent visits' return Visit . query () . order ( - Visit . timestamp ) . fetch ( limit ) class MainHandler ( webapp2 .
- RequestHandler ): 'main application (GET) handler' def get ( self ): store visit ( self . request . remote addr , self . request . user agent ) visits = fetch visits ( 10 ) tmpl = os . path . join ( os . path . dirname ( file ), 'index.html' ) self . response . out . write ( template . render ( tmpl , { 'visits' : visits })) app = webapp2 .
- Memcache supports overriding this default mapping. from google.appengine.api import memcache import six.moves.cPickle as pickle def unpickle factory ( file ): return pickle .

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Example error handlers : - file : default error.html - error code : over quota file : over quota.html handlers Optional.
- Python example handlers : - url : /youraccount/. secure : always script : auto To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .
- The following values are available depending on your service's scaling : Automatic scaling F1 , F2 , F4 , F4 1G Default: F1 Optionally use the automatic scaling element to change default settings for automatic scaling, such as minimum and maximum number of instances, latency, and concurrent connections.
- The error code is optional; if it's not specified, the given file is the default error response for your app. file Each file entry indicates a static file that should be served in place of the generic error response.

