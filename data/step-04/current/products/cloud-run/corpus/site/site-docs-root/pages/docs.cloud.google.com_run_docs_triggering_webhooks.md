---
title: "Hosting webhooks targets \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/triggering/webhooks
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs
source_metadata:
  url: https://docs.cloud.google.com/run/docs/triggering/webhooks
  title: "Hosting webhooks targets \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Guides
Send feedback
Hosting webhooks targets
Stay organized with collections
Save and categorize content based on your preferences.
This guide shows how to host a webhook target in a Cloud Run service.
Cloud Run provides good solutions for
hosting your webhook targets. Cloud Run
provides more flexibility and is able to handle larger volumes with concurrency.
Hosting webhook targets in a Cloud Run service is ideal for the
following scenarios:
You want longer request timeouts (up to 15 minutes)
You're expecting large volume and need concurrency (80 concurrent requests per instance)
Create a webhook target in Cloud Run
Using Cloud Run, you can define a webhook target in any language you
choose. You only need to create an HTTP endpoint that can accept the data.
Typically this is done with a POST , for example:
@app . route ( '/' , methods =[ 'POST' ] )
def index () :
data = request . get_json ()
In this example, the index page of the URL is configured to accept only
POST requests and expects data to be delivered through a JSON payload.
Integrate with the webhook provider
Most services that provide HTTP callbacks require you to verify URL ownership.
This is usually done by sending some kind of token, message, or secret and
expecting a valid response. You'll need to obtain these requirements from the
service provider. Using the preceding example webhook target , this could look like:
def index():
data = request.get_json()
return data['challenge']
After the provider verifies your ownership, you'll need to add authorization on
your end as well.
Authorize requests
A webhook target is an open and public URL. Most services provide a token or a
secret to ensure that the incoming requests are from authorized services.
Because the URL is public, you cannot prevent malicious attempts to send data to
the webhook target. However, using tokens or secrets ensures you only process
data from authorized sources.
In order to verify the request, you can either
configure secrets , or store your copy of the secret
either as an environment variable or using some kind of key management system.
When storing your copy of the secret as an environment variable, each request should have a secret
or token in the request headers or the JSON
payload, and you must check it to ensure the source is valid.
def index():
request_secret = request.headers['Secret']
if request_secret != os.environ['SECRET']:
return ('Unauthorized', 401)
If the webhook provider does not support a secret or other authentication
mechanism, anyone with the URL of your webhook target will be able to send
messages. In this case, your webhook implementation should be safe to expose to
the public internet.
Note: If you're creating webhooks to send data between multiple Cloud Run
instances, use the built in authentication to protect your
HTTP Target. When prompted to allow
unauthenticated requests , respond no.
Responding to requests
Most services require you to respond to a request within a set amount of time,
as specified by the service. Some webhooks have built-in retry methods if
there is an error response, such as an HTTP status code of 4xx or 5xx, so you'll
need to return a successful status code (2xx) to let the service know the event
was processed properly.
def index():
data = request.get_json()
return ('', 200)
Timeouts
Both Cloud Run and the webhooks provider have timeouts. The shorter
of the two will apply to your application. If your data processing exceeds the
time allotted by either Cloud Run or the webhooks provider, you'll need to use
a product that allows you to complete your processing asynchronously, such as
Pub/Sub or
Cloud Tasks . These products allow
you to quickly hand off the data, immediately return a success response to the
webhooks provider, and continue the processing without the timeout concern. These are also good options for handling failures and retries.
Common webhooks patterns
Type
Examples
Relaying Data
Sending a notification via Firebase Cloud Messaging whenever the webhook is called.
Storing Data
Storing the data in BigQuery for later analysis.
Triggering Actions
Fulfilling actions on Dialogflow, posting replies on Twitter, or pushing to your staging environment whenever new code is committed in GitHub.
What's next
Learn more about webhooks (HTTP Triggers) on Cloud Run functions
Set up webhooks notifications on Google Cloud Observability
Send Pub/Sub messages to a webhook using push subscriptions
Fulfill actions on Dialogflow with webhooks
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
