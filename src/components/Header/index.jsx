import ButtonNow from "./ButtonNow";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="
            flex justify-between items-center py-4 px-4
            md:p-11
            lg:px-40 lg:py-14
            ">
            <Logo />
            <ButtonNow textButton="Pre-Order Now" />
        </header>
    )
}