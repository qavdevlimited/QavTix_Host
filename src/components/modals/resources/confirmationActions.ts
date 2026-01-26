export const CONFIRMATION_ACTION_TYPES = {
    PUBLISH_EVENT: 'PUBLISH_EVENT',
    DELETE_COLLABORATOR: 'DELETE_COLLABORATOR',
    REACTIVATE_USER: 'REACTIVATE_USER',
} as const;

export type ConfirmationActionType = keyof typeof CONFIRMATION_ACTION_TYPES;

export const getConfirmationAction = (type: ConfirmationActionType, router: any) => {
    switch (type) {
        case 'PUBLISH_EVENT':
            return () => {
                console.log("Publishing...")
            }
        case 'DELETE_COLLABORATOR':
            return () => console.log("Collaborator removed")
        default:
            return () => {}
    }
}