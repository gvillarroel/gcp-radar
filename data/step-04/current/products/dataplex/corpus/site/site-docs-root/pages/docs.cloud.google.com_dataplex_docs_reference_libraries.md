---
title: "Dataplex Universal Catalog client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/reference/libraries
  title: "Dataplex Universal Catalog client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataplex Universal Catalog
Reference
Send feedback
Dataplex Universal Catalog client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Dataplex API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C#
Install-Package Google.Cloud.Dataplex.V1
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/dataplex/apiv1
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven , add the
following to your pom.xml file:
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-dataplex</artifactId>
<version> DATAPLEX_LIBRARY_VERSION </version>
</dependency>
If you are using Gradle , add the
following to your dependencies:
compile group: 'com.google.cloud', name: 'google-cloud-dataplex', version: ' DATAPLEX_LIBRARY_VERSION '
For more information about the latest Dataplex Universal Catalog version, see Dataplex Universal Catalog Java Cloud client library reference .
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/dataplex
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-dataplex
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-dataplex
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-dataplex
For more information, see Setting Up a Ruby Development Environment .
Set up authentication
To authenticate calls to Google Cloud APIs, client libraries support
Application Default Credentials (ADC) ;
the libraries look for credentials in a set of defined locations and use those credentials
to authenticate requests to the API. With ADC, you can make
credentials available to your application in a variety of environments, such as local
development or production, without needing to modify your application code.
For production environments, the way you set up ADC depends on the service
and context. For more information, see Set up Application Default Credentials .
For a local development environment, you can set up ADC with the credentials
that are associated with your Google Account:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
Use the client library
The following example shows how to use the client library.
Java
import com.google.cloud.dataplex.v1. AspectType ;
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. LocationName ;
import java.util.List ;
public class CreateAspectType {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "MY_PROJECT_ID" ;
// Available locations: https://cloud.google.com/dataplex/docs/locations
String location = "MY_LOCATION" ;
String aspectTypeId = "MY_ASPECT_TYPE_ID" ;
AspectType . MetadataTemplate aspectField =
AspectType . MetadataTemplate . newBuilder ()
// The name must follow regex ^(([a-zA-Z]{1})([\\w\\-_]{0,62}))$
// That means name must only contain alphanumeric character or dashes or underscores,
// start with an alphabet, and must be less than 63 characters.
. setName ( "name_of_the_field" )
// Metadata Template is recursive structure,
// primitive types such as "string" or "integer" indicate leaf node,
// complex types such as "record" or "array" would require nested Metadata Template
. setType ( "string" )
. setIndex ( 1 )
. setAnnotations (
AspectType . MetadataTemplate . Annotations . newBuilder ()
. setDescription ( "description of the field" )
. build ())
. setConstraints (
AspectType . MetadataTemplate . Constraints . newBuilder ()
// Specifies if field will be required in Aspect Type.
. setRequired ( true )
. build ())
. build ();
List<AspectType . MetadataTemplate > aspectFields = List . of ( aspectField );
AspectType createdAspectType =
createAspectType ( projectId , location , aspectTypeId , aspectFields );
System . out . println ( "Successfully created aspect type: " + createdAspectType . getName ());
}
// Method to create Aspect Type located in projectId, location and with aspectTypeId and
// aspectFields specifying schema of the Aspect Type
public static AspectType createAspectType (
String projectId ,
String location ,
String aspectTypeId ,
List<AspectType . MetadataTemplate > aspectFields )
throws Exception {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( CatalogServiceClient client = CatalogServiceClient . create ()) {
LocationName locationName = LocationName . of ( projectId , location );
AspectType aspectType =
AspectType . newBuilder ()
. setDescription ( "description of the aspect type" )
. setMetadataTemplate (
AspectType . MetadataTemplate . newBuilder ()
// The name must follow regex ^(([a-zA-Z]{1})([\\w\\-_]{0,62}))$
// That means name must only contain alphanumeric character or dashes or
// underscores, start with an alphabet, and must be less than 63 characters.
. setName ( "name_of_the_template" )
. setType ( "record" )
// Aspect Type fields, that themselves are Metadata Templates
. addAllRecordFields ( aspectFields )
. build ())
. build ();
return client . createAspectTypeAsync ( locationName , aspectType , aspectTypeId ). get ();
}
}
}
Python
from typing import List
from google.cloud import dataplex_v1
# Method to create Aspect Type located in project_id, location and with aspect_type_id and
# aspect_fields specifying schema of the Aspect Type
def create_aspect_type (
project_id : str ,
location : str ,
aspect_type_id : str ,
aspect_fields : List [ dataplex_v1 . AspectType . MetadataTemplate ],
) - > dataplex_v1 . AspectType :
"""Method to create Aspect Type located in project_id, location and with aspect_type_id and
aspect_fields specifying schema of the Aspect Type"""
# Initialize client that will be used to send requests across threads. This
# client only needs to be created once, and can be reused for multiple requests.
# After completing all of your requests, call the "__exit__()" method to safely
# clean up any remaining background resources. Alternatively, use the client as
# a context manager.
with dataplex_v1 . CatalogServiceClient () as client :
# The resource name of the Aspect Type location
parent = f "projects/ { project_id } /locations/ { location } "
aspect_type = dataplex_v1 . AspectType (
description = "description of the aspect type" ,
metadata_template = dataplex_v1 . AspectType . MetadataTemplate (
# The name must follow regex ^(([a-zA-Z]{1})([\\w\\-_]{0,62}))$
# That means name must only contain alphanumeric character or dashes or underscores,
# start with an alphabet, and must be less than 63 characters.
name = "name_of_the_template" ,
type = "record" ,
# Aspect Type fields, that themselves are Metadata Templates.
record_fields = aspect_fields ,
),
)
create_operation = client . create_aspect_type (
parent = parent , aspect_type = aspect_type , aspect_type_id = aspect_type_id
)
return create_operation . result ( 60 )
if __name__ == "__main__" :
# TODO(developer): Replace these variables before running the sample.
project_id = "MY_PROJECT_ID"
# Available locations: https://cloud.google.com/dataplex/docs/locations
location = "MY_LOCATION"
aspect_type_id = "MY_ASPECT_TYPE_ID"
aspect_field = dataplex_v1 . AspectType . MetadataTemplate (
# The name must follow regex ^(([a-zA-Z]{1})([\\w\\-_]{0,62}))$
# That means name must only contain alphanumeric character or dashes or underscores,
# start with an alphabet, and must be less than 63 characters.
name = "name_of_the_field" ,
# Metadata Template is recursive structure,
# primitive types such as "string" or "integer" indicate leaf node,
# complex types such as "record" or "array" would require nested Metadata Template
type = "string" ,
index = 1 ,
annotations = dataplex_v1 . AspectType . MetadataTemplate . Annotations (
description = "description of the field"
),
constraints = dataplex_v1 . AspectType . MetadataTemplate . Constraints (
# Specifies if field will be required in Aspect Type.
required = True
),
)
aspect_fields = [ aspect_field ]
created_aspect_type = create_aspect_type (
project_id , location , aspect_type_id , aspect_fields
)
print ( f "Successfully created aspect type: { created_aspect_type . name } " )
Additional resources
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-dataplex on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-dataplex on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-dataplex on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-dataplex on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-dataplex on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-dataplex on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-dataplex on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
