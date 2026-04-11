---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.384Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Endpoints API discoverable flag"
feature_slug: "endpoints-api-discoverable-flag"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/flexible/go/create-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
keywords:
  - "discoverable"
  - "endpoints"
  - "flag"
  - "users"
  - "set"
  - "api"
  - "can"
  - "the"
---

# Endpoints API discoverable flag

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

Endpoints API users can set the discoverable boolean parameter on the @Api annotation to disable API discovery metadata for an API.

## Extended Definition

Endpoints API users can set the discoverable boolean parameter on the @Api annotation to disable API discovery metadata for an API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)

## Supporting Pages

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This solution works well if you are upgrading an existing app from a first-generation runtime to a second-generation runtime, and want to continue to use the Users API.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.
- Users API Note: The Users API is only supported for Python, Java, Go, and PHP apps that use the legacy bundled services .
- Users API Authenticate users that are using Google and Google Workspace accounts.

### "Quickstart: Create a Go app in the App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- Deploy and run Hello World on App Engine To deploy your app to the App Engine flexible environment: Deploy the Hello World app by running the following command from the helloworld directory: gcloud app deploy Learn about the optional flags .
- Fprint ( w , "Hello world!" ) } app.yaml The app.yaml file describes the following configuration for your app: Sets env: flex , indicating your app uses the App Engine flexible environment .
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-root-2`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google Workspace domain-wide delegation of authority If you have a Google Workspace (formerly G Suite) domain, an administrator of the domain can authorize an application to access user data on behalf of users in the Google Workspace domain.
- For example, an application that uses the Google Calendar API to add events to the calendars of all users in a Google Workspace domain would use a service account to access the Google Calendar API on behalf of users.
- In App Engine, there are a few separate use cases for setting up access control: Granting team members access to your Google Cloud project so they can set up services and deploy apps.
- Granting users access to Cloud resources If you want your app to read user data from another Google service, you'll need to set up OAuth 2.0 for Web Server Applications .

