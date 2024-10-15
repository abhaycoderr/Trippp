export const TravelerOptions = [
    {
        id: 1,
        title: "Just Me",
        desc: "A sole travels in exploration",
        icon: "✈️",
        people: "1",
    },
    {
        id: 2,
        title: "A Couple",
        desc: "Two travelers in tandem",
        icon: "🥂",
        people: "2",
    },
    {
        id: 3,
        title: "Family",
        desc: "A group of fun loving adventure",
        icon: "🏡",
        people: "3-5",
    },
    {
        id: 4,
        title: "Friends",
        desc: "A bunch of thrill-seekers",
        icon: "🚤",
        people: "5-10",
    },
    {
        id: 5,
        title: "LGBTQ",
        desc: "Explore Your Uniqueness",
        icon: "🌈",
        people: "to be decided",
    },
    {
        id: 6,
        title: "Specially Abled",
        desc: "Refine the possibilities",
        icon: "♿",
        people: "to be decided",
    },
    {
        id: 7,
        title: "Conncted NGOs",
        desc: "Explore the world",
        icon: "🤝",
        people: "to be decided",
    },
];

export const BudgetOptions = [
    {
        id: 1,
        title: "Cheap",
        desc: "Stay Conscious of costs",
        icon: "💵",
    },
    {
        id: 2,
        title: "Moderate",
        desc: "Keep cost on average",
        icon: "💰",
    },
    {
        id: 3,
        title: "Luxury",
        desc: "Don't worry about costs",
        icon: "💸",
    },
];

export const AI_PROMPT = "Generate Travel Plan for Location: {location}, for {totalDays} Days and {totalNights} Nights for {traveler} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with place Name, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel to each of the location for {totalDays} days and {totalNights} night with each day plan with best time to visit in JSON format."