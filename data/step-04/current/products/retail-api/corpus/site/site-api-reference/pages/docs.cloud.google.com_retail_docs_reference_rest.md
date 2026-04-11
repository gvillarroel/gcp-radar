---
title: "Vertex AI Search for commerce API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/retail/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/retail/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/retail/docs/reference/rest
  title: "Vertex AI Search for commerce API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Vertex AI Search for commerce
Reference
Send feedback
Vertex AI Search for commerce API
Stay organized with collections
Save and categorize content based on your preferences.
Vertex AI Search for commerce API is made up of Retail Search, Browse and Recommendations. These discovery AI solutions help you implement personalized search, browse and recommendations, based on machine learning models, across your websites and mobile applications.
REST Resource: v2beta.projects
REST Resource: v2beta.projects.locations.catalogs
REST Resource: v2beta.projects.locations.catalogs.attributesConfig
REST Resource: v2beta.projects.locations.catalogs.branches.operations
REST Resource: v2beta.projects.locations.catalogs.branches.products
REST Resource: v2beta.projects.locations.catalogs.completionData
REST Resource: v2beta.projects.locations.catalogs.controls
REST Resource: v2beta.projects.locations.catalogs.generativeQuestion
REST Resource: v2beta.projects.locations.catalogs.generativeQuestions
REST Resource: v2beta.projects.locations.catalogs.models
REST Resource: v2beta.projects.locations.catalogs.operations
REST Resource: v2beta.projects.locations.catalogs.placements
REST Resource: v2beta.projects.locations.catalogs.servingConfigs
REST Resource: v2beta.projects.locations.catalogs.userEvents
REST Resource: v2beta.projects.locations.operations
REST Resource: v2beta.projects.operations
REST Resource: v2alpha.projects
REST Resource: v2alpha.projects.locations.catalogs
REST Resource: v2alpha.projects.locations.catalogs.attributesConfig
REST Resource: v2alpha.projects.locations.catalogs.branches
REST Resource: v2alpha.projects.locations.catalogs.branches.operations
REST Resource:
v2alpha.projects.locations.catalogs.branches.places.operations
REST Resource: v2alpha.projects.locations.catalogs.branches.products
REST Resource: v2alpha.projects.locations.catalogs.completionData
REST Resource: v2alpha.projects.locations.catalogs.controls
REST Resource: v2alpha.projects.locations.catalogs.generativeQuestion
REST Resource: v2alpha.projects.locations.catalogs.generativeQuestions
REST Resource:
v2alpha.projects.locations.catalogs.merchantCenterAccountLinks
REST Resource: v2alpha.projects.locations.catalogs.models
REST Resource: v2alpha.projects.locations.catalogs.operations
REST Resource: v2alpha.projects.locations.catalogs.placements
REST Resource: v2alpha.projects.locations.catalogs.servingConfigs
REST Resource: v2alpha.projects.locations.catalogs.userEvents
REST Resource: v2alpha.projects.locations.operations
REST Resource: v2alpha.projects.operations
REST Resource: v2alpha.projects.retailProject
REST Resource: v2.projects.locations.catalogs
REST Resource: v2.projects.locations.catalogs.attributesConfig
REST Resource: v2.projects.locations.catalogs.branches.operations
REST Resource: v2.projects.locations.catalogs.branches.products
REST Resource: v2.projects.locations.catalogs.completionData
REST Resource: v2.projects.locations.catalogs.controls
REST Resource: v2.projects.locations.catalogs.generativeQuestion
REST Resource: v2.projects.locations.catalogs.generativeQuestions
REST Resource: v2.projects.locations.catalogs.models
REST Resource: v2.projects.locations.catalogs.operations
REST Resource: v2.projects.locations.catalogs.placements
REST Resource: v2.projects.locations.catalogs.servingConfigs
REST Resource: v2.projects.locations.catalogs.userEvents
REST Resource: v2.projects.locations.operations
REST Resource: v2.projects.operations
Service: retail.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://retail.googleapis.com/$discovery/rest?version=v2
https://retail.googleapis.com/$discovery/rest?version=v2beta
https://retail.googleapis.com/$discovery/rest?version=v2alpha
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://retail.googleapis.com
REST Resource: v2beta.projects
Methods
getAlertConfig
GET /v2beta/{name=projects/*/alertConfig}
Get the AlertConfig of the requested project.
updateAlertConfig
PATCH /v2beta/{alertConfig.name=projects/*/alertConfig}
Update the alert config of the requested project.
REST Resource: v2beta.projects.locations.catalogs
Methods
completeQuery
GET /v2beta/{catalog=projects/*/locations/*/catalogs/*}:completeQuery
Completes the specified prefix with keyword suggestions.
exportAnalyticsMetrics
POST /v2beta/{catalog=projects/*/locations/*/catalogs/*}:exportAnalyticsMetrics
Exports analytics metrics.
getAttributesConfig
GET /v2beta/{name=projects/*/locations/*/catalogs/*/attributesConfig}
Gets an AttributesConfig .
getCompletionConfig
GET /v2beta/{name=projects/*/locations/*/catalogs/*/completionConfig}
Gets a CompletionConfig .
getConversationalSearchCustomizationConfig
GET /v2beta/{name=projects/*/locations/*/catalogs/*}/conversationalSearchCustomizationConfig
Returns the conversational search customization config for a given catalog.
getDefaultBranch
GET /v2beta/{catalog=projects/*/locations/*/catalogs/*}:getDefaultBranch
Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
getGenerativeQuestionFeature
GET /v2beta/{catalog=projects/*/locations/*/catalogs/*}/generativeQuestionFeature
Manages overal generative question feature state -- enables toggling feature on and off.
list
GET /v2beta/{parent=projects/*/locations/*}/catalogs
Lists all the Catalog s associated with the project.
patch
PATCH /v2beta/{catalog.name=projects/*/locations/*/catalogs/*}
Updates the Catalog s.
setDefaultBranch
POST /v2beta/{catalog=projects/*/locations/*/catalogs/*}:setDefaultBranch
Set a specified branch id as default branch.
updateAttributesConfig
PATCH /v2beta/{attributesConfig.name=projects/*/locations/*/catalogs/*/attributesConfig}
Updates the AttributesConfig .
updateCompletionConfig
PATCH /v2beta/{completionConfig.name=projects/*/locations/*/catalogs/*/completionConfig}
Updates the CompletionConfig s.
updateConversationalSearchCustomizationConfig
PATCH /v2beta/{conversationalSearchCustomizationConfig.catalog=projects/*/locations/*/catalogs/*}/conversationalSearchCustomizationConfig
Updates the conversational search customization config for a given catalog.
updateGenerativeQuestion
PATCH /v2beta/{generativeQuestionConfig.catalog=projects/*/locations/*/catalogs/*}/generativeQuestion
Allows management of individual questions.
updateGenerativeQuestionFeature
PATCH /v2beta/{generativeQuestionsFeatureConfig.catalog=projects/*/locations/*/catalogs/*}/generativeQuestionFeature
Manages overal generative question feature state -- enables toggling feature on and off.
REST Resource: v2beta.projects.locations.catalogs.attributesConfig
Methods
addCatalogAttribute
POST /v2beta/{attributesConfig=projects/*/locations/*/catalogs/*/attributesConfig}:addCatalogAttribute
Adds the specified CatalogAttribute to the AttributesConfig .
batchRemoveCatalogAttributes
POST /v2beta/{attributesConfig=projects/*/locations/*/catalogs/*/attributesConfig}:batchRemoveCatalogAttributes
Removes all specified CatalogAttribute s from the AttributesConfig .
removeCatalogAttribute
POST /v2beta/{attributesConfig=projects/*/locations/*/catalogs/*/attributesConfig}:removeCatalogAttribute
Removes the specified CatalogAttribute from the AttributesConfig .
replaceCatalogAttribute
POST /v2beta/{attributesConfig=projects/*/locations/*/catalogs/*/attributesConfig}:replaceCatalogAttribute
Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key .
REST Resource: v2beta.projects.locations.catalogs.branches.operations
Methods
get
GET /v2beta/{name=projects/*/locations/*/catalogs/*/branches/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v2beta.projects.locations.catalogs.branches.products
Methods
addFulfillmentPlaces
POST /v2beta/{product=projects/*/locations/*/catalogs/*/branches/*/products/**}:addFulfillmentPlaces
We recommend that you use the ProductService.AddLocalInventories method instead of the ProductService.AddFulfillmentPlaces method.
addLocalInventories
POST /v2beta/{product=projects/*/locations/*/catalogs/*/branches/*/products/**}:addLocalInventories
Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field.
create
POST /v2beta/{parent=projects/*/locations/*/catalogs/*/branches/*}/products
Creates a Product .
delete
DELETE /v2beta/{name=projects/*/locations/*/catalogs/*/branches/*/products/**}
Deletes a Product .
export
POST /v2beta/{parent=projects/*/locations/*/catalogs/*/branches/*}/products:export
Exports multiple Product s.
get
GET /v2beta/{name=projects/*/locations/*/catalogs/*/branches/*/products/**}
Gets a Product .
import
POST /v2beta/{parent=projects/*/locations/*/catalogs/*/branches/*}/products:import
Bulk import of multiple Product s.
list
GET /v2beta/{parent=projects/*/locations/*/catalogs/*/branches/*}/products
Gets a list of Product s.
patch
PATCH /v2beta/{product.name=projects/*/locations/*/catalogs/*/branches/*/products/**}
Updates a Product .
purge
POST /v2beta/{parent=projects/*/locations/*/catalogs/*/branches/*}/products:purge
Permanently deletes all selected Product s under a branch.
removeFulfillmentPlaces
POST /v2beta/{product=projects/*/locations/*/catalogs/*/branches/*/products/**}:removeFulfillmentPlaces
We recommend that you use the ProductService.RemoveLocalInventories method instead of the ProductService.RemoveFulfillmentPlaces method.
removeLocalInventories
POST /v2beta/{product=projects/*/locations/*/catalogs/*/branches/*/products/**}:removeLocalInventories
Remove local inventory information for a Product at a list of places at a removal timestamp.
setInventory
POST /v2beta/{inventory.name=projects/*/locations/*/catalogs/*/branches/*/products/**}:setInventory
Updates inventory information for a Product while respecting the last update timestamps of each inventory field.
REST Resource: v2beta.projects.locations.catalogs.completionData
Methods
import
POST /v2beta/{parent=projects/*/locations/*/catalogs/*}/completionData:import
Bulk import of processed completion dataset.
REST Resource: v2beta.projects.locations.catalogs.controls
Methods
create
POST /v2beta/{parent=projects/*/locations/*/catalogs/*}/controls
Creates a Control.
delete
DELETE /v2beta/{name=projects/*/locations/*/catalogs/*/controls/*}
Deletes a Control.
get
GET /v2beta/{name=projects/*/locations/*/catalogs/*/controls/*}
Gets a Control.
list
GET /v2beta/{parent=projects/*/locations/*/catalogs/*}/controls
Lists all Controls by their parent Catalog .
patch
PATCH /v2beta/{control.name=projects/*/locations/*/catalogs/*/controls/*}
Updates a Control.
REST Resource: v2beta.projects.locations.catalogs.generativeQuestion
Methods
batchUpdate
POST /v2beta/{parent=projects/*/locations/*/catalogs/*}/generativeQuestion:batchUpdate
Allows management of multiple questions.
REST Resource: v2beta.projects.locations.catalogs.generativeQuestions
Methods
list
GET /v2beta/{parent=projects/*/locations/*/catalogs/*}/generativeQuestions
Returns all questions for a given catalog.
REST Resource: v2beta.projects.locations.catalogs.models
Methods
create
POST /v2beta/{parent=projects/*/locations/*/catalogs/*}/models
Creates a new model.
delete
DELETE /v2beta/{name=projects/*/locations/*/catalogs/*/models/*}
Deletes an existing model.
get
GET /v2beta/{name=projects/*/locations/*/catalogs/*/models/*}
Gets a model.
list
GET /v2beta/{parent=projects/*/locations/*/catalogs/*}/models
Lists all the models linked to this event store.
patch
PATCH /v2beta/{model.name=projects/*/locations/*/catalogs/*/models/*}
Update of model metadata.
pause
POST /v2beta/{name=projects/*/locations/*/catalogs/*/models/*}:pause
Pauses the training of an existing model.
resume
POST /v2beta/{name=projects/*/locations/*/catalogs/*/models/*}:resume
Resumes the training of an existing model.
tune
POST /v2beta/{name=projects/*/locations/*/catalogs/*/models/*}:tune
Tunes an existing model.
REST Resource: v2beta.projects.locations.catalogs.operations
Methods
get
GET /v2beta/{name=projects/*/locations/*/catalogs/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2beta/{name=projects/*/locations/*/catalogs/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2beta.projects.locations.catalogs.placements
Methods
conversationalSearch
POST /v2beta/{placement=projects/*/locations/*/catalogs/*/placements/*}:conversationalSearch
Performs a conversational search.
predict
POST /v2beta/{placement=projects/*/locations/*/catalogs/*/placements/*}:predict
Makes a recommendation prediction.
search
POST /v2beta/{placement=projects/*/locations/*/catalogs/*/placements/*}:search
Performs a search.
REST Resource: v2beta.projects.locations.catalogs.servingConfigs
Methods
addControl
POST /v2beta/{servingConfig=projects/*/locations/*/catalogs/*/servingConfigs/*}:addControl
Enables a Control on the specified ServingConfig.
conversationalSearch
POST /v2beta/{placement=projects/*/locations/*/catalogs/*/servingConfigs/*}:conversationalSearch
Performs a conversational search.
create
POST /v2beta/{parent=projects/*/locations/*/catalogs/*}/servingConfigs
Creates a ServingConfig.
delete
DELETE /v2beta/{name=projects/*/locations/*/catalogs/*/servingConfigs/*}
Deletes a ServingConfig.
get
GET /v2beta/{name=projects/*/locations/*/catalogs/*/servingConfigs/*}
Gets a ServingConfig.
list
GET /v2beta/{parent=projects/*/locations/*/catalogs/*}/servingConfigs
Lists all ServingConfigs linked to this catalog.
patch
PATCH /v2beta/{servingConfig.name=projects/*/locations/*/catalogs/*/servingConfigs/*}
Updates a ServingConfig.
predict
POST /v2beta/{placement=projects/*/locations/*/catalogs/*/servingConfigs/*}:predict
Makes a recommendation prediction.
removeControl
POST /v2beta/{servingConfig=projects/*/locations/*/catalogs/*/servingConfigs/*}:removeControl
Disables a Control on the specified ServingConfig.
search
POST /v2beta/{placement=projects/*/locations/*/catalogs/*/servingConfigs/*}:search
Performs a search.
REST Resource: v2beta.projects.locations.catalogs.userEvents
Methods
collect
GET /v2beta/{parent=projects/*/locations/*/catalogs/*}/userEvents:collect
Writes a single user event from the browser.
export
POST /v2beta/{parent=projects/*/locations/*/catalogs/*}/userEvents:export
Exports user events.
import
POST /v2beta/{parent=projects/*/locations/*/catalogs/*}/userEvents:import
Bulk import of User events.
purge
POST /v2beta/{parent=projects/*/locations/*/catalogs/*}/userEvents:purge
Deletes permanently all user events specified by the filter provided.
rejoin
POST /v2beta/{parent=projects/*/locations/*/catalogs/*}/userEvents:rejoin
Starts a user-event rejoin operation with latest product catalog.
write
POST /v2beta/{parent=projects/*/locations/*/catalogs/*}/userEvents:write
Writes a single user event.
REST Resource: v2beta.projects.locations.operations
Methods
get
GET /v2beta/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2beta/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2beta.projects.operations
Methods
get
GET /v2beta/{name=projects/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2beta/{name=projects/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2alpha.projects
Methods
enrollSolution
POST /v2alpha/{project=projects/*}:enrollSolution
The method enrolls a solution of type Retail Search into a project.
getAlertConfig
GET /v2alpha/{name=projects/*/alertConfig}
Get the AlertConfig of the requested project.
getLoggingConfig
GET /v2alpha/{name=projects/*/loggingConfig}
Gets the LoggingConfig of the requested project.
getRetailProject
GET /v2alpha/{name=projects/*/retailProject}
Gets the project.
listEnrolledSolutions
GET /v2alpha/{parent=projects/*}:enrolledSolutions
Lists all the retail API solutions the project has enrolled.
updateAlertConfig
PATCH /v2alpha/{alertConfig.name=projects/*/alertConfig}
Update the alert config of the requested project.
updateLoggingConfig
PATCH /v2alpha/{loggingConfig.name=projects/*/loggingConfig}
Updates the LoggingConfig of the requested project.
REST Resource: v2alpha.projects.locations.catalogs
Methods
completeQuery
GET /v2alpha/{catalog=projects/*/locations/*/catalogs/*}:completeQuery
Completes the specified prefix with keyword suggestions.
exportAnalyticsMetrics
POST /v2alpha/{catalog=projects/*/locations/*/catalogs/*}:exportAnalyticsMetrics
Exports analytics metrics.
getAttributesConfig
GET /v2alpha/{name=projects/*/locations/*/catalogs/*/attributesConfig}
Gets an AttributesConfig .
getCompletionConfig
GET /v2alpha/{name=projects/*/locations/*/catalogs/*/completionConfig}
Gets a CompletionConfig .
getConversationalSearchCustomizationConfig
GET /v2alpha/{name=projects/*/locations/*/catalogs/*}/conversationalSearchCustomizationConfig
Returns the conversational search customization config for a given catalog.
getDefaultBranch
GET /v2alpha/{catalog=projects/*/locations/*/catalogs/*}:getDefaultBranch
Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
getGenerativeQuestionFeature
GET /v2alpha/{catalog=projects/*/locations/*/catalogs/*}/generativeQuestionFeature
Manages overal generative question feature state -- enables toggling feature on and off.
list
GET /v2alpha/{parent=projects/*/locations/*}/catalogs
Lists all the Catalog s associated with the project.
patch
PATCH /v2alpha/{catalog.name=projects/*/locations/*/catalogs/*}
Updates the Catalog s.
setDefaultBranch
POST /v2alpha/{catalog=projects/*/locations/*/catalogs/*}:setDefaultBranch
Set a specified branch id as default branch.
updateAttributesConfig
PATCH /v2alpha/{attributesConfig.name=projects/*/locations/*/catalogs/*/attributesConfig}
Updates the AttributesConfig .
updateCompletionConfig
PATCH /v2alpha/{completionConfig.name=projects/*/locations/*/catalogs/*/completionConfig}
Updates the CompletionConfig s.
updateConversationalSearchCustomizationConfig
PATCH /v2alpha/{conversationalSearchCustomizationConfig.catalog=projects/*/locations/*/catalogs/*}/conversationalSearchCustomizationConfig
Updates the conversational search customization config for a given catalog.
updateGenerativeQuestion
PATCH /v2alpha/{generativeQuestionConfig.catalog=projects/*/locations/*/catalogs/*}/generativeQuestion
Allows management of individual questions.
updateGenerativeQuestionFeature
PATCH /v2alpha/{generativeQuestionsFeatureConfig.catalog=projects/*/locations/*/catalogs/*}/generativeQuestionFeature
Manages overal generative question feature state -- enables toggling feature on and off.
REST Resource: v2alpha.projects.locations.catalogs.attributesConfig
Methods
addCatalogAttribute
POST /v2alpha/{attributesConfig=projects/*/locations/*/catalogs/*/attributesConfig}:addCatalogAttribute
Adds the specified CatalogAttribute to the AttributesConfig .
batchRemoveCatalogAttributes
POST /v2alpha/{attributesConfig=projects/*/locations/*/catalogs/*/attributesConfig}:batchRemoveCatalogAttributes
Removes all specified CatalogAttribute s from the AttributesConfig .
removeCatalogAttribute
POST /v2alpha/{attributesConfig=projects/*/locations/*/catalogs/*/attributesConfig}:removeCatalogAttribute
Removes the specified CatalogAttribute from the AttributesConfig .
replaceCatalogAttribute
POST /v2alpha/{attributesConfig=projects/*/locations/*/catalogs/*/attributesConfig}:replaceCatalogAttribute
Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key .
REST Resource: v2alpha.projects.locations.catalogs.branches
Methods
get
GET /v2alpha/{name=projects/*/locations/*/catalogs/*/branches/*}
Retrieves a Branch .
list
GET /v2alpha/{parent=projects/*/locations/*/catalogs/*}/branches
Lists all instances of Branch under the specified parent Catalog .
REST Resource: v2alpha.projects.locations.catalogs.branches.operations
Methods
get
GET /v2alpha/{name=projects/*/locations/*/catalogs/*/branches/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v2alpha.projects.locations.catalogs.branches.places.operations
Methods
get
GET /v2alpha/{name=projects/*/locations/*/catalogs/*/branches/*/places/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v2alpha.projects.locations.catalogs.branches.products
Methods
addFulfillmentPlaces
POST /v2alpha/{product=projects/*/locations/*/catalogs/*/branches/*/products/**}:addFulfillmentPlaces
We recommend that you use the ProductService.AddLocalInventories method instead of the ProductService.AddFulfillmentPlaces method.
addLocalInventories
POST /v2alpha/{product=projects/*/locations/*/catalogs/*/branches/*/products/**}:addLocalInventories
Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field.
create
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*/branches/*}/products
Creates a Product .
delete
DELETE /v2alpha/{name=projects/*/locations/*/catalogs/*/branches/*/products/**}
Deletes a Product .
export
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*/branches/*}/products:export
Exports multiple Product s.
get
GET /v2alpha/{name=projects/*/locations/*/catalogs/*/branches/*/products/**}
Gets a Product .
import
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*/branches/*}/products:import
Bulk import of multiple Product s.
list
GET /v2alpha/{parent=projects/*/locations/*/catalogs/*/branches/*}/products
Gets a list of Product s.
patch
PATCH /v2alpha/{product.name=projects/*/locations/*/catalogs/*/branches/*/products/**}
Updates a Product .
purge
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*/branches/*}/products:purge
Permanently deletes all selected Product s under a branch.
removeFulfillmentPlaces
POST /v2alpha/{product=projects/*/locations/*/catalogs/*/branches/*/products/**}:removeFulfillmentPlaces
We recommend that you use the ProductService.RemoveLocalInventories method instead of the ProductService.RemoveFulfillmentPlaces method.
removeLocalInventories
POST /v2alpha/{product=projects/*/locations/*/catalogs/*/branches/*/products/**}:removeLocalInventories
Remove local inventory information for a Product at a list of places at a removal timestamp.
setInventory
POST /v2alpha/{inventory.name=projects/*/locations/*/catalogs/*/branches/*/products/**}:setInventory
Updates inventory information for a Product while respecting the last update timestamps of each inventory field.
REST Resource: v2alpha.projects.locations.catalogs.completionData
Methods
import
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*}/completionData:import
Bulk import of processed completion dataset.
REST Resource: v2alpha.projects.locations.catalogs.controls
Methods
create
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*}/controls
Creates a Control.
delete
DELETE /v2alpha/{name=projects/*/locations/*/catalogs/*/controls/*}
Deletes a Control.
get
GET /v2alpha/{name=projects/*/locations/*/catalogs/*/controls/*}
Gets a Control.
list
GET /v2alpha/{parent=projects/*/locations/*/catalogs/*}/controls
Lists all Controls by their parent Catalog .
patch
PATCH /v2alpha/{control.name=projects/*/locations/*/catalogs/*/controls/*}
Updates a Control.
REST Resource: v2alpha.projects.locations.catalogs.generativeQuestion
Methods
batchUpdate
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*}/generativeQuestion:batchUpdate
Allows management of multiple questions.
REST Resource: v2alpha.projects.locations.catalogs.generativeQuestions
Methods
list
GET /v2alpha/{parent=projects/*/locations/*/catalogs/*}/generativeQuestions
Returns all questions for a given catalog.
REST Resource: v2alpha.projects.locations.catalogs.merchantCenterAccountLinks
Methods
create
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*}/merchantCenterAccountLinks
Creates a MerchantCenterAccountLink .
delete
DELETE /v2alpha/{name=projects/*/locations/*/catalogs/*/merchantCenterAccountLinks/*}
Deletes a MerchantCenterAccountLink .
list
GET /v2alpha/{parent=projects/*/locations/*/catalogs/*}/merchantCenterAccountLinks
Lists all MerchantCenterAccountLink s under the specified parent Catalog .
REST Resource: v2alpha.projects.locations.catalogs.models
Methods
create
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*}/models
Creates a new model.
delete
DELETE /v2alpha/{name=projects/*/locations/*/catalogs/*/models/*}
Deletes an existing model.
get
GET /v2alpha/{name=projects/*/locations/*/catalogs/*/models/*}
Gets a model.
list
GET /v2alpha/{parent=projects/*/locations/*/catalogs/*}/models
Lists all the models linked to this event store.
patch
PATCH /v2alpha/{model.name=projects/*/locations/*/catalogs/*/models/*}
Update of model metadata.
pause
POST /v2alpha/{name=projects/*/locations/*/catalogs/*/models/*}:pause
Pauses the training of an existing model.
resume
POST /v2alpha/{name=projects/*/locations/*/catalogs/*/models/*}:resume
Resumes the training of an existing model.
tune
POST /v2alpha/{name=projects/*/locations/*/catalogs/*/models/*}:tune
Tunes an existing model.
REST Resource: v2alpha.projects.locations.catalogs.operations
Methods
get
GET /v2alpha/{name=projects/*/locations/*/catalogs/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2alpha/{name=projects/*/locations/*/catalogs/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2alpha.projects.locations.catalogs.placements
Methods
conversationalSearch
POST /v2alpha/{placement=projects/*/locations/*/catalogs/*/placements/*}:conversationalSearch
Performs a conversational search.
predict
POST /v2alpha/{placement=projects/*/locations/*/catalogs/*/placements/*}:predict
Makes a recommendation prediction.
search
POST /v2alpha/{placement=projects/*/locations/*/catalogs/*/placements/*}:search
Performs a search.
REST Resource: v2alpha.projects.locations.catalogs.servingConfigs
Methods
addControl
POST /v2alpha/{servingConfig=projects/*/locations/*/catalogs/*/servingConfigs/*}:addControl
Enables a Control on the specified ServingConfig.
conversationalSearch
POST /v2alpha/{placement=projects/*/locations/*/catalogs/*/servingConfigs/*}:conversationalSearch
Performs a conversational search.
create
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*}/servingConfigs
Creates a ServingConfig.
delete
DELETE /v2alpha/{name=projects/*/locations/*/catalogs/*/servingConfigs/*}
Deletes a ServingConfig.
get
GET /v2alpha/{name=projects/*/locations/*/catalogs/*/servingConfigs/*}
Gets a ServingConfig.
list
GET /v2alpha/{parent=projects/*/locations/*/catalogs/*}/servingConfigs
Lists all ServingConfigs linked to this catalog.
patch
PATCH /v2alpha/{servingConfig.name=projects/*/locations/*/catalogs/*/servingConfigs/*}
Updates a ServingConfig.
predict
POST /v2alpha/{placement=projects/*/locations/*/catalogs/*/servingConfigs/*}:predict
Makes a recommendation prediction.
removeControl
POST /v2alpha/{servingConfig=projects/*/locations/*/catalogs/*/servingConfigs/*}:removeControl
Disables a Control on the specified ServingConfig.
search
POST /v2alpha/{placement=projects/*/locations/*/catalogs/*/servingConfigs/*}:search
Performs a search.
REST Resource: v2alpha.projects.locations.catalogs.userEvents
Methods
collect
GET /v2alpha/{parent=projects/*/locations/*/catalogs/*}/userEvents:collect
Writes a single user event from the browser.
export
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*}/userEvents:export
Exports user events.
import
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*}/userEvents:import
Bulk import of User events.
purge
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*}/userEvents:purge
Deletes permanently all user events specified by the filter provided.
rejoin
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*}/userEvents:rejoin
Starts a user-event rejoin operation with latest product catalog.
write
POST /v2alpha/{parent=projects/*/locations/*/catalogs/*}/userEvents:write
Writes a single user event.
REST Resource: v2alpha.projects.locations.operations
Methods
get
GET /v2alpha/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2alpha/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2alpha.projects.operations
Methods
get
GET /v2alpha/{name=projects/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2alpha/{name=projects/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2alpha.projects.retailProject
Methods
acceptTerms
POST /v2alpha/{project=projects/*/retailProject}:acceptTerms
Accepts service terms for this project.
REST Resource: v2.projects.locations.catalogs
Methods
completeQuery
GET /v2/{catalog=projects/*/locations/*/catalogs/*}:completeQuery
Completes the specified prefix with keyword suggestions.
exportAnalyticsMetrics
POST /v2/{catalog=projects/*/locations/*/catalogs/*}:exportAnalyticsMetrics
Exports analytics metrics.
getAttributesConfig
GET /v2/{name=projects/*/locations/*/catalogs/*/attributesConfig}
Gets an AttributesConfig .
getCompletionConfig
GET /v2/{name=projects/*/locations/*/catalogs/*/completionConfig}
Gets a CompletionConfig .
getConversationalSearchCustomizationConfig
GET /v2/{name=projects/*/locations/*/catalogs/*}/conversationalSearchCustomizationConfig
Returns the conversational search customization config for a given catalog.
getDefaultBranch
GET /v2/{catalog=projects/*/locations/*/catalogs/*}:getDefaultBranch
Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
getGenerativeQuestionFeature
GET /v2/{catalog=projects/*/locations/*/catalogs/*}/generativeQuestionFeature
Manages overal generative question feature state -- enables toggling feature on and off.
list
GET /v2/{parent=projects/*/locations/*}/catalogs
Lists all the Catalog s associated with the project.
patch
PATCH /v2/{catalog.name=projects/*/locations/*/catalogs/*}
Updates the Catalog s.
setDefaultBranch
POST /v2/{catalog=projects/*/locations/*/catalogs/*}:setDefaultBranch
Set a specified branch id as default branch.
updateAttributesConfig
PATCH /v2/{attributesConfig.name=projects/*/locations/*/catalogs/*/attributesConfig}
Updates the AttributesConfig .
updateCompletionConfig
PATCH /v2/{completionConfig.name=projects/*/locations/*/catalogs/*/completionConfig}
Updates the CompletionConfig s.
updateConversationalSearchCustomizationConfig
PATCH /v2/{conversationalSearchCustomizationConfig.catalog=projects/*/locations/*/catalogs/*}/conversationalSearchCustomizationConfig
Updates the conversational search customization config for a given catalog.
updateGenerativeQuestion
PATCH /v2/{generativeQuestionConfig.catalog=projects/*/locations/*/catalogs/*}/generativeQuestion
Allows management of individual questions.
updateGenerativeQuestionFeature
PATCH /v2/{generativeQuestionsFeatureConfig.catalog=projects/*/locations/*/catalogs/*}/generativeQuestionFeature
Manages overal generative question feature state -- enables toggling feature on and off.
REST Resource: v2.projects.locations.catalogs.attributesConfig
Methods
addCatalogAttribute
POST /v2/{attributesConfig=projects/*/locations/*/catalogs/*/attributesConfig}:addCatalogAttribute
Adds the specified CatalogAttribute to the AttributesConfig .
removeCatalogAttribute
POST /v2/{attributesConfig=projects/*/locations/*/catalogs/*/attributesConfig}:removeCatalogAttribute
Removes the specified CatalogAttribute from the AttributesConfig .
replaceCatalogAttribute
POST /v2/{attributesConfig=projects/*/locations/*/catalogs/*/attributesConfig}:replaceCatalogAttribute
Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key .
REST Resource: v2.projects.locations.catalogs.branches.operations
Methods
get
GET /v2/{name=projects/*/locations/*/catalogs/*/branches/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v2.projects.locations.catalogs.branches.products
Methods
addFulfillmentPlaces
POST /v2/{product=projects/*/locations/*/catalogs/*/branches/*/products/**}:addFulfillmentPlaces
We recommend that you use the ProductService.AddLocalInventories method instead of the ProductService.AddFulfillmentPlaces method.
addLocalInventories
POST /v2/{product=projects/*/locations/*/catalogs/*/branches/*/products/**}:addLocalInventories
Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field.
create
POST /v2/{parent=projects/*/locations/*/catalogs/*/branches/*}/products
Creates a Product .
delete
DELETE /v2/{name=projects/*/locations/*/catalogs/*/branches/*/products/**}
Deletes a Product .
get
GET /v2/{name=projects/*/locations/*/catalogs/*/branches/*/products/**}
Gets a Product .
import
POST /v2/{parent=projects/*/locations/*/catalogs/*/branches/*}/products:import
Bulk import of multiple Product s.
list
GET /v2/{parent=projects/*/locations/*/catalogs/*/branches/*}/products
Gets a list of Product s.
patch
PATCH /v2/{product.name=projects/*/locations/*/catalogs/*/branches/*/products/**}
Updates a Product .
purge
POST /v2/{parent=projects/*/locations/*/catalogs/*/branches/*}/products:purge
Permanently deletes all selected Product s under a branch.
removeFulfillmentPlaces
POST /v2/{product=projects/*/locations/*/catalogs/*/branches/*/products/**}:removeFulfillmentPlaces
We recommend that you use the ProductService.RemoveLocalInventories method instead of the ProductService.RemoveFulfillmentPlaces method.
removeLocalInventories
POST /v2/{product=projects/*/locations/*/catalogs/*/branches/*/products/**}:removeLocalInventories
Remove local inventory information for a Product at a list of places at a removal timestamp.
setInventory
POST /v2/{inventory.name=projects/*/locations/*/catalogs/*/branches/*/products/**}:setInventory
Updates inventory information for a Product while respecting the last update timestamps of each inventory field.
REST Resource: v2.projects.locations.catalogs.completionData
Methods
import
POST /v2/{parent=projects/*/locations/*/catalogs/*}/completionData:import
Bulk import of processed completion dataset.
REST Resource: v2.projects.locations.catalogs.controls
Methods
create
POST /v2/{parent=projects/*/locations/*/catalogs/*}/controls
Creates a Control.
delete
DELETE /v2/{name=projects/*/locations/*/catalogs/*/controls/*}
Deletes a Control.
get
GET /v2/{name=projects/*/locations/*/catalogs/*/controls/*}
Gets a Control.
list
GET /v2/{parent=projects/*/locations/*/catalogs/*}/controls
Lists all Controls by their parent Catalog .
patch
PATCH /v2/{control.name=projects/*/locations/*/catalogs/*/controls/*}
Updates a Control.
REST Resource: v2.projects.locations.catalogs.generativeQuestion
Methods
batchUpdate
POST /v2/{parent=projects/*/locations/*/catalogs/*}/generativeQuestion:batchUpdate
Allows management of multiple questions.
REST Resource: v2.projects.locations.catalogs.generativeQuestions
Methods
list
GET /v2/{parent=projects/*/locations/*/catalogs/*}/generativeQuestions
Returns all questions for a given catalog.
REST Resource: v2.projects.locations.catalogs.models
Methods
create
POST /v2/{parent=projects/*/locations/*/catalogs/*}/models
Creates a new model.
delete
DELETE /v2/{name=projects/*/locations/*/catalogs/*/models/*}
Deletes an existing model.
get
GET /v2/{name=projects/*/locations/*/catalogs/*/models/*}
Gets a model.
list
GET /v2/{parent=projects/*/locations/*/catalogs/*}/models
Lists all the models linked to this event store.
patch
PATCH /v2/{model.name=projects/*/locations/*/catalogs/*/models/*}
Update of model metadata.
pause
POST /v2/{name=projects/*/locations/*/catalogs/*/models/*}:pause
Pauses the training of an existing model.
resume
POST /v2/{name=projects/*/locations/*/catalogs/*/models/*}:resume
Resumes the training of an existing model.
tune
POST /v2/{name=projects/*/locations/*/catalogs/*/models/*}:tune
Tunes an existing model.
REST Resource: v2.projects.locations.catalogs.operations
Methods
get
GET /v2/{name=projects/*/locations/*/catalogs/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2/{name=projects/*/locations/*/catalogs/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2.projects.locations.catalogs.placements
Methods
conversationalSearch
POST /v2/{placement=projects/*/locations/*/catalogs/*/placements/*}:conversationalSearch
Performs a conversational search.
predict
POST /v2/{placement=projects/*/locations/*/catalogs/*/placements/*}:predict
Makes a recommendation prediction.
search
POST /v2/{placement=projects/*/locations/*/catalogs/*/placements/*}:search
Performs a search.
REST Resource: v2.projects.locations.catalogs.servingConfigs
Methods
addControl
POST /v2/{servingConfig=projects/*/locations/*/catalogs/*/servingConfigs/*}:addControl
Enables a Control on the specified ServingConfig.
conversationalSearch
POST /v2/{placement=projects/*/locations/*/catalogs/*/servingConfigs/*}:conversationalSearch
Performs a conversational search.
create
POST /v2/{parent=projects/*/locations/*/catalogs/*}/servingConfigs
Creates a ServingConfig.
delete
DELETE /v2/{name=projects/*/locations/*/catalogs/*/servingConfigs/*}
Deletes a ServingConfig.
get
GET /v2/{name=projects/*/locations/*/catalogs/*/servingConfigs/*}
Gets a ServingConfig.
list
GET /v2/{parent=projects/*/locations/*/catalogs/*}/servingConfigs
Lists all ServingConfigs linked to this catalog.
patch
PATCH /v2/{servingConfig.name=projects/*/locations/*/catalogs/*/servingConfigs/*}
Updates a ServingConfig.
predict
POST /v2/{placement=projects/*/locations/*/catalogs/*/servingConfigs/*}:predict
Makes a recommendation prediction.
removeControl
POST /v2/{servingConfig=projects/*/locations/*/catalogs/*/servingConfigs/*}:removeControl
Disables a Control on the specified ServingConfig.
search
POST /v2/{placement=projects/*/locations/*/catalogs/*/servingConfigs/*}:search
Performs a search.
REST Resource: v2.projects.locations.catalogs.userEvents
Methods
collect
GET /v2/{parent=projects/*/locations/*/catalogs/*}/userEvents:collect
Writes a single user event from the browser.
import
POST /v2/{parent=projects/*/locations/*/catalogs/*}/userEvents:import
Bulk import of User events.
purge
POST /v2/{parent=projects/*/locations/*/catalogs/*}/userEvents:purge
Deletes permanently all user events specified by the filter provided.
rejoin
POST /v2/{parent=projects/*/locations/*/catalogs/*}/userEvents:rejoin
Starts a user-event rejoin operation with latest product catalog.
write
POST /v2/{parent=projects/*/locations/*/catalogs/*}/userEvents:write
Writes a single user event.
REST Resource: v2.projects.locations.operations
Methods
get
GET /v2/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2.projects.operations
Methods
get
GET /v2/{name=projects/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2/{name=projects/*}/operations
Lists operations that match the specified filter in the request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-03 UTC."],[],[]]
