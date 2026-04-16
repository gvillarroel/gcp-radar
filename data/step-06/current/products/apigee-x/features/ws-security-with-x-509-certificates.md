---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.138Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "WS-Security with X.509 certificates"
feature_slug: "ws-security-with-x-509-certificates"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/java-permission-reference"
keywords:
  - "methods"
  - "crypto"
  - "object"
  - "certificates"
  - "security"
---

# WS-Security with X.509 certificates

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee crypto object methods now support securing and validating SOAP documents with WS-Security using X.509 certificates.

## Extended Definition

Apigee crypto object methods now support securing and validating SOAP documents with WS-Security using X.509 certificates.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model](https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/java-permission-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/java-permission-reference)

## Supporting Pages

### JavaScript object model \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model](https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use getHash() to get any of the supported hash objects Examples var hash1 = crypto . getHash ( 'MD5' ); var hash2 = crypto . getHash ( 'SHA-1' ); var hash3 = crypto . getHash ( 'SHA-256' ); var hash4 = crypto . getHash ( 'SHA-512' ); Sample with crypto try { // get values to use with hash functions var salt = context . getVariable ( "salt" ) 'SomeHardCodedSalt' ; var host = context . getVariable ( "request.header.Host" ); var unhashedToken = "" ; var timeNow = Number ( context . getVariable ( 'system.timestamp' )); var now = crypto . dateFormat ( 'YYYY-MM-DD HH:mm:ss.SSS' , 'PST' , timeNow ); unhashed token = " " + now + " " + host // generate a hash with the unhashedToken: var sha512 = crypto . getSHA512 (); sha512 . update ( salt ); sha512 . update ( unhashedToken ); // convert to base64 var base64Token = sha512 . digest64 (); // set headers context . setVariable ( "request.header.now" , now ); context . setVariable ( "request.header.token" , base64Token ); } catch ( e ) { throw 'Error in Javascript' ; } context object reference context object summary context object methods context object properties context object children A context object is created for each request/response transaction executed by an API proxy.
- See also the java.text.SimpleDateFormat documentation. var pst = crypto . dateFormat ( 'M' ); var pst = crypto . dateFormat ( 'EEE, d MMM yyyy HH:mm:ss Z' ); var pst = crypto . dateFormat ( "yyyy-MM-dd'T'HH:mm:ss.SSSZ" ); Sign SOAP documents using WS-Security with X.509 certificates Secure SOAP documents via digital signatures, using WS-Security with RSA keys and X.509 certificates. crypto.wsSecRsaSign() Signs the SOAP document and returns the signed payload.
- The output signed document will have a KeyInfo element that looks like the following: < KeyInfo > < !-- xmlns = "http://www.w3.org/2000/09/xmldsig#" -- > < wssec : SecurityTokenReference > < wssec : Reference URI = "#ST-101" ValueType = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" / > < /wssec:SecurityTokenReference > < /KeyInfo > And there will be another element placed into the WS-Security header, using the wsu:Id from the above KeyInfo element, that provides the certificate encoded as a BinarySecurityToken : < wssec : BinarySecurityToken EncodingType = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" ValueType = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu : Id = "ST-101" > MIIEKjCCAxKgAwIB ... < /wssec:BinarySecurityToken > ISSUER SERIAL var reqPayload = context . getVariable ( "request.content" ); var signed = crypto . wsSecRsaSign ( reqPayload ,{ private key : '{private.key.pem}' , certificate : '{public.cert.pem}' , // elements to sign: 'wsa:Timestamp, soap:Body', signing method : 'rsa-sha256' , digest method : 'sha256' , key identifier type : 'ISSUER SERIAL' , expiry : '120s' }); var resPayload signed = context . setVariable ( "request.content" , signed ); The above example shows how to sign a SOAP document with a key identifier type of ISSUER SERIAL.
- The output signed document will have a KeyInfo element that looks like the following: < KeyInfo > < !-- xmlns = "http://www.w3.org/2000/09/xmldsig#" -- > < wssec : SecurityTokenReference wsu : Id = "STR-102" > < X509Data > < X509IssuerSerial > < X509IssuerName>CN = Test , O = Test , L = Test , ST = Test , C = US < / X509IssuerName > < X509SerialNumber>1234567890 < / X509SerialNumber > < / X509IssuerSerial > < / X509Data > < / wssec : SecurityTokenReference > < /KeyInfo > THUMBPRINT var reqPayload = context . getVariable ( "request.content" ); var signed = crypto . wsSecRsaSign ( reqPayload ,{ private key : '{private.key.pem}' , certificate : '{public.cert.pem}' , // elements to sign: 'wsa:Timestamp, soap:Body', signing method : 'rsa-sha256' , digest method : 'sha256' , key identifier type : 'THUMBPRINT' , expiry : '120s' }); var resPayload signed = context . setVariable ( "request.content" , signed ); The above example shows how to sign a SOAP document with a key identifier type of THUMBPRINT.

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- The following is a sample ProxyEndpoint configuration: <ProxyEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request> <Step> <Name>my-set-integration-request-policy</Name> </Step> </Request> </PreFlow> <Flows/> <PostFlow name="PostFlow"/> <HTTPProxyConnection> <BasePath>/integration-endpoint-test</BasePath> <Properties/> </HTTPProxyConnection> <RouteRule name="default"> <IntegrationEndpoint>my-int-endpoint</IntegrationEndpoint> </RouteRule> </ProxyEndpoint> In the sample ProxyEndpoint configuration, Apigee performs the following tasks: In the PreFlow, executes the policy named my-set-integration-request-policy , which sets the integration request object and integration flow variables.
- To use asynchronous behavior in API proxies, see JavaScript object model . false No Policy attachment The following image shows the API proxy flows execution sequence: As shown above: Policies are attached as processing steps to Flows .
- Important: Public Certificate Authorities (CAs) are discontinuing the inclusion of the clientAuth Extended Key Usage (EKU) in latest publicly-trusted SSL/TLS certificates.
- Sends the request to Apigee's Integration Platform using the request object and flow variables set by the SetIntegrationRequest policy.

### Java permission reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/java-permission-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/java-permission-reference)
- Source ID: `site-api-reference`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Currently the SecurityPermission object is used to guard access to the Policy, Security, Provider, Signer, and Identity objects. createAccessControlContext NO getDomainCombiner NO getPolicy NO setPolicy NO createPolicy.{policy type} NO getProperty.{key} NO setProperty.{key} NO insertProvider NO removeProvider.{provider name} NO clearProviderProperties.{provider name} NO putProviderProperty.{provider name} NO removeProviderProperty.{provider name} NO SQLPermission setLog NO callAbort NO setSyncFactory NO setNetworkTimeout NO deregisterDriver NO java.util.logging.LoggingPermission A SecurityManager will check the java.util.logging.LoggingPermission object when code running with a SecurityManager calls one of the logging control methods (such as Logger.setLevel). control NO java.util.PropertyPermission The name is the name of the property ("java.home", "os.name", etc).
- If a security manager has been set using System.setSecurityManager(java.lang.SecurityManager), most operations on the MBeanServer require that the caller's permissions imply an MBeanPermission appropriate for the operation. action className#member[objectName] If you have an MBeanPermission, it allows operations only if all four of the items match. addNotificationListener NO getAttribute NO getClassLoader NO getClassLoaderFor NO getClassLoaderRepository NO getDomains NO getMBeanInfo NO getObjectInstance NO instantiate NO invoke NO isInstanceOf NO queryMBeans NO queryNames NO registerMBean NO removeNotificationListener NO setAttribute NO unregisterMBean NO javax.management.MBeanServerPermission createMBeanServer NO findMBeanServer NO newMBeanServer NO releaseMBeanServer NO javax.management.MBeanTrustPermission This permission represents "trust" in a signer or codebase. register NO NO javax.management.remote.SubjectDelegationPermission NO Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The second service principal designates the target service the subordinate service principal is to interact with on behalf of the initiating KerberosPrincipal. initiate NO accept NO javax.security.auth.AuthPermission Currently the AuthPermission object is used to guard access to the Subject, SubjectDomainCombiner, LoginContext and Configuration objects. doAs NO doAsPrivileged NO getSubject NO getSubjectFromDomainCombiner NO setReadOnly NO modifyPrincipals NO modifyPublicCredentials NO modifyPrivateCredentials NO refreshCredential NO destroyCredential NO createLoginContext.{name} NO getLoginConfiguration NO setLoginConfiguration NO createLoginConfiguration.{configuration type} NO refreshLoginConfiguration NO javax.net.ssl.SSLPermission setHostnameVerifier NO getSSLSessionContext NO setDefaultSSLContext NO javax.management.MBeanPermission Permission controlling access to MBeanServer operations.
- A ReflectPermission is a named permission and has no actions suppressAccessChecks NO newProxyInPackage.{package name} NO java.lang.RuntimePermission Contains a name (also referred to as a "target name") but no actions list; you either have the named permission or you don't. createClassLoader NO getClassLoader YES setContextClassLoader YES enableContextClassLoaderOverride YES closeClassLoader NO setSecurityManager NO createSecurityManager NO getenv.{variable name} NO exitVM.{exit status} NO shutdownHooks NO setFactory NO setIO NO modifyThread YES stopThread YES modifyThreadGroup YES getProtectionDomain YES getFileSystemAttributes NO readFileDescriptor YES writeFileDescriptor NO loadLibrary.{library name} NO accessClassInPackage. {package name} YES defineClassInPackage. {package name} NO accessDeclaredMembers NO queuePrintJob NO getStackTrace NO setDefaultUncaughtExceptionHandler NO preferences NO usePolicy NO java.net.NetPermission A NetPermission contains a name but no actions list; you either have the named permission or you don't. setDefaultAuthenticator NO requestPasswordAuthentication NO specifyStreamHandler YES setProxySelector NO getProxySelector NO setCookieHandler NO getCookieHandler NO setResponseCache NO getResponseCache NO getNetworkInformation NO java.net.SocketPermission Represents access to a network via sockets.

