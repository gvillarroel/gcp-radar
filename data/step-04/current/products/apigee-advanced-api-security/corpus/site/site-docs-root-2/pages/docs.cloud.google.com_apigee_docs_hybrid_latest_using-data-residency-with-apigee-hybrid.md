---
title: "Using data residency with Apigee hybrid \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-security/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid
  title: "Using data residency with Apigee hybrid \_|\_ Google Cloud Documentation"
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
Using data residency with Apigee hybrid
Stay organized with collections
Save and categorize content based on your preferences.
Version 1.16 (latest) keyboard_arrow_down
Supported versions:
v1.16 (latest)
v1.15
v1.14
List of supported versions
Unsupported versions:
v1.13
v1.12
v1.11
v1.10
v1.9
v1.8
v1.7
v1.6
v1.5
v1.4
v1.3
v1.2
v1.1
This topic explains how to configure a new Apigee hybrid installation for data residency
compliance.
About data residency
You can use data residency with new Apigee hybrid installations. You cannot convert an existing installation to use data residency.
Data residency meets compliance and regulatory requirements by allowing you to specify the geographic locations (regions) where Apigee data is stored. With data residency, selecting the control plane location ensures that all customer content is stored within the specified region. See also, see Introduction to data residency .
Basic steps for data residency configuration
To configure Apigee hybrid for data residency, you need to follow a few basic steps, including:
Creating an Apigee organization with data residency
Creating an environment using the Apigee API
Enabling the new data pipeline
Configuring the overrides file(s)
Creating an Apigee organization with data residency
When you create an Apigee organization, you have the option of enabling the org with
data residency. Creating an org with data residency requires you to specify two
key location attributes: the control plane location and the consumer data region .
You will also need to specify the billing type . For details, see
Step 2: Create an organization .
Control plane location : You need to specify the location where customer core content like proxy bundles are stored. For a list see Available Apigee API control plane regions .
The control plane location is the location of the service endpoint location, for example us for United States.
The following table lists available hosting jurisdictions and regions for the Apigee control plane.
Americas
Control plane hosting jurisdiction description
Control plane hosting jurisdiction name
Details
United States
us (multiple regions in United States)
Service endpoint: us-apigee.googleapis.com
Canada
ca (multiple regions in Canada)
Service endpoint: ca-apigee.googleapis.com
Consumer data region description
Consumer data region name
Details
Iowa
us-central1
Low CO 2
Oregon
us-west1
Low CO 2
Los Angeles
us-west2
Salt Lake City
us-west3
Las Vegas
us-west4
South Carolina
us-east1
Northern Virginia
us-east4
Columbus
us-east5
Dallas
us-south1
Montréal
northamerica-northeast1
Low CO 2
Toronto
northamerica-northeast2
Low CO 2
Europe
Control plane hosting jurisdiction description
Control plane hosting jurisdiction name
Details
European Union
eu (multiple regions in the European Union)
Service endpoint: eu-apigee.googleapis.com
Germany
de (multiple regions in Germany)
Service endpoint: de-apigee.googleapis.com
France
fr (single region europe-west9)
Service endpoint: fr-apigee.googleapis.com
Switzerland
ch (single region europe-west6)
Service endpoint: ch-apigee.googleapis.com
Consumer data region description
Consumer data region name
Details
Belgium
europe-west1
Low CO 2
Frankfurt
europe-west3
Netherlands
europe-west4
Zurich
europe-west6
Low CO 2
Milan
europe-west8
Paris
europe-west9
Low CO 2
Turin
europe-west12
Warsaw
europe-central2
Madrid
europe-southwest1
Low CO 2
Finland
europe-north1
Low CO 2
Asia-Pacific
Control plane hosting jurisdiction description
Control plane hosting jurisdiction name
Details
Australia
au (multiple regions in Australia)
Service endpoint: au-apigee.googleapis.com
India
in (multiple regions in India)
Service endpoint: in-apigee.googleapis.com
Japan
jp (multiple regions in Japan)
Service endpoint: jp-apigee.googleapis.com
Consumer data region description
Consumer data region name
Details
Sydney
australia-southeast1
Melbourne
australia-southeast2
Mumbai
asia-south1
Delhi
asia-south2
Tokyo
asia-northeast1
Osaka
asia-northeast2
Middle East
Control plane hosting juridiction description
Control plane hosting jurisdiction name
Details
Qatar
qa (single region me-central1)
Service endpoint: qa-apigee.googleapis.com
Saudi Arabia
sa (single region me-central2)
Service endpoint: sa-apigee.googleapis.com
Israel
il (single region me-west1)
Service endpoint: il-apigee.googleapis.com
Consumer data region description
Consumer data region name
Details
Doha
me-central1
Dammam
me-central2
Tel Aviv
me-west1
Consumer data region : You need to specify a region where API consumer data is stored. This must be a sub-region of the control plane region. For a list of available consumer data regions, see Apigee locations .
Billing type : You can only use data residency with paid subscription orgs.
Creating an environment using the Apigee API
If you create a new environment using the Apigee API, you must specify the
control plane location. See Create an environment .
If you use the UI to create an environment, no special steps are needed.
Configure the control plane contractProvider
Add the contractProvider configuration property to each overrides file and apply the changes. The service endpoint for Apigee management APIs. For example: https://us-apigee.googleapis.com .
For example:
instanceID: "my_hybrid_example"
namespace: apigee
gcp:
projectID: hybrid-example
region: us-central1
k8sCluster:
name: apigee-hybrid
region: us-central1
org: hybrid-example
contractProvider: https://us-apigee.googleapis.com
See Step 7: Create the overrides
When calling the Apigee APIs
When you make curl calls to Apigee APIs to perform tasks in your hybrid installation, you will need to call APIs from within the control plane location:
curl -H "Authorization: Bearer $TOKEN" \
"https:// CONTROL_PLANE_LOCATION -apigee.googleapis.com/v1/organizations/ ORG_NAME /envgroups"
For example:
curl -H "Authorization: Bearer $TOKEN" \
"https:// us -apigee.googleapis.com/v1/organizations/my-hybrid-org/envgroups"
URL allowlisting
If you are using forward proxies with data residency, you must additionally allowlist in the forward proxy:
CONTROL_PLANE_LOCATION -apigee.googleapis.com
ANALYTICS_REGION -pubsub.googleapis.com
URLs required by Apigee hybrid, see Google Cloud URLs to allow for Hybrid .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
