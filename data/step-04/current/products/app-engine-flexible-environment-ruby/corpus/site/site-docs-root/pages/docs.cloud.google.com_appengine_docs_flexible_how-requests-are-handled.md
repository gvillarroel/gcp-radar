---
title: "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/overview
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled
  title: "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Flexible environment
Guides
Send feedback
How requests are handled
Stay organized with collections
Save and categorize content based on your preferences.
Region ID
The REGION_ID is an abbreviated code that Google assigns
based on the region you select when you create your app. The code does not
correspond to a country or province, even though some region IDs may appear
similar to commonly used country and province codes. For apps created after
February 2020, REGION_ID .r is included in
App Engine URLs. For existing apps created before this date, the
region ID is optional in the URL.
Learn more
about region IDs .
OK
Go
Java
Node.js
PHP
Python
Ruby
.NET
Custom
This document describes how your App Engine application receives requests and
sends responses. For more details, see the
Request Headers reference .
If your application uses services ,
you can address requests to a specific service or a specific version of that
service. For more information about service addressability, see
How Requests are
Routed .
Handling requests
Your application is responsible for starting a webserver and handling requests.
You can use any web framework that is available for your development language.
App Engine runs multiple instances of your application, and each
instance has its own web server for handling requests. Any request can be routed
to any instance, so consecutive requests from the same user are not necessarily
sent to the same instance. An instance can handle multiple requests
concurrently. The number of instances can be adjusted automatically as traffic
changes.
The following flask application responds to all
requests from web clients to the root path ( '/' ) for Python version 3.8 and later. Note that you must update your app.yaml file
to use the new version. See Python runtime
for more information about using the new versions.
v3.8 and later
from flask import Flask
app = Flask ( __name__ )
@app . route ( "/" )
def hello () - > str :
"""Return a friendly HTTP greeting.
Returns:
A string with the words 'Hello World!'.
"""
return "Hello World!"
if __name__ == "__main__" :
# This is used when running locally only. When deploying to Google App
# Engine, a webserver process such as Gunicorn will serve the app.
app . run ( host = "127.0.0.1" , port = 8080 , debug = True )
Quotas and limits
App Engine automatically allocates resources to your application as
traffic increases. However, this is bound by the following restrictions:
App Engine reserves automatic scaling capacity for applications with
low latency, where the application responds to requests in less than one
second.
Applications that are heavily CPU-bound may also incur some additional latency
in order to efficiently share resources with other applications on the same
servers. Requests for static files are exempt from these latency limits.
Each incoming request to the application counts toward the Requests limit.
Data sent in response to a request counts toward the
Outgoing Bandwidth (billable) limit.
Both HTTP and HTTPS (secure) requests count toward the Requests , Incoming
Bandwidth (billable) , and Outgoing Bandwidth (billable) limits. The
Google Cloud console
Quota Details page
also reports Secure Requests , Secure Incoming Bandwidth , and
Secure Outgoing Bandwidth as separate values for informational purposes.
Only HTTPS requests count toward these values. For more information, see the
Quotas page.
The following limits apply specifically to the use of request handlers:
Request limits
A maximum of ~15KB in request headers is allowed.
The total size of the request is limited to ~32MB.
All HTTP/2 requests will be translated into HTTP/1.1 requests when forwarded
to the application server.
SSL connections end at the load balancer. Traffic from the load
balancer is sent to the instance over an encrypted channel, and then forwarded
to the application server over HTTP. The X-Forwarded-Proto header lets you
understand if the origin request was HTTP or HTTPS.
Response limits
Responses are buffered by 64k blocks.
The response size is unlimited.
The response time limit is one hour.
The response header limit is 64 KB. Response headers that exceed this limit
will return HTTP 502 errors, with logs showing upstream sent too big header
while reading response header from upstream .
Unsupported HTTP requests
The following features are not supported by
App Engine flexible environment:
HTTP/2 traffic to the backend service.
HTTP requests that directly access instances.
Request headers
An incoming HTTP request includes the HTTP headers sent by the client. For
security purposes, some headers are sanitized or amended by intermediate proxies
before they reach the application.
For more information, see the
Request headers reference .
Disabling buffering
By default, all responses from App Engine are buffered in 64k-blocks. In
some cases, it might make sense to disable buffering and directly stream bytes
to the client. This is generally preferred when using hanging GETs or Server
Sent Events (SSEs). To disable buffering, you can set the X-Accel-Buffering
response header to no .
Forcing HTTPS connections
For security reasons, all applications should encourage clients to connect over
https . To instruct the browser to prefer https over http for a given page
or entire domain, set the Strict-Transport-Security header in your responses.
For example:
Strict-Transport-Security : max-age = 31536000 ; includeSubDomains
To set this header for responses that are generated from your code, use the
flask-talisman library .
Caution: Clients that have received the header in the past will refuse to connect if
https becomes non-functional or is disabled for any reason. To learn more, see
this Cheat Sheet on HTTP Strict Transport Security .
Handling asynchronous background work
Background work is any work that your app performs for a request after you have
delivered your HTTP response. Avoid performing background work in your app, and
review your code to make sure all asynchronous operations finish before you
deliver your response.
For long-running jobs, we recommend using Cloud Tasks . With
Cloud Tasks, HTTP requests are long-lived and return a response only
after any asynchronous work ends.
Warning: Performing asynchronous background work can result in higher billing.
App Engine might scale up additional instances due to high CPU load,
even if there are no active requests. Users may also experience increased
latency because of requests waiting in the pending queue for available instances.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
