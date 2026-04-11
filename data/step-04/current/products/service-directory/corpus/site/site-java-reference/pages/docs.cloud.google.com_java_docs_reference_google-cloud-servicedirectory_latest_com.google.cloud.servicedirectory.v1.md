---
title: "Package com.google.cloud.servicedirectory.v1 (2.89.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-servicedirectory/latest/com.google.cloud.servicedirectory.v1
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-servicedirectory/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-servicedirectory/latest/com.google.cloud.servicedirectory.v1
  title: "Package com.google.cloud.servicedirectory.v1 (2.89.0) \_|\_ Java client\
    \ libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Package com.google.cloud.servicedirectory.v1 (2.89.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.89.0 (latest)
2.88.0
2.86.0
2.84.0
2.83.0
2.81.0
2.79.0
2.77.0
2.76.0
2.75.0
2.74.0
2.73.0
2.71.0
2.69.0
2.68.0
2.65.0
2.64.0
2.63.0
2.61.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.50.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.38.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.25.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.5
2.2.7
GitHub Repository
RPC Documentation
REST Documentation
Client Classes
Client classes are the main entry point to using a package.
They contain several variations of Java methods for each of the API's methods.
Client
Description
com. google. cloud. servicedirectory. v1. Lookup Service Client
Service Description: Service Directory API for looking up service data at runtime.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
com. google. cloud. servicedirectory. v1. Registration Service Client
Service Description: Service Directory API for registering services. It defines the following
resource model:
- The API has a collection of Namespace
Settings Classes
Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
Settings
Description
com. google. cloud. servicedirectory. v1. Lookup Service Settings
Settings class to configure an instance of LookupServiceClient .
The default instance has everything set to sensible defaults:
com. google. cloud. servicedirectory. v1. Registration Service Settings
Settings class to configure an instance of RegistrationServiceClient .
The default instance has everything set to sensible defaults:
Classes
Class
Description
com. google. cloud. servicedirectory. v1. Create Endpoint Request
The request message for
RegistrationService.CreateEndpoint .
com. google. cloud. servicedirectory. v1. Create Endpoint Request. Builder
The request message for
RegistrationService.CreateEndpoint .
com. google. cloud. servicedirectory. v1. Create Namespace Request
The request message for
RegistrationService.CreateNamespace .
com. google. cloud. servicedirectory. v1. Create Namespace Request. Builder
The request message for
RegistrationService.CreateNamespace .
com. google. cloud. servicedirectory. v1. Create Service Request
The request message for
RegistrationService.CreateService .
com. google. cloud. servicedirectory. v1. Create Service Request. Builder
The request message for
RegistrationService.CreateService .
com. google. cloud. servicedirectory. v1. Delete Endpoint Request
The request message for
RegistrationService.DeleteEndpoint .
com. google. cloud. servicedirectory. v1. Delete Endpoint Request. Builder
The request message for
RegistrationService.DeleteEndpoint .
com. google. cloud. servicedirectory. v1. Delete Namespace Request
The request message for
RegistrationService.DeleteNamespace .
com. google. cloud. servicedirectory. v1. Delete Namespace Request. Builder
The request message for
RegistrationService.DeleteNamespace .
com. google. cloud. servicedirectory. v1. Delete Service Request
The request message for
RegistrationService.DeleteService .
com. google. cloud. servicedirectory. v1. Delete Service Request. Builder
The request message for
RegistrationService.DeleteService .
com. google. cloud. servicedirectory. v1. Endpoint
An individual endpoint that provides a
service . The service must
already exist to create an endpoint.
com. google. cloud. servicedirectory. v1. Endpoint. Builder
An individual endpoint that provides a
service . The service must
already exist to create an endpoint.
com. google. cloud. servicedirectory. v1. Endpoint Name
com. google. cloud. servicedirectory. v1. Endpoint Name. Builder
Builder for
projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}/endpoints/{endpoint}.
com. google. cloud. servicedirectory. v1. Endpoint Proto
com. google. cloud. servicedirectory. v1. Get Endpoint Request
The request message for
RegistrationService.GetEndpoint .
This should not be used to lookup endpoints at runtime. Instead, use
com. google. cloud. servicedirectory. v1. Get Endpoint Request. Builder
The request message for
RegistrationService.GetEndpoint .
This should not be used to lookup endpoints at runtime. Instead, use
com. google. cloud. servicedirectory. v1. Get Namespace Request
The request message for
RegistrationService.GetNamespace .
com. google. cloud. servicedirectory. v1. Get Namespace Request. Builder
The request message for
RegistrationService.GetNamespace .
com. google. cloud. servicedirectory. v1. Get Service Request
The request message for
RegistrationService.GetService .
This should not be used for looking up a service. Instead, use the resolve
com. google. cloud. servicedirectory. v1. Get Service Request. Builder
The request message for
RegistrationService.GetService .
This should not be used for looking up a service. Instead, use the resolve
com. google. cloud. servicedirectory. v1. List Endpoints Request
The request message for
RegistrationService.ListEndpoints .
com. google. cloud. servicedirectory. v1. List Endpoints Request. Builder
The request message for
RegistrationService.ListEndpoints .
com. google. cloud. servicedirectory. v1. List Endpoints Response
The response message for
RegistrationService.ListEndpoints .
com. google. cloud. servicedirectory. v1. List Endpoints Response. Builder
The response message for
RegistrationService.ListEndpoints .
com. google. cloud. servicedirectory. v1. List Namespaces Request
The request message for
RegistrationService.ListNamespaces .
com. google. cloud. servicedirectory. v1. List Namespaces Request. Builder
The request message for
RegistrationService.ListNamespaces .
com. google. cloud. servicedirectory. v1. List Namespaces Response
The response message for
RegistrationService.ListNamespaces .
com. google. cloud. servicedirectory. v1. List Namespaces Response. Builder
The response message for
RegistrationService.ListNamespaces .
com. google. cloud. servicedirectory. v1. List Services Request
The request message for
RegistrationService.ListServices .
com. google. cloud. servicedirectory. v1. List Services Request. Builder
The request message for
RegistrationService.ListServices .
com. google. cloud. servicedirectory. v1. List Services Response
The response message for
RegistrationService.ListServices .
com. google. cloud. servicedirectory. v1. List Services Response. Builder
The response message for
RegistrationService.ListServices .
com. google. cloud. servicedirectory. v1. Location Name
com. google. cloud. servicedirectory. v1. Location Name. Builder
Builder for projects/{project}/locations/{location}.
com. google. cloud. servicedirectory. v1. Lookup Service Client. List Locations Fixed Size Collection
com. google. cloud. servicedirectory. v1. Lookup Service Client. List Locations Page
com. google. cloud. servicedirectory. v1. Lookup Service Client. List Locations Paged Response
com. google. cloud. servicedirectory. v1. Lookup Service Grpc
Service Directory API for looking up service data at runtime.
com. google. cloud. servicedirectory. v1. Lookup Service Grpc. Lookup Service Impl Base
Base class for the server implementation of the service LookupService.
Service Directory API for looking up service data at runtime.
com. google. cloud. servicedirectory. v1. Lookup Service Proto
com. google. cloud. servicedirectory. v1. Lookup Service Settings. Builder
Builder for LookupServiceSettings.
com. google. cloud. servicedirectory. v1. Namespace
A container for services .
Namespaces allow administrators to group services together and define
permissions for a collection of services.
com. google. cloud. servicedirectory. v1. Namespace. Builder
A container for services .
Namespaces allow administrators to group services together and define
permissions for a collection of services.
com. google. cloud. servicedirectory. v1. Namespace Name
com. google. cloud. servicedirectory. v1. Namespace Name. Builder
Builder for projects/{project}/locations/{location}/namespaces/{namespace}.
com. google. cloud. servicedirectory. v1. Namespace Proto
com. google. cloud. servicedirectory. v1. Registration Service Client. List Endpoints Fixed Size Collection
com. google. cloud. servicedirectory. v1. Registration Service Client. List Endpoints Page
com. google. cloud. servicedirectory. v1. Registration Service Client. List Endpoints Paged Response
com. google. cloud. servicedirectory. v1. Registration Service Client. List Locations Fixed Size Collection
com. google. cloud. servicedirectory. v1. Registration Service Client. List Locations Page
com. google. cloud. servicedirectory. v1. Registration Service Client. List Locations Paged Response
com. google. cloud. servicedirectory. v1. Registration Service Client. List Namespaces Fixed Size Collection
com. google. cloud. servicedirectory. v1. Registration Service Client. List Namespaces Page
com. google. cloud. servicedirectory. v1. Registration Service Client. List Namespaces Paged Response
com. google. cloud. servicedirectory. v1. Registration Service Client. List Services Fixed Size Collection
com. google. cloud. servicedirectory. v1. Registration Service Client. List Services Page
com. google. cloud. servicedirectory. v1. Registration Service Client. List Services Paged Response
com. google. cloud. servicedirectory. v1. Registration Service Grpc
Service Directory API for registering services. It defines the following
resource model:
- The API has a collection of
com. google. cloud. servicedirectory. v1. Registration Service Grpc. Registration Service Impl Base
Base class for the server implementation of the service RegistrationService.
Service Directory API for registering services. It defines the following
com. google. cloud. servicedirectory. v1. Registration Service Proto
com. google. cloud. servicedirectory. v1. Registration Service Settings. Builder
Builder for RegistrationServiceSettings.
com. google. cloud. servicedirectory. v1. Resolve Service Request
The request message for
LookupService.ResolveService .
Looks up a service by its name, returns the service and its endpoints.
com. google. cloud. servicedirectory. v1. Resolve Service Request. Builder
The request message for
LookupService.ResolveService .
Looks up a service by its name, returns the service and its endpoints.
com. google. cloud. servicedirectory. v1. Resolve Service Response
The response message for
LookupService.ResolveService .
com. google. cloud. servicedirectory. v1. Resolve Service Response. Builder
The response message for
LookupService.ResolveService .
com. google. cloud. servicedirectory. v1. Service
An individual service. A service contains a name and optional metadata.
A service must exist before
endpoints can be
com. google. cloud. servicedirectory. v1. Service. Builder
An individual service. A service contains a name and optional metadata.
A service must exist before
endpoints can be
com. google. cloud. servicedirectory. v1. Service Name
com. google. cloud. servicedirectory. v1. Service Name. Builder
Builder for projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
com. google. cloud. servicedirectory. v1. Service Proto
com. google. cloud. servicedirectory. v1. Update Endpoint Request
The request message for
RegistrationService.UpdateEndpoint .
com. google. cloud. servicedirectory. v1. Update Endpoint Request. Builder
The request message for
RegistrationService.UpdateEndpoint .
com. google. cloud. servicedirectory. v1. Update Namespace Request
The request message for
RegistrationService.UpdateNamespace .
com. google. cloud. servicedirectory. v1. Update Namespace Request. Builder
The request message for
RegistrationService.UpdateNamespace .
com. google. cloud. servicedirectory. v1. Update Service Request
The request message for
RegistrationService.UpdateService .
com. google. cloud. servicedirectory. v1. Update Service Request. Builder
The request message for
RegistrationService.UpdateService .
Interfaces
Interface
Description
com. google. cloud. servicedirectory. v1. Create Endpoint Request Or Builder
com. google. cloud. servicedirectory. v1. Create Namespace Request Or Builder
com. google. cloud. servicedirectory. v1. Create Service Request Or Builder
com. google. cloud. servicedirectory. v1. Delete Endpoint Request Or Builder
com. google. cloud. servicedirectory. v1. Delete Namespace Request Or Builder
com. google. cloud. servicedirectory. v1. Delete Service Request Or Builder
com. google. cloud. servicedirectory. v1. Endpoint Or Builder
com. google. cloud. servicedirectory. v1. Get Endpoint Request Or Builder
com. google. cloud. servicedirectory. v1. Get Namespace Request Or Builder
com. google. cloud. servicedirectory. v1. Get Service Request Or Builder
com. google. cloud. servicedirectory. v1. List Endpoints Request Or Builder
com. google. cloud. servicedirectory. v1. List Endpoints Response Or Builder
com. google. cloud. servicedirectory. v1. List Namespaces Request Or Builder
com. google. cloud. servicedirectory. v1. List Namespaces Response Or Builder
com. google. cloud. servicedirectory. v1. List Services Request Or Builder
com. google. cloud. servicedirectory. v1. List Services Response Or Builder
com. google. cloud. servicedirectory. v1. Lookup Service Grpc. Async Service
Service Directory API for looking up service data at runtime.
com. google. cloud. servicedirectory. v1. Namespace Or Builder
com. google. cloud. servicedirectory. v1. Registration Service Grpc. Async Service
Service Directory API for registering services. It defines the following
resource model:
- The API has a collection of
com. google. cloud. servicedirectory. v1. Resolve Service Request Or Builder
com. google. cloud. servicedirectory. v1. Resolve Service Response Or Builder
com. google. cloud. servicedirectory. v1. Service Or Builder
com. google. cloud. servicedirectory. v1. Update Endpoint Request Or Builder
com. google. cloud. servicedirectory. v1. Update Namespace Request Or Builder
com. google. cloud. servicedirectory. v1. Update Service Request Or Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
