import Benefies from "./Benefies";

import Computer from "../../assets/shared/icon-compatible.svg"
import Battery from "../../assets/shared/icon-battery.svg"
import Bluetooth from "../../assets/shared/icon-bluetooth.svg"
import Light from "../../assets/shared/icon-light.svg"

export default function CharacteristicsProduct() {
    return (
        <section className="
            my-16 flex flex-col gap-8
            md:grid md:grid-cols-2 md:p-6
            lg:px-40 lg:grid-cols-4 lg:gap-2
            ">
            <Benefies
                ImageBenefie={Computer} 
                TextPrincipal="HIGHLY COMPATIBLE" 
                Text="Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed." 
                DescritionBenefie="Icon Desktop" 
            />
            <Benefies
                ImageBenefie={Bluetooth} 
                TextPrincipal="WIRELESS WITH BLUETOOTH" 
                Text="Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer." 
                DescritionBenefie="Icon Bluetooth" 
            />
            <Benefies
                ImageBenefie={Battery} 
                TextPrincipal="HIGH CAPACITY BATTERY" 
                Text="Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges." 
                DescritionBenefie="Icon Battery" 
            />
            <Benefies
                ImageBenefie={Light} 
                TextPrincipal="RGB BACKLIT MODES" 
                Text="Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions." 
                DescritionBenefie="Icon Light" 
            />
        </section>
    )
}