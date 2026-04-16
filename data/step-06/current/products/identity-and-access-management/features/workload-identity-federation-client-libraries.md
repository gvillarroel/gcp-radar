---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.428Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Workload Identity Federation client libraries"
feature_slug: "workload-identity-federation-client-libraries"
latest_feature_date: "2021-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation"
  - "https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation"
  - "https://docs.cloud.google.com/iam/docs/authenticate-with-auth-libraries"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity"
keywords:
  - "workload"
  - "identity"
  - "federation"
  - "client"
  - "libraries"
  - "updated"
  - "for"
  - "go"
---

# Workload Identity Federation client libraries

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Updated client libraries for C++, Go, Java, Node.js, and Python can automatically obtain Google credentials for Workload Identity Federation.

## Extended Definition

Updated client libraries for C++, Go, Java, Node.js, and Python can automatically obtain Google credentials for Workload Identity Federation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)
- [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)
- [https://docs.cloud.google.com/iam/docs/authenticate-with-auth-libraries](https://docs.cloud.google.com/iam/docs/authenticate-with-auth-libraries)
- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity)

## Supporting Pages

### "Best practices for using Workload Identity Federation \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation](https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)
- Source ID: `site-docs-root-2`
- Final score: 319
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use service accounts that reside in the same project as the resources you need to access When a client uses Workload Identity Federation by using client libraries or the REST API , it follows a three-step process: Obtain a credential from the trusted identity provider.
- Use Workload Identity Federation to reduce the number of credentials that require rotation Applications that integrate with an OpenID or SAML identity provider often use a client secret (or a different form of secret) to authenticate to the identity provider.
- Home Documentation Security IAM Identity and Access Management (IAM) Guides Send feedback Best practices for using Workload Identity Federation Stay organized with collections Save and categorize content based on your preferences.
- If the ambient credentials are OpenID Connect (OIDC) tokens, SAML assertions, or AWS credentials, you can configure Workload Identity Federation to let applications exchange these credentials for short-lived Google access tokens.

### "Integrate Cloud Run and Workload Identity Federation \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)
- Source ID: `site-docs-root-2`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you already have an identity provider that supports OpenID Connect and an external workload, you can skip this step and go to Installing Cloud Client Libraries.
- The following steps show how to install python3: sudo apt update sudo apt install software-properties-common sudo add-apt-repository ppa:deadsnakes/ppa sudo apt update sudo apt install python3.8 Install pip3 so that you can download and import Cloud Client Libraries : pip3 –version sudo apt update sudo apt install python3-pip pip3 –version Install the Cloud Client Libraries for Python using pip3: pip3 install –upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib For example: pip3 install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib Collecting google-api-python-client Downloading google api python client-2.42.0-py2.py3-none-any.whl ( 8 .3 MB ) USERNAME 8 .3 MB 19 .9 MB/s Collecting google-auth-httplib2 Downloading google auth httplib2-0.1.0-py2.py3-none-any.whl ( 9 .3 MB ) Collecting google-auth-oauthlib Downloading google auth oauthlib-0.5.1-py2.py3-non-any.whl ( 19 KB ) Replace USERNAME with your username.
- Generate an ID token: #!/usr/bin/python from google.auth import credentials from google.cloud import iam credentials v1 import google.auth import google.oauth2.credentials from google.auth.transport.requests import AuthorizedSession, Request url = "https:// WORKLOAD FQDN " aud = "https:// WORKLOAD FQDN " service account = ' SERVICE ACCOUNT ' client = iam credentials v1.IAMCredentialsClient () name = "projects/-/serviceAccounts/{}" .format ( service account ) id token = client.generate id token ( name = name,audience = aud, include email = True ) print ( id token.token ) creds = google.oauth2.credentials.Credentials ( id token.token ) authed session = AuthorizedSession ( creds ) r = authed session.get ( url ) print ( r.status code ) print ( r.text ) Replace the following: WORKLOAD FQDN with the FQDN for your workload.
- To create a pool using gcloud CLI , run the following: gcloud iam workload-identity-pools create cloudrun-oidc-pool \ --location = "global" \ —-description = "cloudrun-oidc" \ —-display-name = "cloudrun-oidc" Create a workload identity pool provider for OpenID Connect: gcloud iam workload-identity-pools providers create-oidc cloud-run-provider \ --workload-identity-pool = "cloudrun-oidc-pool" \ --issuer-uri = " VAR LINK TO ENDPOINT " \ --location = "global" \ --attribute-mapping = "google.subject=assertion.sub,attribute.isadmin-assertion.isadmin,attribute.aud=assertion.aud" \ --attribute-condition = "attribute.isadmin=='true'" Replace VAR LINK TO ENDPOINT with a variable that contains the link to the Keycloak OIDC endpoint.

