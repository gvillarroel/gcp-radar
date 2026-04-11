---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.373Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine dashboard per-URL error reporting"
feature_slug: "app-engine-dashboard-per-url-error-reporting"
latest_feature_date: "2016-07-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest"
keywords:
  - "dashboard"
  - "reporting"
  - "server"
  - "error"
  - "per"
  - "url"
  - "engine"
  - "app"
---

# App Engine dashboard per-URL error reporting

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

Server Error and Client Error metrics in the App Engine dashboard were updated to reflect status errors more accurately by URL.

## Extended Definition

Server Error and Client Error metrics in the App Engine dashboard were updated to reflect status errors more accurately by URL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- The appengine-web.xml file can define system properties and environment variables that are set when the application is running. <system-properties> <property name="myapp.maximum-message-length" value="140" /> <property name="myapp.notify-every-n-signups" value="1000" /> <property name="myapp.notify-url" value="http://www.example.com/signupnotify" /> </system-properties> <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> Optional.
- Specify the timeout in seconds: < system - properties > < property name = "appengine.api.urlfetch.defaultDeadline" value = "10" / > < / system - properties > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information regarding EE support, see Upgrade Java on a compatible Enterprise Edition (EE) version . <system-properties> <property name="appengine.use.EE11" value="true"/><!--only for Java 25--> </system-properties> Starting in Java 21, you can configure your Java web server to use virtual threads.
- If you want to disallow the use of HTTPS for the application, put the following in the appengine-web.xml file: <ssl-enabled>false</ssl-enabled> There is no way to disallow HTTPS for some URL paths and not others in the Java runtime environment. <static-error-handlers> Optional.

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For a deeper dive into how App Engine works, see the Go Runtime Environment .
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .

### "Package google.golang.org/appengine/v2 (v2.0.6) \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This is suitable for use in constructing URLs. func InstanceID func InstanceID () string InstanceID returns a mostly-unique identifier for this instance. func IsAppEngine func IsAppEngine () bool IsAppEngine reports whether the App Engine app is running on App Engine, in either the standard or flexible environment. func IsDevAppServer func IsDevAppServer () bool IsDevAppServer reports whether the App Engine app is running in the development App Server. func IsFlex func IsFlex () bool IsFlex reports whether the App Engine app is running in the flexible environment. func IsOverQuota func IsOverQuota ( err error ) bool IsOverQuota reports whether err represents an API call failure due to insufficient available quota. func IsSecondGen func IsSecondGen () bool IsSecondGen reports whether the App Engine app is running on the second generation runtimes (>= Go 1.11). func IsStandard func IsStandard () bool IsStandard reports whether the App Engine app is running in the standard environment.
- This includes both the first generation runtimes (<= Go 1.9) and the second generation runtimes (>= Go 1.11). func IsTimeoutError func IsTimeoutError ( err error ) bool IsTimeoutError reports whether err is a timeout error. func Main func Main () Main is the principal entry point for an app running in App Engine.
- Context ) string RequestID returns a string that uniquely identifies the request. func ServerSoftware func ServerSoftware () string ServerSoftware returns the App Engine release version.
- On App Engine Standard it ensures the server has started and is prepared to receive requests.

