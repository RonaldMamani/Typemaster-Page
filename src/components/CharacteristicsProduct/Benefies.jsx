import Image from "./Image";
import PrincipalBenefies from "./PrincipalBenefies";
import TextBenefies from "./TextBenefies";

export default function Benefies({ImageBenefie, TextPrincipal, Text, DescritionBenefie}) {
    return (
        <div className="
            text-center p-4
            flex flex-col gap-5
            md:text-start
            lg:
            ">
            <Image Img={ImageBenefie} Benefie={DescritionBenefie} />
            <PrincipalBenefies Principal={TextPrincipal} />
            <TextBenefies text={Text} />
        </div>
    )
}