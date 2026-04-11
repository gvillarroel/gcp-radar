---
title: "Enabling IAP for GKE \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto
  title: "Enabling IAP for GKE \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Guides
Send feedback
Enabling IAP for GKE
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to secure a Google Kubernetes Engine (GKE)
instance with Identity-Aware Proxy (IAP) .
Overview
IAP is integrated through Ingress for
GKE. This integration enables you to control resource-level
access for employees instead of using a VPN.
In a GKE cluster, incoming traffic is handled by
HTTP(S) Load Balancing , a component of
Cloud Load Balancing .
The HTTP(S) load balancer is typically configured by the Kubernetes Ingress
controller . The Ingress controller gets configuration information
from a Kubernetes Ingress object that is associated with one or more Service
objects. Each Service object holds routing information that is used to direct an
incoming request to a particular Pod and port.
Beginning with Kubernetes version 1.10.5-gke.3, you can add configuration for
the load balancer by associating a Service with a BackendConfig object.
BackendConfig is a custom resource definition (CRD) that is
defined in the kubernetes/ingress-gce repository.
The Kubernetes Ingress controller reads configuration information from the
BackendConfig and sets up the load balancer accordingly. A BackendConfig holds
configuration information that is specific to Cloud Load Balancing, and enables
you to define a separate configuration for each HTTP(S) Load Balancing backend
service.
Before you begin
To enable IAP for GKE, you need the
following:
A Google Cloud console project with billing enabled.
A group of one or more GKE instances, served by an HTTPS
load balancer. The load balancer should be created automatically when you
create an Ingress object in a GKE cluster.
Learn about creating an Ingress for HTTPS .
A domain name registered to the address of your load balancer.
App code to verify that all requests have an identity.
Learn about getting the user's identity .
IAP uses a Google-managed OAuth client to authenticate users.
Only users within the organization can access the IAP-enabled
application. If you want to allow access to users outside of your organization,
see Enable IAP for external applications .
Enabling IAP
If you haven't configured your project's OAuth consent screen, you'll be
prompted to do so. To configure your OAuth consent screen, see
Setting up your OAuth consent screen .
If you are running GKE clusters version 1.24 or later, you can configure
IAP and GKE by using the Kubernetes Gateway API. To do so, complete
the following steps and then follow the instructions in
Configure IAP .
Do not configure BackendConfig .
Setting up IAP access
Go to the
Identity-Aware Proxy page .
Go to the Identity-Aware Proxy page
Select the project you want to secure with IAP.
Select the checkbox next to the resource you want to grant access to.
If you don't see a resource, ensure that the resource is created and that
the BackendConfig Compute Engine ingress controller is synced.
To verify that the backend service is available, run the following
gcloud command:
gcloud compute backend-services list
On the right side panel, click Add principal .
In the Add principals dialog that appears, enter the email addresses of groups or
individuals who should have the IAP-secured Web App User role for the project.
The following kinds of principals can have this role:
Google Account : user@gmail.com
Google Group : admins@googlegroups.com
Service account : server@example.gserviceaccount.com
Google Workspace domain : example.com
Make sure to add a Google Account that you have access to.
Select Cloud IAP > IAP-secured Web App User from the Roles
drop-down list.
Click Save .
Configuring BackendConfig
You can configure a BackendConfig for IAP by adding an iap block.
Adding an iap block to the BackendConfig
To configure the BackendConfig for IAP, you need to specify the
enabled value. Ensure
that you have the compute.backendServices.update permission and add the
iap block to BackendConfig.
Note: You can't enable both IAP and Cloud CDN
(Cloud CDN) in a BackendConfig. If the BackendConfig doesn't have a
IAP block then any existing IAP settings on the backend
service are inherited.
For GKE versions 1.16.8-gke.3 and higher, use the cloud.google.com/v1 API version.
If you are using an earlier GKE version, use cloud.google.com/v1beta1 .
apiVersion: cloud.google.com/v1
kind: BackendConfig
metadata:
name: CONFIG_DEFAULT
namespace: my-namespace
spec:
iap:
enabled: true
Associate a service port with a BackendConfig
You also need to associate Service ports with your BackendConfig
to trigger turning on IAP. One way to make this association is to make all ports
for the service default to your BackendConfig, which you can do by adding the following annotation
to your Service resource:
metadata:
annotations:
beta.cloud.google.com/backend-config: '{"default": " CONFIG_DEFAULT "}'
Verify the BackendConfig
To test the configuration, run kubectl get event . If you see the message
" no BackendConfig for service port exists ", then you successfully
associated a service port with your BackendConfig, but the BackendConfig
resource wasn't found. This error can occur if you haven't created the BackendConfig resource,
created it in the wrong namespace, or misspelled the reference in the Service annotation.
Note: IAP adds the gcp-iap-mode=AUTHENTICATING query parameter to the redirected
request that occurs after OAuth authentication, so be sure to check your ingress load balancer's
routing configuration
to ensure that redirected requests are going to the correct backend service after a user authenticates through OAuth.
Note: You might get an Add firewall rule warning message on the IAP
configuration page for network endpoint group (NEG) based backends even though the correct firewall rule exists. The firewall rule
warning is informational and can be safely ignored.
Turning IAP off
To turn IAP off, you must set enabled to
false in the BackendConfig. If you delete the IAP
block from BackendConfig, the settings will persist. For example, if IAP is
enabled and you delete the block then IAP will still be turned on.
What's next
Learn how to set up Cloud CDN on GKE .
Learn how to configure Cloud Armor for GKE .
Learn more about the BackendConfig resource .
Learn how to authenticate with a service account JWT
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
