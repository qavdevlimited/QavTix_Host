
// Step 1: Basic Information
export interface BasicInformation {
    eventTitle: string;
    eventCategory: string;
    additionalTags: string[];
    eventType: 'single' | 'recurring';
    startDateTime: string | null;
    endDateTime: string | null;
    dates?: {
        startDateTime: string | null,
        endDateTime: string | null
    }[];
    locationType: 'physical' | 'online' | 'tba';
    venueName?: string;
    address?: string;
    country?: string;
    stateRegion?: string;
    city?: string;
    postalCode?: string;
    coordinates?: {
        lat: number;
        lng: number;
    }
}

export interface RecurrencePattern {
    frequency: 'daily' | 'weekly' | 'monthly';
    interval: number;
    endDate: Date;
    daysOfWeek?: number[]; // 0 = Sunday, 6 = Saturday
}

// Step 2: Details & Media
export interface DetailsMedia {
    shortDescription: string;
    fullDescription: string;
    featuredImage: File | string | null;
    additionalImages: (File | string)[];
    eventVideo?: File | string | null;
    organizerDisplayName: string;
    organizerDescription?: string;
    publicEmail: string;
    phoneNumber?: string;
    countryCode?: string;
    socialMediaLinks: SocialMediaLink[];
}

export interface SocialMediaLink {
    id: string;
    platform: string;
    url: string;
}

// Step 3: Tickets & Pricing
export interface TicketsPricing {
    ticketTypes: TicketType[];
    salesPeriod: {
        startDateTime: Date | null;
        endDateTime: Date | null;
    }
    refundPolicy: 'no_refund' | 'partial' | 'full' | 'custom';
    customRefundPercentage?: number;
}

export interface TicketType {
    id: string;
    ticketType: string;
    description?: string;
    price: number;
    currency: string;
    quantity: number;
    perPersonMax?: number;
    promoCode?: PromoCode;
}

export interface PromoCode {
    codeWord: string;
    discountAmount: number;
    discountType: 'percentage' | 'fixed';
    maximumUsers: number;
    validTill: Date | null;
}

// Step 4: Settings
export interface Settings {
    checkInSettings: {
        qrCodeEnabled: boolean;
        ageRestriction: boolean;
        minimumAge?: number;
    }
    emailNotifications: {
        orderConfirmation: boolean;
        ticketDelivery: boolean;
        reminders: boolean;
        postEventEmails: boolean;
        customizeSenderName: boolean;
        senderName?: string;
    }
    affiliateProgram: {
        enabled: boolean;
        percentageCommission?: number;
        startDate?: Date | null;
        endDate?: Date | null;
    }
    permissions: {
        collaborators: Collaborator[];
    }
}

export interface Collaborator {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: 'host' | 'collaborator';
    permissions: string[];
    status: 'active' | 'disabled' | 'pending';
}

// Step 5: Review & Publish (Read-only summary)
export interface ReviewPublish {
    status: 'draft' | 'published';
    publishedAt?: Date;
}

// Complete Event Data (All Steps Combined)
export interface EventCreationData {
    basicInformation: BasicInformation;
    detailsMedia: DetailsMedia;
    ticketsPricing: TicketsPricing;
    settings: Settings;
    reviewPublish: ReviewPublish;
}

// Step Navigation
export type StepNumber = 1 | 2 | 3 | 4 | 5;

export interface StepConfig {
    number: StepNumber;
    title: string;
    subtitle: string;
    status: 'completed' | 'in_progress' | 'pending';
}

// Form Step Props
export interface StepComponentProps {
    onNext: () => void;
    onBack: () => void;
    isFirstStep: boolean;
    isLastStep: boolean;
}

// API Response Types
export interface EventCreationResponse {
    success: boolean;
    eventId: string;
    message: string;
    event: EventCreationData;
}

export interface EventValidationError {
    field: string;
    message: string;
    step: StepNumber;
}