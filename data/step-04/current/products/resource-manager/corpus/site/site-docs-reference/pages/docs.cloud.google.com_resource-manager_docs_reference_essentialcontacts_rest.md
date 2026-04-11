---
title: "Essential Contacts API \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/reference/essentialcontacts/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/reference/essentialcontacts/rest
  title: "Essential Contacts API \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Reference
Send feedback
Essential Contacts API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1beta1.folders.contacts
REST Resource: v1beta1.organizations.contacts
REST Resource: v1beta1.projects.contacts
REST Resource: v1.folders.contacts
REST Resource: v1.organizations.contacts
REST Resource: v1.projects.contacts
Service: essentialcontacts.googleapis.com
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://essentialcontacts.googleapis.com/$discovery/rest?version=v1
https://essentialcontacts.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://essentialcontacts.googleapis.com
REST Resource: v1beta1.folders.contacts
Methods
compute
GET /v1beta1/{parent=folders/*}/contacts:compute
Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
create
POST /v1beta1/{parent=folders/*}/contacts
Adds a new contact for a resource.
delete
DELETE /v1beta1/{name=folders/*/contacts/*}
Deletes a contact.
get
GET /v1beta1/{name=folders/*/contacts/*}
Gets a single contact.
list
GET /v1beta1/{parent=folders/*}/contacts
Lists the contacts that have been set on a resource.
patch
PATCH /v1beta1/{contact.name=folders/*/contacts/*}
Updates a contact.
sendTestMessage
POST /v1beta1/{resource=folders/*}/contacts:sendTestMessage
Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
REST Resource: v1beta1.organizations.contacts
Methods
compute
GET /v1beta1/{parent=organizations/*}/contacts:compute
Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
create
POST /v1beta1/{parent=organizations/*}/contacts
Adds a new contact for a resource.
delete
DELETE /v1beta1/{name=organizations/*/contacts/*}
Deletes a contact.
get
GET /v1beta1/{name=organizations/*/contacts/*}
Gets a single contact.
list
GET /v1beta1/{parent=organizations/*}/contacts
Lists the contacts that have been set on a resource.
patch
PATCH /v1beta1/{contact.name=organizations/*/contacts/*}
Updates a contact.
sendTestMessage
POST /v1beta1/{resource=organizations/*}/contacts:sendTestMessage
Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
REST Resource: v1beta1.projects.contacts
Methods
compute
GET /v1beta1/{parent=projects/*}/contacts:compute
Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
create
POST /v1beta1/{parent=projects/*}/contacts
Adds a new contact for a resource.
delete
DELETE /v1beta1/{name=projects/*/contacts/*}
Deletes a contact.
get
GET /v1beta1/{name=projects/*/contacts/*}
Gets a single contact.
list
GET /v1beta1/{parent=projects/*}/contacts
Lists the contacts that have been set on a resource.
patch
PATCH /v1beta1/{contact.name=projects/*/contacts/*}
Updates a contact.
sendTestMessage
POST /v1beta1/{resource=projects/*}/contacts:sendTestMessage
Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
REST Resource: v1.folders.contacts
Methods
compute
GET /v1/{parent=folders/*}/contacts:compute
Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
create
POST /v1/{parent=folders/*}/contacts
Adds a new contact for a resource.
delete
DELETE /v1/{name=folders/*/contacts/*}
Deletes a contact.
get
GET /v1/{name=folders/*/contacts/*}
Gets a single contact.
list
GET /v1/{parent=folders/*}/contacts
Lists the contacts that have been set on a resource.
patch
PATCH /v1/{contact.name=folders/*/contacts/*}
Updates a contact.
sendTestMessage
POST /v1/{resource=folders/*}/contacts:sendTestMessage
Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
REST Resource: v1.organizations.contacts
Methods
compute
GET /v1/{parent=organizations/*}/contacts:compute
Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
create
POST /v1/{parent=organizations/*}/contacts
Adds a new contact for a resource.
delete
DELETE /v1/{name=organizations/*/contacts/*}
Deletes a contact.
get
GET /v1/{name=organizations/*/contacts/*}
Gets a single contact.
list
GET /v1/{parent=organizations/*}/contacts
Lists the contacts that have been set on a resource.
patch
PATCH /v1/{contact.name=organizations/*/contacts/*}
Updates a contact.
sendTestMessage
POST /v1/{resource=organizations/*}/contacts:sendTestMessage
Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
REST Resource: v1.projects.contacts
Methods
compute
GET /v1/{parent=projects/*}/contacts:compute
Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
create
POST /v1/{parent=projects/*}/contacts
Adds a new contact for a resource.
delete
DELETE /v1/{name=projects/*/contacts/*}
Deletes a contact.
get
GET /v1/{name=projects/*/contacts/*}
Gets a single contact.
list
GET /v1/{parent=projects/*}/contacts
Lists the contacts that have been set on a resource.
patch
PATCH /v1/{contact.name=projects/*/contacts/*}
Updates a contact.
sendTestMessage
POST /v1/{resource=projects/*}/contacts:sendTestMessage
Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-18 UTC."],[],[]]
