import DescriptionObject from "./DescriptionObject";
import NameProduct from "./NameProduct";
import ProductImg1 from "./ProductImg1";
import ProductImg2 from "./ProductImg2";

import Image1 from "../../assets/desktop/image-phone-and-keyboard.jpg"
import Image2 from "../../assets/desktop/image-glass-and-keyboard.jpg"

export default function ProductSecundary() {
    return (
        <section className="
            grid grid-cols-3 gap-4
            my-5 p-4
            md:p-11
            lg:grid-cols-5 lg:px-40 lg:py-14 lg:items-center
            ">
            <ProductImg1 imgProduct={Image1} imgDescription="Keyboard Mechanical" />
            <div className="
                col-span-2
                ">
                <ProductImg2 imgProduct={Image2} imgDescription="Keyboard Mechanical Wireless" />
            </div>
            <div className="
                col-span-3
                flex flex-col mt-5 gap-4
                md:flex-row items-center md:gap-10
                lg:col-span-2 lg:flex-col lg:mt-0 lg:p-8 lg:gap-8
                ">
                <NameProduct name="Mechanical Wireless Keyboard" />
                <DescriptionObject text="The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity." />
            </div>
        </section>
    )
}