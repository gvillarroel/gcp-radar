---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.372Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN Signed URL prefix authorization"
feature_slug: "cloud-cdn-signed-url-prefix-authorization"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/using-signed-urls"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/using-signed-cookies"
keywords:
  - "authorizing"
  - "extends"
  - "authorization"
  - "prefix"
  - "signed"
  - "allow"
---

# Cloud CDN Signed URL prefix authorization

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN extends signed URL support to allow authorizing a URL prefix as an alternative signing scheme.

## Extended Definition

Cloud CDN extends signed URL support to allow authorizing a URL prefix as an alternative signing scheme.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies)

## Supporting Pages

### Use signed URLs \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go import ( "crypto/hmac" "crypto/sha1" "encoding/base64" "fmt" "io" "io/ioutil" "os" "strings" "time" ) // SignURLWithPrefix creates a signed URL prefix for an endpoint on Cloud CDN. // Prefixes allow access to any URL with the same prefix, and can be useful for // granting access broader content without signing multiple URLs. // // - urlPrefix must start with "https://" and should not include query parameters. // - key should be in raw form (not base64url-encoded) which is 16-bytes long. // - keyName must match a key added to the backend service or bucket. func signURLWithPrefix ( urlPrefix , keyName string , key [] byte , expiration time .
- Signed URLs also support an optional URLPrefix parameter, allowing you to provide access to multiple URLs based on a common prefix.
- Returns: Returns the Signed URL appended with the query parameters based on the specified configuration. """ stripped url = url . strip () parsed url = urlsplit ( stripped url ) query params = parse qs ( parsed url . query , keep blank values = True ) epoch = datetime . fromtimestamp ( 0 , timezone . utc ) expiration timestamp = int (( expiration time - epoch ) . total seconds ()) decoded key = base64 . urlsafe b64decode ( base64 key ) url to sign = f " { stripped url }{ '&' if query params else '?' } Expires= { expiration timestamp } & KeyName= { key name } " digest = hmac . new ( decoded key , url to sign . encode ( "utf-8" ), hashlib . sha1 ) . digest () signature = base64 . urlsafe b64encode ( digest ) . decode ( "utf-8" ) return f " { url to sign } & Signature= { signature } " PHP / Decodes base64url (RFC4648 Section 5) string @param string $input base64url encoded string @return string / function base64url decode($input) { $input .= str repeat('=', (4 - strlen($input) % 4) % 4); return base64 decode(strtr($input, '- ', '+/'), true); } / Encodes a string with base64url (RFC4648 Section 5) Keeps the '=' padding by default. @param string $input String to be encoded @param bool $padding Keep the '=' padding @return string / function base64url encode($input, $padding = true) { $output = strtr(base64 encode($input), '+/', '- '); return ($padding) ? $output : str replace('=', '', $output); } / Creates signed URL for Google Cloud CDN Details about order of operations: https://cloud.google.com/cdn/docs/using-signed-urls#creating signed urls Example function invocation (In production store the key safely with other secrets): <?php $base64UrlKey = 'wpLL7f4VB9RNe WI0BBGmA=='; // head -c 16 /dev/urandom base64 tr +/ - $signedUrl = sign url('https://example.com/foo', 'my-key', $base64UrlKey, time() + 1800); echo $signedUrl; ? > @param string $url URL of the endpoint served by Cloud CDN @param string $keyName Name of the signing key added to the Google Cloud Storage bucket or service @param string $base64UrlKey Signing key as base64url (RFC4648 Section 5) encoded string @param int $expirationTime Expiration time as a UNIX timestamp (GMT, e.g. time()) @return string / function sign url($url, $keyName, $base64UrlKey, $expirationTime) { // Decode the key $decodedKey = base64url decode($base64UrlKey); // Determine which separator makes sense given a URL $separator = (strpos($url, '?') === false) ? '?' : '&'; // Concatenate url with expected query parameters Expires and KeyName $url = "{$url}{$separator}Expires={$expirationTime}&KeyName={$keyName}"; // Sign the url using the key and encode the signature using base64url $signature = hash hmac('sha1', $url, $decodedKey, true); $encodedSignature = base64url encode($signature); // Concatenate the URL and encoded signature return "{$url}&Signature={$encodedSignature}"; } Programmatically create signed URLs with a URL prefix The following code samples demonstrate how to programmatically create signed URLs with a URL prefix.
- Returns: Returns the Signed URL appended with the query parameters based on the specified URL prefix and configuration. """ stripped url = url . strip () parsed url = urlsplit ( stripped url ) query params = parse qs ( parsed url . query , keep blank values = True ) encoded url prefix = base64 . urlsafe b64encode ( url prefix . strip () . encode ( "utf-8" ) ) . decode ( "utf-8" ) epoch = datetime . fromtimestamp ( 0 , timezone . utc ) expiration timestamp = int (( expiration time - epoch ) . total seconds ()) decoded key = base64 . urlsafe b64decode ( base64 key ) policy = f "URLPrefix= { encoded url prefix } & Expires= { expiration timestamp } & KeyName= { key name } " digest = hmac . new ( decoded key , policy . encode ( "utf-8" ), hashlib . sha1 ) . digest () signature = base64 . urlsafe b64encode ( digest ) . decode ( "utf-8" ) return f " { stripped url }{ '&' if query params else '?' }{ policy } & Signature= { signature } " Generate custom signed URLs When you write your own code to generate signed URLs, your goal is to create URLs with the following format or algorithm; all URL parameters are case-sensitive and must be in the order shown: https://example.com/foo?Expires= EXPIRATION &KeyName= KEY NAME &Signature= SIGNATURE To generate signed URLs, follow these steps: Ensure that the URL for signing does not have a Signature query parameter.

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Can be BACKEND SERVICE , BACKEND BUCKET , UNKNOWN if the backend wasn't assigned, or NO BACKEND SELECTED if an error or interruption occurred before a backend was selected, a URL redirect occurred, or a classic Application Load Balancer with serverless backends returned a 200 OK response. matched url path rule The URL map path rule that matched the prefix of the HTTP(S) request (up to 50 characters). forwarding rule name The name of the forwarding rule used by the client to send the request. url map name The URL map path rule or route rule configured as part of the URL map key.
- No DENY policy matches the request and the request is allowed. authz info.policies[].result enum The result can be ALLOWED or DENIED . authz info.policies[].details string The details include the following: allowed as no deny policies matched request denied as no allow policies matched request denied by authz extension denied by cloud iap authz info.overall result enum The result can be ALLOWED or DENIED .
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.
- UNKNOWN is returned if the backend wasn't assigned, or NO BACKEND SELECTED if an error or interruption occurred before a backend was selected, a URL redirect occurred, or a classic Application Load Balancer with serverless backends returned a 200 OK response. backend scope type The type of the scope of the backend group.

