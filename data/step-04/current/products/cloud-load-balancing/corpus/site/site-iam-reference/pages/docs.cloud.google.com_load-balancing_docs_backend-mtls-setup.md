---
title: "Set up backend mTLS \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup
  title: "Set up backend mTLS \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Load Balancing
Guides
Send feedback
Set up backend mTLS
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions to set up backend mTLS by using
self-managed certificates.
The steps to configure backend mTLS are similar to backend authenticated
TLS , except that you also
need to create a certificate for the load balancer. This certificate, also known
as the client certificate , is attached to the
backend authentication config
resource. The load balancer uses this client certificate to authenticate itself
to the backends.
To configure backend mTLS , you need to do the following. These steps are
described in the following sections of this document.
Create a trust config resource that consists of
root and intermediate certificates.
Create a client certificate and upload it to Certificate Manager.
Create a backend authentication config resource that references
both the trust config and the client certificate.
Attach the backend authentication config resource to the backend service
of the load balancer.
Before you begin
Review the Backend authenticated TLS and backend mTLS overview .
Review Manage trust
configs .
If you want to follow the instructions in this guide using the
Google Cloud CLI, you need to install it. You can find
commands related to load balancing in the
API and gcloud CLI references .
If you haven't run the gcloud CLI previously, first run the
gcloud init command to authenticate.
Enable the following APIs: Compute Engine API, Certificate Manager API,
Network Security, and Network Services API. To learn more, see Enabling APIs .
Configure a load balancer with any of the following supported backends:
VM instance group backends
Hybrid connectivity NEGs
Zonal NEGs
Permissions
This section lists the permissions required to configure backend mTLS.
Operation
Permission
Create a trust config
certificatemanager.trustconfigs.create on the target
Google Cloud project
Create a client certificate
certificatemanager.certs.create on the target
Google Cloud project
Create a backend authentication config resource
certificatemanager.certs.use on the target certificate
certificatemanager.trustconfigs.use on the target trust
config
networksecurity.backendauthenticationconfigs.create on
the target Google Cloud project
Attach the backend authentication config resource to the
backend service of the load balancer
compute.backendservice.update on the target backend
service
networksecurity.backendauthenticationconfigs.use on the
target backend authentication config resource
Setup overview
The sections that follow describe the steps to configure backend mTLS
based on the architecture shown in the following diagram.
Backend mTLS components (click to enlarge).
Create the root and intermediate certificates
Note:
If you already have certificates to upload to the trust store, you can skip
this step and jump to Format the certificates .
This section uses the OpenSSL library to create
the root certificate (trust anchor) and the intermediate certificate.
A root certificate is at the top
of the certificate chain. An intermediate certificate is a part of the chain
of trust back to the root certificate. The intermediate certificate is
cryptographically signed by the root certificate. When the load balancer
receives a server certificate, the load balancer validates it by establishing a
chain of trust from the server certificate back to the configured trust anchor.
Use the following commands to create the root and intermediate certificates.
Create an OpenSSL configuration
file .
In the following example, the configuration file ( example.cnf ) contains
the [ca_exts] section, which specifies X.509 extensions that mark the
certificate as suitable for a CA. To learn more about the requirements for
root and intermediate certificates, see Certificate
requirements .
cat > example.cnf << EOF
[ req ]
distinguished_name = empty_distinguished_name
[ empty_distinguished_name ]
# Kept empty to allow setting via -subj command-line argument.
[ ca_exts ]
basicConstraints = critical,CA:TRUE
keyUsage = keyCertSign
extendedKeyUsage = serverAuth
EOF
Create a self-signed X.509 root certificate ( root.cert ). The root
certificate is self-signed with its own private key ( root.key ).
openssl req -x509 \
-new -sha256 -newkey rsa:2048 -nodes \
-days 3650 -subj '/CN=root' \
-config example.cnf \
-extensions ca_exts \
-keyout root.key -out root.cert
Create the certificate signing request (CSR) int.req for the intermediate
certificate.
openssl req -new \
-sha256 -newkey rsa:2048 -nodes \
-subj '/CN=int' \
-config example.cnf \
-extensions ca_exts \
-keyout int.key -out int.req
Sign the CSR to create the X.509 intermediate certificate ( int.cert ). The
CSR is signed using the root certificate.
openssl x509 -req \
-CAkey root.key -CA root.cert \
-set_serial 1 \
-days 3650 \
-extfile example.cnf \
-extensions ca_exts \
-in int.req -out int.cert
Format the certificates
To include new or existing certificates in a trust store, format the
certificates into a single line and store them in environment variables
so that they can be referenced by the trust config YAML file.
export ROOT_CERT = $( cat root.cert | sed 's/^[ ]*//g' | tr '\n' $ | sed 's/\$/\\n/g' )
export INTERMEDIATE_CERT = $( cat int.cert | sed 's/^[ ]*//g' | tr '\n' $ | sed 's/\$/\\n/g' )
Create a trust config
A trust config is a resource that represents your
public key infrastructure (PKI) configuration in
Certificate Manager.
To create a trust config resource, complete the following steps:
Console
In the Google Cloud console, go to the Certificate Manager page.
Go to Certificate Manager
On the Trust Configs tab, click Add Trust Config .
Enter a name for the configuration.
For Location , select Global or Regional .
The location denotes where the trust
config resource is stored. For global external Application Load Balancers and
cross-region internal Application Load Balancers, create a global trust config resource.
For regional external Application Load Balancers and regional internal Application Load Balancers,
create a regional trust config resource.
In the Trust store section, click Add trust anchor and upload the
PEM-encoded certificate file, or copy the contents of the certificate.
Click Add .
In the Trust store section, click Add intermediate CA and
upload the PEM-encoded certificate file, or copy the contents
of the certificate. This step lets you add another level of trust between
the root certificate and your server certificate.
Click Add to add the intermediary CA.
To add the certificate that you added to the allowlist, click Add .
Click Create .
Verify that the new trust config resource appears in the list of
configurations.
gcloud
Create a trust config YAML file ( trust_config.yaml )
that specifies the
trust config parameters. This example trust config
resource contains a trust store with a trust anchor and an intermediate
certificate. This example trust config resource reads the
certificate content from the environment variables created in the
previous Format the certificates step.
cat << EOF > trust_config.yaml
trustStores :
- trustAnchors :
- pemCertificate : "${ROOT_CERT}"
intermediateCas :
- pemCertificate : "${INTERMEDIATE_CERT}"
EOF
To create a trust store with additional trust anchors or intermediate
certificates, add pemCertificate rows in the appropriate section.
To import the trust config YAML file,
use the
gcloud certificate-manager trust-configs import command .
global
For global external Application Load Balancers and cross-region internal Application Load Balancers,
specify global as the location where
the trust config resource is stored.
gcloud certificate-manager trust-configs import TRUST_CONFIG_NAME \
--source=trust_config.yaml \
--location=global
Replace TRUST_CONFIG_NAME with the name of the
trust config.
regional
For regional external Application Load Balancers and regional internal Application Load Balancers,
specify the region where the trust config resource is stored.
gcloud certificate-manager trust-configs import TRUST_CONFIG_NAME \
--source=trust_config.yaml \
--location= REGION
Replace the following:
TRUST_CONFIG_NAME : the name of the trust
config resource
REGION : the region where the trust config
resource is stored
Create a client certificate
Important: You cannot attach the client certificate to the backend
authentication config resource after the backend authentication
config resource has been created. To enable
backend mTLS, you must create a client certificate before you configure the
backend authentication config resource.
In backend mTLS, the load balancer acts as the client and the backend acts as
the server.
To enable backend mTLs, the load balancer needs to prove its identity to the
backend. This authentication is carried out using a client certificate that the
load balancer presents to the backend. The backend server needs to validate the
client certificate using its own trust chain.
When connecting to a backend server, the load balancer sets the Server Name
Indication (SNI) to the hostname specified in the TLS configuration. The backend
server selects the appropriate SSL/TLS certificate based on this SNI value. The
load balancer expects the SNI value to match a Subject Alternative Name (SAN)
listed in the backend server's certificate.
Client certificates can be managed certificates from a Private CA through
Certificate Authority Service or
self-managed private PKI certificates. In this example, the client certificate
is issued using self-managed certificates. This section uses the
OpenSSL library to create the root CA
certificate and the client certificate.
To create a client certificate, complete the following steps:
Create an OpenSSL configuration
file .
In the following example, the configuration file ( example.cnf ) contains
the [ca_exts] section, which specifies X.509 extensions that mark the
certificate as suitable for a certificate authority (CA). The
extendedKeyUsage attribute is set to clientAuth To learn more about
the requirements for
root and intermediate certificates, see Certificate
requirements .
cat > example.cnf << EOF
[ req ]
distinguished_name = empty_distinguished_name
[ empty_distinguished_name ]
# Kept empty to allow setting via -subj command-line argument.
[ ca_exts ]
basicConstraints = critical,CA:TRUE
keyUsage = keyCertSign
extendedKeyUsage = clientAuth
EOF
Create a self-signed X.509 root CA certificate ( root.cert ). The root
certificate is self-signed with its own private key ( root.key ).
openssl req -x509 \
-new -sha256 -newkey rsa:2048 -nodes \
-days 3650 -subj '/CN=root' \
-config example.cnf \
-extensions ca_exts \
-keyout root.key -out root.cert
Create a configuration file to generate the CSR for the client certificate.
The following configuration file ( client.config ) contains the
[extension_requirements] section, which specifies the X.509 extensions
to include in the CSR. To learn more about the requirements for client
certificates, see Certificate requirements .
cat > client.config << EOF
[ req ]
default_bits = 2048
req_extensions = extension_requirements
distinguished_name = dn_requirements
prompt = no
[ extension_requirements ]
basicConstraints = critical, CA:FALSE
keyUsage = critical, nonRepudiation, digitalSignature, keyEncipherment
extendedKeyUsage = clientAuth
[ dn_requirements ]
countryName = US
stateOrProvinceName = California
localityName = San Francisco
0 .organizationName = example
organizationalUnitName = test
commonName = test.example.com
emailAddress = test@example.com
EOF
Create the CSR ( client.csr ) for the client certificate.
openssl req -new \
-config client.config \
-keyout client.key -out client.csr
Create the client certificate ( client.cert ) from the CSR. The CSR
is signed by the root CA certificate to issue the X.509 client certificate.
openssl x509 -req \
-CAkey root.key -CA root.cert \
-days 365 \
-extfile client.config \
-extensions extension_requirements \
-in client.csr -out client.cert
Upload the client certificate to Certificate Manager
To upload the client certificate to Certificate Manager, complete the following steps:
Console
In the Google Cloud console, go to the Certificate Manager page.
Go to Certificate Manager
On the Certificates tab, click Add Certificate .
Enter a name for the certificate.
This name must be unique for the project.
Optional: Enter a description for the certificate. The
description helps you identify a specific certificate later.
For Location , select Global or Regional .
The location denotes where the trust
config resource is stored. For global external Application Load Balancers and
cross-region internal Application Load Balancers,
create a global trust config resource. For regional external Application Load Balancers
and regional internal Application Load Balancers, create a regional trust config
resource.
For Scope , select Client Authentication .
For Certificate type , choose Create Self-managed certificate .
For the Certificate field, upload a PEM-encoded certificate file, or
copy and paste the contents of a PEM-encoded certificate.
For the Private key certificate field, upload a PEM-encoded private
key that isn't protected with a passphrase, or copy and paste the
contents of the PEM-encoded private key.
Specify a label to associate to the certificate. You can add
more than one label, if needed. To add a label, click the
add_box Add label button,
and specify a key and a value for your label.
Click Create . Verify that the new certificate appears in the list of
certificates.
gcloud
To upload the client certificate to Certificate Manager,
use the gcloud certificate-manager certificates create command .
The scope of this certificate is client-auth , which indicates that
this certificate is used as a client certificate in backend mTLS.
global
For global external Application Load Balancers and cross-region internal Application Load Balancers, create a
global Certificate Manager certificate.
gcloud certificate-manager certificates create CLIENT_ CERTIFICATE_NAME \
--certificate-file=client.cert \
--private-key-file=client.key \
--scope=client-auth \
--location=global
Replace CLIENT_CERTIFICATE_NAME with
the name of the client certificate resource.
This client certificate with the scope
client-auth is used by the backend authentication config resource.
regional
For regional external Application Load Balancers and regional internal Application Load Balancers,
create a regional Certificate Manager certificate.
gcloud certificate-manager certificates create CLIENT_ CERTIFICATE_NAME \
--certificate-file=client.cert \
--private-key-file=client.key \
--scope=client-auth \
--location= REGION
Replace the following:
CLIENT_CERTIFICATE_NAME : the name of the client
certificate resource. This client certificate with the scope
client-auth is used by the backend authentication config
resource.
REGION : the region
where the certificate is to be created.
Create a backend authentication config resource
To create a backend authentication config ( BackendAuthenticationConfig ) resource, complete the following steps.
Console
In the Google Cloud console, go to the Authentication Configuration page.
Go to Authentication Configuration
On the Backend Authentication tab, click Create .
Enter a name for the backend authentication config resource.
For Location , select Global or Regional .
Select the client certificate resource that you created earlier.
Optional: Select the public roots of trust.
Select the trust config resource that you created earlier.
Optional: Click Equivalent code to view the Terraform
configuration for this resource.
Click Create .
Verify that the backend authentication config resource is displayed.
gcloud
Create a YAML file that declaratively specifies the different attributes
of the backend authentication config resource.
global
For global external Application Load Balancers and cross-region internal Application Load Balancers,
create a global backend authentication config resource.
Attach the client certificate to the backend authentication
config resource to enable backend mTLS.
cat BACKEND_AUTHENTICATION_CONFIG_RESOURCE_FILENAME .yaml
name: projects/ PROJECT_ID /locations/global/backendAuthenticationConfigs/ BACKEND_AUTH_CONFIG_NAME
trustConfig: projects/ PROJECT_ID /locations/global/trustConfigs/ TRUST_CONFIG_NAME
clientCertificate: projects/ PROJECT_ID /locations/global/certificates/ CLIENT_ CERTIFICATE_NAME
wellKnownRoots: PUBLIC_ROOTS
EOF
Replace the following:
BACKEND_AUTHENTICATION_CONFIG_RESOURCE_FILENAME
: the name of the YAML file where the backend authentication
config resource is defined
PROJECT_ID : the ID of your
Google Cloud project
BACKEND_AUTH_CONFIG_NAME : the name
of the backend authentication config resource
TRUST_CONFIG_NAME : the name of the
trust config resource that you created earlier
CLIENT_CERTIFICATE_NAME : the name of
the client certificate resource that you created earlier
regional
For regional external Application Load Balancers and regional internal Application Load Balancers,
create a regional backend authentication config resource.
Attach the client certificate to the backend authentication
config resource to enable backend mTLS.
cat BACKEND_AUTHENTICATION_CONFIG_RESOURCE_FILENAME .yaml
name: projects/ PROJECT_ID /locations/ REGION /backendAuthenticationConfigs/ BACKEND_AUTH_CONFIG_NAME
trustConfig: projects/ PROJECT_ID /locations/ REGION /trustConfigs/ TRUST_CONFIG_NAME
clientCertificate: projects/ PROJECT_ID /locations/ REGION /certificates/ CLIENT_ CERTIFICATE_NAME
wellKnownRoots: PUBLIC_ROOTS
EOF
Replace the following:
BACKEND_AUTHENTICATION_CONFIG_RESOURCE_FILENAME
: the name of the YAML file where the
backend authentication config resource is defined
PROJECT_ID : the ID of your
Google Cloud project
REGION : the name of the region
BACKEND_AUTH_CONFIG_NAME : the name
of the backend authentication config resource
TRUST_CONFIG_NAME : the name of the
trust config resource that you created earlier
CLIENT_CERTIFICATE_NAME : the name of
the client certificate resource that you created earlier
To import the backend authentication config, use the
gcloud network-security backend-authentication-configs import
command .
global
For global external Application Load Balancers and cross-region internal Application Load Balancers, set the
--location flag to global .
gcloud network-security backend-authentication-configs import BACKEND_AUTH_CONFIG_NAME \
--source= BACKEND_AUTHENTICATION_CONFIG_RESOURCE_FILENAME .yaml \
--location=global
Replace the following:
BACKEND_AUTH_CONFIG_NAME : the name of the
backend authentication config resource
BACKEND_AUTHENTICATION_CONFIG_RESOURCE_FILENAME :
the name of the YAML file where the backend authentication
config resource is defined
regional
For regional external Application Load Balancers and regional internal Application Load Balancers, set the
--location flag to the region where the load balancer is configured.
gcloud network-security backend-authentication-configs import BACKEND_AUTH_CONFIG_NAME \
--source= BACKEND_AUTHENTICATION_CONFIG_RESOURCE_FILENAME .yaml \
--location= REGION
Replace the following:
BACKEND_AUTH_CONFIG_NAME : the name of the
backend authentication config resource
BACKEND_AUTHENTICATION_CONFIG_RESOURCE_FILENAME :
the name of the YAML file where the backend authentication
config resource is defined
REGION : the region where the load balancer
is configured
Attach the backend authentication config resource to the backend service of the load balancer
To attach the backend authentication config
( BackendAuthenticationConfig resource )
to the backend service of the load balancer, complete the following steps.
Console
In the Google Cloud console, go to the Load balancing page.
Go to Load balancing
On the Backends tab, select the backend service for which you need
to enable backend authenticated TLS and backend mTLS.
Click edit Edit .
Expand the Advanced configurations section.
In the Backend authentication section,
select the Enable checkbox.
Optional: Specify the SNI hostname and accepted SANs to
validate the backend certificate .
To attach the backend authentication config resource to the backend
service, in the Backend authentication config list, select the
backend authentication config resource.
Click Continue .
To update the backend service settings, click Update .
gcloud
To list all the backend service resources in your project, use the
gcloud compute backend-services list command .
gcloud compute backend-services list
Note the name of the backend service to attach the
BackendAuthenticationConfig resource to.
This name is referred to as BACKEND_SERVICE_NAME
in the following steps.
To export the backend service configuration to a file, use the
gcloud compute backend-services export command .
global
For global external Application Load Balancers and cross-region internal Application Load Balancers, set the
--location flag to global .
gcloud compute backend-services export BACKEND_SERVICE_NAME \
--destination= BACKEND_SERVICE_FILENAME .yaml \
--global
Replace the following:
BACKEND_SERVICE_NAME : the name of the
backend service
BACKEND_SERVICE_FILENAME : the name and path
to a YAML file where the backend service configuration is exported
regional
For regional external Application Load Balancers and regional internal Application Load Balancers, set the
--location flag to the region where the load balancer is configured.
gcloud compute backend-services export BACKEND_SERVICE_NAME \
--destination= BACKEND_SERVICE_FILENAME .yaml \
--region= REGION
Replace the following:
BACKEND_SERVICE_NAME : the name of the
backend service
BACKEND_SERVICE_FILENAME : the name and path
to a YAML file where the backend service configuration is exported
REGION : the name of the
Google Cloud region where the backend service is located
Update the tlsSettings attribute of the backend service, pointing it
to the backend authentication config resource. In addition, you can
configure the SNI hostname and accepted SANs on the backend service to
validate the backend certificate .
global
For global external Application Load Balancers and cross-region internal Application Load Balancers,
attach the global backend authentication config resource to
the backend service.
The SNI and SAN values in the following YAML declaration are
intended as examples only. You can substitute them with real-world
values that are relevant to your setup.
cat << EOF >> BACKEND_SERVICE_FILENAME .yaml
tlsSettings:
authenticationConfig: //networksecurity.googleapis.com/projects/ PROJECT_ID /locations/global/backendAuthenticationConfigs/ BACKEND_AUTH_CONFIG_NAME
sni: examplepetstore.com
subjectAltNames:
- dnsName: examplepetstore.com
- dnsName: api.examplepetstore.com
EOF
Replace the following:
BACKEND_SERVICE_FILENAME : the name of the
YAML file where the backend service configuration is exported
PROJECT_ID : the ID of your Google Cloud project
BACKEND_AUTH_CONFIG_NAME : the name of the
backend authentication config resource
regional
For regional external Application Load Balancers and regional internal Application Load Balancers,
attach the regional backend authentication config resource to
the backend service.
The SNI and SAN values in the following YAML declaration are
intended as examples only. You can substitute them with real-world
values that are relevant to your setup.
cat << EOF >> BACKEND_SERVICE_FILENAME .yaml
tlsSettings:
authenticationConfig: //networksecurity.googleapis.com/projects/ PROJECT_ID /locations/ REGION /backendAuthenticationConfigs/ BACKEND_AUTH_CONFIG_NAME
sni: examplepetstore.com
subjectAltNames:
- dnsName: examplepetstore.com
- dnsName: api.examplepetstore.com
EOF
Replace the following:
BACKEND_SERVICE_FILENAME : the name of the
YAML file where the backend service configuration is exported
PROJECT_ID : the ID of your Google Cloud project
REGION : the name of the
Google Cloud region where the backend authentication
config is created
BACKEND_AUTH_CONFIG_NAME : the name of the
backend authentication config resource
To import the updated backend service configuration from a file,
use the gcloud compute backend-services import command .
global
For global external Application Load Balancers and cross-region internal Application Load Balancers,
use the --global flag.
gcloud compute backend-services import BACKEND_SERVICE_NAME \
--source= BACKEND_SERVICE_FILENAME .yaml \
--global
Replace the following:
BACKEND_SERVICE_NAME : the name of the
backend service
BACKEND_SERVICE_FILENAME : the name of the
backend service configuration YAML file
regional
For regional external Application Load Balancers and regional internal Application Load Balancers,
set the --region flag to the region where the load balancer
is located.
gcloud compute backend-services import BACKEND_SERVICE_NAME \
--source= BACKEND_SERVICE_FILENAME .yaml \
--region= REGION
Replace the following:
BACKEND_SERVICE_NAME : the name of the
backend service
BACKEND_SERVICE_FILENAME : the name of the
backend service configuration YAML file
REGION : the name of the
Google Cloud region where the backend service is located
Create a backend server certificate
This section provides an additional configuration option to create a server
(leaf) certificate that is signed by the intermediate certificate, which is a
part of the trust config. This ensures that a chain of trust
can be established from the server certificate back to the trust anchor.
If you have already created a trust config resource
that contains an intermediate certificate, do the following:
Create a configuration file to generate the CSR for the server certificate.
The following configuration file ( server.config ) contains
the [extension_requirements] section, which specifies the X.509 extensions to include in the CSR. To learn more about the requirements for server certificates, see Certificate requirements .
cat > server.config << EOF
[ req ]
default_bits = 2048
req_extensions = extension_requirements
distinguished_name = dn_requirements
prompt = no
[ extension_requirements ]
basicConstraints = critical, CA:FALSE
keyUsage = critical, nonRepudiation, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names
[ alt_names ]
DNS.1 = examplepetstore.com
DNS.2 = api.examplepetstore.com
[ dn_requirements ]
countryName = US
stateOrProvinceName = California
localityName = San Francisco
0 .organizationName = example
organizationalUnitName = test
commonName = examplepetstore.com
emailAddress = test@examplepetstore.com
EOF
Create the CSR ( server.csr ) for the server certificate.
openssl req -new \
-sha256 -newkey rsa:2048 -nodes \
-config server.config \
-keyout server.key -out server.csr
Sign the CSR to issue the X.509 server certificate ( server.cert ). The CSR
is signed by the intermediate certificate.
openssl x509 -req \
-CAkey int.key -CA int.cert \
-days 365 \
-extfile server.config \
-extensions extension_requirements \
-in server.csr -out server.cert
When the load balancer connects to the backend server, the backend server
presents its certificate ( server.cert ) to authenticate itself to the load
balancer, completing the backend authentication process.
Additional SSL configuration options on an Apache web server
This optional section walks you through the process to update the SSL
configuration options on an Apache server based on the client and server
certificates that you created earlier.
Copy the server private key ( server.key ) and server certificate ( server.cert ) over to the Apache web server.
cat > server.key
Replace [...] with the PEM-encoded
server private key that you created earlier.
cat > server.cert
Replace [...] with the PEM-encoded
server certificate that you created earlier.
Upload the client certificate to the server's trust config
in order to validate the client certificate.
cat > client.cert
Replace [...] with the PEM-encoded
client certificate that you created earlier.
Update the SSL configuration of the Apache web server.
Update Apache's SSL configuration to enable HTTPS traffic using the specified SSL certificate and private key.
sudo vi /etc/apache2/sites-available/default-ssl.conf
----
SSLCertificateFile /etc/ssl/certs/server.cert
SSLCertificateKeyFile /etc/ssl/private/server.key
----
Update Apache's SSL configuration to require client certificate authentication and specify the CA certificate for validation.
sudo vi /etc/apache2/sites-available/default-ssl.conf
----
SSLVerifyClient require
SSLVerifyDepth 5
SSLCACertificateFile /etc/ssl/certs/client.cert
----
Rehash the CA certificates.
sudo c_rehash /etc/ssl/certs/
Restart the Apache web server to apply the changes.
sudo systemctl restart apache2.service
What's next
mTLS overview
Set up mTLS with a private CA
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
