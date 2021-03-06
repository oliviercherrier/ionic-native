import { Cordova, Plugin } from './plugin';


declare var window;

/**
 * @name Google Analytics
 * @description
 * This plugin connects to Google's native Universal Analytics SDK
 * Prerequisites:
 * - A Cordova 3.0+ project for iOS and/or Android
 * - A Mobile App property through the Google Analytics Admin Console
 * - (Android) Google Play Services SDK installed via [Android SDK Manager](https://developer.android.com/sdk/installing/adding-packages.html)
 */
@Plugin({
  pluginName: 'GoogleAnalytics',
  plugin: 'cordova-plugin-google-analytics',
  pluginRef: 'ga',
  repo: 'https://github.com/danwilson/google-analytics-plugin',
  platforms: ['Android', 'iOS', 'Browser']
})
export class GoogleAnalytics {
  /**
   * In your 'deviceready' handler, set up your Analytics tracker.
   * https://developers.google.com/analytics/devguides/collection/analyticsjs/
   * @param {string}  id  Your Google Analytics Mobile App property
   * @return {Promise<any>}
   */
  @Cordova()
  static startTrackerWithId(id: string): Promise<any> { return; }

  /**
   * Enabling Advertising Features in Google Analytics allows you to take advantage of Remarketing, Demographics & Interests reports, and more
   * @param allow {boolean}
   * @return {Promise<any>}
   */
  @Cordova()
  static setAllowIDFACollection(allow: boolean): Promise<any> { return; }

  /**
   * Set a UserId
   * https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id
   * @param {string} id User ID
   * @return {Promise<any>}
   */
  @Cordova()
  static setUserId(id: string): Promise<any> { return; }

  /**
   * Set a anonymize Ip address
   * @param anonymize {boolean} Set to true to anonymize the IP Address
   * @return {Promise<any>}
   */
  @Cordova()
  static setAnonymizeIp(anonymize: boolean): Promise<any> { return; }

  /**
   * Sets the app version
   * @param appVersion {string} App version
   * @return {Promise<any>}
   */
  @Cordova()
  static setAppVersion(appVersion: string): Promise<any> { return; }

  /**
   * Set OptOut
   * @param optout {boolean}
   * @return {Promise<any>}
   */
  @Cordova()
  static setOptOut(optout: boolean): Promise<any> { return; }

  /**
   * Enable verbose logging
   * @return {Promise<any>}
   */
  @Cordova()
  static debugMode(): Promise<any> { return; }

  /**
   * Track custom metric
   * @param key {string}
   * @param value {any}
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3
  })
  static trackMetric(key: string, value?: any): Promise<any> { return; }

  /**
   * Track a screen
   * https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
   *
   * @param title {string} Screen title
   * @param campaignUrl {string} Campaign url for measuring referrals
   * @param newSession {boolean} Set to true to create a new session
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 3,
    errorIndex: 4
  })
  static trackView(title: string, campaignUrl?: string, newSession?: boolean): Promise<any> { return; }

  /**
   * Add a Custom Dimension
   * https://developers.google.com/analytics/devguides/platform/customdimsmets
   * @param key {string}
   * @param value {string}
   * @return {Promise<any>}
   */
  @Cordova()
  static addCustomDimension(key: number, value: string): Promise<any> { return; }

  /**
   * Track an event
   * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
   * @param category {string}
   * @param action {string}
   * @param label {string}
   * @param value {number}
   * @param newSession {boolean} Set to true to create a new session
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 5,
    errorIndex: 6
  })
  static trackEvent(category: string, action: string, label?: string, value?: number, newSession?: boolean): Promise<any> { return; }

  /**
   * Track an exception
   * @param description {string}
   * @param fatal {boolean}
   * @return {Promise<any>}
   */
  @Cordova()
  static trackException(description: string, fatal: boolean): Promise<any> { return; }

  /**
   * Track User Timing (App Speed)
   * @param category {string}
   * @param intervalInMilliseconds {number}
   * @param variable {string}
   * @param label {string}
   * @return {Promise<any>}
   */
  @Cordova()
  static trackTiming(category: string, intervalInMilliseconds: number, variable: string, label: string): Promise<any> { return; }

  /**
   * Add a Transaction (Ecommerce)
   * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addTrans
   * @param id {string}
   * @param affiliation {string}
   * @param revenue {number}
   * @param tax {number}
   * @param shipping {number}
   * @param currencyCode {string}
   * @return {Promise<any>}
   */
  @Cordova()
  static addTransaction(id: string, affiliation: string, revenue: number, tax: number, shipping: number, currencyCode: string): Promise<any> { return; }

  /**
   * Add a Transaction Item (Ecommerce)
   * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addItem
   * @param {string}  id
   * @param {string}  name
   * @param {string}  sku
   * @param {string}  category
   * @param {number}  price
   * @param {number}  quantity
   * @param {string}  currencyCode
   * @return {Promise<any>}
   */
  @Cordova()
  static addTransactionItem(id: string, name: string, sku: string, category: string, price: number, quantity: number, currencyCode: string): Promise<any> { return; }

  /**
   * Enable/disable automatic reporting of uncaught exceptions
   * @param shouldEnable {boolean}
   * @return {Promise<any>}
   */
  @Cordova()
  static enableUncaughtExceptionReporting(shouldEnable: boolean): Promise<any> { return; }
}
