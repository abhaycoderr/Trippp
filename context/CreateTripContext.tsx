import { createContext } from "react";

interface TripContextProps {
    tripData: any;
    setTripData: any;
}

export const CreateTripContext = createContext<TripContextProps | null>(null);
