import Copy from "./Copy";
import NameLogo from "./NameLogo";

export default function Footer() {
    return (
        <footer className="
            flex justify-center gap-1 text-slate-500 py-5
            md:py-10
            lg:pb-12
            ">
            <NameLogo Name="Typemaster 2023" />
            <span>|</span>
            <Copy children="All Rights Reserved" />
        </footer>
    )
}