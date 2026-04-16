---
title: "Using flow variables \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/introduction-flow-variables
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/introduction-flow-variables
  title: "Using flow variables \_|\_ Apigee \_|\_ Google Cloud Documentation"
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
Using flow variables
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
Flow variables are objects that you can access from within your policies or
utilities (such as the Debug tool ). They allow you to maintain state associated with an
API transaction processed by Apigee.
Quick Start: For a complete list of
all flow variables and their properties, see Flow variables reference .
Video
Note: This video was recorded with a
previous version of the Apigee UI; however, the concepts are still valid.
The following video provides an introduction to flow variables:
What are flow variables?
Flow variables exist within the context of an API proxy flow, and they track state in an API
transaction the way named variables track state in a software program. Flow variables store
information such as:
The IP address, headers, URL path, and payload sent from the requesting app
System information such as the date and time when Apigee receives a request
Data derived when a policy executes. For example after a policy that validates an
OAuth token executes, Apigee creates flow variables that hold information like the
name of the requesting application.
Information about the response from the target system
Some variables are built in to Apigee and are automatically populated whenever an API request
is received. They are available throughout an API transaction. You can also create your own
custom variables using policies like AssignMessage policy , or in JavaScript and
Java code.
As you'll see, variables have scope, and where they are accessible depends in part on when they
are created in the API proxy flow. In general, when a variable is created, it is available to
all policies and code that execute later in the API transaction flow.
How are flow variables used?
Flow variables are used in
policies and
conditional
flows :
Policies can retrieve state from flow variables and use them to do their
work.
For example, a VerifyJWT policy can retrieve the token to be verified from
a flow variable and then perform the verification on it. As another example, a
JavaScript policy can retrieve flow variables and encode the data contained within
those variables.
Conditional flows can reference flow variables to direct the flow of an API
through Apigee, similar to the way a switch statement works in programming.
For example, a policy to return a fault might execute only when a particular flow variable is
set.
Let's look at examples of how variables are used in each of these contexts.
Flow variables in policies
Some policies
take flow variables as input.
For example, the following AssignMessage policy takes
the value of the flow variable client.ip and puts it in a request header
called My-Client-IP . If added to the request flow, this policy sets a header
that is passed to the backend target. If set on the response flow, the header is sent
back to the client app.
< AssignMessage name = "set-ip-in-header" >
< AssignTo createNew = "false" transport = "http" type = "request" > request < / AssignTo >
< Set >
< Headers >
< Header name = "My-Client-IP" > { client . ip } < / Header >
< / Headers >
< / Set >
< IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables >
< / AssignMessage >
For another example, when a Quota policy executes, several flow variables are populated
with policy-related values. One of these variables is
called ratelimit.my-quota-policy.used.count (where my-quota-policy is
the name of the Quota policy you're interested in).
You might later execute a conditional flow
that says "if the current quota count is below 50% of maximum, and it's between 9 am and 5 pm,
enforce a different quota." This condition might depend on the value of the current quota count
and on a flow variable called system.time , which is one of the built-in Apigee
variables.
Flow variables in conditional
flows
Conditional flows
evaluate flow variables and enable proxies to behave dynamically. Conditions are typically used
to change the behavior of flows, steps, and route rules.
Here's a conditional flow that evaluates
the value of the variable request.verb in a proxy flow step. In this case, if the
request verb is POST, the VerifyAPIKey policy is executed. This is a common pattern used in
API proxy configurations.
<PreFlow name="PreFlow">
<Request>
<Step>
<Condition>request.verb equals "POST"</Condition>
<Name>VerifyApiKey</Name>
</Step>
</Request>
</PreFlow>
Now, you might wonder, where do variables like request.verb ,
client.ip , and system.time come from? When are they instantiated and
populated with a value? To help you understand when variables are created and when they're
available to you, see Visualizing the flow of an API proxy .
Flow variables in JavaScript code called with the JavaScript
policy
With the JavaScript policy , you can execute JavaScript code from within the context of an
API proxy flow. JavaScript that is executed by this policy uses the Apigee
JavaScript object model , which
provides your custom code access to request, response, and context objects associated with the
API proxy flow in which your code is executing. For example, this code sets a response header
with the value obtained from the flow variable target.name.
context.setVariable("response.header.X-Apigee-Target", context.getVariable("target.name"));
This technique of using JavaScript to read and set variables is similar to the work you can do
with the AssignMessage policy (shown previously). It's just another way to accomplish the same
kinds of things on Apigee. The key to remember is that JavaScript executed by the
JavaScript policy
has access to all the flow variables that exist and are in scope
within the API proxy flow.
Visualizing the flow of an API proxy
To understand flow variable scope, it's important to understand or visualize the way messages
flow through an API proxy. An API proxy consists of a series of message processing steps
organized as a flow. At every step in a proxy flow, the proxy evaluates information available to
it and decides what to do next. Along the way, the proxy may execute policy code or perform
conditional branching .
The following figure illustrates this sequence of flows. Notice how the flows are composed of
four main segments: ProxyEndpoint request , TargetEndpoint request ,
TargetEndpoint response , and ProxyEndpoint response .
Keep this flow structure in mind as we begin to explore flow variables through the rest of
this topic.
Further Reading If you'd like to read
about proxy flow structure in more detail, see
Configuring flows .
How variable scope is related to proxy flow
As soon as you can visualize how messages flow through a proxy, as described previously, you
can begin to understand variable scope. By scope, we mean the point in the proxy flow life cycle
when a variable is first instantiated.
For example, if you have a policy attached to the
ProxyEndpoint request segment, that policy will not be able to access any variables that are
scoped to the TargetEndpoint request segment. The reason for this is that the TargetEndpoint
request segment of the flow has not executed yet, so the API proxy hasn't had a chance to
populate variables in that scope.
The following table lists the complete set of variable scopes and indicates when in the proxy
flow they become available.
Note: After a flow variable is populated within
its given scope, it remains available through the rest of the proxy flow life cycle. If you try to
access a variable that is not yet in scope, you will receive an error or a NULL
value.
Variable scope
Where these variables are populated
proxy request
The ProxyEndpoint request segment
target request
The TargetEndpoint request segment
target response
The TargetEndpoint response segment
proxy response
The ProxyEndpoint response segment
always available
As soon as the proxy receives a request. These variables are available through the
entire proxy flow life cycle.
For example, there's a built-in Apigee variable called client.ip . This
variable has
proxy request scope. It is automatically populated with the IP address of the client that
called the proxy. It is populated when a request first hits the ProxyEndpoint and remains
available through the entire proxy flow life cycle.
Note: Scopes for all the built-in Apigee variables
are listed in the Flow variables reference .
There's another built-in variable called target.url . This variable's scope is
target request . It is populated in the TargetEndpoint request segment with the request URL sent
to the back-end target. If you try to access target.url in the ProxyEndpoint request
segment, you will receive a NULL value. If you try to set this variable before it is in scope,
the proxy does nothing—does not generate an error and does not set the variable.
Note: It's possible to configure some policies
to either throw an error or return NULL when an undefined variable is accessed. Refer to
individual policy reference pages for details.
Here's a simple example that demonstrates how to think about variable scope. Suppose you want
to copy the entire contents of a request object (headers, parameters, body) and assign it to the
response payload to be sent back to the calling app. You can use the AssignMessage policy for
this task. The policy code looks like this:
< AssignMessage name = "CopyRequestToResponse" >
< AssignTo type = "response" createNew = "false" > response < / AssignTo >
< Copy source = "request" / >
< / AssignMessage >
This policy simply copies the request object and assigns it to the
response object. But where should this policy be placed in the proxy flow? The
answer is that it must be placed on the TargetEndpoint response, because the scope of the
response variable is target response .
Referencing flow variables
All built-in variables in Apigee follow a dot-notation naming convention. This convention
makes it easier to determine the purpose of the variable. For example
system.time.hour and request.content .
Best Practice: Google recommends that you
use the dot-notation naming convention when you create custom flow variables. It can be useful to
use the periods to organize a hierarchy of your custom variables.
For example, approval.code and
approval.status both might refer to an approval feature within the flow.
Apigee reserves various prefixes to organize relevant variables appropriately. These
prefixes include:
request
response
system
target
To reference a variable in a policy, enclose it in curly braces. For example,
the following AssignMessage policy takes the value of the variable client.ip and
puts it in a request header called Client-IP .
< AssignMessage name = "set-ip-in-header" >
< AssignTo createNew = "false" transport = "http" type = "request" > request < / AssignTo >
< Set >
< Headers >
< Header name = "Client-IP" > { client . ip } < / Header >
< / Headers >
< / Set >
< IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables >
< / AssignMessage >
In conditional flows, the curly braces are not necessary. The following example condition
evaluates the variable request.header.accept :
<Step>
<Condition> request.header.accept = "application/json"</Condition>
<Name>XMLToJSON</Name>
</Step>
You can also reference flow variables in JavaScript and Java code. For more information, see:
Working with flow variables in JavaScript code
JavaScript policy
Data type of flow variables
Each property of a flow variable has a well-defined data type, such as String, Long, Integer,
Boolean, or Collection. You can find the data types listed in
the Flow variables reference . For variables that were created by a policy,
refer to the specific policy reference topic for data type information.
Variables you create manually assume the type given when they were created, and depend
on the types of values that are allowed.
Using flow variables in policies
Many policies create flow variables as part of their normal execution. The
Policy reference documents
all of these policy-specific variables.
As you work with proxies and policies, be sure to consult
the policy reference to find out which variables are created and what they are used for. For
example, the Quota policy creates a set of variables that contain information about quota counts
and limits, expiry time, and so on.
Some policy variables are useful for debugging. You can use the
Trace overview tool Link broken -->
Debug tool ), for instance, to
see which variables were set at a particular instance in a proxy flow.
The ExtractVariables policy lets
you populate custom variables with data extracted from messages. You can extract query
parameters, headers, and other data. For example, you can parse request and response messages
using patterns to extract specific data from the messages.
In the following example, the ExtractVariables policy parses a response message and stores
specific data taken from the response. The policy creates two custom variables,
geocoderesponse.latitude and geocoderesponse.longitude , and assigns
values to them.
< ExtractVariables name = "ParseGeocodingResponse" >
< Source>response < / Source >
< VariablePrefix>geocoderesponse < / VariablePrefix >
< JSONPayload >
< Variable name = "latitude" >
< JSONPath > $. results [ 0 ] . geometry . location . lat < / JSONPath >
< / Variable >
< Variable name = "longitude" >
< JSONPath > $. results [ 0 ] . geometry . location . lng < / JSONPath >
< / Variable >
< / JSONPayload >
< / ExtractVariables >
Again, be aware that many policies automatically create variables. You can access those
variables within the proxy flow context, and they are documented in the Policy reference under
each individual policy topic.
Working with flow variables in JavaScript
code
You can access and set variables directly in JavaScript code that is executing in the context
of an API proxy. Through the Apigee JavaScript object model , JavaScript executing on
Apigee has direct access to proxy flow variables.
Note: You can call JavaScript from a proxy using the
JavaScript policy .
To access variables in JavaScript code, call getter/setter methods on any of these objects:
context
proxyRequest
proxyResponse
targetRequest
targetResponse
As you can see, these object references map to the familiar segments of the proxy flow model
as explained previously in Visualizing the flow of an API proxy .
The context object corresponds to globally available variables, such as system
variables. For example, you can call getVariable() on the context object
to get the current year:
var year = context . getVariable ( 'system.time.year' );
Similarly, you can call setVariable() to set the value of a custom variable or for
any writable out-of-the-box variables. Here, we create a custom variable called
organization.name.myorg and assign a value to it.
var org = context . setVariable ( 'organization.name.myorg' , value );
Because this variable is created with the context object, it will be available to
all flow segments (essentially, this is like creating a global variable).
Note: The Flow variables reference indicates which
variables are writable and which are read-only. For more information, see
JavaScript object model .
You can also get or set proxy flow variables in Java code that you execute with the
JavaCallout policy .
What you need to remember
Here are a few important things to remember about flow variables:
Some out-of-the-box variables are instantiated and populated automatically by the proxy
itself. These are documented in the Flow variables reference .
You can create custom variables that are available for use in the proxy flow. It's possible
to create variables using policies like AssignMessage policy and JavaScript policy .
Variables have scope. For example, some variables are automatically populated when the
first proxy receives a request from an app. Other variables are populated in the response flow
segment of the proxy. These response variables remain undefined until the response segment
executes.
When policies execute, they can create and populate policy-specific variables. The
documentation for each policy lists all of these relevant policy-specific variables.
Conditional flows typically evaluate one or more variables. You need to understand
variables if you want to create conditional flows.
Many policies use variables as input or output. Perhaps a variable that is created by one
policy is later used by another.
Tip: You'll find a number of samples
that use variables in one way or another. Look for ones that use the
ExtractVariables policy , which is commonly used to process variables in a proxy flow.
Related topics
All of the variables that are automatically populated in an API proxy are listed in the
Flow variables reference . The reference also lists the type and scope of each variable.
If you want to know which variables a specific policy populates, refer to the reference
topic for the policy. For example, see
Flow variables in the
Quota policy reference.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
