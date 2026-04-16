---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.371Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN Signed Cookies"
feature_slug: "cloud-cdn-signed-cookies"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/using-signed-cookies"
  - "https://docs.cloud.google.com/cdn/docs/using-signed-urls"
  - "https://docs.cloud.google.com/cdn/docs/caching"
keywords:
  - "cookies"
  - "signing"
  - "signed"
  - "generally"
  - "allow"
  - "available"
---

# Cloud CDN Signed Cookies

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN Signed Cookies are generally available and allow signing a URL prefix and issuing cookies for protected cached content.

## Extended Definition

Cloud CDN Signed Cookies are generally available and allow signing a URL prefix and issuing cookies for protected cached content.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies)
- [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)

## Supporting Pages

### Use signed cookies \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sprintf ( "%s:Signature=%s" , input , sig , ) return signedValue , nil } Java import java.net.MalformedURLException ; import java.net.URL ; import java.nio.charset.StandardCharsets ; import java.nio.file.Files ; import java.nio.file.Paths ; import java.security.InvalidKeyException ; import java.security.Key ; import java.security.NoSuchAlgorithmException ; import java.time.ZonedDateTime ; import java.util.Base64 ; import javax.crypto.Mac ; import javax.crypto.spec.SecretKeySpec ; public class SignedCookies { public static void main ( String [] args ) throws Exception { // TODO(developer): Replace these variables before running the sample. // The name of the signing key must match a key added to the back end bucket or service.
- Signed cookies let you do the following: Authorize a user and provide them with a time-limited token for accessing your protected content (instead of signing each URL).
- Signed cookies protect access when separately signing tens or hundreds of URLs for each user isn't feasible in your application.
- Returns: Returns the Cloud-CDN-Cookie value based on the specified configuration. """ encoded url prefix = base64 . urlsafe b64encode ( url prefix . strip () . encode ( "utf-8" ) ) . decode ( "utf-8" ) epoch = datetime . fromtimestamp ( 0 , timezone . utc ) expiration timestamp = int (( expiration time - epoch ) . total seconds ()) decoded key = base64 . urlsafe b64decode ( base64 key ) policy = f "URLPrefix= { encoded url prefix } :Expires= { expiration timestamp } :KeyName= { key name } " digest = hmac . new ( decoded key , policy . encode ( "utf-8" ), hashlib . sha1 ) . digest () signature = base64 . urlsafe b64encode ( digest ) . decode ( "utf-8" ) signed policy = f "Cloud-CDN-Cookie= { policy } :Signature= { signature } " return signed policy Validating signed cookies The process of validating a signed cookie is essentially the same as generating a signed cookie.

### Use signed URLs \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ComputeHash ( buffer ); } } Java / Samples to create a signed URL for a Cloud CDN endpoint / public class SignedUrls { / Creates a signed URL for a Cloud CDN endpoint with the given key URL must start with http:// or https://, and must contain a forward slash (/) after the hostname. @param url the Cloud CDN endpoint to sign @param key url signing key uploaded to the backend service/bucket, as a 16-byte array @param keyName the name of the signing key added to the back end bucket or service @param expirationTime the date that the signed URL expires @return a properly formatted signed URL @throws InvalidKeyException when there is an error generating the signature for the input key @throws NoSuchAlgorithmException when HmacSHA1 algorithm is not available in the environment / public static String signUrl ( String url , byte [] key , String keyName , Date expirationTime ) throws InvalidKeyException , NoSuchAlgorithmException { final long unixTime = expirationTime . getTime () / 1000 ; String urlToSign = url + ( url . contains ( "?" ) ? "&" : "?" ) + "Expires=" + unixTime + "&KeyName=" + keyName ; String encoded = SignedUrls . getSignature ( key , urlToSign ); return urlToSign + "&Signature=" + encoded ; } public static String getSignature ( byte [] privateKey , String input ) throws InvalidKeyException , NoSuchAlgorithmException { final String algorithm = "HmacSHA1" ; final int offset = 0 ; Key key = new SecretKeySpec ( privateKey , offset , privateKey . length , algorithm ); Mac mac = Mac . getInstance ( algorithm ); mac . init ( key ); return Base64 . getUrlEncoder (). encodeToString ( mac . doFinal ( input . getBytes ())); } Python import argparse import base64 from datetime import datetime , timezone import hashlib import hmac from urllib.parse import parse qs , urlsplit def sign url ( url : str , key name : str , base64 key : str , expiration time : datetime , ) - > str : """Gets the Signed URL string for the specified URL and configuration.
- Go import ( "crypto/hmac" "crypto/sha1" "encoding/base64" "fmt" "io" "io/ioutil" "os" "strings" "time" ) // SignURLWithPrefix creates a signed URL prefix for an endpoint on Cloud CDN. // Prefixes allow access to any URL with the same prefix, and can be useful for // granting access broader content without signing multiple URLs. // // - urlPrefix must start with "https://" and should not include query parameters. // - key should be in raw form (not base64url-encoded) which is 16-bytes long. // - keyName must match a key added to the backend service or bucket. func signURLWithPrefix ( urlPrefix , keyName string , key [] byte , expiration time .
- Returns: Returns the Signed URL appended with the query parameters based on the specified configuration. """ stripped url = url . strip () parsed url = urlsplit ( stripped url ) query params = parse qs ( parsed url . query , keep blank values = True ) epoch = datetime . fromtimestamp ( 0 , timezone . utc ) expiration timestamp = int (( expiration time - epoch ) . total seconds ()) decoded key = base64 . urlsafe b64decode ( base64 key ) url to sign = f " { stripped url }{ '&' if query params else '?' } Expires= { expiration timestamp } & KeyName= { key name } " digest = hmac . new ( decoded key , url to sign . encode ( "utf-8" ), hashlib . sha1 ) . digest () signature = base64 . urlsafe b64encode ( digest ) . decode ( "utf-8" ) return f " { url to sign } & Signature= { signature } " PHP / Decodes base64url (RFC4648 Section 5) string @param string $input base64url encoded string @return string / function base64url decode($input) { $input .= str repeat('=', (4 - strlen($input) % 4) % 4); return base64 decode(strtr($input, '- ', '+/'), true); } / Encodes a string with base64url (RFC4648 Section 5) Keeps the '=' padding by default. @param string $input String to be encoded @param bool $padding Keep the '=' padding @return string / function base64url encode($input, $padding = true) { $output = strtr(base64 encode($input), '+/', '- '); return ($padding) ? $output : str replace('=', '', $output); } / Creates signed URL for Google Cloud CDN Details about order of operations: https://cloud.google.com/cdn/docs/using-signed-urls#creating signed urls Example function invocation (In production store the key safely with other secrets): <?php $base64UrlKey = 'wpLL7f4VB9RNe WI0BBGmA=='; // head -c 16 /dev/urandom base64 tr +/ - $signedUrl = sign url('https://example.com/foo', 'my-key', $base64UrlKey, time() + 1800); echo $signedUrl; ? > @param string $url URL of the endpoint served by Cloud CDN @param string $keyName Name of the signing key added to the Google Cloud Storage bucket or service @param string $base64UrlKey Signing key as base64url (RFC4648 Section 5) encoded string @param int $expirationTime Expiration time as a UNIX timestamp (GMT, e.g. time()) @return string / function sign url($url, $keyName, $base64UrlKey, $expirationTime) { // Decode the key $decodedKey = base64url decode($base64UrlKey); // Determine which separator makes sense given a URL $separator = (strpos($url, '?') === false) ? '?' : '&'; // Concatenate url with expected query parameters Expires and KeyName $url = "{$url}{$separator}Expires={$expirationTime}&KeyName={$keyName}"; // Sign the url using the key and encode the signature using base64url $signature = hash hmac('sha1', $url, $decodedKey, true); $encodedSignature = base64url encode($signature); // Concatenate the URL and encoded signature return "{$url}&Signature={$encodedSignature}"; } Programmatically create signed URLs with a URL prefix The following code samples demonstrate how to programmatically create signed URLs with a URL prefix.
- Sprintf ( "&Signature=%s" , sig ) return url } Ruby def signed url url :, key name :, key :, expiration : url = "URL of the endpoint served by Cloud CDN" key name = "Name of the signing key added to the Google Cloud Storage bucket or service" key = "Signing key as urlsafe base64 encoded string" expiration = Ruby Time object with expiration time require "base64" require "openssl" require "time" Decode the URL safe base64 encode key decoded key = Base64 . urlsafe decode64 key Get UTC time in seconds expiration utc = expiration . utc . to i Determine which separator makes sense given a URL separator = "?" separator = "&" if url . include? "?" Concatenate url with expected query parameters Expires and KeyName url = " #{ url }#{ separator } Expires= #{ expiration utc } & KeyName= #{ key name } " Sign the url using the key and url safe base64 encode the signature signature = OpenSSL :: HMAC . digest "SHA1" , decoded key , url encoded signature = Base64 . urlsafe encode64 signature Concatenate the URL and encoded signature signed url = " #{ url } & Signature= #{ encoded signature } " end .NET /// < summary > /// Creates signed URL for Google Cloud SDN /// More details about order of operations is here : /// < see cref = "https://cloud.google.com/cdn/docs/using-signed-urls#programmatically creating signed urls" / > /// < / summary > /// < param name = "url" > The Url to sign .

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Feature GKE ingress through backend configuration GKE gateway using GCPHTTPFilter Basic Caching (Modes/TTLs) Cache Key Customization Negative Caching Serve While Stale Dynamic Compression Signed URLs & Cookies Request Coalescing Cacheable content Cloud CDN caches responses that meet all of the requirements in this section.
- Before you set the cache mode to FORCE CACHE ALL , consider the following behaviors: For signed URLs or signed cookies , FORCE CACHE ALL overrides the maximum age specified through the Cache entry maximum age setting in the Google Cloud console or the gcloud --signed-url-cache-max-age option.
- If you are serving your static content from a different hostname from which you issue cookies, ensure that the Domain attribute of the cookie (and the Path ) attribute allows the cookie to be sent along with requests for static content.
- For example, Dynamic compression , Signed URLs and Signed cookies are managed on the backend.

