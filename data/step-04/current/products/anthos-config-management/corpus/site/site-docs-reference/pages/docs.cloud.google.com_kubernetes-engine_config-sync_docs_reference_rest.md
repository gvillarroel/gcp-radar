---
title: "Config Delivery API \_|\_ Config Sync \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest
  title: "Config Delivery API \_|\_ Config Sync \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Sync
Reference
Send feedback
Config Delivery API
Stay organized with collections
Save and categorize content based on your preferences.
ConfigDelivery service manages the deployment of Kubernetes configuration to a fleet of Kubernetes clusters.
REST Resource: v1beta.projects.locations
REST Resource: v1beta.projects.locations.fleetPackages
REST Resource: v1beta.projects.locations.fleetPackages.rollouts
REST Resource: v1beta.projects.locations.operations
REST Resource: v1beta.projects.locations.resourceBundles
REST Resource: v1beta.projects.locations.resourceBundles.releases
REST Resource: v1beta.projects.locations.resourceBundles.releases.variants
REST Resource: v1alpha.projects.locations
REST Resource: v1alpha.projects.locations.fleetPackages
REST Resource: v1alpha.projects.locations.fleetPackages.rollouts
REST Resource: v1alpha.projects.locations.operations
REST Resource: v1alpha.projects.locations.resourceBundles
REST Resource: v1alpha.projects.locations.resourceBundles.releases
REST Resource: v1alpha.projects.locations.resourceBundles.releases.variants
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.fleetPackages
REST Resource: v1.projects.locations.fleetPackages.rollouts
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.resourceBundles
REST Resource: v1.projects.locations.resourceBundles.releases
REST Resource: v1.projects.locations.resourceBundles.releases.variants
Service: configdelivery.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://configdelivery.googleapis.com/$discovery/rest?version=v1
https://configdelivery.googleapis.com/$discovery/rest?version=v1beta
https://configdelivery.googleapis.com/$discovery/rest?version=v1alpha
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://configdelivery.googleapis.com
REST Resource: v1beta.projects.locations
Methods
get
GET /v1beta/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta.projects.locations.fleetPackages
Methods
create
POST /v1beta/{parent=projects/*/locations/*}/fleetPackages
Creates a new FleetPackage in a given project and location.
delete
DELETE /v1beta/{name=projects/*/locations/*/fleetPackages/*}
Deletes a single FleetPackage.
get
GET /v1beta/{name=projects/*/locations/*/fleetPackages/*}
Gets details of a single FleetPackage.
list
GET /v1beta/{parent=projects/*/locations/*}/fleetPackages
Lists FleetPackages in a given project and location.
patch
PATCH /v1beta/{fleetPackage.name=projects/*/locations/*/fleetPackages/*}
Updates the parameters of a single FleetPackage.
REST Resource: v1beta.projects.locations.fleetPackages.rollouts
Methods
abort
POST /v1beta/{name=projects/*/locations/*/fleetPackages/*/rollouts/*}:abort
Abort a Rollout.
get
GET /v1beta/{name=projects/*/locations/*/fleetPackages/*/rollouts/*}
Gets details of a single Rollout.
list
GET /v1beta/{parent=projects/*/locations/*/fleetPackages/*}/rollouts
Lists Rollouts in a given project, location, and Fleet Package.
resume
POST /v1beta/{name=projects/*/locations/*/fleetPackages/*/rollouts/*}:resume
Resume a Rollout.
suspend
POST /v1beta/{name=projects/*/locations/*/fleetPackages/*/rollouts/*}:suspend
Suspend a Rollout.
REST Resource: v1beta.projects.locations.operations
Methods
cancel
POST /v1beta/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1beta/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta.projects.locations.resourceBundles
Methods
create
POST /v1beta/{parent=projects/*/locations/*}/resourceBundles
Creates a new ResourceBundle in a given project and location.
delete
DELETE /v1beta/{name=projects/*/locations/*/resourceBundles/*}
Deletes a single ResourceBundle.
get
GET /v1beta/{name=projects/*/locations/*/resourceBundles/*}
Gets details of a single ResourceBundle.
list
GET /v1beta/{parent=projects/*/locations/*}/resourceBundles
Lists ResourceBundles in a given project and location.
patch
PATCH /v1beta/{resourceBundle.name=projects/*/locations/*/resourceBundles/*}
Updates the parameters of a single ResourceBundle.
REST Resource: v1beta.projects.locations.resourceBundles.releases
Methods
create
POST /v1beta/{parent=projects/*/locations/*/resourceBundles/*}/releases
Creates a new Release in a given project, location and resource bundle.
delete
DELETE /v1beta/{name=projects/*/locations/*/resourceBundles/*/releases/*}
Deletes a single Release.
get
GET /v1beta/{name=projects/*/locations/*/resourceBundles/*/releases/*}
Gets details of a single Release.
list
GET /v1beta/{parent=projects/*/locations/*/resourceBundles/*}/releases
Lists Releases in a given project and location.
patch
PATCH /v1beta/{release.name=projects/*/locations/*/resourceBundles/*/releases/*}
Updates the parameters of a single Release.
REST Resource: v1beta.projects.locations.resourceBundles.releases.variants
Methods
create
POST /v1beta/{parent=projects/*/locations/*/resourceBundles/*/releases/*}/variants
Creates a new Variant in a given project, location, resource bundle, and release.
delete
DELETE /v1beta/{name=projects/*/locations/*/resourceBundles/*/releases/*/variants/*}
Deletes a single Variant.
get
GET /v1beta/{name=projects/*/locations/*/resourceBundles/*/releases/*/variants/*}
Gets details of a single Variant.
list
GET /v1beta/{parent=projects/*/locations/*/resourceBundles/*/releases/*}/variants
Lists Variants in a given project and location.
patch
PATCH /v1beta/{variant.name=projects/*/locations/*/resourceBundles/*/releases/*/variants/*}
Updates the parameters of a single Variant.
REST Resource: v1alpha.projects.locations
Methods
get
GET /v1alpha/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1alpha/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha.projects.locations.fleetPackages
Methods
create
POST /v1alpha/{parent=projects/*/locations/*}/fleetPackages
Creates a new FleetPackage in a given project and location.
delete
DELETE /v1alpha/{name=projects/*/locations/*/fleetPackages/*}
Deletes a single FleetPackage.
get
GET /v1alpha/{name=projects/*/locations/*/fleetPackages/*}
Gets details of a single FleetPackage.
list
GET /v1alpha/{parent=projects/*/locations/*}/fleetPackages
Lists FleetPackages in a given project and location.
patch
PATCH /v1alpha/{fleetPackage.name=projects/*/locations/*/fleetPackages/*}
Updates the parameters of a single FleetPackage.
REST Resource: v1alpha.projects.locations.fleetPackages.rollouts
Methods
abort
POST /v1alpha/{name=projects/*/locations/*/fleetPackages/*/rollouts/*}:abort
Abort a Rollout.
get
GET /v1alpha/{name=projects/*/locations/*/fleetPackages/*/rollouts/*}
Gets details of a single Rollout.
list
GET /v1alpha/{parent=projects/*/locations/*/fleetPackages/*}/rollouts
Lists Rollouts in a given project, location, and Fleet Package.
resume
POST /v1alpha/{name=projects/*/locations/*/fleetPackages/*/rollouts/*}:resume
Resume a Rollout.
suspend
POST /v1alpha/{name=projects/*/locations/*/fleetPackages/*/rollouts/*}:suspend
Suspend a Rollout.
REST Resource: v1alpha.projects.locations.operations
Methods
cancel
POST /v1alpha/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1alpha/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1alpha/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1alpha/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1alpha.projects.locations.resourceBundles
Methods
create
POST /v1alpha/{parent=projects/*/locations/*}/resourceBundles
Creates a new ResourceBundle in a given project and location.
delete
DELETE /v1alpha/{name=projects/*/locations/*/resourceBundles/*}
Deletes a single ResourceBundle.
get
GET /v1alpha/{name=projects/*/locations/*/resourceBundles/*}
Gets details of a single ResourceBundle.
list
GET /v1alpha/{parent=projects/*/locations/*}/resourceBundles
Lists ResourceBundles in a given project and location.
patch
PATCH /v1alpha/{resourceBundle.name=projects/*/locations/*/resourceBundles/*}
Updates the parameters of a single ResourceBundle.
REST Resource: v1alpha.projects.locations.resourceBundles.releases
Methods
create
POST /v1alpha/{parent=projects/*/locations/*/resourceBundles/*}/releases
Creates a new Release in a given project, location and resource bundle.
delete
DELETE /v1alpha/{name=projects/*/locations/*/resourceBundles/*/releases/*}
Deletes a single Release.
get
GET /v1alpha/{name=projects/*/locations/*/resourceBundles/*/releases/*}
Gets details of a single Release.
list
GET /v1alpha/{parent=projects/*/locations/*/resourceBundles/*}/releases
Lists Releases in a given project and location.
patch
PATCH /v1alpha/{release.name=projects/*/locations/*/resourceBundles/*/releases/*}
Updates the parameters of a single Release.
REST Resource: v1alpha.projects.locations.resourceBundles.releases.variants
Methods
create
POST /v1alpha/{parent=projects/*/locations/*/resourceBundles/*/releases/*}/variants
Creates a new Variant in a given project, location, resource bundle, and release.
delete
DELETE /v1alpha/{name=projects/*/locations/*/resourceBundles/*/releases/*/variants/*}
Deletes a single Variant.
get
GET /v1alpha/{name=projects/*/locations/*/resourceBundles/*/releases/*/variants/*}
Gets details of a single Variant.
list
GET /v1alpha/{parent=projects/*/locations/*/resourceBundles/*/releases/*}/variants
Lists Variants in a given project and location.
patch
PATCH /v1alpha/{variant.name=projects/*/locations/*/resourceBundles/*/releases/*/variants/*}
Updates the parameters of a single Variant.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.fleetPackages
Methods
create
POST /v1/{parent=projects/*/locations/*}/fleetPackages
Creates a new FleetPackage in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/fleetPackages/*}
Deletes a single FleetPackage.
get
GET /v1/{name=projects/*/locations/*/fleetPackages/*}
Gets details of a single FleetPackage.
list
GET /v1/{parent=projects/*/locations/*}/fleetPackages
Lists FleetPackages in a given project and location.
patch
PATCH /v1/{fleetPackage.name=projects/*/locations/*/fleetPackages/*}
Updates the parameters of a single FleetPackage.
REST Resource: v1.projects.locations.fleetPackages.rollouts
Methods
abort
POST /v1/{name=projects/*/locations/*/fleetPackages/*/rollouts/*}:abort
Abort a Rollout.
get
GET /v1/{name=projects/*/locations/*/fleetPackages/*/rollouts/*}
Gets details of a single Rollout.
list
GET /v1/{parent=projects/*/locations/*/fleetPackages/*}/rollouts
Lists Rollouts in a given project, location, and Fleet Package.
resume
POST /v1/{name=projects/*/locations/*/fleetPackages/*/rollouts/*}:resume
Resume a Rollout.
suspend
POST /v1/{name=projects/*/locations/*/fleetPackages/*/rollouts/*}:suspend
Suspend a Rollout.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.resourceBundles
Methods
create
POST /v1/{parent=projects/*/locations/*}/resourceBundles
Creates a new ResourceBundle in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/resourceBundles/*}
Deletes a single ResourceBundle.
get
GET /v1/{name=projects/*/locations/*/resourceBundles/*}
Gets details of a single ResourceBundle.
list
GET /v1/{parent=projects/*/locations/*}/resourceBundles
Lists ResourceBundles in a given project and location.
patch
PATCH /v1/{resourceBundle.name=projects/*/locations/*/resourceBundles/*}
Updates the parameters of a single ResourceBundle.
REST Resource: v1.projects.locations.resourceBundles.releases
Methods
create
POST /v1/{parent=projects/*/locations/*/resourceBundles/*}/releases
Creates a new Release in a given project, location and resource bundle.
delete
DELETE /v1/{name=projects/*/locations/*/resourceBundles/*/releases/*}
Deletes a single Release.
get
GET /v1/{name=projects/*/locations/*/resourceBundles/*/releases/*}
Gets details of a single Release.
list
GET /v1/{parent=projects/*/locations/*/resourceBundles/*}/releases
Lists Releases in a given project and location.
patch
PATCH /v1/{release.name=projects/*/locations/*/resourceBundles/*/releases/*}
Updates the parameters of a single Release.
REST Resource: v1.projects.locations.resourceBundles.releases.variants
Methods
create
POST /v1/{parent=projects/*/locations/*/resourceBundles/*/releases/*}/variants
Creates a new Variant in a given project, location, resource bundle, and release.
delete
DELETE /v1/{name=projects/*/locations/*/resourceBundles/*/releases/*/variants/*}
Deletes a single Variant.
get
GET /v1/{name=projects/*/locations/*/resourceBundles/*/releases/*/variants/*}
Gets details of a single Variant.
list
GET /v1/{parent=projects/*/locations/*/resourceBundles/*/releases/*}/variants
Lists Variants in a given project and location.
patch
PATCH /v1/{variant.name=projects/*/locations/*/resourceBundles/*/releases/*/variants/*}
Updates the parameters of a single Variant.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-28 UTC."],[],[]]
