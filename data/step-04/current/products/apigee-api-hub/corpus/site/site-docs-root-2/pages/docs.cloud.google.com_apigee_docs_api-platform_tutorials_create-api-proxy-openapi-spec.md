---
title: "Creating an API proxy from an OpenAPI Specification \_|\_ Apigee \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/what-is-api-hub
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec
  title: "Creating an API proxy from an OpenAPI Specification \_|\_ Apigee \_|\_ Google\
    \ Cloud Documentation"
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
Creating an API proxy from an OpenAPI Specification
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
What you'll learn
In this tutorial, you'll learn to:
Create an Apigee API proxy from an OpenAPI Specification.
Call the API proxy using cURL.
Add a policy to a conditional flow.
Test the policy invocation using cURL.
You'll learn how to create an Apigee API proxy from an OpenAPI
Specification using the Apigee UI. When you call the API proxy with an
HTTP client, such as cURL, the API proxy sends the request to the Apigee mock target
service.
About the Open API Initiative
"The Open API Initiative (OAI) is focused on
creating, evolving and promoting a vendor neutral API Description Format based on the Swagger
Specification." For more information about the Open API Initiative, see The OpenAPI Specification .
An OpenAPI Specification uses a standard format to describe a RESTful API.
Written in either JSON or YAML format, an OpenAPI Specification is machine readable, but is
also easy for humans to read and understand. The specification describes such elements of an
API as its base path, paths and verbs, headers, query parameters, operations, content types,
response descriptions, and more. In addition, an OpenAPI Specification is commonly used to
generate API documentation.
About the Apigee mock target service
The Apigee mock target service used in this tutorial is hosted at Apigee and returns
simple data. It requires no API key or access token. In fact, you can access it in a web
browser. Try it out by clicking the following:
http://mocktarget.apigee.net
The target service returns the greeting Hello, guest!
For information about the full set of APIs the mock target service supports, see
Apigee Sample APIs
What you'll need
Before you begin, you must complete the steps in
Overview and prerequisites .
An OpenAPI Specification. In this tutorial, you'll use the mocktarget.yaml
OpenAPI Specification which describes Apigee's mock target
service, http://mocktarget.apigee.net .
For more information, see
apigee/api-platform-samples .
cURL installed on your machine to make API calls
from the command line; or a web browser.
Create the API proxy
To create the API proxy from an OpenAPI Specification:
In the Google Cloud console, go to the Apigee > Proxy development > API proxies page.
Go to API proxies
In the API Proxies pane, click + Create .
In the Create a proxy pane, under Proxy template > OpenAPI spec template ,
select Reverse proxy (Most common) .
Navigate to the following URL in your web browser:
https://raw.githubusercontent.com/apigee/api-platform-samples/master/default-proxies/helloworld/openapi/mocktarget3.0.yaml
Right-click on the displayed code and select Save As .
Click Save to save the mocktarget3.0.yaml at the desired location.
In the OpenAPI specs field, click the Browse button.
Navigate to the mocktarget3.0.yaml file and click Open .
Click Next .
The Proxy details step of the Create Proxy wizard automatically populates its fields with values extracted directly from the OpenAPI Specification.
The following table describes the default values that are pre-populated using the
OpenAPI Specification:
Field
Description
Default
Proxy name
Name of the API proxy. For example: Mock-Target-API .
title property from the OpenAPI Specification with spaces replaced
by dashes
Base path
Path component that uniquely identifies this API proxy within the organization.
The public-facing URL of this API proxy is comprised of your external or internal
domain name and this base path. For example:
http://apitest.acme.com/mock-target-api
Name field content converted to all lower case
Description
Description of the API proxy.
description property from the OpenAPI Specification
Target (Existing API)
Target URL invoked on behalf of this API proxy. Any URL that is accessible over
the open Internet can be used. For example:
http://mocktarget.apigee.net
servers property from the OpenAPI Specification
The following provides an excerpt from the OpenAPI Specification showing the
properties that are used to pre-populate the fields.
openapi: 3.0.0
info:
description : OpenAPI Specification for the Apigee mock target service endpoint.
version: 1.0.0
title : Mock Target API
paths:
/:
get:
summary: View personalized greeting
operationId: View a personalized greeting
description: View a personalized greeting for the specified or guest user.
parameters:
- name: user
in: query
description: Your user name.
required: false
schema:
type: string
responses:
"200":
description: Success
...
servers :
- url: http://mocktarget.apigee.net
- url: https://mocktarget.apigee.net
...
In the Proxy details step, edit the Description field as follows:
API proxy for the Apigee mock target service endpoint.
Click Next .
In the Flows step, make sure all operations are selected.
Tip: Conditional flows are generated automatically from
the operations that are defined within the paths object in the OpenAPI
Specification. Conditional flows tell Apigee, "When you see this, perform this logic."
For example, when an API call is a GET on the /xml resource
(the condition), transform the response to JSON (through a policy attached to the
conditional flow). Only one flow executes per transaction—the first flow whose
condition evaluates to true.
Click Next .
In the Deploy step, select one or more environments, and click OK .
Click Create .
Congratulations! You've created an API proxy from an OpenAPI
Specification. Next you'll test it to see how it works.
Test the API proxy
You can test your Mock-Target-API API using cURL or a web browser.
curl -v YOUR_ENV_GROUP_HOSTNAME /myproxy
where YOUR_ENV_GROUP_HOSTNAME is your environment group hostname. See
Find your environment group hostname .
For example:
curl -v -k https://apitest.acme.com/myproxy
Response
You should see the following response:
Hello, Guest!
Way to go! You've built a simple API proxy from an OpenAPI Specification and tested
it.
Add an XML to JSON policy
Next, you'll add the XML to JSON policy to the View XML Response
conditional flow that was generated automatically when you created the API proxy from the
OpenAPI Specification. The policy will convert the target's XML response to a JSON
response.
First, call the API so that you can compare the results with those received after you add
the policy. In a terminal window execute the following cURL command. You're calling the
target service's /xml resource, which natively returns a simple block of XML.
curl -v https:// YOUR_ENV_GROUP_HOSTNAME /mock-target-api/xml
where YOUR ENV_GROUP_HOSTNAME is the environment group hostname. See
Find the environment group hostname .
Response
You should see the following response:
<root>
<city>San Jose</city>
<firstName>John</firstName>
<lastName>Doe</lastName>
<state>CA</state>
</root>
Now let's do something that converts the XML response to JSON. Add the XML to JSON policy
to the View XML Response conditional flow in the API proxy.
Click the Develop tab in the Mock-Target-API Overview page in the Apigee UI.
In the left-hand pane, under Proxy Endpoints > default , click the View
XML Response conditional flow.
In the left-hand pane, click the + button in the Policies row.
In the Create policy dialog, click in the Select policy type field,
scroll down to Mediation , and select XMLToJSON .
Keep the default values for Display Name and Name .
Click Create to create the policy.
Click the + button next to the View XML response flow in the
Response .
In the Add Policy Step dialog, click in the Select existing policy
field and select XML to JSON-1 .
Click Add . The XML to JSON policy is applied to the response.
To view the code for the View XML Response conditional flow, click
Switch To Code Editor .
Click Save .
Now that you've added the policy, call the API again using cURL. Notice that you're still
calling the same /xml resource. The target service still returns its block of
XML, but now the policy in the API proxy will convert the response to JSON. Make this
call:
curl -v https:// YOUR_ENV_GROUP_HOSTNAME /mock-target-api/xml
where YOUR ENV_GROUP_HOSTNAME is the environment group hostname. See
Find the environment group hostname .
Note that the XML response is converted to JSON:
{"root":{"city":"San Jose","firstName":"John","lastName":"Doe","state":"CA"}}
Congratulations! You have successfully tested the execution of a policy added to a
conditional flow.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
