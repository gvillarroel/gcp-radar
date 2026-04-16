---
title: "Configure private internal-only services \_|\_ App Engine flexible environment\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/java/create-app
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip
  title: "Configure private internal-only services \_|\_ App Engine flexible environment\
    \ \_|\_ Google Cloud Documentation"
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
Configure private internal-only services
Stay organized with collections
Save and categorize content based on your preferences.
This page shows the required configuration for exposing an App Engine flexible environment
service only on its internal IP address.
By default, flexible environment services receive both an internal IP address
and an ephemeral external IP address when they are first deployed. The
ephemeral external IP address allows your service to send requests to
App Engine services with custom domains, and resources on the internet.
Ephemeral external IP addresses incur costs .
If your service does not require an external IP address, you can prevent your
service from sending requests to resources on the internet and reduce costs by
limiting your service to using only its internal IP address. This does not
prevent your service from receiving requests from the internet or
App Engine services with custom domains, because the fully qualified
domain name of your service is still externally visible.
Limitations
Disabling ephemeral external IP addresses has the following limitations:
Services with custom domains: To send requests to App Engine
services with custom domains you must
configure Cloud NAT .
External resources: To send requests to external resources you must
configure Cloud NAT .
Private Google Access dependency: Instances with IP mode set to
internal require
Private Google Access on
the target subnetwork.
Legacy networks: Legacy networks cannot use
Private Google Access, and thus cannot disable ephemeral external IP
addresses.
Before you begin
To deploy flexible environment apps without external IP addresses, you must
enable Private Google Access on the target subnetwork.
To learn about Private Google Access, see the Overview .
For step-by-step configuration instructions, see
Enabling Private Google Access .
Prepare your Shared VPC network
If you use Shared VPC, follow these steps to prepare your
Shared VPC network for further configuration.
Verify that you have a route that is compatible with
Private Google Access. Typically the
default route of a network is
compatible with Private Google Access. For other routes, confirm that
the route is configured as follows.
Network: SHARED_VPC_NETWORK_NAME
Destination IP address range: 0.0.0.0/0
Instance tags: INSTANCE_TAGS
Next hop: DEFAULT_INTERNET_GATEWAY
Replace the following:
SHARED_VPC_NETWORK_NAME : The name of your
Shared VPC network.
INSTANCE_TAGS : If you do not use any instance
tags, do not specify anything in this field. If you do use instance tags,
include aef-instances in your list of instance tags.
DEFAULT_INTERNET_GATEWAY : The default internet gateway.
To learn more about compatible routes for Private Google Access, see
the Private Google Access documentation on
routing options .
Verify that you have a firewall rule that is compatible with
Private Google Access. The firewall rule must be configured as
follows.
Network: SHARED_VPC_NETWORK_NAME
Destination IP address range: 0.0.0.0/0
Destination filter: IP ranges
Direction of traffic: Egress
Attach on match: Allow
Instance tags: INSTANCE_TAGS
Replace the following:
SHARED_VPC_NETWORK_NAME : The name of your
Shared VPC network.
INSTANCE_TAGS : If you do not use any instance
tags, do not specify anything in this field. If you do use instance tags,
include aef-instances in your list of instance tags.
To learn more about compatible firewall rules for
Private Google Access, see the Private Google Access
documentation on
firewall configuration .
Configure your service to use only its internal IP address
Update the Google Cloud CLI. This ensures that you are using a version of the
gcloud CLI that supports private IP addresses for
flexible environment apps.
gcloud components update
In your app.yaml file, add the instance_ip_mode field to the
network section
and set it to internal .
If your app.yaml file already has a network section, add the following
line inside the network section:
instance_ip_mode: internal
If your app.yaml file doesn't have a network section, create the
section and specify the instance IP mode by adding the following lines:
network:
instance_ip_mode: internal
Save these changes.
Deploy the service.
gcloud beta app deploy
Verify configuration by checking the Instances page of the Google Cloud console.
Go to Instances
Scroll down to the Instances table (below the Summary chart). In the
External IP column, confirm that there is no IP address listed. The
absence of an IP address in this column means that your instance has no
external IP address. Even though this field is empty, your instance still has
an internal IP address.
Send external requests without an external IP address
If your service sends requests to the internet but you want to limit it to using
only its internal IP address, you can use Cloud NAT to
create a gateway. Your service can send external requests through the
Cloud NAT gateway without using the default ephemeral external IP addresses.
Follow the steps in the section
Configure your service to use only its internal IP address .
Follow the steps to
Configure Cloud NAT .
To learn more about this approach, see the Cloud Architecture Center
documentation on
Deploying Cloud NAT for fetching .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
