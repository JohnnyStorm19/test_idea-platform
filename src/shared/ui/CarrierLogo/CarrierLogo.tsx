import { getImagePath } from "../../lib";

interface CarrierLogoProps {
  carrier: string;
}

export const CarrierLogo = ({ carrier }: CarrierLogoProps) => {
  const image_path = getImagePath(carrier);
  return (
    <div className="w-44">
      <img src={image_path} alt="" className="w-full" />
    </div>
  );
};
