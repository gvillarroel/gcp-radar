---
title: "Use a Cloud HSM key for TLS offloading with NGINX \_|\_ Cloud Key Management\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx
  title: "Use a Cloud HSM key for TLS offloading with NGINX \_|\_ Cloud Key Management\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Reference
Send feedback
Use a Cloud HSM key for TLS offloading with NGINX
Stay organized with collections
Save and categorize content based on your preferences.
This guide provides instructions for setting up NGINX to use a
Cloud HSM key for TLS offloading on Debian 11 (Bullseye). You might need to
modify these commands to work with your OS or Linux distribution.
Note: TLS termination with Nginx is only supported for Elliptic Curve
Digital Signature Algorithm (ECDSA) keys.
You can find a Terraform-based blueprint version of this tutorial in the
kms-solutions GitHub repository .
Use cases
Using a Cloud HSM key with NGINX for TLS offloading helps
address the following enterprise security needs:
You want your NGINX web server to offload TLS cryptographic
operations to Cloud HSM.
You don't want to store your certificate's private key on the Compute Engine instance's local file system that is hosting your web
application.
You need to meet regulatory requirements where public-facing applications
need their certificates to be protected by an HSM that has FIPS 140-2 Level
3 certification.
You want to use NGINX to create a reverse proxy with TLS
termination to protect your web application.
Before you begin
Before continuing, complete the steps in
Using a Cloud HSM key with OpenSSL .
Once OpenSSL setup is complete, ensure that a recent version of nginx is
installed:
sudo apt-get update
sudo apt-get install libengine-pkcs11-openssl opensc nginx
Note: nginx 1.18.0-6.1 and newer supports the PKCS #11 URI Scheme
( RFC 7512 ). You might need to upgrade your previously
installed nginx package.
Security configuration recommendations
Secure your instance that is hosting NGINX with the following
recommendations:
Follow the instructions for creating and enabling service accounts for
instances to host NGINX.
Assign the following roles:
roles/cloudkms.signerVerifier
roles/cloudkms.viewer
Configure organization policies as follows to limit
external IPs and creation of service account keys.
constraints/compute.vmExternalIpAccess
constraints/iam.disableServiceAccountKeyCreation
Create a custom subnet that enables
private Google access .
Configure firewall rules.
Create IAP firewall rules for SSH only.
Create a Linux VM and configure it as follows:
Select the correct service account that you created earlier.
Select the network that you created earlier.
Add appropriate labels for any firewall rules.
Ensure the subnet has the "external IP" field set to none .
Grant your identity the IAP-Secured Tunnel User
( roles/iap.tunnelResourceAccessor ) role on the instance.
Learn more by reading IAP configuration for compute .
Create and configure a Cloud HSM signing key
The next sections detail steps needed to create and configure a
Cloud HSM signing key.
Create a Cloud HSM-hosted signing key
Create a Cloud HSM EC-P256-SHA256 signing key in your
Google Cloud project, in the key ring that you previously configured
for OpenSSL:
gcloud kms keys create NGINX_KEY \
--keyring " KEY_RING " --project " PROJECT_ID " \
--location " LOCATION " --purpose "asymmetric-signing" \
--default-algorithm "ec-sign-p256-sha256" --protection-level "hsm"
Note: Make sure that your Compute Engine service account has the correct
Identity and Access Management (IAM) permissions on the key ring to be able to use it.
Connect to your VM using SSH and IAP
Connect to your VM using SSH and IAP with the following command:
gcloud compute ssh INSTANCE \
--zone ZONE --tunnel-through-iap
If you run into an issue, confirm that you used the --tunnel-through-iap flag.
Also, confirm that you have the IAP-Secured Tunnel User
( roles/iap.tunnelResourceAccessor ) role on the instance for the identity
authenticated with gcloud CLI.
Create a certificate with OpenSSL
For a production environment, create a certificate signing request (CSR). Learn
more by reading the example to generate a CSR . Provide the CSR
to your certificate authority (CA) so that they can create a certificate for
you. Use the certificate provided by your CA in the subsequent sections.
For example purposes, you can generate a self-signed certificate with the
Cloud HSM signing key. To do so, OpenSSL lets you use
PKCS #11 URIs instead of a regular path, identifying the key by its label
(for Cloud KMS keys, the label is the CryptoKey name).
openssl req -new -x509 -days 3650 -subj '/CN= CERTIFICATE_NAME /' \
DIGEST_FLAG -engine pkcs11 -keyform engine \
-key PKCS_KEY_TYPE = KEY_IDENTIFIER > CA_CERT
Replace the following:
CERTIFICATE_NAME : a name for the certificate.
DIGEST_FLAG : the digest algorithm used by the asymmetric signing
key. Use -sha256 , -sha384 , or -sha512 depending on the key.
PKCS_KEY_TYPE : the type of identifier used to identify the key.
To use the latest key version, use pkcs11:object with the key's name. To
use a specific key version, use pkcs11:id with the full resource ID of the
key version.
KEY_IDENTIFIER : an identifier for the key. If you're using
pkcs11:object , use the key's name—for example, NGINX_KEY .
If you're using pkcs11:id , use the full resource ID of the key or key
version—for example,
projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ NGINX_KEY /cryptoKeyVersions/ KEY_VERSION .
CA_CERT : the path where you want to save the certificate
file.
If the command fails, PKCS11_MODULE_PATH may have been set incorrectly,
or you might not have the correct permissions to use the Cloud KMS
signing key.
You should now have a certificate that looks like this:
-----BEGIN CERTIFICATE-----
...
...
...
-----END CERTIFICATE-----
Install your certificate for NGINX
Run the following commands to create a location to place your public
certificate:
sudo mkdir /etc/ssl/nginx
sudo mv CA_CERT /etc/ssl/nginx
Configure your environment to use the PKCS #11 library
The next sections detail steps needed to prepare and test your environment.
Prepare library configurations for NGINX
Allow NGINX to log its PKCS #11 engine operations with the
library with the following:
sudo mkdir /var/log/kmsp11
sudo chown www-data /var/log/kmsp11
Create an empty library configuration file with the appropriate permissions for
NGINX.
sudo touch /etc/nginx/pkcs11-config.yaml
sudo chmod 744 /etc/nginx/pkcs11-config.yaml
Edit the empty config file and add the needed configuration as shown in the
following snippet:
# cat /etc/nginx/pkcs11-config.yaml
---
tokens:
- key_ring: "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING "
log_directory: "/var/log/kmsp11"
Test your OpenSSL configuration
Run the following command:
openssl engine -tt -c -v pkcs11
You should see output similar to the following:
(pkcs11) pkcs11 engine
[RSA, rsaEncryption, id-ecPublicKey]
[ available ]
SO_PATH, MODULE_PATH, PIN, VERBOSE, QUIET, INIT_ARGS, FORCE_LOGIN
Configure NGINX to use Cloud HSM
Allow TLS offloading by editing a few NGINX files. First, edit the
/etc/nginx/nginx.conf file in two places to add a few directives to configure
NGINX to use PKCS #11.
After the event block and before the http block, add the following
directives:
ssl_engine pkcs11 ;
env KMS_PKCS11_CONFIG = /etc/nginx/pkcs11-config.yaml ;
In the same /etc/nginx/nginx.conf file, configure SSL directives to use your
certificate and its private key in Cloud HSM. In the http block add the
following attributes:
ssl_certificate "/etc/ssl/nginx/ CA_CERT " ;
ssl_certificate_key "engine:pkcs11: PKCS_KEY_TYPE = KEY_IDENTIFIER " ;
ssl_protocols TLSv1.2 TLSv1.3 ; # Consider changing the default to only TLS1.2 or newer
# Consider defining the `ssl_ciphers` to use ciphers approved by your security teams and handle
# appropriate client compatibility requirements.
Your /etc/nginx/nginx.conf file should look like the following:
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;
events {
worker_connections 768;
# multi_accept on;
}
ssl_engine pkcs11;
env KMS_PKCS11_CONFIG=/etc/nginx/pkcs11-config.yaml;
http {
#...
#...
# SSL configuration
ssl_certificate "/etc/ssl/nginx/ CA_CERT " ;
ssl_certificate_key "engine:pkcs11:pkcs11:object= NGINX_KEY " ;
ssl_protocols TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE
# ssl_ciphers YOUR_CIPHERS
ssl_prefer_server_ciphers on;
#...
#...
}
Configure NGINX to listen for TLS traffic
Edit the /etc/nginx/sites-enabled/default file to listen for TLS traffic.
Uncomment the SSL configuration in the server block.
The resulting change should look like the following example:
server {
listen 80 default_server;
listen [::]:80 default_server;
# SSL configuration
listen 443 ssl default_server;
listen [::]:443 ssl default_server;
# ...
# ...
}
Provide environment variables to the NGINX service
Run the following command:
sudo systemctl edit nginx.service
In the resulting editor, add the following lines and replace the
LIBPATH with the value for the location where you installed
libkmsp11.so :
[ Service ]
Environment = "GRPC_ENABLE_FORK_SUPPORT=1"
Environment = "KMS_PKCS11_CONFIG=/etc/nginx/pkcs11-config.yaml"
Environment = "PKCS11_MODULE_PATH= LIBPATH /libkmsp11-1.0-linux-amd64/libkmsp11.so"
After you configure these values, you will need to run the following command to
make them available:
sudo systemctl daemon-reload
Restart NGINX with TLS Offloading
Run the following command so that NGINX restarts and uses the updated
configuration:
sudo systemctl start nginx
Note: If you see any errors upon restart, check your /var/log/nginx/error.log
and /var/log/kmsp11/ for additional details.
Test NGINX uses TLS offloading to your Cloud HSM
Use the openssl s_client to test connection to your NGINX server by
running the following command:
openssl s_client -connect localhost:443
The client completes the SSL handshake and waits for your input:
# completes SSL handshake
# ...
# ...
# ...
Verify return code: 18 (self signed certificate)
# ...
Max Early Data: 0
---
read R BLOCK
# When the client pauses, it's waiting for instructions.
# Have the client get the index.html file in the root path (`/`), by typing the following:
GET /
# Press enter.
# You should now see the default NGINX index.html file.
Your audit logs should now show operations to your NGINX_KEY key.
To view the logs, navigate to Cloud Logging in your Google Cloud console.
In the project you've been using, add the following filter:
resource.type = "cloudkms_cryptokeyversion"
After running the query, you should see asymmetric key operations to your
NGINX_KEY key.
Optional configurations
You may need to create an external passthrough Network Load Balancer to
expose your NGINX server with an external IP.
If you need to use NGINX as a reverse proxy with load balancing,
consider updating the NGINX configuration file. Learn more about
configuring NGINX as a reverse proxy by reading
All-Active HA for NGINX Plus on the Google Cloud
Platform .
Next steps
You now have configured your NGINX server to use TLS offloading to
Cloud HSM.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
