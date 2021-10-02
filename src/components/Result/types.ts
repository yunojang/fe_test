type SpaceType = "approval" | "realtime";

export interface Space {
  id: number;
  type: SpaceType;
  imageUrl: string;
  hostName: string;
  venueName: string;
  address: string;
  pricePerHour: number;
  minHour: number;
}
