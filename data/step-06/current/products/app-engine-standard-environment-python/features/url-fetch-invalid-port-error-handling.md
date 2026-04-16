---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.794Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "URL Fetch invalid port error handling"
feature_slug: "url-fetch-invalid-port-error-handling"
latest_feature_date: "2016-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
keywords:
  - "consistently"
  - "handling"
  - "invalid"
  - "returns"
  - "port"
  - "fetch"
  - "error"
---

# URL Fetch invalid port error handling

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

URL Fetch returns INVALID_URL consistently for requests to ports outside the supported ranges.

## Extended Definition

URL Fetch returns INVALID_URL consistently for requests to ports outside the supported ranges.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. from flask import Flask If entrypoint is not defined in app.yaml, App Engine will look for an app called app in main.py. app = Flask ( name ) @app . route ( "/" ) def hello (): """Return a friendly HTTP greeting.
- You can configure startup instructions by adding entrypoint to app.yaml. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- When a service receives standard HTTP traffic at high volume while also serving Task queue or Cloud Tasks traffic at much lower volume, there is a disproportionate impact on the latency of the Task queue or the Cloud Tasks traffic.
- All subsequent requests for this URL that contain the Accept-Encoding: gzip header will receive the gzipped data from the cache until the cache becomes invalidated (due to the content changing after the cache expires).

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-3`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. from flask import Flask If entrypoint is not defined in app.yaml, App Engine will look for an app called app in main.py. app = Flask ( name ) @app . route ( "/" ) def hello (): """Return a friendly HTTP greeting.
- You can configure startup instructions by adding entrypoint to app.yaml. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- When a service receives standard HTTP traffic at high volume while also serving Task queue or Cloud Tasks traffic at much lower volume, there is a disproportionate impact on the latency of the Task queue or the Cloud Tasks traffic.
- All subsequent requests for this URL that contain the Accept-Encoding: gzip header will receive the gzipped data from the cache until the cache becomes invalidated (due to the content changing after the cache expires).

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- For resources that are required to initiate a request, when the resource is depleted, App Engine by default returns an HTTP 403 or 503 error code for the request instead of calling a request handler.
- In the Go API, the appengine.IsOverQuota function reports whether an error represents an API call failure due to insufficient available quota.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?

