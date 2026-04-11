---
title: "Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/hybrid/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts
  title: "Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation"
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
Introduction to data residency
Stay organized with collections
Save and categorize content based on your preferences.
This document describes data residency for Apigee.
Overview
For many industry verticals and enterprises, using a cloud offering
results in increased scrutiny from security and compliance teams (what data is
stored in the cloud, where it is stored, who has access to it, who can see the
data, etc.). In addition to this, many countries have passed data privacy laws
that prohibit Personally Identifiable Information (PII) data from being stored
outside the country or region.
Data residency for Apigee meets compliance and regulatory
requirements by allowing you to specify the geographic locations (regions)
where Apigee data is stored. Historically, Apigee allowed you to
select the instance region and analytics region; however, Apigee
also has global infrastructure, such as an API proxy bundle or other
customer data. With data residency, selecting the control plane location
ensures that all customer content is stored within the specified region.
Apigee has achieved FedRAMP High authorization , successfully
meeting standards required for data residency. For more information, see Data residency and FedRAMP compliance .
Data residency compatibility
Data residency can be used with the following:
Apigee organizations (Subscription or Pay-as-you-go)
Apigee hybrid . See
Data residency and Apigee hybrid .
Operations Anomalies for non-hybrid Subscription organizations
Monetization
API analytics
Advanced API Security
Apigee API hub .
Data collector . Data collectors are supported for Subscription and Pay-as-you-go organizations and hybrid versions 1.14.0 and later.
Data residency is not currently supported for use with:
Looker Studio Integration
Preview- or Beta-release features, such as
Shadow API Discovery
Eval organizations
Integrated portals
Apigee Adapter for Envoy
Google Cloud CLI. To provision or manage a data residency-enabled
organization, you can use
Apigee in the Google Cloud console or the Apigee APIs.
Key points
If data residency is enabled for your Apigee installation, note the
following key points:
Data residency must be enabled at the time Apigee is
provisioned . You cannot enable data residency for an
already-provisioned org.
By default, the control plane is a global entity unless you select
data residency (regionalization) at the time of Apigee
organization creation; it can not be changed later. Once you select
data residency and the control plane location, it can't be
changed. If you later need a different location, you will need to
create a new Google Cloud project.
When provisioning an org:
Without data residency: Specify the region
with ANALYTICS_REGION .
With data residency: Specify the region with
CONTROL_PLANE_LOCATION
and the sub-region with CONSUMER_DATA_REGION . See
Data residency regions .
The admin who provisions Apigee must:
Inform Apigee users, such as API developers and other admins,
about the data residency configuration
Set the location org policy as described in
Restricting Resource Locations
API developers, admins, or other users of
Apigee management APIs must use the
new data residency API
service endpoint .
Data residency regions
Data residency allows you to choose the region (physical location)
during provisioning where data is stored.
When specifying the region (for example, us ), you must also
specify a single region (for example, us-west1 )
for other services that can run only in a single region, such as
Analytics reports.
All resources must be within the region specified. For example, if you
select us for the CONTROL_PLANE_LOCATION , the
other Apigee resources, such as the runtime instance, referencing CMEK,
endpoint attachment, etc., must also be within the us region.
The type of data that is stored when you choose data residency is
referred to as control plane data and consumer data.
Control plane data is analytics data, API proxies,
target servers, truststores and keystores and anything else shared across
runtimes. Consumer data is analytics data that is processed by services that
run in a single region.
See
Apigee locations , for the currently supported control-plane regions.
Data residency service endpoint
A service endpoint
is a base URL that specifies the network address of an API service.
The Apigee API service endpoint, or hostname, is
apigee.googleapis.com .
No data residency:
Use the service endpoint as follows:
apigee.googleapis.com
For example:
curl "https:// apigee.googleapis.com /v1/organizations?parent=projects/$PROJECT_ID" ...
Data residency:
Prepend the control plane region to the service endpoint:
CONTROL_PLANE_LOCATION -apigee.googleapis.com
For example:
curl "https:// CONTROL_PLANE_LOCATION -apigee.googleapis.com /v1/organizations?parent=projects/$PROJECT_ID" ...
Where CONTROL_PLANE_LOCATION is the is the physical
location, specified during provisioning, at which Apigee
control plane data will be stored.
For example:
curl "https:// us -apigee.googleapis.com/v1/organizations?parent=projects/$PROJECT_ID" ...
How to view the region
If you have already provisioned your org ( PROJECT_ID ) for use
with data residency, you can use the
getProjectMapping API to display the regions associated with a project:
Authorize gcloud to access the Cloud Platform with your Google user credentials:
gcloud auth login
Call the API:
curl -X GET https://apigee.googleapis.com/v1/organizations/ PROJECT_ID :getProjectMapping \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Where PROJECT_ID is your Apigee organization name or
Google Cloud project ID.
Something similar to the following is returned:
{
"organization": "my-project",
"projectIds": [
"my-project"
],
"projectId": "my-project"
"location": "us"
}
Data residency encryption
See
Introduction to CMEK .
Data residency and organization policy constraints
Google Cloud's
organization policy constraints make it possible to define a set of locations where location-based Google Cloud resources can be created
for your Google Cloud organization. If you have a Google Cloud
organization policy that uses a resource location constraint ( constraints/gcp.resourceLocations ),
the constraint will apply to the following Apigee resources that are created when Apigee is provisioned:
Control plane
Consumer data
Runtime
Endpoints attachment
Analytics
If you are provisioning a new Apigee organization within a
Google Cloud project with a resource location constraint applied, you must ensure that the location constraint is
compatible with the control plane location specified for your Apigee organization:
If you provision an Apigee organization without data residency, the resource location constraint in your
Google Cloud organization policy must be set to global . Because the Apigee control plane is a global entity
by default, provisioning will fail if a constraint other than global is applied.
If you provision an Apigee organization with data residency, confirm that
any resource location constraint that may be set in your Google Cloud organization policy does not exclude the region
you select for your control plane data. Otherwise, provisioning will fail.
Data residency and FedRAMP compliance
Apigee is authorized as a FedRAMP High service for organizations where data residency is enabled.
If you choose to enable data residency when provisioning an Apigee Subscription or Pay-as-you-go organization,
the following services are in scope under Apigee's FedRAMP Authority To Operate (ATO):
The regionalized Apigee organization's control plane, runtime plane, and analytics .
The regionalized Apigee hybrid organization's control plane and analytics .
The following Apigee offerings are not in scope under Apigee's FedRAMP ATO:
API analytics
Advanced API Security
Integrated portals
Apigee evaluation organizations
Apigee data collectors
For more information about the significance of a FedRAMP ATO, see FedRAMP Compliance .
Data residency and Apigee hybrid
You can configure new Apigee hybrid installations to use data residency, starting with hybrid version 1.12. See Using data residency with Apigee hybrid .
Apigee hybrid version 1.14.0 and later with
data residency enabled supports Advanced API Security ,
Apigee API analytics ,
the Debug tool , and
Monetization .
Apigee hybrid with data residency enabled does not support distributed trace. See the
Known Issue .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
