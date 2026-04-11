---
title: "Cloud Controls Partner API \_|\_ Sovereign Controls by Partners guides for\
  \ partners \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest
  title: "Cloud Controls Partner API \_|\_ Sovereign Controls by Partners guides for\
    \ partners \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Sovereign Controls by Partners
Sovereign Partners
Reference
Send feedback
Cloud Controls Partner API
Stay organized with collections
Save and categorize content based on your preferences.
Provides insights about your customers and their Assured Workloads based on your Sovereign Controls by Partners offering.
REST Resource: v1beta.organizations.locations
REST Resource: v1beta.organizations.locations.customers
REST Resource: v1beta.organizations.locations.customers.workloads
REST Resource:
v1beta.organizations.locations.customers.workloads.accessApprovalRequests
REST Resource: v1beta.organizations.locations.customers.workloads.violations
REST Resource: v1alpha.organizations.locations
REST Resource: v1alpha.organizations.locations.customers
REST Resource: v1alpha.organizations.locations.customers.workloads
REST Resource:
v1alpha.organizations.locations.customers.workloads.accessApprovalRequests
REST Resource:
v1alpha.organizations.locations.customers.workloads.violations
REST Resource: v1.organizations.locations
REST Resource: v1.organizations.locations.customers
REST Resource: v1.organizations.locations.customers.workloads
REST Resource:
v1.organizations.locations.customers.workloads.accessApprovalRequests
REST Resource: v1.organizations.locations.customers.workloads.violations
Service: cloudcontrolspartner.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://cloudcontrolspartner.googleapis.com/$discovery/rest?version=v1
https://cloudcontrolspartner.googleapis.com/$discovery/rest?version=v1beta
https://cloudcontrolspartner.googleapis.com/$discovery/rest?version=v1alpha
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudcontrolspartner.googleapis.com
REST Resource: v1beta.organizations.locations
Methods
getPartner
GET /v1beta/{name=organizations/*/locations/*/partner}
Get details of a Partner.
REST Resource: v1beta.organizations.locations.customers
Methods
get
GET /v1beta/{name=organizations/*/locations/*/customers/*}
Gets details of a single customer
list
GET /v1beta/{parent=organizations/*/locations/*}/customers
Lists customers of a partner identified by its Google Cloud organization ID
REST Resource: v1beta.organizations.locations.customers.workloads
Methods
get
GET /v1beta/{name=organizations/*/locations/*/customers/*/workloads/*}
Gets details of a single workload
getEkmConnections
GET /v1beta/{name=organizations/*/locations/*/customers/*/workloads/*/ekmConnections}
Gets the EKM connections associated with a workload
getPartnerPermissions
GET /v1beta/{name=organizations/*/locations/*/customers/*/workloads/*/partnerPermissions}
Gets the partner permissions granted for a workload
list
GET /v1beta/{parent=organizations/*/locations/*/customers/*}/workloads
Lists customer workloads for a given customer org id
REST Resource: v1beta.organizations.locations.customers.workloads.accessApprovalRequests
Methods
list
GET /v1beta/{parent=organizations/*/locations/*/customers/*/workloads/*}/accessApprovalRequests
Lists access requests associated with a workload
REST Resource: v1beta.organizations.locations.customers.workloads.violations
Methods
get
GET /v1beta/{name=organizations/*/locations/*/customers/*/workloads/*/violations/*}
Gets details of a single Violation.
list
GET /v1beta/{parent=organizations/*/locations/*/customers/*/workloads/*}/violations
Lists Violations for a workload Callers may also choose to read across multiple Customers or for a single customer as per AIP-159 by using '-' (the hyphen or dash character) as a wildcard character instead of {customer} & {workload}.
REST Resource: v1alpha.organizations.locations
Methods
getPartner
GET /v1alpha/{name=organizations/*/locations/*/partner}
Get details of a Partner.
REST Resource: v1alpha.organizations.locations.customers
Methods
get
GET /v1alpha/{name=organizations/*/locations/*/customers/*}
Gets details of a single customer
list
GET /v1alpha/{parent=organizations/*/locations/*}/customers
Lists customers of a partner identified by its Google Cloud organization ID
REST Resource: v1alpha.organizations.locations.customers.workloads
Methods
get
GET /v1alpha/{name=organizations/*/locations/*/customers/*/workloads/*}
Gets details of a single workload
getEkmConnections
GET /v1alpha/{name=organizations/*/locations/*/customers/*/workloads/*/ekmConnections}
Gets the EKM connections associated with a workload
getPartnerPermissions
GET /v1alpha/{name=organizations/*/locations/*/customers/*/workloads/*/partnerPermissions}
Gets the partner permissions granted for a workload
list
GET /v1alpha/{parent=organizations/*/locations/*/customers/*}/workloads
Lists customer workloads for a given customer org id
REST Resource: v1alpha.organizations.locations.customers.workloads.accessApprovalRequests
Methods
list
GET /v1alpha/{parent=organizations/*/locations/*/customers/*/workloads/*}/accessApprovalRequests
Lists access requests associated with a workload
REST Resource: v1alpha.organizations.locations.customers.workloads.violations
Methods
get
GET /v1alpha/{name=organizations/*/locations/*/customers/*/workloads/*/violations/*}
Gets details of a single Violation.
list
GET /v1alpha/{parent=organizations/*/locations/*/customers/*/workloads/*}/violations
Lists Violations for a workload Callers may also choose to read across multiple Customers or for a single customer as per AIP-159 by using '-' (the hyphen or dash character) as a wildcard character instead of {customer} & {workload}.
REST Resource: v1.organizations.locations
Methods
getPartner
GET /v1/{name=organizations/*/locations/*/partner}
Get details of a Partner.
REST Resource: v1.organizations.locations.customers
Methods
get
GET /v1/{name=organizations/*/locations/*/customers/*}
Gets details of a single customer
list
GET /v1/{parent=organizations/*/locations/*}/customers
Lists customers of a partner identified by its Google Cloud organization ID
REST Resource: v1.organizations.locations.customers.workloads
Methods
get
GET /v1/{name=organizations/*/locations/*/customers/*/workloads/*}
Gets details of a single workload
getEkmConnections
GET /v1/{name=organizations/*/locations/*/customers/*/workloads/*/ekmConnections}
Gets the EKM connections associated with a workload
getPartnerPermissions
GET /v1/{name=organizations/*/locations/*/customers/*/workloads/*/partnerPermissions}
Gets the partner permissions granted for a workload
list
GET /v1/{parent=organizations/*/locations/*/customers/*}/workloads
Lists customer workloads for a given customer org id
REST Resource: v1.organizations.locations.customers.workloads.accessApprovalRequests
Methods
list
GET /v1/{parent=organizations/*/locations/*/customers/*/workloads/*}/accessApprovalRequests
Lists access requests associated with a workload
REST Resource: v1.organizations.locations.customers.workloads.violations
Methods
get
GET /v1/{name=organizations/*/locations/*/customers/*/workloads/*/violations/*}
Gets details of a single Violation.
list
GET /v1/{parent=organizations/*/locations/*/customers/*/workloads/*}/violations
Lists Violations for a workload Callers may also choose to read across multiple Customers or for a single customer as per AIP-159 by using '-' (the hyphen or dash character) as a wildcard character instead of {customer} & {workload}.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
