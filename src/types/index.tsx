
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

export interface StoreState {
    isLoggedIn: boolean;
    header: HeaderState;
    venues: WeddingVenuesState;
    venueDetails: VenueDetailsState;
}
