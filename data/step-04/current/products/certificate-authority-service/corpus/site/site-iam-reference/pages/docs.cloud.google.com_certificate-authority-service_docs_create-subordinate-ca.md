---
title: "Create a subordinate certificate authority \_|\_ Certificate Authority Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/create-subordinate-ca
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/create-subordinate-ca
  title: "Create a subordinate certificate authority \_|\_ Certificate Authority Service\
    \ \_|\_ Google Cloud Documentation"
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
Create a subordinate certificate authority
This page describes how to create subordinate certificate authorities (CAs) in a
CA pool.
Subordinate CAs are responsible for issuing certificates directly to
end-entities such as users, computers, and devices. Subordinate CAs are
cryptographically signed by a parent CA, which is often the root CA. As a
result, systems that trust the root CA, automatically trust the subordinate CAs
and the end-entity certificates that the subordinate CAs issue.
Before you begin
Make sure you have the CA Service Operation Manager
( roles/privateca.caManager ) or the CA Service Admin
( roles/privateca.admin ) IAM role. For information, see
Configure IAM
policies .
Create a CA pool .
Select your root CA.
Create a subordinate CA
Subordinate CAs are easier to revoke and rotate than root CAs. If you have
multiple certificate issuance scenarios, you can create a subordinate CA for
each of those scenarios. Adding multiple subordinate CAs in a CA pool helps you
achieve better load-balancing of certificate requests and a higher total
effective QPS .
To create a subordinate CA, do the following:
Console
Go to the Certificate Authority Service page in the
Google Cloud console.
Go to Certificate Authority Service
Click the CA manager tab.
Click Create CA .
Select CA type
Click Subordinate CA .
Click Root CA is in Google Cloud .
In the Valid for field, enter the duration that you want the CA
certificate to be valid for.
Optional: Choose the tier for the CA. The default tier is
Enterprise . For more information, see Select the operation
tiers .
Click Region to select a location for the CA. For more information,
see Locations .
Optional: Under Initialized state , select the operational state to
create the CA in.
Optional: Under Set up an issuance scenario , click
Certificate profile and select the certificate profile that best
suits your requirements from the list. For more information, see
Certificate
profiles .
Click Next .
Configure CA subject name
In the Organization (O) field, enter the name of your company.
Optional: In the Organization unit (OU) field, enter the company
subdivision or business unit.
Optional: In the Country name (C) field, enter a two letter country code.
Optional: In the State or province name field, enter the name of
your state.
Optional: In the Locality name field, enter the name of your city.
In the CA common name (CN) field, enter the CA name.
Click Continue .
Configure CA key size and algorithm
Choose the key algorithm that best meets your needs. For more details on signing key options, see Configure CA signing keys .
To use a customer-managed signing key, select Customer-managed key and provide the Cloud Key Management Service crypto key version.
Click Continue .
Configure CA artifacts
Choose whether you want to use a Google-managed or a customer-managed
Cloud Storage bucket.
For a Google-managed Cloud Storage bucket, CA Service creates a Google-managed bucket in the same location as the CA.
For a customer-managed Cloud Storage bucket, click Browse and select one of the existing Cloud Storage buckets.
Click Continue .
Add labels
The following steps are optional.
If you want to add labels to the CA, do the following:
Click add Add item .
In the Key 1 field, enter the label key.
In the Value 1 field, enter the label value.
If you want to add another label, click
add Add item . Then, add the
label key and value as mentioned in steps 2 and 3.
Click Continue .
Review the settings
Carefully review all the settings, then click Done to create the CA.
gcloud
Create a CA pool for the subordinate CA:
gcloud privateca pools create SUBORDINATE_POOL_ID --location = LOCATION
Replace the following:
SUBORDINATE_POOL_ID : the name of the CA pool.
LOCATION : the location where you want to create the
CA pool. For the complete list of locations, see Locations .
For more information about creating CA pools, see Create a CA
pool .
For more information about the gcloud privateca pools create command, see
gcloud privateca pools
create .
Create a subordinate CA in the created CA pool.
Note: You can obtain the issuer's resource ID ( ISSUER_POOL_ID )
by copying the ID from the create command, or by using the gcloud
privateca pools list command.
gcloud privateca subordinates create SUBORDINATE_CA_ID \
--pool= SUBORDINATE_POOL_ID \
--location= LOCATION \
--issuer-pool= ISSUER_POOL_ID \
--issuer-location= ISSUER_LOCATION \
--key-algorithm="ec-p256-sha256" \
--subject="CN=Example Server TLS CA, O=Example LLC"
Replace the following:
SUBORDINATE_CA_ID : the unique identifier of the
subordinate CA.
SUBORDINATE_POOL_ID : the name of the CA pool.
LOCATION : the location of the CA pool.
ISSUER_POOL_ID : the name of the CA pool containing the issuing CA.
ISSUER_LOCATION : the location of the CA pool containing the issuing CA.
The --key-algorithm flag specifies the cryptographic algorithm that you want to
use for creating a managed Cloud HSM key for the CA.
The --subject flag specifies the X.501 name of the certificate subject.
To create a subordinate CA using a customer-managed signing key, run the following command:
gcloud privateca subordinates create SUBORDINATE_CA_ID \
--pool= SUBORDINATE_POOL_ID \
--location= LOCATION \
--issuer-pool= ISSUER_POOL_ID \
--issuer-location= ISSUER_LOCATION \
--kms-key-version= KMS_KEY_VERSION \
--subject="CN=Example Server TLS CA, O=Example LLC"
Replace the following:
SUBORDINATE_POOL_ID : the name of the CA pool.
LOCATION : the location of the CA pool.
ISSUER_POOL_ID : the name of the CA pool containing the issuing CA.
ISSUER_LOCATION : the location of the CA pool containing the issuing CA.
KMS_KEY_VERSION : the full resource ID of a customer-managed Cloud KMS crypto key version to use as the signing key.
For more details on signing key options and preparing a customer-managed signing key, see Configure CA signing keys .
The following statement is returned when the subordinate CA is created.
Created Certificate Authority [projects/my-project-pki/locations/us-west1/caPools/ SUBORDINATE_POOL_ID /certificateAuthorities/ SUBORDINATE_CA_ID ].
To specify custom Authority Information Access (AIA) and CRL Distribution
Point (CDP) access URLs, use the --custom-aia-urls
and --custom-cdp-urls flags. If specified, these URLs are
included in all certificates issued by the CA and supersede the default
Cloud Storage bucket access URLs.
To see an exhaustive list of settings, run the following gcloud command:
gcloud privateca subordinates create --help
The command returns examples to create a subordinate CA whose issuer is
either located on CA Service or located elsewhere.
Terraform
resource "google_privateca_certificate_authority" "root_ca" {
// This example assumes this pool already exists.
// Pools cannot be deleted in normal test circumstances, so we depend on static pools
pool = "my-pool"
certificate_authority_id = "my-certificate-authority-root"
location = "us-central1"
deletion_protection = false # set to true to prevent destruction of the resource
ignore_active_certificates_on_deletion = true
config {
subject_config {
subject {
organization = "ACME"
common_name = "my-certificate-authority"
}
}
x509_config {
ca_options {
# is_ca *MUST* be true for certificate authorities
is_ca = true
}
key_usage {
base_key_usage {
# cert_sign and crl_sign *MUST* be true for certificate authorities
cert_sign = true
crl_sign = true
}
extended_key_usage {
}
}
}
}
key_spec {
algorithm = "RSA_PKCS1_4096_SHA256"
}
// valid for 10 years
lifetime = "${10 * 365 * 24 * 3600}s"
}
resource "google_privateca_certificate_authority" "sub_ca" {
// This example assumes this pool already exists.
// Pools cannot be deleted in normal test circumstances, so we depend on static pools
pool = "my-sub-pool"
certificate_authority_id = "my-certificate-authority-sub"
location = "us-central1"
deletion_protection = false # set to true to prevent destruction of the resource
subordinate_config {
certificate_authority = google_privateca_certificate_authority.root_ca.name
}
config {
subject_config {
subject {
organization = "ACME"
common_name = "my-subordinate-authority"
}
}
x509_config {
ca_options {
is_ca = true
# Force the sub CA to only issue leaf certs.
# Use e.g.
# max_issuer_path_length = 1
# if you need to chain more subordinates.
zero_max_issuer_path_length = true
}
key_usage {
base_key_usage {
cert_sign = true
crl_sign = true
}
extended_key_usage {
}
}
}
}
// valid for 5 years
lifetime = "${5 * 365 * 24 * 3600}s"
key_spec {
algorithm = "RSA_PKCS1_2048_SHA256"
}
type = "SUBORDINATE"
}
Java
To authenticate to CA Service, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
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
import com.google.cloud.security.privateca.v1. SubjectAltNames ;
import com.google.cloud.security.privateca.v1. X509Parameters ;
import com.google.cloud.security.privateca.v1. X509Parameters . CaOptions ;
import com.google.longrunning. Operation ;
import com.google.protobuf. Duration ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
public class CreateSubordinateCa {
public static void main ( String [] args )
throws InterruptedException , ExecutionException , IOException {
// TODO(developer): Replace these variables before running the sample.
// location: For a list of locations, see:
// https://cloud.google.com/certificate-authority-service/docs/locations
// poolId: Set it to the CA Pool under which the CA should be created.
// subordinateCaName: Unique name for the Subordinate CA.
String project = "your-project-id" ;
String location = "ca-location" ;
String poolId = "ca-pool-id" ;
String subordinateCaName = "subordinate-certificate-authority-name" ;
createSubordinateCertificateAuthority ( project , location , poolId , subordinateCaName );
}
public static void createSubordinateCertificateAuthority (
String project , String location , String poolId , String subordinateCaName )
throws IOException , ExecutionException , InterruptedException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the `certificateAuthorityServiceClient.close()` method on the client to safely
// clean up any remaining background resources.
try ( CertificateAuthorityServiceClient certificateAuthorityServiceClient =
CertificateAuthorityServiceClient . create ()) {
String commonName = "commonname" ;
String orgName = "csr-org-name" ;
String domainName = "dns.example.com" ;
int caDuration = 100000 ; // Validity of this CA in seconds.
// Set the type of Algorithm.
KeyVersionSpec keyVersionSpec =
KeyVersionSpec . newBuilder (). setAlgorithm ( SignHashAlgorithm . RSA_PKCS1_4096_SHA256 ). build ();
// Set CA subject config.
SubjectConfig subjectConfig =
SubjectConfig . newBuilder ()
. setSubject (
Subject . newBuilder (). setCommonName ( commonName ). setOrganization ( orgName ). build ())
// Set the fully qualified domain name.
. setSubjectAltName ( SubjectAltNames . newBuilder (). addDnsNames ( domainName ). build ())
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
CertificateAuthority subCertificateAuthority =
CertificateAuthority . newBuilder ()
. setType ( CertificateAuthority . Type . SUBORDINATE )
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
CreateCertificateAuthorityRequest subCertificateAuthorityRequest =
CreateCertificateAuthorityRequest . newBuilder ()
. setParent ( CaPoolName . of ( project , location , poolId ). toString ())
. setCertificateAuthorityId ( subordinateCaName )
. setCertificateAuthority ( subCertificateAuthority )
. build ();
// Create Subordinate CA.
ApiFuture<Operation> futureCall =
certificateAuthorityServiceClient
. createCertificateAuthorityCallable ()
. futureCall ( subCertificateAuthorityRequest );
Operation response = futureCall . get ();
if ( response . hasError ()) {
System . out . println ( "Error while creating Subordinate CA !" + response . getError ());
return ;
}
System . out . println (
"Subordinate Certificate Authority created successfully : " + subordinateCaName );
}
}
}
Python
To authenticate to CA Service, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import google.cloud.security.privateca_v1 as privateca_v1
from google.protobuf import duration_pb2
def create_subordinate_ca (
project_id : str ,
location : str ,
ca_pool_name : str ,
subordinate_ca_name : str ,
common_name : str ,
organization : str ,
domain : str ,
ca_duration : int ,
) - > None :
"""
Create Certificate Authority (CA) which is the subordinate CA in the given CA Pool.
Args:
project_id: project ID or project number of the Cloud project you want to use.
location: location you want to use. For a list of locations, see: https://cloud.google.com/certificate-authority-service/docs/locations.
ca_pool_name: set it to the CA Pool under which the CA should be created.
subordinate_ca_name: unique name for the Subordinate CA.
common_name: a title for your certificate authority.
organization: the name of your company for your certificate authority.
domain: the name of your company for your certificate authority.
ca_duration: the validity of the certificate authority in seconds.
"""
ca_service_client = privateca_v1 . CertificateAuthorityServiceClient ()
# Set the type of Algorithm
key_version_spec = privateca_v1 . CertificateAuthority . KeyVersionSpec (
algorithm = privateca_v1 . CertificateAuthority . SignHashAlgorithm . RSA_PKCS1_4096_SHA256
)
# Set CA subject config.
subject_config = privateca_v1 . CertificateConfig . SubjectConfig (
subject = privateca_v1 . Subject (
common_name = common_name , organization = organization
),
# Set the fully qualified domain name.
subject_alt_name = privateca_v1 . SubjectAltNames ( dns_names = [ domain ]),
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
type_ = privateca_v1 . CertificateAuthority . Type . SUBORDINATE ,
key_spec = key_version_spec ,
config = privateca_v1 . CertificateConfig (
subject_config = subject_config ,
x509_config = x509_parameters ,
),
# Set the CA validity duration.
lifetime = duration_pb2 . Duration ( seconds = ca_duration ),
)
ca_pool_path = ca_service_client . ca_pool_path ( project_id , location , ca_pool_name )
# Create the CertificateAuthorityRequest.
request = privateca_v1 . CreateCertificateAuthorityRequest (
parent = ca_pool_path ,
certificate_authority_id = subordinate_ca_name ,
certificate_authority = certificate_authority ,
)
operation = ca_service_client . create_certificate_authority ( request = request )
result = operation . result ()
print ( f "Operation result: { result } " )
Enable a subordinate CA
To enable a subordinate CA, do the following:
Console
Go to the Certificate Authority Service page in the
Google Cloud console.
Go to Certificate Authority Service
Click the CA manager tab.
Under Certificate authorities , select the CA that you want to
activate.
Click power_settings_new Activate .
In the dialog that opens, click Download CSR to download the
PEM-encoded CSR file that the issuing CA can sign.
Click Next .
In the Upload Certificate Chain field, click Browse .
Upload the signed certificate file with .crt extension.
Click Activate .
gcloud
To enable a newly created subordinate CA, run the following command:
gcloud privateca subordinates enable SUBORDINATE_CA_ID \
--pool= SUBORDINATE_POOL_ID \
--location= LOCATION
Replace the following:
SUBORDINATE_CA_ID : the unique identifier of the
subordinate CA.
SUBORDINATE_POOL_ID : the name of the CA pool that
contains the subordinate CA.
LOCATION : the location of the CA pool. For the
complete list of locations, see Locations .
For more information about the gcloud privateca subordinates enable
command, see gcloud privateca subordinates
enable .
Terraform
Set field desired_state to ENABLED on the subordinate CA and run
terraform apply .
Note: CA Service doesn't check the revocation status of the root CA
before enabling a subordinate CA that chains up to it. The only exception to
this policy is when you have created the root CA using CA Service.
In this scenario, CA Service checks the revocation status of the
root CA daily. If the root CA is revoked, CA Service updates the
privateca.googleapis.com/ca/cert_revoked metric on the
subordinate CA.
What's next
Learn how to request
certificates .
Learn about templates and issuance
policies .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
