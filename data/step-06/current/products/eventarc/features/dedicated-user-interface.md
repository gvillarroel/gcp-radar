---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.543Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "Dedicated user interface"
feature_slug: "dedicated-user-interface"
latest_feature_date: "2022-05-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient"
  - "https://docs.cloud.google.com/eventarc/docs/authentication"
  - "https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1"
keywords:
  - "dedicated"
  - "user"
  - "interface"
  - "eventarc"
  - "provides"
---

# Dedicated user interface

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc provides a dedicated user interface.

## Extended Definition

Eventarc provides a dedicated user interface.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
- [https://docs.cloud.google.com/eventarc/docs/authentication](https://docs.cloud.google.com/eventarc/docs/authentication)
- [https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1](https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1)

## Supporting Pages

### "Class EventarcAsyncClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- Source ID: `site-python-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- ClientInfo ) Eventarc allows users to subscribe to various events that are provided by Google Cloud services and forward them to supported destinations.
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . test iam permissions test iam permissions ( request : typing .
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get location get location ( request : typing .
- Returns Type Description google.cloud.eventarc v1.types.Trigger A representation of the trigger resource. google api source path google api source path ( project : str , location : str , google api source : str ) - > str Returns a fully-qualified google api source string. google channel config path google channel config path ( project : str , location : str ) - > str Returns a fully-qualified google channel config string. list channel connections list channel connections ( request : typing .

### "Class EventarcClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
- Source ID: `site-python-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- ClientInfo ) Eventarc allows users to subscribe to various events that are provided by Google Cloud services and forward them to supported destinations.
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . test iam permissions test iam permissions ( request : typing .
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get location get location ( request : typing .
- Returns Type Description google.cloud.eventarc v1.types.Trigger A representation of the trigger resource. google api source path google api source path ( project : str , location : str , google api source : str ) - > str Returns a fully-qualified google api source string. google channel config path google channel config path ( project : str , location : str ) - > str Returns a fully-qualified google channel config string. list channel connections list channel connections ( request : typing .

### Authenticate to Eventarc \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/eventarc/docs/authentication](https://docs.cloud.google.com/eventarc/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud CLI When you use the gcloud CLI to access Eventarc, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.
- How you authenticate to Eventarc depends on the interface you use to access the API and the environment where your code is running.
- Grant the required role to the principal that will attach the service account to other resources. gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com --member = "user: USER EMAIL " --role = roles/iam.serviceAccountUser Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account USER EMAIL : the email address for a Google Account Create the resource that will run your code, and attach the service account to that resource.
- For a local development environment You can set up credentials for a local development environment in the following ways: User credentials for client libraries or third-party tools User credentials for REST requests from the command line Service account impersonation Client libraries or third-party tools Set up Application Default Credentials (ADC) in your local environment: Install the Google Cloud CLI.

### "Package google.cloud.eventarc.publishing.v1 \_|\_ Eventarc \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1](https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1)
- Source ID: `site-api-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Index Publisher (interface) CloudEvent (message) CloudEvent.CloudEventAttributeValue (message) PublishChannelConnectionEventsRequest (message) PublishChannelConnectionEventsResponse (message) PublishEventsRequest (message) PublishEventsResponse (message) PublishRequest (message) PublishResponse (message) Publisher Eventarc processes events generated by an event provider and delivers them to a subscriber.
- Home Documentation Application development Eventarc Reference Send feedback Package google.cloud.eventarc.publishing.v1 Stay organized with collections Save and categorize content based on your preferences.
- A Bus provides a discoverable endpoint for events and is a router that receives all events published by event providers and delivers them to zero or more subscribers.
- ChannelConnection is a first-class Eventarc resource that is created and managed by the partner in their Google Cloud project.

