---
title: "Request and response variables \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-handling-request-response-data
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-handling-request-response-data
  title: "Request and response variables \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Request and response variables
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
When you make a request to an API proxy, you can pass any or all of the following information,
depending on the way the API proxy is configured:
Request headers
Query params
Form data
XML or JSON payloads
Resource URIs
By default, all data in a request is passed unchanged from the ProxyEndpoint to the
TargetEndpoint. Therefore, when the TargetEndpoint makes the request to the backend server, all
information in the original request is passed to the backend service.
The same is true for the response received by Apigee from the backend service. By
default, all data received in the response is passed unchanged to the app that originated the
request.
How is request data passed to the backend
server?
The following image shows an API proxy definition:
For this API proxy:
API proxy virtual host: default
Domain defined by the host names on the environment group: http://www.example.com
Proxy base path: /v1/weather
TargetEndpoint specified by route rule: default
Target URL: http://weather.yahooapis.com
A client app makes a GET request to the API proxy by using the following
curl command:
curl -X GET http://www.example.com/v1/weather/forecastrss?w=12797282
Notice that this request contains the resource forecastrss and one query param,
w . Apigee parses the request as
shown below and assigns parts of the request to flow variables:
{request.verb} {proxy.basepath}/{proxy.pathsuffix}?{request.querystring}
The flow variables are set with the following values:
request.verb : GET
proxy.basepath : /v1/weather
proxy.pathsuffix : forecastrss
request.querystring : w=12797282
Note : There are many different flow variables
created during the processing of a request and response. See Flow variables reference for
more.
The TargetEndpoint then makes a request to the backend service using information from the
request:
{request.verb} { target.basepath }/{proxy.pathsuffix}?{request.querystring}
Notice how the resource and query params specified in the request are automatically included
in the request to the backend server. From the definition of the TargetEndpoint, the request then
has the form:
curl -X GET http://weather.yahooapis.com/forecastrss?w=12797282
Like query params, any headers or form params that you include in the request to the API
proxy are passed on to the backend server. For example, you make the request below that includes
a header:
curl -X GET -H 'Content-type:application/xml' http://www.example.com/v1/weather/forecastrss?w=12797282
Or a request in the form below to include a header and form data:
curl -X POST -H "Content-type:application/json" -d \
'{"email" : "janetutorialxml@example.com",
"firstName" : "Jane",
"lastName" : "Tutorial",
"userName" : "jtutorialxml"
}' \
http://www.example.com/v1/register/user
In both examples, the headers and form data are passed unchanged to the backend service. The
headers are represented by flow variables such as request.headers.count and
request.headers.names . The form data is represented by flow variables such as
request.formparam.count and request.formparam.names .
How is response data returned?
By default, all data received by Apigee from the backend service in the response is passed
unchanged to the app that originated the request. As described above for the request, the data
returned in the response is accessible through flow variables on Apigee. For more information,
see Flow variables reference .
Access request and response data in
an API proxy
There are many times where you want to modify request data before sending it to the backend
server. For example:
To remove security information used by Apigee to validate requests. That information is not
required by the backend service.
To add data sent to the backend service, for example to track users or to gather
analytics.
To conditionally process the request based on request data. For example, an API proxy can
have multiple TargetEndpoints. The TargetEndpoint used by the request is determined by request
data. You then strip that data from the request before sending it to the backend service.
The same is true for data in the response. As part of processing the response, the API proxy
might want to modify the data before returning it to the requesting app.
Access request messages
You can use policies to access and change parts of a request message. These parts include:
Headers
Query parameters
Form parameters
Source IP address
HTTP message body
In a normal flow, once the request has been processed, the proxy then sends the transformed
request to the target.
Policies can examine request variables, then transform or reject the request based on the
content of those variables. Policies transform the request by setting the appropriate variables,
for example variables corresponding to the request headers.
Tip:
You can use variables to reconstruct the incoming request URL. For example, the
following code in a JavaScript policy assembles the request URL from its parts:
var req_verb = context . getVariable ( 'request.verb' );
var req_scheme = context . getVariable ( 'client.scheme' );
var req_host = context . getVariable ( 'request.header.host' );
var req_request_uri = context . getVariable ( 'request.uri' );
var req_url = req_scheme + "://" + req_host + req_request_uri ;
The result of the concatenation might look like the following:
https://www.example.com/sample
Access response messages
Using the variables that apply to the response message, policies may access message components
including the header, the query parameters, and form parameters, the source IP address, the HTTP
message body, and so on.
The proxy receives a response message, then applies to it a series of policies, based on
conditions evaluated on the response, which can modify or transform the response.
Policies can examine response variables, then transform or reject the request based on the
content of those variables. Policies transform the response by setting the appropriate variables,
for example variables corresponding to the response headers.
Common policies to access flow variables
Apigee defines several policies that you can use to process the request and response data. These
policies include:
AssignMessage policy : Creates or modifies HTTP request or response messages during an API proxy
flow. Also creates and populates new flow variables.
ExtractVariables policy : Extract content from messages, including headers, URI paths, payloads, and
query parameters, for use in a condition statement. The policy then applies a text pattern to
message content and upon finding a match sets a designated variable.
JSONtoXML policy and XMLtoJSON policy :
Convert messages from JavaScript Object Notation (JSON) to the extensible markup language
(XML) format, or vice versa.
JavaCallout policy , JavaScript policy , PythonScript policy ,
RegularExpressionProtection policy : These policies let you write a script to access flow variables
containing request and response data.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
