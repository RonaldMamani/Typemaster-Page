import DescriptionObject from "./DescriptionObject";
import NameProduct from "./NameProduct";
import ProductImg1 from "./ProductImg1";
import ProductImg2 from "./ProductImg2";

import Image1 from "../../assets/mobile/image-phone-and-keyboard.jpg"
import Image2 from "../../assets/mobile/image-glass-and-keyboard.jpg"

export default function ProductSecundary() {
    return (
        <section className="
            grid grid-cols-3 gap-4
            my-5 p-4
            lg:grid-cols-5 lg:px-28 lg:py-14 lg:items-center
            ">
            <div className="">
                <ProductImg1 imgProduct={Image1} imgDescription="Keyboard Mechanical" />
            </div>
            <div className="
                col-span-2
                ">
                <ProductImg2 imgProduct={Image2} imgDescription="Keyboard Mechanical Wireless" />
            </div>
            <div className="
                col-span-3
                flex flex-col mt-5 gap-4
                md:flex-row items-center
                lg:col-span-2 lg:flex-col lg:mt-0 lg:p-7 lg:gap-9
                ">
                <NameProduct name="Mechanical Wireless Keyboard" />
                <DescriptionObject text="The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity." />
            </div>
        </section>
    )
}