---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.162Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "Google Cloud Channel Services API generally available"
feature_slug: "google-cloud-channel-services-api-generally-available"
latest_feature_date: "2021-01-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/access-api"
  - "https://docs.cloud.google.com/channel/docs/reference/libraries"
  - "https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers"
keywords:
  - "releases"
  - "generally"
  - "available"
  - "services"
  - "channel"
  - "api"
  - "the"
  - "in"
---

# Google Cloud Channel Services API generally available

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Releases the Google Cloud Channel Services API in general availability.

## Extended Definition

Releases the Google Cloud Channel Services API in general availability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/access-api](https://docs.cloud.google.com/channel/docs/access-api)
- [https://docs.cloud.google.com/channel/docs/reference/libraries](https://docs.cloud.google.com/channel/docs/reference/libraries)
- [https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers](https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers)

## Supporting Pages

### "Getting access to the Cloud Channel API \_|\_ Channel Services \_|\_ Google\

- URL: [https://docs.cloud.google.com/channel/docs/access-api](https://docs.cloud.google.com/channel/docs/access-api)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Technology areas Channel Services Guides Send feedback Getting access to the Cloud Channel API Stay organized with collections Save and categorize content based on your preferences.
- Next steps Learn about the Channel Services Concepts , then head to the codelabs to complete the technical initial setup to start discovering the API.
- The Cloud Channel API is intended for developers and service integrators who want to write applications that manage resold customers, and place or manage orders for Google products on their behalf.
- Before you can use the Cloud Channel API, you must complete the following steps.

### "Cloud Channel API client libraries \_|\_ Channel Services \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/channel/docs/reference/libraries](https://docs.cloud.google.com/channel/docs/reference/libraries)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Println ( "The API call worked!" ) } } Java import com.google.api.gax.core.FixedCredentialsProvider ; import com.google.api.gax.longrunning.OperationFuture ; import com.google.auth.oauth2.GoogleCredentials ; import com.google.auth.oauth2.ServiceAccountCredentials ; import com.google.cloud.channel.v1.CheckCloudIdentityAccountsExistRequest ; import com.google.cloud.channel.v1.CheckCloudIdentityAccountsExistResponse ; import com.google.cloud.channel.v1.CloudChannelServiceClient ; import com.google.cloud.channel.v1.CloudChannelServiceSettings ; import java.io.FileInputStream ; import java.io.IOException ; import java.util.Iterator ; public class Codelab { public static void main ( String [] args ) throws IOException { // Set up credentials with user impersonation String jsonKeyFile = System . getenv ( "GOOGLE APPLICATION CREDENTIALS" ); String resellerAdminUser = System . getenv ( "GOOGLE RESELLER ADMIN USER" ); FileInputStream jsonKeyFileSteam = new FileInputStream ( jsonKeyFile ); GoogleCredentials credentials = ServiceAccountCredentials . fromStream ( jsonKeyFileSteam ) . createScoped ( "https://www.googleapis.com/auth/apps.order" ) . createDelegated ( resellerAdminUser ); CloudChannelServiceSettings serviceSettings = CloudChannelServiceSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( credentials )) . build (); // Create the API client CloudChannelServiceClient client = CloudChannelServiceClient . create ( serviceSettings ); // Test the client String accountId = System . getenv ( "GOOGLE RESELLER ACCOUNT ID" ); CheckCloudIdentityAccountsExistRequest request = CheckCloudIdentityAccountsExistRequest . newBuilder () . setParent ( "accounts/" + accountId ) . setDomain ( "example.com" ) . build (); CheckCloudIdentityAccountsExistResponse response = client . checkCloudIdentityAccountsExist ( request ); System . out . println ( "The API call worked!" ); } } Node.js const { JWT } = require ( 'google-auth-library' ); const { grpc } = require ( 'google-gax' ); const { CloudChannelServiceClient } = require ( '@google-cloud/channel' ); async function main () { // Set up credentials with user impersonation const jsonKeyFile = process . env .
- GOOGLE RESELLER ACCOUNT ID ; const [ cloudIdentityAccounts ] = await client . checkCloudIdentityAccountsExist ({ parent : accounts/ ${ accountId } , domain : 'example.com' , }); console . log ( 'The API call worked!' ); } main (). catch ( err = > { console . error ( err . message ); process . exitCode = 1 ; }); process . on ( 'unhandledRejection' , err = > { console . error ( err . message ); process . exitCode = 1 ; }); PHP < ?php require 'vendor/autoload.php'; use Google\Auth\Credentials\ServiceAccountCredentials; use Google\Cloud\Channel; // Set up credentials with user impersonation $credentials = new ServiceAccountCredentials( 'https://www.googleapis.com/auth/apps.order', / $scope / getenv('GOOGLE APPLICATION CREDENTIALS'), / $keyFile / getenv('GOOGLE RESELLER ADMIN USER') / $sub / ); // Create the API client $client = new Channel\V1\CloudChannelServiceClient([ 'credentials' => $credentials ]); // Test the client $accountId = getenv('GOOGLE RESELLER ACCOUNT ID'); $client->checkCloudIdentityAccountsExist( 'accounts/' . $accountId / parent /, 'example.com' / domain / ); print 'The API call worked!' .
- GOOGLE RESELLER ADMIN USER ; const authClient = new JWT ({ keyFile : jsonKeyFile , scopes : [ 'https://www.googleapis.com/auth/apps.order' ], subject : resellerAdminUser , }); const sslCreds = grpc . credentials . combineChannelCredentials ( grpc . credentials . createSsl (), grpc . credentials . createFromGoogleCredential ( authClient ) ); // Create the API client const client = new CloudChannelServiceClient ({ sslCreds }); // Test the client const accountId = process . env .
- WriteLine ( "The API call worked!); } } Go package main import ( "context" "fmt" "os" channel "cloud.google.com/go/channel/apiv1" "golang.org/x/oauth2/google" "google.golang.org/api/option" channelpb "google.golang.org/genproto/googleapis/cloud/channel/v1" ) func main () { ctx := context .

### "Set up a customer filter using the ListCustomers API \_|\_ Channel Services\

- URL: [https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers](https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Technology areas Channel Services Guides Send feedback Set up a customer filter using the ListCustomers API Stay organized with collections Save and categorize content based on your preferences.
- Syntax: <domain org display name> : <value> Example: domain : "uw.com " AND org display name : "prefix " Examples of filters with logical operators Cloud Channel API filters support the use of AND and OR logical operators.
- External Search Key Exact match support Prefix support domain Yes Yes org display name Yes Yes cloud identity id Yes No channel partner id Yes No You can find the complete filter syntax in the API filtering guide .
- If you need to find information about a specific customer, you can use the Cloud Channel API filter parameter through the customers.list method .