### "Authenticate workloads with Google Cloud auth libraries \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/authenticate-with-auth-libraries](https://docs.cloud.google.com/iam/docs/authenticate-with-auth-libraries)
- Source ID: `site-docs-root-2`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will fetch a new token if one is not already cached. @returns {Promise<string>} A promise that resolves with the Okta Access token. / async getSubjectToken () { const isTokenValid = this . accessToken && Date . now () < this . expiryTime - 60 1000 ; if ( isTokenValid ) { return this . accessToken ; } const { accessToken , expiresIn } = await this . fetchOktaAccessToken (); this . accessToken = accessToken ; this . expiryTime = Date . now () + expiresIn 1000 ; return this . accessToken ; } / Performs the Client Credentials grant flow with Okta. / async fetchOktaAccessToken () { const params = new URLSearchParams (); params . append ( 'grant type' , 'client credentials' ); params . append ( 'scope' , 'gcp.test.read' ); const authHeader = 'Basic ' + Buffer . from ( ${ this . clientId } : ${ this . clientSecret } ). toString ( ' base64 ' ); try { const response = await this . gaxios . request ({ url : this . oktaTokenUrl , method : 'POST' , headers : { Authorization : authHeader , 'Content-Type' : 'application/x-www-form-urlencoded' , }, data : params . toString (), }); const { access token , expires in } = response . data ; if ( access token && expires in ) { return { accessToken : access token , expiresIn : expires in }; } else { throw new Error ( 'Access token or expires in not found in Okta response.' ); } } catch ( error ) { throw new Error ( Failed to authenticate with Okta: ${ error . response ? . data error . message } ); } } } / Authenticates with Google Cloud using Okta credentials and retrieves bucket metadata. @param {string} bucketName The name of the bucket to retrieve. @param {string} audience The Workload Identity Pool audience. @param {string} domain The Okta domain. @param {string} clientId The Okta client ID. @param {string} clientSecret The Okta client secret. @param {string} [impersonationUrl] Optional Service Account impersonation URL. / async function authenticateWithOktaCredentials ( bucketName , audience , domain , clientId , clientSecret , impersonationUrl ) { const oktaSupplier = new OktaClientCredentialsSupplier ( domain , clientId , clientSecret ); const authClient = new IdentityPoolClient ({ audience : audience , subject token type : 'urn:ietf:params:oauth:token-type:jwt' , token url : 'https://sts.googleapis.com/v1/token' , subject token supplier : oktaSupplier , service account impersonation url : impersonationUrl , }); const storage = new Storage ({ authClient : authClient , }); const [ metadata ] = await storage . bucket ( bucketName ). getMetadata (); return metadata ; } Python To learn how to install and use the client library for IAM, see IAM client libraries .
- Please set the AWS REGION environment variable or configure it in your /.aws/config file.' ); } return this . region ; } / Retrieves AWS security credentials using the AWS SDK's default provider chain. / async getAwsSecurityCredentials ( context ) { const awsCredentials = await this . awsCredentialsProvider (); if ( ! awsCredentials . accessKeyId ! awsCredentials . secretAccessKey ) { throw new Error ( 'Unable to resolve AWS credentials from the node provider chain. ' + 'Ensure your AWS CLI is configured, or AWS environment variables (like AWS ACCESS KEY ID) are set.' ); } return { accessKeyId : awsCredentials . accessKeyId , secretAccessKey : awsCredentials . secretAccessKey , token : awsCredentials . sessionToken , }; } } / Authenticates with Google Cloud using AWS credentials and retrieves bucket metadata. @param {string} bucketName The name of the bucket to retrieve. @param {string} audience The Workload Identity Pool audience. @param {string} [impersonationUrl] Optional Service Account impersonation URL. / async function authenticateWithAwsCredentials ( bucketName , audience , impersonationUrl ) { const customSupplier = new CustomAwsSupplier (); const clientOptions = { audience : audience , subject token type : 'urn:ietf:params:aws:token-type:aws4 request' , service account impersonation url : impersonationUrl , aws security credentials supplier : customSupplier , }; const authClient = new AwsClient ( clientOptions ); const storage = new Storage ({ authClient : authClient , }); const [ metadata ] = await storage . bucket ( bucketName ). getMetadata (); return metadata ; } Python To learn how to install and use the client library for IAM, see IAM client libraries .
- Builder credentialsBuilder = IdentityPoolCredentials . newBuilder () . setAudience ( gcpWorkloadAudience ) // This token type indicates that the subject token is a JSON Web Token (JWT). // This is required for Workload Identity Federation with an OIDC provider like Okta. . setSubjectTokenType ( "urn:ietf:params:oauth:token-type:jwt" ) . setTokenUrl ( "https://sts.googleapis.com/v1/token" ) . setSubjectTokenSupplier ( oktaSupplier ); if ( saImpersonationUrl != null ) { credentialsBuilder . setServiceAccountImpersonationUrl ( saImpersonationUrl ); } GoogleCredentials credentials = credentialsBuilder . build (); Storage storage = StorageOptions . newBuilder (). setCredentials ( credentials ). build (). getService (); return storage . get ( gcsBucketName ); } / A custom SubjectTokenSupplier that authenticates with Okta using the Client Credentials grant flow. / private static class OktaClientCredentialsSupplier implements IdentityPoolSubjectTokenSupplier { private static final long TOKEN REFRESH BUFFER SECONDS = 60 ; private final String oktaTokenUrl ; private final String clientId ; private final String clientSecret ; private String accessToken ; private Instant expiryTime ; public OktaClientCredentialsSupplier ( String domain , String clientId , String clientSecret ) { // Ensure domain doesn't have a trailing slash for cleaner URL construction String cleanedDomain = domain . endsWith ( "/" ) ? domain . substring ( 0 , domain . length () - 1 ) : domain ; this . oktaTokenUrl = cleanedDomain + "/oauth2/default/v1/token" ; this . clientId = clientId ; this . clientSecret = clientSecret ; } / Main method called by the auth library.
- This is required for AWS Workload Identity Federation. . setSubjectTokenType ( "urn:ietf:params:aws:token-type:aws4 request" ) . setAwsSecurityCredentialsSupplier ( customSupplier ); if ( saImpersonationUrl != null ) { credentialsBuilder . setServiceAccountImpersonationUrl ( saImpersonationUrl ); } GoogleCredentials credentials = credentialsBuilder . build (); Storage storage = StorageOptions . newBuilder (). setCredentials ( credentials ). build (). getService (); return storage . get ( gcsBucketName ); } / Custom AWS Security Credentials Supplier. <p>This implementation resolves AWS credentials and regions using the default provider chains from the AWS SDK (v2).

