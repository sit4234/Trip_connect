import Image from "./Image";

export default function PlaceImg({ place, index = 0, className = null }) {
  if (!place.photos?.length) {
    return "You have no bookings.";
  }
  if (!className) {
    className = "object-cover rounded-xl";
  }
  return (
    <Image
      className={className}
      src={place.photos[index]}
      alt=""
    />
  );
}
