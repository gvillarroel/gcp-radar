---
title: "Create a CA pool \_|\_ Certificate Authority Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/creating-ca-pool
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/creating-ca-pool
  title: "Create a CA pool \_|\_ Certificate Authority Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a CA pool
This page describes how to create certificate authority (CA) pools.
A CA pool is a collection of multiple CAs with a common certificate issuance
policy and Identity and Access Management (IAM) policy. A CA pool makes CA rotation
management easier and lets you achieve higher total effective queries per second
(QPS).
You must create a CA pool before you can use Certificate Authority Service to create a CA.
For more information, see Overview of CA
pools .
Before you begin
Make sure you have the CA Service Operation Manager
( roles/privateca.caManager ) IAM role. For information about
granting an IAM to a principal, see Grant a single
role .
Decide the CA pool's settings
This section describes the settings of a CA pool and provides recommendations
for deciding the settings.
Permanent CA pool settings
The following CA pool settings can't be changed after creating the CA pool.
Location
Specify the CA pool's location. A CA pool is stored in a single
Google Cloud location . We recommend that you create your
CA pool in the same location or near the location where you intend to use
it.
For the complete list of supported locations, see
Locations .
Tier
Choose whether you want to create the CA pool with the DevOps or the
Enterprise tier. This choice affects whether CA Service
persists the created certificates, whether created certificates can later be
revoked, and the maximum rate at which you can create certificates from the
CAs in the CA pool. For more information, see Select the operation
tiers .
Optional CA pool settings
Certificate issuance policy
A CA pool can have a certificate issuance policy. This issuance policy places
restrictions on the certificates that the CAs in the CA pool are allowed to
issue, such as allowed key types, maximum lifetimes, SAN constraints, and
backdate_duration .
You can update the issuance policy of a CA pool after you create the CA
pool. For more information, see Overview of templates and issuance
policies .
For more information about configuring a certificate issuance policy, see
Add a certificate issuance policy to a CA
pool .
Publishing options
You can configure a CA pool to publish the CA certificates for each of its
CAs. When issuing a certificate, the URL to this CA certificate is included in
the certificate as an authority information access (AIA) extension. You can
also specify custom AIA and CRL Distribution Point (CDP) URLs if you want to
point to your own OCSP servers or CRL locations.
CAs in Enterprise tier CA pools can be permitted to publish certificate
revocation lists (CRLs) to the associated Cloud Storage
bucket. When issuing a certificate, a URL to this CRL is included in the
certificate as the CRL Distribution Point (CDP) extension. You cannot find the
CRL without the CDP extension in the certificate. For more information, see
Revoke
certificates .
You can also select the encoding format of published CA certificates and CRLs.
The supported encoding formats are Privacy Enhanced Mail (PEM) and Distinguished
Encoding Rules (DER). If an encoding format is not specified, PEM will be used.
If you create the CA pool using Google Cloud CLI or Google Cloud console,
CA Service enables these publishing options by default. For more
information, see Disabling CA certificate and CRL publication for CAs in a CA
pool .
Customer-Managed Encryption Keys (CMEK)
By default, Certificate Authority Service encrypts customer content at
rest. CA Service handles encryption for you without any
additional actions on your part. This option is called Google default encryption .
If you want to control your encryption keys, then you can use customer-managed encryption keys
(CMEKs) in Cloud KMS with CMEK-integrated services including
CA Service. Using Cloud KMS keys gives you control over their protection
level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
Using Cloud KMS also lets
you track key usage , view audit logs, and
control key lifecycles.
Instead of Google owning and managing the symmetric
key encryption keys (KEKs) that protect your data, you control and
manage these keys in Cloud KMS.
After you set up your CA pools with CMEKs, the experience of accessing your
CA Service CA pools is similar to using Google default encryption.
For more information about your encryption
options, see Customer-managed encryption keys (CMEK) .
When an EncryptionSpec is provided,
CA Service encrypts fields such as the certificate subject,
Subject Alternative Names (SANs), and the PEM-encoded certificate or
Certificate Signing Request (CSR).
The following table shows the specific fields that are encrypted using CMEK:
Category
Encrypted Fields
PEM Data
pem_csr pem_certificate pem_certificate_chain
Subject
config.subject_config.subject certificate_description.subject_description.subject
Subject Alt Name
config.subject_config.subject_alt_name certificate_description.subject_description.subject_alt_name
To use CMEK, you must provide the resource name of a symmetric
Cloud KMS key that's located in the same Google Cloud region as
your CA pool.
Important Considerations:
Impact on Quotas: Certificate issuance operations consume
Cloud KMS quotas in the project that hosts the CMEK. High-volume
certificate issuance can lead to significant Cloud Key Management Service quota usage. To
prevent this usage from impacting other services, we recommend that you use a
dedicated project for your CMEK to isolate quota consumption.
Latency: CMEK operations add latency to certificate issuance. This
effect is more pronounced for externally managed keys (Cloud EKM).
Availability: The associated CMEK must be available and the Service
Agent must have a valid grant to use it. If the key is inaccessible (e.g.,
disabled, destroyed, or permissions revoked), certificate issuance and
management operations requiring decryption will fail.
For more information about setting up the service agent and permissions, see
CA Service Service Agent role .
Create a CA pool
To create a CA pool, use the following instructions:
Console
Choose a name for the CA pool
Go to the Certificate Authority Service page in the Google Cloud console.
Go to Certificate Authority Service
Click CA pool manager .
Click add_box Create pool .
Add a name for the CA pool that is unique for the region.
Select a region from the drop-down in the Region field. For more
information, see Choosing the best
location .
Select either the Enterprise or the DevOps tier. For more information, see
Select the operation tiers .
Click Next .
Configure allowed key algorithms and sizes
CA Service lets you choose the signing algorithms for the
Cloud KMS keys that back the CAs in the CA pool. All key algorithms
are allowed by default.
To restrict the allowed keys in the certificates issued by the CA pool, do
the following. This is an optional procedure.
Click the toggle.
Click Add an item .
In the Type list, select the key type.
If you want to use RSA keys, do the following:
Optional: Add the minimum modulus size in bits.
Optional: Add the maximum modulus size in bits.
Click Done .
If you want to use elliptic curve keys, do the following:
Optional: In the Elliptic curve type list, select the elliptic curve
type.
Click Done .
To add another allowed key, click Add an item , and repeat Step
2.
Click Next .
Configure certificate request methods
To place limitations on the methods that certificate requesters can use to
request certificates from the CA pool, do the following:
Optional: To restrict CSR-based certificate requests, click the toggle.
Optional: To restrict configuration-based certificate requests, click
the toggle.
Configure publishing options
To configure publishing options, do the following:
Optional: To disallow publishing CA certificates to the Cloud Storage
bucket for the CAs in the CA pool, click the toggle.
Optional: To disallow publishing CRLs to the Cloud Storage bucket for
the CAs in the CA pool, click the toggle.
Click the menu to select the encoding format for published CA
certificates and CRLs.
Click Next .
Define base key usage
This setting refers to the Key Usage field within a digital
certificate. It specifies how the certificate's private key can be used,
such as for key encipherment, data encipherment, certificate signing, and CRL signing.
For more information, see Key usage .
To select the base key usages, click the Specify base key usages for certificates issued from this CA pool toggle,
and then select from the options listed.
Click Next .
Define extended key usage
This setting refers to the Extended Key Usage (EKU) field in a digital
certificate. It provides more specific and refined restrictions on how the key
can be used, such as for server authentication, client authentication, code signing,
and email protection. For more information, see
Extended key usage .
Extended key usages are defined using object identifiers (OIDs). If you don't
configure the extended key usages, all key usage scenarios are allowed.
To select the extended key usages, click the Write extended key usages for
certificates issued from this CA pool toggle, and then select from the options
listed.
Click Next .
Define policy identifiers
The certificate policies extension in the certificate expresses the policies
that the issuing CA pool follows. This extension can include information about how
identities are validated before certificate issuance, how certificates are
revoked, and how the CA pool's integrity is ensured. This extension helps you
verify the certificates that the CA pool issues and see how the certificates
are used.
For more information, see Certificate policies .
To specify the policy that defines the certificate usage, do the following:
Add the policy identifier in the Policy identifiers field.
Click Next .
Add Authority information access (AIA) OCSP servers
The AIA extension in a certificate provides the following information:
Address of the OCSP servers from where you can check the revocation status
of the certificate.
The access method for the issuer of the certificate.
For more information, see Authority information access .
To add the OCSP servers that appear in the AIA
extension field in the certificates, do the following:
Click Add item .
In the Server URL field, add the URL of the OCSP server.
Click Done .
Click Next .
CA options
The CA options field within a certificate template defines how the
resulting certificate can be used in a certificate authority (CA) hierarchy.
CA options determine if a certificate can be used to sign other certificates
and, if so, the restrictions on the certificates it issues.
Choose from the following options:
Include the configs to describe the CA X.509 extensions : Specify
the settings within a certificate template that control the X.509 extensions.
Restrict issued certificates to be used only for CAs : This option
appears only if you select the checkbox mentioned in the previous step. This
boolean value indicates whether the certificate is a CA certificate.
If set to true , the certificate can be used to sign other certificates. If
false , the certificate is an end-entity certificate and cannot sign other certificates.
If you click this toggle, you are further prompted to define name constraints
for the extension in CA certificates.
Include the configs to describe the path length restriction X.509 extensions :
Specify the settings that control how long a chain of certificates can be,
stemming from a particular certificate. If the max issuer path length
is set to 0 , then the CA can only issue end-entity certificates. If it's
set to 1 , then the chain beneath this CA certificate can include only one
subordinate CA. If a value isn't declared, then the number of subordinate CAs
in the chain beneath this CA is unbounded.
Click Next .
Configure additional extensions
To configure additional custom extensions to include in the
certificates issued by the CA pool, do the following:
Click Add item .
In the Object identifier field, add a valid object identifier that
is formatted as dot-separated digits.
In the Value field, add the base64-encoded value for the identifier.
If the extension is critical, select Extension is critical .
To save all the baseline value configurations, click Done .
To create the CA pool, click Done .
gcloud
Run the following command:
gcloud privateca pools create POOL_NAME --location= LOCATION
Replace the following:
POOL_NAME : the name of the CA pool.
LOCATION : the location where you want to create the
CA pool. For the complete list of locations, see Locations .
If you don't specify which tier you require for your CA pool, the
Enterprise tier is selected by default. If you want to specify the tier
for your CA pool, run the following gcloud command:
gcloud privateca pools create POOL_NAME --location= LOCATION --tier= TIER_NAME
Replace the following:
POOL_NAME : the name of your CA pool.
LOCATION : the location where you want to create the
CA pool. For the complete list of locations, see Locations .
TIER_NAME : either devops or
enterprise . For more information, see Select the operation
tiers .
If you don't specify the publishing encoding format for your CA pool, the
PEM publishing encoding format is selected by default. If you want to
specify the publishing encoding format for your CA pool, run the following
gcloud command:
gcloud privateca pools create POOL_NAME --location= LOCATION --publishing-encoding-format= PUBLISHING_ENCODING_FORMAT
Replace the following:
POOL_NAME : the name of your CA pool.
LOCATION : the location where you want to create the CA
pool. For the complete list of locations, see Locations .
PUBLISHING_ENCODING_FORMAT : either PEM or
DER .
For more information about the gcloud privateca pools create command, see
gcloud privateca pools
create .
For information about placing restrictions on the type of certificates that
a CA pool can issue, see Add a certificate issuance policy to a CA
pool .
Terraform
resource "google_privateca_ca_pool" "default" {
name = "ca-pool"
location = "us-central1"
tier = "ENTERPRISE"
publishing_options {
publish_ca_cert = true
publish_crl = true
}
labels = {
foo = "bar"
}
}
Go
To authenticate to CA Service, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
privateca "cloud.google.com/go/security/privateca/apiv1"
"cloud.google.com/go/security/privateca/apiv1/privatecapb"
)
// Create a Certificate Authority pool. All certificates created under this CA pool will
// follow the same issuance policy, IAM policies, etc.
func createCaPool ( w io . Writer , projectId string , location string , caPoolId string ) error {
// projectId := "your_project_id"
// location := "us-central1" // For a list of locations, see: https://cloud.google.com/certificate-authority-service/docs/locations.
// caPoolId := "ca-pool-id" // A unique id/name for the ca pool.
ctx := context . Background ()
caClient , err := privateca . NewCertificateAuthorityClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewCertificateAuthorityClient creation failed: %w" , err )
}
defer caClient . Close ()
caPool := & privatecapb . CaPool {
// Set the tier (see: https://cloud.google.com/certificate-authority-service/docs/tiers).
Tier : privatecapb . CaPool_ENTERPRISE ,
}
locationPath := fmt . Sprintf ( "projects/%s/locations/%s" , projectId , location )
// See https://pkg.go.dev/cloud.google.com/go/security/privateca/apiv1/privatecapb#CreateCaPoolRequest.
req := & privatecapb . CreateCaPoolRequest {
Parent : locationPath ,
CaPoolId : caPoolId ,
CaPool : caPool ,
}
op , err := caClient . CreateCaPool ( ctx , req )
if err != nil {
return fmt . Errorf ( "CreateCaPool failed: %w" , err )
}
if _ , err = op . Wait ( ctx ); err != nil {
return fmt . Errorf ( "CreateCaPool failed during wait: %w" , err )
}
fmt . Fprintf ( w , "CA Pool created" )
return nil
}
Java
To authenticate to CA Service, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.api.core. ApiFuture ;
import com.google.cloud.security.privateca.v1. CaPool ;
import com.google.cloud.security.privateca.v1. CaPool . IssuancePolicy ;
import com.google.cloud.security.privateca.v1. CaPool . Tier ;
import com.google.cloud.security.privateca.v1. CertificateAuthorityServiceClient ;
import com.google.cloud.security.privateca.v1. CertificateIdentityConstraints ;
import com.google.cloud.security.privateca.v1. CreateCaPoolRequest ;
import com.google.cloud.security.privateca.v1. LocationName ;
import com.google.longrunning. Operation ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
public class CreateCaPool {
public static void main ( String [] args )
throws InterruptedException , ExecutionException , IOException {
// TODO(developer): Replace these variables before running the sample.
// location: For a list of locations, see:
// https://cloud.google.com/certificate-authority-service/docs/locations
// poolId: Set a unique poolId for the CA pool.
String project = "your-project-id" ;
String location = "ca-location" ;
String poolId = "ca-pool-id" ;
createCaPool ( project , location , poolId );
}
// Create a Certificate Authority Pool. All certificates created under this CA pool will
// follow the same issuance policy, IAM policies,etc.,
public static void createCaPool ( String project , String location , String poolId )
throws InterruptedException , ExecutionException , IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the `certificateAuthorityServiceClient.close()` method on the client to safely
// clean up any remaining background resources.
try ( CertificateAuthorityServiceClient certificateAuthorityServiceClient =
CertificateAuthorityServiceClient . create ()) {
IssuancePolicy issuancePolicy = IssuancePolicy . newBuilder ()
. setIdentityConstraints ( CertificateIdentityConstraints . newBuilder ()
. setAllowSubjectPassthrough ( true )
. setAllowSubjectAltNamesPassthrough ( true )
. build ())
. build ();
/* Create the pool request
Set Parent which denotes the project id and location.
Set the Tier (see: https://cloud.google.com/certificate-authority-service/docs/tiers).
*/
CreateCaPoolRequest caPoolRequest =
CreateCaPoolRequest . newBuilder ()
. setParent ( LocationName . of ( project , location ). toString ())
. setCaPoolId ( poolId )
. setCaPool (
CaPool . newBuilder ()
. setIssuancePolicy ( issuancePolicy )
. setTier ( Tier . ENTERPRISE )
. build ())
. build ();
// Create the CA pool.
ApiFuture<Operation> futureCall =
certificateAuthorityServiceClient . createCaPoolCallable (). futureCall ( caPoolRequest );
Operation response = futureCall . get ();
if ( response . hasError ()) {
System . out . println ( "Error while creating CA pool !" + response . getError ());
return ;
}
System . out . println ( "CA pool created successfully: " + poolId );
}
}
}
Python
To authenticate to CA Service, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import google.cloud.security.privateca_v1 as privateca_v1
def create_ca_pool ( project_id : str , location : str , ca_pool_name : str ) - > None :
"""
Create a Certificate Authority pool. All certificates created under this CA pool will
follow the same issuance policy, IAM policies,etc.,
Args:
project_id: project ID or project number of the Cloud project you want to use.
location: location you want to use. For a list of locations, see: https://cloud.google.com/certificate-authority-service/docs/locations.
ca_pool_name: a unique name for the ca pool.
"""
caServiceClient = privateca_v1 . CertificateAuthorityServiceClient ()
ca_pool = privateca_v1 . CaPool (
# Set the tier (see: https://cloud.google.com/certificate-authority-service/docs/tiers).
tier = privateca_v1 . CaPool . Tier . ENTERPRISE ,
)
location_path = caServiceClient . common_location_path ( project_id , location )
# Create the pool request.
request = privateca_v1 . CreateCaPoolRequest (
parent = location_path ,
ca_pool_id = ca_pool_name ,
ca_pool = ca_pool ,
)
# Create the CA pool.
operation = caServiceClient . create_ca_pool ( request = request )
print ( "Operation result:" , operation . result ())
REST API
Create a CA pool.
HTTP method and URL:
POST https://privateca.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /caPools\?ca_pool_id= POOL_ID
Request JSON body:
{
"tier": "ENTERPRISE"
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://privateca.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /caPools\?ca_pool_id= POOL_ID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://privateca.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /caPools\?ca_pool_id= POOL_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/operation- UUID ",
"metadata": {...},
"done": false
}
Poll the operation until it is complete.
The operation is complete when the long-running operation's done property
is set to true .
HTTP method and URL:
GET https://privateca.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /operations/operation- UUID
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://privateca.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /operations/operation- UUID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://privateca.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /operations/operation- UUID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/operation- UUID ",
"metadata": {...},
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.security.privateca.v1.CaPool",
"name": "...",
"tier": "ENTERPRISE"
}
}
Note: If you delete resources such as CA pools, certificate authorities, and
certificate templates, you will not be able to create a new resource of that
type with the same name in the same project and location.
Add or update labels on a CA pool
A label is a key-value pair that helps you organize your CA Service
resources. You can filter your resources based on their labels.
To add or update labels on a CA pool, do the following:
Console
To add a label, do the following:
Go to the Certificate Authority Service page.
Go to Certificate Authority Service
In the CA pool manager tab, select the CA pool.
Click Labels .
Click add Add label .
Add a key-value pair.
Click Save .
To edit an existing label, do the following:
Go to the Certificate Authority Service page.
Go to Certificate Authority Service
In the CA pool manager tab, select the CA pool.
Click Labels .
Edit the value of the label.
Click Save .
gcloud
Run the following command:
gcloud privateca pools update POOL_ID --location= LOCATION --update-labels foo=bar
Replace the following:
POOL_ID : the name of the CA pool.
LOCATION : the location of the CA pool. For the
complete list of locations, see Locations .
What's next
Learn how to create a root
CA .
Learn how to create a subordinate
CA .
Learn how to use a certificate issuance
policy .
Learn how to increase certificate creation throughput using CA
pools .
Learn how to update and delete a CA
pool .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
