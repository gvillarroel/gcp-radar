---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:56:59.879Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "ImportCustomer method"
feature_slug: "importcustomer-method"
latest_feature_date: "2021-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/channel/docs/guides/manage-entitlements"
  - "https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning"
  - "https://docs.cloud.google.com/channel/docs/reference/rpc"
keywords:
  - "replacing"
  - "first"
  - "step"
  - "importcustomer"
  - "v1alpha1"
  - "transfer"
  - "method"
  - "adds"
---

# ImportCustomer method

Product: Channel Services
Coverage: MEDIUM

## Step 02 Summary

Adds the ImportCustomer API method in v1alpha1 as the first step of a transfer, replacing CreateCustomer and allowing customer data import by domain or Cloud Identity ID.

## Extended Definition

Adds the ImportCustomer API method in v1alpha1 as the first step of a transfer, replacing CreateCustomer and allowing customer data import by domain or Cloud Identity ID.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements)
- [https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning](https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning)
- [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)

## Supporting Pages

### "Manage Google Workspace and Google Chrome entitlements \_|\_ Channel Services\

- URL: [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- QueryEligibleBillingAccountsRequest { "customer" : "accounts/123/customers/abc" , "skus" : [ "products/product id/skus/voice sku id1" , "products/product id/skus/google workspace sku id2" , "google workspace chrome sku id3" ] } QueryEligibleBillingAccountsResponse { "skuPurchaseGroups" : [ { "skus" : [ "products/product id/skus/voice sku id1" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/voice billing account id1" , "displayName" : "Google Workspace Voice USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } } ] }, { "skus" : [ "products/product id/skus/google workspace sku id2" , "google workspace chrome sku id3" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/gw billing account id1" , "displayName" : "Google Workspace USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } }, { "billingAccount" : { "name" : "accounts/123/billingAccounts/gw billing account id2" , "displayName" : "Google Workspace CAD CA 1" , "currencyCode" : "CAD" , "regionCode" : "CA" } } ] } ] } ``` For each TransferableSku and BillingAccount pairs, use the listTransferableOffers method to find available TransferableOffers .
- To create entitlement, follow these steps: With the Customer name, call listPurchasableSkus to retrieve a list of PurchasableSkus ListPurchasableSkusRequest { "customer": "accounts/123/customers/abc", "createEntitlementPurchase": { "product": "products/-" } } ListPurchasableSkusResponse { "purchasableSkus": [ { "sku": { "name": "products/product id/skus/sku id1", "product": { "name": "products/product id", } } }, { "sku": { "name": "products/product id/skus/sku id2", "product": { "name": "products/product id", }, } } ] } With the selected PurchasableSku, use the queryEligibleBillingAccounts method to find a set of Google Workspace BillingAccount that can be used to pay for the entitlement.
- ImportCustomerRequest { "parent": "accounts/abc", "domain": "domain" } With the customer's Cloud Identity ID, call listTransferableSkus to retrieve a list of the customer's transferableSku Check each object's transferEligibility to make sure you can purchase the associated SKU.
- To change payment plan on Google Workspace entitlements, follow these steps: The first two steps are only required if the existing Entitlement has a Free or Trial payment plan.

### "Codelab: Provisioning Google Workspace \_|\_ Channel Services \_|\_ Google\

- URL: [https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning](https://docs.cloud.google.com/channel/docs/codelabs/workspace/provisioning)
- Source ID: `site-api-reference`
- Final score: 89
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Format ( entitlement )) return entitlement } Java // Licensed under the Apache License, Version 2.0 (the "License"); // you may not use this file except in compliance with the License. // You may obtain a copy of the License at // // https://www.apache.org/licenses/LICENSE-2.0 // // Unless required by applicable law or agreed to in writing, software // distributed under the License is distributed on an "AS IS" BASIS, // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. // See the License for the specific language governing permissions and // limitations under the License. // // Instructions for this codelab can be found on this page // https://cloud.google.com/channel/docs/codelabs/workspace/provisioning import com.google.api.gax.core.FixedCredentialsProvider ; import com.google.api.gax.longrunning.OperationFuture ; import com.google.auth.oauth2.GoogleCredentials ; import com.google.auth.oauth2.ServiceAccountCredentials ; import com.google.cloud.channel.v1.AdminUser ; import com.google.cloud.channel.v1.CheckCloudIdentityAccountsExistRequest ; import com.google.cloud.channel.v1.CheckCloudIdentityAccountsExistResponse ; import com.google.cloud.channel.v1.CloudChannelServiceClient ; import com.google.cloud.channel.v1.CloudChannelServiceSettings ; import com.google.cloud.channel.v1.CloudIdentityInfo ; import com.google.cloud.channel.v1.CommitmentSettings ; import com.google.cloud.channel.v1.CreateCustomerRequest ; import com.google.cloud.channel.v1.CreateEntitlementRequest ; import com.google.cloud.channel.v1.Customer ; import com.google.cloud.channel.v1.Entitlement ; import com.google.cloud.channel.v1.ListOffersRequest ; import com.google.cloud.channel.v1.Offer ; import com.google.cloud.channel.v1.OperationMetadata ; import com.google.cloud.channel.v1.Parameter ; import com.google.cloud.channel.v1.PaymentPlan ; import com.google.cloud.channel.v1.Period ; import com.google.cloud.channel.v1.PeriodType ; import com.google.cloud.channel.v1.ProvisionCloudIdentityRequest ; import com.google.cloud.channel.v1.RenewalSettings ; import com.google.cloud.channel.v1.Value ; import com.google.gson.Gson ; import com.google.type.PostalAddress ; import java.io.FileInputStream ; import java.io.IOException ; import java.util.Iterator ; import java.util.concurrent.ExecutionException ; / This is a basic example of provisioning a Google Workspace customer. / public class Codelab { / REPLACE WITH YOUR OWN VALUES / public static final String JSON KEY FILE = "path/to/json key file.json" ; public static final String RESELLER ADMIN USER = "admin@yourresellerdomain.com" ; public static final String ACCOUNT ID = "C012345" ; public static final String CUSTOMER DOMAIN = "example.com" ; / / public static final String ACCOUNT NAME = "accounts/" + ACCOUNT ID ; private static CloudChannelServiceClient client ; private static final Gson gson = new Gson (); public static void main ( String [] args ) throws Exception , IOException , ExecutionException , InterruptedException { // Set up credentials with user impersonation FileInputStream jsonKeyFileStream = new FileInputStream ( JSON KEY FILE ); GoogleCredentials credentials = ServiceAccountCredentials . fromStream ( jsonKeyFileStream ) . createScoped ( "https://www.googleapis.com/auth/apps.order" ) . createDelegated ( RESELLER ADMIN USER ); // Create the API client CloudChannelServiceSettings serviceSettings = CloudChannelServiceSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( credentials )) . build (); client = CloudChannelServiceClient . create ( serviceSettings ); Offer selectedOffer = selectOffer (); checkExists (); Customer customer = createCustomer (); Entitlement entitlement = createEntitlement ( customer , selectedOffer ); String adminSDKCustomerId = customer . getCloudIdentityId (); System . out . println ( adminSDKCustomerId ); } private static Offer selectOffer () { ListOffersRequest request = ListOffersRequest . newBuilder (). setParent ( ACCOUNT NAME ). build (); // For the purpose of this codelab, the code lists all offers and selects // the first offer for Google Workspace Business Standard on an Annual // plan.
- OperationFuture<Entitlement , OperationMetadata > operation = client . createEntitlementAsync ( request ); // Wait for the long-running operation and get the result. entitlement = operation . get (); System . out . println ( "=== Created entitlement" ); System . out . println ( gson . toJson ( entitlement )); return entitlement ; } } Node.js // Licensed under the Apache License, Version 2.0 (the "License"); // you may not use this file except in compliance with the License. // You may obtain a copy of the License at // // https://www.apache.org/licenses/LICENSE-2.0 // // Unless required by applicable law or agreed to in writing, software // distributed under the License is distributed on an "AS IS" BASIS, // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. // See the License for the specific language governing permissions and // limitations under the License. // // Instructions for this codelab can be found on this page // https://cloud.google.com/channel/docs/codelabs/workspace/provisioning const { JWT } = require ( 'google-auth-library' ); const { grpc } = require ( 'google-gax' ); const { CloudChannelServiceClient } = require ( '@google-cloud/channel' ); // ############## REPLACE WITH YOUR OWN VALUES #################### const jsonKeyFile = 'path/to/json key file.json' ; const resellerAdminUser = 'admin@yourresellerdomain.com' ; const accountId = 'C012345' ; const customerDomain = 'example.com' ; // ################################################################ const accountName = accounts/ ${ accountId } ; // Set up credentials with user impersonation const authClient = new JWT ({ keyFile : jsonKeyFile , scopes : [ 'https://www.googleapis.com/auth/apps.order' ], subject : resellerAdminUser , }); const sslCreds = grpc . credentials . combineChannelCredentials ( grpc . credentials . createSsl (), grpc . credentials . createFromGoogleCredential ( authClient ) ); // Create the API client const client = new CloudChannelServiceClient ({ sslCreds }); async function main () { const selectedOffer = await selectOffer (); await checkExists (); const customer = await createCustomer (); const entitlement = await createEntitlement ( customer , selectedOffer ); const customerId = customer . cloudIdentityId ; console . log ( customerId ); } async function selectOffer () { const [ offers ] = await client . listOffers ({ parent : accountName , }); // For the purpose of this codelab, the code lists all offers and selects // the first offer for Google Workspace Business Standard on an Annual // plan.
- ListOffersPagedResponse response = client . listOffers ( request ); Offer selectedOffer = Offer . newBuilder (). build (); Iterator<Offer> iterator = response . iterateAll (). iterator (); while ( iterator . hasNext ()) { Offer offer = iterator . next (); String skuName = offer . getSku (). getMarketingInfo (). getDisplayName (); String offerPlan = offer . getPlan (). getPaymentPlan (). name (); if ( skuName . equals ( sampleSkuName ) && offerPlan . equals ( samplePlan )) { selectedOffer = offer ; break ; } } System . out . println ( "=== Selected offer" ); System . out . println ( gson . toJson ( selectedOffer )); return selectedOffer ; } private static void checkExists () throws Exception { // Determine if customer already has a cloud identity CheckCloudIdentityAccountsExistRequest request = CheckCloudIdentityAccountsExistRequest . newBuilder () . setParent ( ACCOUNT NAME ) . setDomain ( CUSTOMER DOMAIN ) . build (); CheckCloudIdentityAccountsExistResponse response = client . checkCloudIdentityAccountsExist ( request ); if ( response . getCloudIdentityAccountsCount () > 0 ) { throw new Exception ( "Cloud identity already exists. " + "Customer must be transferred. " + "Out of scope for this codelab" ); } } private static Customer createCustomer () throws InterruptedException , ExecutionException { // Create the Customer resource PostalAddress postalAddress = PostalAddress . newBuilder () . addAddressLines ( "1800 Amphibious Blvd" ) . setPostalCode ( "94045" ) . setRegionCode ( "US" ) . build (); CreateCustomerRequest request = CreateCustomerRequest . newBuilder () . setParent ( ACCOUNT NAME ) . setCustomer ( Customer . newBuilder () . setOrgDisplayName ( "Acme Corp" ) . setOrgPostalAddress ( postalAddress ) . setDomain ( CUSTOMER DOMAIN ) // Optional.
- Fatal ( Cloud identity already exists; customer must be transferred [out-of-scope of this codelab] ) } Java // Determine if customer already has a cloud identity CheckCloudIdentityAccountsExistRequest request = CheckCloudIdentityAccountsExistRequest . newBuilder () . setParent ( ACCOUNT NAME ) . setDomain ( CUSTOMER DOMAIN ) . build (); CheckCloudIdentityAccountsExistResponse response = client . checkCloudIdentityAccountsExist ( request ); if ( response . getCloudIdentityAccountsCount () > 0 ) { throw new Exception ( "Cloud identity already exists. " + "Customer must be transferred. " + "Out of scope for this codelab" ); } Node.js // Determine if customer already has a cloud identity const [ cloudIdentityAccounts , ] = await client . checkCloudIdentityAccountsExist ({ parent : accountName , domain : customerDomain , }); if ( cloudIdentityAccounts . length > 0 ) { throw new Error ( 'Cloud identity already exists; ' + 'customer must be transferred ' + '[out-of-scope of this codelab]' ); } PHP // Determine if customer already has a cloud identity $request = new Channel\V1\CheckCloudIdentityAccountsExistsRequest([ 'parent' => $ACCOUNT NAME, 'domain' => $CUSTOMER DOMAIN, ]); $response = $client->checkCloudIdentityAccountsExist($request); if (count($response->getCloudIdentityAccounts()) > 0) { throw new Error('Cloud identity already exists; \ customer must be transferred \ [out-of-scope of this codelab]' ); } Python Determine if customer already has a cloud identity request = channel .

### Cloud Channel API \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RunReportJob (deprecated) Begins generation of data for a given report. google.cloud.channel.v1alpha1.CloudChannelService Methods ActivateEntitlement Activates a previously suspended entitlement.
- ImportCustomer Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call.
- ImportCustomer Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call.
- RunReportJob (deprecated) Begins generation of data for a given report. google.cloud.channel.v1.CloudChannelService Methods ActivateEntitlement Activates a previously suspended entitlement.

