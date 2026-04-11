---
title: "Stepped Configuration \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/stepped-configuration
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/looker-studio
source_metadata:
  url: https://developers.google.com/looker-studio/connector/stepped-configuration
  title: "Stepped Configuration \_|\_ Community Connectors \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Stepped Configuration
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Stepped configuration in Looker Studio connectors allows dynamic population of configuration fields based on user input, such as showing city options after a state is selected.
The process involves Looker Studio repeatedly calling the getConfig() function, with the connector providing new configuration questions based on previous answers until the configuration is complete.
Configuration questions influencing later steps should be marked as dynamic using isDynamic(true) , ensuring the user reconfigures subsequent steps upon modification.
Connectors receive user-provided answers through request.configParams , allowing for conditional logic and tailoring of configuration options.
Configurations should be additive, idempotent (returning the same configuration for identical inputs), and immutable once introduced, with dynamic parameters being non-overridable.
Stepped configuration allows a connector to dynamically populate the connector
configuration based on user-provided answers. For example, populating a "City"
dropdown after a "State" dropdown is selected.
Requirements
This guide assumes you are already familiar with Community Connector
configurations. See define configuration via getConfig for a refresher.
Overview
Stepped configuration consists of Looker Studio calling getConfig() multiple
times, and your connector returning more configuration questions each time. Each
call to getConfig() will include the user's answers to the last getConfig()
response. This process is continued as long as you return a response with
setIsSteppedConfig(true) .
Guidelines
Set setIsSteppedConfig(true) until the configuration is complete
Looker Studio will repeatedly call getConfig() as long as
setIsSteppedConfig(true) is set.Once configuration is complete, the final
getConfig() response should set setIsSteppedConfig(false) .
Set isDynamic(true) for configuration questions that determine later questions
If a field marked isDynamic is modified by the user, subsequent
configuration entries will be cleared in the UI, and the user will need to
configure all subsequent steps. This helps ensure users don't send you an
invalid configuration.
User-provided answers will be passed via request.configParams .
request.configParams will be undefined for the first getConfig()
request to your connector. Subsequent requests will include the
user-provided answers as an object keyed by the configuration ids or
undefined if the user doesn't provide any answers.
Example:
{
state : 'CA' ,
city : 'mountain_view'
}
Configurations are additive
New configuration questions should be added after existing ones.
Configurations cannot be mutated
If a configuration question was asked previously, it should be present for
all subsequent calls. For example, if configuration question A was asked
in the first call to getConfig() , A should be included in all future
responses.
Configurations are idempotent
Calls to getConfig() with the same configParams should return the same
configuration.
Dynamic parameters cannot be overridable
Looker Studio will not allow dynamic configuration parameters to be
overridden .
Example configurations
Dynamic dropdowns
This first question prompts a user to select a state, then dynamically provides
a city dropdown based on the selected state.
var cc = DataStudioApp . createCommunityConnector ();
function optionsForState ( state ) {
switch ( state ) {
case "IL" : {
return [[ "Chicago" , "chicago" ], [ "Springfield" , "springfield" ]];
}
case "CA" : {
return [[ "Mountain View" , "mountain_view" ], [ "Los Angeles" , "los_angeles" ]];
}
default : {
cc . newUserError ()
. setText ( 'You must either select "IL" or "CA"' )
. throwException ();
}
}
}
function getConfig ( request ) {
var configParams = request . configParams ;
var isFirstRequest = configParams === undefined ;
var config = cc . getConfig ();
if ( isFirstRequest ) {
config . setIsSteppedConfig ( true );
}
config . newSelectSingle ()
. setId ( "state" )
. setName ( "State" )
// Set isDynamic to true so any changes to State will clear the city
// selections.
. setIsDynamic ( true )
. addOption ( config . newOptionBuilder (). setLabel ( "Illinois" ). setValue ( "IL" ))
. addOption ( config . newOptionBuilder (). setLabel ( "California" ). setValue ( "CA" ));
if ( ! isFirstRequest ) {
var city = config . newSelectSingle ()
. setId ( "city" )
. setName ( "City" );
var cityOptions = optionsForState ( configParams . state );
cityOptions . forEach ( function ( labelAndValue ) {
var cityLabel = labelAndValue [ 0 ];
var cityValue = labelAndValue [ 1 ];
city . addOption ( config . newOptionBuilder (). setLabel ( cityLabel ). setValue ( cityValue ));
});
}
return config . build ();
}
Branching Paths
This will ask an additional question if the selected "Country" is "USA".
var cc = DataStudioApp . createCommunityConnector ();
function getConfig ( request ) {
var configParams = request . configParams ;
var isFirstRequest = configParams === undefined ;
var config = cc . getConfig ();
if ( isFirstRequest ) {
config . setIsSteppedConfig ( true );
}
config
. newSelectSingle ()
. setId ( 'country' )
. setName ( 'Country' )
// Set isDynamic to true so any changes to Country will clear the state
// selections.
. setIsDynamic ( true )
. addOption ( config . newOptionBuilder (). setLabel ( 'United States' ). setValue ( 'USA' ))
. addOption ( config . newOptionBuilder (). setLabel ( 'Canada' ). setValue ( 'CA' ));
if ( ! isFirstRequest ) {
// validate a valid value was selected for configParams.country
if ( configParams . country === undefined ) {
cc . newUserError (). setText ( 'You must choose a country.' ). throwException ();
}
switch ( configParams . country ) {
case 'USA' : {
config
. newSelectSingle ()
. setId ( 'state' )
. setName ( 'State' )
. addOption ( config . newOptionBuilder (). setLabel ( 'New York' ). setValue ( 'NY' ))
. addOption ( config . newOptionBuilder (). setLabel ( 'Calfornia' ). setValue ( 'CA' ));
break ;
}
case 'CA' : {
// No additional configuration is needed for Canada.
break ;
}
default : {
cc . newUserError ()
. setText ( 'You must either select "CA" or "USA"' )
. throwException ();
}
}
}
return config . build ();
}
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
