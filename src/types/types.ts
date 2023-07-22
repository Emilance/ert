export interface HouseType {
    apartment: string;
    images: string[];
    amount: string;
    location: string;
    about: string;
    features: string[];
    mainFeatures: {
      light: boolean;
      school: boolean;
      carPack: boolean;
    };

}

export interface HouseListProps {
houses: HouseType[];
}
export interface  FavHouseListProps {
  favHouses: HouseType[];
}


export type logInDetailsType = {
  email: string
  password: string,
}