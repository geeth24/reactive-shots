interface Image {
    asset: {
        url: string
    }
}

export interface Location {
    _id: string
    name: string
}

export interface Client {
    _id: string
    firstName: string
    lastName: string
    instagram: string
    slug: {
        current: string
    }
}

export interface Portraits {
    _id: string
    portraitName: string
    date: string
    slug: {
        current: string
    }
    location: Location
    client: Client
    portrait: Image
}

export interface Landscapes {
    _id: string
    landscapeName: string
    date: string
    location: Location
    landscape: Image
}

export interface Cars {
    _id: string
    carName: string
    carModelYear: string
    date: string
    client: Client
    car: Image
}

export interface Events {
    _id: string
    eventName: string
    date: string
    event: Image
}

export interface Hero {
    _id: string
    order: number
    heroImage: Image
}
