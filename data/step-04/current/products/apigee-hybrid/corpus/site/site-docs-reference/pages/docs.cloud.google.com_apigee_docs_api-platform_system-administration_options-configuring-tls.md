---
title: "Options for configuring TLS \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/hybrid/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls
  title: "Options for configuring TLS \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Options for configuring TLS
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
This section shows how to configure TLS for traffic from a proxy to a target.
Unsupported TLS versions: Apigee does not support the use of TLS 1.0 or TLS1.1. If you
use these protocols in your target endpoint configuration, the Apigee target endpoint throws the error messaging.adaptors.http.flow.SslHandshakeFailed .
About
setting TLS options in a target endpoint or target server
A target can be represented by an XML object like the one below:
<HTTPTargetConnection>
<Properties/>
<URL> https:myTargetAddress </URL>
<SSLInfo>
<Enabled>true</Enabled>
<Enforce>true</Enforce>
<ClientAuthEnabled>true</ClientAuthEnabled>
<KeyStore>ref://myKeystoreRef</KeyStore>
<KeyAlias>myKeyAlias</KeyAlias>
<TrustStore>ref://myTruststoreRef</TrustStore>
<IgnoreValidationErrors>false</IgnoreValidationErrors>
<Protocols>myProtocols</Protocols>
<Ciphers>myCipher</Ciphers>
</SSLInfo>
</HTTPTargetConnection>
The area of the target endpoint configuration that you modify to configure TLS is defined by the
<SSLInfo> tag. You use the same <SSLInfo> tag to configure a
target endpoint or target server.
For information about the child elements of <SSLInfo> , see
TLS/SSL TargetEndpoint configuration .
The following table describes the TLS configuration elements used by the
<SSLInfo> tag:
Element
Description
<Enabled>
The <SSLInfo> block can be used for both one-way and two-way TLS/SSL.
If set to true , <Enabled> specifies that the <SSLInfo> block should be used.
When set to false , the <SSLInfo> block is ignored.
The default value of <Enabled> is true if <URL> specifies the HTTPS protocol,
and false if <URL> specifies HTTP.
<Enforce>
Enforces strict SSL between Apigee and the target backend.
If set to true , connections will fail for targets with invalid certs, expired certs,
self-signed certs, certs with a hostname mismatch, and certs with an untrusted root. A failure code of 4xx
or 5xx is returned.
If unset, or set to false , the result of connections to target backends with
problematic certs depends upon the setting of <IgnoreValidationErrors> (see below).
A success response ( 2xx ) can occur under certain conditions, if <IgnoreValidationErrors> is set to true .
<ClientAuthEnabled>
Enables two-way TLS (also known as mutual TLS or mTLS) between Apigee and the API
client, or between Apigee and the target backend.
Enabling two-way TLS typically requires that you set up a truststore on Apigee and a
truststore.
<KeyStore>
A keystore containing private keys used for outbound client authentication
<KeyAlias>
The alias specified when you uploaded a cert and private key to the keystore.
<TrustStore>
A keystore containing trusted server certificates.
<IgnoreValidationErrors>
Indicates whether validation errors are ignored. If the backend system uses SNI and returns
a cert with a subject Distinguished Name (DN) that does not match the hostname,
there is no way to ignore the error and the connection fails.
Note : If <Enforce> is set to true , the value of
<IgnoreValidationErrors> is ignored.
<Ciphers>
Supported ciphers for outbound TLS/SSL. If no ciphers are specified, then all ciphers
available for the JVM will be permitted.
To restrict ciphers, add the following elements listing the supported ciphers:
<Ciphers>
<Cipher>TLS_RSA_WITH_3DES_EDE_CBC_SHA</Cipher>
<Cipher>TLS_RSA_WITH_DES_CBC_SHA</Cipher>
</Ciphers>
<Protocols>
Supported protocols for outbound TLS/SSL. If no protocols are specified, then all
protocols available for the JVM will be permitted.
To restrict protocols, specify them explicitly. For example, to allow only TLS v1.2 or TLS v1.3:
<Protocols>
<Protocol>TLSv1.2</Protocol>
<Protocol>TLSv1.3</Protocol>
</Protocols>
About setting the
<KeyStore> and <TrustStore> elements
In the example above, the keystore and truststore are specified by using
references , in the form:
<KeyStore> ref://myKeystoreRef </KeyStore>
<TrustStore> ref://myTruststoreRef </TrustStore>
Apigee strongly recommends that you always use references to the keystore and truststore. A
reference is a variable that contains the name of the keystore or truststore, rather than
specifying the keystore name directly. In this example:
myKeystoreRef is a reference that contains the name of the
keystore. In this example, the name of the keystore is myKeystore .
myTruststoreRef is a reference that contains the name of the
truststore. In this example, the name of the truststore is myTruststore .
When a cert expires, you have to update the target endpoint/target server to
specify the keystore or truststore containing the new cert. The advantage of a reference is that
you can modify the value of the reference to change the keystore or truststore without having to
modify the target endpoint/target server itself:
Changing the value of the reference does not require you to contact Google Cloud Customer Care .
Alternatively, you can specify the keystore name and truststore name directly:
<KeyStore> myKeystore </KeyStore>
<TrustStore> myTruststore </TrustStore>
If you directly specify the name of the keystore or truststore, then you must
contact Google Cloud Customer Care .
A third option is to use flow variables:
<KeyStore>{ ssl.keystore }</KeyStore>
<TrustStore>{ ssl.truststore }</TrustStore>
You can use flow variables to dynamically specify a keystore or
truststore, with an effect similar to using a reference. For more
information, see
Using flow variables to set TLS/SSL values dynamically .
About configuring TLS
All Apigee customers, both paid and evaluation, have complete control over the configuration of
target endpoints/target servers. In addition, paid Apigee customers have complete control over
TLS properties.
Handling expired certificates
If a TLS certificate expires, or if your system configuration changes such that the
certificate is no longer valid, then you need to update the certificate. When configuring TLS for
a target endpoint/target server, you should decide how you are going to perform
that update before you perform any configuration.
Note: You cannot update an existing keystore or truststore to add a
new certificate. You must create a new keystore/truststore when updating a certificate.
Typically, you create the new keystore/truststore and upload the new cert before the cert in the
old keystore/truststore expires. This lets you test the new keystore/truststore and rollback to
the old keystore/truststore if there are any issues.
When a cert expires
On Apigee, you store certs in one of two places:
Keystore - Contains the TLS certificate and private key used to identify
the entity during TLS handshaking.
Truststore - Contains trusted certificates on a TLS client used to
validate a TLS server's certificate presented to the client. These certificates are typically
self-signed certificates, certificates signed by a trusted CA, or certs used as part of two-way
TLS (also known as mutual TLS or mTLS).
When a cert in a keystore expires, and you are using a reference to the
keystore , you cannot upload a new cert to the keystore. Instead, you:
Create a new keystore.
Upload the new cert to the new keystore using the same alias name as in
the old keystore.
Update the reference in the target server/target endpoint to use the new keystore.
When a cert in a truststore expires, and you are using a reference to the
truststore , you:
Create a new truststore.
Upload the new cert to the new truststore. The alias name does not matter for truststores.
Note : If a cert is part of a chain, then you must either create a single file
containing all the certs and upload that file to a single alias, or upload all certs in the
chain separately to the truststore using a different alias for each cert.
Update the reference in your target server/target endpoint to use the new
truststore.
Summary of methods for updating an expired
cert
The method that you use to specify the name of the keystore and truststore in
the target endpoint/target server determines how you perform the cert update. You can use:
References
Direct names
Flow variables
Each of these methods has different repercussions on the update process, as described in the
following table:
Config type
How to update/replace cert
Usage
Reference (Recommended)
For a keystore, create a new keystore with a new name and an alias with
the same name as the old alias.
For a truststore, create a truststore with a new name .
Update the reference to the keystore or truststore.
No need to contact Apigee Support.
Flow variable
For a keystore, create a new keystore with a new name and an alias with
the same name or with a new name.
For a truststore, create a truststore with a new name .
Pass the updated flow variable on each request with the name of the new keystore, alias, or
truststore.
No need to contact Apigee Support.
Direct
Create a new keystore, alias, and truststore.
Redeploy the proxy.
Direct
Delete the keystore or truststore and recreate it with the same name.
API requests will fail until the new keystore and alias are set.
If the keystore is used for two-way TLS (also known as mutual TLS or mTLS)
between Apigee and the backend service,
contact Google Cloud Customer Care to restart the Message Processors.
Direct
For truststore only, upload a new cert to the truststore.
Contact Google Cloud Customer Care to restart the Message Processors.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
