---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.187Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Private Service Connect for southbound traffic"
feature_slug: "private-service-connect-for-southbound-traffic"
latest_feature_date: "2022-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/java-permission-reference"
keywords:
  - "privately"
  - "southbound"
  - "enables"
  - "connect"
  - "private"
  - "target"
  - "traffic"
---

# Private Service Connect for southbound traffic

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect enables Apigee to privately connect to target services across VPC networks for southbound traffic; Private Service Connect enables Apigee to connect to backend target services in VPC networks outside the peered network.

## Extended Definition

Private Service Connect enables Apigee to privately connect to target services across VPC networks for southbound traffic; Private Service Connect enables Apigee to connect to backend target services in VPC networks outside the peered network.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/java-permission-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/java-permission-reference)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Without this EKU, mTLS connections will fail for both northbound (client to Apigee) and southbound (Apigee to backend) traffic.
- For details, see Authentication element in the ServiceCallout policy reference. <Authentication> element error reference If you are using the <Authentication> element, you can find possible error messages and troubleshooting tips for deployment and runtime errors in the Errors section of the ServiceCallout policy documentation. <Authentication> element examples The following example shows how to call a service deployed on Cloud Run as the target using the Authentication element to generate an OpenID Connect token needed to authenticate the call: <TargetEndpoint name="TargetEndpoint-1"> <HTTPTargetConnection> <Properties/> <URL>https://cloudrun-hostname.a.run.app/test</URL> <Authentication> <GoogleIDToken> <Audience>https://cloudrun-hostname.a.run.app/test</Audience> </GoogleIDToken> </Authentication> </HTTPTargetConnection> </TargetEndpoint> The following example shows how to call a TargetService that points to Cloud Run using the Authentication element to generate an OpenID Connect token needed to authenticate the call.
- VALUE=true curl -Ss -v -X PUT \ "https://apigee.googleapis.com/v1/organizations/ MYORG /environments/ MYENV " \ -H "Content-Type: application/json" \ -H "Authorization: Bearer TOKEN " \ -d '{ "name": " MYENV ", "properties": { "property": [{ "name": "features.SSLInfo.Enforce", "value": "'"$VALUE"'" }] } }' Output: { ... "properties": { "property": [ { "name": "features.SSLInfo.Enforce", "value": "true" } ] }, ... } Sample target endpoint with outbound client authentication enabled <TargetEndpoint name="default"> <HttpTargetConnection> <URL>https://myservice.com</URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>myKeystore</KeyStore> <KeyAlias>myKey</KeyAlias> <TrustStore>myTruststore</TrustStore> </SSLInfo> </HttpTargetConnection> </TargetEndpoint> For detailed instructions, see Options for configuring TLS .
- The Authorization header, if present, is left unmodified and also sent in the request. < TargetEndpoint name = "TargetEndpoint-1" > < HTTPTargetConnection > < Authentication > < HeaderName>X - Serverless - Authorization < / HeaderName > < GoogleIDToken > < Audience ref = "flow.variable.audience" > https : // cloudrun - hostname . a . run . app < / Audience > < / GoogleIDToken > < / Authentication > < LoadBalancer > < Server name = "cloud-run-target" / > < / LoadBalancer > < / HTTPTargetConnection > < / TargetEndpoint > The following example shows how to call a TargetService that points to the Google Secret Manager service.

### Options for configuring TLS \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls)
- Source ID: `site-docs-reference-required-3`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- About setting TLS options in a target endpoint or target server A target can be represented by an XML object like the one below: <HTTPTargetConnection> <Properties/> <URL> https:myTargetAddress </URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>ref://myKeystoreRef</KeyStore> <KeyAlias>myKeyAlias</KeyAlias> <TrustStore>ref://myTruststoreRef</TrustStore> <IgnoreValidationErrors>false</IgnoreValidationErrors> <Protocols>myProtocols</Protocols> <Ciphers>myCipher</Ciphers> </SSLInfo> </HTTPTargetConnection> The area of the target endpoint configuration that you modify to configure TLS is defined by the <SSLInfo> tag.
- A success response ( 2xx ) can occur under certain conditions, if <IgnoreValidationErrors> is set to true . <ClientAuthEnabled> Enables two-way TLS (also known as mutual TLS or mTLS) between Apigee and the API client, or between Apigee and the target backend.
- If set to true , connections will fail for targets with invalid certs, expired certs, self-signed certs, certs with a hostname mismatch, and certs with an untrusted root.
- If unset, or set to false , the result of connections to target backends with problematic certs depends upon the setting of <IgnoreValidationErrors> (see below).

### Java permission reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/java-permission-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/java-permission-reference)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The second service principal designates the target service the subordinate service principal is to interact with on behalf of the initiating KerberosPrincipal. initiate NO accept NO javax.security.auth.AuthPermission Currently the AuthPermission object is used to guard access to the Subject, SubjectDomainCombiner, LoginContext and Configuration objects. doAs NO doAsPrivileged NO getSubject NO getSubjectFromDomainCombiner NO setReadOnly NO modifyPrincipals NO modifyPublicCredentials NO modifyPrivateCredentials NO refreshCredential NO destroyCredential NO createLoginContext.{name} NO getLoginConfiguration NO setLoginConfiguration NO createLoginConfiguration.{configuration type} NO refreshLoginConfiguration NO javax.net.ssl.SSLPermission setHostnameVerifier NO getSSLSessionContext NO setDefaultSSLContext NO javax.management.MBeanPermission Permission controlling access to MBeanServer operations.
- See Restrictions . write NO execute NO delete NO readLink YES java.io.SerializablePermission A SerializablePermission contains a name (also referred to as a "target name") but no actions list; you either have the named permission or you don't. enableSubclassImplementation YES enableSubstitution NO java.lang.management.ManagementPermission Methods defined in the management interface for the Java platform control NO monitor NO java.lang.reflect.ReflectPermission For reflective operations.
- A ReflectPermission is a named permission and has no actions suppressAccessChecks NO newProxyInPackage.{package name} NO java.lang.RuntimePermission Contains a name (also referred to as a "target name") but no actions list; you either have the named permission or you don't. createClassLoader NO getClassLoader YES setContextClassLoader YES enableContextClassLoaderOverride YES closeClassLoader NO setSecurityManager NO createSecurityManager NO getenv.{variable name} NO exitVM.{exit status} NO shutdownHooks NO setFactory NO setIO NO modifyThread YES stopThread YES modifyThreadGroup YES getProtectionDomain YES getFileSystemAttributes NO readFileDescriptor YES writeFileDescriptor NO loadLibrary.{library name} NO accessClassInPackage. {package name} YES defineClassInPackage. {package name} NO accessDeclaredMembers NO queuePrintJob NO getStackTrace NO setDefaultUncaughtExceptionHandler NO preferences NO usePolicy NO java.net.NetPermission A NetPermission contains a name but no actions list; you either have the named permission or you don't. setDefaultAuthenticator NO requestPasswordAuthentication NO specifyStreamHandler YES setProxySelector NO getProxySelector NO setCookieHandler NO getCookieHandler NO setResponseCache NO getResponseCache NO getNetworkInformation NO java.net.SocketPermission Represents access to a network via sockets.
- The actions to be granted are passed to the constructor in a string containing a list of zero or more comma-separated keywords. read YES write NO javax.xml.ws.WebServicePermission publishEndpoint NO javax.xml.bind.JAXBPermission setDatatypeConverter NO javax.sound.sampled.AudioPermission Access rights to the audio system resources. play NO record NO javax.security.auth.PrivateCredentialPermission Protect access to private Credentials belonging to a particular Subject.

