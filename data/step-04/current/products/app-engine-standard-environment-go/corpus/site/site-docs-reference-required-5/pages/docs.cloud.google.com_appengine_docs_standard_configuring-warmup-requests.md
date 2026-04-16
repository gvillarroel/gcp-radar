---
title: "Configuring warmup requests to improve performance \_|\_ App Engine standard\
  \ environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/go/building-app
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests
  title: "Configuring warmup requests to improve performance \_|\_ App Engine standard\
    \ environment \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Guides
Send feedback
Configuring warmup requests to improve performance
Stay organized with collections
Save and categorize content based on your preferences.
Go
Java
Node.js
PHP
Python
Ruby
You can use warmup requests to reduce request and response latency during the
time when your app's code is being loaded to a newly created instance.
App Engine frequently needs to load your app's code into a fresh
instance. Loading an instance can happen in the following situations:
When you redeploy a version of your app.
When new instances are created due to the load from requests
exceeding the capacity of the current set of running instances.
When maintenance and repairs of the underlying infrastructure or physical
hardware occur.
Loading your app's code to a new instance can result in loading
requests .
Loading requests can result in increased request latency for your users, but you
can avoid this latency using warmup requests . Warmup requests load your
app's code into a new instance before any live requests reach that instance.
Warmup requests, like other requests, are subject to the request timeout.
If warmup requests are enabled for your application, App Engine attempts
to detect when your application needs a new instance and initiates a warmup
request to initialize a new instance. However, these detection attempts do not
work in every case. As a result, you might encounter loading requests, even if
warmup requests are enabled in your app. For example, if your app is serving no
traffic, the first request to the app will always be a loading request, not a
warmup request.
Warmup requests use instance hours like any other request to your
App Engine application. In most cases where warmup requests are enabled,
you won't notice an increase in instance hours because your application is
simply initializing in a warmup request instead of a loading request. Your
instance hour usage can increase if you decide to do more work, such as
pre-caching during a warmup request. If you set
min_idle_instances
to greater than 0 , you might encounter warmup requests when those instances
first start, but they will remain available after that time.
Enabling warmup requests
Warmup requests are used by the App Engine scheduler, which controls the
auto scaling of instances based on user-supplied configuration. With warmup
requests enabled, App Engine issues GET requests to /_ah/warmup . You
can implement handlers for this request to perform application-specific tasks,
such as pre-caching application data.
The scheduler starts up instances when it determines that more instances are
needed. Warmup requests may appear in
logs
even if they are disabled because the scheduler uses them to start instances.
Note that warmup requests are not guaranteed to be called. In some situations
loading requests are sent instead: for example, if the instance is the first one
being started up, or if there is a steep ramp-up in traffic. However, there
will be a "best effort" attempt to send requests to already warmed-up instances
if warmup requests are enabled.
To enable warmup requests, add the warmup element under the
inbound_services
directive in your app.yaml file, for example:
inbound_services:
- warmup
Creating your handler
Create a handler that will process the requests that are sent to /_ah/warmup .
Your handler should perform any warmup logic that is needed by your app.
For example, if you are using Flask, your handler might look like:
from flask import Flask
app = Flask ( __name__ )
@app . route ( "/" )
def main ():
"""Serves a predefined placeholder string.
Returns:
A predefined string saying 'Hello World!'
"""
return "Hello World!"
@app . route ( "/_ah/warmup" )
def warmup ():
"""Served stub function returning no content.
Your warmup logic can be implemented here (e.g. set up a database connection pool)
Returns:
An empty string, an HTTP code 200, and an empty object.
"""
return "" , 200 , {}
if __name__ == "__main__" :
# This is used when running locally only. When deploying to Google App
# Engine, a webserver process such as Gunicorn will serve the app. This
# can be configured by adding an `entrypoint` to app.yaml.
app . run ( host = "127.0.0.1" , port = 8080 , debug = True )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