### "Example logs for Workload Identity Federation \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity)
- Source ID: `site-docs-root-2`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Workload Identity Federation, the pertinent log entry looks similar to the following: "keyInfo": [ { "certificateType": "trust anchor" "timeUntilExpiration": 3333405600s "fingerprintSha256": "e33f612a0e426692f29db2c7b17b9e3810ce13f09ad117c67e7227a84fd25ea5" "use": "verify" } This output includes the following values: certificateType : the type of certificate involved in the client certificate verification, which can be either trust anchor or intermediate ca timeUntilExpiration : the remaining time in seconds until certificate expiration when it's used in the certificate chain verification fingerprintSha256 : the hexadecimal representation of the SHA-256 hash of the X.509 certificate Logs for creating short-lived credentials for a service account After you exchange the IdP token for a federated token, you can use the federated token to create short-lived credentials for a service account.
- For Workload Identity Federation, the pertinent log entry looks similar to the following: "keyInfo": [ { "use": "verify" "fingerprint": "3C:B2:47:F8:A5:9A:8A:52:BD:1C:BC:96:B5:45:C1:8D:A7:F1:73:2D" }, { "use": "decrypt" "resourceName": "//iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ WORKLOAD POOL NAME /providers/ PROVIDER NAME /keys/ KEY NAME " } ] This output includes the following values: fingerprint : the hexadecimal representation of the SHA-256 hash of the X.509 certificate that was used to verify the signature on the SAML credential.
- Home Documentation Security IAM Guides Send feedback Example logs for Workload Identity Federation Stay organized with collections Save and categorize content based on your preferences.
- In this example, the request was authenticated with federated credentials, and the short-lived credentials were created for the service account my-service-account@my-project.iam.gserviceaccount.com : { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "principal://iam.googleapis.com/projects/1234567890123/locations/global/workloadIdentityPools/aws-pool/subject/012345678901" }, "methodName" : "GenerateAccessToken" , "request" : { "@type" : "type.googleapis.com/google.iam.credentials.v1.GenerateAccessTokenRequest" , "name" : "projects/-/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com" }, "resourceName" : "projects/-/serviceAccounts/123456789012345678901" }, "resource" : { "labels" : { "email id" : "my-service-account@my-project.iam.gserviceaccount.com" , "project id" : "my-project" , "unique id" : "123456789012345678901" }, "type" : "service account" } } Logs for authenticating with credentials for the impersonated service account After you create short-lived credentials for a service account, you can use the credentials to impersonate the service account when you call Google Cloud APIs.

