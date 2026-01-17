export const POPUP_MESSAGE_ALERT_CONFIG = {
    verification: {
        icon: "noto:hourglass-with-flowing-sand",
        gradient: "from-blue-400 to-purple-500",
        bgColor: "bg-blue-50"
    },
    payout: {
        icon: "noto:money-bag",
        gradient: "from-green-400 to-emerald-500",
        bgColor: "bg-green-50"
    }
} as const;

export type AlertType = keyof typeof POPUP_MESSAGE_ALERT_CONFIG;

export interface PopUpMessageAlert {
    id: string;
    type: AlertType;
    title: string;
    description: string;
    subtitle?: string;
    buttonText?: string;
    buttonAction?: () => void;
}