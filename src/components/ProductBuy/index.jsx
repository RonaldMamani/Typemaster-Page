import ButtonBuy from "./ButtonBuy";
import NameProduct from "./NameProduct";
import ProductImage from "./ProductImage";
import DescriptionProduct from "./DescriptionProduct";

import Product from "../../assets/mobile/image-keyboard.jpg"
import OfertTime from "./OfertTime";

export default function ProductBuy() {
    return (
        <section className="
            px-5 my-10 flex flex-col
            md:p-11 md:flex-row
            lg:px-28 lg:py-14 gap-5 lg:items-center
            ">
            <div className="flex flex-col gap-7">
                <NameProduct name="Typemaster Keyboard" />
                <DescriptionProduct textProduct="Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience." />
                <div className="flex justify-between items-center">
                    <ButtonBuy textButton="Pre-Order Now" />
                    <OfertTime textOfert="Release On 5/27" />
                </div>
            </div>
            <div>
                <ProductImage image={Product} DescriptionImg="Keyboard Typemaster"/>
            </div>
        </section>
    )
}