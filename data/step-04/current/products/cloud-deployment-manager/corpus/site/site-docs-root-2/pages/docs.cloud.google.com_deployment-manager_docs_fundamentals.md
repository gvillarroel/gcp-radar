---
title: "Deployment Manager Fundamentals \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/fundamentals
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/fundamentals
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/fundamentals
  title: "Deployment Manager Fundamentals \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Guides
Send feedback
Deployment Manager Fundamentals
Stay organized with collections
Save and categorize content based on your preferences.
The following components are the fundamentals of Deployment Manager.
Configuration
A configuration describes all the resources you want for a single deployment.
A configuration is a file written in YAML syntax that lists each of the resources
you want to create and its respective resource properties. A configuration must
contain a resources: section followed by the list of resources to create.
Each resource must contain three components:
name - A user-defined string to identify this resource such as my-vm ,
project-data-disk , the-test-network .
type - The type of the resource being deployed such as compute.v1.instance ,
compute.v1.disk . The base resource types are described and listed on the
Supported Resource Types
documentation.
properties - The parameters for this resource type. They must match the
properties for the type such as zone: asia-east1-a , boot: true .
This is an example configuration:
resources :
- name : the - first - vm
type : compute . v1 . instance
properties :
zone : us - central1 - a
machineType : https : //www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-a/machineTypes/f1-micro
disks :
- deviceName : boot
type : PERSISTENT
boot : true
autoDelete : true
initializeParams :
sourceImage : https : //www.googleapis.com/compute/v1/projects/debian-cloud/global/images/debian-7-wheezy-v20150423
networkInterfaces :
- network : https : //www.googleapis.com/compute/v1/projects/myproject/global/networks/default
accessConfigs :
- name : External NAT
type : ONE_TO_ONE_NAT
Templates
A configuration can contain templates, which are essentially parts of the
configuration file that has been abstracted into individual building blocks. After
you create a template, you can reuse them across deployments as necessary.
Similarly, if you find yourself rewriting configurations that share very similar
properties, you can abstract the shared parts into templates. Templates are
much more flexible than individual configuration files and intended to support
easy portability across deployments.
A template file is written in either Python or Jinja2. The Deployment Manager
system will interpret each template recursively and inline the results within
the configuration file. As such, the interpretation of each template eventually
results in the same YAML syntax for resources as that defined above for the
configuration file itself.
To create a simple template, read
Creating a Basic Template .
Configurations are described as fully-expanded or unexpanded. A fully-expanded
configuration describes all resources and properties of the deployment,
including any content from imported template files. For example, you would
supply an unexpanded configuration that uses a template like so:
imports :
- path : vm_template . jinja
resources :
- name : vm - instance
type : vm_template . jinja
properties :
zone : us - central1 - a
project : myproject
Once expanded, your configuration file would contain the contents of all your
templates, like so:
resources :
- name : the - first - vm
type : compute . v1 . instance
properties :
zone : us - central1 - a
machineType : https : //www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-a/machineTypes/f1-micro
disks :
- deviceName : boot
type : PERSISTENT
boot : true
autoDelete : true
initializeParams :
sourceImage : https : //www.googleapis.com/compute/v1/projects/debian-cloud/global/images/debian-7-wheezy-v20150423
networkInterfaces :
- network : https : //www.googleapis.com/compute/v1/projects/myproject/global/networks/default
accessConfigs :
- name : External NAT
type : ONE_TO_ONE_NAT
Resource
A resource represents a single API resource. This can be an API resource provided
by a Google-managed base type or an API resource provided by a Type Provider.
For example, a Compute Engine instance is a single resource, a Cloud SQL
instance is a single resource, and so on.
To specify a resource, you provide a Type for that resource. See
the Types section below to learn more about types.
Types
To create a resource in Deployment Manager, you must specify a type . A type
can represent a single API resource, known as a base type, or a set of
resources, known as a composite type, that will be created as part of your
deployment.
For example, to create a Compute Engine VM instance, specify the corresponding
base type like so in your configuration:
resources :
- name : the - first - vm
type : compute . v1 . instance # The type of resource to deploy
...
Deployment Manager offers a list of base types maintained by Google that you
can use immediately. You can find a list of these types in the
Supported resource types and properties
documentation.
Base types and type providers
A base type creates a single primitive resource. For example, Google-owned
base types include compute.v1.instance , storage.v1.bucket , and
sqladmin.v1beta4.database , all of which are served by the respective Compute
Engine V1 API, Cloud Storage V1 API, and the Cloud SQL v1beta4 Admin API.
Base types are supported by a RESTful API that supports Create, Read, Update,
and Delete (CRUD) operations. You can also create additional base types by
adding a type provider if the Google-owned types alone do not meet
your needs. Creating a type provider exposes all resources of an API as base
types that you can use. To create a type provider, you must supply an
API descriptor document, which can be an OpenAPI specification
or a
Google Discovery ,
adjust any necessary input mappings
for the API, and register the type with Deployment Manager. Once created, you
and other users with access to your project can use the types provided by the
provider.
When you add a type provider, all resources that are provided by the API and
supported by a RESTful interface with
Create, Read, Update, and Delete (CRUD)
operations will be exposed as types that you can use in your deployment.
Creating your own type provider is an advanced scenario, and Google recommends
that you do this only if you are very familiar with the API you want
to integrate.
To learn how to create a type provider, see
Integrating with Deployment Manager .
When you call a base type in your templates or configurations, you use one of the
following syntaxes depending on the type.
For Google-managed base types, use:
type : [ API ] . [ VERSION ] . [ RESOURCE ]
For example, compute.v1.instance .
For Google-managed type providers (beta), use:
type : gcp - types /[ PROVIDER ] : [ RESOURCE ]
For a list of supported type providers, see
Supported Google Cloud type providers .
For base types provided by a type provider, use:
type : [ PROJECT_ID ]/[ TYPE_PROVIDER ] : [ COLLECTION ]
Where [COLLECTION] is the path to the API resource to deploy.
Composite types
A composite type contains one or more templates that are
preconfigured to work together. These templates expand to a set of
base types when deployed in a deployment. Composite types are essentially
hosted templates that you can add to Deployment Manager. You can create
composite types for common solutions so that the solution is easily reusable, or
create complex setups that you can reuse in the future.
For example, you can create a composite type that deploys a network load
balanced managed instance group. A network load balancer requires multiple
Google Cloud resources and some configuration between resources, so you
can set up these resources in a configuration once and register the type with
Deployment Manager. Afterwards, you and other users with access to your project
can call that type and deploy it in future configurations.
To call a composite type in your configuration, use:
type : [ PROJECT_ID ]/ composite : [ TYPE_NAME ]
For example:
resources :
- name : my - composite - type
type : myproject / composite : example - composite - type
To learn how to create a composite type, read
Adding a Composite Type to Deployment Manager .
Manifest
A manifest is a read-only object that contains the original configuration you
provided, including any imported templates, and also contains the fully-expanded
resource list, created by Deployment Manager. Each time you update a deployment,
Deployment Manager generates a new manifest file to reflect the new state of the
deployment. When troubleshooting an issue with a deployment, it is useful
to view the manifest.
For more information, see
Viewing a Manifest .
Deployment
A deployment is a collection of resources that are deployed and managed
together, using a configuration.
For more information, see
Creating a Deployment .
What's next
Go through the Deployment Manager quickstart .
Walk through the Step-by-step Guide .
Learn about configurations and
deployments .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
