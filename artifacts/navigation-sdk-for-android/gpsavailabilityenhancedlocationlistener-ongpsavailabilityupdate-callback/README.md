# GpsAvailabilityEnhancedLocationListener.onGpsAvailabilityUpdate callback

Product: Navigation SDK for Android
Feature slug: `gpsavailabilityenhancedlocationlistener-ongpsavailabilityupdate-callback`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The onGpsAvailabilityUpdate callback in GpsAvailabilityEnhancedLocationListener is deprecated in favor of onGpsAvailabilityChange; deprecated on 2025-10-16.

## Lifecycle

- Latest feature date: 2025-10-16
- Deprecation date: 2025-10-16
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access

## Official Evidence

- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnIndoorStateChangeListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnIndoorStateChangeListener)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowClickListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowClickListener)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowCloseListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowCloseListener)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowLongClickListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowLongClickListener)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
