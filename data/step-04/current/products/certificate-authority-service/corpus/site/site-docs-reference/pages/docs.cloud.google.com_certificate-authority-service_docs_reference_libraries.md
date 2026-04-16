---
title: "CA Service client libraries \_|\_ Certificate Authority Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/libraries
  title: "CA Service client libraries \_|\_ Certificate Authority Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Reference
Send feedback
CA Service client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Certificate Authority Service API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C++
See Setting up a C++ development environment
for details about this client library's requirements and install dependencies.
C#
Install the Google.Cloud.Security.PrivateCA.V1 package from NuGet.
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/security/privateca/apiv1
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>26 .79.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - security - private - ca < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - security - private - ca : 2.92.0 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-security-private-ca" % "2.92.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/security-private-ca
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-security-private-ca
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-private-ca
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-security-private_ca
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
C++
#include "google/cloud/privateca/v1/certificate_authority_client.h"
#include "google/cloud/location.h"
#include <iostream>
int main ( int argc , char * argv []) try {
if ( argc != 3 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " project-id location-id \n " ;
return 1 ;
}
auto const location = google :: cloud :: Location ( argv [ 1 ], argv [ 2 ]);
namespace privateca = :: google :: cloud :: privateca_v1 ;
auto client = privateca :: CertificateAuthorityServiceClient (
privateca :: MakeCertificateAuthorityServiceConnection ());
for ( auto ca_pool : client . ListCaPools ( location . FullName ())) {
if ( ! ca_pool ) throw std :: move ( ca_pool ). status ();
std :: cout << ca_pool - > DebugString () << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
Go
import (
"context"
"fmt"
"io"
privateca "cloud.google.com/go/security/privateca/apiv1"
"cloud.google.com/go/security/privateca/apiv1/privatecapb"
"google.golang.org/protobuf/types/known/durationpb"
)
// Create Certificate Authority which is the root CA in the given CA Pool. This CA will be
// responsible for signing certificates within this pool.
func createCa (
w io . Writer ,
projectId string ,
location string ,
caPoolId string ,
caId string ,
caCommonName string ,
org string ,
caDuration int64 ) error {
// projectId := "your_project_id"
// location := "us-central1" // For a list of locations, see: https://cloud.google.com/certificate-authority-service/docs/locations.
// caPoolId := "ca-pool-id" // The CA Pool id under which the CA should be created.
// caId := "ca-id" // A unique id/name for the ca.
// caCommonName := "ca-name" // A common name for your certificate authority.
// org := "ca-org" // The name of your company for your certificate authority.
// ca_duration := int64(31536000) // The validity of the certificate authority in seconds.
ctx := context . Background ()
caClient , err := privateca . NewCertificateAuthorityClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewCertificateAuthorityClient creation failed: %w" , err )
}
defer caClient . Close ()
// Set the types of Algorithm used to create a cloud KMS key.
keySpec := & privatecapb . CertificateAuthority_KeyVersionSpec {
KeyVersion : & privatecapb . CertificateAuthority_KeyVersionSpec_Algorithm {
Algorithm : privatecapb . CertificateAuthority_RSA_PKCS1_2048_SHA256 ,
},
}
// Set CA subject config.
subjectConfig := & privatecapb . CertificateConfig_SubjectConfig {
Subject : & privatecapb . Subject {
CommonName : caCommonName ,
Organization : org ,
},
}
// Set the key usage options for X.509 fields.
isCa := true
x509Parameters := & privatecapb . X509Parameters {
KeyUsage : & privatecapb . KeyUsage {
BaseKeyUsage : & privatecapb . KeyUsage_KeyUsageOptions {
CrlSign : true ,
CertSign : true ,
},
},
CaOptions : & privatecapb . X509Parameters_CaOptions {
IsCa : & isCa ,
},
}
// Set certificate authority settings.
// Type: SELF_SIGNED denotes that this CA is a root CA.
ca := & privatecapb . CertificateAuthority {
Type : privatecapb . CertificateAuthority_SELF_SIGNED ,
KeySpec : keySpec ,
Config : & privatecapb . CertificateConfig {
SubjectConfig : subjectConfig ,
X509Config : x509Parameters ,
},
Lifetime : & durationpb . Duration {
Seconds : caDuration ,
},
}
fullCaPoolName := fmt . Sprintf ( "projects/%s/locations/%s/caPools/%s" , projectId , location , caPoolId )
// Create the CreateCertificateAuthorityRequest.
// See https://pkg.go.dev/cloud.google.com/go/security/privateca/apiv1/privatecapb#CreateCertificateAuthorityRequest.
req := & privatecapb . CreateCertificateAuthorityRequest {
Parent : fullCaPoolName ,
CertificateAuthorityId : caId ,
CertificateAuthority : ca ,
}
op , err := caClient . CreateCertificateAuthority ( ctx , req )
if err != nil {
return fmt . Errorf ( "CreateCertificateAuthority failed: %w" , err )
}
if _ , err = op . Wait ( ctx ); err != nil {
return fmt . Errorf ( "CreateCertificateAuthority failed during wait: %w" , err )
}
fmt . Fprintf ( w , "CA %s created" , caId )
return nil
}
Java
import com.google.api.core. ApiFuture ;
import com.google.cloud.security.privateca.v1. CaPoolName ;
import com.google.cloud.security.privateca.v1. CertificateAuthority ;
import com.google.cloud.security.privateca.v1. CertificateAuthority . KeyVersionSpec ;
import com.google.cloud.security.privateca.v1. CertificateAuthority . SignHashAlgorithm ;
import com.google.cloud.security.privateca.v1. CertificateAuthorityServiceClient ;
import com.google.cloud.security.privateca.v1. CertificateConfig ;
import com.google.cloud.security.privateca.v1. CertificateConfig . SubjectConfig ;
import com.google.cloud.security.privateca.v1. CreateCertificateAuthorityRequest ;
import com.google.cloud.security.privateca.v1. KeyUsage ;
import com.google.cloud.security.privateca.v1. KeyUsage . KeyUsageOptions ;
import com.google.cloud.security.privateca.v1. Subject ;
import com.google.cloud.security.privateca.v1. X509Parameters ;
import com.google.cloud.security.privateca.v1. X509Parameters . CaOptions ;
import com.google.longrunning. Operation ;
import com.google.protobuf. Duration ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
public class CreateCertificateAuthority {
public static void main ( String [] args )
throws InterruptedException , ExecutionException , IOException {
// TODO(developer): Replace these variables before running the sample.
// location: For a list of locations, see:
// https://cloud.google.com/certificate-authority-service/docs/locations
// poolId: Set it to the CA Pool under which the CA should be created.
// certificateAuthorityName: Unique name for the CA.
String project = "your-project-id" ;
String location = "ca-location" ;
String poolId = "ca-pool-id" ;
String certificateAuthorityName = "certificate-authority-name" ;
createCertificateAuthority ( project , location , poolId , certificateAuthorityName );
}
// Create Certificate Authority which is the root CA in the given CA Pool.
public static void createCertificateAuthority (
String project , String location , String poolId , String certificateAuthorityName )
throws InterruptedException , ExecutionException , IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the `certificateAuthorityServiceClient.close()` method on the client to safely
// clean up any remaining background resources.
try ( CertificateAuthorityServiceClient certificateAuthorityServiceClient =
CertificateAuthorityServiceClient . create ()) {
String commonName = "common-name" ;
String orgName = "org-name" ;
int caDuration = 100000 ; // Validity of this CA in seconds.
// Set the type of Algorithm.
KeyVersionSpec keyVersionSpec =
KeyVersionSpec . newBuilder (). setAlgorithm ( SignHashAlgorithm . RSA_PKCS1_4096_SHA256 ). build ();
// Set CA subject config.
SubjectConfig subjectConfig =
SubjectConfig . newBuilder ()
. setSubject (
Subject . newBuilder (). setCommonName ( commonName ). setOrganization ( orgName ). build ())
. build ();
// Set the key usage options for X.509 fields.
X509Parameters x509Parameters =
X509Parameters . newBuilder ()
. setKeyUsage (
KeyUsage . newBuilder ()
. setBaseKeyUsage (
KeyUsageOptions . newBuilder (). setCrlSign ( true ). setCertSign ( true ). build ())
. build ())
. setCaOptions ( CaOptions . newBuilder (). setIsCa ( true ). build ())
. build ();
// Set certificate authority settings.
CertificateAuthority certificateAuthority =
CertificateAuthority . newBuilder ()
// CertificateAuthority.Type.SELF_SIGNED denotes that this CA is a root CA.
. setType ( CertificateAuthority . Type . SELF_SIGNED )
. setKeySpec ( keyVersionSpec )
. setConfig (
CertificateConfig . newBuilder ()
. setSubjectConfig ( subjectConfig )
. setX509Config ( x509Parameters )
. build ())
// Set the CA validity duration.
. setLifetime ( Duration . newBuilder (). setSeconds ( caDuration ). build ())
. build ();
// Create the CertificateAuthorityRequest.
CreateCertificateAuthorityRequest certificateAuthorityRequest =
CreateCertificateAuthorityRequest . newBuilder ()
. setParent ( CaPoolName . of ( project , location , poolId ). toString ())
. setCertificateAuthorityId ( certificateAuthorityName )
. setCertificateAuthority ( certificateAuthority )
. build ();
// Create Certificate Authority.
ApiFuture<Operation> futureCall =
certificateAuthorityServiceClient
. createCertificateAuthorityCallable ()
. futureCall ( certificateAuthorityRequest );
Operation response = futureCall . get ();
if ( response . hasError ()) {
System . out . println ( "Error while creating CA !" + response . getError ());
return ;
}
System . out . println (
"Certificate Authority created successfully : " + certificateAuthorityName );
}
}
}
Python
import google.cloud.security.privateca_v1 as privateca_v1
from google.protobuf import duration_pb2
def create_certificate_authority (
project_id : str ,
location : str ,
ca_pool_name : str ,
ca_name : str ,
common_name : str ,
organization : str ,
ca_duration : int ,
) - > None :
"""
Create Certificate Authority which is the root CA in the given CA Pool. This CA will be
responsible for signing certificates within this pool.
Args:
project_id: project ID or project number of the Cloud project you want to use.
location: location you want to use. For a list of locations, see: https://cloud.google.com/certificate-authority-service/docs/locations.
ca_pool_name: set it to the CA Pool under which the CA should be created.
ca_name: unique name for the CA.
common_name: a title for your certificate authority.
organization: the name of your company for your certificate authority.
ca_duration: the validity of the certificate authority in seconds.
"""
caServiceClient = privateca_v1 . CertificateAuthorityServiceClient ()
# Set the types of Algorithm used to create a cloud KMS key.
key_version_spec = privateca_v1 . CertificateAuthority . KeyVersionSpec (
algorithm = privateca_v1 . CertificateAuthority . SignHashAlgorithm . RSA_PKCS1_4096_SHA256
)
# Set CA subject config.
subject_config = privateca_v1 . CertificateConfig . SubjectConfig (
subject = privateca_v1 . Subject ( common_name = common_name , organization = organization )
)
# Set the key usage options for X.509 fields.
x509_parameters = privateca_v1 . X509Parameters (
key_usage = privateca_v1 . KeyUsage (
base_key_usage = privateca_v1 . KeyUsage . KeyUsageOptions (
crl_sign = True ,
cert_sign = True ,
)
),
ca_options = privateca_v1 . X509Parameters . CaOptions (
is_ca = True ,
),
)
# Set certificate authority settings.
certificate_authority = privateca_v1 . CertificateAuthority (
# CertificateAuthority.Type.SELF_SIGNED denotes that this CA is a root CA.
type_ = privateca_v1 . CertificateAuthority . Type . SELF_SIGNED ,
key_spec = key_version_spec ,
config = privateca_v1 . CertificateConfig (
subject_config = subject_config ,
x509_config = x509_parameters ,
),
lifetime = duration_pb2 . Duration ( seconds = ca_duration ),
)
ca_pool_path = caServiceClient . ca_pool_path ( project_id , location , ca_pool_name )
# Create the CertificateAuthorityRequest.
request = privateca_v1 . CreateCertificateAuthorityRequest (
parent = ca_pool_path ,
certificate_authority_id = ca_name ,
certificate_authority = certificate_authority ,
)
operation = caServiceClient . create_certificate_authority ( request = request )
result = operation . result ()
print ( "Operation result:" , result )
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
ca-service on Stack Overflow
Source code
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
ca-service on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
ca-service on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
ca-service on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
ca-service on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
ca-service on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
ca-service on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
ca-service on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
