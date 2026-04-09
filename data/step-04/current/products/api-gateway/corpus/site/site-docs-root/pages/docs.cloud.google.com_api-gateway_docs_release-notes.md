---
title: "API Gateway release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-gateway/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/api-gateway/docs
source_metadata:
  url: https://docs.cloud.google.com/api-gateway/docs/release-notes
  title: "API Gateway release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Gateway
Resources
Send feedback
API Gateway release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page contains release notes for features and updates to API Gateway.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
February 02, 2026
v1
Change
Connect API Gateway to Apigee API hub instances that use VPC Service Controls
API Gateway can now be connected to Apigee API hub instances that use VPC Service Controls .
January 12, 2026
v1
Feature
Centralize API Gateway API management using Apigee API hub
Connect API Gateway to Apigee API hub to enable seamless publishing of API metadata
from your API Gateway project to API hub. This integration provides a
centralized, unified view of your APIs across different gateways,
simplifying API discovery, governance, and management.
Key benefits include:
Centralized API discovery : All your API Gateway APIs are discoverable in API hub alongside APIs from other sources
Enhanced visibility : Gain insights into your API landscape with consolidated metadata
Streamlined management : Simplify API governance and lifecycle management across your diverse API ecosystem
For more detail, see Centralize API management using API hub .
Note : Rollouts of this release to production instances might take up to 5 business days to complete
across all Google Cloud zones. Your instances might not have the feature
available until the rollout is complete.
November 12, 2025
v1
Feature
API Gateway now supports OpenAPI version 3.0.
With this release, API Gateway now supports OpenAPI version 3.0, including all patch versions (3.0.x).
Key Benefits:
Simplified Deployment: Directly upload and deploy OpenAPI version 3.0.x specifications without prior conversion to 2.0.
Enhanced Compatibility: Seamlessly integrate your OpenAPI version 3.0.x definitions with API Gateway.
For more detail, see OpenAPI overview .
v1
Announcement
On November 12, 2025, we released a new version of API Gateway.
July 23, 2025
v1
Deprecated
Deprecation of Transport Layer Security (TLS) v1.0 and v1.1 protocols
API Gateway now enforces TLS v1.2+. You can opt out of enforcing TLS v1.2+ for your API Gateway's new security settings by reaching out to Google Cloud Support to continue using your current protocol.
Connections using TLS 1.1 and earlier will return a 400 Bad Request - The request was malformed error after a successful TLS handshake, indicating that the connection is established, but the request itself is denied. External SSL-checking sites may verify a successful TLS handshake and incorrectly imply that TLS versions 1.1 and earlier are supported.
v1
Announcement
On July 23, 2025, we released an updated version of API Gateway.
June 09, 2025
v1
Feature
With this release, the limit on the number of API gateways that can be created per region is increased to 50 .
For more information, see Quotas and limits
v1
Announcement
On June 9, 2025, we released an updated version of API Gateway.
April 02, 2025
v1
Announcement
On April 2, 2025, we released an updated version of API Gateway.
v1
Feature
With this release, API Gateway meets the regulatory and compliance requirements for support of data residency for data at rest.
For more information, see Google Cloud Platform Services with Data residency .
March 26, 2025
v1
Announcement
On March 26, 2025, we released an updated version of API Gateway.
v1
Feature
With this release, customer data in API Gateway is now CMEK-compliant at rest. No
configuration is required.
For more information, see CMEK compliance in API Gateway .
To learn more about CMEK, see
Customer-managed encryption keys (CMEK) .
March 25, 2025
v1
Announcement
On March 25, 2025, we released an updated version of API Gateway.
v1
Feature
API Gateway now supports Workforce Identity Federation .
Workforce Identity Federation lets you use an external identity provider (IdP) to authenticate and authorize a workforce — a group of users, such as employees, partners, and contractors — using Identity and Access Management (IAM) to access API Gateway services.
See Identity federation: products and limitations for more information.
July 01, 2024
v1
Announcement
As of July 1, 2024, API gateways located in asia-east1 are decommissioned and will no longer serve traffic.
Between October 2021 and October 2022 , customers with gateways located in asia-east1 were notified of the planned decommissioning and advised to delete or relocate any gateways in this region. A final reminder was sent in May, 2024.
As of July 1, 2024, any remaining gateways located in asia-east1 are fully decommissioned.
March 16, 2023
v1
Fixed
Fixed issue where API Gateway used the IP address of the Google Cloud Load Balancer (GCLB) (specifically the address of the forwarding rule) to validate IP-restricted API keys in requests proxied by a GCLB. API gateway now correctly validates IP-restricted API keys using the IP address of the client calling the GCLB.
January 05, 2023
v1
Fixed
Bug ID
Description
266369520
Fixed issue where gRPC requests to a gateway resulted in 400 responses following an ESPV2 upgrade.
v1
Change
When calling a gateway using gRPC with transcoding, every field provided in a request message must contain a
valid value. For every field included in the request message you must either specify a valid integer value or remove the
field entirely.
August 09, 2021
v1
Announcement
Released a Preview version of HTTP(S) Load balancing for API Gateway.
The integration of Google Cloud HTTP(S) Load Balancing support for API Gateway enables your serverless backends to take advantage of all the features provided by Cloud Load Balancing. By combining API Gateway and HTTP(S) Load Balancing using a serverless Network Endpoint Group (serverless NEG) , you can:
Host gateways with custom branded domains
Configure TLS for gateways using certificates issued by a preferred certificate authority
Create a common entry point for a gateway routing to multiple backends
Deploy gateways in multiple geographic regions for high availability without managing URLs for each region
To provide feedback or to log issues with this release, see Getting support .
January 21, 2021
v1
Feature
An updated REST API reference for the v1 version is available.
v1
Feature
API Gateway support for the us-east1 region is now available.
v1
Feature
API Gateway is added to the gcloud command group. Users should upgrade to the latest gcloud release to access the API Gateway command group.
v1
Feature
gRPC support is available for Cloud Run backend services. For more information, see Getting started with API Gateway and Cloud Run for gRPC .
v1
Announcement
Released a GA version of API Gateway.
To provide feedback or to log issues with this release, see Getting support .
September 08, 2020
v1beta
Issue
Projects with gateways created between July 14, 2020 and August 6, 2020 may encounter an issue when new gateways are created with the beta API. The *gateway.dev hostname of the new gateway may return a 404 error response. A resolution to this issue is in progress. In the meantime, we recommend creating or using a new Google Cloud project when using the beta API.
v1beta
Feature
The API Gateway API is now publicly visible. Allowlisting is no longer required to view or enable the API in your Google Cloud project.
Deprecated fields are no longer present in alpha versions of the API and the API Gateway UI utilizes the beta API.
v1beta
Announcement
Released a beta version of API Gateway.
To provide feedback or to log issues with this release, see Getting support .
v1beta
Issue
When creating an API config, and in particular the first config for a new service, the operation may take several minutes to complete as the config is propagated to downstream systems. Creation of a complex API config could take up to ten minutes to complete successfully.
v1beta
Issue
Gateways created during alpha with *.run.app hostnames (created prior to July 14, 2020) will be turned down shortly after the beta release. We recommend creating new gateways using the v1beta API. Gateways created with the beta API will have *.gateway.dev hostnames.
v1beta
Issue
API configs created prior to June 2, 2020 can no longer be deployed to gateways. These configs will be deleted through an internal process.
v1beta
Issue
API Gateway built-in IAM roles are not initially visible. As a result, management permissions are not displayed on the permissions panel within the API Gateway UI . However, permissions to manage API Gateway resources can be granted as expected via Project Owner, Editor, and Viewer roles. A resolution to this issue is in progress.
v1beta
Feature
An updated REST API reference for the v1beta version is available.
v1beta
Issue
API Gateway does not support custom IAM roles. A resolution to this issue is in progress.
v1beta
Feature
API Gateway is added to the gcloud beta command group. Alpha users and trusted testers should upgrade to the latest gcloud release to access the API Gateway beta command group.
v1beta
Feature
Newly created gateways have an updated default hostname pattern:
https://GATEWAY_ID-HASH.REGION_CODE.gateway.dev
where GATEWAY_ID is the name of the gateway, HASH is the unique hash code generated when you deployed the gateway, and REGION_CODE is the code for the Google Cloud region where the gateway is deployed.
For more information, see Deploying an API to a gateway .
July 01, 2020
v1alpha2
Feature
Updated the REST API reference to the latest Alpha version.
v1alpha2
Issue
When creating a gateway, permissions can take more than a minute to propagate through the system. Therefore, you might see a "missing tokens" error when making a request to an API. If you see this error, wait several minutes, then retry the request.
v1alpha2
Announcement
Released an updated version of the Alpha version of API Gateway.
To provide feedback or to log issues with this release, see Getting support .
v1alpha2
Feature
Newly created gateways now have an updated default hostname pattern:
https://GATEWAY_ID-HASH.REGION_CODE.gateway.dev
where GATEWAY_ID is the name of the gateway, HASH is the unique hash code generated when you deployed the gateway, and REGION_CODE is the code for the Google Cloud region where the gateway is deployed.
For more information, see Deploying an API to a gateway .
v1alpha2
Feature
OpenAPI specifications for API configs no longer require the host property. You can either omit the host property entirely or set it to the DNS name of the deployed API. API providers often set it to the DNS name when sharing the OpenAPI Spec with their API consumers. However, the value of the host property is not enforced by API Gateway. Do not set the host property to null or an empty value, as this will result in an error.
For more information, see OpenAPI overview .
v1alpha2
Issue
When creating an API config, and in particular the first config for a new service, the operation may take several minutes to complete as the config is propagated to downstream systems. Creation of a complex API config could take up to ten minutes to complete successfully.
April 01, 2020
v1alpha2
Fixed
Previously, when the gcloud command failed while creating an API config, the API config was still created, requiring you to manually delete it. The gcloud command no longer requires you to delete the API config when the create command fails.
v1alpha2
Feature
The gcloud command-line tool now supports new command options, including:
Create, list, update, and delete APIs. That means you no longer have to use Cloud Endpoints commands to work with an API. See Creating an API for more.
Update an API config to modify its labels or display name. See Updating an API config for more.
v1alpha2
Feature
You can now use the Google Cloud Console UI, a web-based, graphical user interface, to develop your APIs. See the Quickstart: Use the UI to deploy an API on API Gateway for more.
v1alpha2
Issue
When creating a gateway, permissions can take more than a minute to propagate through the system. Therefore, you might see a "missing tokens" error when making a request to an API. If you see this error, wait several minutes, then retry the request.
v1alpha2
Announcement
Alpha update release of API Gateway
Released an updated version of the Alpha version of API Gateway.
To provide feedback or to log issues with this release, see Getting support .
v1alpha2
Feature
Updated the REST API reference to the latest Alpha version.
v1alpha2
Issue
Authentication is only supported for Cloud Run and Cloud Functions, not for App Engine.
March 01, 2020
v1alpha1
Issue
When creating a gateway, permissions can take more than a minute to propagate through the system. Therefore, you might see a "missing tokens" error when making a request to an API. If you see this error, wait several minutes, then retry the request.
v1alpha1
Issue
Authentication is only supported for Cloud Run and Cloud Functions, not for App Engine.
v1alpha1
Announcement
Released the Alpha version of API Gateway.
To provide feedback or to log issues with this release, see Getting support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
