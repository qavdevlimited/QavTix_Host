export const PUBLISH_STATUS_TYPES = {
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED'
} as const;

export type PublishStatusType = keyof typeof PUBLISH_STATUS_TYPES;