export default function ButtonBuy({textButton}) {
    return (
        <button className=" 
            bg-orange-600 hover:bg-orange-300 transition-colors
            text-white uppercase font-bold rounded-lg
            py-3 px-4 
        ">{textButton}</button>
    )
}