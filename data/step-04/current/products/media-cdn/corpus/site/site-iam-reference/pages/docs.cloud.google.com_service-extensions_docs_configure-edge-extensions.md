---
title: "Configure an edge extension \_|\_ Service Extensions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-extensions/docs/create-plugin
source_metadata:
  url: https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions
  title: "Configure an edge extension \_|\_ Service Extensions \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Service Extensions
Guides
Send feedback
Configure an edge extension
Stay organized with collections
Save and categorize content based on your preferences.
Service Extensions enables supported Application Load Balancers
to use plugins to insert custom processing
in the processing path.
Edge extensions run
in the request processing path when the load balancer receives request headers
and before it evaluates the URL map or
calls Cloud CDN, which lets you influence caching and routing.
This page describes how to configure edge extensions.
For an overview about Application Load Balancer extensions, see
Cloud Load Balancing extensions overview .
An extension for an Application Load Balancer points to the following resources:
A forwarding rule to attach to
A plugin
The extension references the load balancer
forwarding rule to attach to.
After you configure the resource, the load balancer starts sending
matching requests to extension services. You can attach only one edge extension
to a forwarding rule and include only one plugin in an edge extension chain.
For information about the limits related to Application Load Balancer extensions,
see the Quotas and limits page.
Configure using plugins
This section uses an example to show you how to configure an edge extension by
using a plugin that rewrites the :host request header to
service-extensions.com when the path matches /extensions . The earlier host
and the newly configured host are mapped to backend services in different
regions, which demonstrates the routing behavior.
All extension resources that reference a given plugin must be of the same type.
The extensions must also have the same load balancing scheme. You can't
configure Cloud Load Balancing extensions with plugins that are already
used in Media CDN extensions.
Before you begin
Create a plugin that contains your
custom code .
Create and configure an Application Load Balancer that supports edge extension plugins .
Follow the instructions on the Set up a global external Application Load Balancer with VM instance group backends page for all steps, except the following:
Name the backend service as service-one .
Point service-one to a virtual machine (VM) instance in region A .
Point gl7-gxlb-url-map to service-one by default.
Set up an additional backend service, service-two and point it to
a VM in region B .
To the URL map, add a path matcher pointing to service-two . Use the
gcloud compute url-maps add-path-matcher command
with the following sample values:
gcloud compute url-maps add-path-matcher gl7-gxlb-url-map \
--path-matcher-name=rewrite-host \
--default-service=service-two \
--new-hosts=service-extensions.com \
--location=global
Set up a way to send test requests to your service (for example, by running
curl).
Configure an edge extension by using a plugin
Check the behavior before an extension is configured.
Verify that a request without an explicit path goes to region A :
curl FORWARDING_RULE_IP
Replace FORWARDING_RULE_IP with the IP address
of the forwarding rule. To find the IP address, use the
gcloud compute forwarding-rules describe command .
The output is similar to the following and indicates that the page is
served from a VM in region A :
Page served from region-A-vm
Verify that there is no match for /extensions in the URL map:
curl FORWARDING_RULE_IP /extensions
Replace FORWARDING_RULE_IP with the IP address
of the forwarding rule. To find the IP address, use the
gcloud compute forwarding-rules describe command .
The output indicates that there is no match for /extensions in the URL
map. The output is similar to the following:
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>404 Not Found</title>
</head><body>
...
Configure the edge extension.
Console
In the Google Cloud console, go to the Service Extensions page.
Go to Service Extensions
Click Create extension .
A wizard opens to guide you through some initial steps.
For the product, select Load Balancing . Then, click Continue .
A list of
supported Application Load Balancers
appears.
For the load balancer type, select global external Application Load Balancer.
Then, click Continue .
For the extension type, select Edge extensions , and then click
Continue .
To open the Create extension form, click Continue .
In the Create extension form, notice that the
preceding selections aren't editable.
In the Basics section, do the following:
Specify a unique name for the extension.
The name must start with a lowercase letter followed by up to 62
lowercase letters, numbers, or hyphens and must not end with a
hyphen.
Optional: Enter a brief description about the extension by using
a maximum of 1,024 characters.
Optional: In the Labels section, click Add label . Then, in
the row that appears, do the following:
For Key , enter a key name.
For Value , enter a value for the key.
To add more key-value pairs, click Add label . You can add a
maximum of 64 key-value pairs.
For more information about labels, see
Create and update labels for projects .
For Forwarding rules , select one or more forwarding rules to
associate with the extension—for example, cr-xlb-forwarding-rule .
Forwarding rules that are already associated with another extension
can't be selected and appear disabled.
For Extension chains , add one or more extension chains to
execute for a matching request.
To add an extension chain, do the following, and then click Done :
For New extension chain , specify a unique name.
The name must conform with RFC-1034 ,
use only lowercase letters, numbers, and hyphens, and have a
maximum length of 63 characters. Additionally, the first character
must be a letter and the last character must be a letter or a number.
To match requests for which the extension chain is executed, for
Match condition , specify a Common Expression Language (CEL)
expression—for example, request.path.startsWith("/extensions") .
Edge extensions let you use only one regular expression per
CEL expression.
For more information about CEL expressions, click
Get syntax help or see CEL matcher language reference .
Add an extension to execute for a matching request. For edge
extensions, you can specify only one extension.
Important: You can include only one plugin in an edge extension chain.
Under Extensions , do the following, and then click Done :
For Programmability type , select Plugins .
For Extension name , specify a unique name.
The name must conform with RFC-1034, use only lowercase
letters, numbers, and hyphens, and have a maximum length of
63 characters. Additionally, the first character must be a
letter and the last a letter or a number.
For Plugin , select a plugin created using Service Extensions
for the same product and extension type.
For Forward attributes , select the attributes that you
want the extension to forward. For more information, see
Supported attributes .
For Forward headers , click Add header , and then add
HTTP headers to forward to the extension (from the client or
the backend). If a header isn't specified, all headers are sent.
Optional: For Fail open , if you want the extension
to fail open, select Enabled . In this case, if the call to
the extension fails or times out, request or response
processing continues without error. Any subsequent extensions
in the extension chain are also executed.
By default, the Fail open field isn't selected. In this
case, if response headers have not been delivered to the
downstream client, a generic HTTP 500 status code is
returned to the client. If response headers have been
delivered, the HTTP stream to the downstream client is reset.
Click Create extension .
gcloud
Define the plugin in a YAML file and associate it with a global
forwarding rule—for example, cr-xlb-forwarding-rule .
cat >edge-plugin.yaml <<EOF
name: edge-ext
forwardingRules:
- https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/global/forwardingRules/cr-xlb-forwarding-rule
loadBalancingScheme: EXTERNAL_MANAGED
extensionChains:
- name: "chain1"
matchCondition:
celExpression: 'request.path.startsWith("/extensions")'
extensions:
- name: 'ext1'
service: projects/ PROJECT_ID /locations/global/wasmPlugins/ WASM_PLUGIN
failOpen: false
supportedEvents:
- REQUEST_HEADERS
forwardAttributes:
- request.host
- request.path
EOF
Replace the following:
PROJECT_ID : the
project ID
WASM_PLUGIN : the ID or the fully
qualified name of the plugin
Edge extensions let you use only one regular expression per
CEL expression.
For more information about the fields in the YAML file, see
ExtensionChain
in the API documentation. For information about supported attributes,
see Supported attributes .
Import the edge extension. Use the
gcloud service-extensions lb-edge-extensions import command with the following sample values:
gcloud service-extensions lb-edge-extensions import edge-ext \
--source=edge-plugin.yaml \
--location=global
After an edge extension is created, it takes a little time for the new plugin
to be distributed across all locations. The time might vary across
locations because the plugin isn't delivered to all locations simultaneously.
To verify that the edge extension works as expected, use the same curl
command:
curl FORWARDING_RULE_IP /extensions
The output is similar to the following and indicates that the page is
served from a VM in region B :
Page served from region-B-vm
To verify that the plugin runs only for requests with the
/extension path prefix, repeat the curl command without a path.
curl FORWARDING_RULE_IP
The output is similar to the following:
Page served from region-A-vm
Limitations for edge extensions
You can attach only one edge extension to a forwarding rule.
Edge extensions don't support HTTP body processing.
Edge extensions let you use only one regular expression per CEL expression.
For limitations that are applicable to all extensions, see
Limitations for extensions .
What's next
View Rust, Go, and C++ plugin examples and testing tools in the
Service Extensions GitHub repository for plugins .
Manage extensions
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