### Use signed cookies \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies)
- Source ID: `site-docs-root-2`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- String signedCookie = signCookie ( urlPrefix , keyBytes , keyName , expirationTime ); System . out . println ( signedCookie ); } // Creates a signed cookie for the specified policy. public static String signCookie ( String urlPrefix , byte [] key , String keyName , long expirationTime ) throws InvalidKeyException , NoSuchAlgorithmException { // Validate input URL prefix. try { URL validatedUrlPrefix = new URL ( urlPrefix ); if ( ! validatedUrlPrefix . getProtocol (). startsWith ( "http" )) { throw new IllegalArgumentException ( "urlPrefix must start with either http:// or https://: " + urlPrefix ); } if ( validatedUrlPrefix . getQuery () != null ) { throw new IllegalArgumentException ( "urlPrefix must not include query params: " + urlPrefix ); } } catch ( MalformedURLException e ) { throw new IllegalArgumentException ( "urlPrefix malformed: " + urlPrefix ); } String encodedUrlPrefix = Base64 . getUrlEncoder (). encodeToString ( urlPrefix . getBytes ( StandardCharsets .
- Returns: Returns the Cloud-CDN-Cookie value based on the specified configuration. """ encoded url prefix = base64 . urlsafe b64encode ( url prefix . strip () . encode ( "utf-8" ) ) . decode ( "utf-8" ) epoch = datetime . fromtimestamp ( 0 , timezone . utc ) expiration timestamp = int (( expiration time - epoch ) . total seconds ()) decoded key = base64 . urlsafe b64decode ( base64 key ) policy = f "URLPrefix= { encoded url prefix } :Expires= { expiration timestamp } :KeyName= { key name } " digest = hmac . new ( decoded key , policy . encode ( "utf-8" ), hashlib . sha1 ) . digest () signature = base64 . urlsafe b64encode ( digest ) . decode ( "utf-8" ) signed policy = f "Cloud-CDN-Cookie= { policy } :Signature= { signature } " return signed policy Validating signed cookies The process of validating a signed cookie is essentially the same as generating a signed cookie.
- Go import ( "crypto/hmac" "crypto/sha1" "encoding/base64" "fmt" "io" "io/ioutil" "net/http" "os" "time" ) // signCookie creates a signed cookie for an endpoint served by Cloud CDN. // // - urlPrefix must start with "https://" and should include the path prefix // for which the cookie will authorize access to. // - key should be in raw form (not base64url-encoded) which is // 16-bytes long. // - keyName must match a key added to the backend service or bucket. func signCookie ( urlPrefix , keyName string , key [] byte , expiration time .
- For example, suppose you want to validate the following signed cookie header: Cookie: Cloud-CDN-Cookie=URLPrefix= URL PREFIX :Expires= EXPIRATION :KeyName= KEY NAME :Signature= SIGNATURE ; Domain=media.example.com; Path=/; Expires=Tue, 20 Aug 2019 02:26:49 GMT; HttpOnly You can use the secret key named by KEY NAME to independently generate the signature and then validate that it matches SIGNATURE .

