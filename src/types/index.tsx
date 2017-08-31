
export interface ErrorsState {
    connectionError: string;
}

export interface HeaderState {
    isLocationsOpen: boolean;
    isLoggedIn: boolean;
}

export interface WeddingVenueFilter {
    id: number;
    name: string;
    value: number;
    children: Array<WeddingVenueFilter>;
}

export interface Price {
    minGuests: number;
    maxGuests: number;
    minPrice: number;
    maxPrice: number;
}

export interface Style {
    id: number;
    name: string;
    value: number;
}
export interface EventType {
    id: number;
    name: string;
    value: number;
}

export interface Service {
    id: number;
    name: string;
}

export interface Venue {
    id: number;
    name: string;
    city: string;
    state: string;
    image: string;
    styles: Array<Style>;
    prices: Array<Price>;
    description: string;
}

export interface WeddingVenuesState {
    filters: Array<WeddingVenueFilter>;
    venues: Array<Venue>;
    selectedFilters: Array<number>;
    isLoading: boolean;
}

export interface Contact {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    isAccountCreated: boolean;
    receiveAppointments: boolean;
    receieveInvoices: boolean;
    isPrimaryUser: boolean;
}

export interface Vendor {
    id: number;
    name: string;
    description: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    zip_code: string;
    longitude: number;
    latitude: number;
    market: string;
    catering: Array<string>;
    alcohol: Array<string>;
    is_favorite: boolean;
    is_priced: boolean;
    styles: Array<number>;
    service_type_display_names: Array<string>;
    services: Array<number>;
    amenities: Array<number>;
    special_restrictions: Array<number>;
    time_restriction_min: string;
    time_restriction_max: string;
    max_capacity: number;
    images: Array<number>;
    cost_min: number;
    cost_max: number;
    appointment_blackout_days: Array<string>;
    appointment_time_min: number;
    appointment_time_max: number;
    appointment_instructions: string;
    website: string;
    phone_number: string;
}

export type VendorsListState = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<Vendor>;
}

export interface AdminVenue {
    isWeddingVenue: boolean;
    isEventVenue: boolean;

    name: string;
    description: string;
    eventDescription: string;
    isAddressPrivate: boolean;
    state: string;
    market: string;
    region: string;
    region_2: string;
    crossRegionMarket: string;
    crossRegion: string;
    address_1: string;
    address_2: string;
    city: string;
    zipCode: string;
    styles: Array<Style>;
    eventType: Array<EventType>;
    feeDescription: string;
    feeDescriptionEvents: string;
    startTime: string;
    endTime: string;
    availabilityDescription: string;
    allocatedHours: number;
    allocatedEventHours: number;
    maxEventHours: number;
    hourExtraFee: number;
    extraHourFeeType: {
        id: number;
        name: string;
    };
    seasonAvailablility: {
        id: number;
        name: string;
    };
    onPeakMonths: Array<{
        id: number,
        name: string
    }>;
    samePeakOnEvents: boolean;
    onPeakEvents: Array<{
        id: number,
        name: string
    }>;
    salesOwner: {
        id: number;
        name: string;
    };
    onboarder: {
        id: number;
        name: string;
    };
    contacts: Array<Contact>;
    isShowVenuePricing: boolean;
    services: Array<Service>;
}

export interface AdminVenuesList {

}

export interface VenueDetailsImage {
    id: number;
    original: string;
    thumbnail: string;
    preview: string;
    credits: string;
}

export interface SimilarVenue {
    id: number;
    image: string;
    name: string;
    price: Price;
    city: string;
}

export interface WeddingVenueAmenity {
    id: number;
    name: string;
    children: Array<WeddingVenueAmenity>;
}

export interface VenueDetailsState {
    currentImageId: number;
    isLoading: boolean;
    currentImage: VenueDetailsImage;
    isContactModalOpen: boolean;
    venueId: number;
    mapUrl: string;

    latitude: number;
    longtitude: number;

    name: string;
    city: string;
    state: string;
    address: string;
    postalCode: string;
    description: string;
    timeRestrictions: string;
    weddingCost: string;
    catering: string;
    alcohol: string;

    maxCapacity: number;
    ceremony: string;
    reception: string;
    cateringOptions: string;
    alcoholOptions: string;
    rentalFees: string;
    timeRestricionOptions: string;
    amenities: Array<WeddingVenueAmenity>;
    styles: Array<Style>;
    capacities: Array<string>;
    services: Array<Service>;
    images: Array<VenueDetailsImage>;
    similarVenues: Array<SimilarVenue>;
    currentTab: number;
}

export interface VendorImage {
    id: number;
    crop_image: string;
    image: string;
    main_image: string;
    thumbnail: string;
    photo_credit: string;
    storage_url: string;
    order: string;
    is_wedding_image: boolean;
    is_event_image: boolean;
    provided_by_venue: boolean;
    description: string;

    portrait_image?: string;
    photo_source?: string;

}

export type VendorImagesState = {
    images: Array<VendorImage>;
    error: string;
}

export interface Auth {
    isLoggedIn: boolean;
    firstName?: string;
    lastName?: string;
    email?: string;
    id?: string;
    loginFailError?: string;
}

export interface StoreState {
    errors: ErrorsState;
    auth: Auth;
    isLoggedIn: boolean;
    header: HeaderState;
    venues: WeddingVenuesState;
    vendors: VendorsListState;
    venueDetails: VenueDetailsState;
    vendorImages: Array<VendorImage>;
}
