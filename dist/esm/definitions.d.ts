declare global {
    interface PluginRegistry {
        IntercomPlugin?: IntercomProtocol;
    }
}
export interface IntercomProtocol {
    registerIdentifiedUser(options: {
        userId?: string;
        email?: string;
    }): Promise<void>;
    registerUnidentifiedUser(): Promise<void>;
    updateUser(options: UserUpdateOptions): Promise<void>;
    logout(): Promise<void>;
    logEvent(options: {
        name: string;
        data?: any;
    }): Promise<void>;
    displayMessenger(): Promise<void>;
    displayMessageComposer(options: {
        message: string;
    }): Promise<void>;
    displayHelpCenter(): Promise<void>;
    hideMessenger(): Promise<void>;
    displayLauncher(): Promise<void>;
    hideLauncher(): Promise<void>;
    displayInAppMessages(): Promise<void>;
    hideInAppMessages(): Promise<void>;
    setUserHash(options: {
        hmac: string;
    }): Promise<void>;
    setBottomPadding(options: {
        value: string;
    }): Promise<void>;
    /**
     * Send push token to Intercom
     *
     * Only for Android
     */
    sendPushTokenToIntercom(options: RefreshedToken): Promise<void>;
    /**
     * Receive Intercom push notification
     *
     * Only for Android
     */
    receivePush(notification: PushNotificationSchema): Promise<void>;
}
export interface UserUpdateOptions {
    userId?: string;
    email?: string;
    name?: string;
    phone?: string;
    languageOverride?: string;
    customAttributes: {
        [key: string]: any;
    };
}
export interface RefreshedToken {
    value: string;
}
export interface PushNotificationSchema {
    /**
     * The notification title.
     *
     * @since 1.0.0
     */
    title?: string;
    /**
     * The notification subtitle.
     *
     * @since 1.0.0
     */
    subtitle?: string;
    /**
     * The main text payload for the notification.
     *
     * @since 1.0.0
     */
    body?: string;
    /**
     * The notification identifier.
     *
     * @since 1.0.0
     */
    id: string;
    /**
     * The number to display for the app icon badge.
     *
     * @since 1.0.0
     */
    badge?: number;
    /**
     * @since 1.0.0
     */
    notification?: any;
    /**
     * @since 1.0.0
     */
    data: any;
    /**
     * @since 1.0.0
     */
    click_action?: string;
    /**
     * @since 1.0.0
     */
    link?: string;
    /**
     * Set the group identifier for notification grouping
     *
     * Only available on Android. Works like `threadIdentifier` on iOS.
     *
     * @since 1.0.0
     */
    group?: string;
    /**
     * Designate this notification as the summary for an associated `group`.
     *
     * Only available on Android.
     *
     * @since 1.0.0
     */
    groupSummary?: boolean;
}
